import api from './api';
import type { AuditLog } from '../types/admin';

export async function getAuditLogs(params?: Record<string, string | number>) {
  const res = await api.get('/audit-logs', { params });
  return res.data as { logs: AuditLog[]; total: number; page: number; totalPages: number };
}
