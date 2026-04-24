import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import { getInvoice } from '../../../services/invoiceService';
import type { Invoice } from '../../../types/admin';

export default function InvoiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getInvoice(id)
      .then(setInvoice)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  if (!invoice) return <p className="text-gray-500">Invoice not found.</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between print:hidden">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/admin/invoices')} className="p-2 rounded-lg hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Invoice {invoice.invoiceNumber}</h2>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
        >
          <Printer className="w-4 h-4" />
          Print
        </button>
      </div>

      {/* Printable Invoice */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-3xl mx-auto print:shadow-none print:border-0 print:max-w-none">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
            <p className="text-gray-500 mt-1">Future Perfect Global USA</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">{invoice.invoiceNumber}</p>
            <p className="text-sm text-gray-500">Issued: {new Date(invoice.issuedAt).toLocaleDateString()}</p>
            {invoice.dueDate && (
              <p className="text-sm text-gray-500">Due: {new Date(invoice.dueDate).toLocaleDateString()}</p>
            )}
            {invoice.paidAt && (
              <p className="text-sm text-green-600 font-medium">Paid: {new Date(invoice.paidAt).toLocaleDateString()}</p>
            )}
          </div>
        </div>

        {/* Customer Info */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Bill To</h3>
          <p className="text-sm font-medium text-gray-900">{invoice.customerName}</p>
          <p className="text-sm text-gray-600">{invoice.customerEmail}</p>
        </div>

        {/* Items Table */}
        <table className="w-full mb-6">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Description</th>
              <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Qty</th>
              <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Unit Price</th>
              <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoice.items.map((item, index) => (
              <tr key={index}>
                <td className="py-3 text-sm text-gray-900">{item.description}</td>
                <td className="py-3 text-sm text-gray-900 text-right">{item.quantity}</td>
                <td className="py-3 text-sm text-gray-900 text-right">${item.unitPrice.toFixed(2)}</td>
                <td className="py-3 text-sm text-gray-900 text-right">${item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-900">${parseFloat(invoice.subtotal).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax</span>
              <span className="text-gray-900">${parseFloat(invoice.tax).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold pt-2 border-t border-gray-200">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">${parseFloat(invoice.total).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Notes</h3>
            <p className="text-sm text-gray-600 whitespace-pre-wrap">{invoice.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
