import { useParams, Link } from 'react-router-dom';
import { states } from '../data/states';
import { Helmet } from "react-helmet-async";

export default function StateLLC() {
  const { state } = useParams();
  const stateData = states.find(s => s.slug === state);

  if (!stateData) {
    return <div className="py-20 text-center">State not found</div>;
  }

  return (
    <div className="bg-white">
      <Helmet>
  <title>
    Alabama Business Setup & Company Formation Guide | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Start and grow your business in Alabama with expert guidance on company formation, compliance, taxes, and legal requirements. The Future Perfect Global helps you set up your business in Alabama smoothly."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/state/alabama"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="Alabama business setup, Alabama company formation, start business in Alabama, Alabama LLC registration, Alabama corporation setup, Alabama business compliance"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/state/alabama"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/state/alabama"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Alabama Business Setup & Company Formation Guide"
  />
  <meta
    property="og:description"
    content="Looking to start a business in Alabama? Get expert support for company formation, compliance, and ongoing business services from The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/state/alabama"
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
    content="Alabama Business Setup – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Alabama Business Setup & Registration Guide"
  />
  <meta
    name="twitter:description"
    content="Complete guide to starting a business in Alabama, including LLC registration, compliance, and legal support."
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
      "name": "Alabama Business Setup",
      "url": "https://us.thefutureperfectglobal.com/state/alabama",
      "description": "Comprehensive guide to business setup and company formation in Alabama, including registration, compliance, and ongoing business support.",
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

      <section className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-cyan-100 text-cyan-600 px-6 py-3 rounded-full font-bold mb-6">
              LLC Formation
            </div>
            <h1 className="text-6xl font-black mb-6">Form an LLC in {stateData.name}</h1>
            <p className="text-2xl mb-8 text-cyan-100">Complete {stateData.name} LLC formation starting at $0 + state fees</p>
            <button className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105">
              START MY {stateData.name.toUpperCase()} LLC
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={`/llc-formation-by-state/${state}`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-cyan-600">Overview</Link>
            <Link to={`/llc-formation-by-state/${state}/business-names`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-cyan-600">Business Names</Link>
            <Link to={`/llc-formation-by-state/${state}/registered-agent`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-cyan-600">Registered Agent</Link>
            <Link to={`/llc-formation-by-state/${state}/filing-fees`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-cyan-600">Filing Fees</Link>
            <Link to={`/llc-formation-by-state/${state}/costs`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-cyan-600">Costs</Link>
            <Link to={`/llc-formation-by-state/${state}/taxes`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-cyan-600">Business Taxes</Link>
            <Link to={`/llc-formation-by-state/${state}/faqs`} className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all font-bold text-gray-700 hover:text-cyan-600">FAQs</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-8">Why Form an LLC in {stateData.name}?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Personal Asset Protection</h3>
              <p className="text-gray-700 leading-relaxed">
                Protect your personal assets from business liabilities with limited liability protection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Tax Flexibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Choose how your LLC is taxed - as a sole proprietorship, partnership, S-Corp, or C-Corp.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Business Credibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Build trust with customers, vendors, and partners with a professionally registered LLC.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Simple Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Less paperwork and fewer formalities compared to corporations. Easy to maintain compliance.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-black text-gray-900 mb-8">How to Form an LLC in {stateData.name}</h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Choose a Business Name', desc: `Select a unique name for your ${stateData.name} LLC that complies with state naming requirements.` },
              { step: 2, title: 'Appoint a Registered Agent', desc: `Designate a registered agent with a physical address in ${stateData.name}.` },
              { step: 3, title: 'File Articles of Organization', desc: `Submit your LLC formation documents to the ${stateData.name} Secretary of State.` },
              { step: 4, title: 'Create an Operating Agreement', desc: 'Draft an operating agreement outlining ownership and management structure.' },
              { step: 5, title: 'Get an EIN', desc: 'Obtain an Employer Identification Number from the IRS for tax purposes.' },
              { step: 6, title: 'File Initial Reports', desc: `Complete any required initial reports with the ${stateData.name} state government.` }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-cyan-300 transition-all">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
