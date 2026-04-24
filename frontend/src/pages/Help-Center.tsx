import { BookOpen, Building2, FileText, Users, Calculator, DollarSign, Video, MapPin, Hash, ArrowRight, Clock } from 'lucide-react';

interface Category {
  title: string;
  articles: number;
  icon: React.ElementType;
  description: string;
}


const categories: Category[] = [
  {
    title: 'General',
    articles: 17,
    icon: BookOpen,
    description: 'Foundational business concepts and guidance'
  },
  {
    title: 'LLC',
    articles: 21,
    icon: Building2,
    description: 'Limited liability company formation and management'
  },
  {
    title: 'S-Corporation',
    articles: 21,
    icon: FileText,
    description: 'Shareholder limits and tax advantages'
  },
  {
    title: 'C-Corporation',
    articles: 16,
    icon: Building2,
    description: 'Filing benefits and entity comparisons'
  },
  {
    title: 'Nonprofit',
    articles: 16,
    icon: Users,
    description: 'Nonprofit formation and profit guidelines'
  },
  {
    title: 'Registered Agent',
    articles: 11,
    icon: Users,
    description: 'Agent functions and requirements'
  },
  {
    title: 'Business Tax',
    articles: 7,
    icon: DollarSign,
    description: 'Tax strategies and seller permits'
  },
  {
    title: 'Video Library',
    articles: 11,
    icon: Video,
    description: 'Video resources and tutorials'
  },
  {
    title: 'State Information',
    articles: 50,
    icon: MapPin,
    description: 'State-specific compliance guidance'
  },
  {
    title: 'EIN',
    articles: 8,
    icon: Hash,
    description: 'Employer Identification Number application'
  }
];


export default function HelpCenter() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">

      <section className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How can we help you?</h2>
          <p className="text-xl text-cyan-100">Search our knowledge base or browse by category</p>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-3">Browse by Category</h3>
          <p className="text-lg text-slate-600">Find answers organized by topic</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left border border-slate-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">{category.description}</p>
                    <span className="text-sm font-medium text-cyan-600">{category.articles} articles</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-extrabold mb-10 text-center">
                Helpful Tools for Decision Making
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Card */}
                <div className="flex items-center justify-between p-6 rounded-2xl border hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center gap-4">
                    <Building2 className="w-6 h-6 text-cyan-500" />
                    <span className="text-lg font-medium">
                    Corporation State Information
                    </span>
                </div>
                <span className="text-xl">→</span>
                </div>

                <div className="flex items-center justify-between p-6 rounded-2xl border hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center gap-4">
                    <Building2 className="w-6 h-6 text-cyan-500" />
                    <span className="text-lg font-medium">
                    LLC State Information
                    </span>
                </div>
                <span className="text-xl">→</span>
                </div>

                <div className="flex items-center justify-between p-6 rounded-2xl border hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center gap-4">
                    <Calculator className="w-6 h-6 text-cyan-500" />
                    <span className="text-lg font-medium">
                    S Corporation Tax Calculator
                    </span>
                </div>
                <span className="text-xl">→</span>
                </div>

                <div className="flex items-center justify-between p-6 rounded-2xl border hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center gap-4">
                    <FileText className="w-6 h-6 text-cyan-500" />
                    <span className="text-lg font-medium">
                    Entity Comparison Chart
                    </span>
                </div>
                <span className="text-xl">→</span>
                </div>

                <div className="flex items-center justify-between p-6 rounded-2xl border hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-cyan-500" />
                    <span className="text-lg font-medium">
                    State Filing Fees
                    </span>
                </div>
                <span className="text-xl">→</span>
                </div>

                <div className="flex items-center justify-between p-6 rounded-2xl border hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-cyan-500" />
                    <span className="text-lg font-medium">
                    State Filing Times
                    </span>
                </div>
                <span className="text-xl">→</span>
                </div>

            </div>
            </div>

      </section>

      <section className="w-full">
  <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-none p-12 text-center text-white shadow-xl">
    
    <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
      Ready to launch your business?
    </h3>

    <p className="text-xl text-cyan-100 mb-2">
      No contracts. No surprises.
    </p>

    <p className="text-3xl font-extrabold mb-8">
      Only <span className="text-cyan-200">$0 + state fee</span>
    </p>

    <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-cyan-50 transition-colors shadow-lg flex items-center justify-center gap-2 mx-auto group">
      Launch your business
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>

  </div>
</section>

 
    </div>
  );
}
