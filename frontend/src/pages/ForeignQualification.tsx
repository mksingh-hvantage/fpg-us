import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ForeignQualification() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 py-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Multi-state business"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-black mb-6 leading-tight drop-shadow-2xl">
            Foreign Qualification for LLCs and Corporations Made Simple
            </h1>

            <p className="text-2xl mb-8 text-cyan-50 leading-relaxed">
            Easily register your LLC or corporation to do business in another state with professional foreign qualification services. The Future Perfect Global LLC handles state filings, certificate of authority applications, compliance requirements, and registered agent support—so you can expand your business across multiple states quickly, legally, and without hassle.
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-teal-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-teal-50 transition-all shadow-2xl transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </section>


<section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80"
            alt="Foreign Qualification"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Understanding <span className="text-cyan-500">Foreign Qualification</span>
          </h2>

          <p className="text-lg text-gray-600 mb-5 leading-relaxed">
            Foreign Qualification is the legal process that allows your business
            to operate in a state other than the one where it was originally
            formed. While your company is considered <strong>"domestic"</strong>
            in its home state, it becomes <strong>"foreign"</strong> in any
            additional state where you conduct business.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            By completing the Foreign Qualification filing, your business
            receives official authorization from the new state, typically in the
            form of a <strong>Certificate of Authority</strong>. This approval
            ensures your company can legally operate, hire employees, open
            offices, and enter contracts in that state while staying fully
            compliant with state regulations.
          </p>
        </div>

      </div>
    </section>

    <section className="py-12 bg-gradient-to-r from-cyan-50 to-blue-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
      Trusted by <span className="text-cyan-600">500+ Entrepreneurs & Business Owners</span> Worldwide
    </h2>

    <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">

      <span className="text-cyan-600 font-bold text-lg">
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

      <section className="py-20 bg-cyan-100/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
      Requirements for <span className="text-cyan-500">Foreign Qualification</span>
    </h2>

    <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
      To receive a <strong>Certificate of Authority</strong>, your business must
      meet certain state requirements before legally operating in another state.
    </p>

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE STEPS */}
      <div className="space-y-12">

        {/* Step 1 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 text-gray-600 text-xl font-bold">
            1
          </div>

          <div>
            <h4 className="text-xl font-bold text-cyan-600 mb-2">
              File the Required State Documents
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Submit the official foreign qualification application to the
              Secretary of State in the state where you plan to operate,
              including any required registration forms and state filing fees.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 text-gray-600 text-xl font-bold">
            2
          </div>

          <div>
            <h4 className="text-xl font-bold text-cyan-600 mb-2">
              Provide a Certificate of Good Standing
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Most states require proof that your business is legally compliant
              in its home state. This document verifies that your company is
              active and in good standing.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 text-gray-600 text-xl font-bold">
            3
          </div>

          <div>
            <h4 className="text-xl font-bold text-cyan-600 mb-2">
              Appoint a Registered Agent
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Businesses must designate a registered agent in the new state to
              receive legal notices, compliance documents, and official
              government correspondence.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80"
            alt="Certificate of Good Standing"
            className="w-full"
          />
        </div>
      </div>

    </div>
  </div>
</section>

    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-5xl font-black text-center text-gray-900 mb-6">
      Why Choose Our <span className="text-cyan-500">Foreign Qualification</span> Service?
    </h2>

    <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
      Our platform simplifies multi-state business registration by handling
      compliance, paperwork, and ongoing monitoring so you can expand with confidence.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          step: '1',
          title: 'Compliance Made Simple',
          desc: 'Nationwide Registered Agent services ensure your business stays compliant across all states where you operate.',
          icon: '🛡️'
        },
        {
          step: '2',
          title: 'All-in-One Business Tools',
          desc: 'Manage filings, documents, and state requirements through a centralized dashboard designed for growing businesses.',
          icon: '⚙️'
        },
        {
          step: '3',
          title: 'Stay Organized',
          desc: 'Track deadlines, filings, and compliance requirements in one place to avoid missed reports or penalties.',
          icon: '📂'
        },
        {
          step: '4',
          title: 'Lifetime Compliance Alerts',
          desc: 'Receive automatic notifications about important state deadlines and legal requirements.',
          icon: '🔔'
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-black mb-4">
            {item.step}
          </div>

          <div className="text-5xl mb-4">{item.icon}</div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
      How to Get <span className="text-cyan-500">Foreign Qualification</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          icon: '🔎',
          title: 'Business Name Search',
          desc: 'We verify that your business name is available in the new state registry. If a conflict exists, we help you register a fictitious or assumed name so your business can operate legally.'
        },
        {
          icon: '👤',
          title: 'Registered Agent Selection',
          desc: 'Every state requires a Registered Agent to receive legal notices and compliance documents. We provide reliable nationwide Registered Agent services.'
        },
        {
          icon: '📄',
          title: 'File Certificate of Authority',
          desc: 'Our team prepares and files the necessary state documents and submits your Certificate of Good Standing to obtain the official Certificate of Authority.'
        },
        {
          icon: '🔔',
          title: 'Compliance Monitoring',
          desc: 'Stay compliant with ongoing alerts and reminders for important state deadlines, filings, and federal BOIR reporting requirements.'
        }
      ].map((step, idx) => (
        <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-4 border-teal-200 hover:border-teal-400 transition-all">
          <div className="text-5xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
          <p className="text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

<section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT IMAGE */}
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1614107151491-6876eecbff89?q=80"
          alt="Certificate of Authority"
          className="max-w-md w-full"
        />
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
        What Is a <span className="text-cyan-500">Certificate of Authority?</span>
      </h2>

      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        A Certificate of Authority is an official document issued by a state
        government that allows a business formed in another state to legally
        operate within its jurisdiction. Without this authorization, a company
        may face penalties, restrictions, or limitations on its ability to do
        business.
      </p>

      <p className="text-lg text-gray-600 mb-6">
        Registering for a Certificate of Authority helps businesses remain
        compliant while expanding operations into new markets.
      </p>

      <ul className="space-y-4 text-gray-700 text-lg">
        <li className="flex gap-3">
          <span className="text-cyan-500">•</span>
          Legally conduct business activities in states outside your home state.
        </li>

        <li className="flex gap-3">
          <span className="text-cyan-500">•</span>
          Maintain eligibility for business financing, licenses, and contracts.
        </li>

        <li className="flex gap-3">
          <span className="text-cyan-500">•</span>
          Reduce the risk of fines, penalties, and compliance violations.
        </li>
      </ul>

    </div>

  </div>
