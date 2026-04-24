import { useEffect, useState, useCallback } from 'react';
import DataTable from '../../../components/admin/DataTable';
import { getAuditLogs } from '../../../services/auditService';
import type { AuditLog } from '../../../types/admin';

export default function AuditLogList() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [entity, setEntity] = useState('all');
  const [action, setAction] = useState('all');
  const [search, setSearch] = useState('');

  const entityOptions = ['all', 'Order', 'Contact', 'User', 'Task', 'Document', 'Article', 'Package', 'State', 'Permission'];
  const actionOptions = ['all', 'CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'VIEW', 'EXPORT', 'STATUS_CHANGE'];

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (entity !== 'all') params.entity = entity;
      if (action !== 'all') params.action = action;
      if (search) params.search = search;
      const data = await getAuditLogs(params);
      setLogs(data.logs);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch audit logs:', err);
    } finally {
      setLoading(false);
    }
  }, [entity, action, search, page]);

  useEffect(() => { fetchLogs(); }, [fetchLogs]);

  const columns = [
    {
      key: 'user',
      label: 'User',
      render: (log: AuditLog) => log.user?.fullName || 'System',
    },
    { key: 'action', label: 'Action', sortable: true },
    { key: 'entity', label: 'Entity', sortable: true },
    { key: 'entityId', label: 'Entity ID', render: (log: AuditLog) => log.entityId || '-' },
    { key: 'ipAddress', label: 'IP Address', render: (log: AuditLog) => log.ipAddress || '-' },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (log: AuditLog) => new Date(log.createdAt).toLocaleString(),
    },
  ];

  if (loading && logs.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Audit Logs</h2>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Entity:</label>
          <select
            value={entity}
            onChange={(e) => { setEntity(e.target.value); setPage(1); }}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
          >
            {entityOptions.map((e) => (
              <option key={e} value={e}>{e === 'all' ? 'All Entities' : e}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Action:</label>
          <select
            value={action}
            onChange={(e) => { setAction(e.target.value); setPage(1); }}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
          >
            {actionOptions.map((a) => (
              <option key={a} value={a}>{a === 'all' ? 'All Actions' : a}</option>
            ))}
          </select>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={logs}
        searchPlaceholder="Search audit logs..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
      />
    </div>
  );
}
