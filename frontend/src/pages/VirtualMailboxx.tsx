import {
  Mail,
  Shield,
  Clock,
  CreditCard,
  MapPin,
  FileText,
  X,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  Globe
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { US_STATES as states } from '../data/usStates';

// Helper: colors last two words of a heading in cyan
function ColorLastTwo({ text }: { text: string }) {
  const words = text.trim().split(' ');
  if (words.length <= 2) return <span className="text-cyan-600">{text}</span>;
  const main = words.slice(0, words.length - 2).join(' ');
  const last = words.slice(-2).join(' ');
  return <>{main} <span className="text-cyan-600">{last}</span></>;
}

// Animated counter
function useCountUp(end: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [end, duration, active]);
  return count;
}

export default function VirtualMailboxx() {
  const [selectedState, setSelectedState] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroVisible(true);
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsActive(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const s75 = useCountUp(75, 2000, statsActive);
  const s90 = useCountUp(90, 2200, statsActive);

  const popularStates = ['California', 'Delaware', 'Florida', 'Georgia', 'Texas', 'Wyoming'];

  const features = [
    { icon: MapPin, title: 'Real Street Address', description: 'Get a legitimate physical location for receiving all your business mail' },
    { icon: Mail, title: 'Mail Handling & Digital Scans', description: 'Unlimited correspondence management with instant digital scanning' },
    { icon: Shield, title: 'Encrypted Scans with 24/7 Access', description: 'Secure, always-available dashboard to view and manage your mail' },
    { icon: CreditCard, title: 'Mail Forwarding for Financial Documents', description: 'Automatic routing of checks, credit cards, and debit cards to your location' },
    { icon: FileText, title: 'Flat-Fee Pricing', description: 'Consistent monthly cost of $29 with no hidden fees or surprises' },
    { icon: Globe, title: 'Access from Anywhere', description: 'Manage your mail remotely from any device, any time zone, anywhere in the world' },
  ];

  const faqs = [
    { question: 'How do I get started with a virtual mailbox?', answer: "Getting started is simple. You'll need a government-issued photo ID and proof of address documentation (such as a voter card, insurance document, vehicle registration, lease, or mortgage). Once you have these, you can complete the online authorization through our secure dashboard." },
    { question: "What's the difference between a virtual address and a virtual mailbox?", answer: "A virtual address is a physical street location where you can receive USPS mail. A virtual mailbox is the secure digital inbox where you can view, organize, and download scans of your mail. Together, they provide a complete mail management solution." },
    { question: 'What can I use my virtual mailbox for?', answer: "You can use your virtual mailbox for receiving flat mail, digital record-keeping, accessing mail while traveling, listing on your website and marketing materials, opening bank accounts, and business contracting. However, it cannot be used for receiving packages, physical mail forwarding (except financial documents), or establishing residency." },
  ];

  const mailItems = [
    { from: 'IRS — Tax Notice', tag: 'Official', color: 'text-red-500', bg: 'bg-red-50' },
    { from: 'Chase Bank — Statement', tag: 'Financial', color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { from: 'State of Delaware', tag: 'Compliance', color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeLeft { from { opacity:0; transform:translateX(-28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeRight { from { opacity:0; transform:translateX(28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        @keyframes blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;} }
        @keyframes spin-slow { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @keyframes scan-line { 0%{top:0%;opacity:0.8;} 100%{top:100%;opacity:0;} }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes slide-in { from{opacity:0;transform:translateX(20px);} to{opacity:1;transform:translateX(0);} }
        @keyframes ping-slow { 0%{transform:scale(1);opacity:0.6;} 100%{transform:scale(1.8);opacity:0;} }

        .anim-fade-up { animation: fadeUp 0.7s ease forwards; }
        .anim-fade-left { animation: fadeLeft 0.7s ease forwards; }
        .anim-fade-right { animation: fadeRight 0.7s ease forwards; }
        .d1{animation-delay:0.15s;} .d2{animation-delay:0.3s;} .d3{animation-delay:0.45s;} .d4{animation-delay:0.6s;} .d5{animation-delay:0.75s;}
        .float { animation: float 4s ease-in-out infinite; }
        .float-d { animation: float 4s ease-in-out infinite 1.5s; }
        .blob { animation: blob 9s ease-in-out infinite; }
        .blob-d { animation: blob 9s ease-in-out infinite 4s; }
        .spin-slow { animation: spin-slow 22s linear infinite; }
        .spin-rev { animation: spin-slow 16s linear infinite reverse; }

        .scan-line {
          position: absolute; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(6,182,212,0.8), transparent);
          animation: scan-line 2.5s linear infinite;
        }
        .cursor-blink::after { content:'|'; animation: blink 1s step-end infinite; color:#06b6d4; }
        .mail-row { animation: slide-in 0.5s ease forwards; opacity:0; }
        .mail-row:nth-child(1){animation-delay:0.8s;}
        .mail-row:nth-child(2){animation-delay:1.1s;}
        .mail-row:nth-child(3){animation-delay:1.4s;}

        .ping-ring {
          position:absolute; inset:0; border-radius:50%;
          border:2px solid rgba(6,182,212,0.4);
          animation: ping-slow 2s ease-out infinite;
        }
        .ping-ring-d { animation-delay:1s; }

        .card-hover { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(8,145,178,0.12); }

        .feature-card::before {
          content:''; position:absolute; inset:0; border-radius:inherit;
          background:linear-gradient(135deg,transparent 60%,rgba(8,145,178,0.15));
          opacity:0; transition:opacity 0.3s;
        }
        .feature-card:hover::before { opacity:1; }

        .gradient-text {
          background: linear-gradient(135deg,#0e7490,#06b6d4,#0891b2);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .glow-btn { position:relative; overflow:hidden; }
        .glow-btn::after { content:''; position:absolute; inset:0; background:radial-gradient(circle at center,rgba(255,255,255,0.25),transparent 70%); opacity:0; transition:opacity 0.3s; }
        .glow-btn:hover::after { opacity:1; }

        .hero-grid {
          background-image: linear-gradient(rgba(6,182,212,0.06) 1px,transparent 1px), linear-gradient(90deg,rgba(6,182,212,0.06) 1px,transparent 1px);
          background-size: 48px 48px;
        }
        .stat-glass { background:rgba(255,255,255,0.08); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.18); }
        .section-line { height:2px; background:linear-gradient(90deg,transparent,#0891b2 30%,#06b6d4 50%,#0891b2 70%,transparent); border:none; margin:0; }
        .trust-pill { background:rgba(8,145,178,0.07); border:1px solid rgba(8,145,178,0.18); }
        .state-pop { transition:all 0.2s; }
        .state-pop:hover { background:#cffafe; border-color:#0891b2; transform:translateY(-2px); box-shadow:0 6px 20px rgba(8,145,178,0.15); }
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
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Service","name":"Virtual Mailbox Services in USA","url":"https://us.thefutureperfectglobal.com/business-management/virtual-mailbox","provider":{"@type":"Organization","name":"The Future Perfect Global","logo":"https://thefutureperfectglobal.ae/uploads/images/logo1.webp"},"description":"Professional virtual mailbox services in the USA offering business address, mail scanning, forwarding, and secure mail handling for companies and entrepreneurs.","areaServed":["United States"],"serviceType":["Virtual Mailbox USA","Mail Forwarding Services","Business Address Services","Remote Mail Handling"]}`}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 min-h-screen flex items-center py-20">
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        {/* Blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/15 blob pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-400/10 blob-d pointer-events-none" />

        {/* Rings */}
        <div className="absolute top-16 right-16 w-72 h-72 border border-cyan-500/20 rounded-full spin-slow pointer-events-none" />
        <div className="absolute top-28 right-28 w-48 h-48 border border-cyan-400/10 rounded-full spin-rev pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className={heroVisible ? 'anim-fade-left' : 'opacity-0'}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-sm font-medium">Starting at just $29/month — no hidden fees</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                <span className="gradient-text">Virtual Mailbox</span><br />
                for Modern<br />
                Businesses
              </h1>

              <p className={`text-xl text-slate-300 leading-relaxed mb-10 ${heroVisible ? 'anim-fade-up d2' : 'opacity-0'}`}>
                Manage your business mail from anywhere with our secure <strong className="text-white">virtual mailbox and business address service</strong>. Digital mailbox, mail scanning, and forwarding for startups and remote teams.
              </p>

              {/* State form card */}
              <div className={`bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xl ${heroVisible ? 'anim-fade-up d3' : 'opacity-0'}`}>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  Choose Your Business State
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-white/10 border border-white/20 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400"
                    >
                      <option value="" className="text-gray-900">Select a state...</option>
                      {states.map((state) => (
                        <option key={state} value={state} className="text-gray-900">{state}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                  <button className="glow-btn px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:from-cyan-400 hover:to-cyan-500 transition-all whitespace-nowrap">
                    Get Your Address
                  </button>
                </div>

                {/* Trust row */}
                <div className="flex flex-wrap gap-4 mt-5">
                  {[{ icon: CheckCircle, label: 'No packages' }, { icon: Shield, label: 'Encrypted scans' }, { icon: Zap, label: 'Instant setup' }].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 text-slate-300 text-sm">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Animated dashboard mockup */}
            <div className={`relative ${heroVisible ? 'anim-fade-right d2' : 'opacity-0'}`}>

              {/* Main mockup */}
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
                    <span>dashboard.virtualmailbox.com</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Welcome back,</p>
                      <p className="text-white font-bold text-lg cursor-blink">John's Business</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/15 border border-green-500/30 rounded-full px-3 py-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-xs font-medium">3 New</span>
                    </div>
                  </div>

                  {/* Stats mini row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[['12', 'Total Mail'], ['3', 'Unread'], ['0', 'Forwarded']].map(([val, label]) => (
                      <div key={label} className="bg-gray-800 rounded-xl p-3 text-center">
                        <p className="text-white font-bold text-xl">{val}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Scan line effect */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-800 border border-gray-700 divide-y divide-gray-700">
                    <div className="scan-line" />
                    {mailItems.map((item, i) => (
                      <div key={i} className={`mail-row flex items-center gap-4 p-4`}>
                        <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                          <Mail className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold truncate">{item.from}</p>
                          <p className="text-slate-500 text-xs">Scanned today · Ready to view</p>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.bg} ${item.color} flex-shrink-0`}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card — top left */}
              <div className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-2xl p-4 float-d z-10 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <div className="ping-ring" />
                    <div className="ping-ring ping-ring-d" />
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Address Active</p>
                    <p className="text-xs text-gray-500">123 Main St, Delaware</p>
                  </div>
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div className="absolute -bottom-6 -right-6 bg-cyan-600 rounded-2xl shadow-xl p-4 float z-10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  <div>
                    <p className="text-white text-sm font-bold">$29/month</p>
                    <p className="text-cyan-200 text-xs">Flat-fee · No surprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 ${heroVisible ? 'anim-fade-up d4' : 'opacity-0'}`}>
            {[
              ['50K+', 'Businesses Served'],
              ['99.9%', 'Uptime Guarantee'],
              ['$29', 'Flat Monthly Fee'],
              ['24/7', 'Dashboard Access'],
            ].map(([val, label]) => (
              <div key={label} className="stat-glass rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-white mb-1">{val}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-line" />

      {/* ── FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">What's Included</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="Everything You Need to Manage Your Mail" />
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              A comprehensive mail management solution designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm feature-card overflow-hidden">
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Limitation notice — redesigned */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-5 shadow-sm">
            <div className="w-11 h-11 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <X className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 text-lg">Important Limitation: No Packages Accepted</h4>
              <p className="text-gray-600">This service handles only letters and large envelopes. Packages of any size cannot be accepted or processed.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-line" />

      {/* ── TIME SAVINGS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">Why It Matters</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="Save Time, Focus on What Matters" />
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Stop wasting time on mail management and focus on what really matters
            </p>
          </div>

          <div ref={statsRef} className="grid md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="relative bg-white rounded-3xl p-10 shadow-md text-center overflow-hidden card-hover border border-gray-100">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-50 rounded-full opacity-60" />
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-6xl font-black text-cyan-600 mb-3">{statsActive ? s75 : 0}%</div>
              <p className="text-gray-500 leading-relaxed">of people's time is spent on unimportant tasks according to a 2023 study</p>
            </div>

            {/* Stat 2 */}
            <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-3xl p-10 shadow-xl text-center overflow-hidden card-hover">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-black text-white mb-3">2/3</div>
              <p className="text-cyan-100 leading-relaxed">of business owners' time is spent on compliance and administrative management</p>
            </div>

            {/* Stat 3 */}
            <div className="relative bg-white rounded-3xl p-10 shadow-md text-center overflow-hidden card-hover border border-gray-100">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-50 rounded-full opacity-60" />
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-6xl font-black text-green-600 mb-3">{statsActive ? s90 : 0}+</div>
              <p className="text-gray-500 leading-relaxed">minutes lost per day by small business owners on unproductive tasks</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-line" />

      {/* ── STATE GUIDES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">Browse by State</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="State-by-State Regulatory Guides" />
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Get detailed compliance information for your state
            </p>
          </div>

          {/* Popular states */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-cyan-600" />
              <h3 className="text-2xl font-bold text-gray-900">Popular States</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularStates.map((state) => (
                <a
                  key={state}
                  href={`/business-management/virtual-mailbox/${state.toLowerCase().replace(/\s+/g, "-")}`}
                  className="state-pop flex items-center justify-center px-4 py-4 bg-cyan-50 text-cyan-700 font-bold rounded-2xl border-2 border-cyan-200 text-center shadow-sm hover:shadow-md"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>

          {/* All states */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-gray-500" />
              <h3 className="text-2xl font-bold text-gray-900">All States</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {states.map((state) => (
                <a
                  href={`/business-management/virtual-mailbox/${state.toLowerCase().replace(/\s+/g, "-")}`}
                  key={state}
                  className="px-4 py-3 bg-gray-50 hover:bg-cyan-50 text-gray-700 hover:text-cyan-700 font-medium rounded-xl transition-all duration-200 border border-gray-200 hover:border-cyan-200 text-left card-hover text-sm"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-line" />

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">FAQ</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="Frequently Asked Questions" />
            </h2>
            <p className="text-xl text-gray-500">Everything you need to know about our virtual mailbox service</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-cyan-600 border-cyan-600' : 'bg-cyan-50 border border-cyan-100'}`}>
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
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 blob pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-400/10 blob-d pointer-events-none" />
        <div className="absolute top-12 right-12 w-56 h-56 border border-cyan-500/20 rounded-full spin-slow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unlock Access to Your Mail{' '}
            <span className="text-cyan-400">Anytime, Anywhere</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sign up for The Future Perfect Global's Virtual Address Service today and take control of your correspondence from anywhere.
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