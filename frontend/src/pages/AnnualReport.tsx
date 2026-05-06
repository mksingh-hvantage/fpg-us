import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Shield, Clock, Users, FileText, AlertTriangle, XCircle, Building2, ArrowRight, ChevronDown } from 'lucide-react';
import GetStartedModal from '../components/GetStartedModal';
import { US_STATES as states } from '../data/usStates';

const entityTypes = [
  "LLC", "Corporation", "S-Corporation", "C-Corporation",
  "Nonprofit Corporation", "Professional Corporation", "Professional LLC",
  "Limited Partnership", "Limited Liability Partnership", "General Partnership",
  "Benefit Corporation", "Series LLC"
];

const reportDatabase: any = {
  Georgia: {
    LLC: { frequency: "Annually", dueDate: "April 1", stateFee: 60, serviceFee: 99 },
    Corporation: { frequency: "Annually", dueDate: "April 1", stateFee: 50, serviceFee: 99 }
  },
  Texas: {
    LLC: { frequency: "Annually", dueDate: "May 15", stateFee: 0, serviceFee: 99 },
    Corporation: { frequency: "Annually", dueDate: "May 15", stateFee: 0, serviceFee: 99 }
  },
  California: {
    LLC: { frequency: "Every Year", dueDate: "Anniversary Month", stateFee: 20, serviceFee: 99 },
    Corporation: { frequency: "Every Year", dueDate: "Anniversary Month", stateFee: 25, serviceFee: 99 }
  }
};

/* ─── Utility: colour last N words of a string ──────────────────────────── */
function ColorLastWords({ text, count = 2 }: { text: string; count?: number }) {
  const words = text.trim().split(' ');
  const main = words.slice(0, words.length - count).join(' ');
  const tail = words.slice(words.length - count).join(' ');
  return (
    <>
      {main}{main ? ' ' : ''}<span style={{ color: '#0891b2' }}>{tail}</span>
    </>
  );
}

/* ─── Animated counter ───────────────────────────────────────────────────── */
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = end / 60;
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { setVal(end); clearInterval(timer); }
        else setVal(Math.floor(start));
      }, 16);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ─── Floating orb decoration ────────────────────────────────────────────── */
const Orb = ({ cx, cy, r, delay }: { cx: string; cy: string; r: number; delay: string }) => (
  <div
    style={{
      position: 'absolute',
      left: cx, top: cy,
      width: r * 2, height: r * 2,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), rgba(255,255,255,0.03))',
      border: '1px solid rgba(255,255,255,0.12)',
      animation: `floatOrb 8s ease-in-out ${delay} infinite`,
      pointerEvents: 'none',
    }}
  />
);

