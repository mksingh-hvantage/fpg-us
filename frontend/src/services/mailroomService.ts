import api from './api';
import type { MailItem } from '../types/admin';

export async function getMailItems(params?: Record<string, string | number>) {
  const res = await api.get('/mailroom', { params });
  return res.data as { items: MailItem[]; total: number; page: number; totalPages: number };
}

export async function getMailItem(id: string) {
  const res = await api.get(`/mailroom/${id}`);
  return res.data as MailItem;
}

export async function createMailItem(formData: FormData) {
  const res = await api.post('/mailroom', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data as MailItem;
}

export async function updateMailItem(id: string, data: Partial<MailItem>) {
  const res = await api.put(`/mailroom/${id}`, data);
  return res.data as MailItem;
}

export async function markMailOpened(id: string) {
  const res = await api.put(`/mailroom/${id}/mark-opened`);
  return res.data as MailItem;
}

export async function deleteMailItem(id: string) {
  await api.delete(`/mailroom/${id}`);
}
