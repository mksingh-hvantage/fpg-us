import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTask, updateTask } from '../../../services/taskService';
import StatusBadge from '../../../components/admin/StatusBadge';
import type { Task, TaskStatus } from '../../../types/admin';

const statusOptions: TaskStatus[] = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];

const priorityColors: Record<string, string> = {
  LOW: 'bg-gray-100 text-gray-800',
  MEDIUM: 'bg-blue-100 text-blue-800',
  HIGH: 'bg-orange-100 text-orange-800',
  URGENT: 'bg-red-100 text-red-800',
};

export default function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    getTask(id)
      .then(setTask)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleStatusChange = async (status: TaskStatus) => {
    if (!id) return;
    setSaving(true);
    try {
      const updated = await updateTask(id, { status });
      setTask(updated);
    } catch (err) {
      console.error('Failed to update status:', err);
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

  if (!task) return <p className="text-gray-500">Task not found.</p>;

  const infoSections = [
    {
      title: 'Task Info',
      items: [
        { label: 'Title', value: task.title },
        { label: 'Description', value: task.description || '-' },
        { label: 'Type', value: task.type },
        {
          label: 'Priority',
          value: (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[task.priority] || 'bg-gray-100 text-gray-800'}`}>
              {task.priority}
            </span>
          ),
        },
        { label: 'Due Date', value: task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-' },
        { label: 'Completed At', value: task.completedAt ? new Date(task.completedAt).toLocaleString() : '-' },
      ],
    },
    {
      title: 'Assignment Info',
      items: [
        { label: 'Assignee', value: task.assignee?.fullName || 'Unassigned' },
        { label: 'Created By', value: task.createdBy?.fullName || '-' },
        { label: 'Created', value: new Date(task.createdAt).toLocaleString() },
        { label: 'Updated', value: new Date(task.updatedAt).toLocaleString() },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/tasks')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{task.title}</h2>
          <p className="text-sm text-gray-500">Created {new Date(task.createdAt).toLocaleString()}</p>
        </div>
        <StatusBadge status={task.status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {infoSections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              <dl className="grid grid-cols-2 gap-3">
                {section.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs text-gray-500">{item.label}</dt>
                    <dd className="text-sm font-medium text-gray-900">{item.value || '-'}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          {/* Linked Order */}
          {task.order && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Linked Order</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">#{task.order.orderNumber}</p>
                  <p className="text-xs text-gray-500">{task.order.llcName}</p>
                </div>
                <Link
                  to={`/admin/orders/${task.order.id}`}
                  className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  View Order
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Status Update */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Update Status</h3>
            <div className="space-y-2">
              {statusOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleStatusChange(s)}
                  disabled={saving || task.status === s}
                  className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition ${
                    task.status === s
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                  } disabled:opacity-50`}
                >
                  {s.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => navigate(`/admin/tasks/${task.id}/edit`)}
            className="w-full bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            Edit Task
          </button>
        </div>
      </div>
    </div>
  );
}
