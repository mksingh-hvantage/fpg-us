import { useState, useEffect } from 'react';
import { Loader2, Store, Search } from 'lucide-react';
import { getCustomerServices } from '../../services/customerService';
import type { CustomerService } from '../../types/customer';

export default function CustomerMarketplace() {
  const [services, setServices] = useState<CustomerService[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCustomerServices()
      .then((res) => setServices(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <p className="text-gray-500 mt-1">Browse available services for your business</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Store className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No services found</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((service) => (
            <div key={service.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold">{service.name}</h3>
                {service.category && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{service.category}</span>
                )}
              </div>
              {service.description && <p className="text-sm text-gray-500 mb-4">{service.description}</p>}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div>
                  <span className="text-lg font-bold text-orange-600">${Number(service.basePrice).toFixed(2)}</span>
                  {service.isRecurring && service.interval && (
                    <span className="text-xs text-gray-500">/{service.interval}</span>
                  )}
                </div>
                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
