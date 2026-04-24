import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/cms/public/:slug
router.get('/public/:slug', async (req: Request, res: Response): Promise<void> => {
  try {
    const page = await prisma.cmsPage.findUnique({ where: { slug: req.params.slug, published: true } });
    if (!page) { res.status(404).json({ error: 'Page not found' }); return; }
    res.json(page);
  } catch (error) {
    console.error('Get public CMS page error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin routes
router.use(authenticate);

// GET /api/cms
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [pages, total] = await Promise.all([
      prisma.cmsPage.findMany({
        skip, take: Number(limit), orderBy: { updatedAt: 'desc' },
        include: { updatedBy: { select: { id: true, fullName: true } } },
      }),
      prisma.cmsPage.count(),
    ]);
    res.json({ pages, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get CMS pages error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/cms/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const page = await prisma.cmsPage.findUnique({ where: { id: req.params.id } });
    if (!page) { res.status(404).json({ error: 'CMS page not found' }); return; }
    res.json(page);
  } catch (error) {
    console.error('Get CMS page error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/cms
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, title, content, published } = req.body;
    if (!slug || !title) { res.status(400).json({ error: 'slug and title are required' }); return; }

    const page = await prisma.cmsPage.create({
      data: {
        slug, title, content, published,
        publishedAt: published ? new Date() : null,
        updatedById: req.user!.userId,
      },
    });
    res.status(201).json(page);
  } catch (error) {
    console.error('Create CMS page error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/cms/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, title, content, published } = req.body;
    const data: Record<string, unknown> = { updatedById: req.user!.userId };
    if (slug !== undefined) data.slug = slug;
    if (title !== undefined) data.title = title;
    if (content !== undefined) data.content = content;
    if (published !== undefined) {
      data.published = published;
      if (published) data.publishedAt = new Date();
    }

    const page = await prisma.cmsPage.update({ where: { id: req.params.id }, data });
    res.json(page);
  } catch (error) {
    console.error('Update CMS page error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/cms/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.cmsPage.delete({ where: { id: req.params.id } });
    res.json({ message: 'CMS page deleted' });
  } catch (error) {
    console.error('Delete CMS page error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
