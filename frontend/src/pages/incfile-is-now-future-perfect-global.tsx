import { CheckCircle, Shield, Users, Briefcase, Phone, Mail, MapPin, ChevronDown, Star, Building2, FileText, Landmark } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function IncFile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const features = [
    {
      icon: Users,
      title: "Founder-Led Excellence",
      description: "Our leadership team consists of experienced founders who understand your entrepreneurial journey firsthand."
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Over two decades of helping entrepreneurs establish and grow their businesses with confidence."
    },
    {
      icon: Briefcase,
      title: "Comprehensive Solutions",
      description: "From formation to compliance, we provide end-to-end business services under one roof."
    },
    {
      icon: CheckCircle,
      title: "Barrier-Free Approach",
      description: "We believe in removing obstacles that prevent you from pursuing your business dreams."
    }
  ];

  const services = [
    {
      icon: Building2,
      title: "Business Formation",
      items: ["LLC Formation", "S Corporation Setup", "C Corporation Filing", "Nonprofit Organization"]
    },
    {
      icon: FileText,
      title: "Compliance Services",
      items: ["Annual Report Filing", "Registered Agent Service", "Articles of Amendment", "Certificate of Good Standing"]
    },
    {
      icon: Landmark,
      title: "Additional Services",
      items: ["Virtual Address Solutions", "EIN/Tax ID Acquisition", "DBA Registration", "Trademark Protection"]
    }
  ];

  const faqs = [
    {
      question: "What's behind the rebrand from Incfile to The Future Perfect Global?",
      answer: "After 20+ years of empowering entrepreneurs, we evolved our brand to better reflect our expanded services and commitment to making business formation accessible to everyone. The Future Perfect Global represents our growth and dedication to your success."
    },
    {
      question: "Will my account information remain intact?",
      answer: "Absolutely. All your account details, documents, and data have been seamlessly transferred. You can access everything using your existing login credentials without any changes."
    },
    {
      question: "How do I access my business documents?",
      answer: "Simply log into your dashboard using the same credentials you've always used. All your documents are stored securely and remain accessible at any time."
    },
    {
      question: "Are my compliance alerts still active?",
      answer: "Yes, all compliance alerts and notifications continue without interruption. We maintain the same vigilant monitoring to keep your business in good standing."
    },
    {
      question: "Will pricing change with the rebrand?",
      answer: "Our pricing structure remains consistent. We're committed to providing affordable business services, and the rebrand doesn't affect our competitive rates."
    },
    {
      question: "What happens to orders in progress?",
      answer: "All existing orders are being processed normally. Our team continues to work on your filings with the same efficiency and attention to detail you expect."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-gradient-to-r from-red-400 to-cyan-400 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <p className="text-sm font-medium">Incfile is now The Future Perfect Global</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to future perfect global
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">
            A fresh identity for the same trusted partner. For over 20 years, we've empowered entrepreneurs like you to launch, grow, and succeed in business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors">
              Get Started Today
            </button>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </header>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just a filing service. We're your partner in building a successful business foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
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
        </div>
      </section>

      <section className="py-20 px-6 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to establish and maintain your business, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200">
                <div className="bg-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            <span className="text-3xl font-bold">4.7 out of 5</span>
          </div>
          <p className="text-xl mb-4">Trustpilot Rating</p>
          <p className="text-cyan-100 text-lg">
            Trusted by thousands of entrepreneurs who've built their businesses with our support
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the transition
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              We're Here to Help
            </h2>
            <p className="text-xl text-gray-600">
              Real people, ready to assist you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-cyan-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-cyan-600 font-medium mb-2">+852 6553 7375</p>
              <p className="text-sm text-gray-600">Mon-Fri, 9 AM - 6 PM CST</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-cyan-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-cyan-600 font-medium mb-2">neelesh@thefutureperfectglobal.com</p>
              <p className="text-sm text-gray-600">We respond within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-cyan-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700 font-medium mb-2">Houston, TX</p>
              <p className="text-sm text-gray-600">Bilingual support available</p>
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
