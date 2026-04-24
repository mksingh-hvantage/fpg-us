import api from './api';
import type { User } from '../types/admin';

export async function getUsers() {
  const res = await api.get('/users');
  return res.data as User[];
}

export async function getUser(id: string) {
  const res = await api.get(`/users/${id}`);
  return res.data as User;
}

export async function createUser(data: { email: string; password: string; fullName: string; role?: string }) {
  const res = await api.post('/users', data);
  return res.data as User;
}

export async function updateUser(id: string, data: Partial<User & { password?: string }>) {
  const res = await api.put(`/users/${id}`, data);
  return res.data as User;
}

export async function deleteUser(id: string) {
  await api.delete(`/users/${id}`);
}

export async function toggleUserActive(id: string) {
  const res = await api.put(`/users/${id}/toggle-active`);
  return res.data as User;
}

export async function loginAsUser(id: string) {
  const res = await api.post(`/users/${id}/login-as`);
  return res.data as { token: string; user: User };
}
