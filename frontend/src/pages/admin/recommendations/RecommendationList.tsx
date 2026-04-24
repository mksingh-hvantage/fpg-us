import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getRecommendations } from '../../../services/recommendationService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Recommendation } from '../../../types/admin';

export default function RecommendationList() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchRecommendations = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      const data = await getRecommendations(params);
      setRecommendations(data.recommendations);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch recommendations:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchRecommendations(); }, [fetchRecommendations]);

  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'service', label: 'Service', render: (r: Recommendation) => r.service?.name || '-' },
    { key: 'targetState', label: 'State', sortable: true, render: (r: Recommendation) => r.targetState || '-' },
    { key: 'triggerEvent', label: 'Trigger', sortable: true, render: (r: Recommendation) => r.triggerEvent || '-' },
    { key: 'active', label: 'Active', render: (r: Recommendation) => <StatusBadge status={r.active ? 'ACTIVE' : 'INACTIVE'} /> },
    { key: 'priority', label: 'Priority', sortable: true },
    { key: 'pushes', label: 'Pushes', render: (r: Recommendation) => r._count?.pushes ?? 0 },
  ];

  if (loading && recommendations.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Recommendations</h2>
        {canCreate('Recommendations') && (
          <button
            onClick={() => navigate('/admin/recommendations/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            New Rule
          </button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={recommendations}
        searchPlaceholder="Search recommendations..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(r) => navigate(`/admin/recommendations/${r.id}`)}
      />
    </div>
  );
}
