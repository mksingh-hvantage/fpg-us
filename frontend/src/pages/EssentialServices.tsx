import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function EssentialServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: 'Virtual Address',
      description: 'Professional business address with mail forwarding services',
      features: ['Privacy protection', 'Mail scanning & forwarding', 'Professional image', 'Multiple locations'],
      link: '/virtual-address',
      icon: '📍'
    },
    {
      title: 'EIN / Tax ID',
      description: 'Get your federal Employer Identification Number quickly',
      features: ['Required for hiring', 'Open business bank accounts', 'File tax returns', 'Fast processing'],
      link: '/business-formation/tax-id-ein',
      icon: '🔢'
    },
    {
      title: 'DBA (Doing Business As)',
      description: 'Register a trade name or fictitious business name',
      features: ['Use multiple business names', 'Brand flexibility', 'Local compliance', 'Quick filing'],
      link: '/business-formation/dba',
      icon: '📝'
    },
    {
      title: 'Registered Agent Service',
      description: 'Professional registered agent in all 50 states',
      features: ['Privacy protection', 'Compliance assurance', 'Document management', 'State compliance'],
      link: '/business-management/registered-agent',
      icon: '👤'
    },
    {
      title: 'Business License Research',
      description: 'Identify required licenses for your business',
      features: ['Comprehensive research', 'Federal & state licenses', 'Industry-specific', 'Expert guidance'],
      link: '/business-formation/business-license-research-package',
      icon: '📋'
    },
    {
      title: 'Trademark Registration',
      description: 'Protect your brand with federal trademark registration',
      features: ['Brand protection', 'Nationwide rights', 'Legal protection', 'USPTO filing'],
      link: '/business-formation/trademark-registration',
      icon: '®'
    }
  ];

  const howItWorksSteps = [
  {
    icon: "📝",
    title: "Tell Us About Your Business or Service Needs",
    description:
      "Answer a few quick questions about your business goals or the services you need. Our platform helps identify the right business formation, compliance, or legal support solutions tailored to your situation."
  },
  {
    icon: "⚙️",
    title: "Choose the Right Business Service Package",
    description:
      "Select from affordable business formation and support packages designed for startups, entrepreneurs, and growing companies. Our transparent pricing ensures you know exactly what services are included."
  },
  {
    icon: "🚀",
    title: "We Handle the Filing and Setup Process",
    description:
      "Our experts prepare and submit your business registration documents, handle required filings, and guide you through compliance requirements so you can focus on launching and growing your company."
  },
  {
    icon: "📊",
    title: "Manage and Grow Your Business with Ongoing Support",
    description:
      "Access your secure online dashboard to manage documents, track filings, and receive reminders for important deadlines. Our tools help keep your business compliant and ready for long-term growth."
  }
];

  const confusionPoints = [
  {
    icon: '✅',
    problem: 'Complex Legal Terms & Legal Jargon',
    solution: 'We simplify complicated legal language into clear, easy-to-understand guidance for individuals and businesses'
  },
  {
    icon: '✅',
    problem: 'Unexpected Legal Fees & Hidden Costs',
    solution: 'Transparent and affordable legal pricing with no hidden charges so you always know the total cost upfront'
  },
  {
    icon: '✅',
    problem: 'Missed Legal Deadlines & Compliance Risks',
    solution: 'Automated alerts and expert monitoring help you stay compliant with legal deadlines and regulatory requirements'
  },
  {
    icon: '✅',
    problem: 'Time-Consuming Legal Paperwork & Documentation',
    solution: 'We manage your legal forms, document preparation, and government filings to save you time and effort'
  }
];


  const stats = [
    { number: '500+', label: 'Businesses Formed' },
    { number: '50', label: 'States Covered' },
    { number: '24/7', label: 'Customer Support' },
    { number: '4.5★', label: 'Average Rating' }
  ];

  const faqs = [
    {
      question: 'What is an EIN and do I need one?',
      answer: 'An EIN (Employer Identification Number) is a unique nine-digit number assigned by the IRS to identify your business for tax purposes. You need an EIN if you have employees, operate as a corporation or partnership, file certain tax returns, or withhold taxes. It\'s essentially a Social Security number for your business and is required to open a business bank account.'
    },
    {
      question: 'What is a DBA and when should I use one?',
      answer: 'A DBA (Doing Business As), also known as a fictitious business name or trade name, allows you to operate your business under a name different from your legal business name. You should use a DBA if you want to do business under a different name without creating a new legal entity, if you want to expand your business with different brands, or if you\'re a sole proprietor who wants a business name instead of using your personal name.'
    },
    {
      question: 'Do I need a registered agent?',
      answer: 'Yes, every LLC and corporation is required by law to have a registered agent in each state where they do business. A registered agent receives important legal documents, government correspondence, and compliance notices on behalf of your business. Using a professional registered agent service ensures you never miss important deadlines and protects your privacy by keeping your personal address off public records.'
    },
    {
      question: 'What is a virtual address and why would I need one?',
      answer: 'A virtual address (or virtual mailbox) is a physical street address where you can receive business mail and packages without maintaining a physical office. It\'s ideal for home-based businesses, remote teams, or entrepreneurs who want to keep their home address private. Benefits include professional image, mail scanning and forwarding, privacy protection, and the ability to use it as your business address on official documents.'
    },
    {
      question: 'How long does it take to get these services?',
      answer: 'Processing times vary by service: EIN can be obtained same-day to 2 weeks, DBA registration typically takes 1-3 weeks depending on your state, Registered Agent service activates immediately upon purchase, Virtual Address setup takes 1-2 business days, and Trademark registration takes 8-12 months for full approval. We offer expedited processing for many services to get you up and running faster.'
    },
    {
      question: 'Can I bundle multiple services together?',
      answer: 'Yes! We offer bundled packages that combine essential services at a discounted rate. Many businesses bundle LLC formation with Registered Agent service, EIN, and a Virtual Address. Bundling not only saves you money but also streamlines the setup process. Contact our team to learn about current package deals tailored to your business needs.'
    },
    {
      question: 'What happens if I miss a compliance deadline?',
      answer: 'Missing compliance deadlines can result in penalties, fines, or even administrative dissolution of your business. That\'s why our Registered Agent service includes compliance monitoring and reminders. We\'ll alert you about important filing deadlines, annual reports, and other state requirements to keep your business in good standing. If you do fall behind, we can help you file reinstatement paperwork.'
    },
    {
      question: 'Are these services tax-deductible?',
      answer: 'Yes, most essential business services are considered ordinary and necessary business expenses and are tax-deductible. This includes Registered Agent fees, virtual address services, trademark registration costs, and business license fees. However, we recommend consulting with a tax professional to understand how these deductions apply to your specific situation and to ensure proper documentation.'
    },
    {
      question: 'How much does a trademark registration cost?',
      answer: 'Trademark registration costs vary depending on the filing basis and number of classes you need to protect. Our trademark services start at $199 plus USPTO filing fees (currently $250-$350 per class). We offer comprehensive trademark searches, application preparation, and filing services. The total investment protects your brand nationwide and can last indefinitely with proper maintenance.'
    },
    {
      question: 'What\'s the difference between a registered agent and a virtual address?',
      answer: 'A registered agent is a legal requirement for LLCs and corporations - they receive official legal and government documents on your behalf. A virtual address is optional and provides a professional business mailing address for general correspondence. While both offer privacy benefits, they serve different purposes. Many businesses use both services together for complete privacy and compliance.'
    },
    {
      question: 'Can I use a virtual address as my registered agent address?',
      answer: 'No, in most states you cannot use a virtual mailbox or P.O. box as your registered agent address. The registered agent must have a physical street address in the state where your business is registered. However, you can use a professional registered agent service that provides a physical address, and separately use a virtual address for your general business mail.'
    },
    {
      question: 'What business licenses might I need?',
      answer: 'Business license requirements vary by industry, location, and business structure. Common licenses include general business licenses, professional licenses (for doctors, lawyers, contractors), health permits (for food businesses), seller\'s permits (for retail), and home occupation permits. Our Business License Research service identifies all federal, state, and local licenses you need based on your specific business.'
    },
    {
      question: 'How do I maintain my trademark once it\'s registered?',
      answer: 'After registration, you must file maintenance documents with the USPTO: a Declaration of Use between years 5-6 ($225-$525), renewal between years 9-10 ($225-$525), and renewals every 10 years thereafter. You must also actively use your trademark in commerce and monitor for potential infringement. We offer trademark monitoring and maintenance reminder services to help you stay compliant.'
    },
    {
      question: 'What if I need to change my registered agent?',
      answer: 'You can change your registered agent at any time by filing a change of registered agent form with your state. If you\'re switching to The Future Perfect Global\'s registered agent service, we handle the entire process for you. We\'ll prepare and file the necessary paperwork, coordinate with your current agent, and ensure there\'s no gap in coverage. The process typically takes 1-2 weeks depending on your state.'
    },
    {
      question: 'Do you offer refunds if I\'m not satisfied with your services?',
      answer: 'We stand behind our services with a 100% satisfaction guarantee. If you\'re not completely satisfied with our service, contact us within 60 days for a full refund of our service fees (state filing fees are non-refundable). For ongoing services like Registered Agent or Virtual Address, you can cancel anytime and receive a prorated refund for unused time. Your satisfaction is our priority.'
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
  {/* Primary SEO */}
  <title>
    Essential Business Services in USA – Compliance & Support | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Get essential business services in the USA with The Future Perfect Global. Expert support for EIN assistance, registered agent services, compliance management, annual filings, and ongoing business support."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/essential-services"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="essential business services USA, registered agent USA, US business compliance services, EIN assistance USA, annual filing services USA, corporate compliance USA, business support services USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/essential-services"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/essential-services"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Essential Business Services in USA – Compliance & Ongoing Support"
  />
  <meta
    property="og:description"
    content="Maintain your US business with expert essential services. Registered agent, EIN support, compliance management, and annual filings handled professionally."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/essential-services"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Essential Business Services"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Essential Business Support Services in USA by The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Essential Business Services in USA – Compliance & Support"
  />
  <meta
    name="twitter:description"
    content="Professional essential business services in the USA including registered agent support, compliance management, EIN assistance, and annual filings."
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
      "name": "Essential Business Services in USA",
      "url": "https://us.thefutureperfectglobal.com/essential-services",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Comprehensive essential business services in the USA including registered agent services, EIN assistance, compliance management, annual filings, and ongoing business support.",
      "areaServed": [
        "United States",
        "California",
        "Texas",
        "Florida",
        "New York",
        "Delaware",
        "Nevada",
        "Wyoming"
      ],
      "serviceType": [
        "Registered Agent Services",
        "Business Compliance Management",
        "EIN Assistance",
        "Annual Filing Services",
        "Ongoing Business Support"
      ]
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-cyan-400 to-yellow-400 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-yellow-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="text-5xl font-black mb-6 leading-xl drop-shadow-lg">
              Start Your Business Smart – Easy Company Registration & Legal Compliance Services
            </h1>
            <p className="text-2xl mb-8 text-cyan-50 leading-relaxed">
              From EIN Registration to Annual Report Filing, Our Tools Help You Start, Manage, and Keep Your Business Compliant — All in One Place.
            </p>
            <button
              onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }}
              className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full font-black text-xl hover:bg-gray-900 hover:text-white transition-all shadow-2xl"
            >
              GET STARTED NOW
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">Services to Keep Your Business Running</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From getting your Tax ID to protecting your brand, we provide all the essential services your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="inline-block w-full text-center bg-cyan-600 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-600 transition-all"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Start Your Business or Nonprofit the Right Way — Get the Formation Services You Actually Need</h2>
            
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {confusionPoints.map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-4xl">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{point.problem}</h3>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-600 font-bold text-lg mt-1">→</span>
                      <p className="text-gray-700 leading-relaxed">{point.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }}
              className="inline-block bg-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">Why Thousands of Entrepreneurs Choose The Future Perfect Global</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join over 500+ business owners who trust The Future Perfect Global for their essential business services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 shadow-xl">
                  <div className="text-5xl font-black mb-2">{stat.number}</div>
                  <div className="text-cyan-100 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-6xl mx-auto mb-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        How Our Business Formation Process Works
      </h2>
      <p className="mt-6 text-lg text-gray-600">
        Starting a business or managing essential services shouldn't be complicated.
        Our streamlined platform helps entrepreneurs register, launch, and manage
        their companies with expert support at every step.
      </p>
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-4 gap-8 mb-10">

      {howItWorksSteps.map((step, index) => (
        <div key={index} className="relative text-center">

          

          {/* Icon */}
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-cyan-600 text-white text-2xl shadow-lg mb-6">
            {step.icon}
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {step.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}

    </div>

    {/* Bottom Feature Box */}
    <div className="grid lg:grid-cols-2 gap-12 items-center bg-blue-100/50 p-8 rounded-xl">

      {/* Left Content */}
      <div>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
          Trusted Business Services for Entrepreneurs
        </h3>

        <p className="text-gray-600 mb-6">
          Thousands of entrepreneurs rely on our platform to start businesses,
          manage legal compliance, and access essential services that support
          long-term growth.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✔ Business formation and registration</li>
          <li>✔ Legal compliance and filing support</li>
          <li>✔ Secure document management</li>
          <li>✔ Expert guidance for entrepreneurs</li>
        </ul>
      </div>

      {/* Right Visual Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
        <p className="text-5xl font-extrabold text-cyan-600 mb-2">
          500+
        </p>
        <p className="text-xl font-semibold text-gray-900 mb-4">
          Businesses Supported
        </p>
        <p className="text-gray-600">
          Our platform has helped over one million businesses access essential
          formation and compliance services, making entrepreneurship easier and
          more accessible worldwide.
        </p>
      </div>

    </div>

  </div>
</section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-black mb-6">Need Help Choosing Services?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Our business formation experts can help you identify which services your business needs.
            </p>
            <button className="inline-block bg-cyan-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-700 transition-all shadow-2xl">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-4">Why Choose The Future Perfect Global?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-black text-gray-900 mb-3">Fast Service</h3>
                <p className="text-gray-700">Same-day filing available</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-black text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-700">No hidden fees or surprise charges</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-black text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-700">Dedicated support team always ready to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700">
              Get answers to common questions about essential business services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-cyan-50 rounded-xl shadow-md overflow-hidden border border-cyan-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-cyan-100 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-cyan-600 transform transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
