import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Shield,
  BarChart3,
  Users,
  Zap,
  Globe
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

// Animated counter hook
function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
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
  }, [start, target, duration]);
  return count;
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
  }, []);
  return { ref, inView };
}

export default function FinanceAc() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const statsRef = useInView();
  const c1 = useCountUp(500, 2000, statsRef.inView);
  const c2 = useCountUp(98, 2000, statsRef.inView);
  const c3 = useCountUp(40, 2000, statsRef.inView);
  const c4 = useCountUp(15, 2000, statsRef.inView);

  const challenges = [
    { icon: Shield, text: "Managing complex accounting regulations and tax compliance requirements." },
    { icon: TrendingUp, text: "High operational costs of maintaining an in-house accounting team." },
    { icon: BarChart3, text: "Time-consuming bookkeeping and financial reporting processes." },
    { icon: Zap, text: "Risk of errors in financial data entry and reconciliation." },
    { icon: Globe, text: "Difficulty in scaling accounting operations with business growth." },
  ];

  const services = [
    "Bookkeeping and general ledger management services.",
    "Accounts payable and receivable management.",
    "Financial statement preparation and reporting.",
    "Tax preparation and compliance support.",
    "Payroll processing and reconciliation services.",
    "Bank and credit card reconciliation.",
    "Virtual CFO and financial advisory services.",
  ];

  const benefits = [
    { icon: TrendingUp, title: "Cost Reduction", desc: "Reduce accounting and operational costs significantly" },
    { icon: Users, title: "Expert Access", desc: "Access to experienced accounting professionals" },
    { icon: Shield, title: "Compliance", desc: "Improved financial accuracy and compliance" },
    { icon: BarChart3, title: "Real-Time Insights", desc: "Real-time financial insights and reporting" },
    { icon: Zap, title: "Scalability", desc: "Scalable solutions tailored to your business growth" },
    { icon: Globe, title: "Core Focus", desc: "Focus more on core business activities" },
  ];

  const faqs = [
    { q: "What is Accounting Outsourcing?", a: "Accounting outsourcing is the process of delegating financial tasks such as bookkeeping, payroll, tax preparation, and financial reporting to specialized third-party service providers. This allows businesses to improve efficiency, reduce costs, and ensure compliance with financial regulations." },
    { q: "Who should consider outsourcing accounting services?", a: "Startups, small businesses, enterprises, and CPA firms can all benefit from accounting outsourcing. It is especially useful for companies looking to reduce overhead costs, improve financial accuracy, and access expert accounting support without hiring a full in-house team." },
    { q: "What services are included in accounting outsourcing?", a: "Services typically include bookkeeping, accounts payable and receivable, payroll processing, tax preparation, financial reporting, bank reconciliation, and virtual CFO services. These services can be customized based on business needs." },
    { q: "Is outsourcing accounting services secure?", a: "Yes, professional accounting outsourcing firms use secure cloud platforms, data encryption, and strict compliance protocols to ensure the safety and confidentiality of financial data." },
    { q: "How does accounting outsourcing reduce costs?", a: "Outsourcing eliminates the need for hiring, training, and maintaining an in-house accounting team. It converts fixed costs into flexible operational expenses while ensuring access to expert-level services." },
    { q: "Can outsourced accountants handle tax compliance?", a: "Yes, outsourced accounting professionals stay updated with the latest tax laws and regulations. They help businesses file accurate returns, avoid penalties, and ensure full compliance with local and international tax requirements." },
    { q: "Will I have control over my financial data?", a: "Absolutely. You retain full control and visibility over your financial data. Most outsourcing providers offer real-time dashboards and reports so you can monitor performance anytime." },
    { q: "How do outsourced accounting services improve accuracy?", a: "Outsourced firms use advanced accounting software, automation tools, and experienced professionals to minimize human errors and ensure accurate financial reporting." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatA {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes floatC {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6,182,212,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 16px rgba(6,182,212,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6,182,212,0); }
        }

        .hero-fade { opacity: 0; animation: fadeUp 0.7s ease forwards; }
        .hero-fade-1 { animation-delay: 0.1s; }
        .hero-fade-2 { animation-delay: 0.3s; }
        .hero-fade-3 { animation-delay: 0.5s; }
        .hero-fade-4 { animation-delay: 0.7s; }
        .hero-fade-5 { animation-delay: 0.9s; }

        .float-a { animation: floatA 6s ease-in-out infinite; }
        .float-b { animation: floatB 4s ease-in-out infinite; }
        .float-c { animation: floatC 8s ease-in-out infinite 1s; }

        .pulse-btn { animation: pulse-ring 2.5s ease-in-out infinite; }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(8,145,178,0.15);
        }

        .faq-item { transition: border-color 0.2s ease; }
        .faq-item:hover { border-color: #06b6d4; }

        .bg-grid {
          background-image: linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white overflow-hidden min-h-[90vh] flex items-center">

        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-700/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="hero-fade hero-fade-1 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
              <Cloud className="h-4 w-4" />
              Accounting Outsourcing Solutions
            </span>

            <h1 className="hero-fade hero-fade-2 mt-6 text-4xl font-extrabold leading-tight">
              Accounting Outsourcing Services for Businesses &amp;{" "}
              <span className="text-cyan-400">CPA Firms</span>
            </h1>

            <p className="hero-fade hero-fade-3 mt-6 text-lg text-slate-300 leading-relaxed">
              Streamline your financial operations with expert accounting outsourcing services designed to improve accuracy, ensure compliance, and reduce costs.
            </p>

            <p className="hero-fade hero-fade-4 mt-4 text-base text-slate-400 max-w-xl leading-relaxed">
              Our accounting outsourcing solutions help businesses manage bookkeeping, payroll, tax compliance, and financial reporting efficiently using modern cloud-based tools and experienced professionals.
            </p>

            <div className="hero-fade hero-fade-5 mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="pulse-btn inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-7 py-3.5 rounded-xl text-slate-900 font-semibold transition-colors shadow-lg shadow-cyan-500/30"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 rounded-xl text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>

            <div className="hero-fade hero-fade-5 mt-10 flex flex-wrap gap-6">
              {[["500+", "Clients Served"], ["98%", "Accuracy Rate"], ["40%", "Cost Savings"]].map(([val, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-cyan-400">{val}</span>
                  <span className="text-slate-400 text-sm leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="float-a relative z-10">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Accounting"
                className="rounded-3xl shadow-2xl shadow-cyan-900/40 w-full max-w-lg object-cover"
              />
              <div className="float-b absolute -bottom-6 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-white text-sm font-semibold flex items-center gap-3 shadow-xl">
                <CheckCircle2 className="text-cyan-400 h-5 w-5" />
                Real-time Reporting
              </div>
              <div className="float-c absolute -top-6 -right-8 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl px-5 py-3 text-white text-sm font-semibold flex items-center gap-3 shadow-xl">
                <Shield className="text-cyan-300 h-5 w-5" />
                100% Compliant
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── STATS STRIP ───────────────────────────────────────────── */}
      <section ref={statsRef.ref} className="bg-cyan-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { val: c1, suffix: "+", label: "Clients Served" },
            { val: c2, suffix: "%", label: "Accuracy Rate" },
            { val: c3, suffix: "%", label: "Average Cost Savings" },
            { val: c4, suffix: "+", label: "Years of Experience" },
          ].map(({ val, suffix, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold">{val}{suffix}</p>
              <p className="mt-1 text-cyan-100 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INTRO ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-cyan-100 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            className="rounded-3xl shadow-xl object-cover w-full"
            alt="Team working"
          />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-cyan-50 border-2 border-cyan-100 -z-10" />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Why Outsource?</span>

          <h2 className="mt-6 text-3xl font-extrabold">
            End-to-End Accounting <span className="text-cyan-600">Outsourcing Solutions</span>
          </h2>

          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Accounting outsourcing allows businesses to manage financial operations efficiently while ensuring compliance with constantly evolving tax laws and accounting standards.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From bookkeeping and payroll to financial reporting and tax preparation, our services are designed to improve accuracy, reduce risks, and enhance financial visibility.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Automated accounting workflows",
              "Improved compliance and audit readiness",
              "Real-time financial reporting",
              "Scalable accounting solutions",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-cyan-50 rounded-xl px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-600 shrink-0" />
                <p className="text-slate-700 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES + SERVICES ──────────────────────────────────── */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">What We Address</span>
            <h2 className="text-3xl font-extrabold">
              Challenges We Solve &amp; <span className="text-cyan-600">Services We Offer</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-2xl font-extrabold">Common Challenges</h3>
              </div>
              <div className="space-y-4">
                {challenges.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-red-50/50 transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                      <Icon className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-extrabold">Our Services</h3>
              </div>
              <div className="space-y-4">
                {services.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-cyan-50/50 transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BENEFITS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Why Choose Us</span>
            <h2 className="text-5xl font-extrabold text-center">
              Key Benefits of <span className="text-cyan-400">Accounting Outsourcing</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Experience the transformation in your financial operations with our comprehensive outsourcing solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 p-7 rounded-2xl card-hover cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 group-hover:bg-cyan-500/20 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="font-bold text-white mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Got Questions?</span>
            <h2 className="text-5xl font-extrabold text-center">
              Frequently <span className="text-cyan-600">Asked Questions</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Everything you need to know about our accounting outsourcing services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-7 py-5 text-left gap-4"
                >
                  <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                  <div className={`shrink-0 w-7 h-7 rounded-full bg-cyan-50 flex items-center justify-center transition-transform ${openIndex === i ? "rotate-180 bg-cyan-100" : ""}`}>
                    <ChevronDown className="h-4 w-4 text-cyan-600" />
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "300px" : "0px" }}
                >
                  <p className="px-7 pb-6 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide">
            🚀 Accounting Outsourcing Experts
          </span>

          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Simplify Your Finances with
            <span className="block text-cyan-200">
              Expert Accounting <span className="text-white">Solutions</span>
            </span>
          </h2>

          <p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Reduce costs, improve accuracy, and gain real-time financial insights with our professional accounting outsourcing services.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-cyan-700 shadow-xl hover:bg-slate-100 transition-all"
            >
              Get Started Now
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, text: "Bank-level Security" },
              { icon: CheckCircle2, text: "ISO Certified" },
              { icon: Globe, text: "Global Compliance" },
              { icon: Users, text: "Dedicated Support" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                <Icon className="h-4 w-4 text-cyan-200" />
                {text}
              </div>
            ))}
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