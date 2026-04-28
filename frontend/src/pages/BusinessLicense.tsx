import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function BusinessLicense() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('');

const toggleFaq = (index: number) => {
  setOpenFaq(openFaq === index ? null : index);
};

  const faqs = [
    {
      question: "What is a business license and why do I need one?",
      answer: "A business license is a permit issued by government agencies that authorizes you to conduct business within their jurisdiction. You need one to operate legally, avoid fines and penalties, open business bank accounts, and establish credibility with customers and vendors. Operating without proper licenses can result in substantial fines, legal action, and forced closure of your business."
    },
    {
      question: "How much does a business license cost?",
      answer: "Business license costs vary widely depending on your location, business type, and industry. Basic municipal business licenses typically range from $50 to $400 annually. Professional licenses can cost anywhere from $100 to over $1,000. Federal licenses for regulated industries may cost several thousand dollars. Some licenses are one-time fees while others require annual renewal."
    },
    {
      question: "How long does it take to get a business license?",
      answer: "Processing times vary by jurisdiction and license type. Simple municipal business licenses may be issued same-day or within 1-2 weeks. State professional licenses typically take 4-8 weeks. Federal licenses for regulated industries can take 2-6 months or longer. Having all required documentation prepared can significantly speed up the process."
    },
    {
      question: "What's the difference between a business license and a business permit?",
      answer: "A business license is a general authorization to operate a business in a specific jurisdiction, while permits are specific authorizations for particular activities or conditions. For example, you need a business license to operate, but you might also need separate permits for signage, food service, outdoor seating, building modifications, or selling alcohol. Most businesses need both licenses and multiple permits."
    },
    {
      question: "Do I need a business license if I work from home?",
      answer: "Yes, in most cases you still need a business license even for home-based businesses. Requirements vary by city and county. Some jurisdictions have special home occupation permits with different fees and restrictions. Zoning laws may also restrict certain types of businesses in residential areas. Check with your local city or county government for specific home-based business requirements."
    },
    {
      question: "What licenses do I need for an online business?",
      answer: "Online businesses typically need a general business license from their operating location (where you work), sales tax permits for states where you have nexus, and industry-specific licenses if applicable (such as food licenses for selling food products). You may also need licenses in jurisdictions where you have physical presence or employees. Professional services often require licensing regardless of online vs. offline delivery."
    },
    {
      question: "Do I need a federal business license?",
      answer: "Most businesses don't need a federal license. Federal licenses are only required for businesses in specific regulated industries including alcohol, tobacco, firearms, aviation, commercial fishing, broadcasting, transportation of goods or passengers, investment advisory services, and manufacturing of drugs or biologics. The issuing agencies include ATF, FCC, FAA, FDA, and others depending on your industry."
    },
    {
      question: "What happens if I operate without a business license?",
      answer: "Operating without required licenses can result in significant fines (often $500-$5,000 or more per violation), cease and desist orders, forced business closure, inability to enforce contracts, denial of business insurance claims, personal liability for business debts, and even criminal charges in some cases. You may also lose credibility with customers, vendors, and be unable to open business bank accounts."
    },
    {
      question: "How do I know which licenses and permits my business needs?",
      answer: "Required licenses depend on your business type, industry, location, and activities. Start by checking federal requirements for your industry, then state professional licensing boards, state revenue departments for tax permits, and local city/county clerk offices for municipal licenses. Industry-specific requirements may include health department permits, environmental permits, building permits, and zoning approvals. Our research package identifies all requirements specific to your situation."
    },
    {
      question: "Do I need a new business license if I move locations?",
      answer: "Yes, typically you'll need new licenses when relocating. Municipal business licenses are jurisdiction-specific, so moving to a new city or county requires new local licenses. You may also need new zoning approvals, health permits, and building permits. State licenses usually remain valid as long as you update your business address. Plan for 4-8 weeks to obtain all required licenses when relocating."
    },
    {
      question: "How often do I need to renew my business license?",
      answer: "Most business licenses require annual renewal, though some are valid for 2 years or longer. Renewal deadlines vary by jurisdiction. Many require renewal by January 1st or on your business anniversary date. Professional licenses often have biennial (every 2 years) renewal cycles. Always track renewal dates carefully, as late renewals typically incur penalties and operating with an expired license carries the same penalties as operating without one."
    },
    {
      question: "What licenses do I need to sell food products?",
      answer: "Food businesses need multiple licenses: general business license, food service establishment permit from local health department, food handler certifications for employees, sales tax permit, and potentially FDA facility registration for certain products. Restaurants and cafes need additional permits for seating, alcohol service (if applicable), and signage. Cottage food operations have simplified requirements but significant restrictions on what and where you can sell."
    },
    {
      question: "Do I need a license to sell on Amazon, Etsy, or other online marketplaces?",
      answer: "Yes, you typically need a business license to sell on online marketplaces, though requirements vary by location. You'll need a general business license from your city/county, sales tax permits for states where you have nexus, and potentially resale certificates to purchase inventory. Product-specific licenses apply (e.g., cosmetics, food products). Many marketplaces require you to provide business license information before you can sell."
    },
    {
      question: "What's the difference between a business license and an LLC?",
      answer: "An LLC (Limited Liability Company) is a business structure filed with your state that provides liability protection and tax benefits. A business license is permission to operate issued by government agencies. You need both. First, form your LLC with the state (if choosing that structure), then obtain required business licenses and permits. The LLC protects your personal assets, while licenses authorize your business activities."
    },
    {
      question: "Can I get a business license with bad credit or a criminal record?",
      answer: "Credit issues generally don't prevent obtaining a business license, though you may need to pay cash or provide alternative payment. Criminal records may affect certain professional licenses, especially in healthcare, childcare, security, or financial services. Requirements vary by jurisdiction and offense type. Some jurisdictions consider rehabilitation and time since conviction. Honesty on applications is crucial, as false statements can result in permanent denial and potential fraud charges."
    }
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Business License Research Package in USA | The Future Perfect Global</title>
        <meta name="description" content="Get a complete business license research package in the USA with The Future Perfect Global. Identify required federal, state, and local licenses for compliant business operations." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-formation/business-license-research-package" />
        <meta name="keywords" content="business license research USA, US business license requirements, business license compliance USA, federal state local licenses USA, business permit research USA, regulatory compliance services USA" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/business-license-research-package" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/business-license-research-package" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business License Research Package in USA" />
        <meta property="og:description" content="Understand all licensing requirements for your US business. Our business license research package covers federal, state, and local permits." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-formation/business-license-research-package" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business License Research" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="US Business License Research Services by The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Business License Research Package in USA" />
        <meta name="twitter:description" content="Identify required US business licenses with our professional research package covering federal, state, and local compliance." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Business License Research Package in USA",
          "url": "https://us.thefutureperfectglobal.com/business-formation/business-license-research-package",
          "provider": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "description": "Comprehensive business license research services in the USA identifying federal, state, and local license and permit requirements for compliant operations.",
          "areaServed": ["United States","California","Texas","Florida","New York","Delaware","Nevada","Wyoming"],
          "serviceType": ["Business License Research","Regulatory Compliance Analysis","Federal State Local Permit Identification","Business Compliance Consulting"]
        }`}</script>

        {/* Hero animation styles */}
        <style>{`
          @keyframes blFadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes blBadgePop {
            0%   { opacity: 0; transform: scale(0.65) translateY(8px); }
            70%  { transform: scale(1.07) translateY(-2px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes blSlideBtn {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes blFloat {
            0%, 100% { transform: translateY(0) scale(1); }
            50%       { transform: translateY(-16px) scale(1.03); }
          }
          @keyframes blFloatAlt {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50%       { transform: translateY(12px) rotate(3deg); }
          }
          @keyframes blRingSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes blShimmer {
            0%   { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes blPulseGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.35); }
            50%       { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
          }
          @keyframes blCounterUp {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes blTickerScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .bl-badge  { animation: blBadgePop  0.55s cubic-bezier(.34,1.56,.64,1) both 0.1s; }
          .bl-title  { animation: blFadeUp     0.70s ease both 0.28s; }
          .bl-sub    { animation: blFadeUp     0.70s ease both 0.46s; }
          .bl-btn1   { animation: blSlideBtn   0.60s ease both 0.62s; }
          .bl-btn2   { animation: blSlideBtn   0.60s ease both 0.74s; }
          .bl-stats  { animation: blFadeUp     0.70s ease both 0.88s; }

          .bl-orb1   { animation: blFloat    5.5s ease-in-out infinite; }
          .bl-orb2   { animation: blFloatAlt 7s   ease-in-out infinite; }
          .bl-orb3   { animation: blFloat    6s   ease-in-out infinite 1.2s; }
          .bl-ring1  { animation: blRingSpin  20s  linear infinite; }
          .bl-ring2  { animation: blRingSpin  14s  linear infinite reverse; }

          .bl-shimmer-text {
            background: linear-gradient(90deg, #fff 0%, #a5f3fc 40%, #fff 60%, #a5f3fc 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: blShimmer 3.5s linear infinite;
          }

          .bl-pulse-btn { animation: blPulseGlow 2.4s ease-in-out infinite; }

          .bl-stat:nth-child(1) { animation: blCounterUp 0.55s ease both 0.92s; }
          .bl-stat:nth-child(2) { animation: blCounterUp 0.55s ease both 1.06s; }
          .bl-stat:nth-child(3) { animation: blCounterUp 0.55s ease both 1.20s; }

          .bl-ticker-track { animation: blTickerScroll 22s linear infinite; }
        `}</style>
      </Helmet>

      {/* ─── HERO SECTION ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-cyan-800 to-slate-900 py-20 min-h-[620px] flex items-center">

        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business documents"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-cyan-800/70 to-slate-900/90" />
        </div>

        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="bl-orb1 absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="bl-orb2 absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="bl-orb3 absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-300/10 blur-3xl" />

          {/* Spinning rings */}
          <div className="bl-ring1 absolute top-10 right-16 w-52 h-52 rounded-full border border-white/15 border-dashed hidden lg:block" />
          <div className="bl-ring2 absolute bottom-12 left-20 w-32 h-32 rounded-full border border-cyan-300/20 border-dashed hidden lg:block" />

          {/* Floating document icons */}
          <div className="bl-orb1 absolute top-20 right-40 text-4xl opacity-20 hidden lg:block">📋</div>
          <div className="bl-orb2 absolute bottom-24 left-32 text-3xl opacity-15 hidden lg:block">📄</div>
          <div className="bl-orb3 absolute top-1/3 right-20 text-2xl opacity-20 hidden lg:block">🏛️</div>

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)',
              backgroundSize: '38px 38px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center text-white">

            {/* Badge */}
            <div className="bl-badge inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-5 py-2 rounded-full mb-7 font-semibold text-cyan-100 text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse inline-block" />
              Business Licenses &amp; Permits
            </div>

            {/* Title */}
            <h1 className="bl-title text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Simplified Business License &amp;{' '}
              <span className="bl-shimmer-text">Permit Research</span>
            </h1>

            {/* Subtitle */}
            <p className="bl-sub text-xl mb-10 text-cyan-100/90 leading-relaxed max-w-3xl mx-auto">
              Finding the right business licenses can be complicated. We take care of the research
              and identify the permits your business may need, so you can start operating with
              confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="bl-btn1 bl-pulse-btn inline-flex items-center justify-center gap-2 bg-white text-cyan-700 px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl shadow-black/30 transform hover:scale-105"
              >
                Order Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="/Contact"
                className="bl-btn2 inline-flex items-center justify-center border-2 border-white/40 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 hover:border-white/70 transition-all backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { value: '500+', label: 'Businesses Served' },
                { value: '3–4 Wks', label: 'Delivery Time' },
                { value: 'All 50', label: 'States Covered' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bl-stat bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center"
                >
                  <div className="text-2xl font-black text-cyan-200">{stat.value}</div>
                  <div className="text-sm text-cyan-100/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scrolling ticker at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10 py-2 overflow-hidden">
          <div className="bl-ticker-track flex gap-10 whitespace-nowrap text-sm text-cyan-100/70 font-medium">
            {[
              '📋 Federal Licenses', '🏛️ State Permits', '🏙️ Local Licenses',
              '🔍 Compliance Research', '📊 Filing Guidance', '✅ Full Documentation',
              '📋 Federal Licenses', '🏛️ State Permits', '🏙️ Local Licenses',
              '🔍 Compliance Research', '📊 Filing Guidance', '✅ Full Documentation',
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2">{item}<span className="text-white/20">•</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ───────────────────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
            Trusted by{' '}
            <span className="text-cyan-600">500+ Entrepreneurs &amp; Business Owners</span>{' '}
            Worldwide
          </h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">
            <span className="text-cyan-600 font-bold text-lg">Serving Businesses Since 2018</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Bootstrapped &amp; Founder-Led</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Independently Owned Company</span>
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-10">
              What's Included in Your Business License{' '}
              <span className="text-cyan-600">Research Package?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Your customized Business License Research Package will include the licenses and permits
              your business may need, along with application instructions and official forms. The
              complete report is delivered to your email within 3–4 weeks after your company
              formation is completed, helping you stay compliant and ready to operate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {
                img: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400',
                alt: 'Order package',
                step: 1,
                title: 'Step 1: Order Your Business',
                sub: 'License Research Package',
              },
              {
                img: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=400',
                alt: 'Package delivery',
                step: 2,
                title: 'Step 2: Receive Your Package',
                sub: 'Fill Out and File Your Documents',
              },
              {
                img: 'https://img.freepik.com/free-vector/approved-sign-with-shield-gradient_78370-1025.jpg',
                alt: 'Get approved',
                step: 3,
                title: 'Step 3: Get Approved',
                sub: 'Receive Your Licenses and Permits',
              },
            ].map((s, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="mb-6">
                  <div className="bg-cyan-50 rounded-xl p-6 inline-block relative">
                    <img src={s.img} alt={s.alt} className="w-32 h-32 object-cover rounded-lg" />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {s.step}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <h4 className="text-cyan-600 font-bold mb-3">{s.sub}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE HELP ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="bg-white text-gray-900 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">License Management</h3>
                    <span className="text-sm text-gray-600">Track Your Business Licenses</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Application Form', sub: 'License Submission', date: '05/10/2024' },
                      { label: 'Operating Agreement', sub: 'Company Structure', date: '17/09/2024' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-3 h-3 bg-cyan-600 rounded-full" />
                        <div className="flex-1">
                          <div className="font-bold text-sm">{item.label}</div>
                          <div className="text-xs text-gray-600">{item.sub}</div>
                        </div>
                        <div className="text-sm font-bold">{item.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">Your Business License</h4>
                  <h4 className="text-cyan-400 font-bold mb-2">is Fully Authorized</h4>
                  <p className="text-sm text-gray-300">All required documentation has been processed and approved.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                How We Help You Obtain Business Licenses &amp;{' '}
                <span className="text-cyan-600">&amp; Permits</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Comprehensive License & Permit Research',
                    body: <>We analyze the licensing requirements for your business and identify all necessary licenses and permits at the <strong>federal, state, county, and city levels</strong>. This ensures your company understands the compliance requirements before starting operations.</>,
                  },
                  {
                    num: '02',
                    title: 'Customized Business License Package',
                    body: <>Based on your <strong>industry, business activity, and location</strong>, we prepare a personalized Business License Research Package that includes the relevant license and permit application forms required for your business.</>,
                  },
                  {
                    num: '03',
                    title: 'Step-by-Step Filing Instructions',
                    body: <>Your package also includes detailed filing instructions, required supporting documents, application guidelines, and estimated government filing fees—making it easier to complete your <strong>business license and permit registrations</strong> correctly.</>,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY YOU NEED LICENSES ───────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Why You Need{' '}
                <span className="text-cyan-600">Business Licenses</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Operating without proper licenses and permits can result in{' '}
                  <strong className="text-red-600">hefty fines, legal penalties, and even business closure</strong>.
                </p>
                <p>
                  Requirements vary by industry, location, and business type. Most businesses need
                  multiple licenses at different government levels.
                </p>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl p-8 my-8 border-4 border-cyan-300">
                  <div className="text-5xl mb-4">⚠️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Don't Risk It</h3>
                  <p className="text-gray-700">
                    Fines for operating without proper licenses can reach thousands of dollars, and
                    you could be forced to cease operations until compliant.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business licenses"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TYPES OF LICENSES ───────────────────────────────────────────────── */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-16">
            Types of Licenses{' '}
            <span className="text-cyan-600">&amp; Permits</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🇺🇸',
                title: 'Federal Licenses',
                desc: 'Required for businesses in regulated industries like alcohol, firearms, aviation, and commercial fishing',
                examples: ['ATF License', 'FAA Certification', 'FDA Registration', 'FCC License'],
                image: 'https://images.pexels.com/photos/8112180/pexels-photo-8112180.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: '🏛️',
                title: 'State Licenses',
                desc: 'Professional and occupational licenses required by your state for specific industries',
                examples: ['Professional License', 'Sales Tax Permit', 'Employer ID', 'Health Permits'],
                image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: '🏙️',
                title: 'Local Licenses',
                desc: 'City and county permits required to operate at your specific location',
                examples: ['Business License', 'Zoning Permit', 'Signage Permit', 'Fire Dept Permit'],
                image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((type, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <div className="text-6xl mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.desc}</p>
                  <div className="space-y-2">
                    {type.examples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="text-cyan-600">Questions</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Everything you need to know about business licenses and permits
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                  {openFaq === index
                    ? <ChevronUp className="flex-shrink-0 w-6 h-6 text-cyan-600" />
                    : <ChevronDown className="flex-shrink-0 w-6 h-6 text-cyan-600" />
                  }
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t-2 border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-cyan-700 via-cyan-600 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">
            Don't Risk Operating Without{' '}
            <span className="text-cyan-200">Proper Licenses</span>
          </h2>
          <p className="text-2xl mb-10 text-cyan-100">Get your comprehensive research package today</p>
          <button
            onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
            className="inline-block bg-white text-cyan-700 px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl transform hover:scale-105"
          >
            Order Research Package
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