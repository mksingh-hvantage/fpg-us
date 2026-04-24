import {
  CheckCircle,
  Building2,
  DollarSign,
  Users,
  FileCheck,
  ShieldCheck,
  Clock,
  ChevronDown,
  Award,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function CertificateOfGoodStanding() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Expand into New Markets',
      description: 'Required documentation when you want to do business in other states or expand your operations across state lines.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: DollarSign,
      title: 'Secure Financing',
      description: 'Banks and lenders often require this certificate before approving business loans or credit lines for your company.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Establish Trust with Stakeholders',
      description: 'Show partners, investors, and clients that your business is compliant with all state legal requirements.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const scenarios = [
    {
      icon: Building2,
      title: 'State Governments',
      description: 'Required for foreign qualification when you want to register and operate your business in states other than where you originally formed.'
    },
    {
      icon: Briefcase,
      title: 'Lenders or Banks',
      description: 'Financial institutions need verification that your business is in good standing before approving loans or establishing business accounts.'
    },
    {
      icon: Users,
      title: 'Investors or Business Partners',
      description: 'Potential investors and partners want confirmation that your business is legitimate and compliant with state regulations.'
    },
    {
      icon: ShieldCheck,
      title: 'Business Licenses and Insurance',
      description: 'Certain professional licenses and insurance policies require proof of good standing before they can be issued.'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No subscriptions, no recurring fees, and completely transparent pricing. You only pay for what you need.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Service',
      description: 'More affordable than our competitors while maintaining the highest quality of service and support.'
    },
    {
      icon: Clock,
      title: 'Fast & Friendly Service',
      description: 'Dedicated specialists who provide quick turnaround times with friendly, knowledgeable customer support.'
    },
    {
      icon: FileCheck,
      title: 'Digital Dashboard',
      description: 'Intuitive user dashboard with secure digital document storage, accessible anytime, anywhere.'
    }
  ];

  const faqs = [
  {
    question: 'What is a Certificate of Good Standing?',
    answer: 'A Certificate of Good Standing is an official document issued by the state confirming that your business is legally registered, compliant with state requirements, and authorized to operate.'
  },
  {
    question: 'Why do I need a Certificate of Good Standing?',
    answer: 'You may need it to open a business bank account, apply for loans, renew licenses, attract investors, register your business in another state, or complete major contracts.'
  },
  {
    question: 'How do I get a Certificate of Good Standing?',
    answer: 'You can request it from your Secretary of State office or use a professional filing service that submits the request on your behalf and ensures faster, error-free processing.'
  },
  {
    question: 'How long does it take to receive a Certificate of Good Standing?',
    answer: 'Processing time varies by state and method. Standard processing may take a few business days, while expedited processing is often available for an additional fee.'
  },
  {
    question: 'How much does a Certificate of Good Standing cost?',
    answer: 'Costs vary by state and typically range from $10 to $75, with additional fees for expedited processing or mailing certified paper copies.'
  },
  {
    question: 'Does a Certificate of Good Standing expire?',
    answer: 'The certificate itself does not technically expire, but most banks, lenders, and agencies require a document issued within the last 30–90 days.'
  },
  {
    question: 'What happens if my business is not in good standing?',
    answer: 'You may face penalties, loss of liability protection, inability to obtain financing, refusal of contracts, or administrative dissolution by the state.'
  },
  {
    question: 'How do I restore my business to good standing?',
    answer: 'You must file any missing annual reports, pay overdue fees or penalties, and resolve compliance issues with the Secretary of State before requesting the certificate.'
  },
  {
    question: 'Is a Certificate of Good Standing required to operate in another state?',
    answer: 'Yes, most states require it when filing for foreign qualification to legally expand or operate your business in an additional state.'
  },
  {
    question: 'Is a Certificate of Good Standing the same as a business license?',
    answer: 'No. A business license permits operation in a specific area, while a Certificate of Good Standing proves your business is compliant with state filing and tax requirements.'
  },
  {
    question: 'Can I get a Certificate of Good Standing online?',
    answer: 'In most states, yes. Many states offer online ordering, and professional filing services can also obtain digital or mailed certified copies for you.'
  },
  {
    question: 'Do LLCs and corporations both need Certificates of Good Standing?',
    answer: 'Yes. LLCs, corporations, and other registered entities may all be required to provide this document for banking, financing, licensing, or expansion purposes.'
  },
  {
    question: 'Is a Certificate of Good Standing required for business loans?',
    answer: 'Often yes. Banks and lenders commonly request it to verify that your business is active, compliant, and legally authorized to operate.'
  },
  {
    question: 'Do I need a Certificate of Good Standing for taxes?',
    answer: 'It is not required for filing taxes, but unresolved tax issues can prevent your business from being considered in good standing.'
  },
  {
    question: 'Can I use one Certificate of Good Standing in multiple states?',
    answer: 'Yes, but many states and institutions require a certificate issued within 30–90 days, so you may need updated copies for separate applications.'
  }
];


  return (
    <div className="flex flex-col">
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">Official State Documentation</span>
              </div>
              <h1 className="text-5xl font-extrabold mb-6 leading-xl">
                How to Get a Certificate of Good Standing for Your LLC or Corporation
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A Certificate of Good Standing confirms your business complies with state regulations. Get yours quickly and easily with expert assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold px-8 py-4 rounded-3xl transition-colors duration-200 shadow-lg shadow-cyan-500/20">
                  Get Started
                </button>
                <a href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-3xl transition-colors duration-200 border border-white/20">
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business compliance documentation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Easily Get Proof Your Business Is in <span className='text-cyan-500'>Good Standing</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Demonstrate compliance and credibility in key business situations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
      Trusted by <span className="text-cyan-500">500+ Entrepreneurs & Business Owners</span> Worldwide
    </h2>

    <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">

      <span className="text-cyan-500 font-bold text-lg">
        Serving Businesses Since 2018
      </span>

      <span className="text-gray-400">|</span>

      <span className="font-semibold text-gray-800">
        Bootstrapped & Founder-Led
      </span>

      <span className="text-gray-400">|</span>

      <span className="font-semibold text-gray-800">
        Independently Owned Company
      </span>

    </div>

  </div>
</section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Common Situations That Require a <span className="text-cyan-500">Certificate of Good Standing</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key situations where a Certificate of Good Standing is required
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-cyan-100/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-cyan-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <scenario.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {scenario.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Expert Help to Reinstate Your Dissolved Business Quickly and Easily
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference with our professional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-whtie">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Common Questions About Obtaining a Certificate of Good Standing
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Ready To Take Your Business To The Next Level?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your business incorporation for $0 plus state fees
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 font-bold px-10 py-4 rounded-3xl hover:bg-cyan-50 transition-colors duration-200 shadow-lg">
            Incorporate Now
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
