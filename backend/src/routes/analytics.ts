import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate, requireRole } from '../middleware/auth.js';

const router = Router();
router.use(authenticate, requireRole('SUPER_ADMIN', 'ADMIN'));

// GET /api/analytics/overview
router.get('/overview', async (_req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [totalOrders, newOrders, completedOrders, totalContacts, newContacts, totalRevenue] = await Promise.all([
      prisma.order.count(),
      prisma.order.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
      prisma.order.count({ where: { status: 'COMPLETED' } }),
      prisma.contact.count(),
      prisma.contact.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
      prisma.payment.aggregate({ where: { status: 'SUCCEEDED' }, _sum: { amount: true } }),
    ]);

    res.json({
      totalOrders, newOrders, completedOrders,
      totalContacts, newContacts,
      totalRevenue: totalRevenue._sum.amount || 0,
    });
  } catch (error) {
    console.error('Get analytics overview error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/analytics/revenue
router.get('/revenue', async (req: Request, res: Response): Promise<void> => {
  try {
    const { days = '30' } = req.query;
    const since = new Date(Date.now() - Number(days) * 24 * 60 * 60 * 1000);

    const payments = await prisma.payment.findMany({
      where: { status: 'SUCCEEDED', paidAt: { gte: since } },
      select: { amount: true, paidAt: true },
      orderBy: { paidAt: 'asc' },
    });

    // Group by date
    const grouped: Record<string, number> = {};
    payments.forEach((p) => {
      const date = p.paidAt?.toISOString().split('T')[0] || '';
      grouped[date] = (grouped[date] || 0) + Number(p.amount);
    });

    const data = Object.entries(grouped).map(([date, amount]) => ({ date, amount }));
    res.json(data);
  } catch (error) {
    console.error('Get revenue analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/analytics/orders
router.get('/orders', async (req: Request, res: Response): Promise<void> => {
  try {
    const { days = '30' } = req.query;
    const since = new Date(Date.now() - Number(days) * 24 * 60 * 60 * 1000);

    const orders = await prisma.order.findMany({
      where: { createdAt: { gte: since } },
      select: { createdAt: true, status: true },
      orderBy: { createdAt: 'asc' },
    });

    const grouped: Record<string, number> = {};
    orders.forEach((o) => {
      const date = o.createdAt.toISOString().split('T')[0];
      grouped[date] = (grouped[date] || 0) + 1;
    });

    const data = Object.entries(grouped).map(([date, count]) => ({ date, count }));
    res.json(data);
  } catch (error) {
    console.error('Get order analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/analytics/top-states
router.get('/top-states', async (_req: Request, res: Response): Promise<void> => {
  try {
    const orders = await prisma.order.groupBy({
      by: ['state'],
      _count: { state: true },
      orderBy: { _count: { state: 'desc' } },
      take: 10,
    });
    const data = orders.map((o) => ({ state: o.state, count: o._count.state }));
    res.json(data);
  } catch (error) {
    console.error('Get top states error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/analytics/top-packages
router.get('/top-packages', async (_req: Request, res: Response): Promise<void> => {
  try {
    const orders = await prisma.order.groupBy({
      by: ['packageType'],
      _count: { packageType: true },
      orderBy: { _count: { packageType: 'desc' } },
      take: 10,
    });
    const data = orders.map((o) => ({ packageType: o.packageType, count: o._count.packageType }));
    res.json(data);
  } catch (error) {
    console.error('Get top packages error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/analytics/conversions
router.get('/conversions', async (_req: Request, res: Response): Promise<void> => {
  try {
    const [totalContacts, convertedContacts] = await Promise.all([
      prisma.contact.count(),
      prisma.contact.count({ where: { status: 'CONVERTED' } }),
    ]);
    const rate = totalContacts > 0 ? (convertedContacts / totalContacts) * 100 : 0;
    res.json({ totalContacts, convertedContacts, conversionRate: Math.round(rate * 100) / 100 });
  } catch (error) {
    console.error('Get conversions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
