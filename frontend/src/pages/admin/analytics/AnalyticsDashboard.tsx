import { useEffect, useState } from 'react';
import { ShoppingCart, CheckCircle, DollarSign, Users, TrendingUp } from 'lucide-react';
import { getAnalyticsOverview, getTopStates, getTopPackages, getConversions } from '../../../services/analyticsService';
import type { AnalyticsOverview } from '../../../types/admin';

interface TopItem {
  label: string;
  count: number;
}

interface ConversionData {
  totalContacts: number;
  convertedContacts: number;
  conversionRate: number;
}

export default function AnalyticsDashboard() {
  const [overview, setOverview] = useState<AnalyticsOverview | null>(null);
  const [topStates, setTopStates] = useState<TopItem[]>([]);
  const [topPackages, setTopPackages] = useState<TopItem[]>([]);
  const [conversions, setConversions] = useState<ConversionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getAnalyticsOverview(),
      getTopStates(),
      getTopPackages(),
      getConversions(),
    ])
      .then(([overviewData, statesData, packagesData, conversionData]) => {
        setOverview(overviewData);
        setTopStates(statesData.map((s) => ({ label: s.state, count: s.count })));
        setTopPackages(packagesData.map((p) => ({ label: p.packageType, count: p.count })));
        setConversions(conversionData);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  const statCards = overview
    ? [
        { label: 'Total Orders', value: overview.totalOrders, icon: ShoppingCart, color: 'bg-blue-500' },
        { label: 'New Orders', value: overview.newOrders, icon: ShoppingCart, color: 'bg-cyan-500' },
        { label: 'Completed Orders', value: overview.completedOrders, icon: CheckCircle, color: 'bg-green-500' },
        { label: 'Total Revenue', value: `$${overview.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'bg-emerald-500' },
        { label: 'New Contacts', value: overview.newContacts, icon: Users, color: 'bg-purple-500' },
      ]
    : [];

  const maxStateCount = topStates.length > 0 ? Math.max(...topStates.map((s) => s.count)) : 1;
  const maxPackageCount = topPackages.length > 0 ? Math.max(...topPackages.map((p) => p.count)) : 1;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <div className={`${card.color} p-2 rounded-lg`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">{card.label}</p>
                <p className="text-xl font-bold text-gray-900">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top States */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Top States</h3>
          {topStates.length === 0 ? (
            <p className="text-sm text-gray-500">No data available</p>
          ) : (
            <div className="space-y-3">
              {topStates.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="text-gray-500">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / maxStateCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top Packages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Top Packages</h3>
          {topPackages.length === 0 ? (
            <p className="text-sm text-gray-500">No data available</p>
          ) : (
            <div className="space-y-3">
              {topPackages.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="text-gray-500">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / maxPackageCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Conversion Rate */}
      {conversions && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-cyan-600" />
            <h3 className="font-semibold text-gray-900">Conversion Rate</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-gray-500">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-900">{conversions.totalContacts}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Converted Contacts</p>
              <p className="text-2xl font-bold text-gray-900">{conversions.convertedContacts}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-bold text-cyan-600">{conversions.conversionRate.toFixed(1)}%</p>
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-100 rounded-full h-3">
            <div
              className="bg-cyan-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(conversions.conversionRate, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
