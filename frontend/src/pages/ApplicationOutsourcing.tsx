import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  TrendingUp,
  Code2,
  Settings,
  HeadphonesIcon,
} from "lucide-react";
import { useState, useEffect, useRef, type JSX } from 'react';

// Helper: splits text to color last two words with cyan
function ColoredHeading({ text, tag = 'h2', className = '' }: { text: string; tag?: string; className?: string }) {
  const words = text.trim().split(' ');
  const lastTwo = words.slice(-2).join(' ');
  const rest = words.slice(0, -2).join(' ');
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag className={className}>
      {rest}{rest ? ' ' : ''}<span className="text-cyan-600">{lastTwo}</span>
    </Tag>
  );
}

// Animated counter hook
function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

export default function ApplicationOutsourcing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const statsRef = useInView();

  const clients = useCountUp(500, 1800, statsRef.inView);
  const uptime = useCountUp(99, 1800, statsRef.inView);
  const savings = useCountUp(60, 1800, statsRef.inView);
  const support = useCountUp(24, 1800, statsRef.inView);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    "Increasing complexity in application management and IT infrastructure.",
    "High operational costs of maintaining in-house development teams.",
    "Slow application deployment and scalability limitations.",
    "Frequent downtime and performance issues affecting business continuity.",
    "Security vulnerabilities and data protection challenges.",
  ];

  const services = [
    { icon: Code2, text: "End-to-end application development and maintenance services." },
    { icon: Cloud, text: "Legacy application modernization and cloud migration." },
    { icon: Shield, text: "Application testing, QA, and performance optimization." },
    { icon: HeadphonesIcon, text: "24/7 application support and monitoring services." },
    { icon: Settings, text: "Custom enterprise software solutions and integration services." },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Reduced IT Costs", desc: "Scalable outsourcing models that convert fixed IT costs into flexible operational expenses." },
    { icon: Zap, title: "Faster Deployment", desc: "Agile methodologies that accelerate release cycles and improve time-to-market." },
    { icon: Shield, title: "Enhanced Security", desc: "Enterprise-grade data protection, encryption, and compliance with global standards." },
    { icon: Code2, title: "Expert Talent Access", desc: "Immediate access to skilled developers and cutting-edge technology stacks." },
    { icon: Cloud, title: "Seamless Scalability", desc: "Cloud-native infrastructure that scales effortlessly with your business growth." },
    { icon: Settings, title: "Digital Transformation", desc: "End-to-end modernization strategies that future-proof your business operations." },
  ];

  const faqs = [
    { q: "What is Application Outsourcing?", a: "Application outsourcing refers to delegating software development, maintenance, testing, and support processes to specialized third-party service providers. This allows businesses to focus on core operations while experts handle technical requirements efficiently." },
    { q: "Who should consider application outsourcing services?", a: "Startups, enterprises, SaaS companies, and organizations with growing IT demands can benefit from outsourcing. It is especially useful for businesses looking to reduce costs, improve scalability, and access global technical expertise." },
    { q: "How does outsourcing improve application performance?", a: "Outsourcing partners use modern tools, automation, and agile methodologies to ensure faster development cycles, proactive monitoring, and continuous optimization, leading to better performance and minimal downtime." },
    { q: "Is application outsourcing secure?", a: "Yes, reputable outsourcing providers implement strict data security measures, including encryption, secure cloud environments, compliance with global standards, and regular audits to ensure complete data protection." },
    { q: "What services are included in application outsourcing?", a: "Services typically include application development, UI/UX design, testing, maintenance, cloud migration, system integration, and ongoing technical support." },
    { q: "How does application outsourcing reduce costs?", a: "It eliminates the need for hiring full-time developers, infrastructure investment, and training expenses, converting fixed IT costs into flexible, scalable operational costs." },
    { q: "Can outsourcing help with legacy system modernization?", a: "Yes, outsourcing providers specialize in upgrading outdated systems, migrating applications to modern cloud-based platforms, and improving system efficiency and scalability." },
    { q: "What industries benefit most from application outsourcing?", a: "Industries like finance, healthcare, e-commerce, logistics, education, and technology benefit significantly due to their reliance on scalable and secure applications." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center overflow-hidden">

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

        {/* Floating blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }} />

        {/* Orbiting ring decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute inset-12 rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
          <div className="absolute inset-24 rounded-full border border-slate-400/10 animate-spin" style={{ animationDuration: '15s' }} />

          {/* Floating tech badges around orbit */}
          {[
            { label: 'Cloud Native', angle: 0 },
            { label: 'AI Powered', angle: 60 },
            { label: 'Zero Downtime', angle: 120 },
            { label: '24/7 Support', angle: 180 },
            { label: 'ISO 27001', angle: 240 },
            { label: 'Agile CI/CD', angle: 300 },
          ].map(({ label, angle }) => {
            const r = 300;
            const rad = (angle * Math.PI) / 180;
            const x = 350 + r * Math.cos(rad);
            const y = 350 + r * Math.sin(rad);
            return (
              <div
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-3 py-1 text-xs text-cyan-300 whitespace-nowrap"
                style={{ left: x, top: y }}
              >
                {label}
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left — text */}
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span
              className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6"
              style={{ transitionDelay: '0.1s' }}
            >
              <Cloud className="mr-2 h-4 w-4" />
              Application Outsourcing Solutions
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Application Outsourcing for{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                  Scalable Growth
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
              </span>
            </h1>

            <p
              className={`mt-6 text-lg text-slate-300 max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Optimize your business operations with reliable application outsourcing services designed to enhance performance, reduce costs, and accelerate digital transformation.
            </p>

            <p
              className={`mt-4 text-base text-slate-400 max-w-xl transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Our expert team delivers end-to-end application management — from development to maintenance — ensuring seamless performance, enhanced security, and continuous scalability.
            </p>

            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
              className={`mt-10 flex items-center gap-6 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {['ISO 27001', 'SOC 2', 'GDPR'].map(badge => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right — image card with floating stat chips */}
          <div className={`relative transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hidden lg:block`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Application Outsourcing"
                className="w-full object-cover h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat chips */}
            <div className="absolute -top-4 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <p className="text-xs text-slate-300">Avg. Cost Reduction</p>
              <p className="text-2xl font-extrabold text-cyan-400">60%</p>
            </div>

            <div className="absolute -bottom-4 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <p className="text-xs text-slate-300">Uptime Guarantee</p>
              <p className="text-2xl font-extrabold text-cyan-400">99.9%</p>
            </div>

            <div className="absolute top-1/2 -right-8 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-white font-semibold">Live Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-10">
        <div ref={statsRef.ref} className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: `${clients}+`, label: 'Global Clients' },
            { value: `${uptime}.9%`, label: 'Uptime Guarantee' },
            { value: `${savings}%`, label: 'Avg. Cost Savings' },
            { value: `${support}/7`, label: 'Support Coverage' },
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
          {/* Corner accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-100 rounded-2xl -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-slate-100 rounded-2xl -z-10" />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-4">Why Outsource?</span>
          <ColoredHeading
            text="End-to-End Application Outsourcing Solutions"
            className="text-3xl font-extrabold leading-snug"
          />

          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Application outsourcing enables businesses to streamline software development, reduce IT overhead, and improve system efficiency while focusing on core growth strategies.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From custom application development to ongoing maintenance and cloud integration, our services are designed to deliver high-performance, secure, and scalable solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3">
            {[
              "Agile and scalable development approach",
              "Cloud-based application infrastructure",
              "High-level data security and compliance",
              "Continuous monitoring and optimization",
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
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Why Choose Us</span>
            <ColoredHeading
              text="Key Benefits of Application Outsourcing"
              className="text-4xl font-extrabold text-white"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
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
              { step: '01', title: 'Discovery', desc: 'We analyze your requirements and existing infrastructure.' },
              { step: '02', title: 'Strategy', desc: 'Tailored outsourcing plan aligned with your goals.' },
              { step: '03', title: 'Execution', desc: 'Agile development with continuous delivery and updates.' },
              { step: '04', title: 'Optimize', desc: 'Ongoing monitoring, tuning, and support at every stage.' },
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
                  <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide text-cyan-300 mb-6">
            🚀 Application Outsourcing Experts
          </span>

          <ColoredHeading
            text="Accelerate Your Digital Transformation Today"
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-white"
          />

          <p className="mt-6 text-lg text-cyan-100/80 max-w-2xl mx-auto leading-relaxed">
            Reduce IT costs, improve application performance, and scale your business faster with our secure and reliable outsourcing services.
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