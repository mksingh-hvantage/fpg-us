import {
  Mail,
  Shield,
  Clock,
  CreditCard,
  MapPin,
  FileText,
  X,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { US_STATES as states } from '../data/usStates';

export default function VirtualMailboxx() {
  const [selectedState, setSelectedState] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const popularStates = [
    'California', 'Delaware', 'Florida', 'Georgia', 'Texas', 'Wyoming'
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Real Street Address',
      description: 'Get a legitimate physical location for receiving all your business mail'
    },
    {
      icon: Mail,
      title: 'Mail Handling & Digital Scans',
      description: 'Unlimited correspondence management with instant digital scanning'
    },
    {
      icon: Shield,
      title: 'Encrypted Scans with 24/7 Access',
      description: 'Secure, always-available dashboard to view and manage your mail'
    },
    {
      icon: CreditCard,
      title: 'Mail Forwarding for Financial Documents',
      description: 'Automatic routing of checks, credit cards, and debit cards to your location'
    },
    {
      icon: FileText,
      title: 'Flat-Fee Pricing',
      description: 'Consistent monthly cost of $29 with no hidden fees or surprises'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with a virtual mailbox?',
      answer: 'Getting started is simple. You\'ll need a government-issued photo ID and proof of address documentation (such as a voter card, insurance document, vehicle registration, lease, or mortgage). Once you have these, you can complete the online authorization through our secure dashboard.'
    },
    {
      question: 'What\'s the difference between a virtual address and a virtual mailbox?',
      answer: 'A virtual address is a physical street location where you can receive USPS mail. A virtual mailbox is the secure digital inbox where you can view, organize, and download scans of your mail. Together, they provide a complete mail management solution.'
    },
    {
      question: 'What can I use my virtual mailbox for?',
      answer: 'You can use your virtual mailbox for receiving flat mail, digital record-keeping, accessing mail while traveling, listing on your website and marketing materials, opening bank accounts, and business contracting. However, it cannot be used for receiving packages, physical mail forwarding (except financial documents), or establishing residency.'
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
  <title>
    Virtual Mailbox Services in USA – Business Address & Mail Handling | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Get a virtual mailbox in the USA for your business. The Future Perfect Global offers secure mail handling, a professional US business address, mail forwarding, and compliance support for entrepreneurs and companies."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="virtual mailbox USA, virtual business address USA, mail forwarding services USA, business mailbox USA, virtual office mailbox USA, mail handling services USA, remote business address USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Virtual Mailbox Services in USA – Business Address & Mail Handling"
  />
  <meta
    property="og:description"
    content="Secure and reliable virtual mailbox services in the USA. Get a professional business address, mail scanning, and forwarding with The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Business Setup"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Virtual Mailbox Services in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Virtual Mailbox Services in USA – Business Address & Mail Handling"
  />
  <meta
    name="twitter:description"
    content="Manage your business mail remotely with secure virtual mailbox services and a professional US address from The Future Perfect Global."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Virtual Mailbox Services in USA",
      "url": "https://us.thefutureperfectglobal.com/business-management/virtual-mailbox",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Professional virtual mailbox services in the USA offering business address, mail scanning, forwarding, and secure mail handling for companies and entrepreneurs.",
      "areaServed": [
        "United States"
      ],
      "serviceType": [
        "Virtual Mailbox USA",
        "Mail Forwarding Services",
        "Business Address Services",
        "Remote Mail Handling"
      ]
    }`}
  </script>
</Helmet>

      {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-24">

  {/* background glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-300/30 blur-[120px] rounded-full"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
          <span className="text-bizee-cyan">Virtual Mailbox</span> for 
          Modern Businesses
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed mb-10">
          Manage your business mail from anywhere with our secure 
          <strong className="text-gray-900"> virtual mailbox and business address service</strong>. 
          Get a professional <strong>digital mailbox, mail scanning, and mail forwarding</strong> 
          designed for startups, remote teams, and digital entrepreneurs.
        </p>

        {/* FORM CARD */}
        <div className="bg-white/80 backdrop-blur-lg border border-gray-200 p-6 rounded-2xl shadow-xl max-w-xl">

          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Choose Your Business State
          </label>

          <div className="flex gap-3">

            <div className="relative flex-1">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 pr-10 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-700"
              >
                <option value="">Select a state...</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition">
              Get Your Address
            </button>

          </div>

        </div>

      </div>

      {/* RIGHT DASHBOARD MOCKUP */}
      <div className="relative">

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

          {/* top bar */}
          <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-300 ml-3">Virtual Mailbox</span>
          </div>

          <div className="p-6 space-y-4">

            {[1,2,3].map((i)=>(
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <Mail className="w-5 h-5 text-cyan-600 mt-1" />

                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-900">
                      Business Mail #{i}
                    </span>
                    <span className="text-xs text-gray-500">
                      Scanned Today
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    Secure digital scan of your incoming business mail.
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Everything You Need to Manage Your Mail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive mail management solution designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <X className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Important Limitation: No Packages Accepted</h4>
              <p className="text-gray-700">
                This service handles only letters and large envelopes. Packages of any size cannot be accepted or processed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings Section */}
      <section className="py-20 px-4 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Save Time, Focus on What Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wasting time on mail management and focus on what really matters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-5xl font-bold text-cyan-600 mb-3">75%</div>
              <p className="text-gray-600 leading-relaxed">
                of people's time is spent on unimportant tasks according to a 2023 study
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-5xl font-bold text-green-600 mb-3">2/3</div>
              <p className="text-gray-600 leading-relaxed">
                of business owners' time is spent on compliance and administrative management
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-5xl font-bold text-cyan-600 mb-3">90+</div>
              <p className="text-gray-600 leading-relaxed">
                minutes lost per day by small business owners on unproductive tasks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State Guides Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              State-by-State Regulatory Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get detailed compliance information for your state
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular States</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
  {popularStates.map((state) => (
    <a
      key={state}
      href={`/business-management/virtual-mailbox/${state.toLowerCase().replace(/\s+/g, "-")}`}
      className="px-6 py-4 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 font-semibold rounded-lg transition-colors duration-200 border-2 border-cyan-200 hover:border-cyan-300"
    >
      {state}
    </a>
  ))}
</div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">All States</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {states.map((state) => (
                <a href={`/business-management/virtual-mailbox/${state.toLowerCase().replace(/\s+/g, "-")}`}
                  key={state}
                  className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-colors duration-200 border border-gray-200 hover:border-gray-300 text-left"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our virtual mailbox service
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-cyan-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock Access to Your Mail Anytime, Anywhere
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            Sign up for The Future Perfect Global's Virtual Address Service today and take control of your correspondence from anywhere.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="px-10 py-4 bg-white hover:bg-gray-100 text-cyan-600 font-bold rounded-lg transition-colors duration-200 shadow-xl hover:shadow-2xl text-lg inline-flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
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