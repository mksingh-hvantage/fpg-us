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
  ShoppingCart,
  Package,
  HeadphonesIcon,
  Megaphone,
  Settings,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── utility: colour last two words ─── */
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
      let val = 0;
      const step = Math.ceil(end / 60);
      const t = setInterval(() => {
        val += step;
        if (val >= end) { setCount(end); clearInterval(t); }
        else setCount(val);
      }, 20);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function EComBPO() {
  const [isModalOpen, setIsModalOpen]         = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('');
  const [openIndex, setOpenIndex]             = useState<number | null>(null);

  const stats = [
    { value: 500,  suffix: "+",  label: "Brands Served"      },
    { value: 98,   suffix: "%",  label: "Data Accuracy"       },
    { value: 40,   suffix: "%",  label: "Conversion Lift"     },
    { value: 24,   suffix: "/7", label: "Expert Support"      },
  ];

  const benefits = [
    { icon: TrendingUp,      text: "Increase online sales with SEO-optimized product listings."           },
    { icon: BarChart3,       text: "Save operational costs with eCommerce outsourcing services."          },
    { icon: Zap,             text: "Faster product uploads and catalog management."                       },
    { icon: ShieldCheck,     text: "High accuracy with multi-level quality checks."                      },
    { icon: Layers,          text: "Scalable solutions for growing online stores."                       },
    { icon: Search,          text: "Improved product visibility on search engines."                      },
    { icon: Package,         text: "Better inventory and order management efficiency."                    },
    { icon: Globe2,          text: "Focus on core business while experts handle backend operations."      },
  ];

  const faqs = [
    { q: "What is eCommerce BPO services?",       a: "eCommerce BPO services involve outsourcing product data entry, catalog management, order processing, and backend operations to improve efficiency and reduce costs." },
    { q: "Which platforms do you support?",        a: "We support Shopify, Amazon, WooCommerce, Magento, eBay, and other major eCommerce platforms." },
    { q: "How does SEO product listing help?",     a: "SEO-optimized product listings improve search rankings, increase visibility, and drive more organic traffic to your online store." },
    { q: "Do you handle bulk product uploads?",    a: "Yes, we specialize in bulk product data entry, uploads, and catalog management for large inventories." },
    { q: "Is my eCommerce data secure?",           a: "Yes, we follow strict data security protocols and confidentiality agreements to protect your business data." },
    { q: "Can you manage multiple marketplaces?",  a: "Yes, we manage product listings and data across multiple platforms like Amazon, Shopify, and eBay." },
    { q: "Do you provide inventory management?",   a: "Yes, we handle stock updates, pricing changes, and inventory tracking efficiently." },
    { q: "What is turnaround time?",               a: "Turnaround time depends on project size, but we ensure fast and efficient delivery." },
    { q: "Can small businesses use your services?",a: "Yes, our solutions are scalable and suitable for startups as well as large enterprises." },
    { q: "How does outsourcing help eCommerce growth?", a: "Outsourcing improves efficiency, reduces costs, and allows businesses to focus on marketing and sales growth." },
  ];

  const services = [
    "eCommerce account setup and onboarding",
    "Product photoshoot guidelines & image optimization",
    "Master catalog development & bulk product listing",
    "Order management and fulfillment support",
    "Inventory management and stock updates",
    "Payment reconciliation and financial tracking",
    "Return and claim management",
    "Customer support and query handling",
    "SEO product optimization and keyword targeting",
    "Account health management and performance monitoring",
    "Negative feedback and review management",
    "Product research and competitor analysis",
  ];

  const steps = [
    { title: "Market Research & Analysis",          desc: "We perform in-depth market research and competitor analysis to position your products at the top of search results. Our pricing strategy ensures optimal profit margins while staying competitive." },
    { title: "Product Photoshoot & Image Optimization", desc: "High-quality product images are optimized as per marketplace standards to increase engagement and conversions. We ensure your products create a strong first impression." },
    { title: "Product Data Collection",             desc: "We gather complete product specifications and attributes to improve search visibility and ensure accurate product listings across eCommerce platforms." },
    { title: "SEO Content Writing",                 desc: "Our team creates SEO-optimized product titles, descriptions, and keywords to boost rankings, visibility, and conversions." },
    { title: "Pricing Strategy & Approval",         desc: "We analyze market pricing trends and finalize competitive pricing with your approval to maximize sales and profitability." },
    { title: "Master Catalog Management",           desc: "All product data, images, and details are organized into a structured master catalog for easy management, scalability, and updates." },
    { title: "Store Linking & Navigation",          desc: "We create optimized product URLs and internal linking structures to improve user experience and SEO performance." },
    { title: "Store Launch & Optimization",         desc: "Before going live, we perform complete QA checks including SEO, performance, security, and error handling to ensure a flawless store launch." },
  ];

  const platforms = [
    "Shopify","WooCommerce","Magento","OpenCart","BigCommerce",
    "Volusion","3DCart","X-Cart","Drupal Commerce","Zepo","Miva",
  ];

  const servicess = [
    "eCommerce Website Development",
    "Product Listing & Data Entry Services",
    "Catalog Management & Optimization",
    "SEO & SEM Services for eCommerce",
    "Backend Support & Store Management",
    "Inventory & Data Management Solutions",
  ];

  const solutionCards = [
    {
      icon: ImageIcon,
      title: "Product Listing Optimization",
      color: "cyan",
      items: [
        "Professional product image editing & enhancement",
        "Background removal, retouching & resizing",
        "SEO product descriptions & keyword research",
        "Optimized product titles for better rankings",
        "Conversion-focused content writing",
      ],
    },
    {
      icon: Layers,
      title: "Catalog Management & Data Processing",
      color: "cyan",
      items: [
        "Master catalog creation & management",
        "Product data collection & structuring",
        "Pricing strategy & tax calculation",
        "Bulk product upload & data compilation",
        "Centralized database management",
      ],
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Store Setup & Development",
      color: "cyan",
      items: [
        "Account setup on Shopify, Amazon & marketplaces",
        "Web-store creation & customization",
        "Product listing & ongoing maintenance",
        "Photoshoot guidelines & content strategy",
      ],
    },
    {
      icon: Settings,
      title: "eCommerce Operations Management",
      color: "cyan",
      items: [
        "Order processing & fulfillment support",
        "Inventory management & stock updates",
        "Payment reconciliation & reporting",
        "Return & claim management",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support & Growth Optimization",
      color: "cyan",
      items: [
        "Customer support & query handling",
        "Product optimization for better conversions",
        "Account health monitoring",
        "Negative feedback & review management",
      ],
    },
    {
      icon: Megaphone,
      title: "eCommerce Marketing & Marketplace Growth",
      color: "cyan",
      items: [
        "Product research & competitor analysis",
        "SEO & SEM strategy implementation",
        "Marketplace promotions & campaign participation",
        "Performance analytics & reporting",
      ],
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes floatY    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes orb1      { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,-30px)} }
        @keyframes orb2      { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,40px)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scanLine  { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes pulse     { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes borderGlow{ 0%,100%{box-shadow:0 0 0 1px rgba(34,211,238,.2)} 50%{box-shadow:0 0 0 2px rgba(34,211,238,.5),0 0 24px rgba(34,211,238,.12)} }

        .anim-fade-up  { animation:fadeUp  .7s ease both }
        .anim-fade-in  { animation:fadeIn  .9s ease both }
        .anim-float    { animation:floatY  4s ease-in-out infinite }
        .delay-100{ animation-delay:.1s } .delay-200{ animation-delay:.2s }
        .delay-300{ animation-delay:.3s } .delay-400{ animation-delay:.4s }
        .delay-500{ animation-delay:.5s } .delay-600{ animation-delay:.6s }

        .hero-bg{
          background:linear-gradient(135deg,#020617 0%,#0c1a2e 40%,#0a2a2a 70%,#020617 100%);
          background-size:300% 300%;
          animation:gradShift 12s ease infinite;
        }
        .orb-1{ animation:orb1 8s ease-in-out infinite }
        .orb-2{ animation:orb2 10s ease-in-out infinite }
        .scan-line{
          position:absolute;inset-x:0;height:2px;
          background:linear-gradient(90deg,transparent,rgba(34,211,238,.4),transparent);
          animation:scanLine 4s linear infinite;pointer-events:none;
        }
        .grid-overlay{
          background-image:
            linear-gradient(rgba(34,211,238,.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(34,211,238,.04) 1px,transparent 1px);
          background-size:48px 48px;
        }
        .card-hover{ transition:transform .25s ease,box-shadow .25s ease }
        .card-hover:hover{ transform:translateY(-4px); box-shadow:0 20px 40px rgba(0,0,0,.08) }
        .glow-btn{
          position:relative;overflow:hidden;transition:all .3s ease;
        }
        .glow-btn::after{
          content:'';position:absolute;inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transform:translateX(-100%);transition:transform .5s ease;
        }
        .glow-btn:hover::after{ transform:translateX(100%) }
        .glow-btn:hover{ transform:translateY(-2px);box-shadow:0 8px 30px rgba(34,211,238,.35) }
        .outline-btn{ transition:all .3s ease;backdrop-filter:blur(4px) }
        .outline-btn:hover{ background:rgba(255,255,255,.12);transform:translateY(-2px) }
        .stat-card{
          position:relative;overflow:hidden;
          animation:borderGlow 3s ease-in-out infinite;
        }
        .stat-card::before{
          content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;
          background:radial-gradient(circle at center,rgba(34,211,238,.04) 0%,transparent 60%);
          animation:pulse 4s ease-in-out infinite;
        }
        .step-card{
          position:relative;overflow:hidden;
          transition:transform .25s ease,box-shadow .25s ease;
        }
        .step-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#06b6d4,#0891b2);
          transform:scaleX(0);transform-origin:left;
          transition:transform .3s ease;
        }
        .step-card:hover{ transform:translateY(-4px);box-shadow:0 20px 40px rgba(0,0,0,.1) }
        .step-card:hover::before{ transform:scaleX(1) }
        .platform-pill{
          transition:all .25s ease;
        }
        .platform-pill:hover{
          background:#ecfeff;border-color:#67e8f9;color:#0891b2;transform:translateY(-2px);
        }
        .faq-item{ transition:box-shadow .25s ease }
        .faq-item:hover{ box-shadow:0 4px 20px rgba(8,145,178,.08) }
        .solution-card{
          transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;
        }
        .solution-card:hover{
          transform:translateY(-4px);
          box-shadow:0 20px 40px rgba(0,0,0,.08);
          border-color:rgba(34,211,238,.3);
        }
      `}</style>

      <div className="bg-white text-slate-800">

        {/* ════════ HERO ════════ */}
        <section className="hero-bg relative text-white overflow-hidden min-h-[90vh] flex items-center">
          <div className="grid-overlay absolute inset-0 pointer-events-none" />
          <div className="orb-1 absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(8,145,178,.18) 0%,transparent 70%)"}} />
          <div className="orb-2 absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%)"}} />
          <div className="scan-line" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* LEFT */}
            <div>
              <div className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-500/30
                              bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur mb-6">
                <Cloud className="h-4 w-4" />
                eCommerce BPO &amp; Data Entry Experts
              </div>

              <h1 className="anim-fade-up delay-100 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                eCommerce Data Entry Services |{" "}
                <span className="relative inline-block">
                  <span className="text-cyan-400">Outsource Product Listing</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0" />
                </span>{" "}
                &amp; Catalog Management
              </h1>

              <p className="anim-fade-up delay-200 mt-6 text-lg text-slate-300 leading-relaxed">
                Boost your online store with professional eCommerce data entry, product listing,
                and catalog management services.
              </p>

              <p className="anim-fade-up delay-300 mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
                We help businesses manage Shopify, Amazon, and eCommerce stores with SEO-optimized
                product listings, bulk uploads, and backend support.
              </p>

              {/* stat pills */}
              <div className="anim-fade-up delay-400 mt-8 flex flex-wrap gap-3">
                {[["500+","Brands"],["98%","Accuracy"],["40%","More Sales"],["24/7","Support"]].map(([v,l],i) => (
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
                   className="outline-btn border border-white/20 px-7 py-3.5 rounded-xl text-white font-medium">
                  Explore Services
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="anim-fade-in delay-300 relative hidden lg:block">
              <div className="absolute inset-0 rounded-3xl"
                   style={{background:"radial-gradient(circle at 50% 50%,rgba(34,211,238,.12),transparent 70%)"}} />
              <div className="anim-float relative rounded-3xl overflow-hidden border border-cyan-500/20
                              shadow-[0_40px_80px_rgba(0,0,0,.5)]">
                <img
                  src="https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80"
                  alt="eCommerce Data Entry Services"
                  className="w-full object-cover"
                />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10
                                bg-slate-900/70 backdrop-blur px-5 py-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Average Sales Lift</p>
                    <p className="text-white font-bold text-lg leading-none">
                      +40% <span className="text-cyan-400 text-sm font-normal">after optimisation</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ════════ STATS BAND ════════ */}
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

        {/* ════════ INTRO ════════ */}
        <section className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl card-hover">
            <img
              src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80"
              alt="eCommerce team"
              className="w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">Our Expertise</p>
            <h2 className="text-3xl font-extrabold leading-snug">
              <ColouredHeading text="Build & Scale Your Online Store with Expert eCommerce Solutions" />
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Looking to transform your business into a high-performing online store? We help you create a
              powerful eCommerce website that is visually appealing like a product catalog, functional like
              a physical store, and optimized for conversions. Our end-to-end eCommerce services include
              store development, product listing, catalog management, SEO optimization, and digital marketing.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Complete eCommerce store setup & development",
                "SEO-optimized product listings & catalog management",
                "High-quality product images & content optimization",
                "Scalable solutions to grow your online business",
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

        {/* ════════ SOLUTIONS GRID ════════ */}
        <section className="py-24" style={{background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f0fdf4 100%)"}}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">What We Do</p>
              <h2 className="text-4xl font-extrabold text-slate-900">
                <ColouredHeading text="Complete eCommerce Solutions for High-Performance Online Stores" />
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                End-to-end eCommerce services including product listing, SEO optimization, catalog management,
                and marketplace support to help your business grow faster online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {solutionCards.map((card, i) => (
                <div key={i} className="solution-card bg-white p-7 rounded-2xl shadow-sm border border-slate-100">
                  <div className="h-11 w-11 rounded-xl bg-cyan-50 flex items-center justify-center mb-5">
                    <card.icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-slate-900">{card.title}</h3>
                  <ul className="space-y-2.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-600 text-sm">
                        <div className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-full bg-cyan-100 flex items-center justify-center">
                          <CheckCircle2 className="h-3 w-3 text-cyan-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ GROWTH SECTION ════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">Grow With Us</p>
              <h2 className="text-4xl font-extrabold">
                <ColouredHeading text="eCommerce Growth & Management Solutions" />
              </h2>
              <p className="mt-4 text-slate-600">
                End-to-end eCommerce services to build, manage, and scale your online store with confidence.
              </p>
            </div>

            {/* who it's for */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {[
                { title: "For New Stores",        desc: "Complete eCommerce store setup with product listing, SEO optimization, and launch strategy.",                icon: ShoppingCart },
                { title: "For Existing Stores",   desc: "Optimize your existing store with better listings, SEO, and performance improvements.",                      icon: TrendingUp   },
                { title: "For Growing Businesses",desc: "Scale operations with catalog management, automation, and expert support.",                                    icon: BarChart3    },
              ].map((item, i) => (
                <div key={i} className="card-hover group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm
                                        hover:border-cyan-200 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-cyan-50 flex items-center justify-center mb-4
                                  group-hover:bg-cyan-100 transition-colors">
                    <item.icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* why go online */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">The Opportunity</p>
                <h3 className="text-3xl font-extrabold">
                  <ColouredHeading text="Why Take Your Business Online?" />
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Online shopping is growing rapidly. Customers prefer convenience, speed, and accessibility.
                  Having an eCommerce store ensures your business stays competitive and future-ready.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Sell anytime, anywhere, and reach a global audience while increasing your revenue potential.
                </p>
                <div className="mt-6 space-y-3">
                  {["Reach customers globally","24/7 sales capability","Lower operational costs","Higher scalability"].map((item,i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-50 transition-colors">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                      </div>
                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl card-hover">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80"
                     alt="online shopping" className="w-full object-cover" />
              </div>
            </div>

            {/* services grid */}
            <div id="services">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3 text-center">What We Offer</p>
              <h3 className="text-3xl font-extrabold text-center mb-10">
                <ColouredHeading text="Our eCommerce Services" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((item, i) => (
                  <div key={i} className="card-hover flex items-start gap-3 bg-white p-5 rounded-xl
                                          border border-slate-100 shadow-sm hover:border-cyan-200 transition-colors">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                    </div>
                    <p className="text-slate-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* outsource banner */}
            <div className="mt-20 relative rounded-3xl overflow-hidden border border-cyan-100 bg-gradient-to-r
                            from-cyan-50 to-slate-50 p-10 shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-2">The Smart Move</p>
                <h3 className="text-3xl font-extrabold">
                  <ColouredHeading text="Why Outsource eCommerce Management?" />
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Managing an online store requires time, skilled staff, and constant monitoring. Outsourcing
                  helps reduce costs and ensures expert handling of your business.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Focus on growing your business while we manage your store operations efficiently.
                </p>
              </div>
            </div>

            {/* how we help */}
            <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">Our Approach</p>
                <h3 className="text-3xl font-extrabold">
                  <ColouredHeading text="How We Help You Grow" />
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  We optimize every aspect of your eCommerce store to improve visibility, conversions, and revenue.
                </p>
                <div className="mt-6 space-y-3">
                  {["SEO optimized product listings","High-quality product images","Conversion-focused descriptions","Review & rating management"].map((item,i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-50 transition-colors">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                      </div>
                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full"
                     style={{background:"radial-gradient(circle,rgba(34,211,238,.1) 0%,transparent 70%)"}} />
                <BarChart3 className="h-8 w-8 text-cyan-400 mb-4" />
                <h4 className="text-2xl font-bold">Result-Driven Approach</h4>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  We focus on data, strategy, and execution to ensure your eCommerce store grows consistently
                  — with measurable results every step of the way.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                  {[["98%","Accuracy"],["40%","More Sales"]].map(([v,l],i) => (
                    <div key={i}>
                      <p className="text-2xl font-extrabold text-cyan-400">{v}</p>
                      <p className="text-sm text-slate-400">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ════════ PROCESS ════════ */}
        <section className="py-24" style={{background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f0fdf4 100%)"}}>
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">How It Works</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold">
                <ColouredHeading text="Our eCommerce Process & Solutions" />
              </h2>
              <p className="mt-4 text-slate-600">
                A complete step-by-step eCommerce strategy to build, optimise, and scale your online store
                for maximum growth and conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="step-card bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-cyan-600
                                  text-white font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* platforms */}
            <div className="mt-20">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3 text-center">Integrations</p>
              <h3 className="text-3xl font-extrabold text-center mb-8">
                <ColouredHeading text="Platforms We Work With" />
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {platforms.map((item, i) => (
                  <span key={i}
                        className="platform-pill px-5 py-2.5 bg-white border border-slate-200 rounded-full
                                   text-sm text-slate-600 shadow-sm font-medium cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* servicess */}
            <div className="mt-20">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3 text-center">Full Scope</p>
              <h3 className="text-3xl font-extrabold text-center mb-10">
                <ColouredHeading text="Our eCommerce Services" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicess.map((item, i) => (
                  <div key={i} className="card-hover flex items-start gap-3 bg-white p-6 rounded-2xl
                                          border border-slate-100 shadow-sm hover:border-cyan-200 transition-colors">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                    </div>
                    <p className="text-slate-700 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ════════ BENEFITS ════════ */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="grid-overlay absolute inset-0 pointer-events-none opacity-60" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-3">Why Outsource</p>
              <h2 className="text-4xl font-extrabold">
                <ColouredHeading text="Benefits of eCommerce Data Entry Outsourcing" />
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, i) => (
                <div key={i}
                     className="card-hover group rounded-2xl border border-slate-700/50 bg-slate-900 p-6
                                hover:border-cyan-500/40 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4
                                  group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">Got Questions?</p>
              <h2 className="text-4xl font-extrabold">
                <ColouredHeading text="Frequently Asked Questions" />
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left gap-4
                               hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-800">{faq.q}</span>
                    <ChevronDown className={`flex-shrink-0 h-5 w-5 text-cyan-500 transition-transform duration-300
                                            ${openIndex === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className="overflow-hidden transition-all duration-300"
                       style={{maxHeight: openIndex === i ? "200px" : "0px"}}>
                    <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-24">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(8,145,178,.2) 0%,transparent 70%)"}} />
          <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
               style={{background:"radial-gradient(circle,rgba(6,182,212,.15) 0%,transparent 70%)"}} />

          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30
                            bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              🚀 eCommerce Experts Ready to Help
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Grow Your Online Store with{" "}
              <span className="text-cyan-400">eCommerce BPO Services</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Outsource product data entry and focus on scaling your eCommerce business.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="glow-btn bg-cyan-500 px-8 py-4 rounded-2xl font-semibold text-slate-900 text-lg"
              >
                Get Started Now
              </button>
              <a href="#services"
                 className="outline-btn border border-white/20 px-8 py-4 rounded-2xl font-semibold text-white
                            text-lg flex items-center justify-center gap-2">
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