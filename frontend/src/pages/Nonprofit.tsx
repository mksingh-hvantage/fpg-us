import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { Check, ShieldCheck,
  Briefcase,
  Bell,
  Users,
  BarChart3, FileText, Award, ChevronRight } from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    title: "Streamlined C Corporation Registration",
    description:
      "Register your C Corporation with a simplified online process. We assist with preparing and filing Articles of Organization and other required incorporation documents."
  },
  {
    icon: ShieldCheck,
    title: "Legal Document Templates",
    description:
      "Access professionally prepared business contract templates and essential legal documents so you can operate confidently without expensive legal fees."
  },
  {
    icon: Briefcase,
    title: "Fast EIN Application Support",
    description:
      "Apply for your Employer Identification Number (EIN) quickly. This allows your corporation to open bank accounts, hire employees, and manage taxes."
  },
  {
    icon: Users,
    title: "Registered Agent Service",
    description:
      "Receive a complimentary first year of registered agent service to help manage official state correspondence and compliance requirements."
  },
  {
    icon: Bell,
    title: "Compliance Alerts & Notifications",
    description:
      "Stay on track with automated reminders for filings, deadlines, and compliance updates so your corporation remains in good standing."
  },
  {
    icon: BarChart3,
    title: "Business Growth Tools",
    description:
      "Access a centralized dashboard where you can manage documents, services, and additional tools designed to support your company's growth."
  }
];

/* ─── Hero animation keyframes injected once ─── */
const heroStyles = `
  @keyframes nfp-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(6deg); }
  }
  @keyframes nfp-float2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(14px) rotate(-8deg); }
  }
  @keyframes nfp-pulse-ring {
    0%, 100% { opacity: 0.35; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.08); }
  }
  @keyframes nfp-fade-up {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes nfp-badge-pop {
    0%   { opacity: 0; transform: scale(0.8) translateY(6px); }
    70%  { transform: scale(1.06) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes nfp-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .nfp-float  { animation: nfp-float  5s ease-in-out infinite; }
  .nfp-float2 { animation: nfp-float2 6.5s ease-in-out infinite; }
  .nfp-pulse-ring { animation: nfp-pulse-ring 4s ease-in-out infinite; }

  .nfp-fade-up-1 { animation: nfp-fade-up 0.65s ease both; }
  .nfp-fade-up-2 { animation: nfp-fade-up 0.65s 0.15s ease both; }
  .nfp-fade-up-3 { animation: nfp-fade-up 0.65s 0.3s  ease both; }
  .nfp-badge    { animation: nfp-badge-pop 0.7s 0.05s ease both; }

  .nfp-shimmer-btn {
    background-size: 200% auto;
    animation: nfp-shimmer 3s linear infinite;
  }
`;

