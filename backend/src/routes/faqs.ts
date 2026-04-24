import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/faqs/public
router.get('/public', async (_req: Request, res: Response): Promise<void> => {
  try {
    const faqs = await prisma.faq.findMany({
      where: { published: true },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(faqs);
  } catch (error) {
    console.error('Get public FAQs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin routes
router.use(authenticate);

// GET /api/faqs
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where: Record<string, unknown> = {};
    if (category && category !== 'all') where.category = category;

    const [faqs, total] = await Promise.all([
      prisma.faq.findMany({ where, skip, take: Number(limit), orderBy: { sortOrder: 'asc' } }),
      prisma.faq.count({ where }),
    ]);
    res.json({ faqs, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get FAQs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/faqs/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const faq = await prisma.faq.findUnique({ where: { id: req.params.id } });
    if (!faq) { res.status(404).json({ error: 'FAQ not found' }); return; }
    res.json(faq);
  } catch (error) {
    console.error('Get FAQ error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/faqs
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { question, answer, category, sortOrder, published } = req.body;
    if (!question || !answer) { res.status(400).json({ error: 'Question and answer are required' }); return; }

    const faq = await prisma.faq.create({ data: { question, answer, category, sortOrder, published } });
    res.status(201).json(faq);
  } catch (error) {
    console.error('Create FAQ error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/faqs/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const faq = await prisma.faq.update({ where: { id: req.params.id }, data: req.body });
    res.json(faq);
  } catch (error) {
    console.error('Update FAQ error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/faqs/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.faq.delete({ where: { id: req.params.id } });
    res.json({ message: 'FAQ deleted' });
  } catch (error) {
    console.error('Delete FAQ error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
