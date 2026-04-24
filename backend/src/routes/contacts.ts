import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// POST /api/contacts (public — called from forms)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { source, name, email, phone, subject, message, businessType, businessName, state } = req.body;
    if (!source || !name || !email) {
      res.status(400).json({ error: 'Source, name, and email are required' });
      return;
    }

    const contact = await prisma.contact.create({
      data: { source, name, email, phone, subject, message, businessType, businessName, state },
    });
    res.status(201).json(contact);
  } catch (error) {
    console.error('Create contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/contacts (admin)
router.get('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, source, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    if (status && status !== 'all') where.status = status;
    if (source && source !== 'all') where.source = source;
    if (search) {
      where.OR = [
        { name: { contains: String(search), mode: 'insensitive' } },
        { email: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({ where, skip, take: Number(limit), orderBy: { createdAt: 'desc' } }),
      prisma.contact.count({ where }),
    ]);

    res.json({ contacts, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/contacts/:id (admin)
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await prisma.contact.findUnique({ where: { id: req.params.id } });
    if (!contact) {
      res.status(404).json({ error: 'Contact not found' });
      return;
    }
    res.json(contact);
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/contacts/:id (admin)
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, notes } = req.body;
    const data: Record<string, unknown> = {};
    if (status) data.status = status;
    if (notes !== undefined) data.notes = notes;

    const contact = await prisma.contact.update({ where: { id: req.params.id }, data });
    res.json(contact);
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
