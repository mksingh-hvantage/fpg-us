import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  Droplet, DollarSign, MapPin, Users, Zap, Shield,
  TrendingUp, CheckCircle, ChevronDown, ChevronUp
} from 'lucide-react';

const faqs = [
  {
    question: 'What Are the Ongoing Operating Expenses for a Laundromat Business?',
    answer:
      "Laundromat operating costs fall into six core categories: rent or mortgage payments, utilities (water, electricity, and gas account for the largest share), commercial business insurance, routine facility cleaning and maintenance, machine repairs and parts replacement, and employee wages if you have on-site staff. On average, utilities alone represent 15–30% of gross revenue, making energy-efficient machines a smart long-term investment. Keeping a tight handle on these recurring expenses is the single most important factor in maximizing net profit and achieving a strong return on investment.",
  },
  {
    question: 'How Does a Laundromat Make Money?',
    answer:
      'The primary revenue driver for any laundromat is per-load machine fees — customers pay each time they use a washer or dryer via coin, card, or mobile app payment. Self-service fees typically range from $2.50 to $6.00 per wash load and $0.25 per 8 minutes of drying time, depending on machine size and local market rates. Beyond machine revenue, profitable laundromats diversify with vending machines (laundry detergent, fabric softener, snacks, and beverages), wash-and-fold drop-off services priced by the pound, professional dry cleaning partnerships, and subscription-based pickup and delivery programs. Each additional revenue stream improves profitability and reduces dependence on any single income source.',
  },
  {
    question: 'How Much Profit Can a Laundromat Make Per Year?',
    answer:
      "Laundromat profitability varies significantly by location, facility size, machine count, and the range of services offered. Industry data consistently shows that the average laundromat delivers a return on investment (ROI) of 20 to 35 percent — well above most retail businesses. Annual gross revenue per location ranges from $15,000 for small, lower-traffic facilities to over $300,000 for high-volume urban laundromats. Net profit margins typically run between 15 and 35 percent after rent, utilities, maintenance, and staffing costs. The most profitable laundromats are located near high-density apartment communities, operate extended hours, and offer value-added services such as wash-and-fold and delivery.",
  },
];

