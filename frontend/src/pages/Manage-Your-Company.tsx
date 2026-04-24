import {
  BookOpen,
  FileText,
  Shield,
  Award,
  Users,
  Phone,
  Mail,
  CheckCircle,
  Briefcase,
  Calendar,
  TrendingUp,
  ArrowRight,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function ManageYourCompany() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const kitItems = [
    'Slip Case and Binder',
    'Stock Transfer Ledger',
    '20 Custom Printed Stock Certificates',
    'Metal Die-Cast Embossing Seal',
    'Operating Agreement for LLCs',
    'Minutes and By-Laws for Corporations',
  ];

  const blogArticles = [
    {
      title: 'How to Start Selling Merchandise for Your Small Business',
      date: 'Dec 21, 2023',
    },
    {
      title: 'How to Start a Business in Texas and Why',
      date: 'Dec 22, 2023',
    },
    {
      title: 'What Is a Domestic LLC?',
      date: 'Dec 21, 2023',
    },
    {
      title: '2023 Tax Deduction Cheat Sheet',
      date: 'Dec 21, 2023',
    },
    {
      title: 'Your Guide to Obtaining a Business License in Texas',
      date: 'Dec 21, 2023',
    },
    {
      title: 'California vs. Delaware: LLC Edition',
      date: 'Dec 21, 2023',
    },
    {
      title: 'How to Register and Apply for a DBA Online',
      date: 'Dec 21, 2023',
    },
    {
      title: 'The Future Perfect Global Basic Package Overview',
      date: 'Dec 20, 2023',
    },
    {
      title: 'LLC vs. S Corp: Pros, Cons, and Differences',
      date: 'Dec 21, 2023',
    },
  ];

  const services = [
    {
      icon: FileText,
      title: 'Annual Report',
      description: 'Keep your business compliant with state requirements',
    },
    {
      icon: Shield,
      title: 'Registered Agent Service',
      description: 'Professional representation for your business',
    },
    {
      icon: Award,
      title: 'Certificate of Good Standing',
      description: 'Prove your business is in good standing',
    },
    {
      icon: Briefcase,
      title: 'Foreign Qualification',
      description: 'Expand your business to other states',
    },
    {
      icon: BookOpen,
      title: 'Articles of Amendment',
      description: 'Update your business information',
    },
    {
      icon: Calendar,
      title: 'Form 2553 (S Corp Tax)',
      description: 'Elect S Corporation tax status',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      <section className="relative bg-cyan-100/50 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-100 rounded-full">
                <Star className="w-4 h-4 text-cyan-600 fill-cyan-600" />
                <span className="text-sm font-medium text-cyan-600">
                  Excellent 4.7 out of 5 on Trustpilot
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Manage your Company
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our support doesn't stop after your business is formed. We're
                here to help you manage and grow your business with ongoing
                services and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all transform hover:scale-105 font-semibold shadow-lg">
                  Get Started Today
                </button>
                <a href="/contact" className="px-8 py-4 bg-white text-cyan-600 border-2 border-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                  Contact Support
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business Management"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="management">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Business Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to keep your business compliant and
              thriving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all hover:border-cyan-300"
              >
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                  <service.icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="flex items-center text-cyan-600 font-medium hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Corporate Kit"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-100 rounded-full">
                <Award className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-600">
                  Required for Compliance
                </span>
              </div>
              <h2 className="text-5xl font-extrabold text-gray-900">
                Corporate LLC Kits
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                All Corporations are required to maintain a 'corporate minute
                book' containing formation documents, licenses, resolutions, and
                meeting minutes. This is essential during audits or when selling
                your company.
              </p>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">
                  What's Included:
                </h3>
                <div className="space-y-4">
                  {kitItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 px-6 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                  Order Your Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="support">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  Expert Support
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900">
                We Are Here to Help
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get practical startup guidance on tax rates, deductions, and
                payroll calculations to prevent costly errors. Our team of
                experts is ready to support your business journey.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">
                      Phone Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Mon-Fri, 9am-6pm CST
                    </p>
                    <a
                      href="tel:18884623453"
                      className="text-cyan-600 font-medium hover:text-cyan-700"
                    >
                      +852-6553-7375
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">
                      Free Tax Consultation
                    </h3>
                    <p className="text-gray-600">
                      Get expert advice on tax planning and accounting for your
                      business
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">
                      Business Guides
                    </h3>
                    <p className="text-gray-600">
                      Access comprehensive resources and state-specific
                      information
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Customer Support"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-cyan-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-green-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900">10,000+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Recent Articles & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest guides and insights to help your
              business succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <article
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:border-cyan-300"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-cyan-600 opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {article.title}
                  </h3>
                  <button className="flex items-center text-cyan-600 font-medium hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who trust us to manage their
              business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg">
                Start Your Business
              </button>
              <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                Schedule Consultation
              </button>
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
