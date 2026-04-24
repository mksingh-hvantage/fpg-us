import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import { prisma } from '../index.js';
import { authenticate, requireRole } from '../middleware/auth.js';
import { logAudit } from '../utils/audit.js';

const router = Router();
router.use(authenticate, requireRole('SUPER_ADMIN'));

// GET /api/api-keys
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const keys = await prisma.apiKey.findMany({
      orderBy: { createdAt: 'desc' },
      include: { createdBy: { select: { id: true, fullName: true } } },
    });
    // Don't expose keyHash
    const safeKeys = keys.map(({ keyHash: _, ...rest }) => rest);
    res.json(safeKeys);
  } catch (error) {
    console.error('Get API keys error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/api-keys
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, permissions, expiresAt } = req.body;
    if (!name) { res.status(400).json({ error: 'Name is required' }); return; }

    // Generate a random API key
    const rawKey = `fpg_${crypto.randomBytes(32).toString('hex')}`;
    const prefix = rawKey.substring(0, 12);
    const keyHash = crypto.createHash('sha256').update(rawKey).digest('hex');

    const apiKey = await prisma.apiKey.create({
      data: {
        name, keyHash, prefix, permissions,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        createdById: req.user!.userId,
      },
    });

    await logAudit({ userId: req.user!.userId, action: 'CREATE', entity: 'ApiKey', entityId: apiKey.id, req });

    // Return the full key ONLY on creation
    res.status(201).json({ ...apiKey, key: rawKey });
  } catch (error) {
    console.error('Create API key error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/api-keys/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, active, permissions, expiresAt } = req.body;
    const data: Record<string, unknown> = {};
    if (name !== undefined) data.name = name;
    if (active !== undefined) data.active = active;
    if (permissions !== undefined) data.permissions = permissions;
    if (expiresAt !== undefined) data.expiresAt = expiresAt ? new Date(expiresAt) : null;

    const key = await prisma.apiKey.update({ where: { id: req.params.id }, data });
    const { keyHash: _, ...safeKey } = key;
    res.json(safeKey);
  } catch (error) {
    console.error('Update API key error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/api-keys/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.apiKey.delete({ where: { id: req.params.id } });
    await logAudit({ userId: req.user!.userId, action: 'DELETE', entity: 'ApiKey', entityId: req.params.id, req });
    res.json({ message: 'API key deleted' });
  } catch (error) {
    console.error('Delete API key error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
