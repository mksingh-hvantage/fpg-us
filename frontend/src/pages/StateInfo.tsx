import { Link } from 'react-router-dom';
import { states } from '../data/states';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from 'react';

// ── Utility: wraps last two words of a string in a cyan span ──
function cyanLast2(text: string) {
  const words = text.trim().split(' ');
  if (words.length <= 2) {
    return <span className="text-cyan-600">{text}</span>;
  }
  const main = words.slice(0, -2).join(' ');
  const last2 = words.slice(-2).join(' ');
  return (
    <>
      {main}{' '}
      <span className="text-cyan-600">{last2}</span>
    </>
  );
}

export default function States() {
  const [search, setSearch] = useState('');
  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-bizee-peach">
      <style>{`
        /* ── Hero entrance animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleReveal {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -400% 0; }
          100% { background-position: 400% 0; }
        }
        @keyframes gradientFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(50px, -35px) scale(1.1); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-35px, 25px) scale(0.95); }
        }
        @keyframes orb3 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(20px, 30px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(10px); }
        }
        @keyframes ping-slow {
          0%   { transform: scale(1); opacity: 0.8; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Staggered hero items */
        .h-badge  { opacity: 0; animation: fadeDown   0.6s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.1s; }
        .h-h1     { opacity: 0; animation: fadeUp     0.7s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.25s; }
        .h-sub    { opacity: 0; animation: fadeUp     0.7s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.42s; }
        .h-stats  { opacity: 0; animation: fadeUp     0.65s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.55s; }
        .h-cta    { opacity: 0; animation: scaleReveal 0.6s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.68s; }
        .h-card   { opacity: 0; animation: scaleReveal 0.7s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.5s; }

        /* Only run when heroVisible */
        .hero-off .h-badge,
        .hero-off .h-h1,
        .hero-off .h-sub,
        .hero-off .h-stats,
        .hero-off .h-cta,
        .hero-off .h-card { animation: none; opacity: 0; }

        /* Animated gradient background */
        .hero-bg {
          background: linear-gradient(135deg, #164e63, #0e7490, #0891b2, #155e75, #164e63);
          background-size: 300% 300%;
          animation: gradientFlow 10s ease infinite;
        }

        /* Shimmer on heading text */
        .shimmer-text {
          background: linear-gradient(90deg,
            #fff 0%, #fff 35%,
            #67e8f9 50%,
            #fff 65%, #fff 100%
          );
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        /* Orbs */
        .orb-a { animation: orb1 8s ease-in-out infinite; }
        .orb-b { animation: orb2 11s ease-in-out infinite; }
        .orb-c { animation: orb3 13s ease-in-out infinite; }

        /* Floating card */
        .float-a { animation: float 5s ease-in-out infinite; }
        .float-b { animation: floatReverse 6s ease-in-out infinite; }

        /* Stat glass cards */
        .stat-glass {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s, background 0.3s;
        }
        .stat-glass:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.17);
        }

        /* CTA button */
        .btn-hero {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-hero:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 22px 44px rgba(0,0,0,0.3); }
        .btn-hero:hover::after { opacity: 1; }

        /* Grid texture */
        .grid-tex {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* Live dot */
        .live-dot::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #34d399;
          animation: ping-slow 2s cubic-bezier(0.215,0.61,0.355,1) infinite;
        }
      `}</style>

      <Helmet>
        <title>LLC State Information USA | Compare Best States to Form an LLC</title>
        <meta name="description" content="Explore detailed LLC state information in the USA. Compare the best states to form an LLC including taxes, compliance rules, fees, and business benefits." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/state-information-llc" />
        <meta name="keywords" content="LLC state information USA, best state to form an LLC, LLC state comparison, Delaware vs Wyoming LLC, LLC taxes by state" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/state-information-llc" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/state-information-llc" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LLC State Information USA | Compare Best States for LLC Formation" />
        <meta property="og:description" content="Compare LLC formation rules, taxes, and benefits across U.S. states to choose the best state for your business." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/state-information-llc" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Formation" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="LLC State Comparison and Information USA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="LLC State Information USA" />
        <meta name="twitter:description" content="Find the best U.S. state to form your LLC with detailed state-wise comparisons on taxes, fees, and compliance." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "LLC State Information USA",
          "url": "https://us.thefutureperfectglobal.com/state-information-llc",
          "description": "State-wise LLC information in the USA covering taxes, compliance, fees, and business advantages to help choose the best state for LLC formation.",
          "publisher": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "about": [
            "LLC State Comparison",
            "Best State for LLC Formation",
            "US LLC Regulations",
            "State Taxes for LLC"
          ]
        }`}</script>
      </Helmet>

      {/* ════════════════════════════════════════
          HERO SECTION — Redesigned & Animated
      ════════════════════════════════════════ */}
      <section className={`hero-bg relative overflow-hidden py-12 border-b border-cyan-900/30 ${!heroVisible ? 'hero-off' : ''}`}>

        {/* Grid texture overlay */}
        <div className="grid-tex absolute inset-0 pointer-events-none" />

        {/* Animated orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-a absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-300/20 blur-[90px]" />
          <div className="orb-b absolute -bottom-16 -right-16 w-[360px] h-[360px] rounded-full bg-teal-400/20 blur-[80px]" />
          <div className="orb-c absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-sky-400/10 blur-[70px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* ── LEFT: Text content ── */}
            <div className="text-center lg:text-left">

              {/* Badge */}
              <div className="h-badge inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/25 px-5 py-2 rounded-full mb-7">
                <span className="live-dot relative w-2.5 h-2.5">
                  <span className="relative block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-cyan-100 uppercase">State Guides — All 50 States</span>
              </div>

              {/* H1 — tag preserved, content untouched structurally */}
              <h1 className="h-h1 text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
                <span className="shimmer-text">LLC Requirements</span>
                <br />
                <span className="text-white">By{' '}</span>
                <span className="text-cyan-300">State</span>
              </h1>

              {/* Subheading */}
              <p className="h-sub text-lg sm:text-xl text-cyan-100/85 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
                Starting a business doesn't have to be a puzzle. We've organized every state's
                specific rules, fees, and timelines into one simple resource.
              </p>

              {/* Stats row */}
              <div className="h-stats grid grid-cols-3 gap-4 mb-10 max-w-sm mx-auto lg:mx-0">
                {[
                  { value: '50', label: 'States' },
                  { value: '1–3', label: 'Day Filing' },
                  { value: '100%', label: 'Accurate' },
                ].map((s) => (
                  <div key={s.label} className="stat-glass rounded-2xl py-4 px-3 text-center">
                    <div className="text-2xl font-black text-white">{s.value}</div>
                    <div className="text-xs text-cyan-200 mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="h-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="btn-hero bg-white text-cyan-700 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                >
                  🚀 Get Started Now
                </button>
                <a
                  href="#state-grid"
                  className="border-2 border-white/40 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-center"
                >
                  Browse States ↓
                </a>
              </div>
            </div>

            {/* ── RIGHT: Floating info card ── */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="float-a relative w-full max-w-sm">

                {/* Glow behind card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-300/25 to-teal-400/20 blur-2xl scale-110 pointer-events-none" />

                {/* Main card */}
                <div className="h-card relative bg-white/10 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">

                  {/* Window dots */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
                    <span className="ml-auto text-xs text-white/50 font-mono">state-compare.tsx</span>
                  </div>

                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-4">Top States Comparison</div>

                  {/* State comparison rows */}
                  {[
                    { state: 'Wyoming',  flag: '🏔️', fee: '$100', tax: 'No income tax', badge: 'Popular' },
                    { state: 'Delaware', flag: '⚖️', fee: '$90',  tax: 'Business courts', badge: 'Startup Fav' },
                    { state: 'Nevada',   flag: '🎰', fee: '$75',  tax: 'No state tax', badge: 'Privacy' },
                  ].map((row, i) => (
                    <div
                      key={row.state}
                      className={`flex items-center gap-3 py-3 ${i < 2 ? 'border-b border-white/10' : ''}`}
                    >
                      <span className="text-2xl">{row.flag}</span>
                      <div className="flex-1">
                        <div className="text-white font-bold text-sm">{row.state}</div>
                        <div className="text-cyan-200 text-xs">{row.tax}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">{row.fee}</div>
                        <span className="text-[10px] bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 px-2 py-0.5 rounded-full font-medium">
                          {row.badge}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="mt-5 bg-emerald-400/15 border border-emerald-400/30 rounded-xl px-4 py-3 text-center">
                    <span className="text-emerald-300 text-sm font-semibold">✓ All 50 states available</span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="float-b absolute -top-4 -right-4 bg-cyan-400 text-cyan-900 text-xs font-black px-4 py-2 rounded-full shadow-xl">
                  FREE Guide
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
    STATE GRID SECTION — Mosaic Tile Design
════════════════════════════════════════ */}
<section id="state-grid" className="py-24 bg-[#f8fafc]">
  <style>{`
    .state-tile {
      position: relative;
      background: #fff;
      border-radius: 20px;
      border: 1.5px solid #e2e8f0;
      padding: 22px 18px 18px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
      transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
      overflow: hidden;
    }
    .state-tile::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #ecfeff 0%, #fff 60%);
      opacity: 0;
      transition: opacity 0.3s;
      border-radius: 20px;
    }
    .state-tile:hover {
      transform: translateY(-5px) scale(1.025);
      border-color: #06b6d4;
      box-shadow: 0 16px 40px rgba(6,182,212,0.15), 0 2px 8px rgba(0,0,0,0.06);
    }
    .state-tile:hover::before { opacity: 1; }
    .state-tile:hover .tile-arrow { opacity: 1; transform: translate(0,0); }
    .state-tile:hover .tile-abbr { color: #0891b2; }
    .tile-arrow {
      opacity: 0;
      transform: translate(-4px, 4px);
      transition: all 0.25s ease;
    }
    .tile-fee-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: #f0fdfa;
      border: 1px solid #99f6e4;
      color: #0f766e;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 99px;
      width: fit-content;
    }
    .tile-popular {
      position: absolute;
      top: 10px;
      right: 10px;
      background: linear-gradient(135deg, #0891b2, #06b6d4);
      color: #fff;
      font-size: 9px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 3px 8px;
      border-radius: 99px;
    }
    .search-input-wrap {
      position: relative;
    }
    .search-input-wrap svg {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      pointer-events: none;
    }
    .search-input-wrap input {
      padding-left: 44px !important;
    }
    @keyframes tileIn {
      from { opacity: 0; transform: translateY(18px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .tile-animate {
      animation: tileIn 0.4s cubic-bezier(0.22,1,0.36,1) both;
    }
  `}</style>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
      <div>
        <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block"></span>
          All 50 States
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Browse LLC Info <span className="text-cyan-600">by State</span>
        </h2>
        <p className="text-slate-500 mt-2 text-base">Click any state to view fees, timelines &amp; requirements.</p>
      </div>

      {/* Search */}
      <div className="search-input-wrap w-full sm:w-72">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search state..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border border-gray-200
            focus:outline-none focus:ring-2 focus:ring-cyan-400
            focus:border-transparent text-slate-700 shadow-sm text-sm"
        />
      </div>
    </div>

    {/* Count */}
    <p className="text-xs text-slate-400 font-medium mb-6">
      Showing <span className="text-cyan-600 font-bold">{filteredStates.length}</span> of 50 states
    </p>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filteredStates.map((state, i) => {
        const popularStates = ['Wyoming', 'Delaware', 'Nevada', 'Florida', 'Texas'];
        const isPopular = popularStates.includes(state.name);
        return (
          <Link
            key={state.slug}
            to={`/state-llc-formation/${state.slug}`}
            className="state-tile tile-animate"
            style={{ animationDelay: `${Math.min(i * 0.04, 0.8)}s` }}
          >
            {isPopular && <span className="tile-popular">⭐ Popular</span>}

            {/* Abbreviation */}
            <div className="tile-abbr text-2xl font-black text-slate-200 tracking-tight transition-colors leading-none">
              {state.name.substring(0, 2).toUpperCase()}
            </div>

            {/* State Name */}
            <h3 className="relative z-10 text-sm font-bold text-slate-800 leading-tight mt-1">
              {state.name}
            </h3>

            {/* Filing Fee badge */}
            <div className="tile-fee-badge relative z-10">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              {state.filingFee}
            </div>

            {/* Annual fee */}
            <div className="relative z-10 text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
              <span>Annual:</span>
              <span className="text-slate-600 font-semibold">{state.annualReportFee}</span>
            </div>

            {/* Arrow */}
            <div className="tile-arrow relative z-10 mt-1 text-cyan-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </div>
          </Link>
        );
      })}
    </div>

    {filteredStates.length === 0 && (
      <div className="text-center py-20 text-slate-400">
        <div className="text-5xl mb-4">🔍</div>
        <p className="font-semibold text-lg">No states found for "<span className="text-cyan-600">{search}</span>"</p>
      </div>
    )}
  </div>
</section>

      {/* ════════════════════════════════════════
          BEST STATE SECTION
      ════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-bizee-cyan bg-cyan-100 rounded-full">
                LLC Formation Guide
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                What Is the <span className="text-bizee-cyan">Best State</span> to{' '}
                <span className="text-cyan-600">Form an LLC?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Choosing the <strong>best state to form an LLC</strong> depends on several
                factors including <strong>LLC filing fees, annual report costs, taxes,
                and state regulations</strong>. Many entrepreneurs form an LLC in the
                state where they live and operate their business.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                However, states like <strong>Wyoming, Delaware, and Nevada</strong> are
                well known for their <span className="text-bizee-cyan font-semibold">
                  low filing fees, strong privacy protections, and business-friendly laws
                </span>. These benefits make them popular choices for startups,
                online businesses, and out-of-state entrepreneurs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-cyan-100">
                  <p className="text-sm text-slate-500">Popular State</p>
                  <p className="font-semibold text-slate-900">Wyoming LLC</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-cyan-100">
                  <p className="text-sm text-slate-500">Startup Friendly</p>
                  <p className="font-semibold text-slate-900">Delaware LLC</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-cyan-100">
                  <p className="text-sm text-slate-500">No State Income Tax</p>
                  <p className="font-semibold text-slate-900">Nevada LLC</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-cyan-200 rounded-3xl blur-2xl opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80"
                alt="Best state to form an LLC"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          RESOURCES SECTION
      ════════════════════════════════════════ */}
      <section className="py-24 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
              {cyanLast2('LLC Formation Resources by State')}
            </h2>
            <p className="text-lg text-slate-600 max-w-5xl mx-auto">
              Looking for more details on <strong>how to start an LLC</strong> in your state?
              Explore our expert guides covering <strong>LLC formation by state, filing fees,
              registration steps, and annual requirements</strong>. These resources from
              <strong> The Future Perfect Global</strong> will help you compare
              <strong> LLC costs, legal requirements, and the best states to start an LLC</strong>
              {' '}so you can choose the right location for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <ResourceCard image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80" title="Understanding Filing Fees" link="#" />
            <ResourceCard image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80" title="Navigating Filing Times" link="#" />
            <ResourceCard image="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80" title="Business Name Search" link="#" />
            <ResourceCard image="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80" title="Filing Annual Reports" link="#" />
            <ResourceCard image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80" title="State LLC Filing Tips" link="#" />
            <ResourceCard image="https://images.unsplash.com/photo-1619898381495-5416f6c8045c?q=80" title="File in Another Country" link="#" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
            {cyanLast2('Frequently Asked Questions')}
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What is the best state to form an LLC in the USA?",
                answer: "The best state to form an LLC usually depends on where you live and operate your business. Most small business owners form an LLC in their home state. However, states like Wyoming, Delaware, and Nevada are popular for their business-friendly laws, privacy protections, and low LLC filing fees.",
              },
              {
                question: "Do I need to form my LLC in the state where I live?",
                answer: "In most cases, yes. If you operate your business in your home state, you typically need to register your LLC there. Forming an LLC in another state may require registering as a foreign LLC in your home state and paying additional fees.",
              },
              {
                question: "Which state has the cheapest LLC filing fees?",
                answer: "LLC filing fees vary by state. States like Kentucky, Arkansas, and New Mexico offer some of the lowest LLC formation costs. However, it's important to consider annual fees, taxes, and reporting requirements when choosing the cheapest state to start an LLC.",
              },
              {
                question: "Why do people form LLCs in Delaware?",
                answer: "Delaware is popular because of its well-established business laws, specialized business courts, and investor-friendly regulations. Many large companies and startups choose Delaware for its predictable legal system and strong corporate protections.",
              },
              {
                question: "Is Wyoming a good state to start an LLC?",
                answer: "Yes. Wyoming is known for low LLC filing fees, strong privacy protections, and no state income tax for businesses. These benefits make it a popular choice for online businesses, entrepreneurs, and digital nomads.",
              },
              {
                question: "What are the annual costs of maintaining an LLC?",
                answer: "Annual LLC costs depend on the state and may include annual report fees, franchise taxes, or business license renewals. Some states charge under $50 per year, while others may require several hundred dollars annually.",
              },
              {
                question: "Can I run my LLC in multiple states?",
                answer: "Yes. If your LLC operates in multiple states, you may need to register as a foreign LLC in each state where you conduct business. This ensures compliance with local regulations and tax laws.",
              },
              {
                question: "How long does it take to form an LLC?",
                answer: "LLC formation times vary by state. Some states process filings within 1–3 business days, while others may take several weeks. Many states also offer expedited filing options for an additional fee.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl p-6 group border-2 border-gray-200 hover:border-cyan-500 transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <svg className="w-6 h-6 text-cyan-500 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-bizee-cyan rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            {/* last two words → cyan-600, but on dark bg use cyan-400 for visibility */}
            Start Your LLC the{' '}
            <span className="text-cyan-400">Right Way</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Ready to <strong>start an LLC and launch your business?</strong> Our step-by-step
            resources help entrepreneurs compare <strong>LLC formation costs,
            filing fees, and requirements by state</strong> so you can choose the
            best place to register your company and grow with confidence.
          </p>
          <button
            onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
            className="inline-flex items-center gap-3 px-10 py-5
              bg-cyan-600 text-white rounded-full font-bold text-lg
              hover:bg-cyan-500 transition-all duration-300
              shadow-xl hover:shadow-cyan-500/30
              hover:-translate-y-0.5 active:scale-95"
          >
            Start Your LLC Today
            <span className="text-2xl">→</span>
          </button>
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

// ── Sub-component ──
function ResourceCard(props: { image: any; title: any; link: any }) {
  return (
    <a
      href={props.link}
      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <h3 className="text-base font-semibold text-slate-900">{props.title}</h3>
        <span className="text-xl text-slate-400 group-hover:text-bizee-cyan transition-colors">↗</span>
      </div>
    </a>
  );
}