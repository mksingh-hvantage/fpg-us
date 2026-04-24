import { useState } from "react";

import GetStartedModal from '../components/GetStartedModal';
export default function CompanyAbout() {
  const [activeTab, setActiveTab] = useState(1);
const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const services = [
    {
      title: "LLC Formation",
      description: "Start your LLC with expert guidance and transparent pricing.",
      icon: "🏢",
    },
    {
      title: "Corporation Formation",
      description: "Incorporate your business and protect your assets.",
      icon: "🏛️",
    },
    {
      title: "Registered Agent Service",
      description: "Professional RA services in all 50 states.",
      icon: "📬",
    },
    {
      title: "Compliance & Annual Reports",
      description: "Stay compliant with timely reminders and filing support.",
      icon: "✅",
    },
    {
      title: "DBA & Business Name Registration",
      description: "Register your trade name quickly and easily.",
      icon: "📝",
    },
    {
      title: "Business Licenses",
      description: "Get the proper licenses and permits for your business type.",
      icon: "📄",
    },
    {
      title: "EIN / Tax ID Services",
      description: "Obtain your Employer Identification Number hassle-free.",
      icon: "💳",
    },
    {
      title: "Bank Account Assistance",
      description: "Open your business bank account with guidance.",
      icon: "🏦",
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-800 text-white py-32 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Company Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-black mb-6">About Our Company</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            We've helped over 500 entrepreneurs start, manage, and grow their businesses. We are built for the ambitious, the dreamers, and the doers.
          </p>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-black text-cyan-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Businesses Formed</div>
            </div>
            <div>
              <div className="text-6xl font-black text-cyan-600 mb-2">50</div>
              <div className="text-gray-700 font-semibold">States Served</div>
            </div>
            <div>
              <div className="text-6xl font-black text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-700 font-semibold">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We exist to make business formation simple, affordable, and accessible to everyone. Our goal is to remove barriers so entrepreneurs can focus on growth and innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By providing transparent pricing, expert support, and a range of business services, we empower founders to turn their dreams into reality.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184657/pexels-photo-3184657.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mission"
                className="rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / WHY CHOOSE US */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tab === 1 ? "Trusted Experience" : tab === 2 ? "Best Value" : "Expert Support"}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 1 && (
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-gray-700 leading-relaxed">
                  Over a decade of experience helping entrepreneurs navigate the business formation process. We understand the challenges and provide solutions that make starting a business seamless.
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-gray-700 leading-relaxed">
                  We offer competitive pricing with no hidden fees. Transparent, upfront costs ensure you know exactly what you’re paying for.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-gray-700 leading-relaxed">
                  Our team of experts is available to guide you through every step, providing advice, support, and answers to your questions.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED */}
      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl mb-10 text-gray-300">Join over 1 million entrepreneurs who trust us.</p>
          <button
            onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-5 rounded-full text-xl font-black hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-2xl"
          >
            GET STARTED NOW
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
