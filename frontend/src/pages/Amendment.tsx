import { FileEdit, Shield, Users, Building2, MapPin, Target, CheckCircle2, AlertCircle, Clock, FileCheck, ChevronUp, ChevronDown, ArrowRight, Star, Award, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

/* ─────────────────────────────────────────────
   Injected keyframe animations
───────────────────────────────────────────── */
const animStyles = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-36px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
}
@keyframes shimmercyan {
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
  70%  { transform: scale(1.4);  opacity: 0; }
  100% { transform: scale(1.4);  opacity: 0; }
}
@keyframes rotateSlow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes borderPulse {
  0%, 100% { border-color: rgba(16,185,129,.3); }
  50%       { border-color: rgba(16,185,129,.8); }
}

.au-fade-up   { animation: fadeUp .65s ease both; }
.au-fade-in   { animation: fadeIn .8s ease both; }
.au-slide-r   { animation: slideRight .65s ease both; }
.au-float     { animation: float 5s ease-in-out infinite; }

.au-shimmer {
  background: linear-gradient(90deg, #059669 0%, #34d399 35%, #06b6d4 55%, #059669 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmercyan 3s linear infinite;
}
.au-grad-btn {
  background: linear-gradient(270deg, #059669, #0d9488, #0891b2, #0d9488, #059669);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
}

.d-100 { animation-delay: .1s; }
.d-200 { animation-delay: .2s; }
.d-300 { animation-delay: .3s; }
.d-400 { animation-delay: .4s; }
.d-500 { animation-delay: .5s; }
.d-600 { animation-delay: .6s; }

/* Card hovers */
.au-card {
  transition: transform .28s ease, box-shadow .28s ease;
}
.au-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(5,150,105,.13);
}

/* Step card */
.au-step {
  transition: border-color .25s, box-shadow .25s, transform .25s;
}
.au-step:hover {
  border-color: #10b981;
  box-shadow: 0 6px 28px rgba(16,185,129,.13);
  transform: translateY(-4px);
}

/* FAQ */
.au-faq { transition: box-shadow .22s; }
.au-faq:hover { box-shadow: 0 4px 18px rgba(16,185,129,.1); }

/* Btn sweep */
.au-btn { position: relative; overflow: hidden; }
.au-btn::after {
  content: '';
  position: absolute; inset: 0;
  background: rgba(255,255,255,.15);
  transform: translateX(-100%);
  transition: transform .35s ease;
}
.au-btn:hover::after { transform: translateX(0); }

/* Particle */
.au-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(16,185,129,.12);
  animation: float 7s ease-in-out infinite;
}

