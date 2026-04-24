import api from './api';
import type { Article } from '../types/admin';

export async function getArticles(params?: { search?: string; page?: number; limit?: number }) {
  const res = await api.get('/articles', { params });
  return res.data as { articles: Article[]; total: number; page: number; totalPages: number };
}

export async function getArticle(id: string) {
  const res = await api.get(`/articles/${id}`);
  return res.data as Article;
}

export async function createArticle(data: Partial<Article>) {
  const res = await api.post('/articles', data);
  return res.data as Article;
}

export async function updateArticle(id: string, data: Partial<Article>) {
  const res = await api.put(`/articles/${id}`, data);
  return res.data as Article;
}

export async function deleteArticle(id: string) {
  await api.delete(`/articles/${id}`);
}
