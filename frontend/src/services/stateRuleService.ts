import api from './api';
import type { StateFilingRule } from '../types/admin';

export async function getStateRules(params?: Record<string, string | number>) {
  const res = await api.get('/state-rules', { params });
  return res.data as { rules: StateFilingRule[]; total: number; page: number; totalPages: number };
}

export async function getStateRule(id: string) {
  const res = await api.get(`/state-rules/${id}`);
  return res.data as StateFilingRule;
}

export async function createStateRule(data: Partial<StateFilingRule>) {
  const res = await api.post('/state-rules', data);
  return res.data as StateFilingRule;
}

export async function updateStateRule(id: string, data: Partial<StateFilingRule>) {
  const res = await api.put(`/state-rules/${id}`, data);
  return res.data as StateFilingRule;
}

export async function deleteStateRule(id: string) {
  await api.delete(`/state-rules/${id}`);
}
