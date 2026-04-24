import { Link, useLocation } from 'react-router-dom';
import { states } from '../data/states';
import { Helmet } from "react-helmet-async"; 

export default function StateCosts() {
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
    Iowa Corporation Fees & Filing Requirements | Incorporation Costs | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Learn about Iowa corporation fees and filing requirements. Get details on incorporation costs, state filing fees, documents needed, timelines, and compliance with expert guidance from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/iowa-corporation/fees-filing-requirements"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="Iowa corporation fees, Iowa filing requirements, Iowa incorporation costs, start a corporation in Iowa, Iowa articles of incorporation fees, Iowa corporate compliance"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/iowa-corporation/fees-filing-requirements"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/iowa-corporation/fees-filing-requirements"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Iowa Corporation Fees & Filing Requirements"
  />
  <meta
    property="og:description"
    content="Explore Iowa corporation filing fees, incorporation requirements, documents, and compliance timelines."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/iowa-corporation/fees-filing-requirements"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Business Setup"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Iowa Corporation Fees and Filing Requirements – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Iowa Corporation Fees & Filing Requirements"
  />
  <meta
    name="twitter:description"
    content="Understand Iowa corporation incorporation costs, filing fees, and compliance requirements."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Iowa Corporation Fees & Filing Requirements",
      "url": "https://us.thefutureperfectglobal.com/iowa-corporation/fees-filing-requirements",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Detailed information on Iowa corporation incorporation fees, filing requirements, documentation, and compliance support.",
      "areaServed": [
        "Iowa",
        "United States"
      ],
      "serviceType": [
        "Iowa Corporation Formation",
        "Incorporation Fees",
        "State Filing Requirements",
        "Business Compliance Support"
      ]
    }`}
  </script>
</Helmet>

      <section className="bg-gradient-to-br from-green-500 via-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-black mb-6">{stateData.name} LLC Costs</h1>
          <p className="text-2xl text-green-100">Complete breakdown of fees to form and maintain an LLC in {stateData.name}</p>
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-4 border-green-200">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">State Filing Fee</h3>
              <p className="text-5xl font-black text-green-600 mb-4">${stateData.filingFee}</p>
              <p className="text-gray-700">One-time fee to file Articles of Organization</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-4 border-green-200">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Annual Report Fee</h3>
              <p className="text-5xl font-black text-green-600 mb-4">$50-800</p>
              <p className="text-gray-700">Yearly fee to maintain your LLC</p>
            </div>
          </div>

          <h2 className="text-4xl font-black text-gray-900 mb-8">Additional Costs to Consider</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">Registered Agent Service</span>
                <span className="text-2xl font-black text-gray-900">$125/year</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">EIN (Federal Tax ID)</span>
                <span className="text-2xl font-black text-green-600">FREE</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">Operating Agreement</span>
                <span className="text-2xl font-black text-gray-900">$50-200</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">Business License</span>
                <span className="text-2xl font-black text-gray-900">Varies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
