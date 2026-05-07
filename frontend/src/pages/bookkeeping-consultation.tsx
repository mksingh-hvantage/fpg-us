import { Shield, ChevronDown, CheckCircle, CalendarCheck, LineChart, Users, ArrowRight, ClipboardCheck, Link, ReceiptText, UserCheck, Wallet, Clock, Lightbulb, ShieldCheck, Gift, MessageCircle, Rocket, Zap, TrendingUp, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import GetStartedModal from '../components/GetStartedModal';

// Helper: wraps last two words of a heading in cyan span
function ColorLastTwo({ text }: { text: string }) {
  const words = text.trim().split(' ');
  if (words.length <= 2) {
    return <span className="text-cyan-600">{text}</span>;
  }
  const main = words.slice(0, words.length - 2).join(' ');
  const last = words.slice(-2).join(' ');
  return (
    <>
      {main}{' '}
      <span className="text-cyan-600">{last}</span>
    </>
  );
}

// Animated counter hook

export default function BookkeepingConsultation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const steps = [
    { id: 1, title: "Book Your Free Tax Consultation", description: "Start with a quick consultation with experienced tax professionals and discover opportunities to reduce your tax burden." },
    { id: 2, title: "Get Expert Accounting Support", description: "Our certified accountants provide personalized tax strategies, bookkeeping, and financial advice tailored for your business." },
    { id: 3, title: "Simplify & Grow Your Finances", description: "Streamline your financial processes and gain insights that help your business grow while staying fully compliant." },
  ];

  const features = [
    { icon: ClipboardCheck, title: "Structured Bookkeeping & Financial Tracking", desc: "Maintain organized financial records with scheduled bookkeeping and clear performance summaries that help you understand your business cash flow and profitability." },
    { icon: ReceiptText, title: "Complete Business Tax Filing", desc: "Ensure your company tax returns are prepared accurately and submitted on time with the support of experienced tax professionals." },
    { icon: Wallet, title: "Individual Tax Reporting for Business Owners", desc: "We manage personal income tax reporting for entrepreneurs and single-member companies so your finances remain aligned and compliant." },
    { icon: Shield, title: "Ongoing Tax Compliance Monitoring", desc: "Receive proactive guidance to help your business follow tax regulations, avoid penalties, and stay prepared for upcoming filing requirements." },
    { icon: Link, title: "Secure Banking Integration Tools", desc: "Connect your business accounts with reliable digital tools that simplify transaction tracking and day-to-day financial management." },
    { icon: UserCheck, title: "Dedicated Accountant Support", desc: "Access knowledgeable accounting professionals who provide practical advice, financial insights, and strategies to strengthen your business finances." },
  ];

  const benefits = [
    { icon: Clock, title: "Save Valuable Time", desc: "Automated tax tracking and simplified financial workflows help entrepreneurs spend less time on paperwork and more time building their business." },
    { icon: Lightbulb, title: "Professional Financial Insights", desc: "Gain clear guidance from experienced tax professionals who help you understand deductions, manage liabilities, and improve financial decisions." },
    { icon: ShieldCheck, title: "Reliable Compliance Support", desc: "Stay ahead of tax deadlines and regulatory requirements with expert assistance designed to keep your business organized and protected." },
  ];

  const stepss = [
    { icon: MessageCircle, title: "Schedule a Tax Strategy Call", desc: "Connect with an experienced tax advisor to discuss your business structure, financial goals, and opportunities to reduce tax liabilities." },
    { icon: Zap, title: "Create Your Account Instantly", desc: "Sign up in minutes and access your secure dashboard where you can organize financial information and monitor tax-related activity." },
    { icon: Gift, title: "Explore the Platform Risk-Free", desc: "Use the full platform during your trial period to experience professional bookkeeping tools, reporting features, and expert support." },
    { icon: Rocket, title: "Continue With Confidence", desc: "Once your trial ends, continue using the service seamlessly to manage business taxes, maintain accurate records, and stay compliant year-round." },
  ];

  const faqs = [
    { q: "How much does bookkeeping and accounting cost?", a: "Our Starter package is $125/month and includes quarterly bookkeeping, business tax return, personal taxes (sole proprietorships & single-member LLCs only), compliance assistance, financial reporting, online tools and resources, up to two bank accounts, and expert accounting advice.\n\nOur Plus package is $249/month and includes monthly bookkeeping, business tax return, personal taxes (any entity type), dedicated bookkeeper/tax pro advice, compliance assistance, financial reporting, online tools and resources, up to four bank accounts, and tax planning sessions." },
    { q: "Are there any hidden costs?", a: "Never! We're all about transparency, and there are no hidden costs associated with our business accounting and bookkeeping service." },
    { q: "How long does setup take?", a: "You're ready to go as soon as you receive your username and password via email. Our team will guide you through the initial dashboard setup." },
    { q: "What resources are available?", a: "We provide comprehensive guides on tax filing, accountant selection, bookkeeping vs. accounting differences, and LLC tax forms. All resources are accessible through your dashboard." },
    { q: "What kind of support can I expect?", a: "We emphasize hands-on support via dashboard, email, phone, or chat with direct access to our accounting team. Your questions are answered by real experts who understand your business needs." },
  ];

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-up { animation: fadeUp 0.7s ease forwards; }
        .animate-fade-left { animation: fadeLeft 0.7s ease forwards; }
        .animate-fade-right { animation: fadeRight 0.7s ease forwards; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s; }
        .delay-5 { animation-delay: 0.75s; }
        .float { animation: float 4s ease-in-out infinite; }
        .float-delay { animation: float 4s ease-in-out infinite 1.5s; }
        .hero-shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .blob-shape {
          animation: blob 8s ease-in-out infinite;
        }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .gradient-text {
          background: linear-gradient(135deg, #0e7490, #06b6d4, #0891b2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(8, 145, 178, 0.12);
        }
        .feature-card-border {
          position: relative;
          overflow: hidden;
        }
        .feature-card-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, transparent 40%, rgba(8,145,178,0.3) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .glow-btn {
          position: relative;
          overflow: hidden;
        }
        .glow-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.25) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .glow-btn:hover::after { opacity: 1; }
        .stat-card {
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
        }
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #0891b2 30%, #06b6d4 50%, #0891b2 70%, transparent);
          border: none;
          margin: 0;
        }
        .trust-badge {
          background: rgba(8,145,178,0.08);
          border: 1px solid rgba(8,145,178,0.2);
        }
        .step-number {
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-grid-bg {
          background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 min-h-screen flex items-center py-12">
        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />

        {/* Animated blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 blob-shape pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400/15 blob-shape pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-slate-600/30 blob-shape pointer-events-none" style={{ animationDelay: '6s' }} />

        {/* Rotating ring */}
        <div className="absolute top-16 right-16 w-64 h-64 border border-cyan-500/20 rounded-full spin-slow pointer-events-none" />
        <div className="absolute top-24 right-24 w-48 h-48 border border-cyan-400/10 rounded-full spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

        {/* Shimmer overlay */}
        <div className="absolute inset-0 hero-shimmer pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left content */}
            <div className={heroVisible ? 'animate-fade-left' : 'opacity-0'}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-sm font-medium">Trusted by 500+ businesses nationwide</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-base">
                Stress-Free<br />
                <span className="gradient-text">Accounting</span> &<br />
                Bookkeeping
              </h1>

              <p className={`text-xl text-slate-300 mb-6 leading-relaxed ${heroVisible ? 'animate-fade-up delay-2' : 'opacity-0'}`}>
                Business accounting and bookkeeping services at a low monthly cost — so you can focus on what matters most.
              </p>

              <div className={`flex flex-wrap gap-4 ${heroVisible ? 'animate-fade-up delay-3' : 'opacity-0'}`}>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="glow-btn bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transform"
                >
                  Get Started Now
                </button>
                <button className="flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Trust row */}
              <div className={`flex flex-wrap items-center gap-6 mt-10 ${heroVisible ? 'animate-fade-up delay-4' : 'opacity-0'}`}>
                {[
                  { icon: CheckCircle, label: 'No hidden fees' },
                  { icon: Shield, label: 'Secure & compliant' },
                  { icon: Star, label: '4.9/5 rating' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-slate-300">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image + floating cards */}
            <div className={`relative ${heroVisible ? 'animate-fade-right delay-2' : 'opacity-0'}`}>
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 float">
                <img
                  src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business accounting professional"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>

              {/* Floating card 1 — bottom left */}
              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 float-delay z-10 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Fast Processing</p>
                  <p className="text-xs text-gray-500">1-2 business days</p>
                </div>
              </div>

              {/* Floating card 2 — top right */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 z-10 float border border-gray-100" style={{ animationDelay: '0.8s' }}>
                <p className="text-xs text-gray-500 mb-1">Monthly Savings</p>
                <p className="text-2xl font-black text-gray-900">$3,240</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600 font-semibold">+18% vs last year</span>
                </div>
              </div>

              {/* Floating card 3 — mid right */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-cyan-600 rounded-xl shadow-xl p-3 z-10 float-delay border border-cyan-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">100% Compliant</p>
                    <p className="text-cyan-200 text-xs">Always up-to-date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── WHY TRUST US ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">Why Choose Us</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="Why Businesses Trust Our Tax & Accounting Services" />
            </h2>
            <p className="text-gray-600 text-lg">
              Our experts help businesses simplify accounting, reduce tax liabilities, and gain better financial clarity for long-term growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-100 to-cyan-50 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              <img
                src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80"
                alt="Professional tax consultant helping clients"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>

            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 card-hover shadow-sm feature-card-border">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                      {step.id === 1 && <CalendarCheck className="w-6 h-6 text-cyan-600" />}
                      {step.id === 2 && <Users className="w-6 h-6 text-cyan-600" />}
                      {step.id === 3 && <LineChart className="w-6 h-6 text-cyan-600" />}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-cyan-600 tracking-wider uppercase">Step {step.id}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── FREE TRIAL CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-cyan-900 p-1 shadow-2xl">
            <div className="relative bg-slate-900 rounded-[20px] py-20 px-8 text-center overflow-hidden">
              {/* Decorative rings */}
              <div className="absolute -top-20 -left-20 w-64 h-64 border border-cyan-500/20 rounded-full" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-cyan-500/20 rounded-full" />
              <div className="absolute inset-0 hero-grid-bg opacity-20" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
                  <Star className="w-7 h-7 text-cyan-400" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto mb-6">
                  Simplify Your Business Taxes Without the Stress —{' '}
                  <span className="text-cyan-400">Start Your 30-Day Free Trial Today</span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                  Stop worrying about complicated tax filings and bookkeeping. Our professional accounting platform helps you manage taxes, track finances, and stay compliant.
                </p>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  className="glow-btn inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 text-lg"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-slate-500 text-sm mt-4">No credit card required • Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">What's Included</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="Services Included in Our Small Business Accounting Starter Plan" />
            </h2>
            <p className="text-lg text-gray-500">
              Designed for entrepreneurs and growing businesses, this accounting package provides the essential tools and professional expertise required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-100 card-hover shadow-sm feature-card-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── DASHBOARD / BENEFITS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left: mockup */}
            <div className="relative">
              <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl ring-1 ring-white/10">
                <div className="absolute top-3 left-4 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1603195827187-459ab02554a0?q=80"
                  alt="Business tax management dashboard"
                  className="rounded-2xl mt-4"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -top-8 right-4 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 w-60 float">
                <p className="text-sm text-gray-500 mb-1">Annual Tax Estimate</p>
                <p className="text-2xl font-black text-gray-900">$12,128</p>
                <div className="mt-3 space-y-1.5">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Filed</span><span className="font-semibold text-gray-700">67%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full w-2/3 transition-all" />
                  </div>
                </div>
              </div>

              {/* Bottom stat */}
              <div className="absolute -bottom-6 left-4 bg-cyan-600 p-4 rounded-2xl shadow-xl float-delay">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white font-bold text-sm">Tax Savings</p>
                    <p className="text-cyan-200 text-xs">Up 23% this quarter</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">Why It Works</span>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                <ColorLastTwo text="Smart Tax Management Solutions for Growing Businesses" />
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Managing taxes can feel overwhelming. Our accounting platform combines professional expertise with modern financial tools to simplify bookkeeping and improve tax planning.
              </p>

              <div className="space-y-5">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 card-hover shadow-sm">
                      <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">Getting Started</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              <ColorLastTwo text="Simple Steps to Manage Your Business Taxes Efficiently" />
            </h2>
            <p className="text-lg text-gray-500">
              Our platform simplifies accounting and tax management for entrepreneurs and growing companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* Left steps */}
            <div className="space-y-6">
              {stepss.slice(0, 2).map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 card-hover shadow-sm feature-card-border">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-cyan-600 tracking-wider uppercase">Step {index + 1}</span>
                      <h3 className="text-base font-semibold text-gray-900 mt-0.5 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-100/40 to-cyan-50/20 rounded-3xl transform scale-105 blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80"
                  alt="Mobile dashboard showing tax management"
                  className="relative w-72 rounded-3xl shadow-2xl ring-1 ring-gray-200"
                />
              </div>
            </div>

            {/* Right steps */}
            <div className="space-y-6">
              {stepss.slice(2, 4).map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 card-hover shadow-sm feature-card-border">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-cyan-600 tracking-wider uppercase">Step {index + 3}</span>
                      <h3 className="text-base font-semibold text-gray-900 mt-0.5 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-100">FAQ</span>
            <h2 className="text-5xl font-extrabold text-center text-gray-900">
              <ColorLastTwo text="Common Questions About Business Accounting" />
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-180 bg-cyan-600 border-cyan-600' : ''}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors ${openFaq === index ? 'text-white' : 'text-cyan-600'}`} />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a.split('\n\n').map((p, i) => <p key={i} className={i > 0 ? 'mt-3' : ''}>{p}</p>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 blob-shape" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 blob-shape" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Get a Free Online Tax Consultation with Experts
          </h2>
          <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
            Connect with professional tax consultants who can assist with tax returns, compliance, financial planning, and maximizing your tax savings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="glow-btn bg-white text-cyan-700 font-bold px-10 py-4 rounded-full text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform"
            >
              Get Started Now
            </button>
            <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all flex items-center gap-2">
              View Pricing <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-cyan-200 text-sm mt-6">30-day free trial • No credit card required</p>
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