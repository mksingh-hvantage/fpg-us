import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// GET /api/states/public (no auth — used by public pages)
router.get('/public', async (_req: Request, res: Response): Promise<void> => {
  try {
    const states = await prisma.state.findMany({
      select: { id: true, name: true, slug: true, filingFee: true, processingTime: true, annualReportFee: true, description: true },
      orderBy: { name: 'asc' },
    });
    res.json(states);
  } catch (error) {
    console.error('Get public states error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/states (admin — all fields)
router.get('/', authenticate, async (_req: Request, res: Response): Promise<void> => {
  try {
    const states = await prisma.state.findMany({ orderBy: { name: 'asc' } });
    res.json(states);
  } catch (error) {
    console.error('Get states error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/states/:id
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const state = await prisma.state.findUnique({ where: { id: req.params.id } });
    if (!state) {
      res.status(404).json({ error: 'State not found' });
      return;
    }
    res.json(state);
  } catch (error) {
    console.error('Get state error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/states/:id
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { filingFee, processingTime, annualReportFee, expeditedTime, description, benefits } = req.body;
    const data: Record<string, unknown> = {};
    if (filingFee !== undefined) data.filingFee = filingFee;
    if (processingTime !== undefined) data.processingTime = processingTime;
    if (annualReportFee !== undefined) data.annualReportFee = annualReportFee;
    if (expeditedTime !== undefined) data.expeditedTime = expeditedTime;
    if (description !== undefined) data.description = description;
    if (benefits !== undefined) data.benefits = benefits;

    const state = await prisma.state.update({ where: { id: req.params.id }, data });
    res.json(state);
  } catch (error) {
    console.error('Update state error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
