import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { ChevronDown } from 'lucide-react';

/* ─── Hero animation keyframes ─── */
const heroStyles = `
  @keyframes va-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-16px) rotate(5deg); }
  }
  @keyframes va-float2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(13px) rotate(-6deg); }
  }
  @keyframes va-pulse-ring {
    0%, 100% { opacity: 0.25; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.07); }
  }
  @keyframes va-fade-up {
    from { opacity: 0; transform: translateY(26px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes va-badge-pop {
    0%   { opacity: 0; transform: scale(0.8) translateY(6px); }
    70%  { transform: scale(1.05) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes va-card-rise {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes va-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .va-float  { animation: va-float  5.5s ease-in-out infinite; }
  .va-float2 { animation: va-float2 7s   ease-in-out infinite; }
  .va-pulse-ring { animation: va-pulse-ring 4s ease-in-out infinite; }
  .va-fade-up-1 { animation: va-fade-up 0.6s ease both; }
  .va-fade-up-2 { animation: va-fade-up 0.6s 0.15s ease both; }
  .va-fade-up-3 { animation: va-fade-up 0.6s 0.28s ease both; }
  .va-fade-up-4 { animation: va-fade-up 0.6s 0.42s ease both; }
  .va-badge     { animation: va-badge-pop 0.65s 0.05s ease both; }
  .va-card-rise { animation: va-card-rise 0.6s 0.35s ease both; }
  .va-shimmer-btn {
    background-size: 200% auto;
    animation: va-shimmer 3s linear infinite;
  }
`;

