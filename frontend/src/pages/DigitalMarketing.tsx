import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Target,
  BarChart2,
  Search,
  Share2,
  Mail
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── Heading helper: last two words in cyan-600 ─── */
function ColoredHeading({ text, className = "" }: { text: string; className?: string }) {
  const words = text.trim().split(" ");
  if (words.length <= 2) {
    return <span className={className}><span className="text-cyan-600">{text}</span></span>;
  }
  const normal = words.slice(0, words.length - 2).join(" ");
  const colored = words.slice(-2).join(" ");
  return (
    <span className={className}>
      {normal}{" "}
      <span className="text-cyan-600">{colored}</span>
    </span>
  );
}

/* ─── Animated counter ─── */
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = end / (duration / step);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) { setCount(end); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, step);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Fade-in on scroll ─── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function DigitalMarketing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const stats = [
    { value: 500, suffix: "+", label: "Clients Served" },
    { value: 98, suffix: "%", label: "Retention Rate" },
    { value: 12, suffix: "x", label: "Avg. ROI Delivered" },
    { value: 8, suffix: "+", label: "Years of Expertise" },
  ];

  const services = [
    { icon: Search, title: "Search Engine Optimization", sub: "On-page, Off-page & Technical SEO" },
    { icon: Target, title: "Pay-Per-Click Advertising", sub: "Google Ads & Paid Campaigns" },
    { icon: Share2, title: "Social Media Marketing", sub: "SMM & Social Media Optimization" },
    { icon: BarChart2, title: "Content Marketing", sub: "SEO Content Strategy" },
    { icon: TrendingUp, title: "Conversion Rate Optimization", sub: "CRO & Landing Page Optimization" },
    { icon: Mail, title: "Email Marketing", sub: "Automation Funnels & Campaigns" },
  ];

  const subServices = [
    "Keyword Research & Competitor Analysis",
    "Google Ads & Meta Ads Campaign Management",
    "Backlink Building & Authority Growth",
    "Technical SEO Audits & Website Optimization",
    "Local SEO & Google My Business Optimization",
    "Email Marketing & Automation Funnels",
  ];

  const benefits = [
    { icon: TrendingUp, title: "Higher Google Rankings", desc: "Proven SEO strategies that push your website to page one and keep it there." },
    { icon: Target, title: "Quality Lead Generation", desc: "Targeted campaigns that attract ready-to-convert prospects to your funnel." },
    { icon: BarChart2, title: "Maximized ROI", desc: "Every rupee tracked — performance-driven campaigns with measurable outcomes." },
    { icon: Share2, title: "Brand Visibility", desc: "Build authority across Google, Meta, LinkedIn, and every channel that matters." },
    { icon: Search, title: "Data-Driven Decisions", desc: "Analytics-first strategies refined continuously for compound growth." },
    { icon: Cloud, title: "Transparent Reporting", desc: "Live dashboards and monthly reports so you always know where you stand." },
  ];

  const process = [
    { title: "Discovery", desc: "Business & competitor analysis" },
    { title: "Strategy", desc: "Keyword research & planning" },
    { title: "Launch", desc: "SEO, PPC & Social setup" },
    { title: "Optimize", desc: "Execution & iteration" },
    { title: "Report", desc: "Performance tracking" },
  ];

  const faqs = [
    { q: "What is Digital Marketing and how does it help businesses grow?", a: "Digital marketing promotes your business online using SEO, PPC advertising, social media marketing, and content marketing. It helps increase website traffic, generate high-quality leads, improve brand visibility, and boost conversions. With the right strategy, businesses can rank higher on Google and achieve long-term growth." },
    { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. Noticeable improvements in rankings and traffic typically appear within 3–6 months. The timeline depends on competition, keyword difficulty, website age, and quality of optimization. Consistent on-page SEO, technical SEO, and backlink building drive sustainable results." },
    { q: "Which is better for my business: SEO or PPC advertising?", a: "Both have distinct advantages. SEO builds long-term organic traffic while PPC delivers instant results through paid campaigns. The best strategy combines both to maximize visibility, drive targeted traffic, and increase ROI simultaneously." },
    { q: "What services are included in your digital marketing solutions?", a: "Our solutions include SEO (on-page, off-page, technical), Google Ads & PPC management, social media marketing, content marketing, email marketing, and conversion rate optimization — all tailored to your specific business goals." },
    { q: "Will I receive reports and performance tracking updates?", a: "Yes. We provide detailed performance reports covering traffic, keyword rankings, lead generation, and ROI analysis. Regular updates ensure full transparency and continuous improvement in your campaigns." },
    { q: "Do you provide digital marketing services for small businesses and startups?", a: "Absolutely. We specialize in cost-effective strategies for small businesses, startups, and growing enterprises — from local SEO to full-scale lead generation campaigns built to scale within your budget." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden">

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Animated orbs */}
        <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", animation: "pulse-slow 8s ease-in-out infinite" }} />
        <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", animation: "pulse-slow 10s ease-in-out infinite reverse" }} />

        {/* Floating badges */}
        <div className="absolute top-24 right-8 lg:right-32 hidden lg:flex flex-col gap-3"
          style={{ animation: "float 6s ease-in-out infinite" }}>
          {["SEO Ranking ↑", "Leads +340%", "ROI 12x"].map((b, i) => (
            <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-300 font-medium"
              style={{ animationDelay: `${i * 0.4}s` }}>
              {b}
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-8"
              style={{ animation: "fadeSlideUp 0.6s ease both" }}>
              <Cloud className="h-4 w-4" />
              #1 Digital Marketing Agency
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
              Best Digital Marketing
              <br />
              Services to{" "}
              <span className="text-transparent" style={{ backgroundClip: "text", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(135deg, #22d3ee, #06b6d4, #0891b2)" }}>
                Boost Traffic,
              </span>
              <br />
              <span className="text-transparent" style={{ backgroundClip: "text", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(135deg, #22d3ee, #06b6d4, #0891b2)" }}>
                Leads & Sales
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl"
              style={{ animation: "fadeSlideUp 0.6s ease 0.2s both" }}>
              Grow your business with SEO, PPC Advertising, Social Media Marketing, and Content Marketing designed to deliver measurable results.
            </p>

            <p className="mt-3 text-sm text-slate-500 max-w-xl"
              style={{ animation: "fadeSlideUp 0.6s ease 0.25s both" }}>
              Data-driven strategies that help businesses rank higher on Google, increase qualified traffic, and maximize ROI.
            </p>

            <div className="mt-10 flex flex-wrap gap-4"
              style={{ animation: "fadeSlideUp 0.6s ease 0.3s both" }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden bg-cyan-500 px-8 py-4 rounded-xl text-slate-900 font-bold hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a href="#services"
                className="border border-white/20 px-8 py-4 rounded-xl text-white hover:bg-white/8 hover:border-white/40 transition-all duration-300">
                Explore Services
              </a>
            </div>

            {/* Social proof row */}
            <div className="mt-12 flex items-center gap-6 pt-8 border-t border-white/10"
              style={{ animation: "fadeSlideUp 0.6s ease 0.4s both" }}>
              <div className="flex -space-x-2">
                {["S", "R", "A", "M"].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold"
                    style={{ background: ["#0891b2","#0e7490","#155e75","#164e63"][i] }}>
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Trusted by 500+ businesses</p>
              </div>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="hidden lg:grid grid-cols-2 gap-6"
            style={{ animation: "fadeSlideUp 0.7s ease 0.35s both" }}>
            {stats.map((s, i) => (
              <div key={i}
                className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-extrabold text-cyan-400 group-hover:text-cyan-300 transition">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Animated bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 fill-white">
            <path d="M0,56L60,46.7C120,37,240,19,360,18.7C480,19,600,37,720,42C840,47,960,37,1080,28C1200,19,1320,9,1380,4.7L1440,0V56H0Z"/>
          </svg>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────── */}
      <div className="bg-cyan-600 text-white py-3 overflow-hidden">
        <div style={{ animation: "ticker 30s linear infinite", display: "flex", gap: "3rem", width: "max-content" }}>
          {[...Array(2)].map((_, rep) => (
            ["SEO Optimization", "Google Ads", "Social Media Marketing", "Content Strategy", "Email Automation", "Conversion Rate Optimization", "Backlink Building", "Local SEO", "PPC Management", "Technical SEO"].map((item, i) => (
              <span key={`${rep}-${i}`} className="text-sm font-semibold uppercase tracking-widest whitespace-nowrap opacity-90">
                ◆&nbsp;&nbsp;{item}
              </span>
            ))
          ))}
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3 block">What We Offer</span>
            <h2 className="text-4xl font-extrabold">
              <ColoredHeading text="Our Digital Marketing Services" />
            </h2>
            <p className="mt-4 text-slate-500 text-lg">Performance-driven services designed to grow traffic, leads, and revenue.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 80}>
                  <div className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-50 transition-all duration-500 cursor-default overflow-hidden">
                    {/* Hover BG */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-cyan-100/0 group-hover:from-cyan-50/60 group-hover:to-cyan-50/20 transition-all duration-500 rounded-2xl" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-cyan-600 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-cyan-200">
                        <Icon className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 group-hover:text-cyan-700 transition-colors">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">{item.sub}</p>
                      <div className="mt-4 flex items-center gap-1 text-cyan-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUB SERVICES ─────────────────────────────── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(6,182,212,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-3 block">Deep-Level Capabilities</span>
            <h2 className="text-4xl font-extrabold">
              <ColoredHeading text="Advanced Marketing Solutions" />
            </h2>
            <p className="mt-4 text-slate-400 text-lg">Specialized expertise to scale your digital growth with precision.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map((item, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="group flex items-center gap-5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] hover:border-cyan-500/30 p-6 rounded-2xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-300 group-hover:text-white font-medium transition-colors text-sm leading-snug">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3 block">Why Choose Us</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              <ColoredHeading text="Why Choose Our Digital Marketing Services?" />
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeIn key={i} delay={i * 80}>
                  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 group-hover:bg-cyan-600 flex items-center justify-center mb-5 transition-all duration-300">
                      <Icon className="h-5 w-5 text-cyan-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">{b.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3 block">How We Work</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              <ColoredHeading text="Our Proven Digital Marketing Process" />
            </h2>
            <p className="mt-4 text-slate-500 text-lg">A structured, data-driven approach to deliver consistent growth and measurable results.</p>
          </FadeIn>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {process.map((step, i) => (
                <FadeIn key={i} delay={i * 100} className="text-center group cursor-default">
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-cyan-600 text-white font-extrabold text-xl shadow-xl shadow-cyan-600/20 group-hover:scale-110 group-hover:shadow-cyan-600/40 transition-all duration-300 relative z-10">
                    {i + 1}
                  </div>
                  <div className="mt-6 bg-white p-5 rounded-2xl border border-slate-100 group-hover:border-cyan-200 group-hover:shadow-lg group-hover:shadow-cyan-50 transition-all duration-300">
                    <p className="font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">{step.title}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-snug">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3 block">Got Questions?</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              <ColoredHeading text="FAQs – Digital Marketing Services" />
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? "border-cyan-200 shadow-lg shadow-cyan-50" : "border-slate-100 hover:border-slate-200"}`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left group"
                  >
                    <h3 className={`font-semibold text-base pr-4 transition-colors ${openIndex === i ? "text-cyan-700" : "text-slate-800 group-hover:text-cyan-700"}`}>{faq.q}</h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? "bg-cyan-600 rotate-180" : "bg-slate-100 group-hover:bg-cyan-50"}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${openIndex === i ? "text-white" : "text-slate-500"}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                    <p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="relative bg-slate-950 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.1), transparent)" }} />

        <FadeIn className="relative text-center max-w-3xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-4 block">Ready to Scale?</span>
          <h2 className="text-5xl font-extrabold leading-tight">
            <ColoredHeading text="Grow Your Business with Digital Marketing" />
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto">Start generating traffic, qualified leads, and consistent sales today with a strategy built for your goals.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.03]"
            >
              <span className="flex items-center gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-white/20 text-white hover:bg-white/8 hover:border-white/40 font-semibold px-10 py-4 rounded-xl transition-all duration-300"
            >
              Schedule a Free Call
            </button>
          </div>
        </FadeIn>
      </section>

      {/* ── KEYFRAMES ────────────────────────────────── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.08); opacity: 0.8; }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedBusinessType={''}
      />
    </div>
  );
}