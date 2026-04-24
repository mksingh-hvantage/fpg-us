import { useState, useEffect } from 'react';
import { Loader2, Bell, Check } from 'lucide-react';
import { getCustomerNotifications, markNotificationAsRead } from '../../services/customerService';
import type { CustomerNotification } from '../../types/customer';

const typeColors: Record<string, string> = {
  INFO: 'bg-blue-100 text-blue-700',
  WARNING: 'bg-orange-100 text-orange-700',
  DEADLINE: 'bg-red-100 text-red-700',
  SYSTEM: 'bg-gray-100 text-gray-700',
};

export default function CustomerNotifications() {
  const [notifications, setNotifications] = useState<CustomerNotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomerNotifications()
      .then((res) => setNotifications(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleMarkRead = async (id: string) => {
    try {
      await markNotificationAsRead(id);
      setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, isRead: true, readAt: new Date().toISOString() } : n));
    } catch { /* ignore */ }
  };

  const handleMarkAllRead = async () => {
    const unread = notifications.filter((n) => !n.isRead);
    for (const n of unread) {
      await markNotificationAsRead(n.id);
    }
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true, readAt: new Date().toISOString() })));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          {unreadCount > 0 && <p className="text-sm text-gray-500 mt-1">{unreadCount} unread</p>}
        </div>
        {unreadCount > 0 && (
          <button onClick={handleMarkAllRead} className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
            <Check className="w-4 h-4" /> Mark all as read
          </button>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>
      ) : notifications.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No notifications</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {notifications.map((n) => (
            <div key={n.id} className={`px-6 py-4 flex items-start gap-4 ${!n.isRead ? 'bg-orange-50/30' : ''}`}>
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${!n.isRead ? 'bg-orange-500' : 'bg-transparent'}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className={`text-sm ${!n.isRead ? 'font-semibold' : 'font-medium text-gray-700'}`}>{n.title}</p>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${typeColors[n.type] || ''}`}>{n.type}</span>
                </div>
                <p className="text-sm text-gray-500">{n.message}</p>
                <p className="text-xs text-gray-400 mt-1">{new Date(n.createdAt).toLocaleString()}</p>
              </div>
              {!n.isRead && (
                <button onClick={() => handleMarkRead(n.id)} className="text-xs text-orange-600 hover:underline flex-shrink-0 mt-1">
                  Mark read
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
