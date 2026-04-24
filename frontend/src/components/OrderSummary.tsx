import { Check } from 'lucide-react';
import { useOrder } from '../contexts/OrderContext';

export default function OrderSummary() {
  const { order, getOrderSummaryItems, getTotal } = useOrder();
  const items = getOrderSummaryItems();
  const total = getTotal();

  const companyName = order.companyInfo.llcName
    ? `${order.companyInfo.llcName} ${order.companyInfo.designator}`
    : null;

  const includedFeatures = order.selectedPackage?.features.filter(f => f.included) || [];

  return (
    <div className="bg-white border rounded-xl p-6 sticky top-8">
      <h3 className="text-xl font-bold mb-6">Order Summary</h3>

      {companyName && (
        <div className="bg-cyan-50 border border-cyan-200 text-center py-2 rounded-lg font-medium mb-6">
          {companyName}
        </div>
      )}

      <div className="space-y-4 text-sm">
        {order.entityType && (
          <div className="flex justify-between">
            <span>Entity Type</span>
            <span className="font-semibold">{order.entityType}</span>
          </div>
        )}

        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{item.label}</span>
            <span className="font-semibold">
              {item.isFree ? 'Free' : `$${item.price}`}
            </span>
          </div>
        ))}
      </div>

      {includedFeatures.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Included in Package</p>
          <ul className="space-y-2">
            {includedFeatures.slice(0, 8).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="border-t mt-6 pt-4 flex justify-between items-center">
        <span className="text-lg font-bold">Total</span>
        <span className="text-2xl font-bold">${total}</span>
      </div>
    </div>
  );
}
