import { Request, Response, NextFunction } from 'express';
import { prisma } from '../index.js';

type PermissionAction = 'canView' | 'canCreate' | 'canEdit' | 'canDelete';

export function requirePermission(module: string, action: PermissionAction) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    // SUPER_ADMIN bypasses permission checks
    if (req.user.role === 'SUPER_ADMIN') {
      next();
      return;
    }

    try {
      const permission = await prisma.permission.findUnique({
        where: { userId_module: { userId: req.user.userId, module } },
      });

      if (!permission || !permission[action]) {
        res.status(403).json({ error: 'Insufficient permissions' });
        return;
      }

      next();
    } catch {
      res.status(500).json({ error: 'Permission check failed' });
    }
  };
}
