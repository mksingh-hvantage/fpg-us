import GetStartedModal from '../components/GetStartedModal';
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  BarChart3,
  RefreshCw,
  Lock,
  FileText,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

// Utility: color last two words of any heading with text-cyan-600
function ColoredHeading({
  text,
  tag: Tag = 'h2',
  className = '',
}: {
  text: string;
  tag?: any;
  className?: string;
}) {
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
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const stats = [
  { value: 99, suffix: '%', label: 'Accuracy Rate' },
  { value: 300, suffix: '+', label: 'Enterprise Clients' },
  { value: 50, suffix: '%', label: 'Cost Savings' },
  { value: 24, suffix: '/7', label: 'Support Coverage' },
];

function StatCard({ value, suffix, label, animate }: { value: number; suffix: string; label: string; animate: boolean }) {
  const count = useCountUp(value, 1600, animate);
  return (
    <div className="text-center">
      <div className="text-5xl font-extrabold text-white tabular-nums">{count}{suffix}</div>
      <div className="mt-1 text-sm text-slate-400 tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function DataEntry() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: statsRef, inView: statsInView } = useInView(0.3);

  const challenges = [
    "High volume of repetitive data leading to internal resource strain.",
    "Manual data entry errors affecting business accuracy.",
    "Slow processing time impacting operational efficiency.",
    "Difficulty managing multiple data formats and sources.",
    "Lack of scalability during peak workloads.",
  ];

  const services = [
    "Online and offline data entry services.",
    "Data cleansing, validation, and formatting.",
    "Data conversion (PDF, image, handwritten to digital formats).",
    "CRM and database management support.",
    "E-commerce product data entry and catalog management.",
  ];

  const benefits = [
    { icon: CheckCircle2, title: "Accurate & Error-Free Processing", desc: "Multi-layer validation and QA protocols ensure every record is clean, consistent, and reliable." },
    { icon: Clock, title: "Faster Turnaround Time", desc: "Dedicated teams and optimized workflows deliver large datasets on schedule, every time." },
    { icon: TrendingUp, title: "Reduced Operational Costs", desc: "Convert fixed overheads into flexible expenses by eliminating in-house hiring and infrastructure." },
    { icon: BarChart3, title: "Improved Data Quality", desc: "Standardized formatting and enrichment processes that elevate data consistency across systems." },
    { icon: RefreshCw, title: "Scalable Solutions", desc: "Flexible capacity that expands seamlessly with your business during peak workloads." },
    { icon: Lock, title: "Enterprise-Grade Security", desc: "Encryption, NDAs, and compliance with global data protection standards keep your data safe." },
  ];

  const faqs = [
    { q: "What is data entry outsourcing?", a: "Data entry outsourcing is the process of delegating data input, processing, and management tasks to specialized third-party providers. This helps businesses save time, reduce costs, and improve data accuracy." },
    { q: "Which industries benefit from data entry services?", a: "Industries like healthcare, finance, e-commerce, logistics, real estate, and education benefit greatly from data entry outsourcing due to large volumes of data handling requirements." },
    { q: "How do data entry services improve business efficiency?", a: "By automating workflows, using trained professionals, and leveraging advanced tools, data entry services minimize errors, speed up processing, and allow internal teams to focus on core operations." },
    { q: "Is my business data secure with outsourcing providers?", a: "Yes, professional data entry service providers implement strict data security protocols, including encryption, secure servers, NDAs, and compliance with international data protection standards." },
    { q: "What types of data entry services are offered?", a: "Services include online/offline data entry, document digitization, data conversion, form processing, database management, CRM updates, and e-commerce product listing." },
    { q: "Can data entry outsourcing scale with my business?", a: "Absolutely. Outsourcing providers offer flexible and scalable solutions that can easily handle increasing data volumes without affecting turnaround time or quality." },
    { q: "How does outsourcing reduce operational costs?", a: "Outsourcing eliminates the need for hiring, training, infrastructure, and software investments, allowing businesses to convert fixed costs into variable expenses." },
    { q: "What is the turnaround time for data entry projects?", a: "Turnaround time depends on project size and complexity, but outsourcing firms typically ensure quick delivery through dedicated teams and optimized workflows." },
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
        .hero-badge { animation: fadeUp 0.6s ease both; }
        .hero-h1    { animation: fadeUp 0.7s 0.15s ease both; }
        .hero-p1    { animation: fadeUp 0.7s 0.28s ease both; }
        .hero-p2    { animation: fadeUp 0.7s 0.38s ease both; }
        .hero-ctas  { animation: fadeUp 0.7s 0.50s ease both; }
        .hero-img   { animation: fadeIn 0.9s 0.3s ease both, float 8s 1.2s ease-in-out infinite; }
        .hero-stat  { animation: fadeUp 0.6s ease both; }
        .glow-orb-1 { animation: drift 12s ease-in-out infinite; }
        .glow-orb-2 { animation: drift 16s 2s ease-in-out infinite reverse; }
        .glow-orb-3 { animation: drift 10s 4s ease-in-out infinite; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 12s linear infinite;
        }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 48px -12px rgba(6,182,212,0.18); }
        .faq-item { transition: box-shadow 0.2s ease; }
        .faq-item:hover { box-shadow: 0 4px 24px rgba(6,182,212,0.10); }
        .btn-primary { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(6,182,212,0.35); }
        .btn-outline { transition: background 0.2s ease, transform 0.2s ease; }
        .btn-outline:hover { transform: translateY(-2px); }
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

        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-orb-1 absolute -top-24 -left-24 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="glow-orb-2 absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-700/10 rounded-full blur-3xl" />
          <div className="glow-orb-3 absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-slate-600/20 rounded-full blur-3xl" />
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Data Entry Outsourcing Services
            </div>

            <h1 className="hero-h1 mt-7 text-5xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Professional Data Entry Services{' '}
              <span className="text-cyan-400">for Businesses</span>
            </h1>

            <p className="hero-p1 mt-6 text-lg text-slate-300 leading-relaxed">
              Streamline your business operations with accurate, reliable, and scalable data entry outsourcing solutions tailored for modern enterprises.
            </p>

            <p className="hero-p2 mt-4 text-base text-slate-400 max-w-xl leading-relaxed">
              Our data entry outsourcing services help businesses manage large volumes of data efficiently through automation, skilled professionals, and secure cloud-based systems—ensuring accuracy, speed, and cost savings.
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

            <div className="hero-ctas mt-10 flex flex-wrap gap-6">
              {['GDPR Compliant', 'ISO Certified', '99% Accuracy'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-slate-400">
                  <Shield className="h-4 w-4 text-cyan-500" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl border border-cyan-500/10" />
            <div className="absolute -inset-12 rounded-3xl border border-cyan-500/5" />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80"
              alt="Data Entry Services"
              className="hero-img relative rounded-2xl shadow-2xl shadow-cyan-900/30 w-full object-cover"
            />
            <div
              className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur"
              style={{ animation: 'fadeUp 0.7s 0.8s ease both, float 9s 2s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Entry Accuracy</p>
                  <p className="text-xl font-extrabold text-white">99.9%</p>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 bg-slate-900 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur"
              style={{ animation: 'fadeUp 0.7s 1s ease both, float 11s 3s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-medium text-slate-200">Digitize & Automate</span>
              </div>
            </div>
          </div>

        </div>

        <div ref={statsRef} className="relative border-t border-white/5 bg-white/[0.02] backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-8 divide-x divide-white/5">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                <StatCard {...s} animate={statsInView} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </section>

      {/* ─── INTRO ─── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-50 to-slate-100 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1739527324181-e02978b400c0?q=80"
            className="rounded-2xl shadow-xl w-full object-cover"
            alt="Data entry processing"
          />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4">
            Our Expertise
          </span>
          <ColoredHeading
            text="End-to-End Data Entry & Processing Solutions"
            className="text-5xl font-extrabold leading-tight"
          />
          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Data entry outsourcing allows businesses to efficiently manage structured and unstructured data while maintaining high levels of accuracy and compliance.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We provide comprehensive data management solutions including data capture, validation, processing, and database management using modern automation tools.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Standardized and automated data workflows",
              "High accuracy and data validation processes",
              "Secure and compliant data handling",
              "Flexible and scalable delivery model",
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
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-extrabold">Challenges</h3>
              </div>
              {challenges.map((item, i) => (
                <div key={i} className="flex gap-4 mb-5 last:mb-0">
                  <div className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-500">{i + 1}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-cyan-600" />
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
              text="Key Benefits of Data Entry Outsourcing"
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
              <div key={i} className="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden">
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
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="glow-orb-1 absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="glow-orb-2 absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-700/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-2 text-sm text-slate-300 backdrop-blur mb-6">
            🚀 Data Entry Outsourcing Experts
          </span>

          <h2 className="text-5xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Transform Your Data Management with{' '}
            <span className="text-cyan-400">Scalable Data Entry Solutions</span>
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Improve accuracy, reduce costs, and accelerate your business operations with our professional data entry outsourcing services.
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