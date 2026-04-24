import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/industries
router.get('/', authenticate, async (_req: Request, res: Response): Promise<void> => {
  try {
    const industries = await prisma.industry.findMany({ orderBy: { name: 'asc' } });
    res.json(industries);
  } catch (error) {
    console.error('Get industries error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/industries/:id
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const industry = await prisma.industry.findUnique({ where: { id: req.params.id } });
    if (!industry) {
      res.status(404).json({ error: 'Industry not found' });
      return;
    }
    res.json(industry);
  } catch (error) {
    console.error('Get industry error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/industries
router.post('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, name, icon, published } = req.body;
    if (!slug || !name || !icon) {
      res.status(400).json({ error: 'Slug, name, and icon are required' });
      return;
    }

    const industry = await prisma.industry.create({
      data: { slug, name, icon, published: published ?? true },
    });
    res.status(201).json(industry);
  } catch (error) {
    console.error('Create industry error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/industries/:id
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, name, icon, published } = req.body;
    const data: Record<string, unknown> = {};
    if (slug !== undefined) data.slug = slug;
    if (name !== undefined) data.name = name;
    if (icon !== undefined) data.icon = icon;
    if (published !== undefined) data.published = published;

    const industry = await prisma.industry.update({ where: { id: req.params.id }, data });
    res.json(industry);
  } catch (error) {
    console.error('Update industry error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/industries/:id
router.delete('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.industry.delete({ where: { id: req.params.id } });
    res.json({ message: 'Industry deleted' });
  } catch (error) {
    console.error('Delete industry error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
