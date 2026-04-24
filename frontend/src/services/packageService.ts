import api from './api';
import type { Package } from '../types/admin';

export async function getPublicPackages() {
  const res = await api.get('/packages/public');
  return res.data as Package[];
}

export async function getPackages() {
  const res = await api.get('/packages');
  return res.data as Package[];
}

export async function getPackage(id: string) {
  const res = await api.get(`/packages/${id}`);
  return res.data as Package;
}

export async function createPackage(data: Partial<Package>) {
  const res = await api.post('/packages', data);
  return res.data as Package;
}

export async function updatePackage(id: string, data: Partial<Package>) {
  const res = await api.put(`/packages/${id}`, data);
  return res.data as Package;
}

export async function deletePackage(id: string) {
  await api.delete(`/packages/${id}`);
}
