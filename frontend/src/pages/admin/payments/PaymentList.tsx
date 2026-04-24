import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getPayments } from '../../../services/paymentService';
import type { Payment } from '../../../types/admin';

const statusOptions = ['all', 'PENDING', 'SUCCEEDED', 'FAILED', 'REFUNDED'];

export default function PaymentList() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchPayments = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (status !== 'all') params.status = status;
      if (search) params.search = search;
      const data = await getPayments(params);
      setPayments(data.payments);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch payments:', err);
    } finally {
      setLoading(false);
    }
  }, [status, search, page]);

  useEffect(() => { fetchPayments(); }, [fetchPayments]);

  const formatAmount = (amount: string, currency: string) => {
    const num = parseFloat(amount);
    return `$${num.toFixed(2)} ${currency.toUpperCase()}`;
  };

  const columns = [
    {
      key: 'orderNumber',
      label: 'Order #',
      sortable: true,
      render: (payment: Payment) => payment.order?.orderNumber || '-',
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      render: (payment: Payment) => formatAmount(payment.amount, payment.currency),
    },
    { key: 'currency', label: 'Currency', render: (payment: Payment) => payment.currency.toUpperCase() },
    { key: 'status', label: 'Status', render: (payment: Payment) => <StatusBadge status={payment.status} /> },
    { key: 'paymentMethod', label: 'Method', render: (payment: Payment) => payment.paymentMethod || '-' },
    {
      key: 'paidAt',
      label: 'Paid At',
      sortable: true,
      render: (payment: Payment) => payment.paidAt ? new Date(payment.paidAt).toLocaleDateString() : '-',
    },
  ];

  if (loading && payments.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Payments</h2>

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
        data={payments}
        searchPlaceholder="Search by order number or email..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(payment) => navigate(`/admin/payments/${payment.id}`)}
      />
    </div>
  );
}
