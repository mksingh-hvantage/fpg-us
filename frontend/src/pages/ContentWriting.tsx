import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  PenTool,
  Search,
  BarChart3,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Zap,
  Star,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── Accent last two words in cyan-600 ─── */
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
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StatCounter({ value, suffix, label, start }: {
  value: number; suffix: string; label: string; start: boolean;
}) {
  const count = useCountUp(value, 1600, start);
  return (
    <div className="text-center px-4">
      <div className="text-4xl font-extrabold text-white tabular-nums">{count}{suffix}</div>
      <div className="mt-1 text-xs text-slate-400 tracking-widest uppercase">{label}</div>
    </div>
  );
}

export default function ContentWriting() {
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
    { icon: PenTool,    text: "Struggling to produce consistent, high-quality content that builds authority and drives results." },
    { icon: Search,     text: "Low organic traffic caused by weak keyword targeting and an underdeveloped SEO content strategy." },
    { icon: BarChart3,  text: "Content that fails to engage visitors, reduce bounce rates, or convert readers into paying customers." },
    { icon: ShieldCheck,text: "Difficulty maintaining originality, avoiding plagiarism, and upholding brand voice at scale." },
    { icon: BookOpen,   text: "No structured content calendar or unified strategy across blogs, landing pages, and marketing channels." },
  ];

  const services = [
    { icon: PenTool,    text: "SEO content writing — blogs, long-form articles, and fully optimized website copy." },
    { icon: Search,     text: "In-depth keyword research and on-page content optimization for sustained ranking growth." },
    { icon: BookOpen,   text: "Engaging, reader-first blog writing that builds audience loyalty and drives repeat traffic." },
    { icon: BarChart3,  text: "Conversion-focused landing page and service page content engineered to generate leads." },
    { icon: TrendingUp, text: "End-to-end content strategy, editorial calendar planning, and ongoing content development." },
  ];

  const benefits = [
    { icon: TrendingUp,  title: "Higher Organic Rankings",      desc: "Keyword-rich, structured content that climbs search engine results pages and stays there." },
    { icon: BarChart3,   title: "More Leads & Conversions",     desc: "Persuasive copy and clear CTAs that turn passive readers into qualified prospects." },
    { icon: Star,        title: "Brand Authority & Trust",      desc: "Expert-level content that positions your business as the go-to voice in your industry." },
    { icon: Zap,         title: "Consistent Content Pipeline",  desc: "Reliable publishing cadence that keeps your audience engaged and your SEO momentum strong." },
    { icon: ShieldCheck, title: "100% Original Content",        desc: "Every piece is uniquely crafted, plagiarism-checked, and aligned to your brand voice." },
    { icon: PenTool,     title: "Scalable Content Solutions",   desc: "From a single blog post to enterprise-scale content programs — we grow with your business." },
  ];

  const faqs = [
    {
      q: "What is professional content development?",
      a: "Content development is the strategic process of researching, creating, optimizing, and managing content assets — including blogs, articles, landing pages, and web copy — designed to attract targeted traffic, build brand authority, and convert visitors into customers through search-engine-optimized, audience-first writing."
    },
    {
      q: "Why is SEO content writing critical for business growth?",
      a: "SEO content writing ensures your business appears in front of high-intent searchers at the exact moment they need your product or service. Properly optimized content drives compounding organic traffic, reduces dependency on paid ads, and builds long-term domain authority that translates directly into revenue."
    },
    {
      q: "Do you provide blog writing and long-form article services?",
      a: "Yes. We produce thoroughly researched, SEO-optimized blog posts and long-form articles (1,000–5,000+ words) designed to rank for competitive keywords, establish topical authority, and generate consistent organic traffic month over month."
    },
    {
      q: "How do you guarantee content quality and originality?",
      a: "Every piece undergoes multi-stage quality assurance including subject-matter research, editorial review, Copyscape plagiarism verification, Grammarly proofreading, and an SEO audit before delivery — ensuring each article is factually accurate, uniquely written, and fully optimized."
    },
    {
      q: "Can you audit and optimize our existing website content?",
      a: "Absolutely. Our content audit service evaluates your existing pages for keyword gaps, thin content, poor readability, and missed optimization opportunities — then rewrites and restructures them to maximize search visibility and user engagement."
    },
    {
      q: "What keyword research methodology do you use?",
      a: "We conduct comprehensive keyword research using industry-leading tools including Ahrefs, SEMrush, and Google Search Console — analyzing search volume, keyword difficulty, user intent, and competitor gaps to build a content strategy that targets high-value, achievable ranking opportunities."
    },
    {
      q: "Is all content completely plagiarism-free?",
      a: "Yes, without exception. All content is 100% original, written from scratch by our expert writers, and verified through premium plagiarism-detection tools before delivery. We maintain strict editorial standards to protect your brand's integrity and search engine standing."
    },
    {
      q: "Do you offer ongoing monthly content retainer packages?",
      a: "Yes. Our monthly retainer packages provide a consistent flow of SEO-optimized content — including blogs, web pages, and supporting copy — on a predictable schedule. Retainer clients benefit from priority scheduling, dedicated writers, and volume-based pricing for long-term content growth."
    },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

        {/* Animated typewriter line grid */}
        <div className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(103,232,249,0.6) 39px, rgba(103,232,249,0.6) 40px)`,
            animation: "lineScroll 18s linear infinite",
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)", filter: "blur(80px)", animation: "orbPulse 9s ease-in-out infinite" }} />
        <div className="absolute bottom-1/5 right-1/4 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.14) 0%, transparent 70%)", filter: "blur(100px)", animation: "orbPulse 13s ease-in-out infinite 2.5s" }} />

        {/* Floating pen-stroke dots */}
        {[...Array(8)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full bg-cyan-300 pointer-events-none"
            style={{
              width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
              left: `${8 + i * 11}%`,
              top: `${12 + (i % 5) * 17}%`,
              opacity: 0.25 + (i % 3) * 0.1,
              animation: `floatDot ${5 + i * 0.7}s ease-in-out infinite ${i * 0.5}s`,
            }}
          />
        ))}

        {/* Decorative bracket lines */}
        <div className="absolute left-6 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute left-6 top-1/4 w-4 h-px bg-cyan-500/30" />
        <div className="absolute left-6 top-1/4 mt-32 w-4 h-px bg-cyan-500/30 translate-y-32" />
        <div className="absolute right-6 bottom-1/4 h-32 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── Left copy ── */}
          <div className={`transition-all duration-1000 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-8 backdrop-blur-sm">
              <Cloud className="h-4 w-4" />
              SEO Content Writing Experts
            </div>

            <h1 className="text-5xl lg:text-[3.55rem] font-extrabold leading-[1.06] text-white">
              Expert Content Writing That{" "}
              <span className="text-cyan-400">Ranks, Engages</span>
              {" "}& Converts
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              We craft SEO-optimized blogs, landing pages, and web copy that drive organic traffic, build brand authority, and turn readers into revenue — consistently.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["100% Original Content", "Keyword-Research Driven", "Google E-E-A-T Compliant"].map(b => (
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
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80"
                alt="Professional SEO Content Writing Services"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              />

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/95 border border-slate-700 rounded-2xl px-5 py-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">3.8×</div>
                    <div className="text-xs text-slate-400">Avg. Traffic Growth</div>
                  </div>
                </div>
              </div>

              {/* Live badge */}
              <div className="absolute -top-4 -right-4 bg-slate-900/95 border border-slate-700 rounded-2xl px-4 py-2.5 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium">Content In Production</span>
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
          @keyframes lineScroll { 0%{transform:translateY(0)} 100%{transform:translateY(40px)} }
          @keyframes orbPulse   { 0%,100%{opacity:.12;transform:scale(1)} 50%{opacity:.22;transform:scale(1.06)} }
          @keyframes floatDot   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        `}</style>
      </section>

      {/* ══ STATS BAR ══ */}
      <section className="bg-slate-900 border-y border-slate-800" ref={statsRef.ref}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800">
          <StatCounter value={800}  suffix="+"  label="Articles Published Monthly" start={statsRef.inView} />
          <StatCounter value={95}   suffix="%"  label="Client Retention Rate"      start={statsRef.inView} />
          <StatCounter value={300}  suffix="%"  label="Avg. Organic Traffic Lift"  start={statsRef.inView} />
          <StatCounter value={500}  suffix="+"  label="Brands Served Globally"     start={statsRef.inView} />
        </div>
      </section>

      {/* ══ INTRO ══ */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-cyan-50 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80"
            className="rounded-2xl shadow-xl w-full object-cover"
            style={{ aspectRatio: "4/3" }}
            alt="Content Writing and SEO Strategy"
          />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">Our Expertise</span>
          <h2 className="text-4xl font-extrabold leading-tight">
            <AccentLastTwo text="Professional Content Writing & Development Services" />
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            In today's competitive digital landscape, content is the single most powerful lever for sustainable organic growth. Every blog post, service page, and landing page is an opportunity to rank, engage, and convert — if executed strategically.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our expert content writers combine deep SEO knowledge with compelling storytelling to produce content that search engines reward and readers actually want to read.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "SEO-optimized blogs and website copy that rank on page one",
              "Keyword-driven content strategy aligned to buyer intent",
              "Engaging, reader-first writing that reduces bounce rates",
              "Scalable content pipelines for startups to enterprise brands",
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
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(103,232,249,0.5) 39px, rgba(103,232,249,0.5) 40px)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Why It Matters</span>
            <h2 className="text-5xl font-extrabold">
              <AccentLastTwo text="Benefits of Content Development Services" />
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
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">How We Work</span>
            <h2 className="text-4xl font-extrabold">
              <AccentLastTwo text="Our Content Creation Process" />
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Strategy",     desc: "We audit your niche, competitors, and keyword opportunities to build a data-backed content roadmap." },
              { step: "02", title: "Keyword Research",         desc: "We identify high-intent, achievable keywords aligned to your audience's search behaviour and buying journey." },
              { step: "03", title: "Expert Writing & SEO",     desc: "Our writers craft original, structured, E-E-A-T compliant content optimized for rankings and readability." },
              { step: "04", title: "QA & Delivery",            desc: "Every piece passes plagiarism checks, editorial review, and SEO audit before timely delivery." },
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
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-56" : "max-h-0"}`}>
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
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(103,232,249,0.5) 39px, rgba(103,232,249,0.5) 40px)` }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/15 px-4 py-2 text-sm text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SEO Content Experts — Ready to Grow You
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            Grow Your Business with{" "}
            <span className="text-cyan-400">Content That Converts</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join 500+ brands that trust our expert content team to drive organic growth, build authority, and generate leads — every single month.
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