import api from './api';
import type { Task } from '../types/admin';

export async function getTasks(params?: Record<string, string | number>) {
  const res = await api.get('/tasks', { params });
  return res.data as { tasks: Task[]; total: number; page: number; totalPages: number };
}

export async function getMyTasks() {
  const res = await api.get('/tasks/my');
  return res.data as Task[];
}

export async function getTask(id: string) {
  const res = await api.get(`/tasks/${id}`);
  return res.data as Task;
}

export async function createTask(data: Partial<Task>) {
  const res = await api.post('/tasks', data);
  return res.data as Task;
}

export async function updateTask(id: string, data: Partial<Task>) {
  const res = await api.put(`/tasks/${id}`, data);
  return res.data as Task;
}

export async function deleteTask(id: string) {
  await api.delete(`/tasks/${id}`);
}
