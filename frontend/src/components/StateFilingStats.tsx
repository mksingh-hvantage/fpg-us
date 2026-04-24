import { useState } from 'react';

type TabType = 'filing-times' | 'expedited-time' | 'expedited-price';

interface StatData {
  rank: number;
  value: string;
  count: number;
  percentage: number;
}

const filingTimesData: StatData[] = [
  { rank: 1, value: '1-2 weeks', count: 5, percentage: 10 },
  { rank: 2, value: '2-3 weeks', count: 35, percentage: 70 },
  { rank: 3, value: '3-4 weeks', count: 5, percentage: 10 },
  { rank: 4, value: '4-6 weeks', count: 5, percentage: 10 },
];

const expeditedTimeData: StatData[] = [
  { rank: 1, value: 'Same day', count: 4, percentage: 8 },
  { rank: 2, value: '24 hours', count: 6, percentage: 12 },
  { rank: 3, value: '1-2 business days', count: 37, percentage: 74 },
  { rank: 4, value: '2-3 business days', count: 3, percentage: 6 },
];

const expeditedPriceData: StatData[] = [
  { rank: 1, value: '$50', count: 40, percentage: 80 },
  { rank: 2, value: '$70', count: 1, percentage: 2 },
  { rank: 3, value: '$75', count: 3, percentage: 6 },
  { rank: 4, value: '$100', count: 6, percentage: 12 },
];

export default function StateFilingStats() {
  const [activeTab, setActiveTab] = useState<TabType>('expedited-price');

  const getData = () => {
    switch (activeTab) {
      case 'filing-times':
        return filingTimesData;
      case 'expedited-time':
        return expeditedTimeData;
      case 'expedited-price':
        return expeditedPriceData;
    }
  };

  const data = getData();

  return (
    <section className="py-16 bg-cyan-100/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Which States Have the Fastest Filing Times?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Knowing the average and expedited filing times can help you choose the best state for your LLC. Here's a quick overview of the states with the fastest processing times.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
          <div className="flex border-b-2 border-gray-100">
            <button
              onClick={() => setActiveTab('filing-times')}
              className={`flex-1 px-6 py-5 text-base font-bold transition-all ${
                activeTab === 'filing-times'
                  ? 'text-cyan-600 border-b-4 border-cyan-600 bg-cyan-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Filing Times
            </button>
            <button
              onClick={() => setActiveTab('expedited-time')}
              className={`flex-1 px-6 py-5 text-base font-bold transition-all ${
                activeTab === 'expedited-time'
                  ? 'text-cyan-600 border-b-4 border-cyan-600 bg-cyan-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Expedited Time
            </button>
            <button
              onClick={() => setActiveTab('expedited-price')}
              className={`flex-1 px-6 py-5 text-base font-bold transition-all ${
                activeTab === 'expedited-price'
                  ? 'text-cyan-600 border-b-4 border-cyan-600 bg-cyan-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Expedited Price
            </button>
          </div>

          <div className="p-8 space-y-6">
            {data.map((item) => (
              <div key={item.rank} className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 ${
                  item.rank === 1 ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {item.rank}
                </div>

                <div className="w-20 text-lg font-bold text-gray-900 flex-shrink-0">
                  {item.value}
                </div>

                <div className="flex-1 relative h-10 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <div className="flex-shrink-0">
                  <div className="bg-cyan-100 text-cyan-600 px-6 py-2 rounded-full font-bold text-sm">
                    {item.count} {item.count === 1 ? 'state' : 'states'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
