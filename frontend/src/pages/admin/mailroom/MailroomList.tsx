import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getMailItems } from '../../../services/mailroomService';
import { useAuth } from '../../../contexts/AuthContext';
import type { MailItem } from '../../../types/admin';
import MailUploadModal from './MailUploadModal';

const statusOptions = ['all', 'RECEIVED', 'OPENED', 'FORWARDED', 'ARCHIVED'];

export default function MailroomList() {
  const [items, setItems] = useState<MailItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');
  const [showUpload, setShowUpload] = useState(false);
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (status !== 'all') params.status = status;
      if (search) params.search = search;
      const data = await getMailItems(params);
      setItems(data.items);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch mail items:', err);
    } finally {
      setLoading(false);
    }
  }, [status, search, page]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const columns = [
    { key: 'subject', label: 'Subject', sortable: true },
    { key: 'sender', label: 'Sender', sortable: true },
    { key: 'status', label: 'Status', render: (item: MailItem) => <StatusBadge status={item.status} /> },
    { key: 'taggedEmail', label: 'Tagged Email', sortable: true },
    { key: 'orderNumber', label: 'Order #', render: (item: MailItem) => item.order?.orderNumber || '-' },
    { key: 'receivedDate', label: 'Received', sortable: true, render: (item: MailItem) => new Date(item.receivedDate).toLocaleDateString() },
  ];

  if (loading && items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Mailroom</h2>
        {canCreate('Mailroom') && (
          <button
            onClick={() => setShowUpload(true)}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Upload className="w-4 h-4" />
            Upload Mail
          </button>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        {statusOptions.map((s) => (
          <button
            key={s}
            onClick={() => { setStatus(s); setPage(1); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              status === s ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {s === 'all' ? 'All' : s}
          </button>
        ))}
      </div>

      <DataTable
        columns={columns}
        data={items}
        searchPlaceholder="Search by subject, sender, or email..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(item) => navigate(`/admin/mailroom/${item.id}`)}
      />

      <MailUploadModal
        isOpen={showUpload}
        onClose={() => setShowUpload(false)}
        onUploaded={() => { setShowUpload(false); fetchItems(); }}
      />
    </div>
  );
}
