import { Link, useLocation } from 'react-router-dom';
import { states } from '../data/states';
import { Helmet } from "react-helmet-async";

export default function StateBusinessNames() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const stateSlug =
    pathParts[1] === 'llc-formation-by-state'
      ? pathParts[2]
      : pathParts[1]?.replace('-corporation', '').replace('-llc', '');

  const stateData = states.find(s => s.slug === stateSlug);

  if (!stateData) return <div className="py-20 text-center">State not found</div>;

  return (
    <div className="bg-white">
<Helmet>
  <title>
    Iowa Corporation Business Name Search & Guidelines | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Check Iowa corporation business name availability and naming guidelines. Learn Iowa naming rules, restricted words, and how to reserve a corporation name with expert guidance from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/iowa-corporation/business-names"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="Iowa corporation business name, Iowa business name search, Iowa corporation name availability, Iowa naming guidelines, reserve business name Iowa, Iowa corporate naming rules"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/iowa-corporation/business-names"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/iowa-corporation/business-names"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Iowa Corporation Business Name Search & Guidelines"
  />
  <meta
    property="og:description"
    content="Find available Iowa corporation business names and understand naming rules, restrictions, and reservation process."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/iowa-corporation/business-names"
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
    content="Iowa Corporation Business Name Guidelines – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Iowa Corporation Business Name Search & Rules"
  />
  <meta
    name="twitter:description"
    content="Check Iowa corporation name availability and learn naming rules before registering your business."
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
      "name": "Iowa Corporation Business Name Search",
      "url": "https://us.thefutureperfectglobal.com/iowa-corporation/business-names",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Guidance on Iowa corporation business name search, availability checks, naming rules, and reservation process.",
      "areaServed": [
        "Iowa",
        "United States"
      ],
      "serviceType": [
        "Business Name Search Iowa",
        "Corporation Naming Guidelines",
        "Name Reservation Support",
        "Iowa Corporation Formation"
      ]
    }`}
  </script>
</Helmet>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            How to Name Your {stateData.name} LLC
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn how to conduct a {stateData.name} business name search, understand LLC
            naming rules, avoid rejections, and successfully register your LLC
            name with the {stateData.name} Secretary of State.
          </p>
        </div>
      </section>

      {/* ================= SUB NAV ================= */}
      <section className="py-10 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              ['Overview', `/${stateSlug}-corporation`],
              ['Business Names', `/${stateSlug}-corporation/business-names`],
              ['Registered Agents', `/${stateSlug}-corporation/registered-agents`],
              ['Fees & Requirements', `/${stateSlug}-corporation/fees-filing-requirements`],
              ['Business Taxes', `/${stateSlug}-corporation/business-taxes`],
              ['FAQs', `/${stateSlug}-corporation/faq`],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="px-6 py-3 bg-white rounded-xl shadow font-bold text-gray-700 hover:text-indigo-600 hover:shadow-lg transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            {stateData.name} LLC Naming Rules Explained
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Choosing the right name for your {stateData.name} LLC is one of the most
            important steps in forming your business. Your name must comply with
            {stateData.name} law, be distinguishable from other registered businesses,
            and accurately represent your brand. Failure to follow naming rules
            can result in rejection of your LLC filing.
          </p>
        </div>
      </section>

      {/* ================= RULES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            General Rules for Naming a {stateData.name} LLC
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              Your LLC Name Must Be Unique
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your chosen business name cannot already be in use by another
              entity registered with the {stateData.name} Secretary of State. Even minor
              differences like punctuation or pluralization usually do not make
              a name distinguishable.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              Your Name Must Not Be Confusingly Similar
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {stateData.name} does not allow LLC names that are misleadingly similar to
              existing businesses. The following differences usually do NOT make
              a name unique:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Business suffixes like LLC, Ltd., Inc.</li>
              <li>Articles such as “a”, “an”, or “the”</li>
              <li>Plural or possessive forms</li>
              <li>Punctuation, symbols, or capitalization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              Required Words in a {stateData.name} LLC Name
            </h3>
            <p className="text-gray-700">
              Your business name must include one of the following:
              <strong> “Limited Liability Company”, “LLC”, or “L.L.C.”</strong>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-3">
              Restricted & Prohibited Words
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Words such as “bank”, “insurance”, “trust”, or “university” require
              special approval or licensing. Names implying government
              affiliation or illegal activity are prohibited.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MEDIA ================= */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">

          <div>
            <h2 className="text-4xl font-black mb-6">
              How to Perform a {stateData.name} Business Name Search
            </h2>
            <p className="text-gray-700 mb-6">
              Before registering your LLC, you must search the {stateData.name} business
              database to ensure your name is available. Watch this short video
              to learn how to avoid common name rejection mistakes.
            </p>

            <div className="aspect-video rounded-2xl overflow-hidden shadow bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="{stateData.name} LLC Name Search"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= DBA ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6">
            {stateData.name} Trade Names (DBAs)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In {stateData.name}, a DBA is called a <strong>Trade Name</strong>. If you
            want to operate under a name different from your legal LLC name, you
            must register a trade name with the {stateData.name} Secretary of State.
            Trade names do not provide legal name protection like trademarks.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6">
            Check Your {stateData.name} LLC Name Instantly
          </h2>
          <p className="text-indigo-100 mb-10">
            Avoid filing delays and rejections. Use our free {stateData.name} business
            name search tool to check availability before you file.
          </p>

          <Link
            to="/business-name-search"
            className="inline-block bg-white text-indigo-700 font-black px-12 py-5 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            Search Business Name
          </Link>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-10">
            FAQs About Naming a {stateData.name} LLC
          </h2>

          <div className="space-y-4">
            {[
              [
                'How do I check if my LLC name is available in ${stateData.name}?',
                'You can search the ${stateData.name} Secretary of State business database online. The name must be distinguishable from all existing entities.',
              ],
              [
                'Can two ${stateData.name} LLCs have the same name?',
                'No. ${stateData.name} requires business names to be distinguishable. Even small differences are often rejected.',
              ],
              [
                'Can I reserve an LLC name in ${stateData.name}?',
                'Yes. You may reserve a name for 120 days by filing a name reservation with the Secretary of State.',
              ],
              [
                'Do I need to trademark my LLC name?',
                'A trademark is optional but recommended for brand protection. LLC registration does not provide trademark rights.',
              ],
              [
                'Can I change my ${stateData.name} LLC name later?',
                'Yes. You can amend your LLC’s name by filing an amendment with the ${stateData.name} Secretary of State.',
              ],
            ].map(([q, a], i) => (
              <details key={i} className="bg-gray-50 rounded-xl p-6 shadow">
                <summary className="font-bold text-lg cursor-pointer">
                  {q}
                </summary>
                <p className="mt-4 text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
