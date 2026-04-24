import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Receipt } from 'lucide-react';
import { getCustomerInvoiceDetail } from '../../services/customerService';
import type { CustomerInvoice } from '../../types/customer';

export default function CustomerInvoiceDetail() {
  const { id } = useParams<{ id: string }>();
  const [invoice, setInvoice] = useState<CustomerInvoice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getCustomerInvoiceDetail(id)
      .then((res) => setInvoice(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>;
  }
  if (!invoice) {
    return <div className="text-center py-20 text-gray-500">Invoice not found</div>;
  }

  return (
    <div className="space-y-6">
      <Link to="/dashboard/invoices" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="w-4 h-4" /> Back to Invoices
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl">
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Receipt className="w-6 h-6 text-orange-500" />
              <h1 className="text-xl font-bold">Invoice #{invoice.invoiceNumber}</h1>
            </div>
            <p className="text-sm text-gray-500">
              Issued: {new Date(invoice.issuedAt).toLocaleDateString()}
              {invoice.dueDate && ` | Due: ${new Date(invoice.dueDate).toLocaleDateString()}`}
            </p>
          </div>
          <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
            invoice.paidAt ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {invoice.paidAt ? 'Paid' : 'Unpaid'}
          </span>
        </div>

        {/* Bill To */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Bill To</p>
          <p className="font-medium">{invoice.customerName}</p>
          <p className="text-sm text-gray-500">{invoice.customerEmail}</p>
        </div>

        {/* Items */}
        <table className="w-full mb-6">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-xs font-semibold text-gray-500 uppercase pb-2">Description</th>
              <th className="text-right text-xs font-semibold text-gray-500 uppercase pb-2">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(Array.isArray(invoice.items) ? invoice.items : []).map((item, i) => (
              <tr key={i}>
                <td className="py-3 text-sm">{item.description}</td>
                <td className="py-3 text-sm text-right">${Number(item.amount).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span>${Number(invoice.subtotal).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Tax</span>
            <span>${Number(invoice.tax).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>${Number(invoice.total).toFixed(2)}</span>
          </div>
        </div>

        {invoice.notes && (
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Notes</p>
            <p className="text-sm text-gray-600">{invoice.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
