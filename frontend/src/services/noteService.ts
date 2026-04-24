import api from './api';
import type { InternalNote } from '../types/admin';

export async function getNotes(entity: string, entityId: string) {
  const res = await api.get('/notes', { params: { entity, entityId } });
  return res.data as InternalNote[];
}

export async function createNote(data: { content: string; entity: string; entityId: string }) {
  const res = await api.post('/notes', data);
  return res.data as InternalNote;
}

export async function deleteNote(id: string) {
  await api.delete(`/notes/${id}`);
}
