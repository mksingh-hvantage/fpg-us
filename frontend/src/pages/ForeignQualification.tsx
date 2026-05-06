import { useState, useEffect, useRef } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, ChevronUp } from 'lucide-react';

function ColorHeading({ text, className }: { text: string; className?: string }) {
  const words = text.trim().split(' ');
  const lastTwo = words.slice(-2).join(' ');
  const rest = words.slice(0, -2).join(' ');
  return (
    <span className={className}>
      {rest && <>{rest} </>}
      <span className="text-cyan-600">{lastTwo}</span>
    </span>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ForeignQualification() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gray-950 py-16">

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            animation: 'float1 8s ease-in-out infinite',
          }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #0e7490 0%, transparent 70%)',
            animation: 'float2 11s ease-in-out infinite',
          }}
        />

        {/* Photo overlay */}
        <div className="absolute inset-0 opacity-[0.06]">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Badge */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-8"
              style={{ background: 'rgba(6,182,212,0.15)', color: '#67e8f9', border: '1px solid rgba(6,182,212,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" style={{ animation: 'pulse 2s infinite' }} />
              Multi-State Business Registration
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-8"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.75s ease 0.25s, transform 0.75s ease 0.25s',
            }}
          >
            <span style={{ color: '#f1f5f9' }}>Foreign Qualification</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Made Simple
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
            style={{
              color: '#94a3b8',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.75s ease 0.4s, transform 0.75s ease 0.4s',
            }}
          >
            Easily register your LLC or corporation to do business in another state. The Future Perfect Global LLC handles state filings, certificate of authority applications, compliance requirements, and registered agent support—so you can expand quickly, legally, and without hassle.
          </p>

          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
              transition: 'opacity 0.75s ease 0.55s, transform 0.75s ease 0.55s',
            }}
          >
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                color: '#fff',
                boxShadow: '0 0 40px rgba(6,182,212,0.35)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 60px rgba(6,182,212,0.55)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(6,182,212,0.35)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
              }}
            >
              Get Started Now
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 0.75s ease 0.7s',
            }}
          >
            {[['500+', 'Clients Served'], ['All 50', 'States Covered'], ['2018', 'Est. Year']].map(([val, label]) => (
              <div key={label} className="text-center" style={{ borderRight: '1px solid rgba(6,182,212,0.2)' }}>
                <div className="text-2xl font-black text-cyan-400">{val}</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: '#64748b' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 1s ease 1s',
            animation: heroVisible ? 'bounce 2s ease-in-out 1.5s infinite' : 'none',
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'rgba(6,182,212,0.4)' }}>
            <div className="w-1 h-2 rounded-full bg-cyan-500" style={{ animation: 'scroll-dot 2s ease-in-out infinite' }} />
          </div>
        </div>

        <style>{`
          @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(20px,-30px) scale(1.05); } 66% { transform: translate(-15px,20px) scale(0.97); } }
          @keyframes float2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-25px,25px); } }
          @keyframes scroll-dot { 0%,100% { opacity:1; transform:translateY(0); } 50% { opacity:0.3; transform:translateY(6px); } }
          @keyframes bounce { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(-8px); } }
          @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        `}</style>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-5 border-y border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-gray-500">
            {['Serving Businesses Since 2018', 'Bootstrapped & Founder-Led', 'Independently Owned', '500+ Entrepreneurs Worldwide'].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNDERSTANDING ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-5 bg-cyan-600" />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80"
                alt="Foreign Qualification"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-black">50+</div>
                <div className="text-xs font-semibold uppercase tracking-wider opacity-90">States Covered</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200">
                What It Means
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                <ColorHeading text="Understanding Foreign Qualification" />
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Foreign Qualification is the legal process that allows your business to operate in a state other than the one where it was originally formed. While your company is considered <strong className="text-gray-800">"domestic"</strong> in its home state, it becomes <strong className="text-gray-800">"foreign"</strong> in any additional state where you conduct business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By completing the Foreign Qualification filing, your business receives official authorization—typically a <strong className="text-gray-800">Certificate of Authority</strong>—ensuring you can legally operate, hire employees, open offices, and enter contracts while staying fully compliant.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              What You Need
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <ColorHeading text="Requirements for Foreign Qualification" />
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              To receive a <strong className="text-gray-700">Certificate of Authority</strong>, your business must meet certain state requirements before legally operating in another state.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'File the Required State Documents',
                  desc: 'Submit the official foreign qualification application to the Secretary of State in the state where you plan to operate, including any required registration forms and state filing fees.',
                  color: 'from-cyan-500 to-teal-500',
                },
                {
                  step: '02',
                  title: 'Provide a Certificate of Good Standing',
                  desc: 'Most states require proof that your business is legally compliant in its home state. This document verifies that your company is active and in good standing.',
                  color: 'from-teal-500 to-emerald-500',
                },
                {
                  step: '03',
                  title: 'Appoint a Registered Agent',
                  desc: 'Businesses must designate a registered agent in the new state to receive legal notices, compliance documents, and official government correspondence.',
                  color: 'from-blue-500 to-cyan-500',
                },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 120}>
                  <div className="flex gap-6 group">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl opacity-60" />
                <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-cyan-100">
                  <img
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80"
                    alt="Certificate of Good Standing"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Our Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <ColorHeading text="Why Choose Our Foreign Qualification Service" />
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Our platform simplifies multi-state business registration by handling compliance, paperwork, and ongoing monitoring so you can expand with confidence.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Compliance Made Simple', desc: 'Nationwide Registered Agent services ensure your business stays compliant across all states where you operate.', accent: 'border-t-cyan-500' },
              { icon: '⚙️', title: 'All-in-One Business Tools', desc: 'Manage filings, documents, and state requirements through a centralized dashboard designed for growing businesses.', accent: 'border-t-teal-500' },
              { icon: '📂', title: 'Stay Organized', desc: 'Track deadlines, filings, and compliance requirements in one place to avoid missed reports or penalties.', accent: 'border-t-blue-500' },
              { icon: '🔔', title: 'Lifetime Compliance Alerts', desc: 'Receive automatic notifications about important state deadlines and legal requirements.', accent: 'border-t-indigo-500' },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 ${item.accent} h-full`}>
                  <div className="text-5xl mb-5">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              The Process
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <ColorHeading text="How to Get Foreign Qualification" />
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔎', title: 'Business Name Search', desc: 'We verify that your business name is available in the new state registry. If a conflict exists, we help you register a fictitious or assumed name so your business can operate legally.' },
              { icon: '👤', title: 'Registered Agent Selection', desc: 'Every state requires a Registered Agent to receive legal notices and compliance documents. We provide reliable nationwide Registered Agent services.' },
              { icon: '📄', title: 'File Certificate of Authority', desc: 'Our team prepares and files the necessary state documents and submits your Certificate of Good Standing to obtain the official Certificate of Authority.' },
              { icon: '🔔', title: 'Compliance Monitoring', desc: 'Stay compliant with ongoing alerts and reminders for important state deadlines, filings, and federal BOIR reporting requirements.' },
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="group flex gap-6 bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">{step.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE OF AUTHORITY ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-[0.04] bg-cyan-600" />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <img src="https://images.unsplash.com/photo-1614107151491-6876eecbff89?q=80" alt="Certificate of Authority" className="w-full rounded-xl" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200">
                Official Authorization
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                <ColorHeading text="What Is a Certificate of Authority" />
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Certificate of Authority is an official document issued by a state government that allows a business formed in another state to legally operate within its jurisdiction. Without this authorization, a company may face penalties, restrictions, or limitations.
              </p>
              <ul className="space-y-3">
                {[
                  'Legally conduct business activities in states outside your home state.',
                  'Maintain eligibility for business financing, licenses, and contracts.',
                  'Reduce the risk of fines, penalties, and compliance violations.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DO YOU NEED IT ── */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200">
                Check Your Needs
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                <ColorHeading text="Do You Need Foreign Qualification" />
              </h2>
              <p className="text-lg text-gray-600">
                Businesses expanding beyond their original state of formation may need to register as a foreign entity. This ensures the company remains compliant with local laws and regulations.
              </p>
              <ul className="space-y-3">
                {[
                  'Operating a physical office, store, warehouse, or branch in another state.',
                  'Hiring employees or maintaining a workforce located in a different state.',
                  'Entering long-term contracts or conducting frequent business transactions across state lines.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 leading-relaxed">
                If your business meets any of these conditions, completing foreign qualification helps protect your company, maintain compliance, and support smooth expansion into new markets.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl opacity-50" />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-cyan-100">
                <img src="https://images.unsplash.com/photo-1623607526795-e9c0cd3c273c?q=80" alt="Foreign Qualification" className="w-full rounded-xl" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── AFTER QUALIFICATION ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Next Steps
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <ColorHeading text="After Obtaining Foreign Qualification" />
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Once you receive your Certificate of Authority, these important steps ensure continued compliance.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🛡️', title: 'Update Insurance', desc: 'Extend coverage to all operating states' },
              { icon: '📚', title: 'Multi-State Books', desc: 'Implement bookkeeping and tax compliance for each state' },
              { icon: '📋', title: 'Licenses & Permits', desc: 'Secure or renew business licenses in new states' },
              { icon: '📍', title: 'Business Listings', desc: 'Update Google My Business, Yelp, and directories' },
              { icon: '📬', title: 'Virtual Address', desc: 'Obtain mailbox or virtual address if needed' },
              { icon: '👨‍💼', title: 'Registered Agent', desc: 'Maintain agent service in each state' },
              { icon: '📊', title: 'Annual Reports', desc: 'File required reports in all operating states' },
              { icon: '📝', title: 'Update Contracts', desc: 'Revise agreements for state-specific laws' },
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Common Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              <ColorHeading text="Frequently Asked Questions About Foreign Qualification" />
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {[
              { q: 'What is foreign qualification for an LLC or corporation?', a: 'Foreign qualification is the legal process that allows an existing business to operate in a state other than where it was originally formed. It does not create a new company—it simply registers your existing entity to do business in another state.' },
              { q: 'How is foreign qualification different from forming a new business?', a: 'Foreign qualification expands your existing business into another state, while forming a new business creates a separate legal entity. Foreign qualification preserves your EIN, ownership structure, and company history.' },
              { q: 'When is a business considered "doing business" in another state?', a: 'A business is typically considered doing business if it has a physical office, warehouse, employees, contractors, or regularly meets clients in another state. Each state defines this differently, so requirements vary.' },
              { q: 'Do online businesses need foreign qualification?', a: 'Most online-only businesses do not need foreign qualification unless they have a physical presence such as inventory storage, employees, or fulfillment centers in another state.' },
              { q: 'What happens if I don\'t foreign qualify when required?', a: 'Failing to foreign qualify can result in fines, back taxes, loss of legal rights to sue in that state, and penalties that accumulate over time.' },
              { q: 'How long does the foreign qualification process take?', a: 'Processing times vary by state but generally range from 1 to 6 weeks. Expedited filing options are available in many states for an additional fee.' },
              { q: 'How much does foreign qualification cost?', a: 'Costs vary by state and typically include state filing fees plus service fees. Pricing depends on the state\'s requirements and whether expedited processing is selected.' },
              { q: 'Do I need a registered agent in the foreign state?', a: 'Yes. Every state requires a registered agent with a physical address in that state to receive legal documents and government notices on your behalf.' },
              { q: 'Can I use the same business name in every state?', a: 'Not always. If your business name is unavailable in the new state, you may need to register a DBA (Doing Business As) name. We verify name availability before filing.' },
              { q: 'Will my EIN change after foreign qualification?', a: 'No. Your EIN remains the same because foreign qualification does not create a new entity—it only registers your existing business in another state.' },
              { q: 'Do I need foreign qualification in every state I sell to?', a: 'No. Selling to customers in another state does not automatically require foreign qualification. Physical presence or operational activity typically triggers the requirement.' },
              { q: 'Is foreign qualification required before hiring employees?', a: 'Yes. Most states require foreign qualification before hiring employees or opening payroll in that state.' },
              { q: 'Can I foreign qualify in multiple states at once?', a: 'Yes. You can register your business in multiple states simultaneously. Each state requires a separate filing and registered agent.' },
              { q: 'What documents are needed for foreign qualification?', a: 'Required documents typically include a Certificate of Good Standing from your home state, formation documents, and registered agent information.' },
              { q: 'Does foreign qualification affect taxes?', a: 'Foreign qualification may create tax obligations in the new state, including income, sales, or payroll taxes. It\'s recommended to consult a tax professional.' },
            ].map((faq, idx) => (
              <FadeIn key={idx} delay={Math.min(idx * 30, 300)}>
                <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-cyan-300 shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left"
                    style={{ background: openFaq === idx ? '#f0fdfe' : '#fff' }}
                  >
                    <span className="text-base font-bold text-gray-900 pr-6">{faq.q}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {openFaq === idx
                        ? <ChevronUp className="w-4 h-4" />
                        : <ChevronDown className="w-4 h-4" />
                      }
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 bg-cyan-50/30">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to <span className="text-cyan-400">Expand Your Business?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Get expert help with foreign qualification and ensure your multi-state compliance today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="tel:18584952549"
                className="flex items-center gap-3 text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-600/20 border border-cyan-600/40 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +858-952-4549
              </a>
            </div>

            <p className="text-gray-500 mb-10 text-sm">Monday – Friday, 9 AM – 6 PM CST</p>

            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 text-white font-bold text-sm">4.7/5 on Trustpilot</span>
            </div>

            <p className="text-sm text-gray-500">
              Learn more at{' '}
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
                The Future Perfect Global LLC-FZ
              </a>
            </p>
          </FadeIn>
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