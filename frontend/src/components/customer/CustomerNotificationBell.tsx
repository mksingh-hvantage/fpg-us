import { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getUnreadNotificationCount, getCustomerNotifications, markNotificationAsRead } from '../../services/customerService';
import type { CustomerNotification } from '../../types/customer';

export default function CustomerNotificationBell() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<CustomerNotification[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUnreadNotificationCount().then((res) => setCount(res.data.count)).catch(() => {});
    const interval = setInterval(() => {
      getUnreadNotificationCount().then((res) => setCount(res.data.count)).catch(() => {});
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (open) {
      getCustomerNotifications().then((res) => setNotifications(res.data.slice(0, 5))).catch(() => {});
    }
  }, [open]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMark = async (id: string) => {
    await markNotificationAsRead(id);
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, isRead: true } : n));
    setCount((c) => Math.max(0, c - 1));
  };

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="relative p-2 rounded-lg hover:bg-gray-100 transition">
        <Bell className="w-5 h-5 text-gray-600" />
        {count > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            {count > 9 ? '9+' : count}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <div className="p-3 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-semibold text-sm">Notifications</h3>
            <button onClick={() => { setOpen(false); navigate('/dashboard/notifications'); }} className="text-xs text-orange-600 hover:underline">
              View All
            </button>
          </div>
          <div className="max-h-72 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-4 text-sm text-gray-500 text-center">No notifications</p>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => !n.isRead && handleMark(n.id)}
                  className={`px-3 py-2.5 border-b border-gray-50 cursor-pointer hover:bg-gray-50 ${!n.isRead ? 'bg-orange-50/30' : ''}`}
                >
                  <p className={`text-sm ${!n.isRead ? 'font-medium' : 'text-gray-600'}`}>{n.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{n.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
