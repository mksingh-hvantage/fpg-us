import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getMailItem, updateMailItem } from '../../../services/mailroomService';
import type { MailItem, MailStatus } from '../../../types/admin';

const statusOptions: MailStatus[] = ['RECEIVED', 'OPENED', 'FORWARDED', 'ARCHIVED'];

export default function MailroomDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<MailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    getMailItem(id)
      .then(setItem)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleStatusChange = async (status: MailStatus) => {
    if (!id) return;
    setSaving(true);
    try {
      const updated = await updateMailItem(id, { status });
      setItem(updated);
    } catch (err) {
      console.error('Failed to update status:', err);
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

  if (!item) return <p className="text-gray-500">Mail item not found.</p>;

  const isImage = item.scanUrl && /\.(jpg|jpeg|png|gif|webp)$/i.test(item.scanUrl);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/mailroom')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{item.subject}</h2>
          <p className="text-sm text-gray-500">Received {new Date(item.receivedDate).toLocaleString()}</p>
        </div>
        <StatusBadge status={item.status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Mail Details</h3>
            <dl className="grid grid-cols-2 gap-3">
              <div>
                <dt className="text-xs text-gray-500">Subject</dt>
                <dd className="text-sm font-medium text-gray-900">{item.subject}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Sender</dt>
                <dd className="text-sm font-medium text-gray-900">{item.sender || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Tagged Email</dt>
                <dd className="text-sm font-medium text-gray-900">{item.taggedEmail || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Linked Order</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {item.order ? (
                    <button
                      onClick={() => navigate(`/admin/orders/${item.order!.id}`)}
                      className="text-cyan-600 hover:underline"
                    >
                      #{item.order.orderNumber} - {item.order.llcName}
                    </button>
                  ) : '-'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Uploaded By</dt>
                <dd className="text-sm font-medium text-gray-900">{item.uploadedBy?.fullName || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Opened At</dt>
                <dd className="text-sm font-medium text-gray-900">{item.openedAt ? new Date(item.openedAt).toLocaleString() : '-'}</dd>
              </div>
            </dl>
          </div>

          {/* Description */}
          {item.description && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{item.description}</p>
            </div>
          )}

          {/* Notes */}
          {item.notes && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Notes</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{item.notes}</p>
            </div>
          )}

          {/* Scan Preview */}
          {item.scanUrl && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Scan</h3>
              {isImage ? (
                <img src={item.scanUrl} alt="Mail scan" className="max-w-full rounded-lg border border-gray-200" />
              ) : (
                <div className="flex items-center gap-3">
                  <a
                    href={item.scanUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-600 hover:underline text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Scan
                  </a>
                  <a
                    href={item.scanUrl}
                    download
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Status Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Update Status</h3>
            <div className="space-y-2">
              {statusOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleStatusChange(s)}
                  disabled={saving || item.status === s}
                  className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition ${
                    item.status === s
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                  } disabled:opacity-50`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
