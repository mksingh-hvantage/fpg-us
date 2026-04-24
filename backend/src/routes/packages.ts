import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/packages/public — No auth, returns published packages
router.get('/public', async (_req: Request, res: Response): Promise<void> => {
  try {
    const packages = await prisma.package.findMany({
      where: { published: true },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(packages);
  } catch (error) {
    console.error('Get public packages error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/packages — Admin, returns all packages
router.get('/', authenticate, async (_req: Request, res: Response): Promise<void> => {
  try {
    const packages = await prisma.package.findMany({
      orderBy: { sortOrder: 'asc' },
    });
    res.json(packages);
  } catch (error) {
    console.error('Get packages error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/packages/:id — Admin, single package
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const pkg = await prisma.package.findUnique({ where: { id: req.params.id } });
    if (!pkg) {
      res.status(404).json({ error: 'Package not found' });
      return;
    }
    res.json(pkg);
  } catch (error) {
    console.error('Get package error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/packages — Admin, create package
router.post('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, processingTime, recommended, features, sortOrder, published } = req.body;
    if (!name || !processingTime || !features) {
      res.status(400).json({ error: 'Name, processingTime, and features are required' });
      return;
    }

    const pkg = await prisma.package.create({
      data: {
        name,
        price: price ?? 0,
        processingTime,
        recommended: recommended ?? false,
        features,
        sortOrder: sortOrder ?? 0,
        published: published ?? true,
      },
    });
    res.status(201).json(pkg);
  } catch (error) {
    console.error('Create package error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/packages/:id — Admin, update package
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, processingTime, recommended, features, sortOrder, published } = req.body;
    const data: Record<string, unknown> = {};
    if (name !== undefined) data.name = name;
    if (price !== undefined) data.price = price;
    if (processingTime !== undefined) data.processingTime = processingTime;
    if (recommended !== undefined) data.recommended = recommended;
    if (features !== undefined) data.features = features;
    if (sortOrder !== undefined) data.sortOrder = sortOrder;
    if (published !== undefined) data.published = published;

    const pkg = await prisma.package.update({ where: { id: req.params.id }, data });
    res.json(pkg);
  } catch (error) {
    console.error('Update package error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/packages/:id — Admin, delete package
router.delete('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.package.delete({ where: { id: req.params.id } });
    res.json({ message: 'Package deleted' });
  } catch (error) {
    console.error('Delete package error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
