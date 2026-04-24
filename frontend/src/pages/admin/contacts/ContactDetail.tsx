import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getContact, updateContact } from '../../../services/contactService';
import StatusBadge from '../../../components/admin/StatusBadge';
import InternalNotes from '../../../components/admin/InternalNotes';
import { useAuth } from '../../../contexts/AuthContext';
import type { Contact, ContactStatus } from '../../../types/admin';

const statusOptions: ContactStatus[] = ['NEW', 'CONTACTED', 'CONVERTED', 'CLOSED'];

export default function ContactDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { canEdit } = useAuth();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    getContact(id)
      .then((data) => {
        setContact(data);
        setNotes(data.notes || '');
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleStatusChange = async (status: ContactStatus) => {
    if (!id) return;
    setSaving(true);
    try {
      const updated = await updateContact(id, { status });
      setContact(updated);
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
      const updated = await updateContact(id, { notes });
      setContact(updated);
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

  if (!contact) return <p className="text-gray-500">Contact not found.</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/contacts')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{contact.name}</h2>
          <p className="text-sm text-gray-500">Submitted {new Date(contact.createdAt).toLocaleString()}</p>
        </div>
        <StatusBadge status={contact.status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs text-gray-500">Name</dt>
                <dd className="text-sm font-medium text-gray-900">{contact.name}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Email</dt>
                <dd className="text-sm font-medium text-gray-900">{contact.email}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Phone</dt>
                <dd className="text-sm font-medium text-gray-900">{contact.phone || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Source</dt>
                <dd className="text-sm font-medium text-gray-900 capitalize">{contact.source.replace(/_/g, ' ')}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Business Type</dt>
                <dd className="text-sm font-medium text-gray-900">{contact.businessType || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Business Name</dt>
                <dd className="text-sm font-medium text-gray-900">{contact.businessName || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">State</dt>
                <dd className="text-sm font-medium text-gray-900">{contact.state || '-'}</dd>
              </div>
            </dl>
          </div>

          {(contact.subject || contact.message) && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">
                {contact.subject ? `Message — ${contact.subject}` : 'Message'}
              </h3>
              {contact.message && (
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{contact.message}</p>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {canEdit('Contacts') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Update Status</h3>
              <div className="space-y-2">
                {statusOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(s)}
                    disabled={saving || contact.status === s}
                    className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition ${
                      contact.status === s
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

          {canEdit('Contacts') && (
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
      <InternalNotes entity="Contact" entityId={id!} />
    </div>
  );
}
