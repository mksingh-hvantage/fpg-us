import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getContacts } from '../../../services/contactService';
import type { Contact } from '../../../types/admin';

const statusOptions = ['all', 'NEW', 'CONTACTED', 'CONVERTED', 'CLOSED'];
const sourceOptions = ['all', 'contact_form', 'support', 'get_started', 'contact_page'];

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('all');
  const [source, setSource] = useState('all');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const [exporting, setExporting] = useState(false);

  const exportCSV = async () => {
    setExporting(true);
    try {
      const data = await getContacts({ page: 1, limit: 10000 });
      const rows = data.contacts;
      const headers = ['Name', 'Email', 'Phone', 'Source', 'Subject', 'Message', 'Business Type', 'Business Name', 'State', 'Status', 'Notes', 'Date'];
      const csvContent = [
        headers.join(','),
        ...rows.map((c) => [
          `"${(c.name || '').replace(/"/g, '""')}"`,
          `"${(c.email || '').replace(/"/g, '""')}"`,
          `"${(c.phone || '').replace(/"/g, '""')}"`,
          `"${(c.source || '').replace(/"/g, '""')}"`,
          `"${(c.subject || '').replace(/"/g, '""')}"`,
          `"${(c.message || '').replace(/"/g, '""')}"`,
          `"${(c.businessType || '').replace(/"/g, '""')}"`,
          `"${(c.businessName || '').replace(/"/g, '""')}"`,
          `"${(c.state || '').replace(/"/g, '""')}"`,
          `"${c.status}"`,
          `"${(c.notes || '').replace(/"/g, '""')}"`,
          `"${new Date(c.createdAt).toLocaleDateString()}"`,
        ].join(',')),
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `contacts-${new Date().toISOString().slice(0, 10)}.csv`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export contacts:', err);
    } finally {
      setExporting(false);
    }
  };

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getContacts({ status, source, search, page, limit: 20 });
      setContacts(data.contacts);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch contacts:', err);
    } finally {
      setLoading(false);
    }
  }, [status, source, search, page]);

  useEffect(() => { fetchContacts(); }, [fetchContacts]);

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'phone', label: 'Phone' },
    { key: 'source', label: 'Source', render: (c: Contact) => <span className="capitalize">{c.source.replace(/_/g, ' ')}</span> },
    { key: 'status', label: 'Status', render: (c: Contact) => <StatusBadge status={c.status} /> },
    { key: 'createdAt', label: 'Date', sortable: true, render: (c: Contact) => new Date(c.createdAt).toLocaleDateString() },
  ];

  if (loading && contacts.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Contacts / Leads</h2>
        <button
          onClick={exportCSV}
          disabled={exporting}
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          {exporting ? 'Exporting...' : 'Export CSV'}
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-2">
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
        <select
          value={source}
          onChange={(e) => { setSource(e.target.value); setPage(1); }}
          className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
        >
          {sourceOptions.map((s) => (
            <option key={s} value={s}>{s === 'all' ? 'All Sources' : s.replace(/_/g, ' ')}</option>
          ))}
        </select>
      </div>

      <DataTable
        columns={columns}
        data={contacts}
        searchPlaceholder="Search by name or email..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(contact) => navigate(`/admin/contacts/${contact.id}`)}
      />
    </div>
  );
}
