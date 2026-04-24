import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// Admin routes
router.use(authenticate);

// GET /api/payments
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, orderId, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where: Record<string, unknown> = {};
    if (status && status !== 'all') where.status = status;
    if (orderId) where.orderId = orderId;
    if (search) {
      where.OR = [
        { stripePaymentId: { contains: String(search), mode: 'insensitive' } },
        { stripeCustomerId: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        where, skip, take: Number(limit), orderBy: { createdAt: 'desc' },
        include: { order: { select: { id: true, orderNumber: true, llcName: true, contactEmail: true } } },
      }),
      prisma.payment.count({ where }),
    ]);
    res.json({ payments, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get payments error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/payments/stats
router.get('/stats', async (_req: Request, res: Response): Promise<void> => {
  try {
    const [totalRevenue, totalPayments, successfulPayments, failedPayments] = await Promise.all([
      prisma.payment.aggregate({ where: { status: 'SUCCEEDED' }, _sum: { amount: true } }),
      prisma.payment.count(),
      prisma.payment.count({ where: { status: 'SUCCEEDED' } }),
      prisma.payment.count({ where: { status: 'FAILED' } }),
    ]);
    res.json({
      totalRevenue: totalRevenue._sum.amount || 0,
      totalPayments,
      successfulPayments,
      failedPayments,
    });
  } catch (error) {
    console.error('Get payment stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/payments/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: req.params.id },
      include: {
        order: { select: { id: true, orderNumber: true, llcName: true, contactEmail: true, contactFirstName: true, contactLastName: true } },
        invoices: true,
      },
    });
    if (!payment) { res.status(404).json({ error: 'Payment not found' }); return; }
    res.json(payment);
  } catch (error) {
    console.error('Get payment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/payments (manual payment record)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId, amount, currency, status, paymentMethod, notes } = req.body;
    const payment = await prisma.payment.create({
      data: {
        orderId,
        amount: amount || 0,
        currency: currency || 'usd',
        status: status || 'PENDING',
        paymentMethod,
        metadata: notes ? { notes } : undefined,
        paidAt: status === 'SUCCEEDED' ? new Date() : undefined,
      },
    });
    res.status(201).json(payment);
  } catch (error) {
    console.error('Create payment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/payments/:id/refund
router.post('/:id/refund', async (req: Request, res: Response): Promise<void> => {
  try {
    const { amount, reason } = req.body;
    const payment = await prisma.payment.findUnique({ where: { id: req.params.id } });
    if (!payment) { res.status(404).json({ error: 'Payment not found' }); return; }

    const refundAmount = amount || payment.amount;
    const isPartial = Number(refundAmount) < Number(payment.amount);

    const updated = await prisma.payment.update({
      where: { id: req.params.id },
      data: {
        status: isPartial ? 'PARTIALLY_REFUNDED' : 'REFUNDED',
        refundedAmount: refundAmount,
        refundReason: reason,
      },
    });
    res.json(updated);
  } catch (error) {
    console.error('Refund payment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
