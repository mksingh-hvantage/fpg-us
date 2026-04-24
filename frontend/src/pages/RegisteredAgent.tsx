import { Link } from 'react-router-dom';
import GetStartedModal from '../components/GetStartedModal';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { states } from '../data/states';

export default function RegisteredAgent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const stateSlug = location.pathname.split('/')[1]?.replace('-corporation', '');
  const stateData = states.find(s => s.slug === stateSlug);
  if (!stateData) {
    return <div className="py-20 text-center text-xl">State not found</div>;
  }
  return (  
    <div className="flex flex-col">
      <Helmet>
  {/* Title */}
  <title>Registered Agent Services in USA | Reliable Compliance Support</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Professional Registered Agent services in the USA for LLCs and corporations. Stay compliant with state laws, receive legal documents securely, and manage filings with The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Registered Agent Services in USA – LLC & Corporation Compliance"
  />
  <meta
    property="og:description"
    content="Get trusted Registered Agent services across the USA. We handle legal notices, compliance reminders, and official correspondence for your business."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/registered-agent"
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
    content="Registered Agent Services in USA by The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Registered Agent Services in USA"
  />
  <meta
    name="twitter:description"
    content="Reliable USA Registered Agent services to keep your LLC or corporation compliant. Secure handling of legal and state documents."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Registered Agent Services in USA",
      "serviceType": "Registered Agent & Compliance Services",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global – USA Business Setup",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://us.thefutureperfectglobal.com/business-management/registered-agent",
      "description": "Registered Agent services in the USA including legal document handling, compliance reminders, and official state correspondence for LLCs and corporations."
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
              {stateData.name} Registered Agent for Your LLC
            </h1>
            <p className="text-2xl mb-8 text-blue-50 leading-relaxed">
              Every business entity formed in {stateData.name} must appoint a person or business to act as a Registered Agent.
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105">
              Get Registered Agent Service
            </button>
            <p className="mt-6 text-blue-100 text-lg">✓ Available in all 50 states • ✓ Free with all packages first year</p>
          </div>
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

      <section className="py-20 bg-gradient-to-br from-cyan-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">What is a Registered Agent?</h2> 
              <div className="space-y-4 text-lg text-gray-700">
                <p className="leading-relaxed">
                 Your {stateData.name} Registered Agent provides various services, including the acceptance of formal documents and continued correspondence with the {stateData.name} Secretary of State (SOS).

                  Your LLC must have a Registered Agent at all times. You’ll appoint one when you first formally register and form your business. You can also replace your existing {stateData.name} Registered Agent at a later date, provided there is a smooth transition between the old and new agents.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-7xl mb-6 text-center">📨</div>
              <h3 className="text-2xl font-bold text-center mb-4">Required by Law</h3>
              <p className="text-center text-blue-100 text-lg">LLCs and corporations in all states must maintain a registered agent</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-16">
      {stateData.name} Registered Agent Requirements
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
      icon: '📍',
      title: `${stateData.name} Physical Address`,
      desc: `Every domestic and foreign LLC must maintain a Registered Agent with a registered office located within the State of ${stateData.name}. P.O. Boxes are not permitted.`,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '👤',
      title: 'Eligible Registered Agent',
      desc: `The Registered Agent may be an individual resident of ${stateData.name} or a business entity (LLC, Corporation, LP, or LLP) authorized to operate in the state.`,
      color: 'from-purple-500 to-pink-500'
    },
        {
          icon: '🕘',
          title: 'Availability During Business Hours',
          desc: 'The Registered Agent must be physically available at the registered office during normal business hours to receive and sign for legal documents.',
          color: 'from-green-500 to-emerald-500'
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white transform hover:scale-105 transition-all shadow-xl`}
        >
          <div className="text-6xl mb-4">{item.icon}</div>
          <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
          <p className="text-lg leading-relaxed opacity-95">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-6">What Registered Agents Do</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">They receive and manage critical documents for your business</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📄', title: 'State Correspondence', desc: 'Official communications from Secretary of State' },
              { icon: '⚖️', title: 'Service of Process', desc: 'Lawsuit notices and legal documents' },
              { icon: '🏛️', title: 'Government Notices', desc: 'Federal government communications' },
              { icon: '💰', title: 'Tax Forms', desc: 'Tax forms and payment requests' }
            ].map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-4 border-green-200 hover:border-green-400">
                <div className="text-5xl mb-4">{doc.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{doc.title}</h3>
                <p className="text-gray-600">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-16">
      Appointing a Registered Agent for Your LLC
    </h2>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Option 1 */}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-10 border-4 border-blue-300">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          When You Form Your LLC
        </h3>
        <p className="text-gray-700 mb-4">
          When registering your LLC, appointing a Registered Agent is mandatory.
          Your business must have one in place as soon as it is officially formed.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-2">
            <span className="text-blue-600">✓</span>
            Required at the time of LLC formation
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600">✓</span>
            Can be updated later if needed
          </li>
        </ul>
      </div>

      {/* Option 2 */}
      <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-10 border-4 border-yellow-300">
        <div className="text-5xl mb-4">🏛️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          File With the Secretary of State
        </h3>
        <p className="text-gray-700 mb-4">
          When submitting your Articles of Organization to the Colorado Secretary
          of State, you must include complete and accurate Registered Agent details.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-2">
            <span className="text-yellow-600">✓</span>
            Registered Agent name and address required
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-600">✓</span>
            Mandatory for approval of your LLC
          </li>
        </ul>
      </div>

      {/* Option 3 */}
      <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-10 border-4 border-green-400 ring-4 ring-green-200">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Free Registered Agent with The Future Perfect Global
        </h3>
        <p className="text-gray-700 mb-4">
          Form your LLC with The Future Perfect Global and receive a full year of Registered Agent
          service at no cost. We also prepare and file your Articles of Organization
          for you.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-2">
            <span className="text-green-500">✓</span>
            Free Registered Agent for the first year
          </li>
          <li className="flex gap-2">
            <span className="text-green-500">✓</span>
            Articles of Organization filed for you
          </li>
          <li className="flex gap-2">
            <span className="text-green-500">✓</span>
            Fast, simple, and worry-free setup
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 bg-gradient-to-br from-cyan-700 to-cyan-600">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-3xl p-12 shadow-2xl">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-900 mb-4">
          {stateData.name} Registered Agent Information
        </h2>
        <p className="text-xl text-gray-600">
          Search, requirements, and important considerations for LLC owners
        </p>
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 border-4 border-blue-300">
        
        {/* Search Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {stateData.name} Registered Agent Search
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            In certain situations, you may need to identify the Registered Agent
            representing another LLC in {stateData.name}. This information can be found
            by using the advanced business search available on the {stateData.name}
            Secretary of State website. If the details are unavailable, you may
            request the information directly from the Secretary of State.
          </p>
        </div>

        {/* Consequences Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What Happens If You Don’t Have a Registered Agent?
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">⚠</span>
              <span className="text-gray-700 text-lg">
                You may be sued or officially served without knowing, which can
                result in a default judgment if your LLC fails to respond.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">⚠</span>
              <span className="text-gray-700 text-lg">
                Your LLC could lose its legal status in {stateData.name}, as a Registered
                Agent proves your business exists and remains compliant.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">⚠</span>
              <span className="text-gray-700 text-lg">
                Falling out of good standing with the {stateData.name} Secretary of State
                may result in revoked authority to do business.
              </span>
            </li>
          </ul>
        </div>

        {/* Acting as Own Agent */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Acting as Your Own Registered Agent
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700 text-lg">
                You must maintain a physical street address in Colorado. Out-of-
                state LLC owners will need an in-state Registered Agent.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700 text-lg">
                Your name and address become part of the public record and are
                accessible via the Colorado Secretary of State website.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700 text-lg">
                Someone must be available during normal business hours to receive
                and sign for official documents.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700 text-lg">
                Any address change or move out of state requires additional
                filings with the Colorado Secretary of State, which a Registered
                Agent service helps you avoid.
              </span>
            </li>
          </ul>
        </div>

      </div>
      
    </div>
    <div className='text-center mt-6'>
    <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105">
              Get Registered Agent Service
            </button>
            </div>
  </div>
</section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I be my own registered agent?',
                a: "Yes, though this requires availability during business hours and makes your home address public record. You'll pay fees for address changes and cannot use your address if you live outside your business state."
              },
              {
                q: 'Can a family member serve as registered agent?',
                a: 'Yes, but it creates risk if they become unavailable. You could miss critical correspondence and lose good standing status. A professional service is more reliable.'
              },
              {
                q: "What happens if I don't have a registered agent?",
                a: 'Every state requires businesses to maintain a registered agent. Failure to have one can result in Articles not being approved, fines, loss of good standing, and potential business dissolution.'
              },
              {
                q: "Why should I use The Future Perfect Global's service?",
                a: "The Future Perfect Global's service protects your privacy by using our physical address, operates in all states, forwards correspondence to your email, and provides guaranteed peace of mind."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 group border-2 border-blue-200 hover:border-blue-400 transition-all">
                <summary className="font-bold text-xl text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <svg className="w-7 h-7 text-The Future Perfect Global-cyan transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-6 text-gray-700 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">Need a Registered Agent?</h2>
          <p className="text-2xl mb-10 text-blue-100">Get professional registered agent service in all 50 states</p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105">
            Get Started Today
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
