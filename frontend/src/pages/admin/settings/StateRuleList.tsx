import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2 } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getStateRules, deleteStateRule } from '../../../services/stateRuleService';
import type { StateFilingRule } from '../../../types/admin';

export default function StateRuleList() {
  const [rules, setRules] = useState<StateFilingRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchRules = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      const data = await getStateRules(params);
      setRules(data.rules);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch state rules:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchRules(); }, [fetchRules]);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm('Are you sure you want to delete this rule?')) return;
    try {
      await deleteStateRule(id);
      fetchRules();
    } catch (err) {
      console.error('Failed to delete state rule:', err);
    }
  };

  const columns = [
    {
      key: 'state',
      label: 'State',
      sortable: true,
      render: (rule: StateFilingRule) => rule.state?.name || rule.stateSlug,
    },
    { key: 'ruleType', label: 'Rule Type', sortable: true },
    { key: 'dueDate', label: 'Due Date', render: (rule: StateFilingRule) => rule.dueDate || '-' },
    {
      key: 'fee',
      label: 'Fee',
      render: (rule: StateFilingRule) => rule.fee ? `$${parseFloat(rule.fee).toFixed(2)}` : '-',
    },
    {
      key: 'penaltyFee',
      label: 'Penalty Fee',
      render: (rule: StateFilingRule) => rule.penaltyFee ? `$${parseFloat(rule.penaltyFee).toFixed(2)}` : '-',
    },
    {
      key: 'active',
      label: 'Active',
      render: (rule: StateFilingRule) => <StatusBadge status={rule.active ? 'ACTIVE' : 'INACTIVE'} />,
    },
    {
      key: 'actions',
      label: '',
      render: (rule: StateFilingRule) => (
        <button
          onClick={(e) => handleDelete(e, rule.id)}
          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
          title="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      ),
    },
  ];

  if (loading && rules.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">State Filing Rules</h2>
        <button
          onClick={() => navigate('/admin/state-rules/new')}
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
        >
          <Plus className="w-4 h-4" />
          New Rule
        </button>
      </div>

      <DataTable
        columns={columns}
        data={rules}
        searchPlaceholder="Search by state or rule type..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(rule) => navigate(`/admin/state-rules/${rule.id}`)}
      />
    </div>
  );
}
