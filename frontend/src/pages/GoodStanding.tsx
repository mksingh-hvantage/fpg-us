import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Award, ChevronDown, ChevronUp, Clock, MapPin, Shield, TrendingUp, Users } from 'lucide-react';

export default function GoodStanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Certificate"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
              Certificate of Good Standing
            </h1>
            <p className="text-2xl mb-8 text-green-50 leading-relaxed">
              Prove your business is legally compliant and authorized to operate. Required for loans, contracts, and business transactions.
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-green-50 transition-all shadow-2xl transform hover:scale-105">
              Order Certificate - $79
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">When You Need a Certificate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏦', title: 'Bank Loans', desc: 'Required by most lenders', image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { icon: '📝', title: 'Business Contracts', desc: 'Vendors may require proof', image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { icon: '🌎', title: 'Foreign Qualification', desc: 'Needed for multi-state ops', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { icon: '💼', title: 'Business Sales', desc: 'Required in M&A deals', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' }
            ].map((use, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img src={use.image} alt={use.title} className="w-full h-40 object-cover" />
                <div className="p-6 text-center">
                  <div className="text-5xl mb-3">{use.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{use.title}</h3>
                  <p className="text-gray-600 text-sm">{use.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Official certificate"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">What It Certifies</h2>
              <div className="space-y-4">
                {[
                  'Business is legally formed',
                  'All state fees are paid',
                  'Annual reports are filed',
                  'Business has not been dissolved',
                  'Authorized to conduct business',
                  'In compliance with state laws'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                    <svg className="w-7 h-7 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-8">Fast & Reliable Service</h2>
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-6xl font-black mb-4">$79</div>
            <p className="text-2xl text-green-100 mb-8">+ state fees (varies by state)</p>
            <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
              {[
                'Expedited processing available',
                'Certified copies',
                'Digital & physical delivery',
                'Guaranteed acceptance'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="inline-block bg-white text-green-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-green-50 transition-all shadow-xl">
              Order Your Certificate
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-4">Our Process</h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">Get your certificate in three simple steps, delivered faster than traditional methods</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Provide Business Info', desc: 'Tell us your business name, state, and entity type', icon: <Users className="w-12 h-12" /> },
              { step: '2', title: 'We Process Your Request', desc: 'Our team files with the Secretary of State and verifies compliance', icon: <Clock className="w-12 h-12" /> },
              { step: '3', title: 'Receive Your Certificate', desc: 'Get digital and physical copies, ready to use immediately', icon: <Award className="w-12 h-12" /> }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-black text-xl">
                      {item.step}
                    </div>
                    <div className="text-green-600">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-1 bg-green-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Processing Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Standard', days: '5-7 Business Days', price: '$79', popular: false },
              { label: 'Express', days: '2-3 Business Days', price: '$129', popular: true },
              { label: 'Rush', days: '1 Business Day', price: '$199', popular: false },
              { label: 'Same Day', days: '4-6 Hours', price: '$299', popular: false }
            ].map((option, idx) => (
              <div key={idx} className={`rounded-2xl p-8 text-center transition-all ${option.popular ? 'bg-green-600 text-white shadow-2xl scale-105' : 'bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl'}`}>
                {option.popular && <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Most Popular</div>}
                <h3 className={`text-2xl font-bold mb-2 ${option.popular ? '' : ''}`}>{option.label}</h3>
                <div className={`text-3xl font-black mb-2 ${option.popular ? 'text-green-100' : 'text-green-600'}`}>{option.days}</div>
                <div className={`text-xl font-bold ${option.popular ? 'text-green-100' : 'text-gray-600'}`}>{option.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">State Requirements Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { state: 'California', fee: '$35-50', time: '5-7 days', details: 'Valid for 5 years. Available in certified or plain copies.' },
              { state: 'Texas', fee: '$20-30', time: '3-5 days', details: 'Required for business transactions. Can be issued electronically.' },
              { state: 'New York', fee: '$25-40', time: '7-10 days', details: 'Must be certified by Secretary of State. Processing may vary.' },
              { state: 'Florida', fee: '$30-45', time: '3-7 days', details: 'Online and physical certificates available. Expedited processing offered.' },
              { state: 'Illinois', fee: '$30-45', time: '5-7 days', details: 'E-file option available for faster processing and delivery.' },
              { state: 'Pennsylvania', fee: '$25-35', time: '7-10 days', details: 'Apostille available. Certified copies required for legal purposes.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{item.state}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700"><span className="font-semibold text-emerald-600">State Fee:</span> {item.fee}</p>
                  <p className="text-gray-700"><span className="font-semibold text-emerald-600">Processing:</span> {item.time}</p>
                  <p className="text-gray-600 leading-relaxed">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-emerald-600 text-white rounded-2xl text-center">
            <p className="text-lg mb-3">Processing times and fees vary by state. Contact us for specific requirements for your state.</p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
              Check Your State
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long is a Certificate of Good Standing valid?', a: 'Most certificates are valid for 6 months to 1 year from the date of issue, depending on the state. Some states allow up to 5 years. We recommend checking with your specific state Secretary of State for exact validity periods.' },
              { q: 'Can I get a certificate if my business is behind on fees?', a: 'No, the business must be current on all state fees and requirements. If you are behind, you may need to file back taxes or fees first. Contact us for assistance with compliance requirements.' },
              { q: 'What if I need the certificate for a multi-state operation?', a: 'You will need a certificate from each state where you conduct business. We handle foreign qualification certificates as well, which is required to operate in states where your business was not originally formed.' },
              { q: 'How quickly will I receive my certificate?', a: 'We offer multiple processing speeds: Standard (5-7 days), Express (2-3 days), Rush (1 day), and Same Day (4-6 hours). Delivery includes both digital and physical copies.' },
              { q: 'Is the digital certificate accepted by banks and lenders?', a: 'Yes, most banks accept digital certificates. However, some institutions may require an officially certified copy with the state seal. We provide both formats to ensure acceptance.' },
              { q: 'What happens if my business is dissolved?', a: 'If your business is dissolved, a Certificate of Good Standing cannot be issued. However, you may be eligible for a Certificate of Status or Existence. We can help determine your business status.' },
              { q: 'Do I need to file anything with the state myself?', a: 'No, we handle all filing with the Secretary of State. You just provide your business information and we take care of the rest. Our service includes state filing fees.' },
              { q: 'Can I get an apostille on my certificate?', a: 'Yes, many states offer apostille services. An apostille is required for international use. Contact us if you need an apostilled certificate for foreign transactions.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-green-50 transition-colors text-left"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-8 py-6 bg-green-50 border-t">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-12 h-12" />, title: 'Secure & Confidential', desc: 'Your business information is encrypted and protected. We comply with all data privacy regulations.' },
              { icon: <TrendingUp className="w-12 h-12" />, title: 'Guaranteed Acceptance', desc: 'Our certificates are recognized and accepted by banks, government agencies, and all major institutions.' },
              { icon: <Award className="w-12 h-12" />, title: 'Expert Support', desc: 'Our team has over 15 years of experience helping businesses get compliant and obtain their certificates.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 shadow-lg text-center">
                <div className="flex justify-center mb-6 text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-2xl text-green-100 mb-10">Join thousands of businesses that trust us for their certificates</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-green-50 transition-all shadow-xl transform hover:scale-105">
              Order Now - $79
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-700 transition-all">
              Learn More
            </button>
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
