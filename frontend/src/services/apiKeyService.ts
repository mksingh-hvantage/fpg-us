import api from './api';
import type { ApiKey } from '../types/admin';

export async function getApiKeys() {
  const res = await api.get('/api-keys');
  return res.data as ApiKey[];
}

export async function createApiKey(data: { name: string; permissions?: Record<string, boolean>; expiresAt?: string }) {
  const res = await api.post('/api-keys', data);
  return res.data as ApiKey;
}

export async function updateApiKey(id: string, data: Partial<ApiKey>) {
  const res = await api.put(`/api-keys/${id}`, data);
  return res.data as ApiKey;
}

export async function deleteApiKey(id: string) {
  await api.delete(`/api-keys/${id}`);
}
