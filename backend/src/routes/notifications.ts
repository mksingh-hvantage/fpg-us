import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.use(authenticate);

// GET /api/notifications
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const user = await prisma.user.findUnique({ where: { id: req.user!.userId } });

    const where = {
      OR: [
        { targetEmail: user?.email },
        { targetRole: req.user!.role },
        { targetEmail: null, targetRole: null }, // broadcast
      ],
    };

    const [notifications, total] = await Promise.all([
      prisma.notification.findMany({
        where, skip, take: Number(limit), orderBy: { createdAt: 'desc' },
        include: { createdBy: { select: { id: true, fullName: true } } },
      }),
      prisma.notification.count({ where }),
    ]);

    res.json({ notifications, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get notifications error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/notifications/unread-count
router.get('/unread-count', async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user!.userId } });
    const count = await prisma.notification.count({
      where: {
        isRead: false,
        OR: [
          { targetEmail: user?.email },
          { targetRole: req.user!.role },
          { targetEmail: null, targetRole: null },
        ],
      },
    });
    res.json({ count });
  } catch (error) {
    console.error('Get unread count error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/notifications/all (admin view — all notifications)
router.get('/all', async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [notifications, total] = await Promise.all([
      prisma.notification.findMany({
        skip, take: Number(limit), orderBy: { createdAt: 'desc' },
        include: { createdBy: { select: { id: true, fullName: true } } },
      }),
      prisma.notification.count(),
    ]);
    res.json({ notifications, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get all notifications error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/notifications
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, message, type, targetEmail, targetRole, link } = req.body;
    if (!title || !message) { res.status(400).json({ error: 'Title and message are required' }); return; }

    const notification = await prisma.notification.create({
      data: { title, message, type: type || 'INFO', targetEmail, targetRole, link, createdById: req.user!.userId },
    });
    res.status(201).json(notification);
  } catch (error) {
    console.error('Create notification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/notifications/:id/read
router.put('/:id/read', async (req: Request, res: Response): Promise<void> => {
  try {
    const notification = await prisma.notification.update({
      where: { id: req.params.id },
      data: { isRead: true, readAt: new Date() },
    });
    res.json(notification);
  } catch (error) {
    console.error('Mark read error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/notifications/read-all
router.put('/read-all', async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user!.userId } });
    await prisma.notification.updateMany({
      where: {
        isRead: false,
        OR: [
          { targetEmail: user?.email },
          { targetRole: req.user!.role },
          { targetEmail: null, targetRole: null },
        ],
      },
      data: { isRead: true, readAt: new Date() },
    });
    res.json({ message: 'All marked as read' });
  } catch (error) {
    console.error('Mark all read error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