export default function VirtualAddress() {
  const [addressType, setAddressType] = useState<'business' | 'personal'>('business');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a Professional Virtual Business Address?",
      answer: "A Professional Virtual Business Address is a real street address that businesses can use without renting a physical office. It allows you to register your company, receive business mail, and maintain a professional presence while working remotely."
    },
    {
      question: "Can I use a Virtual Business Address to register an LLC or company?",
      answer: "Yes. Many entrepreneurs use a virtual business address to register an LLC, corporation, or startup. It provides a valid business mailing address for official documents, business registration, and correspondence."
    },
    {
      question: "Is a Virtual Business Address legal for business registration?",
      answer: "In many cases, yes. A virtual address can be used as a business mailing address for registrations, websites, and invoices. However, some states may require a registered agent or physical presence depending on local regulations."
    },
    {
      question: "Who should use a Professional Virtual Business Address?",
      answer: "Virtual business addresses are ideal for freelancers, startups, remote companies, digital entrepreneurs, and international business owners who want a professional address without the cost of renting office space."
    },
    {
      question: "What type of mail can I receive at a Virtual Business Address?",
      answer: "You can receive business mail, official letters, and large envelopes at your virtual address. Your mail can be securely scanned, stored digitally, or forwarded to your preferred location."
    },
    {
      question: "Can I use a Virtual Business Address on my website and business cards?",
      answer: "Yes. Many businesses use their virtual address on websites, invoices, marketing materials, and business cards to maintain a professional image and build customer trust."
    },
    {
      question: "Does a Virtual Business Address protect my home address?",
      answer: "Yes. A virtual address keeps your personal home address private by allowing you to use a separate professional business address for public records and business communication."
    },
    {
      question: "Can international entrepreneurs use a U.S. Virtual Business Address?",
      answer: "Yes. Many international founders use a U.S. virtual business address to establish a presence in the United States, receive business mail, and operate their company remotely."
    }
  ];

  return (
    <div className="flex flex-col">
      <style>{heroStyles}</style>

      <Helmet>
        <title>Virtual Business Address in USA – Registered Office Services | The Future Perfect Global</title>
        <meta name="description" content="Get a virtual business address in the USA with The Future Perfect Global. Professional registered office address services for compliance, mail handling, and business credibility." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/virtual-address" />
        <meta name="keywords" content="virtual business address USA, virtual office address USA, registered office address USA, business address service USA, mail handling USA, US company address service, virtual address for LLC USA" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/virtual-address" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/virtual-address" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Virtual Business Address in USA – Registered Office Services" />
        <meta property="og:description" content="Establish a professional US presence with a virtual business address. Registered office address, mail handling, and compliance support available." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/virtual-address" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Virtual Address Services" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Virtual Business Address Services in USA by The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Virtual Business Address in USA – Registered Office Services" />
        <meta name="twitter:description" content="Get a compliant virtual business address in the USA. Professional registered office services with mail handling and business credibility support." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Virtual Business Address in USA",
          "url": "https://us.thefutureperfectglobal.com/virtual-address",
          "provider": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "description": "Professional virtual business address and registered office services in the USA including mail handling, compliance support, and credibility enhancement.",
          "areaServed": ["United States","Delaware","California","New York","Texas","Florida","Nevada","Wyoming"],
          "serviceType": ["Virtual Business Address","Registered Office Address Services","Mail Handling & Forwarding","Compliance Support","Business Presence Services"]
        }`}</script>
      </Helmet>

      {/* ═══════════════════════════════════════════
          HERO SECTION — animated
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-400 min-h-[560px] flex items-center">

        {/* Background image — very subtle */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            alt="business background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pulsing background rings */}
        <div className="va-pulse-ring absolute -top-28 -left-28 w-[26rem] h-[26rem] rounded-full bg-white/15 pointer-events-none" />
        <div className="va-pulse-ring absolute -bottom-24 -right-24 w-[30rem] h-[30rem] rounded-full bg-cyan-800/20 pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Floating geometric shapes */}
        <div className="va-float  absolute top-12  right-[35%] w-10 h-10 rounded-xl  bg-white/20 pointer-events-none" style={{ animationDelay: '0.3s' }} />
        <div className="va-float2 absolute bottom-16 left-[20%]  w-7  h-7  rounded-full bg-white/15 pointer-events-none" style={{ animationDelay: '1s'  }} />
        <div className="va-float  absolute top-1/3  left-14      w-5  h-5  rounded    bg-white/20 rotate-45 pointer-events-none" style={{ animationDelay: '1.7s' }} />
        <div className="va-float2 absolute top-14   right-14     w-6  h-6  rounded-full bg-cyan-900/20 pointer-events-none" style={{ animationDelay: '0.7s' }} />
        <div className="va-float  absolute bottom-10 right-[28%] w-4  h-4  rounded    bg-white/25 rotate-12 pointer-events-none" style={{ animationDelay: '2.2s' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-center mb-8">

            {/* Animated trust badge */}
            <div className="va-badge inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold text-sm px-5 py-2 rounded-full mb-5 border border-white/30">
              <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
              ⭐ Excellent • 4.0 out of 5 • Trustpilot
            </div>

            {/* Heading */}
            <h1 className="va-fade-up-1 text-5xl font-black mb-6 leading-tight text-white drop-shadow-md">
              Get a <span className="text-white underline decoration-white/40 decoration-4 underline-offset-4">Professional Virtual Business Address</span>{' '}
              for Company Registration &{' '}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg,#fff 0%,#bae6fd 40%,#fff 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'va-shimmer 3s linear infinite',
                }}
              >
                Personal Use
              </span>
            </h1>

            {/* Sub-text */}
            <p className="va-fade-up-2 text-lg text-cyan-50 max-w-2xl mx-auto mb-8 leading-relaxed">
              Stay connected, manage your mail, and run your business from anywhere with a secure virtual address.
            </p>

            {/* Trust chips */}
            <div className="va-fade-up-2 flex flex-wrap justify-center gap-3 mb-8">
              {['Privacy Protected', 'All 50 States', 'Instant Setup', 'Mail Scanning & Forwarding'].map((chip) => (
                <span
                  key={chip}
                  className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/30"
                >
                  ✓ {chip}
                </span>
              ))}
            </div>

            {/* TAB BUTTONS — unchanged functionality */}
            <div className="va-fade-up-3 flex justify-center gap-4 mb-8">
              <button
                onClick={() => setAddressType("business")}
                className={`px-8 py-3 rounded-full font-bold transition-all shadow-md ${
                  addressType === "business"
                    ? "bg-white text-cyan-600"
                    : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
                }`}
              >
                Business
              </button>
              <button
                onClick={() => setAddressType("personal")}
                className={`px-8 py-3 rounded-full font-bold transition-all shadow-md ${
                  addressType === "personal"
                    ? "bg-white text-cyan-600"
                    : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
                }`}
              >
                Personal
              </button>
            </div>

            {/* CONDITIONAL FORMS — identical functionality, card floats up */}
            {addressType === "business" && (
              <div className="va-card-rise bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-lg mx-auto mb-4 text-left shadow-2xl border border-white/60">
                {/* Floating mini badge on card */}
                <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-cyan-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse inline-block" />
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Virtual Address</h3>
                <p className="text-gray-700 mb-6">For LLCs and Corporations</p>

                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="flex gap-3">
                  <select className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:outline-none bg-white">
                    <option>Select State</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>New York</option>
                  </select>
                </div>

                <button className="va-shimmer-btn w-full text-white py-4 rounded-full font-bold text-lg mt-6 transition-all hover:scale-105 active:scale-100"
                  style={{ background: 'linear-gradient(90deg,#0e7490 0%,#06b6d4 40%,#0891b2 70%,#0e7490 100%)' }}
                >
                  GET BUSINESS VIRTUAL ADDRESS
                </button>
              </div>
            )}

            {addressType === "personal" && (
              <div className="va-card-rise bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-lg mx-auto mb-4 text-left shadow-2xl border border-white/60">
                <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-cyan-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse inline-block" />
                  For Individuals
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Virtual Address</h3>
                <p className="text-gray-700 mb-6">Ideal for individuals & remote professionals</p>

                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="flex gap-3">
                  <select className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:outline-none bg-white">
                    <option>Select State</option>
                    <option>Florida</option>
                    <option>Illinois</option>
                    <option>Washington</option>
                  </select>
                </div>

                <button className="va-shimmer-btn w-full text-white py-4 rounded-full font-bold text-lg mt-6 transition-all hover:scale-105 active:scale-100"
                  style={{ background: 'linear-gradient(90deg,#0e7490 0%,#06b6d4 40%,#0891b2 70%,#0e7490 100%)' }}
                >
                  GET PERSONAL VIRTUAL ADDRESS
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════ */}
      <section className="py-8 bg-gradient-to-r from-cyan-50 to-cyan-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
            Trusted by <span className="text-cyan-600">500+ Entrepreneurs & Startups</span>{' '}
            <span className="text-cyan-600">Worldwide</span>
          </h2>
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">
            <span className="text-cyan-600 font-bold text-lg">Established 2018</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Founder-Led</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Independently Owned</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHOOSE THE RIGHT ADDRESS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Choose the Right Virtual Address for{' '}
              <span className="text-cyan-600">Your Needs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a professional virtual address for business registration, remote work, or personal privacy.
              Our secure mail handling and flexible plans help entrepreneurs and individuals stay organized anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition-all">
              <div className="flex items-start gap-2">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 text-xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Not Sure Which Virtual Address to Choose?</h3>
                  <p className="text-gray-600">Our experts help you select the best virtual business address or personal mailing address based on your company registration, remote work needs, and secure mail management preferences.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 border hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need Both Business & Personal Addresses?</h3>
                  <p className="text-gray-600">Easily register for both services. Get a professional virtual office address for your company and a secure personal mailing address to manage business and private correspondence separately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-2xl">🏢</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Virtual Address</h3>
                  <p className="text-gray-600 mb-4">Get a professional virtual business address for company registration, legal documents, and secure mail handling. Perfect for startups, remote teams, and entrepreneurs building a professional presence.</p>
                  <button className="text-cyan-500 font-semibold group-hover:text-cyan-600 transition-all">Enquire Now</button>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-md p-8 border hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">📬</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Personal Virtual Address</h3>
                  <p className="text-gray-600 mb-4">Protect your privacy with a secure personal virtual address. Ideal for remote professionals, freelancers, and digital nomads who need a reliable mailing address anywhere.</p>
                  <button className="text-cyan-500 font-semibold group-hover:text-cyan-600 transition-all">Enquire Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT IS A VIRTUAL ADDRESS
      ═══════════════════════════════════════════ */}
      <section className="py-10 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-10 text-center">
            What Is a Virtual Address &{' '}
            <span className="text-cyan-600">How Does It Work?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Virtual Business Address</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    A real street address with a secure <strong>virtual mailbox</strong> where your mail is received, scanned, and uploaded online. Perfect for <strong>business registration, startups, remote businesses, and entrepreneurs</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-sm">✕</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Not a PO Box or Physical Office</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    A virtual address is not a location you visit. It's a <strong>digital mail management service</strong> designed for receiving and managing mail online rather than handling packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY YOUR BUSINESS NEEDS A VIRTUAL ADDRESS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-cyan-500 text-sm font-semibold uppercase tracking-wide mb-3">Virtual Business Address Benefits</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Why Your Business Needs a{' '}
              <span className="text-cyan-600">Virtual Address</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A <strong>Virtual Business Address</strong> gives your company a professional street address without renting a physical office. Perfect for startups, remote teams, freelancers and international entrepreneurs who need a trusted <strong>U.S. business address</strong> with secure <strong>mail forwarding and digital mail scanning</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center text-2xl mr-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Virtual Office Address</h3>
              </div>
              <p className="text-gray-600 mb-6">Get a real street <strong>business address for your company or LLC</strong> without leasing office space. Ideal for registering a business, receiving official documents, and building customer trust.</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-cyan-500">✔</span>
                  <p className="text-gray-700"><strong>Business Credibility</strong> – Use a professional <strong>U.S. business address</strong> on your website, invoices and marketing materials.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">✔</span>
                  <p className="text-gray-700"><strong>Privacy Protection</strong> – Keep your home address private and protect your personal information online.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">✔</span>
                  <p className="text-gray-700"><strong>Business Registration</strong> – Many states require a physical address to form an <strong>LLC or company</strong>. A virtual address makes it simple.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center text-2xl mr-4">📬</div>
                <h3 className="text-2xl font-bold text-gray-900">Mail Forwarding & Digital Mail Management</h3>
              </div>
              <p className="text-gray-600 mb-6">Manage your business mail online with secure <strong>mail scanning, forwarding and cloud storage</strong>. Access your documents anytime from anywhere in the world.</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-cyan-500">✔</span>
                  <p className="text-gray-700"><strong>Remote Mail Access</strong> – View and manage your business mail from your phone, tablet or computer.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">✔</span>
                  <p className="text-gray-700"><strong>Mail Forwarding Service</strong> – Get important documents shipped to any location worldwide.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">✔</span>
                  <p className="text-gray-700"><strong>Digital Mail Scanning</strong> – Receive scanned copies of letters and packages instantly.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NOTICE — NO PACKAGE ACCEPTANCE
      ═══════════════════════════════════════════ */}
      <section className="py-12 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 border border-cyan-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-600 text-2xl">📦</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Package Acceptance for Virtual Address</h3>
                <p className="text-gray-700 mb-3">Our <strong>Virtual Business Address service</strong> is designed for receiving and managing <strong>business mail, letters, and large envelopes</strong>. It is ideal for companies that need a professional address for official correspondence and document delivery.</p>
                <p className="text-gray-700"><strong>Please note:</strong> We do <strong>not accept packages, parcels, or shipments of any size</strong>. Only standard letters and envelopes are processed through our <strong>virtual mail handling system</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-black text-gray-900 mb-12">
            Frequently Asked{' '}
            <span className="text-cyan-600">Questions</span>
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

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Get Your <span className="text-cyan-400">Professional Virtual Address</span>
            <br />
            And Manage Mail From{' '}
            <span className="text-cyan-400">Anywhere</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Start using a <strong className="text-white">Virtual Business Address</strong> in minutes. Receive and manage your <strong className="text-white">business mail online</strong> with secure digital scanning and mail forwarding — perfect for startups, freelancers, remote teams, and global entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-14">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-3xl font-bold">4.5</span>
                <div className="flex text-cyan-400 text-lg">{[...Array(5)].map((_, i) => <span key={i}>★</span>)}</div>
              </div>
              <p className="text-gray-400 text-sm">Rated on <span className="text-cyan-400 font-semibold">Trustpilot</span></p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-3xl font-bold">20K+</span>
                <div className="flex text-cyan-400 text-lg">{[...Array(5)].map((_, i) => <span key={i}>★</span>)}</div>
              </div>
              <p className="text-gray-400 text-sm">Customer Reviews on <span className="text-cyan-400 font-semibold">Google</span></p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105">
              Get Business Virtual Address
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all hover:scale-105">
              Get Personal Virtual Address
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}