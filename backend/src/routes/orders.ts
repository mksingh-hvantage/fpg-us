import { Router, Request, Response } from 'express';
import Stripe from 'stripe';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';
import { sendOrderPendingEmail, sendWelcomeEmail } from '../utils/email.js';

const router = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-03-31.basil',
});

// POST /api/orders/create-payment-intent (public)
router.post('/create-payment-intent', async (req: Request, res: Response): Promise<void> => {
  try {
    const { amount } = req.body;

    if (!amount || Number(amount) <= 0) {
      res.status(400).json({ error: 'Invalid amount' });
      return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100), // convert dollars to cents
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Create payment intent error:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// POST /api/orders (public — called from order flow)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      packageType, llcName, designator, managementMethod, state,
      filingFee, packagePrice, contactFirstName, contactLastName,
      contactEmail, contactPhone, companyAddress, members,
      agentOption, agentDetails, taxInfo,
      expeditedFiling, wantsBanking, taxConsultation, licenseInfo,
      addons, total, paymentIntentId,
    } = req.body;

    if (!packageType || !llcName || !state || !contactFirstName || !contactLastName || !contactEmail) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Sanitize decimal fields — strip non-numeric chars (e.g. "$200" → "200")
    const cleanFee = filingFee ? String(filingFee).replace(/[^0-9.]/g, '') || '0' : undefined;
    const cleanPrice = packagePrice ? String(packagePrice).replace(/[^0-9.]/g, '') || '0' : undefined;
    const cleanTotal = total != null ? String(total).replace(/[^0-9.]/g, '') || '0' : undefined;

    // Check if customer already exists
    const existingCustomer = await prisma.customer.findUnique({
      where: { email: contactEmail },
    });

    let customerId: string | undefined;
    let isNewCustomer = false;

    if (!existingCustomer) {
      const customer = await prisma.customer.create({
        data: {
          email: contactEmail,
          firstName: contactFirstName,
          lastName: contactLastName,
          phone: contactPhone || undefined,
          businessName: llcName,
          businessType: packageType,
          state,
        },
      });
      customerId = customer.id;
      isNewCustomer = true;
    } else {
      customerId = existingCustomer.id;
    }

    const order = await prisma.order.create({
      data: {
        packageType, llcName, designator, managementMethod, state,
        filingFee: cleanFee, packagePrice: cleanPrice,
        contactFirstName, contactLastName,
        contactEmail, contactPhone, companyAddress, members,
        agentOption, agentDetails, taxInfo,
        expeditedFiling: expeditedFiling ?? undefined,
        wantsBanking: wantsBanking ?? undefined,
        taxConsultation: taxConsultation ?? undefined,
        licenseInfo: licenseInfo ?? undefined,
        addons: addons ?? undefined,
        total: cleanTotal,
        customerId,
      },
    });

    // Create Payment record if Stripe payment was made
    if (paymentIntentId) {
      // Fetch receipt URL from Stripe
      let receiptUrl: string | null = null;
      let paymentMethod: string | null = null;
      try {
        const pi = await stripe.paymentIntents.retrieve(paymentIntentId, { expand: ['latest_charge'] });
        const charge = pi.latest_charge;
        if (charge && typeof charge === 'object') {
          receiptUrl = charge.receipt_url ?? null;
          paymentMethod = charge.payment_method_details?.type ?? null;
        }
      } catch (e) {
        console.error('Failed to retrieve Stripe receipt URL:', e);
      }

      await prisma.payment.create({
        data: {
          orderId: order.id,
          stripePaymentId: paymentIntentId,
          amount: cleanTotal || 0,
          currency: 'usd',
          status: 'SUCCEEDED',
          receiptUrl,
          paymentMethod,
          paidAt: new Date(),
        },
      });
    }

    // Send emails asynchronously (don't block the response)
    const orderEmailData = {
      orderNumber: order.orderNumber,
      companyName: llcName,
      packageType,
      state,
      total: cleanTotal || null,
    };

    sendOrderPendingEmail(contactEmail, orderEmailData);
    if (isNewCustomer) {
      sendWelcomeEmail(contactEmail, contactFirstName);
    }

    res.status(201).json(order);
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/orders (admin)
router.get('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    if (status && status !== 'all') where.status = status;
    if (search) {
      where.OR = [
        { llcName: { contains: String(search), mode: 'insensitive' } },
        { contactEmail: { contains: String(search), mode: 'insensitive' } },
        { contactFirstName: { contains: String(search), mode: 'insensitive' } },
        { contactLastName: { contains: String(search), mode: 'insensitive' } },
        { orderNumber: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({ where, skip, take: Number(limit), orderBy: { createdAt: 'desc' } }),
      prisma.order.count({ where }),
    ]);

    res.json({ orders, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/orders/:id (admin)
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: req.params.id },
      include: { assignedTo: { select: { id: true, fullName: true, email: true } } },
    });
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.json(order);
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/orders/:id (admin — update status/notes/assignee)
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, notes, assignedToId } = req.body;
    const data: Record<string, unknown> = {};
    if (status) data.status = status;
    if (notes !== undefined) data.notes = notes;
    if (assignedToId !== undefined) data.assignedToId = assignedToId || null;

    const order = await prisma.order.update({
      where: { id: req.params.id },
      data,
      include: { assignedTo: { select: { id: true, fullName: true, email: true } } },
    });
    res.json(order);
  } catch (error) {
    console.error('Update order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/orders/:id/assign
router.put('/:id/assign', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { assignedToId } = req.body;
    const order = await prisma.order.update({
      where: { id: req.params.id },
      data: { assignedToId: assignedToId || null },
      include: { assignedTo: { select: { id: true, fullName: true, email: true } } },
    });
    res.json(order);
  } catch (error) {
    console.error('Assign order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
