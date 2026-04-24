import api from './api';
import type { EmailTemplate } from '../types/admin';

export async function getEmailTemplates() {
  const res = await api.get('/email-templates');
  return res.data as EmailTemplate[];
}

export async function getEmailTemplate(id: string) {
  const res = await api.get(`/email-templates/${id}`);
  return res.data as EmailTemplate;
}

export async function createEmailTemplate(data: Partial<EmailTemplate>) {
  const res = await api.post('/email-templates', data);
  return res.data as EmailTemplate;
}

export async function updateEmailTemplate(id: string, data: Partial<EmailTemplate>) {
  const res = await api.put(`/email-templates/${id}`, data);
  return res.data as EmailTemplate;
}

export async function deleteEmailTemplate(id: string) {
  await api.delete(`/email-templates/${id}`);
}
