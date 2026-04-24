import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import { getServices } from '../../../services/serviceManagementService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Service } from '../../../types/admin';

export default function ServiceList() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchServices = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      const data = await getServices(params);
      setServices(data.services);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch services:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchServices(); }, [fetchServices]);

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'category', label: 'Category', sortable: true, render: (s: Service) => s.category || '-' },
    { key: 'basePrice', label: 'Base Price', sortable: true, render: (s: Service) => `$${Number(s.basePrice).toFixed(2)}` },
    { key: 'isRecurring', label: 'Recurring', render: (s: Service) => (
      <span className={`text-xs font-medium ${s.isRecurring ? 'text-green-600' : 'text-gray-400'}`}>
        {s.isRecurring ? 'Yes' : 'No'}
      </span>
    )},
    { key: 'published', label: 'Published', render: (s: Service) => (
      <span className={`inline-flex items-center w-8 h-4.5 rounded-full ${s.published ? 'bg-green-500' : 'bg-gray-300'}`}>
        <span className={`w-3.5 h-3.5 rounded-full bg-white shadow transform transition ${s.published ? 'translate-x-4' : 'translate-x-0.5'}`} />
      </span>
    )},
    { key: 'sortOrder', label: 'Sort Order', sortable: true },
  ];

  if (loading && services.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Services</h2>
        {canCreate('Services') && (
          <button
            onClick={() => navigate('/admin/services/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            New Service
          </button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={services}
        searchPlaceholder="Search services..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(service) => navigate(`/admin/services/${service.id}`)}
      />
    </div>
  );
}
