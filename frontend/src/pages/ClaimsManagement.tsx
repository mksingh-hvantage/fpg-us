import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Shield,
  TrendingUp,
  BarChart3,
  Zap,
  Globe,
  Users,
  FileCheck,
  AlertTriangle,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

// ── Scroll-triggered count-up ──────────────────────────────────────
function useCountUp(target: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

// ── IntersectionObserver hook ──────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function ClaimsManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const statsRef = useInView();
  const s1 = useCountUp(10000, 2000, statsRef.inView);
  const s2 = useCountUp(99,    2000, statsRef.inView);
  const s3 = useCountUp(60,    2000, statsRef.inView);
  const s4 = useCountUp(12,    2000, statsRef.inView);

  // ── Content ──────────────────────────────────────────────────────
  const challenges = [
    { icon: AlertTriangle, text: "High volume of insurance claims leading to processing delays." },
    { icon: Shield,        text: "Complex compliance and regulatory requirements across regions." },
    { icon: FileCheck,     text: "Manual data entry errors affecting claim accuracy and approvals." },
    { icon: Zap,           text: "Fraud detection and risk assessment challenges." },
    { icon: Users,         text: "Inefficient communication between insurers, adjusters, and customers." },
  ];

  const services = [
    { icon: BarChart3,  text: "End-to-end insurance claims processing and lifecycle management." },
    { icon: FileCheck,  text: "Claims data entry, validation, and document verification services." },
    { icon: Shield,     text: "Fraud detection, risk analysis, and compliance checks." },
    { icon: TrendingUp, text: "Claims adjudication and settlement support." },
    { icon: Globe,      text: "Customer support, claims tracking, and reporting services." },
  ];

  const benefits = [
    { icon: Zap,        title: "Faster Processing",    desc: "Faster claims processing and reduced turnaround time" },
    { icon: CheckCircle2, title: "Higher Accuracy",    desc: "Improved accuracy and minimized claim errors" },
    { icon: Shield,     title: "Fraud Mitigation",     desc: "Enhanced fraud detection and risk mitigation" },
    { icon: TrendingUp, title: "Cost Reduction",       desc: "Reduced operational and administrative costs" },
    { icon: Globe,      title: "Scalable Operations",  desc: "Scalable solutions for growing insurance operations" },
    { icon: Users,      title: "Expert Support",       desc: "Dedicated teams for end-to-end claims handling" },
  ];

  const faqs = [
    { q: "What are Claims Management Services?",           a: "Claims Management Services involve outsourcing the end-to-end handling of insurance claims, including data entry, validation, adjudication, settlement, and reporting. These services help insurers streamline operations, improve efficiency, and enhance customer satisfaction." },
    { q: "Who should outsource insurance claims processing?", a: "Insurance companies, third-party administrators (TPAs), healthcare providers, and financial institutions can benefit from outsourcing claims management to improve efficiency, reduce operational burden, and ensure compliance." },
    { q: "How does outsourcing improve claims processing speed?", a: "Outsourcing providers use automation tools, standardized workflows, and experienced professionals to process claims faster, reduce bottlenecks, and improve turnaround time significantly." },
    { q: "Is claims management outsourcing secure?",       a: "Yes, professional claims management providers follow strict data security protocols, including encryption, secure cloud platforms, and compliance with regulations such as HIPAA and GDPR to ensure complete data protection." },
    { q: "What types of claims can be handled?",           a: "Services can cover a wide range of claims including health insurance, life insurance, property and casualty claims, and other financial claims depending on business needs." },
    { q: "How does claims outsourcing reduce costs?",      a: "Outsourcing eliminates the need for large in-house teams, infrastructure, and technology investments, converting fixed costs into variable costs and improving overall ROI." },
    { q: "Can outsourcing help with fraud detection?",     a: "Yes, advanced analytics and AI-based tools are used to identify suspicious patterns, detect fraud early, and reduce financial losses for insurance providers." },
    { q: "What technologies are used in claims management services?", a: "Technologies include AI-based automation, OCR for document processing, cloud platforms, workflow management systems, and real-time analytics tools." },
    { q: "How scalable are claims outsourcing services?",  a: "Claims outsourcing solutions are highly scalable, allowing businesses to handle seasonal spikes and growing claim volumes without compromising quality or speed." },
    { q: "What is the turnaround time for claims processing?", a: "Turnaround time depends on claim complexity, but outsourcing significantly reduces processing time through automation and streamlined workflows." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── Keyframes & utility classes (no font changes) ─────────── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes floatA {
          0%,100% { transform:translateY(0) rotate(0deg); }
          50%      { transform:translateY(-16px) rotate(3deg); }
        }
        @keyframes floatB {
          0%,100% { transform:translateY(0) rotate(0deg); }
          50%      { transform:translateY(-10px) rotate(-2deg); }
        }
        @keyframes floatC {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow:0 0 0 0 rgba(6,182,212,0.45); }
          50%      { box-shadow:0 0 0 14px rgba(6,182,212,0); }
        }
        @keyframes slideInLeft {
          from { opacity:0; transform:translateX(-24px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .hf  { opacity:0; animation:fadeUp .65s ease forwards; }
        .hf1 { animation-delay:.10s; }
        .hf2 { animation-delay:.25s; }
        .hf3 { animation-delay:.40s; }
        .hf4 { animation-delay:.55s; }
        .hf5 { animation-delay:.70s; }

        .float-a { animation:floatA 6s ease-in-out infinite; }
        .float-b { animation:floatB 4s ease-in-out infinite; }
        .float-c { animation:floatC 5s ease-in-out infinite 1s; }

        .pulse-cta { animation:pulseGlow 2.4s ease-in-out infinite; }

        .card-lift {
          transition:transform .28s ease, box-shadow .28s ease;
        }
        .card-lift:hover {
          transform:translateY(-5px);
          box-shadow:0 18px 44px rgba(8,145,178,.14);
        }

        .faq-row { transition:border-color .18s ease; }
        .faq-row:hover { border-color:#06b6d4; }

        .dot-grid {
          background-image:radial-gradient(rgba(6,182,212,.18) 1px, transparent 1px);
          background-size:28px 28px;
        }

        .line-grid {
          background-image:
            linear-gradient(rgba(6,182,212,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,.07) 1px, transparent 1px);
          background-size:56px 56px;
        }

        .badge-pill {
          background:linear-gradient(135deg,rgba(6,182,212,.15),rgba(6,182,212,.05));
          border:1px solid rgba(6,182,212,.3);
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white overflow-hidden min-h-[88vh] flex items-center">

        {/* backgrounds */}
        <div className="absolute inset-0 line-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-cyan-700/12 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div>
            <span className="hf hf1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm">
              <Cloud className="h-4 w-4 text-cyan-400" />
              Claims Management Outsourcing Solutions
            </span>

            {/* ✅ original h1 tag + classes preserved, span only for color */}
            <h1 className="hf hf2 mt-6 text-5xl font-extrabold leading-tight">
              Insurance Claims <span className="text-cyan-400">Management Services</span>
            </h1>

            <p className="hf hf3 mt-6 text-lg text-slate-300">
              Optimize insurance claims processing with reliable, scalable, and technology-driven outsourcing solutions tailored for insurers and financial institutions.
            </p>

            <p className="hf hf4 mt-4 text-base text-slate-400 max-w-xl">
              Our Claims Management Services help organizations streamline claim intake, verification, adjudication, and settlement processes with enhanced accuracy, faster turnaround, and strict compliance—while reducing operational costs.
            </p>

            <div className="hf hf5 mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="pulse-cta inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-7 py-3.5 rounded-xl text-slate-900 font-semibold transition-colors shadow-lg shadow-cyan-500/30"
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

            {/* mini stats */}
            <div className="hf hf5 mt-10 flex flex-wrap gap-6 pt-6 border-t border-white/10">
              {[["10K+","Claims Processed"], ["99%","Accuracy Rate"], ["60%","Faster TAT"]].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl font-extrabold text-cyan-400">{v}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right image + floating cards ── */}
          <div className="relative flex justify-center">
            <div className="float-a relative z-10 w-full max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Claims Management"
                className="rounded-3xl shadow-2xl shadow-cyan-900/40 w-full object-cover"
              />
              {/* floating badge 1 */}
              <div className="float-b absolute -bottom-5 -left-7 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-white text-sm font-semibold shadow-xl">
                <CheckCircle2 className="text-cyan-400 h-5 w-5 shrink-0" />
                HIPAA & GDPR Compliant
              </div>
              {/* floating badge 2 */}
              <div className="float-c absolute -top-5 -right-7 flex items-center gap-3 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl px-5 py-3 text-white text-sm font-semibold shadow-xl">
                <Zap className="text-cyan-300 h-5 w-5 shrink-0" />
                AI-Powered Fraud Detection
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════════════ */}
      <section ref={statsRef.ref} className="bg-cyan-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { val: s1, sfx: "+",  label: "Claims Processed Monthly" },
            { val: s2, sfx: "%",  label: "Processing Accuracy" },
            { val: s3, sfx: "%",  label: "Faster Turnaround" },
            { val: s4, sfx: "+",  label: "Years of Experience" },
          ].map(({ val, sfx, label }) => (
            <div key={label}>
              <p className="text-5xl font-extrabold">{val}{sfx}</p>
              <p className="mt-1 text-cyan-100 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-cyan-100 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            className="rounded-3xl shadow-xl object-cover w-full"
            alt="Claims processing team"
          />
          <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-2xl bg-cyan-50 border-2 border-cyan-100 -z-10" />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Why Outsource?</span>

          {/* ✅ original h2 tag + classes preserved */}
          <h2 className="mt-6 text-5xl font-extrabold">
            End-to-End Insurance Claims <span className="text-cyan-600">Processing Solutions</span>
          </h2>

          <p className="mt-6 text-base text-slate-600">
            Claims management outsourcing enables insurance companies to efficiently handle large volumes of claims while ensuring accuracy, compliance, and customer satisfaction.
          </p>

          <p className="mt-4 text-base text-slate-600">
            Our solutions cover the entire claims lifecycle—from first notice of loss (FNOL) to final settlement—leveraging automation, analytics, and expert support teams.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Automated claims workflows and faster approvals",
              "Improved compliance with regulatory standards",
              "Real-time claims tracking and reporting",
              "Scalable and flexible outsourcing model",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-cyan-50 rounded-xl px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-600 shrink-0" />
                <p className="text-slate-700 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHALLENGES + SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">What We Address</span>
            {/* ✅ original h2 tag + classes preserved */}
            <h2 className="text-5xl font-extrabold">
              Challenges We Solve &amp; <span className="text-cyan-600">Services We Offer</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Challenges card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 card-lift">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                {/* ✅ original h3 tag + classes preserved */}
                <h3 className="text-2xl font-extrabold">Challenges</h3>
              </div>
              <div className="space-y-3">
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

            {/* Services card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 card-lift">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                  <BarChart3 className="h-5 w-5 text-cyan-600" />
                </div>
                {/* ✅ original h3 tag + classes preserved */}
                <h3 className="text-2xl font-extrabold">Services</h3>
              </div>
              <div className="space-y-3">
                {services.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-cyan-50/50 transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors">
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

      {/* ══════════════════════════════════════════════════════════════
          BENEFITS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Why Choose Us</span>
            {/* ✅ original h2 tag + classes preserved */}
            <h2 className="text-5xl font-extrabold text-center">
              Key Benefits of <span className="text-cyan-400">Claims Management Services</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
              Deliver faster, more accurate claims outcomes while cutting costs and staying fully compliant.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 p-7 rounded-2xl card-lift cursor-default"
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

      {/* ══════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Got Questions?</span>
            {/* ✅ original h2 tag + classes preserved */}
            <h2 className="text-5xl font-extrabold text-center">
              Frequently <span className="text-cyan-600">Asked Questions</span>
            </h2>
            <p className="mt-4 text-slate-500 text-sm max-w-xl mx-auto">
              Everything you need to know about our insurance claims outsourcing services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-row bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-7 py-5 text-left gap-4"
                >
                  {/* ✅ original h3 tag preserved */}
                  <h3 className="font-semibold text-slate-800 text-base">{faq.q}</h3>
                  <div className={`shrink-0 w-7 h-7 rounded-full bg-cyan-50 flex items-center justify-center transition-transform ${openIndex === i ? "rotate-180 bg-cyan-100" : ""}`}>
                    <ChevronDown className="h-4 w-4 text-cyan-600" />
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "260px" : "0px" }}
                >
                  <p className="px-7 pb-6 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-900 text-white py-24">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[560px] h-[280px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">

          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide">
            🚀 Insurance Claims Outsourcing Experts
          </span>

          {/* ✅ original h2 tag + classes preserved */}
          <h2 className="mt-3 text-5xl sm:text-5xl font-extrabold leading-tight">
            Transform Your Claims Processing with
            <span className="block text-cyan-200">
              Scalable Outsourcing <span className="text-white">Solutions</span>
            </span>
          </h2>

          <p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Reduce processing time, improve claim accuracy, and enhance customer satisfaction with our advanced claims management outsourcing services.
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

          {/* trust strip */}
          <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield,       text: "HIPAA & GDPR Compliant" },
              { icon: CheckCircle2, text: "ISO 27001 Certified" },
              { icon: Globe,        text: "Global Coverage" },
              { icon: Users,        text: "24/7 Expert Support" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/75 text-sm">
                <Icon className="h-4 w-4 text-cyan-200 shrink-0" />
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