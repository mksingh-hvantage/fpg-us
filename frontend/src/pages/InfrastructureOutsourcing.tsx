import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Users,
  BarChart3,
  MessageSquare,
  Layers,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef, type JSX } from 'react';

// Splits heading text and colors last two words with cyan-600
function ColoredHeading({
  text,
  tag = 'h2',
  className = '',
}: {
  text: string;
  tag?: string;
  className?: string;
}) {
  const words = text.trim().split(' ');
  const lastTwo = words.slice(-2).join(' ');
  const rest = words.slice(0, -2).join(' ');
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag className={className}>
      {rest}{rest ? ' ' : ''}
      <span className="text-cyan-600">{lastTwo}</span>
    </Tag>
  );
}

// Animated counter hook
function useCountUp(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function InfrastructureOutsourcing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const statsRef = useInView();

  const projects  = useCountUp(300, 1800, statsRef.inView);
  const adoption  = useCountUp(95,  1800, statsRef.inView);
  const faster    = useCountUp(40,  1800, statsRef.inView);
  const countries = useCountUp(30,  1800, statsRef.inView);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    "Resistance to organizational change from employees and stakeholders.",
    "Lack of structured change management processes and frameworks.",
    "Poor communication during transformation initiatives.",
    "Low adoption rates of new systems and technologies.",
    "Difficulty in aligning people, processes, and business goals.",
  ];

  const services = [
    { icon: Layers,        text: "End-to-end change management strategy and implementation." },
    { icon: MessageSquare, text: "Stakeholder engagement and communication planning." },
    { icon: Users,         text: "Training and development programs for smooth transition." },
    { icon: Target,        text: "Organizational transformation and process optimization." },
    { icon: BarChart3,     text: "Change impact analysis and performance tracking." },
  ];

  const benefits = [
    { icon: Users,         title: "Higher Adoption",         desc: "Structured engagement programs that drive genuine buy-in from every level of the organization." },
    { icon: TrendingUp,    title: "Faster Transformation",   desc: "Agile frameworks that compress timelines and deliver measurable outcomes quicker." },
    { icon: MessageSquare, title: "Reduced Resistance",      desc: "Proactive communication strategies that convert skeptics into advocates early." },
    { icon: BarChart3,     title: "Better Productivity",     desc: "Seamless transitions that keep daily operations running at full capacity throughout change." },
    { icon: Target,        title: "Goal Alignment",          desc: "Crystal-clear roadmaps that connect workforce actions directly to business objectives." },
    { icon: Layers,        title: "Risk Mitigation",         desc: "Comprehensive impact analysis and contingency planning to eliminate costly surprises." },
  ];

  const faqs = [
    { q: "What is Change Management Outsourcing?",           a: "Change management outsourcing involves partnering with experts to plan, execute, and manage organizational changes such as digital transformation, process upgrades, or structural shifts. It ensures smooth transitions with minimal disruption to operations." },
    { q: "Why is change management important for businesses?", a: "Effective change management helps organizations adapt to evolving market conditions, adopt new technologies, and improve operational efficiency while ensuring employees are aligned and engaged throughout the transformation process." },
    { q: "Who can benefit from change management outsourcing?", a: "Enterprises, startups, IT companies, financial institutions, and organizations undergoing digital transformation, mergers, or restructuring can significantly benefit from outsourced change management services." },
    { q: "How does outsourcing improve change adoption?",    a: "Outsourcing providers bring structured frameworks, communication strategies, and training programs that help employees understand, accept, and adopt new processes faster and more effectively." },
    { q: "What services are included in change management outsourcing?", a: "Services include strategy development, stakeholder communication, training programs, process redesign, impact analysis, and continuous monitoring of change initiatives." },
    { q: "How does change management reduce business risks?", a: "By proactively identifying risks, preparing mitigation strategies, and ensuring proper communication, change management minimizes disruptions, errors, and resistance during transformation." },
    { q: "Can change management outsourcing support digital transformation?", a: "Yes, it plays a critical role in digital transformation by helping organizations implement new technologies, train employees, and ensure seamless adoption across departments." },
    { q: "How do you measure the success of change management initiatives?", a: "Success is measured through KPIs such as employee adoption rates, productivity improvements, reduced resistance, faster implementation timelines, and overall business performance." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center overflow-hidden">

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Ambient blobs */}
        <div className="absolute top-24 right-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 left-8  w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/2  left-1/3 w-64 h-64 bg-cyan-400/5  rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.4s' }} />

        {/* Orbiting decoration — right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[680px] h-[680px] pointer-events-none hidden lg:block">
          <div className="absolute inset-0  rounded-full border border-cyan-500/10 animate-spin" style={{ animationDuration: '32s' }} />
          <div className="absolute inset-12 rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
          <div className="absolute inset-24 rounded-full border border-slate-400/10 animate-spin" style={{ animationDuration: '16s' }} />

          {['Structured Frameworks', 'Stakeholder Buy-in', 'Zero Disruption', 'KPI Tracking', 'Agile Delivery', 'People-First'].map((label, i) => {
            const r = 295;
            const rad = ((i * 60) * Math.PI) / 180;
            return (
              <div
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-3 py-1 text-xs text-cyan-300 whitespace-nowrap"
                style={{ left: 340 + r * Math.cos(rad), top: 340 + r * Math.sin(rad) }}
              >
                {label}
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left — copy */}
          <div>
            <span
              className={`inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <Cloud className="mr-2 h-4 w-4" />
              Change Management Outsourcing
            </span>

            <h1
              className={`text-5xl lg:text-6xl font-extrabold leading-tight transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Change Management for{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                  Business Transformation
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
              </span>
            </h1>

            <p
              className={`mt-6 text-lg text-slate-300 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Drive successful organizational change with expert-led outsourcing solutions designed to improve adoption, reduce resistance, and accelerate transformation.
            </p>

            <p
              className={`mt-4 text-base text-slate-400 max-w-xl transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Our change management outsourcing services help businesses implement new processes, technologies, and strategies smoothly — ensuring employee alignment, improved productivity, and long-term success.
            </p>

            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="group relative bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl text-slate-900 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <a
                href="#services"
                className="border border-white/20 hover:border-cyan-400/50 px-8 py-4 rounded-2xl text-white hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 font-semibold"
              >
                Explore Services
              </a>
            </div>

            {/* Trust badges */}
            <div
              className={`mt-10 flex items-center gap-6 transition-all duration-700 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {['Prosci Certified', 'ISO 9001', 'ADKAR Model'].map(b => (
                <div key={b} className="flex items-center gap-1.5 text-sm text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right — image + floating chips */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Change Management"
                className="w-full object-cover h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-4 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <p className="text-xs text-slate-300">Avg. Adoption Rate</p>
              <p className="text-2xl font-extrabold text-cyan-400">95%</p>
            </div>

            <div className="absolute -bottom-4 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <p className="text-xs text-slate-300">Faster Delivery</p>
              <p className="text-2xl font-extrabold text-cyan-400">40%</p>
            </div>

            <div className="absolute top-1/2 -right-8 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-white font-semibold">Active Rollout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-10">
        <div ref={statsRef.ref} className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: `${projects}+`, label: 'Change Projects' },
            { value: `${adoption}%`,  label: 'Avg. Adoption Rate' },
            { value: `${faster}%`,    label: 'Faster Delivery' },
            { value: `${countries}+`, label: 'Countries Served' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl font-extrabold">{s.value}</span>
              <span className="mt-1 text-cyan-100 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-3xl shadow-xl object-cover h-[460px] w-full"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-slate-200/60" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-100 rounded-2xl -z-10" />
          <div className="absolute -top-4  -left-4  w-16 h-16 bg-slate-100 rounded-2xl -z-10" />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-4">Why Outsource?</span>
          <ColoredHeading
            text="End-to-End Change Management Solutions"
            className="text-3xl font-extrabold leading-snug"
          />

          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Change management outsourcing enables organizations to successfully implement transformation initiatives while minimizing disruption and maximizing efficiency.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We provide structured frameworks, strategic planning, and execution support to ensure seamless adoption of new processes, systems, and business models.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3">
            {[
              "Structured change management frameworks",
              "Effective communication strategies",
              "Employee training and engagement",
              "Data-driven performance tracking",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-50 transition-colors group">
                <div className="h-8 w-8 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-200 transition-colors shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGES + SERVICES ── */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">What We Address</span>
            <ColoredHeading
              text="Challenges We Solve, Services We Deliver"
              className="text-4xl font-extrabold"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-red-50 px-8 py-5 border-b border-red-100">
                <h3 className="text-xl font-extrabold text-slate-800">Common Challenges</h3>
                <p className="text-sm text-slate-500 mt-1">Pain points we eliminate</p>
              </div>
              <div className="p-8 space-y-4">
                {challenges.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-200 transition-colors">
                      <span className="text-xs font-bold text-red-600">{i + 1}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-cyan-50 px-8 py-5 border-b border-cyan-100">
                <h3 className="text-xl font-extrabold text-slate-800">Our Services</h3>
                <p className="text-sm text-slate-500 mt-1">Solutions we provide</p>
              </div>
              <div className="p-8 space-y-4">
                {services.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex gap-4 items-start group hover:bg-cyan-50/50 p-2 -mx-2 rounded-xl transition-colors">
                    <div className="mt-0.5 h-8 w-8 rounded-lg bg-cyan-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-200 transition-colors">
                      <Icon className="h-4 w-4 text-cyan-600" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Why Choose Us</span>
            <ColoredHeading
              text="Key Benefits of Change Management Outsourcing"
              className="text-4xl font-extrabold text-white"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h4 className="font-bold text-white mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">How It Works</span>
            <ColoredHeading
              text="Our Simple Engagement Process"
              className="text-4xl font-extrabold"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200 z-0" />

            {[
              { step: '01', title: 'Assess',    desc: 'Evaluate organizational readiness, culture, and change impact areas.' },
              { step: '02', title: 'Plan',      desc: 'Design a tailored strategy covering communication, training, and milestones.' },
              { step: '03', title: 'Execute',   desc: 'Roll out the change with structured support and stakeholder engagement.' },
              { step: '04', title: 'Sustain',   desc: 'Embed change permanently through monitoring, feedback, and reinforcement.' },
            ].map((p, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="h-20 w-20 rounded-2xl bg-white border-2 border-cyan-200 group-hover:border-cyan-500 flex flex-col items-center justify-center shadow-sm group-hover:shadow-cyan-100 transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-xs font-bold text-cyan-400">{p.step}</span>
                  <span className="text-sm font-extrabold text-slate-800 mt-0.5">{p.title}</span>
                </div>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-[180px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">Got Questions?</span>
            <ColoredHeading
              text="Frequently Asked Questions"
              className="text-4xl font-extrabold"
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-cyan-200 shadow-md shadow-cyan-50' : 'border-slate-100 hover:border-slate-200 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <h3 className="font-bold text-slate-800 pr-4">{faq.q}</h3>
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-cyan-500 rotate-180' : 'bg-slate-100'}`}>
                    <ChevronDown className={`h-3.5 w-3.5 transition-colors ${openIndex === i ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0    left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide text-cyan-300 mb-6">
            🚀 Change Management Experts
          </span>

          <ColoredHeading
            text="Lead Successful Transformations with Expert Solutions"
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-white"
          />

          <p className="mt-6 text-lg text-cyan-100/80 max-w-2xl mx-auto leading-relaxed">
            Ensure smooth transitions, improve employee adoption, and achieve business goals faster with our proven change management outsourcing services.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center rounded-2xl bg-cyan-500 hover:bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 gap-2"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 hover:border-cyan-400/50 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </a>
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