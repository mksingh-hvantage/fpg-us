import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function Trademark() {
  const [] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  return (
    <div className="flex flex-col">
<Helmet>
  {/* Primary SEO */}
  <title>
    Trademark Registration in USA | USPTO Trademark Filing Services
  </title>

  <meta
    name="description"
    content="Protect your brand with professional trademark registration in the USA. The Future Perfect Global offers USPTO trademark search, filing, monitoring, and legal compliance support."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-formation/trademark-registration"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="trademark registration USA, USPTO trademark filing, register trademark in USA, brand trademark protection USA, trademark search USA, trademark attorney services USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-formation/trademark-registration"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-formation/trademark-registration"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Trademark Registration in USA | USPTO Filing Services"
  />
  <meta
    property="og:description"
    content="Secure your brand identity with expert trademark registration services in the USA, including USPTO search, filing, and compliance support."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-formation/trademark-registration"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Trademark Services"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Trademark Registration Services in USA by The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Trademark Registration in USA"
  />
  <meta
    name="twitter:description"
    content="Register and protect your brand with USPTO trademark filing and legal compliance services in the USA."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Trademark Registration in USA",
      "url": "https://us.thefutureperfectglobal.com/business-formation/trademark-registration",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Professional trademark registration services in the USA including USPTO trademark search, filing, monitoring, and brand protection support.",
      "areaServed": [
        "United States",
        "California",
        "New York",
        "Texas",
        "Florida",
        "Delaware",
        "Nevada",
        "Wyoming"
      ],
      "serviceType": [
        "Trademark Registration",
        "USPTO Trademark Filing",
        "Trademark Search & Clearance",
        "Brand Protection Services",
        "Intellectual Property Consulting"
      ]
    }`}
  </script>
</Helmet>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-600 via-slate-600 to-slate-600 py-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
            alt="Trademark protection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6 font-semibold">
            ™ Brand Protection
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            Trademark Registration Service
          </h1>
          <p className="text-2xl mb-8 text-rose-100">
            Secure Your Brand Identity with Trusted Trademark Registration Services. Our Legal Experts Help You Register Your Trademark Quickly and Protect Your Intellectual Property.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }}
              className="bg-white text-slate-800 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition"
            >
              Register Trademark
            </button>
            <Link
              to="/contact"
              className="border-4 border-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* WHY REGISTER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
    
    <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
      <span className='text-cyan-500'>Trademark Registration Services</span> to Protect Your Business Name and Brand
    </h2>

    <p className="text-gray-700 text-lg leading-relaxed">
      Registering a <strong>trademark</strong> is essential to protect your 
      <strong> business name, logo, and brand identity</strong>. A registered trademark 
      provides legal ownership and prevents others from copying or misusing your 
      brand elements. Your brand name, logo, and tagline represent your 
      <strong> reputation, trust, and market value</strong>, which makes 
      <strong> trademark protection</strong> crucial for long-term success.
    </p>

    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      With professional <strong>trademark registration services</strong>, you can 
      easily register your trademark online and secure your 
      <strong> intellectual property rights</strong>. Protect your brand today 
      and build a strong, recognizable business identity in the market.
    </p>

  </div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg"
            className="rounded-3xl shadow-2xl"
            alt="Trademark"
          />
          <div>
            
            <div className="space-y-5">
              {[
  [
    '🛡️',
    'Complete Trademark Protection',
    'Secure your business name, logo, and brand identity with registered trademark protection. A registered trademark gives you exclusive rights and helps prevent competitors from copying or misusing your brand.'
  ],
  [
    '⚖️',
    'Attorney-Led Trademark Search',
    'Our partnered trademark attorneys perform a comprehensive trademark search to ensure your mark is unique and available. This reduces the risk of rejection and helps you file your trademark application with confidence.'
  ],
  [
    '💼',
    'Build Strong Brand Value',
    'Trademark registration strengthens your brand reputation, builds customer trust, and increases your business valuation. Protect your intellectual property and establish a recognizable brand in the marketplace.'
  ]
].map(([icon, title, desc], i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-4xl">{icon}</span>
                  <div>
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      <section className="py-24 bg-cyan-100/50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
      What’s Included in the <span className='text-cyan-500'>Trademark Registration Package</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {[
        {
          title: "Expert Trademark Attorney Guidance",
          desc: "Get professional support from experienced trademark attorneys to protect your brand name, logo, and intellectual property."
        },
        {
          title: "Comprehensive Trademark Search",
          desc: "We conduct a detailed trademark search to check existing trademarks and reduce the chances of application rejection."
        },
        {
          title: "USPTO Trademark Application Filing",
          desc: "Our team files your trademark application with the USPTO to legally register and secure your business brand."
        },
        {
          title: "Complete USPTO Management",
          desc: "We handle all USPTO communication, tracking, and documentation until your trademark registration is approved."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="group p-7 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
        >

          <div className="flex items-start gap-5">

            {/* Number Badge */}
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-rose-500 text-white font-bold text-lg shadow-md">
              {i + 1}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-5xl font-black text-center mb-16">
      Trademark Search & Registration Process
    </h2>

    <div className="grid md:grid-cols-3 gap-10 text-center">
      {[
        [
          '1',
          'Tell Us About Your Brand',
          'Share your business name, logo, or slogan with our trademark experts so we can understand your brand protection needs and guide you through the trademark registration process.',
        ],
        [
          '2',
          'Comprehensive Trademark Search',
          'Our trademark attorneys conduct a detailed trademark search to check trademark availability, identify potential conflicts, and reduce the risk of USPTO application rejection.',
        ],
        [
          '3',
          'Trademark Application Filing',
          'We file your trademark application with the USPTO and manage the complete trademark registration process until your brand name and intellectual property are officially protected.',
        ],
      ].map(([step, title, desc], i) => (
        <div key={i}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-500 flex items-center justify-center text-2xl font-black">
            {step}
          </div>

          <h3 className="font-bold text-2xl mb-2">{title}</h3>

          <p className="text-gray-300 text-base leading-relaxed">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ SECTION (YOUR TOGGLE FAQ REMAINS AS IS) */}
      {/* FAQ SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-4xl font-black text-center mb-12">
      Trademark Registration – Frequently Asked Questions
    </h2>

    <div className="space-y-5">
      {[
        {
          q: 'What is a trademark and why is it important?',
          a: (
            <>
              <p className="mb-3">
                A trademark is a legal protection for your brand identity. It can be a
                business name, logo, slogan, symbol, or even a sound that distinguishes
                your products or services from competitors.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prevents others from copying or misusing your brand</li>
                <li>Establishes legal ownership nationwide</li>
                <li>Builds brand trust and recognition</li>
                <li>Creates an asset that can be sold or licensed</li>
              </ul>
            </>
          )
        },
        {
          q: 'Is trademark registration required after business registration?',
          a: (
            <>
              <p className="mb-3">
                Yes. Registering a business name or forming an LLC or corporation does
                not protect your brand legally. Business registration only gives you
                permission to operate under a name.
              </p>
              <p className="mb-3">
                A trademark provides exclusive rights to use your brand name or logo
                across the entire United States and allows you to stop others from
                using similar marks.
              </p>
            </>
          )
        },
        {
          q: 'How long does the trademark registration process take?',
          a: (
            <>
              <p className="mb-3">
                The trademark registration process with the USPTO usually takes
                between 8 and 14 months. The timeline depends on several factors:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>USPTO examination backlog</li>
                <li>Office Actions or objections</li>
                <li>Oppositions from third parties</li>
                <li>Intent-to-use vs. actual-use filing</li>
              </ul>
            </>
          )
        },
        {
          q: 'Can I apply for a trademark before starting my business?',
          a: (
            <>
              <p className="mb-3">
                Yes. You can file an “Intent-to-Use” trademark application if you plan
                to use the brand name or logo in the future but have not launched yet.
              </p>
              <p>
                This allows you to reserve the rights to your brand while preparing
                for launch, fundraising, or market entry.
              </p>
            </>
          )
        },
        {
          q: 'What types of names or logos can be trademarked?',
          a: (
            <>
              <p className="mb-3">
                Most distinctive brand elements can be trademarked, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business and brand names</li>
                <li>Logos and design marks</li>
                <li>Taglines and slogans</li>
                <li>Product names</li>
                <li>Unique packaging or trade dress</li>
              </ul>
            </>
          )
        },
        {
          q: 'What cannot be trademarked?',
          a: (
            <>
              <p className="mb-3">
                The USPTO does not allow registration of certain marks, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generic or commonly used terms</li>
                <li>Purely descriptive names without distinctiveness</li>
                <li>Marks too similar to existing trademarks</li>
                <li>Misleading or deceptive terms</li>
                <li>Offensive or prohibited content</li>
              </ul>
            </>
          )
        },
        {
          q: 'How much does trademark registration cost?',
          a: (
            <>
              <p className="mb-3">
                USPTO filing fees typically start at $250 per class of goods or
                services. The total cost depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Number of classes filed</li>
                <li>Complexity of the trademark</li>
                <li>Legal review and filing support</li>
                <li>Office Action responses if required</li>
              </ul>
            </>
          )
        },
        {
          q: 'Does a U.S. trademark protect my brand internationally?',
          a: (
            <>
              <p className="mb-3">
                No. A U.S. trademark protects your brand only within the United States.
                If you plan to operate globally, you must apply for trademark
                protection in other countries.
              </p>
              <p>
                International trademarks are filed through country-specific offices
                or via the Madrid Protocol.
              </p>
            </>
          )
        },
        {
          q: 'Should I trademark my logo and name separately?',
          a: (
            <>
              <p className="mb-3">
                In most cases, yes. Filing separate applications provides stronger and
                more flexible protection.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name protection remains even if logo changes</li>
                <li>Logo protection covers visual branding</li>
                <li>Greater enforcement power</li>
              </ul>
            </>
          )
        },
        {
          q: 'What happens if someone infringes my trademark?',
          a: (
            <>
              <p className="mb-3">
                Trademark owners have legal rights to stop unauthorized use of their
                brand. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cease-and-desist notices</li>
                <li>Online takedown requests</li>
                <li>Financial damages</li>
                <li>Legal enforcement in federal court</li>
              </ul>
            </>
          )
        }
      ].map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex justify-between items-center p-6 text-left font-bold text-lg"
          >
            {faq.q}
            <span className="text-2xl text-rose-600">
              {openFaq === i ? '−' : '+'}
            </span>
          </button>

          {openFaq === i && (
            <div className="px-6 pb-6 text-gray-700 text-lg space-y-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>



      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-600 to-slate-600 text-white text-center">
        <h2 className="text-5xl font-black mb-6">Protect Your Brand Today</h2>
        <p className="text-2xl mb-10 text-rose-100">
          Secure your trademark before someone else does
        </p>
        <Link
          to="/start"
          className="bg-white text-cyan-600 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition"
        >
          Start Trademark Registration
        </Link>
      </section>

      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedBusinessType={selectedBusinessType}
      />
    </div>
  );
}
