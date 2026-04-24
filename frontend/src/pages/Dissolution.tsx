import { CheckCircle2, FileText, Users, DollarSign, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function Dissolution() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const steps = [
    {
      icon: Users,
      title: "Approve the LLC Dissolution",
      desc: "The first step in the LLC dissolution process is obtaining approval from the company members. Most LLC operating agreements require a formal vote before the business can be closed.",
      points: [
        "Hold a member meeting and conduct a formal vote to approve dissolving the LLC.",
        "Follow the procedures defined in your LLC operating agreement.",
        "Record the decision in official meeting minutes or a written resolution for legal documentation."
      ]
    },
    {
      icon: FileText,
      title: "File Articles of Dissolution with the State",
      desc: "To legally close an LLC, you must file Articles of Dissolution with the Secretary of State where the company was registered.",
      points: [
        "Complete the Articles of Dissolution or Certificate of Dissolution form.",
        "Submit the form online, by mail, or in person depending on state requirements.",
        "Pay the required state filing fee, typically ranging between $20 and $200."
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Complete the LLC Winding-Up Process",
      desc: "After filing dissolution documents, the business must complete the winding-up process by closing financial and legal obligations.",
      points: [
        "Pay all outstanding debts, loans, and vendor invoices.",
        "Distribute remaining company assets among LLC members according to ownership shares.",
        "File final federal and state tax returns and prepare a final accounting report."
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-800 py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business closure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-5xl font-black mb-6 leading-tight drop-shadow-2xl">
              How to Dissolve an LLC the Right Way
            </h1>

            <p className="text-2xl mb-8 text-gray-200 leading-relaxed">
              Learn the complete <strong>LLC dissolution process</strong> and how to 
              legally <strong>close an LLC or corporation</strong> while staying compliant 
              with state requirements. Avoid penalties, settle outstanding obligations, 
              and properly file your <strong>Articles of Dissolution</strong> to protect 
              yourself from future liabilities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }}
                className="bg-white text-gray-900 px-10 py-3 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
              >
                Order Now
              </button>
              <button
                onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white px-10 py-3 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all shadow-2xl transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="learn-more" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Center Heading */}
    <div className="text-center max-w-5xl mx-auto mb-16">
      <h2 className="text-5xl font-black text-gray-900 mb-6">
        <span className='text-cyan-500'>LLC Dissolution:</span> How to Properly Close Your Business
      </h2>

      <p className="text-xl text-gray-700 leading-relaxed">
        If you're planning to <strong>dissolve an LLC</strong> or permanently 
        close your business, it’s important to follow the correct 
        <strong> LLC dissolution process</strong>. Properly shutting down your 
        company helps you stay compliant with state regulations, avoid future 
        legal liabilities, and complete the <strong>Articles of Dissolution filing</strong> 
        correctly.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Steps */}
      <div>
        <div className="space-y-6">
          {[
            {
              number: '1',
              title: 'Approve the Decision to Dissolve the LLC',
              desc: 'Start by holding a meeting with LLC members or directors to approve the decision to close the company according to the operating agreement and state business laws.',
              color: 'from-blue-600 to-blue-700'
            },
            {
              number: '2',
              title: 'Pay Debts and Settle Financial Obligations',
              desc: 'Before closing your business, ensure that all outstanding debts, taxes, and financial obligations are paid. Proper settlement protects you from future claims and penalties.',
              color: 'from-emerald-600 to-emerald-700'
            },
            {
              number: '3',
              title: 'File Articles of Dissolution and Cancel Licenses',
              desc: 'Submit the required Articles of Dissolution to your state authority and cancel any business permits, licenses, and registrations to officially complete the LLC dissolution process.',
              color: 'from-amber-600 to-amber-700'
            }
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-black flex-shrink-0`}>
                {step.number}
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="LLC dissolution process and closing a business legally"
          className="rounded-3xl shadow-2xl"
        />
      </div>

    </div>
  </div>
</section>

      <section className="py-12 bg-cyan-100/40">
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

      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-5xl font-black text-center text-gray-900 mb-4">
      LLC Dissolution vs. LLC Termination: Key Differences Explained
    </h2>

    <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
      When closing a business, it's important to understand the difference between 
      <strong> dissolving an LLC </strong> and officially <strong> terminating an LLC </strong>. 
      Both steps are essential to legally close your company and avoid future legal or financial liabilities.
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

      {/* Dissolution Card */}
      <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
          <FileText className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          LLC Dissolution
        </h3>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>LLC dissolution</strong> is the official process of beginning to 
          close a limited liability company. During this stage, business owners must 
          <strong>wind up company operations</strong>, pay outstanding debts, notify 
          creditors, cancel licenses, and file <strong>Articles of Dissolution</strong> 
          with the state. This step ensures the business is properly prepared for closure.
        </p>
      </div>

      {/* Termination Card */}
      <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          LLC Termination
        </h3>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>LLC termination</strong> is the final legal step after the 
          dissolution process is completed. At this stage, the company is 
          officially removed from state records and no longer exists as a 
          legal business entity. Proper termination protects members from 
          future taxes, compliance requirements, or legal obligations.
        </p>
      </div>

    </div>
  </div>
</section>

   <section className="py-20 bg-cyan-100/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            How to Dissolve an LLC: Step-by-Step Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Closing a business requires following the correct <strong>LLC dissolution process</strong>.
            From member approval to filing official documents and completing the
            <strong> winding-up process</strong>, each step ensures your company
            is legally closed and free from future liabilities.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-cyan-100 p-4 rounded-full">
                  <step.icon className="w-8 h-8 text-cyan-600" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6">
                {step.desc}
              </p>

              {/* Points */}
              <ul className="space-y-3 text-gray-600 text-sm">
                {step.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-4">Cost Analysis</h2>
            <p className="text-xl text-gray-600">Understanding the expenses involved in dissolving your LLC</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <DollarSign className="w-12 h-12 text-emerald-400" />
                <div className="text-left">
                  <div className="text-5xl font-black">$20 - $200</div>
                  <div className="text-xl text-gray-300">State Filing Fees</div>
                </div>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Filing fees vary by state. We'll provide exact fees for your location. Additional costs may include professional legal or accounting services if needed for complex situations.
              </p>
            </div>

            <div className="border-t border-gray-600 pt-10">
              <h3 className="text-2xl font-bold text-center mb-8">What's Included in Our Service</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Prepare Articles of Dissolution',
                  'Review operating agreement requirements',
                  'File with Secretary of State',
                  'Final tax return checklist',
                  'Asset distribution guidance',
                  'Debt settlement procedures'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-4">Additional Considerations</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Important steps to complete during the dissolution process
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Canceling Licenses and Permits</h3>
              <p className="text-gray-700 leading-relaxed">
                Your business must cancel state and local licenses, sales tax permits, and industry-specific credentials to avoid future liabilities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notifying Creditors and Stakeholders</h3>
              <p className="text-gray-700 leading-relaxed">
                Informing creditors, customers, and other parties about dissolution maintains relationships and ensures smooth winding-up.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Record-Keeping Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                Maintaining dissolution documentation, final tax returns, and accounting records for several years is recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What distinguishes dissolving from terminating an LLC?',
                a: 'Dissolution is the process of formally closing the LLC, which includes winding up its affairs, settling debts, and distributing remaining assets. Termination is the final step after dissolution, where the LLC ceases to exist as a legal entity. Both steps are necessary to prevent member liability.'
              },
              {
                q: 'How do you close an LLC?',
                a: 'To close an LLC, you must first hold a meeting and vote to dissolve according to your operating agreement. Then file Articles of Dissolution with your Secretary of State. Finally, wind up the LLC\'s affairs by settling debts, distributing assets, filing final tax returns, and canceling licenses and permits.'
              },
              {
                q: 'Must I notify the IRS when closing my business?',
                a: 'Yes, you must notify the IRS by filing final federal tax returns using Form 1065 (partnership), Form 1120 (C corporation), or Form 1120S (S corporation), depending on your tax classification. Be sure to check the "final return" box on these forms. Your EIN will be marked as closed but remains assigned to your dissolved business.'
              },
              {
                q: 'What are the costs associated with LLC dissolution?',
                a: 'State filing fees for Articles of Dissolution typically range from $20 to $200, depending on your state. Additional costs may include professional legal or accounting services if your situation is complex, such as when dealing with significant assets, debts, or multiple stakeholders.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-gray-50 rounded-2xl p-8 group border-2 border-gray-200 hover:border-gray-400 transition-all shadow-sm hover:shadow-md">
                <summary className="font-bold text-xl text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <svg className="w-5 h-5 text-gray-700 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-6 text-gray-700 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-black mb-6">Simplify Your Business Exit</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let us handle the paperwork and guide you through the entire dissolution process. Ensure compliance, avoid future liabilities, and close your company with confidence.
          </p>
          <button
            onClick={() => {
              setSelectedBusinessType('');
              setIsModalOpen(true);
            }}
            className="bg-white text-gray-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
          >
            Start Your Dissolution
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