/* When-to-file card */
.au-file-card {
  transition: border-color .25s, box-shadow .25s, transform .25s;
}
.au-file-card:hover {
  border-color: #10b981;
  box-shadow: 0 8px 28px rgba(16,185,129,.14);
  transform: translateY(-4px);
}
.au-file-card:hover .au-icon-wrap {
  transform: scale(1.1);
  background: #ecfdf5;
}
.au-icon-wrap { transition: transform .25s, background .25s; }
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
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
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
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Amendment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const openModal = () => { setSelectedBusinessType(''); setIsModalOpen(true); };

  const stats = [
    { value: 50,  suffix: '',  label: 'States Covered'      },
    { value: 500, suffix: '+', label: 'Amendments Filed'    },
    { value: 149, suffix: '$', label: 'Flat Fee'            },
    { value: 7,   suffix: '+', label: 'Years Experience'    },
  ];

  const matters = [
    { icon: <CheckCircle2 className="w-8 h-8 text-cyan-600" />, color: 'cyan', title: 'Legal Compliance',      desc: 'Updating your official records ensures adherence to state laws and prevents costly fines or penalties. Stay in good standing with your Secretary of State.' },
    { icon: <Shield       className="w-8 h-8 text-cyan-600"    />, color: 'cyan',    title: 'Liability Protection', desc: 'Filing amendments maintains your LLC or corporation\'s limited liability status through accurate documentation, protecting your personal assets.' },
    { icon: <FileCheck    className="w-8 h-8 text-cyan-600"    />, color: 'cyan',    title: 'Public Records Accuracy', desc: 'Stakeholders like banks, investors, and vendors rely on current information in public records to make informed business decisions.' },
    { icon: <Clock        className="w-8 h-8 text-cyan-600" />, color: 'cyan', title: 'Operational Efficiency', desc: 'Current records enable smooth business transactions requiring legal accuracy, from opening bank accounts to signing contracts.' },
  ];

  const whenToFile = [
    { icon: <FileEdit    className="w-8 h-8" />, title: 'Company Name Change',      description: 'Rebranding or updating your business name for better market clarity and recognition' },
    { icon: <MapPin      className="w-8 h-8" />, title: 'Address Change',           description: 'Relocating your business to a new physical location within the same state' },
    { icon: <Users       className="w-8 h-8" />, title: 'Registered Agent Update',  description: 'Hiring a new registered agent to handle legal mail and official correspondence' },
    { icon: <Building2   className="w-8 h-8" />, title: 'Membership Changes',       description: 'Adding or removing members due to ownership transfers or business disputes' },
    { icon: <Target      className="w-8 h-8" />, title: 'Business Purpose',         description: "Shifting or expanding your company's core business operations and objectives" },
    { icon: <AlertCircle className="w-8 h-8" />, title: 'Share Structure',          description: 'Modifying the number or type of authorized shares for your corporation' },
  ];

  const steps = [
    { step: '1', title: 'Determine Form',  description: 'We identify the correct amendment form required by your specific state' },
    { step: '2', title: 'Complete Form',   description: 'Our team fills out all required information accurately and completely' },
    { step: '3', title: 'Submit Filing',   description: 'We submit your amendment directly to your Secretary of State' },
    { step: '4', title: 'Confirmation',    description: 'Receive updates and official confirmation of your approved amendment' },
  ];

  const faqs = [
    { q: 'What are Articles of Amendment?', a: 'Articles of Amendment are official documents filed with the Secretary of State to record changes made to an existing LLC or corporation. They ensure your updated business information is legally recognized.' },
    { q: 'When do I need to file Articles of Amendment?', a: 'You should file an amendment whenever you change critical business details such as your company name, registered agent, office address, ownership structure, or authorized shares.' },
    { q: 'How long does it take to process Articles of Amendment?', a: 'Processing times vary by state but typically range from a few business days to 2–4 weeks. Expedited options may be available in certain states.' },
    { q: 'How much does it cost to file Articles of Amendment?', a: 'State filing fees vary by state. Our flat $149 service includes document preparation, filing, and applicable state fees, so there are no surprises.' },
    { q: 'Can I change my registered agent through an amendment?', a: 'Yes. Changing your registered agent is one of the most common reasons businesses file Articles of Amendment.' },
    { q: 'Do I need to file amendments in more than one state?', a: 'If your business is registered in multiple states as a foreign entity, you may need to update records in each applicable state.' },
    { q: 'What happens if I dont file required amendments?', a: 'Failure to file amendments can result in penalties, loss of good standing, rejected contracts, or administrative dissolution of your business.' },
    { q: 'Can I file Articles of Amendment myself?', a: 'Yes, but filing errors can cause delays or rejections. Using a professional service ensures accuracy and saves time.' },
    { q: 'What information is required to file an amendment?', a: "You'll need your current business details, the exact changes being made, and company identification information such as your entity number." },
    { q: 'Does changing my business name require an amendment?', a: 'Yes. A legal business name change must be filed with the state through Articles of Amendment before you can update banks, licenses, or contracts.' },
    { q: 'Are Articles of Amendment the same as an annual report?', a: 'No. Annual reports are recurring compliance filings, while Articles of Amendment are used only when making changes to business information.' },
    { q: 'Will my EIN change after filing an amendment?', a: "In most cases, no. However, major structural changes may require IRS notification. We'll guide you if additional steps are needed." },
    { q: 'Can amendments be filed online?', a: 'Many states allow online filing, while others require mailed forms. We handle the correct filing method for your state.' },
    { q: 'Is filing an amendment legally required?', a: 'Yes, if certain changes occur. States require accurate, up-to-date business records to maintain compliance.' },
    { q: 'How will I know when my amendment is approved?', a: "Once approved, you'll receive official state confirmation and stamped documents via email." },
  ];

  return (
    <div className="flex flex-col bg-white">
      <style>{animStyles}</style>

      <Helmet>
        <title>Company Amendment Filing in USA | LLC & Corporation Changes</title>
        <meta name="description" content="File company amendments in the USA for LLCs and corporations. Update business name, address, members, managers, or activities with The Future Perfect Global." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-management/amendment" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/amendment" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/amendment" hrefLang="x-default" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Company Amendment Filing in USA | LLC & Corporation Updates" />
        <meta property="og:description" content="Professional company amendment services in the USA. Amend LLC or corporation details such as name, address, members, or business activities." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-management/amendment" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="Company Amendment Services USA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Company Amendment Filing in USA | LLC & Corporation Changes" />
        <meta name="twitter:description" content="Update or amend your LLC or corporation details in the USA with expert compliance support from The Future Perfect Global." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Service","name":"Company Amendment Filing Service USA","serviceType":"LLC & Corporation Amendment Filing","url":"https://us.thefutureperfectglobal.com/business-management/amendment","description":"Company amendment filing services in the USA for LLCs and corporations including changes to name, address, ownership, management, and business activities.","provider":{"@type":"Organization","name":"The Future Perfect Global – USA Business Setup","url":"https://us.thefutureperfectglobal.com/","logo":"https://thefutureperfectglobal.ae/uploads/images/logo1.webp"},"areaServed":{"@type":"Country","name":"United States"}}`}</script>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business amendment"
            className="w-full h-full object-cover"
            style={{ animation: 'float 22s ease-in-out infinite' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/92 via-cyan-900/85 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Decorative rotating ring */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-cyan-400/15 rounded-full hidden lg:block" style={{ animation: 'rotateSlow 30s linear infinite' }}></div>
        <div className="absolute top-28 right-28 w-48 h-48 border border-cyan-400/10 rounded-full hidden lg:block" style={{ animation: 'rotateSlow 20s linear infinite reverse' }}></div>

        {/* Floating particles */}
        <div className="au-particle w-80 h-80 top-10 right-1/4" style={{ animationDelay: '0s' }}></div>
        <div className="au-particle w-48 h-48 bottom-24 left-10" style={{ animationDelay: '2.5s' }}></div>
        <div className="au-particle w-28 h-28 top-1/2 right-12" style={{ animationDelay: '4s' }}></div>

        {/* Vertical accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="au-fade-up inline-flex items-center gap-2.5 bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ animation: 'pulseRing 1.6s ease-out infinite' }}></div>
              <FileEdit className="w-4 h-4 text-cyan-300" />
              <span className="text-cyan-200 text-sm font-semibold tracking-widest uppercase">Official State Filing Service</span>
            </div>

            {/* H1 */}
            <h1 className="au-fade-up d-100 text-5xl md:text-6xl font-black mb-6 leading-[1.06] text-white">
              Articles of<br />
              <span className="au-shimmer">Amendment</span>
            </h1>

            {/* Sub */}
            <p className="au-fade-up d-200 text-lg md:text-xl text-cyan-100/90 mb-10 leading-relaxed max-w-2xl">
              Keep your business <strong className="text-white">legally compliant</strong> with official amendments to your{' '}
              <strong className="text-white">Articles of Incorporation</strong> or Organization. Fast, accurate, and handled end-to-end.
            </p>

            {/* CTAs */}
            <div className="au-fade-up d-300 flex flex-wrap gap-4 mb-16">
              <button
                onClick={openModal}
                className="au-btn au-grad-btn text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-2xl shadow-cyan-500/30 inline-flex items-center gap-3 hover:scale-105"
              >
                File Amendment — $149
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                Learn More
              </button>
            </div>

            {/* Stats row */}
            <div className="au-fade-up d-400 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center au-card">
                  <div className="text-3xl font-black text-cyan-400 mb-1">
                    {s.suffix === '$' ? `$${s.value}` : <Counter end={s.value} suffix={s.suffix} />}
                  </div>
                  <div className="text-gray-400 text-xs font-medium tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </section>

      {/* ── UNDERSTANDING ARTICLES ───────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Award size={14} /> What Are They?
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              <ColorHeading text="Understanding Articles of Amendment" />
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Articles of Amendment are formal filings submitted to the state whenever a business needs to modify details contained in its original formation documents, such as the Articles of Incorporation or the Articles of Organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="w-12 h-12 text-cyan-600" />, color: 'cyan', title: 'For Corporations', desc: 'Corporations file amendments to their Articles of Incorporation when making changes to fundamental company information like name, purpose, or share structure.' },
              { icon: <Building2 className="w-12 h-12 text-cyan-600" />, color: 'cyan',    title: 'For LLCs',        desc: 'LLCs file amendments to their Articles of Organization when updating member information, business purpose, or other key details in their formation documents.' },
            ].map((item, i) => (
              <div key={i} className={`au-card bg-gradient-to-br from-${item.color}-50 to-cyan-50 p-8 rounded-3xl border-2 border-${item.color}-200`}>
                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-cyan-50/70 via-white to-cyan-50/50 relative">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <CheckCircle2 size={14} /> Importance
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              <ColorHeading text="Why Filing Amendments Matters" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keeping your business records current isn't just paperwork — it's essential protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {matters.map((item, i) => (
              <div key={i} className={`au-card bg-white p-8 rounded-3xl shadow-md border border-gray-100 au-fade-up d-${(i+1)*100}`}>
                <div className="flex items-start gap-5">
                  <div className={`flex-shrink-0 w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center shadow-sm`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TO FILE ─────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <FileEdit size={14} /> Triggers
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              <ColorHeading text="When You Need to File" words={3} />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              File Articles of Amendment whenever your business undergoes significant changes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {whenToFile.map((item, idx) => (
              <div key={idx} className={`au-file-card group bg-gradient-to-br from-cyan-50 to-cyan-50 p-7 rounded-3xl border-2 border-cyan-200 au-fade-up d-${(idx % 3 + 1) * 100}`}>
                <div className="au-icon-wrap w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-cyan-600 mb-5 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-STEP PROCESS ───────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16,185,129,.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 shadow-sm">
              <Zap size={14} /> How It Works
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              <ColorHeading text="Simple 4-Step Filing Process" words={2} />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all the complexity so you can focus on running your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className={`au-step bg-white p-8 rounded-3xl shadow-md border-2 border-cyan-100 h-full au-fade-up d-${(idx+1)*100}`}>
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg shadow-cyan-200">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3.5 transform -translate-y-1/2 w-7 h-7 bg-cyan-400 rounded-full items-center justify-center z-10 shadow">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-14 max-w-2xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="au-grad-btn absolute inset-0"></div>
              <div className="relative p-8 flex flex-col sm:flex-row items-center gap-6 text-white">
                <div className="flex-1 text-center sm:text-left">
                  <div className="font-black text-xl mb-1">Ready to file?</div>
                  <p className="text-cyan-100 text-sm">We handle all paperwork, state-specific forms & fees.</p>
                </div>
                <button onClick={openModal} className="au-btn bg-white text-cyan-600 px-8 py-3.5 rounded-full font-black hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2 flex-shrink-0">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Shield size={14} /> FAQs
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
              <ColorHeading text="Common Questions About Articles of Amendment" words={3} />
            </h2>
            <p className="text-xl text-gray-600">
              Clear answers to the most frequently asked amendment filing questions
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="au-faq bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50/80 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 pr-6">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === idx ? 'bg-cyan-100' : 'bg-gray-100'}`}>
                    {openFaq === idx
                      ? <ChevronUp   className="w-5 h-5 text-cyan-600" />
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
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 via-cyan-700 to-slate-800"></div>
            <div className="au-grad-btn absolute inset-0 opacity-30"></div>
            {/* Decor circles */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/10 rounded-full"></div>

            <div className="relative p-12 md:p-16 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-cyan-500/25 border border-cyan-400/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 text-cyan-200">
                <Star size={14} /> Professional Filing Service
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-5">
                <ColorHeading text="Ready to Update Your Business Records?" words={2} />
              </h2>
              <p className="text-xl mb-10 text-cyan-100 leading-relaxed max-w-2xl mx-auto">
                Keep your business compliant and protected with professional amendment filing
              </p>
              <button
                onClick={openModal}
                className="au-btn au-grad-btn text-white px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-cyan-500/30 inline-flex items-center gap-3"
              >
                File Your Amendment
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-cyan-200">
                {['Flat $149 Fee', 'All 50 States', 'No Hidden Charges', 'Expert Review'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-cyan-400" /> {t}
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