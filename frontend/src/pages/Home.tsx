import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async"; 
import ContactModal from '../components/ContactModal';
import GetStartedModal from '../components/GetStartedModal';

const STATS = [
  { value: "500+", label: "Businesses Formed" },
  { value: "24-48h", label: "Fast Processing" },
  { value: "4.5★", label: "Customer Rating" },
];

const WORDS = ["LLC", "Corporation", "Business", "Startup"];

function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-12px)",
        background: "linear-gradient(90deg, #22d3ee, #3b82f6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {WORDS[index]}
    </span>
  );
}
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(24px)",
  });
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const [entityTab, setEntityTab] = useState('LLC');
const [openAccordion, setOpenAccordion] = useState
<string | null>
(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const services = [
{
title: "Business Formation",
icon: "🏢",
desc: "Form your LLC, Corporation, or Nonprofit",
image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
color: "from-blue-500 to-cyan-500",
link: "/business-formation"
},
{
title: "Registered Agent",
icon: "👤",
desc: "Professional agent service in all 50 states",
image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600",
color: "from-green-500 to-emerald-500",
link: "/business-management/registered-agent"
},
{
title: "Virtual Address",
icon: "📍",
desc: "Professional business address and mail handling",
image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
color: "from-purple-500 to-pink-500",
link: "/virtual-address"
},
{
title: "Annual Report",
icon: "📊",
desc: "Stay compliant with annual reports and filings",
image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=600",
color: "from-cyan-500 to-red-500",
link: "/annual-report"
},
{
title: "Trademark Registration",
icon: "™️",
desc: "Protect your brand with trademark registration",
image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
color: "from-rose-500 to-pink-500",
link: "/business-formation/trademark-registration"
},
{ 
title: "Business Name Search",
icon: "📋",
desc: "Research and obtain required name",
image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=600",
color: "from-teal-500 to-cyan-500",
link: "/business-name-search"
}
];
return (
<div className="flex flex-col">
   <Helmet>
      <title>Business Setup Company in USA – Company Formation & LLC Registration | The Future Perfect Global</title>
      <meta
         name="description"
         content="The Future Perfect Global provides expert business setup services in the USA including LLC formation, incorporation, EIN registration, compliance support, registered agent services, and business consulting."
         />
      {/* Canonical */}
      <link rel="canonical" href="https://us.thefutureperfectglobal.com/" />
      {/* Keywords */} 
      <meta
         name="keywords"
         content="business setup USA, LLC formation USA, company formation USA, register a business in USA, start a company in USA, US LLC registration, EIN application USA, incorporation services USA, business consulting USA, US business registration"
         />
      {/* Hreflang */}
      <link rel="alternate" href="https://us.thefutureperfectglobal.com/" hrefLang="en-us" />
      <link rel="alternate" href="https://us.thefutureperfectglobal.com/" hrefLang="x-default" />
      <meta name="ROBOTS" content="INDEX, FOLLOW" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Business Setup Company in USA – LLC Formation & Registration Services"
         />
      <meta
         property="og:description"
         content="Start your business in the USA with expert LLC formation, incorporation, compliance management, and business consulting from The Future Perfect Global."
         />
      <meta property="og:url" content="https://us.thefutureperfectglobal.com/" />
      <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
      <meta
         property="og:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      <meta property="og:image:alt" content="The Future Perfect Global USA Business Setup Logo" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Business Setup Company in USA – LLC Formation & Registration Services"
         />
      <meta
         name="twitter:description"
         content="Get professional LLC formation, incorporation, and business setup services across the USA with The Future Perfect Global."
         />
      <meta
         name="twitter:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      {/* JSON-LD */}
      <script type="application/ld+json">
         {`{
           "@context": "https://schema.org",
           "@type": "Organization",
           "name": "The Future Perfect Global – USA Business Setup",
           "url": "https://us.thefutureperfectglobal.com/",
           "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp",
           "alternateName": "USA Company Formation, LLC Registration",
           "description": "Professional business setup and LLC formation services in the USA including incorporation, EIN registration, registered agent services, and compliance consulting.",
           "foundingDate": "2025",
           "founder": {
             "@type": "Person",
             "name": "Mr Nilesh Jain"
           },
           "areaServed": [
             "United States", "California", "New York", "Texas", "Florida", "Nevada", "Delaware", "Wyoming"
           ],
           "serviceType": [
             "LLC Formation USA",
             "Company Incorporation USA",
             "EIN Registration",
             "Registered Agent Services",
             "US Business Consulting",
             "Compliance & Annual Filing",
             "Startup Support USA"
           ]
         }`}
      </script>
   </Helmet>
   <section className="relative overflow-hidden bg-slate-950 py-16 min-h-screen flex items-center">

      {/* Ambient blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "floatA 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "floatB 10s ease-in-out infinite",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full">

        {/* Badge */}
        <div className="flex justify-center mb-8" style={fade(0)}>
          <span
            className="text-cyan-300 text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-cyan-500/30"
            style={{ background: "rgba(6,182,212,0.08)" }}
          >
            🚀 Trusted by 500+ Business Owners
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-6" style={fade(120)}>
          <h1
            className="font-black text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.0rem, 5vw, 4rem)", fontFamily: "'Syne', sans-serif" }}
          >
            Register Your <AnimatedWord />
            <br />
            <span className="text-slate-400 font-light" style={{ fontSize: "0.6em" }}>
              the smart way.
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p
          className="text-slate-400 text-center text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={fade(220)}
        >
          Form your LLC or Corporation in minutes — EIN, compliance support, and everything
          you need, without the confusion.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={fade(320)}
        >
          <button
            onClick={() => {
              setSelectedBusinessType?.("");
              setIsModalOpen?.(true);
            }}
            className="group relative px-8 py-4 rounded-xl font-bold text-base text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              boxShadow: "0 0 32px rgba(6,182,212,0.35)",
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #0891b2, #2563eb)" }}
            />
            <span className="relative">Get Started Now →</span>
          </button>

          <a
            href="/form-order-now"
            className="px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200 text-base"
          >
            Start My Business
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-10"
          style={fade(420)}
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="text-center py-5 px-3 rounded-2xl border border-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="text-white font-black text-2xl mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                {value}
              </div>
              <div className="text-slate-500 text-xs tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        {/* Review strip */}
        <div
          className="flex items-center justify-center gap-4 max-w-sm mx-auto py-4 px-6 rounded-2xl border border-white/[0.07]"
          style={{ ...fade(500), background: "rgba(255,255,255,0.03)" }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div>
            <div className="text-white font-bold text-sm">Excellent 4.5 / 5</div>
            <div className="text-slate-500 text-xs">5,143 Verified Reviews</div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        
        @keyframes floatA {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, -18px); }
        }
      `}</style>
    </section>
   <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Heading */}
         <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                Complete Business Solutions for <span className='block text-cyan-600'>Startup & Growth</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Discover professional business services designed to help startups, entrepreneurs, and companies launch, manage, and scale efficiently. From business setup to growth strategies, we provide everything you need to succeed in today’s competitive market.
            </p>
          </div>
         {/* Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
            <Link
               key={idx}
               to={service.link}
               className="group bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
               >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
               <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
               {/* soft overlay */}
               <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-50 transition`} />
               {/* icon */}
               <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md group-hover:scale-105 transition">
                  <div className="text-2xl text-slate-800">
                     {service.icon}
                  </div>
               </div>
            </div>
            {/* Content */}
            <div className="p-6">
               <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition">
                  {service.title}
               </h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                  {service.desc}
               </p>
               {/* CTA */}
               <div className="mt-4 text-cyan-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  Learn more →
               </div>
            </div>
            </Link>
            ))}
         </div>
      </div>
   </section>
   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-4">
            Choose the Right Business Structure for <span className='block text-cyan-600'>Your Company</span>
         </h2>
         <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Compare LLC, S-Corp, C-Corp, and Nonprofit options to find the best business entity for liability protection, tax benefits, and long-term growth. We make online business formation and company registration fast, simple, and affordable.
         </p>
         <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-cyan-50 px-6 py-3 rounded-full border-2 border-cyan-200">
               <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
               </svg>
               <span className="text-cyan-700 font-bold text-sm">
               Did you know? LLC formation is the most popular way to start a business in the United States.
               </span>
            </div>
         </div>
         <div className="flex justify-center gap-2 mb-12">
            {['LLC', 'S-Corp', 'C-Corp', 'Non-Profit'].map((tab) => (
            <button
               key={tab}
               onClick={() => setEntityTab(tab)}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
            entityTab === tab
            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-cyan-500'
            }`}
            >
            {tab}
            </button>
            ))}
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
               <h3 className="text-3xl font-black text-gray-900 mb-6">
                  {entityTab === 'LLC' && 'Limited Liability Company (LLC) Formation'}
                  {entityTab === 'S-Corp' && 'S Corporation Registration'}
                  {entityTab === 'C-Corp' && 'C Corporation Incorporation'}
                  {entityTab === 'Non-Profit' && 'Nonprofit Corporation Setup'}
               </h3>
               <div className="space-y-3">
                  {[
                  {
                  title: 'Flexible Business Structure',
                  content: 'LLC formation offers a flexible business structure with fewer formal requirements than corporations. Ideal for startups and small businesses looking for simple management.'
                  },
                  {
                  title: 'Ownership & Management Options',
                  content: 'Single-member and multi-member LLC registration allows you to manage your business directly or appoint managers based on your operational needs.'
                  },
                  {
                  title: 'Pass-Through Tax Advantages',
                  content: 'Avoid double taxation with pass-through taxation. Profits and losses are reported on your personal tax return while maintaining liability protection.'
                  },
                  {
                  title: 'Personal Asset Protection',
                  content: 'Registering an LLC protects your personal assets from business debts, lawsuits, and financial liabilities.'
                  },
                  {
                  title: 'State Compliance & Annual Reports',
                  content: 'Maintain good standing with simple annual report filing and state compliance requirements compared to traditional corporations.'
                  },
                  {
                  title: 'Funding & Growth Opportunities',
                  content: 'LLCs can raise capital through members and investors, making them suitable for growing businesses and long-term expansion.'
                  },
                  {
                  title: 'Best For',
                  content: 'Entrepreneurs, freelancers, consultants, real estate investors, and small business owners seeking affordable business incorporation and liability protection.'
                  }
                  ].map((item, idx) => (
                  <div key={idx} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                     <button
                        onClick={() =>
                        setOpenAccordion(openAccordion === item.title ? null : item.title)}
                        className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                        >
                        <span className="font-bold text-gray-900 text-left">{item.title}</span>
                        <svg
                        className={`w-5 h-5 text-gray-600 transition-transform ${
                        openAccordion === item.title ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                     </button>
                     {openAccordion === item.title && (
                     <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{item.content}</p>
                     </div>
                     )}
                  </div>
                  ))}
               </div>
            </div>
            <div className="lg:sticky lg:top-8">
               <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                     src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                     alt="Business owner starting an LLC"
                     className="w-full h-auto"
                     />
               </div>
            </div>
         </div>
         <div className="text-center mt-12">
            <button
               onClick={() => setIsModalOpen(true)}
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-5 rounded-full font-black text-xl hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-2xl transform hover:scale-105"
            >
            START YOUR {entityTab.toUpperCase()} TODAY
            </button>
         </div>
      </div>
   </section>
   <section className="py-20 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-4">
            Affordable LLC & Company Formation <span className='text-cyan-600'>Packages</span>
         </h2>
         <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Choose the best business formation package to start your LLC, register a corporation, or incorporate your company online. Transparent pricing, fast filing, and expert support included.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* BASIC */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200">
               <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-6">
                  <span className="text-cyan-700 font-bold text-sm">Basic LLC Package</span>
               </div>
               <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-5xl font-black text-gray-900">$0</span>
                     <span className="text-gray-600 font-bold">+ state filing fee</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                     One-time payment
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                     Start your LLC online with essential business registration services. Ideal for entrepreneurs looking for affordable company formation.
                  </p>
               </div>
            </div>
            {/* STANDARD */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-cyan-500 relative">
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 rounded-full text-xs font-black shadow-lg">
                  MOST POPULAR
               </div>
               <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-6 mt-2">
                  <span className="text-cyan-700 font-bold text-sm">Standard Business Formation</span>
               </div>
               <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-5xl font-black text-gray-900">$199</span>
                     <span className="text-gray-600 font-bold">+ state filing fee</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                     One-time payment
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                     Complete LLC registration with EIN filing, operating agreement, and compliance support to help you start your business with confidence.
                  </p>
               </div>
            </div>
            {/* PREMIUM */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 relative">
               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-600 to-red-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-lg transform rotate-12">
                  BEST VALUE
               </div>
               <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-6">
                  <span className="text-cyan-700 font-bold text-sm">Premium Incorporation Package</span>
               </div>
               <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-5xl font-black text-gray-900">$299</span>
                     <span className="text-gray-600 font-bold">+ state filing fee</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                     One-time payment
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                     Full-service company incorporation including registered agent service, expedited filing, EIN registration, and ongoing compliance assistance.
                  </p>
               </div>
            </div>
         </div>
         <div className="text-center">
            <button
               onClick={() => setIsModalOpen(true)}
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-5 rounded-full font-black text-lg hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-xl transform hover:scale-105"
            >
            Compare LLC Formation Packages
            </button>
         </div>
      </div>
   </section>
   <section className="py-20 bg-gradient-to-br from-cyan-500 via-cyan-400 to-slate-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <img src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Business Support Team" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
         <h2 className="text-5xl font-black mb-6 drop-shadow-2xl">
            Expert Business Formation Support You Can Trust
         </h2>
         <p className="text-2xl mb-12 drop-shadow-lg">
            Get professional LLC filing assistance, company registration help, and ongoing compliance support from experienced small business experts.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
               <div className="text-6xl mb-4">🤝</div>
               <h3 className="text-2xl font-bold mb-3">Dedicated Business Experts</h3>
               <p className="text-cyan-50">
                  Real professionals providing step-by-step guidance for LLC formation, EIN filing, and corporation setup.
               </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
               <div className="text-6xl mb-4">⭐</div>
               <h3 className="text-2xl font-bold mb-3">Top-Rated Service</h3>
               <p className="text-cyan-50">
                  Highly rated business incorporation services trusted by entrepreneurs nationwide.
               </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
               <div className="text-6xl mb-4">🌐</div>
               <h3 className="text-2xl font-bold mb-3">Multilingual Customer Support</h3>
               <p className="text-cyan-50">
                  English & Spanish support for business registration, compliance, and registered agent services.
               </p>
            </div>
         </div>
         <button
            onClick={() => setIsModalOpen(true)}
         className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-xl font-black hover:bg-gray-100 transition-all text-xl shadow-2xl transform hover:scale-105"
         >
         GET BUSINESS SUPPORT NOW
         </button>
      </div>
   </section>
   <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-5xl font-black text-center text-gray-900 mb-16">
            Business Formation & <span className='text-cyan-600'>LLC FAQs</span>
         </h2>
         <div className="space-y-6">
            {[
            {
            q: "Is your LLC formation service trusted?",
            a: "Yes. We have helped 500+ entrepreneurs successfully start an LLC, corporation, and online business. Our business formation services are trusted for fast filing, accurate paperwork, and professional customer support."
            },
            {
            q: "How much does it cost to start an LLC?",
            a: "The cost to start an LLC depends on your state’s filing fees. Our basic LLC formation package is affordable, and you only pay the required state filing fee. We also offer Standard and Premium packages with EIN filing, operating agreement, and expedited processing."
            },
            {
            q: "What is included in your business incorporation service?",
            a: "Our business incorporation services include LLC or corporation registration, preparation and filing of formation documents, compliance guidance, and optional services like EIN (Tax ID) filing and Registered Agent service."
            },
            {
            q: "Do I need a Registered Agent for my LLC?",
            a: "Yes. Most states legally require a Registered Agent for LLCs and corporations. We provide reliable Registered Agent services to receive legal documents and help you stay compliant with state requirements."
            },
            {
            q: "How long does it take to form an LLC?",
            a: "LLC processing time varies by state. Some states approve LLC registration within a few business days, while others may take 1–3 weeks. Expedited filing options are available in select states."
            },
            {
            q: "Can I start a business online?",
            a: "Absolutely. You can start an LLC or corporation online quickly and securely through our online business formation platform. We handle the paperwork and state filing process for you."
            },
            {
            q: "Will I receive an EIN (Tax ID Number)?",
            a: "Yes, we offer EIN filing services so your business can open a bank account, hire employees, and file taxes. You can add EIN registration to your formation package."
            },
            {
            q: "Are there any hidden or monthly fees?",
            a: "No hidden fees. Our LLC formation packages are one-time payments. Optional services like Registered Agent or Virtual Address may have annual renewal fees, clearly disclosed upfront."
            },
            {
            q: "Which LLC package is best for new entrepreneurs?",
            a: "Most new business owners choose our Standard package because it includes essential compliance tools, EIN filing options, and faster processing. If you need advanced features or expedited service, the Premium package is recommended."
            },
            {
            q: "Do you help with ongoing compliance after formation?",
            a: "Yes. We provide ongoing compliance reminders, annual report filing support, amendments, and other business management services to keep your LLC or corporation in good standing."
            }
            ].map((faq, idx) => (
            <details
               key={idx}
               className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-xl p-4 group border-2 border-gray-200 hover:border-cyan-500 transition-all shadow-lg"
               >
               <summary className="font-bold text-base text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <svg
                     className="w-5 h-5 text-cyan-600 transform group-open:rotate-180 transition-transform"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3} 
                        d="M19 9l-7 7-7-7"
                        />
                  </svg>
               </summary>
               <p className="mt-6 text-gray-700 text-base leading-relaxed">
                  {faq.a}
               </p>
            </details>
            ))}
         </div>
      </div>
   </section>
   <ContactModal isOpen={isModalOpen} onClose={() =>
   setIsModalOpen(false)} />
   <GetStartedModal
      isOpen={isModalOpen}
      onClose={() =>
   setIsModalOpen(false)}
   selectedBusinessType={selectedBusinessType}
   />
</div>
);
}