import api from './api';
import type { CmsPage } from '../types/admin';

export async function getCmsPages(params?: Record<string, string | number>) {
  const res = await api.get('/cms', { params });
  return res.data as { pages: CmsPage[]; total: number; page: number; totalPages: number };
}

export async function getCmsPage(id: string) {
  const res = await api.get(`/cms/${id}`);
  return res.data as CmsPage;
}

export async function createCmsPage(data: Partial<CmsPage>) {
  const res = await api.post('/cms', data);
  return res.data as CmsPage;
}

export async function updateCmsPage(id: string, data: Partial<CmsPage>) {
  const res = await api.put(`/cms/${id}`, data);
  return res.data as CmsPage;
}

export async function deleteCmsPage(id: string) {
  await api.delete(`/cms/${id}`);
}
