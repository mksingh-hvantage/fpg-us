import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getTasks } from '../../../services/taskService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Task, TaskStatus, TaskType, TaskPriority } from '../../../types/admin';

const statusOptions: Array<'all' | TaskStatus> = ['all', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
const typeOptions: Array<'all' | TaskType> = ['all', 'COMPLIANCE', 'UPSELL', 'FILING', 'GENERAL'];
const priorityOptions: Array<'all' | TaskPriority> = ['all', 'LOW', 'MEDIUM', 'HIGH', 'URGENT'];

const priorityColors: Record<TaskPriority, string> = {
  LOW: 'bg-gray-100 text-gray-800',
  MEDIUM: 'bg-blue-100 text-blue-800',
  HIGH: 'bg-orange-100 text-orange-800',
  URGENT: 'bg-red-100 text-red-800',
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState<'all' | TaskStatus>('all');
  const [type, setType] = useState<'all' | TaskType>('all');
  const [priority, setPriority] = useState<'all' | TaskPriority>('all');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (status !== 'all') params.status = status;
      if (type !== 'all') params.type = type;
      if (priority !== 'all') params.priority = priority;
      if (search) params.search = search;
      const data = await getTasks(params);
      setTasks(data.tasks);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    } finally {
      setLoading(false);
    }
  }, [status, type, priority, search, page]);

  useEffect(() => { fetchTasks(); }, [fetchTasks]);

  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    {
      key: 'priority',
      label: 'Priority',
      sortable: true,
      render: (task: Task) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      ),
    },
    {
      key: 'assignee',
      label: 'Assignee',
      render: (task: Task) => task.assignee?.fullName || '-',
    },
    {
      key: 'order',
      label: 'Order',
      render: (task: Task) => task.order?.orderNumber || '-',
    },
    {
      key: 'dueDate',
      label: 'Due Date',
      sortable: true,
      render: (task: Task) => task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-',
    },
    {
      key: 'status',
      label: 'Status',
      render: (task: Task) => <StatusBadge status={task.status} />,
    },
  ];

  if (loading && tasks.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Tasks</h2>
        {canCreate('Tasks') && (
          <button
            onClick={() => navigate('/admin/tasks/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            New Task
          </button>
        )}
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 flex-wrap">
        {statusOptions.map((s) => (
          <button
            key={s}
            onClick={() => { setStatus(s); setPage(1); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              status === s ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {s === 'all' ? 'All' : s.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {/* Type & Priority Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Type:</label>
          <select
            value={type}
            onChange={(e) => { setType(e.target.value as 'all' | TaskType); setPage(1); }}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
          >
            {typeOptions.map((t) => (
              <option key={t} value={t}>{t === 'all' ? 'All Types' : t}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Priority:</label>
          <select
            value={priority}
            onChange={(e) => { setPriority(e.target.value as 'all' | TaskPriority); setPage(1); }}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
          >
            {priorityOptions.map((p) => (
              <option key={p} value={p}>{p === 'all' ? 'All Priorities' : p}</option>
            ))}
          </select>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={tasks}
        searchPlaceholder="Search tasks..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(task) => navigate(`/admin/tasks/${task.id}`)}
      />
    </div>
  );
}
