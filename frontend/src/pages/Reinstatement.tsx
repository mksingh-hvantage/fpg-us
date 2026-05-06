import { useState, useEffect, useRef } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Shield, FileText, XCircle, Award, ArrowRight, Star, Zap, RefreshCw } from 'lucide-react';

/* ─────────────────────────────────────────────
   Keyframe animations
───────────────────────────────────────────── */
const animStyles = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-36px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
}
@keyframes shimmerCyan {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes pulseRing {
  0%   { transform: scale(1);    opacity: .7; }
  70%  { transform: scale(1.45); opacity: 0; }
  100% { transform: scale(1.45); opacity: 0; }
}
@keyframes rotateSlow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes spinReverse {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.ri-fade-up  { animation: fadeUp .65s ease both; }
.ri-slide-r  { animation: slideRight .65s ease both; }
.ri-float    { animation: float 5s ease-in-out infinite; }

.ri-shimmer {
  background: linear-gradient(90deg, #0891b2 0%, #22d3ee 35%, #06b6d4 55%, #0891b2 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerCyan 3s linear infinite;
}
.ri-grad-btn {
  background: linear-gradient(270deg, #0e7490, #0891b2, #06b6d4, #0891b2, #0e7490);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
}

.d-100 { animation-delay: .1s; }
.d-200 { animation-delay: .2s; }
.d-300 { animation-delay: .3s; }
.d-400 { animation-delay: .4s; }
.d-500 { animation-delay: .5s; }
.d-600 { animation-delay: .6s; }

.ri-card {
  transition: transform .28s ease, box-shadow .28s ease;
}
.ri-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(8,145,178,.14);
}

.ri-step {
  transition: border-color .25s, box-shadow .25s, transform .25s;
}
.ri-step:hover {
  border-color: #06b6d4;
  box-shadow: 0 6px 28px rgba(6,182,212,.13);
  transform: translateX(6px);
}

.ri-compare-card {
  transition: transform .28s ease, box-shadow .28s ease;
}
.ri-compare-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(0,0,0,.1);
}

.ri-btn {
  position: relative;
  overflow: hidden;
}
.ri-btn::after {
  content: '';
  position: absolute; inset: 0;
  background: rgba(255,255,255,.15);
  transform: translateX(-100%);
  transition: transform .35s ease;
}
.ri-btn:hover::after { transform: translateX(0); }

.ri-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(6,182,212,.12);
  animation: float 7s ease-in-out infinite;
}
`;

/* ─────────────────────────────────────────────
   ColorHeading: last N words → text-cyan-600
───────────────────────────────────────────── */
function ColorHeading({ text, words = 2, className = '' }: { text: string; words?: number; className?: string }) {
  const parts = text.trim().split(' ');
  const plain = parts.slice(0, -words).join(' ');
  const colored = parts.slice(-words).join(' ');
  return (
    <span className={className}>
      {plain && <>{plain} </>}
      <span className="text-cyan-600">{colored}</span>
    </span>
  );
}

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let n = 0;
        const step = Math.ceil(end / 50);
        const t = setInterval(() => {
          n += step;
          if (n >= end) { setCount(end); clearInterval(t); }
          else setCount(n);
        }, 28);
        observer.disconnect();
      }
    }, { threshold: .5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Reinstatement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const openModal = () => { setSelectedBusinessType(''); setIsModalOpen(true); };

  const stats = [
    { end: 100000, suffix: '+', prefix: '',  label: 'Businesses Served' },
    { end: 50,     suffix: '',  prefix: '',  label: 'States Covered'    },
    { end: 2,      suffix: '',  prefix: '',  label: 'Avg. Days to File' },
    { end: 7,      suffix: '+', prefix: '',  label: 'Years Experience'  },
  ];

  const reasons = [
    { color: 'blue',   icon: <Clock   className="w-8 h-8 text-white" />, bg: 'bg-blue-600',   border: 'border-blue-200',   from: 'from-blue-50',   to: 'to-blue-100',   title: 'Faster Recovery',       desc: 'In many states, reinstatement procedures can be completed in less time than forming a new company. Get back to business quickly without lengthy formation delays.' },
    { color: 'green',  icon: <Award   className="w-8 h-8 text-white" />, bg: 'bg-green-600',  border: 'border-green-200',  from: 'from-green-50',  to: 'to-green-100',  title: 'Brand Preservation',    desc: 'Keep your original company name and established branding. Protect the reputation and recognition you\'ve built with customers and partners.' },
    { color: 'purple', icon: <FileText className="w-8 h-8 text-white" />, bg: 'bg-purple-600', border: 'border-purple-200', from: 'from-purple-50', to: 'to-purple-100', title: 'Historical Continuity', desc: 'Maintain your historical background. No starting from scratch! Preserve your business credit history, contracts, and established relationships.' },
  ];

  const reinstatementBenefits = [
    { text: 'Maintains legal entity protections', sub: 'Your LLC or corporation status is restored with full liability protection' },
    { text: 'Preserves customer relationships',  sub: 'Continue business under the same name your clients know and trust' },
    { text: 'Retains brand loyalty',             sub: 'Keep your market presence, domain names, and business reputation intact' },
    { text: 'Significantly faster timeline',     sub: 'Can be completed in days versus weeks for new formation' },
    { text: 'Lower overall costs',               sub: 'Avoid formation fees and setup expenses required for new entities' },
    { text: 'Preserves business history',        sub: 'Maintain your original formation date and corporate track record' },
  ];

  const startingNewDrawbacks = [
    { text: 'Loss of historical records',  sub: 'Your business history, formation date, and track record are gone forever' },
    { text: 'Extended timeline',           sub: 'New incorporation can take days to weeks depending on state processing times' },
    { text: 'Higher filing fees',          sub: 'Formation costs typically range from $200-$500+ depending on your state' },
    { text: 'Risk of name loss',           sub: 'Your original business name may be taken by another company' },
    { text: 'New EIN required',            sub: 'Must obtain new tax ID and rebuild business credit from scratch' },
    { text: 'Contract renegotiation',      sub: 'All existing contracts and agreements need to be rewritten' },
    { text: 'Liability gap',               sub: 'Period without legal protection during formation process' },
  ];

  return (
    <div className="bg-white">
      <style>{animStyles}</style>

      <Helmet>
        <title>Company Reinstatement in USA | Reinstate LLC or Corporation</title>
        <meta name="description" content="Reinstate your dissolved or inactive LLC or corporation in the USA. The Future Perfect Global assists with company reinstatement, penalties, and compliance filings." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-management/reinstatement" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/reinstatement" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/reinstatement" hrefLang="x-default" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Company Reinstatement in USA | LLC & Corporation Revival" />
        <meta property="og:description" content="Professional company reinstatement services in the USA. Reinstate your LLC or corporation, clear penalties, and restore good standing." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-management/reinstatement" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Company Reinstatement Services USA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Company Reinstatement in USA | LLC & Corporation Revival" />
        <meta name="twitter:description" content="Restore your dissolved or inactive USA company with expert LLC and corporation reinstatement services." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Service","name":"Company Reinstatement Service USA","serviceType":"LLC & Corporation Reinstatement","url":"https://us.thefutureperfectglobal.com/business-management/reinstatement","description":"Company reinstatement services in the USA for dissolved or inactive LLCs and corporations including compliance restoration and penalty clearance.","provider":{"@type":"Organization","name":"The Future Perfect Global – USA Business Setup","url":"https://us.thefutureperfectglobal.com/","logo":"https://thefutureperfectglobal.ae/uploads/images/logo1.webp"},"areaServed":{"@type":"Country","name":"United States"}}`}</script>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business reinstatement"
            className="w-full h-full object-cover"
            style={{ animation: 'float 22s ease-in-out infinite' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-slate-800/86 to-cyan-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Decorative rings */}
        <div className="absolute top-20 right-24 w-72 h-72 border border-cyan-400/12 rounded-full hidden lg:block" style={{ animation: 'rotateSlow 35s linear infinite' }}></div>
        <div className="absolute top-32 right-36 w-48 h-48 border border-cyan-400/8 rounded-full hidden lg:block"  style={{ animation: 'spinReverse 22s linear infinite' }}></div>

        {/* Particles */}
        <div className="ri-particle w-80 h-80 top-8 right-1/4"  style={{ animationDelay: '0s'  }}></div>
        <div className="ri-particle w-48 h-48 bottom-20 left-8" style={{ animationDelay: '2.5s' }}></div>
        <div className="ri-particle w-32 h-32 top-1/2 right-16" style={{ animationDelay: '4s'   }}></div>

        {/* Left accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="ri-fade-up inline-flex items-center gap-2.5 bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ animation: 'pulseRing 1.6s ease-out infinite' }}></div>
                <RefreshCw className="w-4 h-4 text-cyan-300" />
                <span className="text-cyan-200 text-sm font-semibold tracking-widest uppercase">Business Reinstatement Service</span>
              </div>

              {/* H1 */}
              <h1 className="ri-fade-up d-100 text-5xl font-black text-white mb-6 leading-[1.06]">
                Reinstate Your<br />
                Business &amp;<br />
                <span className="ri-shimmer">Restore Good Standing</span>
              </h1>

              <p className="ri-fade-up d-200 text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                File an Order of Reinstatement online and quickly restore your{' '}
                <strong className="text-white">LLC or corporation</strong> to active status.
                Regain good standing, avoid penalties, and resume operations faster and more
                affordably than forming a new company.
              </p>

              {/* CTAs */}
              <div className="ri-fade-up d-300 flex flex-wrap gap-4 mb-14">
                <button onClick={openModal} className="ri-btn ri-grad-btn text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-2xl shadow-cyan-500/30 inline-flex items-center gap-3 hover:scale-105">
                  File Your Reinstatement
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Learn More
                </button>
              </div>

              {/* Trust */}
              <div className="ri-fade-up d-400 flex items-center gap-3 text-slate-400">
                <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">Trusted by <span className="text-white font-semibold">100,000+ businesses</span> nationwide</span>
              </div>
            </div>

            {/* RIGHT — image card */}
            <div className="ri-fade-up d-300 relative hidden lg:block">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-500/10 rounded-full blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business reinstatement documents"
                  className="w-full object-cover"
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Fast Processing</p>
                    <p className="text-sm text-gray-500">1-2 business days avg.</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-2xl font-black text-cyan-600">50</p>
                    <p className="text-xs text-gray-500">States Covered</p>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="absolute -right-8 top-1/3 bg-white rounded-2xl shadow-xl p-4 text-center min-w-[90px]">
                <div className="text-2xl font-black text-cyan-600">7+</div>
                <div className="text-xs text-gray-500 font-medium">Years Exp.</div>
              </div>
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 text-center min-w-[100px]">
                <div className="text-2xl font-black text-green-600">100K+</div>
                <div className="text-xs text-gray-500 font-medium">Businesses</div>
              </div>
            </div>
          </div>

     
        </div>

        
      </section>

      {/* ── WHY REINSTATEMENT > NEW LLC ─────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Award size={14} /> Why Reinstate?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
              <ColorHeading text="Why Business Reinstatement Is Better Than Starting a New LLC" words={3} />
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Reinstating a dissolved LLC or corporation allows you to restore good standing with the state, reactivate your business license, and resume operations quickly — saving time, costs, and paperwork.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className={`ri-card bg-gradient-to-br ${item.from} ${item.to} rounded-3xl p-8 border-2 ${item.border} ri-fade-up d-${(i+1)*100}`}>
                <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ─────────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-cyan-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                Trusted by <span className="text-cyan-400">500+ Entrepreneurs</span>
              </h2>
              <p className="text-slate-400">Worldwide Business Owners &amp; Founders</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <Star size={16} />,   text: 'Serving Since 2018'    },
                { icon: <Zap  size={16} />,   text: 'Founder-Led'           },
                { icon: <Award size={16} />,  text: 'Independently Owned'   },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-5 py-2.5 transition-colors hover:bg-white/12">
                  <span className="text-cyan-400">{b.icon}</span>
                  <span className="text-white font-semibold text-sm">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-STEP PROCESS ───────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6,182,212,.2) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <RefreshCw size={14} /> How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
              <ColorHeading text="Our Reinstatement Process" />
            </h2>
            <p className="text-xl text-gray-600">Three simple steps to restore your business to good standing</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-300 hidden md:block rounded-full"></div>

            <div className="space-y-6">
              {[
                {
                  n: '1',
                  title: 'File LLC or Corporation Reinstatement Documents',
                  desc: 'We prepare and file all required business reinstatement documents with your state\'s Secretary of State. Our team ensures your LLC or corporation reinstatement forms, affidavits, and filings are completed accurately so your dissolved or inactive business can be restored to active status.'
                },
                {
                  n: '2',
                  title: 'Resolve Outstanding State Fees and Penalties',
                  desc: 'To reinstate a dissolved LLC or corporation, any unpaid annual report fees, state taxes, and penalties must be cleared. We help identify outstanding obligations and guide you through the payment process to restore your business to good standing.'
                },
                {
                  n: '3',
                  title: 'Get Official Business Reinstatement Approval',
                  desc: 'After approval from the Secretary of State, your business will be officially reinstated and returned to active status. Once your company regains good standing, you can legally resume operations and continue business activities with full compliance.'
                },
              ].map((step, i) => (
                <div key={i} className={`ri-step flex gap-6 items-start bg-white rounded-2xl p-7 shadow-md border-2 border-transparent ri-fade-up d-${(i+1)*100}`}>
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg shadow-cyan-200 relative z-10">
                    {step.n}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REINSTATE VS NEW ─────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-50/40 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <CheckCircle size={14} /> Compare Options
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
              <ColorHeading text="Should I Reinstate or Start New?" words={2} />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Compare your options to make the best decision for your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="ri-compare-card bg-white rounded-3xl p-8 shadow-xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Reinstatement Benefits</h3>
              </div>
              <ul className="space-y-4">
                {reinstatementBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-bold text-gray-900">{item.text}</span> — {item.sub}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drawbacks */}
            <div className="ri-compare-card bg-white rounded-3xl p-8 shadow-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Starting New Drawbacks</h3>
              </div>
              <ul className="space-y-4">
                {startingNewDrawbacks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-bold text-gray-900">{item.text}</span> — {item.sub}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="mt-10 relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600"></div>
            <div className="relative p-8 text-center text-white">
              <h3 className="text-2xl font-black mb-3">The Clear Choice for Most Businesses</h3>
              <p className="text-green-100 max-w-3xl mx-auto leading-relaxed">
                Unless your business name is no longer available or you need a completely fresh start,
                reinstatement is typically the faster, more cost-effective option that preserves your brand
                and business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 via-cyan-600 to-slate-800"></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,.1) 1px, transparent 0)', backgroundSize: '28px 28px' }}></div>
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-slate-400/10 rounded-full"></div>

            <div className="relative p-12 md:p-16 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-cyan-500/25 border border-cyan-300/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 text-cyan-200">
                <Star size={14} /> Fast & Affordable Service
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <ColorHeading text="Ready to Restore Your Business?" />
              </h2>
              <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Don't let administrative dissolution keep you from running your business.
                Our experts will handle all the paperwork and get your business back on track quickly.
              </p>
              <button onClick={openModal} className="ri-btn ri-grad-btn text-white px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-cyan-500/30 inline-flex items-center gap-3 mb-8">
                File Your Reinstatement Today
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Trust row */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-cyan-200 mb-6">
                {['All 50 States', 'Fast 1-2 Day Filing', 'Expert Review', 'No Hidden Fees'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-cyan-400" /> {t}
                  </span>
                ))}
              </div>

              <p className="text-cyan-300 text-sm flex items-center justify-center gap-2">
                <span className="font-semibold">Questions?</span> Call us at +858-952-4549
              </p>
            </div>
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