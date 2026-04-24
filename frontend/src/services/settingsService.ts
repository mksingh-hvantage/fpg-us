import api from './api';
import type { Setting } from '../types/admin';

export async function getSettings(group?: string) {
  const res = await api.get('/settings', { params: group ? { group } : {} });
  return res.data as Setting[];
}

export async function updateSettings(settings: { key: string; value: string; group?: string; label?: string; type?: string }[]) {
  const res = await api.put('/settings', { settings });
  return res.data;
}
