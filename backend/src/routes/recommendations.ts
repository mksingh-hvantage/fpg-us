import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.use(authenticate);

// GET /api/recommendations
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [recommendations, total] = await Promise.all([
      prisma.recommendation.findMany({
        skip, take: Number(limit), orderBy: { priority: 'desc' },
        include: { service: { select: { id: true, name: true } }, _count: { select: { pushes: true } } },
      }),
      prisma.recommendation.count(),
    ]);
    res.json({ recommendations, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get recommendations error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/recommendations/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const rec = await prisma.recommendation.findUnique({
      where: { id: req.params.id },
      include: { service: true },
    });
    if (!rec) { res.status(404).json({ error: 'Recommendation not found' }); return; }
    res.json(rec);
  } catch (error) {
    console.error('Get recommendation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/recommendations
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, serviceId, targetState, targetBizType, triggerEvent, isAutomatic, active, priority } = req.body;
    if (!title) { res.status(400).json({ error: 'Title is required' }); return; }

    const rec = await prisma.recommendation.create({
      data: { title, description, serviceId, targetState, targetBizType, triggerEvent, isAutomatic, active, priority },
    });
    res.status(201).json(rec);
  } catch (error) {
    console.error('Create recommendation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/recommendations/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const rec = await prisma.recommendation.update({ where: { id: req.params.id }, data: req.body });
    res.json(rec);
  } catch (error) {
    console.error('Update recommendation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/recommendations/:id/push
router.post('/:id/push', async (req: Request, res: Response): Promise<void> => {
  try {
    const { targetEmail, orderId } = req.body;
    if (!targetEmail) { res.status(400).json({ error: 'targetEmail is required' }); return; }

    const push = await prisma.recommendationPush.create({
      data: { recommendationId: req.params.id, targetEmail, orderId },
    });
    res.status(201).json(push);
  } catch (error) {
    console.error('Push recommendation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/recommendations/:id/pushes
router.get('/:id/pushes', async (req: Request, res: Response): Promise<void> => {
  try {
    const pushes = await prisma.recommendationPush.findMany({
      where: { recommendationId: req.params.id },
      orderBy: { sentAt: 'desc' },
    });
    res.json(pushes);
  } catch (error) {
    console.error('Get pushes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/recommendations/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.recommendationPush.deleteMany({ where: { recommendationId: req.params.id } });
    await prisma.recommendation.delete({ where: { id: req.params.id } });
    res.json({ message: 'Recommendation deleted' });
  } catch (error) {
    console.error('Delete recommendation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
