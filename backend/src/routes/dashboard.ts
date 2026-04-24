import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/dashboard/stats
router.get('/stats', authenticate, async (_req: Request, res: Response): Promise<void> => {
  try {
    const [
      totalOrders,
      pendingOrders,
      processingOrders,
      completedOrders,
      totalContacts,
      newContacts,
      totalArticles,
      publishedArticles,
      recentOrders,
      recentContacts,
    ] = await Promise.all([
      prisma.order.count(),
      prisma.order.count({ where: { status: 'PENDING' } }),
      prisma.order.count({ where: { status: 'PROCESSING' } }),
      prisma.order.count({ where: { status: 'COMPLETED' } }),
      prisma.contact.count(),
      prisma.contact.count({ where: { status: 'NEW' } }),
      prisma.article.count(),
      prisma.article.count({ where: { published: true } }),
      prisma.order.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
      prisma.contact.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
    ]);

    res.json({
      orders: { total: totalOrders, pending: pendingOrders, processing: processingOrders, completed: completedOrders },
      contacts: { total: totalContacts, new: newContacts },
      articles: { total: totalArticles, published: publishedArticles },
      recentOrders,
      recentContacts,
    });
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
