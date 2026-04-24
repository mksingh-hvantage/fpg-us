import { Link } from 'react-router-dom';
import { states } from '../data/states';  
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
import { ChevronRight} from 'lucide-react'; // Suggested icon library
import { useState } from 'react';

export default function States() {
  
  const [search, setSearch] = useState("");

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-bizee-peach">
      <Helmet>
  {/* Primary SEO */}
  <title>
    LLC State Information USA | Compare Best States to Form an LLC
  </title>

  <meta
    name="description"
    content="Explore detailed LLC state information in the USA. Compare the best states to form an LLC including taxes, compliance rules, fees, and business benefits."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/state-information-llc"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="LLC state information USA, best state to form an LLC, LLC state comparison, Delaware vs Wyoming LLC, LLC taxes by state"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/state-information-llc"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/state-information-llc"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="LLC State Information USA | Compare Best States for LLC Formation"
  />
  <meta
    property="og:description"
    content="Compare LLC formation rules, taxes, and benefits across U.S. states to choose the best state for your business."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/state-information-llc"
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
    content="LLC State Comparison and Information USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="LLC State Information USA"
  />
  <meta
    name="twitter:description"
    content="Find the best U.S. state to form your LLC with detailed state-wise comparisons on taxes, fees, and compliance."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "LLC State Information USA",
      "url": "https://us.thefutureperfectglobal.com/state-information-llc",
      "description": "State-wise LLC information in the USA covering taxes, compliance, fees, and business advantages to help choose the best state for LLC formation.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "about": [
        "LLC State Comparison",
        "Best State for LLC Formation",
        "US LLC Regulations",
        "State Taxes for LLC"
      ]
    }`}
  </script>
</Helmet>

      {/* Hero Section - Refined Gradients */}
      <section className="bg-gradient-to-br from-cyan-800 via-cyan-500 to-cyan-800 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-bizee-cyan bg-cyan-50 rounded-full">
            State Guides
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
            LLC Requirements <span className="text-bizee-cyan">By State</span>
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Starting a business doesn't have to be a puzzle. We've organized every state's 
            specific rules, fees, and timelines into one simple resource.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl transform hover:scale-105">
                Get Started Now
              </button>
            </div>
      </section>

      {/* State Selection Grid - Improved Card Design */}
      <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Select Your State
          </h2>

          <p className="text-slate-600 text-lg">
            Compare LLC filing fees, annual costs, and requirements for every U.S. state.
          </p>

          <div className="mt-0 h-1 w-24 bg-bizee-cyan rounded-full"></div>

          {/* SEARCH BOX */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search your state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-bizee-cyan 
              focus:border-transparent text-slate-700 shadow-sm"
            />
          </div>
        </div>

        {/* STATE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredStates.map((state) => (
            <Link
              key={state.slug}
              to={`/state-llc-formation/${state.slug}`}
              className="group relative bg-white p-7 rounded-3xl
              border border-gray-100 shadow-sm
              hover:shadow-2xl hover:border-bizee-cyan/30
              transition-all duration-300 ease-out
              hover:-translate-y-1"
            >

              {/* TITLE */}
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-xl font-bold text-bizee-cyan transition-colors">
                  {state.name}
                </h3>

                <ChevronRight
                  className="w-5 h-5 text-slate-300
                  group-hover:text-bizee-cyan
                  transform group-hover:translate-x-1 transition-all"
                />
              </div>

              {/* FEES */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                    Filing Fee
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {state.filingFee}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                    Annual Fee
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {state.annualReportFee}
                  </span>
                </div>
              </div>

              {/* CTA HINT */}
              <div className="mt-6 text-sm font-semibold text-bizee-cyan group-hover:opacity-100 transition-opacity">
                View state details →
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none
              opacity-0 group-hover:opacity-100 transition-opacity
              bg-gradient-to-br from-bizee-cyan/5 via-transparent to-transparent">
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>

<section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}
      <div>

        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-bizee-cyan bg-cyan-100 rounded-full">
          LLC Formation Guide
        </span>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          What Is the <span className="text-bizee-cyan">Best State</span> to Form an LLC?
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Choosing the <strong>best state to form an LLC</strong> depends on several
          factors including <strong>LLC filing fees, annual report costs, taxes,
          and state regulations</strong>. Many entrepreneurs form an LLC in the
          state where they live and operate their business.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          However, states like <strong>Wyoming, Delaware, and Nevada</strong> are
          well known for their <span className="text-bizee-cyan font-semibold">
          low filing fees, strong privacy protections, and business-friendly laws
          </span>. These benefits make them popular choices for startups,
          online businesses, and out-of-state entrepreneurs.
        </p>

        {/* KEY HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="p-4 bg-white rounded-2xl shadow-sm border border-cyan-100">
            <p className="text-sm text-slate-500">Popular State</p>
            <p className="font-semibold text-slate-900">Wyoming LLC</p>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow-sm border border-cyan-100">
            <p className="text-sm text-slate-500">Startup Friendly</p>
            <p className="font-semibold text-slate-900">Delaware LLC</p>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow-sm border border-cyan-100">
            <p className="text-sm text-slate-500">No State Income Tax</p>
            <p className="font-semibold text-slate-900">Nevada LLC</p>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">

        <div className="absolute -top-6 -left-6 w-full h-full bg-cyan-200 rounded-3xl blur-2xl opacity-40"></div>

        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80"
          alt="Best state to form an LLC"
          className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
        />

      </div>

    </div>

  </div>
</section> 

<section className="py-24 bg-cyan-100/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="text-center mb-16">
  <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
    LLC Formation Resources by State
  </h2>

  <p className="text-lg text-slate-600 max-w-5xl mx-auto">
    Looking for more details on <strong>how to start an LLC</strong> in your state? 
    Explore our expert guides covering <strong>LLC formation by state, filing fees, 
    registration steps, and annual requirements</strong>. These resources from 
    <strong>The Future Perfect Global</strong> will help you compare 
    <strong>LLC costs, legal requirements, and the best states to start an LLC</strong> 
    so you can choose the right location for your business.
  </p>
</div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <ResourceCard
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80"
        title="Understanding Filing Fees"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80"
        title="Navigating Filing Times"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80"
        title="Business Name Search"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80"
        title="Filing Annual Reports"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80"
        title="State LLC Filing Tips"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1619898381495-5416f6c8045c?q=80"
        title="File in Another Country"
        link="#"
      />

    </div>

  </div>
</section>

  
           <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
  {
    question: "What is the best state to form an LLC in the USA?",
    answer:
      "The best state to form an LLC usually depends on where you live and operate your business. Most small business owners form an LLC in their home state. However, states like Wyoming, Delaware, and Nevada are popular for their business-friendly laws, privacy protections, and low LLC filing fees.",
  },
  {
    question: "Do I need to form my LLC in the state where I live?",
    answer:
      "In most cases, yes. If you operate your business in your home state, you typically need to register your LLC there. Forming an LLC in another state may require registering as a foreign LLC in your home state and paying additional fees.",
  },
  {
    question: "Which state has the cheapest LLC filing fees?",
    answer:
      "LLC filing fees vary by state. States like Kentucky, Arkansas, and New Mexico offer some of the lowest LLC formation costs. However, it's important to consider annual fees, taxes, and reporting requirements when choosing the cheapest state to start an LLC.",
  },
  {
    question: "Why do people form LLCs in Delaware?",
    answer:
      "Delaware is popular because of its well-established business laws, specialized business courts, and investor-friendly regulations. Many large companies and startups choose Delaware for its predictable legal system and strong corporate protections.",
  },
  {
    question: "Is Wyoming a good state to start an LLC?",
    answer:
      "Yes. Wyoming is known for low LLC filing fees, strong privacy protections, and no state income tax for businesses. These benefits make it a popular choice for online businesses, entrepreneurs, and digital nomads.",
  },
  {
    question: "What are the annual costs of maintaining an LLC?",
    answer:
      "Annual LLC costs depend on the state and may include annual report fees, franchise taxes, or business license renewals. Some states charge under $50 per year, while others may require several hundred dollars annually.",
  },
  {
    question: "Can I run my LLC in multiple states?",
    answer:
      "Yes. If your LLC operates in multiple states, you may need to register as a foreign LLC in each state where you conduct business. This ensures compliance with local regulations and tax laws.",
  },
  {
    question: "How long does it take to form an LLC?",
    answer:
      "LLC formation times vary by state. Some states process filings within 1–3 business days, while others may take several weeks. Many states also offer expedited filing options for an additional fee.",
  }
]
            .map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl p-6 group border-2 border-gray-200 hover:border-cyan-500 transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <svg className="w-6 h-6 text-cyan-500 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional & Clear */}
      <section className="relative overflow-hidden py-24 bg-slate-900">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-bizee-cyan rounded-full blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

    {/* HEADING */}
    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
      Start Your LLC the Right Way
    </h2>

    {/* TEXT */}
    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
      Ready to <strong>start an LLC and launch your business?</strong> Our step-by-step
      resources help entrepreneurs compare <strong>LLC formation costs,
      filing fees, and requirements by state</strong> so you can choose the
      best place to register your company and grow with confidence.
    </p>

    {/* CTA BUTTON */}
    <button
      onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
      className="inline-flex items-center gap-3 px-10 py-5 
      bg-cyan-600 text-white rounded-full font-bold text-lg
      hover:bg-cyan-500 transition-all duration-300
      shadow-xl hover:shadow-cyan-500/30
      hover:-translate-y-0.5 active:scale-95"
    >
      Start Your LLC Today
      <span className="text-2xl">→</span>
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

// Sub-component for clean code
function ResourceCard(props: { image: any; title: any; link: any; }) {
  const image = props.image;
  const title = props.title;
  const link = props.link;

  return (
    <a
      href={link}
      className="group block bg-white rounded-3xl overflow-hidden
                 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-4">
        <h3 className="text-base font-semibold text-slate-900">
          {title}
        </h3>
        <span className="text-xl text-slate-400 group-hover:text-bizee-cyan transition-colors">
          ↗
        </span>
      </div>
    </a>
  );
}
