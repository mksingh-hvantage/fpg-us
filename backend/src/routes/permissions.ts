import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate, requireRole } from '../middleware/auth.js';
import { logAudit } from '../utils/audit.js';

const router = Router();

const ALL_MODULES = [
  'Orders', 'Contacts', 'Tasks', 'Documents', 'Mailroom',
  'Articles', 'States', 'Contracts', 'Industries', 'Packages',
  'CMS', 'FAQ', 'Banners', 'Services', 'Recommendations',
  'Notifications', 'Payments', 'Invoices', 'Analytics',
  'Users', 'Permissions', 'AuditLogs', 'Settings', 'EmailTemplates',
];

// GET /api/permissions/:userId (any authenticated user can read their own; SUPER_ADMIN can read anyone's)
router.get('/:userId', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const permissions = await prisma.permission.findMany({
      where: { userId: req.params.userId },
    });

    // Return full module list with existing permissions merged
    const result = ALL_MODULES.map((module) => {
      const existing = permissions.find((p) => p.module === module);
      return {
        module,
        canView: existing?.canView ?? false,
        canCreate: existing?.canCreate ?? false,
        canEdit: existing?.canEdit ?? false,
        canDelete: existing?.canDelete ?? false,
      };
    });

    res.json(result);
  } catch (error) {
    console.error('Get permissions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/permissions/:userId (SUPER_ADMIN only)
router.put('/:userId', authenticate, requireRole('SUPER_ADMIN'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { permissions } = req.body as {
      permissions: { module: string; canView: boolean; canCreate: boolean; canEdit: boolean; canDelete: boolean }[];
    };

    if (!permissions || !Array.isArray(permissions)) {
      res.status(400).json({ error: 'permissions array is required' });
      return;
    }

    // Upsert each permission
    await Promise.all(
      permissions.map((p) =>
        prisma.permission.upsert({
          where: { userId_module: { userId: req.params.userId, module: p.module } },
          create: { userId: req.params.userId, module: p.module, canView: p.canView, canCreate: p.canCreate, canEdit: p.canEdit, canDelete: p.canDelete },
          update: { canView: p.canView, canCreate: p.canCreate, canEdit: p.canEdit, canDelete: p.canDelete },
        })
      )
    );

    await logAudit({ userId: req.user!.userId, action: 'UPDATE_PERMISSIONS', entity: 'User', entityId: req.params.userId, req });
    res.json({ message: 'Permissions updated' });
  } catch (error) {
    console.error('Update permissions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
