import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Layers,
  Scissors,
  Sliders,
  ImageIcon,
  Zap,
  Star,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── Utility: accent last two words in cyan-600 ─── */
function AccentLastTwo({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 2) return <span className="text-cyan-600">{text}</span>;
  const main = words.slice(0, -2).join(" ");
  const accent = words.slice(-2).join(" ");
  return <>{main} <span className="text-cyan-600">{accent}</span></>;
}

/* ─── Animated counter ─── */
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Intersection observer ─── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1600, start);
  return (
    <div className="text-center px-4">
      <div className="text-4xl font-extrabold text-white tabular-nums">{count}{suffix}</div>
      <div className="mt-1 text-xs text-slate-400 tracking-widest uppercase">{label}</div>
    </div>
  );
}

export default function PhotoEditing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const statsRef = useInView(0.3);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    { icon: ImageIcon,  text: "Low-quality product images reducing customer trust and purchase intent." },
    { icon: Zap,        text: "Time-consuming manual editing workflows for large-volume image batches." },
    { icon: Layers,     text: "Inconsistent image formats, dimensions, and backgrounds across platforms." },
    { icon: Sliders,    text: "Difficulty maintaining visual brand consistency across marketplaces." },
    { icon: Scissors,   text: "Limited access to professional-grade tools and expert editing talent." },
  ];

  const services = [
    { icon: Sliders,    text: "Professional photo retouching, skin smoothing, and image enhancement." },
    { icon: Scissors,   text: "Precision background removal, replacement, and color correction." },
    { icon: Layers,     text: "Clipping path, advanced image masking, and clean object isolation." },
    { icon: ImageIcon,  text: "eCommerce product photo editing optimized for Amazon, Shopify & more." },
    { icon: Star,       text: "Real estate, fashion, and portrait photo editing tailored to your niche." },
  ];

  const benefits = [
    { icon: Star,       title: "Stunning Image Quality",    desc: "Deliver sharp, vibrant, professionally finished visuals that stop the scroll." },
    { icon: TrendingUp, title: "Higher Conversions",        desc: "Polished product imagery directly improves click-through and purchase rates." },
    { icon: ShieldCheck,title: "Consistent Branding",       desc: "Uniform style, color tone, and background across every platform and channel." },
    { icon: Zap,        title: "Fast Bulk Turnaround",      desc: "Scale from dozens to thousands of images without sacrificing quality or speed." },
    { icon: Layers,     title: "Multi-Platform Ready",      desc: "Images sized and optimized for web, print, social media, and marketplaces." },
    { icon: Sliders,    title: "Advanced Retouching",       desc: "Expert-level edits — shadow creation, ghost mannequin, jewelry retouching & more." },
  ];

  const faqs = [
    { q: "What is a professional photo editing service?",        a: "Professional photo editing involves enhancing and transforming images using advanced tools and expert techniques to improve visual quality, color accuracy, backgrounds, and overall presentation — helping businesses attract customers and build brand credibility." },
    { q: "Why is photo editing critical for eCommerce success?", a: "High-quality product images are proven to increase customer trust, reduce returns, and boost conversion rates. Marketplace algorithms on Amazon and Shopify also reward listings with professional imagery through higher organic visibility." },
    { q: "Do you offer background removal and replacement?",     a: "Yes. We provide precise background removal, white background replacement, custom scene backgrounds, and shadow/reflection effects for all image types, fully compliant with marketplace standards." },
    { q: "Can you handle high-volume bulk image editing?",       a: "Absolutely. Our streamlined production workflow is purpose-built for bulk orders — delivering consistent quality and fast turnaround whether you need 50 or 50,000 images edited." },
    { q: "What eCommerce platforms do you optimize images for?", a: "We edit and optimize images for Amazon, Shopify, eBay, Etsy, WooCommerce, and all major marketplaces — adhering to each platform's specific size, format, and compliance requirements." },
    { q: "Which industries do you serve?",                       a: "We serve eCommerce sellers, real estate agencies, fashion brands, photography studios, digital marketing agencies, and enterprise retailers globally." },
    { q: "How do you maintain consistent editing quality?",      a: "Every project goes through a multi-stage quality assurance process including editor review, QA lead approval, and final client-standard checks before delivery." },
    { q: "Do you offer ongoing photo editing partnerships?",     a: "Yes. We offer flexible retainer packages for businesses with recurring editing needs, ensuring priority turnaround, dedicated editors, and volume pricing." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

        {/* Animated dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(6,182,212,0.18) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
            animation: "gridDrift 25s linear infinite",
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(80px)", animation: "orb1 9s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 right-1/5 w-[380px] h-[380px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0284c7 0%, transparent 70%)", filter: "blur(100px)", animation: "orb1 12s ease-in-out infinite 3s" }} />

        {/* Floating lens rings */}
        {[80, 140, 200].map((size, i) => (
          <div key={i} className="absolute rounded-full border border-cyan-400/10 pointer-events-none"
            style={{
              width: size, height: size,
              top: `${25 + i * 20}%`, right: `${8 + i * 3}%`,
              animation: `spin${i % 2 === 0 ? "Cw" : "Ccw"} ${18 + i * 6}s linear infinite`,
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(7)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-cyan-300 opacity-30 pointer-events-none"
            style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%`, animation: `floatUp ${5 + i}s ease-in-out infinite ${i * 0.6}s` }}
          />
        ))}

        <div className="relative mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── Left copy ── */}
          <div className={`transition-all duration-1000 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-8 backdrop-blur-sm">
              <Cloud className="h-4 w-4" />
              Professional Photo Editing Services
            </div>

            <h1 className="text-5xl lg:text-[3.6rem] font-extrabold leading-[1.06] text-white">
              Expert Photo Editing for{" "}
              <span className="text-cyan-400">High-Converting</span>{" "}
              eCommerce Visuals
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              We transform raw images into marketplace-ready, conversion-optimized visuals — background removal, retouching, color correction, and bulk editing delivered fast.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["50K+ Images Edited Monthly", "24-Hour Turnaround", "Marketplace Compliant"].map(b => (
                <span key={b} className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/6 border border-white/12 rounded-full px-3 py-1.5 text-slate-300">
                  <CheckCircle2 className="h-3 w-3 text-cyan-400" />{b}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="group relative overflow-hidden bg-cyan-500 px-7 py-3.5 rounded-xl text-slate-900 font-semibold transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_32px_rgba(6,182,212,0.45)] active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
              <a href="#services"
                className="border border-white/20 px-7 py-3.5 rounded-xl text-white font-medium hover:bg-white/8 hover:border-white/40 transition-all duration-300">
                Explore Services
              </a>
            </div>
          </div>

          {/* ── Right image ── */}
          <div className={`transition-all duration-1000 delay-300 ease-out ${heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-cyan-500/20" />
              <div className="absolute -inset-7 rounded-3xl border border-cyan-500/08" />

              <img
                src="https://images.unsplash.com/photo-1487537708572-3c850b5e856e?q=80"
                alt="Professional Photo Editing Services"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              />

              {/* Floating stat card – bottom left */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/95 border border-slate-700 rounded-2xl px-5 py-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Star className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">4.9 / 5</div>
                    <div className="text-xs text-slate-400">Client Rating</div>
                  </div>
                </div>
              </div>

              {/* Floating badge – top right */}
              <div className="absolute -top-4 -right-4 bg-slate-900/95 border border-slate-700 rounded-2xl px-4 py-2.5 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium">Live Editing Queue</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>

        <style>{`
          @keyframes gridDrift { 0%{transform:translate(0,0)} 100%{transform:translate(36px,36px)} }
          @keyframes orb1 { 0%,100%{opacity:.12;transform:scale(1)} 50%{opacity:.22;transform:scale(1.06)} }
          @keyframes spinCw  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
          @keyframes spinCcw { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
          @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        `}</style>
      </section>

      {/* ══ STATS BAR ══ */}
      <section className="bg-slate-900 border-y border-slate-800" ref={statsRef.ref}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800">
          <StatCounter value={50}   suffix="K+"  label="Images Edited Monthly"  start={statsRef.inView} />
          <StatCounter value={99}   suffix="%"   label="Quality Pass Rate"       start={statsRef.inView} />
          <StatCounter value={24}   suffix="hr"  label="Standard Turnaround"     start={statsRef.inView} />
          <StatCounter value={1200} suffix="+"   label="Global Clients"          start={statsRef.inView} />
        </div>
      </section>

      {/* ══ INTRO ══ */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-cyan-50 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1647712452980-64c0d5bf5dbc?q=80"
            className="rounded-2xl shadow-xl w-full object-cover"
            style={{ aspectRatio: "4/3" }}
            alt="eCommerce Image Editing Solutions"
          />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">Our Expertise</span>
          <h2 className="text-4xl font-extrabold leading-tight">
            <AccentLastTwo text="High-Quality Image Editing Solutions for Businesses" />
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            In today's visual-first marketplace, the quality of your product images directly determines your brand's credibility and your customer's willingness to buy. Poor visuals cost you sales — professional editing wins them back.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our expert editors deliver consistent, marketplace-compliant, conversion-optimized images at scale — so your brand always looks its absolute best, on every platform.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Professional image retouching and color enhancement",
              "Uniform background and tone across all product lines",
              "Images optimized for Amazon, Shopify, and web performance",
              "Scalable bulk editing — from 50 to 50,000+ images",
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

      {/* ══ CHALLENGES + SERVICES ══ */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Pain Points & Solutions</span>
            <h2 className="text-4xl font-extrabold">
              <AccentLastTwo text="Challenges We Solve for You" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-base leading-none">!</span>
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

      {/* ══ BENEFITS ══ */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle, rgba(6,182,212,1) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Why It Matters</span>
            <h2 className="text-5xl font-extrabold">
              <AccentLastTwo text="Benefits of Photo Editing Services" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="group bg-white/5 border border-white/8 p-7 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
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

      {/* ══ PROCESS ══ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">How It Works</span>
            <h2 className="text-4xl font-extrabold">
              <AccentLastTwo text="Our Simple Editing Process" />
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit Your Images",   desc: "Upload your raw images via our secure portal, Google Drive, or Dropbox — any volume, any format." },
              { step: "02", title: "Briefing & Review",    desc: "We review your style guide, platform requirements, and brand standards before work begins." },
              { step: "03", title: "Expert Editing",       desc: "Our certified editors enhance, retouch, and optimize every image to your exact specifications." },
              { step: "04", title: "QA & Delivery",        desc: "Multi-stage quality checks ensure flawless output, delivered on time to your preferred destination." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-full hover:border-cyan-200 hover:shadow-md transition-all group">
                <span className="text-5xl font-extrabold text-slate-100 group-hover:text-cyan-100 transition-colors leading-none">{step}</span>
                <h3 className="mt-3 font-extrabold text-slate-800">{title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
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
                  <ChevronDown className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-cyan-600" : "text-slate-400"}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48" : "max-h-0"}`}>
                  <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden bg-slate-950 py-28">
        <div className="absolute inset-0 opacity-25"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(6,182,212,0.3) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle, rgba(6,182,212,1) 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/15 px-4 py-2 text-sm text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Professional Editing — Delivered Fast
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            Transform Your Images into{" "}
            <span className="text-cyan-400">High-Converting Visuals</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join 1,200+ businesses that trust our expert photo editing team to make every image count — boosting engagement, reducing returns, and growing revenue.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold hover:bg-white/8 hover:border-white/35 transition-all duration-300">
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