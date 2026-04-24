import GetStartedModal from '../components/GetStartedModal';
import {
  Mail,
  Shield,
  Eye,
  Bell,
  Database,
  CreditCard,
  MapPin,
  Check,
  Building2,
  Lock,
  Clock,
  FileText,
  Star,
  ChevronDown,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

export default function BusinessVirtualAddress() {
    const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    { icon: Mail, title: 'Digital Mail Scanning', description: 'High-resolution color scanning of all your mail' },
    { icon: Eye, title: 'Secure Online Dashboard', description: 'View your mail anytime from anywhere securely' },
    { icon: Bell, title: 'Instant Email Notifications', description: 'Get notified immediately when new mail arrives' },
    { icon: Database, title: 'Mail Storage', description: 'Store your mail digitally throughout your subscription' },
    { icon: CreditCard, title: 'Check & Card Forwarding', description: 'Forward checks and cards to your US address' },
    { icon: MapPin, title: '47 States + DC', description: 'Available in nearly all US states' }
  ];

  const benefits = [
    { icon: Briefcase, title: 'Professionalism & Credibility', description: 'Establish a professional presence with a real business address' },
    { icon: Shield, title: 'Privacy & Security', description: 'Keep your home address private and secure' },
    { icon: Building2, title: 'Business/Personal Separation', description: 'Clearly separate business and personal mail' },
    { icon: Clock, title: 'Time Savings', description: 'Access permanent mail records without physical storage' },
    { icon: FileText, title: 'LLC/Corporate Compliance', description: 'Meet compliance requirements with a real street address' },
    { icon: MapPin, title: 'Real Street Address', description: 'Not a PO Box - a genuine business location' },
    { icon: TrendingUp, title: 'Unlimited Mail Volume', description: 'No limits on the amount of mail you receive' },
    { icon: Lock, title: 'Private Secure Network', description: 'Enterprise-grade security for your mail' },
    { icon: Check, title: 'Flat-Rate Pricing', description: 'Predictable $29/month with no hidden fees' }
  ];

  const setupSteps = [
    {
      number: '1',
      title: 'Provide State Information',
      description: 'Tell us which state you need your virtual address in'
    },
    {
      number: '2',
      title: 'Complete USPS Form 1583',
      description: 'Submit required identification documents (two forms of ID)'
    },
    {
      number: '3',
      title: 'Access Your Account',
      description: 'Receive confirmation email with your account details'
    },
    {
      number: '4',
      title: 'Start Using Your Address',
      description: 'Begin using your new virtual business address immediately'
    }
  ];

  const faqs = [
    {
      question: 'What happens to my physical mail?',
      answer: 'Scanned copies are stored digitally in your secure dashboard. Physical mail is shredded after 1-2 weeks using enterprise-grade processes to ensure your privacy and security.'
    },
    {
      question: 'Does this service forward all my mail?',
      answer: "No, the service doesn't forward all mail—only checks and cards are forwarded to your provided US address. All other correspondence is scanned and available for online access through your secure dashboard."
    },
    {
      question: 'What is USPS Form 1583 and why is it required?',
      answer: 'Form 1583 is a federal compliance requirement that authorizes The Future Perfect Global as a Commercial Mail Receiving Agency (CMRA) to receive mail on your behalf. Good news: notarization is no longer required for this form.'
    },
    {
      question: 'Will the IRS accept my virtual address?',
      answer: 'Yes, for the most part. Virtual addresses are acceptable for EIN applications and business tax purposes. However, they cannot be used for personal tax returns. Most banks also accept virtual addresses for business bank accounts.'
    },
    {
      question: 'What\'s the difference between a virtual address and a virtual mailbox?',
      answer: 'A virtual business address is the physical location where your mail is received. A virtual mailbox is the secure digital dashboard where you access your scanned mail. Together, they form our virtual business office platform.'
    },
    {
      question: 'Can this replace my registered agent?',
      answer: 'No, a virtual address cannot substitute for registered agent requirements. Registered agents serve legal documents and maintain compliance, which is a separate service from mail handling.'
    },
    {
      question: 'Can I use this for personal mail?',
      answer: 'Yes, the service is available under your legal name for personal use. Sole proprietors using business names may also qualify depending on their specific situation.'
    }
  ];

  return (
    <div className="bg-white">

      <section className="bg-gradient-to-br from-cyan-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Get Our Virtual Address for Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Professional virtual business address with secure digital mail access for just <span className="text-cyan-600 font-bold">$29/month</span>
            </p>
            <div className="bg-cyan-600 text-white inline-block px-6 py-3 rounded-lg mb-8">
              <p className="text-lg font-semibold">Get your first month FREE with LLC formation purchase!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform transition hover:scale-105">
                GET YOUR VIRTUAL ADDRESS TODAY
              </button>
              <button className="bg-white hover:bg-gray-50 text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg border-2 border-cyan-600 shadow-lg transform transition hover:scale-105">
                Get Started
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Flexible Cancellation</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Real Street Address</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>No PO Box</span>
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
              <p className="font-semibold">Trusted by thousands of businesses</p>
              <p className="text-sm mt-2">23,702 Trustpilot Reviews • 143,360 Shopper Approved Ratings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Key Features & Service Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your business mail professionally and securely
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Important Service Limitation</h4>
                <p className="text-yellow-700">
                  <strong>We do not accept packages of any size.</strong> Only letters and large envelopes are processed through our virtual address service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Customers Choose The Future Perfect Global
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complete solution for modern business mail management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Easy 4-Step Setup Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your virtual business address up and running in no time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {setupSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white text-cyan p-8 rounded-2xl shadow-xl"
              >
                <div className="absolute -top-6 -left-6 bg-yellow-400 text-cyan-900 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-cyan-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg transform transition hover:scale-105">
              Start Your Setup Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Facility Standards & Quality
            </h2>
            <p className="text-xl text-gray-300">
              Premium locations you can trust
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-start space-x-4 mb-6">
              <Building2 className="w-12 h-12 text-cyan-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Carefully Selected Locations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Future Perfect Global handpicks <strong>one secure, staffed office location per state</strong> rather than offering multiple options. This ensures consistent quality across our entire network.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our facilities meet strict privacy and reliability standards and are <strong>real offices, not strip-mall PO boxes</strong>. Every location is professionally managed and maintained to provide you with a credible business presence.
                </p>
                <div className="bg-cyan-50 p-6 rounded-lg mt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Secure, staffed facilities</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Professional office locations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Enterprise-grade security standards</span>
                  </div>
                </div>
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
              Everything you need to know about our virtual address service
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

      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-cyan-100">
            Professional virtual business address for just <span className="font-bold text-yellow-300">$29/month</span>
          </p>
          <p className="text-lg mb-10 text-cyan-100">
            Flexible cancellation • Real street address • Secure digital access
          </p>

          <div className="bg-white text-gray-900 rounded-2xl p-8 mb-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Pricing Details</h3>
            <div className="text-left space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-semibold">Monthly Subscription</span>
                <span className="text-2xl font-bold text-cyan-600">$29</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <Check className="w-5 h-5" />
                <span className="font-semibold">First month FREE with LLC formation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Check className="w-5 h-5 text-cyan-600" />
                <span>Flat-rate pricing</span>
              </div>
            </div>
          </div>

          <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-5 px-12 rounded-lg text-xl shadow-2xl transform transition hover:scale-105">
            GET YOUR VIRTUAL ADDRESS TODAY
          </button>

          <p className="mt-8 text-cyan-100 text-sm">
            Join thousands of businesses already using The Future Perfect Global's virtual address service
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