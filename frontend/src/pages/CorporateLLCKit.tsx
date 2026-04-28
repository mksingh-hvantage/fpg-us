import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { CheckCircle, Shield, FileText, Package, Clock, Truck, Award, Users, BookOpen, BadgeCheck } from 'lucide-react';
import GetStartedModal from '../components/GetStartedModal';

/* ── Helper: colour last two words of any heading ── */
function ColoredHeading({ text, className = '' }: { text: string; className?: string }) {
  const words = text.trim().split(' ');
  const plain = words.slice(0, -2).join(' ');
  const colored = words.slice(-2).join(' ');
  return (
    <span className={className}>
      {plain}{plain ? ' ' : ''}
      <span className="text-cyan-600">{colored}</span>
    </span>
  );
}

export default function CorporateLLCKit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; size: number; dur: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: i * 0.25,
        size: Math.random() * 8 + 4,
        dur: 3 + (i % 5),
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.5) rotate(-8deg); }
          70%  { transform: scale(1.1) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0) scale(1);     opacity: 0.4; }
          50%       { transform: translateY(-22px) scale(1.2); opacity: 0.8; }
        }
        @keyframes shimmerKit {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.55); }
          50%       { box-shadow: 0 0 0 14px rgba(255,255,255,0); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes rotateSlowRev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .kit-badge   { animation: badgePop 0.7s cubic-bezier(.34,1.56,.64,1) both; animation-delay: 0.1s; }
        .kit-icon    { animation: badgePop 0.7s cubic-bezier(.34,1.56,.64,1) both; animation-delay: 0.05s; }
        .kit-h1      { animation: fadeUp 0.85s ease both; animation-delay: 0.3s; }
        .kit-sub     { animation: fadeUp 0.85s ease both; animation-delay: 0.5s; }
        .kit-btns    { animation: fadeUp 0.85s ease both; animation-delay: 0.7s; }
        .kit-badges  { animation: fadeUp 0.85s ease both; animation-delay: 0.9s; }
        .kit-stats   { animation: fadeUp 0.85s ease both; animation-delay: 1.05s; }

        .shimmer-kit {
          background: linear-gradient(90deg, #fff 25%, #a5f3fc 50%, #fff 75%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerKit 3.5s linear infinite;
          animation-delay: 1.5s;
        }
        .btn-pulse { animation: pulseBorder 2.2s ease-in-out infinite; animation-delay: 2s; }
        .ring-cw  { animation: rotateSlow 20s linear infinite; }
        .ring-ccw { animation: rotateSlowRev 28s linear infinite; }
      `}</style>

      <div className="bg-white">
        <Helmet>
          <title>Corporate LLC Kit $99 | Business Records & Compliance Kit USA</title>
          <meta name="description" content="Professional Corporate LLC Kit for $99 with free shipping. Includes custom binder, stock certificates, company seal, meeting minutes templates, and compliance documents for LLCs and Corporations." />
          <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit" />
          <meta name="keywords" content="corporate LLC kit, LLC kit $99, business records kit, corporate compliance kit, company seal, stock certificates, LLC documents, corporate binder, business formation kit, LLC operating agreement, corporate records book" />
          <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit" hrefLang="en-us" />
          <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit" hrefLang="x-default" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="product" />
          <meta property="og:title" content="Corporate LLC Kit $99 | Business Compliance Package USA" />
          <meta property="og:description" content="Complete Corporate LLC Kit with custom binder, certificates, seal, and compliance documents. Professional business organization for just $99." />
          <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit" />
          <meta property="og:site_name" content="The Future Perfect Global – USA Business Formation" />
          <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@FPGCompanySetup" />
          <meta name="twitter:title" content="Corporate LLC Kit $99 | Business Records Package" />
          <meta name="twitter:description" content="Professional Corporate LLC Kit for LLCs and Corporations. Custom binder, certificates, seal, and compliance documents." />
          <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Corporate LLC Kit",
            "description": "Professional business records kit including custom binder, stock certificates, company seal, transfer ledger, and organizational tools for LLCs and Corporations.",
            "brand": { "@type": "Organization", "name": "The Future Perfect Global" },
            "offers": {
              "@type": "Offer",
              "url": "https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit",
              "priceCurrency": "USD", "price": "99.00", "priceValidUntil": "2027-12-31",
              "availability": "https://schema.org/InStock",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
                "deliveryTime": { "@type": "ShippingDeliveryTime", "businessDays": { "@type": "OpeningHoursSpecification", "minValue": 3, "maxValue": 4 } }
              }
            },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1247" }
          }`}</script>
        </Helmet>

        {/* ═══════════════════════════════════════════
            HERO SECTION — animated redesign
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 min-h-[640px] flex items-center text-white">

          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80"
              alt="Corporate documents"
              className="w-full h-full object-cover opacity-15"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-cyan-500 to-slate-600" style={{ opacity: 0.88 }} />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
            {/* Centre glow */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,255,255,0.12) 0%, transparent 70%)' }} />
          </div>

          {/* Floating particles */}
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                animation: `floatUp ${p.dur}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          {/* Spinning dashed rings — top-right */}
          <div className="absolute right-[-130px] top-[-130px] w-[520px] h-[520px] pointer-events-none">
            <svg viewBox="0 0 520 520" className="w-full h-full ring-cw opacity-20">
              <circle cx="260" cy="260" r="250" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="20 12" />
            </svg>
          </div>
          <div className="absolute right-[-60px] top-[-60px] w-[360px] h-[360px] pointer-events-none">
            <svg viewBox="0 0 360 360" className="w-full h-full ring-ccw opacity-15">
              <circle cx="180" cy="180" r="172" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 16" />
            </svg>
          </div>
          {/* Bottom-left arc */}
          <div className="absolute left-[-100px] bottom-[-100px] w-[420px] h-[420px] pointer-events-none">
            <svg viewBox="0 0 420 420" className="w-full h-full ring-cw opacity-10">
              <circle cx="210" cy="210" r="200" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="14 14" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">

              {/* Animated icon */}
              <div className="kit-icon inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl mb-5 shadow-xl">
                <Package className="w-10 h-10 text-white" />
              </div>

              {/* Badge */}
              <div className="kit-badge flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full font-semibold text-sm tracking-widest shadow-lg uppercase">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Business Compliance Kit
                </span>
              </div>

              {/* Headline */}
              <h1 className="kit-h1 text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight drop-shadow-2xl">
                Professional{' '}
                <span className="shimmer-kit">Corporate LLC Kit</span>
              </h1>

              {/* Sub */}
              <p className="kit-sub text-lg sm:text-xl mb-10 text-cyan-50 leading-relaxed max-w-3xl mx-auto">
                Complete business documentation package with custom binder,
                certificates, seal, and compliance records — delivered to your door.
              </p>

              {/* CTA buttons */}
              <div className="kit-btns flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="btn-pulse relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-cyan-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-cyan-50 transition-all transform hover:scale-105 group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="relative z-10">Order Your Kit Now</span>
                </button>
                <a
                  href="#whats-included"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  See What's Included
                </a>
              </div>

              {/* Feature pills */}
              <div className="kit-badges flex justify-center gap-5 flex-wrap mb-12">
                {[
                  { icon: <Truck className="w-5 h-5" />, label: 'Free FedEx Shipping' },
                  { icon: <Clock className="w-5 h-5" />, label: '3-4 Day Delivery' },
                  { icon: <BadgeCheck className="w-5 h-5" />, label: '100% Customized' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full text-sm font-semibold text-white shadow">
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Stat cards */}
              <div className="kit-stats grid grid-cols-3 gap-4 max-w-xl mx-auto">
                {[
                  { value: '$99', label: 'One-Time Fee' },
                  { value: '1,247+', label: 'Kits Delivered' },
                  { value: '4.8★', label: 'Customer Rating' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-4 hover:bg-white/20 transition-all"
                    style={{ animation: `fadeUp 0.7s ease both`, animationDelay: `${1.1 + i * 0.12}s` }}
                  >
                    <div className="text-xl font-black text-white">{s.value}</div>
                    <div className="text-xs text-cyan-100 mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BUSINESS RECORDS INTRO
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                <ColoredHeading text="Maintain Accurate Business Records for Legal Compliance" />
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Proper business record keeping is essential for every company. Maintaining accurate business records, legal documents, and financial documentation helps ensure regulatory compliance, protects your business, and supports long-term growth and credibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📄</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Ownership Requires Proper Documentation</h3>
                    <p className="text-gray-600 leading-relaxed">Starting and managing a business involves a large amount of paperwork and business documentation. From business formation documents to ownership records, entrepreneurs must maintain accurate and organized business records to meet legal and regulatory compliance requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚖️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Organized with an LLC Corporate Kit</h3>
                    <p className="text-gray-600 leading-relaxed">Essential corporate records include formation paperwork, shareholder or member details, meeting minutes, company resolutions, licenses, and other important legal documents. A professional LLC corporate kit helps keep all your business records secure, organized, and easily accessible—reducing the risk of compliance issues, legal disputes, or financial penalties.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional business meeting with corporate documents and LLC compliance records"
                  className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            KEY BENEFITS
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black mb-6 text-center">
              <ColoredHeading text="Key Benefits of Professional Record Keeping" className="text-white" />
            </h2>
            <p className="text-center text-gray-300 mb-16 text-xl max-w-3xl mx-auto">
              How a corporate LLC kit supports your business success and compliance
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { color: 'bg-cyan-500', Icon: Shield, title: 'Safeguard Liability Protection', desc: 'Demonstrate to courts and creditors that your business operates as a separate legal entity. Organized records are critical evidence if your liability protection is ever challenged.' },
                { color: 'bg-blue-500', Icon: FileText, title: 'Meet State Requirements', desc: 'Many states require LLCs and corporations to maintain records of ownership, meetings, and major business decisions. Stay compliant and avoid penalties with proper documentation.' },
                { color: 'bg-green-500', Icon: Users, title: 'Streamline Banking & Lending', desc: 'Banks require corporate documentation to open business accounts and approve loans. Having everything organized in one kit makes the process faster and smoother.' },
                { color: 'bg-cyan-500', Icon: Award, title: 'Prevent Ownership Disputes', desc: 'Clear documentation of stock issuances, transfers, and ownership percentages helps prevent costly disputes between partners, members, or shareholders.' },
                { color: 'bg-blue-500', Icon: CheckCircle, title: 'Simplify Annual Compliance', desc: 'Templates and organization tools make it easy to document annual meetings, record resolutions, and maintain the ongoing compliance requirements of your business entity.' },
                { color: 'bg-green-500', Icon: Package, title: 'Professional Business Image', desc: 'A polished corporate kit with custom embossing conveys professionalism and attention to detail when meeting with investors, lenders, or business partners.' },
              ].map(({ color, Icon, title, desc }, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3">{title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW TO ORDER
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-gray-900 mb-6 text-center">
              <ColoredHeading text="How to Order Your Corporate LLC Kit" />
            </h2>
            <p className="text-center text-gray-600 mb-16 text-xl max-w-3xl mx-auto">
              Three simple steps to receive your customized business documentation package
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {[
                { grad: 'from-cyan-500 to-red-500', n: '1', title: 'Select Business Details', desc: 'Choose your entity type (LLC, Corporation, S-Corp, C-Corp), state of formation, and provide your company information through our simple online form.' },
                { grad: 'from-blue-500 to-cyan-500', n: '2', title: 'Complete Secure Checkout', desc: 'Pay the one-time $99 fee through our secure payment system. No hidden charges, no recurring fees, no surprises. What you see is what you pay.' },
                { grad: 'from-green-500 to-emerald-500', n: '3', title: 'Receive Your Custom Kit', desc: 'Your personalized corporate kit ships next business day via complimentary FedEx Ground. Arrives at your door in 3-4 business days, ready to use.' },
              ].map(({ grad, n, title, desc }) => (
                <div key={n} className="text-center">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${grad} text-white rounded-3xl text-4xl font-black mb-6 shadow-xl`}>{n}</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="inline-flex items-center justify-center bg-cyan-600 text-white px-12 py-4 rounded-full font-bold text-2xl shadow-2xl hover:bg-cyan-700 transition-all transform hover:scale-105"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHAT'S INCLUDED
        ═══════════════════════════════════════════ */}
        <section id="whats-included" className="py-20 bg-cyan-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">
              <ColoredHeading text="Complete Corporate Kit Package" />
            </h2>
            <p className="text-center text-gray-600 mb-6 text-xl max-w-3xl mx-auto">
              Everything your business needs to maintain professional records and stay compliant
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { grad: 'from-cyan-500 to-red-500', border: 'border-cyan-200 hover:border-cyan-400', Icon: BookOpen, title: 'Custom Embossed Binder', desc: 'Premium 3-ring binder personalized with your company name stamped in gold foil on the spine. Professional presentation for your office or important meetings.' },
                { grad: 'from-blue-500 to-cyan-500', border: 'border-blue-200 hover:border-blue-400', Icon: FileText, title: '20 Ownership Certificates', desc: 'Pre-printed stock certificates for corporations or membership certificates for LLCs. Includes your company name and ready to issue to shareholders or members.' },
                { grad: 'from-green-500 to-emerald-500', border: 'border-green-200 hover:border-green-400', Icon: BadgeCheck, title: 'Custom Metal Embosser', desc: 'Professional company seal embosser customized with your exact company name, state of formation, and incorporation date. Essential for authenticating official documents.' },
                { grad: 'from-cyan-500 to-red-500', border: 'border-cyan-200 hover:border-cyan-400', Icon: FileText, title: 'Meeting Minutes Templates', desc: 'Pre-formatted forms for recording annual shareholder meetings, board resolutions, and corporate decisions. Simplifies compliance documentation throughout your business lifecycle.' },
                { grad: 'from-blue-500 to-cyan-500', border: 'border-blue-200 hover:border-blue-400', Icon: BookOpen, title: 'Stock Transfer Ledger', desc: 'Official record-keeping system for tracking stock issuances, purchases, transfers, and sales. Maintains accurate ownership history for audit and compliance purposes.' },
                { grad: 'from-green-500 to-emerald-500', border: 'border-green-200 hover:border-green-400', Icon: Package, title: 'Organizational Sections', desc: 'Color-coded tabbed dividers for Articles of Incorporation, Bylaws, Operating Agreement, EIN documentation, business licenses, contracts, and annual reports.' },
              ].map(({ grad, border, Icon, title, desc }, i) => (
                <div key={i} className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${border} transition-all hover:shadow-2xl`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${grad} rounded-2xl flex items-center justify-center mb-5`}>
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            DELIVERY
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                <ColoredHeading text="Fast, Reliable Delivery" />
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your customized corporate kit ships next business day via FedEx Ground
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { bg: 'bg-cyan-100', ic: 'text-cyan-600', Icon: Package, title: 'Custom Production', desc: 'Your corporate kit is personalized with your company name, entity type, and formation details before shipping.' },
                { bg: 'bg-blue-100', ic: 'text-blue-600', Icon: Truck, title: 'Free FedEx Shipping', desc: 'Complimentary FedEx Ground shipping to all continental US addresses. Ships next business day after your order is processed.' },
                { bg: 'bg-green-100', ic: 'text-green-600', Icon: Clock, title: '3-4 Day Arrival', desc: 'Most customers receive their complete corporate kit within 3-4 business days from order placement to doorstep delivery.' },
              ].map(({ bg, ic, Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-3xl p-8 text-center shadow-lg">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${bg} rounded-full mb-5`}>
                    <Icon className={`w-8 h-8 ${ic}`} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ENTITY TYPES
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-cyan-100/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-gray-900 mb-6 text-center">
              <ColoredHeading text="Perfect For All Business Entity Types" />
            </h2>
            <p className="text-center text-gray-600 mb-14 text-xl max-w-3xl mx-auto">
              Our corporate kits are customized for your specific business structure
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏢', title: 'LLC Kit', desc: 'Complete kit for Limited Liability Companies with member certificates and operating agreement sections' },
                { icon: '🏛️', title: 'Corporation Kit', desc: 'Professional kit for C-Corporations with stock certificates, bylaws, and board meeting templates' },
                { icon: '📊', title: 'S-Corp Kit', desc: 'Specialized kit for S-Corporations including shareholder documentation and election records' },
                { icon: '⚖️', title: 'Non-Profit Kit', desc: 'Tailored kit for 501(c)(3) organizations with board member documentation and nonprofit governance forms' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-cyan-400 transition-all text-center">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-gray-900 mb-6 text-center">
              <ColoredHeading text="Frequently Asked Questions About Corporate LLC Kits" />
            </h2>
            <p className="text-center text-gray-600 mb-14 text-xl max-w-3xl mx-auto">
              Everything you need to know about ordering, using, and maintaining your corporate documentation kit
            </p>
            <div className="space-y-4">
              {[
                { q: 'What is a Corporate LLC Kit and why do I need one?', a: 'A Corporate LLC Kit is a professional organizational system that contains all essential business documents, records, and supplies your company needs. It includes a custom binder, ownership certificates, company seal, transfer ledger, and templates for meeting minutes. While not legally required in all states, maintaining organized corporate records is critical for preserving liability protection, meeting banking requirements, and demonstrating compliance to authorities.' },
                { q: 'How much does a Corporate LLC Kit cost?', a: 'Our complete Corporate LLC Kit is available for a one-time fee of $99 with FREE FedEx Ground shipping included. There are no hidden fees, no recurring charges, and no additional costs. You receive everything listed in the package for one transparent price.' },
                { q: 'What exactly is included in the $99 kit?', a: 'Your kit includes: (1) Custom 3-ring binder with gold foil company name, (2) 20 personalized stock/membership certificates, (3) Metal embosser with company details, (4) Stock transfer ledger, (5) Meeting minutes templates, (6) Color-coded tabbed dividers for organizing formation documents, bylaws, licenses, and more, (7) Complimentary FedEx Ground shipping.' },
                { q: 'How long does delivery take?', a: 'Your corporate kit ships next business day after order processing via FedEx Ground. Most continental US addresses receive delivery within 3-4 business days. Rush shipping options may be available upon request for urgent needs.' },
                { q: 'Is the kit customized with my company information?', a: 'Yes, completely personalized. Your company name is embossed in gold foil on the binder spine. The metal embosser is engraved with your company name, state of formation, and incorporation date. Stock certificates are pre-printed with your company name.' },
                { q: 'Can I use this kit for both LLCs and Corporations?', a: 'Absolutely. We customize the kit based on your entity type. LLCs receive membership certificates and LLC-specific documents. Corporations receive stock certificates and corporate governance forms. S-Corps and C-Corps are both supported with appropriate documentation.' },
                { q: 'Do I need a corporate kit if I just formed my business?', a: 'Yes, especially for new businesses. Starting with organized records from day one prevents compliance issues later. Many banks require these documents to open business accounts, and having them ready accelerates your business setup process.' },
                { q: 'What is a company seal and is it required?', a: 'A company seal is a metal embosser that creates a raised impression on documents to authenticate them as official company records. While not legally required in most states anymore, many banks, title companies, and legal institutions still expect to see sealed documents. It adds legitimacy and professionalism to your business paperwork.' },
                { q: 'Will this kit help me open a business bank account?', a: 'Yes, significantly. Banks typically require your Articles of Incorporation/Organization, EIN letter, ownership documentation, and often a corporate resolution authorizing account opening. A corporate kit provides organized storage for all these documents and includes resolution templates you can use.' },
                { q: 'Can I order a kit for an existing business?', a: "Definitely. Corporate kits are valuable for existing businesses that need to organize historical records, issue new certificates to members/shareholders, or establish better documentation practices. It's never too late to improve your corporate record-keeping." },
                { q: 'What if my company information changes?', a: 'The 3-ring binder design allows you to easily add, remove, or update documents as your business evolves. You can add new certificates, meeting minutes, amendments, or other documents over time. The organizational structure accommodates growth and changes.' },
                { q: 'Does the kit include operating agreement or bylaws?', a: 'The kit includes organized sections and tabbed dividers where you can store your operating agreement (LLC) or bylaws (Corporation). If you need these documents drafted, we offer separate legal document preparation services that can be combined with your kit order.' },
                { q: 'How many stock certificates do I get?', a: 'Each kit includes 20 pre-printed stock certificates (for corporations) or membership certificates (for LLCs). This is sufficient for most small to medium-sized businesses. Additional certificates can be ordered separately if needed for larger ownership structures.' },
                { q: 'Is there a satisfaction guarantee?', a: "Yes, we stand behind the quality of our corporate kits. If you're not satisfied with your kit for any reason, contact our customer support team and we'll work to make it right. Our goal is to provide professional-grade business documentation tools that serve your company for years." },
                { q: 'Do I need this if I have a single-member LLC?', a: "Yes, even single-member LLCs benefit from organized corporate records. Maintaining proper documentation helps preserve your liability protection by demonstrating that you treat your LLC as a separate entity. It's also essential when seeking business financing or adding members in the future." },
                { q: 'What states do you serve?', a: 'We provide corporate LLC kits for businesses formed in all 50 states, including popular formation states like Delaware, Wyoming, Nevada, California, Texas, Florida, and New York. Your kit is customized with your specific state information.' },
                { q: 'Can I track my shipment?', a: 'Yes, you will receive a FedEx tracking number via email once your kit ships. You can monitor the delivery progress and know exactly when your corporate kit will arrive at your business or home address.' },
                { q: 'What if I need help setting up my kit?', a: "Our customer support team is available Monday through Friday, 9 AM to 6 PM CST to answer questions about organizing your kit, using the templates, or maintaining your corporate records. We're here to help ensure you get maximum value from your investment." },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-2xl shadow-md border-2 border-gray-200 open:border-cyan-500 open:bg-white transition-all"
                >
                  <summary className="flex justify-between items-center cursor-pointer px-8 py-6 font-bold text-gray-900 text-lg hover:text-cyan-600 transition-colors">
                    {faq.q}
                    <span className="text-3xl text-cyan-600 group-open:rotate-45 transition-transform font-light">+</span>
                  </summary>
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed text-lg">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-br from-cyan-500 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-black mb-6">
              <ColoredHeading text="Ready to Organize Your Business Records?" className="text-white" />
            </h2>
            <p className="text-xl text-cyan-50 mb-10 leading-relaxed">
              Get your complete Corporate LLC Kit delivered in 3-4 business days with free shipping. Professional documentation starts here.
            </p>
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="inline-flex items-center justify-center bg-white text-cyan-600 px-12 py-4 rounded-full font-bold text-2xl shadow-2xl hover:bg-cyan-50 transition-all transform hover:scale-105 mb-6"
            >
              Enquire Now
            </button>
            <div className="flex justify-center gap-8 flex-wrap text-cyan-50 text-sm">
              {['Free Shipping', '3-4 Day Delivery', 'Fully Customized', 'No Hidden Fees'].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GetStartedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedBusinessType={selectedBusinessType}
        />
      </div>
    </>
  );
}