import api from './api';
import type { Document } from '../types/admin';

export async function getDocuments(params?: Record<string, string | number>) {
  const res = await api.get('/documents', { params });
  return res.data as { documents: Document[]; total: number; page: number; totalPages: number };
}

export async function getDocument(id: string) {
  const res = await api.get(`/documents/${id}`);
  return res.data as Document;
}

export async function uploadDocument(formData: FormData) {
  const res = await api.post('/documents', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data as Document;
}

export async function deleteDocument(id: string) {
  await api.delete(`/documents/${id}`);
}

export function getDownloadUrl(id: string) {
  return `${api.defaults.baseURL}/documents/${id}/download`;
}
