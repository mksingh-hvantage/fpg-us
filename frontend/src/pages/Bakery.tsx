import { useState } from 'react'; 
import GetStartedModal from '../components/GetStartedModal';
import {
  ChefHat,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  Lightbulb,
  Target,
  FileText,
  Building,
  Shield,
  Calendar,
  Award,
  ArrowRight
} from 'lucide-react';

export default function Bakery() {
  const types = [
    {
      title: "Artisan Bakery Business",
      description:
        "Start an artisan bakery focusing on handcrafted breads, pastries, and premium baked goods. Ideal for targeting high-end customers and building a strong brand in the bakery industry."
    },
    {
      title: "Custom Cake Bakery",
      description:
        "Launch a custom cake business specializing in wedding cakes, birthday cakes, and event-based designs. A highly profitable bakery niche with strong demand."
    },
    {
      title: "Gluten-Free Bakery",
      description:
        "Open a gluten-free bakery catering to customers with dietary restrictions. This fast-growing bakery segment offers excellent business opportunities."
    },
    {
      title: "Vegan Bakery Business",
      description:
        "Build a vegan bakery offering egg-free and dairy-free baked products. Perfect for health-conscious and eco-friendly consumers."
    },
    {
      title: "Mobile Bakery / Food Truck",
      description:
        "Start a bakery food truck or mobile bakery to sell baked goods on the go. Lower startup costs and flexibility make this a popular bakery business model."
    },
    {
      title: "Breakfast & Cafe Bakery",
      description:
        "Open a breakfast bakery or café serving bagels, coffee, pastries, and quick meals. Ideal for high footfall locations and daily repeat customers."
    }
  ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      <header className="relative py-12 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
          alt="Bakery Business"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        {/* Icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-lg">
            <ChefHat className="w-12 h-12 text-cyan-300" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-tight mb-2">
          The Ultimate Guide to Starting a Successful Bakery Business
        </h1>

        {/* SEO Content */}
        <p className="text-lg md:text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed mb-10">
          Learn how to start a bakery business step-by-step — from creating a powerful bakery business plan and estimating startup costs to choosing the right legal structure and attracting loyal customers. Whether it's a home bakery or a retail shop, build a profitable bakery brand with confidence.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button
            onClick={() => {
              setSelectedBusinessType('');
              setIsModalOpen(true);
            }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-2xl flex items-center gap-2"
          >
            Start Your Bakery Today
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="px-8 py-4 rounded-full text-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition">
            View Startup Guide
          </button>

        </div>

        {/* Trust Line */}
        <p className="text-sm text-gray-300 mt-8">
          Trusted by entrepreneurs launching successful bakery businesses worldwide
        </p>

      </div>
    </header>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Start Your Bakery Business: Complete Guide & Strategy
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Looking to start a bakery business? This complete guide covers everything from bakery business ideas and startup costs to creating a winning bakery business plan. Whether you're opening a home bakery, cake shop, or retail bakery, learn how to build a profitable and scalable bakery brand.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-extrabold text-cyan-600 mb-2">500+</p>
            <p className="text-gray-600">Entrepreneurs Supported</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-extrabold text-cyan-600 mb-2">20+</p>
            <p className="text-gray-600">Bakery Business Models</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-extrabold text-cyan-600 mb-2">100%</p>
            <p className="text-gray-600">Step-by-Step Guidance</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-cyan-400 p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-md">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Bakery Industry Insights & Market Trends
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Understand bakery industry trends, customer demand, and profit potential. Learn what makes a successful bakery business and how to position your brand in a competitive market.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-cyan-400 p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-md">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Profitable Bakery Business Ideas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Explore bakery business ideas like home bakery, online cake shop, artisan bread bakery, and niche markets such as gluten-free or vegan baking to maximize profits.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-cyan-400 p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-md">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Bakery Business Plan & Startup Costs
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn how to create a detailed bakery business plan, estimate startup costs, choose the right legal structure, and set up operations for long-term success.
            </p>
          </div>

        </div>

        {/* Bottom Extra Content */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Starting a bakery business can be highly rewarding when done right. From selecting the perfect location and pricing strategy to marketing your bakery online, this guide provides actionable insights to help you launch and grow a successful bakery business in today’s competitive market.
          </p>
        </div>

      </div>
    </section>

      <section className="py-16 px-6 bg-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <TrendingUp className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-5xl font-extrabold mb-4 text-slate-900">Why Start a Bakery Business?</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              The bakery industry is a powerhouse for business growth. Here are the compelling statistics:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">11K+</div>
              <p className="text-slate-700">Bakery cafes operating in the US</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">$300B</div>
              <p className="text-slate-700">Annual bakery product market value</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">$350</div>
              <p className="text-slate-700">Average household spending on bakery products</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <CheckCircle className="w-10 h-10 text-green-600 mb-3" />
              <p className="text-slate-700">Sales expected to increase by 5%+ annually</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <CheckCircle className="w-10 h-10 text-green-600 mb-3" />
              <p className="text-slate-700">Two-thirds of bakeries have fewer than 10 employees</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <CheckCircle className="w-10 h-10 text-green-600 mb-3" />
              <p className="text-slate-700">30% of consumers purchasing gluten-free products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-200">
              <Users className="w-10 h-10 text-cyan-600" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Is Starting a Bakery Business Right for You?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Before starting a bakery business, it’s important to understand the daily responsibilities, required skills, and customer expectations. This will help you determine if running a successful bakery aligns with your goals and lifestyle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left - Daily Tasks */}
<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
  
  <div>
    <h3 className="text-2xl font-bold mb-6 text-gray-900">
      Daily Tasks in a Bakery Business
    </h3>

    <ul className="space-y-4 mb-6">
      {[
        "Analyze customer demand and trending bakery products",
        "Purchase quality ingredients and manage suppliers",
        "Calculate pricing, costs, and profit margins",
        "Prepare and bake fresh products daily",
        "Manage inventory and ensure food safety",
        "Promote your bakery through online and offline marketing"
      ].map((task, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-cyan-600 mt-1" />
          <span className="text-gray-600">{task}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Image */}
  <div className="mt-4">
    <img
      src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80"
      alt="Bakery business work process"
      className="w-full h-72 object-cover rounded-xl shadow-md"
    />
  </div>

</div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Skills */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Essential Skills for Bakery Owners
              </h3>

              <ul className="space-y-4">
                {[
                  "Strong baking skills and understanding of baking techniques",
                  "Customer communication and service skills",
                  "Basic accounting and pricing knowledge",
                  "Team management and leadership abilities",
                  "Marketing and branding skills for business growth"
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-600 mt-1" />
                    <span className="text-gray-600">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Expectations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                What Customers Expect from a Bakery
              </h3>

              <ul className="space-y-4">
                {[
                  "Fresh, high-quality baked goods daily",
                  "Wide variety of cakes, breads, and pastries",
                  "Clean and comfortable bakery environment",
                  "Affordable pricing with good value",
                  "Additional offerings like coffee, snacks, and beverages"
                ].map((want, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-600">{want}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>

      <section className="py-24 px-6 bg-cyan-100/40">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Top Bakery Business Ideas to Start in 2026
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore the most profitable bakery business ideas and choose the right model based on your budget, target market, and business goals. From home bakeries to retail shops, discover the best bakery startup opportunities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 mb-4 shadow-md group-hover:scale-110 transition">
                <ChefHat className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {type.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {type.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-8 text-slate-900">
  How to Validate Your Bakery Business Idea Before You Launch
</h2>

<p className="text-lg text-center text-slate-700 mb-12 leading-relaxed">
  Learn how to validate your bakery business idea with proven strategies like market research, customer analysis, and demand testing to reduce risk and build a profitable bakery startup.
</p>

          <div className="space-y-6">
            {[
              {
    title: 'Define Your Unique Selling Proposition (USP)',
    description: 'Identify what makes your bakery business unique, such as artisan products, custom cakes, organic ingredients, or niche offerings like gluten-free or vegan baked goods. A strong USP helps your bakery stand out in a competitive market.'
  },
  {
    title: 'Conduct Bakery Market Research & Competitor Analysis',
    description: 'Analyze local bakeries, cafes, and online bakery businesses to understand pricing, product demand, and customer preferences. Studying competitors helps you identify gaps and opportunities to position your bakery for success.'
  },
  {
    title: 'Understand Your Target Customers',
    description: 'Research your target audience, including their buying behavior, taste preferences, and budget. Understanding your ideal bakery customers allows you to create products that sell and build long-term customer loyalty.'
  },
  {
    title: 'Validate Your Bakery Business Idea',
    description: 'Test your bakery concept by selling samples, taking pre-orders, or launching a small home bakery. Validating your business idea reduces risk and ensures there is real demand before investing heavily.'
  },
  {
    title: 'Build Network & Join Business Communities',
    description: 'Connect with local entrepreneurs, bakery owners, and online business communities to gain insights, learn industry trends, and discover growth opportunities for your bakery business.'
  }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg border-l-4 border-cyan-600">
                <h3 className="text-xl font-bold mb-2 text-cyan-600">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900 text-white">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <FileText className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
      <h2 className="text-5xl font-extrabold mb-4">
        Create a Winning Bakery Business Plan for Success
      </h2>
      <p className="text-lg text-slate-300 max-w-3xl mx-auto">
        A well-structured bakery business plan is essential to start and grow a profitable bakery business. It helps you define your strategy, understand your target market, estimate startup costs, and plan for long-term success in a competitive food industry.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        'Executive summary outlining your bakery business goals and strategy',
        'Clear business goals, objectives, and growth plan',
        'Detailed bakery business description and brand positioning',
        'Market analysis including target customers and local demand',
        'Business structure (LLC, sole proprietorship, or S-Corp)',
        'Bakery business model and revenue streams',
        'Marketing strategy to attract and retain customers',
        'Financial projections, startup costs, and profit margins',
        'Supporting documents, licenses, and operational details'
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
          <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
            {index + 1}
          </div>
          <span className="text-slate-200">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <Building className="w-16 h-16 text-blue-600 mx-auto mb-4" />
      <h2 className="text-5xl font-extrabold mb-4 text-slate-900">
        Choose the Best Business Structure for Your Bakery
      </h2>
    </div>

    <div className="grid lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
        <h3 className="text-xl font-bold mb-3 text-slate-900">
          Sole Proprietorship
        </h3>
        <p className="text-slate-700 mb-3">
          A sole proprietorship is the simplest way to start a bakery business, but it offers no personal liability protection. Your personal assets may be at risk from business debts or legal claims.
        </p>
        <div className="text-red-600 font-semibold">⚠️ Not Recommended for Bakery Businesses</div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
        <h3 className="text-xl font-bold mb-3 text-slate-900">
          Partnership
        </h3>
        <p className="text-slate-700 mb-3">
          A partnership allows two or more people to start a bakery together, but it may expose partners to shared liability and legal risks. A formal agreement is essential to avoid future disputes.
        </p>
        <div className="text-yellow-600 font-semibold">⚠️ Limited Liability Protection</div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border-2 border-green-400 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-slate-900">
          Limited Liability Company (LLC)
        </h3>
        <p className="text-slate-700 mb-3">
          An LLC is the most popular business structure for bakery owners. It provides personal asset protection, flexible taxation options, and is easy to set up—making it ideal for small bakery businesses and startups.
        </p>
        <div className="text-green-600 font-semibold">✓ Best Choice for Bakery Business</div>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-cyan-50 p-8 rounded-xl border-2 border-cyan-400 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-slate-900">
          S Corporation (S-Corp)
        </h3>
        <p className="text-slate-700">
          An S-Corp can help reduce self-employment taxes by allowing income splitting between salary and distributions. It is suitable for growing bakery businesses with consistent profits.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-400 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-slate-900">
          C Corporation (C-Corp)
        </h3>
        <p className="text-slate-700">
          A C-Corp is a complex business structure designed for large-scale companies. It involves double taxation and extensive compliance, making it less suitable for small bakery businesses.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="py-16 px-6 bg-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-slate-900">
            Setting Up Operations
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <Building className="w-8 h-8 text-cyan-600" />
                Location
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Your location depends on your business model. Wholesale operations need production space,
                while retail bakeries require customer-facing storefronts with visibility and foot traffic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <ChefHat className="w-8 h-8 text-cyan-600" />
                Equipment
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Professional kitchen licensed for commercial production, display cases, counters, shelving,
                and if serving customers on-site, tables and chairs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <Users className="w-8 h-8 text-cyan-600" />
                Employees
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Hire skilled staff for baking, customer service, and operations. You can't make products
                and serve customers simultaneously, so build a reliable team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-cyan-600" />
                Finances
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Set up business banking, point-of-sale systems, and accounting processes. Budget for startup costs,
                ingredients, utilities, and payroll.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
      <h2 className="text-5xl font-extrabold mb-4 text-slate-900">
        Bakery Business Licenses, Regulations & Tax Requirements
      </h2>
      <p className="text-lg text-slate-700">
        Understand legal requirements, permits, and tax obligations to start and run a compliant bakery business
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Licenses */}
      <div className="bg-blue-50 p-8 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-slate-900">
          Bakery Licenses & Permits
        </h3>
        <p className="text-slate-700 mb-4">
          To legally start a bakery business, you must obtain the required licenses and permits at the local, state, and federal level. Key requirements include:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">
              Food safety certification and food handling permits
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">
              Health department inspections and hygiene compliance
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">
              Business registration, trade license, and zoning permits
            </span>
          </li>
        </ul>
      </div>

      {/* Taxes */}
      <div className="bg-green-50 p-8 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-slate-900">
          Bakery Business Tax Obligations
        </h3>
        <p className="text-slate-700 mb-4">
          Bakery owners must manage multiple tax responsibilities depending on their business structure and location:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">
              Self-employment tax for sole proprietors and freelancers
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">
              State and federal income tax on bakery profits
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">
              Sales tax on baked goods and retail products (where applicable)
            </span>
          </li>
        </ul>
        <p className="text-slate-700 mt-4 font-semibold">
          💡 Tip: Set aside around 25–35% of your bakery income for taxes to avoid cash flow issues
        </p>
      </div>

    </div>
  </div>
</section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <Calendar className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
      <h2 className="text-5xl font-extrabold mb-4">
        Bakery Business Compliance & Maintenance Guide
      </h2>
      <p className="text-lg text-slate-300">
        Stay compliant with essential legal, tax, and operational requirements to run a successful bakery business.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: 'File Annual Business Reports',
          desc: 'Submit required annual reports to maintain your bakery business registration and stay compliant with state regulations.'
        },
        {
          title: 'Pay Quarterly Estimated Taxes',
          desc: 'Make timely quarterly tax payments (April, June, September, January) to avoid penalties and manage cash flow effectively.'
        },
        {
          title: 'Renew Business Licenses & Permits',
          desc: 'Keep all bakery licenses, food permits, and health certifications up to date to operate legally without interruptions.'
        },
        {
          title: 'Prepare Business Taxes',
          desc: 'Work with a professional accountant to organize financial records and optimize your bakery tax strategy.'
        },
        {
          title: 'File Annual Tax Returns',
          desc: 'Submit accurate federal and state tax returns on time to ensure compliance and avoid legal issues.'
        },
        {
          title: 'Manage Payroll & Sales Tax',
          desc: 'Handle employee payroll taxes and collect and remit sales tax regularly as required for your bakery business.'
        }
      ].map((item, index) => (
        <div key={index} className="bg-slate-700 p-6 rounded-xl">
          <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center font-bold mb-3">
            {index + 1}
          </div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-slate-300">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-200">
              <Shield className="w-10 h-10 text-cyan-600" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Essential Bakery Business Insurance Coverage
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Protect your bakery business with the right insurance policies. From liability protection to employee coverage, having proper business insurance ensures financial security, legal compliance, and long-term stability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-cyan-100/30 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-cyan-600">
              Workers’ Compensation Insurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Workers’ compensation insurance covers employee injuries, workplace accidents, and job-related illnesses. It is a legal requirement in many states and helps protect your bakery from costly claims while ensuring employee safety.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-cyan-100/30 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-cyan-600">
              General Liability Insurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              General liability insurance protects your bakery from lawsuits related to customer injuries, property damage, and legal expenses. It is essential for retail bakeries and customer-facing food businesses.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-cyan-100/30 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-cyan-600">
              Commercial Property Insurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Property insurance covers your bakery equipment, ovens, inventory, and workspace against risks like fire, theft, or damage. Whether you run a home bakery or a storefront, this coverage is crucial for protecting your assets.
            </p>
          </div>

        </div>

      </div>
    </section>

      <section className="py-20 px-6 bg-cyan-100/40">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Useful Tools & Resources
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Explore essential tools to manage, market, and grow your business efficiently.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Column 1 */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-lg font-bold mb-4 text-cyan-500 border-b pb-2">
          Project Management
        </h3>
        <ul className="space-y-3">
          <li><a href="https://asana.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Asana</a></li>
          <li><a href="https://basecamp.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Basecamp</a></li>
          <li><a href="https://trello.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Trello</a></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-lg font-bold mb-4 text-cyan-500 border-b pb-2">
          Email Marketing
        </h3>
        <ul className="space-y-3">
          <li><a href="https://mailchimp.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Mailchimp</a></li>
          <li><a href="https://www.campaignmonitor.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Campaign Monitor</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-lg font-bold mb-4 text-cyan-500 border-b pb-2">
          Social Media
        </h3>
        <ul className="space-y-3">
          <li><a href="https://hootsuite.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Hootsuite</a></li>
          <li><a href="https://buffer.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Buffer</a></li>
          <li><a href="https://sproutsocial.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Sprout Social</a></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-lg font-bold mb-4 text-cyan-500 border-b pb-2">
          Customer Support
        </h3>
        <ul className="space-y-3">
          <li><a href="https://www.zendesk.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">Zendesk</a></li>
          <li><a href="https://www.surveymonkey.com/" className="text-gray-600 hover:text-cyan-600 transition font-medium">SurveyMonkey</a></li>
        </ul>
      </div>

    </div>

  </div>
</section>

      <section className="py-20 px-6 bg-gradient-to-br from-cyan-600 to-cyan-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Start Your Bakery?</h2>
          <p className="text-xl mb-8 text-cyan-50">
            A bakery is a fantastic way to provide amazing food to wonderful people. With the right planning,
            unique offerings, and solid execution, you have every chance for success.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-10 py-4 rounded-lg text-xl font-bold hover:bg-cyan-50 transition shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
                    <GetStartedModal
                            isOpen={isModalOpen}
                                                                                                                                    onClose={() => setIsModalOpen(false)}
                                                                                                                                    selectedBusinessType={selectedBusinessType}
                                                                                                                                  />
                                            
                    
                    
              
            
    </div>
  );
}