</section>


<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
        Do You Need <span className="text-cyan-500">Foreign Qualification?</span>
      </h2>

      <p className="text-lg text-gray-600 mb-8">
        Businesses expanding beyond their original state of formation may need
        to register as a foreign entity. This ensures the company remains
        compliant with local laws and regulations.
      </p>

      <ul className="space-y-4 text-gray-700 text-lg">

        <li className="flex gap-3">
          <span className="text-cyan-500">•</span>
          Operating a physical office, store, warehouse, or branch in another
          state.
        </li>

        <li className="flex gap-3">
          <span className="text-cyan-500">•</span>
          Hiring employees or maintaining a workforce located in a different
          state.
        </li>

        <li className="flex gap-3">
          <span className="text-cyan-500">•</span>
          Entering long-term contracts or conducting frequent business
          transactions across state lines.
        </li>

      </ul>

      <p className="text-gray-600 mt-8 leading-relaxed">
        If your business meets any of these conditions, completing foreign
        qualification helps protect your company, maintain compliance, and
        support smooth expansion into new markets.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <div className="bg-gray-100 rounded-3xl p-10 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1623607526795-e9c0cd3c273c?q=80"
          alt="Foreign Qualification"
          className="max-w-md w-full"
        />
      </div>
    </div>

  </div>
