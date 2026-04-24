import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';
import { logAudit } from '../utils/audit.js';

const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } }); // 50MB max

const router = Router();
router.use(authenticate);

// GET /api/documents
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId, category, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    if (orderId) where.orderId = orderId;
    if (category && category !== 'all') where.category = category;
    if (search) {
      where.OR = [
        { fileName: { contains: String(search), mode: 'insensitive' } },
        { notes: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [documents, total] = await Promise.all([
      prisma.document.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          uploadedBy: { select: { id: true, fullName: true } },
          order: { select: { id: true, orderNumber: true, llcName: true } },
        },
      }),
      prisma.document.count({ where }),
    ]);

    res.json({ documents, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/documents
router.post('/', upload.single('file'), async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) { res.status(400).json({ error: 'No file uploaded' }); return; }

    const { category, orderId, notes } = req.body;
    const doc = await prisma.document.create({
      data: {
        fileName: req.file.originalname,
        fileUrl: `/uploads/${req.file.filename}`,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
        category: category || 'GENERAL',
        orderId: orderId || null,
        uploadedById: req.user!.userId,
        notes,
      },
      include: {
        uploadedBy: { select: { id: true, fullName: true } },
      },
    });

    await logAudit({ userId: req.user!.userId, action: 'UPLOAD', entity: 'Document', entityId: doc.id, req });
    res.status(201).json(doc);
  } catch (error) {
    console.error('Upload document error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/documents/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const doc = await prisma.document.findUnique({
      where: { id: req.params.id },
      include: {
        uploadedBy: { select: { id: true, fullName: true } },
        order: { select: { id: true, orderNumber: true, llcName: true } },
      },
    });
    if (!doc) { res.status(404).json({ error: 'Document not found' }); return; }
    res.json(doc);
  } catch (error) {
    console.error('Get document error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/documents/:id/download
router.get('/:id/download', async (req: Request, res: Response): Promise<void> => {
  try {
    const doc = await prisma.document.findUnique({ where: { id: req.params.id } });
    if (!doc) { res.status(404).json({ error: 'Document not found' }); return; }

    const filePath = path.join(process.cwd(), doc.fileUrl);
    if (!fs.existsSync(filePath)) { res.status(404).json({ error: 'File not found on disk' }); return; }

    res.download(filePath, doc.fileName);
  } catch (error) {
    console.error('Download document error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/documents/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const doc = await prisma.document.findUnique({ where: { id: req.params.id } });
    if (!doc) { res.status(404).json({ error: 'Document not found' }); return; }

    // Delete file from disk
    const filePath = path.join(process.cwd(), doc.fileUrl);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await prisma.document.delete({ where: { id: req.params.id } });
    await logAudit({ userId: req.user!.userId, action: 'DELETE', entity: 'Document', entityId: req.params.id, req });
    res.json({ message: 'Document deleted' });
  } catch (error) {
    console.error('Delete document error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
