import api from './api';
import type { State } from '../types/admin';

export async function getStates() {
  const res = await api.get('/states');
  return res.data as State[];
}

export async function getState(id: string) {
  const res = await api.get(`/states/${id}`);
  return res.data as State;
}

export async function updateState(id: string, data: Partial<State>) {
  const res = await api.put(`/states/${id}`, data);
  return res.data as State;
}
