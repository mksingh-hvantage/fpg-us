import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { Clock, Shield, CheckCircle2, ArrowRight, ChevronUp, ChevronDown, Bell, FileText, ShieldCheck, Star, Users, Award } from 'lucide-react';

/* ─────────────────────────────────────────────
   Inline keyframe styles injected once
───────────────────────────────────────────── */
const animStyles = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes pulse-ring {
  0%   { transform: scale(1);   opacity: .6; }
  70%  { transform: scale(1.35); opacity: 0; }
  100% { transform: scale(1.35); opacity: 0; }
}
@keyframes float {
  0%, 100% { transform: translateY(0px);  }
  50%       { transform: translateY(-12px); }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes borderGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(6,182,212,.4); }
  50%       { box-shadow: 0 0 0 8px rgba(6,182,212,0); }
}
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.anim-fade-up   { animation: fadeUp .7s ease both; }
.anim-fade-in   { animation: fadeIn .8s ease both; }
.anim-slide-r   { animation: slideRight .7s ease both; }
.anim-float     { animation: float 4s ease-in-out infinite; }
.anim-shimmer   {
  background: linear-gradient(90deg, #0891b2 0%, #67e8f9 40%, #0891b2 60%, #0e7490 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}
.anim-gradient-bg {
  background: linear-gradient(270deg, #0e7490, #0891b2, #06b6d4, #0891b2);
  background-size: 400% 400%;
  animation: gradientShift 6s ease infinite;
}
.delay-100 { animation-delay: .1s; }
.delay-200 { animation-delay: .2s; }
.delay-300 { animation-delay: .3s; }
.delay-400 { animation-delay: .4s; }
.delay-500 { animation-delay: .5s; }
.delay-600 { animation-delay: .6s; }
.delay-700 { animation-delay: .7s; }

.card-hover {
  transition: transform .3s ease, box-shadow .3s ease;
}
.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(8,145,178,.15);
}

.step-card {
  transition: border-color .25s, box-shadow .25s, transform .25s;
}
.step-card:hover {
  border-color: #06b6d4;
  box-shadow: 0 8px 30px rgba(6,182,212,.12);
  transform: translateX(6px);
}

.faq-item {
  transition: box-shadow .25s;
}
.faq-item:hover {
  box-shadow: 0 4px 20px rgba(6,182,212,.1);
}

.btn-primary {
  position: relative;
  overflow: hidden;
}
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,.15);
  transform: translateX(-100%);
  transition: transform .4s ease;
}
.btn-primary:hover::after {
  transform: translateX(0);
}

.hero-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(6,182,212,.15);
  animation: float 6s ease-in-out infinite;
}

