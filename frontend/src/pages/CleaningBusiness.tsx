import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle,
  Home,
  Building2,
  ShoppingBag,
  Factory,
  School,
  Stethoscope,
  ArrowRight,
  Star,
  Shield,
  Target,
  Zap,
  Award,
  ChevronDown,
  ExternalLink,
  Wrench
} from 'lucide-react';

export default function CleaningBusiness() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <main className="">
        <section className="relative py-16 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80')" }}
          ></div>

          {/* Overlay (optional for better readability) */}
          <div className="absolute inset-0 bg-slate-800/70"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-6xl mx-auto">
              
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Your Complete Guide to Success
              </div>

              <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                Launch Your Cleaning Business with Confidence
              </h1>

              <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
                Transform your entrepreneurial dreams into reality. Start a profitable cleaning business with our comprehensive guide covering everything from market research to daily operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSelectedBusinessType('');
                    setIsModalOpen(true);
                  }}
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start Your Business Today
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold">
                  Download Free Guide
                </button>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white fill-yellow-400" />
                  <span>4.8/5 from 60,000+ entrepreneurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  <span>Trusted since 2004</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="overview" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Starting a <span className='text-cyan-600'>Cleaning Business</span> Made Simple
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Launch a profitable cleaning business with low investment and high demand. The cleaning services industry offers consistent income, flexible operations, and long-term growth opportunities for entrepreneurs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-lg transition-all">
                <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">875K+</h3>
                <p className="text-gray-600">
                  Cleaning businesses operating across the U.S., showing strong market demand
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3.5M+</h3>
                <p className="text-gray-600">
                  Professionals employed in the cleaning services industry
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-amber-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-lg transition-all">
                <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4–6%</h3>
                <p className="text-gray-600">
                  Average annual growth rate of the cleaning business market
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Low Investment</h3>
                <p className="text-gray-600">
                  Start a cleaning business with minimal capital and no specialized training
                </p>
              </div>
            </div>

            {/* Content + Insights */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Complete Cleaning Business Guide & Industry Insights
              </h3>

              <p className="text-gray-600 mb-8">
                The cleaning business is one of the most reliable and recession-resistant industries. Whether you are starting a residential cleaning service or a commercial cleaning company, this business model ensures consistent demand and recurring revenue. With the right strategy, marketing, and operations, you can build a scalable and profitable cleaning business.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Commercial cleaning services, including office and retail cleaning, generate the highest revenue and provide long-term business contracts.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    The number of cleaning businesses continues to grow steadily, creating new opportunities for entrepreneurs entering the market.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Office cleaning contracts provide consistent monthly income, making them one of the most reliable revenue sources.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    The cleaning industry is not affected by eCommerce disruption and is not dominated by major players, allowing small businesses to grow بسهولة.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Starting a cleaning business does not require advanced skills, making it one of the best low-investment business ideas.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    With proper marketing, hiring, and legal setup, you can scale your cleaning company into a long-term successful business.
                  </p>
                </div>

              </div>

              <p className="text-gray-600 mt-8">
                This cleaning business guide covers everything you need, including how to start a cleaning business, hiring employees, marketing strategies, legal structure, taxes, and daily operations. By following the right steps, you can successfully launch and grow your own cleaning company.
              </p>

            </div>
          </div>
        </section>

        <section className="py-20 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Is Starting a <span className='text-cyan-600'>Cleaning Business</span> Right for You?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Before you start a cleaning business, it’s important to understand the skills, challenges, and daily responsibilities involved. This guide helps you decide if the cleaning services industry is the right fit for you.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-12">

              {/* LEFT SIDE - QUALITIES */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Skills Needed for a Successful Cleaning Business
                </h3>

                <div className="space-y-4">

                  {[
                    "Strong customer service skills to handle clients professionally and build long-term relationships",
                    "Ability to manage employee turnover and maintain a reliable cleaning team",
                    "Basic marketing knowledge including website, branding, and local SEO advertising",
                    "Training skills to ensure high-quality cleaning standards and consistent service delivery",
                    "Capability to handle market competition and stand out with better service",
                    "Operational management skills for scheduling, quality control, and service execution",
                    "People skills to manage both customers and staff effectively"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-1" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}

                </div>
              </div>

              {/* RIGHT SIDE - CHALLENGES */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Common Challenges in the Cleaning Business
                </h3>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-6">
                  <p className="text-gray-700 mb-4">
                    Starting a cleaning business comes with challenges like high competition and employee turnover. However, the biggest challenge is consistently finding new clients while retaining existing customers.
                  </p>
                  <p className="text-gray-700">
                    You must also understand pricing strategies, cost management, and profit margins. Since labor costs are high, maintaining profitability requires careful planning and efficient operations.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Daily Tasks of a Cleaning Business Owner
                </h4>

                <div className="space-y-3">
                  {[
                    "Scheduling cleaning appointments and managing bookings",
                    "Negotiating contracts and setting service pricing",
                    "Managing employees and resolving team issues",
                    "Ordering cleaning supplies and maintaining inventory",
                    "Planning efficient travel routes for cleaning teams",
                    "Training staff on cleaning techniques and customer service",
                    "Handling payments, invoices, and financial tracking"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100">
                      <span className="w-8 h-8 flex items-center justify-center bg-cyan-600 text-white rounded-full text-sm font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{task}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-cyan-600 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Start Your Cleaning Business?
                </h3>
                <p className="mb-6 text-cyan-100">
                  With the right skills, planning, and strategy, you can build a successful and profitable cleaning business in a growing industry.
                </p>
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Started Today
                </button>
              </div>
            </div>

          </div>
        </section>

        <section id="types" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-base mb-4">
                Find the Right <span className='text-cyan-600'>Cleaning Business</span> to Start Today
              </h2>
              <p className="text-lg text-gray-600">
                Choose the right cleaning business niche to start and grow a profitable cleaning business. From residential cleaning services to commercial and industrial cleaning, each niche offers unique opportunities.
              </p>
            </div>

            {/* Main Types */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Home, title: 'Residential Cleaning', desc: 'Provide professional home cleaning services for houses, apartments, and private residences.' },
                { icon: Building2, title: 'Commercial Office Cleaning', desc: 'Offer office cleaning services for corporate spaces, workspaces, and business environments.' },
                { icon: ShoppingBag, title: 'Retail Cleaning Services', desc: 'Maintain cleanliness in shops, malls, and customer-facing retail stores.' },
                { icon: Building2, title: 'Other Commercial Cleaning', desc: 'Clean various commercial properties including restaurants, gyms, and service-based businesses.' },
                { icon: Factory, title: 'Industrial Cleaning', desc: 'Handle heavy-duty cleaning for factories, warehouses, and manufacturing facilities.' },
                { icon: School, title: 'Municipal Cleaning', desc: 'Provide cleaning services for government buildings, schools, and public sector facilities.' },
                { icon: Stethoscope, title: 'Specialist Cleaning Services', desc: 'Specialized cleaning for healthcare, hospitals, and environments requiring strict hygiene standards.' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200 group">
                  <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Specialized Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Specialized Cleaning Services You Can Offer
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                    <Home className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real Estate & Move-In/Out Cleaning</h4>
                    <p className="text-gray-600">
                      Deep cleaning services for homes and apartments before sale, rent, or move-in and move-out transitions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg h-fit">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Upholstery & Carpet Cleaning</h4>
                    <p className="text-gray-600">
                      Professional stain removal and deep cleaning for carpets, sofas, and soft furnishings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg h-fit">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outdoor & Pressure Washing</h4>
                    <p className="text-gray-600">
                      Exterior cleaning services including driveways, patios, building exteriors, and hard surfaces.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                    <Home className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Blinds & Curtain Cleaning</h4>
                    <p className="text-gray-600">
                      Expert cleaning for blinds, curtains, and all types of window treatments and coverings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Planning Section */}
            <div className="text-center max-w-6xl mt-12 mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Build a Strong Foundation for Your Cleaning Business
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Starting a cleaning business requires careful planning and smart decision-making. Research your target market, analyze customer demand, and estimate your startup investment and expected returns. Develop a clear business strategy, understand your competition, and set up efficient systems to ensure long-term success and scalability.
              </p>
            </div>

          </div>
        </section>

        <section className="py-16 bg-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Section 1 - Market Research */}
              <div className="text-center mb-10">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                  Market Research for Your <span className='text-cyan-600'>Cleaning Business</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Before starting a cleaning business, it’s essential to validate your cleaning services and understand market demand. Proper market research helps you identify opportunities, target customers, and build a profitable cleaning business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {[
                  {
                    title: "Define Your Unique Selling Points (USPs)",
                    desc: "Stand out in the cleaning industry by offering competitive pricing, high-quality cleaning services, fast turnaround, or eco-friendly cleaning solutions."
                  },
                  {
                    title: "Analyze Cleaning Business Competitors",
                    desc: "Study local cleaning companies to understand pricing, services, and customer expectations. Competition indicates strong demand in the cleaning market."
                  },
                  {
                    title: "Join Business Communities",
                    desc: "Engage in local business groups, forums, and social platforms to gain insights, ask questions, and find potential cleaning clients."
                  },
                  {
                    title: "Use Market Research Reports",
                    desc: "Explore local and industry reports to understand cleaning service demand, especially for residential and commercial cleaning markets."
                  },
                  {
                    title: "Talk to Potential Customers",
                    desc: "Gather feedback from clients to understand their needs, pricing expectations, and preferred cleaning services."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Section 2 - Business Model */}
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 mb-6">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
                  Build a Strong Cleaning Business Model
                </h3>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
                  A solid business model is the foundation of a successful cleaning business. It defines how you will attract customers, deliver cleaning services, and generate consistent revenue.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Service Strategy</h4>
                    <p className="text-gray-600">
                      Decide whether you will offer residential cleaning, commercial cleaning, or specialized cleaning services to maximize revenue.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Customer Acquisition</h4>
                    <p className="text-gray-600">
                      Use online marketing, local SEO, referrals, and social media to attract new cleaning clients and grow your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 - Financial Planning */}
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Financial Planning & Revenue Projections
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding your cleaning business finances is crucial for long-term success. Estimate your startup costs, expected revenue, and profit margins. Plan your earnings for the next month, quarter, and year. Since cleaning businesses often have tight margins, careful budgeting and financial planning will help you grow sustainably and maximize profitability.
                </p>
              </div>

            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-cyan-50 via-teal-50 to-cyan-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10">
                  <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Write a Business Plan for Your <span className='text-cyan-600'>Cleaning Business</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    A well-structured cleaning business plan is essential to start and grow a successful cleaning company. It helps you define your strategy, attract clients, and ensure long-term profitability in the cleaning services industry.
                  </p>
                </div>

                {/* Plan Points */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {[
                    {
                      title: "Executive Summary",
                      desc: "Summarize the key points of your cleaning business plan, including services, goals, and growth strategy."
                    },
                    {
                      title: "Business Goals & Objectives",
                      desc: "Define your short-term and long-term goals for your cleaning business and how you plan to achieve them."
                    },
                    {
                      title: "Business Description",
                      desc: "Explain your cleaning services, target market, and what makes your cleaning company unique."
                    },
                    {
                      title: "Market Analysis",
                      desc: "Analyze demand for cleaning services, identify target customers, and evaluate competitors in your local market."
                    },
                    {
                      title: "Business Structure",
                      desc: "Outline your company structure, team roles, and operational workflow for delivering cleaning services."
                    },
                    {
                      title: "Business Model",
                      desc: "Describe how your cleaning business will generate revenue through services, pricing strategies, and contracts."
                    },
                    {
                      title: "Marketing & Sales Strategy",
                      desc: "Plan how you will promote your cleaning services using digital marketing, local SEO, and customer referrals."
                    },
                    {
                      title: "Financial Projections",
                      desc: "Estimate your cleaning business revenue, expenses, and profitability to ensure sustainable growth."
                    },
                    {
                      title: "Appendices",
                      desc: "Include additional documents such as pricing lists, licenses, certifications, and supporting data."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Need Help Writing Your Cleaning Business Plan?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Creating a professional business plan can help you launch faster and grow smarter. Follow a proven step-by-step guide to build a strong foundation for your cleaning business success.
                  </p>

                  <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-md">
                    Download Business Plan Guide
                  </button>
                </div>

              </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  {/* Header */}
                  <div className="text-center mb-10">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                      Choose the Right Business Structure for Your <span className='text-cyan-600'>Cleaning Business</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Selecting the right legal structure is a crucial step when starting a cleaning business. Your business entity impacts taxes, liability protection, and how you manage your cleaning company.
                    </p>
                  </div>

                  {/* Business Structures */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {[
                      {
                        title: "Sole Proprietorship",
                        desc: "The simplest business structure for a cleaning business, but it offers no personal liability protection. Not recommended for long-term growth."
                      },
                      {
                        title: "Limited Liability Company (LLC)",
                        desc: "The most popular choice for cleaning businesses. An LLC provides liability protection, separates personal and business assets, and is easy to set up."
                      },
                      {
                        title: "Series LLC",
                        desc: "A specialized LLC structure that allows multiple divisions with separate liability protection under one main company (available in select regions)."
                      },
                      {
                        title: "S Corporation",
                        desc: "A more complex business structure that offers tax advantages but requires additional compliance and is better suited for growing businesses."
                      },
                      {
                        title: "C Corporation",
                        desc: "Designed for large-scale businesses with complex structures. Typically not required for small or medium cleaning businesses."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recommendation Section */}
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 mb-12 text-center">
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                      Recommended Structure for Cleaning Businesses
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      In most cases, forming an LLC for your cleaning business is the best option. It offers strong liability protection, flexible management, and is cost-effective for new entrepreneurs starting a cleaning service.
                    </p>
                  </div>

                  {/* Special Considerations */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Important Considerations for Cleaning Business Setup
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-2">Liability Protection</h4>
                        <p className="text-gray-600">
                          Cleaning businesses face risks such as property damage or accidents. Choosing the right structure helps protect your personal assets.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Insurance</h4>
                        <p className="text-gray-600">
                          Get proper cleaning business insurance to safeguard against unexpected damages, injuries, or claims.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

            <section className="py-16 bg-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  {/* Header */}
                  <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                      Setting Up Your <span className='text-cyan-600'>Cleaning Business</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      After registering your cleaning business, the next step is setting up operations. From choosing your business location to buying cleaning equipment and building a marketing strategy, everything plays a key role in your success.
                    </p>
                  </div>

                  {/* Setup Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {[
                      {
                        title: "Business Location",
                        desc: "Decide whether to run your cleaning business from home, a small office, or a commercial space. Most cleaning businesses operate from home while serving clients at different locations."
                      },
                      {
                        title: "Cleaning Equipment & Supplies",
                        desc: "Invest in essential cleaning equipment such as vacuum cleaners, steam cleaners, dusters, and eco-friendly cleaning supplies. Also ensure you have transportation to reach clients efficiently."
                      },
                      {
                        title: "Technology & Communication",
                        desc: "Use a laptop, smartphone, or software tools to manage bookings, communicate with clients, and handle daily cleaning business operations."
                      },
                      {
                        title: "Marketing & Branding",
                        desc: "Build a professional cleaning business website, design a logo, and use local SEO and online advertising to attract customers and grow your cleaning services."
                      },
                      {
                        title: "Business Processes & Systems",
                        desc: "Create efficient workflows and use software to manage scheduling, invoicing, and customer relationships for smooth business operations."
                      },
                      {
                        title: "Hiring Employees",
                        desc: "Hire trained cleaning staff if you plan to scale your business. Focus on reliability, training, and quality service to build a strong team."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Section */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 text-center border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Build a Strong Foundation for Your Cleaning Business
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      A successful cleaning business requires the right setup, including tools, systems, and a clear marketing plan. Investing in the right resources early will help you deliver high-quality cleaning services and scale your business efficiently.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Ready to Launch Your Cleaning Business?
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Take the next step by setting up your tools, hiring your team, and promoting your cleaning services to start generating revenue.
                    </p>

                    <button onClick={() => {
                    setSelectedBusinessType('');
                    setIsModalOpen(true);
                  }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-md">
                      Start Your Business Setup
                    </button>
                  </div>

                </div>
              </section>

              <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                  Discussion Groups & Forums for <span className='text-cyan-600'>Cleaning Business</span> Owners
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join online cleaning business communities, forums, and discussion groups to learn from experienced professionals, ask questions, and find new clients. Networking is essential to grow your cleaning services business.
                </p>
              </div>

              {/* Forums List */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                {/* Reddit */}
                <a 
                  href="https://www.reddit.com/r/EntrepreneurRideAlong/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all block"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Entrepreneur Ridealong Subreddit
                  </h3>
                  <p className="text-gray-600">
                    A popular Reddit community where entrepreneurs share real business experiences, strategies, and growth tips relevant to cleaning businesses.
                  </p>
                </a>

                {/* CleaningTalk */}
                <a 
                  href="https://www.cleaningtalk.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all block"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    CleaningTalk.com
                  </h3>
                  <p className="text-gray-600">
                    A dedicated cleaning business forum where professionals discuss cleaning services, equipment, pricing, and industry trends.
                  </p>
                </a>

                {/* Fat Cat Cleaner */}
                <a 
                  href="https://www.fatcatcleaner.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all block"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fat Cat Cleaner
                  </h3>
                  <p className="text-gray-600">
                    A valuable resource offering cleaning business tips, guides, and insights to help you grow and scale your cleaning company.
                  </p>
                </a>

              </div>

              {/* Bottom Note */}
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Join Cleaning Business Communities?
                </h3>
                <p className="text-gray-600">
                  Engaging with cleaning business forums helps you stay updated with industry trends, solve real-world challenges, and connect with potential clients and partners.
                </p>
              </div>

            </div>
          </section>

        <section className="py-16 bg-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                <span className='text-cyan-600'>FAQ - </span>Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to the most common questions about starting a cleaning business.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How much does it cost to start a cleaning business?',
                  answer: 'Startup costs typically range from $2,000 to $10,000 depending on your scale. This includes basic equipment (vacuum, supplies, transportation), business registration, insurance, and initial marketing. You can start small with minimal investment and scale up as you grow.'
                },
                {
                  question: 'Do I need special licenses or certifications?',
                  answer: 'Requirements vary by state and municipality. Most areas require a business license, and you\'ll definitely need liability insurance. Some specialized areas (like medical facilities) may require additional certifications. Check with your local Small Business Administration office for specific requirements.'
                },
                {
                  question: 'Should I start as a sole proprietor or form an LLC?',
                  answer: 'An LLC is recommended because it protects your personal assets from business liabilities. Since cleaning involves entering client properties, the liability protection is especially important. LLCs are also relatively inexpensive and simple to set up and maintain.'
                },
                {
                  question: 'How do I find my first clients?',
                  answer: 'Start with your network - friends, family, neighbors. Create a professional website and Google My Business listing. Join local business groups and online communities. Offer introductory discounts. Focus on delivering exceptional service so clients refer you to others.'
                },
                {
                  question: 'What should I charge for cleaning services?',
                  answer: 'Rates vary by location and service type. Research competitors in your area. Residential cleaning typically ranges from $25-50 per hour per cleaner. Commercial contracts are often quoted per square foot or as flat monthly rates. Factor in your costs, time, and desired profit margin.'
                },
                {
                  question: 'When should I hire employees vs. staying solo?',
                  answer: 'Stay solo initially to learn the business and build a client base. Consider hiring when you\'re consistently turning down work due to capacity, or when your time is better spent on business development than cleaning. Remember that hiring adds complexity and reduces profit margins.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Useful Online Tools for <span className='text-cyan-600'>Cleaning Business</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore essential tools to manage, grow, and scale your publishing business efficiently
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                category: 'Project Management',
                tools: [
                  { name: 'Asana', link: 'https://asana.com' },
                  { name: 'Basecamp', link: 'https://basecamp.com' },
                  { name: 'Trello', link: 'https://trello.com' }
                ]
              },
              {
                category: 'Collaboration',
                tools: [
                  { name: 'Google Docs', link: 'https://docs.google.com' },
                  { name: 'Dropbox', link: 'https://dropbox.com' },
                  { name: 'Box', link: 'https://box.com' }
                ]
              },
              {
                category: 'Social Media',
                tools: [
                  { name: 'Hootsuite', link: 'https://hootsuite.com' },
                  { name: 'Buffer', link: 'https://buffer.com' },
                  { name: 'Sprout Social', link: 'https://sproutsocial.com' }
                ]
              },
              {
                category: 'Email Marketing',
                tools: [
                  { name: 'Mailchimp', link: 'https://mailchimp.com' },
                  { name: 'Campaign Monitor', link: 'https://campaignmonitor.com' }
                ]
              },
              {
                category: 'CRM Platforms',
                tools: [
                  { name: 'Salesforce', link: 'https://salesforce.com' },
                  { name: 'Zoho CRM', link: 'https://zoho.com/crm' },
                  { name: 'Insightly', link: 'https://insightly.com' }
                ]
              },
              {
                category: 'Analytics',
                tools: [
                  { name: 'Google Analytics', link: 'https://analytics.google.com' },
                  { name: 'Matomo', link: 'https://matomo.org' }
                ]
              },
              {
                category: 'SEO Tools',
                tools: [
                  { name: 'SEMrush', link: 'https://semrush.com' },
                  { name: 'Ahrefs', link: 'https://ahrefs.com' },
                  { name: 'Moz', link: 'https://moz.com' }
                ]
              },
              {
                category: 'Website Builders',
                tools: [
                  { name: 'WordPress', link: 'https://wordpress.org' },
                  { name: 'Wix', link: 'https://wix.com' },
                  { name: 'Squarespace', link: 'https://squarespace.com' }
                ]
              },
              {
                category: 'E-commerce',
                tools: [
                  { name: 'Square', link: 'https://squareup.com' },
                  { name: 'Recurly', link: 'https://recurly.com' },
                  { name: 'Vendio', link: 'https://vendio.com' }
                ]
              }
            ].map((category, index) => (

              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-lg transition group"
              >
                <Wrench className="w-6 h-6 text-cyan-600 mb-4" />

                <h3 className="font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>

                <ul className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <li key={idx}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-cyan-600 transition"
                      >
                        {tool.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            ))}

          </div>
        </div>
      </section>

        <section className="py-20 bg-gradient-to-br from-cyan-600 via-slate-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Start Your Cleaning Business Today
            </h2>
            <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
              Join thousands of successful entrepreneurs who have built profitable cleaning businesses. We'll handle the paperwork while you focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                Form Your LLC Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/contact" className="bg-black text-white px-8 py-4 rounded-lg hover:bg-cyan-800 transition-all font-semibold border-2 border-cyan-400">
                Talk to an Expert
              </a>
            </div>
            <p className="mt-6 text-cyan-100 text-sm">
              💯 Money-back guarantee • ⚡ Set up in minutes • 🛡️ Trusted by 60,000+ businesses
            </p>
          </div>
        </section>
      </main>
<GetStartedModal
                                                                    isOpen={isModalOpen}
                                                                    onClose={() => setIsModalOpen(false)}
                                                                    selectedBusinessType={selectedBusinessType}
                                                                  />
    </div>
  );
}