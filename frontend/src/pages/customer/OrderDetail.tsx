import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, FileText, CheckCircle2, Clock, Circle } from 'lucide-react';
import { getCustomerOrderDetail } from '../../services/customerService';
import type { CustomerOrder } from '../../types/customer';

const statusSteps = ['PENDING', 'PROCESSING', 'FILED', 'COMPLETED'];

const statusColors: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  PROCESSING: 'bg-blue-100 text-blue-800',
  FILED: 'bg-purple-100 text-purple-800',
  COMPLETED: 'bg-green-100 text-green-800',
  CANCELLED: 'bg-red-100 text-red-800',
};

export default function CustomerOrderDetail() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<CustomerOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getCustomerOrderDetail(id)
      .then((res) => setOrder(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>;
  }

  if (!order) {
    return <div className="text-center py-20 text-gray-500">Order not found</div>;
  }

  const currentStep = statusSteps.indexOf(order.status);

  return (
    <div className="space-y-6">
      <Link to="/dashboard/orders" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="w-4 h-4" /> Back to Orders
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{order.llcName}</h1>
            <p className="text-gray-500 mt-1">Order #{order.orderNumber}</p>
          </div>
          <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${statusColors[order.status] || ''}`}>
            {order.status}
          </span>
        </div>

        {/* Timeline */}
        {order.status !== 'CANCELLED' && (
          <div className="mt-8 flex items-center justify-between max-w-lg">
            {statusSteps.map((step, i) => {
              const done = i <= currentStep;
              const active = i === currentStep;
              return (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    {done ? (
                      <CheckCircle2 className={`w-7 h-7 ${active ? 'text-orange-500' : 'text-green-500'}`} />
                    ) : (
                      <Circle className="w-7 h-7 text-gray-300" />
                    )}
                    <span className={`text-xs mt-1 ${done ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                      {step.charAt(0) + step.slice(1).toLowerCase()}
                    </span>
                  </div>
                  {i < statusSteps.length - 1 && (
                    <div className={`w-12 h-0.5 mb-5 ${i < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Order Info */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold mb-4">Order Details</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-gray-500">Package</dt><dd className="font-medium">{order.packageType}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">State</dt><dd className="font-medium">{order.state}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Created</dt><dd>{new Date(order.createdAt).toLocaleDateString()}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Last Updated</dt><dd>{new Date(order.updatedAt).toLocaleDateString()}</dd></div>
            {order.total && <div className="flex justify-between border-t pt-3"><dt className="text-gray-500 font-medium">Total</dt><dd className="font-bold">${Number(order.total).toFixed(2)}</dd></div>}
          </dl>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold mb-4">Documents</h2>
          {order.documents?.length ? (
            <div className="space-y-2">
              {order.documents.map((doc) => (
                <a key={doc.id} href={doc.fileUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <FileText className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-sm font-medium">{doc.fileName}</p>
                    <p className="text-xs text-gray-500">{doc.category}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No documents yet</p>
          )}
        </div>
      </div>

      {/* Tasks */}
      {order.tasks && order.tasks.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold mb-4">Tasks</h2>
          <div className="space-y-2">
            {order.tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  {task.status === 'COMPLETED' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Clock className="w-5 h-5 text-orange-500" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{task.title}</p>
                    {task.dueDate && <p className="text-xs text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>}
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  task.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                  task.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {task.status.replace('_', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payments */}
      {order.payments && order.payments.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold mb-4">Payments</h2>
          <div className="space-y-2">
            {order.payments.map((p) => (
              <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="text-sm font-medium">${Number(p.amount).toFixed(2)}</p>
                  <p className="text-xs text-gray-500">{p.paymentMethod || 'N/A'} - {new Date(p.createdAt).toLocaleDateString()}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  p.status === 'SUCCEEDED' ? 'bg-green-100 text-green-700' :
                  p.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
