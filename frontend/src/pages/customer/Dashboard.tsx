import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CheckSquare, Mail, Bell, AlertTriangle, ArrowRight, Loader2 } from 'lucide-react';
import { useCustomerAuth } from '../../contexts/CustomerAuthContext';
import { getDashboardOverview } from '../../services/customerService';
import type { DashboardOverview } from '../../types/customer';

export default function CustomerDashboard() {
  const { customer } = useCustomerAuth();
  const [data, setData] = useState<DashboardOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardOverview()
      .then((res) => setData(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  const stats = [
    { label: 'Active Orders', value: data?.orderCount || 0, icon: ShoppingCart, color: 'bg-blue-50 text-blue-600', link: '/dashboard/orders' },
    { label: 'Pending Tasks', value: data?.pendingTasks || 0, icon: CheckSquare, color: 'bg-orange-50 text-orange-600', link: '/dashboard/tasks' },
    { label: 'Unread Mail', value: data?.unreadMail || 0, icon: Mail, color: 'bg-green-50 text-green-600', link: '/dashboard/mailroom' },
    { label: 'Notifications', value: data?.unreadNotifications || 0, icon: Bell, color: 'bg-purple-50 text-purple-600', link: '/dashboard/notifications' },
  ];

  const statusColors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    PROCESSING: 'bg-blue-100 text-blue-800',
    FILED: 'bg-purple-100 text-purple-800',
    COMPLETED: 'bg-green-100 text-green-800',
    CANCELLED: 'bg-red-100 text-red-800',
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome back, {customer?.firstName}!</h1>
        <p className="mt-1 text-orange-100">
          {customer?.businessName ? `Managing ${customer.businessName}` : 'Your business dashboard is ready'}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link key={stat.label} to={stat.link} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Profile Score + Compliance */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Profile Score */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Profile Completeness</h2>
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#f97316" strokeWidth="3"
                  strokeDasharray={`${(data?.profileScore || 0)} 100`} strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                {data?.profileScore || 0}%
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                {(data?.profileScore || 0) === 100
                  ? 'Your profile is complete!'
                  : 'Complete your profile for better recommendations'}
              </p>
              <Link to="/dashboard/settings" className="text-sm text-orange-600 hover:underline mt-1 inline-block">
                Update Profile <ArrowRight className="w-3 h-3 inline" />
              </Link>
            </div>
          </div>
        </div>

        {/* Compliance Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Compliance Alerts</h2>
            {(data?.complianceAlerts || 0) > 0 && (
              <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                {data?.complianceAlerts} alert{data?.complianceAlerts !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          {(data?.complianceAlerts || 0) > 0 ? (
            <div className="flex items-start gap-3 bg-red-50 rounded-lg p-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-red-800">You have compliance items that need attention.</p>
                <Link to="/dashboard/settings" className="text-sm text-red-600 hover:underline mt-1 inline-block">
                  View Details <ArrowRight className="w-3 h-3 inline" />
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No compliance alerts at this time.</p>
          )}
        </div>
      </div>

      {/* Recent Orders + Upcoming Tasks */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Recent Orders</h2>
            <Link to="/dashboard/orders" className="text-sm text-orange-600 hover:underline">View All</Link>
          </div>
          {data?.recentOrders?.length ? (
            <div className="space-y-3">
              {data.recentOrders.map((order) => (
                <Link key={order.id} to={`/dashboard/orders/${order.id}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div>
                    <p className="font-medium text-sm">{order.llcName}</p>
                    <p className="text-xs text-gray-500">{order.orderNumber} - {order.state}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}>
                    {order.status}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No orders yet.</p>
          )}
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Upcoming Tasks</h2>
            <Link to="/dashboard/tasks" className="text-sm text-orange-600 hover:underline">View All</Link>
          </div>
          {data?.upcomingTasks?.length ? (
            <div className="space-y-3">
              {data.upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-sm">{task.title}</p>
                    <p className="text-xs text-gray-500">
                      {task.dueDate ? `Due: ${new Date(task.dueDate).toLocaleDateString()}` : 'No due date'}
                    </p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    task.priority === 'URGENT' ? 'bg-red-100 text-red-700' :
                    task.priority === 'HIGH' ? 'bg-orange-100 text-orange-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No pending tasks.</p>
          )}
        </div>
      </div>
    </div>
  );
}
