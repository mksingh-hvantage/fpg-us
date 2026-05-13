import GetStartedModal from '../components/GetStartedModal';
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Database,
  Shield,
  Zap,
  BarChart3,
  RefreshCw,
  Lock
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

// Utility: split heading and color last two words with cyan
function ColoredHeading({ text, tag: Tag = 'h2', className = '' }: { text: string; tag?: any; className?: string }) {
  const words = text.trim().split(' ');
  const main = words.slice(0, -2).join(' ');
  const last = words.slice(-2).join(' ');
  return (
    <Tag className={className}>
      {main}{' '}
      <span className="text-cyan-600">{last}</span>
    </Tag>
  );
}

// Animated counter hook
function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Stats data
const stats = [
  { value: 99, suffix: '%', label: 'Accuracy Rate' },
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
  { value: 40, suffix: '%', label: 'Cost Reduction' },
  { value: 24, suffix: '/7', label: 'Support Coverage' },
];

function StatCard({ value, suffix, label, animate }: { value: number; suffix: string; label: string; animate: boolean }) {
  const count = useCountUp(value, 1600, animate);
  return (
    <div className="text-center">
      <div className="text-5xl font-extrabold text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-slate-400 tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function DataService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: statsRef, inView: statsInView } = useInView(0.3);

  const challenges = [
    "Handling large volumes of unstructured and structured data efficiently.",
    "Data entry errors leading to inaccurate business insights.",
    "High operational costs for in-house data processing teams.",
    "Difficulty maintaining data security and compliance standards.",
    "Time-consuming manual data extraction and validation processes.",
  ];

  const services = [
    "Data entry, data processing, and data conversion services.",
    "Data cleansing, validation, and enrichment solutions.",
    "Image and document data extraction services.",
    "Database management and data mining support.",
    "E-commerce product data entry and catalog management.",
  ];

  const benefits = [
    { icon: CheckCircle2, title: "Accurate Data Management", desc: "Error-free processing with multi-layer validation and quality assurance protocols." },
    { icon: Zap, title: "Reduced Operational Costs", desc: "Convert fixed overhead into flexible operational expenses with scalable teams." },
    { icon: RefreshCw, title: "Faster Turnaround Time", desc: "Automation-driven workflows that accelerate processing without sacrificing quality." },
    { icon: BarChart3, title: "Improved Decision-Making", desc: "Clean, structured data that powers accurate analytics and business intelligence." },
    { icon: Database, title: "Scalable Data Solutions", desc: "Flexible infrastructure that grows with your data volume and business needs." },
    { icon: Lock, title: "Enterprise-Grade Security", desc: "GDPR-compliant pipelines with encryption, NDAs, and secure server environments." },
  ];

  const faqs = [
    {
      q: "What are Data Services in BPO?",
      a: "Data services in BPO refer to outsourcing tasks like data entry, processing, cleansing, validation, and management to specialized service providers. These services help businesses manage large datasets efficiently while ensuring accuracy and compliance."
    },
    {
      q: "Who should outsource data processing services?",
      a: "Businesses dealing with large volumes of data such as eCommerce companies, financial institutions, healthcare providers, logistics firms, and research organizations can benefit from outsourcing data services."
    },
    {
      q: "How do data outsourcing services improve accuracy?",
      a: "Professional data service providers use automation tools, quality checks, and validation processes to minimize human errors, ensuring high levels of accuracy and data consistency."
    },
    {
      q: "Are outsourced data services secure?",
      a: "Yes, reliable providers follow strict data security protocols including encryption, secure servers, NDAs, and compliance with global standards like GDPR to ensure data safety."
    },
    {
      q: "What types of data can be processed?",
      a: "Outsourcing providers handle structured and unstructured data such as customer data, financial records, product catalogs, invoices, surveys, and scanned documents."
    },
    {
      q: "How does data outsourcing reduce costs?",
      a: "It eliminates the need for in-house infrastructure, hiring, and training costs, allowing businesses to convert fixed costs into flexible operational expenses."
    },
    {
      q: "Can data services scale with business growth?",
      a: "Yes, outsourcing partners offer scalable solutions that adapt to increasing data volumes without compromising quality or turnaround time."
    },
    {
      q: "What industries benefit the most from data services?",
      a: "Industries like eCommerce, healthcare, finance, insurance, logistics, and real estate benefit significantly from data processing and management services."
    }
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(1deg); }
          66%       { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(30px, -20px) scale(1.08); }
        }
        @keyframes gridMove {
          from { background-position: 0 0; }
          to   { background-position: 40px 40px; }
        }
        .hero-badge    { animation: fadeUp 0.6s ease both; }
        .hero-h1       { animation: fadeUp 0.7s 0.15s ease both; }
        .hero-p1       { animation: fadeUp 0.7s 0.28s ease both; }
        .hero-p2       { animation: fadeUp 0.7s 0.38s ease both; }
        .hero-ctas     { animation: fadeUp 0.7s 0.50s ease both; }
        .hero-img      { animation: fadeIn 0.9s 0.3s ease both, float 8s 1.2s ease-in-out infinite; }
        .hero-stat     { animation: fadeUp 0.6s ease both; }
        .intro-img     { animation: slideRight 0.7s ease both; }
        .fade-up       { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .card-hover    { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 48px -12px rgba(6,182,212,0.18); }
        .faq-item      { transition: box-shadow 0.2s ease; }
        .faq-item:hover { box-shadow: 0 4px 24px rgba(6,182,212,0.10); }
        .btn-primary   { transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(6,182,212,0.35); }
        .btn-outline   { transition: background 0.2s ease, transform 0.2s ease; }
        .btn-outline:hover { transform: translateY(-2px); }
        .grid-bg {
          background-image: linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 12s linear infinite;
        }
        .glow-orb-1 { animation: drift 12s ease-in-out infinite; }
        .glow-orb-2 { animation: drift 16s 2s ease-in-out infinite reverse; }
        .glow-orb-3 { animation: drift 10s 4s ease-in-out infinite; }
        .pulse-dot::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: rgb(6,182,212);
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-screen flex flex-col justify-center">

        {/* animated grid */}
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

        {/* glowing orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-orb-1 absolute -top-24 -left-24 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="glow-orb-2 absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-700/10 rounded-full blur-3xl" />
          <div className="glow-orb-3 absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-slate-600/20 rounded-full blur-3xl" />
        </div>

        {/* thin accent line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* left */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Data Processing & Management Solutions
            </div>

            <h1 className="hero-h1 mt-7 text-5xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Data Services Outsourcing for{' '}
              <span className="text-cyan-400">Accurate &amp; Scalable</span>{' '}
              Operations
            </h1>

            <p className="hero-p1 mt-6 text-lg text-slate-300 leading-relaxed">
              Streamline your business operations with professional data entry, processing, and management services designed to improve accuracy and efficiency.
            </p>

            <p className="hero-p2 mt-4 text-base text-slate-400 max-w-xl leading-relaxed">
              Our data services help organizations transform raw data into meaningful insights through structured workflows, automation, and secure processing—enabling smarter decision-making and operational excellence.
            </p>

            <div className="hero-ctas mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="btn-primary inline-flex items-center gap-2 bg-cyan-500 px-7 py-3.5 rounded-xl text-slate-900 font-semibold shadow-lg shadow-cyan-500/20"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#services"
                className="btn-outline inline-flex items-center gap-2 border border-white/20 bg-white/5 px-7 py-3.5 rounded-xl text-white backdrop-blur"
              >
                Explore Services
              </a>
            </div>

            {/* trust badges */}
            <div className="hero-ctas mt-10 flex flex-wrap gap-6">
              {['GDPR Compliant', 'ISO Certified', '99% Accuracy'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-slate-400">
                  <Shield className="h-4 w-4 text-cyan-500" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* right – floating image */}
          <div className="relative">
            {/* decorative ring */}
            <div className="absolute -inset-6 rounded-3xl border border-cyan-500/10" />
            <div className="absolute -inset-12 rounded-3xl border border-cyan-500/5" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Data Services"
              className="hero-img relative rounded-2xl shadow-2xl shadow-cyan-900/30 w-full object-cover"
            />
            {/* floating metric card */}
            <div
              className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur"
              style={{ animation: 'fadeUp 0.7s 0.8s ease both, float 9s 2s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Data Accuracy</p>
                  <p className="text-xl font-extrabold text-white">99.8%</p>
                </div>
              </div>
            </div>
            {/* floating security badge */}
            <div
              className="absolute -top-4 -right-4 bg-slate-900 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur"
              style={{ animation: 'fadeUp 0.7s 1s ease both, float 11s 3s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-medium text-slate-200">Enterprise Secure</span>
              </div>
            </div>
          </div>

        </div>

        {/* stats bar */}
        <div ref={statsRef} className="relative border-t border-white/5 bg-white/[0.02] backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-8 divide-x divide-white/5">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                <StatCard {...s} animate={statsInView} />
              </div>
            ))}
          </div>
        </div>

        {/* thin accent line bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </section>

      {/* ─── INTRO ─── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="intro-img relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-50 to-slate-100 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            className="rounded-2xl shadow-xl w-full object-cover"
            alt="End-to-end data processing"
          />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4">
            Our Expertise
          </span>
          <ColoredHeading
            text="End-to-End Data Processing & Management Services"
            className="text-5xl font-extrabold leading-tight"
          />

          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Data is the backbone of modern businesses. Efficient data management ensures better insights, improved customer experiences, and enhanced operational efficiency.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Our outsourcing solutions cover data entry, cleansing, mining, and processing using advanced tools and industry best practices to ensure accuracy, speed, and compliance.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Structured and unstructured data handling",
              "Advanced data validation and quality checks",
              "Automation-driven workflows",
              "Secure and compliant data processing"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center transition group-hover:bg-cyan-100">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES + SERVICES ─── */}
      <section id="services" className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-3">
              What We Solve
            </span>
            <ColoredHeading
              text="Challenges & Our Services"
              className="text-5xl font-extrabold"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* challenges */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Database className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-extrabold">Challenges</h3>
              </div>
              {challenges.map((item, i) => (
                <div key={i} className="flex gap-4 mb-5 last:mb-0 group">
                  <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-500">{i + 1}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* services */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-cyan-600" />
                </div>
                <h3 className="text-xl font-extrabold">Services</h3>
              </div>
              {services.map((item, i) => (
                <div key={i} className="flex gap-4 mb-5 last:mb-0 group">
                  <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center transition group-hover:bg-cyan-100">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <div className="glow-orb-1 absolute top-1/4 -right-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
              Why Choose Us
            </span>
            <ColoredHeading
              text="Key Benefits of Data Outsourcing Services"
              className="text-5xl font-extrabold"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white/[0.04] border border-white/[0.07] p-6 rounded-2xl hover:bg-white/[0.08] hover:border-cyan-500/20 transition-all duration-300 card-hover"
                >
                  <div className="h-11 w-11 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/25 transition">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h4 className="font-extrabold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-3">
              FAQ
            </span>
            <ColoredHeading
              text="Frequently Asked Questions"
              className="text-5xl font-extrabold"
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 hover:bg-slate-50 transition"
                >
                  <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                  <ChevronDown
                    className={`flex-shrink-0 h-5 w-5 text-cyan-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? '200px' : '0' }}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24">
        {/* animated bg */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-orb-1 absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="glow-orb-2 absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-700/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-2 text-sm text-slate-300 backdrop-blur mb-6">
            🚀 Data Outsourcing Experts
          </span>

          <h2 className="text-5xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Transform Your Business with{' '}
            <span className="text-cyan-400">Reliable Data Services</span>
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Improve data accuracy, reduce costs, and unlock valuable insights with our scalable and secure data outsourcing solutions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-9 py-4 text-lg font-semibold text-slate-900 shadow-xl shadow-cyan-500/20"
            >
              Get Started Now <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#services"
              className="btn-outline inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-9 py-4 text-lg font-semibold backdrop-blur"
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