.trust-badge {
  transition: background .2s, box-shadow .2s;
}
.trust-badge:hover {
  background: #ecfeff;
  box-shadow: 0 4px 16px rgba(8,145,178,.12);
}
`;

/* ─────────────────────────────────────────────
   Utility: colorize last N words of a string
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
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(end / 50);
        const t = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(t); }
          else setCount(start);
        }, 30);
        observer.disconnect();
      }
    }, { threshold: .5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function RegisteredAgentChange() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const features = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Stay State Compliant",
      desc: "We help ensure your business always meets state compliance requirements so you never miss important legal obligations."
    },
    {
      icon: <FileText size={22} />,
      title: "Secure Document Handling",
      desc: "All legal and government documents are received, scanned, and securely stored in your online dashboard."
    },
    {
      icon: <Bell size={22} />,
      title: "Instant Notifications",
      desc: "Receive real-time alerts when important state or legal documents arrive for your business."
    },
    {
      icon: <Clock size={22} />,
      title: "Fast & Reliable Support",
      desc: "Our experts manage paperwork and compliance tasks so you can focus on growing your company."
    }
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Businesses Served' },
    { value: 50,  suffix: '',  label: 'States Covered'   },
    { value: 7,   suffix: '+', label: 'Years Experience' },
    { value: 99,  suffix: '%', label: 'Client Satisfaction' },
  ];

  const faqs = [
    { q: 'What is a registered agent?', a: 'A registered agent is a designated individual or company responsible for receiving legal documents, government notices, and compliance correspondence on behalf of your business.' },
    { q: 'When should I change my registered agent?', a: 'You should change your registered agent if your current agent resigns, changes address, provides poor service, or if you want better compliance support and privacy.' },
    { q: 'Is it legally required to update a registered agent change?', a: 'Yes. States require businesses to maintain accurate registered agent information. Failure to update this can result in penalties, loss of good standing, or missed legal notices.' },
    { q: 'How do I change my registered agent?', a: 'A registered agent change is completed by filing the appropriate form with the Secretary of State. This can usually be done online or by mail, depending on the state.' },
    { q: 'How long does a registered agent change take?', a: 'Processing times vary by state but are often completed within a few business days. Some states offer expedited processing for faster approval.' },
    { q: 'How much does it cost to change a registered agent?', a: 'State filing fees vary. Our service includes preparation, filing, and handling of all required documentation, helping you avoid errors or delays.' },
    { q: 'Can I be my own registered agent?', a: 'Yes, but it requires maintaining a physical address in the state, being available during business hours, and having your address on public record.' },
    { q: 'Can I change my registered agent online?', a: 'Many states allow online filing, while others require mailed forms. We ensure your filing follows the correct state-specific process.' },
    { q: 'Does changing a registered agent affect my EIN?', a: 'No. Changing your registered agent does not affect your EIN, tax status, or ownership structure.' },
    { q: 'Will my business address change when I change my registered agent?', a: 'Not necessarily. The registered agent address is separate from your principal business address unless you are acting as your own agent.' },
    { q: 'Do I need to notify anyone else after changing my registered agent?', a: 'In most cases, notifying the state is sufficient. However, you may also want to inform your attorney, bank, or compliance provider.' },
    { q: 'What happens if my registered agent resigns?', a: 'If your agent resigns, you must appoint a new registered agent immediately to remain compliant and avoid administrative penalties.' },
    { q: 'Can I change my registered agent in multiple states?', a: 'Yes. If your business operates in multiple states, you must update the registered agent separately in each state where you are registered.' },
    { q: 'Is a registered agent change the same as an amendment?', a: 'Not always. Some states treat registered agent updates as a separate filing, while others include it under Articles of Amendment.' },
    { q: 'How will I know my registered agent change is approved?', a: 'Once processed, the state will issue confirmation showing the updated registered agent details on your business record.' }
  ];

  const openModal = () => { setSelectedBusinessType(''); setIsModalOpen(true); };

  return (
    <div className="bg-white">
      <style>{animStyles}</style>

      <Helmet>
        <title>Registered Agent Change in USA | Update LLC or Corporation Agent</title>
        <meta name="description" content="Change your registered agent in the USA for LLCs and corporations. The Future Perfect Global helps you update registered agent details, file state forms, and stay compliant." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-management/registered-agent-change" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/registered-agent-change" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/registered-agent-change" hrefLang="x-default" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Registered Agent Change in USA | LLC & Corporation Compliance" />
        <meta property="og:description" content="Professional registered agent change services in the USA. Update your LLC or corporation agent quickly and remain state compliant." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-management/registered-agent-change" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Registered Agent Change Services USA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Registered Agent Change in USA | LLC & Corporation Services" />
        <meta name="twitter:description" content="Change or update your registered agent in the USA with expert compliance support from The Future Perfect Global." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Service","name":"Registered Agent Change Service USA","serviceType":"Registered Agent Change & Compliance Filing","url":"https://us.thefutureperfectglobal.com/business-management/registered-agent-change","description":"Registered agent change services for USA LLCs and corporations including state filing, compliance updates, and documentation support.","provider":{"@type":"Organization","name":"The Future Perfect Global – USA Business Setup","url":"https://us.thefutureperfectglobal.com/","logo":"https://thefutureperfectglobal.ae/uploads/images/logo1.webp"},"areaServed":{"@type":"Country","name":"United States"}}`}</script>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex items-center text-white overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80"
            alt="Change Registered Agent Service"
            className="w-full h-full object-cover scale-105"
            style={{ animation: 'float 20s ease-in-out infinite' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-slate-900/80"></div>
          {/* Cyan tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/30 via-transparent to-transparent"></div>
        </div>

        {/* Floating particles */}
        <div className="hero-particle w-72 h-72 top-10 right-10" style={{ animationDelay: '0s' }}></div>
        <div className="hero-particle w-48 h-48 bottom-20 left-16" style={{ animationDelay: '2s' }}></div>
        <div className="hero-particle w-32 h-32 top-1/2 right-1/3" style={{ animationDelay: '4s' }}></div>

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="anim-fade-up inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ animation: 'pulse-ring 1.5s ease-out infinite' }}></div>
              <span className="text-cyan-300 text-sm font-semibold tracking-widest uppercase">
                USA Registered Agent Services
              </span>
            </div>

            {/* H1 */}
            <h1 className="anim-fade-up delay-100 text-5xl md:text-6xl font-extrabold mb-6 leading-[1.08]">
              Change Your<br />
              Registered Agent<br />
              <span className="anim-shimmer">Quickly & Stay Compliant</span>
            </h1>

            {/* Sub */}
            <p className="anim-fade-up delay-200 text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Looking to <strong className="text-white">change your registered agent</strong> or switch to a
              more reliable <strong className="text-white">registered agent service</strong>?
              Future Perfect Global LLC makes the process simple and fast.
              We handle the filing, paperwork, and compliance requirements so your
              business remains legally protected.
            </p>

            {/* CTA row */}
            <div className="anim-fade-up delay-300 flex flex-wrap gap-4 mb-16">
              <button
                onClick={openModal}
                className="btn-primary anim-gradient-bg text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-2xl shadow-cyan-500/30 inline-flex items-center gap-3 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Learn More
              </button>
            </div>

            {/* Trust mini-stats */}
            <div className="anim-fade-up delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center card-hover">
                  <div className="text-3xl font-black text-cyan-400 mb-1">
                    <Counter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-gray-400 text-xs font-medium tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </section>

      {/* ── UPGRADE SERVICE ───────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 tracking-wide">
              <Award size={14} /> Premium Service
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              <ColorHeading text="Upgrade Your Registered Agent Service" />
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Upgrade to a reliable registered agent service and keep your business
              fully compliant with state regulations. Secure document handling,
              instant alerts, and professional compliance support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative anim-slide-r">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-200 rounded-full blur-3xl opacity-60"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80"
                  className="w-full object-cover"
                  alt="Registered agent service"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">State Compliant</div>
                    <div className="text-xs text-gray-500">All 50 States Covered</div>
                  </div>
                  <div className="ml-auto flex -space-x-2">
                    {[1,2,3].map(n => (
                      <div key={n} className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">{n}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((item, i) => (
                <div key={i} className={`bg-white p-6 rounded-2xl shadow-md card-hover border border-gray-100 anim-fade-up delay-${(i+1)*100}`}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 text-cyan-600 mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
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
              <p className="text-gray-400">Worldwide Business Owners & Founders</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <Star size={18} />, text: 'Serving Since 2018' },
                { icon: <Users size={18} />, text: 'Founder-Led' },
                { icon: <Award size={18} />, text: 'Independently Owned' },
              ].map((b, i) => (
                <div key={i} className="trust-badge flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-5 py-2.5 cursor-default">
                  <span className="text-cyan-400">{b.icon}</span>
                  <span className="text-white font-semibold text-sm">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY USE THIS SERVICE ─────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-cyan-50/60 via-white to-indigo-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1 anim-slide-r">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business owner working"
                className="rounded-3xl shadow-2xl w-full h-full object-cover relative"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                <CheckCircle2 size={14} /> Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10">
                <ColorHeading text="Why Use This Service" />
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Multi-State Business Expansion', desc: 'Expanding to multiple states requires registered agents in each jurisdiction. We cover all 50 states seamlessly.' },
                  { title: 'Save Time and Focus',           desc: 'Busy owners lacking time to manage legal correspondence efficiently. Let our experts handle the paperwork.' },
                  { title: 'Privacy Protection',            desc: 'Home-based businesses seeking privacy by keeping residential addresses off public records and legal filings.' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover anim-fade-up delay-${(i+1)*200}`}>
                    <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full p-2 flex-shrink-0 shadow-md shadow-cyan-200">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO CHANGE ────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                <FileText size={14} /> Step by Step
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                <ColorHeading text="How to Change Your Registered Agent" />
              </h2>
              <p className="text-gray-500 text-lg">Follow these simple steps or let us handle everything</p>
            </div>

            <div className="space-y-5 mb-14 relative">
              {/* Vertical line */}
              <div className="absolute left-7 top-14 bottom-14 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent hidden sm:block"></div>

              {[
                { title: "Visit Your Secretary of State's Website",   desc: "Navigate to your state's official Secretary of State website to access the necessary forms and filing portal." },
                { title: 'Search for "Change of Registered Agent"',   desc: 'Look for the specific forms or process required for changing your registered agent in your state.' },
                { title: 'Follow State-Specific Directions',           desc: 'Each state has varying requirements and procedures for changing your registered agent. Follow them carefully.' },
                { title: 'Complete Forms and Submit Fees',             desc: 'Fill out required paperwork and pay applicable state filing fees to complete the change successfully.' },
              ].map((step, i) => (
                <div key={i} className={`flex gap-6 rounded-2xl p-6 sm:p-8 border border-gray-200 bg-white step-card anim-fade-up delay-${(i+1)*100}`}>
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0 text-white shadow-lg shadow-cyan-200 relative z-10">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA box */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="anim-gradient-bg absolute inset-0"></div>
              <div className="relative p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-2 text-white flex items-center gap-3">
                    <Shield className="w-8 h-8 text-cyan-200" />
                    Or Let Us Handle It For You
                  </h3>
                  <p className="text-cyan-100 leading-relaxed">
                    States have varying requirements that can be complex. We simplify this process
                    by handling all paperwork and compliance requirements for you.
                  </p>
                </div>
                <button onClick={openModal} className="btn-primary bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-black hover:scale-105 transition-all shadow-xl inline-flex items-center gap-2 flex-shrink-0">
                  GET STARTED
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-cyan-50/40 to-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Shield size={14} /> FAQs
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              <ColorHeading text="Common Questions About Changing a Registered Agent" words={3} />
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about updating your registered agent</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50/80 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 pr-6">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === idx ? 'bg-cyan-100' : 'bg-gray-100'}`}>
                    {openFaq === idx
                      ? <ChevronUp className="w-5 h-5 text-cyan-600" />
                      : <ChevronDown className="w-5 h-5 text-gray-500" />
                    }
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>
            <div className="absolute inset-0 anim-gradient-bg opacity-20"></div>
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400/10 rounded-full"></div>

            <div className="relative p-12 md:p-16 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 text-cyan-300">
                <Star size={14} /> Best Value in the Industry
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <ColorHeading text="Switch to Our Service Today" />
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-3 max-w-2xl mx-auto">
                Professional registered agent service in all 50 states for just{' '}
                <span className="text-cyan-400 font-black">$119/year</span>
              </p>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Free first-year service included with select business formation packages
              </p>
              <button onClick={openModal} className="btn-primary anim-gradient-bg text-white px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-cyan-500/30 inline-flex items-center gap-3">
                ORDER NOW
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                {['No Hidden Fees', 'All 50 States', 'Instant Filing', '24/7 Support'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-cyan-500" /> {t}
                  </span>
                ))}
              </div>
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