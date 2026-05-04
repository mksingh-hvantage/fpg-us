import { Link, useLocation } from 'react-router-dom';
import { states } from '../data/states';
import { Helmet } from "react-helmet-async"; 
import { useState, useEffect } from 'react'; 
import GetStartedModal from '../components/GetStartedModal';
import { ArrowRight, MapPin, Building2, CheckCircle2, FileText, BadgeDollarSign, Landmark, ArrowLeft } from 'lucide-react';

// Helper: wraps the last two words of a string in a cyan span
function AccentLastTwo({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 2) {
    return <span className="text-cyan-600">{text}</span>;
  }
  const main = words.slice(0, -2).join(' ');
  const accent = words.slice(-2).join(' ');
  return (
    <>
      {main}{' '}
      <span className="text-cyan-600">{accent}</span>
    </>
  );
}

export default function StateCorporation() { 
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const stateSlug = location.pathname.split('/')[1]?.replace('-corporation', '');
  const stateData = states.find(s => s.slug === stateSlug);

  if (!stateData) {
    return <div className="py-20 text-center text-xl">State not found</div>;
  }

  const benefits = [
    "Personal asset protection for owners and shareholders",
    "Better credibility with vendors, banks, and enterprise clients",
    "Flexible ownership structure with share-based fundraising options",
    "Easier long-term scaling for teams, partners, and outside investors",
    "Clear legal framework for governance, meetings, and stock issuance",
  ];

  const steps = [
    {
      title: `Pick a Distinct ${stateData.name} Corporate Name`,
      desc: `Your company name should be distinguishable from existing records on file with the state. Before moving ahead, search the ${stateData.name} business database to confirm your preferred name is open and compliant.`,
    },
    {
      title: "Decide on a Business Address",
      desc: "Your corporation needs an address for formation and official records. Depending on your setup, this could be a commercial office, operational location, or another valid mailing address used for business purposes.",
    },
    {
      title: `Name a ${stateData.name} Registered Agent`,
      desc: `Every corporation formed in ${stateData.name} must maintain a registered agent with a physical in-state street address. This party accepts legal notices and government correspondence during normal business hours.`,
    },
    {
      title: "Submit Articles of Incorporation",
      desc: `To legally create the corporation, file your formation paperwork with the ${stateData.name} Secretary of State. This filing establishes the business as a recognized corporation under ${stateData.name} law.`,
    },
    {
      title: "Apply for an EIN",
      desc: "An Employer Identification Number is used for federal tax reporting, payroll, opening a business bank account, and other financial operations. Most corporations will need one shortly after formation.",
    },
    {
      title: "Prepare Corporate Bylaws",
      desc: "Bylaws outline how the corporation will operate internally, including director roles, meetings, voting procedures, and governance rules. Even when not mandated, they are strongly recommended.",
    },
  ];

  const filingItems = [
    "Corporate name",
    "Name and address of the filer",
    `${stateData.name} parish where the business will be associated`,
    "Business purpose",
    "Planned duration, if not perpetual",
    "Authorized share structure",
    "Registered agent details",
    "Initial director information",
    "Organizer signature",
    "Notarial details where applicable",
    "Registered agent acceptance",
  ];

  const corpTypes = [
    {
      title: "C Corporation",
      desc: "This is the standard corporate structure used by many growth-focused businesses. It works well for founders planning to issue stock, attract investors, or build a more formal ownership model.",
    },
    {
      title: "S Corporation Tax Election",
      desc: "An S corporation is a federal tax status rather than a separate state entity type. Eligible corporations can elect this treatment with the IRS to potentially change how business income is taxed.",
    },
    {
      title: "Professional Corporation",
      desc: `Certain licensed occupations in ${stateData.name} may need to use a professional corporation structure, depending on regulatory rules tied to the profession.`,
    },
    {
      title: "Foreign Corporation",
      desc: `If your company was formed outside ${stateData.name} and will transact business inside the state, you may need foreign qualification before operating lawfully.`,
    },
    {
      title: "Nonprofit Corporation",
      desc: "Organizations formed for charitable, educational, religious, or public-purpose goals may choose the nonprofit route instead of a standard for-profit corporation.",
    },
    {
      title: "LLC Alternative",
      desc: `For leaner operations or owner-managed businesses, a ${stateData.name} LLC may be simpler to maintain while still offering liability protection and operational flexibility.`,
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Animation keyframes injected once ── */}
      <style>{`
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.08); }
          66%       { transform: translate(-20px, 15px) scale(0.94); }
        }
        @keyframes blob-float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-25px, 20px) scale(1.06); }
          66%       { transform: translate(20px, -15px) scale(0.96); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(34,211,238,0.35); }
          70%  { box-shadow: 0 0 0 14px rgba(34,211,238,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,211,238,0); }
        }

        .animate-blob-1 { animation: blob-float 9s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-float-reverse 11s ease-in-out infinite; }
        .animate-blob-3 { animation: blob-float 13s ease-in-out infinite 2s; }

        .hero-enter-0  { animation: fade-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.1s both; }
        .hero-enter-1  { animation: fade-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.25s both; }
        .hero-enter-2  { animation: fade-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.4s both; }
        .hero-enter-3  { animation: fade-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.55s both; }
        .hero-enter-4  { animation: fade-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.7s both; }
        .hero-card-in  { animation: slide-in-right 0.8s cubic-bezier(.22,.68,0,1.2) 0.45s both; }

        .btn-pulse { animation: pulse-ring 2.2s ease-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #22d3ee 0%, #fff 40%, #22d3ee 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }

        .stat-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }

        .grid-line {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <Helmet>
        <title>
          Iowa Corporation Formation – Register a Corporation in Iowa | The Future Perfect Global
        </title>
        <meta name="description" content="Start a corporation in Iowa with expert support. The Future Perfect Global helps with Iowa corporation formation, registration, filing requirements, fees, compliance, and ongoing support." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/iowa-corporation" />
        <meta name="keywords" content="Iowa corporation, Iowa corporation formation, register a corporation in Iowa, start a corporation in Iowa, Iowa incorporation services, Iowa corporate registration" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/iowa-corporation" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/iowa-corporation" hrefLang="x-default" />
        <meta name="ROBOTS" content="INDEX, FOLLOW" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Iowa Corporation Formation – Register a Corporation in Iowa" />
        <meta property="og:description" content="Form and register a corporation in Iowa with complete guidance on filing, fees, compliance, and state requirements." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/iowa-corporation" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Iowa Corporation Formation – The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Iowa Corporation Formation – Register in Iowa" />
        <meta name="twitter:description" content="Looking to start a corporation in Iowa? Get expert help with registration, filing requirements, and compliance." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Iowa Corporation Formation",
          "url": "https://us.thefutureperfectglobal.com/iowa-corporation",
          "provider": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "description": "Professional Iowa corporation formation and registration services including filing, compliance, and ongoing business support.",
          "areaServed": ["Iowa","United States"],
          "serviceType": ["Iowa Corporation Registration","Incorporation Services","State Filing Support","Business Compliance"]
        }`}</script>
      </Helmet>

      <div className="bg-white text-slate-800">

        {/* ═══════════════════════════════════════════════
            HERO SECTION — animated, professional
        ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white min-h-[92vh] flex items-center">

          {/* Animated background grid */}
          <div className="absolute inset-0 grid-line pointer-events-none" />

          {/* Floating blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="animate-blob-1 absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-cyan-500/20 blur-[90px]" />
            <div className="animate-blob-2 absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[90px]" />
            <div className="animate-blob-3 absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[80px]" />
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none">
            <svg viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
              <circle cx="288" cy="0" r="240" stroke="#22d3ee" strokeWidth="1"/>
              <circle cx="288" cy="0" r="180" stroke="#22d3ee" strokeWidth="1"/>
              <circle cx="288" cy="0" r="120" stroke="#22d3ee" strokeWidth="1"/>
            </svg>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              {/* ── Left column ── */}
              <div>
                {/* Back link */}
                <div className="hero-enter-0">
                  <Link
                    to="/start-a-corporation-by-state"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to All States
                  </Link>
                </div>

                {/* Eyebrow badge */}
                <div className="hero-enter-1 mt-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {stateData.name} Corporation Formation
                  </span>
                </div>

                {/* H1 */}
                <h1 className="hero-enter-2 mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
                  How to Form a{' '}
                  <span className="shimmer-text">Corporation</span>{' '}
                  in {stateData.name}
                </h1>

                <p className="hero-enter-3 mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Start a {stateData.name} corporation with a clear step-by-step path.
                  This page explains naming, registered agent requirements,
                  filing essentials, corporate documents, and the key decisions
                  founders make before launching.
                </p>

                {/* CTA row */}
                <div className="hero-enter-4 mt-9 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                    className="btn-pulse inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-900 transition-all duration-200 hover:bg-cyan-300 hover:scale-105 active:scale-95"
                  >
                    Incorporate Now
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="rounded-xl border border-white/15 bg-white/8 px-5 py-3 text-sm text-slate-300 backdrop-blur-sm">
                    From <strong className="text-white">$0</strong> + {stateData.name} state fees
                  </div>
                </div>

                {/* Trust row */}
                <div className="hero-enter-4 mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                  {[
                    '~10 min read',
                    `Built for ${stateData.name} owners`,
                    'Expert guided process',
                  ].map((label, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400/70" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Right column — stat card ── */}
              <div className="hero-card-in">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-2xl">
                  <div className="rounded-[1.25rem] bg-white p-7 text-slate-900 shadow-xl">

                    <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                        <MapPin className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Overview</p>
                        <h2 className="text-lg font-bold text-slate-900">{stateData.name} Incorporation</h2>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-500">
                      Forming a corporation in {stateData.name} can be a strong move for
                      founders planning to grow, hire, raise capital, or create a
                      more formal ownership structure.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[
                        { label: 'Typical state fee', value: '$105' },
                        { label: 'Annual report fee', value: '$35' },
                        { label: 'Standard processing', value: '~4 Weeks' },
                        { label: 'Expedited option', value: '2 days' },
                      ].map(({ label, value }) => (
                        <div key={label} className="stat-card rounded-2xl bg-slate-50 p-4 border border-slate-100">
                          <p className="text-xs text-slate-500">{label}</p>
                          <p className="mt-1.5 text-2xl font-extrabold text-slate-900">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3.5 text-sm text-cyan-800">
                      <span className="font-semibold">📅 Annual reports</span> are generally due on or before
                      the first day of the anniversary month of formation.
                    </div>

                    {/* Mini progress bar — decorative */}
                    <div className="mt-5">
                      <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                        <span>Formation progress</span>
                        <span>Ready to start</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                          style={{
                            width: mounted ? '15%' : '0%',
                            transition: 'width 1.4s cubic-bezier(.22,.68,0,1.2) 0.9s',
                          }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-slate-400">Step 0 of 6 — let's get you incorporated</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* ═══════════════════ END HERO ═══════════════════ */}

        {/* Why Start Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                <Building2 className="h-4 w-4" />
                Why choose a {stateData.name} corporation
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                <AccentLastTwo text={`${stateData.name} corporations can support growth, credibility, and capital planning`} />
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A corporation can make sense when you are building beyond a
                side-business model and want a structure that supports stock
                ownership, governance rules, and expansion. {stateData.name} also
                remains attractive for many founders because of industry-specific
                opportunities, regional market access, and formal legal
                protections for owners.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                For businesses aiming to bring on shareholders, establish a more
                scalable ownership model, or separate personal and business risk
                more clearly, incorporation can be the smarter route than
                operating informally.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LLC vs Corp */}
        <section className="bg-cyan-100/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                <AccentLastTwo text={`Should you form a ${stateData.name} corporation or a ${stateData.name} LLC?`} />
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The better choice depends on how you plan to run and grow the
                company. An LLC is often preferred for smaller owner-operated
                ventures because it is typically easier to manage. A corporation,
                on the other hand, may be more suitable when you expect outside
                investment, multiple shareholders, share issuance, or a more
                traditional governance structure.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                If your priority is simplicity, an LLC may fit better. If your
                focus is expansion, fundraising, ownership flexibility, or a
                more formal entity design, a corporation can be the stronger option.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                  <FileText className="h-4 w-4" />
                  Step-by-step {stateData.name} incorporation process
                </div>

                <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  <AccentLastTwo text={`How to start a corporation in ${stateData.name} in 6 practical steps`} />
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Here is the standard formation workflow most founders follow when
                  creating a {stateData.name} corporation from scratch.
                </p>
              </div>

              <div className="mt-12 grid gap-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="mt-4 leading-8 text-slate-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title={`${stateData.name} Corporation Formation Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    Watch: How to Form a Corporation in {stateData.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A quick walkthrough covering naming, registered agent requirements,
                    state filing, EIN setup, and the next steps after incorporation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filing Details */}
        <section className="bg-slate-900 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                <AccentLastTwo text={`Information commonly included in ${stateData.name} Articles of Incorporation`} />
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300 mb-8">
                When preparing your corporation filing, gather the core business
                details in advance. This helps avoid delays and makes the state
                filing process smoother.
              </p>
              <img src="https://images.unsplash.com/photo-1757405930202-b2c3e11570fc?q=80" className="w-full rounded-xl" alt="filing" />
            </div>

            <div className="grid gap-4">
              {filingItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fees */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <BadgeDollarSign className="h-4 w-4" />
              {stateData.name} corporation fees and timelines
            </div>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              <AccentLastTwo text={`${stateData.name} corporation filing costs and annual compliance basics`} />
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'State formation fee',   value: '$105' },
              { label: 'Standard filing speed', value: '4 Weeks' },
              { label: 'Annual report fee',     value: '$35' },
              { label: 'Report frequency',      value: 'Yearly' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="mt-3 text-4xl font-extrabold text-slate-900">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-amber-50 p-6 text-amber-900">
            Expedited processing may be available for an additional charge. State
            processing times can change, so always verify current turnaround
            expectations before submission.
          </div>
        </section>

        {/* Types */}
        <section className="bg-cyan-100/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                <AccentLastTwo text={`Types of corporations and entity options in ${stateData.name}`} />
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Not every founder needs the same structure. These are some of the
                most common entity paths to consider when launching or expanding
                a business in {stateData.name}.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {corpTypes.map((type, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                <AccentLastTwo text={`${stateData.name} business resources founders often use`} />
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                After your corporation is formed, you may still need to handle
                tax registration, employment setup, state reporting, licensing,
                and other compliance tasks. These are some of the agencies often
                involved in the process.
              </p>
            </div>

            <div className="grid gap-4">
              <a href="https://www.sos.la.gov/Pages/default.aspx" className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
                <Landmark className="h-5 w-5 text-cyan-700" />
                <span className="font-medium text-slate-800">Business Filing Office</span>
              </a>
              <a href="https://revenue.louisiana.gov/" className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
                <Landmark className="h-5 w-5 text-cyan-700" />
                <span className="font-medium text-slate-800">State Tax Department</span>
              </a>
              <a href="https://www.laworks.net/" className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
                <Landmark className="h-5 w-5 text-cyan-700" />
                <span className="font-medium text-slate-800">Employment and Workforce Agency</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="incorporate-now"
          className="bg-gradient-to-r from-cyan-700 via-indigo-700 to-slate-900 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <AccentLastTwo text={`Start your ${stateData.name} corporation with a cleaner, faster setup process`} />
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cyan-100">
              Build your business with the right legal structure, prepare the
              required state filing details, and move forward with a corporation
              that is ready for operations, banking, tax setup, and future growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="inline-flex cursor-pointer items-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Incorporate Now
              </button>
              <a
                href="/"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Compare {stateData.name} Entity Types
              </a>
            </div>
          </div>
        </section>

      </div>

      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedBusinessType={selectedBusinessType}
      />
    </div>
  );
}