import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
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

export default function Trademark() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: i * 0.3,
        size: Math.random() * 7 + 4,
        duration: 3 + (i % 4),
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
          0%   { opacity: 0; transform: scale(0.6); }
          70%  { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0) scale(1);   opacity: 0.45; }
          50%       { transform: translateY(-20px) scale(1.15); opacity: 0.85; }
        }
        @keyframes shimmerTM {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
          50%       { box-shadow: 0 0 0 14px rgba(255,255,255,0); }
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes dashStroke {
          to { stroke-dashoffset: 0; }
        }

        .tm-badge  { animation: badgePop 0.65s cubic-bezier(.34,1.56,.64,1) both; animation-delay: 0.1s; }
        .tm-h1     { animation: fadeUp 0.85s ease both; animation-delay: 0.3s; }
        .tm-sub    { animation: fadeUp 0.85s ease both; animation-delay: 0.55s; }
        .tm-btns   { animation: fadeUp 0.85s ease both; animation-delay: 0.75s; }
        .tm-stats  { animation: fadeUp 0.85s ease both; animation-delay: 0.9s; }

        .shimmer-hero {
          background: linear-gradient(90deg, #fff 25%, #a5f3fc 50%, #fff 75%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerTM 3.5s linear infinite;
          animation-delay: 1.4s;
        }
        .btn-primary-pulse { animation: pulseBorder 2.2s ease-in-out infinite; animation-delay: 2s; }
        .ring-spin { animation: rotateRing 18s linear infinite; }
        .ring-spin-rev { animation: rotateRing 24s linear infinite reverse; }
      `}</style>

      <div className="flex flex-col">
        <Helmet>
          <title>Trademark Registration in USA | USPTO Trademark Filing Services</title>
          <meta name="description" content="Protect your brand with professional trademark registration in the USA. The Future Perfect Global offers USPTO trademark search, filing, monitoring, and legal compliance support." />
          <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-formation/trademark-registration" />
          <meta name="keywords" content="trademark registration USA, USPTO trademark filing, register trademark in USA, brand trademark protection USA, trademark search USA, trademark attorney services USA" />
          <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/trademark-registration" hrefLang="en-us" />
          <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/trademark-registration" hrefLang="x-default" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Trademark Registration in USA | USPTO Filing Services" />
          <meta property="og:description" content="Secure your brand identity with expert trademark registration services in the USA, including USPTO search, filing, and compliance support." />
          <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-formation/trademark-registration" />
          <meta property="og:site_name" content="The Future Perfect Global – USA Trademark Services" />
          <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
          <meta property="og:image:alt" content="Trademark Registration Services in USA by The Future Perfect Global" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@FPGCompanySetup" />
          <meta name="twitter:title" content="Trademark Registration in USA" />
          <meta name="twitter:description" content="Register and protect your brand with USPTO trademark filing and legal compliance services in the USA." />
          <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Trademark Registration in USA",
            "url": "https://us.thefutureperfectglobal.com/business-formation/trademark-registration",
            "provider": {
              "@type": "Organization",
              "name": "The Future Perfect Global",
              "url": "https://us.thefutureperfectglobal.com/",
              "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
            },
            "description": "Professional trademark registration services in the USA including USPTO trademark search, filing, monitoring, and brand protection support.",
            "areaServed": ["United States","California","New York","Texas","Florida","Delaware","Nevada","Wyoming"],
            "serviceType": ["Trademark Registration","USPTO Trademark Filing","Trademark Search & Clearance","Brand Protection Services","Intellectual Property Consulting"]
          }`}</script>
        </Helmet>

        {/* ═══════════════════════════════════════════
            HERO SECTION — animated redesign
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 py-20 min-h-[620px] flex items-center">

          {/* Background photo */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
              alt="Trademark protection"
              className="w-full h-full object-cover opacity-10"
            />
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)',
                backgroundSize: '52px 52px',
              }}
            />
            {/* Radial glow — slate-accent */}
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(100,116,139,0.4) 0%, transparent 70%)' }}
            />
          </div>

          {/* Floating particles */}
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/25 backdrop-blur-sm pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                animation: `floatDot ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          {/* Spinning dashed rings — decorative */}
          <div className="absolute right-[-120px] top-[-120px] w-[480px] h-[480px] pointer-events-none">
            <svg viewBox="0 0 480 480" className="w-full h-full ring-spin opacity-20">
              <circle cx="240" cy="240" r="230" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="18 10" />
            </svg>
          </div>
          <div className="absolute right-[-60px] top-[-60px] w-[340px] h-[340px] pointer-events-none">
            <svg viewBox="0 0 340 340" className="w-full h-full ring-spin-rev opacity-15">
              <circle cx="170" cy="170" r="162" fill="none" stroke="cyan" strokeWidth="1" strokeDasharray="10 14" />
            </svg>
          </div>
          <div className="absolute left-[-100px] bottom-[-80px] w-[400px] h-[400px] pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full ring-spin opacity-10">
              <circle cx="200" cy="200" r="192" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="14 12" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center text-white">

              {/* Animated badge */}
              <div className="tm-badge inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full mb-8 font-semibold text-sm tracking-widest shadow-lg uppercase">
                <span className="text-lg">™</span>
                Brand Protection
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Headline */}
              <h1 className="tm-h1 text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
                Trademark{' '}
                <span className="shimmer-hero">Registration Service</span>
              </h1>

              {/* Sub */}
              <p className="tm-sub text-lg sm:text-xl mb-10 text-slate-200 leading-relaxed max-w-3xl mx-auto">
                Secure Your Brand Identity with Trusted Trademark Registration Services. Our Legal Experts Help You Register Your Trademark Quickly and Protect Your Intellectual Property.
              </p>

              {/* CTA buttons */}
              <div className="tm-btns flex flex-col sm:flex-row justify-center gap-4 mb-14">
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="btn-primary-pulse relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-slate-800 px-9 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="relative z-10">Register Trademark</span>
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-9 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Check Availability
                </Link>
              </div>

              {/* Animated trust stats */}
              <div className="tm-stats grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { value: '8–14 Mo', label: 'Avg. USPTO Timeline' },
                  { value: 'USPTO', label: 'Official Filing Partner' },
                  { value: '10 Yrs', label: 'Trademark Validity' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-4 hover:bg-white/20 transition-all"
                    style={{ animation: `fadeUp 0.7s ease both`, animationDelay: `${1.05 + i * 0.15}s` }}
                  >
                    <div className="text-xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60 L0 32 Q360 0 720 32 Q1080 64 1440 32 L1440 60 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHY REGISTER
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-16 px-4">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColoredHeading text="Trademark Registration Services to Protect Your Business Name and Brand" />
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Registering a <strong>trademark</strong> is essential to protect your{' '}
              <strong>business name, logo, and brand identity</strong>. A registered trademark provides
              legal ownership and prevents others from copying or misusing your brand elements. Your brand
              name, logo, and tagline represent your <strong>reputation, trust, and market value</strong>,
              which makes <strong>trademark protection</strong> crucial for long-term success.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              With professional <strong>trademark registration services</strong>, you can easily register
              your trademark online and secure your <strong>intellectual property rights</strong>. Protect
              your brand today and build a strong, recognizable business identity in the market.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg"
              className="rounded-3xl shadow-2xl"
              alt="Trademark"
            />
            <div className="space-y-5">
              {[
                ['🛡️', 'Complete Trademark Protection', 'Secure your business name, logo, and brand identity with registered trademark protection. A registered trademark gives you exclusive rights and helps prevent competitors from copying or misusing your brand.'],
                ['⚖️', 'Attorney-Led Trademark Search', 'Our partnered trademark attorneys perform a comprehensive trademark search to ensure your mark is unique and available. This reduces the risk of rejection and helps you file your trademark application with confidence.'],
                ['💼', 'Build Strong Brand Value', 'Trademark registration strengthens your brand reputation, builds customer trust, and increases your business valuation. Protect your intellectual property and establish a recognizable brand in the marketplace.'],
              ].map(([icon, title, desc], i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-4xl">{icon}</span>
                  <div>
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHAT'S INCLUDED
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-cyan-100/50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
              <ColoredHeading text="What's Included in the Trademark Registration Package" />
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Expert Trademark Attorney Guidance', desc: 'Get professional support from experienced trademark attorneys to protect your brand name, logo, and intellectual property.' },
                { title: 'Comprehensive Trademark Search', desc: 'We conduct a detailed trademark search to check existing trademarks and reduce the chances of application rejection.' },
                { title: 'USPTO Trademark Application Filing', desc: 'Our team files your trademark application with the USPTO to legally register and secure your business brand.' },
                { title: 'Complete USPTO Management', desc: 'We handle all USPTO communication, tracking, and documentation until your trademark registration is approved.' },
              ].map((item, i) => (
                <div key={i} className="group p-7 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-rose-500 text-white font-bold text-lg shadow-md flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-black text-center mb-16">
              <ColoredHeading text="Trademark Search & Registration Process" className="text-white" />
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                ['1', 'Tell Us About Your Brand', 'Share your business name, logo, or slogan with our trademark experts so we can understand your brand protection needs and guide you through the trademark registration process.'],
                ['2', 'Comprehensive Trademark Search', 'Our trademark attorneys conduct a detailed trademark search to check trademark availability, identify potential conflicts, and reduce the risk of USPTO application rejection.'],
                ['3', 'Trademark Application Filing', 'We file your trademark application with the USPTO and manage the complete trademark registration process until your brand name and intellectual property are officially protected.'],
              ].map(([step, title, desc], i) => (
                <div key={i}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-2xl font-black">
                    {step}
                  </div>
                  <h3 className="font-bold text-2xl mb-2">{title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-12">
              <ColoredHeading text="Trademark Registration – Frequently Asked Questions" />
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is a trademark and why is it important?',
                  a: (<><p className="mb-3">A trademark is a legal protection for your brand identity. It can be a business name, logo, slogan, symbol, or even a sound that distinguishes your products or services from competitors.</p><ul className="list-disc pl-6 space-y-2"><li>Prevents others from copying or misusing your brand</li><li>Establishes legal ownership nationwide</li><li>Builds brand trust and recognition</li><li>Creates an asset that can be sold or licensed</li></ul></>)
                },
                {
                  q: 'Is trademark registration required after business registration?',
                  a: (<><p className="mb-3">Yes. Registering a business name or forming an LLC or corporation does not protect your brand legally. Business registration only gives you permission to operate under a name.</p><p className="mb-3">A trademark provides exclusive rights to use your brand name or logo across the entire United States and allows you to stop others from using similar marks.</p></>)
                },
                {
                  q: 'How long does the trademark registration process take?',
                  a: (<><p className="mb-3">The trademark registration process with the USPTO usually takes between 8 and 14 months. The timeline depends on several factors:</p><ul className="list-disc pl-6 space-y-2"><li>USPTO examination backlog</li><li>Office Actions or objections</li><li>Oppositions from third parties</li><li>Intent-to-use vs. actual-use filing</li></ul></>)
                },
                {
                  q: 'Can I apply for a trademark before starting my business?',
                  a: (<><p className="mb-3">Yes. You can file an "Intent-to-Use" trademark application if you plan to use the brand name or logo in the future but have not launched yet.</p><p>This allows you to reserve the rights to your brand while preparing for launch, fundraising, or market entry.</p></>)
                },
                {
                  q: 'What types of names or logos can be trademarked?',
                  a: (<><p className="mb-3">Most distinctive brand elements can be trademarked, including:</p><ul className="list-disc pl-6 space-y-2"><li>Business and brand names</li><li>Logos and design marks</li><li>Taglines and slogans</li><li>Product names</li><li>Unique packaging or trade dress</li></ul></>)
                },
                {
                  q: 'What cannot be trademarked?',
                  a: (<><p className="mb-3">The USPTO does not allow registration of certain marks, such as:</p><ul className="list-disc pl-6 space-y-2"><li>Generic or commonly used terms</li><li>Purely descriptive names without distinctiveness</li><li>Marks too similar to existing trademarks</li><li>Misleading or deceptive terms</li><li>Offensive or prohibited content</li></ul></>)
                },
                {
                  q: 'How much does trademark registration cost?',
                  a: (<><p className="mb-3">USPTO filing fees typically start at $250 per class of goods or services. The total cost depends on:</p><ul className="list-disc pl-6 space-y-2"><li>Number of classes filed</li><li>Complexity of the trademark</li><li>Legal review and filing support</li><li>Office Action responses if required</li></ul></>)
                },
                {
                  q: 'Does a U.S. trademark protect my brand internationally?',
                  a: (<><p className="mb-3">No. A U.S. trademark protects your brand only within the United States. If you plan to operate globally, you must apply for trademark protection in other countries.</p><p>International trademarks are filed through country-specific offices or via the Madrid Protocol.</p></>)
                },
                {
                  q: 'Should I trademark my logo and name separately?',
                  a: (<><p className="mb-3">In most cases, yes. Filing separate applications provides stronger and more flexible protection.</p><ul className="list-disc pl-6 space-y-2"><li>Name protection remains even if logo changes</li><li>Logo protection covers visual branding</li><li>Greater enforcement power</li></ul></>)
                },
                {
                  q: 'What happens if someone infringes my trademark?',
                  a: (<><p className="mb-3">Trademark owners have legal rights to stop unauthorized use of their brand. This may include:</p><ul className="list-disc pl-6 space-y-2"><li>Cease-and-desist notices</li><li>Online takedown requests</li><li>Financial damages</li><li>Legal enforcement in federal court</li></ul></>)
                },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-lg"
                  >
                    {faq.q}
                    <span className="text-2xl text-cyan-600">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-gray-700 text-lg space-y-3">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-600 text-white text-center">
          <h2 className="text-5xl font-black mb-6">
            <ColoredHeading text="Protect Your Brand Today" className="text-white" />
          </h2>
          <p className="text-2xl mb-10 text-slate-200">Secure your trademark before someone else does</p>
          <Link
            to="/start"
            className="bg-white text-cyan-600 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition"
          >
            Start Trademark Registration
          </Link>
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