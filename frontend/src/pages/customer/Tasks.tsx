import { useState, useEffect } from 'react';
import { Loader2, CheckSquare, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { getCustomerTasks } from '../../services/customerService';
import type { CustomerTask } from '../../types/customer';

const STATUS_TABS = ['ALL', 'PENDING', 'IN_PROGRESS', 'COMPLETED'];
const PRIORITY_TABS = ['ALL', 'URGENT', 'HIGH', 'MEDIUM', 'LOW'];

const priorityColors: Record<string, string> = {
  URGENT: 'bg-red-100 text-red-700',
  HIGH: 'bg-orange-100 text-orange-700',
  MEDIUM: 'bg-yellow-100 text-yellow-700',
  LOW: 'bg-gray-100 text-gray-600',
};

export default function CustomerTasks() {
  const [tasks, setTasks] = useState<CustomerTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('ALL');
  const [priority, setPriority] = useState('ALL');

  useEffect(() => {
    setLoading(true);
    getCustomerTasks({
      status: status === 'ALL' ? undefined : status,
      priority: priority === 'ALL' ? undefined : priority,
    })
      .then((res) => setTasks(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [status, priority]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">To-Do Tasks</h1>

      {/* Status Filters */}
      <div className="flex gap-2 flex-wrap">
        {STATUS_TABS.map((tab) => (
          <button key={tab} onClick={() => setStatus(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              status === tab ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab === 'ALL' ? 'All' : tab.replace('_', ' ').charAt(0) + tab.replace('_', ' ').slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Priority Filters */}
      <div className="flex gap-2 flex-wrap">
        <span className="text-sm text-gray-500 py-1.5">Priority:</span>
        {PRIORITY_TABS.map((tab) => (
          <button key={tab} onClick={() => setPriority(tab)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              priority === tab ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab === 'ALL' ? 'All' : tab.charAt(0) + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Tasks */}
      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <CheckSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No tasks found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {task.status === 'COMPLETED' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  ) : task.status === 'IN_PROGRESS' ? (
                    <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-medium ${task.status === 'COMPLETED' ? 'line-through text-gray-400' : ''}`}>
                      {task.title}
                    </p>
                    {task.description && <p className="text-sm text-gray-500 mt-1">{task.description}</p>}
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      {task.order && <span>{task.order.llcName} ({task.order.orderNumber})</span>}
                      {task.dueDate && <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
                      <span>{task.type}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${priorityColors[task.priority] || ''}`}>
                  {task.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
