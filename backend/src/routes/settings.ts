import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate, requireRole } from '../middleware/auth.js';
import { logAudit } from '../utils/audit.js';

const router = Router();
router.use(authenticate, requireRole('SUPER_ADMIN'));

// GET /api/settings
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { group } = req.query;
    const where: Record<string, unknown> = {};
    if (group) where.group = group;

    const settings = await prisma.setting.findMany({ where, orderBy: { key: 'asc' } });
    res.json(settings);
  } catch (error) {
    console.error('Get settings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/settings
router.put('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { settings } = req.body as {
      settings: { key: string; value: string; group?: string; label?: string; type?: string }[];
    };

    if (!settings || !Array.isArray(settings)) {
      res.status(400).json({ error: 'settings array is required' });
      return;
    }

    await Promise.all(
      settings.map((s) =>
        prisma.setting.upsert({
          where: { key: s.key },
          create: { key: s.key, value: s.value, group: s.group || 'general', label: s.label, type: s.type || 'string' },
          update: { value: s.value },
        })
      )
    );

    await logAudit({ userId: req.user!.userId, action: 'UPDATE_SETTINGS', entity: 'Setting', req });
    res.json({ message: 'Settings updated' });
  } catch (error) {
    console.error('Update settings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
