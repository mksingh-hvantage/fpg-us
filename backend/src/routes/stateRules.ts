import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.use(authenticate);

// GET /api/state-rules
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { stateSlug, page = '1', limit = '50' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where: Record<string, unknown> = {};
    if (stateSlug) where.stateSlug = stateSlug;

    const [rules, total] = await Promise.all([
      prisma.stateFilingRule.findMany({
        where, skip, take: Number(limit), orderBy: { stateSlug: 'asc' },
        include: { state: { select: { name: true, slug: true } } },
      }),
      prisma.stateFilingRule.count({ where }),
    ]);
    res.json({ rules, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get state rules error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/state-rules/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const rule = await prisma.stateFilingRule.findUnique({
      where: { id: req.params.id },
      include: { state: { select: { name: true, slug: true } } },
    });
    if (!rule) { res.status(404).json({ error: 'Rule not found' }); return; }
    res.json(rule);
  } catch (error) {
    console.error('Get state rule error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/state-rules
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { stateSlug, ruleType, description, dueDate, fee, penaltyFee, reminderDaysBefore, active } = req.body;
    if (!stateSlug || !ruleType) { res.status(400).json({ error: 'stateSlug and ruleType are required' }); return; }

    const rule = await prisma.stateFilingRule.create({
      data: { stateSlug, ruleType, description, dueDate, fee, penaltyFee, reminderDaysBefore, active },
    });
    res.status(201).json(rule);
  } catch (error) {
    console.error('Create state rule error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/state-rules/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const rule = await prisma.stateFilingRule.update({ where: { id: req.params.id }, data: req.body });
    res.json(rule);
  } catch (error) {
    console.error('Update state rule error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/state-rules/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.stateFilingRule.delete({ where: { id: req.params.id } });
    res.json({ message: 'Rule deleted' });
  } catch (error) {
    console.error('Delete state rule error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
