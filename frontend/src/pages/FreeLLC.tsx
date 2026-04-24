import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Shield, TrendingUp, FileCheck, Users, CheckCircle, Clock, DollarSign, Award } from 'lucide-react';

export default function FreeLLC() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-green-500 via-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Form Your LLC for FREE</h1>
          <p className="text-3xl mb-4 text-green-100">$0 + State Filing Fees</p>
          <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
            Join over 500 entrepreneurs who trust us. No hidden fees. No gimmicks.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-green-600 px-16 py-6 rounded-full text-2xl font-black hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105">
            START MY FREE LLC
          </button>
          <div className="mt-8 flex items-center justify-center gap-2 text-green-100">
            <Award className="w-6 h-6" />
            <span className="text-lg font-semibold">Rated 4.7/5 - Excellent on Trustpilot</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">How to Start Your LLC</h2>
          <p className="text-center text-gray-600 mb-16 text-xl">Simple 6-step process to get your business started</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Choose Your Business Name", desc: "We'll verify it's available in your state" },
              { step: 2, title: "Provide Your Address", desc: "Your business and registered agent address" },
              { step: 3, title: "Assign Registered Agent", desc: "Choose our service or provide your own" },
              { step: 4, title: "List Member Information", desc: "Add owners and management details" },
              { step: 5, title: "State Business Purpose", desc: "Describe what your business will do" },
              { step: 6, title: "File Articles of Organization", desc: "We handle the paperwork and filing" }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-green-500 transition-all">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">Why Form an LLC?</h2>
          <p className="text-center text-gray-600 mb-16 text-xl">Key benefits for your business</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Liability Protection</h3>
              <p className="text-gray-600">Protect your personal assets from business debts and lawsuits</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Tax Flexibility</h3>
              <p className="text-gray-600">Choose how your business is taxed for optimal benefits</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Easy Compliance</h3>
              <p className="text-gray-600">Less paperwork and simpler requirements than corporations</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Business Credibility</h3>
              <p className="text-gray-600">Establish legitimacy and build trust with customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">What's Included FREE?</h2>
          <p className="text-center text-gray-600 mb-12 text-xl">Everything you need to start your business</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: "Articles of Organization", desc: "We prepare and file your formation documents with the state" },
              { icon: Users, title: "Operating Agreement", desc: "Custom operating agreement tailored to your business structure" },
              { icon: CheckCircle, title: "Banking Resolution", desc: "Document required to open your business bank account" },
              { icon: Shield, title: "Name Availability Check", desc: "We verify your business name is available in your state" },
              { icon: Clock, title: "Lifetime Support", desc: "Free access to our customer support team for life" },
              { icon: Award, title: "Online Dashboard", desc: "Manage your business documents and deadlines online" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <item.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-12 text-center">Compare Our Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-2">FREE</h3>
              <div className="text-5xl font-black text-green-600 mb-6">$0</div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>LLC Formation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Operating Agreement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Banking Resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lifetime Support</span>
                </li>
              </ul>
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="w-full bg-green-600 text-white py-4 rounded-full font-black hover:bg-green-700 transition-all">
                GET STARTED
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-xl transform scale-105 relative">
              <div className="bg-white text-green-600 inline-block px-4 py-1 rounded-full text-sm font-black mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-black mb-2">STANDARD</h3>
              <div className="text-5xl font-black mb-6">$149</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Everything in FREE</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>EIN / Tax ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Registered Agent (1 year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Express Filing</span>
                </li>
              </ul>
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="w-full bg-white text-green-600 py-4 rounded-full font-black hover:bg-gray-100 transition-all">
                GET STARTED
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-2">PREMIUM</h3>
              <div className="text-5xl font-black text-green-600 mb-6">$299</div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Everything in STANDARD</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Business License Research</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Domain Name + Email</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Business Website</span>
                </li>
              </ul>
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="w-full bg-gray-900 text-white py-4 rounded-full font-black hover:bg-gray-800 transition-all">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-5xl font-black text-gray-900 mb-12 text-center">
      Frequently Asked Questions
    </h2>

    <div className="space-y-5">
      {[
        {
          q: "Is the free LLC formation really free?",
          a: "Yes, our free LLC formation package is genuinely free. You only pay the mandatory state filing fees required by the government. There are no hidden costs, upsells, or surprise charges."
        },
        {
          q: "How long does it take to form an LLC?",
          a: "LLC processing time depends on the state. Standard filings typically take 7–14 business days. If you choose express or expedited filing, many states process applications within 1–3 business days."
        },
        {
          q: "Do I need a registered agent for my LLC?",
          a: "Yes, every LLC is legally required to appoint a registered agent. The agent receives official legal documents and compliance notices. You may act as your own agent or use our professional registered agent service for privacy and reliability."
        },
        {
          q: "What is included in the FREE, STANDARD, and PREMIUM packages?",
          a: "The FREE package includes basic LLC formation and name verification. STANDARD adds EIN acquisition, registered agent service, and faster filing. PREMIUM includes everything in STANDARD plus business license research, domain registration, and a professional website."
        },
        {
          q: "Can I upgrade my LLC package later?",
          a: "Absolutely. You can start with the free package and upgrade at any time as your business grows. All upgrades are seamless and do not affect your existing LLC setup."
        },
        {
          q: "Will I get an EIN with my LLC?",
          a: "An EIN is included in our STANDARD and PREMIUM packages. If you choose the FREE package, you can either apply for an EIN yourself with the IRS or add our EIN service later."
        },
        {
          q: "Can non-US residents form an LLC?",
          a: "Yes, non-US residents can form an LLC in the United States. You do not need a Social Security Number (SSN). We assist international entrepreneurs throughout the entire process."
        },
        {
          q: "Do I need a business license after forming an LLC?",
          a: "Most businesses require at least one license or permit depending on location and industry. Our PREMIUM package includes comprehensive business license research to ensure compliance."
        },
        {
          q: "Which state is best for forming an LLC?",
          a: "The best state depends on your business goals. If you operate locally, forming an LLC in your home state is usually best. States like Delaware and Wyoming offer advantages for certain businesses."
        },
        {
          q: "Will my personal assets be protected?",
          a: "Yes, an LLC provides limited liability protection, meaning your personal assets are generally protected from business debts and lawsuits, provided you maintain proper compliance."
        }
      ].map((faq, idx) => {
        const [open, setOpen] = useState(false);

        return (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-lg font-bold text-gray-900">
                {faq.q}
              </h3>
              <span
                className={`ml-4 text-2xl font-bold transition-transform duration-300 ${
                  open ? "rotate-45 text-cyan-600" : "text-gray-400"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-300 ${
                open ? "block" : "hidden"
              }`}
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section className="bg-gradient-to-br from-green-500 via-green-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
            Join over 500 entrepreneurs who have trusted us to form their LLC. Get started today for free.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-green-600 px-16 py-6 rounded-full text-2xl font-black hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105">
            START MY FREE LLC
          </button>
          <div className="mt-8 text-green-100">
            <p className="text-lg">Questions? Call us at +852 6553 7375</p>
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
