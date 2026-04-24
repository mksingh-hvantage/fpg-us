import { useState, useEffect } from 'react';
import { Loader2, Lightbulb, ArrowRight } from 'lucide-react';
import { getCustomerRecommendations } from '../../services/customerService';
import type { CustomerRecommendation } from '../../types/customer';

export default function CustomerRecommendations() {
  const [recs, setRecs] = useState<CustomerRecommendation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomerRecommendations()
      .then((res) => setRecs(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Recommendations</h1>
        <p className="text-gray-500 mt-1">Personalized suggestions based on your business profile</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>
      ) : recs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Lightbulb className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No recommendations at this time</p>
          <p className="text-sm text-gray-400 mt-1">Complete your profile to get personalized suggestions</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recs.map((rec) => (
            <div key={rec.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">{rec.title}</h3>
              {rec.description && <p className="text-sm text-gray-500 mb-4">{rec.description}</p>}
              {rec.service && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm font-medium">{rec.service.name}</p>
                    <p className="text-sm text-orange-600 font-semibold">${Number(rec.service.basePrice).toFixed(2)}</p>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
