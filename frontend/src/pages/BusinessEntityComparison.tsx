import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Check, X, AlertCircle, Download, ArrowRight } from 'lucide-react';

export default function BusinessEntityComparison() {
  const [active, setActive] = useState<'intro' | 'llc' | 'protection' | 'tax'>('intro');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-red-600 via-cyan to-yellow-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Learn About the Difference Between LLCs, S Corporations, C Corporations, and Nonprofits
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Choosing the right business structure is one of the most important decisions you'll make. Compare the key features, benefits, and considerations of each entity type to find the perfect fit for your business goals.
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-flex items-center bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-black transition-colors shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5 mr-2" />
              Download Comparison Guide
            </button>
          </div>
        </div>
      </section>

          <section id="entities" className="py-16 lg:py-20 bg-cyan-100/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

      {/* LEFT TABS */}
      <aside className="lg:col-span-4">
        <div className="sticky top-24">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Business Entity Comparison:
            <br />Choose the Right Structure for You
          </h3>

          <ul className="border rounded-xl overflow-hidden bg-white">
            {[
              { id: 'intro', label: 'Different Types of Corporate Structures' },
              { id: 'llc', label: 'Limited Liability Company (LLC)' },
              { id: 'protection', label: 'LLC Limited Liability Protection' },
              { id: 'tax', label: 'Types of Tax an LLC is Liable For' },
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id as any)}
                  className={`w-full text-left px-5 py-4 text-sm transition-all
                    ${
                      active === item.id
                        ? 'cursor-pointer bg-cyan-50 text-cyan-600 font-semibold border-l-4 border-cyan-500'
                        : 'text-gray-700 hover:bg-gray-50 cursor-pointer'
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* RIGHT TAB CONTENT */}
      <div className="lg:col-span-8">

        {active === 'intro' && (
          <div className="space-y-6">
  <h1 className="text-3xl font-extrabold text-gray-900">
    Different Types of Corporate Structures
  </h1>

  <p className="text-lg text-gray-700">
    Choosing the right business structure is one of the most important decisions
    you’ll make when starting a company. Your choice impacts everything from
    taxes and personal liability to daily operations and long-term growth.
  </p>

  <p className="text-lg text-gray-700">
    In the United States, most businesses fall into one of four primary entity
    types: Limited Liability Companies (LLCs), S Corporations, C Corporations,
    and nonprofit organizations. Each structure offers distinct advantages
    depending on your business goals.
  </p>

  <h3 className="text-xl font-bold text-gray-900">
    Common Business Structures Explained
  </h3>

  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>
      <strong>Limited Liability Company (LLC):</strong> A flexible and popular
      option for small businesses that combines liability protection with simple
      tax treatment.
    </li>
    <li>
      <strong>S Corporation:</strong> Designed to help businesses avoid double
      taxation while maintaining corporate protections.
    </li>
    <li>
      <strong>C Corporation:</strong> Ideal for larger businesses planning to
      raise capital or issue stock to investors.
    </li>
    <li>
      <strong>Nonprofit Organization:</strong> Built for charitable, educational,
      or social causes and eligible for tax-exempt status.
    </li>
  </ul>

  <h3 className="text-xl font-bold text-gray-900">
    How to Choose the Right Structure
  </h3>

  <p className="text-lg text-gray-700">
    The best structure depends on factors such as how many owners your business
    will have, whether you plan to raise outside investment, and how you prefer
    to be taxed. Many entrepreneurs start with an LLC due to its simplicity and
    flexibility.
  </p>

  <p className="text-lg text-gray-700">
    Understanding these differences early can help you avoid costly changes
    later and ensure your business is set up for long-term success.
  </p>
</div>
        )}

        {active === 'llc' && (
          <div className="space-y-8">
  {/* Heading */}
  <h2 className="text-3xl font-extrabold text-gray-900">
    Limited Liability Company (LLC)
  </h2>

  {/* Intro Paragraph */}
  <p className="text-lg text-gray-700">
    A Limited Liability Company (LLC) is one of the most popular business structures
    for startups, entrepreneurs, and small business owners. It combines the
    flexibility of a sole proprietorship with the legal protection of a corporation.
  </p>

  {/* Why Choose an LLC */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Why Choose an LLC?
    </h3>
    <p className="text-gray-700 mb-4">
      LLCs are designed to be simple to manage while offering essential legal and
      financial protections. This makes them an ideal choice for business owners
      who want flexibility without complex corporate formalities.
    </p>

    <div className="border rounded-xl p-6 bg-gray-50">
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>LLCs are fast and easy to set up in most states</li>
        <li>They offer a simple and flexible management structure</li>
        <li>Formation and maintenance costs are generally low</li>
        <li>Easier to manage than C Corporations or S Corporations</li>
        <li>Fewer ongoing compliance requirements and formal meetings</li>
        <li>Formed and regulated at the state level</li>
      </ul>
    </div>
  </div>

  {/* Liability Protection */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Personal Asset Protection
    </h3>
    <p className="text-gray-700">
      One of the biggest advantages of an LLC is limited liability protection.
      This means your personal assets—such as your home, savings, and personal
      property—are typically protected if the business faces lawsuits, debts,
      or financial obligations.
    </p>
  </div>

  {/* Tax Benefits */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Flexible Tax Treatment
    </h3>
    <p className="text-gray-700">
      LLCs benefit from pass-through taxation by default, which means business
      profits and losses are reported on the owners’ personal tax returns. This
      helps avoid double taxation that corporations often face.
    </p>
    <p className="text-gray-700 mt-2">
      Depending on your business needs, an LLC can also elect to be taxed as an
      S Corporation or C Corporation, offering even more tax planning flexibility.
    </p>
  </div>

  {/* Who Should Form an LLC */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Who Should Consider Forming an LLC?
    </h3>
    <p className="text-gray-700">
      An LLC is a great option if you’re looking for a balance between simplicity,
      affordability, and legal protection. It’s especially suitable for:
    </p>

    <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
      <li>First-time business owners and startups</li>
      <li>Freelancers, consultants, and independent contractors</li>
      <li>Small to medium-sized businesses</li>
      <li>Ecommerce and online businesses</li>
      <li>Real estate investors</li>
    </ul>
  </div>
</div>

        )}

        {active === 'protection' && (
          <div className="space-y-8">
  <div>
    <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
      LLC Limited Liability Protection
    </h2>
    <p className="text-lg text-gray-700">
      One of the biggest advantages of forming a Limited Liability Company (LLC)
      is the legal protection it provides to business owners. An LLC creates a
      clear separation between your personal assets and your business obligations.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Separation of Personal and Business Assets
    </h3>
    <p className="text-gray-700">
      When you operate as an LLC, your personal property—such as your home,
      car, and savings—is generally protected if the business incurs debt or
      faces legal action. Creditors typically cannot pursue your personal assets
      to settle business liabilities.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Protection From Business Debts and Lawsuits
    </h3>
    <p className="text-gray-700">
      If your LLC is sued or unable to pay its debts, liability is limited to the
      assets owned by the business. This protection helps reduce personal
      financial risk while allowing you to operate and grow your company with
      confidence.
    </p>
  </div>

  <div className="border rounded-xl p-6 bg-gray-50">
    <h3 className="text-lg font-bold text-gray-900 mb-3">
      What Limited Liability Protection Covers
    </h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li>Business loans and outstanding debts</li>
      <li>Legal claims and lawsuits against the company</li>
      <li>Employee-related disputes and obligations</li>
      <li>Contractual liabilities tied to business operations</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      When Liability Protection May Be Lost
    </h3>
    <p className="text-gray-700">
      LLC protection is not absolute. Personal liability may apply if owners
      personally guarantee loans, engage in fraudulent activity, or fail to
      maintain proper business separation—such as mixing personal and business
      finances.
    </p>
  </div>

  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded-lg">
    <p className="text-gray-800 font-semibold">
      Tip:
      <span className="font-normal ml-1">
        To maintain your LLC’s liability protection, keep accurate records,
        use a separate business bank account, and comply with all state filing
        and reporting requirements.
      </span>
    </p>
  </div>
</div>

        )}

        {active === 'tax' && (
          <div className="space-y-6">
  <h2 className="text-3xl font-extrabold text-gray-900">
    Types of Tax an LLC is Liable For
  </h2>

  <p className="text-lg text-gray-700">
    Limited Liability Companies (LLCs) can be subject to several types of taxes,
    depending on their business activities, location, and how the LLC chooses
    to be taxed at the federal level.
  </p>

  {/* Federal Income Tax */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Federal Income Tax
    </h3>
    <p className="text-gray-700">
      By default, LLCs benefit from <strong>pass-through taxation</strong>.
      This means the LLC itself does not pay federal income taxes. Instead,
      profits and losses pass through to the owners, who report them on their
      personal tax returns.
    </p>
  </div>

  {/* Self-Employment Tax */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Self-Employment Tax
    </h3>
    <p className="text-gray-700">
      LLC members who actively participate in the business may be required to
      pay self-employment taxes, which cover Social Security and Medicare.
      These taxes are based on the member’s share of the business income.
    </p>
  </div>

  {/* Payroll Taxes */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Payroll Taxes
    </h3>
    <p className="text-gray-700">
      If your LLC has employees, you are responsible for withholding and
      paying payroll taxes, including federal income tax withholding,
      Social Security, Medicare, and unemployment taxes.
    </p>
  </div>

  {/* Sales & Use Tax */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Sales and Use Tax
    </h3>
    <p className="text-gray-700">
      LLCs that sell taxable goods or services may need to collect and
      remit sales tax to the state. Sales tax requirements vary by state
      and depend on where your business has a physical or economic presence.
    </p>
  </div>

  {/* State & Local Taxes */}
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      State and Local Taxes
    </h3>
    <p className="text-gray-700">
      Some states impose additional taxes on LLCs, such as franchise taxes,
      annual report fees, or gross receipts taxes. These costs can vary
      significantly from one state to another.
    </p>
  </div>

  {/* Optional Tax Classification */}
  <div className="border rounded-xl p-5 bg-gray-50">
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Optional Tax Classification
    </h3>
    <p className="text-gray-700">
      LLCs may choose to be taxed as an <strong>S Corporation</strong> or
      <strong> C Corporation</strong> by filing the appropriate IRS forms.
      This option can sometimes reduce self-employment taxes or offer other
      strategic tax advantages, depending on the business.
    </p>
  </div>
</div>

        )}

      </div>
    </div>
  </div>
</section>


      <section id="comparison" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Complete Entity Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare all key features side-by-side to make an informed decision about your business structure
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 lg:p-6 text-left font-extrabold text-base lg:text-lg w-1/5">Feature</th>
                    <th className="p-4 lg:p-6 text-center font-extrabold text-base lg:text-lg w-1/5">LLC</th>
                    <th className="p-4 lg:p-6 text-center font-extrabold text-base lg:text-lg w-1/5">S Corporation</th>
                    <th className="p-4 lg:p-6 text-center font-extrabold text-base lg:text-lg w-1/5">C Corporation</th>
                    <th className="p-4 lg:p-6 text-center font-extrabold text-base lg:text-lg w-1/5">Nonprofit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Personal Liability Protection</td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Pass-Through Taxation</td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center text-gray-600 font-medium">N/A</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Self-Employment Tax Savings</td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center text-gray-600 font-medium">N/A</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Easy to Form & Maintain</td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><AlertCircle className="w-7 h-7 text-yellow-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><AlertCircle className="w-7 h-7 text-yellow-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Number of Owners</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 font-medium">Unlimited</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 font-medium">Max 100</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 font-medium">Unlimited</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 font-medium">No owners</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Foreign Ownership</td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Can Issue Stock</td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Stock Classes</td>
                    <td className="p-4 lg:p-6 text-center text-gray-600 font-medium">N/A</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 font-medium">Single class</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 font-medium">Multiple classes</td>
                    <td className="p-4 lg:p-6 text-center text-gray-600 font-medium">N/A</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Management Structure</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Member or manager-managed</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Board of directors</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Board of directors</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Board of directors</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Tax-Exempt Status</td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><X className="w-7 h-7 text-red-500 mx-auto" /></td>
                    <td className="p-4 lg:p-6 text-center"><Check className="w-7 h-7 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Ownership Transfer</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Requires agreement</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Stock transfer</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Easy stock transfer</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">No ownership</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                    <td className="p-4 lg:p-6 font-semibold text-gray-900">Best For</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Small businesses, freelancers</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Growing businesses with employees</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Businesses seeking investors</td>
                    <td className="p-4 lg:p-6 text-center text-gray-700 text-sm font-medium">Charitable organizations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-red-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Formation Costs & Complexity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the costs and ongoing requirements for each entity type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border-2 border-cyan-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-white">LLC</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Limited Liability Company</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Formation Cost</p>
                  <p className="text-3xl font-extrabold text-cyan-600">$50-$500</p>
                  <p className="text-sm text-gray-600 mt-1">Varies by state</p>
                </div>
                <ul className="text-left space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Simple formation process</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Minimal ongoing paperwork</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Annual reports required</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-white">S</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">S Corporation</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Formation Cost</p>
                  <p className="text-3xl font-extrabold text-blue-600">$100-$800</p>
                  <p className="text-sm text-gray-600 mt-1">Plus IRS election</p>
                </div>
                <ul className="text-left space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>More complex setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Payroll requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Annual meetings & records</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-white">C</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">C Corporation</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Formation Cost</p>
                  <p className="text-3xl font-extrabold text-slate-600">$100-$800</p>
                  <p className="text-sm text-gray-600 mt-1">Plus ongoing compliance</p>
                </div>
                <ul className="text-left space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Most complex structure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Extensive record-keeping</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strict compliance rules</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-white">NP</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Nonprofit</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Formation Cost</p>
                  <p className="text-3xl font-extrabold text-green-600">$400-$850</p>
                  <p className="text-sm text-gray-600 mt-1">IRS 501(c)(3) filing</p>
                </div>
                <ul className="text-left space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Most stringent process</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detailed documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ongoing transparency rules</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-started" className="py-16 lg:py-24 bg-gradient-to-br from-red-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose your business entity type and start your formation process today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/llc" className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Form an LLC</h3>
              <p className="text-gray-600 mb-4">Best for small businesses and freelancers</p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700">
                Get Started <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="/s-corporation" className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Form an S-Corp</h3>
              <p className="text-gray-600 mb-4">Save on taxes with payroll optimization</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                Get Started <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="/c-corporation" className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Form a C-Corp</h3>
              <p className="text-gray-600 mb-4">Ideal for raising capital from investors</p>
              <div className="flex items-center text-slate-600 font-semibold group-hover:text-slate-700">
                Get Started <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="/nonprofit" className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Form a Nonprofit</h3>
              <p className="text-gray-600 mb-4">Start a tax-exempt charitable organization</p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                Get Started <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
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
