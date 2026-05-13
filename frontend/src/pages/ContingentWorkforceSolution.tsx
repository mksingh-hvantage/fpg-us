import GetStartedModal from '../components/GetStartedModal';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Code,
  TrendingUp,
  DollarSign,
  Headphones,
  Megaphone,
  FileText,
  ShoppingCart,
  Briefcase,
  Globe,
  Zap,
  Target,
  BarChart3,
  Award,
  Shield
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

/* ── Last-two-words cyan colouring ── */
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

/* ── Animated counter on scroll ── */
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

export default function ContingentWorkforceSolution() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const challenges = [
    "Managing sudden spikes in workforce demand without permanent overstaffing.",
    "High costs associated with full-time hiring, employee benefits, and long-term retention.",
    "Slow traditional recruitment cycles that delay critical project and business timelines.",
    "Difficulty sourcing specialized talent for short-term or niche technical assignments.",
    "Geographic and operational barriers when scaling distributed or remote teams quickly.",
  ];

  const services = [
    "Freelancers and independent contractors for project-based business engagements.",
    "Temporary, part-time, and contract staff for flexible workforce requirements.",
    "Offshore and remote resource deployment across IT, finance, and operations.",
    "Virtual assistants and customer support specialists on demand.",
    "IT, digital marketing, back-office, and consultant staffing solutions.",
  ];

  const benefits = [
    { icon: <Shield className="h-6 w-6" />, text: "Freedom from tax liability, bonuses, and compensation obligations" },
    { icon: <DollarSign className="h-6 w-6" />, text: "Reduced infrastructure, stationery, and overhead resource costs" },
    { icon: <Target className="h-6 w-6" />, text: "Expert talent matched precisely to every project requirement" },
    { icon: <Globe className="h-6 w-6" />, text: "Geographic flexibility through remote and offshore workforce deployment" },
    { icon: <Zap className="h-6 w-6" />, text: "Greater agility — retain resources only as long as needed" },
    { icon: <Award className="h-6 w-6" />, text: "Faster talent fulfilment via a structured, proven staffing process" },
  ];

  const subServices = [
    { icon: Code, title: "IT Technology", description: "Hire skilled developers, engineers, and IT specialists to build scalable software, manage infrastructure, implement cloud solutions, and provide ongoing technical support for your business systems." },
    { icon: TrendingUp, title: "Research & Analysis", description: "Get in-depth market research, competitor insights, and data-driven analysis from experienced professionals to help you make smarter strategic business decisions." },
    { icon: DollarSign, title: "Financial & Accounting", description: "Access certified accountants and finance experts for bookkeeping, tax compliance, auditing support, payroll management, and accurate financial reporting." },
    { icon: Headphones, title: "Customer Support", description: "Deliver exceptional customer experiences with trained support agents handling queries, complaints, technical issues, and relationship management across multiple channels." },
    { icon: Megaphone, title: "Digital Marketing", description: "Boost your brand visibility with experts in SEO, social media, content creation, paid ads, and performance marketing campaigns tailored to your goals." },
    { icon: FileText, title: "Claims Management", description: "Streamline insurance and claim processes with professionals skilled in documentation, verification, processing, and efficient customer communication." },
    { icon: ShoppingCart, title: "E-Commerce Management", description: "Optimize your online store with specialists handling product listings, inventory tracking, order fulfillment, and marketplace growth strategies." },
    { icon: Briefcase, title: "Back Office & Operations", description: "Improve efficiency with reliable support for data entry, documentation, admin tasks, and day-to-day operational processes across your organization." }
  ];

  const stats = [
    { value: 1200, suffix: "+", label: "Professionals Deployed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 72, suffix: "h", label: "Avg. Fulfilment Time" },
    { value: 40, suffix: "%", label: "Cost Savings" },
  ];

  const faqs = [
    { q: "What are Contingent Workforce Solutions?", a: "Contingent workforce solutions refer to the strategic use of non-permanent workers—including freelancers, contractors, temporary employees, and outsourced resources—to meet specific business needs. These solutions help organizations scale quickly without the long-term commitment of permanent hiring." },
    { q: "What types of contingent workers can be sourced?", a: "Our contingent workforce solutions cover freelancers, consultants, temporary and part-time employees, short and long-term contractors, outsourced workers managed by a third party, W2 employees via staffing firm payroll, virtual assistants, remote resources, technical support staff, and development resources." },
    { q: "Which industries benefit most from contingent workforce outsourcing?", a: "Industries including IT and technology, financial and accounting services, digital marketing, customer support, e-commerce management, claims management, research and analysis, and back-office operations all benefit significantly from contingent staffing solutions." },
    { q: "How quickly can contingent resources be deployed?", a: "Our structured staffing process—from receiving a Request for Proposal (RFP) to final workforce delivery—is designed for speed and precision. We maintain a large, pre-qualified talent pool enabling rapid fulfilment without compromising quality." },
    { q: "How does contingent staffing reduce business costs?", a: "Contingent workforce solutions eliminate expenses related to permanent salaries, employee benefits, tax obligations, bonuses, and paid leaves. You pay only for productive output, converting fixed HR costs into flexible, scalable operational expenses." },
    { q: "Are contingent workers managed by your team?", a: "Yes. Depending on the engagement model, workers can be fully managed and paid by our team (outsourced model), deployed directly to your operations (contractor model), or provided as offshore staffing resources. We offer complete flexibility to suit your business model." },
    { q: "What is your process for delivering contingent workforce services?", a: "Our proven process includes: receiving a Request for Proposal, presenting a tailored proposal to the client, understanding project requirements and requisites, mapping key parameters, initiating the expert search, gathering a qualified talent pool, and delivering your contingent workforce on time." },
    { q: "Can contingent workforce solutions scale with business growth?", a: "Absolutely. Contingent staffing is inherently scalable—you can rapidly increase workforce capacity during peak demand and reduce it during slower periods, all without the long-term obligations of permanent employment. This flexibility is one of the primary advantages of our staffing solutions." }
  ];

  return (
    <div className="bg-white text-slate-800">

      <style>{`
        /* ── Hero entrance animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          40%     { transform: translateY(-16px) rotate(3deg); }
          70%     { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        @keyframes orbitCCW {
          from { transform: rotate(0deg) translateX(105px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(105px) rotate(360deg); }
        }
        @keyframes scanLine {
          0%   { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes pulseDot {
          0%,100% { opacity: 1; transform: scale(1); }
          50%     { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 48px; }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: var(--fill); }
        }

        .hero-tag   { animation: fadeUp 0.55s ease both 0.1s; }
        .hero-h1    { animation: fadeUp 0.65s ease both 0.25s; }
        .hero-p1    { animation: fadeUp 0.65s ease both 0.4s; }
        .hero-p2    { animation: fadeUp 0.65s ease both 0.5s; }
        .hero-btns  { animation: fadeUp 0.65s ease both 0.62s; }
        .hero-mini  { animation: fadeUp 0.65s ease both 0.76s; }
        .hero-img   { animation: fadeIn 0.9s ease both 0.3s; }

        .float-a { animation: float 7s ease-in-out infinite; }
        .float-b { animation: floatB 9s ease-in-out infinite; }
        .float-c { animation: float 11s ease-in-out infinite; animation-delay: -4s; }

        .shimmer-txt {
          background: linear-gradient(90deg, #67e8f9, #fff, #a5f3fc, #fff, #67e8f9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .orbit-dot {
          position: absolute; top: 50%; left: 50%;
          width: 10px; height: 10px; margin: -5px;
          border-radius: 50%; background: #22d3ee;
          box-shadow: 0 0 10px #22d3ee;
          animation: orbit 9s linear infinite;
        }
        .orbit-dot-b {
          position: absolute; top: 50%; left: 50%;
          width: 7px; height: 7px; margin: -3.5px;
          border-radius: 50%; background: #f0abfc;
          box-shadow: 0 0 8px #f0abfc;
          animation: orbitCCW 13s linear infinite;
        }

        .scan-wrap { position: relative; overflow: hidden; }
        .scan-wrap::after {
          content: '';
          position: absolute; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.45), transparent);
          animation: scanLine 3.5s linear infinite;
          pointer-events: none;
        }

        /* Button glow */
        .btn-glow {
          position: relative; overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-glow::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), transparent);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .btn-glow:hover::before { opacity: 1; }
        .btn-glow:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(6,182,212,0.45); }

        /* Card lift */
        .card-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 44px rgba(8,145,178,0.14);
        }

        /* Sub-service cards */
        .sub-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sub-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(8,145,178,0.16);
          border-color: rgba(8,145,178,0.35) !important;
        }
        .sub-card:hover .card-line { width: 64px !important; }
        .card-line { transition: width 0.35s ease; }

        /* FAQ */
        .faq-item { transition: box-shadow 0.25s ease; }
        .faq-item:hover { box-shadow: 0 4px 24px rgba(8,145,178,0.1); }

        /* Stat divider */
        .stat-sep {
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 24px;
        }
        .stat-sep:first-child { border-left: none; padding-left: 0; }

        /* Grid overlay */
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* Section label underline */
        .sec-label::before {
          content: '';
          display: inline-block; vertical-align: middle;
          height: 2px; background: #0891b2;
          margin-right: 10px;
          animation: lineGrow 0.7s ease forwards;
          width: 0;
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white grid-bg"
        style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #0c2a36 100%)' }}>

        {/* Ambient blobs */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '560px', height: '560px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,116,144,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Floating shapes */}
        <div className="float-a" style={{ position: 'absolute', top: '14%', right: '6%', width: '64px', height: '64px', border: '1.5px solid rgba(34,211,238,0.18)', borderRadius: '14px', pointerEvents: 'none' }} />
        <div className="float-b" style={{ position: 'absolute', top: '62%', right: '14%', width: '38px', height: '38px', border: '1.5px solid rgba(34,211,238,0.13)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="float-c" style={{ position: 'absolute', top: '35%', left: '3%', width: '26px', height: '26px', background: 'rgba(34,211,238,0.07)', borderRadius: '8px', pointerEvents: 'none' }} />
        <div className="float-b" style={{ position: 'absolute', top: '80%', left: '20%', width: '18px', height: '18px', background: 'rgba(34,211,238,0.06)', borderRadius: '4px', pointerEvents: 'none' }} />

        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center" style={{ position: 'relative', zIndex: 1 }}>

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="hero-tag">
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid rgba(34,211,238,0.28)',
                background: 'rgba(34,211,238,0.07)',
                borderRadius: '100px', padding: '7px 18px',
                fontSize: '13px', letterSpacing: '0.07em', textTransform: 'uppercase',
                color: '#67e8f9'
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'pulseDot 1.5s ease infinite' }} />
                BPO / Contingent Workforce Solutions
              </span>
            </div>

            <h1 className="hero-h1 mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">
              Contingent Workforce Solutions for{" "}
              <span className="shimmer-txt">Flexible & Scalable</span>{" "}Staffing
            </h1>

            <p className="hero-p1 mt-6 text-lg" style={{ color: '#94a3b8' }}>
              Quick, timely, and expert contingent manpower solutions that bridge your operational gaps and accelerate business growth at every stage.
            </p>

            <p className="hero-p2 mt-4 text-base max-w-xl" style={{ color: '#64748b' }}>
              We help early-stage startups to mature enterprises overcome workforce scaling challenges by providing freelancers, contractors, remote resources, offshore teams, and on-demand specialists tailored to your exact business needs.
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
                  border: '1px solid rgba(255,255,255,0.14)',
                  padding: '14px 28px', borderRadius: '14px',
                  fontWeight: 600, color: '#e2e8f0', fontSize: '15px',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  textDecoration: 'none', transition: 'background 0.2s'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Explore Services
              </a>
            </div>

            {/* Mini stats */}
            <div className="hero-mini mt-12 flex flex-wrap gap-0">
              {[
                { v: "1200+", l: "Deployed" },
                { v: "72h", l: "Avg. Fulfilment" },
                { v: "40%", l: "Cost Savings" },
              ].map((s, i) => (
                <div key={i} className="stat-sep" style={{ paddingTop: '4px', paddingBottom: '4px', marginRight: '28px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#22d3ee', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="hero-img flex justify-center">
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>

              {/* Orbit ring */}
              <div style={{ position: 'absolute', inset: '-24px', border: '1px dashed rgba(34,211,238,0.1)', borderRadius: '50%', pointerEvents: 'none' }}>
                <div className="orbit-dot" />
                <div className="orbit-dot-b" />
              </div>

              {/* Main image */}
              <div className="scan-wrap" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(34,211,238,0.1)' }}>
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Contingent Workforce Solutions"
                  style={{ width: '100%', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,182,212,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
              </div>

              {/* Floating metric card — top left */}
              <div className="float-b" style={{
                position: 'absolute', top: '-16px', left: '-20px',
                background: 'rgba(15,23,42,0.92)',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '16px', padding: '14px 18px',
                backdropFilter: 'blur(14px)',
                display: 'flex', alignItems: 'center', gap: '10px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)'
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6,182,212,0.13)', display: 'grid', placeItems: 'center' }}>
                  <Users className="h-4 w-4" style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#22d3ee', lineHeight: 1 }}>1,200+</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Professionals</div>
                </div>
              </div>

              {/* Floating metric card — bottom right */}
              <div className="float-a" style={{
                position: 'absolute', bottom: '-16px', right: '-20px',
                background: 'rgba(15,23,42,0.92)',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '16px', padding: '14px 18px',
                backdropFilter: 'blur(14px)',
                display: 'flex', alignItems: 'center', gap: '10px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)'
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6,182,212,0.13)', display: 'grid', placeItems: 'center' }}>
                  <BarChart3 className="h-4 w-4" style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#22d3ee', lineHeight: 1 }}>40% Less</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hiring Cost</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO
      ══════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <div style={{ position: 'relative' }}>
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Contingent Staffing Services"
            style={{ borderRadius: '24px', boxShadow: '0 24px 60px rgba(8,145,178,0.1)', width: '100%', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: '-14px', left: '24px', right: '24px', height: '4px', background: 'linear-gradient(90deg, #0891b2, #06b6d4, transparent)', borderRadius: '2px' }} />
        </div>

        <div>
          <p className="sec-label" style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '16px' }}>
            Our Approach
          </p>
          <h2 className="text-3xl font-extrabold leading-tight">
            <HeadingColorEnd text="End-to-End Contingent Workforce Staffing Services" />
          </h2>
          <p className="mt-6 text-base" style={{ color: '#64748b', lineHeight: 1.8 }}>
            Your workforce needs are dynamic. Whether you require a single freelancer for a specialized task or an entire offshore team to manage a business function, our contingent workforce solutions deliver expert talent with speed and precision.
          </p>
          <p className="mt-3 text-base" style={{ color: '#64748b', lineHeight: 1.8 }}>
            We cover IT technology, research and analysis, financial and accounting, customer support, digital marketing, claims management, e-commerce management, and back-office operations — ensuring no requirement goes unmet.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Freelancers, contractors, and temporary staff on demand",
              "Offshore and remote resource deployment globally",
              "Structured fulfilment process for timely delivery",
              "Expert-matched staffing with zero long-term liability"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '6px', flexShrink: 0, marginTop: '2px', background: 'rgba(8,145,178,0.1)', display: 'grid', placeItems: 'center' }}>
                  <CheckCircle2 className="h-3.5 w-3.5" style={{ color: '#0891b2' }} />
                </div>
                <p style={{ color: '#334155', fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CHALLENGES + SERVICES
      ══════════════════════════════════════ */}
      <section id="services" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f7fa 100%)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4">

          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '12px' }}>Problem → Solution</p>
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

      {/* ══════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════ */}
      <section style={{ background: '#020617', padding: '56px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '44px', fontWeight: 800, color: '#22d3ee', lineHeight: 1 }}>
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div style={{ marginTop: '8px', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#475569' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SUB SERVICES
      ══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4">

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '12px' }}>What We Cover</p>
            <h2 className="text-4xl font-extrabold">
              <HeadingColorEnd text="Our Specialized Service Areas" />
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#64748b', lineHeight: 1.8 }}>
              Access a highly skilled and flexible workforce tailored to your business needs across multiple industries and functions. Scale faster with the right talent at the right time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="sub-card" style={{
                  background: '#fff', padding: '28px', borderRadius: '20px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, #0891b2, #0c4a6e)',
                    display: 'grid', placeItems: 'center', marginBottom: '18px'
                  }}>
                    <Icon className="h-6 w-6" style={{ color: '#fff' }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#0f172a', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.75 }}>{service.description}</p>
                  <div className="card-line" style={{ marginTop: '18px', height: '3px', width: '36px', background: '#0891b2', borderRadius: '2px' }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BENEFITS
      ══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0c1a2e 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="max-w-7xl mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '12px' }}>Why Choose Us</p>
            <h2 className="text-4xl font-extrabold" style={{ color: '#fff' }}>
              <HeadingColorEnd text="Key Benefits of Contingent Workforce Solutions" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="card-lift" style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px', padding: '32px',
                transition: 'border-color 0.3s, background 0.3s'
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
                <p style={{ color: '#cbd5e1', lineHeight: 1.75, fontSize: '15px' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #fff 100%)', padding: '96px 0' }}>
        <div className="max-w-3xl mx-auto px-4">

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', fontWeight: 700, marginBottom: '12px' }}>Got Questions?</p>
            <h2 className="text-4xl font-extrabold">
              <HeadingColorEnd text="Frequently Asked Questions" />
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" style={{ background: '#fff', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 28px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#0f172a', lineHeight: 1.5 }}>{faq.q}</h3>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0, background: openIndex === i ? '#0891b2' : 'rgba(8,145,178,0.08)', display: 'grid', placeItems: 'center', transition: 'background 0.2s' }}>
                    <ChevronDown style={{ width: '16px', height: '16px', color: openIndex === i ? '#fff' : '#0891b2', transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </div>
                </button>
                {openIndex === i && (
                  <div style={{ padding: '0 28px 24px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ paddingTop: '16px', color: '#64748b', lineHeight: 1.8, fontSize: '15px' }}>{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0e7490 0%, #0891b2 40%, #0c4a6e 100%)', padding: '96px 0' }}>

        {/* Decorative rings */}
        <div style={{ position: 'absolute', top: '50%', left: '-130px', width: '500px', height: '500px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-90px', width: '380px', height: '380px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '260px', height: '260px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

        <div className="max-w-4xl mx-auto px-4 text-center" style={{ position: 'relative', zIndex: 1 }}>

          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', padding: '8px 18px', fontSize: '13px', letterSpacing: '0.06em', color: '#e0f7fa', marginBottom: '24px' }}>
            Contingent Workforce Specialists
          </span>

          <h2 className="text-4xl font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Scale Your Business with
            <span style={{ display: 'block', color: '#a5f3fc', marginTop: '6px' }}>Expert Contingent Staffing</span>
          </h2>

          <p style={{ marginTop: '20px', fontSize: '17px', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '20px auto 0', lineHeight: 1.8 }}>
            Bridge workforce gaps, reduce hiring costs, and access specialized talent on demand with our proven contingent workforce outsourcing solutions.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-glow"
              style={{ background: '#fff', padding: '16px 36px', borderRadius: '16px', fontWeight: 700, fontSize: '16px', color: '#0891b2', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
            >
              Get Started Now <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#services"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)', padding: '16px 36px', borderRadius: '16px', fontWeight: 600, fontSize: '16px', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}
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