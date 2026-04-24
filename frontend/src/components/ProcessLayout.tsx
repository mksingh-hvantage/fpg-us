import { Helmet } from 'react-helmet-async';
import OrderSummary from './OrderSummary';
import type { ReactNode } from 'react';

interface ProcessLayoutProps {
  children: ReactNode;
  progress: number;
  title: string;
}

export default function ProcessLayout({ children, progress, title }: ProcessLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Helmet>
        <title>{title} | The Future Perfect Global</title>
      </Helmet>

      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gray-900">
              The Future Perfect Global
            </div>
            <div className="text-xs text-gray-500">formerly incfile</div>
          </div>

          <div className="flex-1 flex flex-col items-center mx-8">
            <div className="text-sm text-gray-700 font-semibold mb-2">
              Your Progress
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-cyan-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm text-gray-600 mt-1">{progress}%</div>
          </div>

          <div className="text-right">
            <span className="font-semibold text-gray-700">+858-952-4549</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">{children}</div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
