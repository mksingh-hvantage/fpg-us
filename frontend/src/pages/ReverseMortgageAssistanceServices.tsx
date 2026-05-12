import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  BarChart3,
  Clock,
  FileCheck,
  HeartHandshake
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── Utility: split last two words for accent ─── */
function AccentLastTwo({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 2) {
    return <span className="text-cyan-600">{text}</span>;
  }
  const main = words.slice(0, -2).join(' ');
  const accent = words.slice(-2).join(' ');
  return (
    <>
      {main}{' '}
      <span className="text-cyan-600">{accent}</span>
    </>
  );
}

/* ─── Animated counter ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Fade-in-on-scroll wrapper ─── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ReverseMortgageAssistanceServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    { icon: FileCheck, text: "Complex regulatory requirements in reverse mortgage processing." },
    { icon: Clock, text: "High turnaround time in loan origination and underwriting." },
    { icon: ShieldCheck, text: "Manual documentation and verification errors." },
    { icon: BarChart3, text: "Operational inefficiencies due to legacy systems." },
    { icon: Zap, text: "Difficulty in maintaining compliance and audit readiness." },
  ];

  const services = [
    { icon: FileCheck, text: "Reverse mortgage loan origination and processing support." },
    { icon: ShieldCheck, text: "Document verification and compliance checks." },
    { icon: BarChart3, text: "Underwriting assistance and risk assessment." },
    { icon: HeartHandshake, text: "Loan servicing and customer support." },
    { icon: Zap, text: "Title search, appraisal coordination, and closing support." },
  ];

  const benefits = [
    { icon: Clock, title: "Faster loan processing and reduced turnaround time" },
    { icon: ShieldCheck, title: "Improved compliance with regulatory standards" },
    { icon: BarChart3, title: "Reduced operational and staffing costs" },
    { icon: CheckCircle2, title: "Enhanced accuracy and reduced manual errors" },
    { icon: Zap, title: "Scalable operations for growing loan volumes" },
    { icon: HeartHandshake, title: "Dedicated expert support teams" },
  ];

  const faqs = [
    { q: "What is Reverse Mortgage Process Outsourcing (RMPO)?", a: "RMPO refers to outsourcing reverse mortgage-related operations such as loan processing, underwriting, compliance, and servicing to specialized service providers." },
    { q: "Who can benefit from reverse mortgage outsourcing?", a: "Banks, mortgage lenders, financial institutions, and loan servicing companies benefit from RMPO by improving efficiency and reducing operational costs." },
    { q: "How does RMPO improve loan processing efficiency?", a: "By using automation tools, standardized workflows, and expert teams, RMPO reduces turnaround time and minimizes manual errors." },
    { q: "Is reverse mortgage outsourcing secure?", a: "Yes, RMPO providers use secure cloud platforms, data encryption, and compliance frameworks to ensure data protection and confidentiality." },
    { q: "What services are included in RMPO?", a: "Services include loan origination, underwriting support, document verification, compliance checks, servicing, and closing support." },
    { q: "How does outsourcing reduce costs?", a: "Outsourcing eliminates the need for in-house infrastructure and large teams, converting fixed costs into flexible operational expenses." },
  ];

  const stats = [
    { value: 40, suffix: '%', label: 'Cost Savings' },
    { value: 2, suffix: 'X', label: 'Faster Processing' },
    { value: 99, suffix: '%', label: 'Accuracy Rate' },
    { value: 24, suffix: '/7', label: 'Support' },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden">

        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Glowing orbs */}
        <div className="absolute top-0 -left-40 w-[700px] h-[700px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #0e7490 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #155e75 0%, transparent 70%)' }} />

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${8 + i * 7.5}%`,
                top: `${10 + (i * 37) % 80}%`,
                opacity: 0.15 + (i % 4) * 0.05,
                animation: `float ${4 + i % 4}s ease-in-out ${i * 0.4}s infinite alternate`,
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-20px); }
          }
          @keyframes slideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .shimmer-text {
            background: linear-gradient(90deg, #ffffff 0%, #22d3ee 40%, #ffffff 60%, #22d3ee 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 4s linear infinite;
          }
        `}</style>

        <div className="relative mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}
          <div>
            <div
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
                <Cloud className="h-4 w-4" />
                Reverse Mortgage Outsourcing Solutions
              </span>
            </div>

            <h1
              className="mt-6 text-5xl sm:text-5xl font-extrabold leading-tight shimmer-text"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              Reverse Mortgage Process Outsourcing Services
            </h1>

            <div
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              }}
            >
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Streamline reverse mortgage operations with specialized outsourcing solutions designed for lenders, financial institutions, and mortgage service providers.
              </p>
              <p className="mt-4 text-base text-slate-400 max-w-xl leading-relaxed">
                Our RMPO services help organizations manage loan processing, compliance, underwriting support, and servicing with accuracy, speed, and regulatory adherence—while reducing operational costs.
              </p>
            </div>

            <div
              className="mt-8 flex flex-wrap gap-4"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
              }}
            >
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25"
              >
                Explore Services
              </a>
            </div>

            {/* Hero micro stats */}
            <div
              className="mt-10 grid grid-cols-3 gap-6"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
              }}
            >
              {[
                { num: '500+', label: 'Loans Processed' },
                { num: '40%', label: 'Cost Reduction' },
                { num: '99%', label: 'Accuracy Rate' },
              ].map((s, i) => (
                <div key={i} className="border-l border-cyan-500/30 pl-4">
                  <p className="text-2xl font-bold text-white">{s.num}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – image with floating card */}
          <div
            className="relative"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s',
            }}
          >
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-cyan-500/10 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80"
              alt="Reverse Mortgage Outsourcing"
              className="relative rounded-3xl shadow-2xl ring-1 ring-white/10 w-full object-cover"
            />

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/90 px-5 py-4 shadow-2xl backdrop-blur-sm"
              style={{ animation: 'float 3s ease-in-out infinite alternate' }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Compliance Rate</p>
                <p className="text-lg font-bold text-white">100%</p>
              </div>
            </div>

            {/* Second floating badge */}
            <div
              className="absolute -top-5 -right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/90 px-5 py-3 shadow-2xl backdrop-blur-sm"
              style={{ animation: 'float 3.5s ease-in-out 0.5s infinite alternate' }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/20">
                <Zap className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Processing Speed</p>
                <p className="text-sm font-bold text-white">2× Faster</p>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* ═══════════════════════════════════════════
          INTRO / END-TO-END
      ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cyan-50" />
            <img
              src="https://images.unsplash.com/photo-1707623988408-ab88c9981730?q=80"
              className="relative rounded-3xl shadow-xl ring-1 ring-slate-200 w-full object-cover"
              alt="End-to-end solutions"
            />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Our Approach</span>
          <h2 className="mt-3 text-5xl font-extrabold leading-tight">
            <AccentLastTwo text="End-to-End Reverse Mortgage Outsourcing Solutions" />
          </h2>
          <p className="mt-5 text-base text-slate-600 leading-relaxed">
            Reverse mortgage outsourcing enables lenders and financial institutions to manage complex loan processes efficiently while ensuring compliance with evolving regulatory standards.
            Our services cover loan origination, underwriting support, servicing, and documentation management using automation tools and secure cloud infrastructure.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: BarChart3, label: "Standardized mortgage workflows" },
              { icon: ShieldCheck, label: "Improved compliance and transparency" },
              { icon: Zap, label: "Automation-driven decision making" },
              { icon: HeartHandshake, label: "Scalable outsourcing model" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                  <item.icon className="h-4 w-4 text-cyan-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════
          CHALLENGES + SERVICES
      ═══════════════════════════════════════════ */}
      <section id="services" className="relative py-24 bg-slate-50">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">What We Solve</span>
            <h2 className="mt-2 text-5xl font-extrabold">
              <AccentLastTwo text="Challenges & Expert Services" />
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <FadeIn delay={100}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm h-full">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-extrabold">Industry Challenges</h3>
                </div>
                <div className="space-y-4">
                  {challenges.map((item, i) => (
                    <div key={i} className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-red-50">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors">
                        <item.icon className="h-4 w-4 text-red-500" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Services */}
            <FadeIn delay={200}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm h-full">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-extrabold">Our Services</h3>
                </div>
                <div className="space-y-4">
                  {services.map((item, i) => (
                    <div key={i} className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-cyan-50">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 group-hover:bg-cyan-200 transition-colors">
                        <item.icon className="h-4 w-4 text-cyan-600" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          BENEFITS
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #0e7490 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Why Choose RMPO</span>
            <h2 className="mt-2 text-5xl sm:text-5xl font-extrabold">
              <AccentLastTwo text="Key Benefits of RMPO Services" />
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1 duration-300">
                  {/* Accent bar */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-100 to-transparent" />

        <div className="max-w-3xl mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Got Questions?</span>
            <h2 className="mt-2 text-5xl font-extrabold">
              <AccentLastTwo text="Frequently Asked Questions" />
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openIndex === i ? 'border-cyan-200 shadow-md shadow-cyan-50' : 'border-slate-200 hover:border-slate-300'}`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-semibold text-sm leading-snug transition-colors ${openIndex === i ? 'text-cyan-700' : 'text-slate-800'}`}>{faq.q}</span>
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${openIndex === i ? 'bg-cyan-100 rotate-180' : 'bg-slate-100'}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${openIndex === i ? 'text-cyan-600' : 'text-slate-500'}`} />
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: openIndex === i ? '200px' : '0',
                      opacity: openIndex === i ? 1 : 0,
                      transition: 'max-height 0.35s ease, opacity 0.25s ease',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24">
        {/* Animated gradient backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #0e7490, transparent)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #7e22ce, transparent)' }} />
        </div>

        {/* Shimmer bar */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div className="h-full w-1/3" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)', animation: 'slideRight 3s linear infinite' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-sm tracking-wide text-cyan-300">
              🚀 Reverse Mortgage Outsourcing Experts
            </span>

            <h2 className="mt-5 text-5xl sm:text-5xl font-extrabold leading-tight">
              Transform Your Mortgage Operations with
              <span className="block text-cyan-400 mt-1">Scalable RMPO Solutions</span>
            </h2>

            <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Improve turnaround time, reduce compliance risks, and streamline reverse mortgage processing with our secure, cloud-powered outsourcing services.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl shadow-cyan-500/20 transition-all hover:bg-cyan-400 active:scale-[0.98]"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            {/* Animated stat grid */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-5">
                    <p className="text-5xl font-extrabold text-white">
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-sm text-slate-400 mt-1">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
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