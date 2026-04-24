import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getPayment, refundPayment } from '../../../services/paymentService';
import type { Payment } from '../../../types/admin';

export default function PaymentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [payment, setPayment] = useState<Payment | null>(null);
  const [loading, setLoading] = useState(true);
  const [refundAmount, setRefundAmount] = useState('');
  const [refundReason, setRefundReason] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!id) return;
    getPayment(id)
      .then((data) => {
        setPayment(data);
        setRefundAmount(data.amount);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleRefund = async () => {
    if (!id || !payment) return;
    setProcessing(true);
    setError('');
    setSuccess('');
    try {
      const updated = await refundPayment(id, {
        amount: parseFloat(refundAmount),
        reason: refundReason || undefined,
      });
      setPayment(updated);
      setSuccess('Refund processed successfully.');
    } catch (err) {
      console.error('Failed to process refund:', err);
      setError('Failed to process refund.');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  if (!payment) return <p className="text-gray-500">Payment not found.</p>;

  const paymentInfo = [
    { label: 'Stripe Payment ID', value: payment.stripePaymentId || '-' },
    { label: 'Amount', value: `$${parseFloat(payment.amount).toFixed(2)}` },
    { label: 'Currency', value: payment.currency.toUpperCase() },
    { label: 'Payment Method', value: payment.paymentMethod || '-' },
    { label: 'Paid At', value: payment.paidAt ? new Date(payment.paidAt).toLocaleString() : '-' },
    { label: 'Created At', value: new Date(payment.createdAt).toLocaleString() },
  ];

  if (payment.refundedAmount) {
    paymentInfo.push({ label: 'Refunded Amount', value: `$${parseFloat(payment.refundedAmount).toFixed(2)}` });
  }
  if (payment.refundReason) {
    paymentInfo.push({ label: 'Refund Reason', value: payment.refundReason });
  }
  if (payment.failureReason) {
    paymentInfo.push({ label: 'Failure Reason', value: payment.failureReason });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/payments')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
          <p className="text-sm text-gray-500">Created {new Date(payment.createdAt).toLocaleString()}</p>
        </div>
        <StatusBadge status={payment.status} />
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}
      {success && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">{success}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Payment Information</h3>
            <dl className="grid grid-cols-2 gap-3">
              {paymentInfo.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs text-gray-500">{item.label}</dt>
                  <dd className="text-sm font-medium text-gray-900">{item.value}</dd>
                </div>
              ))}
            </dl>
            {payment.receiptUrl && (
              <a
                href={payment.receiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm text-cyan-600 hover:text-cyan-700"
              >
                <ExternalLink className="w-4 h-4" />
                View Receipt
              </a>
            )}
          </div>

          {/* Order Info */}
          {payment.order && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Order Information</h3>
              <dl className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-xs text-gray-500">Order Number</dt>
                  <dd className="text-sm font-medium text-gray-900">{payment.order.orderNumber}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">LLC Name</dt>
                  <dd className="text-sm font-medium text-gray-900">{payment.order.llcName}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Contact Email</dt>
                  <dd className="text-sm font-medium text-gray-900">{payment.order.contactEmail}</dd>
                </div>
              </dl>
              <button
                onClick={() => navigate(`/admin/orders/${payment.order!.id}`)}
                className="mt-3 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View Order Details
              </button>
            </div>
          )}
        </div>

        {/* Refund Section */}
        <div className="space-y-6">
          {payment.status === 'SUCCEEDED' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Process Refund</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Refund Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max={parseFloat(payment.amount)}
                    value={refundAmount}
                    onChange={(e) => setRefundAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
                  <textarea
                    value={refundReason}
                    onChange={(e) => setRefundReason(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    placeholder="Reason for refund..."
                  />
                </div>
                <button
                  onClick={handleRefund}
                  disabled={processing || !refundAmount}
                  className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 disabled:opacity-50"
                >
                  {processing ? 'Processing...' : 'Process Refund'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
