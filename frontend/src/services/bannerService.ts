import api from './api';
import type { Banner } from '../types/admin';

export async function getBanners(params?: Record<string, string | number>) {
  const res = await api.get('/banners', { params });
  return res.data as { banners: Banner[]; total: number; page: number; totalPages: number };
}

export async function getBanner(id: string) {
  const res = await api.get(`/banners/${id}`);
  return res.data as Banner;
}

export async function createBanner(data: Partial<Banner>) {
  const res = await api.post('/banners', data);
  return res.data as Banner;
}

export async function updateBanner(id: string, data: Partial<Banner>) {
  const res = await api.put(`/banners/${id}`, data);
  return res.data as Banner;
}

export async function deleteBanner(id: string) {
  await api.delete(`/banners/${id}`);
}
