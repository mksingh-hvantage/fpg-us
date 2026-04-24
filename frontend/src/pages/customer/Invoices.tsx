import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, Receipt } from 'lucide-react';
import { getCustomerInvoices } from '../../services/customerService';
import type { CustomerInvoice } from '../../types/customer';

export default function CustomerInvoices() {
  const [invoices, setInvoices] = useState<CustomerInvoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomerInvoices()
      .then((res) => setInvoices(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Invoices</h1>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>
      ) : invoices.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Receipt className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No invoices found</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Invoice #</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Order</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Total</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Issued</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <Link to={`/dashboard/invoices/${inv.id}`} className="text-orange-600 font-medium hover:underline text-sm">
                      {inv.invoiceNumber}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{inv.order?.llcName || '-'}</td>
                  <td className="px-6 py-4 text-sm font-semibold">${Number(inv.total).toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(inv.issuedAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      inv.paidAt ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {inv.paidAt ? 'Paid' : 'Unpaid'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
