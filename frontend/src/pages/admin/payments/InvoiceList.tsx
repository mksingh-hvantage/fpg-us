import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import { getInvoices } from '../../../services/invoiceService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Invoice } from '../../../types/admin';

export default function InvoiceList() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate } = useAuth();

  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      const data = await getInvoices(params);
      setInvoices(data.invoices);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch invoices:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchInvoices(); }, [fetchInvoices]);

  const columns = [
    { key: 'invoiceNumber', label: 'Invoice #', sortable: true },
    { key: 'customerName', label: 'Customer', sortable: true },
    { key: 'customerEmail', label: 'Email', sortable: true },
    {
      key: 'total',
      label: 'Total',
      sortable: true,
      render: (invoice: Invoice) => `$${parseFloat(invoice.total).toFixed(2)}`,
    },
    {
      key: 'issuedAt',
      label: 'Issued',
      sortable: true,
      render: (invoice: Invoice) => new Date(invoice.issuedAt).toLocaleDateString(),
    },
    {
      key: 'paidAt',
      label: 'Paid',
      render: (invoice: Invoice) => invoice.paidAt ? new Date(invoice.paidAt).toLocaleDateString() : '-',
    },
    {
      key: 'orderNumber',
      label: 'Order #',
      render: (invoice: Invoice) => invoice.order?.orderNumber || '-',
    },
  ];

  if (loading && invoices.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Invoices</h2>
        {canCreate('Invoices') && (
          <button
            onClick={() => navigate('/admin/invoices/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            Generate Invoice
          </button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={invoices}
        searchPlaceholder="Search by invoice number, customer name, or email..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(invoice) => navigate(`/admin/invoices/${invoice.id}`)}
      />
    </div>
  );
}