export default function Nonprofit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const openModal = () => { setSelectedBusinessType(''); setIsModalOpen(true); };

  return (
    <div className="flex flex-col min-h-screen antialiased">

      {/* Inject hero keyframes once */}
      <style>{heroStyles}</style>

      <Helmet>
        <title>Nonprofit Registration in USA – 501(c)(3) Formation | The Future Perfect Global</title>
        <meta name="description" content="Register a nonprofit organization in the USA with The Future Perfect Global. Expert support for 501(c)(3) formation, EIN application, IRS tax-exempt status, compliance, and governance." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/nonprofit" />
        <meta name="keywords" content="nonprofit registration USA, 501c3 formation USA, start a nonprofit in USA, nonprofit incorporation USA, tax exempt organization USA, IRS 501c3 application, EIN for nonprofit USA, nonprofit compliance" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/nonprofit" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/nonprofit" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nonprofit Registration in USA – 501(c)(3) Formation Services" />
        <meta property="og:description" content="Start a nonprofit organization in the USA with expert guidance. We assist with incorporation, 501(c)(3) tax-exempt status, EIN registration, and compliance." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/nonprofit" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Nonprofit Formation" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="USA Nonprofit & 501(c)(3) Formation Services by The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Nonprofit Registration in USA – 501(c)(3) Formation" />
        <meta name="twitter:description" content="Register your nonprofit in the USA with professional assistance. 501(c)(3) approval, EIN registration, and compliance support available." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Nonprofit Registration in USA",
          "url": "https://us.thefutureperfectglobal.com/nonprofit",
          "provider": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "description": "Professional nonprofit and 501(c)(3) formation services in the USA including incorporation, EIN registration, IRS tax-exempt status application, and compliance support.",
          "areaServed": ["United States","California","Texas","Florida","New York","Delaware","Nevada","Wyoming"],
          "serviceType": ["Nonprofit Incorporation USA","501(c)(3) Tax-Exempt Application","EIN Application","Nonprofit Compliance","Governance & Advisory Services"]
        }`}</script>
      </Helmet>

      {/* ═══════════════════════════════════════════
          ENHANCED HERO SECTION — animated
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-400 min-h-[540px] flex items-center">

        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-repeat opacity-10"
          style={{ backgroundImage: "url('/pattern.svg')" }}
        />

        {/* Decorative animated blobs */}
        <div
          className="nfp-pulse-ring absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/20 pointer-events-none"
        />
        <div
          className="nfp-pulse-ring absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-cyan-600/20 pointer-events-none"
          style={{ animationDelay: '2s' }}
        />

        {/* Floating geometric shapes */}
        <div
          className="nfp-float absolute top-10 right-[42%] w-10 h-10 rounded-xl bg-white/30 pointer-events-none"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="nfp-float2 absolute bottom-12 left-[38%] w-7 h-7 rounded-full bg-cyan-700/25 pointer-events-none"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="nfp-float absolute top-1/3 left-12 w-5 h-5 rounded bg-white/20 rotate-45 pointer-events-none"
          style={{ animationDelay: '1.8s' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT — text content */}
            <div className="max-w-4xl text-left">

              {/* Animated badge */}
              <div className="nfp-badge inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-cyan-700 font-semibold text-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-cyan-200">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                501(c)(3) Nonprofit Formation
              </div>

              <h1
                className="nfp-fade-up-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
              >
                Form a{' '}
                <span className="relative inline-block text-cyan-600">
                  Nonprofit
                  {/* animated underline */}
                  <span
                    className="absolute left-0 bottom-0 h-1 rounded-full bg-cyan-400/60"
                    style={{
                      width: '100%',
                      animation: 'nfp-pulse-ring 3s ease-in-out infinite',
                    }}
                  />
                </span>{' '}
                Organization
              </h1>

              <p className="nfp-fade-up-2 text-xl text-gray-800 mb-10 max-w-xl">
                Start your 501(c)(3) nonprofit and make a lasting difference.
                Achieve tax-exempt status easily.
              </p>

              {/* Trust chips */}
              <div className="nfp-fade-up-2 flex flex-wrap gap-3 mb-8">
                {['Fast Filing', 'IRS Approved Process', 'All 50 States', '500+ Nonprofits Formed'].map((chip) => (
                  <span
                    key={chip}
                    className="bg-white/60 backdrop-blur-sm text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full border border-white/70"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>

              <button
                onClick={openModal}
                className="nfp-fade-up-3 nfp-shimmer-btn inline-block text-white px-10 py-5 rounded-full font-bold text-lg uppercase shadow-lg shadow-cyan-600/50 hover:scale-105 active:scale-100 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(90deg,#0891b2 0%,#22d3ee 40%,#0e7490 70%,#0891b2 100%)',
                }}
              >
                Start Your Nonprofit Today
              </button>
            </div>

            {/* RIGHT — image card with floating badge overlay */}
            <div className="relative hidden md:block">
              {/* Main image card */}
              <div className="nfp-float2 bg-white/90 p-4 rounded-2xl shadow-2xl backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nonprofit teamwork"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>

              {/* Floating stat badge — top-left */}
              <div
                className="nfp-float absolute -top-5 -left-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-cyan-100"
                style={{ animationDelay: '1.2s' }}
              >
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Nonprofits Formed</p>
                  <p className="text-xl font-extrabold text-gray-900">500+</p>
                </div>
              </div>

              {/* Floating stat badge — bottom-right */}
              <div
                className="nfp-float2 absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-cyan-100"
                style={{ animationDelay: '0.8s' }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">IRS Approval Rate</p>
                  <p className="text-xl font-extrabold text-gray-900">99%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERT GUIDE SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              The Future Perfect Global is Your Expert Guide for Nonprofit{' '}
              <span className="text-cyan-600">Nonprofit Formation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle the complex paperwork and legal requirements so you can focus on your mission.
              Our streamlined process makes nonprofit formation simple and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                { title: 'Fast and Affordable Formation', desc: 'We expedite your nonprofit incorporation with competitive pricing and transparent fees. No hidden costs or surprise charges.' },
                { title: 'Complete 501(c)(3) Support', desc: 'From state incorporation to IRS tax-exempt status, we guide you through every step of the process with expert assistance.' },
                { title: 'Dedicated Support Team', desc: 'Get personalized assistance from our nonprofit specialists who understand the unique requirements of charitable organizations.' },
                { title: 'Compliance Made Easy', desc: 'Stay compliant with ongoing filing reminders, annual report assistance, and regulatory guidance tailored to nonprofits.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-cyan-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  'Preparation and filing of Articles of Incorporation',
                  'Registered agent service for 1 year',
                  'EIN (Employer Identification Number) acquisition',
                  'Customized bylaws and organizational documents',
                  '501(c)(3) application assistance',
                  'Lifetime customer support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT IS A NONPROFIT
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              What is a{' '}
              <span className="text-cyan-600">Nonprofit Organization?</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full" />
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-cyan-100 shadow-xl rounded-3xl p-10 lg:p-14 transition hover:shadow-2xl">
            <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                A nonprofit organization is a mission-driven entity created to support charitable, educational,
                religious, literary, or scientific causes. Unlike traditional businesses, nonprofits focus on
                community benefit—not profit-making. Many nonprofits apply for <strong>501(c)(3)</strong> status
                to operate as tax-exempt entities recognized by the IRS.
              </p>
              <div className="bg-cyan-50 border border-cyan-200 px-6 py-5 rounded-xl shadow-sm mb-6">
                <p className="text-gray-900 text-lg leading-relaxed">
                  With <strong>tax-exempt status</strong>, your nonprofit is not required to pay federal income taxes—
                  allowing all funds to be reinvested into your mission. Donors can also claim tax deductions, greatly
                  enhancing your fundraising potential.
                </p>
              </div>
              <p className="mb-0">
                Whether you're starting a charity, foundation, educational group, or religious organization, forming
                a nonprofit empowers you to create real impact with transparency and long-term credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BENEFITS OF C CORP (kept as-is per original)
      ═══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20" aria-labelledby="c-corp-benefits-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2
              id="c-corp-benefits-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
            >
              Benefits of Forming a C Corporation{' '}
              <span className="text-cyan-600">Corporation Online</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Entrepreneurs choose our online incorporation platform to start
              their C Corporations quickly and confidently. Our tools simplify
              registration, reduce administrative work, and provide ongoing
              support to help businesses grow.
            </p>
            <button
              onClick={openModal}
              className="mt-8 bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition shadow-lg"
            >
              Start Your C Corporation
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mb-6">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 STEPS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
            Form Your Nonprofit Organization Quickly in{' '}
            <span className="text-cyan-600">3 Simple Steps</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Choose the Right Nonprofit Organization Structure',
                body: 'Select the nonprofit organization type that best aligns with your mission, goals, and funding strategy. Different nonprofit structures offer unique benefits, but all are designed to operate as tax-exempt organizations under federal guidelines.',
                bullets: [
                  'Public charities and 501(c)(3) nonprofit organizations',
                  'Social advocacy and community impact organizations',
                  'Private foundations and professional associations',
                ],
              },
              {
                num: '02',
                title: 'Select the Nonprofit Formation Package That Fits Your Needs',
                body: 'Choose a nonprofit formation package designed to simplify the registration process. Whether you need basic incorporation support or additional tools to help manage and grow your nonprofit, our services provide flexible options for every organization.',
                bullets: [
                  'Essential nonprofit registration services',
                  'Advanced support for compliance and documentation',
                  'Affordable packages for nonprofit startups',
                ],
              },
              {
                num: '03',
                title: 'Provide Your Nonprofit Details and Submit Your Application',
                body: 'Complete our simple online form and share important details about your nonprofit organization. Our team will prepare and file the necessary incorporation documents so your nonprofit can begin operating legally and efficiently.',
                bullets: [
                  'Quick and secure online order process',
                  'Professional preparation of incorporation documents',
                  'State filing for nonprofit organization registration',
                ],
              },
            ].map(({ num, title, body, bullets }) => (
              <div key={num} className="bg-white rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {num}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{body}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AFTER YOU ORDER
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              What Happens After You{' '}
              <span className="text-cyan-600">Place Your Order?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Once you complete your order, our expert team springs into action to handle all the paperwork and legal requirements for your nonprofit formation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: FileText,
                title: 'We Review Your Information',
                body: 'Our specialists carefully review your submission to ensure accuracy and completeness before filing with the state.',
              },
              {
                Icon: Check,
                title: 'We File Your Paperwork',
                body: 'We prepare and file your Articles of Incorporation with your state and begin the process for your EIN and 501(c)(3) application.',
              },
              {
                Icon: Award,
                title: 'You Receive Your Documents',
                body: 'Once approved, we send you all official documents and guide you through next steps for operating your nonprofit successfully.',
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-100/40 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Track Your{' '}
                  <span className="text-cyan-600">Formation Progress</span>
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Stay informed every step of the way with real-time updates on your nonprofit formation status through your personalized dashboard.
                </p>
                <ul className="space-y-3">
                  {['Real-time status updates', 'Direct communication with your specialist', 'Instant access to completed documents'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-500">Formation Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">In Progress</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Hope Foundation</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Articles Filed</p>
                      <p className="text-xs text-gray-500">Completed Dec 14</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">EIN Processing</p>
                      <p className="text-xs text-gray-500">In progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-gray-400 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">501(c)(3) Application</p>
                      <p className="text-xs text-gray-500">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FUNDING SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-16">
            How to Fund{' '}
            <span className="text-cyan-600">Your Nonprofit</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Individual Donations',
                desc: 'Rely on tax-deductible contributions from individual donors and fundraising events.',
                svg: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>,
                fill: true,
              },
              {
                title: 'Grants & Foundation Funding',
                desc: 'Secure funding through formal grant applications to private foundations and public agencies.',
                svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5V3m5 2V3m-4 8h4m-4 4h4"/>,
                fill: false,
              },
              {
                title: 'Service Fees & Revenue',
                desc: 'Earn income through fees for programs, services, or product sales directly related to the mission.',
                svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>,
                fill: false,
              },
              {
                title: 'Corporate Sponsorships',
                desc: 'Partner with businesses through sponsorships, cause marketing, and corporate matching programs.',
                svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>,
                fill: false,
              },
            ].map(({ title, desc, svg, fill }) => (
              <div key={title} className="text-center p-6 border rounded-lg hover:bg-cyan-50 transition duration-300 bg-white">
                <div className="w-16 h-16 mx-auto bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill={fill ? 'currentColor' : 'none'} stroke={fill ? undefined : 'currentColor'} viewBox="0 0 24 24">
                    {svg}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
            Common Questions About Forming a{' '}
            <span className="text-cyan-600">Nonprofit Organization</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I Form a Nonprofit for Free?',
                a: 'While you can technically file paperwork yourself, most states charge filing fees ranging from $30-$200. Additionally, obtaining 501(c)(3) status requires IRS fees of $275-$600. Using a formation service ensures accuracy and saves time navigating complex requirements.',
              },
              {
                q: 'How Much Does It Cost to Start a Nonprofit?',
                a: 'State filing fees vary but typically range from $30-$200. The IRS filing fee for 501(c)(3) status is $275 (for Form 1023-EZ) or $600 (for Form 1023), depending on your organization\'s projected size and revenue. Professional formation services typically add $200-$500 to ensure proper filing.',
              },
              {
                q: 'When Type of Nonprofit Organization is Right for Me?',
                a: 'The most common type is a 501(c)(3) charitable organization, ideal for charitable, educational, religious, or scientific purposes. If you\'re focused on community benefit and want tax-deductible donations, a 501(c)(3) public charity is typically the best choice. Private foundations suit families or corporations making grants.',
              },
              {
                q: 'Are There Specific States for My State?',
                a: 'Yes, each state has unique requirements for nonprofit formation, including minimum board members, specific language in articles of incorporation, and registration procedures. The Future Perfect Global\'s experts are familiar with all 50 states\' requirements and ensure your formation complies with your state\'s specific regulations.',
              },
              {
                q: 'Can I Pay Myself from a Nonprofit?',
                a: 'Yes, nonprofit employees and directors can receive reasonable compensation for their work, just like a for-profit business. The key requirement is that the compensation must be fair, non-excessive, and fully documented. What you cannot do is distribute profits to owners or shareholders.',
              },
              {
                q: 'How Long Does It Take to Get 501(c)(3) Status?',
                a: 'IRS processing typically takes 3-6 months if you file the streamlined Form 1023-EZ, or longer for the full Form 1023. You can generally operate as a nonprofit and accept deductible donations while your application is pending, dating back to your incorporation date once approved.',
              },
              {
                q: 'Are There Hidden Costs?',
                a: 'At The Future Perfect Global, we believe in complete transparency. All fees are disclosed upfront with no hidden costs. Beyond our service fees and state/federal filing fees, you may have optional add-ons like expedited processing or additional compliance services, but these are always clearly presented as choices.',
              },
              {
                q: 'How Long Does It Take to Form a Nonprofit Organization?',
                a: 'State incorporation typically takes 2-4 weeks, though expedited options can reduce this to a few days. The full process including 501(c)(3) status can take 3-6 months total. With The Future Perfect Global, we handle all paperwork efficiently and keep you informed at every stage.',
              },
              {
                q: 'What is Included in the Nonprofit Formation Service?',
                a: 'Our comprehensive service includes preparation and filing of Articles of Incorporation, registered agent service for one year, EIN acquisition, customized bylaws, 501(c)(3) application assistance, compliance guidance, and lifetime customer support. Everything you need to launch successfully.',
              },
              {
                q: 'Do You Provide Leads on Grants?',
                a: 'While we don\'t provide direct grant leads, we do offer guidance on grant eligibility and can point you toward reputable grant databases and resources. Once your 501(c)(3) status is approved, you\'ll be eligible to apply for thousands of government and private foundation grants.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-white rounded-xl shadow-lg p-6 group open:shadow-2xl transition duration-300">
                <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center py-2">
                  {q}
                  <span className="text-cyan-600 group-open:rotate-45 transform transition duration-300 text-2xl">+</span>
                </summary>
                <p className="mt-4 text-gray-600 border-t pt-4 text-lg">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST / CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Chosen by 500+ Entrepreneurs Across{' '}
            <span className="text-cyan-200">All 50 States</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join the largest community of nonprofit founders who trust The Future Perfect Global to handle their formation and compliance needs with expertise and care.
          </p>
          <button
            onClick={openModal}
            className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-extrabold text-xl uppercase shadow-2xl hover:bg-gray-100 transition-colors transform hover:-translate-y-0.5"
          >
            Get Started Today
          </button>
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