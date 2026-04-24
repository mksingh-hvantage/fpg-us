import api from './api';
import type { Service } from '../types/admin';

export async function getServices(params?: Record<string, string | number>) {
  const res = await api.get('/services', { params });
  return res.data as { services: Service[]; total: number; page: number; totalPages: number };
}

export async function getService(id: string) {
  const res = await api.get(`/services/${id}`);
  return res.data as Service;
}

export async function createService(data: Partial<Service>) {
  const res = await api.post('/services', data);
  return res.data as Service;
}

export async function updateService(id: string, data: Partial<Service>) {
  const res = await api.put(`/services/${id}`, data);
  return res.data as Service;
}

export async function deleteService(id: string) {
  await api.delete(`/services/${id}`);
}
