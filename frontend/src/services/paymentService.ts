import api from './api';
import type { Payment } from '../types/admin';

export async function getPayments(params?: Record<string, string | number>) {
  const res = await api.get('/payments', { params });
  return res.data as { payments: Payment[]; total: number; page: number; totalPages: number };
}

export async function getPayment(id: string) {
  const res = await api.get(`/payments/${id}`);
  return res.data as Payment;
}

export async function getPaymentStats() {
  const res = await api.get('/payments/stats');
  return res.data as { totalRevenue: number; totalPayments: number; successfulPayments: number; failedPayments: number };
}

export async function createPayment(data: Partial<Payment>) {
  const res = await api.post('/payments', data);
  return res.data as Payment;
}

export async function refundPayment(id: string, data: { amount?: number; reason?: string }) {
  const res = await api.post(`/payments/${id}/refund`, data);
  return res.data as Payment;
}
