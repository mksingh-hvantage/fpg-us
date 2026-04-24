import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getOrders } from '../../../services/orderService';
import type { Order } from '../../../types/admin';

const statusOptions = ['all', 'PENDING', 'PROCESSING', 'FILED', 'COMPLETED', 'CANCELLED'];

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getOrders({ status, search, page, limit: 20 });
      setOrders(data.orders);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    } finally {
      setLoading(false);
    }
  }, [status, search, page]);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);

  const columns = [
    { key: 'orderNumber', label: 'Order #', sortable: true },
    { key: 'llcName', label: 'LLC Name', sortable: true },
    { key: 'state', label: 'State', sortable: true },
    { key: 'packageType', label: 'Package', sortable: true },
    { key: 'contactEmail', label: 'Email', sortable: true },
    { key: 'status', label: 'Status', render: (order: Order) => <StatusBadge status={order.status} /> },
    { key: 'createdAt', label: 'Date', sortable: true, render: (order: Order) => new Date(order.createdAt).toLocaleDateString() },
  ];

  if (loading && orders.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Orders</h2>

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
        data={orders}
        searchPlaceholder="Search by name, email, or order number..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(order) => navigate(`/admin/orders/${order.id}`)}
      />
    </div>
  );
}
