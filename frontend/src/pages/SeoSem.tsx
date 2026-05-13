import GetStartedModal from '../components/GetStartedModal';
import {
  
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Zap,
  Award
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ─── Utility: split last two words and colour them ─── */
function HeadingColorEnd({ text, className = "" }: { text: string; className?: string }) {
  const words = text.trim().split(" ");
  if (words.length <= 2) {
    return <span className={className} style={{ color: "#0891b2" }}>{text}</span>;
  }
  const lead = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");
  return (
    <span className={className}>
      {lead}{" "}
      <span style={{ color: "#0891b2" }}>{tail}</span>
    </span>
  );
}

/* ─── Animated counter ─── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(end / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(start);
        }, 20);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SeoSem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const challenges = [
    "Low rankings on Google and poor organic visibility.",
    "Not targeting the right keywords for your business niche.",
    "High ad spend but low conversions in PPC campaigns.",
    "Lack of proper SEO strategy, audits, and optimization.",
    "Weak social media presence and low engagement rates.",
  ];

  const services = [
    "Complete SEO services including on-page, off-page, and technical SEO.",
    "Advanced keyword research, competitor analysis, and SEO audits.",
    "Pay-Per-Click (PPC) campaign setup, optimization, and ROI tracking.",
    "Social Media Marketing (SMM) and Social Media Optimization (SMO).",
    "Link building, content marketing, and performance reporting.",
  ];

  const benefits = [
    { icon: <TrendingUp className="h-6 w-6" />, text: "Top rankings on search engines like Google" },
    { icon: <Globe className="h-6 w-6" />, text: "Increased organic traffic and qualified leads" },
    { icon: <BarChart3 className="h-6 w-6" />, text: "Higher ROI from paid campaigns (PPC)" },
    { icon: <Award className="h-6 w-6" />, text: "Stronger brand visibility across digital platforms" },
    { icon: <Target className="h-6 w-6" />, text: "Data-driven marketing strategies for long-term growth" },
    { icon: <Zap className="h-6 w-6" />, text: "Faster results with integrated SEM & SEO approach" },
  ];

  const stats = [
    { value: 300, suffix: "%", label: "Average Traffic Increase" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 500, suffix: "+", label: "Campaigns Managed" },
    { value: 12, suffix: "x", label: "Average ROI" },
  ];

  const faqs = [
    {
      q: "What services are included in SEO & SEM?",
      a: "Our SEO services include on-page SEO (meta tags, content optimization), off-page SEO (backlink building), keyword research, and technical SEO improvements such as website speed and mobile optimization. Our SEM services focus on paid advertising including Google Ads, PPC campaigns, display ads, and remarketing strategies to drive instant traffic and high-quality leads."
    },
    {
      q: "How does SEO help my business grow?",
      a: "SEO helps improve your website's visibility on search engines like Google, allowing your business to rank higher for relevant keywords. This leads to increased organic traffic, better brand awareness, and more potential customers. With effective SEO strategies, businesses can generate long-term traffic and sustainable growth without relying solely on paid ads."
    },
    {
      q: "What is PPC and how does it work?",
      a: "PPC (Pay-Per-Click) advertising is a digital marketing strategy where you pay only when someone clicks on your ad. Platforms like Google Ads and Meta Ads allow businesses to target specific audiences based on keywords, location, and interests. PPC campaigns help generate instant traffic, leads, and sales, making it ideal for quick results alongside long-term SEO efforts."
    },
    {
      q: "Do you provide keyword research?",
      a: "Yes, we conduct in-depth keyword research using advanced tools to identify high-search-volume, low-competition, and high-converting keywords. Our keyword strategy ensures your business targets the right audience, improves search engine rankings, and drives qualified traffic to your website."
    },
    {
      q: "Can you improve my Google ranking?",
      a: "Yes, we use proven and white-hat SEO techniques including content optimization, backlink building, technical SEO fixes, and on-page improvements to enhance your Google rankings. Our goal is to improve your visibility for targeted keywords and help your business appear on the first page of search results."
    },
    {
      q: "Do you manage social media marketing?",
      a: "Yes, we offer complete social media marketing services including content creation, posting, ad campaigns, and audience engagement. Our SMM and SMO strategies help increase brand awareness, improve customer engagement, and drive traffic from platforms like Facebook, Instagram, and LinkedIn."
    },
    {
      q: "Do you provide reports?",
      a: "Yes, we provide detailed performance reports that include website traffic, keyword rankings, conversion rates, and campaign performance. Our reports help you track progress, understand ROI, and make data-driven decisions for continuous growth."
    },
    {
      q: "How long does SEO take?",
      a: "SEO is a long-term digital marketing strategy, and results typically start becoming visible within 3–6 months depending on your industry competition, website condition, and keyword difficulty. Consistent SEO efforts lead to long-lasting rankings, increased organic traffic, and better online visibility."
    }
  ];

  return (
    <div className="bg-white text-slate-800">

      <style>{`
        /* ── Hero animations ── */
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
          33%       { transform: translateY(-18px) rotate(3deg); }
          66%       { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(14px) rotate(-3deg); }
          66%       { transform: translateY(6px) rotate(2deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.9); opacity: 0.6; }
          70%  { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(0.9); opacity: 0; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(100px) rotate(360deg); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 60px; }
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes scanLine {
          0%   { top: 0; }
          100% { top: 100%; }
        }

        .hero-tag   { animation: fadeUp 0.6s ease both; animation-delay: 0.1s; }
        .hero-h1    { animation: fadeUp 0.7s ease both; animation-delay: 0.25s; }
        .hero-sub1  { animation: fadeUp 0.7s ease both; animation-delay: 0.4s; }
        .hero-sub2  { animation: fadeUp 0.7s ease both; animation-delay: 0.5s; }
        .hero-btns  { animation: fadeUp 0.7s ease both; animation-delay: 0.65s; }
        .hero-stats { animation: fadeUp 0.7s ease both; animation-delay: 0.8s; }
        .hero-img   { animation: fadeIn 1s ease both; animation-delay: 0.3s; }

        .float-a { animation: float 7s ease-in-out infinite; }
        .float-b { animation: floatReverse 9s ease-in-out infinite; }
        .float-c { animation: float 11s ease-in-out infinite; animation-delay: -3s; }

        .shimmer-text {
          background: linear-gradient(90deg, #67e8f9, #fff, #a5f3fc, #fff, #67e8f9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .orbit-dot-a {
          position: absolute;
          top: 50%; left: 50%;
          width: 10px; height: 10px;
          margin: -5px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 10px #22d3ee;
          animation: orbit 8s linear infinite;
        }
        .orbit-dot-b {
          position: absolute;
          top: 50%; left: 50%;
          width: 7px; height: 7px;
          margin: -3.5px;
          border-radius: 50%;
          background: #f0abfc;
          box-shadow: 0 0 8px #f0abfc;
          animation: orbitReverse 12s linear infinite;
        }

        /* Card hover lift */
        .card-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(8,145,178,0.15);
        }

        /* FAQ hover */
        .faq-item {
          transition: box-shadow 0.25s ease;
        }
        .faq-item:hover {
          box-shadow: 0 4px 24px rgba(8,145,178,0.12);
        }

        /* Underline accent for headings */
        .section-label::before {
          content: '';
          display: inline-block;
          width: 0;
          height: 2px;
          background: #0891b2;
          vertical-align: middle;
          margin-right: 10px;
          animation: lineGrow 0.8s ease forwards;
        }

        /* Scan line effect on hero image */
        .scan-container { position: relative; overflow: hidden; }
        .scan-container::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent);
          animation: scanLine 3s linear infinite;
          pointer-events: none;
        }

        /* Glow button */
        .btn-glow {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .btn-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-glow:hover::before { opacity: 1; }
        .btn-glow:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(6,182,212,0.4); }

        /* Stats bar */
        .stat-bar {
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 24px;
        }
        .stat-bar:first-child { border-left: none; padding-left: 0; }

        /* Scroll fade-in */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Grid pattern overlay */
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* Noise texture */
        .noise-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white noise-overlay grid-bg">

        {/* Ambient blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,116,144,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Floating geometric shapes */}
        <div className="float-a" style={{ position: 'absolute', top: '15%', right: '8%', width: '60px', height: '60px', border: '1.5px solid rgba(34,211,238,0.2)', borderRadius: '12px', pointerEvents: 'none' }} />
        <div className="float-b" style={{ position: 'absolute', top: '60%', right: '15%', width: '36px', height: '36px', border: '1.5px solid rgba(34,211,238,0.15)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="float-c" style={{ position: 'absolute', top: '40%', left: '3%', width: '24px', height: '24px', background: 'rgba(34,211,238,0.08)', borderRadius: '6px', pointerEvents: 'none' }} />

        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div>
            <div className="hero-tag">
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid rgba(34,211,238,0.3)',
                background: 'rgba(34,211,238,0.08)',
                borderRadius: '100px', padding: '6px 16px',
                fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase',
                color: '#67e8f9'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'dotBlink 1.4s ease infinite' }} />
                SEO & SEM Experts
              </span>
            </div>

            <h1 className="hero-h1 mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">
              Rank Higher, Drive Traffic &{" "}
              <span className="shimmer-text">Grow with SEO</span>
              <br />& SEM Services
            </h1>

            <p className="hero-sub1 mt-6 text-lg" style={{ color: '#94a3b8' }}>
              Boost your online visibility with powerful SEO, PPC, and digital marketing strategies.
            </p>

            <p className="hero-sub2 mt-4 text-base max-w-xl" style={{ color: '#64748b' }}>
              We help businesses achieve top search engine rankings, increase website traffic, and generate high-quality leads through result-driven SEO and SEM solutions.
            </p>

            <div className="hero-btns mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="btn-glow"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  padding: '14px 28px', borderRadius: '14px',
                  fontWeight: 700, color: '#fff', border: 'none', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px'
                }}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#services"
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '14px 28px', borderRadius: '14px',
                  fontWeight: 600, color: '#e2e8f0',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontSize: '15px', textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Explore Services
              </a>
            </div>

            {/* Mini stats row */}
            <div className="hero-stats mt-12 flex flex-wrap gap-0">
              {[
                { v: "300%", l: "Traffic Lift" },
                { v: "500+", l: "Campaigns" },
                { v: "95%", l: "Retention" },
              ].map((s, i) => (
                <div key={i} className="stat-bar" style={{ paddingTop: '4px', paddingBottom: '4px', marginRight: '24px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#22d3ee', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image with orbital elements */}
          <div className="hero-img flex justify-center">
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>

              {/* Orbit ring */}
              <div style={{
                position: 'absolute', inset: '-20px',
                border: '1px dashed rgba(34,211,238,0.12)',
                borderRadius: '50%', pointerEvents: 'none'
              }}>
                <div className="orbit-dot-a" />
                <div className="orbit-dot-b" />
              </div>

              {/* Image */}
              <div className="scan-container" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80"
                  alt="SEO SEM Services"
                  style={{ width: '100%', display: 'block' }}
                />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
              </div>

              {/* Floating card — top left */}
              <div className="float-b" style={{
                position: 'absolute', top: '-18px', left: '-18px',
                background: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '16px', padding: '14px 18px',
                backdropFilter: 'blur(16px)',
                display: 'flex', alignItems: 'center', gap: '10px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6,182,212,0.15)', display: 'grid', placeItems: 'center' }}>
                  <TrendingUp className="h-4 w-4" style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#22d3ee' }}>+312%</div>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Organic Traffic</div>
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div className="float-a" style={{
                position: 'absolute', bottom: '-18px', right: '-18px',
                background: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '16px', padding: '14px 18px',
                backdropFilter: 'blur(16px)',
                display: 'flex', alignItems: 'center', gap: '10px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6,182,212,0.15)', display: 'grid', placeItems: 'center' }}>
                  <BarChart3 className="h-4 w-4" style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#22d3ee' }}>12x ROI</div>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PPC Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80"
            style={{ borderRadius: '24px', boxShadow: '0 24px 60px rgba(8,145,178,0.12)', width: '100%', display: 'block' }}
          />
          {/* Accent bar */}
          <div style={{
            position: 'absolute', bottom: '-16px', left: '24px', right: '24px',
            height: '4px',
            background: 'linear-gradient(90deg, #0891b2, #06b6d4, transparent)',
            borderRadius: '2px'
          }} />
        </div>

        <div>
          <p className="section-label" style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '16px' }}>
            Our Approach
          </p>

          <h2 className="text-3xl font-extrabold leading-tight">
            <HeadingColorEnd text="End-to-End SEO, PPC & Digital Marketing Solutions" />
          </h2>

          <p className="mt-6 text-base" style={{ color: '#64748b', lineHeight: 1.8 }}>
            In today's competitive market, having a strong digital presence is essential for business success.
          </p>

          <p className="mt-3 text-base" style={{ color: '#64748b', lineHeight: 1.8 }}>
            Our expert team combines SEO, PPC, and social media strategies to improve your visibility, attract targeted traffic, and maximize conversions.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "On-page & off-page SEO optimization",
              "Keyword research and competitor analysis",
              "PPC campaign management with ROI tracking",
              "Social media marketing and optimization"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '24px', height: '24px', borderRadius: '6px', flexShrink: 0, marginTop: '2px',
                  background: 'rgba(8,145,178,0.1)', display: 'grid', placeItems: 'center'
                }}>
                  <CheckCircle2 className="h-3.5 w-3.5" style={{ color: '#0891b2' }} />
                </div>
                <p style={{ color: '#334155', fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGES + SERVICES ── */}
      <section id="services" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f7fa 100%)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4">

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '12px' }}>
              Problem → Solution
            </p>
            <h2 className="text-4xl font-extrabold">
              <HeadingColorEnd text="Challenges We Solve" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Challenges */}
            <div className="card-lift" style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(239,68,68,0.08)', display: 'grid', placeItems: 'center' }}>
                  <Target className="h-5 w-5" style={{ color: '#ef4444' }} />
                </div>
                <h3 className="text-xl font-extrabold">Common Challenges</h3>
              </div>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                {challenges.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', marginTop: '7px', flexShrink: 0 }} />
                    <p style={{ color: '#475569', lineHeight: 1.7 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="card-lift" style={{ background: 'linear-gradient(135deg, #0891b2, #0e7490)', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 24px rgba(8,145,178,0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)', display: 'grid', placeItems: 'center' }}>
                  <Zap className="h-5 w-5" style={{ color: '#fff' }} />
                </div>
                <h3 className="text-xl font-extrabold" style={{ color: '#fff' }}>Our Services</h3>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
                {services.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <CheckCircle2 className="h-5 w-5" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: '#020617', padding: '56px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '44px', fontWeight: 800, color: '#22d3ee', lineHeight: 1 }}>
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div style={{ marginTop: '8px', fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#475569' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0c1a2e 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>

        {/* Background accent */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '12px' }}>
              Why Choose Us
            </p>
            <h2 className="text-4xl font-extrabold" style={{ color: '#fff' }}>
              <HeadingColorEnd text="Benefits of SEO & SEM Services" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="card-lift" style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px', padding: '32px',
                transition: 'border-color 0.3s ease, background 0.3s ease'
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(8,145,178,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(8,145,178,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(8,145,178,0.15)', display: 'grid', placeItems: 'center', marginBottom: '20px', color: '#22d3ee' }}>
                  {item.icon}
                </div>
                <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '15px' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #fff 100%)', padding: '96px 0' }}>
        <div className="max-w-3xl mx-auto px-4">

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '12px' }}>
              Got Questions?
            </p>
            <h2 className="text-4xl font-extrabold">
              <HeadingColorEnd text="Frequently Asked Questions" />
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" style={{
                background: '#fff', borderRadius: '18px',
                border: '1px solid rgba(0,0,0,0.06)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '22px 28px',
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    gap: '16px'
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#0f172a', lineHeight: 1.5 }}>{faq.q}</h3>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                    background: openIndex === i ? '#0891b2' : 'rgba(8,145,178,0.08)',
                    display: 'grid', placeItems: 'center',
                    transition: 'background 0.2s ease'
                  }}>
                    <ChevronDown
                      style={{
                        width: '16px', height: '16px',
                        color: openIndex === i ? '#fff' : '#0891b2',
                        transition: 'transform 0.3s ease',
                        transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </button>

                {openIndex === i && (
                  <div style={{ padding: '0 28px 24px', color: '#64748b', lineHeight: 1.8, fontSize: '15px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ paddingTop: '16px' }}>{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0e7490 0%, #0891b2 40%, #0c4a6e 100%)', padding: '96px 0' }}>

        {/* Decorative rings */}
        <div style={{ position: 'absolute', top: '50%', left: '-120px', width: '480px', height: '480px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-80px', width: '360px', height: '360px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '240px', height: '240px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

        <div className="relative max-w-4xl mx-auto px-4 text-center" style={{ position: 'relative', zIndex: 1 }}>

          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '100px', padding: '8px 18px',
            fontSize: '13px', letterSpacing: '0.06em', color: '#e0f7fa',
            marginBottom: '24px'
          }}>
            🚀 Digital Marketing Experts
          </span>

          <h2 className="text-4xl font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Increase Rankings, Traffic & Revenue
            <span style={{ display: 'block', color: '#a5f3fc', marginTop: '6px' }}>
              with Smart SEO & SEM Strategies
            </span>
          </h2>

          <p style={{ marginTop: '20px', fontSize: '17px', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '20px auto 0', lineHeight: 1.8 }}>
            Drive consistent growth with expert SEO, PPC, and digital marketing solutions tailored for your business.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-glow"
              style={{
                background: '#fff', padding: '16px 36px', borderRadius: '16px',
                fontWeight: 700, fontSize: '16px', color: '#0891b2',
                border: 'none', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}
            >
              Get Started Now <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#services"
              style={{
                border: '1.5px solid rgba(255,255,255,0.3)', padding: '16px 36px', borderRadius: '16px',
                fontWeight: 600, fontSize: '16px', color: '#fff', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
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