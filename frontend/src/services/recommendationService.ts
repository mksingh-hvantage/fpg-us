import api from './api';
import type { Recommendation, RecommendationPush } from '../types/admin';

export async function getRecommendations(params?: Record<string, string | number>) {
  const res = await api.get('/recommendations', { params });
  return res.data as { recommendations: Recommendation[]; total: number; page: number; totalPages: number };
}

export async function getRecommendation(id: string) {
  const res = await api.get(`/recommendations/${id}`);
  return res.data as Recommendation;
}

export async function createRecommendation(data: Partial<Recommendation>) {
  const res = await api.post('/recommendations', data);
  return res.data as Recommendation;
}

export async function updateRecommendation(id: string, data: Partial<Recommendation>) {
  const res = await api.put(`/recommendations/${id}`, data);
  return res.data as Recommendation;
}

export async function deleteRecommendation(id: string) {
  await api.delete(`/recommendations/${id}`);
}

export async function pushRecommendation(id: string, data: { targetEmail: string; orderId?: string }) {
  const res = await api.post(`/recommendations/${id}/push`, data);
  return res.data as RecommendationPush;
}

export async function getRecommendationPushes(id: string) {
  const res = await api.get(`/recommendations/${id}/pushes`);
  return res.data as RecommendationPush[];
}
