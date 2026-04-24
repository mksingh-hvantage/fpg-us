import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/customers (admin — list all customers)
router.get('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {};
    if (search) {
      where.OR = [
        { firstName: { contains: String(search), mode: 'insensitive' } },
        { lastName: { contains: String(search), mode: 'insensitive' } },
        { email: { contains: String(search), mode: 'insensitive' } },
        { businessName: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [customers, total] = await Promise.all([
      prisma.customer.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: { _count: { select: { orders: true } } },
      }),
      prisma.customer.count({ where }),
    ]);

    res.json({ customers, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get customers error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customers/:id (admin — customer detail)
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id: req.params.id },
      include: {
        orders: { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!customer) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }
    res.json(customer);
  } catch (error) {
    console.error('Get customer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/customers/:id (admin — update customer)
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, phone, businessName, businessType, state, isActive } = req.body;
    const data: Record<string, unknown> = {};
    if (firstName !== undefined) data.firstName = firstName;
    if (lastName !== undefined) data.lastName = lastName;
    if (phone !== undefined) data.phone = phone;
    if (businessName !== undefined) data.businessName = businessName;
    if (businessType !== undefined) data.businessType = businessType;
    if (state !== undefined) data.state = state;
    if (isActive !== undefined) data.isActive = isActive;

    const customer = await prisma.customer.update({
      where: { id: req.params.id },
      data,
    });
    res.json(customer);
  } catch (error) {
    console.error('Update customer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/customers/:id/toggle-active (admin)
router.put('/:id/toggle-active', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: req.params.id } });
    if (!customer) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }
    const updated = await prisma.customer.update({
      where: { id: req.params.id },
      data: { isActive: !customer.isActive },
    });
    res.json(updated);
  } catch (error) {
    console.error('Toggle customer active error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
