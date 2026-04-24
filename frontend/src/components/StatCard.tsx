interface StatCardProps {
  value: string;
  label: string;
  sublabel: string;
}

export default function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-rose-100 hover:border-rose-200 transition-colors">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-600 to-pink-600 mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-slate-900 mb-1">{label}</div>
      <div className="text-sm text-slate-600">{sublabel}</div>
    </div>
  );
}
