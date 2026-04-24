import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/services/public
router.get('/public', async (_req: Request, res: Response): Promise<void> => {
  try {
    const services = await prisma.service.findMany({
      where: { published: true },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(services);
  } catch (error) {
    console.error('Get public services error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin routes
router.use(authenticate);

// GET /api/services
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where: Record<string, unknown> = {};
    if (category && category !== 'all') where.category = category;
    if (search) {
      where.OR = [
        { name: { contains: String(search), mode: 'insensitive' } },
        { description: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [services, total] = await Promise.all([
      prisma.service.findMany({ where, skip, take: Number(limit), orderBy: { sortOrder: 'asc' } }),
      prisma.service.count({ where }),
    ]);
    res.json({ services, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/services/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const service = await prisma.service.findUnique({ where: { id: req.params.id } });
    if (!service) { res.status(404).json({ error: 'Service not found' }); return; }
    res.json(service);
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/services
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, slug, description, category, basePrice, isRecurring, interval, published, sortOrder } = req.body;
    if (!name || !slug) { res.status(400).json({ error: 'Name and slug are required' }); return; }

    const service = await prisma.service.create({
      data: { name, slug, description, category, basePrice: basePrice || 0, isRecurring, interval, published, sortOrder },
    });
    res.status(201).json(service);
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/services/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const service = await prisma.service.update({ where: { id: req.params.id }, data: req.body });
    res.json(service);
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/services/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.service.delete({ where: { id: req.params.id } });
    res.json({ message: 'Service deleted' });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
