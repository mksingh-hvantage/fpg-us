import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getOrder, updateOrder } from '../../../services/orderService';
import { getUsers } from '../../../services/userService';
import StatusBadge from '../../../components/admin/StatusBadge';
import InternalNotes from '../../../components/admin/InternalNotes';
import { useAuth } from '../../../contexts/AuthContext';
import type { Order, OrderStatus, User } from '../../../types/admin';

const statusOptions: OrderStatus[] = ['PENDING', 'PROCESSING', 'FILED', 'COMPLETED', 'CANCELLED'];

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { canEdit } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [staffUsers, setStaffUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!id) return;
    getOrder(id)
      .then((data) => {
        setOrder(data);
        setNotes(data.notes || '');
      })
      .catch(console.error)
      .finally(() => setLoading(false));
    getUsers().then(setStaffUsers).catch(console.error);
  }, [id]);

  const handleAssign = async (assignedToId: string) => {
    if (!id) return;
    setSaving(true);
    try {
      const updated = await updateOrder(id, { assignedToId: assignedToId || undefined });
      setOrder(updated);
    } catch (err) {
      console.error('Failed to assign order:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleStatusChange = async (status: OrderStatus) => {
    if (!id) return;
    setSaving(true);
    try {
      const updated = await updateOrder(id, { status });
      setOrder(updated);
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!id) return;
    setSaving(true);
    try {
      const updated = await updateOrder(id, { notes });
      setOrder(updated);
    } catch (err) {
      console.error('Failed to save notes:', err);
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

  if (!order) return <p className="text-gray-500">Order not found.</p>;

  const infoSections = [
    {
      title: 'Formation Info',
      items: [
        { label: 'LLC Name', value: order.llcName },
        { label: 'Designator', value: order.designator },
        { label: 'State', value: order.state },
        { label: 'Package', value: order.packageType },
        { label: 'Management Method', value: order.managementMethod },
      ],
    },
    {
      title: 'Contact Info',
      items: [
        { label: 'Name', value: `${order.contactFirstName} ${order.contactLastName}` },
        { label: 'Email', value: order.contactEmail },
        { label: 'Phone', value: order.contactPhone },
      ],
    },
    {
      title: 'Pricing',
      items: [
        { label: 'Filing Fee', value: order.filingFee ? `$${order.filingFee}` : '-' },
        { label: 'Package Price', value: order.packagePrice ? `$${order.packagePrice}` : '-' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/orders')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Order #{order.orderNumber}</h2>
          <p className="text-sm text-gray-500">Created {new Date(order.createdAt).toLocaleString()}</p>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {infoSections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              <dl className="grid grid-cols-2 gap-3">
                {section.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs text-gray-500">{item.label}</dt>
                    <dd className="text-sm font-medium text-gray-900">{item.value || '-'}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          {/* Company Address */}
          {order.companyAddress && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Company Address</h3>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">{JSON.stringify(order.companyAddress, null, 2)}</pre>
            </div>
          )}

          {/* Members */}
          {order.members && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Members</h3>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">{JSON.stringify(order.members, null, 2)}</pre>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Status Update */}
          {canEdit('Orders') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Update Status</h3>
              <div className="space-y-2">
                {statusOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(s)}
                    disabled={saving || order.status === s}
                    className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition ${
                      order.status === s
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    } disabled:opacity-50`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Assign Staff */}
          {canEdit('Orders') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Assign To</h3>
              <select
                value={order.assignedToId || ''}
                onChange={(e) => handleAssign(e.target.value)}
                disabled={saving}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              >
                <option value="">Unassigned</option>
                {staffUsers.map((u) => (
                  <option key={u.id} value={u.id}>{u.fullName}</option>
                ))}
              </select>
            </div>
          )}

          {/* Notes */}
          {canEdit('Orders') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                placeholder="Add internal notes..."
              />
              <button
                onClick={handleSaveNotes}
                disabled={saving}
                className="mt-2 w-full bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Notes'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Internal Notes */}
      <InternalNotes entity="Order" entityId={id!} />
    </div>
  );
}
