import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Mail, ExternalLink } from 'lucide-react';
import { getCustomerMailDetail, markMailAsRead } from '../../services/customerService';
import type { CustomerMailItem } from '../../types/customer';

export default function CustomerMailDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<CustomerMailItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getCustomerMailDetail(id)
      .then(async (res) => {
        setItem(res.data);
        if (res.data.status === 'RECEIVED') {
          await markMailAsRead(id);
          setItem((prev) => prev ? { ...prev, status: 'OPENED' } : prev);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>;
  }

  if (!item) {
    return <div className="text-center py-20 text-gray-500">Mail item not found</div>;
  }

  return (
    <div className="space-y-6">
      <Link to="/dashboard/mailroom" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="w-4 h-4" /> Back to Mailroom
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold">{item.subject}</h1>
            <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
              {item.sender && <span>From: {item.sender}</span>}
              <span>{new Date(item.receivedDate).toLocaleDateString()}</span>
              {item.order && <span>{item.order.llcName} ({item.order.orderNumber})</span>}
            </div>
          </div>
        </div>

        {item.description && (
          <div className="mb-6">
            <h2 className="font-semibold text-sm text-gray-700 mb-2">Description</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        )}

        {item.notes && (
          <div className="mb-6">
            <h2 className="font-semibold text-sm text-gray-700 mb-2">Notes</h2>
            <p className="text-gray-600">{item.notes}</p>
          </div>
        )}

        {item.scanUrl && (
          <div>
            <h2 className="font-semibold text-sm text-gray-700 mb-2">Scanned Document</h2>
            <a href={item.scanUrl} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" /> View Scan {item.scanPages ? `(${item.scanPages} page${item.scanPages > 1 ? 's' : ''})` : ''}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
