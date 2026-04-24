import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function ToolsAndResources() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  

  return (
    <div className="bg-white">
      <Helmet>
  {/* Primary SEO */}
  <title>
    Business Formation Support USA | Ongoing Compliance & Company Assistance
  </title>

  <meta
    name="description"
    content="Get reliable business formation support in the USA including ongoing compliance, document assistance, annual filings, and expert company support from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-formation/support"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="business formation support USA, company support services USA, ongoing compliance support, annual filing assistance USA, business help services"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-formation/support"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-formation/support"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Business Formation Support USA | Compliance & Company Assistance"
  />
  <meta
    property="og:description"
    content="Professional business formation support in the USA covering compliance management, documentation help, and long-term company assistance."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-formation/support"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Business Formation"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="USA Business Formation Support and Compliance Services"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Business Formation Support USA"
  />
  <meta
    name="twitter:description"
    content="Ongoing business formation support in the USA including compliance, annual filings, and expert company assistance."
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
      "name": "Business Formation Support USA",
      "url": "https://us.thefutureperfectglobal.com/business-formation/support",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Business formation support service in the USA offering ongoing compliance, document assistance, annual filings, and professional company support.",
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
        "Business Formation Support",
        "Ongoing Compliance Services",
        "Annual Filing Assistance",
        "Corporate Documentation Support",
        "Company Maintenance Services"
      ]
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <div className="mb-4">
          <span className="text-sm font-semibold text-gray-300">Trusted by Entrepreneurs</span>
          <span className="text-cyan-400 ml-2">★ 4.0 Rating</span>
        </div>

        <h1 className="text-5xl font-black text-white mb-6 leading-tight">
          Start a Business, Build Your Brand & Launch Your Company with Confidence
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Everything you need to start a business successfully — from LLC formation, business registration,
          and compliance support to expert resources and tools designed for entrepreneurs and startups.
        </p>

        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full font-black text-xl
                     hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-2xl hover:scale-105"
        >
          Start Your Business Today
        </button>
      </div>

      <div className="relative">
        <img
          src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Start a business online with tools and resources"
          className="w-full h-auto rounded-3xl shadow-2xl"
        />
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

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-black text-gray-900 mb-6">
        Start a Business the Right Way – Complete Startup & LLC Formation Guide
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Learn how to start a business, choose the right business structure, and register your company with confidence. 
        Our step-by-step startup resources cover LLC formation, corporation setup, and state business requirements to 
        help entrepreneurs launch and grow successfully.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-5">

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
        <div className="text-4xl mb-4">🎓</div>

        <h3 className="text-xl font-bold text-cyan-500 mb-3">
          How to Start a Business – Step-by-Step Startup Guide
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Discover everything you need to know about starting a business, from validating your idea and registering 
          your company to building a strong legal and financial foundation.
        </p>

        <Link to="/articles" className="text-bizee-cyan font-bold hover:text-cyan-600 flex items-center gap-2 group">
          <span>Read the Startup Guide</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>


      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
        <div className="text-4xl mb-4">🏢</div>

        <h3 className="text-xl font-bold text-cyan-500 mb-3">
          Choose the Right Business Structure (LLC, S-Corp, C-Corp)
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Compare popular business structures like LLCs and corporations to determine the best option for taxes, 
          liability protection, and long-term business growth.
        </p>

        <Link to="/articles" className="text-bizee-cyan font-bold hover:text-cyan-600 flex items-center gap-2 group">
          <span>Compare Business Structures</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>


      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
        <div className="text-4xl mb-4">📊</div>

        <h3 className="text-xl font-bold text-cyan-500 mb-3">
          LLC & Business Registration Requirements by State
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Explore state-specific business formation rules, filing fees, and compliance requirements to successfully 
          register your LLC or corporation in your state.
        </p>

        <Link to="/state-information-llc" className="text-bizee-cyan font-bold hover:text-cyan-600 flex items-center gap-2 group">
          <span>View State Requirements</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>


      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
        <div className="text-4xl mb-4">🎧</div>

        <h3 className="text-xl font-bold text-cyan-500 mb-3">
          Business Formation Support from Experts
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Have questions about forming an LLC or registering your company? Our business experts are ready to guide 
          you through every step of the startup process.
        </p>

        <Link to="/contact" className="text-bizee-cyan font-bold hover:text-cyan-600 flex items-center gap-2 group">
          <span>Contact Business Experts</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

    </div>
  </div>
</section>

      <section className="py-20 bg-cyan-100/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black text-gray-900 mb-6">
        Find the Perfect Business Name & Check LLC Name Availability
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Discover unique business name ideas and instantly check if your LLC or company name is available. Use our smart tools to generate creative business names and perform a fast business name search before registering your company.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
        <div className="bg-gray-100 rounded-xl p-6 mb-6 text-center">
          <div className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-bold text-xl">
            💡 Acme LLC
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Generate creative and unique business name ideas instantly
          </p>
        </div>

        <h3 className="text-2xl font-black text-gray-900 mb-3">
          Business Name Generator
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Looking for the perfect business name? Our AI-powered business name generator helps you create unique company name ideas for your LLC, startup, or brand in seconds.
        </p>

        <Link
          to="/business-name-generator"
          className="text-bizee-cyan font-bold hover:text-cyan-600 flex items-center gap-2 group"
        >
          <span>Generate Business Names</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>


      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
        <div className="bg-gray-100 rounded-xl p-6 mb-6 text-center">
          <div className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-bold text-xl">
            ✓ Acme Design LLC
          </div>
          <p className="text-gray-700 text-sm mt-4 font-semibold">
            Business name available
          </p>
        </div>

        <h3 className="text-2xl font-black text-gray-900 mb-3">
          Business Name Search
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Already have a business name in mind? Use our LLC name search tool to check business name availability and ensure your company name is legally available before registration.
        </p>

        <Link
          to="/business-name-search"
          className="text-bizee-cyan font-bold hover:text-cyan-600 flex items-center gap-2 group"
        >
          <span>Check Business Name Availability</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

    </div>
  </div>
</section>

     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black text-gray-900 mb-6">
        Startup Guides & Business Formation Resources
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Learn how to start a business, choose the right LLC or corporation structure, 
        register your business name, and build a successful company with our expert 
        startup guides, business tips, and step-by-step resources.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Start a business and LLC formation guide"
          className="w-full h-auto rounded-3xl shadow-2xl"
        />
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🏢</div>
            <h3 className="text-xl font-bold text-gray-900">
              How to Choose the Right Business Structure (LLC, S-Corp, or Corporation)
            </h3>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all">
          <div className="flex items-center gap-3">
            <div className="text-2xl">💡</div>
            <h3 className="text-xl font-bold text-gray-900">
              Business Name Ideas & Trademark Tips for New Companies
            </h3>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚠️</div>
            <h3 className="text-xl font-bold text-gray-900">
              Common Startup Mistakes to Avoid When Starting a Business
            </h3>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📈</div>
            <h3 className="text-xl font-bold text-gray-900">
              Business Growth Strategies for Startups & Small Businesses
            </h3>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-black mb-6">Ready to Start Your Business?</h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
              Use our tools to plan, and let us handle the formation
            </p>
            <button
              onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
              className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-900 hover:text-white transition-all shadow-2xl"
            >
              Form Your LLC Now
            </button>
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
