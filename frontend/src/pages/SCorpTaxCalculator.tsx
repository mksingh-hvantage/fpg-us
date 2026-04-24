import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
import { DollarSign, Shield, Wallet, Receipt, CheckCircle } from 'lucide-react';

export default function SCorpTaxCalculator() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [income, setIncome] = useState('100000');
  const [salary, setSalary] = useState('60000');

  const calculateSavings = () => {
    const totalIncome = parseFloat(income) || 0;
    const reasonableSalary = parseFloat(salary) || 0;
    const distributions = totalIncome - reasonableSalary;

    const selfEmploymentTaxRate = 0.153;
    const llcTax = totalIncome * selfEmploymentTaxRate;
    const sCorpTax = reasonableSalary * selfEmploymentTaxRate;
    const savings = llcTax - sCorpTax;

    return {
      llcTax: llcTax.toFixed(0),
      sCorpTax: sCorpTax.toFixed(0),
      savings: savings.toFixed(0),
      distributions: distributions.toFixed(0),
      reasonableSalary: reasonableSalary.toFixed(0)
    };
  };

  const results = calculateSavings();

  return (
    <div className="bg-white">
      <Helmet>
  <title>
    S Corporation Tax Calculator – Calculate S Corp Taxes USA | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Use the S Corporation tax calculator to estimate federal and state tax liabilities for your S Corp in the USA. Get accurate calculations and expert guidance from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/taxes/s-corporation-tax-calculator"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="S corporation tax calculator USA, S corp tax calculator, S corp tax estimate, S corporation taxes calculation, federal and state S corp tax"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/taxes/s-corporation-tax-calculator"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/taxes/s-corporation-tax-calculator"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="S Corporation Tax Calculator – Estimate S Corp Taxes"
  />
  <meta
    property="og:description"
    content="Estimate your S Corporation tax liability with our S Corp tax calculator. Includes federal and state tax estimates and expert tax planning guidance."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/taxes/s-corporation-tax-calculator"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Business & Tax Tools"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="S Corporation Tax Calculator – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="S Corporation Tax Calculator – Calculate S Corp Taxes"
  />
  <meta
    name="twitter:description"
    content="Use the S Corp tax calculator to estimate federal & state tax liabilities for your S corporation."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebTool",
      "name": "S Corporation Tax Calculator",
      "url": "https://us.thefutureperfectglobal.com/taxes/s-corporation-tax-calculator",
      "description": "An interactive tax calculator to estimate federal and state S corporation tax liabilities in the USA.",
      "applicationCategory": "BusinessTaxCalculator",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        }
      }
    }`}
  </script>
</Helmet>

      <section className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-cyan-800 text-white py-16 overflow-hidden">

  {/* Subtle background glow */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.4),transparent_40%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

    {/* Badge */}
    <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 text-cyan-300 text-sm font-semibold tracking-wide backdrop-blur">
      Smart Tax Strategy for Business Owners
    </div>

    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
      Save Thousands with <span className="text-cyan-200">S-Corp Tax Election</span>
    </h1>

    {/* SEO Optimized Content */}
    <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-10">
      Discover how electing <strong>S Corporation status</strong> can legally reduce your 
      <strong> self-employment taxes</strong> and maximize your business profits. 
      Our advanced <strong>S-Corp Tax Calculator</strong> helps small business owners, freelancers, 
      and LLCs estimate potential tax savings instantly and make smarter financial decisions.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="inline-flex items-center justify-center bg-white text-cyan-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-cyan-500/30 transition duration-300 transform hover:scale-105"
      >
        Calculate Your Tax Savings
      </button>

      <button
        className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition duration-300"
      >
        Learn How S-Corp Works
      </button>

    </div>

    {/* Trust Line */}
    <p className="mt-8 text-sm text-cyan-200 opacity-80">
      Trusted by entrepreneurs, consultants & growing businesses
    </p>

  </div>
</section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">
            What's your estimated yearly net income for the business and how much of that would you pay yourself as an S Corporation?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">Estimated yearly income</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-2xl font-black text-gray-500">$</span>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                  max="1000000"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">The salary you would pay yourself</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-2xl font-black text-gray-500">$</span>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 mx-auto">
                <span className="text-3xl font-black text-gray-700">L</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">LLC Taxes</h3>
              <p className="text-gray-600 text-center mb-6">An LLC is a smart choice for many businesses because of the flexibility in how you're taxed.</p>
              <div className="text-center">
                <div className="text-5xl font-black text-gray-900 mb-2">${results.llcTax}</div>
                <div className="text-gray-600">Self Employment Taxes paid as a Sole Proprietor</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-cyan-300 relative">
              <div className="absolute -top-4 -right-4 bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg">
                BEST SAVINGS
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4 mx-auto">
                <span className="text-3xl font-black text-cyan-700">S</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">S-Corp Taxes</h3>
              <p className="text-gray-600 text-center mb-6">With an S-Corp you'll only pay payroll taxes on your salary, not the entire business profit.</p>
              <div className="text-center">
                <div className="text-5xl font-black text-cyan-700 mb-2">${results.sCorpTax}</div>
                <div className="text-gray-600 mb-4">Taxes paid as a Corporation</div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <div className="text-sm text-gray-600 mb-1">With a salary of</div>
                  <div className="text-2xl font-black text-gray-900">${results.reasonableSalary}</div>
                  <div className="text-sm text-gray-600 mt-2 mb-1">and a dividend of</div>
                  <div className="text-2xl font-black text-gray-900">${results.distributions}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-2xl p-8 text-center shadow-xl">
            <div className="text-lg font-bold mb-2">Total Savings:</div>
            <div className="text-6xl font-black">${results.savings}</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            LLC vs S-Corp Tax Savings Breakdown
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how choosing an <strong>S Corporation (S-Corp)</strong> can help reduce your self-employment taxes and increase your take-home profit. This comparison shows real-world tax savings based on a $70,000 annual income.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 relative">

          {/* LLC Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 text-white font-bold rounded-lg">
                L
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                LLC Tax Structure
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              A Limited Liability Company (LLC) offers flexibility, but profits are subject to full self-employment tax, which can significantly increase your tax burden.
            </p>

            <div className="mb-6">
              <p className="text-sm text-gray-500">Estimated Self-Employment Tax</p>
              <p className="text-2xl font-bold text-gray-900">$10,710</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-500">Potential Tax Savings</p>
              <p className="text-3xl font-extrabold text-gray-900">$0</p>
            </div>

            <button className="w-full py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition">
              Order Now
            </button>
          </div>

          {/* S-Corp Card */}
          <div className="relative bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-300 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

            {/* Badge */}
            <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              SAVE $3,825
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white font-bold rounded-lg">
                S
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                S-Corp Tax Strategy
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Electing S-Corp status allows you to split income into salary and distributions, reducing self-employment taxes and maximizing net income.
            </p>

            <div className="mb-6">
              <p className="text-sm text-gray-500">Estimated Payroll Tax</p>
              <p className="text-2xl font-bold text-gray-900">$6,885</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-500">Estimated Tax Savings</p>
              <p className="text-3xl font-extrabold text-cyan-600">$3,825</p>
            </div>


            <button className="w-full py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition">
              Order Now
            </button>
          </div>

        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-gray-500 mt-10">
          *This is an estimated example. Actual S-Corp tax savings may vary based on salary structure and business income.
        </p>

      </div>
    </section>

      <section className="py-24 bg-cyan-100/40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        S-Corp Benefits Explained for Business Owners
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed">
        Discover how electing <strong>S Corporation (S-Corp) status</strong> can help reduce self-employment taxes, protect personal assets, and maximize profits. Many entrepreneurs switch from LLC to S-Corp to unlock smarter tax strategies and long-term financial growth.
      </p>
    </div>

    {/* Benefits */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

      {[
        {
          icon: Wallet,
          title: "Reduce Self-Employment Tax",
          desc: "Save money by splitting income into salary and distributions, lowering overall tax liability."
        },
        {
          icon: DollarSign,
          title: "Pass-Through Taxation",
          desc: "Avoid double taxation—profits pass directly to your personal tax return."
        },
        {
          icon: Shield,
          title: "Limited Liability Protection",
          desc: "Keep your personal assets safe from business debts and legal risks."
        },
        {
          icon: Receipt,
          title: "Business Tax Deductions",
          desc: "Claim deductions on expenses like office costs, travel, and equipment."
        }
      ].map((item, index) => (
        <div key={index} className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-cyan-400 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center">

          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 shadow-lg group-hover:scale-110 transition">
            <item.icon className="w-8 h-8 text-white" />
          </div>

          <h4 className="text-lg font-bold text-gray-900 mb-2">
            {item.title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Considerations */}
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10 max-w-4xl mx-auto mb-24">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Important S-Corp Requirements
      </h3>

      <div className="space-y-6">
        {[
          "Pay yourself a reasonable salary as required by IRS guidelines",
          "File IRS Form 2553 on time to elect S-Corp status",
          "Maintain proper accounting and corporate compliance"
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-600 mt-1" />
            <p className="text-gray-700 text-lg">{text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Comparison Section */}
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        S-Corp vs Sole Proprietor Tax Comparison
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Sole Proprietor */}
        <div className="p-8 rounded-2xl border border-red-200 bg-red-50 shadow-sm hover:shadow-md transition">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Sole Proprietorship
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li>• Pay self-employment tax on 100% income</li>
            <li>• No income splitting advantage</li>
            <li>• Higher overall tax burden</li>
          </ul>
        </div>

        {/* S-Corp */}
        <div className="p-8 rounded-2xl border border-cyan-300 bg-gradient-to-br from-cyan-50 to-teal-50 shadow-md hover:shadow-xl transition">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            S-Corporation
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li>• Pay tax only on salary portion</li>
            <li>• Distributions are not subject to SE tax</li>
            <li>• Significant tax savings potential</li>
          </ul>
        </div>

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
