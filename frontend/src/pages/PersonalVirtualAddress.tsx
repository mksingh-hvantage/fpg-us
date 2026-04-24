import {
  Mail,
  Shield,
  Globe,
  Bell,
  Lock,
  Check,
  Smartphone,
  Users,
  Eye,
  CreditCard,
  ChevronDown,
  Star,
  AlertCircle,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function PersonalVirtualAddress() {
    const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: Shield,
      title: 'Total Privacy',
      description: 'Protect your residential address from public exposure and keep your personal information safe'
    },
    {
      icon: Zap,
      title: 'Unlimited Handling & Digital Records',
      description: 'Unlimited mail processing with permanent digital storage. Records retained indefinitely unless you delete them'
    },
    {
      icon: Globe,
      title: 'Access Anytime, Anywhere',
      description: 'Manage your mail online from anywhere in the world without visiting a physical mailbox'
    },
    {
      icon: Lock,
      title: 'Secure Mail Scanning',
      description: 'Proprietary scanning system with no third-party access. Uploaded securely to your private dashboard'
    }
  ];

  const audiences = [
    { icon: Smartphone, title: 'Digital Nomads', description: 'Maintain a stable address for banking and shopping while traveling' },
    { icon: Users, title: 'Remote Workers', description: 'Need a professional mailing address for business communications' },
    { icon: Eye, title: 'Privacy Seekers', description: 'Keep residential addresses private from clients and public records' },
    { icon: Shield, title: 'Doxxing Protection', description: 'Enhanced security against personal information exposure' },
    { icon: Globe, title: 'International Travelers', description: 'Maintain U.S. mail access while living or traveling abroad' },
    { icon: Mail, title: 'Junk Mail Elimination', description: 'Control what mail you receive and eliminate unwanted correspondence' }
  ];

  const setupSteps = [
    {
      number: '1',
      title: 'Select State Location',
      description: 'Choose which state you want your virtual address in'
    },
    {
      number: '2',
      title: 'Complete USPS Form 1583',
      description: 'Submit government-issued photo ID and address verification document'
    },
    {
      number: '3',
      title: 'Update Your Accounts',
      description: 'Update your mailing address with banks, retailers, and other services'
    },
    {
      number: '4',
      title: 'Start Using Your Address',
      description: 'Login to your dashboard and begin receiving mail immediately'
    }
  ];

  const requirements = [
    { icon: Check, text: 'Government-issued photo ID (driver\'s license or passport)' },
    { icon: Check, text: 'Address verification document (lease, mortgage, insurance policy, voter card, or vehicle registration)' },
    { icon: Check, text: 'Must be valid and unexpired' },
    { icon: Check, text: 'Account activated within minutes of approval' }
  ];

  const faqs = [
    {
      question: 'Can I use this address to establish legal residency?',
      answer: 'No, a virtual address cannot be used to establish legal residency. This service is designed for mail management and privacy purposes only. For legal residency requirements, you will need a physical residential address.'
    },
    {
      question: 'Do I need to use my legal name or can I use my DBA?',
      answer: 'You must provide your legal name for mail receipt. Sole proprietors cannot use a DBA (Doing Business As) name for this service. Mail will be received under your legal name only.'
    },
    {
      question: 'What happens if I receive packages?',
      answer: 'We do not accept packages of any size. Only letters and large envelopes are processed through our virtual address service. Any packages received at the facility will be returned to sender.'
    },
    {
      question: 'How do I receive mail forwarding?',
      answer: 'We forward checks and cards to a U.S. address that you provide. Other mail is scanned and available for viewing in your secure dashboard. We do not forward all mail types.'
    },
    {
      question: 'Will I get email notifications when new mail arrives?',
      answer: 'Yes, you will receive email alerts notifying you when new mail arrives and is scanned. You can also login to your dashboard at any time to check for new mail.'
    },
    {
      question: 'What is USPS Form 1583 and why do I need it?',
      answer: 'Form 1583 is a federal compliance requirement that authorizes us as a Commercial Mail Receiving Agency (CMRA) to receive mail on your behalf. It requires valid government-issued ID and address verification. Notarization is no longer required.'
    },
    {
      question: 'How long are my scanned mail documents kept?',
      answer: 'Your scanned mail is stored in your secure dashboard for as long as you maintain your subscription. Physical mail is shredded within 1-2 weeks using enterprise-grade disposal methods. You can delete scanned documents anytime.'
    },
    {
      question: 'Can multiple people use the same address?',
      answer: 'Each virtual address is assigned to one individual. Mail is received under the subscriber\'s legal name only. If you need additional addresses, you\'ll need separate subscriptions.'
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
  <title>
    Personal Virtual Address in USA – Secure Mail & Address Services | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Get a personal virtual address in the USA for mail handling, privacy protection, and convenience. The Future Perfect Global provides secure virtual address services with mail forwarding support."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/virtual-address/personal"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="personal virtual address USA, virtual address for individuals, US virtual address service, mail forwarding USA, personal mailing address USA, virtual mailbox USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/virtual-address/personal"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/virtual-address/personal"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Personal Virtual Address in USA – Secure & Reliable"
  />
  <meta
    property="og:description"
    content="Secure a personal virtual address in the USA with professional mail handling and forwarding services from The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/virtual-address/personal"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Virtual Address Services"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Personal Virtual Address in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Personal Virtual Address in USA"
  />
  <meta
    name="twitter:description"
    content="Looking for a personal virtual address in the USA? Get secure mail handling, privacy protection, and forwarding services."
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
      "name": "Personal Virtual Address in USA",
      "url": "https://us.thefutureperfectglobal.com/virtual-address/personal",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Personal virtual address services in the USA including secure mail handling, forwarding, and privacy protection.",
      "areaServed": ["United States"],
      "serviceType": [
        "Personal Virtual Address",
        "Virtual Mailbox Service",
        "Mail Forwarding USA",
        "Privacy Protection Address"
      ]
    }`}
  </script>
</Helmet>

      <section className="bg-gradient-to-br from-cyan-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Your Personal Virtual Address, Anywhere
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Unlimited mail handling and digital access for just <span className="text-cyan-600 font-bold">$29/month</span>
            </p>
            <p className="text-lg text-gray-600 mb-10">
              Maintain total privacy while staying connected from anywhere in the world
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform transition hover:scale-105">
                GET PERSONAL VIRTUAL ADDRESS
              </a>
              <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-white hover:bg-gray-50 text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg border-2 border-cyan-600 shadow-lg transform transition hover:scale-105">
                Get Started
              </button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Month-to-Month</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>No Long-Term Commitment</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Easy Setup</span>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="ml-3 text-2xl font-bold text-gray-900">4.7/5</span>
                <span className="text-gray-600 ml-2">Excellent</span>
              </div>
            </div>
            <div className="text-center text-gray-700">
              <p className="font-semibold">Trusted by thousands of individuals</p>
              <p className="text-sm mt-2">23,702 Trustpilot Reviews • 143,360 Shopper Approved Ratings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for privacy, security, and accessible mail management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-red-800 mb-2">Important Limitations</h4>
                <ul className="text-red-700 space-y-2">
                  <li>• Cannot establish legal residency with a virtual address</li>
                  <li>• Must use legal name (not DBA for sole proprietors)</li>
                  <li>• We do not accept packages of any size</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Who Uses Personal Virtual Addresses?
            </h2>
            <p className="text-xl text-cyan-100">
              Perfect for various lifestyles and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-300 transition p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <audience.icon className="w-8 h-8 text-cyan-600 mr-3" />
                  <h3 className="text-lg text-black font-bold">{audience.title}</h3>
                </div>
                <p className="text-gray-800 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              How It Works: Simple 4-Step Setup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your personal virtual address in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {setupSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 text-white p-8 rounded-2xl shadow-xl"
              >
                <div className="absolute -top-6 -left-6 bg-yellow-400 text-cyan-900 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-cyan-100 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documentation</h3>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-cyan-600 rounded-full p-1 flex-shrink-0 mt-1">
                    <req.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{req.text}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600 italic">
              All verification is completed securely and your account is activated within minutes of approval
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Mail Handling Process
            </h2>
            <p className="text-xl text-gray-600">
              Complete transparency and security at every step
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg flex items-start space-x-4">
              <Mail className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Mail Arrival</h4>
                <p className="text-gray-700">Mail arrives at our secure facility and is processed immediately</p>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg flex items-start space-x-4">
              <Bell className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Instant Notification</h4>
                <p className="text-gray-700">You receive an email alert when your mail is scanned and uploaded</p>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg flex items-start space-x-4">
              <Lock className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Secure Dashboard</h4>
                <p className="text-gray-700">View high-resolution color scans in your secure online dashboard</p>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg flex items-start space-x-4">
              <CreditCard className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Optional Forwarding</h4>
                <p className="text-gray-700">Request checks and cards to be forwarded to your U.S. address</p>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg flex items-start space-x-4">
              <Shield className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Secure Disposal</h4>
                <p className="text-gray-700">Physical mail shredded within 1-2 weeks using enterprise-grade methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about personal virtual addresses
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-cyan-600 flex-shrink-0 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'py-6 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed border-t pt-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Reclaim Your Privacy?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-cyan-100">
            Personal virtual address for just <span className="font-bold text-yellow-300">$29/month</span>
          </p>
          <p className="text-lg mb-10 text-cyan-100">
            Month-to-month • No long-term commitment • Cancel anytime
          </p>

          <div className="bg-white text-gray-900 rounded-2xl p-8 mb-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Pricing Details</h3>
            <div className="text-left space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-semibold">Monthly Subscription</span>
                <span className="text-2xl font-bold text-cyan-600">$29</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>Unlimited mail volume</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>Permanent digital storage</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>Secure dashboard access</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>No hidden fees</span>
              </div>
            </div>
          </div>

          <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-5 px-12 rounded-lg text-xl shadow-2xl transform transition hover:scale-105">
            GET PERSONAL VIRTUAL ADDRESS
          </button>

          <p className="mt-8 text-cyan-100 text-sm">
            Join thousands of privacy-conscious individuals already using The Future Perfect Global
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