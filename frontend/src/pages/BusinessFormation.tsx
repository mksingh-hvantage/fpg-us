import { ChevronDown, Check, ArrowRight, Shield, Users, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function BusinessFormation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-slate-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Start Your Business Today
              </h1>
              <p className="text-xl text-cyan-100 mb-8">
                Effortless business formation in minutes. Choose your business structure, complete the paperwork, and get approved—all online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-bold hover:bg-cyan-50 transition flex items-center justify-center gap-2">
                  Start Free <ArrowRight className="w-5 h-5" />
                </button>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-cyan-700 transition">
                  Watch Demo
                </a>
              </div>
              <p className="text-cyan-100 mt-6">✓ No credit card required • ✓ Takes 15 minutes • ✓ 100% online</p>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Business formation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Choose Your Business Structure</h2>
            <p className="text-xl text-gray-600">Select the entity type that works best for your business needs</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'LLC',
                description: 'Perfect for solo entrepreneurs and small teams seeking liability protection and tax flexibility.',
                icon: '🏢',
                features: ['Personal liability protection', 'Simple taxation', 'Minimal paperwork']
              },
              {
                title: 'C-Corporation',
                description: 'Ideal for growing companies looking to attract investors and scale their operations.',
                icon: '📈',
                features: ['Unlimited shareholders', 'Strong investor appeal', 'Tax advantages']
              },
              {
                title: 'S-Corporation',
                description: 'Great for established businesses wanting to reduce self-employment taxes.',
                icon: '💼',
                features: ['Tax savings', 'Liability protection', 'Complex taxation']
              },
              {
                title: 'Sole Proprietorship',
                description: 'Simplest structure for freelancers and independent contractors.',
                icon: '👤',
                features: ['Easiest setup', 'Full control', 'Basic requirements']
              }
            ].map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-100">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 md:py-24 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to launch your business</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Type',
                description: 'Select the right business structure for your needs with our helpful guide.'
              },
              {
                step: '2',
                title: 'Complete Forms',
                description: 'Fill out required documents online with our easy-to-follow wizard.'
              },
              {
                step: '3',
                title: 'Review & Verify',
                description: 'Our experts review your application for accuracy and completeness.'
              },
              {
                step: '4',
                title: 'Launch Your Business',
                description: 'Receive your confirmation and start operating immediately.'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-1 bg-gradient-to-r from-cyan-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="Features"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Complete Solution</h2>
              <p className="text-lg text-gray-600 mb-8">Everything you need to start and scale your business</p>

              {[
                { icon: Shield, title: 'Legal Protection', desc: 'Comprehensive liability protection for you and your assets' },
                { icon: Users, title: 'Expert Support', desc: '24/7 access to business formation experts via chat and phone' },
                { icon: Clock, title: 'Fast Processing', desc: 'Most approvals within 48 hours, often same-day' },
                { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden fees or surprise charges ever' }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 mb-6">
                  <feature.icon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$99',
                period: 'per business',
                description: 'Perfect for new entrepreneurs',
                features: [
                  'Business formation documents',
                  'EIN registration assistance',
                  'Basic compliance calendar',
                  'Email support',
                  'Digital filing'
                ],
                cta: 'Get Started'
              },
              {
                name: 'Professional',
                price: '$299',
                period: 'per business',
                description: 'Most popular for small businesses',
                features: [
                  'Everything in Starter',
                  'Operating agreement templates',
                  'Phone support',
                  'Business license research',
                  'Compliance documents',
                  'Annual report reminders'
                ],
                cta: 'Get Started',
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: '$599',
                period: 'per business',
                description: 'For ambitious entrepreneurs',
                features: [
                  'Everything in Professional',
                  'Dedicated account manager',
                  'Priority 24/7 phone support',
                  'Amendment services',
                  'Custom document review',
                  'Business growth consulting'
                ],
                cta: 'Contact Sales'
              }
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-lg p-8 border-2 transition ${
                plan.highlighted
                  ? 'border-cyan-600 bg-gradient-to-br from-cyan-50 to-white shadow-xl transform scale-105'
                  : 'border-gray-200 bg-white hover:shadow-lg'
              }`}>
                {plan.highlighted && (
                  <div className="text-cyan-600 text-sm font-bold mb-4 inline-block px-3 py-1 bg-cyan-100 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className={`w-full py-3 rounded-lg font-semibold mt-6 transition ${
                  plan.highlighted
                    ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                    : 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about business formation</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does business formation take?',
                a: 'Most businesses are approved within 24-48 hours. Our fast-track service can get you approved on the same day in many cases.'
              },
              {
                q: 'What documents do I need to get started?',
                a: 'You typically just need your ID and basic business information. Our wizard will guide you through exactly what\'s needed for your business type.'
              },
              {
                q: 'Can I change my business structure later?',
                a: 'Yes, you can convert your business structure later if needed. We can help guide you through the conversion process and file all necessary amendments.'
              },
              {
                q: 'Do I need a lawyer to form a business?',
                a: 'Not necessarily. Our service handles all the standard filings and documentation. For complex situations, we can connect you with business attorneys.'
              },
              {
                q: 'What are the ongoing requirements?',
                a: 'Requirements vary by state and business type, but typically include annual reports, tax filings, and compliance updates. We send you reminders for all deadlines.'
              },
              {
                q: 'Is there a money-back guarantee?',
                a: 'Yes! If you\'re not satisfied within 30 days, we\'ll provide a full refund. No questions asked.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                <button
                  onClick={() => setActiveTab(activeTab === idx ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-gray-900 text-left">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 flex-shrink-0 transition ${
                    activeTab === idx ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeTab === idx && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have successfully launched their businesses with our platform. Get started in minutes, not weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition flex items-center justify-center gap-2">
              Start Your Business <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-cyan-700 transition">
              Schedule Consultation
            </button>
          </div>
          <p className="text-cyan-100 mt-6">✓ No credit card required • ✓ 30-day money-back guarantee • ✓ Expert support included</p>
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

