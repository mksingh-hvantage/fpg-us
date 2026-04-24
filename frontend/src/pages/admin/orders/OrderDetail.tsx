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

interface ConfirmModal {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function InfoGrid({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs text-gray-500">{item.label}</dt>
          <dd className="text-sm font-medium text-gray-900">{item.value || '-'}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { canEdit } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [staffUsers, setStaffUsers] = useState<User[]>([]);
  const [confirm, setConfirm] = useState<ConfirmModal>({ open: false, title: '', message: '', onConfirm: () => {} });

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

  const showConfirm = (title: string, message: string, onConfirm: () => void) => {
    setConfirm({ open: true, title, message, onConfirm });
  };

  const handleAssign = (assignedToId: string) => {
    const staffName = staffUsers.find(u => u.id === assignedToId)?.fullName || 'Unassigned';
    showConfirm(
      'Assign Order',
      `Are you sure you want to assign this order to "${staffName}"?`,
      async () => {
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
      }
    );
  };

  const handleStatusChange = (status: OrderStatus) => {
    showConfirm(
      'Update Status',
      `Are you sure you want to change the order status to "${status}"?`,
      async () => {
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
      }
    );
  };

  const handleSaveNotes = () => {
    showConfirm(
      'Save Notes',
      'Are you sure you want to save these notes?',
      async () => {
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
      }
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  if (!order) return <p className="text-gray-500">Order not found.</p>;

  const addr = order.companyAddress;
  const tax = order.taxInfo;

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
          {/* Formation Info */}
          <InfoCard title="Formation Info">
            <InfoGrid items={[
              { label: 'LLC Name', value: order.llcName },
              { label: 'Designator', value: order.designator },
              { label: 'State', value: order.state },
              { label: 'Package', value: order.packageType },
              { label: 'Management Method', value: order.managementMethod },
            ]} />
          </InfoCard>

          {/* Contact Info */}
          <InfoCard title="Contact Info">
            <InfoGrid items={[
              { label: 'First Name', value: order.contactFirstName },
              { label: 'Last Name', value: order.contactLastName },
              { label: 'Email', value: order.contactEmail },
              { label: 'Phone', value: order.contactPhone },
            ]} />
          </InfoCard>

          {/* Company Address */}
          {addr && (
            <InfoCard title="Company Address">
              <InfoGrid items={[
                { label: 'Address Type', value: addr.addressType },
                { label: 'Street', value: addr.street },
                { label: 'City', value: addr.city },
                { label: 'State', value: addr.state },
                { label: 'ZIP', value: addr.zip },
                { label: 'Country', value: addr.country },
              ]} />
            </InfoCard>
          )}

          {/* Members */}
          {order.members && order.members.length > 0 && (
            <InfoCard title="Members / Organizers">
              <div className="space-y-4">
                {order.members.map((member, i) => (
                  <div key={i} className={i > 0 ? 'pt-4 border-t border-gray-100' : ''}>
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Member {i + 1}</p>
                    <InfoGrid items={[
                      { label: 'Name', value: `${member.firstName || ''} ${member.lastName || ''}`.trim() },
                      { label: 'Type', value: member.type },
                      { label: 'Ownership', value: member.ownership ? `${member.ownership}%` : '-' },
                      { label: 'State', value: member.state },
                      { label: 'Country', value: member.country },
                      { label: 'Use Company Address', value: member.useAddress === 'true' || member.useAddress === true as unknown as string ? 'Yes' : member.useAddress === 'false' || member.useAddress === false as unknown as string ? 'No' : String(member.useAddress || '-') },
                    ]} />
                  </div>
                ))}
              </div>
            </InfoCard>
          )}

          {/* Registered Agent */}
          <InfoCard title="Registered Agent">
            <InfoGrid items={[
              { label: 'Agent Option', value: order.agentOption === 'bizee' ? 'FPG Registered Agent' : order.agentOption === 'own' ? 'Own Agent' : order.agentOption },
              ...(order.agentDetails ? [
                { label: 'Agent Name', value: order.agentDetails.name || order.agentDetails.agentName || '-' },
                { label: 'Agent Address', value: order.agentDetails.address || order.agentDetails.agentAddress || '-' },
              ] : []),
            ]} />
          </InfoCard>

          {/* Tax / EIN Info */}
          {tax && (
            <InfoCard title="Tax / EIN Info">
              <InfoGrid items={[
                { label: 'First Name', value: tax.firstName },
                { label: 'Last Name', value: tax.lastName },
                { label: 'SSN', value: tax.ssn || '-' },
                { label: 'ITIN', value: tax.itin || '-' },
                { label: 'ID Type', value: tax.idType || '-' },
                { label: 'Foreign', value: tax.foreign === 'yes' ? 'Yes' : 'No' },
                { label: 'Street', value: tax.street },
                { label: 'City', value: tax.city },
                { label: 'State', value: tax.state },
                { label: 'ZIP', value: tax.zip },
                { label: 'Country', value: tax.country },
              ]} />
            </InfoCard>
          )}

          {/* Expedited Filing */}
          {order.expeditedFiling && (
            <InfoCard title="Expedited Filing">
              <InfoGrid items={[
                { label: 'Selected', value: order.expeditedFiling.selected === 'normal' ? 'Normal Processing' : order.expeditedFiling.selected },
                { label: 'Fee', value: `$${order.expeditedFiling.fee || 0}` },
              ]} />
            </InfoCard>
          )}

          {/* Additional Services */}
          <InfoCard title="Additional Services">
            <InfoGrid items={[
              { label: 'Business Banking', value: order.wantsBanking ? 'Yes' : 'No' },
              { label: 'Tax Consultation', value: order.taxConsultation === 'yes' ? 'Yes' : 'No' },
            ]} />
          </InfoCard>

          {/* Add-ons */}
          {order.addons && Object.keys(order.addons).length > 0 && (
            <InfoCard title="Add-ons">
              <div className="space-y-2">
                {Object.entries(order.addons).map(([key, addon]) => (
                  <div key={key} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{addon.name}</span>
                    <span className="font-medium text-gray-900">{addon.price > 0 ? `$${addon.price}` : 'Included'}</span>
                  </div>
                ))}
              </div>
            </InfoCard>
          )}

          {/* Pricing Summary */}
          <InfoCard title="Pricing Summary">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Filing Fee</span>
                <span className="text-gray-900">{order.filingFee ? `$${order.filingFee}` : '-'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Package Price</span>
                <span className="text-gray-900">{order.packagePrice ? `$${order.packagePrice}` : '-'}</span>
              </div>
              {order.expeditedFiling && order.expeditedFiling.fee > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expedited Fee</span>
                  <span className="text-gray-900">${order.expeditedFiling.fee}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-200">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">{order.total ? `$${order.total}` : '-'}</span>
              </div>
            </div>
          </InfoCard>
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

      {/* Confirmation Modal */}
      {confirm.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{confirm.title}</h3>
            <p className="text-sm text-gray-600 mb-6">{confirm.message}</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirm(prev => ({ ...prev, open: false }))}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setConfirm(prev => ({ ...prev, open: false }));
                  confirm.onConfirm();
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
