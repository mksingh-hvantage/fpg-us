import { type LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

export default function StepCard({ icon: Icon, title, description, number }: StepCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-slate-200">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {number}
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-slate-50 rounded-lg flex-shrink-0">
          <Icon className="w-6 h-6 text-slate-700" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
