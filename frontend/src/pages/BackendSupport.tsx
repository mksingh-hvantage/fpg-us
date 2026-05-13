import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Shield,
  BarChart3,
  Headphones,
  RefreshCw,
  TrendingUp,
  Package
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── Utility: split last two words for accent coloring ─── */
function AccentLastTwo({ text, className = "" }: { text: string; className?: string }) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 2) {
    return <span className={`text-cyan-600 ${className}`}>{text}</span>;
  }
  const main = words.slice(0, -2).join(" ");
  const accent = words.slice(-2).join(" ");
  return (
    <>
      {main}{" "}
      <span className="text-cyan-600">{accent}</span>
    </>
  );
}

/* ─── Animated counter hook ─── */
function useCountUp(target: number, duration = 1800, start = false) {
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

/* ─── Intersection observer hook ─── */
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

/* ─── Stats counter component ─── */
function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1600, start);
  return (
    <div className="text-center">
      <div className="text-5xl font-extrabold text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-slate-400 tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function BackendSupport() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const statsRef = useInView(0.3);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    { icon: RefreshCw, text: "Managing orders, inventory, and returns manually across platforms." },
    { icon: Headphones, text: "Handling customer queries and complaints efficiently." },
    { icon: BarChart3, text: "Tracking payments, refunds, and reconciliations accurately." },
    { icon: Shield, text: "Maintaining account health and avoiding penalties on marketplaces." },
    { icon: TrendingUp, text: "Managing multiple backend operations while focusing on business growth." },
  ];

  const services = [
    { icon: Package, text: "Complete order processing and fulfillment management." },
    { icon: RefreshCw, text: "Inventory tracking, stock updates, and synchronization." },
    { icon: BarChart3, text: "Payment reconciliation, refund handling, and reporting." },
    { icon: Headphones, text: "Customer support management including queries and complaints." },
    { icon: Shield, text: "Account health monitoring, feedback management, and performance optimization." },
  ];

  const benefits = [
    { icon: RefreshCw, title: "Smooth Operations", desc: "Seamless and efficient backend workflows, end to end." },
    { icon: TrendingUp, title: "Lower Costs", desc: "Reduced workload and operational overhead." },
    { icon: Headphones, title: "Happy Customers", desc: "Improved satisfaction, loyalty, and retention rates." },
    { icon: BarChart3, title: "Accurate Reporting", desc: "Reliable financial tracking, forecasting and insights." },
    { icon: Shield, title: "Account Health", desc: "Better marketplace performance and compliance." },
    { icon: Package, title: "Scalable Systems", desc: "Infrastructure that grows alongside your business." },
  ];

  const faqs = [
    { q: "What is eCommerce backend support?", a: "Backend support includes managing all operational activities such as orders, inventory, payments, returns, and customer service to ensure smooth business functioning." },
    { q: "Why is backend support important?", a: "It ensures your operations run efficiently, reduces errors, improves customer experience, and allows you to focus on growing your business." },
    { q: "Do you manage order processing?", a: "Yes, we handle complete order lifecycle including order entry, processing, shipping coordination, and tracking." },
    { q: "Can you manage inventory across platforms?", a: "Yes, we provide real-time inventory tracking and updates across multiple eCommerce platforms." },
    { q: "Do you handle returns and refunds?", a: "Yes, we manage returns, refunds, claims, and customer disputes efficiently." },
    { q: "How do you manage customer support?", a: "We handle customer queries, complaints, feedback, and communication to ensure high satisfaction." },
    { q: "Do you monitor account health?", a: "Yes, we track account performance, feedback, ratings, and ensure compliance with marketplace policies." },
    { q: "Do you provide ongoing support?", a: "Yes, we offer continuous backend support services to ensure smooth operations and business growth." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(103,232,249,1) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            animation: "gridPan 20s linear infinite",
          }}
        />

        {/* Radial glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(60px)", animation: "pulse 6s ease-in-out infinite" }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0891b2 0%, transparent 70%)", filter: "blur(80px)", animation: "pulse 8s ease-in-out infinite 2s" }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400 opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${4 + i}s ease-in-out infinite ${i * 0.7}s`,
            }}
          />
        ))}

        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left copy */}
          <div className={`transition-all duration-1000 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-8">
              <Cloud className="h-4 w-4" />
              <span>eCommerce Backend Support Experts</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              End-to-End{" "}
              <span className="relative">
                <span className="text-cyan-400">Backend</span>
              </span>{" "}
              Support for Your{" "}
              <span className="text-cyan-400">eCommerce</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              We handle your daily operations — orders, inventory, payments, and customer support — so you can focus on scaling your business.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["500+ Clients Served", "99.9% Uptime", "24/7 Support"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-slate-300">
                  <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="group relative overflow-hidden bg-cyan-500 px-7 py-3.5 rounded-xl text-slate-900 font-semibold transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95"
              >
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <a href="#services"
                className="border border-white/20 px-7 py-3.5 rounded-xl text-white font-medium hover:bg-white/8 hover:border-white/40 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right image card */}
          <div className={`transition-all duration-1000 delay-300 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative">
              {/* Decorative border frame */}
              <div className="absolute -inset-3 rounded-3xl border border-cyan-500/20" />
              <div className="absolute -inset-6 rounded-3xl border border-cyan-500/10" />
              <img
                src="https://images.unsplash.com/photo-1667372531881-6f975b1c86db?q=80"
                alt="Backend Support Operations"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Overlay stats card */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">98%</div>
                    <div className="text-xs text-slate-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-slate-900 border border-slate-700 rounded-2xl p-3 shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium">Live Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>

        {/* CSS animations */}
        <style>{`
          @keyframes gridPan { 0% { transform: translate(0,0); } 100% { transform: translate(60px,60px); } }
          @keyframes pulse { 0%,100% { opacity:0.15; transform:scale(1); } 50% { opacity:0.25; transform:scale(1.05); } }
          @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
        `}</style>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-slate-900 border-y border-slate-800" ref={statsRef.ref}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800">
          <StatCounter value={500} suffix="+" label="Clients Served" start={statsRef.inView} />
          <StatCounter value={99} suffix="%" label="Satisfaction Rate" start={statsRef.inView} />
          <StatCounter value={24} suffix="/7" label="Active Support" start={statsRef.inView} />
          <StatCounter value={10} suffix="+" label="Years Experience" start={statsRef.inView} />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-cyan-50 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1598870784088-35e7058da12c?q=80"
            className="rounded-2xl shadow-xl w-full object-cover"
            style={{ aspectRatio: "4/3" }}
            alt="eCommerce Operations"
          />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">Our Approach</span>
          <h2 className="text-5xl font-extrabold leading-tight">
            <AccentLastTwo text="Reliable eCommerce Backend Support Services" />
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Running an eCommerce business involves multiple backend operations that require constant monitoring and management.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We provide complete backend support solutions to ensure smooth operations, improved efficiency, and better customer experience.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "End-to-end order and inventory management",
              "Accurate payment and refund handling",
              "Customer support and issue resolution",
              "Performance monitoring and optimization",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600" />
                </div>
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGES + SERVICES ── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Why It Matters</span>
            <h2 className="text-5xl font-extrabold">
              <AccentLastTwo text="Challenges & Our Solutions" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-lg">!</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-800">Common Challenges</h3>
              </div>
              <div className="p-8 space-y-4">
                {challenges.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                      <Icon className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-slate-600 pt-1.5 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800">Our Services</h3>
              </div>
              <div className="p-8 space-y-4">
                {services.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors">
                      <Icon className="h-4 w-4 text-cyan-600" />
                    </div>
                    <p className="text-slate-600 pt-1.5 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-900/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Why Choose Us</span>
            <h2 className="text-5xl font-extrabold">
              <AccentLastTwo text="Benefits of Backend Support Services" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="group relative bg-white/5 border border-white/8 p-7 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center mb-5 group-hover:bg-cyan-500/25 transition-colors">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="font-extrabold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">How We Work</span>
            <h2 className="text-5xl font-extrabold">
              <AccentLastTwo text="Simple Onboarding Process" />
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery Call", desc: "We learn about your business, platforms, and pain points." },
              { step: "02", title: "Custom Plan", desc: "We design a tailored backend support strategy for you." },
              { step: "03", title: "Onboarding", desc: "Seamless integration with your existing tools and workflows." },
              { step: "04", title: "Ongoing Support", desc: "Continuous management, reporting, and optimization." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-full hover:border-cyan-200 hover:shadow-md transition-all">
                  <span className="text-5xl font-extrabold text-slate-100 leading-none">{step}</span>
                  <h3 className="mt-3 font-extrabold text-slate-800">{title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Got Questions?</span>
            <h2 className="text-5xl font-extrabold">
              <AccentLastTwo text="Frequently Asked Questions" />
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${openIndex === i ? "border-cyan-200 shadow-md" : "border-slate-100 shadow-sm hover:border-slate-200"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown className={`flex-shrink-0 h-5 w-5 text-slate-400 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-cyan-600" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(6,182,212,0.25) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(103,232,249,1) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/15 px-4 py-2 text-sm text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Backend Experts — Ready to Start
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            Optimize Your Operations &{" "}
            <span className="text-cyan-400">Scale Your Business</span>
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Let our experts manage your backend operations while you focus on growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold hover:bg-white/8 hover:border-white/35 transition-all duration-300"
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