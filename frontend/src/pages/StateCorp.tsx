import { Link } from 'react-router-dom';
import { states } from '../data/states';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// ── Utility: wraps last two words in cyan span ──
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  );

  const faqs = [
    {
      question: "What is corporation formation by state in the USA?",
      answer: "Corporation formation by state in the USA means legally creating a corporation in a specific state based on that state's business laws, filing fees, tax rules, and compliance requirements. Each state has its own incorporation process, which is why business owners often compare the best states to form a corporation before registering."
    },
    {
      question: "Why does the state matter when forming a corporation in the USA?",
      answer: "The state matters because corporation laws, annual report requirements, franchise taxes, filing costs, and privacy rules vary from state to state. Choosing the right state for corporation formation can help reduce costs, simplify compliance, and support long-term business growth."
    },
    {
      question: "Which is the best state to form a corporation in the USA?",
      answer: "The best state to form a corporation in the USA depends on your business goals. Many small businesses choose their home state for easier compliance, while some founders consider states like Delaware, Wyoming, or Nevada for business-friendly laws, tax advantages, and investor appeal."
    },
    {
      question: "Can I form a corporation in a state where I do not live?",
      answer: "Yes, you can form a corporation in a different state even if you do not live there. However, if you operate your business in your home state, you may also need to register there as a foreign corporation, which can create extra filing fees and compliance obligations."
    },
    {
      question: "What are the basic steps for corporation formation by state?",
      answer: "The basic steps usually include choosing the state of incorporation, selecting a business name, appointing a registered agent, filing Articles of Incorporation, creating corporate bylaws, issuing shares, obtaining an EIN, and meeting ongoing state compliance requirements."
    },
    {
      question: "Do all states require a registered agent for corporation formation?",
      answer: "Yes, nearly every state requires a registered agent when forming a corporation. A registered agent receives legal notices, tax documents, and official government correspondence on behalf of your corporation in the state of formation."
    },
    {
      question: "How much does it cost to form a corporation by state in the USA?",
      answer: "The cost to form a corporation in the USA depends on the state you choose. Filing fees, annual reports, franchise taxes, and registered agent costs vary widely, so comparing corporation formation costs by state is an important step before incorporating."
    },
    {
      question: "Is forming a corporation in Delaware better than forming in my home state?",
      answer: "Delaware is popular for corporation formation because of its established corporate laws, business court system, and investor familiarity. However, for many small businesses that mainly operate locally, forming a corporation in the home state is often simpler and more cost-effective."
    },
    {
      question: "What is the difference between domestic and foreign corporation registration?",
      answer: "A domestic corporation is formed in the state where it is incorporated. A foreign corporation is a corporation that was formed in one state but is registered to do business in another state. Businesses operating across state lines may need foreign qualification in addition to initial formation."
    },
    {
      question: "How do I choose the right state for corporation formation in the USA?",
      answer: "To choose the right state for corporation formation, compare factors such as filing fees, state taxes, reporting requirements, privacy protections, legal advantages, and where your company will actually conduct business. The right state depends on your budget, growth plans, and operating location."
    }
  ];

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
        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleReveal {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { background-position: -400% 0; }
          100% { background-position: 400% 0; }
        }
        @keyframes orbA {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(45px,-30px) scale(1.08); }
        }
        @keyframes orbB {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(-30px,22px) scale(0.94); }
        }
        @keyframes orbC {
          0%, 100% { transform: translate(0,0); }
          50%       { transform: translate(18px,28px); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(10px); }
        }
        @keyframes pingSlow {
          0%   { transform: scale(1); opacity: 0.8; }
          70%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Hero entrance ── */
        .h-badge { opacity:0; animation: fadeDown   0.6s cubic-bezier(.22,1,.36,1) forwards; animation-delay:.10s; }
        .h-h1    { opacity:0; animation: fadeUp     0.7s cubic-bezier(.22,1,.36,1) forwards; animation-delay:.25s; }
        .h-sub   { opacity:0; animation: fadeUp     0.7s cubic-bezier(.22,1,.36,1) forwards; animation-delay:.42s; }
        .h-stats { opacity:0; animation: fadeUp     0.65s cubic-bezier(.22,1,.36,1) forwards; animation-delay:.55s; }
        .h-cta   { opacity:0; animation: scaleReveal 0.6s cubic-bezier(.22,1,.36,1) forwards; animation-delay:.68s; }
        .h-card  { opacity:0; animation: scaleReveal 0.7s cubic-bezier(.22,1,.36,1) forwards; animation-delay:.50s; }

        .hero-off .h-badge,
        .hero-off .h-h1,
        .hero-off .h-sub,
        .hero-off .h-stats,
        .hero-off .h-cta,
        .hero-off .h-card { animation:none; opacity:0; }

        /* ── Hero BG ── */
        .hero-bg {
          background: linear-gradient(135deg,#164e63,#0e7490,#0891b2,#155e75,#164e63);
          background-size: 300% 300%;
          animation: gradientFlow 10s ease infinite;
        }
        .grid-tex {
          background-image:
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.05) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* ── Shimmer heading ── */
        .shimmer-text {
          background: linear-gradient(90deg,#fff 0%,#fff 35%,#67e8f9 50%,#fff 65%,#fff 100%);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        /* ── Orbs ── */
        .orb-a { animation: orbA  8s ease-in-out infinite; }
        .orb-b { animation: orbB 11s ease-in-out infinite; }
        .orb-c { animation: orbC 13s ease-in-out infinite; }

        /* ── Float ── */
        .float-up   { animation: floatUp   5s ease-in-out infinite; }
        .float-down { animation: floatDown 6s ease-in-out infinite; }

        /* ── Stat glass ── */
        .stat-glass {
          background: rgba(255,255,255,.10);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,.22);
          transition: transform .3s, background .3s;
        }
        .stat-glass:hover { transform: translateY(-4px); background: rgba(255,255,255,.17); }

        /* ── Live dot ── */
        .live-ping {
          position: absolute; inset: 0; border-radius: 9999px;
          background: #34d399;
          animation: pingSlow 2s cubic-bezier(.215,.61,.355,1) infinite;
        }

        /* ── CTA button ── */
        .btn-hero {
          position: relative; overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .btn-hero::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%);
          opacity:0; transition: opacity .3s;
        }
        .btn-hero:hover { transform:translateY(-3px) scale(1.04); box-shadow:0 22px 44px rgba(0,0,0,.28); }
        .btn-hero:hover::after { opacity:1; }

        /* ── Ticker ── */
        .ticker-track { animation: tickerScroll 22s linear infinite; }
      `}</style>

      <Helmet>
        <title>Corporation State Information USA | Compare Best States to Form a Corporation</title>
        <meta name="description" content="Explore detailed corporation state information in the USA. Compare the best states to form a C-Corporation or S-Corporation including taxes, compliance rules, fees, and benefits." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/state-information-corp" />
        <meta name="keywords" content="corporation state information USA, best state to form a corporation, C corp state comparison, S corp state comparison, corporation taxes by state" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/state-information-corp" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/state-information-corp" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Corporation State Information USA | Compare Best States for Corporations" />
        <meta property="og:description" content="Compare U.S. states for C-Corp and S-Corp formation including taxes, compliance, filing costs, and business advantages." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/state-information-corp" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Formation" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Corporation State Comparison and Information USA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Corporation State Information USA" />
        <meta name="twitter:description" content="Find the best U.S. state to form a corporation with state-wise comparisons on taxes, fees, and compliance." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Corporation State Information USA",
          "url": "https://us.thefutureperfectglobal.com/state-information-corp",
          "description": "State-wise corporation information in the USA covering C-Corp and S-Corp taxes, compliance requirements, fees, and business advantages.",
          "publisher": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "about": ["Corporation State Comparison","Best State for Corporation Formation","C Corporation Regulations","S Corporation Regulations","US Corporate Taxes by State"]
        }`}</script>
      </Helmet>

      {/* ══════════════════════════════════
          HERO SECTION
      ══════════════════════════════════ */}
      <section className={`hero-bg relative overflow-hidden py-12 border-b border-cyan-900/30 ${!heroVisible ? 'hero-off' : ''}`}>

        {/* Grid texture */}
        <div className="grid-tex absolute inset-0 pointer-events-none" />

        {/* Animated orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-a absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-cyan-300/20 blur-[90px]" />
          <div className="orb-b absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full bg-teal-400/20 blur-[80px]" />
          <div className="orb-c absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-sky-400/10 blur-[70px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* ── Left: text ── */}
            <div className="text-center lg:text-left">

              {/* Badge */}
              <div className="h-badge inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/25 px-5 py-2 rounded-full mb-7">
                <span className="relative w-2.5 h-2.5 flex-shrink-0">
                  <span className="live-ping absolute inset-0" />
                  <span className="relative block w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-cyan-100 uppercase">State Guides — All 50 States</span>
              </div>

              {/* H1 — tag unchanged */}
              <h1 className="h-h1 text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
                <span className="shimmer-text">Corporation Requirements</span>
                <br />
                By{' '}<span className="text-cyan-300">State</span>
              </h1>

              {/* Sub */}
              <p className="h-sub text-lg sm:text-xl text-cyan-100/85 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-9">
                Starting a business doesn't have to be a puzzle. We've organized every state's
                specific rules, fees, and timelines into one simple resource.
              </p>

              {/* Stats */}
              <div className="h-stats grid grid-cols-3 gap-4 mb-10 max-w-sm mx-auto lg:mx-0">
                {[
                  { value: '50',   label: 'States' },
                  { value: 'C&S',  label: 'Corp Types' },
                  { value: '100%', label: 'Accurate' },
                ].map((s) => (
                  <div key={s.label} className="stat-glass rounded-2xl py-4 px-3 text-center">
                    <div className="text-2xl font-black text-white">{s.value}</div>
                    <div className="text-xs text-cyan-200 mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
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

            {/* ── Right: floating card ── */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="float-up relative w-full max-w-sm">

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-300/25 to-teal-400/20 blur-2xl scale-110 pointer-events-none" />

                {/* Card */}
                <div className="h-card relative bg-white/10 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">

                  {/* Window dots */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                    <span className="ml-auto text-xs text-white/50 font-mono">corp-compare.tsx</span>
                  </div>

                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-4">Top Corp States</div>

                  {[
                    { state: 'Delaware', flag: '⚖️', fee: '$90',  tag: 'Investor Fav', note: 'Best court system' },
                    { state: 'Wyoming',  flag: '🏔️', fee: '$100', tag: 'Privacy',       note: 'No income tax' },
                    { state: 'Nevada',   flag: '🎰', fee: '$75',  tag: 'Low Tax',       note: 'No corp tax' },
                  ].map((row, i) => (
                    <div key={row.state} className={`flex items-center gap-3 py-3 ${i < 2 ? 'border-b border-white/10' : ''}`}>
                      <span className="text-2xl">{row.flag}</span>
                      <div className="flex-1">
                        <div className="text-white font-bold text-sm">{row.state}</div>
                        <div className="text-cyan-200 text-xs">{row.note}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">{row.fee}</div>
                        <span className="text-[10px] bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 px-2 py-0.5 rounded-full font-medium">{row.tag}</span>
                      </div>
                    </div>
                  ))}

                  <div className="mt-5 bg-emerald-400/15 border border-emerald-400/30 rounded-xl px-4 py-3 text-center">
                    <span className="text-emerald-300 text-sm font-semibold">✓ C-Corp &amp; S-Corp guides available</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="float-down absolute -top-4 -right-4 bg-cyan-400 text-cyan-900 text-xs font-black px-4 py-2 rounded-full shadow-xl">
                  FREE Guide
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Ticker strip */}
        <div className="mt-16 overflow-hidden border-t border-white/10 pt-4">
          <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
            {[...Array(2)].map((_, ri) => (
              ['Delaware', 'Wyoming', 'Nevada', 'Texas', 'Florida', 'California', 'New York', 'Colorado', 'Georgia', 'Illinois'].map((s) => (
                <span key={`${ri}-${s}`} className="text-sm font-semibold text-white/40 uppercase tracking-widest">{s} &nbsp;·</span>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATE GRID
      ══════════════════════════════════ */}
      <section id="state-grid" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Select Your <span className="text-cyan-600">State</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Compare corporation filing fees, annual costs, and requirements for every U.S. state.
            </p>
            <div className="mt-6 h-1 w-24 bg-bizee-cyan rounded-full" />
            <div className="mt-8">
              <input
                type="text"
                placeholder="Search your state..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-96 px-5 py-3 rounded-xl border border-gray-200
                           focus:outline-none focus:ring-2 focus:ring-bizee-cyan
                           focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredStates.map((state) => (
              <Link
                key={state.slug}
                to={`/${state.slug}-corporation`}
                className="group relative bg-cyan-100/40 p-7 rounded-3xl
                           border border-cyan-100 shadow-sm
                           hover:shadow-2xl hover:border-bizee-cyan/30
                           transition-all duration-300 ease-out hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold text-cyan-500 transition-colors">{state.name}</h3>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-bizee-cyan transform group-hover:translate-x-1 transition-all" />
                </div>
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">Filing Fee</span>
                    <span className="text-sm font-semibold text-slate-700">{state.filingFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">Annual Fee</span>
                    <span className="text-sm font-semibold text-slate-700">{state.annualReportFee}</span>
                  </div>
                </div>
                <div className="mt-6 text-sm font-semibold text-bizee-cyan">View state details →</div>
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-bizee-cyan/5 via-transparent to-transparent" />
              </Link>
            ))}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center mt-12 text-gray-500">No states found.</div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════
          BEST STATE SECTION
      ══════════════════════════════════ */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                <span className="text-cyan-500">Best States to Start an LLC:</span> How to Choose the{' '}
                <span className="text-cyan-600">Right State</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Choosing the best state to form an LLC depends on your business goals, filing costs,
                annual compliance requirements, taxes, privacy protections, and whether you will
                operate in your home state or nationwide.{' '}
                <span className="text-bizee-cyan font-medium">
                  You do not always have to form your LLC in the state where you live
                </span>
                , but it is important to compare the legal and tax implications before making a decision.
                Popular LLC formation states such as Wyoming, Delaware, and Nevada are often
                considered for their business-friendly laws, lower fees, and added privacy benefits.
                Explore the guides below to compare LLC formation by state and find the best option
                for your business.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1629905679177-4c4e2623654f"
                alt="Choosing the right state"
                className="w-full max-w-md mx-auto rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          RESOURCES SECTION
      ══════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
              Helpful <span className="text-cyan-500">LLC Formation</span>{' '}
              <span className="text-cyan-600">Resources by State</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-5xl mx-auto">
              Looking for more guidance on starting an LLC in your state? Explore our
              detailed state-by-state guides, tools, and expert resources designed to
              help entrepreneurs understand the LLC formation process, filing
              requirements, and ongoing compliance rules across the United States.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <ResourceCard image="https://dummyimage.com/600x400/000/fff" title="Understanding Filing Fees" link="#" />
            <ResourceCard image="https://dummyimage.com/600x400/000/fff" title="Navigating Filing Times" link="#" />
            <ResourceCard image="https://dummyimage.com/600x400/000/fff" title="Business Name Search" link="#" />
            <ResourceCard image="https://dummyimage.com/600x400/000/fff" title="Filing Annual Reports" link="#" />
            <ResourceCard image="https://dummyimage.com/600x400/000/fff" title="State LLC Filing Tips" link="#" />
            <ResourceCard image="https://dummyimage.com/600x400/000/fff" title="File in Another Country" link="#" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════ */}
      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-black text-gray-900 mb-12">
            Frequently Asked{' '}<span className="text-cyan-600">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA SECTION
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-bizee-cyan rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">
            Launch your business with{' '}<span className="text-cyan-400">confidence.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join over 500 business owners who have used our platform to start,
            manage, and grow their companies.
          </p>
          <Link
            to="/start"
            className="inline-flex items-center px-10 py-5 bg-cyan-500 text-white rounded-full font-bold text-lg hover:bg-cyan-400 transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-95"
          >
            Start My LLC Now
          </Link>
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