import api from './api';
import type { Order } from '../types/admin';

export async function getOrders(params?: { status?: string; search?: string; page?: number; limit?: number }) {
  const res = await api.get('/orders', { params });
  return res.data as { orders: Order[]; total: number; page: number; totalPages: number };
}

export async function getOrder(id: string) {
  const res = await api.get(`/orders/${id}`);
  return res.data as Order;
}

export async function updateOrder(id: string, data: { status?: string; notes?: string; assignedToId?: string }) {
  const res = await api.put(`/orders/${id}`, data);
  return res.data as Order;
}

export async function createOrder(data: Partial<Order>) {
  const res = await api.post('/orders', data);
  return res.data as Order;
}
