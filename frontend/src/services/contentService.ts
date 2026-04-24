import api from './api';
import type { ContractTemplate, Industry } from '../types/admin';

// Contract Templates
export async function getContractTemplates(params?: { search?: string }) {
  const res = await api.get('/contract-templates', { params });
  return res.data as ContractTemplate[];
}

export async function getContractTemplate(id: string) {
  const res = await api.get(`/contract-templates/${id}`);
  return res.data as ContractTemplate;
}

export async function createContractTemplate(data: Partial<ContractTemplate>) {
  const res = await api.post('/contract-templates', data);
  return res.data as ContractTemplate;
}

export async function updateContractTemplate(id: string, data: Partial<ContractTemplate>) {
  const res = await api.put(`/contract-templates/${id}`, data);
  return res.data as ContractTemplate;
}

export async function deleteContractTemplate(id: string) {
  await api.delete(`/contract-templates/${id}`);
}

// Industries
export async function getIndustries() {
  const res = await api.get('/industries');
  return res.data as Industry[];
}

export async function getIndustry(id: string) {
  const res = await api.get(`/industries/${id}`);
  return res.data as Industry;
}

export async function createIndustry(data: Partial<Industry>) {
  const res = await api.post('/industries', data);
  return res.data as Industry;
}

export async function updateIndustry(id: string, data: Partial<Industry>) {
  const res = await api.put(`/industries/${id}`, data);
  return res.data as Industry;
}

export async function deleteIndustry(id: string) {
  await api.delete(`/industries/${id}`);
}
