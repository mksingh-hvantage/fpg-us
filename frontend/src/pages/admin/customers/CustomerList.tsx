import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToggleLeft, ToggleRight, Eye } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import { getCustomers, toggleCustomerActive } from '../../../services/customerAdminService';
import type { AdminCustomer } from '../../../services/customerAdminService';

export default function CustomerList() {
  const [customers, setCustomers] = useState<AdminCustomer[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchCustomers = useCallback(async () => {
    try {
      const data = await getCustomers({ search: search || undefined, page, limit: 20 });
      setCustomers(data.customers);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch customers:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchCustomers(); }, [fetchCustomers]);

  const handleSearch = (q: string) => {
    setSearch(q);
    setPage(1);
  };

  const handleToggleActive = async (id: string) => {
    try {
      await toggleCustomerActive(id);
      fetchCustomers();
    } catch (err) {
      console.error('Failed to toggle customer:', err);
    }
  };

  const columns = [
    {
      key: 'name', label: 'Name', sortable: true,
      render: (c: AdminCustomer) => (
        <div>
          <p className="font-medium">{c.firstName} {c.lastName}</p>
          <p className="text-xs text-gray-500">{c.email}</p>
        </div>
      ),
    },
    { key: 'businessName', label: 'Business', sortable: true, render: (c: AdminCustomer) => c.businessName || '-' },
    { key: 'state', label: 'State', sortable: true, render: (c: AdminCustomer) => c.state || '-' },
    {
      key: 'orders', label: 'Orders',
      render: (c: AdminCustomer) => (
        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
          {c._count?.orders ?? 0}
        </span>
      ),
    },
    {
      key: 'isActive', label: 'Status',
      render: (c: AdminCustomer) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${c.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {c.isActive ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    {
      key: 'createdAt', label: 'Registered', sortable: true,
      render: (c: AdminCustomer) => new Date(c.createdAt).toLocaleDateString(),
    },
    {
      key: 'actions', label: 'Actions',
      render: (c: AdminCustomer) => (
        <div className="flex gap-1">
          <button onClick={(e) => { e.stopPropagation(); navigate(`/admin/customers/${c.id}`); }} className="p-1.5 rounded hover:bg-gray-100 text-gray-500" title="View">
            <Eye className="w-4 h-4" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleToggleActive(c.id); }} className="p-1.5 rounded hover:bg-gray-100 text-yellow-600" title={c.isActive ? 'Deactivate' : 'Activate'}>
            {c.isActive ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
          </button>
        </div>
      ),
    },
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
        <span className="text-sm text-gray-500">{total} total</span>
      </div>

      <DataTable
        columns={columns}
        data={customers}
        searchPlaceholder="Search customers..."
        onSearch={handleSearch}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(c) => navigate(`/admin/customers/${c.id}`)}
      />
    </div>
  );
}
