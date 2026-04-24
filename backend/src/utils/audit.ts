import { prisma } from '../index.js';
import { Request } from 'express';

interface AuditParams {
  userId?: string;
  action: string;
  entity: string;
  entityId?: string;
  details?: Record<string, unknown>;
  req?: Request;
}

export async function logAudit({ userId, action, entity, entityId, details, req }: AuditParams) {
  try {
    await prisma.auditLog.create({
      data: {
        userId,
        action,
        entity,
        entityId,
        details: details ?? undefined,
        ipAddress: req?.ip ?? req?.headers['x-forwarded-for']?.toString() ?? null,
        userAgent: req?.headers['user-agent'] ?? null,
      },
    });
  } catch (error) {
    console.error('Audit log error:', error);
  }
}
