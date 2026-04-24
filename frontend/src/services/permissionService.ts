import api from './api';
import type { Permission } from '../types/admin';

export async function getPermissions(userId: string) {
  const res = await api.get(`/permissions/${userId}`);
  return res.data as Permission[];
}

export async function updatePermissions(userId: string, permissions: Permission[]) {
  const res = await api.put(`/permissions/${userId}`, { permissions });
  return res.data;
}
