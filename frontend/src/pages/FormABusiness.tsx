import { useEffect, useRef, useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { Star, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';

// ─── Hook defined at module level (outside component) ───────────────────────
function useInView(threshold = 0.15): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── Static data outside component to avoid re-creation on every render ─────
const businessCards = [
  {
    title: 'Nonprofit Corporation Formation',
    subtitle: 'Start a 501(c)(3) Tax-Exempt Organization',
    icon: 'N',
    color: 'from-cyan-400 to-cyan-500',
    badge: null,
  },
  {
    title: 'C Corporation Formation',
    subtitle: 'Best Structure for Startups & Investors',
    icon: 'C',
    color: 'from-cyan-400 to-blue-500',
    badge: 'Most Popular',
  },
  {
    title: 'S Corporation Formation',
    subtitle: 'Save on Self-Employment Taxes',
    icon: 'S',
    color: 'from-gray-600 to-gray-700',
    badge: null,
  },
  {
    title: 'LLC Formation Services',
    subtitle: 'Fast & Affordable Business Registration',
    icon: 'L',
    color: 'from-cyan-500 to-cyan-600',
    badge: null,
  },
];

const businessTypes = [
  {
    title: 'LLC Formation Services',
    subtitle: 'Start an LLC Online – $0 + State Filing Fee',
    description: 'Protect your personal assets and launch your business with affordable LLC registration and expert filing support.',
    link: '/llc',
    icon: 'L',
    color: 'bg-cyan-500',
  },
  {
    title: 'S Corporation (S Corp) Tax Election',
    subtitle: 'Reduce Self-Employment Taxes with IRS Form 2553',
    description: 'Elect S Corp status for your LLC or Corporation and maximize tax savings with proper IRS filing.',
    link: '/s-corporation',
    icon: 'S',
    color: 'bg-gray-700',
  },
  {
    title: 'C Corporation Formation Services',
    subtitle: 'Incorporate a C Corp for Investors & Growth',
    description: 'Register a C Corporation ideal for startups, venture capital funding, and scalable business expansion.',
    link: '/c-corporation',
    icon: 'C',
    color: 'bg-cyan-400',
  },
  {
    title: 'Nonprofit Formation (501(c)(3))',
    subtitle: 'Start a Tax-Exempt Nonprofit Organization',
    description: 'Form a nonprofit corporation and apply for 501(c)(3) tax-exempt status to support your mission.',
    link: '/nonprofit',
    icon: 'N',
    color: 'bg-cyan-400',
  },
];

const whyBizeeReasons = [
  {
    title: 'Start Your LLC for $0 + State Fees',
    description: 'Form your LLC online at no service cost. Pay only the required state filing fee with transparent pricing and no hidden charges.',
  },
  {
    title: 'Fast Online Business Formation',
    description: 'Register your business in minutes with our streamlined LLC and corporation filing process. Quick approvals and hassle-free setup.',
  },
  {
    title: 'Free Registered Agent & Privacy Protection',
    description: 'Protect your personal address with a secure virtual business address and registered agent service included with your formation.',
  },
  {
    title: 'Trusted Business Formation Experts',
    description: 'Thousands of entrepreneurs trust us for LLC formation, EIN filing, and ongoing compliance support across the United States.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Select the Right Business Structure (LLC, S-Corp, C-Corp or Nonprofit)',
    description: 'Compare LLC vs Corporation options with expert guidance. We help you choose the best structure for tax benefits, liability protection, and long-term growth.',
  },
  {
    number: '2',
    title: 'Complete Our Simple Online Business Registration Form',
    description: 'Provide your basic company details through our secure online form. We prepare and review all formation documents, EIN applications, and state filings for accuracy.',
  },
  {
    number: '3',
    title: 'We File Your Business Formation with the State',
    description: 'Our team submits your LLC or corporation formation documents quickly and ensures full state compliance so you can start operating without delays.',
  },
];

const faqs = [
  {
    question: "What services are included when forming a business with The Future Perfect Global?",
    answer: "The Future Perfect Global provides end-to-end US business formation services, including entity selection guidance, state registration, document preparation and filing, registered agent assistance, EIN application support, and compliance guidance. The goal is to make the entire process simple, compliant, and suitable for both US residents and non-residents.",
  },
  {
    question: "Can non-US residents form a business in the United States?",
    answer: "Yes, non-US residents can legally form and own a US business. You do not need a US visa or Social Security Number to register a company. The Future Perfect Global specializes in helping international entrepreneurs set up US businesses remotely with full compliance.",
  },
  {
    question: "Which business structure is best for forming a company in the USA?",
    answer: "The most common options are LLCs and Corporations (C-Corp or S-Corp). LLCs are popular for small to medium businesses due to flexible management and pass-through taxation. C-Corps are preferred by startups seeking venture capital. The right structure depends on taxation, ownership, and growth plans.",
  },
  {
    question: "How long does it take to form a business in the USA?",
    answer: "Business formation timelines depend on the state and entity type. In most cases, an LLC or Corporation can be registered within 3 to 10 business days. Expedited processing may be available in certain states for faster approvals.",
  },
  {
    question: "What documents are required to form a US company?",
    answer: "Generally, you need basic personal details of the owners, a company name, business address, registered agent details, and management structure information. Non-residents typically only need a valid passport copy to start the process.",
  },
  {
    question: "What is a Registered Agent and why is it required?",
    answer: "A Registered Agent is a mandatory requirement for all US businesses. They receive legal notices, government correspondence, and compliance documents on behalf of your company. The agent must have a physical address in the state of incorporation.",
  },
  {
    question: "Can I open a US bank account after forming my company?",
    answer: "Yes, once your business is registered and you have an EIN, you can open a US business bank account. Depending on the bank, this can be done either remotely or by visiting the US. The Future Perfect Global assists with bank account guidance.",
  },
  {
    question: "What is an EIN and why do I need it?",
    answer: "An EIN (Employer Identification Number) is issued by the IRS and is required for tax filing, opening a bank account, hiring employees, and conducting financial transactions. It acts as the tax ID for your US business.",
  },
  {
    question: "Which US state is best for business formation?",
    answer: "Popular states include Delaware, Wyoming, and Florida due to business-friendly laws and tax benefits. However, the best state depends on your business activities, target market, and compliance needs. Expert guidance helps avoid unnecessary costs.",
  },
  {
    question: "Do I need a physical office in the USA to form a business?",
    answer: "No, a physical office is not required to register a US company. Many businesses operate remotely using a registered agent and virtual address services while remaining fully compliant with state laws.",
  },
  {
    question: "What are the ongoing compliance requirements after company formation?",
    answer: "US businesses must meet annual compliance requirements such as state annual reports, franchise taxes (if applicable), and federal tax filings. Failure to comply may result in penalties or loss of good standing.",
  },
  {
    question: "Is forming a US company legal for international eCommerce and online businesses?",
    answer: "Yes, forming a US company is highly beneficial for eCommerce, SaaS, Amazon FBA, and digital businesses. It improves payment gateway access, customer trust, and global credibility.",
  },
  {
    question: "What taxes will my US business need to pay?",
    answer: "Tax obligations depend on the business structure, state of incorporation, and whether you have US-sourced income. LLCs may have pass-through taxation, while C-Corps are subject to corporate tax. Professional tax guidance is recommended.",
  },
  {
    question: "Can I add partners or investors to my US company later?",
    answer: "Yes, ownership structure can be updated after incorporation. LLC operating agreements and corporate bylaws can be amended to add partners, shareholders, or investors as your business grows.",
  },
  {
    question: "Why should I choose The Future Perfect Global for US business formation?",
    answer: "The Future Perfect Global offers expert support, transparent pricing, global client experience, and personalized guidance for US business setup. From formation to compliance, they ensure a smooth and stress-free incorporation process.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function FormABusiness() {
  // ✅ All hooks called at the top, in order, unconditionally
  const [sectionRef, inView] = useInView();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const fadeUp = (delay = 0) => ({
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
  });

  return (
    <div className="bg-white">
      <Helmet>
        <title>Form a Business in USA – Company Registration & Setup Services | The Future Perfect Global</title>
        <meta
          name="description"
          content="Form a business in the USA with The Future Perfect Global. Expert assistance for company registration, LLC and corporation formation, EIN application, compliance, and end-to-end business setup services."
        />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-formation/form-a-business" />
        <meta name="keywords" content="form a business in USA, business formation USA, company registration USA, start a business in USA, LLC or corporation USA, US business setup services, EIN application USA, incorporation services USA" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/form-a-business" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/form-a-business" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Form a Business in USA – Company Registration & Setup" />
        <meta property="og:description" content="Start your business in the USA with expert company formation support. We assist with registration, entity selection, EIN, compliance, and ongoing advisory." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-formation/form-a-business" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Formation" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="USA Business Formation Services by The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Form a Business in USA – Company Registration Services" />
        <meta name="twitter:description" content="Get professional help to form a business in the USA. Company registration, EIN application, compliance, and expert advisory services." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Business Formation in USA",
          "url": "https://us.thefutureperfectglobal.com/business-formation/form-a-business",
          "provider": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "description": "End-to-end business formation services in the USA including company registration, LLC and corporation setup, EIN application, and compliance support.",
          "areaServed": ["United States","Delaware","California","Texas","Florida","New York","Nevada","Wyoming"],
          "serviceType": ["Business Registration USA","LLC & Corporation Formation","EIN Application","Compliance & Annual Filings","Startup & Business Advisory"]
        }`}</script>
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 w-fit">
                <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className={i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'} />
                    ))}
                  </div>
                  <span className="text-sm text-slate-300 ml-1.5 font-medium">4.5/5</span>
                  <span className="text-sm text-slate-500 ml-1">· Trusted by thousands</span>
                </div>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight">
                  Start Your LLC or{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Corporation Today.
                  </span>
                </h1>
                <p className="mt-3 text-xl font-semibold text-slate-400 tracking-tight">
                  Incorporate with Confidence.
                </p>
              </div>

              <p className="text-base text-slate-400 leading-relaxed max-w-lg">
                Form your LLC, S Corporation, C Corporation, or Nonprofit online with expert support.
                Fast registration, EIN filing, state compliance, and transparent pricing —{' '}
                <span className="text-slate-300 font-medium">no hidden fees.</span>
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                {[
                  { icon: <Shield size={14} className="text-cyan-400" />, label: 'No hidden fees' },
                  { icon: <Zap size={14} className="text-cyan-400" />, label: 'Fast filing' },
                  { icon: <Sparkles size={14} className="text-cyan-400" />, label: 'Expert support' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  START YOUR BUSINESS NOW
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="flex items-center justify-center gap-2 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 backdrop-blur-sm">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Right — business type cards */}
            <div className="grid grid-cols-1 gap-3">
              {businessCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:scale-[1.01] hover:shadow-xl hover:shadow-black/30 backdrop-blur-sm"
                  onClick={() => { setSelectedBusinessType(card.title); setIsModalOpen(true); }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-br ${card.color} w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white font-black shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-white">{card.title}</h3>
                        {card.badge && (
                          <span className="text-[10px] font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                            {card.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-200 truncate">
                        {card.subtitle}
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                  </div>
                </div>
              ))}
              <p className="text-center text-xs text-slate-600 pt-1">
                All entity types include registered agent & compliance support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ─────────────────────────────────────────────────────── */}
      <section className="bg-cyan-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            <span className="font-bold">Bootstrapped. Founder Led. Independently Owned</span> Since 2004 With{' '}
            <span className="font-bold text-cyan-600">Over 500 Entrepreneurs Served!</span>
          </p>
        </div>
      </section>

      {/* ── Business types ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Choose the Right Business Entity for{' '}
              <span className="text-cyan-600 block">Growth & Tax Benefits</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {businessTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${type.color} w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-3xl`}>
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">{type.title}</h3>
                {type.subtitle && <p className="text-cyan-600 font-bold mb-3">{type.subtitle}</p>}
                <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>
                <button
                  onClick={() => { setSelectedBusinessType(type.title); setIsModalOpen(true); }}
                  className="text-cyan-600 font-bold hover:text-cyan-700 transition-all"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────────────────────── */}
      {/* ✅ sectionRef typed as RefObject<HTMLElement>, cast needed for <section> */}
      <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative bg-slate-950 py-20 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
         <div className='max-w-4xl mx-auto text-center'>
            <h2
                className="text-white font-black leading-[1.1] mb-2"
                style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontFamily: "'Syne', sans-serif", ...fadeUp(80) }}
              >
                USA LLC & Corp Formation —{" "}
                <span style={{ background: "linear-gradient(90deg,#22d3ee,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Trusted by 500+ Founders
                </span>
              </h2>

              <p className="text-slate-400 text-base leading-relaxed mb-8" style={fadeUp(160)}>
                The Future Perfect Global makes registering your US company simple, fast, and fully compliant — so you can start doing business today.
              </p>
         </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              

              <div className="space-y-5">
                {whyBizeeReasons.map((reason, i) => (
                  <div key={i} className="flex gap-4 group" style={fadeUp(220 + i * 80)}>
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors duration-200"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{reason.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={fadeUp(680)} className="mt-12">
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm overflow-hidden"
                  style={{ background: "linear-gradient(135deg,#06b6d4,#3b82f6)", boxShadow: "0 0 28px rgba(6,182,212,0.3)" }}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg,#0891b2,#2563eb)" }} />
                  <span className="relative">Get Plans & Pricing</span>
                  <span className="relative">→</span>
                </button>
              </div>
            </div>

            {/* Right — image */}
            <div className="relative flex justify-center" style={fadeUp(200)}>
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business owners celebrating company registration"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "420px" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,6,23,0.7) 0%, transparent 60%)" }} />
              </div>

              <div
                className="absolute -top-4 -right-4 lg:-right-8 rounded-2xl p-4 border border-white/10 shadow-2xl"
                style={{ background: "rgba(15,23,42,0.95)", backdropFilter: "blur(12px)", minWidth: "170px", animation: "floatCard 5s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-sm" style={{ background: "linear-gradient(135deg,#06b6d4,#3b82f6)" }}>✓</span>
                  <span className="text-white text-xs font-bold">Formation Done</span>
                </div>
                <div className="text-xs px-2 py-1 rounded-lg text-cyan-400 font-semibold" style={{ background: "rgba(6,182,212,0.1)" }}>
                  LLC Filed · California
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 lg:-left-8 rounded-2xl p-4 border border-white/10 shadow-2xl"
                style={{ background: "rgba(15,23,42,0.95)", backdropFilter: "blur(12px)", minWidth: "155px", animation: "floatCard 6s ease-in-out infinite reverse" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>$</span>
                  <span className="text-white text-xs font-bold">EIN Received</span>
                </div>
                <p className="text-slate-500 text-xs">Ready for business</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          
          @keyframes floatCard {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* ── 3 Steps ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               
               <div className="text-center mb-16">
                  <h2 className="text-5xl font-black text-gray-900 mb-4">
                  Register Your Business in the USA in <span className='block text-cyan-600'>3 Simple Steps</span>
                  </h2>
               </div>

               {/* 3 Column Steps */}
               <div className="grid md:grid-cols-3 gap-10">
                  {steps.map((step, index) => (
                  <div 
                     key={index} 
                     className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
                  >
                     <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
                        {step.number}
                     </div>

                     <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                     </h3>

                     <p className="text-gray-700 leading-relaxed">
                        {step.description}
                     </p>
                  </div>
                  ))}
               </div>

               {/* CTA Button */}
               <div className="text-center mt-12">
                  <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="bg-cyan-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all"
                  >
                  START MY BUSINESS
                  </button>
               </div>

            </div>
            </section>

      {/* ── Compare CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            LLC vs S Corp vs C Corp vs Nonprofit — <span className='text-cyan-600'>Compare Tax Benefits</span>
            </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choosing your business structure is a big deal, but it doesn't have to be a big mystery. We're here to make it clear, founder-focused, and forward-moving.
          </p>
          <a
            href="/business-formation/business-entity-comparison"
            className="bg-cyan-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all"
          >
            COMPARE BUSINESS TYPES
          </a>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">Got Questions?<span className='block text-cyan-600'>We've Got Answers.</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                  <span className="text-cyan-500 text-2xl flex-shrink-0">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-black mb-6 text-white leading-tight">Ready To Go From Idea To Launch?</h2>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed">We don't just help you build what's next. Let's make it official.</p>
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="bg-cyan-500 text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-cyan-600 transition-all"
            >
              START NOW
            </button>
          </div>
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