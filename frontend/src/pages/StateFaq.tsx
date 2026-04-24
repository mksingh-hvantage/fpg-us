import { Link, useLocation } from 'react-router-dom'; 
import { states } from '../data/states';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function StateFaq() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const location = useLocation();
  const pathParts = location.pathname.split('/');

  const stateSlug =
    pathParts[1] === 'llc-formation-by-state'
      ? pathParts[2]
      : pathParts[1]?.replace('-corporation', '').replace('-llc', '');

  const stateData = states.find(s => s.slug === stateSlug); 
  const stateName = stateData?.name || 'State';

  if (!stateData) return <div className="py-20 text-center">State not found</div>;

  return (
    <div className="bg-white">
<Helmet>
  <title>
    Idaho Corporation FAQs – Company Formation, Filing & Compliance | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Find answers to common Idaho corporation questions. Learn about incorporation process, filing requirements, costs, timelines, taxes, and compliance with expert guidance from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/idaho-corporation/faq"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="Idaho corporation FAQ, Idaho incorporation questions, start corporation in Idaho, Idaho corporate filing requirements, Idaho corporation costs, Idaho business compliance"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/idaho-corporation/faq"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/idaho-corporation/faq"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Idaho Corporation FAQs – Formation, Filing & Compliance"
  />
  <meta
    property="og:description"
    content="Get clear answers to Idaho corporation FAQs including formation, filing, fees, taxes, and compliance requirements."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/idaho-corporation/faq"
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
    content="Idaho Corporation FAQs – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Idaho Corporation FAQs – Business Formation & Compliance"
  />
  <meta
    name="twitter:description"
    content="Answers to frequently asked questions about forming and managing a corporation in Idaho."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is required to form a corporation in Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To form a corporation in Idaho, you must file Articles of Incorporation with the Idaho Secretary of State, appoint a registered agent, choose directors, and comply with state tax and annual filing requirements."
        }
      }],
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

      {/* HERO */}
      <section className="bg-gradient-to-br from-green-500 via-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-black mb-6">{stateName} LLC Costs</h1>
          <p className="text-2xl text-green-100">
            Complete breakdown of fees to form and maintain an LLC in {stateName}
          </p>
          <button
            onClick={() => {
              setSelectedBusinessType('');
              setIsModalOpen(true);
            }}
            className="inline-block mt-6 bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* NAV */}
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

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
            Frequently Asked Questions About Starting a {stateName} LLC
          </h2>

          <div className="space-y-6">
            {[
              {
                q: (s: string) => `How much does it cost to start an LLC in ${s}?`,
                a: (s: string) => `The cost to form an LLC in ${s} depends on state filing fees paid to the Secretary of State.`
              },
              {
                q: (s: string) => `How long does it take to form an LLC in ${s}?`,
                a: (s: string) => `Most ${s} LLCs are approved quickly when filed online, often the same business day.`
              },
              {
                q: (s: string) => `Do I need a Registered Agent for my ${s} LLC?`,
                a: (s: string) => `Yes. ${s} law requires every LLC to maintain a Registered Agent with a physical address in the state.`
              },
              {
                q: (s: string) => `Can I be my own Registered Agent in ${s}?`,
                a: (s: string) => `Yes, if you have a physical address in ${s}. Your information will be publicly listed.`
              },
              {
                q: (s: string) => `What are the requirements for a ${s} LLC name?`,
                a: () => `The name must be unique, include “LLC,” and must not imply government affiliation.`
              },
              {
                q: (s: string) => `Does ${s} require an Operating Agreement?`,
                a: (s: string) => `${s} does not legally require one, but it is strongly recommended.`
              },
              {
                q: (s: string) => `How is a ${s} LLC taxed?`,
                a: (s: string) => `${s} LLCs are taxed as pass-through entities by default.`
              },
              {
                q: (s: string) => `Do I need an EIN for my ${s} LLC?`,
                a: () => `An EIN is required if the LLC has employees or multiple members.`
              },
              {
                q: (s: string) => `Can I form a ${s} LLC if I live out of state?`,
                a: (s: string) => `Yes, but the LLC must maintain a Registered Agent in ${s}.`
              },
              {
                q: (s: string) => `Can a ${s} LLC be taxed as an S Corporation?`,
                a: () => `Yes, eligible LLCs may elect S Corporation tax status with the IRS.`
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {faq.q(stateName)}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.a(stateName)}
                </p>
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
