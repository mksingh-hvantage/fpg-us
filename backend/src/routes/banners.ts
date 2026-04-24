import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/banners/active (public)
router.get('/active', async (_req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const banners = await prisma.banner.findMany({
      where: {
        active: true,
        OR: [
          { startDate: null, endDate: null },
          { startDate: { lte: now }, endDate: null },
          { startDate: null, endDate: { gte: now } },
          { startDate: { lte: now }, endDate: { gte: now } },
        ],
      },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(banners);
  } catch (error) {
    console.error('Get active banners error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin routes
router.use(authenticate);

// GET /api/banners
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [banners, total] = await Promise.all([
      prisma.banner.findMany({ skip, take: Number(limit), orderBy: { sortOrder: 'asc' } }),
      prisma.banner.count(),
    ]);
    res.json({ banners, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get banners error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/banners/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const banner = await prisma.banner.findUnique({ where: { id: req.params.id } });
    if (!banner) { res.status(404).json({ error: 'Banner not found' }); return; }
    res.json(banner);
  } catch (error) {
    console.error('Get banner error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/banners
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, message, type, linkUrl, linkText, startDate, endDate, active, sortOrder } = req.body;
    if (!title || !message) { res.status(400).json({ error: 'Title and message are required' }); return; }

    const banner = await prisma.banner.create({
      data: {
        title, message, type: type || 'info', linkUrl, linkText,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        active, sortOrder,
      },
    });
    res.status(201).json(banner);
  } catch (error) {
    console.error('Create banner error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/banners/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = { ...req.body };
    if (data.startDate) data.startDate = new Date(data.startDate);
    if (data.endDate) data.endDate = new Date(data.endDate);

    const banner = await prisma.banner.update({ where: { id: req.params.id }, data });
    res.json(banner);
  } catch (error) {
    console.error('Update banner error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/banners/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.banner.delete({ where: { id: req.params.id } });
    res.json({ message: 'Banner deleted' });
  } catch (error) {
    console.error('Delete banner error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
