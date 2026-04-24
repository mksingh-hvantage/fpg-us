import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getFaqs } from '../../../services/faqService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Faq } from '../../../types/admin';

export default function FaqList() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchFaqs = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      const data = await getFaqs(params);
      setFaqs(data.faqs);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch FAQs:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchFaqs(); }, [fetchFaqs]);

  const columns = [
    { key: 'question', label: 'Question', sortable: true },
    { key: 'category', label: 'Category', sortable: true, render: (f: Faq) => f.category || '-' },
    { key: 'sortOrder', label: 'Sort Order', sortable: true },
    { key: 'published', label: 'Published', render: (f: Faq) => <StatusBadge status={f.published ? 'PUBLISHED' : 'DRAFT'} /> },
  ];

  if (loading && faqs.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">FAQs</h2>
        {canCreate('FAQ') && (
          <button
            onClick={() => navigate('/admin/cms/faqs/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            New FAQ
          </button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={faqs}
        searchPlaceholder="Search FAQs..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(f) => navigate(`/admin/cms/faqs/${f.id}`)}
      />
    </div>
  );
}
