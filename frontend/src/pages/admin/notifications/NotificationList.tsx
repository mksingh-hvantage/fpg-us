import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getAllNotifications } from '../../../services/notificationService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Notification } from '../../../types/admin';

export default function NotificationList() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      const data = await getAllNotifications(params);
      setNotifications(data.notifications);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch notifications:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchNotifications(); }, [fetchNotifications]);

  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'type', label: 'Type', render: (n: Notification) => <StatusBadge status={n.type} /> },
    { key: 'targetEmail', label: 'Target Email', render: (n: Notification) => n.targetEmail || '-' },
    { key: 'targetRole', label: 'Target Role', render: (n: Notification) => n.targetRole ? <StatusBadge status={n.targetRole} /> : '-' },
    { key: 'createdBy', label: 'Created By', render: (n: Notification) => n.createdBy?.fullName || '-' },
    { key: 'createdAt', label: 'Date', sortable: true, render: (n: Notification) => new Date(n.createdAt).toLocaleDateString() },
  ];

  if (loading && notifications.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        {canCreate('Notifications') && (
          <button
            onClick={() => navigate('/admin/notifications/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            Send Notification
          </button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={notifications}
        searchPlaceholder="Search notifications..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
      />
    </div>
  );
}
