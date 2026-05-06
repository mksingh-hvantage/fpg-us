import { useParams } from "react-router-dom";
import { states } from "../data/states";
import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import {
  ChevronDown, MapPin, Mail, Shield, Bell, Building2,
  Lock, Package, ArrowRight, CheckCircle, Globe, Star, Zap
} from "lucide-react";

// Helper: last two words in cyan-600
function ColorLastTwo({ text }: { text: string }) {
  const words = text.trim().split(' ');
  if (words.length <= 2) return <span className="text-cyan-600">{text}</span>;
  const main = words.slice(0, words.length - 2).join(' ');
  const last = words.slice(-2).join(' ');
  return <>{main} <span className="text-cyan-600">{last}</span></>;
}

export default function VirtualMailbox() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [heroVisible, setHeroVisible] = useState(false);
  const params = useParams();
  const stateSlug = params.stateSlug;

  useEffect(() => { setHeroVisible(true); }, []);

  if (!stateSlug) {
    return <div className="py-32 text-center text-red-600 text-xl font-bold">Invalid URL</div>;
  }

  const stateData = states.find(
    (state) => state.slug.toLowerCase() === stateSlug.toLowerCase()
  );

  if (!stateData) {
    return <div className="py-32 text-center text-red-600 text-xl font-bold">State not found</div>;
  }

  const faqs = [
    {
      question: `What is a virtual mailbox in ${stateData.name}?`,
      answer: `A virtual mailbox in ${stateData.name} is a digital mail management service that provides you with a real physical street address to receive business correspondence. All incoming mail is securely received, scanned, and uploaded to an online dashboard, allowing you to access, read, and manage your mail from anywhere in the world. This is ideal for remote businesses, startups, and international entrepreneurs who need a reliable ${stateData.name} business address without maintaining a physical office.`
    },
    {
      question: `Is a virtual mailbox legal in ${stateData.name}?`,
      answer: `Yes, using a virtual mailbox in ${stateData.name} is completely legal and widely accepted for business operations. Many startups, LLCs, and online businesses use virtual mailbox services for receiving official mail, customer communication, and business registration purposes. However, certain use cases like registered agent services may require compliance with specific state regulations.`
    },
    {
      question: "Can I use a virtual mailbox for LLC or company registration?",
      answer: `Yes, a virtual mailbox can be used as a business mailing address for LLC formation and company registration. It helps establish a professional business presence while keeping your personal address private. Many entrepreneurs use a virtual business address for company registration, banking, and official correspondence, although some states may require a separate registered agent address.`
    },
    {
      question: "How does mail scanning and digital access work?",
      answer: `When mail is delivered to your virtual mailbox address in ${stateData.name}, it is processed by trained staff and scanned securely. The scanned copies are then uploaded to your online mailbox portal, where you can view, download, or manage your documents instantly. This digital mail scanning process ensures fast access, improved document organization, and efficient remote business operations.`
    },
    {
      question: "Can my mail be forwarded internationally?",
      answer: `Yes, virtual mailbox services offer global mail forwarding, allowing you to receive your physical mail at any location worldwide. You can request mail forwarding on demand, choose shipping options, and track deliveries. This makes it an ideal solution for digital nomads, remote business owners, and international companies operating in ${stateData.name}.`
    },
    {
      question: "Will I receive government, bank, and legal documents?",
      answer: `Yes, your virtual mailbox can receive official correspondence including government notices, tax documents, bank statements, and legal letters. It ensures that you never miss important communications from authorities such as the ${stateData.name} Division of Corporations or financial institutions, helping you stay compliant and organized.`
    },
    {
      question: "Is my personal address kept private and secure?",
      answer: `Absolutely. One of the main benefits of a virtual mailbox is privacy protection. Your personal home address remains confidential while all business communication is routed through your virtual address. Additionally, secure handling, encrypted digital access, and controlled document management ensure complete data protection.`
    },
    {
      question: `Who should use a virtual mailbox in ${stateData.name}?`,
      answer: `A virtual mailbox is ideal for startups, small businesses, freelancers, remote teams, digital nomads, and international entrepreneurs looking to establish a presence in ${stateData.name}. It is especially useful for businesses that operate online, want a professional mailing address, or need flexible and scalable mail management solutions.`
    }
  ];

  const featureItems = [
    { icon: Bell, title: "Instant Mail Notifications", desc: `Get real-time alerts for important documents from the ${stateData.name} Division of Corporations and Revenue so you never miss critical updates.` },
    { icon: Building2, title: "Professional Business Address", desc: `Strengthen your brand with a reliable ${stateData.name} business address that builds trust with clients and partners.` },
    { icon: MapPin, title: "Business Presence Anywhere", desc: `Operate your business in ${stateData.name} without being physically present, perfect for remote entrepreneurs and global businesses.` },
    { icon: Mail, title: "Secure Online Mailbox", desc: `Access and manage your mail anytime with a secure digital mailbox from anywhere in the world.` },
    { icon: Lock, title: "Privacy Protection", desc: `Keep your personal address safe by using a dedicated business mailing address for all official communications.` },
    { icon: Package, title: "Mail Forwarding & Scanning", desc: `Receive scanned copies or forward your mail worldwide from your ${stateData.name} address whenever needed.` },
  ];

  const mailRows = [
    { label: `${stateData.name} Dept. of Revenue`, tag: 'Tax Notice', tagColor: 'text-red-500', tagBg: 'bg-red-50' },
    { label: 'Chase Bank — Statement', tag: 'Financial', tagColor: 'text-cyan-600', tagBg: 'bg-cyan-50' },
    { label: `${stateData.name} Corp. Division`, tag: 'Compliance', tagColor: 'text-purple-600', tagBg: 'bg-purple-50' },
  ];

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);} }
        @keyframes fadeLeft { from{opacity:0;transform:translateX(-28px);}to{opacity:1;transform:translateX(0);} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(28px);}to{opacity:1;transform:translateX(0);} }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        @keyframes float2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
        @keyframes blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;} }
        @keyframes spin-slow { from{transform:rotate(0deg);}to{transform:rotate(360deg);} }
        @keyframes scan { 0%{top:0%;opacity:0.7;}100%{top:100%;opacity:0;} }
        @keyframes slide-in { from{opacity:0;transform:translateX(16px);}to{opacity:1;transform:translateX(0);} }
        @keyframes blink { 0%,100%{opacity:1;}50%{opacity:0;} }
        @keyframes ping-out { 0%{transform:scale(1);opacity:0.6;}100%{transform:scale(1.9);opacity:0;} }
        @keyframes badge-pop { from{opacity:0;transform:scale(0.85);}to{opacity:1;transform:scale(1);} }

        .anim-fade-up{animation:fadeUp 0.7s ease forwards;}
        .anim-fade-left{animation:fadeLeft 0.7s ease forwards;}
        .anim-fade-right{animation:fadeRight 0.7s ease forwards;}
        .d1{animation-delay:0.1s;}.d2{animation-delay:0.25s;}.d3{animation-delay:0.4s;}.d4{animation-delay:0.55s;}.d5{animation-delay:0.7s;}
        .float{animation:float 4s ease-in-out infinite;}
        .float2{animation:float2 4.5s ease-in-out infinite 1s;}
        .blob{animation:blob 9s ease-in-out infinite;}
        .blob2{animation:blob 9s ease-in-out infinite 4.5s;}
        .spin-slow{animation:spin-slow 22s linear infinite;}
        .spin-rev{animation:spin-slow 16s linear infinite reverse;}
        .scan-bar{position:absolute;left:0;width:100%;height:2px;background:linear-gradient(90deg,transparent,rgba(6,182,212,0.85),transparent);animation:scan 2.8s linear infinite;}
        .mail-row{animation:slide-in 0.5s ease forwards;opacity:0;}
        .mail-row:nth-child(1){animation-delay:0.9s;}
        .mail-row:nth-child(2){animation-delay:1.15s;}
        .mail-row:nth-child(3){animation-delay:1.4s;}
        .cursor::after{content:'|';animation:blink 1s step-end infinite;color:#06b6d4;}
        .ping-ring{position:absolute;inset:0;border-radius:50%;border:2px solid rgba(6,182,212,0.4);animation:ping-out 2s ease-out infinite;}
        .ping-ring2{animation-delay:1s;}
        .badge-pop{animation:badge-pop 0.5s ease forwards;}

        .hero-grid{background-image:linear-gradient(rgba(6,182,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.06) 1px,transparent 1px);background-size:48px 48px;}
        .stat-glass{background:rgba(255,255,255,0.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.18);}
        .section-line{height:2px;background:linear-gradient(90deg,transparent,#0891b2 30%,#06b6d4 50%,#0891b2 70%,transparent);border:none;margin:0;}
        .card-hover{transition:all 0.3s cubic-bezier(0.4,0,0.2,1);}
        .card-hover:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(8,145,178,0.12);}
        .feat-icon-wrap{transition:all 0.3s;}
        .feat-card:hover .feat-icon-wrap{background:#0891b2;}
        .feat-card:hover .feat-icon{color:#fff;}
        .glow-btn{position:relative;overflow:hidden;}
        .glow-btn::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at center,rgba(255,255,255,0.25),transparent 70%);opacity:0;transition:opacity 0.3s;}
        .glow-btn:hover::after{opacity:1;}
        .gradient-text{background:linear-gradient(135deg,#0e7490,#06b6d4,#0891b2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .trust-pill{background:rgba(8,145,178,0.07);border:1px solid rgba(8,145,178,0.18);}
      `}</style>

      <Helmet>
        <title>Virtual Mailbox Services in USA – Business Address & Mail Handling | The Future Perfect Global</title>
        <meta name="description" content="Get a virtual mailbox in the USA for your business. The Future Perfect Global offers secure mail handling, a professional US business address, mail forwarding, and compliance support for entrepreneurs and companies." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox" />
        <meta name="keywords" content="virtual mailbox USA, virtual business address USA, mail forwarding services USA, business mailbox USA, virtual office mailbox USA, mail handling services USA, remote business address USA" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox" hrefLang="x-default" />
        <meta name="ROBOTS" content="INDEX, FOLLOW" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Virtual Mailbox Services in USA – Business Address & Mail Handling" />
        <meta property="og:description" content="Secure and reliable virtual mailbox services in the USA. Get a professional business address, mail scanning, and forwarding with The Future Perfect Global." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Virtual Mailbox Services in USA – The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Virtual Mailbox Services in USA – Business Address & Mail Handling" />
        <meta name="twitter:description" content="Manage your business mail remotely with secure virtual mailbox services and a professional US address from The Future Perfect Global." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Service","name":"Virtual Mailbox Services in USA","url":"https://us.thefutureperfectglobal.com/business-management/virtual-mailbox","provider":{"@type":"Organization","name":"The Future Perfect Global","logo":"https://thefutureperfectglobal.ae/uploads/images/logo1.webp"},"description":"Professional virtual mailbox services in the USA.","areaServed":["United States"],"serviceType":["Virtual Mailbox USA","Mail Forwarding Services","Business Address Services","Remote Mail Handling"]}`}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 min-h-screen flex items-center py-12">
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        {/* Blobs */}
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-cyan-500/15 blob pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-400/10 blob2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-slate-600/20 blob pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Rings */}
        <div className="absolute top-12 right-12 w-72 h-72 border border-cyan-500/20 rounded-full spin-slow pointer-events-none" />
        <div className="absolute top-24 right-24 w-48 h-48 border border-cyan-400/10 rounded-full spin-rev pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className={heroVisible ? 'anim-fade-left' : 'opacity-0'}>
              {/* Breadcrumb badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8 badge-pop">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">{stateData.name} Virtual Business Address</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-base mb-6">
                <span className="gradient-text">{stateData.name}</span>{' '}
                Virtual Business<br />
                <span className="text-white">Address for LLCs</span><br />
                <span className="text-cyan-400">& Corporations</span>
              </h1>

              <p className={`text-xl text-slate-300 leading-relaxed mb-10 ${heroVisible ? 'anim-fade-up d2' : 'opacity-0'}`}>
                Forget outdated P.O. boxes and upgrade to a <strong className="text-white">{stateData.name} virtual address</strong>. Establish your business with a real street address, secure privacy, and digitally access, scan, and manage your mail online from anywhere globally.
              </p>

              {/* Trust pills */}
              <div className={`flex flex-wrap gap-3 mb-10 ${heroVisible ? 'anim-fade-up d3' : 'opacity-0'}`}>
                {[
                  { icon: CheckCircle, label: 'Real street address' },
                  { icon: Shield, label: 'Encrypted & secure' },
                  { icon: Globe, label: 'Global mail forwarding' },
                  { icon: Zap, label: 'Instant setup' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 trust-pill rounded-full px-4 py-2">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-300 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <div className={heroVisible ? 'anim-fade-up d4' : 'opacity-0'}>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="glow-btn inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-slate-500 text-sm mt-4">No credit card required · Cancel anytime</p>
              </div>
            </div>

            {/* RIGHT: Animated dashboard */}
            <div className={`relative ${heroVisible ? 'anim-fade-right d2' : 'opacity-0'}`}>

              {/* Main card */}
              <div className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10 float">
                {/* Window bar */}
                <div className="bg-gray-800 px-5 py-3.5 flex items-center gap-2 border-b border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 flex items-center gap-2">
                    <Shield className="w-3 h-3 text-green-400" />
                    <span>dashboard.virtualmailbox.com/{stateData.slug}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Active address —</p>
                      <p className="text-white font-bold text-lg cursor">{stateData.name} Business</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/15 border border-green-500/30 rounded-full px-3 py-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-xs font-medium">3 New</span>
                    </div>
                  </div>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[['12', 'Total Mail'], ['3', 'Unread'], ['0', 'Forwarded']].map(([val, label]) => (
                      <div key={label} className="bg-gray-800 rounded-xl p-3 text-center">
                        <p className="text-white font-bold text-xl">{val}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mail list with scan animation */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-800 border border-gray-700 divide-y divide-gray-700">
                    <div className="scan-bar" />
                    {mailRows.map((item, i) => (
                      <div key={i} className="mail-row flex items-center gap-4 p-4">
                        <div className={`w-9 h-9 rounded-lg ${item.tagBg} flex items-center justify-center flex-shrink-0`}>
                          <Mail className={`w-4 h-4 ${item.tagColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold truncate">{item.label}</p>
                          <p className="text-slate-500 text-xs">Scanned today · Ready to view</p>
                        </div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.tagBg} ${item.tagColor} flex-shrink-0`}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating — top left: address active */}
              <div className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-2xl p-4 float2 z-10 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <div className="ping-ring" />
                    <div className="ping-ring ping-ring2" />
                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Address Active</p>
                    <p className="text-xs text-gray-500">{stateData.name}, USA</p>
                  </div>
                </div>
              </div>

              {/* Floating — bottom right: pricing */}
              <div className="absolute -bottom-6 -right-6 bg-cyan-600 rounded-2xl shadow-xl p-4 float z-10">
                <div className="flex items-center gap-2.5">
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  <div>
                    <p className="text-white text-sm font-bold">$29/month</p>
                    <p className="text-cyan-200 text-xs">Flat-fee · No surprises</p>
                  </div>
                </div>
              </div>

              {/* Floating — mid right: privacy */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white border border-gray-100 rounded-xl shadow-lg p-3 float2 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-xs font-bold">Private & Secure</p>
                    <p className="text-gray-500 text-xs">Encrypted access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <hr className="section-line" />

      {/* ── FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">What's Included</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              <ColorLastTwo text="Virtual Mailbox Features for Modern Businesses" />
            </h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto text-lg">
              Manage your business communication with a secure, flexible, and scalable <strong className="text-slate-700">virtual mailbox service</strong> designed for startups, entrepreneurs, and global companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="feat-card group relative bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm overflow-hidden">
                  {/* Subtle gradient bg on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="feat-icon-wrap w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                      <Icon className="feat-icon w-7 h-7 text-cyan-600 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* State-specific CTA strip */}
          <div className="mt-14 bg-gradient-to-r from-slate-900 to-cyan-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white font-bold text-xl mb-1">Ready to get your {stateData.name} address?</p>
              <p className="text-slate-400 text-sm">Join thousands of businesses using virtual mailboxes in {stateData.name}.</p>
            </div>
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="relative z-10 glow-btn flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-3.5 rounded-full font-bold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/30"
            >
              Get Your Address
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <hr className="section-line" />

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">FAQ</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="Common Questions" />
            </h2>
            <p className="text-xl text-gray-500">
              Everything you need to know about {stateData.name} virtual mailbox services
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-cyan-600' : 'bg-cyan-50 border border-cyan-100'}`}>
                    <ChevronDown className={`w-4 h-4 transition-all duration-300 ${openFaq === index ? 'rotate-180 text-white' : 'text-cyan-600'}`} />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-1 border-t border-gray-50">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 blob pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-400/08 blob2 pointer-events-none" />
        <div className="absolute top-10 right-10 w-56 h-56 border border-cyan-500/20 rounded-full spin-slow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your {stateData.name} Address,{' '}
            <span className="text-cyan-400">Ready in Minutes</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sign up for The Future Perfect Global's Virtual Address Service today and take control of your {stateData.name} correspondence from anywhere in the world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="glow-btn px-10 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/30 text-lg inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg">
              View Pricing
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-6">30-day money-back guarantee · No credit card required</p>
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