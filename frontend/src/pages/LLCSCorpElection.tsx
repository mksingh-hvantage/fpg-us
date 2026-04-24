import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Check, DollarSign, FileText, Scale, TrendingDown, AlertCircle, ArrowRight, Calculator, ChevronDown } from 'lucide-react';

export default function LLCSCorpElection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const faqs = [
    {
      question: "Does S-Corp election affect my LLC's liability protection?",
      answer: "No. Your LLC's limited liability protection remains completely intact. S-Corp status is purely a tax classification and doesn't change your business structure or legal protections. Your personal assets stay protected from business liabilities exactly the same as before the election. Whether you're sued by a customer, creditor, or employee, your personal home, savings, and other assets remain shielded. This is one of the biggest advantages of electing S-Corp taxation—you get significant tax savings without sacrificing the legal protection that made you choose an LLC in the first place."
    },
    {
      question: "How much can I actually save with S-Corp election?",
      answer: "Savings vary considerably based on your business profit and the reasonable salary you determine. Many business owners see annual savings between $3,000 and $10,000+. For example, if you make $90,000 in profit, you could save approximately $6,000 per year. However, the actual amount depends on several factors: your profit level, your reasonable salary determination, your business location and industry, and your filing status. Lower-profit businesses may not see enough savings to justify the administrative overhead. Generally, S-Corp election makes financial sense when your business generates at least $50,000-$60,000 in annual profit."
    },
    {
      question: "When should I file Form 2553?",
      answer: "Timing is critical for maximizing tax benefits. For S-Corp status to begin in the current tax year, you must file within 2 months and 15 days of the start of your tax year. If you miss this deadline, the election typically applies to the following tax year instead. However, the IRS does allow for late elections in certain circumstances if you can demonstrate reasonable cause. If you're already well into the tax year when you discover S-Corp election would benefit you, don't despair—consult with a tax professional about requesting relief from the IRS for a late election. Even if your election applies to the next tax year, you'll start saving immediately in that year."
    },
    {
      question: "Can multi-member LLCs elect S-Corp status?",
      answer: "Yes. Multi-member LLCs (those with multiple owners) can absolutely elect S-Corp taxation. However, there are important requirements to follow: all members must consent to the election, all members must sign Form 2553, and each member will be subject to reasonable compensation rules. When distributions are made, each member receives their proportionate share based on their ownership percentage. The IRS requires that each member who works in the business receive a reasonable salary for their work. This can be more complex to administer than single-member S-Corp elections, but the tax savings are often still substantial."
    },
    {
      question: "What if my business doesn't profit enough?",
      answer: "S-Corp election typically makes financial sense when your business generates at least $50,000-$60,000 in annual profit. Below this threshold, the tax savings may not justify the additional administrative requirements like payroll processing, quarterly filings, and accounting complexity. For example, if your business only nets $30,000 annually, the minimal tax savings might only be $1,500-$2,000, which doesn't offset the extra costs and effort. As your business grows, it becomes increasingly attractive. Many successful entrepreneurs wait until reaching the $60,000+ profit threshold before making the election."
    },
    {
      question: "Can I reverse my S-Corp election later?",
      answer: "Yes, you can revoke your S-Corp election if circumstances change. To revoke, you must file a formal revocation statement with the IRS. However, after revoking, there's an important restriction: you typically must wait 5 years before re-electing S-Corp status unless you receive specific IRS permission. This waiting period exists to prevent tax gaming and frequent elections. Given this restriction, you should only revoke if you're confident the election no longer makes sense for your business. If circumstances change temporarily—such as a down year—continuing the election is usually better than revoking and waiting 5 years to re-elect."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-cyan-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            File Your S Corporation Tax Election
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete and submit Form 2553 to reduce your tax burden while maintaining your LLC's liability protection
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-700 transition-colors inline-flex items-center gap-2">
            File S Corp Election
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Standard LLC Tax Flow */}
        <section className="mb-20">
          <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-cyan-600" />
              Understanding Standard LLC Taxation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              By default, LLC owners face a multi-layered tax structure that can significantly impact take-home income:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl">
                <div className="text-3xl font-extrabold text-cyan-600 mb-2">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Business Revenue</h3>
                <p className="text-sm text-gray-600">All income generated by your LLC</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                <div className="text-3xl font-extrabold text-indigo-600 mb-2">2</div>
                <h3 className="font-bold text-gray-900 mb-2">Operating Expenses</h3>
                <p className="text-sm text-gray-600">Deductible business costs and overhead</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl">
                <div className="text-3xl font-extrabold text-cyan-600 mb-2">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Net Profit</h3>
                <p className="text-sm text-gray-600">Revenue minus expenses</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <div className="text-3xl font-extrabold text-red-600 mb-2">4</div>
                <h3 className="font-bold text-gray-900 mb-2">Self-Employment Tax</h3>
                <p className="text-sm text-gray-600">Approximately 15.3% on all profits</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Self-Employment Tax Challenge</h4>
                  <p className="text-gray-700">
                    After self-employment taxes, you still owe federal income tax and state income tax.
                    An S-Corp election specifically targets the self-employment tax portion, offering substantial savings opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Savings Comparison */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <TrendingDown className="w-10 h-10 text-green-600" />
              <h2 className="text-3xl font-extrabold text-gray-900">Real Tax Savings Example</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard LLC */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Standard LLC</h3>
                  <p className="text-gray-600">Traditional tax structure</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Business Profit</span>
                    <span className="font-bold text-gray-900">$90,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Self-Employment Tax (15.3%)</span>
                    <span className="font-bold text-red-600">-$13,500</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-extrabold text-gray-900">After SE Tax</span>
                    <span className="text-lg font-extrabold text-gray-900">$76,500</span>
                  </div>
                </div>
              </div>

              {/* S-Corp */}
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="inline-block bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-2">
                    RECOMMENDED
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">S-Corp Election</h3>
                  <p className="text-gray-600">Optimized tax strategy</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Reasonable Salary</span>
                    <span className="font-bold text-gray-900">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Payroll Tax on Salary</span>
                    <span className="font-bold text-cyan-600">-$7,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Distribution (No SE Tax)</span>
                    <span className="font-bold text-green-600">+$40,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-extrabold text-gray-900">After Payroll Tax</span>
                    <span className="text-lg font-extrabold text-gray-900">$82,500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-600 rounded-xl text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Calculator className="w-6 h-6" />
                <span className="text-lg font-bold">Potential Annual Savings</span>
              </div>
              <div className="text-5xl font-extrabold">$6,000+</div>
              <p className="mt-2 text-green-100">Your actual savings may vary based on your specific situation</p>
            </div>
          </div>
        </section>

        {/* Reasonable Compensation Requirement */}
        <section className="mb-20">
          <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-cyan-600" />
              The Reasonable Salary Rule
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 text-lg">
                The IRS mandates that S-Corp owners pay themselves a "reasonable salary" that reflects fair market value
                for the work performed. This critical requirement prevents business owners from avoiding payroll taxes entirely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
                <h3 className="font-extrabold text-red-900 text-xl mb-4">What NOT to Do</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray-700">
                    <span className="text-red-500 font-extrabold">×</span>
                    <span>Paying yourself $10,000 salary and taking $80,000 in distributions</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="text-red-500 font-extrabold">×</span>
                    <span>Taking distributions only with no salary whatsoever</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="text-red-500 font-extrabold">×</span>
                    <span>Artificially minimizing salary to maximize tax savings</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="font-bold text-red-900">⚠️ Risk: IRS audits, penalties, and back taxes</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
                <h3 className="font-extrabold text-green-900 text-xl mb-4">What to Do</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Research comparable salaries in your industry and location</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Consider your role, experience, and hours worked</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Consult with a tax professional for guidance</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="font-bold text-green-900">✓ Result: Compliant and defensible compensation structure</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Administrative Requirements */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Additional Administrative Considerations</h2>

            <p className="text-lg text-gray-600 mb-8">
              Electing S-Corp status introduces modest administrative overhead that's manageable with proper planning:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-extrabold text-gray-900 mb-3">Payroll System Setup</h3>
                <p className="text-gray-600">
                  Establish a formal payroll process to pay yourself the required reasonable salary on a regular schedule.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-extrabold text-gray-900 mb-3">Payroll Tax Submissions</h3>
                <p className="text-gray-600">
                  File quarterly payroll taxes and maintain compliance with federal and state payroll requirements.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-extrabold text-gray-900 mb-3">Payroll Software</h3>
                <p className="text-gray-600">
                  Consider using payroll software or services to automate tax calculations, filings, and compliance tracking.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-cyan-50 rounded-xl">
              <p className="text-gray-700">
                <span className="font-bold">Good news:</span> While these requirements add a layer of complexity,
                the tax savings typically far outweigh the administrative effort, especially for businesses earning over $50,000 annually.
              </p>
            </div>
          </div>
        </section>

        {/* Filing Options */}
        <section className="mb-20">
          <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl text-gray-900 font-extrabold mb-8">How to File Form 2553</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DIY Option */}
              <div className="bg-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-extrabold mb-6">Do It Yourself</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold">1</div>
                    <p>Download Form 2553 from the IRS website</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold">2</div>
                    <p>Complete all required sections accurately</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold">3</div>
                    <p>Obtain signatures from all shareholders</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold">4</div>
                    <p>Mail or fax the completed form to the IRS</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-600">
                  <p className="text-slate-300 text-sm">Best for those comfortable with tax forms and IRS procedures</p>
                </div>
              </div>

              {/* Professional Service Option */}
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-8 border-2 border-cyan-400">
                <div className="inline-block bg-white text-cyan-600 text-sm font-bold px-4 py-1 rounded-full mb-4">
                  HASSLE-FREE
                </div>
                <h3 className="text-2xl font-extrabold mb-6">Professional Service</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 items-start">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p>Expert preparation of your Form 2553</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p>Accuracy review to prevent rejection</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p>Direct submission to the IRS on your behalf</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p>Peace of mind with professional oversight</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-cyan-500">
                  <p className="text-cyan-100 text-sm">Recommended for busy entrepreneurs who want it done right</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>

            <div className="space-y-3 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-cyan-400 transition-colors">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-transparent hover:from-cyan-50 transition-colors text-left"
                  >
                    <h3 className="font-bold text-lg text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 py-6 bg-gradient-to-b from-cyan-50 to-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-50 to-cyan-50 rounded-xl border border-cyan-200">
              <p className="text-gray-700 text-center">
                <span className="font-bold text-cyan-900">Still have questions?</span> Consider consulting with a tax professional who can provide personalized advice based on your specific business situation.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Reduce Your Tax Burden?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              File your S Corporation tax election today and start saving thousands on self-employment taxes
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-cyan-50 transition-colors inline-flex items-center gap-2 shadow-lg">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-cyan-200 mt-6 text-sm">
              Professional preparation and filing assistance available
            </p>
          </div>
        </section>
      </div>
            <GetStartedModal
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                          selectedBusinessType={selectedBusinessType}
                        />
    </div>
  );
}
