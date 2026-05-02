import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

// Helper: splits heading text so last 2 words are cyan
function ColoredHeading({
  text,
  className = "",
  tag: Tag = "h2",
}: {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3";
}) {
  const words = text.trim().split(" ");
  const main = words.slice(0, -2).join(" ");
  const last2 = words.slice(-2).join(" ");
  return (
    <Tag className={className}>
      {main && <>{main} </>}
      <span className="text-cyan-600">{last2}</span>
    </Tag>
  );
}

export default function BusinessNameSearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType] = useState<string>('');
  const [searchData, setSearchData] = useState({
    name: "",
    state: "",
    entityType: "",
    email: ""
  });
  const [showPopup, setShowPopup] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowPopup(true);
    setSearchData({ name: "", state: "", entityType: "", email: "" });
  };

  return (
    <>
      <style>{`
        /* ── Hero Animations ── */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -400% 0; }
          100% { background-position: 400% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(1deg); }
          66%       { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-20px) scale(1.04); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.9); opacity: 0.7; }
          70%  { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(40px, -30px) scale(1.1); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-30px, 20px) scale(0.95); }
        }
        @keyframes orb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(20px, 30px) scale(1.08); }
        }
        @keyframes typingDot {
          0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1; }
        }

        .hero-badge   { animation: fadeSlideDown 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.1s; opacity: 0; }
        .hero-h1      { animation: fadeSlideUp   0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.25s; opacity: 0; }
        .hero-sub     { animation: fadeSlideUp   0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.42s; opacity: 0; }
        .hero-stats   { animation: fadeSlideUp   0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.55s; opacity: 0; }
        .hero-btns    { animation: scaleIn       0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.68s; opacity: 0; }
        .hero-visible .hero-badge,
        .hero-visible .hero-h1,
        .hero-visible .hero-sub,
        .hero-visible .hero-stats,
        .hero-visible .hero-btns  { opacity: 1; }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #fff 0%, #fff 40%,
            #a5f3fc 50%,
            #fff 60%, #fff 100%
          );
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .animated-gradient-bg {
          background: linear-gradient(135deg, #0891b2, #0891b2, #333333, #0891b2);
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }

        .orb-1 { animation: orb1 7s ease-in-out infinite; }
        .orb-2 { animation: orb2 9s ease-in-out infinite; }
        .orb-3 { animation: orb3 11s ease-in-out infinite; }

        .float-card { animation: float 5s ease-in-out infinite; }
        .float-card-slow { animation: floatSlow 7s ease-in-out infinite; }

        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 2px solid rgba(255,255,255,0.5);
          animation: pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite;
        }

        .stat-card {
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.25);
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.2);
        }

        .dot1 { animation: typingDot 1.4s infinite ease-in-out; animation-delay: 0s; }
        .dot2 { animation: typingDot 1.4s infinite ease-in-out; animation-delay: 0.2s; }
        .dot3 { animation: typingDot 1.4s infinite ease-in-out; animation-delay: 0.4s; }

        .btn-primary-hero {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-primary-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary-hero:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 20px 40px rgba(0,0,0,0.25); }
        .btn-primary-hero:hover::before { opacity: 1; }

        .btn-outline-hero {
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .btn-outline-hero:hover { transform: translateY(-3px); background: rgba(255,255,255,0.15); }
      `}</style>

      <div className="flex flex-col">
        <Helmet>
          <title>Business Name Search USA | Check Company Name Availability</title>
          <meta name="description" content="Check business name availability in the USA with our Business Name Search tool. Verify company names before LLC registration, DBA filing, or trademark application." />
          <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-name-search" />
          <meta name="keywords" content="business name search USA, company name availability check, LLC name search, DBA name search USA, business name lookup" />
          <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-name-search" hrefLang="en-us" />
          <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-name-search" hrefLang="x-default" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Business Name Search USA | Check Company Name Availability" />
          <meta property="og:description" content="Search and verify business name availability in the USA before registering your LLC, DBA, or trademark." />
          <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-name-search" />
          <meta property="og:site_name" content="The Future Perfect Global – USA Business Tools" />
          <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
          <meta property="og:image:alt" content="USA Business Name Availability Search Tool" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@FPGCompanySetup" />
          <meta name="twitter:title" content="Business Name Search USA" />
          <meta name="twitter:description" content="Check business name availability across the USA before company registration, DBA filing, or trademark application." />
          <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Business Name Search USA",
            "url": "https://us.thefutureperfectglobal.com/business-name-search",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "description": "An online business name search tool to check company name availability in the USA for LLCs, DBAs, and trademarks.",
            "publisher": {
              "@type": "Organization",
              "name": "The Future Perfect Global",
              "url": "https://us.thefutureperfectglobal.com/",
              "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
            }
          }`}</script>
        </Helmet>

        {/* ── HERO SECTION ── */}
        <section className={`relative overflow-hidden animated-gradient-bg py-12 ${heroVisible ? 'hero-visible' : ''}`}>

          {/* Animated orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="orb-1 absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-[80px]" />
            <div className="orb-2 absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full bg-indigo-500/25 blur-[80px]" />
            <div className="orb-3 absolute top-[40%] left-[50%] w-[260px] h-[260px] rounded-full bg-blue-300/15 blur-[60px]" />
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: text content */}
              <div className="text-white">

                {/* Badge */}
                <div className="hero-badge inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-cyan-100">Live Name Availability Check</span>
                </div>

                {/* H1 */}
                <h1 className="hero-h1 text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
                  <span className="shimmer-text">Business Name</span>
                  <br />
                  <span className="text-white">Search</span>
                </h1>

                {/* Subheading */}
                <p className="hero-sub text-lg sm:text-xl text-cyan-100/90 leading-relaxed mb-8 max-w-lg">
                  Check if your desired business name is available in your state before you file.
                  Get results within <strong className="text-white">one hour</strong> via email — completely free.
                </p>

                {/* Live indicator */}
                <div className="hero-sub flex items-center gap-2 mb-10">
                  <div className="flex gap-1">
                    <span className="dot1 w-2 h-2 rounded-full bg-cyan-300 inline-block"></span>
                    <span className="dot2 w-2 h-2 rounded-full bg-cyan-300 inline-block"></span>
                    <span className="dot3 w-2 h-2 rounded-full bg-cyan-300 inline-block"></span>
                  </div>
                  <span className="text-sm text-cyan-200">Checking 50 state databases in real time</span>
                </div>

                {/* CTA Buttons */}
                <div className="hero-btns flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="#search-form"
                    className="btn-primary-hero bg-white text-cyan-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl text-center"
                  >
                    🔍 Search Now — Free
                  </a>
                  <Link
                    to="/business-name-generator"
                    className="btn-outline-hero border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-bold text-lg text-center"
                  >
                    ✨ Generate Names
                  </Link>
                </div>

                {/* Stats row */}
                <div className="hero-stats grid grid-cols-3 gap-4">
                  {[
                    { value: '50+', label: 'States Covered' },
                    { value: '<60', label: 'Min Results' },
                    { value: '100%', label: 'Free Search' },
                  ].map((s) => (
                    <div key={s.label} className="stat-card rounded-2xl px-4 py-4 text-center">
                      <div className="text-2xl font-black text-white">{s.value}</div>
                      <div className="text-xs text-cyan-200 font-medium mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: floating UI card */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="float-card relative w-full max-w-sm">

                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-300/30 to-indigo-400/30 blur-2xl scale-110 pointer-events-none" />

                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-8 shadow-2xl">

                    {/* Top bar */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-auto text-xs text-white/60 font-mono">name-search.tsx</div>
                    </div>

                    <div className="text-sm font-semibold text-cyan-200 mb-3 uppercase tracking-widest">Name Check Result</div>

                    {/* Name result */}
                    <div className="bg-white/15 rounded-2xl px-5 py-4 mb-4 border border-white/20">
                      <div className="text-white font-bold text-xl mb-1">Acme Ventures LLC</div>
                      <div className="text-xs text-cyan-200">Delaware · LLC · Filed 2024</div>
                    </div>

                    {/* Status pills */}
                    {[
                      { label: 'State Registry', status: '✓ Available', color: 'bg-green-400/20 text-green-300 border-green-400/30' },
                      { label: 'Similar Names', status: '⚠ 2 Found', color: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30' },
                      { label: 'Trademark', status: '✓ Clear', color: 'bg-green-400/20 text-green-300 border-green-400/30' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                        <span className="text-white/80 text-sm">{row.label}</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${row.color}`}>{row.status}</span>
                      </div>
                    ))}

                    <div className="mt-5 bg-cyan-500/20 border border-cyan-400/30 rounded-xl px-4 py-3 text-center">
                      <div className="text-xs text-cyan-200">Report sent to</div>
                      <div className="text-white font-semibold text-sm">user@example.com</div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="float-card-slow absolute -top-5 -right-5 bg-green-400 text-green-900 text-xs font-black px-4 py-2 rounded-full shadow-xl">
                    FREE ✓
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SEARCH FORM SECTION ── */}
        <section id="search-form" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ColoredHeading
              text="Check Name Availability"
              tag="h2"
              className="text-5xl font-black text-center text-gray-900 mb-6"
            />
            <p className="text-xl text-center text-gray-600 mb-12">
              Free search - Results delivered in ~60 minutes
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-10 border-4 border-cyan-300 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-900 font-bold mb-2 text-lg">Desired Business Name</label>
                  <input
                    type="text"
                    value={searchData.name}
                    onChange={(e) => setSearchData({ ...searchData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                    placeholder="Enter your business name"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">Don't include LLC, Inc, Corp, etc. - we'll check all variations</p>
                </div>
                <div>
                  <label className="block text-gray-900 font-bold mb-2 text-lg">State</label>
                  <select
                    value={searchData.state}
                    onChange={(e) => setSearchData({ ...searchData, state: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                    required
                  >
                    <option value="">Select Your State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="CA">California</option>
                    <option value="FL">Florida</option>
                    <option value="IL">Illinois</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-900 font-bold mb-2 text-lg">Entity Type</label>
                  <select
                    value={searchData.entityType}
                    onChange={(e) => setSearchData({ ...searchData, entityType: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                    required
                  >
                    <option value="">Select Entity Type</option>
                    <option value="LLC">LLC</option>
                    <option value="Corporation">Corporation</option>
                    <option value="Nonprofit">Nonprofit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-900 font-bold mb-2 text-lg">Email Address</label>
                  <input
                    type="email"
                    value={searchData.email}
                    onChange={(e) => setSearchData({ ...searchData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:from-cyan-700 hover:to-blue-700 transition-all shadow-xl transform hover:scale-105"
              >
                Search Name Availability - FREE
              </button>
            </form>
          </div>
        </section>

        {/* ── IMPORTANCE SECTION ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1684833757559-269b96781804?q=80"
                  alt="Importance of choosing a great business name and brand identity"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <span className="text-cyan-500 font-semibold tracking-wide uppercase">Your Choice Matters</span>
                <ColoredHeading
                  text="Importance of a Great Business Name"
                  tag="h2"
                  className="text-4xl font-black text-gray-900 mt-4 mb-6"
                />
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Choosing the right <strong>business name</strong> is one of the most important steps when starting a company. A strong and memorable <strong>brand name</strong> shapes how customers perceive your business, builds trust, and helps your startup stand out in a competitive market. The best <strong>company names</strong> are short, unique, and easy to remember, making them perfect for branding, marketing, and domain registration.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: "🚀",
                      title: "Build a Strong Brand Identity",
                      desc: "A unique and memorable business name helps establish a powerful brand identity and makes your company easier for customers to recognize and remember.",
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: "📈",
                      title: "Improve Marketing & SEO",
                      desc: "The right company name improves brand visibility, supports marketing campaigns, and can help your business rank better in search engines.",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: "⭐",
                      title: "Create Customer Trust",
                      desc: "Professional and well-chosen startup names build credibility and confidence, making customers more likely to choose your brand.",
                      color: "from-green-500 to-emerald-500"
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{benefit.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE CHECK SECTION ── */}
        <section className="py-16 bg-blue-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ColoredHeading
              text="What We Check"
              tag="h2"
              className="text-5xl font-black text-center text-gray-900 mb-16"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏛️',
                  title: 'State Registry',
                  desc: 'Official Secretary of State business database',
                  image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {
                  icon: '📝',
                  title: 'Similar Names',
                  desc: 'Names that are confusingly similar to yours',
                  image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {
                  icon: '🔍',
                  title: 'All Variations',
                  desc: 'LLC, Inc, Corp, and other entity designators',
                  image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
              ].map((check, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <img src={check.image} alt={check.title} className="w-full h-48 object-cover" />
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-4">{check.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{check.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{check.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ColoredHeading
              text="Not Sure About a Name?"
              tag="h2"
              className="text-5xl font-black mb-6 text-white"
            />
            <p className="text-2xl mb-10 text-cyan-100">Try our Business Name Generator for ideas</p>
            <Link
              to="/business-name-generator"
              className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl transform hover:scale-105"
            >
              Generate Business Names
            </Link>
          </div>
        </section>

        <GetStartedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedBusinessType={selectedBusinessType}
        />
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl p-10 max-w-lg text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h3>
            <p className="text-gray-700 text-lg mb-6">
              Thank you for contacting us. Our executive will contact you very soon.
              <br /><br />
              Thank you for choosing <strong>Future Perfect Global LLC.</strong>
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}