import api from './api';
import type { Invoice } from '../types/admin';

export async function getInvoices(params?: Record<string, string | number>) {
  const res = await api.get('/invoices', { params });
  return res.data as { invoices: Invoice[]; total: number; page: number; totalPages: number };
}

export async function getInvoice(id: string) {
  const res = await api.get(`/invoices/${id}`);
  return res.data as Invoice;
}

export async function createInvoice(data: Partial<Invoice>) {
  const res = await api.post('/invoices', data);
  return res.data as Invoice;
}

export async function updateInvoice(id: string, data: Partial<Invoice>) {
  const res = await api.put(`/invoices/${id}`, data);
  return res.data as Invoice;
}
