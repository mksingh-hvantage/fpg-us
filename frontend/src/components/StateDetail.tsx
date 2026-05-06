import { useParams, Link } from 'react-router-dom';
import { states } from '../data/states';
import { useState, useEffect } from 'react';
import GetStartedModal from './GetStartedModal';
import { AlertCircle, CheckCircle } from 'lucide-react';

// Utility: wraps last two words of a heading in cyan span
function HeadingWithAccent({ text, className }: { text: string; className?: string }) {
  const words = text.trim().split(' ');
  if (words.length <= 2) {
    return <span className={className} style={{ color: '#0891b2' }}>{text}</span>;
  }
  const normal = words.slice(0, words.length - 2).join(' ');
  const accent = words.slice(-2).join(' ');
  return (
    <span className={className}>
      {normal}{' '}
      <span style={{ color: '#0891b2' }}>{accent}</span>
    </span>
  );
}

export default function StateDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setSelectedBusinessType] = useState<string>('');
  const [activeSection, setActiveSection] = useState('overview');

  const state = states.find(s => s.slug === slug);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">State Not Found</h1>
          <Link to="/" className="text-cyan-600 font-extrabold">Return to Home</Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const sectionIds = ['overview', 'names', 'agent', 'requirements', 'taxes', 'faq'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" >
      <style>{`
        

        /* ── Hero Animations ── */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: .6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes counterUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6,182,212,.0); }
          50%       { box-shadow: 0 0 24px 4px rgba(6,182,212,.25); }
        }

        .hero-badge   { animation: fadeSlideRight .7s ease both .1s; }
        .hero-heading { animation: fadeSlideUp .8s ease both .25s; }
        .hero-sub     { animation: fadeSlideUp .8s ease both .4s; }
        .hero-stats   { animation: fadeSlideUp .8s ease both .55s; }
        .hero-cta     { animation: fadeSlideUp .8s ease both .7s; }
        .hero-card    { animation: fadeIn .9s ease both .6s, floatCard 5s ease-in-out infinite 1.5s; }

        .stat-pill {
          background: rgba(255,255,255,.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 16px;
          transition: transform .2s, background .2s;
        }
        .stat-pill:hover { background: rgba(255,255,255,.2); transform: translateY(-3px); }

        .shimmer-btn {
          background: linear-gradient(90deg, #fff 0%, #e0f7fa 40%, #fff 60%, #e0f7fa 100%);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
          color: #0891b2;
        }
        .shimmer-btn:hover { animation-play-state: paused; background: #f0fdfe; }

        /* Decorative orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(72px);
          pointer-events: none;
        }
        .orb-1 { width: 420px; height: 420px; background: rgba(6,182,212,.18); top: -100px; right: -80px; animation: fadeIn 1.2s ease both .3s; }
        .orb-2 { width: 280px; height: 280px; background: rgba(14,165,233,.14); bottom: -60px; left: 10%; animation: fadeIn 1.2s ease both .5s; }

        /* Floating particles */
        .particle { position: absolute; border-radius: 50%; background: rgba(255,255,255,.3); pointer-events: none; }
        .p1 { width:8px; height:8px; top:18%; left:8%;  animation: floatCard 4s ease-in-out infinite; }
        .p2 { width:5px; height:5px; top:55%; left:15%; animation: floatCard 5s ease-in-out infinite .8s; }
        .p3 { width:6px; height:6px; top:30%; right:22%;animation: floatCard 3.5s ease-in-out infinite .4s; }
        .p4 { width:4px; height:4px; top:70%; right:10%;animation: floatCard 4.5s ease-in-out infinite 1s; }

        /* Nav */
        .nav-btn { position: relative; transition: color .2s; }
        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 100%; height: 2px;
          background: #0891b2;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform .25s ease;
        }
        .nav-btn.active { color: #0891b2; }
        .nav-btn.active::after { transform: scaleX(1); }
        .nav-btn:hover::after { transform: scaleX(1); }

        /* Section cards hover */
        .hover-card { transition: box-shadow .25s, transform .25s; }
        .hover-card:hover { box-shadow: 0 8px 32px rgba(6,182,212,.12); transform: translateY(-3px); }

        /* FAQ */
        details summary { user-select: none; }
        details[open] summary { color: #0891b2; }
        details[open] { animation: borderGlow 2s ease-in-out; border-color: #a5f3fc !important; }

        /* CTA gradient */
        .cta-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #0e4f5f 50%, #0f172a 100%);
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        /* Table rows */
        tbody tr { transition: background .15s; }
        tbody tr:hover { background: #f0fdfe; }

        /* Step number badge */
        .step-num {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          color: #fff; font-weight: 800; font-size: 14px;
          flex-shrink: 0; margin-top: 2px;
          box-shadow: 0 4px 12px rgba(6,182,212,.35);
        }

        /* Benefit icon wrapper */
        .benefit-item {
          display: flex; gap: 12px; align-items: flex-start;
          background: #f8feff;
          border: 1px solid #cffafe;
          border-radius: 14px;
          padding: 14px 16px;
          transition: background .2s, border-color .2s;
        }
        .benefit-item:hover { background: #ecfeff; border-color: #67e8f9; }

        /* Quick fact row */
        .fact-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,.18);
        }
        .fact-row:last-child { border-bottom: none; }

        /* Section divider accent */
        .section-accent {
          display: inline-block;
          width: 48px; height: 4px;
          background: linear-gradient(90deg, #0891b2, #22d3ee);
          border-radius: 4px;
          margin-bottom: 16px;
        }
      `}</style>

      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0c3345 55%, #0f172a 100%)', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="particle p1" /><div className="particle p2" /><div className="particle p3" /><div className="particle p4" />

        {/* subtle grid overlay */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)', backgroundSize:'40px 40px', pointerEvents:'none' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a className="hero-badge inline-flex items-center text-cyan-300 hover:text-cyan-100 mb-8 font-bold transition-colors text-sm" href="/state-information">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
            Back to All States
          </a>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <span className="hero-badge inline-block px-4 py-1.5 mb-5 text-xs font-extrabold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/30">State Guide</span>

              <h1 className="hero-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white mb-5 leading-tight">
                How to Form an LLC<br />
                <span style={{ color: '#22d3ee' }}>in {state.name}</span>
              </h1>

              <p className="hero-sub text-lg text-slate-300 mb-8 leading-relaxed">
                {state.name} offers a straightforward LLC formation process with competitive filing fees and strong protections for business owners.
              </p>

              {/* Stat pills */}
              <div className="hero-stats grid grid-cols-2 gap-4 mb-8">
                <div className="stat-pill p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Filing Fee</span>
                  </div>
                  <p className="text-2xl font-extrabold text-white">$200</p>
                </div>
                <div className="stat-pill p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Processing</span>
                  </div>
                  <p className="text-xl font-extrabold text-white">7–10 Days</p>
                </div>
              </div>

              <div className="hero-cta">
                <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-lg shadow-2xl active:scale-95 transition-transform">
                  Form Your {state.name} LLC Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            {/* Right – floating card */}
            <div className="hero-card">
              <div style={{ background: 'rgba(255,255,255,.07)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid rgba(255,255,255,.15)', padding: '32px', boxShadow: '0 32px 64px rgba(0,0,0,.4)' }}>
                <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#22d3ee', display:'inline-block', boxShadow:'0 0 12px #22d3ee' }} />
                  Quick Facts
                </h3>
                <div className="fact-row"><span className="text-slate-400 text-sm font-medium">Annual Report Fee</span><span className="text-white font-extrabold text-lg">$100</span></div>
                <div className="fact-row"><span className="text-slate-400 text-sm font-medium">Processing Time</span><span className="text-white font-extrabold text-lg">7–10 Days</span></div>
                <div className="fact-row"><span className="text-slate-400 text-sm font-medium">Formation Cost</span><span className="text-white font-extrabold text-lg">$200</span></div>
                <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(6,182,212,.12)', borderRadius:'14px', border:'1px solid rgba(6,182,212,.25)' }}>
                  <p className="text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-1">Pro Tip</p>
                  <p className="text-slate-300 text-sm leading-relaxed">File online for the fastest approval — usually 2 business days with expedited processing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════ STICKY NAV ═══════════════════════════ */}
      <div className="sticky top-32 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-3">
            {[
              { id: 'overview',     label: 'Overview' },
              { id: 'names',        label: 'Business Name' },
              { id: 'agent',        label: 'Registered Agent' },
              { id: 'requirements', label: 'Filing Fees & Requirements' },
              { id: 'taxes',        label: 'Business Taxes' },
              { id: 'faq',          label: 'FAQ' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-btn ${activeSection === item.id ? 'active' : ''} px-4 py-2 text-sm font-extrabold whitespace-nowrap rounded-lg transition-colors ${activeSection === item.id ? 'text-cyan-600 bg-cyan-50' : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════ CONTENT ═══════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-28">

        {/* ── OVERVIEW ── */}
        <section id="overview" className="scroll-mt-32 space-y-10">
          <div>
            <div className="section-accent" />
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`How to Start an LLC in ${state.name}: Complete Guide for Business Owners`} />
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              {state.name} is considered one of the most business-friendly states in the United States. Entrepreneurs benefit from competitive tax rates, reasonable operating costs, and several incentives that support new and growing businesses. Creating a Limited Liability Company (LLC) is one of the most popular ways to legally establish a business in {state.name} because it combines liability protection with flexible tax options and simplified management requirements.
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
              <HeadingWithAccent text={`Advantages of Registering an ${state.name} LLC`} />
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Protect personal assets from business debts and legal liabilities',
                'Flexible tax treatment options for small businesses and startups',
                'Simple management structure compared to traditional corporations',
                'Affordable state filing fee starting at approximately $200',
              ].map((item, i) => (
                <li key={i} className="benefit-item">
                  <CheckCircle className="shrink-0 mt-0.5" size={18} color="#0891b2" />
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
              <HeadingWithAccent text={`Step-by-Step Process to Form an ${state.name} LLC`} />
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Choose a Unique Business Name', body: `Select a business name that complies with ${state.name} LLC naming guidelines and confirm its availability using the ${state.name} Secretary of State business entity search tool. The state also requires entrepreneurs to submit a Name Reservation request before filing formation documents.` },
                { title: 'Provide a Registered Business Address', body: `Every LLC must list an official physical address where legal and business correspondence can be delivered. The address can be in or outside ${state.name}, but it must be a valid street location and cannot be a P.O. box.` },
                { title: 'Appoint a Registered Agent', body: `A registered agent receives important legal documents, tax notices, and government correspondence on behalf of the business. The agent must have a physical address in ${state.name} and be available during standard business hours.` },
                { title: 'File the Certificate of Formation', body: `To officially create your LLC, submit the Certificate of Formation to the ${state.name} Secretary of State. This document includes your business name, registered agent information, company purpose, management details, and organizer information. Filing can be completed online or by mail, and the current state filing fee is approximately $200.` },
                { title: 'Apply for an Employer Identification Number (EIN)', body: 'An Employer Identification Number issued by the Internal Revenue Service is used to identify your business for federal tax purposes. Most LLCs need an EIN to open a business bank account, hire employees, and file federal tax returns.' },
                { title: 'Draft an Operating Agreement', body: `Although ${state.name} does not legally require an operating agreement, this document is highly recommended. It outlines ownership structure, decision-making authority, and operational guidelines for the business.` },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-white hover-card">
                  <div className="step-num">{i + 1}</div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-1">{step.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cta-gradient rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ boxShadow: '0 24px 48px rgba(0,0,0,.3)' }}>
            <div className="max-w-xl">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Launch Your {state.name} LLC <span style={{ color: '#22d3ee' }}>Quickly and Easily</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">Starting a business in {state.name} doesn't have to be complicated. From reserving your business name to obtaining an EIN and completing state filings, we help you set up your LLC the right way.</p>
            </div>
            <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="shimmer-btn px-8 py-4 rounded-full font-extrabold text-base whitespace-nowrap active:scale-95 transition-transform">
              Get Started Now →
            </button>
          </div>
        </section>

        {/* ── BUSINESS NAME ── */}
        <section id="names" className="scroll-mt-32 space-y-10">
          <div>
            <div className="section-accent" />
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`How to Choose and Register Your LLC Name in ${state.name}`} />
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">If you're planning to start a business in {state.name}, selecting the right Limited Liability Company (LLC) name is one of the most important steps in the formation process. Before registering your company, you must verify that your business name is available through the {state.name} Secretary of State business search database.</p>
          </div>

          {/* CTA Banner */}
          <div style={{ background: 'linear-gradient(135deg, #ecfeff, #f0f9ff)', border: '1px solid #a5f3fc', borderRadius: '20px', padding: '28px 32px' }}>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Start Your {state.name} LLC <span style={{ color: '#0891b2' }}>Today</span></h2>
            <p className="text-slate-700 mb-4 text-sm">Form your {state.name} LLC quickly and easily. Many business owners choose professional services to handle formation paperwork while ensuring compliance with {state.name} state regulations.</p>
            <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="px-6 py-3 rounded-full font-extrabold text-sm text-white active:scale-95 transition-transform" style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)', boxShadow: '0 4px 16px rgba(6,182,212,.35)' }}>Form Your LLC Now</button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: `Your ${state.name} LLC Name Must Be Unique`, body: `The name you select for your LLC cannot already be used by another registered business entity in ${state.name}. To verify availability, you must perform an ${state.name} Secretary of State business search before submitting formation documents.` },
              { title: 'Your Business Name Cannot Be Confusingly Similar', body: 'Even if a name is technically different, it cannot be misleadingly similar to another company\'s name. The Secretary of State may reject a name that appears too close to an existing business.' },
              { title: 'Your LLC Name Must Include an LLC Designator', body: `${state.name} law requires every limited liability company to include an official LLC identifier. Acceptable designations include "Limited Liability Company," "LLC," or "L.L.C."` },
              { title: 'Additional Naming Restrictions', body: `Certain words may be restricted when naming your ${state.name} LLC. Businesses cannot choose names that could mislead the public or imply government affiliation.` },
            ].map((card, i) => (
              <div key={i} className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {[
            { heading: `${state.name}-Specific LLC Naming Requirements`, body: `In addition to general LLC naming guidelines, ${state.name} law has additional requirements. Your LLC name should clearly represent your services, attract potential customers, and be easy to remember.` },
            { heading: `${state.name} Business Entity Name Search`, body: `Before forming your LLC, conduct an ${state.name} business entity search to confirm that your proposed company name is not already registered. Enter your proposed business name into the state registry — if no matching entity appears, the name may be available.` },
            { heading: 'Trademark and Service Mark Considerations', body: `Even if a name is available in the ${state.name} business registry, confirm it does not violate an existing trademark or service mark. Conducting a trademark search ensures your LLC name does not infringe on protected intellectual property.` },
            { heading: `${state.name} Trade Names (DBA)`, body: `Many companies operate under a trade name or "doing business as" (DBA). In ${state.name}, businesses may register a trade name if they want to operate under a brand different from their official LLC name.` },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                <HeadingWithAccent text={s.heading} />
              </h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`Registering Your LLC Name with the ${state.name} Secretary of State`} />
            </h2>
            <ol className="space-y-3">
              {[
                `Submit a Name Reservation Request form to reserve your desired business name. Once approved, the name is typically held for one year.`,
                `If you are ready to start your company immediately, you can file your Certificate of Formation directly with the ${state.name} Secretary of State to create your LLC.`,
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="step-num">{i + 1}</div>
                  <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              <HeadingWithAccent text={`FAQs About ${state.name} LLC Name Registration`} />
            </h2>
            <div className="space-y-5">
              {[
                { q: `How can I check if my ${state.name} business name is available?`, a: `You can perform an ${state.name} Secretary of State business search using the official state registry to see whether your desired LLC name is already in use.` },
                { q: `Are there official rules for naming an LLC in ${state.name}?`, a: `Yes. ${state.name} LLCs must follow both general business naming rules and state-specific regulations that govern business entity names.` },
                { q: 'Can I operate under a different business name?', a: `Yes. ${state.name} businesses may register a trade name (DBA) if they wish to conduct business under a brand that differs from their legal LLC name.` },
                { q: `Can I reserve a business name in ${state.name} before forming my LLC?`, a: `Yes. ${state.name} allows entrepreneurs to reserve an LLC name before filing formation documents if they are not ready to create their company immediately.` },
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                  <p className="font-bold text-slate-800 text-sm mb-1">{faq.q}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REGISTERED AGENT ── */}
        <section id="agent" className="scroll-mt-32 space-y-10">
          <div>
            <div className="section-accent" />
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`${state.name} Registered Agent Service for LLCs`} />
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">Every limited liability company operating in {state.name} is legally required to appoint a Registered Agent. This individual or company receives official legal notices and government correspondence on behalf of your business. When you create your LLC with Bizee, you receive your first year of {state.name} Registered Agent service at no cost.</p>
          </div>

          {/* CTA Banner */}
          <div style={{ background: 'linear-gradient(135deg, #ecfeff, #f0f9ff)', border: '1px solid #a5f3fc', borderRadius: '20px', padding: '28px 32px' }}>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Start Your {state.name} LLC <span style={{ color: '#0891b2' }}>Today</span></h2>
            <p className="text-slate-700 mb-4 text-sm">Form your {state.name} LLC quickly and easily with professional registered agent services included free for the first year.</p>
            <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="px-6 py-3 rounded-full font-extrabold text-sm text-white active:scale-95 transition-transform" style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)', boxShadow: '0 4px 16px rgba(6,182,212,.35)' }}>Form Your LLC Now</button>
          </div>

          {[
            {
              heading: `Understanding the Role of an ${state.name} Registered Agent`,
              body: `A Registered Agent in ${state.name} acts as the official contact point between your business and the ${state.name} Secretary of State. Their responsibility is to receive legal documents, state notices, tax correspondence, and other official communications for your LLC. Every ${state.name} LLC must continuously maintain a Registered Agent.`,
            },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3"><HeadingWithAccent text={s.heading} /></h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`${state.name} Registered Agent Requirements`} />
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">State regulations require every domestic and foreign LLC operating in {state.name} to maintain a Registered Agent with a physical address within the state.</p>
            <ul className="space-y-3">
              {[
                `The agent may be either a business entity authorized to operate in ${state.name} or an individual resident of the state.`,
                `If the Registered Agent is a company, it must be legally approved to conduct business within ${state.name}.`,
                'If the agent is an individual, that person must reside within the state.',
                'The Registered Agent must be available during normal business hours to accept legal correspondence.',
                `The Registered Office must have a physical street address located in ${state.name}. P.O. boxes are not permitted.`,
                'The Registered Agent address does not need to match your primary business address.',
              ].map((item, i) => (
                <li key={i} className="benefit-item">
                  <CheckCircle className="shrink-0 mt-0.5" size={16} color="#0891b2" />
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">
                <HeadingWithAccent text={`Responsibilities of a Registered Agent in ${state.name}`} />
              </h2>
              <ul className="space-y-2">
                {[
                  `Official correspondence from the ${state.name} Secretary of State`,
                  'Legal service of process documents if your business faces a lawsuit',
                  'Federal and state government notifications',
                  'Tax documentation and compliance notices',
                  'Permit renewals, reporting reminders, and official filings',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <span style={{ color: '#0891b2', fontWeight: 800 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">
                Free {state.name} Registered Agent <span style={{ color: '#0891b2' }}>First Year</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">Bizee offers a complete Registered Agent service for businesses forming an LLC in {state.name}. Your Registered Agent service is included free for the first year. After that period, the annual renewal fee is $119.</p>
              <ul className="space-y-2">
                {['Secure online dashboard for managing business documents', 'Dedicated Registered Agent for legal documents', 'Email alerts whenever official documents arrive', 'Automatic document forwarding'].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} color="#0891b2" className="shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              <HeadingWithAccent text={`Appointing a Registered Agent for Your ${state.name} LLC`} />
            </h2>
            <p className="text-slate-600 mb-3 leading-relaxed">A Registered Agent must be designated at the time your LLC is created. This information is included in the Certificate of Formation submitted to the {state.name} Secretary of State. If you form your company through Bizee, our team prepares and files the formation documents for you while assigning our Registered Agent service automatically.</p>
            <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="px-6 py-3 rounded-full font-extrabold text-sm text-white active:scale-95 transition-transform" style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)', boxShadow: '0 4px 16px rgba(6,182,212,.35)' }}>Start Your Business Formation</button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">
                <HeadingWithAccent text={`Changing Your Registered Agent in ${state.name}`} />
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">If your LLC already exists, you can update your Registered Agent by submitting a Change of Registered Agent form to the {state.name} Secretary of State along with the required filing fee. When you switch to Bizee's Registered Agent service, our team will handle the paperwork on your behalf.</p>
            </div>
            <div className="hover-card p-6 rounded-2xl border border-red-50 bg-red-50/50">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">
                What Happens Without a <span style={{ color: '#dc2626' }}>Registered Agent</span>
              </h2>
              <ul className="space-y-2">
                {[
                  'Missing important legal notices or court summons',
                  `Receiving default judgments if your company fails to respond to lawsuits`,
                  `Losing good standing status with the ${state.name} Secretary of State`,
                  'Possible administrative dissolution of your LLC',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <AlertCircle size={14} color="#dc2626" className="shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ border: '1px solid #a5f3fc', borderRadius: '24px', padding: '40px' }}>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Start Your {state.name} LLC <span style={{ color: '#0891b2' }}>With Bizee Today</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">No contracts. No hidden costs. Launch your {state.name} business with professional formation services and a free Registered Agent for your first year.</p>
            <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="px-8 py-4 rounded-full font-extrabold text-white active:scale-95 transition-transform" style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)', boxShadow: '0 4px 16px rgba(6,182,212,.35)' }}>Start Your Business</button>
          </div>
        </section>

        {/* ── REQUIREMENTS ── */}
        <section id="requirements" className="scroll-mt-32 space-y-10">
          <div>
            <span className="inline-flex rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-widest" style={{ background: '#ecfeff', color: '#0891b2', border: '1px solid #a5f3fc' }}>{state.name} LLC Guide</span>
            <div className="section-accent mt-4" />
            <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">
              <HeadingWithAccent text={`${state.name} LLC Filing Fees and Requirements in 2026`} />
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">Planning to start a limited liability company in {state.name}? This guide explains the most important {state.name} LLC filing fees, state requirements, annual report obligations, foreign registration rules, business license considerations, and other common costs involved in forming and maintaining an LLC in {state.name}.</p>
          </div>

          {/* Cost overview */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                  <HeadingWithAccent text={`How Much Does It Cost to Start an LLC in ${state.name}?`} />
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">The standard {state.name} LLC filing fee for forming a new domestic LLC is one of the main startup costs every business owner should expect. In addition to the initial filing fee, your company may also need to budget for annual reports, licenses, permits, name reservations, amendments, certificates of good standing, and tax-related registrations.</p>
                <p className="text-slate-600 text-sm leading-relaxed">While some fees are one-time costs paid during formation, others may be recurring or only required in specific situations.</p>
              </div>
              <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0f172a, #0e4f5f)' }}>
                <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-300 mb-5">Quick Overview</p>
                <div className="space-y-3">
                  {[
                    { label: `${state.name} LLC State Fee`, val: '$35' },
                    { label: 'Annual Report Fee', val: '$20' },
                    { label: 'DBA Filing Fee', val: '$20' },
                    { label: 'Certificate of Fact', val: '$15' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/15 pb-3 last:border-0 last:pb-0">
                      <span className="text-slate-300 text-sm">{row.label}</span>
                      <span className="text-xl font-extrabold" style={{ color: '#22d3ee' }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`Initial ${state.name} LLC Filing Fees`} />
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <table className="min-w-full divide-y divide-slate-100 bg-white">
                <thead style={{ background: '#f8fafc' }}>
                  <tr>
                    {['Requirement', 'Filing Fee', 'Standard Filing Time', 'Expedited Option'].map((h, i) => (
                      <th key={i} className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-500">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    [`${state.name} Domestic LLC Formation`, '$35', 'About 3 weeks', 'As fast as 2 business days'],
                    [`${state.name} Foreign LLC Registration`, '$35', 'Varies by filing volume', 'May be available through state processing options'],
                    [`${state.name} Annual Report`, '$20', 'Filed yearly', 'Due by April 15'],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 text-sm text-slate-700">{row[0]}</td>
                      <td className="px-6 py-4 text-sm font-extrabold" style={{ color: '#0891b2' }}>{row[1]}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row[2]}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">
                <HeadingWithAccent text={`${state.name} LLC Registration Requirements`} />
              </h2>
              <ul className="space-y-2">
                {[`Choose a unique ${state.name} LLC name`, `Appoint a registered agent in ${state.name}`, 'File the LLC formation documents', `Pay the ${state.name} state filing fee`, 'Submit annual reports on time', 'Obtain any required business licenses and permits'].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <span style={{ color: '#0891b2', fontWeight: 800 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">
                <HeadingWithAccent text={`Expedited Filing in ${state.name}`} />
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">{state.name} may allow faster processing for LLC filings if you choose an expedited filing option. This can be useful if you need to launch your business quickly, open a bank account sooner, or meet a contract deadline.</p>
              <p className="text-slate-600 text-sm leading-relaxed">Standard filing may take around <strong>3 weeks</strong>, while faster processing may reduce the timeline to approximately <strong>2 business days</strong>.</p>
            </div>
          </div>

          {/* Annual Report */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`${state.name} Annual Report Requirements`} />
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[{ label: 'Frequency', val: 'Annually' }, { label: 'Due Date', val: 'April 15' }, { label: 'Filing Fee', val: '$20' }].map((item, i) => (
                <div key={i} className="hover-card p-6 rounded-2xl border border-slate-100 bg-white text-center">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">{item.label}</p>
                  <p className="text-2xl font-extrabold text-slate-800">{item.val}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Filing your annual report on time helps keep your LLC active and in compliance with {state.name} law. Missing the deadline can lead to late fees, penalties, or administrative complications.</p>
          </div>

          {/* Other fees grid */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`Other Potential ${state.name} LLC Fees and Requirements`} />
            </h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: 'DBA or Assumed Business Name', body: `If your LLC wants to operate under a name different from its legal name, you must register an assumed business name in ${state.name}.`, fee: 'Filing Fee: $20' },
                { title: 'Change of Registered Agent', body: `If you need to update your registered agent, you can file the appropriate change form with the ${state.name} Secretary of State.`, fee: 'Filing Fee: $0' },
                { title: 'Name Reservation', body: `Not ready to form your LLC yet? You can reserve a ${state.name} business name for up to 120 days.`, fee: 'Filing Fee: $10' },
                { title: 'Articles of Amendment', body: 'If important business details change after formation, you may need to file an amendment with the state.', fee: 'Filing Fee: $10' },
                { title: 'Certificate of Fact', body: 'This certificate may be required by lenders, banks, investors, or other entities that want proof your LLC is compliant.', fee: 'Filing Fee: $15' },
                { title: 'Tax and Regulatory Costs', body: 'Your LLC may also need to pay self-employment taxes, payroll taxes, state taxes, sales taxes, and other regulatory charges.', fee: '' },
              ].map((card, i) => (
                <div key={i} className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-3">{card.body}</p>
                  {card.fee && <p className="text-sm font-extrabold" style={{ color: '#0891b2' }}>{card.fee}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              <HeadingWithAccent text={`FAQs About ${state.name} LLC Fees`} />
            </h2>
            <div className="space-y-5">
              {[
                { q: `What is the ${state.name} LLC filing fee?`, a: `The standard state filing fee to form a domestic LLC in ${state.name} is $35.` },
                { q: `How much is the ${state.name} annual report fee?`, a: `${state.name} LLCs must file an annual report and pay a $20 filing fee each year, typically due by April 15.` },
                { q: `Does ${state.name} require an LLC operating agreement?`, a: `No, ${state.name} does not legally require an operating agreement, but having one is strongly recommended for internal governance.` },
                { q: `Do I need an EIN for my ${state.name} LLC?`, a: 'Most LLCs should obtain an EIN from the IRS, especially if the business will open a bank account, hire employees, or file federal taxes.' },
                { q: `How much does a DBA cost in ${state.name}?`, a: `Registering an assumed business name in ${state.name} generally costs $20.` },
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                  <p className="font-bold text-slate-800 text-sm mb-1">{faq.q}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion CTA */}
          <div className="cta-gradient rounded-3xl px-8 py-10 text-center text-white" style={{ boxShadow: '0 24px 48px rgba(0,0,0,.3)' }}>
            <h2 className="text-2xl font-extrabold mb-3">Final Thoughts on {state.name} LLC <span style={{ color: '#22d3ee' }}>Costs & Compliance</span></h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed mb-6">Starting and maintaining an LLC in {state.name} is relatively affordable, but it is still important to understand all required filings, deadlines, and optional fees. Staying compliant can help protect your business and keep operations running smoothly.</p>
            <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-base active:scale-95 transition-transform">Form Your {state.name} LLC Now →</button>
          </div>
        </section>

        {/* ── TAXES ── */}
        <section id="taxes" className="scroll-mt-32 space-y-10">
          <div>
            <span className="inline-flex rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-widest" style={{ background: '#f1f5f9', color: '#475569' }}>{state.name} LLC Tax Guide</span>
            <div className="section-accent mt-4" />
            <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">
              <HeadingWithAccent text={`${state.name} Business Taxes for LLCs: Complete Guide for Owners`} />
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">Starting and running an LLC in {state.name} comes with important tax responsibilities. While {state.name} LLCs usually benefit from pass-through taxation, business owners may still need to handle state income tax, federal income tax, self-employment tax, payroll taxes, and estimated quarterly payments.</p>
          </div>

          {/* Intro card */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`How LLCs Are Taxed in ${state.name}`} />
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">Most {state.name} limited liability companies are not taxed at the business entity level in the same way as traditional C Corporations. Instead, LLC profits usually pass through to the owners, who then report that income on their personal tax returns.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              {[
                `LLC owners may owe self-employment tax on business profits.`,
                `LLC owners may owe ${state.name} state income tax on pass-through income.`,
                'LLC owners may owe federal income tax on profits after deductions.',
                'Employers may need to handle payroll taxes and employee-related filings.',
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-slate-100">{item}</div>
              ))}
            </div>
          </div>

          {/* State taxes */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-5">
              <HeadingWithAccent text={`${state.name} State Taxes for LLCs`} />
            </h2>
            <div className="space-y-4">
              {[
                { title: `${state.name} Income Tax`, body: `If you earn income from your ${state.name} LLC, that income generally flows through to your personal tax return. You may need to pay ${state.name} state income tax on the money you take from the business, subject to available deductions, exemptions, and other tax adjustments. ${state.name} uses graduated income tax rates, meaning the rate can increase as taxable income rises.` },
                { title: `Does ${state.name} Have a Sales Tax?`, body: `No. ${state.name} is one of the few states that does not impose a general statewide sales tax. This can be a major advantage for certain businesses and consumers. However, business owners should still review whether any local, industry-specific, or special tax obligations apply to their operations.` },
                { title: `Does ${state.name} Have a Franchise Tax?`, body: `${state.name} does not impose a traditional franchise tax on LLCs. That said, your business may still face other tax filing requirements depending on revenue, payroll, and industry type.` },
              ].map((card, i) => (
                <div key={i} className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-extrabold text-slate-900 text-base mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Federal taxes */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-5">
              <HeadingWithAccent text={`Federal Taxes for ${state.name} LLCs`} />
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: 'Federal Self-Employment Tax', body: 'LLC members who actively earn profits from the business are often responsible for self-employment tax. This tax helps fund Social Security and Medicare. For many small business owners, this is one of the most important federal tax obligations to plan for throughout the year.' },
                { title: 'Federal Income Tax', body: 'In addition to self-employment tax, LLC owners generally need to pay federal income tax on profits received from the business. The amount owed depends on total income, filing status, deductions, credits, and the tax bracket that applies to the owner.' },
              ].map((card, i) => (
                <div key={i} className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-extrabold text-slate-900 text-base mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* S Corp */}
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Can a {state.name} LLC Reduce Taxes by <span style={{ color: '#0891b2' }}>Electing S Corporation Status?</span>
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">In some cases, yes. The IRS allows eligible LLCs to elect to be taxed as an S Corporation. This option can help some business owners reduce self-employment tax by splitting income between reasonable salary and owner distributions.</p>
            <p className="text-slate-700 text-sm leading-relaxed">This strategy is not right for every business. Owners must follow IRS rules, maintain payroll compliance, and pay themselves a reasonable wage where required. Before making an S Corp election, consult a tax professional.</p>
          </div>

          {/* Employees */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-5">
              <HeadingWithAccent text={`Employee and Employer Taxes in ${state.name}`} />
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Employer Payroll Tax Responsibilities', body: 'Employers are generally required to withhold applicable federal taxes from employee wages and may also need to match certain payroll tax contributions. Proper payroll setup is essential to avoid filing issues, penalties, or underpayment problems.' },
                { title: 'State and Federal Employee Tax Filing', body: 'Employees may be required to file their own federal and state income tax returns, even when taxes are withheld from their wages. Employers should keep complete payroll records and ensure all reporting documents are issued accurately and on time.' },
                { title: 'Insurance and Unemployment Tax Requirements', body: `Depending on the nature of your workforce, your LLC may also need to handle workers' compensation insurance, unemployment insurance taxes, and other employment-related obligations under ${state.name} and federal law.` },
              ].map((card, i) => (
                <div key={i} className="hover-card p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-extrabold text-slate-900 text-base mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Estimated taxes */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              <HeadingWithAccent text={`Estimated Taxes for ${state.name} LLCs`} />
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">Many {state.name} LLC owners are required to pay estimated taxes throughout the year instead of waiting until the annual filing deadline. Estimated tax payments are commonly made on a quarterly basis and may include both state and federal obligations.</p>
            <ul className="space-y-2">
              {['Federal income tax', 'Federal self-employment tax', `${state.name} state income tax`].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span style={{ color: '#0891b2', fontWeight: 800 }}>→</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tax FAQ */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              <HeadingWithAccent text={`FAQs About ${state.name} Business Taxes for LLCs`} />
            </h2>
            <div className="space-y-5">
              {[
                { q: `Does ${state.name} have a sales tax?`, a: `No, ${state.name} does not impose a general statewide sales tax, which makes it different from most other states.` },
                { q: `Do LLCs in ${state.name} pay state income tax?`, a: `LLC profits generally pass through to the owners, who then pay ${state.name} state income tax on their share of business income.` },
                { q: `Do ${state.name} LLC owners pay self-employment tax?`, a: 'In many cases, yes. Active LLC members typically owe self-employment tax on profits earned from the business.' },
                { q: `Does ${state.name} have a franchise tax for LLCs?`, a: `No, ${state.name} does not impose a standard franchise tax on LLCs.` },
                { q: `Do ${state.name} LLCs need to pay estimated taxes?`, a: 'Most LLC owners should expect to make estimated quarterly tax payments for federal and state tax obligations when required.' },
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                  <p className="font-bold text-slate-800 text-sm mb-1">{faq.q}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tax CTA */}
          <div className="rounded-3xl p-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)', boxShadow: '0 16px 40px rgba(6,182,212,.35)' }}>
            <h2 className="text-2xl font-extrabold mb-3">Start Your {state.name} LLC <span style={{ color: '#a5f3fc' }}>With Confidence</span></h2>
            <p className="text-cyan-100 max-w-xl mx-auto text-sm leading-relaxed mb-6">Building your business is easier when you understand your tax responsibilities from day one. Whether you are forming a new {state.name} LLC or reviewing your current tax setup, staying compliant can help you avoid penalties and plan for long-term growth.</p>
            <button onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-base bg-white active:scale-95 transition-transform" style={{ color: '#0891b2' }}>
              Form Your {state.name} LLC →
            </button>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="scroll-mt-32">
          <div className="section-accent" />
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
            <HeadingWithAccent text={`FAQs About Starting a ${state.name} LLC`} />
          </h2>
          <div className="space-y-3">
            {[
              { question: `How do I choose the best legal structure for my business in ${state.name}?`, answer: `For most small business owners, a ${state.name} LLC offers one of the best combinations of personal liability protection, flexible management, and simple ongoing maintenance. While some businesses may prefer an S Corporation or C Corporation for tax or investment reasons, an LLC is often the most practical option for entrepreneurs.` },
              { question: `What do I need to start an LLC in ${state.name}?`, answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements.` },
              { question: `How do I register an LLC in ${state.name}?`, answer: `You can register a ${state.name} LLC by filing your Articles of Organization through the ${state.name} Secretary of State's online business portal. Once the filing is submitted and approved, your LLC becomes a legally recognized business entity in the state.` },
              { question: `How much does it cost to form a ${state.name} LLC?`, answer: `The standard ${state.name} LLC filing fee is generally required when submitting the Articles of Organization, although state fees can change over time. It is always best to verify the latest filing fee with the ${state.name} Secretary of State before submitting your application.` },
              { question: `How long does it take to form an LLC in ${state.name}?`, answer: `Approval time usually depends on current state processing volume and whether you choose standard or expedited filing. In many cases, standard processing can take a few business days, while faster options may be available for an added fee.` },
              { question: `How do I check if my ${state.name} LLC name is available?`, answer: `You can perform a ${state.name} business name search through the ${state.name} Secretary of State's business portal to check whether your desired LLC name is already in use. Your name must be distinguishable from other registered businesses in the state.` },
              { question: `How do I register a business name in ${state.name}?`, answer: `If you are starting a new ${state.name} LLC, your business name is usually registered when you include it in your Articles of Organization. If you want to operate under a different name later, you may need to file for an assumed business name (DBA).` },
              { question: `What are Articles of Organization in ${state.name}?`, answer: `Articles of Organization are the official formation documents used to create an LLC in ${state.name}. This filing includes essential business information such as the LLC name, registered agent details, and management structure.` },
              { question: `Does ${state.name} allow Series LLCs?`, answer: `${state.name} may allow Series LLC formation depending on current state law. A Series LLC can let business owners create one parent LLC with separate series under it, each potentially holding different assets or liabilities.` },
              { question: `Do I need a registered agent for a ${state.name} LLC?`, answer: `Yes, every ${state.name} LLC must maintain a registered agent at all times. A registered agent receives legal notices, government correspondence, and service of process on behalf of your business.` },
              { question: `How do I change my registered agent in ${state.name}?`, answer: `To change your ${state.name} registered agent, you typically need to file the appropriate change form with the ${state.name} Secretary of State. The filing updates the state's records with your new registered agent information.` },
              { question: `What taxes does a ${state.name} LLC need to pay?`, answer: `Most ${state.name} LLCs are taxed as pass-through entities, which means profits are usually reported on the owners' personal tax returns. Depending on how the LLC is structured, owners may need to pay federal income tax, self-employment tax, payroll taxes, and ${state.name} state income tax.` },
              { question: `Does ${state.name} have a sales tax for LLCs?`, answer: `Sales tax rules depend on the state. Some states impose a general sales tax on the sale of taxable goods and services, while others do not. Review the latest ${state.name} sales tax requirements to determine whether your LLC needs to collect and remit sales tax.` },
              { question: `Does ${state.name} have a franchise tax?`, answer: `Franchise tax rules vary by state. You should verify whether ${state.name} requires franchise tax filings or payments for LLCs based on your business structure and activity.` },
              { question: `Do I need a business license to operate an LLC in ${state.name}?`, answer: `Many businesses need at least one license, permit, or local registration, but the exact requirements depend on your industry, services, products, and business location. Before launching your LLC, confirm all state, county, and city licensing requirements that apply to your business.` },
            ].map((item, i) => (
              <details key={i} className="border border-slate-100 rounded-2xl p-5 bg-white" style={{ transition: 'border-color .2s' }}>
                <summary className="flex items-center gap-3 cursor-pointer list-none">
                  <AlertCircle size={18} className="shrink-0" style={{ color: '#0891b2' }} />
                  <span className="font-extrabold text-slate-900 text-sm">{item.question}</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm pl-7">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="cta-gradient text-white rounded-3xl p-12 text-center" style={{ boxShadow: '0 32px 64px rgba(0,0,0,.35)' }}>
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Start Your {state.name} <span style={{ color: '#22d3ee' }}>LLC?</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">Join thousands of entrepreneurs who have successfully formed their LLCs with professional guidance and support.</p>
          <button onClick={() => setIsModalOpen(true)} className="shimmer-btn inline-flex items-center gap-2 px-10 py-4 rounded-full font-extrabold text-lg active:scale-95 transition-transform">
            Get Started Now →
          </button>
        </section>
      </div>

      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedBusinessType="LLC"
      />
    </div>
  );
}