</section>

      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-6">After Obtaining <span className="text-cyan-500">Foreign Qualification</span></h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Once you receive your Certificate of Authority, these important steps ensure continued compliance
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Update Insurance', desc: 'Extend coverage to all operating states' },
              { icon: '📚', title: 'Multi-State Books', desc: 'Implement bookkeeping and tax compliance for each state' },
              { icon: '📋', title: 'Licenses & Permits', desc: 'Secure or renew business licenses in new states' },
              { icon: '📍', title: 'Business Listings', desc: 'Update Google My Business, Yelp, and directories' },
              { icon: '📬', title: 'Virtual Address', desc: 'Obtain mailbox or virtual address if needed' },
              { icon: '👨‍💼', title: 'Registered Agent', desc: 'Maintain agent service in each state' },
              { icon: '📊', title: 'Annual Reports', desc: 'File required reports in all operating states' },
              { icon: '📝', title: 'Update Contracts', desc: 'Revise agreements for state-specific laws' }
            ].map((step, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-gray-200">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-5xl font-black text-center text-gray-900 mb-16">
      Frequently Asked Questions About <span className="text-cyan-500">Foreign Qualification?</span>
    </h2>

    <div className="space-y-6">
      {[
        {
          q: 'What is foreign qualification for an LLC or corporation?',
          a: 'Foreign qualification is the legal process that allows an existing business to operate in a state other than where it was originally formed. It does not create a new company—it simply registers your existing entity to do business in another state.'
        },
        {
          q: 'How is foreign qualification different from forming a new business?',
          a: 'Foreign qualification expands your existing business into another state, while forming a new business creates a separate legal entity. Foreign qualification preserves your EIN, ownership structure, and company history.'
        },
        {
          q: 'When is a business considered “doing business” in another state?',
          a: 'A business is typically considered doing business if it has a physical office, warehouse, employees, contractors, or regularly meets clients in another state. Each state defines this differently, so requirements vary.'
        },
        {
          q: 'Do online businesses need foreign qualification?',
          a: 'Most online-only businesses do not need foreign qualification unless they have a physical presence such as inventory storage, employees, or fulfillment centers in another state.'
        },
        {
          q: 'What happens if I don’t foreign qualify when required?',
          a: 'Failing to foreign qualify can result in fines, back taxes, loss of legal rights to sue in that state, and penalties that accumulate over time.'
        },
        {
          q: 'How long does the foreign qualification process take?',
          a: 'Processing times vary by state but generally range from 1 to 6 weeks. Expedited filing options are available in many states for an additional fee.'
        },
        {
          q: 'How much does foreign qualification cost?',
          a: 'Costs vary by state and typically include state filing fees plus service fees. Pricing depends on the state’s requirements and whether expedited processing is selected.'
        },
        {
          q: 'Do I need a registered agent in the foreign state?',
          a: 'Yes. Every state requires a registered agent with a physical address in that state to receive legal documents and government notices on your behalf.'
        },
        {
          q: 'Can I use the same business name in every state?',
          a: 'Not always. If your business name is unavailable in the new state, you may need to register a DBA (Doing Business As) name. We verify name availability before filing.'
        },
        {
          q: 'Will my EIN change after foreign qualification?',
          a: 'No. Your EIN remains the same because foreign qualification does not create a new entity—it only registers your existing business in another state.'
        },
        {
          q: 'Do I need foreign qualification in every state I sell to?',
          a: 'No. Selling to customers in another state does not automatically require foreign qualification. Physical presence or operational activity typically triggers the requirement.'
        },
        {
          q: 'Is foreign qualification required before hiring employees?',
          a: 'Yes. Most states require foreign qualification before hiring employees or opening payroll in that state.'
        },
        {
          q: 'Can I foreign qualify in multiple states at once?',
          a: 'Yes. You can register your business in multiple states simultaneously. Each state requires a separate filing and registered agent.'
        },
        {
          q: 'What documents are needed for foreign qualification?',
          a: 'Required documents typically include a Certificate of Good Standing from your home state, formation documents, and registered agent information.'
        },
        {
          q: 'Does foreign qualification affect taxes?',
          a: 'Foreign qualification may create tax obligations in the new state, including income, sales, or payroll taxes. It’s recommended to consult a tax professional.'
        }
      ].map((faq, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
          >
            <span className="text-lg font-bold text-gray-900 pr-6">
              {faq.q}
            </span>
            {openFaq === idx ? (
              <ChevronUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
            )}
          </button>

          {openFaq === idx && (
            <div className="px-6 pb-6">
              <p className="text-gray-700 leading-relaxed">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>


      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Expand Your Business?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Get expert help with foreign qualification and ensure your multi-state compliance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="tel:18884623453" className="flex items-center gap-3 text-2xl font-bold hover:text-cyan-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +858-952-4549
            </a>
          </div>
          <p className="text-gray-400 mb-8">Monday - Friday, 9 AM - 6 PM CST</p>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-2 text-white font-bold">4.7/5 on Trustpilot</span>
          </div>
          <p className="text-sm text-gray-400 mt-8">
            Learn more at{' '}
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              The Future Perfect Global LLC-FZ
            </a>
          </p>
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