const navItems = [
  { label: 'Choose Your Laundromat Type', id: 'step-1' },
  { label: 'Know the Industry', id: 'step-2' },
  { label: 'Plan Your Business', id: 'step-3' },
  { label: 'Write a Business Plan', id: 'step-4' },
  { label: 'Set Up & Register', id: 'step-5' },
  { label: 'Hire Employees', id: 'step-6' },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function LaundromatBusiness() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openModal = () => {
    setSelectedBusinessType('');
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/5591589/pexels-photo-5591589.jpeg"
              alt="Laundromat Business"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cyan-900/70"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-6xl mx-auto text-center text-white">
            <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-4">
              Laundromat Business Startup Guide
            </p>

            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              How to Start a Profitable Laundromat Business in 6 Easy Steps
            </h1>

            <p className="text-lg md:text-xl text-white mb-10 max-w-6xl mx-auto leading-relaxed">
              The laundromat business is a high-demand, low-maintenance opportunity generating over $5 billion annually in the U.S. Learn how to start a laundromat from scratch with our complete step-by-step guide covering startup costs, business plans, legal registration, LLC formation, equipment setup, and proven strategies to build a successful and profitable coin laundry business.
            </p>

            <button
              onClick={openModal}
              className="px-10 py-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition font-bold text-lg shadow-lg shadow-cyan-900/40 inline-flex items-center gap-2"
            >
              Start Your Laundromat LLC — $0 + State Fee
            </button>
          </div>
        </section>

      {/* Entrepreneurs Banner */}
      <section className="bg-cyan-600 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Trusted by 500+ Small Business Owners Across America
          </h2>
          <p className="text-cyan-100 text-lg">
            Small business ownership is at an all-time high — and we're proud to be one of the nation's fastest-growing business formation services, helping entrepreneurs launch LLCs, corporations, and sole proprietorships in every state.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-gray-50 py-8 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-2xl font-extrabold text-gray-500 uppercase tracking-widest mb-4 text-center">Jump to Any Step</p>
          <ol className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {navItems.map(({ label, id }, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="w-full flex text-base items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-cyan-400 hover:shadow-sm transition cursor-pointer"
                >
                  <span className="text-cyan-600 font-bold">{i + 1}.</span>
                  <span className="text-gray-700">{label}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Step 1 */}
      <section className="py-16 px-6 bg-white" id="step-1">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">Step 1</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Choose the Right Laundromat Business Model for Your Goals
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Not all laundromats are built the same. Before you invest capital, signing leases, or purchasing commercial washers and dryers, identify the business model that best aligns with your budget, risk tolerance, and long-term revenue goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-cyan-50 border border-cyan-100 rounded-2xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Service Laundromat</h3>
              <p className="text-gray-600 leading-relaxed">
                Customers pay per load to use your coin-operated or card-based washers and dryers independently. With minimal staffing requirements, this is one of the lowest-overhead business models in the service industry — ideal for first-time laundromat owners looking to maximize passive income.
              </p>
            </div>

            <div className="p-8 bg-cyan-50 border border-cyan-100 rounded-2xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Service Laundromat</h3>
              <p className="text-gray-600 leading-relaxed">
                Expand beyond self-service with professional wash-and-fold, dry cleaning, stain treatment, and premium garment care services. Trained attendants handle customer laundry, allowing you to charge significantly higher per-pound rates and attract a loyal, convenience-seeking customer base.
              </p>
            </div>

            <div className="p-8 bg-cyan-50 border border-cyan-100 rounded-2xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Laundry Pickup & Delivery Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Customers schedule door-to-door pickup and drop-off through an app or phone — no in-store visit required. This convenience-first model commands premium pricing and is rapidly growing among urban professionals, families, and time-pressed consumers who prioritize convenience over cost.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Stand Out: Differentiate Your Laundromat with a Unique Experience</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              The most profitable laundromats pair great machines with a memorable customer experience. Consider the <strong>World's Largest Laundromat</strong> in Berwyn, Illinois — featuring a children's play area, complimentary coffee and donuts, large-screen TVs, and a live bird aviary. Or take inspiration from <strong>Spin Laundry Lounge</strong> in Portland, which combines eco-friendly commercial laundry with artisan retail and arcade games to drive foot traffic and word-of-mouth referrals.
            </p>
            <p className="text-gray-700">
              A laundromat café, a community event space, a pet wash station, or a comedy night — creative concepts turn a commodity service into a destination, reducing price sensitivity and boosting customer loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="bg-gray-50 py-16 px-6" id="step-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">Step 2</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Understand the Laundromat Industry: Market Size, History & Opportunity
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Informed entrepreneurs make better decisions. Before committing capital, study the laundromat industry's history, market size, and competitive dynamics to identify the strongest opportunity in your target market.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laundromat Industry History & Growth</h3>
              <div className="space-y-6">
                {[
                  { year: '1930s', text: 'The first modern self-service laundromat opened in Fort Worth, Texas, making commercial laundry accessible and affordable to everyday American households for the first time.' },
                  { year: '1950s', text: 'Coin-operated washing machines were introduced in New York City, fueling rapid, nationwide adoption of the self-service laundromat model that still dominates the industry today.' },
                  { year: 'Today', text: 'The U.S. laundromat industry generates approximately $5 billion in annual revenue across roughly 30,000 locations — making it one of the most stable and recession-resistant small business sectors in the country.' },
                ].map(({ year, text }) => (
                  <div key={year} className="flex gap-5">
                    <div className="text-2xl font-extrabold text-cyan-600 min-w-[64px]">{year}</div>
                    <p className="text-gray-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-5">Key Laundromat Market Insights</h4>
              <ul className="space-y-4">
                {[
                  'The vast majority of U.S. laundromats are independently owned and operated — the industry is not dominated by large franchise chains, giving independent owners a competitive edge.',
                  'The highest-performing locations are clustered near apartment renters, college students, and urban communities where in-unit washers and dryers are uncommon or absent.',
                  'A growing secondary market includes homeowners who need commercial-capacity machines for bulky items like comforters, area rugs, and sleeping bags.',
                  'Laundromats are proven recession-resistant businesses — consumer demand for clean laundry is consistent regardless of economic conditions.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-16 px-6 bg-white" id="step-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">Step 3</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Plan Your Laundromat Business: Location, Competition & Brand Strategy
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Thorough pre-launch planning is what separates profitable laundromat owners from those who close within the first two years. Cover these five strategic areas before signing any lease or purchasing any equipment.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <MapPin className="w-7 h-7 text-cyan-600" />,
                title: 'Identify High-Profit Laundromat Locations',
                desc: 'Location is the single most critical factor in laundromat profitability. Target neighborhoods with high renter density, limited nearby competition, and strong foot traffic — particularly apartment complexes, college campuses, and urban corridors where residents lack in-unit laundry access. Run a thorough demographic analysis before committing to any space.',
              },
              {
                icon: <Droplet className="w-7 h-7 text-cyan-600" />,
                title: 'Evaluate Commercial Retail Space Requirements',
                desc: 'Most laundromat operations require a minimum of 1,000 square feet to accommodate commercial washers, dryers, folding tables, waiting areas, and supply vending. Any candidate space must have adequate water supply lines, high-voltage electrical capacity, proper drainage infrastructure, and sufficient HVAC ventilation for heat-generating dryers.',
              },
              {
                icon: <Users className="w-7 h-7 text-cyan-600" />,
                title: 'Conduct a Competitive Analysis of Local Laundromats',
                desc: 'Visit every laundromat operating within a 2-mile radius of your target location. Document ownership, years in business, pricing per wash and dry cycle, number and size of machines, hours of operation, cleanliness, and overall customer experience. This firsthand competitive intelligence is invaluable — and you leave with clean laundry.',
              },
              {
                icon: <Zap className="w-7 h-7 text-cyan-600" />,
                title: 'Define Your Laundromat\'s Unique Value Proposition',
                desc: 'What will make customers choose your laundromat over established competitors? Consider differentiators like 24/7 attendant staffing for safety, premium detergent and softener dispensers, free high-speed Wi-Fi, a mobile payment and loyalty rewards app, large-capacity machines for bulky items, or a family-friendly environment with a children\'s area.',
              },
              {
                icon: <Shield className="w-7 h-7 text-cyan-600" />,
                title: 'Choose a Memorable Laundromat Business Name',
                desc: 'Your business name is the foundation of your brand identity and local SEO strategy. Brainstorm names that are easy to spell, easy to pronounce, and reflect your laundromat\'s personality or location. Before investing in signage, a website, or any marketing materials, run a business name availability search to confirm it\'s not already registered in your state.',
              },
            ].map((item, i) => (
              <div key={i} className={`p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition ${i === 4 ? 'md:col-span-2' : ''}`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="bg-gray-50 py-16 px-6" id="step-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">Step 4</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Write a Laundromat Business Plan: 9 Essential Sections
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            A well-structured laundromat business plan is your operational roadmap, financial guide, and primary tool for securing small business loans or investor funding. Complete your business plan before shopping for equipment or committing to a location.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Executive Summary', desc: 'A concise, compelling overview of your laundromat concept, your mission statement, target market, and the specific market opportunity you are entering.' },
              { title: 'Goals & Objectives', desc: 'Measurable revenue targets, customer satisfaction benchmarks, machine utilization goals, and growth milestones for years one through five of operations.' },
              { title: 'Business Description', desc: 'Your chosen service model (self-service, full-service, or delivery), target customer demographics, facility location rationale, and square footage requirements.' },
              { title: 'Market Analysis', desc: 'A data-driven assessment of local population density, renter percentage, household income levels, and a detailed competitive overview of existing laundromats in your area.' },
              { title: 'Business Structure & Ownership', desc: 'Your legal entity type (LLC, corporation, or sole proprietorship), ownership breakdown, number of employees, and any partnership or management arrangements.' },
              { title: 'Revenue Model & Pricing Strategy', desc: 'A detailed breakdown of how you will generate income — including per-load pricing, wash-and-fold rates, vending margins, and any subscription or delivery service pricing.' },
              { title: 'Marketing & Customer Acquisition Plan', desc: 'Strategies for local SEO, Google Business Profile optimization, social media presence, grand opening promotions, referral programs, and ongoing community outreach.' },
              { title: 'Financial Projections', desc: 'Itemized startup cost estimates, monthly operating expense forecasts, break-even analysis, cash flow projections, and three-year revenue and profitability forecasts.' },
              { title: 'Supporting Appendices', desc: 'Supplementary data including demographic research, equipment vendor quotes, commercial lease terms, insurance estimates, and any local permits or zoning documentation.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section className="py-16 px-6 bg-white" id="step-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">Step 5</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Register Your Laundromat Business: Legal Structures & Startup Costs
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Choosing and registering the right legal structure is a foundational step in launching any laundromat. Your entity type determines your personal liability exposure, how your business is taxed, and how much ongoing administrative work you'll face each year.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Compare Laundromat Business Legal Structures</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Sole Proprietorship</h4>
              <p className="text-gray-600">Requires no formal state registration, but provides zero separation between your personal and business assets. If your laundromat is sued or incurs significant debt, your personal savings, home, and property are at risk. Best suited only for temporary or informal laundry operations.</p>
            </div>

            <div className="p-8 border-2 border-cyan-400 rounded-2xl bg-cyan-50 relative">
              <span className="absolute -top-3 left-6 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">Recommended for Laundromat Owners</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Limited Liability Company (LLC)</h4>
              <p className="text-gray-600 mb-2">The LLC is the most popular legal structure for laundromat businesses and for good reason. It provides a legal firewall between your personal assets and any business debts, lawsuits, or liabilities — while offering pass-through taxation and far fewer ongoing compliance requirements than a corporation.</p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
              <h4 className="text-lg font-bold text-gray-900 mb-2">S Corporation</h4>
              <p className="text-gray-600">May offer meaningful self-employment tax savings for higher-earning laundromat owners, but comes with additional administrative requirements including payroll setup, formal shareholder agreements, and annual reporting obligations. Best evaluated with a CPA once your revenue exceeds $80,000 per year.</p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
              <h4 className="text-lg font-bold text-gray-900 mb-2">C Corporation</h4>
              <p className="text-gray-600">Designed for large, investor-backed, or publicly traded companies. The C-Corp structure brings the highest administrative complexity and double taxation on dividends — rarely appropriate for an independent laundromat operator.</p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-2">How Much Does It Cost to Open a Laundromat?</h3>
            <div className="text-5xl font-extrabold text-cyan-400 mb-3">$200,000 – $500,000</div>
            <p className="text-slate-300 mb-4">
              This investment range reflects the total startup cost to secure a commercial retail space and equip it with professional-grade commercial washers and dryers. Actual costs vary based on your market's lease rates, the number and size of machines you install, renovation requirements, and whether you're building a laundromat from scratch or acquiring an existing operating business.
            </p>
            <p className="text-slate-400 text-sm">
              Buying an existing laundromat with equipment already installed can lower upfront equipment costs — but typically commands a higher purchase price that reflects the location's established customer base and cash flow history. Always perform full financial due diligence, including reviewing at least 2–3 years of profit and loss statements, before committing to any acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Step 6 */}
      <section className="bg-gray-50 py-16 px-6" id="step-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">Step 6</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How to Hire Laundromat Employees and Build Your Team
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Many coin laundry businesses operate with zero full-time staff — but adding on-site attendants and cleaning personnel dramatically improves customer safety, facility cleanliness, and overall customer experience. If you plan to hire, you must obtain an <strong>Employer Identification Number (EIN)</strong> from the IRS before issuing any paychecks or withholding payroll taxes.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-6">Three Proven Ways to Find Qualified Laundromat Staff</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-cyan-600" />,
                title: 'Post a "Now Hiring" Sign On-Site',
                desc: 'A visible hiring sign in your laundromat window is a cost-free way to attract local candidates who already know the neighborhood. Applicants sourced this way tend to live nearby, making scheduling and reliability far easier to manage.',
              },
              {
                icon: <Zap className="w-8 h-8 text-cyan-600" />,
                title: 'List Open Positions on Job Boards',
                desc: 'Online platforms like Indeed, ZipRecruiter, and Craigslist give you access to a large pool of active job seekers quickly. Write a clear, honest job description that outlines expected hours, responsibilities, and starting pay to attract the right candidates.',
              },
              {
                icon: <Users className="w-8 h-8 text-cyan-600" />,
                title: 'Recruit Through Your Personal Network',
                desc: 'Employee referrals from trusted friends, family, and community contacts consistently produce the most reliable hires. People referred by someone you trust arrive with built-in accountability and are more likely to represent your brand with pride.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition">
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Resources */}
      <section className="py-16 px-6 bg-white" id="resources">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Best Online Resources for Laundromat Owners
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Connecting with experienced laundromat owners, industry investors, and equipment experts accelerates your learning curve and helps you avoid costly mistakes. These three communities and platforms are among the most valuable resources available to new and established laundromat operators.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Coin Laundry Association (CLA)</h3>
              <p className="text-gray-600 leading-relaxed">The leading trade organization for U.S. laundromat owners and operators. CLA members gain access to in-depth industry research reports, a searchable equipment manufacturer directory, regional educational events, and an active members-only community forum for peer networking and support.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Laundromat Resource</h3>
              <p className="text-gray-600 leading-relaxed">A comprehensive educational platform designed for both prospective buyers and current laundromat owners. Features free community forums, a popular industry podcast, investment deal analysis calculators, step-by-step how-to guides, and actionable strategies for growing laundromat revenue and profitability.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Laundromat Owners Community (Facebook)</h3>
              <p className="text-gray-600 leading-relaxed">An active, 11,000-member Facebook group where real laundromat owners share firsthand advice, troubleshoot equipment issues, discuss local pricing strategies, and offer candid market insights. One of the most accessible and practical peer communities available to anyone entering the laundromat industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Costs & Revenue */}
      <section className="bg-gray-50 py-16 px-6" id="financials">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Laundromat Startup Costs, Revenue Streams & Profit Potential
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Understanding the real financial picture before you invest is essential to making a sound business decision. Here is an honest, data-backed breakdown of what it costs to operate a laundromat and what you can realistically expect to earn.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Monthly Laundromat Operating Costs</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Monthly commercial lease or mortgage payments',
                  'Utilities — water, electricity, and natural gas (typically 15–30% of revenue)',
                  'Commercial business liability insurance premiums',
                  'Routine facility cleaning and daily upkeep costs',
                  'Commercial washer and dryer maintenance and parts',
                  'Employee wages and payroll taxes (if applicable)',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Laundromat Revenue Streams</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Per-load washer fees — coin, credit card, or mobile app payments',
                  'Per-load commercial dryer fees charged by time',
                  'Vending sales of laundry detergent, fabric softener, and dryer sheets',
                  'Snack and beverage vending machine revenue',
                  'Wash-and-fold drop-off services priced per pound',
                  'Recurring laundry pickup and delivery subscription plans',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-cyan-600 text-white p-8 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">20–35%</div>
              <p className="text-cyan-100">Average annual ROI for U.S. laundromats</p>
            </div>
            <div className="bg-slate-800 text-white p-8 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">$15K–$300K</div>
              <p className="text-slate-300">Annual gross revenue per laundromat location</p>
            </div>
            <div className="bg-green-600 text-white p-8 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">~30,000</div>
              <p className="text-green-100">Active laundromat locations across the U.S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Laundromat Business FAQs: Your Top Questions Answered
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            New to the laundromat industry? These are the most frequently asked questions from aspiring laundromat owners — answered with the detail and accuracy you need to make a confident business decision.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-bold text-gray-900 text-base pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-7 py-5 bg-white border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Open Your Own Laundromat Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            From LLC formation and state registration to business licensing and compliance, we handle the legal paperwork so you can focus on finding the right location and building a thriving laundromat. Join over 1,000,000 entrepreneurs who have trusted us to launch their business the right way.
          </p>
          <button
            onClick={openModal}
            className="px-10 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-50 transition font-bold text-lg shadow-xl"
          >
            Start Your Laundromat LLC Today
          </button>
          <p className="text-cyan-200 text-sm mt-4">$0 formation fee + state filing fee. No hidden charges. No surprises.</p>
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
