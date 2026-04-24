import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import { getStates } from '../../../services/stateService';
import { useAuth } from '../../../contexts/AuthContext';
import type { State } from '../../../types/admin';

export default function StateList() {
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { canEdit } = useAuth();

  useEffect(() => {
    getStates()
      .then(setStates)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const columns = [
    { key: 'name', label: 'State', sortable: true },
    { key: 'filingFee', label: 'Filing Fee', sortable: true },
    { key: 'processingTime', label: 'Processing Time' },
    { key: 'annualReportFee', label: 'Annual Report Fee' },
    { key: 'updatedAt', label: 'Last Updated', sortable: true, render: (s: State) => new Date(s.updatedAt).toLocaleDateString() },
    { key: 'actions', label: '', render: (s: State) => canEdit('States') ? (
      <button
        onClick={(e) => { e.stopPropagation(); navigate(`/admin/states/${s.id}`); }}
        className="p-1.5 rounded-lg hover:bg-cyan-50 text-gray-400 hover:text-cyan-600 transition"
      >
        <Pencil className="w-4 h-4" />
      </button>
    ) : null },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">States</h2>
      <DataTable
        columns={columns}
        data={states}
        searchPlaceholder="Search states..."
        onRowClick={(state) => navigate(`/admin/states/${state.id}`)}
      />
    </div>
  );
}
