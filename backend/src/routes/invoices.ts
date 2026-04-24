import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.use(authenticate);

// GET /api/invoices
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where: Record<string, unknown> = {};
    if (orderId) where.orderId = orderId;
    if (search) {
      where.OR = [
        { invoiceNumber: { contains: String(search), mode: 'insensitive' } },
        { customerName: { contains: String(search), mode: 'insensitive' } },
        { customerEmail: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [invoices, total] = await Promise.all([
      prisma.invoice.findMany({
        where, skip, take: Number(limit), orderBy: { issuedAt: 'desc' },
        include: {
          order: { select: { id: true, orderNumber: true } },
          payment: { select: { id: true, status: true, amount: true } },
        },
      }),
      prisma.invoice.count({ where }),
    ]);
    res.json({ invoices, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get invoices error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/invoices/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: { id: req.params.id },
      include: {
        order: { select: { id: true, orderNumber: true, llcName: true } },
        payment: true,
      },
    });
    if (!invoice) { res.status(404).json({ error: 'Invoice not found' }); return; }
    res.json(invoice);
  } catch (error) {
    console.error('Get invoice error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/invoices (generate from order)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId, paymentId, customerName, customerEmail, items, subtotal, tax, total, notes, dueDate } = req.body;
    if (!customerName || !customerEmail || !items) {
      res.status(400).json({ error: 'customerName, customerEmail, and items are required' });
      return;
    }

    const invoice = await prisma.invoice.create({
      data: {
        orderId, paymentId, customerName, customerEmail,
        items, subtotal: subtotal || 0, tax: tax || 0, total: total || 0,
        notes, dueDate: dueDate ? new Date(dueDate) : null,
      },
    });
    res.status(201).json(invoice);
  } catch (error) {
    console.error('Create invoice error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/invoices/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = { ...req.body };
    if (data.dueDate) data.dueDate = new Date(data.dueDate);
    if (data.paidAt) data.paidAt = new Date(data.paidAt);

    const invoice = await prisma.invoice.update({ where: { id: req.params.id }, data });
    res.json(invoice);
  } catch (error) {
    console.error('Update invoice error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
