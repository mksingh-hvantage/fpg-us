import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Users, FileText, Clock, DollarSign, CheckSquare, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { getDashboardStats } from '../../services/dashboardService';
import { getMyTasks } from '../../services/taskService';
import { getAnalyticsOverview } from '../../services/analyticsService';
import { useAuth } from '../../contexts/AuthContext';
import StatusBadge from '../../components/admin/StatusBadge';
import type { DashboardStats, Task, AnalyticsOverview } from '../../types/admin';

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [myTasks, setMyTasks] = useState<Task[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { canView } = useAuth();

  useEffect(() => {
    const promises: Promise<unknown>[] = [getDashboardStats()];
    if (canView('Tasks')) promises.push(getMyTasks());
    else promises.push(Promise.resolve([]));
    if (canView('Analytics')) promises.push(getAnalyticsOverview());
    else promises.push(Promise.resolve(null));

    Promise.allSettled(promises).then(([statsResult, tasksResult, analyticsResult]) => {
      if (statsResult.status === 'fulfilled') {
        const data = statsResult.value as DashboardStats;
        if (data?.orders && data?.contacts && data?.articles) setStats(data);
      }
      if (tasksResult.status === 'fulfilled') {
        const tasks = tasksResult.value as Task[];
        setMyTasks(Array.isArray(tasks) ? tasks.filter((t) => t.status !== 'COMPLETED' && t.status !== 'CANCELLED').slice(0, 5) : []);
      }
      if (analyticsResult.status === 'fulfilled') setAnalytics(analyticsResult.value as AnalyticsOverview);
    }).finally(() => setLoading(false));
  }, [canView]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  if (!stats) return <p className="text-gray-500">Failed to load dashboard.</p>;

  const allCards = [
    { label: 'Total Orders', value: stats.orders.total, icon: ShoppingCart, color: 'bg-blue-500', link: '/admin/orders', module: 'Orders' },
    { label: 'Pending Orders', value: stats.orders.pending, icon: Clock, color: 'bg-yellow-500', link: '/admin/orders', module: 'Orders' },
    { label: 'New Contacts', value: stats.contacts.new, icon: Users, color: 'bg-cyan-500', link: '/admin/contacts', module: 'Contacts' },
    { label: 'Published Articles', value: stats.articles.published, icon: FileText, color: 'bg-green-500', link: '/admin/articles', module: 'Articles' },
    ...(analytics ? [{ label: 'Total Revenue', value: `$${analytics.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'bg-emerald-500', link: '/admin/analytics', module: 'Analytics' }] : []),
    ...(analytics ? [{ label: 'Completed Orders', value: analytics.completedOrders, icon: CheckCircle, color: 'bg-indigo-500', link: '/admin/orders', module: 'Orders' }] : []),
  ];

  const cards = allCards.filter((c) => canView(c.module));

  const priorityColors: Record<string, string> = {
    URGENT: 'bg-red-100 text-red-700',
    HIGH: 'bg-orange-100 text-orange-700',
    MEDIUM: 'bg-yellow-100 text-yellow-700',
    LOW: 'bg-gray-100 text-gray-600',
  };

  const priorityIcons: Record<string, typeof AlertTriangle> = {
    URGENT: AlertTriangle,
    HIGH: AlertTriangle,
    MEDIUM: Info,
    LOW: Info,
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            onClick={() => navigate(card.link)}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{card.value}</p>
              </div>
              <div className={`${card.color} p-3 rounded-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {(canView('Orders') || canView('Contacts') || canView('Tasks')) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          {canView('Orders') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Recent Orders</h3>
                <button onClick={() => navigate('/admin/orders')} className="text-sm text-cyan-600 hover:text-cyan-700">
                  View all
                </button>
              </div>
              <div className="divide-y divide-gray-200">
                {stats.recentOrders.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-gray-500">No orders yet</p>
                ) : (
                  stats.recentOrders.map((order) => (
                    <div
                      key={order.id}
                      onClick={() => navigate(`/admin/orders/${order.id}`)}
                      className="px-5 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">{order.llcName}</p>
                        <p className="text-xs text-gray-500">{order.contactEmail} &middot; {order.state}</p>
                      </div>
                      <StatusBadge status={order.status} />
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Recent Contacts */}
          {canView('Contacts') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Recent Contacts</h3>
                <button onClick={() => navigate('/admin/contacts')} className="text-sm text-cyan-600 hover:text-cyan-700">
                  View all
                </button>
              </div>
              <div className="divide-y divide-gray-200">
                {stats.recentContacts.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-gray-500">No contacts yet</p>
                ) : (
                  stats.recentContacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={() => navigate(`/admin/contacts/${contact.id}`)}
                      className="px-5 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.email} &middot; {contact.source}</p>
                      </div>
                      <StatusBadge status={contact.status} />
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* My Tasks */}
          {canView('Tasks') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-cyan-600" />
                  My Tasks
                </h3>
                <button onClick={() => navigate('/admin/tasks')} className="text-sm text-cyan-600 hover:text-cyan-700">
                  View all
                </button>
              </div>
              <div className="divide-y divide-gray-200">
                {myTasks.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-gray-500">No pending tasks</p>
                ) : (
                  myTasks.map((task) => {
                    const PriorityIcon = priorityIcons[task.priority] || Info;
                    return (
                      <div
                        key={task.id}
                        onClick={() => navigate(`/admin/tasks/${task.id}`)}
                        className="px-5 py-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{task.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${priorityColors[task.priority]}`}>
                                <PriorityIcon className="w-3 h-3" />
                                {task.priority}
                              </span>
                              <span className="text-xs text-gray-400">{task.type}</span>
                            </div>
                            {task.dueDate && (
                              <p className="text-xs text-gray-500 mt-0.5">
                                Due: {new Date(task.dueDate).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                          <StatusBadge status={task.status} />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
