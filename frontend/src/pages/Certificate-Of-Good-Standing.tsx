import {
  CheckCircle,
  Building2,
  DollarSign,
  Users,
  FileCheck,
  ShieldCheck,
  Clock,
  ChevronDown,
  Award,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import GetStartedModal from '../components/GetStartedModal';

/* ── Utility: colour last two words cyan ── */
function ColorHeading({ text, className }: { text: string; className?: string }) {
  const words = text.trim().split(' ');
  const last = words.slice(-2).join(' ');
  const rest = words.slice(0, -2).join(' ');
  return (
    <span className={className}>
      {rest && <>{rest} </>}
      <span className="text-cyan-600">{last}</span>
    </span>
  );
}

/* ── Scroll-triggered fade-in ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
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

export default function CertificateOfGoodStanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Expand into New Markets',
      description: 'Required documentation when you want to do business in other states or expand your operations across state lines.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: DollarSign,
      title: 'Secure Financing',
      description: 'Banks and lenders often require this certificate before approving business loans or credit lines for your company.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Establish Trust with Stakeholders',
      description: 'Show partners, investors, and clients that your business is compliant with all state legal requirements.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const scenarios = [
    { icon: Building2, title: 'State Governments', description: 'Required for foreign qualification when you want to register and operate your business in states other than where you originally formed.' },
    { icon: Briefcase, title: 'Lenders or Banks', description: 'Financial institutions need verification that your business is in good standing before approving loans or establishing business accounts.' },
    { icon: Users, title: 'Investors or Business Partners', description: 'Potential investors and partners want confirmation that your business is legitimate and compliant with state regulations.' },
    { icon: ShieldCheck, title: 'Business Licenses and Insurance', description: 'Certain professional licenses and insurance policies require proof of good standing before they can be issued.' }
  ];

  const features = [
    { icon: CheckCircle, title: 'Transparent Pricing', description: 'No subscriptions, no recurring fees, and completely transparent pricing. You only pay for what you need.' },
    { icon: DollarSign, title: 'Affordable Service', description: 'More affordable than our competitors while maintaining the highest quality of service and support.' },
    { icon: Clock, title: 'Fast & Friendly Service', description: 'Dedicated specialists who provide quick turnaround times with friendly, knowledgeable customer support.' },
    { icon: FileCheck, title: 'Digital Dashboard', description: 'Intuitive user dashboard with secure digital document storage, accessible anytime, anywhere.' }
  ];

  const faqs = [
    { question: 'What is a Certificate of Good Standing?', answer: 'A Certificate of Good Standing is an official document issued by the state confirming that your business is legally registered, compliant with state requirements, and authorized to operate.' },
    { question: 'Why do I need a Certificate of Good Standing?', answer: 'You may need it to open a business bank account, apply for loans, renew licenses, attract investors, register your business in another state, or complete major contracts.' },
    { question: 'How do I get a Certificate of Good Standing?', answer: 'You can request it from your Secretary of State office or use a professional filing service that submits the request on your behalf and ensures faster, error-free processing.' },
    { question: 'How long does it take to receive a Certificate of Good Standing?', answer: 'Processing time varies by state and method. Standard processing may take a few business days, while expedited processing is often available for an additional fee.' },
    { question: 'How much does a Certificate of Good Standing cost?', answer: 'Costs vary by state and typically range from $10 to $75, with additional fees for expedited processing or mailing certified paper copies.' },
    { question: 'Does a Certificate of Good Standing expire?', answer: 'The certificate itself does not technically expire, but most banks, lenders, and agencies require a document issued within the last 30–90 days.' },
    { question: 'What happens if my business is not in good standing?', answer: 'You may face penalties, loss of liability protection, inability to obtain financing, refusal of contracts, or administrative dissolution by the state.' },
    { question: 'How do I restore my business to good standing?', answer: 'You must file any missing annual reports, pay overdue fees or penalties, and resolve compliance issues with the Secretary of State before requesting the certificate.' },
    { question: 'Is a Certificate of Good Standing required to operate in another state?', answer: 'Yes, most states require it when filing for foreign qualification to legally expand or operate your business in an additional state.' },
    { question: 'Is a Certificate of Good Standing the same as a business license?', answer: 'No. A business license permits operation in a specific area, while a Certificate of Good Standing proves your business is compliant with state filing and tax requirements.' },
    { question: 'Can I get a Certificate of Good Standing online?', answer: 'In most states, yes. Many states offer online ordering, and professional filing services can also obtain digital or mailed certified copies for you.' },
    { question: 'Do LLCs and corporations both need Certificates of Good Standing?', answer: 'Yes. LLCs, corporations, and other registered entities may all be required to provide this document for banking, financing, licensing, or expansion purposes.' },
    { question: 'Is a Certificate of Good Standing required for business loans?', answer: 'Often yes. Banks and lenders commonly request it to verify that your business is active, compliant, and legally authorized to operate.' },
    { question: 'Do I need a Certificate of Good Standing for taxes?', answer: 'It is not required for filing taxes, but unresolved tax issues can prevent your business from being considered in good standing.' },
    { question: 'Can I use one Certificate of Good Standing in multiple states?', answer: 'Yes, but many states and institutions require a certificate issued within 30–90 days, so you may need updated copies for separate applications.' }
  ];

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <header className="relative py-16 flex items-center overflow-hidden bg-gray-950">

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Radial glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 75% 60% at 35% 50%, rgba(6,182,212,0.11) 0%, transparent 70%)',
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/3 left-1/5 w-72 h-72 rounded-full opacity-[0.08]" style={{
          background: 'radial-gradient(circle, #06b6d4, transparent 70%)',
          animation: 'orb1 9s ease-in-out infinite',
        }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.06]" style={{
          background: 'radial-gradient(circle, #0891b2, transparent 70%)',
          animation: 'orb2 12s ease-in-out infinite',
        }} />

        {/* Photo tint */}
        <div className="absolute inset-0 opacity-[0.05]">
          <img src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              {/* Badge */}
              <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(18px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67e8f9' }}>
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide">Official State Documentation</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1" style={{ animation: 'pulse 2s infinite' }} />
                </div>
              </div>

              {/* Heading */}
              <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(26px)', transition: 'opacity 0.75s ease 0.25s, transform 0.75s ease 0.25s' }}>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.07] tracking-tight mb-6">
                  <span style={{ color: '#f1f5f9' }}>How to Get a Certificate of</span>
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 60%, #0e7490 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Good Standing
                  </span>
                </h1>
              </div>

              {/* Subhead */}
              <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(22px)', transition: 'opacity 0.75s ease 0.4s, transform 0.75s ease 0.4s' }}>
                <p className="text-lg leading-relaxed mb-10" style={{ color: '#94a3b8' }}>
                  A Certificate of Good Standing confirms your business complies with state regulations. Get yours quickly and easily with expert assistance from The Future Perfect Global LLC.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.75s ease 0.52s, transform 0.75s ease 0.52s' }}>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow: '0 0 36px rgba(6,182,212,0.35)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 56px rgba(6,182,212,0.55)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(6,182,212,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', color: '#e2e8f0' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.13)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'; }}
                >
                  Learn More
                </a>
              </div>

              {/* Mini stats */}
              <div className="mt-12 flex gap-8"
                style={{ opacity: heroVisible ? 1 : 0, transition: 'opacity 0.75s ease 0.68s' }}>
                {[['500+', 'Clients Served'], ['All 50', 'States'], ['Since 2018', 'Experience']].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-xl font-black text-cyan-400">{val}</div>
                    <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: '#64748b' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image card */}
            <div className="hidden lg:block"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateX(0)' : 'translateX(30px)', transition: 'opacity 0.85s ease 0.45s, transform 0.85s ease 0.45s' }}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl opacity-20" style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }} />
                <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(6,182,212,0.25)' }}>
                  <img
                    src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Business compliance documentation"
                    className="w-full object-cover"
                    style={{ filter: 'brightness(0.88) saturate(1.1)' }}
                  />
                  {/* Floating badge on image */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4"
                    style={{ background: 'rgba(3,7,18,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(6,182,212,0.3)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(6,182,212,0.2)', border: '1px solid rgba(6,182,212,0.4)' }}>
                        <ShieldCheck className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Official State Document</div>
                        <div className="text-xs" style={{ color: '#94a3b8' }}>Issued by Secretary of State</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: heroVisible ? 1 : 0, transition: 'opacity 1s ease 1s', animation: heroVisible ? 'bounce 2s ease-in-out 1.5s infinite' : 'none' }}>
          <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'rgba(6,182,212,0.4)' }}>
            <div className="w-1 h-2 rounded-full bg-cyan-500" style={{ animation: 'scrolldot 2s ease-in-out infinite' }} />
          </div>
        </div>

        <style>{`
          @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(24px,-28px) scale(1.06)} 70%{transform:translate(-16px,18px) scale(0.96)} }
          @keyframes orb2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-28px,22px)} }
          @keyframes scrolldot { 0%,100%{opacity:1;transform:translateY(0)} 50%{opacity:0.3;transform:translateY(6px)} }
          @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        `}</style>
      </header>

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

      {/* ── BENEFITS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Why It Matters
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              <ColorHeading text="Easily Get Proof Your Business Is in Good Standing" />
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Demonstrate compliance and credibility in key business situations</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="group bg-white rounded-2xl border border-gray-100 hover:border-cyan-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      style={{ transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(6,182,212,0.25)', backdropFilter: 'blur(8px)', border: '1px solid rgba(6,182,212,0.4)' }}>
                      <benefit.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              When You Need It
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              <ColorHeading text="Common Situations That Require a Certificate of Good Standing" />
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Key situations where a Certificate of Good Standing is required</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <FadeIn key={index} delay={index * 80}>
                <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,#ecfeff,#cffafe)', border: '1px solid #a5f3fc' }}>
                    <scenario.icon className="w-7 h-7 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{scenario.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{scenario.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Our Advantage
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              <ColorHeading text="Expert Help to Reinstate Your Dissolved Business Quickly and Easily" />
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Experience the difference with our professional service</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 90}>
                <div className="group flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-cyan-200 bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,#ecfeff,#cffafe)', border: '1px solid #a5f3fc' }}>
                    <feature.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Common Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
              <ColorHeading text="Common Questions About Obtaining a Certificate of Good Standing" />
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={Math.min(index * 25, 280)}>
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${openFaq === index ? 'border-cyan-300 shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    style={{ background: openFaq === index ? '#f0fdfe' : '#fff' }}
                  >
                    <span className="text-base font-semibold text-slate-900 pr-6">{faq.question}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 bg-cyan-50/30">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.09) 0%, transparent 70%)' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67e8f9' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: 'pulse 2s infinite' }} />
              <span className="text-sm font-semibold">Ready to expand?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Ready To Take Your Business To{' '}
              <span className="text-cyan-400">The Next Level?</span>
            </h2>
            <p className="text-xl mb-10" style={{ color: '#94a3b8' }}>
              Start your business incorporation for $0 plus state fees
            </p>

            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow: '0 0 40px rgba(6,182,212,0.35)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(6,182,212,0.55)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(6,182,212,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
            >
              Incorporate Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-2 mt-10 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 text-white font-bold text-sm">4.7/5 on Trustpilot</span>
            </div>
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