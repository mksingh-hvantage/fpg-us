import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Building2, MapPin, ShoppingCart } from 'lucide-react';
import { getCustomerById, updateCustomer } from '../../../services/customerAdminService';
import type { AdminCustomerDetail } from '../../../services/customerAdminService';
import StatusBadge from '../../../components/admin/StatusBadge';

export default function CustomerDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<AdminCustomerDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', businessName: '', state: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await getCustomerById(id);
        setCustomer(data);
        setForm({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone || '',
          businessName: data.businessName || '',
          state: data.state || '',
        });
      } catch (err) {
        console.error('Failed to fetch customer:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleSave = async () => {
    if (!id) return;
    setSaving(true);
    try {
      const updated = await updateCustomer(id, form);
      setCustomer((prev) => prev ? { ...prev, ...updated } : prev);
      setEditing(false);
    } catch (err) {
      console.error('Failed to update customer:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  if (!customer) {
    return <p className="text-center text-gray-500 py-12">Customer not found</p>;
  }

  return (
    <div className="space-y-6">
      <button onClick={() => navigate('/admin/customers')} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Customers
      </button>

      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{customer.firstName} {customer.lastName}</h2>
          <p className="text-gray-500">{customer.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${customer.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {customer.isActive ? 'Active' : 'Inactive'}
          </span>
          <button onClick={() => setEditing(!editing)} className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50">
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info Card */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h3 className="font-semibold text-gray-900">Customer Info</h3>

          {editing ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500">First Name</label>
                  <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Last Name</label>
                  <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs text-gray-500">Business Name</label>
                <input value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs text-gray-500">State</label>
                <input value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
              </div>
              <button onClick={handleSave} disabled={saving} className="w-full bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50">
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{customer.phone || 'Not provided'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span>{customer.businessName || 'Not provided'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{customer.state || 'Not provided'}</span>
              </div>
              <hr />
              <div className="text-xs text-gray-500 space-y-1">
                <p>Registered: {new Date(customer.createdAt).toLocaleString()}</p>
                <p>Last login: {customer.lastLoginAt ? new Date(customer.lastLoginAt).toLocaleString() : 'Never'}</p>
              </div>
            </div>
          )}
        </div>

        {/* Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-gray-400" />
            <h3 className="font-semibold text-gray-900">Orders ({customer.orders.length})</h3>
          </div>
          {customer.orders.length === 0 ? (
            <p className="p-6 text-center text-gray-500">No orders yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order #</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Package</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">State</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {customer.orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigate(`/admin/orders/${order.id}`)}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-cyan-600">{order.orderNumber}</td>
                      <td className="px-4 py-3 text-sm">{order.llcName}</td>
                      <td className="px-4 py-3 text-sm">{order.packageType}</td>
                      <td className="px-4 py-3 text-sm">{order.state}</td>
                      <td className="px-4 py-3 text-sm"><StatusBadge status={order.status} /></td>
                      <td className="px-4 py-3 text-sm">{order.total ? `$${order.total}` : '-'}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
