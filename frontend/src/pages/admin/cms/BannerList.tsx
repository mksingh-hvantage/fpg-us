import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getBanners } from '../../../services/bannerService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Banner } from '../../../types/admin';

export default function BannerList() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchBanners = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      const data = await getBanners(params);
      setBanners(data.banners);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch banners:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchBanners(); }, [fetchBanners]);

  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'type', label: 'Type', render: (b: Banner) => <StatusBadge status={b.type.toUpperCase()} /> },
    { key: 'startDate', label: 'Start Date', sortable: true, render: (b: Banner) => b.startDate ? new Date(b.startDate).toLocaleDateString() : '-' },
    { key: 'endDate', label: 'End Date', sortable: true, render: (b: Banner) => b.endDate ? new Date(b.endDate).toLocaleDateString() : '-' },
    { key: 'active', label: 'Active', render: (b: Banner) => (
      <span className={`inline-flex items-center w-8 h-4.5 rounded-full ${b.active ? 'bg-green-500' : 'bg-gray-300'}`}>
        <span className={`w-3.5 h-3.5 rounded-full bg-white shadow transform transition ${b.active ? 'translate-x-4' : 'translate-x-0.5'}`} />
      </span>
    )},
    { key: 'sortOrder', label: 'Sort Order', sortable: true },
  ];

  if (loading && banners.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Banners</h2>
        {canCreate('Banners') && (
          <button
            onClick={() => navigate('/admin/cms/banners/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            New Banner
          </button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={banners}
        searchPlaceholder="Search banners..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(b) => navigate(`/admin/cms/banners/${b.id}`)}
      />
    </div>
  );
}
