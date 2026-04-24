import { Link, useLocation } from 'react-router-dom';
import { states } from '../data/states';
import { useState } from 'react'; 
import { Helmet } from "react-helmet-async"; 
import GetStartedModal from '../components/GetStartedModal';
 
export default function StateTax() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const location = useLocation(); 
  const pathParts = location.pathname.split('/');
  const stateSlug = pathParts[1] === 'llc-formation-by-state'
    ? pathParts[2]
    : pathParts[1]?.replace('-corporation', '').replace('-llc', '');
  const stateData = states.find(s => s.slug === stateSlug);

  if (!stateData) return <div className="py-20 text-center">State not found</div>;

  return (
    <div className="bg-white">
      <Helmet>
  <title>
    Business Taxes Explained – Types, Compliance & Filing Guide | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Learn about business taxes, including types of taxes, compliance requirements, and filing obligations. The Future Perfect Global provides expert guidance on business tax planning and compliance."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/alabama-corporation/business-taxes"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="business taxes, business tax compliance, types of business taxes, corporate taxes, small business taxes, business tax filing, tax planning for businesses"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/alabama-corporation/business-taxes"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/alabama-corporation/business-taxes"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Business Taxes Explained – Types & Compliance Guide"
  />
  <meta
    property="og:description"
    content="Understand business taxes, tax obligations, and compliance requirements with expert insights from The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/alabama-corporation/business-taxes"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – Business Advisory"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Business Taxes Guide – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Business Taxes – Compliance & Filing Guide"
  />
  <meta
    name="twitter:description"
    content="A complete guide to business taxes covering tax types, compliance, and filing responsibilities for businesses."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Business Taxes",
      "url": "https://us.thefutureperfectglobal.com/alabama-corporation/business-taxes",
      "description": "General guide to business taxes explaining tax types, compliance requirements, and filing obligations for businesses.",
      "publisher": {
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

      <section className="bg-gradient-to-br from-green-500 via-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-black mb-6">{stateData.name} Business Taxes for LLCs</h1>
          <p className="text-2xl text-green-100">Business taxes are a fact of life, and your LLC will need to pay a variety of taxes to both the state and federal governments.</p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block mt-6 bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105">
              Get Started Now
            </button>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={`/${stateSlug}-corporation`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-purple-600">Overview</Link>
            <Link to={`/${stateSlug}-corporation/business-names`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-purple-600">Business Names</Link>
            <Link to={`/${stateSlug}-corporation/registered-agents`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-purple-600">Registered Agents</Link>
            <Link to={`/${stateSlug}-corporation/fees-filing-requirements`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-purple-600">Fees & Requirements</Link>
            <Link to={`/${stateSlug}-corporation/business-taxes`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-purple-600">Business Taxes</Link>
            <Link to={`/${stateSlug}-corporation/faq`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-purple-600">FAQs</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-100/50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-black text-gray-900 mb-8">
      How Your LLC Will Be Taxed in {stateData.name}
    </h2>

    <p className="text-lg text-gray-700 mb-8">
      LLCs in {stateData.name} are not taxed at the business level like C Corporations.
      Instead, they use pass-through taxation, meaning profits flow directly to
      the owners and are reported on personal tax returns.
    </p>

    <div className="space-y-4 mb-12">
      {[
        'Owners pay self-employment tax on business profits.',
        'Owners pay ${stateData.name} state income tax on profits after deductions.',
        'Owners pay federal income tax on profits after allowances.',
        'Employers pay payroll taxes on employee wages.',
        'Employees pay state and federal income tax on their earnings.'
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 flex gap-3"
        >
          <span className="text-green-600 font-black text-xl">{idx + 1}.</span>
          <span className="text-gray-700 text-lg">{item}</span>
        </div>
      ))}
    </div>

    <p className="text-gray-700 text-lg">
      Items 1, 2, and 3 fall under pass-through taxation for LLC owners, members,
      or managers who receive profits. These profits are reported on both federal
      and {stateData.name} personal tax returns.
    </p>

  </div>
</section>


<section className="py-20">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* State Taxes */}
    <h2 className="text-4xl font-black text-gray-900 mb-8">
      State Taxes for {stateData.name} LLCs
    </h2>

    <div className="space-y-6 mb-12">

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-4 border-green-200">
        <h3 className="text-2xl font-black text-gray-900 mb-4">
          Colorado Income Tax
        </h3>
        <p className="text-gray-700 text-lg">
          LLC owners pay {stateData.name} income tax on money they take from the business.
          Income flows through to personal returns and is taxed at {stateData.name}
          standard rate, with normal deductions and allowances applied.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-4 border-green-200">
        <h3 className="text-2xl font-black text-gray-900 mb-4">
          {stateData.name} Sales & Use Tax
        </h3>
        <p className="text-gray-700 text-lg mb-4">
          If your LLC sells physical products or certain services, you may need
          to collect and remit {stateData.name} sales tax.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>State sales tax rate: 2.9%</li>
          <li>Combined rates (local + state): up to 11.2%</li>
          <li>Applies to tangible goods and certain services</li>
        </ul>
      </div>

    </div>

    {/* Federal Taxes */}
    <h2 className="text-4xl font-black text-gray-900 mb-8">
      Federal Taxes for LLC Owners
    </h2>

    <div className="space-y-6">

      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
        <h3 className="text-2xl font-black text-gray-900 mb-3">
          Federal Self-Employment Tax
        </h3>
        <p className="text-gray-700 text-lg mb-4">
          LLC members who take profits must pay self-employment tax under FICA,
          which funds Social Security and Medicare. The current rate is 15.3%.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>$34,000 profit → $5,202 tax</li>
          <li>$64,000 profit → $9,792 tax</li>
          <li>$94,000 profit → $14,382 tax</li>
          <li>$124,000 profit → $18,972 tax</li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
        <h3 className="text-2xl font-black text-gray-900 mb-3">
          Federal Income Tax
        </h3>
        <p className="text-gray-700 text-lg">
          Owners also pay federal income tax on profits taken from the LLC, based
          on income bracket, deductions, filing status, and allowable expenses.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-4 border-blue-200">
        <h3 className="text-2xl font-black text-gray-900 mb-3">
          Reduce Taxes with an S Corporation Election
        </h3>
        <p className="text-gray-700 text-lg">
          Eligible LLCs can elect S Corporation status, allowing owners to split
          income between salary and distributions—potentially reducing
          self-employment taxes.
        </p>
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
