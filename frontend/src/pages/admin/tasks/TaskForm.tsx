import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getTask, createTask, updateTask } from '../../../services/taskService';
import { getUsers } from '../../../services/userService';
import type { User, TaskType, TaskPriority } from '../../../types/admin';

const typeOptions: TaskType[] = ['COMPLIANCE', 'UPSELL', 'FILING', 'GENERAL'];
const priorityOptions: TaskPriority[] = ['LOW', 'MEDIUM', 'HIGH', 'URGENT'];

export default function TaskForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'GENERAL' as TaskType,
    priority: 'MEDIUM' as TaskPriority,
    assigneeId: '',
    orderId: '',
    dueDate: '',
  });
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);

  useEffect(() => {
    if (id) {
      getTask(id)
        .then((task) => {
          setForm({
            title: task.title,
            description: task.description || '',
            type: task.type,
            priority: task.priority,
            assigneeId: task.assigneeId || '',
            orderId: task.orderId || '',
            dueDate: task.dueDate ? task.dueDate.split('T')[0] : '',
          });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title) {
      setError('Title is required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const payload: Record<string, string | undefined> = {
        title: form.title,
        description: form.description || undefined,
        type: form.type,
        priority: form.priority,
        assigneeId: form.assigneeId || undefined,
        orderId: form.orderId || undefined,
        dueDate: form.dueDate || undefined,
      };
      if (isEdit) {
        await updateTask(id!, payload);
      } else {
        await createTask(payload);
      }
      navigate('/admin/tasks');
    } catch (err) {
      console.error('Failed to save task:', err);
      setError('Failed to save task.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/tasks')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Task' : 'New Task'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <FormField
          label="Title"
          value={form.title}
          onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)}
          required
        />

        <FormField
          label="Description"
          as="textarea"
          value={form.description}
          onChange={(e) => handleChange('description', (e.target as HTMLTextAreaElement).value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Type"
            as="select"
            value={form.type}
            onChange={(e) => handleChange('type', (e.target as HTMLSelectElement).value)}
          >
            {typeOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </FormField>

          <FormField
            label="Priority"
            as="select"
            value={form.priority}
            onChange={(e) => handleChange('priority', (e.target as HTMLSelectElement).value)}
          >
            {priorityOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Assignee"
            as="select"
            value={form.assigneeId}
            onChange={(e) => handleChange('assigneeId', (e.target as HTMLSelectElement).value)}
          >
            <option value="">-- Unassigned --</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>{u.fullName}</option>
            ))}
          </FormField>

          <FormField
            label="Order ID (optional)"
            value={form.orderId}
            onChange={(e) => handleChange('orderId', (e.target as HTMLInputElement).value)}
            placeholder="Paste order ID if linked"
          />
        </div>

        <FormField
          label="Due Date"
          type="date"
          value={form.dueDate}
          onChange={(e) => handleChange('dueDate', (e.target as HTMLInputElement).value)}
        />

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Task' : 'Create Task'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/tasks')}
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
