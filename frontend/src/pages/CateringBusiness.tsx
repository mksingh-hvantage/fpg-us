import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, Utensils, Briefcase, TrendingUp, Users, CheckCircle, FileText, DollarSign, UtensilsCrossed } from 'lucide-react';

export default function CateringBusiness() {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1773409414133-9c5d141cb4c5?q=80')" }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT CONTENT */}
              <div className="text-white">
                
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                  <Utensils className="w-4 h-4" />
                  Profitable Food Business Guide
                </div>

                <h1 className="text-5xl font-extrabold leading-base mb-6">
                  Start a Profitable Catering Business & Grow Fast
                </h1>

                <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                  Learn how to start a successful catering business from home or commercial kitchen. Discover proven strategies for menu planning, pricing, marketing, and scaling your catering services with high profit margins.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setSelectedBusinessType('');
                      setIsModalOpen(true);
                    }}
                    className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold shadow-lg"
                  >
                    Start Your Catering Business
                  </button>

                  <button className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold">
                    Download Free Guide
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
                  <span>✔ 50,000+ Entrepreneurs</span>
                  <span>✔ Step-by-Step Guide</span>
                  <span>✔ Proven Business Model</span>
                </div>

              </div>

              {/* RIGHT IMAGE (Optional Foreground) */}
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1663061547892-19d2cf50f1b2?q=80"
                  alt="Catering Business Food Setup"
                  className="rounded-2xl shadow-2xl"
                />
              </div>

            </div>
          </div>
        </section>


        <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center max-w-5xl mx-auto mb-10">
      <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-3">
        Business Startup Guides
      </h2>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Start a Profitable <span className='text-cyan-600'>Catering Business</span> from Scratch
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed">
        Looking to start a catering business? Learn how to launch a successful food business without the high costs of running a restaurant. A catering business allows you to serve high-quality meals, manage flexible operations, and generate strong profit margins with lower overhead.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">

      {/* LEFT CONTENT */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Complete Catering Business Formation Guide
        </h3>

        <p className="text-gray-600 mb-6">
          Starting and growing a successful catering business requires the right strategy, planning, and execution. Whether you're launching a home-based catering service or a full-scale operation, this step-by-step guide will help you turn your vision into a profitable business.
        </p>

        <p className="text-gray-600 mb-6">
          From understanding the catering industry to managing operations and scaling your services, this guide covers everything you need to build a thriving catering company.
        </p>

        <p className="text-gray-600">
          Learn how to create a strong catering business plan, attract high-paying clients, and build a sustainable catering service that stands out in a competitive market. With the right approach, you can quickly grow your catering startup into a reliable and profitable business.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1575047496681-34fe04c40063?q=80"
          alt="Catering Business Setup and Food Service"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>

    {/* Checklist Section */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mb-10">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        What You’ll Learn in This Catering Business Guide
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Understanding the catering industry and market demand",
          "How to register and structure your catering business legally",
          "Managing catering business taxes and compliance",
          "Planning and launching your catering services step-by-step",
          "Hiring staff and managing daily catering operations",
          "Financial planning, pricing, and profit margins",
          "Marketing your catering business and attracting clients",
          "Following food safety laws and regulations",
          "Accessing additional resources to grow your catering business"
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 text-cyan-600">
              ✓
            </div>
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Section */}
    <div className="text-center max-w-6xl mt-16 mx-auto">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
        Build and Grow Your Catering Business with Confidence
      </h3>

      <p className="text-lg text-gray-600 mb-6">
        By following this complete catering business guide, you’ll gain the knowledge and tools needed to launch, manage, and scale a successful catering service. Start your journey today and turn your passion for food into a profitable business.
      </p>

      <button onClick={() => {
                      setSelectedBusinessType('');
                      setIsModalOpen(true);
                    }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-md">
        Get Started Now
      </button>
    </div>

  </div>
</section>

      {/* Table of Contents */}
      <section className="bg-cyan-50 py-8 px-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-xl text-slate-900 mb-4">On this page</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#types" className="text-cyan-600 hover:text-cyan-800 font-medium">Business Types</a>
            <a href="#planning" className="text-cyan-600 hover:text-cyan-800 font-medium">Planning & Structure</a>
            <a href="#setup" className="text-cyan-600 hover:text-cyan-800 font-medium">Setup & Operations</a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Business Overview */}
        <section className="mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Catering vs Restaurant Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 rounded-lg p-8 border border-cyan-200">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Why Choose Catering?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span className="text-slate-700"><strong>Lower Overhead:</strong> No restaurant rent or daily customer traffic requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span className="text-slate-700"><strong>Better Margins:</strong> Earn excellent profit margins per event</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span className="text-slate-700"><strong>Flexibility:</strong> Work on your schedule with advance bookings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span className="text-slate-700"><strong>Growth Potential:</strong> Scale without location constraints</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Key Differences</h3>
              <p className="text-slate-700 mb-4">
                While restaurants operate daily with walk-in customers and high fixed costs, catering businesses work on event-by-event basis with pre-planned menus and confirmed guest counts. This model allows you to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-slate-700">Control food waste through accurate planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-slate-700">Forecast revenue with confirmed bookings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-slate-700">Manage staffing more efficiently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-slate-700">Build personal relationships with clients</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Catering */}
        <section id="types" className="mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Different Types of Catering Businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-l-4 border-cyan-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Briefcase className="w-6 h-6 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Food Truck Catering</h3>
              </div>
              <p className="text-slate-600">Mobile kitchen setup providing food at events, festivals, outside establishments and public gatherings. Great for starting with lower overhead.</p>
            </div>

            <div className="bg-white border-l-4 border-cyan-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <UtensilsCrossed className="w-6 h-6 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Private Event Catering</h3>
              </div>
              <p className="text-slate-600">Providing food for weddings, christenings, wakes, birthday parties and other personal celebrations. Direct relationships with individual clients.</p>
            </div>

            <div className="bg-white border-l-4 border-cyan-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-6 h-6 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Corporate Event Catering</h3>
              </div>
              <p className="text-slate-600">Popular and growing field serving businesses with food for meetings, conferences, seminars, and company events. Larger events, consistent revenue.</p>
            </div>

            <div className="bg-white border-l-4 border-cyan-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Partnership Catering</h3>
              </div>
              <p className="text-slate-600">Partner with pubs, clubs, venues and restaurants. They handle customers while you manage food preparation and service. Reduces their stress.</p>
            </div>

            <div className="bg-white border-l-4 border-cyan-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow col-span-1 md:col-span-2">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-6 h-6 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Specialty Catering</h3>
              </div>
              <p className="text-slate-600">Differentiate yourself with specialized services: vegetarian/vegan catering, gluten-free options, kosher, halal, or cuisine-specific (Italian, Asian, etc.). Serve underserved niches and command premium pricing.</p>
            </div>
          </div>
        </section>

        {/* Planning Section */}
        <section id="planning" className="mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Planning Your Catering Business
          </h2>

          {/* Business Model */}
          <div className="bg-gradient-to-r from-cyan-50 to-slate-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <DollarSign className="w-7 h-7 mr-3 text-cyan-600" />
              Business Model & Financial Projections
            </h3>
            <p className="text-slate-700 mb-6">
              Develop a clear business model for generating revenue and plan financial projections before launching:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">Revenue Streams</p>
                <p className="text-slate-600 text-sm">Identify how you'll charge: per person, by event type, day of week, seasonal pricing, or package deals</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">Cost Structure</p>
                <p className="text-slate-600 text-sm">Calculate food costs, labor, equipment, transportation, staffing for different event sizes</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">Profit Targets</p>
                <p className="text-slate-600 text-sm">Plan for 30-50% profit margins after all expenses including staffing and overhead</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">Financial Forecasts</p>
                <p className="text-slate-600 text-sm">Project revenue for 1 month, 3 months, 1 year, and 2 years based on bookings</p>
              </div>
            </div>
          </div>

          {/* Business Plan */}
          <div className="border-2 border-cyan-200 rounded-lg p-8 bg-cyan-50 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <FileText className="w-7 h-7 mr-3 text-cyan-600" />
              Write Your Business Plan
            </h3>
            <p className="text-slate-700 mb-6">A comprehensive business plan should cover:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Executive summary with key highlights',
                'Market analysis and target customers',
                'Catering business types you will offer',
                'Marketing and sales strategy',
                'Goals and financial targets',
                'Business structure and operations',
                'Pricing and service packages',
                'Financial projections and profitability',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">•</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Structure Section */}
        <section className="mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Legal Structure & Registration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-red-900 mb-3">Sole Proprietorship</h4>
              <p className="text-slate-700 text-sm">Default structure with no legal separation. NOT recommended - lacks asset protection for food business liability.</p>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-3">LLC (Recommended)</h4>
              <p className="text-slate-700 text-sm">Fast, simple, affordable setup. Protects personal assets from business liability. Best choice for catering startups.</p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-yellow-900 mb-3">Series LLC</h4>
              <p className="text-slate-700 text-sm">Available in select states. Allows mini-LLCs under one umbrella with separate liability for different services.</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Corporation</h4>
              <p className="text-slate-700 text-sm">More complex with additional compliance. Generally not recommended for small catering businesses.</p>
            </div>
          </div>

          <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded">
            <p className="text-slate-700">
              <strong>Our Recommendation:</strong> Form an LLC in your state. This provides liability protection (critical in food service), tax flexibility, and administrative simplicity. Most LLCs can be registered online within days. This is especially important for catering due to food safety liability concerns.
            </p>
          </div>
        </section>

        {/* Setup & Operations */}
        <section id="setup" className="mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Setup & Maintain Your Catering Business
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                title: 'Business Location',
                desc: 'You need excellent kitchen facilities with proper equipment. The space should be easily accessible for staff and clients, meet health codes, and not eat into profit margins too much.'
              },
              {
                title: 'Permits & Licenses',
                desc: 'Critical for food service. Obtain food service licenses, health permits, business licenses. You must comply with food safety regulations, staff health codes, and local requirements.'
              },
              {
                title: 'Employees & Staffing',
                desc: 'You\'ll need chefs, prep cooks, serving staff, and event managers. Getting the right staff balance is essential. Invest in training and maintain consistent quality.'
              },
              {
                title: 'Equipment & Ingredients',
                desc: 'Significant upfront investment needed: kitchen equipment, serving equipment, tables, chairs, plates, silverware, and glassware. Budget carefully for ongoing ingredient costs.'
              },
              {
                title: 'Marketing & Branding',
                desc: 'Build a professional website, create a logo, and develop marketing materials. Engage local marketing firms. Use social media and word-of-mouth referrals effectively.'
              },
              {
                title: 'Finances & Taxes',
                desc: 'Open a business bank account and credit card. Understand tax obligations including payroll taxes, food service taxes, and quarterly estimated taxes.'
              },
              {
                title: 'Business Maintenance',
                desc: 'File annual reports, renew licenses and permits regularly, maintain insurance coverage, keep detailed financial records, and stay compliant with regulations.'
              },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => toggleSection(`section-${idx}`)}
                className="w-full text-left bg-white border border-slate-200 rounded-lg p-6 hover:border-cyan-600 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 flex items-center">
                    <Users className="w-5 h-5 mr-3 text-cyan-600" />
                    {item.title}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSection === `section-${idx}` ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedSection === `section-${idx}` && (
                  <p className="text-slate-600 mt-3">{item.desc}</p>
                )}
              </button>
            ))}
          </div>

          {/* Employees Section */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Users className="w-7 h-7 mr-3 text-cyan-600" />
              Hiring & Managing Employees
            </h3>
            <div className="space-y-3">
              {[
                'Get an Employer Identification Number (EIN) from the IRS',
                'Verify employees can legally work in the U.S. with background checks',
                'Report new hires to your state within required timeframes',
                'Withhold and pay income and payroll taxes correctly and on time',
                'Obtain workers compensation insurance for employee protection',
                'Establish regular payroll schedule per state requirements',
                'Maintain safe working environment with proper food service training',
                'Implement health and safety protocols in your kitchen',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start bg-white p-3 rounded border-l-2 border-cyan-600">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software & Tools */}
        <section className="mb-10">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
              <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
              Software & Tools for Catering
            </h2>

            <p className="text-slate-700 mb-8 text-lg">
              Specialized catering software can significantly improve efficiency and profitability. Use tools for catering management, CRM, marketing, and financial tracking to streamline your catering business operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: 'Catering Management',
                  items: [
                    { name: 'ChefTec', url: 'https://www.cheftec.com/' },
                    { name: 'MarginEdge', url: 'https://www.marginedge.com/' },
                    { name: 'Toast POS', url: 'https://pos.toasttab.com/' }
                  ]
                },
                {
                  category: 'Project Management',
                  items: [
                    { name: 'Asana', url: 'https://asana.com/' },
                    { name: 'Monday.com', url: 'https://monday.com/' },
                    { name: 'Trello', url: 'https://trello.com/' },
                    { name: 'Basecamp', url: 'https://basecamp.com/' }
                  ]
                },
                {
                  category: 'CRM & Bookings',
                  items: [
                    { name: 'HubSpot', url: 'https://www.hubspot.com/' },
                    { name: 'Pipedrive', url: 'https://www.pipedrive.com/' },
                    { name: 'Acuity Scheduling', url: 'https://acuityscheduling.com/' },
                    { name: 'Calendly', url: 'https://calendly.com/' }
                  ]
                },
                {
                  category: 'Social Media',
                  items: [
                    { name: 'Buffer', url: 'https://buffer.com/' },
                    { name: 'Hootsuite', url: 'https://hootsuite.com/' },
                    { name: 'Later', url: 'https://later.com/' },
                    { name: 'Sprout Social', url: 'https://sproutsocial.com/' }
                  ]
                },
                {
                  category: 'Email Marketing',
                  items: [
                    { name: 'Mailchimp', url: 'https://mailchimp.com/' },
                    { name: 'Klaviyo', url: 'https://www.klaviyo.com/' },
                    { name: 'ConvertKit', url: 'https://convertkit.com/' },
                    { name: 'ActiveCampaign', url: 'https://www.activecampaign.com/' }
                  ]
                },
                {
                  category: 'Financial Tools',
                  items: [
                    { name: 'QuickBooks', url: 'https://quickbooks.intuit.com/' },
                    { name: 'FreshBooks', url: 'https://www.freshbooks.com/' },
                    { name: 'Wave', url: 'https://www.waveapps.com/' },
                    { name: 'Xero', url: 'https://www.xero.com/' }
                  ]
                }
              ].map((resource, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-4">{resource.category}</h4>

                  <ul className="space-y-2">
                    {resource.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm flex items-start">
                        <span className="text-cyan-600 mr-2">•</span>
                        
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-cyan-600 hover:underline transition"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        {/* Resources */}
        <section className="mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Additional Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-4">Compliance & Regulations</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Local health department requirements</li>
                <li>• Food safety and handling certification</li>
                <li>• Food truck licensing and permits</li>
                <li>• Commercial kitchen rental options</li>
                <li>• Business and general liability insurance</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-4">Operational Essentials</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Menu planning and costing</li>
                <li>• Food cost management</li>
                <li>• Staffing and payroll</li>
                <li>• Customer contract templates</li>
                <li>• Event planning and logistics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-900 text-white rounded-lg p-12 text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Catering Business?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            With delicious food, outstanding service, and smart business practices, you can build a thriving catering company that brings joy and profit to your life. The rewards of creating memorable experiences for your clients are immeasurable.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">
            Begin Your Catering Journey
          </button>
        </section>
      </div>
                    <GetStartedModal
                                                                                isOpen={isModalOpen}
                                                                                onClose={() => setIsModalOpen(false)}
                                                                                selectedBusinessType={selectedBusinessType}
                                                                              />
    </div>
  );
}
