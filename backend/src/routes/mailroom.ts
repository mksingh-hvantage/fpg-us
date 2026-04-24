import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';
import { logAudit } from '../utils/audit.js';

const uploadDir = path.join(process.cwd(), 'uploads', 'mail');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

const router = Router();
router.use(authenticate);

// GET /api/mailroom
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where: Record<string, unknown> = {};
    if (status && status !== 'all') where.status = status;
    if (search) {
      where.OR = [
        { subject: { contains: String(search), mode: 'insensitive' } },
        { sender: { contains: String(search), mode: 'insensitive' } },
        { taggedEmail: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.mailItem.findMany({
        where, skip, take: Number(limit), orderBy: { receivedDate: 'desc' },
        include: {
          order: { select: { id: true, orderNumber: true, llcName: true } },
          uploadedBy: { select: { id: true, fullName: true } },
        },
      }),
      prisma.mailItem.count({ where }),
    ]);
    res.json({ items, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get mailroom error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/mailroom
router.post('/', upload.single('scan'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { subject, description, sender, orderId, taggedEmail, notes } = req.body;
    if (!subject) { res.status(400).json({ error: 'Subject is required' }); return; }

    const item = await prisma.mailItem.create({
      data: {
        subject, description, sender,
        scanUrl: req.file ? `/uploads/mail/${req.file.filename}` : null,
        scanPages: req.body.scanPages ? Number(req.body.scanPages) : null,
        orderId: orderId || null,
        taggedEmail,
        uploadedById: req.user!.userId,
        notes,
      },
      include: { order: { select: { id: true, orderNumber: true } } },
    });
    await logAudit({ userId: req.user!.userId, action: 'CREATE', entity: 'MailItem', entityId: item.id, req });
    res.status(201).json(item);
  } catch (error) {
    console.error('Create mail item error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/mailroom/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await prisma.mailItem.findUnique({
      where: { id: req.params.id },
      include: {
        order: { select: { id: true, orderNumber: true, llcName: true } },
        uploadedBy: { select: { id: true, fullName: true } },
      },
    });
    if (!item) { res.status(404).json({ error: 'Mail item not found' }); return; }
    res.json(item);
  } catch (error) {
    console.error('Get mail item error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/mailroom/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { subject, description, sender, status, orderId, taggedEmail, notes } = req.body;
    const data: Record<string, unknown> = {};
    if (subject !== undefined) data.subject = subject;
    if (description !== undefined) data.description = description;
    if (sender !== undefined) data.sender = sender;
    if (status !== undefined) data.status = status;
    if (orderId !== undefined) data.orderId = orderId || null;
    if (taggedEmail !== undefined) data.taggedEmail = taggedEmail;
    if (notes !== undefined) data.notes = notes;

    const item = await prisma.mailItem.update({ where: { id: req.params.id }, data });
    res.json(item);
  } catch (error) {
    console.error('Update mail item error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/mailroom/:id/mark-opened
router.put('/:id/mark-opened', async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await prisma.mailItem.update({
      where: { id: req.params.id },
      data: { status: 'OPENED', openedAt: new Date() },
    });
    res.json(item);
  } catch (error) {
    console.error('Mark opened error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/mailroom/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.mailItem.delete({ where: { id: req.params.id } });
    res.json({ message: 'Mail item deleted' });
  } catch (error) {
    console.error('Delete mail item error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
