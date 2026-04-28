import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from 'react';
import GetStartedModal from '../components/GetStartedModal';

// Helper: splits heading and wraps last two words in cyan
function ColoredHeading({ text, className }: { text: string; className: string }) {
  const words = text.trim().split(' ');
  if (words.length <= 2) {
    return <span className={className} style={{ color: '#0891b2' }}>{text}</span>;
  }
  const regular = words.slice(0, words.length - 2).join(' ');
  const colored = words.slice(-2).join(' ');
  return (
    <span className={className}>
      {regular}{' '}
      <span style={{ color: '#0891b2' }}>{colored}</span>
    </span>
  );
}

// Animated counter for stats
function AnimatedStat({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1500;
        const step = Math.ceil(value / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-black text-white">{count}+</div>
      <div className="text-cyan-300 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function ToolsAndResources() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('');
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Trigger hero animation on mount
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Business Formation Support USA | Ongoing Compliance & Company Assistance</title>
        <meta name="description" content="Get reliable business formation support in the USA including ongoing compliance, document assistance, annual filings, and expert company support from The Future Perfect Global." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-formation/support" />
        <meta name="keywords" content="business formation support USA, company support services USA, ongoing compliance support, annual filing assistance USA, business help services" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/support" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/support" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business Formation Support USA | Compliance & Company Assistance" />
        <meta property="og:description" content="Professional business formation support in the USA covering compliance management, documentation help, and long-term company assistance." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-formation/support" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Formation" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="USA Business Formation Support and Compliance Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Business Formation Support USA" />
        <meta name="twitter:description" content="Ongoing business formation support in the USA including compliance, annual filings, and expert company assistance." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Business Formation Support USA",
          "url": "https://us.thefutureperfectglobal.com/business-formation/support",
          "provider": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "description": "Business formation support service in the USA offering ongoing compliance, document assistance, annual filings, and professional company support.",
          "areaServed": ["United States","California","New York","Texas","Florida","Delaware","Nevada","Wyoming"],
          "serviceType": ["Business Formation Support","Ongoing Compliance Services","Annual Filing Assistance","Corporate Documentation Support","Company Maintenance Services"]
        }`}</script>

        {/* Hero animation styles */}
        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeSlideRight {
            from { opacity: 0; transform: translateX(-32px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeSlideLeft {
            from { opacity: 0; transform: translateX(32px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulseCyan {
            0%, 100% { box-shadow: 0 0 0 0 rgba(6,182,212,0.4); }
            50%       { box-shadow: 0 0 0 16px rgba(6,182,212,0); }
          }
          @keyframes floatImg {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-12px); }
          }
          @keyframes orb1 {
            0%, 100% { transform: translate(0,0) scale(1); }
            50%       { transform: translate(30px, -20px) scale(1.1); }
          }
          @keyframes orb2 {
            0%, 100% { transform: translate(0,0) scale(1); }
            50%       { transform: translate(-20px, 30px) scale(1.08); }
          }
          @keyframes shimmer {
            0%   { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .hero-badge    { animation: fadeSlideUp 0.6s ease forwards; }
          .hero-heading  { animation: fadeSlideRight 0.7s 0.2s ease both; }
          .hero-para     { animation: fadeSlideUp 0.7s 0.4s ease both; }
          .hero-btn      { animation: fadeSlideUp 0.7s 0.6s ease both; }
          .hero-stats    { animation: fadeSlideUp 0.7s 0.8s ease both; }
          .hero-img-wrap { animation: fadeSlideLeft 0.9s 0.3s ease both; }
          .hero-img      { animation: floatImg 6s ease-in-out infinite; }
          .hero-orb-1    { animation: orb1 8s ease-in-out infinite; }
          .hero-orb-2    { animation: orb2 10s ease-in-out infinite; }
          .hero-btn-inner {
            animation: pulseCyan 2.5s ease-in-out infinite;
          }
          .shimmer-text {
            background: linear-gradient(90deg, #fff 30%, #67e8f9 50%, #fff 70%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3s linear infinite;
          }
          .hero-tag-pill {
            background: rgba(6,182,212,0.12);
            border: 1px solid rgba(6,182,212,0.3);
            backdrop-filter: blur(8px);
          }
        `}</style>
      </Helmet>

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-10">

        {/* Decorative animated orbs */}
        <div className="hero-orb-1 absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)' }} />
        <div className="hero-orb-2 absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left content */}
            <div>
              {/* Badge */}
              <div className={`hero-badge mb-5 inline-flex items-center gap-3 hero-tag-pill px-4 py-2 rounded-full ${heroVisible ? '' : 'opacity-0'}`}>
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" style={{ boxShadow: '0 0 8px #22d3ee' }} />
                <span className="text-sm font-semibold text-gray-300">Trusted by Entrepreneurs</span>
                <span className="text-cyan-400 font-bold">★ 4.0 Rating</span>
              </div>

              {/* Heading */}
              <h1 className={`hero-heading text-5xl font-black text-white mb-6 leading-xl ${heroVisible ? '' : 'opacity-0'}`}>
                Start a Business,{' '}
                <span className="shimmer-text">Build Your Brand</span>
                {' '}& Launch Your Company{' '}
                <span style={{ color: '#22d3ee' }}>with Confidence</span>
              </h1>

              {/* Paragraph */}
              <p className={`hero-para text-lg text-gray-300 mb-8 leading-relaxed ${heroVisible ? '' : 'opacity-0'}`}>
                Everything you need to start a business successfully — from LLC formation, business registration,
                and compliance support to expert resources and tools designed for entrepreneurs and startups.
              </p>

              {/* CTA Button */}
              <div className={`hero-btn mb-10 ${heroVisible ? '' : 'opacity-0'}`}>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="hero-btn-inner relative inline-flex items-center gap-3 bg-cyan-500 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
                  style={{ boxShadow: '0 8px 32px rgba(6,182,212,0.4)' }}
                >
                  <span>Start Your Business Today</span>
                  <span className="text-2xl">→</span>
                </button>
              </div>

              {/* Animated stats row */}
              <div className={`hero-stats flex gap-8 ${heroVisible ? '' : 'opacity-0'}`}>
                <AnimatedStat value={500} label="Entrepreneurs Served" />
                <div className="w-px bg-gray-700" />
                <AnimatedStat value={7} label="Years Experience" />
                <div className="w-px bg-gray-700" />
                <AnimatedStat value={50} label="States Covered" />
              </div>
            </div>

            {/* Right image */}
            <div className={`hero-img-wrap relative ${heroVisible ? '' : 'opacity-0'}`}>
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: '0 0 60px rgba(6,182,212,0.25)', borderRadius: '1.5rem' }} />
              {/* Floating badge on image */}
              <div className="absolute -top-4 -left-4 z-10 hero-tag-pill px-4 py-2 rounded-xl text-cyan-300 font-semibold text-sm shadow-lg"
                style={{ background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(6,182,212,0.4)' }}>
                🚀 Launch-ready in days
              </div>
              <div className="absolute -bottom-4 -right-4 z-10 hero-tag-pill px-4 py-2 rounded-xl text-cyan-300 font-semibold text-sm shadow-lg"
                style={{ background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(6,182,212,0.4)' }}>
                ✅ 100% Compliance Managed
              </div>
              <img
                src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Start a business online with tools and resources"
                className="hero-img w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ── */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
            Trusted by{' '}
            <span style={{ color: '#0891b2' }}>500+ Entrepreneurs & Business Owners</span>{' '}
            Worldwide
          </h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">
            <span className="text-cyan-500 font-bold text-lg">Serving Businesses Since 2018</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Bootstrapped & Founder-Led</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Independently Owned Company</span>
          </div>
        </div>
      </section>

      {/* ── STARTUP GUIDE SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Start a Business the Right Way – Complete Startup &{' '}
              <ColoredHeading text="LLC Formation Guide" className="" />
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Learn how to start a business, choose the right business structure, and register your company with confidence.
              Our step-by-step startup resources cover LLC formation, corporation setup, and state business requirements to
              help entrepreneurs launch and grow successfully.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-5">
            {[
              { icon: '🎓', title: 'How to Start a Business – Step-by-Step Startup Guide', desc: 'Discover everything you need to know about starting a business, from validating your idea and registering your company to building a strong legal and financial foundation.', link: '/articles', cta: 'Read the Startup Guide' },
              { icon: '🏢', title: 'Choose the Right Business Structure (LLC, S-Corp, C-Corp)', desc: 'Compare popular business structures like LLCs and corporations to determine the best option for taxes, liability protection, and long-term business growth.', link: '/articles', cta: 'Compare Business Structures' },
              { icon: '📊', title: 'LLC & Business Registration Requirements by State', desc: 'Explore state-specific business formation rules, filing fees, and compliance requirements to successfully register your LLC or corporation in your state.', link: '/state-information-llc', cta: 'View State Requirements' },
              { icon: '🎧', title: 'Business Formation Support from Experts', desc: 'Have questions about forming an LLC or registering your company? Our business experts are ready to guide you through every step of the startup process.', link: '/contact', cta: 'Contact Business Experts' },
            ].map(({ icon, title, desc, link, cta }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0891b2' }}>{title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{desc}</p>
                <Link to={link} className="font-bold hover:text-cyan-600 flex items-center gap-2 group" style={{ color: '#0891b2' }}>
                  <span>{cta}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS NAME SECTION ── */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Find the Perfect Business Name & Check{' '}
              <ColoredHeading text="LLC Name Availability" className="" />
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover unique business name ideas and instantly check if your LLC or company name is available. Use our smart tools to generate creative business names and perform a fast business name search before registering your company.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-gray-100 rounded-xl p-6 mb-6 text-center">
                <div className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-bold text-xl">💡 Acme LLC</div>
                <p className="text-gray-500 text-sm mt-4">Generate creative and unique business name ideas instantly</p>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Business Name Generator</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Looking for the perfect business name? Our AI-powered business name generator helps you create unique company name ideas for your LLC, startup, or brand in seconds.</p>
              <Link to="/business-name-generator" className="font-bold hover:text-cyan-600 flex items-center gap-2 group" style={{ color: '#0891b2' }}>
                <span>Generate Business Names</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-gray-100 rounded-xl p-6 mb-6 text-center">
                <div className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-bold text-xl">✓ Acme Design LLC</div>
                <p className="text-gray-700 text-sm mt-4 font-semibold">Business name available</p>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Business Name Search</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Already have a business name in mind? Use our LLC name search tool to check business name availability and ensure your company name is legally available before registration.</p>
              <Link to="/business-name-search" className="font-bold hover:text-cyan-600 flex items-center gap-2 group" style={{ color: '#0891b2' }}>
                <span>Check Business Name Availability</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCES SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Startup Guides & Business{' '}
              <ColoredHeading text="Formation Resources" className="" />
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Learn how to start a business, choose the right LLC or corporation structure,
              register your business name, and build a successful company with our expert
              startup guides, business tips, and step-by-step resources.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Start a business and LLC formation guide"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-4">
              {[
                { icon: '🏢', text: 'How to Choose the Right Business Structure (LLC, S-Corp, or Corporation)' },
                { icon: '💡', text: 'Business Name Ideas & Trademark Tips for New Companies' },
                { icon: '⚠️', text: 'Common Startup Mistakes to Avoid When Starting a Business' },
                { icon: '📈', text: 'Business Growth Strategies for Startups & Small Businesses' },
              ].map(({ icon, text }) => (
                <div key={text} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-black mb-6">
              Ready to Start{' '}
              <span style={{ color: '#083344' }}>Your Business?</span>
            </h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
              Use our tools to plan, and let us handle the formation
            </p>
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-900 hover:text-white transition-all shadow-2xl"
            >
              Form Your LLC Now
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