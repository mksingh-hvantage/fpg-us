import { useEffect, useState } from 'react';
import { Trash2, Send } from 'lucide-react';
import { getNotes, createNote, deleteNote } from '../../services/noteService';
import { useAuth } from '../../contexts/AuthContext';
import type { InternalNote } from '../../types/admin';

interface InternalNotesProps {
  entity: string;
  entityId: string;
}

export default function InternalNotes({ entity, entityId }: InternalNotesProps) {
  const { user } = useAuth();
  const [notes, setNotes] = useState<InternalNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fetchNotes = async () => {
    try {
      const data = await getNotes(entity, entityId);
      setNotes(data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entity, entityId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setSubmitting(true);
    try {
      const note = await createNote({ content: content.trim(), entity, entityId });
      setNotes((prev) => [note, ...prev]);
      setContent('');
    } catch (err) {
      console.error('Failed to create note:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (noteId: string) => {
    try {
      await deleteNote(noteId);
      setNotes((prev) => prev.filter((n) => n.id !== noteId));
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-900 mb-4">Internal Notes</h3>

      {/* Add Note Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={2}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none"
            placeholder="Add a note..."
          />
          <button
            type="submit"
            disabled={submitting || !content.trim()}
            className="self-end p-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Notes List */}
      {loading ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-600" />
        </div>
      ) : notes.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-4">No notes yet.</p>
      ) : (
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {notes.map((note) => (
            <div key={note.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{note.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {note.author?.fullName || 'Unknown'} &middot; {new Date(note.createdAt).toLocaleString()}
                  </p>
                </div>
                {user && user.id === note.authorId && (
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="p-1 text-gray-400 hover:text-red-500 rounded"
                    title="Delete note"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
