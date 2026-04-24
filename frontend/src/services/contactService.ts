import api from './api';
import type { Contact } from '../types/admin';

export async function getContacts(params?: { status?: string; source?: string; search?: string; page?: number; limit?: number }) {
  const res = await api.get('/contacts', { params });
  return res.data as { contacts: Contact[]; total: number; page: number; totalPages: number };
}

export async function getContact(id: string) {
  const res = await api.get(`/contacts/${id}`);
  return res.data as Contact;
}

export async function updateContact(id: string, data: { status?: string; notes?: string }) {
  const res = await api.put(`/contacts/${id}`, data);
  return res.data as Contact;
}

export async function createContact(data: { source: string; name: string; email: string; phone?: string; subject?: string; message?: string; businessType?: string; businessName?: string; state?: string }) {
  const res = await api.post('/contacts', data);
  return res.data as Contact;
}
