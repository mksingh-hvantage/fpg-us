import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async"; 

export default function WhatMakesUsDifferent() {
    
    const [isOpen, setIsOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col bg-white">
      <Helmet>
  <title>
    What Makes Us Different – Trusted USA Business Setup & LLC Formation Experts | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Discover what makes The Future Perfect Global different. We offer transparent pricing, expert guidance, fast LLC formation, and end-to-end business setup services across the USA."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/company/what-makes-us-different"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="what makes us different business setup USA, why choose us USA company formation, trusted business setup USA, LLC formation experts USA, business registration services USA, US company incorporation specialists"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/company/what-makes-us-different"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/company/what-makes-us-different"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="What Makes Us Different – USA Business Setup Experts"
  />
  <meta
    property="og:description"
    content="Learn why businesses trust The Future Perfect Global for USA company formation, LLC registration, compliance support, and expert consulting."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/company/what-makes-us-different"
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
    content="What Makes Us Different – The Future Perfect Global USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="What Makes Us Different – USA Business Setup Experts"
  />
  <meta
    name="twitter:description"
    content="Transparent pricing, expert support, and fast business setup services make The Future Perfect Global the preferred choice for USA company formation."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Future Perfect Global – USA Business Setup",
      "url": "https://us.thefutureperfectglobal.com/company/what-makes-us-different",
      "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp",
      "description": "A trusted USA business setup company known for transparent pricing, expert-led LLC formation, fast incorporation, and complete compliance support.",
      "areaServed": [
        "United States",
        "California",
        "New York",
        "Texas",
        "Florida",
        "Delaware",
        "Wyoming",
        "Nevada"
      ],
      "serviceType": [
        "LLC Formation USA",
        "Company Incorporation USA",
        "Business Consulting USA",
        "Registered Agent Services",
        "Compliance & Annual Filings"
      ]
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden py-20">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1589942543348-800fc3c47ca2?q=80"
      alt="Entrepreneurs working"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-slate-800 to-yellow-400 opacity-60"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

    {/* Trustpilot */}
    <div className="flex items-center justify-center gap-2 mb-6 text-white">
      <span>Excellent 4.7 out of 5</span>
      <span className="text-yellow-300">★</span>
      <span className="font-semibold">Trustpilot</span>
    </div>

    {/* Heading */}
    <h1 className="text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg">
      Why <span className="drop-shadow-xl">Entrepreneurs Choose Us</span>
    </h1>

    {/* SEO Text */}
    <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md">
      Built by <strong>entrepreneurs for entrepreneurs</strong>, 
      we specialize in <strong>business formation, LLC formation, and startup support</strong>. 
      With <strong>transparent pricing, no hidden fees, and trusted guidance</strong>, 
      we help founders confidently <strong>start a business, register an LLC, and grow successful companies</strong>.
    </p>

  </div>
</section>

     <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl lg:text-5xl font-black mb-6">
        Why <span className="text-cyan-600">Entrepreneurs Choose Us</span>
      </h2>
    </div>

    {/* Features */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Feature 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan/10 hover:shadow-lg transition">
        <div className="text-bizee-cyan font-bold text-sm mb-3">01</div>
        <h3 className="text-2xl text-cyan-600 font-bold mb-4">
          One-Time Business Formation Fee
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Unlike many <strong>LLC formation services</strong> that lock entrepreneurs into 
          recurring subscriptions, we offer a <strong className="text-bizee-cyan">single, transparent fee</strong>. 
          No hidden charges—just reliable <strong>business formation services</strong> when you need them.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition">
        <div className="text-bizee-cyan font-bold text-sm mb-3">02</div>
        <h3 className="text-2xl text-cyan-600 font-bold mb-4">
          $0 LLC Formation Service
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We pioneered the <strong className="text-bizee-cyan">$0 LLC formation model</strong>, 
          helping entrepreneurs <strong>start a business online</strong> while paying only the required 
          <strong>state filing fees</strong>. Our mission is to make <strong>starting a business</strong> 
          accessible to everyone.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition">
        <div className="text-bizee-cyan font-bold text-sm mb-3">03</div>
        <h3 className="text-2xl text-cyan-600 font-bold mb-4">
          Transparent Pricing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We believe in <strong>clear pricing and honest communication</strong>. 
          Our <strong className="text-bizee-cyan">business formation packages</strong> 
          include everything upfront so entrepreneurs can confidently 
          <strong>register an LLC and launch their company</strong>.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition">
        <div className="text-bizee-cyan font-bold text-sm mb-3">04</div>
        <h3 className="text-2xl text-cyan-600 font-bold mb-4">
          Registered Agent Services
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our professional <strong className="text-bizee-cyan">registered agent service</strong> 
          helps protect your privacy and ensures your business receives 
          important legal documents across all <strong>50 U.S. states</strong>.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition">
        <div className="text-bizee-cyan font-bold text-sm mb-3">05</div>
        <h3 className="text-2xl text-cyan-600 font-bold mb-4">
          Business Compliance Support
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Stay compliant with <strong>annual report reminders, filing support, 
          and compliance tools</strong> designed to help entrepreneurs 
          <strong className="text-bizee-cyan">manage and grow their businesses</strong>.
        </p>
      </div>

    </div>

  </div>
</section>

      <section className="py-20 bg-cyan-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Our Story</h2>
      <h3 className="text-4xl lg:text-5xl font-black">
        We <span className="text-bizee-cyan">Stands Apart</span>
      </h3>
    </div>

    {/* Equal height wrapper */}
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      
      {/* LEFT — Image */}
      <div className="flex h-full items-center justify-center">
        <div className="w-full h-full flex flex-col">
          <div className="bg-white p-5 rounded-lg shadow-xl transform -rotate-2 h-full flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              alt="The Future Perfect Global's first office"
              className="rounded-md w-full h-80 object-cover"
            />
            
          </div>
        </div>
      </div>

      {/* RIGHT — Text */}
      <div className="h-full flex items-center">
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Being privately held and 100% bootstrapped means we're free to do things differently. 
            <strong className="text-bizee-cyan">
              We're not beholden to private equity, investors, or aggressive growth metrics.
            </strong>
          </p>
          <p>
            Our mission has always been simple: to do right by our clients by providing exceptional 
            service at fair, honest prices.
          </p>
          <p>
            Our success over the past 20 years speaks for itself. While others build their business on 
            the assumption that customers won't notice the fine print, 
            <strong> we've built ours on the belief that you deserve better.</strong>
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
            The Journey
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black mb-4">
            The <span className="text-cyan-600">Transformation</span>
          </h3>
        </div>

        {/* Video Preview Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="aspect-video w-full relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Evolution"
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-red-900/50"></div>

              {/* Center Play Button & Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h4 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  BECOMING <span className="text-bizee-cyan">The Future Perfect Global:</span>
                </h4>
                <p className="text-xl text-white font-bold mb-6">
                  The Spirit of Entrepreneurship
                </p>

                <button
                  onClick={() => setIsOpen(true)}
                  className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-all"
                >
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl">
            {/* Professional Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-100 hover:text-red-600 shadow-lg transition-all z-50"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video */}
            <div className="w-full aspect-video">
              <video autoPlay controls className="w-full h-full rounded-2xl shadow-2xl">
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-cyan-400 to-slate-400 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-yellow-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-sm font-bold mb-3 uppercase tracking-wider text-white">Incorporate Now</h2>
          <h3 className="text-4xl lg:text-5xl font-black mb-6 text-white drop-shadow-lg">Ready To Get Started?</h3>
          <p className="text-xl mb-10 text-white max-w-2xl mx-auto drop-shadow-md">
            Experience the The Future Perfect Global difference today!
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-bizee-cyan px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-2xl">
            Get Started Now
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
