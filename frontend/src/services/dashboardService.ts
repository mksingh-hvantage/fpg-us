import api from './api';
import type { DashboardStats } from '../types/admin';

export async function getDashboardStats() {
  const res = await api.get('/dashboard/stats');
  return res.data as DashboardStats;
}
