import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/contract-templates
router.get('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { search } = req.query;
    const where: Record<string, unknown> = {};
    if (search) {
      where.OR = [
        { name: { contains: String(search), mode: 'insensitive' } },
        { slug: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const templates = await prisma.contractTemplate.findMany({ where, orderBy: { name: 'asc' } });
    res.json(templates);
  } catch (error) {
    console.error('Get contract templates error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/contract-templates/:id
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const template = await prisma.contractTemplate.findUnique({ where: { id: req.params.id } });
    if (!template) {
      res.status(404).json({ error: 'Contract template not found' });
      return;
    }
    res.json(template);
  } catch (error) {
    console.error('Get contract template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/contract-templates
router.post('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, name, category, description, content, published } = req.body;
    if (!slug || !name || !category) {
      res.status(400).json({ error: 'Slug, name, and category are required' });
      return;
    }

    const template = await prisma.contractTemplate.create({
      data: { slug, name, category, description, content, published: published ?? true },
    });
    res.status(201).json(template);
  } catch (error) {
    console.error('Create contract template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/contract-templates/:id
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, name, category, description, content, published } = req.body;
    const data: Record<string, unknown> = {};
    if (slug !== undefined) data.slug = slug;
    if (name !== undefined) data.name = name;
    if (category !== undefined) data.category = category;
    if (description !== undefined) data.description = description;
    if (content !== undefined) data.content = content;
    if (published !== undefined) data.published = published;

    const template = await prisma.contractTemplate.update({ where: { id: req.params.id }, data });
    res.json(template);
  } catch (error) {
    console.error('Update contract template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/contract-templates/:id
router.delete('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.contractTemplate.delete({ where: { id: req.params.id } });
    res.json({ message: 'Contract template deleted' });
  } catch (error) {
    console.error('Delete contract template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
