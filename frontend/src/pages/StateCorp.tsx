import { Link } from 'react-router-dom';
import { states } from '../data/states'; 
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, ChevronRight } from 'lucide-react'; // Suggested icon library
import { useState } from 'react'; 

export default function States() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  ); 
  const faqs = [
  {
    question: "What is corporation formation by state in the USA?",
    answer: "Corporation formation by state in the USA means legally creating a corporation in a specific state based on that state's business laws, filing fees, tax rules, and compliance requirements. Each state has its own incorporation process, which is why business owners often compare the best states to form a corporation before registering."
  },
  {
    question: "Why does the state matter when forming a corporation in the USA?",
    answer: "The state matters because corporation laws, annual report requirements, franchise taxes, filing costs, and privacy rules vary from state to state. Choosing the right state for corporation formation can help reduce costs, simplify compliance, and support long-term business growth."
  },
  {
    question: "Which is the best state to form a corporation in the USA?",
    answer: "The best state to form a corporation in the USA depends on your business goals. Many small businesses choose their home state for easier compliance, while some founders consider states like Delaware, Wyoming, or Nevada for business-friendly laws, tax advantages, and investor appeal."
  },
  {
    question: "Can I form a corporation in a state where I do not live?",
    answer: "Yes, you can form a corporation in a different state even if you do not live there. However, if you operate your business in your home state, you may also need to register there as a foreign corporation, which can create extra filing fees and compliance obligations."
  },
  {
    question: "What are the basic steps for corporation formation by state?",
    answer: "The basic steps usually include choosing the state of incorporation, selecting a business name, appointing a registered agent, filing Articles of Incorporation, creating corporate bylaws, issuing shares, obtaining an EIN, and meeting ongoing state compliance requirements."
  },
  {
    question: "Do all states require a registered agent for corporation formation?",
    answer: "Yes, nearly every state requires a registered agent when forming a corporation. A registered agent receives legal notices, tax documents, and official government correspondence on behalf of your corporation in the state of formation."
  },
  {
    question: "How much does it cost to form a corporation by state in the USA?",
    answer: "The cost to form a corporation in the USA depends on the state you choose. Filing fees, annual reports, franchise taxes, and registered agent costs vary widely, so comparing corporation formation costs by state is an important step before incorporating."
  },
  {
    question: "Is forming a corporation in Delaware better than forming in my home state?",
    answer: "Delaware is popular for corporation formation because of its established corporate laws, business court system, and investor familiarity. However, for many small businesses that mainly operate locally, forming a corporation in the home state is often simpler and more cost-effective."
  },
  {
    question: "What is the difference between domestic and foreign corporation registration?",
    answer: "A domestic corporation is formed in the state where it is incorporated. A foreign corporation is a corporation that was formed in one state but is registered to do business in another state. Businesses operating across state lines may need foreign qualification in addition to initial formation."
  },
  {
    question: "How do I choose the right state for corporation formation in the USA?",
    answer: "To choose the right state for corporation formation, compare factors such as filing fees, state taxes, reporting requirements, privacy protections, legal advantages, and where your company will actually conduct business. The right state depends on your budget, growth plans, and operating location."
  }
];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-bizee-peach">
      <Helmet>
  {/* Primary SEO */}
  <title>
    Corporation State Information USA | Compare Best States to Form a Corporation
  </title>

  <meta
    name="description"
    content="Explore detailed corporation state information in the USA. Compare the best states to form a C-Corporation or S-Corporation including taxes, compliance rules, fees, and benefits."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/state-information-corp"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="corporation state information USA, best state to form a corporation, C corp state comparison, S corp state comparison, corporation taxes by state"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/state-information-corp"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/state-information-corp"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Corporation State Information USA | Compare Best States for Corporations"
  />
  <meta
    property="og:description"
    content="Compare U.S. states for C-Corp and S-Corp formation including taxes, compliance, filing costs, and business advantages."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/state-information-corp"
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
    content="Corporation State Comparison and Information USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Corporation State Information USA"
  />
  <meta
    name="twitter:description"
    content="Find the best U.S. state to form a corporation with state-wise comparisons on taxes, fees, and compliance."
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
      "name": "Corporation State Information USA",
      "url": "https://us.thefutureperfectglobal.com/state-information-corp",
      "description": "State-wise corporation information in the USA covering C-Corp and S-Corp taxes, compliance requirements, fees, and business advantages.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "about": [
        "Corporation State Comparison",
        "Best State for Corporation Formation",
        "C Corporation Regulations",
        "S Corporation Regulations",
        "US Corporate Taxes by State"
      ]
    }`}
  </script>
</Helmet>

      {/* Hero Section - Refined Gradients */}
      <section className="bg-gradient-to-br from-cyan-800 via-cyan-500 to-cyan-800 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-bizee-cyan bg-cyan-50 rounded-full">
            State Guides
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Corporation Requirements <span className="text-bizee-cyan">By State</span>
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
            Select Your <span className='text-cyan-500'>State</span>
          </h2>

          <p className="text-slate-600 text-lg">
            Compare LLC filing fees, annual costs, and requirements for every U.S. state.
          </p>

          <div className="mt-6 h-1 w-24 bg-bizee-cyan rounded-full"></div>

          {/* SEARCH BOX */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search your state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-96 px-5 py-3 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-bizee-cyan
                         focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* STATE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredStates.map((state) => (
            <Link
              key={state.slug}
              to={`/${state.slug}-corporation`}
              className="group relative bg-cyan-100/40 p-7 rounded-3xl
                        border border-cyan-100 shadow-sm
                        hover:shadow-2xl hover:border-bizee-cyan/30
                        transition-all duration-300 ease-out
                        hover:-translate-y-1"
            >
              {/* TITLE */}
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-xl font-bold text-cyan-500 transition-colors">
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

              {/* CTA */}
              <div className="mt-6 text-sm font-semibold text-bizee-cyan">
                View state details →
              </div>

              {/* HOVER OVERLAY */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none
                           opacity-0 group-hover:opacity-100 transition-opacity
                           bg-gradient-to-br from-bizee-cyan/5 via-transparent to-transparent"
              ></div>
            </Link>
          ))}
        </div>

        {/* NO RESULT */}
        {filteredStates.length === 0 && (
          <div className="text-center mt-12 text-gray-500">
            No states found.
          </div>
        )}
      </div>
    </section>

<section className="py-20 bg-cyan-100/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
  <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
    <span className='text-cyan-500'>Best States to Start an LLC:</span> How to Choose the Right State
  </h2>

  <p className="text-lg text-slate-600 leading-xl max-w-xl">
    Choosing the best state to form an LLC depends on your business goals, filing costs,
    annual compliance requirements, taxes, privacy protections, and whether you will
    operate in your home state or nationwide. <span className="text-bizee-cyan font-medium">
    You do not always have to form your LLC in the state where you live</span>, but it is
    important to compare the legal and tax implications before making a decision.
    Popular LLC formation states such as Wyoming, Delaware, and Nevada are often
    considered for their business-friendly laws, lower fees, and added privacy benefits.
    Explore the guides below to compare LLC formation by state and find the best option
    for your business.
  </p>
</div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1629905679177-4c4e2623654f" // replace with your image path
          alt="Choosing the right state"
          className="w-full max-w-md mx-auto rounded-3xl object-cover shadow-xl"
        />
      </div>

    </div>
  </div>
</section>


<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
        Helpful <span className='text-cyan-500'>LLC Formation</span> Resources by State
      </h2>
      <p className="text-lg text-slate-600 max-w-5xl mx-auto">
        Looking for more guidance on starting an LLC in your state? Explore our
        detailed state-by-state guides, tools, and expert resources designed to
        help entrepreneurs understand the LLC formation process, filing
        requirements, and ongoing compliance rules across the United States.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <ResourceCard
        image="https://dummyimage.com/600x400/000/fff"
        title="Understanding Filing Fees"
        link="#"
      />

      <ResourceCard
        image="https://dummyimage.com/600x400/000/fff"
        title="Navigating Filing Times"
        link="#"
      />

      <ResourceCard
        image="https://dummyimage.com/600x400/000/fff"
        title="Business Name Search"
        link="#"
      />

      <ResourceCard
        image="https://dummyimage.com/600x400/000/fff"
        title="Filing Annual Reports"
        link="#"
      />

      <ResourceCard
        image="https://dummyimage.com/600x400/000/fff"
        title="State LLC Filing Tips"
        link="#"
      />

      <ResourceCard
        image="https://dummyimage.com/600x400/000/fff"
        title="File in Another Country"
        link="#"
      />

    </div>

  </div>
</section>

      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-black text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* CTA Section - Professional & Clear */}
      <section className="relative overflow-hidden py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-bizee-cyan rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">
            Launch your business with confidence.
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join over 500 business owners who have used our platform to start, 
            manage, and grow their companies.
          </p>
          <Link
            to="/start"
            className="inline-flex items-center px-10 py-5 bg-cyan-500 text-white rounded-full font-bold text-lg hover:bg-cyan-500 transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-95"
          >
            Start My LLC Now
          </Link>
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
