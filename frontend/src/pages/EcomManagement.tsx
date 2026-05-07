import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ShoppingCart,
  Search,
  Package,
  HeadphonesIcon,
  TrendingUp,
  Star,
} from "lucide-react";
import { useState, useEffect, useRef, type JSX } from 'react';

// Colors last two words of any heading with text-cyan-600
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

// Animated counter on scroll-into-view
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

export default function EcomManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const statsRef = useInView();

  const stores    = useCountUp(1200, 1800, statsRef.inView);
  const growth    = useCountUp(85,   1800, statsRef.inView);
  const platforms = useCountUp(10,   1800, statsRef.inView);
  const support   = useCountUp(24,   1800, statsRef.inView);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    "Managing multiple e-commerce platforms like Amazon, eBay, and Shopify efficiently.",
    "Low product visibility and poor search rankings on marketplaces.",
    "Time-consuming product listing and catalog management.",
    "Inventory mismatches and order processing delays.",
    "Handling customer queries, returns, and negative reviews effectively.",
  ];

  const services = [
    { icon: ShoppingCart,    text: "Amazon, eBay, and marketplace store setup and management." },
    { icon: Search,          text: "Product listing optimization with SEO-friendly titles and descriptions." },
    { icon: Package,         text: "Inventory management and order processing support." },
    { icon: HeadphonesIcon,  text: "Customer service, feedback management, and review handling." },
    { icon: TrendingUp,      text: "Marketplace advertising (Amazon PPC) and sales growth strategies." },
  ];

  const benefits = [
    { icon: Search,       title: "Higher Visibility",       desc: "SEO-driven listing optimization that pushes your products to the top of marketplace search results." },
    { icon: TrendingUp,   title: "Revenue Growth",          desc: "Proven PPC and conversion strategies that consistently grow sales month over month." },
    { icon: Package,      title: "Reduced Workload",        desc: "We handle the day-to-day grind so you can focus entirely on scaling your business." },
    { icon: ShoppingCart, title: "Faster Fulfillment",      desc: "Real-time inventory sync and order routing that eliminates delays and stock-outs." },
    { icon: Star,         title: "Better Reputation",       desc: "Proactive review management and stellar customer support that builds lasting trust." },
    { icon: Cloud,        title: "Multi-Platform Scale",    desc: "Unified management across Amazon, eBay, Shopify, Walmart, and more from one team." },
  ];

  const faqs = [
    { q: "What is e-commerce store management outsourcing?",  a: "E-commerce store management outsourcing involves delegating daily operations of online stores such as Amazon, eBay, and Shopify to experts who handle listings, inventory, orders, and customer support efficiently." },
    { q: "Which platforms do you support?",                   a: "We provide end-to-end support for major platforms including Amazon, eBay, Shopify, WooCommerce, Walmart Marketplace, and other global e-commerce platforms." },
    { q: "How does outsourcing improve product visibility?",  a: "We optimize product listings with keyword-rich titles, descriptions, backend keywords, and images to improve search rankings and increase visibility on platforms like Amazon and eBay." },
    { q: "Can you help increase sales on Amazon and eBay?",   a: "Yes, we use proven strategies including SEO optimization, PPC advertising, pricing strategies, and competitor analysis to boost conversions and sales performance." },
    { q: "Do you manage inventory and order processing?",     a: "Yes, our team ensures accurate inventory tracking, timely order processing, shipping coordination, and returns management to maintain smooth operations." },
    { q: "How do you handle customer support?",               a: "We provide professional customer service, including responding to inquiries, resolving complaints, managing returns, and maintaining positive seller ratings." },
    { q: "Is my store data secure with outsourcing?",         a: "Absolutely. We follow strict data security protocols, secure access systems, and confidentiality agreements to ensure complete protection of your business data." },
    { q: "Can small businesses benefit from e-commerce outsourcing?", a: "Yes, startups and small businesses benefit greatly by saving time, reducing costs, and gaining access to expert strategies that help scale their online store quickly." },
  ];

  // Platform logos text-based
  const platforms_list = ['Amazon', 'eBay', 'Shopify', 'Walmart', 'WooCommerce', 'Etsy'];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center overflow-hidden">

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Blobs */}
        <div className="absolute top-20 right-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-8  w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/2  left-1/3 w-64 h-64 bg-cyan-400/5  rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }} />

        {/* Orbiting decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[680px] h-[680px] pointer-events-none hidden lg:block">
          <div className="absolute inset-0  rounded-full border border-cyan-500/10 animate-spin" style={{ animationDuration: '35s' }} />
          <div className="absolute inset-12 rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
          <div className="absolute inset-24 rounded-full border border-slate-400/10 animate-spin" style={{ animationDuration: '15s' }} />
          {['Amazon PPC', 'SEO Listings', 'Live Inventory', '24/7 Support', 'Multi-Channel', 'Review Mgmt'].map((label, i) => {
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

        <div className="relative mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left — copy */}
          <div>
            <span
              className={`inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <Cloud className="mr-2 h-4 w-4" />
              E-Commerce Store Management
            </span>

            <h1
              className={`text-5xl lg:text-6xl font-extrabold leading-tight transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Sell More on Amazon, eBay &{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                  Every Marketplace
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
              </span>
            </h1>

            <p
              className={`mt-6 text-lg text-slate-300 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Scale your online business with expert e-commerce outsourcing services designed to optimize listings, manage operations, and increase sales across multiple platforms.
            </p>

            <p
              className={`mt-4 text-base text-slate-400 max-w-xl transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Our e-commerce store management team handles product listings, inventory, order processing, and customer support — so you maximize visibility and revenue without the operational headache.
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

            {/* Platform badges */}
            <div
              className={`mt-10 transition-all duration-700 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Platforms We Manage</p>
              <div className="flex flex-wrap gap-2">
                {platforms_list.map(p => (
                  <span key={p} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — image + chips */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                alt="Ecommerce Management"
                className="w-full object-cover h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <p className="text-xs text-slate-300">Avg. Sales Growth</p>
              <p className="text-2xl font-extrabold text-cyan-400">85%</p>
            </div>

            <div className="absolute -bottom-4 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <p className="text-xs text-slate-300">Stores Managed</p>
              <p className="text-2xl font-extrabold text-cyan-400">1,200+</p>
            </div>

            <div className="absolute top-1/2 -right-8 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-white font-semibold">Orders Live</p>
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
            { value: `${stores}+`, label: 'Stores Managed' },
            { value: `${growth}%`,  label: 'Avg. Sales Growth' },
            { value: `${platforms}+`, label: 'Platforms Supported' },
            { value: `${support}/7`,  label: 'Support Coverage' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-5xl font-extrabold">{s.value}</span>
              <span className="mt-1 text-cyan-100 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
            className="rounded-3xl shadow-xl object-cover h-[460px] w-full"
            alt="E-commerce operations"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-slate-200/60" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-100 rounded-2xl -z-10" />
          <div className="absolute -top-4  -left-4  w-16 h-16 bg-slate-100 rounded-2xl -z-10" />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-4">Why Outsource?</span>
          <ColoredHeading
            text="End-to-End E-Commerce Store Management Solutions"
            className="text-3xl font-extrabold leading-snug"
          />

          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Managing an online store requires continuous optimization, accurate operations, and strategic marketing. Our outsourcing solutions help businesses streamline their e-commerce operations and focus on growth.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From product listing optimization to inventory control and customer engagement, we ensure your store runs efficiently while improving visibility and conversions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3">
            {[
              "SEO-optimized product listings",
              "Multi-platform store management",
              "Real-time inventory tracking",
              "Customer-focused support system",
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
              className="text-5xl font-extrabold"
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
              text="Key Benefits of E-Commerce Outsourcing"
              className="text-5xl font-extrabold text-white"
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
              text="Our Simple Onboarding Process"
              className="text-5xl font-extrabold"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200 z-0" />

            {[
              { step: '01', title: 'Audit',   desc: 'We review your store, listings, and current performance across platforms.' },
              { step: '02', title: 'Optimize', desc: 'SEO, images, pricing, and ad strategy are fully rebuilt for maximum impact.' },
              { step: '03', title: 'Manage',   desc: 'Ongoing inventory, orders, and customer support handled by our experts.' },
              { step: '04', title: 'Scale',    desc: 'Data-driven growth strategies to expand to new markets and platforms.' },
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
              className="text-5xl font-extrabold"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-16">
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
            🚀 E-Commerce Growth Experts
          </span>

          <ColoredHeading
            text="Scale Your Online Store with Expert Marketplace Management"
            className="text-5xl sm:text-5xl font-extrabold leading-tight text-white"
          />

          <p className="mt-6 text-lg text-cyan-100/80 max-w-2xl mx-auto leading-relaxed">
            Boost visibility, increase conversions, and streamline operations with our professional e-commerce outsourcing services for Amazon, eBay, and beyond.
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