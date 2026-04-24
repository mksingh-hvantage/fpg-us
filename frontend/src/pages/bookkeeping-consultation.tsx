import { Shield, ChevronDown, CheckCircle, CalendarCheck, LineChart, Users, ArrowRight, ClipboardCheck, Link, ReceiptText, UserCheck, Wallet, Clock, Lightbulb, ShieldCheck, Gift, MessageCircle, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function BookkeepingConsultation() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
const steps = [
  {
    id: 1,
    title: "Book Your Free Tax Consultation",
    description:
      "Start with a quick consultation with experienced tax professionals and discover opportunities to reduce your tax burden.",
  },
  {
    id: 2,
    title: "Get Expert Accounting Support",
    description:
      "Our certified accountants provide personalized tax strategies, bookkeeping, and financial advice tailored for your business.",
  },
  {
    id: 3,
    title: "Simplify & Grow Your Finances",
    description:
      "Streamline your financial processes and gain insights that help your business grow while staying fully compliant.",
  },
];

const features = [
    {
      icon: ClipboardCheck,
      title: "Structured Bookkeeping & Financial Tracking",
      desc: "Maintain organized financial records with scheduled bookkeeping and clear performance summaries that help you understand your business cash flow and profitability."
    },
    {
      icon: ReceiptText,
      title: "Complete Business Tax Filing",
      desc: "Ensure your company tax returns are prepared accurately and submitted on time with the support of experienced tax professionals."
    },
    {
      icon: Wallet,
      title: "Individual Tax Reporting for Business Owners",
      desc: "We manage personal income tax reporting for entrepreneurs and single-member companies so your finances remain aligned and compliant."
    },
    {
      icon: Shield,
      title: "Ongoing Tax Compliance Monitoring",
      desc: "Receive proactive guidance to help your business follow tax regulations, avoid penalties, and stay prepared for upcoming filing requirements."
    },
    {
      icon: Link,
      title: "Secure Banking Integration Tools",
      desc: "Connect your business accounts with reliable digital tools that simplify transaction tracking and day-to-day financial management."
    },
    {
      icon: UserCheck,
      title: "Dedicated Accountant Support",
      desc: "Access knowledgeable accounting professionals who provide practical advice, financial insights, and strategies to strengthen your business finances."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Valuable Time",
      desc: "Automated tax tracking and simplified financial workflows help entrepreneurs spend less time on paperwork and more time building their business."
    },
    {
      icon: Lightbulb,
      title: "Professional Financial Insights",
      desc: "Gain clear guidance from experienced tax professionals who help you understand deductions, manage liabilities, and improve financial decisions."
    },
    {
      icon: ShieldCheck,
      title: "Reliable Compliance Support",
      desc: "Stay ahead of tax deadlines and regulatory requirements with expert assistance designed to keep your business organized and protected."
    }
  ];

   const stepss = [
    {
      icon: MessageCircle,
      title: "Schedule a Tax Strategy Call",
      desc: "Connect with an experienced tax advisor to discuss your business structure, financial goals, and opportunities to reduce tax liabilities."
    },
    {
      icon: Zap,
      title: "Create Your Account Instantly",
      desc: "Sign up in minutes and access your secure dashboard where you can organize financial information and monitor tax-related activity."
    },
    {
      icon: Gift,
      title: "Explore the Platform Risk-Free",
      desc: "Use the full platform during your trial period to experience professional bookkeeping tools, reporting features, and expert support."
    },
    {
      icon: Rocket,
      title: "Continue With Confidence",
      desc: "Once your trial ends, continue using the service seamlessly to manage business taxes, maintain accurate records, and stay compliant year-round."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-600 to-slate-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-black text-white mb-6 leading-xl">
                Stress-Free Accounting and Bookkeeping
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Business accounting and bookkeeping services at a low monthly cost — so you can focus on what matters.
              </p>
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started Now
              </button>
              <p className="mt-6 text-gray-200 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Trusted by 100,000+ businesses nationwide
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business reinstatement documents"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-bold text-gray-900">Fast Processing</p>
                    <p className="text-sm text-gray-600">1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Why Businesses Trust Our Tax & Accounting Services
          </h2>
          <p className="text-gray-600 text-lg">
            Our experts help businesses simplify accounting, reduce tax
            liabilities, and gain better financial clarity for long-term growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80"
            alt="Professional tax consultant helping clients"
            className="rounded-2xl shadow-xl"
          />

          {/* Steps */}
          <div className="space-y-6">

            {steps.map((step) => (
              <div
                key={step.id}
                className="flex gap-5 p-4 bg-white rounded-xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100 text-cyan-600">
                  {step.id === 1 && <CalendarCheck size={24} />}
                  {step.id === 2 && <Users size={24} />}
                  {step.id === 3 && <LineChart size={24} />}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

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

<section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="relative bg-white border border-gray-300 rounded-3xl shadow-sm overflow-hidden">

          {/* background decoration */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-72 h-72 border rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 border rounded-full"></div>
          </div>

          <div className="relative z-10 text-center py-20 px-8">

            {/* small badge */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600">
                ⭐
              </div>
            </div>

            {/* heading */}
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
              Simplify Your Business Taxes Without the Stress — 
              <span className="text-cyan-500">
                Start Your 30-Day Free Trial Today
              </span>
            </h2>

            {/* description */}
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Stop worrying about complicated tax filings and bookkeeping.
              Our professional accounting platform helps you manage taxes,
              track finances, and stay compliant so you can focus on growing
              your business with confidence.
            </p>

            {/* CTA button */}
            <div className="mt-10">
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition">
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>

          <section className="py-20 bg-cyan-100/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Services Included in Our Small Business Accounting Starter Plan
          </h2>

          <p className="text-lg text-gray-600">
            Designed for entrepreneurs and growing businesses, this accounting
            package provides the essential tools and professional expertise
            required to manage finances, prepare taxes, and maintain accurate
            financial records.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 mb-5">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image / Dashboard Mockup */}
          <div className="relative">

            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1603195827187-459ab02554a0?q=80"
                alt="Business tax management dashboard showing analytics and financial reports"
                className="rounded-xl"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -top-10 right-10 bg-white p-6 rounded-xl shadow-lg border w-64">
              <p className="text-sm text-gray-500 mb-1">Annual Tax Estimate</p>
              <p className="text-2xl font-bold text-gray-900">$12,128</p>
              <div className="h-2 bg-cyan-200 rounded-full mt-4">
                <div className="h-2 bg-cyan-500 rounded-full w-2/3"></div>
              </div>
            </div>

          </div>


          {/* Right Content */}
          <div>

            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Smart Tax Management Solutions for Growing Businesses
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              Managing taxes can feel overwhelming for entrepreneurs and
              small companies. Our accounting platform combines professional
              expertise with modern financial tools to simplify bookkeeping,
              improve tax planning, and help businesses stay financially
              organized throughout the year.
            </p>


            <div className="space-y-6">

              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-5 p-6 border rounded-xl hover:shadow-lg transition"
                  >

                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>

      <section className="py-20 bg-cyan-100/40">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Simple Steps to Manage Your Business Taxes Efficiently
          </h2>

          <p className="text-lg text-gray-600">
            Our platform simplifies accounting and tax management for
            entrepreneurs and growing companies. Follow these easy steps to
            get started and gain full control of your financial operations.
          </p>

        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left Steps */}
          <div className="space-y-8">

            {stepss.slice(0,2).map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center w-24 h-12 bg-cyan-100 text-cyan-600 rounded-lg">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>


          {/* Center Image */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80"
              alt="Mobile dashboard showing tax management and financial tracking"
              className="w-108 drop-shadow-xl h-full rounded"
            />

          </div>


          {/* Right Steps */}
          <div className="space-y-8">

            {stepss.slice(2,4).map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center w-24 h-12 bg-cyan-100 text-cyan-600 rounded-lg">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
            Common Questions About Business Accounting
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-gray-900">
                  How much does bookkeeping and accounting cost?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === 0 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  <p className="mb-4">Our Starter package is $125/month and includes quarterly bookkeeping, business tax return, personal taxes (sole proprietorships & single-member LLCs only), compliance assistance, financial reporting, online tools and resources, up to two bank accounts, and expert accounting advice.</p>
                  <p>Our Plus package is $249/month and includes monthly bookkeeping, business tax return, personal taxes (any entity type), dedicated bookkeeper/tax pro advice, compliance assistance, financial reporting, online tools and resources, up to four bank accounts, and tax planning sessions.</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-gray-900">
                  Are there any hidden costs?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === 1 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  Never! We're all about transparency, and there are no hidden costs associated with our business accounting and bookkeeping service.
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-gray-900">
                  How long does setup take?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === 2 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  You're ready to go as soon as you receive your username and password via email. Our team will guide you through the initial dashboard setup.
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-gray-900">
                  What resources are available?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === 3 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  We provide comprehensive guides on tax filing, accountant selection, bookkeeping vs. accounting differences, and LLC tax forms. All resources are accessible through your dashboard.
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-gray-900">
                  What kind of support can I expect?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === 4 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  We emphasize hands-on support via dashboard, email, phone, or chat with direct access to our accounting team. Your questions are answered by real experts who understand your business needs.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold mb-4">
            Get a Free Online Tax Consultation with Experts
          </h2>
          <p className="text-xl mb-8">
            Log in to your secure dashboard to connect with professional tax consultants who can assist with tax returns, compliance, financial planning, and maximizing your tax savings.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 font-bold px-8 py-4 rounded-2xl text-xl transition-colors duration-200 shadow-lg">
            Get started now
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
