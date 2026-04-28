import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

// Helper: color last two words of a heading cyan

export default function DBA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('');
  const [, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <Helmet>
        {/* Primary SEO */}
        <title>
          DBA Registration in USA – Doing Business As Name Filing | The Future Perfect Global
        </title>
        <meta
          name="description"
          content="Register a DBA (Doing Business As) in the USA with The Future Perfect Global. Expert support for fictitious business name filing, compliance, and brand protection."
        />
        {/* Canonical */}
        <link
          rel="canonical"
          href="https://us.thefutureperfectglobal.com/business-formation/dba"
        />
        {/* Keywords */}
        <meta
          name="keywords"
          content="DBA registration USA, doing business as name USA, fictitious business name filing USA, register DBA in USA, DBA filing service USA, trade name registration USA, business name registration USA"
        />
        {/* Hreflang */}
        <link
          rel="alternate"
          href="https://us.thefutureperfectglobal.com/business-formation/dba"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://us.thefutureperfectglobal.com/business-formation/dba"
          hrefLang="x-default"
        />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DBA Registration in USA – Doing Business As Name Filing"
        />
        <meta
          property="og:description"
          content="File your DBA (Doing Business As) name in the USA with professional assistance. Fictitious business name registration, compliance, and support available."
        />
        <meta
          property="og:url"
          content="https://us.thefutureperfectglobal.com/business-formation/dba"
        />
        <meta
          property="og:site_name"
          content="The Future Perfect Global – USA DBA Registration Services"
        />
        <meta
          property="og:image"
          content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        />
        <meta
          property="og:image:alt"
          content="DBA Registration Services in USA by The Future Perfect Global"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta
          name="twitter:title"
          content="DBA Registration in USA – Doing Business As Filing"
        />
        <meta
          name="twitter:description"
          content="Register your DBA or fictitious business name in the USA with expert support. Compliance, filing, and brand protection services available."
        />
        <meta
          name="twitter:image"
          content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "DBA Registration in USA",
            "url": "https://us.thefutureperfectglobal.com/business-formation/dba",
            "provider": {
              "@type": "Organization",
              "name": "The Future Perfect Global",
              "url": "https://us.thefutureperfectglobal.com/",
              "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
            },
            "description": "Professional DBA (Doing Business As) and fictitious business name registration services in the USA including filing, compliance, and brand support.",
            "areaServed": [
              "United States","California","Texas","Florida","New York","Delaware","Nevada","Wyoming"
            ],
            "serviceType": [
              "DBA Registration","Fictitious Business Name Filing","Trade Name Registration","Business Compliance Support","Brand Protection Services"
            ]
          }`}
        </script>

        {/* Hero animation keyframes */}
        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(36px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroBadgePop {
            0%   { opacity: 0; transform: scale(0.7) translateY(10px); }
            70%  { transform: scale(1.08) translateY(-2px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes heroButtonSlide {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatOrb {
            0%, 100% { transform: translateY(0px) scale(1); }
            50%       { transform: translateY(-18px) scale(1.04); }
          }
          @keyframes floatOrbAlt {
            0%, 100% { transform: translateY(0px) scale(1); }
            50%       { transform: translateY(14px) scale(0.97); }
          }
          @keyframes rotateSlow {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes shimmer {
            0%   { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes counterUp {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseBorder {
            0%, 100% { box-shadow: 0 0 0 0 rgba(6,182,212,0.4); }
            50%       { box-shadow: 0 0 0 10px rgba(6,182,212,0); }
          }

          .hero-badge   { animation: heroBadgePop  0.55s cubic-bezier(.34,1.56,.64,1) both; animation-delay: 0.1s; }
          .hero-title   { animation: heroFadeUp     0.7s ease both; animation-delay: 0.28s; }
          .hero-sub     { animation: heroFadeUp     0.7s ease both; animation-delay: 0.48s; }
          .hero-btn-1   { animation: heroButtonSlide 0.6s ease both; animation-delay: 0.62s; }
          .hero-btn-2   { animation: heroButtonSlide 0.6s ease both; animation-delay: 0.74s; }
          .hero-stats   { animation: heroFadeUp     0.7s ease both; animation-delay: 0.88s; }

          .orb-1 { animation: floatOrb    5s ease-in-out infinite; }
          .orb-2 { animation: floatOrbAlt 6.5s ease-in-out infinite; }
          .orb-3 { animation: floatOrb    7s ease-in-out infinite 1s; }
          .ring-spin { animation: rotateSlow 18s linear infinite; }

          .shimmer-text {
            background: linear-gradient(90deg, #fff 0%, #67e8f9 40%, #fff 60%, #67e8f9 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3.5s linear infinite;
          }

          .stat-card { animation: counterUp 0.6s ease both; }
          .stat-card:nth-child(1) { animation-delay: 0.9s; }
          .stat-card:nth-child(2) { animation-delay: 1.05s; }
          .stat-card:nth-child(3) { animation-delay: 1.2s; }

          .pulse-btn { animation: pulseBorder 2.2s ease-in-out infinite; }
        `}</style>
      </Helmet>

      {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-10 min-h-[600px] flex items-center">

        {/* Decorative background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-1 absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="orb-2 absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-slate-400/15 blur-3xl" />
          <div className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-3xl" />

          {/* Rotating ring */}
          <div className="ring-spin absolute top-8 right-12 w-48 h-48 rounded-full border border-cyan-400/20 border-dashed hidden lg:block" />
          <div className="ring-spin absolute bottom-10 left-16 w-28 h-28 rounded-full border border-slate-300/20 border-dashed hidden lg:block" style={{animationDirection:'reverse', animationDuration:'12s'}} />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center text-white">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 px-5 py-2 rounded-full mb-7 font-semibold text-cyan-200 text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
              📝 Business Naming &amp; Registration
            </div>

            {/* Title */}
            <h1 className="hero-title text-5xl font-black mb-6 leading-base">
              Register a{' '}
              <span className="shimmer-text">DBA (Doing Business As)</span>
              <br />
              <span className="text-white/90">for Your Business</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-sub text-xl mb-10 text-slate-300 leading-relaxed max-w-4xl mx-auto">
              File a DBA to legally operate your business under a different name, also known as a
              trade name or fictitious business name. A DBA allows entrepreneurs, LLCs, and
              corporations to expand their brand, launch new services, and conduct business under a
              professional business name.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="hero-btn-1 pulse-btn inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/40 transform hover:scale-105"
              >
                File Your DBA
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="hero-btn-2 inline-flex items-center justify-center border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm">
                View Pricing
              </button>
            </div>

            {/* Stat cards */}
            <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { value: '500+', label: 'Entrepreneurs Served' },
                { value: 'Since 2018', label: 'In Business' },
                { value: '50 States', label: 'Coverage' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="stat-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center"
                >
                  <div className="text-2xl font-black text-cyan-300">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ───────────────────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
            Trusted by{' '}
            <span className="text-cyan-500">500+ Entrepreneurs &amp; Business Owners</span>{' '}
            Worldwide
          </h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">
            <span className="text-cyan-500 font-bold text-lg">Serving Businesses Since 2018</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Bootstrapped &amp; Founder-Led</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Independently Owned Company</span>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS A DBA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                What is <span className="text-cyan-600">a DBA?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  A DBA (Doing Business As) name, also known as a{' '}
                  <strong className="text-cyan-600">trade name, assumed name, or fictitious name</strong>,
                  allows you to conduct business under a name different from your legal business name or
                  personal name.
                </p>
                <p>
                  For example, if John Smith wants to run a bakery called "Sweet Delights," he would
                  file a DBA to legally operate under that name instead of his personal name.
                </p>
                <p>
                  DBAs don't create a legal business entity—they simply allow you to use an alternate
                  business name while maintaining your current business structure.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-400 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-center">
                <div className="text-7xl mb-6">📋</div>
                <h3 className="text-3xl font-bold mb-4">Quick Registration</h3>
                <p className="text-xl text-cyan-50 mb-6">File your DBA in minutes with our simple process</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-black mb-2">Starting at $99</div>
                  <div className="text-cyan-100">+ state filing fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO SHOULD REGISTER ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Who Should{' '}
              <span className="text-cyan-600">Register a DBA?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A DBA (Doing Business As) allows businesses to legally operate under a different name
              than their registered legal name. It is commonly used by sole proprietors, partnerships,
              LLCs, and corporations that want to build a brand identity, launch new services, or
              market products under a separate trade name.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: 'Submit Your DBA Details',
                desc: 'Provide your desired business name and basic business information. Our guided process ensures your DBA application is accurate and ready for state filing.',
              },
              {
                icon: '📂',
                title: 'We File Your DBA Application',
                desc: 'Our team prepares and submits your Doing Business As registration with the appropriate state or county office, ensuring compliance with local business naming regulations.',
              },
              {
                icon: '📄',
                title: 'Receive Your Official DBA Documents',
                desc: "Once your DBA filing is approved, you'll receive your official confirmation documents. You can then legally operate your business using your new trade name.",
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 text-2xl">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-16">
            Benefits of Filing a DBA for{' '}
            <span className="text-cyan-600">Your Business</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📍',
                title: 'Location-Based Branding',
                desc: 'A DBA (Doing Business As) allows businesses with multiple locations to operate under unique trade names while keeping the same legal entity. This helps businesses tailor branding for different markets or cities.',
                color: 'from-red-500 to-pink-500',
              },
              {
                icon: '🔒',
                title: 'Protect Personal Privacy',
                desc: 'Without registering a business entity, sole proprietors typically operate under their personal name. Filing a DBA allows you to use a professional business name while helping protect your personal identity.',
                color: 'from-cyan-500 to-slate-500',
              },
              {
                icon: '🧩',
                title: 'Expand Products or Services',
                desc: 'If you run multiple services or product lines, a DBA helps you create separate brand identities for each offering without forming additional companies.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: '🚀',
                title: 'Easy Business Rebranding',
                desc: 'If your current business name no longer represents your brand, filing a DBA makes it easy to rebrand and operate under a new trade name without changing your existing LLC or corporation.',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                />
                <div className="relative bg-white h-full rounded-3xl p-8 transition-all">
                  <div className="text-6xl mb-4 text-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW TO FILE ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              How to File a{' '}
              <span className="text-cyan-500">DBA (Doing Business As)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filing a DBA allows your business to legally operate under a trade name or fictitious
              business name. Follow these simple steps to register your DBA and start using your new
              business name.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-cyan-200" />
            <div className="space-y-12">
              {[
                {
                  title: 'Identify the Filing Authority',
                  desc: 'Find out which office manages DBA registrations in your state. In most states it is handled by the Secretary of State, while some require filing at the county level.',
                  icon: '🏛️',
                },
                {
                  title: 'Complete the DBA Application',
                  desc: 'Visit the official filing website and locate the DBA or Fictitious Business Name registration section. Fill in your business details and the name you wish to use.',
                  icon: '📝',
                },
                {
                  title: 'Submit the Form & Pay Filing Fee',
                  desc: 'Submit your completed DBA application online or by mail depending on your state requirements. Filing fees vary by state and business type.',
                  icon: '💳',
                },
                {
                  title: 'Secure Your Business Name',
                  desc: 'A DBA allows you to operate under another name but does not fully protect it. Consider forming an LLC, corporation, or registering a trademark for stronger protection.',
                  icon: '🛡️',
                },
                {
                  title: 'Maintain Tax Compliance',
                  desc: 'After registering your DBA, continue filing taxes according to your business structure. Your tax obligations remain the same whether you use a DBA or not.',
                  icon: '📊',
                },
              ].map((step, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-3xl">{step.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">
            DBA (Doing Business As) – Frequently Asked{' '}
            <span className="text-cyan-600">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is a DBA (Doing Business As) and how does it work?',
                a: 'A DBA (Doing Business As), also called a fictitious business name or trade name, allows a business or individual to legally operate under a name different from their personal name or registered company name. For example, if John Smith operates a business called "Smith Digital Marketing," he would need to file a DBA. A DBA does not create a new legal business entity but simply registers the business name with the state or county so the public knows who owns the business.',
              },
              {
                q: 'Who needs to file a DBA in the United States?',
                a: 'Anyone operating a business under a name different from their legal name or registered company name typically needs to file a DBA. This commonly applies to sole proprietors, partnerships, LLCs, and corporations that want to operate under an alternative brand name. Filing a DBA ensures transparency, helps customers identify the business owner, and allows you to legally conduct business using that trade name.',
              },
              {
                q: 'What is the difference between a DBA, LLC, and Corporation?',
                a: 'A DBA is simply a name registration and does not provide legal protection or create a separate business entity. An LLC or corporation is an official business structure that provides liability protection and legal separation between personal and business assets. Many businesses form an LLC or corporation and then register one or more DBAs to operate under different brand names or services.',
              },
              {
                q: 'Why should I register a DBA for my business?',
                a: 'Registering a DBA allows you to legally operate your business under a professional brand name rather than your personal name or official entity name. It also helps when opening business bank accounts, marketing your brand, building customer trust, and expanding into new services or product lines. Many entrepreneurs use DBAs to create multiple brands under one company.',
              },
              {
                q: 'How much does it cost to file a DBA in the United States?',
                a: 'The cost of filing a DBA varies depending on the state or county where you register your business name. Typical filing fees range from $10 to $100, though some locations may charge additional publication fees if a newspaper notice is required. Professional filing services can simplify the process by preparing documents, checking name availability, and submitting the registration on your behalf.',
              },
              {
                q: 'How long does the DBA registration process take?',
                a: 'DBA processing times vary by state and county. In many states, the approval process takes between 3 and 10 business days. Some states may process filings faster if submitted online, while others require newspaper publication or manual processing, which can extend the timeline. Using a professional filing service can help ensure your application is completed correctly and processed faster.',
              },
              {
                q: 'Can I open a business bank account with a DBA?',
                a: 'Yes, most banks allow you to open a business bank account using your DBA. However, banks usually require additional documentation such as your DBA registration certificate, EIN (Employer Identification Number) or Social Security Number, and proof of business address. Having a DBA helps separate personal and business finances and makes your business appear more professional to clients and financial institutions.',
              },
              {
                q: 'Does registering a DBA protect my business name?',
                a: 'No, a DBA does not provide exclusive trademark protection for your business name. It only registers the name locally with the state or county so you can legally operate under that name. If you want nationwide protection and exclusive rights to your brand name, you should consider filing a federal trademark through the United States Patent and Trademark Office (USPTO).',
              },
              {
                q: 'Do I need an EIN to register a DBA?',
                a: 'An EIN (Employer Identification Number) is usually not required to file a DBA, especially for sole proprietors without employees. However, obtaining an EIN is strongly recommended because it allows you to open business bank accounts, hire employees, file taxes more easily, and protect your personal Social Security Number when conducting business transactions.',
              },
              {
                q: 'Can I have multiple DBAs for one business?',
                a: 'Yes, a single business entity such as an LLC or corporation can register multiple DBAs. This allows the business to operate multiple brands or services under different names while maintaining one legal business structure. For example, a marketing company might operate separate DBAs for SEO services, web design, and digital advertising.',
              },
              {
                q: 'Is a DBA valid across all states in the USA?',
                a: 'No, DBA registrations are typically state-specific or county-specific. If your business operates in multiple states under the same trade name, you may need to register a DBA separately in each state where you conduct business. Each state has its own filing rules, fees, and renewal requirements.',
              },
              {
                q: 'How long does a DBA registration remain active?',
                a: 'The validity period of a DBA depends on the state where it is registered. Some states require renewal every 1 to 5 years, while others allow indefinite registration unless the business closes or changes its name. It is important to keep track of renewal deadlines to avoid losing the rights to your business name.',
              },
              {
                q: 'Can non-US residents file a DBA in the United States?',
                a: 'Yes, international entrepreneurs and non-US residents can file a DBA in the United States, especially if they already have a registered business entity such as an LLC. Many foreign founders use DBAs to operate online businesses, e-commerce brands, or service companies under a recognizable trade name in the US market.',
              },
              {
                q: 'What happens if I operate a business without filing a required DBA?',
                a: 'Operating a business under a name that is not legally registered may lead to compliance issues, penalties, or difficulty opening a business bank account. It may also affect contracts, payments, and legal agreements because the business name is not officially registered. Filing a DBA ensures your business complies with local regulations and builds trust with customers.',
              },
              {
                q: 'Can a professional service help me file my DBA correctly?',
                a: 'Yes, professional business filing services assist entrepreneurs with the entire DBA registration process. This typically includes checking name availability, preparing the required documents, submitting the application to the correct state or county office, and ensuring your business remains compliant with local regulations.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-gradient-to-r from-cyan-50 to-slate-50 rounded-2xl p-8 group border-2 border-cyan-200 hover:border-cyan-400 transition-all"
              >
                <summary className="font-bold text-xl text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <svg
                    className="w-7 h-7 text-cyan-600 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-6 text-gray-700 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BOTTOM ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-600 via-cyan-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">
            Ready to File{' '}
            <span className="text-cyan-200">Your DBA?</span>
          </h2>
          <p className="text-2xl mb-10 text-cyan-100">Get your trade name registered quickly and easily</p>
          <button
            onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
            className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl transform hover:scale-105"
          >
            File Your DBA Now
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