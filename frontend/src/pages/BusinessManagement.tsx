import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  ArrowRight, X, BadgeCheck, FileBadge, FileText,
  Globe, PenTool, RefreshCcw, RotateCcw, UserCheck, XCircle
} from 'lucide-react';

/* ─────────────────────────────────────────────
   HeadingAccent – wraps last 2 words in cyan
   Works on any string without changing h1/h2 tags
───────────────────────────────────────────── */
function accentLastTwo(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 2) return <span style={{ color: '#0891b2' }}>{text}</span>;
  const body = words.slice(0, -2).join(' ');
  const tail = words.slice(-2).join(' ');
  return (
    <>
      {body}{' '}
      <span style={{ color: '#0891b2' }}>{tail}</span>
    </>
  );
}

export default function BusinessManagement() {
  const features = [
    {
      title: 'Transparent & Affordable Pricing',
      desc: 'Access professional business services at competitive rates designed to support startups and growing companies.',
      number: '01',
    },
    {
      title: 'Trusted by Thousands of Businesses',
      desc: 'Entrepreneurs across the country rely on our experience to keep their companies compliant and running smoothly.',
      number: '02',
    },
    {
      title: 'Stress-Free Business Management',
      desc: 'From filings to compliance, we handle the complex details so you can focus on growing your business.',
      number: '03',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  return (
    <>
      <style>{`
        /* ── Hero Animations ── */
        @keyframes bm-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bm-fadeRight {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes bm-fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bm-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes bm-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes bm-gradMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bm-pulse {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: .9; transform: scale(1.04); }
        }
        @keyframes bm-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* staggered hero reveals */
        .bm-h1   { animation: bm-fadeRight .75s ease both .1s; }
        .bm-sub  { animation: bm-fadeUp    .75s ease both .3s; }
        .bm-note { animation: bm-fadeUp    .75s ease both .45s; }
        .bm-btns { animation: bm-fadeUp    .75s ease both .55s; }
        .bm-img  { animation: bm-fadeIn    .9s  ease both .4s, bm-float 6s ease-in-out infinite 1.4s; }

        /* decorative orbs */
        .bm-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
        }
        .bm-orb-1 { width:380px; height:380px; background:rgba(6,182,212,.18); top:-80px; right:-60px; animation: bm-pulse 7s ease-in-out infinite; }
        .bm-orb-2 { width:260px; height:260px; background:rgba(99,102,241,.12); bottom:-40px; left:5%;  animation: bm-pulse 9s ease-in-out infinite .8s; }

        /* grid overlay */
        .bm-grid-overlay {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* primary CTA shimmer */
        .bm-cta-primary {
          background: linear-gradient(90deg, #0891b2 0%, #22d3ee 40%, #0891b2 70%, #22d3ee 100%);
          background-size: 200% auto;
          animation: bm-shimmer 3s linear infinite;
          color: #fff;
          border: none;
        }
        .bm-cta-primary:hover { animation-play-state: paused; filter: brightness(1.08); }

        /* feature cards */
        .bm-feat-card {
          transition: box-shadow .25s, transform .25s, border-color .25s;
          border: 1.5px solid #e5e7eb;
        }
        .bm-feat-card:hover {
          box-shadow: 0 12px 36px rgba(6,182,212,.14);
          transform: translateY(-4px);
          border-color: #a5f3fc;
        }

        /* resource cards */
        .bm-res-card { transition: box-shadow .3s, transform .3s; }
        .bm-res-card:hover { box-shadow: 0 16px 40px rgba(0,0,0,.12); transform: translateY(-4px); }

        /* FAQ details */
        details.bm-faq { transition: border-color .2s; }
        details.bm-faq[open] { border-color: #06b6d4 !important; }
        details.bm-faq summary { user-select: none; }

        /* support feature rows */
        .bm-support-row {
          transition: background .2s;
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 4px;
        }
        .bm-support-row:hover { background: #f0fdfe; }

        /* section accent bar */
        .bm-accent-bar {
          display: inline-block;
          width: 44px; height: 4px;
          background: linear-gradient(90deg, #0891b2, #22d3ee);
          border-radius: 4px;
          margin-bottom: 14px;
        }

        /* rotating ring on hero image */
        .bm-ring {
          position: absolute; inset: -16px;
          border-radius: 50%;
          border: 2px dashed rgba(6,182,212,.35);
          animation: bm-spin-slow 22s linear infinite;
          pointer-events: none;
        }

        /* CTA gradient section */
        .bm-cta-section {
          background: linear-gradient(135deg, #0e7490 0%, #0891b2 40%, #06b6d4 100%);
          background-size: 200% 200%;
          animation: bm-gradMove 8s ease infinite;
        }

        /* icon wrapper */
        .bm-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #ecfeff, #cffafe);
          margin-bottom: 18px;
          transition: background .2s;
        }
        .bm-feat-card:hover .bm-icon-wrap { background: linear-gradient(135deg, #cffafe, #a5f3fc); }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ══════════════════════════ HERO ══════════════════════════ */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #0c3a4a 55%, #0f172a 100%)',
            paddingTop: '80px',
            paddingBottom: '96px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="bm-orb bm-orb-1" />
          <div className="bm-orb bm-orb-2" />
          <div className="bm-grid-overlay" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-14 items-center">

              {/* LEFT */}
              <div>
                <span
                  className="bm-h1 inline-block px-4 py-1.5 mb-5 text-xs font-extrabold tracking-widest uppercase rounded-full"
                  style={{ background: 'rgba(6,182,212,.12)', color: '#22d3ee', border: '1px solid rgba(6,182,212,.3)' }}
                >
                  Business Platform
                </span>

                <h1 className="bm-h1 text-6xl font-extrabold mb-6 leading-tight" style={{ color: '#fff' }}>
                  Manage Your Business{' '}
                  <span style={{ color: '#22d3ee' }}>Like Never Before</span>
                </h1>

                <p className="bm-sub text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,.75)' }}>
                  Streamline operations, boost productivity, and scale your
                  business with our all-in-one management platform.
                </p>

                <div className="bm-btns flex flex-col sm:flex-row gap-4">
                  <button className="bm-cta-primary px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
                    <span>Start Free Trial</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="px-8 py-3 rounded-lg font-semibold transition-all active:scale-95"
                    style={{ border: '2px solid rgba(255,255,255,.35)', color: '#fff', background: 'rgba(255,255,255,.07)', backdropFilter: 'blur(8px)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.14)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.07)')}
                  >
                    Watch Demo
                  </button>
                </div>

                <p className="bm-note text-sm mt-6" style={{ color: 'rgba(255,255,255,.45)' }}>
                  No credit card required • 14-day free trial
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex items-center justify-center">
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <div className="bm-ring" />
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                    alt="Business dashboard"
                    className="bm-img rounded-2xl shadow-2xl w-full object-cover"
                    style={{ position: 'relative', zIndex: 1 }}
                  />
                  {/* floating stat badge */}
                  <div
                    style={{
                      position: 'absolute', bottom: '-18px', left: '-20px', zIndex: 10,
                      background: '#fff', borderRadius: '16px', padding: '14px 20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,.18)',
                      animation: 'bm-float 5s ease-in-out infinite .5s',
                    }}
                  >
                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Active Businesses</p>
                    <p style={{ fontSize: '22px', fontWeight: 800, color: '#0891b2' }}>12,400+</p>
                  </div>
                  <div
                    style={{
                      position: 'absolute', top: '-14px', right: '-14px', zIndex: 10,
                      background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
                      borderRadius: '14px', padding: '12px 18px',
                      boxShadow: '0 8px 24px rgba(6,182,212,.4)',
                      animation: 'bm-float 4.5s ease-in-out infinite 1s',
                    }}
                  >
                    <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,.8)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Compliance Rate</p>
                    <p style={{ fontSize: '22px', fontWeight: 800, color: '#fff' }}>99.8%</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════ ENGINE SECTION ══════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #ecfeff, #f0f9ff)', borderRadius: '28px', transform: 'rotate(-2deg)', zIndex: 0 }} />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Business management dashboard"
                className="rounded-3xl shadow-xl"
                style={{ position: 'relative', zIndex: 1 }}
              />
            </div>

            <div>
              <div className="bm-accent-bar" />
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                {accentLastTwo('The Engine Behind Businesses That Keep Growing')}
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Successful businesses are not built on ideas alone — they are powered
                by systems that keep everything running smoothly. From managing
                documents and compliance to keeping operations organized, the real
                work happens behind the scenes.
              </p>
              <p className="mt-4 mb-10 text-lg text-slate-600 leading-relaxed">
                Our platform gives entrepreneurs the tools to stay focused on growth
                while we handle the structure, organization, and details that keep
                your company moving forward.
              </p>
              <a
                href="/form-order-now"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all active:scale-95"
                style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)', boxShadow: '0 4px 20px rgba(6,182,212,.35)' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
              >
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ FEATURES ══════════════════════════ */}
        <section id="features" className="py-20" style={{ background: '#f8fafc' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="bm-accent-bar" style={{ display: 'block', margin: '0 auto 14px' }} />
              <h2 className="text-5xl font-extrabold text-center mb-4 text-gray-900">
                {accentLastTwo('Powerful Features for Modern Businesses')}
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                Everything you need to manage your business efficiently in one comprehensive platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FileText,   link: '/annual-report',                              title: 'File Your Annual Report',        desc: "Meet your state's yearly filing requirements and keep your company compliant without the stress." },
                { icon: UserCheck,  link: '/business-management/registered-agent',       title: 'Dedicated Registered Agent',     desc: 'Ensure every legal notice and government document is received and handled on time.' },
                { icon: PenTool,    link: '/business-management/amendment',              title: 'Update Business Information',    desc: 'Modify your company details such as name, address, or ownership with a simple amendment filing.' },
                { icon: Globe,      link: '/business-management/foreign-qualification',  title: 'Operate in Multiple States',     desc: 'Legally expand your business presence by registering to do business outside your home state.' },
                { icon: BadgeCheck, link: '/business-management/certificate-of-good-standing', title: 'Proof of Good Standing', desc: 'Obtain an official certificate showing your business is active and compliant with state regulations.' },
                { icon: FileBadge,  link: '/business-management/form-2553',              title: 'S-Corporation Tax Election',     desc: "Elect S-Corp tax status to potentially reduce taxes and optimize your company's financial structure." },
                { icon: RefreshCcw, link: '/business-management/registered-agent-change',title: 'Replace Your Registered Agent', desc: 'Switch to a new registered agent quickly while keeping your state records up to date.' },
                { icon: RotateCcw,  link: '/reinstatement',                              title: 'Restore Your Business Status',   desc: 'Bring a suspended or dissolved company back into compliance and resume operations.' },
                { icon: XCircle,    link: '/business-management/dissolution',            title: 'Close Your Business Properly',  desc: 'Dissolve your company the right way and ensure all legal and state obligations are completed.' },
              ].map((feature, idx) => (
                <div key={idx} className="bm-feat-card p-7 bg-white rounded-2xl">
                  <div className="bm-icon-wrap">
                    <feature.icon className="h-6 w-6" style={{ color: '#0891b2' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{feature.desc}</p>
                  <a href={feature.link} className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: '#0891b2' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#0e7490')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#0891b2')}
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════ RESOURCES ══════════════════════════ */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, #f0fdfe 0%, #fff 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="bm-accent-bar" style={{ display: 'block', margin: '0 auto 14px' }} />
              <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
                {accentLastTwo('Business Growth Insights & Startup Strategies')}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Expert startup tips, proven business strategies, and practical advice from Startup Central to help entrepreneurs build, manage, and grow a successful business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80', title: 'Understanding Filing Fees', link: '#' },
                { image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80', title: 'Navigating Filing Times', link: '#' },
                { image: 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80', title: 'Business Name Search', link: '#' },
                { image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80', title: 'Filing Annual Reports', link: '#' },
                { image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80', title: 'State LLC Filing Tips', link: '#' },
                { image: 'https://images.unsplash.com/photo-1619898381495-5416f6c8045c?q=80', title: 'File in Another Country', link: '#' },
              ].map((r, i) => (
                <ResourceCard key={i} image={r.image} title={r.title} link={r.link} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════ SUPPORT ══════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #f0f9ff, #ecfeff)', borderRadius: '28px', transform: 'rotate(2deg)', zIndex: 0 }} />
              <img
                src="https://images.unsplash.com/photo-1664575599730-0814817939de?q=80"
                alt="Customer support professional"
                className="rounded-3xl shadow-lg w-full object-cover"
                style={{ position: 'relative', zIndex: 1 }}
              />
            </div>

            <div>
              <div className="bm-accent-bar" />
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 leading-tight">
                {accentLastTwo('Reliable Business Support That Works for You')}
              </h2>
              <div>
                {features.map((item, index) => (
                  <div key={index} className="bm-support-row flex justify-between items-start border-b border-gray-100 last:border-0">
                    <div className="max-w-md">
                      <h3 className="text-lg font-bold mb-1" style={{ color: '#0891b2' }}>{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                    <span
                      className="text-2xl font-extrabold ml-4 shrink-0"
                      style={{ color: '#e2e8f0', fontVariantNumeric: 'tabular-nums' }}
                    >
                      {item.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ FAQ ══════════════════════════ */}
        <section className="py-20" style={{ background: '#f8fafc' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="bm-accent-bar" style={{ display: 'block', margin: '0 auto 14px' }} />
              <h2 className="text-5xl font-extrabold text-center text-gray-900">
                {accentLastTwo('Frequently Asked Questions')}
              </h2>
            </div>
            <div className="space-y-3">
              {[
                { q: 'What is business management compliance and why is it important for my company?', a: 'Business compliance management refers to the ongoing legal and administrative requirements that businesses must maintain after formation. This includes filing annual reports, maintaining a registered agent, updating company records, and staying in good standing with the state. Failing to meet these requirements can result in penalties, late fees, or even administrative dissolution of your company. Business management services help ensure that important filings and compliance deadlines are handled correctly so your company remains legally active and protected.' },
                { q: 'What is an Annual Report and do I need to file one for my business?', a: 'An Annual Report is a required state filing that confirms or updates important information about your business such as its address, owners, and registered agent. Most states require LLCs and corporations to submit this report every year to remain in good standing. Missing an annual report deadline can lead to late fees, penalties, or suspension of your business status. Filing your annual report on time ensures your company stays compliant and legally active with the state.' },
                { q: 'What does a Registered Agent do for a business?', a: 'A Registered Agent is a designated individual or service responsible for receiving official legal documents and government notices on behalf of a business. These documents may include lawsuits, tax notifications, compliance reminders, and state correspondence. Most states legally require LLCs and corporations to maintain a registered agent with a physical address in the state of formation. Using a professional registered agent service helps ensure important documents are received promptly and that business owners never miss critical deadlines.' },
                { q: 'What is a Certificate of Good Standing and why would I need one?', a: "A Certificate of Good Standing is an official document issued by the state confirming that a business is properly registered and compliant with all state requirements. Many banks, lenders, investors, and government agencies require this certificate before approving loans, opening business bank accounts, or allowing a company to expand into another state. Maintaining good standing ensures your business can operate without restrictions and continue growing." },
                { q: 'What is Foreign Qualification and when does a business need it?', a: 'Foreign Qualification is the process of registering your business to operate legally in a state other than the one where it was originally formed. For example, if your LLC was created in Texas but you want to do business in California, you must register as a foreign entity in California. This filing allows your business to legally conduct operations, hire employees, and open locations in additional states while remaining compliant with state laws.' },
                { q: 'What is a Business Amendment and when should it be filed?', a: "A Business Amendment is a formal update filed with the state when important details about your company change. This can include changes to the business name, ownership structure, company address, or management information. Filing an amendment ensures your official business records remain accurate and compliant with state regulations. Keeping this information updated is important for legal protection, banking, and tax purposes." },
                { q: 'What is IRS Form 2553 and how does S-Corporation election work?', a: 'IRS Form 2553 is used by eligible businesses to elect S-Corporation tax status. By making an S-Corp election, a business can potentially reduce self-employment taxes while still maintaining the legal protections of an LLC or corporation. To qualify, the business must meet certain IRS requirements and submit the form within the required time frame. Many small business owners choose S-Corp taxation to optimize tax savings and improve financial efficiency.' },
                { q: 'What happens if my business falls out of good standing with the state?', a: "If a business fails to meet compliance requirements—such as filing annual reports or paying state fees—it may fall out of good standing. This can lead to penalties, loss of liability protection, and possible administrative dissolution by the state. In many cases, a business can restore its status through a reinstatement process, which involves filing overdue documents and paying any outstanding fees." },
                { q: 'Can I change my Registered Agent after forming my business?', a: 'Yes, businesses can change their registered agent at any time by filing a Change of Registered Agent form with the state. Companies often update their registered agent when they move, switch service providers, or want a professional service to handle legal notices and compliance reminders. Keeping an active registered agent on file is required in most states to maintain business compliance.' },
                { q: 'How do I dissolve or close a business legally?', a: "Business dissolution is the formal process of closing a company with the state where it was registered. This typically involves filing dissolution paperwork, paying outstanding taxes or fees, and notifying creditors and relevant agencies. Properly dissolving a business prevents future tax obligations, penalties, or compliance requirements and officially ends the company's legal existence." },
              ].map((faq, idx) => (
                <details key={idx} className="bm-faq bg-white rounded-2xl p-6 border-2 border-gray-100">
                  <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{faq.q}</span>
                    <svg
                      className="w-5 h-5 shrink-0 transition-transform"
                      style={{ color: '#0891b2' }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════ FINAL CTA ══════════════════════════ */}
        <section className="py-20 bm-cta-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              You Built Your Business to Grow — Not to Handle{' '}
              <span style={{ color: '#a5f3fc' }}>Paperwork.</span>
              <br />
              That's Where <span style={{ color: '#a5f3fc' }}>We Come In.</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,.85)' }}>
              Helping businesses stay organized, compliant, and in control is what we do best. Start with The Future Perfect Global LLC today and focus on growing your business while we handle the details.
            </p>
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="px-10 py-4 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-2xl"
              style={{ background: '#fff', color: '#0891b2' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#ecfeff')}
              onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
            >
              Start Your Free Trial Today
            </button>
          </div>
        </section>

        <GetStartedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedBusinessType={selectedBusinessType}
        />

        {/* VIDEO MODAL */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4" style={{ backdropFilter: 'blur(4px)' }}>
            <div className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 z-50 p-2 rounded-full transition-colors"
                style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.3)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.15)')}
              >
                <X size={20} />
              </button>
              <video controls autoPlay className="w-full h-full">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   ResourceCard sub-component (unchanged logic)
───────────────────────────────────────────── */
function ResourceCard(props: { image: any; title: any; link: any }) {
  return (
    <a
      href={props.link}
      className="bm-res-card group block bg-white rounded-3xl overflow-hidden shadow-sm"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-base font-semibold text-slate-900">{props.title}</h3>
        <span
          className="text-xl transition-colors"
          style={{ color: '#94a3b8' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#0891b2')}
          onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
        >
          ↗
        </span>
      </div>
    </a>
  );
}