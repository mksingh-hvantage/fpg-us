import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Form2553() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-600 to-cyan-600 py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Tax forms"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-black mb-6 leading-xl drop-shadow-2xl">
File IRS Form 2553 and Elect S Corporation Status for Your LLC
</h1>

<p className="text-2xl mb-8 text-amber-50 leading-relaxed">
Prepare and submit your S Corporation tax election with IRS Form 2553 to convert your LLC to an S Corp. This popular tax strategy can help business owners reduce self-employment taxes, maximize tax savings, and maintain the liability protection and flexibility of an LLC.
</p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-50 transition-all shadow-2xl transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-5xl mx-auto mb-10">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
        How LLCs Are Normally Taxed in the U.S.
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        In most cases, <strong>Limited Liability Companies (LLCs)</strong> are taxed under a 
        <strong> pass-through taxation system</strong>. This means business profits pass directly 
        to the owner’s personal tax return instead of being taxed separately at the company level. 
        Below is a simplified step-by-step process showing <strong>how LLC income is taxed</strong>.
      </p>
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Step 1 */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
        <div className="text-cyan-600 text-sm font-bold mb-3">
          STEP 01
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          Business Earns Revenue
        </h4>

        <p className="text-gray-600 leading-relaxed">
          Your <strong>LLC generates business income</strong> from sales, services, or other
          revenue streams during the financial year.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
        <div className="text-cyan-600 text-sm font-bold mb-3">
          STEP 02
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          Deduct Business Expenses
        </h4>

        <p className="text-gray-600 leading-relaxed">
          Subtract <strong>allowable business expenses</strong> such as rent, marketing,
          salaries, and operational costs from your total revenue.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
        <div className="text-cyan-600 text-sm font-bold mb-3">
          STEP 03
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          Determine Net Business Profit
        </h4>

        <p className="text-gray-600 leading-relaxed">
          The remaining amount becomes your <strong>LLC net profit</strong>, which is
          usually distributed to the owner or members.
        </p>
      </div>

      {/* Step 4 */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
        <div className="text-cyan-600 text-sm font-bold mb-3">
          STEP 04
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          Pay Self-Employment Tax
        </h4>

        <p className="text-gray-600 leading-relaxed">
          LLC owners typically pay around <strong>15.3% self-employment tax</strong>,
          covering Social Security and Medicare contributions.
        </p>
      </div>

      {/* Step 5 */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
        <div className="text-cyan-600 text-sm font-bold mb-3">
          STEP 05
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          Federal Income Tax
        </h4>

        <p className="text-gray-600 leading-relaxed">
          After self-employment tax, the remaining earnings are taxed according
          to <strong>U.S. federal income tax brackets</strong>.
        </p>
      </div>

      {/* Step 6 */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
        <div className="text-cyan-600 text-sm font-bold mb-3">
          STEP 06
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          State Income Tax
        </h4>

        <p className="text-gray-600 leading-relaxed">
          Depending on where your company operates, you may also pay
          <strong> state income tax on LLC profits</strong>.
        </p>
      </div>

    </div>

  </div>
</section>

          <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
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

<section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center max-w-5xl mx-auto mb-16">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
        LLC Tax vs S-Corporation Tax Strategy
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Understanding how <strong>LLC taxes work in the United States</strong> can
        help business owners reduce tax liability. By default, LLC profits are
        subject to <strong>self-employment tax</strong>. However, choosing to be
        taxed as an <strong>S Corporation</strong> may reduce payroll taxes and
        increase overall tax efficiency.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* Left Content */}
      <div className="lg:col-span-2 space-y-10">

        {/* Standard LLC Tax */}
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-3xl font-bold text-cyan-500 mb-4">
            Self-Employment Tax for a Standard LLC
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Under the standard <strong>LLC pass-through taxation model</strong>,
            all business profits flow directly to the owner’s personal tax
            return. These earnings are typically subject to
            <strong> self-employment tax</strong>, which covers Social Security
            and Medicare contributions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            For example, if your LLC generates <strong>$90,000 in net profit</strong>,
            the entire amount is generally subject to approximately
            <strong> 15.3% self-employment tax</strong>. In addition to this,
            owners must still pay <strong>federal and state income taxes</strong>
            based on their total earnings.
          </p>
        </div>

        {/* S Corp Tax */}
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-3xl font-bold text-cyan-500 mb-4">
            LLC Taxed as an S Corporation
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Many business owners choose to elect <strong>S Corporation taxation</strong>
            for their LLC because it can significantly reduce
            <strong> self-employment taxes</strong>. Instead of paying payroll
            taxes on all profits, owners split income between a reasonable
            salary and distributions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            For instance, if the owner pays themselves a
            <strong> $50,000 salary</strong>, payroll taxes apply only to that
            amount. The remaining <strong>$40,000 can be taken as a distribution</strong>,
            which is generally not subject to self-employment tax. This strategy
            can potentially save thousands of dollars in taxes each year while
            still complying with IRS rules.
          </p>
        </div>

      </div>

      {/* Right Tax Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 flex flex-col items-center justify-center">

        {/* Circle */}
        <div className="relative w-56 h-56 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-[18px] border-cyan-500"></div>
          <span className="text-4xl font-extrabold text-gray-900">
            $120K
          </span>
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Example Annual Business Revenue
        </h4>

        <div className="space-y-4 w-full">

          <div className="flex items-center justify-between text-gray-700">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-cyan-500"></span>
              <span>Net Profit</span>
            </div>
            <span className="font-semibold">$90,000</span>
          </div>

          <div className="flex items-center justify-between text-gray-700">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-cyan-200"></span>
              <span>Business Expenses</span>
            </div>
            <span className="font-semibold">$30,000</span>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>

<section className="py-20 bg-cyan-100/40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT – TAX PREVIEW CARD */}
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

        {/* Income */}
        <div className="mb-10">
          <h4 className="text-gray-500 text-sm mb-2">Estimated Annual Business Income</h4>
          <div className="text-4xl font-extrabold text-gray-900 mb-4">$63,000</div>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[63%] bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
          </div>

          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$0</span>
            <span>$50K</span>
            <span>$100K+</span>
          </div>
        </div>

        {/* Salary */}
        <div className="mb-10">
          <h4 className="text-gray-500 text-sm mb-2">
            Suggested Owner Salary (If Taxed as S-Corp)
          </h4>

          <div className="text-4xl font-extrabold text-gray-900 mb-4">$26,000</div>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[41%] bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
          </div>

          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$0</span>
            <span>$31.5K</span>
            <span>$63K</span>
          </div>
        </div>

        {/* Tax Comparison */}
        <div className="border-t pt-6 space-y-6">

          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-semibold text-gray-900">Standard LLC Taxes</h5>
              <p className="text-sm text-gray-500">
                Self-employment tax on full profit
              </p>
            </div>
            <span className="bg-cyan-50 text-cyan-700 px-4 py-1 rounded-full font-semibold">
              $9,639
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-semibold text-gray-900">LLC Taxed as S-Corp</h5>
              <p className="text-sm text-gray-500">
                Payroll tax only on owner salary
              </p>
            </div>
            <span className="bg-cyan-50 text-cyan-700 px-4 py-1 rounded-full font-semibold">
              $3,978
            </span>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <h5 className="font-bold text-lg text-gray-900">Estimated Tax Savings</h5>

            <span className="bg-green-50 text-green-700 px-4 py-1 rounded-full font-bold">
              $5,661
            </span>
          </div>

        </div>

      </div>

      {/* RIGHT – SEO CONTENT */}
      <div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Estimate Your LLC Tax Savings With an S-Corporation Election
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Many entrepreneurs operating a <strong>Limited Liability Company (LLC)</strong> pay
          unnecessary taxes because they remain under the default
          <strong> self-employment tax structure</strong>. By electing to have
          your LLC taxed as an <strong>S Corporation</strong>, you may legally
          reduce payroll taxes and improve overall tax efficiency.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Our <strong>S Corporation tax savings calculator</strong> helps business
          owners estimate how much money they could potentially save by
          splitting income between a reasonable salary and business
          distributions. This strategy is commonly used by growing
          businesses to reduce self-employment tax liability while staying
          compliant with IRS rules.
        </p>

        <div className="flex flex-wrap gap-4">

          <a href="/taxes/s-corporation-tax-calculator" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md transition">
            Try the S-Corp Tax Calculator
          </a>


        </div>

      </div>

    </div>

  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <span className="text-sm font-semibold text-cyan-500 uppercase tracking-wide">
          S Corporation Tax Strategy
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
          How to Set a Reasonable Salary for an S Corporation Owner
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          When a <strong>Limited Liability Company (LLC)</strong> elects to be taxed as an
          <strong> S Corporation</strong>, business owners must pay themselves a
          <strong> reasonable salary</strong>. The IRS requires this compensation
          because it ensures payroll taxes are properly paid before owners take
          additional income as distributions.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          A reasonable salary is generally based on what someone with similar
          skills, experience, and job responsibilities would earn in the same
          industry. Paying yourself an unrealistically low salary while taking
          large distributions could trigger <strong>IRS audits or penalties</strong>.
        </p>

        {/* Highlight box */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-8">
          <h4 className="font-semibold text-gray-900 mb-2">
            Example Scenario
          </h4>
          <p className="text-gray-600">
            If your business earns <strong>$90,000 in profit</strong>, the IRS may
            expect you to pay yourself a reasonable salary such as
            <strong> $45,000–$60,000</strong>. The remaining income can often be
            taken as a distribution, which may reduce overall
            <strong> self-employment tax liability</strong>.
          </p>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          To determine the right salary level, review industry compensation
          benchmarks, job roles, and local market rates. Many business owners
          also consult with a <strong>CPA or tax advisor</strong> to ensure their
          compensation strategy meets IRS requirements while maximizing
          <strong> tax efficiency</strong>.
        </p>

      </div>

      {/* RIGHT IMAGE CARD */}
      <div className="relative">

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=1200&auto=format&fit=crop"
            alt="Podcast entrepreneur discussing business salary strategy"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* floating stat card */}
        <div className="absolute -bottom-8 left-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">
            IRS Requirement
          </p>
          <p className="text-xl font-bold text-gray-900">
            Reasonable Owner Salary
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="py-20 bg-cyan-100/40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
        Administrative Responsibilities of Choosing S Corporation Tax Status
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Electing to have your <strong>LLC taxed as an S Corporation</strong> can
        significantly reduce <strong>self-employment taxes</strong>, but it also
        introduces additional administrative tasks. Business owners must follow
        specific payroll, reporting, and compliance requirements to remain
        compliant with IRS regulations.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 mb-6 text-xl">
          $
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Set Up a Monthly Payroll System
        </h3>

        <p className="text-gray-600 leading-relaxed">
          When your LLC elects <strong>S corporation taxation</strong>, you must
          run a formal payroll and pay yourself a <strong>reasonable salary</strong>.
          This includes withholding payroll taxes and submitting them to the IRS.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 mb-6 text-xl">
          📄
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          File Payroll and Tax Reports
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Businesses must regularly file payroll tax forms such as quarterly
          reports and annual filings. Accurate documentation helps ensure your
          <strong>S corp tax election</strong> remains compliant with IRS rules.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 mb-6 text-xl">
          🧾
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Maintain Proper Accounting Records
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Accurate bookkeeping is essential when managing an
          <strong>LLC taxed as an S corporation</strong>. Tracking salaries,
          distributions, and expenses ensures correct tax reporting and
          supports your financial compliance strategy.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Step-by-Step Guide to Filing an 
        <span className="text-cyan-600"> S Corporation Tax Election</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        If you want your LLC or business to be taxed as an <strong>S Corporation</strong>, 
        you must submit <strong>IRS Form 2553</strong>. Filing this form allows eligible 
        business owners to potentially reduce <strong>self-employment taxes</strong> and 
        optimize their overall tax strategy. Follow the steps below to successfully 
        complete your S-Corp tax election.
      </p>
    </div>

    {/* Steps */}
    <div className="space-y-8">

      {/* Step 1 */}
      <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white font-bold text-lg">
          1
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Visit the Official IRS Website
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Start the process by going to the official Internal Revenue Service website 
            where you can access resources related to the <strong>S Corporation tax election</strong> 
            and download the required tax forms.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white font-bold text-lg">
          2
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Locate the S Corporation Election Section
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Navigate to the section dedicated to <strong>S Corp tax election filing</strong>. 
            This area provides details about eligibility requirements, filing deadlines, 
            and instructions for submitting IRS Form 2553.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white font-bold text-lg">
          3
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Download IRS Form 2553
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Download <strong>Form 2553 – Election by a Small Business Corporation</strong>. 
            This is the official form used by LLCs and corporations to elect S-Corp 
            taxation with the IRS.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white font-bold text-lg">
          4
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Complete the Required Business Information
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Fill out Form 2553 with essential information including your 
            <strong>business name, EIN, shareholder details, ownership percentages,</strong> 
            and the effective date for your S-Corp tax election.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white font-bold text-lg">
          5
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Submit the Form to the IRS
          </h3>
          <p className="text-gray-600 leading-relaxed">
            After completing the form, submit it to the IRS using the approved 
            submission method, typically by <strong>mail or fax</strong>. Make sure 
            the form is filed within the required deadline to ensure eligibility.
          </p>
        </div>
      </div>

      {/* Step 6 */}
      <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white font-bold text-lg">
          6
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Wait for IRS Approval Notification
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Once your form has been processed, the IRS will send an official 
            confirmation letter notifying you that your <strong>S Corporation 
            election has been approved</strong>.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

{/* FAQ SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-5xl sm:text-5xl font-black text-gray-900 mb-6">
        Common Questions About LLC S-Corp Election
      </h2>
      <p className="text-xl text-gray-600">
        Everything you need to know about electing S-Corporation tax status
      </p>
    </div>

    <div className="space-y-5">
      {[
        {
          q: 'What is an S-Corp election for an LLC?',
          a: 'An S-Corp election allows an LLC to be taxed as an S Corporation by the IRS. This can help reduce self-employment taxes while keeping the LLC’s legal structure intact.'
        },
        {
          q: 'Why would an LLC choose S-Corp tax status?',
          a: 'Many LLCs elect S-Corp status to save on payroll and self-employment taxes. Owners can pay themselves a reasonable salary and take remaining profits as distributions.'
        },
        {
          q: 'How do I file an S-Corp election?',
          a: 'To elect S-Corp status, your LLC must file IRS Form 2553. The form must be completed accurately and submitted within IRS deadlines.'
        },
        {
          q: 'When is the deadline to file Form 2553?',
          a: 'Generally, Form 2553 must be filed within 75 days of forming your LLC or within 75 days of the start of the tax year you want the election to take effect.'
        },
        {
          q: 'Can an existing LLC elect S-Corp status?',
          a: 'Yes. Both newly formed and existing LLCs can elect S-Corp tax treatment, provided they meet IRS eligibility requirements.'
        },
        {
          q: 'Does an S-Corp election change my LLC legally?',
          a: 'No. The election only changes how your business is taxed. Your LLC structure, liability protection, and state registration remain the same.'
        },
        {
          q: 'What are the IRS requirements for S-Corp eligibility?',
          a: 'To qualify, your business must have no more than 100 shareholders, only allowable owners (U.S. individuals or certain trusts), and only one class of stock.'
        },
        {
          q: 'Will an S-Corp election reduce my taxes?',
          a: 'It can. Many business owners save money by reducing self-employment taxes, but tax savings depend on income level and reasonable salary rules.'
        },
        {
          q: 'What is a reasonable salary for an S-Corp owner?',
          a: 'The IRS requires S-Corp owners to pay themselves a reasonable salary based on industry standards, role, experience, and business income.'
        },
        {
          q: 'Do I need payroll after electing S-Corp status?',
          a: 'Yes. Once your LLC is taxed as an S-Corp, you must run payroll, withhold taxes, and file payroll tax reports.'
        },
        {
          q: 'Can I revoke S-Corp status later?',
          a: 'Yes. An S-Corp election can be revoked, but IRS rules may limit when you can re-elect S-Corp status in the future.'
        },
        {
          q: 'Does my state recognize S-Corp election?',
          a: 'Most states recognize the federal S-Corp election, but some states have additional tax or filing requirements.'
        },
        {
          q: 'Will my EIN change after S-Corp election?',
          a: 'No. Your EIN typically stays the same when your LLC elects S-Corp tax treatment.'
        },
        {
          q: 'What happens if Form 2553 is filed late?',
          a: 'Late filings may still be accepted if you qualify for IRS late election relief. We help ensure proper filing and compliance.'
        },
        {
          q: 'Should I consult a professional before choosing S-Corp status?',
          a: 'Yes. S-Corp election is not ideal for every business. Consulting a tax professional helps determine if it’s the right move for your situation.'
        }
      ].map((faq, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
          >
            <span className="text-lg font-bold text-gray-900 pr-6">
              {faq.q}
            </span>
            {openFaq === idx ? (
              <ChevronUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
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


      <GetStartedModal
                                      isOpen={isModalOpen}
                                      onClose={() => setIsModalOpen(false)}
                                      selectedBusinessType={selectedBusinessType}
                                    />
    </div>
  );
}
