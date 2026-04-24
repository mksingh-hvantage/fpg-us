import api from './api';
import type { Notification } from '../types/admin';

export async function getNotifications(params?: Record<string, string | number>) {
  const res = await api.get('/notifications', { params });
  return res.data as { notifications: Notification[]; total: number; page: number; totalPages: number };
}

export async function getAllNotifications(params?: Record<string, string | number>) {
  const res = await api.get('/notifications/all', { params });
  return res.data as { notifications: Notification[]; total: number; page: number; totalPages: number };
}

export async function getUnreadCount() {
  const res = await api.get('/notifications/unread-count');
  return res.data as { count: number };
}

export async function createNotification(data: Partial<Notification>) {
  const res = await api.post('/notifications', data);
  return res.data as Notification;
}

export async function markAsRead(id: string) {
  const res = await api.put(`/notifications/${id}/read`);
  return res.data as Notification;
}

export async function markAllAsRead() {
  await api.put('/notifications/read-all');
}
