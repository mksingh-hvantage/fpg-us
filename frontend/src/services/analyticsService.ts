import api from './api';
import type { AnalyticsOverview } from '../types/admin';

export async function getAnalyticsOverview() {
  const res = await api.get('/analytics/overview');
  return res.data as AnalyticsOverview;
}

export async function getRevenueData(days = 30) {
  const res = await api.get('/analytics/revenue', { params: { days } });
  return res.data as { date: string; amount: number }[];
}

export async function getOrdersData(days = 30) {
  const res = await api.get('/analytics/orders', { params: { days } });
  return res.data as { date: string; count: number }[];
}

export async function getTopStates() {
  const res = await api.get('/analytics/top-states');
  return res.data as { state: string; count: number }[];
}

export async function getTopPackages() {
  const res = await api.get('/analytics/top-packages');
  return res.data as { packageType: string; count: number }[];
}

export async function getConversions() {
  const res = await api.get('/analytics/conversions');
  return res.data as { totalContacts: number; convertedContacts: number; conversionRate: number };
}
