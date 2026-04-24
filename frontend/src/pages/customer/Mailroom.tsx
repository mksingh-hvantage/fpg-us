import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, Mail, MailOpen } from 'lucide-react';
import { getCustomerMailroom } from '../../services/customerService';
import type { CustomerMailItem } from '../../types/customer';

export default function CustomerMailroom() {
  const [items, setItems] = useState<CustomerMailItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomerMailroom()
      .then((res) => setItems(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mailroom</h1>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Mail className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No mail items</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {items.map((item) => (
            <Link key={item.id} to={`/dashboard/mailroom/${item.id}`}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition ${item.status === 'RECEIVED' ? 'bg-orange-50/30' : ''}`}
            >
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                {item.status === 'RECEIVED' ? (
                  <Mail className="w-4.5 h-4.5 text-orange-500" />
                ) : (
                  <MailOpen className="w-4.5 h-4.5 text-gray-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${item.status === 'RECEIVED' ? 'font-semibold' : 'font-medium text-gray-700'}`}>
                  {item.subject}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 truncate">
                  {item.sender && `From: ${item.sender}`}
                  {item.order && ` - ${item.order.llcName}`}
                </p>
              </div>
              <div className="text-xs text-gray-400 flex-shrink-0">
                {new Date(item.receivedDate).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
