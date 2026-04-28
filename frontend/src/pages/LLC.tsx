import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { X, ChevronDown, CheckCircle, FileText, Users, Building, Play } from 'lucide-react';

export default function LLC() {
  const [selectedPackage] = useState('standard');
  const [openFormSection, setOpenFormSection] = useState<string | null>(null);
  const [openLLCType, setOpenLLCType] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const toggleFormSection = (section: string) => {
    setOpenFormSection(openFormSection === section ? null : section);
  };

  const toggleLLCType = (type: string) => {
    setOpenLLCType(openLLCType === type ? null : type);
  };

  const toggleFAQ = (faq: string) => {
    setOpenFAQ(openFAQ === faq ? null : faq);
  };

  type Item = {
  title: string;
  icon: React.ElementType;
  description: string;
};

const items: Item[] = [
    {
      title: "What is an LLC?",
      icon: Building,
      description:
        "A Limited Liability Company (LLC) is a legal business structure that protects your personal assets from business debts and liabilities. It combines corporate liability protection with pass-through taxation."
    },
    {
      title: "Is forming an LLC right for me?",
      icon: CheckCircle,
      description:
        "An LLC is ideal for startups, entrepreneurs, freelancers, and small business owners who want personal liability protection and flexible tax options."
    }
  ];

  const toggleItem = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const TYPEWRITER_WORDS = ["in 2026", "the Right Way", "Without the Hassle", "with Experts"];

  const typed = useTypewriter(TYPEWRITER_WORDS);

  return (
    <div className="bg-white">
      <Helmet>
  {/* Primary SEO */}
  <title>
    LLC Formation in USA – Register an LLC & EIN | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Register an LLC in the USA with The Future Perfect Global. Get expert assistance with US LLC formation, EIN registration, registered agent services, compliance, and ongoing support."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/llc"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="LLC formation USA, register LLC in USA, US LLC registration, start an LLC in USA, EIN for LLC USA, Delaware LLC formation, Wyoming LLC registration, Nevada LLC setup, registered agent USA, US LLC compliance"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/llc"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/llc"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="LLC Formation in USA – Register Your US LLC with Experts"
  />
  <meta
    property="og:description"
    content="Start your US LLC with professional support. We handle LLC registration, EIN application, registered agent services, and compliance across all US states."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/llc"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA LLC Formation"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="USA LLC Formation Services by The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="LLC Formation in USA – US LLC Registration & EIN Services"
  />
  <meta
    name="twitter:description"
    content="Form your LLC in the USA with expert guidance. EIN registration, registered agent, compliance, and ongoing support by The Future Perfect Global."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "LLC Formation in USA",
      "url": "https://us.thefutureperfectglobal.com/llc",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Professional LLC formation services in the USA including company registration, EIN application, registered agent services, and compliance support.",
      "areaServed": [
        "United States",
        "Delaware",
        "Wyoming",
        "Nevada",
        "Texas",
        "Florida",
        "California",
        "New York"
      ],
      "serviceType": [
        "LLC Registration USA",
        "EIN Application",
        "Registered Agent Services",
        "US LLC Compliance",
        "Startup & Business Consulting"
      ]
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden bg-slate-950 py-12 min-h-[88vh] flex items-center">

          {/* Ambient glows */}
          <div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)", filter: "blur(60px)", animation: "blobA 9s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(60px)", animation: "blobB 11s ease-in-out infinite" }}
          />

          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          {/* Top edge accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.6), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT */}
              <div>

                <div className="mb-6">
                  <span
                    className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full border border-cyan-500/30"
                    style={{ background: "rgba(6,182,212,0.07)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Trusted LLC Formation Experts Since 2016
                  </span>
                </div>

                <h1 className="text-white font-black leading-[1.08] mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
                  Start Your LLC{" "}
                  <span className="relative inline-block">
                    <span
                      style={{
                        background: "linear-gradient(90deg,#22d3ee,#8b5cf6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {typed}
                    </span>
                    <span
                      className="inline-block w-[3px] h-[0.85em] bg-cyan-400 align-middle ml-1 rounded-sm"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  </span>
                </h1>

                <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-8">
                  Form your LLC fast and correctly — name search, Articles of Organization, registered agent, EIN, and full state compliance. Everything handled, nothing missed.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["500+ Businesses Formed", "$0 Service Fee", "24–48h Processing", "Expert Support"].map((label) => (
                    <span
                      key={label}
                      className="text-slate-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => { setSelectedBusinessType(""); setIsModalOpen(true); }}
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm overflow-hidden"
                    style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(135deg,#0891b2,#7c3aed)" }}
                    />
                    <span className="relative">Start Your LLC Today</span>
                    <span className="relative">→</span>
                  </button>

                  <a
                    href="#testimonials"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-slate-300 text-sm border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    What Customers Say
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">

                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%)", filter: "blur(30px)", transform: "scale(1.1)" }}
                />

                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                  style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6)", aspectRatio: "16/9" }}
                >
                  <div className="absolute inset-0 bg-slate-900" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(139,92,246,0.12) 100%)" }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-32 h-32 rounded-full border border-cyan-500/20" />
                    <div className="absolute w-24 h-24 rounded-full border border-cyan-500/30" />

                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)", boxShadow: "0 0 40px rgba(6,182,212,0.5)" }}
                    >
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 px-6 py-5"
                    style={{ background: "linear-gradient(to top, rgba(2,6,23,0.95) 0%, transparent 100%)" }}
                  >
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Watch</p>
                    <p className="text-white font-black text-lg leading-tight">How to Start an LLC in 2026</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </section>

      {/* VIDEO MODAL (DEVICE FRIENDLY) */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white z-50"
            >
              <X size={28} />
            </button>

            {/* RESPONSIVE VIDEO */}
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="How to Start an LLC in 2026"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
  Start an LLC Online{" "}
  <span className="text-cyan-600">Fast & Affordable</span>
</h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto">
              Form your LLC quickly and legally with our professional LLC formation service. 
              We handle state filing, Articles of Organization, registered agent service, 
              and EIN assistance — everything you need to start an LLC online without the hassle. 
              Choose an affordable LLC package designed to launch your business with full compliance and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-white rounded-3xl p-8 shadow-lg border-4 transition-all hover:scale-105 ${selectedPackage === 'basic' ? 'border-cyan-500' : 'border-gray-200'}`}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black text-gray-900">$0</span>
                  <span className="text-gray-600">+ state fee</span>
                </div>
                <p className="text-sm text-gray-500">Our most affordable package for new entrepreneurs</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Prepare & file Articles of Organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">FREE Registered Agent service (1st year)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited company name searches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Online dashboard & document access</span>
                </li>
              </ul>
              <button
                onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
                className="w-full bg-gray-900 text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
              >
                Select Basic
              </button>
            </div>

            <div className={`bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-8 shadow-2xl border-4 border-cyan-500 transform scale-105 relative`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black text-white">$199</span>
                  <span className="text-cyan-100">+ state fee</span>
                </div>
                <p className="text-sm text-cyan-100">Everything you need to launch with confidence</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white font-semibold">Everything in Basic, PLUS:</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">IRS EIN / Tax ID number acquisition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Customized Operating Agreement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Banking resolution document</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Expedited filing available</span>
                </li>
              </ul>
              <button
                onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
                className="w-full bg-white text-cyan-500 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                Select Standard
              </button>
            </div>

            <div className={`bg-white rounded-3xl p-8 shadow-lg border-4 transition-all hover:scale-105 ${selectedPackage === 'premium' ? 'border-cyan-500' : 'border-gray-200'}`}>
              <div className="mb-6">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-3">
                  BEST VALUE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black text-gray-900">$299</span>
                  <span className="text-gray-600">+ state fee</span>
                </div>
                <p className="text-sm text-gray-500">Complete business launch package</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Everything in Standard, PLUS:</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional business website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom business email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Domain name (1 year free)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Business contract templates</span>
                </li>
              </ul>
              <button
                onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
                className="w-full bg-gray-900 text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
              >
                Select Premium
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Compare All Packages
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
  How to Start an LLC{" "}
  <span className="text-cyan-600">Step-by-Step</span>
</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to register an LLC step-by-step, including business name search, state filing requirements, Articles of Organization, EIN registration, and ongoing compliance. Everything startups need to legally form and launch a Limited Liability Company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
      {items.map((item: Item, index: number) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-cyan-500" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              <button
                onClick={() => toggleItem(index)}
                className="text-cyan-500 hover:text-cyan-600 font-semibold flex items-center gap-2"
              >
                {openIndex === index ? "Show less" : "Learn more"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-gray-100">
                <div className="bg-gray-900 text-white rounded-2xl p-6 mb-6">
                  <h3 className="text-2xl font-bold mb-4">Quick Start Checklist</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span>Choose business name</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span>Select registered agent</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">3</span>
                      </div>
                      <span className="text-gray-300">File articles of organization</span>
                    </li>
                  </ul>
                </div>
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="w-full bg-cyan-500 text-white py-4 rounded-full font-bold text-lg hover:bg-cyan-600 transition-all">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
  LLC Formation Guide{" "}
  <span className="text-cyan-600">Step-by-Step</span>
</h2>
            <p className="text-xl text-gray-600">
              Learn how to start an LLC and register your business legally with our complete step-by-step guide. From choosing a business name and filing Articles of Organization to obtaining an EIN and meeting state requirements, we make the LLC formation process simple and stress-free.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'name',
                title: 'Choose and Register Your LLC Name',
                content: 'Select a unique business name that complies with your state\'s LLC naming rules. Your name must include "LLC" or "Limited Liability Company" and be distinguishable from other registered businesses in your state. Before you register an LLC, it\'s important to complete a business name search to ensure availability. We provide unlimited free LLC name searches to help you secure the perfect name.'
              },
              {
                id: 'address',
                title: 'Provide Your Principal Business Address',
                content: 'To start an LLC, you must provide a physical street address in the state of formation (P.O. Boxes are not allowed). This will serve as your principal place of business and will appear in public state records. You may use a home address, commercial office, or approved virtual business address depending on your needs.'
              },
              {
                id: 'agent',
                title: 'Appoint a Registered Agent for Your LLC',
                content: 'Every Limited Liability Company is legally required to designate a registered agent to receive legal documents, tax notices, and official state correspondence. The registered agent must have a physical address in the formation state and be available during standard business hours. We include one year of free registered agent service with all LLC formation packages.'
              },
              {
                id: 'members',
                title: 'List LLC Members (Owners) Information',
                content: 'LLC members are the legal owners of the company. When forming an LLC, you may need to provide the full legal names and addresses of all members, depending on state requirements. Both single-member LLCs and multi-member LLCs are allowed in all U.S. states, offering flexible ownership and tax options.'
              },
              {
                id: 'purpose',
                title: 'Define Your LLC Business Purpose',
                content: 'When registering an LLC, you must state the purpose of your business. Most states allow a broad statement such as "any lawful business activity," while certain regulated industries may require a more specific description. Clearly defining your business purpose can support licensing, compliance, and long-term growth.'
              },
              {
                id: 'file',
                title: 'File Your Articles of Organization with the State',
                content: 'The Articles of Organization (sometimes called Certificate of Formation) is the official state filing document that legally creates your LLC. It includes your company name, business address, registered agent details, and management structure. We prepare and file your LLC documents with the appropriate state agency to ensure fast, accurate, and compliant approval.'
              }
            ].map((section) => (
              <div key={section.id} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors">
                <button
                  onClick={() => toggleFormSection(section.id)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-bold text-gray-900 text-left">{section.title}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 transition-transform ${openFormSection === section.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFormSection === section.id && (
                  <div className="p-6 bg-gray-50 border-t-2 border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
  Types of LLC{" "}
  <span className="text-cyan-600">Choose Right Structure</span>
</h2>
              <p className="text-base text-gray-600 mb-8">
                Explore the different types of LLCs, including Single-Member LLC, Multi-Member LLC, Professional LLC (PLLC), and Series LLC. Understanding each LLC structure helps you select the best option for liability protection, tax flexibility, and business growth.
              </p>

              <img src="https://images.unsplash.com/photo-1642827387986-b8594e28b5a9?q=80" alt="image" className="w-full rounded-xl h-auto" />
            </div>
            <div className="space-y-5">
              {[
                {
                    id: 'single',
                    title: 'Single-Member LLC (One Owner LLC)',
                    content: 'A Single-Member LLC is owned by one person and is the simplest way to start an LLC while maintaining personal liability protection. By default, it is taxed as a sole proprietorship, but you can elect S Corporation or C Corporation taxation for potential tax advantages.'
                  },
                  {
                    id: 'multi',
                    title: 'Multi-Member LLC (Partnership LLC)',
                    content: 'A Multi-Member LLC has two or more owners and is taxed as a partnership by default. Members share profits, losses, and management duties based on the operating agreement while benefiting from limited liability protection.'
                  },
                  {
                    id: 'series',
                    title: 'Series LLC (Multiple Asset Protection LLC)',
                    content: 'A Series LLC allows you to create separate series or divisions under one parent LLC, each with its own assets, members, and liability protection. Available in select states, this structure is popular for real estate investors and businesses managing multiple properties or brands.'
                  },
                  {
                    id: 'professional',
                    title: 'Professional LLC for Licensed Professionals',
                    content: 'A Professional LLC (PLLC) is required in many states for licensed professionals such as doctors, attorneys, accountants, and architects. It provides liability protection while complying with state professional licensing and regulatory requirements.'
                  },
                  {
                    id: 'l3c',
                    title: 'L3C (Low-Profit Limited Liability Company)',
                    content: 'An L3C is a specialized Limited Liability Company designed for social enterprises and mission-driven businesses. It focuses on charitable or educational goals while allowing limited profit generation. This structure is available only in certain states.'
                  },
                  {
                    id: 'foreign',
                    title: 'Foreign LLC Registration',
                    content: 'If your LLC operates in a state other than the one where it was originally formed, you must register as a Foreign LLC in that state. This ensures legal compliance and allows your business to operate across state lines.'
                  },
                  {
                    id: 'anonymous',
                    title: 'Trust-Owned LLC',
                    content: 'In a Trust-Owned LLC, ownership interest is held by a trust instead of an individual. This structure is often used for asset protection, estate planning, and privacy purposes, offering additional strategic and financial planning benefits.'
                  }
              ].map((type) => (
                <div key={type.id} className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white hover:border-cyan-500 transition-colors">
                  <button
                    onClick={() => toggleLLCType(type.id)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900">{type.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform ${openLLCType === type.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openLLCType === type.id && (
                    <div className="p-5 bg-gray-50 border-t-2 border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{type.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              LLC Benefits{" "}
              <span className="text-cyan-600">
                Pros & Cons
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore the advantages and limitations of forming an LLC. Understand how it impacts liability,
              taxation, flexibility, and long-term business growth.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Pros Card */}
            <div className="group relative bg-white/70 backdrop-blur-xl border border-green-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500">
              
              <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white font-bold">+</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Advantages</h3>

              <ul className="space-y-6">
                {[
                  {
                    title: "Personal Asset Protection",
                    desc: "Protects your personal assets from business liabilities and legal risks."
                  },
                  {
                    title: "Pass-Through Taxation",
                    desc: "Avoid double taxation by reporting profits on personal tax returns."
                  },
                  {
                    title: "Flexible Management",
                    desc: "Operate as member-managed or manager-managed with minimal compliance."
                  },
                  {
                    title: "Business Credibility",
                    desc: "Enhances trust with clients, vendors, and financial institutions."
                  },
                  {
                    title: "Flexible Profit Distribution",
                    desc: "Distribute profits based on agreements, not strict ownership ratios."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons Card */}
            <div className="group relative bg-white/70 backdrop-blur-xl border border-red-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500">
              
              <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-r from-red-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white font-bold">−</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Limitations</h3>

              <ul className="space-y-6">
                {[
                  {
                    title: "Self-Employment Taxes",
                    desc: "Members may need to pay higher self-employment taxes on profits."
                  },
                  {
                    title: "State Regulations",
                    desc: "Different states have varying fees, rules, and compliance requirements."
                  },
                  {
                    title: "Continuity Risks",
                    desc: "LLCs may dissolve if a member exits without proper agreements."
                  },
                  {
                    title: "Limited Fundraising",
                    desc: "Cannot issue stock, which may limit venture capital opportunities."
                  },
                  {
                    title: "Annual Fees & Compliance",
                    desc: "Ongoing reports and state fees are required to maintain status."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                      !
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-100">
                    <Users className="w-8 h-8 text-cyan-500" />
                    <div>
                      <h4 className="font-bold text-gray-900">Dedicated Support Team</h4>
                      <p className="text-sm text-gray-600">Available when you need us</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-100">
                    <FileText className="w-8 h-8 text-cyan-500" />
                    <div>
                      <h4 className="font-bold text-gray-900">Document Management</h4>
                      <p className="text-sm text-gray-600">Secure online access 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-8 h-8 text-cyan-500" />
                    <div>
                      <h4 className="font-bold text-gray-900">Compliance Alerts</h4>
                      <p className="text-sm text-gray-600">Never miss a deadline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
                <h2 className="text-3xl md:text-3xl font-black text-gray-900 mb-6">
  LLC Formation Support{" "}
  <span className="text-cyan-600">You Can Trust</span>
</h2>
                <p className="text-lg text-gray-700 mb-8">
                  From filing your LLC formation documents to helping you manage annual compliance and business requirements, our expert team provides end-to-end support. We simplify state filings, legal documentation, and compliance so you can focus on growing your business.
                </p>
                <button onClick={() => {
                    setSelectedBusinessType('');
                    setIsModalOpen(true);
                  }} className="bg-cyan-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Discover How We Support Your Business
                </button>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <FileText className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <h3 className="text-3xl font-black mb-4">50 State Guides</h3>
                  <p className="text-lg opacity-90">Comprehensive formation requirements for every state</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
  Form LLC by State{" "}
  <span className="text-cyan-600">Fees & Requirements</span>
</h2>
              <p className="text-xl text-gray-700 mb-8">
                Learn how to form an LLC in your state with our detailed state-by-state LLC formation guides. Discover filing requirements, state fees, processing times, annual report rules, registered agent requirements, and ongoing compliance obligations for every U.S. state.
              </p>
              <a href="/state-information-llc" className="bg-cyan-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                State LLC Formation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
  LLC FAQs{" "}
  <span className="text-cyan-600">Common Questions</span>
</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about LLC formation
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'business',
                question: 'Do I need to form an LLC to start a business?',
                answer: 'No, you don\'t legally need an LLC to start a business. You can operate as a sole proprietorship or partnership. However, forming an LLC provides important benefits including personal liability protection, tax flexibility, and enhanced credibility. If you want to protect your personal assets from business debts and lawsuits, an LLC is highly recommended.'
              },
              {
                id: 'cost',
                question: 'What does it cost to open an LLC?',
                answer: 'The cost varies by state and package. State filing fees range from $40 to $500. With The Future Perfect Global, you can form an LLC for $0 + state fees with our Basic package, or choose our Standard ($199) or Premium ($299) packages for additional services like EIN acquisition, operating agreement, business website, and more. All packages include one year of free registered agent service.'
              },
              {
                id: 'appointment',
                question: 'How do I file an appointment for an LLC?',
                answer: 'When you form an LLC with The Future Perfect Global, we handle all the filing and appointments for you. This includes preparing and filing your Articles of Organization, appointing your registered agent, and ensuring all documentation is properly submitted to your state. Simply choose your package, provide the required information, and we take care of the rest.'
              },
              {
                id: 'taxes',
                question: 'How do LLC taxes work?',
                answer: 'By default, LLCs benefit from pass-through taxation, meaning business profits and losses pass through to members\' personal tax returns. Single-member LLCs are taxed as sole proprietorships, while multi-member LLCs are taxed as partnerships. However, LLCs can elect to be taxed as an S-Corporation or C-Corporation for potential tax advantages. You\'ll need an EIN (Employer Identification Number) for tax purposes, which we include in our Standard and Premium packages.'
              },
              {
                id: 'time',
                question: 'How long does it take to form an LLC?',
                answer: 'The timeline depends on your state\'s processing time, which typically ranges from 1-3 weeks for standard processing. Some states offer expedited filing for an additional fee, which can reduce the time to as little as 1-2 business days. With The Future Perfect Global, we prepare and file your documents immediately, so your LLC formation is only limited by your state\'s processing time. We also offer expedited services where available.'
              },
              {
                id: 'annual',
                question: 'What are the annual requirements for an LLC?',
                answer: 'Most states require LLCs to file an annual report and pay an annual fee or franchise tax to remain in good standing. Requirements vary by state but typically include updating business information and paying fees ranging from $50 to several hundred dollars. Some states also require ongoing registered agent service. The Future Perfect Global helps you stay compliant with reminder alerts and can handle annual report filing for you.'
              }
            ].map((faq) => (
              <div key={faq.id} className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white hover:border-cyan-500 transition-colors">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 ml-4 transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="p-6 bg-gray-50 border-t-2 border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="py-20 bg-gradient-to-br from-cyan-500 via-cyan-600 to-slate-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Form Your LLC?</h2>
          <p className="text-2xl mb-10 opacity-95">
            Join over 500+ entrepreneurs who have launched their businesses with The Future Perfect Global
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href='/state-formation-llc' className="bg-white text-cyan-500 px-12 py-5 rounded-full font-black text-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Start My LLC Today
            </a>
            <a href="/contact" className="border-3 border-white text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white/10 transition-all">
              Talk to an Expert
            </a>
          </div>
          <p className="mt-8 text-lg opacity-90">
            Starting at $0 + state fees • Free registered agent service included
          </p>
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
