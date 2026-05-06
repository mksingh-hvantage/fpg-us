import { CheckCircle2, FileText, Users, DollarSign, ClipboardCheck, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// ── Helper: wraps the last two words of a string in cyan ─────────────────────
function CyanTail({ text }: { text: string }) {
  const words = text.trim().split(' ');
  if (words.length <= 2) {
    return <span className="text-cyan-600">{text}</span>;
  }
  const head = words.slice(0, words.length - 2).join(' ');
  const tail = words.slice(-2).join(' ');
  return (
    <>
      {head}{' '}
      <span className="text-cyan-600">{tail}</span>
    </>
  );
}

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

// ── Intersection observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Particle dots for hero bg ─────────────────────────────────────────────────
function Particles() {
  const dots = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    dur: Math.random() * 4 + 4,
  }));
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {dots.map(d => (
        <circle key={d.id} cx={`${d.cx}%`} cy={`${d.cy}%`} r={d.r} fill="rgba(6,182,212,0.35)">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${d.dur}s`} begin={`${d.delay}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${d.cy}%;${d.cy - 3}%;${d.cy}%`} dur={`${d.dur}s`} begin={`${d.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export default function Dissolution() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const statsRef = useInView();
  const count500 = useCountUp(500, 1600, statsRef.inView);
  const count98 = useCountUp(98, 1400, statsRef.inView);
  const count2018 = useCountUp(2018, 1200, statsRef.inView);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    {
      icon: Users,
      title: "Approve the LLC Dissolution",
      desc: "The first step in the LLC dissolution process is obtaining approval from the company members. Most LLC operating agreements require a formal vote before the business can be closed.",
      points: [
        "Hold a member meeting and conduct a formal vote to approve dissolving the LLC.",
        "Follow the procedures defined in your LLC operating agreement.",
        "Record the decision in official meeting minutes or a written resolution for legal documentation."
      ]
    },
    {
      icon: FileText,
      title: "File Articles of Dissolution with the State",
      desc: "To legally close an LLC, you must file Articles of Dissolution with the Secretary of State where the company was registered.",
      points: [
        "Complete the Articles of Dissolution or Certificate of Dissolution form.",
        "Submit the form online, by mail, or in person depending on state requirements.",
        "Pay the required state filing fee, typically ranging between $20 and $200."
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Complete the LLC Winding-Up Process",
      desc: "After filing dissolution documents, the business must complete the winding-up process by closing financial and legal obligations.",
      points: [
        "Pay all outstanding debts, loans, and vendor invoices.",
        "Distribute remaining company assets among LLC members according to ownership shares.",
        "File final federal and state tax returns and prepare a final accounting report."
      ]
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">

        {/* animated grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

        {/* particles */}
        <Particles />

        {/* photo overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />

        {/* floating badge top-right */}
        <div className={`absolute top-10 right-10 hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-white transition-all duration-700 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <Shield className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-semibold">State-Compliant Filing</span>
        </div>

        {/* content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* left */}
          <div>
            {/* eyebrow pill */}
            <div className={`inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8 transition-all duration-600 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wide uppercase">Official Dissolution Service</span>
            </div>

            <h1 className={`text-5xl lg:text-6xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              How to Dissolve an LLC{' '}
              <span className="relative inline-block">
                <span className="text-cyan-400">the Right Way</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9 C80 3, 220 3, 298 9" stroke="rgba(6,182,212,0.5)" strokeWidth="3" strokeLinecap="round"
                    style={{ strokeDasharray: 320, strokeDashoffset: heroVisible ? 0 : 320, transition: 'stroke-dashoffset 1s ease 0.6s' }} />
                </svg>
              </span>
            </h1>

            <p className={`text-lg text-slate-300 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Learn the complete <strong className="text-white">LLC dissolution process</strong> and how to legally <strong className="text-white">close an LLC or corporation</strong> while staying compliant with state requirements. Avoid penalties and properly file your <strong className="text-white">Articles of Dissolution</strong>.
            </p>

            {/* CTA buttons */}
            <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:scale-105 flex items-center gap-2"
              >
                Order Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* trust signals */}
            <div className={`flex flex-wrap gap-6 transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: Star, label: '500+ Clients Served' },
                { icon: Clock, label: 'Fast Turnaround' },
                { icon: Shield, label: 'State Compliant' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right – floating card stack */}
          <div className={`hidden lg:flex flex-col gap-4 transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {[
              { step: '01', title: 'Approve Dissolution', sub: 'Member vote & operating agreement', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', icon: Users },
              { step: '02', title: 'File with State', sub: 'Articles of Dissolution submitted', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', icon: FileText },
              { step: '03', title: 'Wind Up Business', sub: 'Settle debts & distribute assets', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', icon: ClipboardCheck },
            ].map(({ step, title, sub, color, border, icon: Icon }, i) => (
              <div
                key={step}
                className={`flex items-center gap-5 bg-gradient-to-r ${color} backdrop-blur-md border ${border} rounded-2xl p-5 transition-all duration-500`}
                style={{ transitionDelay: `${500 + i * 100}ms`, transform: heroVisible ? 'translateX(0)' : 'translateX(30px)', opacity: heroVisible ? 1 : 0 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Step {step}</div>
                  <div className="text-white font-bold">{title}</div>
                  <div className="text-slate-400 text-sm">{sub}</div>
                </div>
                <div className="ml-auto">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            ))}

            {/* filing fee badge */}
            <div className="mt-2 flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-black text-xl">$20 – $200</div>
                <div className="text-slate-400 text-sm">State filing fee (varies by state)</div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── LEARN MORE ────────────────────────────────────────────────────── */}
      <section id="learn-more" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-5xl mx-auto mb-20">
            <span className="inline-block bg-cyan-50 text-cyan-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">What You Need to Know</span>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              <CyanTail text="LLC Dissolution: How to Properly Close Your Business" />
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              If you're planning to <strong>dissolve an LLC</strong> or permanently close your business, it's important to follow the correct <strong>LLC dissolution process</strong>. Properly shutting down your company helps you stay compliant with state regulations and avoid future legal liabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {[
                {
                  number: '1',
                  title: 'Approve the Decision to Dissolve the LLC',
                  desc: 'Start by holding a meeting with LLC members or directors to approve the decision to close the company according to the operating agreement and state business laws.',
                  gradient: 'from-cyan-500 to-cyan-600',
                  light: 'bg-cyan-50 border-cyan-100'
                },
                {
                  number: '2',
                  title: 'Pay Debts and Settle Financial Obligations',
                  desc: 'Before closing your business, ensure that all outstanding debts, taxes, and financial obligations are paid. Proper settlement protects you from future claims and penalties.',
                  gradient: 'from-emerald-500 to-emerald-600',
                  light: 'bg-emerald-50 border-emerald-100'
                },
                {
                  number: '3',
                  title: 'File Articles of Dissolution and Cancel Licenses',
                  desc: 'Submit the required Articles of Dissolution to your state authority and cancel any business permits, licenses, and registrations to officially complete the LLC dissolution process.',
                  gradient: 'from-amber-500 to-amber-600',
                  light: 'bg-amber-50 border-amber-100'
                }
              ].map((step, idx) => (
                <div key={idx} className={`flex items-start gap-5 ${step.light} border-2 p-6 rounded-2xl hover:shadow-md transition-all group`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-xl font-black flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1.5">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl -z-10" />
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="LLC dissolution process and closing a business legally"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900">100% Compliant</div>
                  <div className="text-xs text-gray-500">State-verified process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────────────── */}
      <div ref={statsRef.ref} className="bg-gradient-to-r from-cyan-600 to-cyan-500 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: count500, suffix: '+', label: 'Entrepreneurs Served' },
              { val: count98, suffix: '%', label: 'Client Satisfaction' },
              { val: count2018, suffix: '', label: 'Serving Since' },
              { val: null, suffix: '', label: 'Founder-Led & Independent', special: true },
            ].map(({ val, suffix, label, special }, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-4xl font-black mb-1">
                  {special ? '🤝' : `${val}${suffix}`}
                </div>
                <div className="text-cyan-100 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DISSOLUTION vs TERMINATION ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="inline-block bg-slate-100 text-slate-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Key Concepts</span>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <CyanTail text="LLC Dissolution vs. LLC Termination: Key Differences Explained" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When closing a business, it's important to understand the difference between <strong>dissolving an LLC</strong> and officially <strong>terminating an LLC</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: 'LLC Dissolution',
                gradient: 'from-cyan-500 to-blue-600',
                bg: 'from-cyan-50 to-blue-50',
                border: 'border-cyan-200',
                body: 'LLC dissolution is the official process of beginning to close a limited liability company. During this stage, business owners must wind up company operations, pay outstanding debts, notify creditors, cancel licenses, and file Articles of Dissolution with the state.'
              },
              {
                icon: CheckCircle2,
                title: 'LLC Termination',
                gradient: 'from-emerald-500 to-teal-600',
                bg: 'from-emerald-50 to-teal-50',
                border: 'border-emerald-200',
                body: 'LLC termination is the final legal step after the dissolution process is completed. At this stage, the company is officially removed from state records and no longer exists as a legal business entity. Proper termination protects members from future taxes, compliance requirements, or legal obligations.'
              }
            ].map(({ icon: Icon, title, gradient, bg, border, body }) => (
              <div key={title} className={`bg-gradient-to-br ${bg} border-2 ${border} rounded-3xl p-10 shadow-md hover:shadow-xl transition-all group`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP BY STEP ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-5xl mx-auto mb-20">
            <span className="inline-block bg-cyan-50 text-cyan-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">The Full Process</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              <CyanTail text="How to Dissolve an LLC: Step-by-Step Process" />
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Closing a business requires following the correct <strong>LLC dissolution process</strong>. From member approval to filing official documents and completing the <strong>winding-up process</strong>, each step ensures your company is legally closed and free from future liabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-md hover:shadow-xl hover:border-cyan-200 transition-all group"
              >
                {/* step number watermark */}
                <div className="absolute top-4 right-5 text-7xl font-black text-gray-50 select-none group-hover:text-cyan-50 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="bg-cyan-100 p-4 rounded-2xl group-hover:bg-cyan-500 transition-colors">
                    <step.icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{step.title}</h3>
                <p className="text-gray-500 text-center mb-6 text-sm leading-relaxed">{step.desc}</p>

                <ul className="space-y-3 text-sm">
                  {step.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COST ANALYSIS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Transparent Pricing</span>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <CyanTail text="Cost Analysis" />
            </h2>
            <p className="text-xl text-gray-600">Understanding the expenses involved in dissolving your LLC</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* top band */}
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-10 py-6 flex items-center gap-5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-black text-white">$20 – $200</div>
                <div className="text-cyan-100 font-medium">State Filing Fees</div>
              </div>
            </div>

            <div className="p-10">
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Filing fees vary by state. We'll provide exact fees for your location. Additional costs may include professional legal or accounting services if needed for complex situations.
              </p>

              <div className="border-t border-slate-700 pt-10">
                <h3 className="text-2xl font-bold text-white text-center mb-8">What's Included in Our Service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Prepare Articles of Dissolution',
                    'Review operating agreement requirements',
                    'File with Secretary of State',
                    'Final tax return checklist',
                    'Asset distribution guidance',
                    'Debt settlement procedures'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL CONSIDERATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-50 text-cyan-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Don't Overlook These</span>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <CyanTail text="Additional Considerations" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important steps to complete during the dissolution process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardCheck,
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
                hoverBorder: 'hover:border-blue-200',
                title: 'Canceling Licenses and Permits',
                body: 'Your business must cancel state and local licenses, sales tax permits, and industry-specific credentials to avoid future liabilities.'
              },
              {
                icon: Users,
                iconBg: 'bg-emerald-100',
                iconColor: 'text-emerald-600',
                hoverBorder: 'hover:border-emerald-200',
                title: 'Notifying Creditors and Stakeholders',
                body: 'Informing creditors, customers, and other parties about dissolution maintains relationships and ensures smooth winding-up.'
              },
              {
                icon: FileText,
                iconBg: 'bg-amber-100',
                iconColor: 'text-amber-600',
                hoverBorder: 'hover:border-amber-200',
                title: 'Record-Keeping Requirements',
                body: 'Maintaining dissolution documentation, final tax returns, and accounting records for several years is recommended.'
              }
            ].map(({ icon: Icon, iconBg, iconColor, hoverBorder, title, body }) => (
              <div key={title} className={`bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100 ${hoverBorder} hover:shadow-xl transition-all group`}>
                <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <CyanTail text="Frequently Asked Questions" />
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What distinguishes dissolving from terminating an LLC?',
                a: 'Dissolution is the process of formally closing the LLC, which includes winding up its affairs, settling debts, and distributing remaining assets. Termination is the final step after dissolution, where the LLC ceases to exist as a legal entity. Both steps are necessary to prevent member liability.'
              },
              {
                q: 'How do you close an LLC?',
                a: "To close an LLC, you must first hold a meeting and vote to dissolve according to your operating agreement. Then file Articles of Dissolution with your Secretary of State. Finally, wind up the LLC's affairs by settling debts, distributing assets, filing final tax returns, and canceling licenses and permits."
              },
              {
                q: 'Must I notify the IRS when closing my business?',
                a: 'Yes, you must notify the IRS by filing final federal tax returns using Form 1065 (partnership), Form 1120 (C corporation), or Form 1120S (S corporation), depending on your tax classification. Be sure to check the "final return" box on these forms. Your EIN will be marked as closed but remains assigned to your dissolved business.'
              },
              {
                q: 'What are the costs associated with LLC dissolution?',
                a: 'State filing fees for Articles of Dissolution typically range from $20 to $200, depending on your state. Additional costs may include professional legal or accounting services if your situation is complex, such as when dealing with significant assets, debts, or multiple stakeholders.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all group overflow-hidden">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center p-7 gap-4">
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-cyan-100 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="px-7 pb-7 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-5">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
        <Particles />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wide uppercase">Get Started Today</span>
          </div>

          <h2 className="text-5xl font-black text-white mb-6">
            Simplify Your <span className="text-cyan-400">Business Exit</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let us handle the paperwork and guide you through the entire dissolution process. Ensure compliance, avoid future liabilities, and close your company with confidence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 flex items-center gap-3"
            >
              Start Your Dissolution
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            {['No hidden fees', 'Fast processing', 'State compliant'].map(t => (
              <div key={t} className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}