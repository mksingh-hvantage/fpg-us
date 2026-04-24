import api from './api';
import type { Faq } from '../types/admin';

export async function getFaqs(params?: Record<string, string | number>) {
  const res = await api.get('/faqs', { params });
  return res.data as { faqs: Faq[]; total: number; page: number; totalPages: number };
}

export async function getFaq(id: string) {
  const res = await api.get(`/faqs/${id}`);
  return res.data as Faq;
}

export async function createFaq(data: Partial<Faq>) {
  const res = await api.post('/faqs', data);
  return res.data as Faq;
}

export async function updateFaq(id: string, data: Partial<Faq>) {
  const res = await api.put(`/faqs/${id}`, data);
  return res.data as Faq;
}

export async function deleteFaq(id: string) {
  await api.delete(`/faqs/${id}`);
}
