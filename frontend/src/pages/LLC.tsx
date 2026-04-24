import { useState } from 'react';
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

      <section className="bg-cyan-100/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-black text-gray-900 mb-6 leading-xl">
                How to Start an LLC in 2026: Complete Step-by-Step Guide
              </h1>

              <p className="text-xl text-gray-700 mb-8">
                Learn how to form a Limited Liability Company (LLC) quickly and correctly. 
                This complete LLC formation guide covers business name search, 
                Articles of Organization filing, registered agent requirements, 
                EIN registration, and state compliance — everything you need to launch your business legally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setSelectedBusinessType('');
                    setIsModalOpen(true);
                  }}
                  className="bg-cyan-500 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Start Your LLC Today
                </button>

                <a href="#testimonials" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-50 transition-all">
                  What Customers Are Saying About Us
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                <span className="font-semibold">Trusted LLC Formation Experts Since 2016</span> | 
                500+ Businesses Formed
              </p>
            </div>

            {/* RIGHT VIDEO SECTION */}
            <div className="relative">
              <div
                onClick={() => setIsVideoOpen(true)}
                className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center relative cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-amber-500/20"></div>

                <div className="relative z-10 text-white text-center">
                  <Play className="w-20 h-20 mx-auto mb-4 opacity-90 group-hover:scale-110 transition-transform cursor-pointer" />
                  <p className="text-2xl font-bold">WATCH:</p>
                  <p className="text-3xl font-black">HOW TO START AN LLC IN 2026</p>
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
              Start an LLC Online – Fast & Affordable LLC Formation Services
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              How to Start an LLC: Complete LLC Formation & Business Registration Guide
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
              Start Your LLC: Step-by-Step LLC Formation Guide
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Types of LLCs: Choose the Right LLC Business Structure
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Explore the different types of LLCs, including Single-Member LLC, Multi-Member LLC, Professional LLC (PLLC), and Series LLC. Understanding each LLC structure helps you select the best option for liability protection, tax flexibility, and business growth.
              </p>
            </div>
            <div className="space-y-4">
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Benefits of an LLC: Why Choose a Limited Liability Company?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key benefits of forming an LLC, including personal asset protection, pass-through taxation, flexible management structure, and enhanced business credibility. Learn why a Limited Liability Company is one of the most popular business structures for entrepreneurs and small business owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-amber-50 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-black text-white">+</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">Pros</h3>
              </div>
              <ul className="space-y-6">
                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Personal Asset Protection</h4>
                  <p className="text-gray-700">
                    One of the biggest benefits of an LLC is limited liability protection. Your personal assets — including your home, car, and savings — are protected from business debts, lawsuits, and financial obligations. Only the LLC’s business assets are legally at risk.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Pass-Through Tax Benefits</h4>
                  <p className="text-gray-700">
                    LLCs benefit from pass-through taxation, meaning business profits and losses are reported on the owners’ personal tax returns. This structure helps avoid double taxation and simplifies small business tax filing.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible LLC Management Structure</h4>
                  <p className="text-gray-700">
                    Choose between member-managed or manager-managed LLC structures. Unlike corporations, LLCs have fewer compliance requirements, minimal paperwork, and greater operational flexibility.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Professional Business Credibility</h4>
                  <p className="text-gray-700">
                    Forming an LLC enhances your company’s credibility with customers, vendors, banks, and partners. It shows professionalism and a serious commitment to operating a legally registered business.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible Profit & Ownership Distribution</h4>
                  <p className="text-gray-700">
                    LLC members can distribute profits in ways that don’t strictly match ownership percentages. This flexibility, defined in the LLC operating agreement, allows customized financial arrangements among members.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-black text-white">−</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">Cons</h3>
              </div>
              <ul className="space-y-6">
                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">LLC Self-Employment Taxes</h4>
                  <p className="text-gray-700">
                    LLC owners (members) must pay self-employment taxes on business profits under pass-through taxation rules. This can increase your overall tax liability, though choosing S Corporation (S-Corp) tax election may help reduce self-employment tax obligations.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">State LLC Requirements & Regulations</h4>
                  <p className="text-gray-700">
                    LLC formation rules vary by state, including filing fees, annual report requirements, franchise taxes, and compliance obligations. Understanding your state’s LLC laws is essential to maintain good standing and avoid penalties.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">LLC Duration & Dissolution Rules</h4>
                  <p className="text-gray-700">
                    In some states, an LLC may be dissolved if a member withdraws or passes away unless an operating agreement outlines continuity provisions. A properly drafted LLC operating agreement helps protect long-term business stability.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">LLC vs Corporation: Raising Capital Limits</h4>
                  <p className="text-gray-700">
                    Unlike corporations, LLCs cannot issue stock shares, which may limit venture capital funding opportunities. However, LLC membership interests can still be transferred or sold to investors under structured agreements.
                  </p>
                </li>

                <li>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">LLC Annual Fees, Reports & Compliance</h4>
                  <p className="text-gray-700">
                    Most states require LLCs to file annual or biennial reports and pay recurring franchise taxes or state fees to remain compliant. Annual LLC maintenance costs typically range from $50 to several hundred dollars depending on the state.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Complete LLC Formation & Ongoing Business Support You Can Rely On
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Form an LLC by State: LLC Filing Requirements & Fees Guide
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
              Frequently Asked Questions
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Form an LLC in Any State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
              'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
              'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
              'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
              'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
              'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
              'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
              'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
              'Wisconsin', 'Wyoming'
            ].map(state => (
              <a
                key={state}
                href={`#state-${state.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-cyan-500 text-sm font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white"
              >
                {state}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-500 via-cyan-600 to-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Form Your LLC?</h2>
          <p className="text-2xl mb-10 opacity-95">
            Join over 500+ entrepreneurs who have launched their businesses with The Future Perfect Global
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => {
                    setSelectedBusinessType('');
                    setIsModalOpen(true);
                  }} className="bg-white text-cyan-500 px-12 py-5 rounded-full font-black text-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Start My LLC Today
            </button>
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