export default function AnnualReport() {
  const [state, setState] = useState('');
  const [entity, setEntity] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const report = reportDatabase[state]?.[entity];

  return (
    <div className="flex flex-col">
      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.04); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.6); opacity: 0.5; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .hero-badge   { animation: slideUp .6s ease both; }
        .hero-h1      { animation: slideUp .7s .1s ease both; }
        .hero-sub     { animation: slideUp .7s .2s ease both; }
        .hero-btns    { animation: slideUp .7s .3s ease both; }
        .hero-stats   { animation: slideUp .7s .4s ease both; }
        .stat-shimmer {
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .card-hover {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(8,145,178,0.12);
          border-color: #06b6d4;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height .4s ease, padding .4s ease;
        }
        .faq-answer.open {
          max-height: 400px;
        }
        .ring-spin {
          animation: rotateSlow 20s linear infinite;
        }
      `}</style>

      <Helmet>
        <title>Annual Report Filing USA – LLC & Company Compliance Services | The Future Perfect Global</title>
        <meta name="description" content="Annual report filing services in the USA for LLCs and corporations. Stay compliant with state requirements, deadlines, and penalties with The Future Perfect Global." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/annual-report" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/annual-report" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/annual-report" hrefLang="x-default" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Annual Report Filing USA – LLC & Company Compliance" />
        <meta property="og:description" content="Ensure timely annual report filing for your USA LLC or corporation. We handle compliance, deadlines, and state filings professionally." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/annual-report" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Annual Report Filing Services USA – The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Annual Report Filing USA – LLC & Corporate Compliance" />
        <meta name="twitter:description" content="Professional annual report filing services for USA LLCs and corporations. Avoid penalties and stay compliant." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context":"https://schema.org","@type":"WebPage",
          "name":"Annual Report Filing USA",
          "url":"https://us.thefutureperfectglobal.com/annual-report",
          "description":"Annual report filing and compliance services for USA LLCs and corporations.",
          "publisher":{"@type":"Organization","name":"The Future Perfect Global – USA Business Setup","logo":{"@type":"ImageObject","url":"https://thefutureperfectglobal.ae/uploads/images/logo1.webp"}},
          "mainEntity":{"@type":"Service","name":"Annual Report Filing USA","serviceType":"LLC & Corporate Annual Compliance","areaServed":"United States","provider":{"@type":"Organization","name":"The Future Perfect Global"}}
        }`}</script>
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 30%, #0891b2 60%, #0e7490 100%)',
          padding: '40px 0',
        }}
      >
        {/* Animated grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />

        {/* Glowing rings */}
        <div className="ring-spin" style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 700, height: 700,
          marginLeft: -350, marginTop: -350,
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 900, height: 900,
          marginLeft: -450, marginTop: -450,
          border: '1px solid rgba(255,255,255,0.04)',
          borderRadius: '50%',
          animation: 'rotateSlow 30s linear reverse infinite',
        }} />

        {/* Floating orbs */}
        <Orb cx="8%" cy="15%" r={90} delay="0s" />
        <Orb cx="80%" cy="10%" r={120} delay="1.5s" />
        <Orb cx="75%" cy="65%" r={70} delay="3s" />
        <Orb cx="3%" cy="70%" r={60} delay="2s" />

        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-15%', left: '-8%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(14,116,144,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10 }}>
          <div className="text-center text-white">

            {/* Badge */}
            <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 50, padding: '8px 20px',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'pulseDot 2s ease-in-out infinite',
                  display: 'inline-block',
                }} />
                <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: '0.05em' }}>
                  State-Compliant Filing — All 50 States
                </span>
              </div>
            </div>

            {/* H1 */}
            <h1 className="hero-h1" style={{
              fontSize: 'clamp(2.0rem, 4vw, 3.0rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
              maxWidth: 900,
              margin: '0 auto 24px',
            }}>
              Annual Report Filing Service for{' '}
              <span style={{
                background: 'linear-gradient(90deg, #67e8f9, #a5f3fc, #67e8f9)',
                backgroundSize: '200%',
                display: 'block',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s infinite',
              }}>
                LLCs & Corporations
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-sub" style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.7,
              color: 'rgba(186,230,253,0.9)',
              maxWidth: 700,
              margin: '0 auto 40px',
            }}>
              File your business annual report quickly and securely online. Stay compliant with state requirements, avoid late filing fees, and maintain active business status — all in just a few minutes.
            </p>

            {/* Buttons */}
            <div className="hero-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 48 }}>
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'white',
                  color: '#0369a1',
                  padding: '14px 32px',
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'transform .2s, box-shadow .2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
              >
                File Annual Report Now
                <ArrowRight size={18} />
              </button>
              <Link
                to="/check-deadline"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)',
                  background: 'rgba(255,255,255,0.08)',
                  transition: 'background .2s, border-color .2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.16)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)'; }}
              >
                Check Your Due Date
              </Link>
            </div>

            {/* Stats bar */}
            <div className="hero-stats" style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: 2,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 16,
              overflow: 'hidden',
            }}>
              {[
                { icon: <CheckCircle2 size={20} />, label: 'All 50 States' },
                { icon: <Shield size={20} />, label: '100% Compliant' },
                { icon: <Clock size={20} />, label: 'File in Minutes' },
                { icon: <Users size={20} />, label: '460k+ Reports Filed' },
              ].map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '14px 24px',
                  color: 'rgba(186,230,253,0.95)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}>
                  {s.icon}
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04))',
        }} />
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              display: 'inline-block',
              background: '#ecfeff',
              color: '#0891b2',
              borderRadius: 50,
              padding: '6px 18px',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: 16,
            }}>WHY CHOOSE US</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#0f172a', marginBottom: 16 }}>
              <ColorLastWords text="Why Choose Us for Your Annual Report Filing?" count={2} />
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: 640, margin: '0 auto' }}>
              Over 10,000+ annual reports filed. We make compliance simple and stress-free.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              { icon: Shield, title: 'Fully Compliant With State Requirements', desc: 'Submit your annual report quickly with a filing process designed to meet regulations in all 50 states.', stat: '460k+ Reports Submitted', color: '#0891b2', bg: '#ecfeff' },
              { icon: FileText, title: 'Simple Upfront Pricing', desc: 'Pay one clear fee with no hidden costs and absolutely no recurring plans.', stat: 'Clear & Honest Pricing', color: '#7c3aed', bg: '#f5f3ff' },
              { icon: Users, title: 'Dedicated Customer Assistance', desc: 'Our support team is available through phone, chat, and email whenever you need guidance.', stat: 'Rated 4.7★ on Trustpilot', color: '#0369a1', bg: '#eff6ff' },
              { icon: Clock, title: 'Smart Filing Notifications', desc: 'Receive timely alerts so your business never misses an important reporting deadline.', stat: 'Stress-Free Compliance', color: '#059669', bg: '#ecfdf5' },
            ].map((item, idx) => (
              <div key={idx} className="card-hover" style={{
                background: '#fff',
                border: '1.5px solid #e2e8f0',
                borderRadius: 20,
                padding: 32,
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: item.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.icon size={26} style={{ color: item.color }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                <div style={{
                  marginTop: 'auto',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: item.color, fontWeight: 700, fontSize: '0.85rem',
                }}>
                  <CheckCircle2 size={14} />
                  {item.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ──────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0c4a6e, #0e7490)',
        padding: '56px 0',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 32 }}>
            {[
              { n: 460000, suffix: '+', label: 'Reports Filed' },
              { n: 50, suffix: '', label: 'States Covered' },
              { n: 10000, suffix: '+', label: 'Happy Clients' },
              { n: 99, suffix: '%', label: 'Accuracy Rate' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, lineHeight: 1, marginBottom: 8, color: '#67e8f9' }}>
                  <Counter end={s.n} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '1rem', color: 'rgba(186,230,253,0.85)', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTITY / STATE SELECTOR ───────────────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '96px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{
              display: 'inline-block',
              background: '#ecfeff', color: '#0891b2',
              borderRadius: 50, padding: '6px 18px',
              fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 16,
            }}>GET STARTED</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#0f172a', margin: 0 }}>
              <ColorLastWords text="Choose your Entity Type and State" count={2} />
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, marginBottom: 40 }}>
            {/* Entity */}
            <div className="card-hover" style={{
              background: '#fff', borderRadius: 20, padding: 36,
              border: '1.5px solid #e2e8f0', textAlign: 'center',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, background: '#ecfeff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
              }}>
                <Building2 size={26} style={{ color: '#0891b2' }} />
              </div>
              <h3 style={{ fontWeight: 800, color: '#0891b2', marginBottom: 16, fontSize: '1.05rem' }}>Entity Type</h3>
              <select
                value={entity}
                onChange={e => setEntity(e.target.value)}
                style={{
                  width: '100%', borderRadius: 50,
                  border: '2px solid #e2e8f0',
                  padding: '12px 20px', fontSize: '0.95rem',
                  outline: 'none', cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%230891b2' stroke-width='2' d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  paddingRight: 44,
                }}
              >
                <option value="">Select Entity Type</option>
                {entityTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* State */}
            <div className="card-hover" style={{
              background: '#fff', borderRadius: 20, padding: 36,
              border: '2px solid #0891b2', textAlign: 'center',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, background: '#ecfeff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
              }}>
                <Shield size={26} style={{ color: '#0891b2' }} />
              </div>
              <h3 style={{ fontWeight: 800, color: '#0891b2', marginBottom: 16, fontSize: '1.05rem' }}>Choose State</h3>
              <select
                value={state}
                onChange={e => setState(e.target.value)}
                style={{
                  width: '100%', borderRadius: 50,
                  border: '2px solid #0891b2',
                  padding: '12px 20px', fontSize: '0.95rem',
                  outline: 'none', cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%230891b2' stroke-width='2' d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  paddingRight: 44,
                }}
              >
                <option value="">Select State</option>
                {states.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {state && entity && (
            <div style={{
              background: '#fff', borderRadius: 24, border: '1.5px solid #e2e8f0',
              padding: 40, boxShadow: '0 8px 32px rgba(8,145,178,0.08)',
              animation: 'slideUp .4s ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: '#ecfeff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FileText size={20} style={{ color: '#0891b2' }} />
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Annual Report — {entity} in {state}
                </h2>
              </div>

              {report ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, marginBottom: 32 }}>
                  {[
                    { label: 'Frequency', value: report.frequency, icon: <Clock size={20} /> },
                    { label: 'Due Date', value: report.dueDate, icon: <AlertTriangle size={20} /> },
                    { label: 'State Fee', value: `$${report.stateFee}`, icon: <Shield size={20} /> },
                    { label: 'Service Fee', value: `$${report.serviceFee}`, icon: <CheckCircle2 size={20} /> },
                  ].map((r, i) => (
                    <div key={i} style={{
                      background: '#f8fafc', borderRadius: 16, padding: '20px 24px',
                      border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: 8,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0891b2' }}>
                        {r.icon}
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.label}</span>
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>{r.value}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  background: '#fef9c3', border: '1px solid #fde68a',
                  borderRadius: 12, padding: 20, marginBottom: 32,
                  color: '#92400e', fontSize: '0.95rem',
                }}>
                  No filing information available for this combination. Please contact our support team for assistance.
                </div>
              )}

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  style={{
                    background: 'linear-gradient(135deg, #0369a1, #0891b2)',
                    color: 'white', padding: '14px 36px',
                    borderRadius: 50, border: 'none', cursor: 'pointer',
                    fontWeight: 700, fontSize: '1rem',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    boxShadow: '0 4px 16px rgba(8,145,178,0.35)',
                    transition: 'transform .2s, box-shadow .2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
                >
                  Start Filing Your Annual Report
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── WHAT IS AN ANNUAL REPORT ──────────────────────────────────────── */}
      <section style={{ padding: '96px 0', background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              display: 'inline-block', background: '#ecfeff', color: '#0891b2',
              borderRadius: 50, padding: '6px 18px', fontSize: 13, fontWeight: 700,
              letterSpacing: '0.08em', marginBottom: 16,
            }}>UNDERSTANDING COMPLIANCE</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#0f172a', marginBottom: 16 }}>
              <ColorLastWords text="What is an Annual Report?" count={2} />
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: 720, margin: '0 auto' }}>
              An annual report is a state-mandated document that businesses must file to confirm and update key company information. Think of it as a yearly check-in with your state to maintain your business registration.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28, maxWidth: 960, margin: '0 auto' }}>
            {[
              { icon: Building2, title: 'Company Information', desc: 'Updates your business name, address, registered agent, and principal office location', color: '#0891b2', bg: '#ecfeff' },
              { icon: Users, title: 'Management Details', desc: 'Lists current directors, officers, members, or managers of your company', color: '#7c3aed', bg: '#f5f3ff' },
              { icon: FileText, title: 'Business Activity', desc: 'Confirms your business purpose and may include share information for corporations', color: '#059669', bg: '#ecfdf5' },
            ].map((item, idx) => (
              <div key={idx} className="card-hover" style={{
                background: '#fff', borderRadius: 24, padding: 36,
                border: '1.5px solid #e2e8f0', textAlign: 'center',
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 20, background: item.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <item.icon size={34} style={{ color: item.color }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANDATORY? ────────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#0f172a', marginBottom: 16 }}>
              <ColorLastWords text="Are Annual Reports Mandatory?" count={2} />
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: 640, margin: '0 auto' }}>
              Filing requirements vary by state and business type. Here's what you need to know.
            </p>
          </div>

          <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 24 }}>
            {/* Required */}
            <div style={{
              background: '#fff', borderRadius: 24, padding: 36,
              border: '2px solid #86efac',
              boxShadow: '0 4px 24px rgba(5,150,105,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ background: '#dcfce7', borderRadius: 12, padding: 10 }}>
                  <CheckCircle2 size={24} style={{ color: '#059669' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Required to File</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Single-member and multi-member LLCs', 'S Corporations', 'C Corporations', 'Nonprofit organizations'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exempt */}
            <div style={{
              background: '#fff', borderRadius: 24, padding: 36,
              border: '2px solid #d1d5db',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ background: '#f3f4f6', borderRadius: 12, padding: 10 }}>
                  <XCircle size={24} style={{ color: '#6b7280' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Generally Exempt</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Sole proprietorships and partnerships (no formal entity required)', 'Businesses in certain states like New Mexico and Ohio (for LLCs)'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#9ca3af', flexShrink: 0, marginTop: 7 }} />
                    <span style={{ color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 20, padding: 14,
                background: '#f9fafb', borderRadius: 12,
                borderLeft: '3px solid #d1d5db',
                fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic',
              }}>
                Note: Some states require biennial (every two years) filing instead of annual filing. Always check your specific state requirements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSEQUENCES ──────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 18, background: '#fef2f2',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <AlertTriangle size={32} style={{ color: '#dc2626' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#0f172a', marginBottom: 16 }}>
              <ColorLastWords text="What Happens If You Don't File?" count={2} />
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: 580, margin: '0 auto' }}>
              Failing to file your annual report can have serious consequences for your business.
            </p>
          </div>

          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                num: '01', color: '#f59e0b', bg: '#fffbeb',
                title: 'Late Fees and Penalties',
                desc: 'States impose additional penalties on top of regular filing fees. These fees increase the longer you wait, making it more expensive to get back into compliance.',
                extra: null
              },
              {
                num: '02', color: '#06b6d4', bg: '#ecfeff',
                title: 'Loss of Good Standing',
                desc: 'Your business falls out of good standing with the state, which complicates operations, makes it difficult to obtain financing, and can impact your ability to enter contracts or conduct business legally.',
                extra: null
              },
              {
                num: '03', color: '#dc2626', bg: '#fef2f2',
                title: 'Administrative Dissolution',
                desc: 'The state may administratively dissolve your entity, removing it from the official register. This eliminates your liability protection and legal standing as a business.',
                extra: ['Inability to operate under your business name', 'Difficulty attracting partners, investors, or customers', 'Potential personal liability for business debts']
              },
            ].map((item, idx) => (
              <div key={idx} className="card-hover" style={{
                background: '#fff', borderRadius: 20, padding: 32,
                border: '1.5px solid #e2e8f0',
                borderLeft: `5px solid ${item.color}`,
                display: 'flex', gap: 24,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, background: item.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: '1.1rem', color: item.color, flexShrink: 0,
                }}>
                  {item.num}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: '#64748b', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  {item.extra && (
                    <div style={{ marginTop: 16, background: '#fef2f2', borderRadius: 12, padding: 16 }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#991b1b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Additional consequences:</p>
                      {item.extra.map((e, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 4 }}>
                          <span style={{ color: '#dc2626', fontWeight: 700 }}>•</span>
                          <span style={{ fontSize: '0.9rem', color: '#b91c1c' }}>{e}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{
              display: 'inline-block', background: '#ecfeff', color: '#0891b2',
              borderRadius: 50, padding: '6px 18px', fontSize: 13, fontWeight: 700,
              letterSpacing: '0.08em', marginBottom: 16,
            }}>FAQ</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#0f172a' }}>
              <ColorLastWords text="Frequently Asked Questions" count={2} />
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { q: 'What is an annual report for an LLC or corporation?', a: 'An annual report is a mandatory state filing that updates key business information such as your company address, registered agent, owners, managers, or officers. States use this report to keep their business records accurate and up to date.' },
              { q: 'Is filing an annual report required every year?', a: 'Most states require businesses to file an annual report every year, while some require biennial filings. The requirement depends on your state and business entity type. Failing to file can lead to penalties or loss of good standing.' },
              { q: 'When is my annual report due?', a: 'Annual report due dates vary by state. Some states have fixed deadlines, while others base the due date on your business formation date or anniversary month. Missing your deadline can result in late fees.' },
              { q: 'What happens if I don\'t file my annual report?', a: 'If you fail to file your annual report, your business may face late penalties, loss of good standing, administrative dissolution, or even revocation of liability protection. Reinstating a dissolved business can be costly and time-consuming.' },
              { q: 'How much does it cost to file an annual report?', a: 'Annual report filing fees vary by state and business type. Fees can range from $0 to several hundred dollars. Some states also impose additional late penalties if the report is filed after the deadline.' },
              { q: 'What information is required for an annual report?', a: 'Most states require your legal business name, principal office address, registered agent details, and names of members, managers, directors, or officers. Corporations may also need to report share information.' },
              { q: 'Can I file my annual report myself?', a: 'Yes, business owners can file directly with the state. However, many choose a filing service to avoid mistakes, missed deadlines, or rejected filings that could put the business at risk.' },
              { q: 'How long does annual report filing take?', a: 'Online filings are often submitted immediately, but state processing times vary. Some states approve reports within minutes, while others may take several days or weeks to process the filing.' },
              { q: 'Do all states require annual reports?', a: 'Most states require annual or biennial reports, but a few states do not require LLCs to file annual reports. Requirements vary widely, so it\'s important to understand your specific state\'s rules.' },
              { q: 'Does filing an annual report mean I pay taxes?', a: 'No, an annual report is not a tax filing. It is a compliance requirement used to update state records. However, failure to file can affect your ability to file taxes or maintain good standing.' },
              { q: 'What is good standing, and why does it matter?', a: 'Good standing means your business is compliant with state requirements. Maintaining good standing is essential for opening bank accounts, obtaining financing, signing contracts, and protecting limited liability.' },
              { q: 'Can my business be dissolved for not filing an annual report?', a: 'Yes, states can administratively dissolve businesses that fail to file required reports. Dissolution removes liability protection and may require reinstatement fees to restore the business.' },
            ].map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff', borderRadius: 16,
                  border: `1.5px solid ${openFaq === idx ? '#0891b2' : '#e2e8f0'}`,
                  overflow: 'hidden',
                  transition: 'border-color .3s',
                  boxShadow: openFaq === idx ? '0 4px 16px rgba(8,145,178,0.1)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    padding: '20px 24px', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', flex: 1 }}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: '#0891b2', flexShrink: 0,
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform .3s',
                    }}
                  />
                </button>
                <div className={`faq-answer${openFaq === idx ? ' open' : ''}`}>
                  <p style={{ padding: '0 24px 20px', color: '#475569', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 40%, #0e7490 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 800, height: 800, marginLeft: -400, marginTop: -400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Stay Compliant.{' '}
            <span style={{ color: '#67e8f9' }}>Stay Protected.</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(186,230,253,0.9)', marginBottom: 44, maxWidth: 540, margin: '0 auto 44px' }}>
            Join 460,000+ businesses that trust us with their annual report filing
          </p>
          <button
            onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
            style={{
              background: 'white', color: '#0369a1',
              padding: '16px 44px', borderRadius: 50, border: 'none', cursor: 'pointer',
              fontWeight: 800, fontSize: '1.1rem',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              transition: 'transform .2s, box-shadow .2s',
              marginBottom: 40,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
          >
            File Your Annual Report
            <ArrowRight size={20} />
          </button>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 24,
            justifyContent: 'center', color: 'rgba(186,230,253,0.85)',
          }}>
            {[
              { icon: <Shield size={18} />, label: '100% State-Compliant' },
              { icon: <CheckCircle2 size={18} />, label: 'Fast & Accurate' },
              { icon: <Users size={18} />, label: 'Expert Support' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
                {s.icon}
                {s.label}
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