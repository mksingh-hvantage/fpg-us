import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Layers,
  Search,
  ImageIcon,
  Globe2,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── tiny utility: split last two words and colour them ─── */
function ColouredHeading({ text, className = "" }: { text: string; className?: string }) {
  const words = text.trim().split(" ");
  const last2 = words.slice(-2).join(" ");
  const rest  = words.slice(0, -2).join(" ");
  return (
    <span className={className}>
      {rest}{rest ? " " : ""}
      <span className="text-cyan-600">{last2}</span>
    </span>
  );
}

/* ─── animated counter ─── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(end / 60);
      const t = setInterval(() => {
        start += step;
        if (start >= end) { setCount(end); clearInterval(t); }
        else setCount(start);
      }, 20);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function CatalogManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const challenges = [
    { icon: Layers,    text: "Managing large product catalogs with consistent and accurate data." },
    { icon: Zap,       text: "Time-consuming manual product uploads and frequent updates." },
    { icon: ImageIcon, text: "Inconsistent product images, descriptions, and pricing errors." },
    { icon: Search,    text: "Low visibility due to unoptimised product listings." },
    { icon: Globe2,    text: "Handling multi-channel selling across Amazon, Shopify, and other platforms." },
  ];

  const services = [
    { icon: Layers,     text: "End-to-end product catalog management and optimisation." },
    { icon: BarChart3,  text: "Bulk product upload, editing, and structured data management." },
    { icon: Search,     text: "SEO-friendly product titles, descriptions, and keyword optimisation." },
    { icon: ImageIcon,  text: "Product image enhancement and standardisation." },
    { icon: Globe2,     text: "Multi-platform catalog handling (Amazon, Shopify, WooCommerce, Magento)." },
  ];

  const benefits = [
    { icon: ShieldCheck, title: "Accurate Catalog",      desc: "Well-organised and accurate product data across every channel." },
    { icon: Search,      title: "Higher Visibility",     desc: "Improved product discoverability on search engines." },
    { icon: TrendingUp,  title: "Better Conversions",    desc: "Optimised listings that turn browsers into buyers." },
    { icon: Zap,         title: "Reduced Manual Effort", desc: "Automation-driven workflows eliminate repetitive tasks." },
    { icon: Globe2,      title: "Multi-Channel Ready",   desc: "Seamless management across every marketplace." },
    { icon: BarChart3,   title: "Data-Driven Growth",    desc: "Continuous monitoring and optimisation for sustained results." },
  ];

  const stats = [
    { value: 98,  suffix: "%", label: "Catalog Accuracy" },
    { value: 3,   suffix: "x", label: "Faster Uploads"   },
    { value: 40,  suffix: "%", label: "More Conversions"  },
    { value: 500, suffix: "+", label: "Brands Served"     },
  ];

  const faqs = [
    { q: "What is catalog management in eCommerce?",
      a: "Catalog management involves organising, updating, and optimising product data such as titles, descriptions, images, and pricing to ensure accuracy and improve online visibility." },
    { q: "Why is catalog management important?",
      a: "Proper catalog management improves product discoverability, enhances user experience, and increases conversion rates by presenting accurate and optimised product information." },
    { q: "Do you support multiple eCommerce platforms?",
      a: "Yes, we manage product catalogs across platforms like Amazon, Shopify, WooCommerce, Magento, and other marketplaces." },
    { q: "Can you handle bulk product uploads?",
      a: "Absolutely. We provide bulk product upload and editing services to save time and maintain consistency across large inventories." },
    { q: "Do you optimise product listings for SEO?",
      a: "Yes, we create SEO-optimised product titles, descriptions, and keywords to improve search rankings and visibility." },
    { q: "Will my product data remain accurate?",
      a: "We ensure data accuracy through structured processes, validation checks, and continuous updates." },
    { q: "Can you manage images and product content?",
      a: "Yes, we optimise product images and content to maintain consistency and improve conversion rates." },
    { q: "Do you offer ongoing catalog support?",
      a: "Yes, we provide continuous catalog management support including updates, monitoring, and optimisation." },
  ];

  return (
    <>
      {/* ─── GLOBAL ANIMATION KEYFRAMES ─── */}
      <style>{`
        @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes slideRight { from { opacity:0; transform:translateX(-24px) } to { opacity:1; transform:translateX(0) } }
        @keyframes floatY   { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-10px) } }
        @keyframes pulse    { 0%,100%{ opacity:.6 } 50%{ opacity:1 } }
        @keyframes gradShift{
          0%  { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100%{ background-position: 0% 50% }
        }
        @keyframes orb1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,-30px)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,40px)} }
        @keyframes scanLine { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes borderGlow { 0%,100%{box-shadow:0 0 0 1px rgba(34,211,238,.2)} 50%{box-shadow:0 0 0 2px rgba(34,211,238,.5),0 0 24px rgba(34,211,238,.15)} }

        .anim-fade-up   { animation: fadeUp   .7s ease both }
        .anim-fade-in   { animation: fadeIn   .9s ease both }
        .anim-slide-r   { animation: slideRight .7s ease both }
        .anim-float     { animation: floatY   4s ease-in-out infinite }
        .delay-100 { animation-delay:.1s }
        .delay-200 { animation-delay:.2s }
        .delay-300 { animation-delay:.3s }
        .delay-400 { animation-delay:.4s }
        .delay-500 { animation-delay:.5s }
        .delay-600 { animation-delay:.6s }
        .delay-700 { animation-delay:.7s }

        .hero-bg {
          background: linear-gradient(135deg,#020617 0%,#0c1a2e 40%,#0a2a2a 70%,#020617 100%);
          background-size: 300% 300%;
          animation: gradShift 12s ease infinite;
        }
        .orb-1 { animation: orb1 8s ease-in-out infinite }
        .orb-2 { animation: orb2 10s ease-in-out infinite }

        .scan-line {
          position:absolute;inset-x:0;height:2px;
          background:linear-gradient(90deg,transparent,rgba(34,211,238,.4),transparent);
          animation: scanLine 4s linear infinite;
          pointer-events:none;
        }

        .card-hover {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,.08);
        }

        .glow-btn {
          position:relative;overflow:hidden;transition:all .3s ease;
        }
        .glow-btn::after {
          content:'';position:absolute;inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transform:translateX(-100%);transition:transform .5s ease;
        }
        .glow-btn:hover::after { transform:translateX(100%); }
        .glow-btn:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(34,211,238,.35); }

        .outline-btn {
          transition: all .3s ease;
          backdrop-filter: blur(4px);
        }
        .outline-btn:hover {
          background:rgba(255,255,255,.12);
          transform:translateY(-2px);
        }

        .faq-item {
          transition: box-shadow .25s ease;
        }
        .faq-item:hover {
          box-shadow: 0 4px 20px rgba(8,145,178,.08);
        }

        .stat-card {
          position:relative;overflow:hidden;
          animation: borderGlow 3s ease-in-out infinite;
        }
        .stat-card::before {
          content:'';position:absolute;top:-50%;left:-50%;
          width:200%;height:200%;
          background:radial-gradient(circle at center,rgba(34,211,238,.04) 0%,transparent 60%);
          animation: pulse 4s ease-in-out infinite;
        }

        .grid-line {
          background-image:
            linear-gradient(rgba(34,211,238,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <div className="bg-white text-slate-800">

        {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
        <section className="hero-bg relative text-white overflow-hidden min-h-[90vh] flex items-center">

          {/* grid overlay */}
          <div className="grid-line absolute inset-0 pointer-events-none" />

          {/* animated orbs */}
          <div className="orb-1 absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(8,145,178,.18) 0%,transparent 70%)"}} />
          <div className="orb-2 absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%)"}} />

          {/* scan line */}
          <div className="scan-line" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* LEFT */}
            <div>
              <div className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-500/30
                              bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur mb-6">
                <Cloud className="h-4 w-4" />
                eCommerce Catalog Management Experts
              </div>

              <h1 className="anim-fade-up delay-100 text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Streamline &amp; Optimise Your Product Catalog for{" "}
                <span className="relative inline-block">
                  <span className="text-cyan-400">Maximum Sales</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0" />
                </span>
              </h1>

              <p className="anim-fade-up delay-200 mt-6 text-lg text-slate-300 leading-relaxed">
                Manage, optimise, and scale your product listings with expert catalog management services.
              </p>

              <p className="anim-fade-up delay-300 mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
                We help businesses maintain accurate product data, improve search visibility, and enhance
                customer experience through structured catalog management solutions.
              </p>

              {/* stat pills */}
              <div className="anim-fade-up delay-400 mt-8 flex flex-wrap gap-3">
                {[["98%","Accuracy"],["3×","Faster"],["500+","Brands"]].map(([v,l],i)=>(
                  <div key={i} className="flex items-center gap-2 rounded-full border border-cyan-500/20
                                          bg-white/5 px-4 py-2 backdrop-blur">
                    <span className="text-cyan-400 font-bold text-sm">{v}</span>
                    <span className="text-slate-400 text-sm">{l}</span>
                  </div>
                ))}
              </div>

              <div className="anim-fade-up delay-500 mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="glow-btn bg-cyan-500 px-7 py-3.5 rounded-xl text-slate-900 font-semibold flex items-center gap-2"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
                <a href="#services"
                   className="outline-btn border border-white/20 px-7 py-3.5 rounded-xl text-white font-medium flex items-center gap-2">
                  Explore Services
                </a>
              </div>
            </div>

            {/* RIGHT — floating image card */}
            <div className="anim-fade-in delay-300 relative hidden lg:block">
              {/* decorative ring */}
              <div className="absolute inset-0 rounded-3xl"
                   style={{background:"radial-gradient(circle at 50% 50%,rgba(34,211,238,.12),transparent 70%)"}} />

              <div className="anim-float relative rounded-3xl overflow-hidden border border-cyan-500/20
                              shadow-[0_40px_80px_rgba(0,0,0,.5)]">
                <img
                  src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80"
                  alt="Catalog Management dashboard"
                  className="w-full object-cover"
                />
                {/* glass overlay badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10
                                bg-slate-900/70 backdrop-blur px-5 py-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Avg. Conversion Lift</p>
                    <p className="text-white font-bold text-lg leading-none">+40% <span className="text-cyan-400 text-sm font-normal">this quarter</span></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════
            STATS BAND
        ════════════════════════════════ */}
        <section className="bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="stat-card rounded-2xl border border-slate-700/50 bg-slate-900 p-6 text-center">
                <p className="text-3xl font-extrabold text-cyan-400">
                  <Counter end={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════
            INTRO
        ════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl card-hover">
            <img
              src="https://images.unsplash.com/photo-1600693615301-8752ab9411f6?q=80"
              alt="Team working on catalog"
              className="w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">Our Expertise</p>
            <h2 className="text-3xl font-extrabold leading-snug">
              <ColouredHeading text="Professional eCommerce Catalog Management Services" />
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Ensure your product data is accurate, optimised, and consistent across all platforms with
              our expert catalog management solutions. We help businesses manage product listings efficiently
              while improving visibility, performance, and customer engagement.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Accurate and structured product data management",
                "SEO-optimised product listings for better rankings",
                "Consistent product images and descriptions",
                "Scalable solutions for growing inventories",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-50 transition-colors">
                  <div className="mt-0.5 flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                  </div>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            CHALLENGES + SERVICES
        ════════════════════════════════ */}
        <section id="services" className="py-24" style={{background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f0fdf4 100%)"}}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">What We Solve</p>
              <h2 className="text-5xl font-extrabold">
                <ColouredHeading text="Challenges We Overcome & Services We Offer" />
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* challenges */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 card-hover">
                <div className="flex items-center gap-3 mb-7">
                  <div className="h-9 w-9 rounded-xl bg-red-50 flex items-center justify-center">
                    <span className="text-red-500 text-lg">⚠</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">Common Challenges</h3>
                </div>
                <div className="space-y-4">
                  {challenges.map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-red-50/50 transition-colors group">
                      <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <item.icon className="h-4 w-4 text-red-400" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* services */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 card-hover">
                <div className="flex items-center gap-3 mb-7">
                  <div className="h-9 w-9 rounded-xl bg-cyan-50 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">Our Services</h3>
                </div>
                <div className="space-y-4">
                  {services.map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-cyan-50/50 transition-colors group">
                      <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                        <item.icon className="h-4 w-4 text-cyan-500" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            BENEFITS
        ════════════════════════════════ */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="grid-line absolute inset-0 pointer-events-none opacity-60" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-3">Why It Matters</p>
              <h2 className="text-5xl font-extrabold">
                <ColouredHeading text="Benefits of Catalog Management" />
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, i) => (
                <div key={i}
                     className="card-hover group rounded-2xl border border-slate-700/50 bg-slate-900 p-6
                                hover:border-cyan-500/40 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4
                                  group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="font-bold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">Got Questions?</p>
              <h2 className="text-5xl font-extrabold">
                <ColouredHeading text="Frequently Asked Questions" />
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i}
                     className="faq-item rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left gap-4
                               hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-800">{faq.q}</span>
                    <ChevronDown
                      className={`flex-shrink-0 h-5 w-5 text-cyan-500 transition-transform duration-300
                                  ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openIndex === i ? "200px" : "0px" }}
                  >
                    <p className="px-6 pb-5 text-slate-500 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            CTA
        ════════════════════════════════ */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-24">
          {/* accent lines */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          {/* orbs */}
          <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(8,145,178,.2) 0%,transparent 70%)"}} />
          <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(6,182,212,.15) 0%,transparent 70%)"}} />

          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30
                            bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              🚀 Catalog Experts Ready to Help
            </div>

            <h2 className="text-5xl sm:text-5xl font-extrabold leading-tight mb-4">
              Optimise Your Product Listings &amp;{" "}
              <span className="text-cyan-400">Grow Faster</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Improve product visibility, increase conversions, and scale your eCommerce business
              with expert catalog management services.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="glow-btn bg-cyan-500 px-8 py-4 rounded-2xl font-semibold text-slate-900 text-lg"
              >
                Get Started Now
              </button>
              <a href="#services"
                 className="outline-btn border border-white/20 px-8 py-4 rounded-2xl font-semibold text-white text-lg
                            flex items-center justify-center gap-2">
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
    </>
  );
}