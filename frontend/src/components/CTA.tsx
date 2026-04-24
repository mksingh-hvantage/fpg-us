import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-slate-600 to-slate-700 py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Ready to Start Your New York Business?
        </h2>
        <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
          Found the perfect name? We'll handle the entire LLC or corporation formation process for you—from filing with the NY Department of State to delivering your official documents.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
            Form Your LLC
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
            Form a Corporation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-cyan-100 text-sm">
          Starting from $0 + NY state filing fees. Quick, easy, and backed by our expert support team.
        </p>
      </div>
    </section>
  );
}