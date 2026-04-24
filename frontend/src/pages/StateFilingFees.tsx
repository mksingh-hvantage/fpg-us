import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  FileText,
  Clock,
  Shield,
  Star,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Search } from 'lucide-react';
import { Helmet } from "react-helmet-async"; 

export default function StateFilingFees() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [selectedState, setSelectedState] = useState('Alaska');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const statesFees: Record<string, { llc: number; ccorp: number; scorp: number }> = {
    Alabama: { llc: 75, ccorp: 100, scorp: 100 },
    Alaska: { llc: 250, ccorp: 250, scorp: 250 },
    Arizona: { llc: 50, ccorp: 60, scorp: 60 },
    Arkansas: { llc: 50, ccorp: 50, scorp: 50 },
    California: { llc: 70, ccorp: 100, scorp: 100 },
    Colorado: { llc: 50, ccorp: 50, scorp: 50 },
    Connecticut: { llc: 120, ccorp: 150, scorp: 150 },
    Delaware: { llc: 90, ccorp: 89, scorp: 89 },
    Florida: { llc: 125, ccorp: 525, scorp: 525 },
    Georgia: { llc: 100, ccorp: 100, scorp: 100 },
    Hawaii: { llc: 50, ccorp: 50, scorp: 50 },
    Idaho: { llc: 100, ccorp: 100, scorp: 100 },
    Illinois: { llc: 150, ccorp: 150, scorp: 150 },
    Indiana: { llc: 90, ccorp: 90, scorp: 90 },
    Iowa: { llc: 50, ccorp: 100, scorp: 100 },
    Kansas: { llc: 165, ccorp: 165, scorp: 165 },
    Kentucky: { llc: 40, ccorp: 85, scorp: 85 },
    Louisiana: { llc: 100, ccorp: 275, scorp: 275 },
    Maine: { llc: 125, ccorp: 120, scorp: 120 },
    Maryland: { llc: 100, ccorp: 100, scorp: 100 },
    Massachusetts: { llc: 500, ccorp: 275, scorp: 275 },
    Michigan: { llc: 50, ccorp: 60, scorp: 60 },
    Minnesota: { llc: 135, ccorp: 135, scorp: 135 },
    Mississippi: { llc: 50, ccorp: 100, scorp: 100 },
    Missouri: { llc: 50, ccorp: 105, scorp: 105 },
    Montana: { llc: 35, ccorp: 20, scorp: 20 },
    Nebraska: { llc: 100, ccorp: 102, scorp: 102 },
    Nevada: { llc: 75, ccorp: 75, scorp: 75 },
    'New Hampshire': { llc: 100, ccorp: 100, scorp: 100 },
    'New Jersey': { llc: 125, ccorp: 125, scorp: 125 },
    'New Mexico': { llc: 0, ccorp: 0, scorp: 0 },
    'New York': { llc: 25, ccorp: 60, scorp: 60 },
    'North Carolina': { llc: 125, ccorp: 125, scorp: 125 },
    'North Dakota': { llc: 0, ccorp: 0, scorp: 0 },
    Ohio: { llc: 99, ccorp: 99, scorp: 99 },
    Oklahoma: { llc: 100, ccorp: 100, scorp: 100 },
    Oregon: { llc: 50, ccorp: 50, scorp: 50 },
    Pennsylvania: { llc: 125, ccorp: 125, scorp: 125 },
    'Rhode Island': { llc: 150, ccorp: 150, scorp: 150 },
    'South Carolina': { llc: 110, ccorp: 110, scorp: 110 },
    'South Dakota': { llc: 150, ccorp: 150, scorp: 150 },
    Tennessee: { llc: 300, ccorp: 300, scorp: 300 },
    Texas: { llc: 0, ccorp: 300, scorp: 300 },
    Utah: { llc: 50, ccorp: 50, scorp: 50 },
    Vermont: { llc: 125, ccorp: 125, scorp: 125 },
    Virginia: { llc: 100, ccorp: 100, scorp: 100 },
    Washington: { llc: 180, ccorp: 180, scorp: 180 },
    'West Virginia': { llc: 100, ccorp: 100, scorp: 100 },
    Wisconsin: { llc: 130, ccorp: 130, scorp: 130 },
    Wyoming: { llc: 100, ccorp: 100, scorp: 100 }
  };

  const states = Object.keys(statesFees).sort();
  const filteredStates = states.filter(state =>
    state.toLowerCase().includes(searchInput.toLowerCase())
  );

  const upfrontCosts = [
    {
      title: 'Name Reservation Fees',
      cost: '$10 to $50',
      icon: FileText,
      description: 'Reserve your business name before filing'
    },
    {
      title: 'Fictitious Business Name',
      cost: '$10 to $50',
      icon: FileText,
      description: 'Register a DBA or trade name'
    },
    {
      title: 'Business License Costs',
      cost: '$50 to $100',
      icon: Shield,
      description: 'Required licenses to operate legally'
    },
    {
      title: 'Permit Fees',
      cost: '$0 to thousands',
      icon: FileText,
      description: 'Industry-specific permits and certifications'
    },
    {
      title: 'Publication Fees',
      cost: '$40 to $2,000',
      icon: FileText,
      description: 'Required in NY, Nebraska, and Arizona'
    }
  ];

  const ongoingCosts = [
    {
      title: 'Annual Franchise Tax',
      cost: '$0 to $800',
      description: 'State-imposed annual tax on businesses'
    },
    {
      title: 'Annual Report Fees',
      cost: 'Up to $500',
      description: 'Yearly state filing requirements'
    },
    {
      title: 'Registered Agent Fees',
      cost: '$100 to $300',
      description: 'Annual service for legal documents'
    },
    {
      title: 'Business License Renewal',
      cost: '$20 to $500',
      description: 'Maintain your business licenses'
    }
  ];

  const benefits = [
    {
      title: '100% Free Formation',
      description: 'No hidden fees for basic LLC formation',
      icon: DollarSign
    },
    {
      title: 'Super Fast Filing',
      description: 'Quick processing and state submission',
      icon: Clock
    },
    {
      title: 'Free Registered Agent',
      description: 'First year completely free',
      icon: Shield
    },
    {
      title: 'Free Compliance Reminders',
      description: 'Never miss important deadlines',
      icon: CheckCircle
    }
  ];

  const faqs = [
    {
      question: 'How much do LLC state filing fees cost?',
      answer: 'LLC state filing fees range from $40 to $500 depending on your state. The national average is around $132. States like Kentucky and Arkansas are on the lower end at $40-$50, while states like Massachusetts and Illinois can charge $500 or more.'
    },
    {
      question: 'Are there any hidden costs when forming an LLC?',
      answer: 'We believe in complete transparency. All costs are clearly outlined upfront, including state filing fees, optional services, and any ongoing maintenance costs. There are no surprise charges or hidden fees.'
    },
    {
      question: 'How can I find out about state-specific rules?',
      answer: 'Each state has unique requirements for LLC formation. Our state-by-state guide provides detailed information about filing requirements, costs, processing times, and ongoing compliance obligations for all 50 states.'
    },
    {
      question: 'How long does LLC filing take?',
      answer: 'Processing times vary by state, typically ranging from 1-2 weeks to several months. Some states offer expedited processing for an additional fee. Our fast-track service ensures your documents are submitted correctly the first time.'
    },
    {
      question: 'What guides and resources are available?',
      answer: 'We offer comprehensive guides covering LLC formation, operating agreements, tax elections, registered agent services, and state-specific requirements. All guides are downloadable and regularly updated to reflect current regulations.'
    },
    {
      question: 'Do I need to pay annually for my LLC?',
      answer: 'Most states require annual reports and fees to maintain your LLC in good standing. These typically range from $0 to $800 annually, depending on your state. We provide free compliance reminders so you never miss a deadline.'
    },
    {
      question: 'What is the most affordable way to form an LLC?',
      answer: 'Our $0 formation package includes everything you need to start your LLC: state filing, articles of organization preparation, and first year free registered agent service. You only pay the required state filing fee.'
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
  <title>
    State Filing Fees in USA – LLC & Business Registration Costs | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Learn about state filing fees in the USA for LLC and business registration. The Future Perfect Global provides state-wise filing costs, government fees, and expert guidance to help you budget accurately."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/state-filing-fees"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="state filing fees USA, LLC filing fees by state, business registration fees USA, state fees for LLC, how much does it cost to file LLC USA, USA business formation costs"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/state-filing-fees"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/state-filing-fees"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="State Filing Fees in USA – LLC & Business Registration Costs"
  />
  <meta
    property="og:description"
    content="Discover state-wise filing fees for LLC and business registration in the USA. Get clear cost breakdowns and expert support from The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/state-filing-fees"
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
    content="State Filing Fees in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="State Filing Fees in USA – Business Registration Costs"
  />
  <meta
    name="twitter:description"
    content="Check state filing fees for LLC and business registration across the USA. Plan your business setup costs with expert guidance."
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
      "name": "State Filing Fees in USA",
      "url": "https://us.thefutureperfectglobal.com/business-management/state-filing-fees",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "State-wise filing fees and government costs for LLC and business registration in the USA, helping entrepreneurs understand and plan their formation expenses.",
      "areaServed": [
        "United States"
      ],
      "serviceType": [
        "State Filing Fee Information",
        "LLC Formation USA",
        "Business Registration USA",
        "Startup Cost Guidance",
        "Compliance Support"
      ]
    }`}
  </script>
</Helmet>

      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                How Much Does It Cost to Form an LLC?
                <span className="block text-cyan-600 mt-2">A State-by-State Guide</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ready to start your business? Let's begin by looking at state filing fees. Costs vary by state.
              </p>
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition shadow-lg flex items-center text-lg font-semibold">
                Compare Costs by State
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business formation documents"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-sm text-gray-600 mb-1">Filing fees from</p>
                <p className="text-3xl font-bold text-cyan-600">$40 to $500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              LLC Costs by State
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              The cost to file an LLC varies from state to state, ranging from <span className="text-gray-900">$40 to $500</span>. Use our <span className="font-bold text-gray-900">free LLC fees filing tool</span> to quickly compare different state fees and make an informed decision.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by state..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  if (filteredStates.length > 0 && !filteredStates.includes(selectedState)) {
                    setSelectedState(filteredStates[0]);
                  }
                }}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:outline-none text-lg bg-white"
              />
            </div>
            {searchInput && filteredStates.length > 0 && (
              <div className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-2 max-w-5xl w-full shadow-lg">
                {filteredStates.slice(0, 5).map((state) => (
                  <button
                    key={state}
                    onClick={() => {
                      setSelectedState(state);
                      setSearchInput('');
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-cyan-50 transition border-b border-gray-100 last:border-b-0"
                  >
                    {state}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-500 mb-6">
              Example for <span className="text-gray-900">{selectedState}</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
                <span className="text-lg text-gray-900 font-medium">C-Corp</span>
                <span className="text-2xl font-bold text-cyan-600">${statesFees[selectedState].ccorp}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
                <span className="text-lg text-gray-900 font-medium">S-Corp</span>
                <span className="text-2xl font-bold text-cyan-600">${statesFees[selectedState].scorp}</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-lg text-gray-900 font-medium">LLC</span>
                <span className="text-2xl font-bold text-cyan-600">${statesFees[selectedState].llc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              LLC Formation Costs Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filing fees range from $40 to $500 depending on your state. Use our free comparison tool for a detailed state-by-state analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl shadow-lg">
              <FileText className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">LLC</h3>
              <p className="text-cyan-100">Standard limited liability company formation</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-lg">
              <FileText className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">C-Corp</h3>
              <p className="text-green-100">Corporate entity with shareholders</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl shadow-lg">
              <FileText className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">S-Corp</h3>
              <p className="text-cyan-100">Tax election for corporations</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
              <FileText className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Nonprofit</h3>
              <p className="text-purple-100">Tax-exempt charitable organizations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Upfront LLC Costs Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              Understanding all the initial expenses when forming your LLC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upfrontCosts.map((cost, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <cost.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cost.title}</h3>
                <p className="text-3xl font-bold text-cyan-600 mb-3">{cost.cost}</p>
                <p className="text-gray-600">{cost.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Ongoing LLC Costs
            </h2>
            <p className="text-xl text-gray-600">
              Annual expenses to keep your LLC in good standing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingCosts.map((cost, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-cyan-50 p-6 rounded-xl border-2 border-cyan-100 hover:border-cyan-300 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cost.title}</h3>
                <p className="text-2xl font-bold text-cyan-600 mb-3">{cost.cost}</p>
                <p className="text-sm text-gray-600">{cost.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Let The Future Perfect Global Handle It</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Stop worrying about compliance deadlines and state requirements. We handle your renewals, reports, and reminders so you can focus on growing your business.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg font-semibold">
            Get Started Now
          </button>
        </div> 
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose The Future Perfect Global?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to start and manage your business with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about LLC formation costs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
              Trusted by Over 500 Entrepreneurs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellent 4.7 out of 5</h3>
              <p className="text-gray-600">Based on 23,504+ Trustpilot reviews</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8 Overall Rating</h3>
              <p className="text-gray-600">143,360 Shopper Approved reviews</p>
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
