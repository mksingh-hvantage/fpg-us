import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function BusinessNameSearch() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType] = useState<string>('');

  const [searchData, setSearchData] = useState({
    name: "",
    state: "",
    entityType: "",
    email: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setShowPopup(true);

    // optional reset form
    setSearchData({
      name: "",
      state: "",
      entityType: "",
      email: ""
    });
  };

  return (
    <>
    <div className="flex flex-col">
      <Helmet>
  {/* Primary SEO */}
  <title>
    Business Name Search USA | Check Company Name Availability
  </title>

  <meta
    name="description"
    content="Check business name availability in the USA with our Business Name Search tool. Verify company names before LLC registration, DBA filing, or trademark application."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-name-search"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="business name search USA, company name availability check, LLC name search, DBA name search USA, business name lookup"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-name-search"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-name-search"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Business Name Search USA | Check Company Name Availability"
  />
  <meta
    property="og:description"
    content="Search and verify business name availability in the USA before registering your LLC, DBA, or trademark."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-name-search"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Business Tools"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="USA Business Name Availability Search Tool"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Business Name Search USA"
  />
  <meta
    name="twitter:description"
    content="Check business name availability across the USA before company registration, DBA filing, or trademark application."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Business Name Search USA",
      "url": "https://us.thefutureperfectglobal.com/business-name-search",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "description": "An online business name search tool to check company name availability in the USA for LLCs, DBAs, and trademarks.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      }
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 py-12">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business search"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-2 font-semibold">
              🔍 Name Availability
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-2 leading-tight drop-shadow-2xl">
              Business Name Search
            </h1>
            <p className="text-2xl mb-8 text-cyan-50 leading-relaxed">
              Check if your desired business name is available in your state before you file. Get results within one hour via email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#search-form" className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl transform hover:scale-105">
                Search Now - Free
              </a>
              <Link to="/business-name-generator" className="inline-block border-4 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                Generate Names
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="search-form"
        className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-5xl font-black text-center text-gray-900 mb-6">
            Check Name Availability
          </h2>

          <p className="text-xl text-center text-gray-600 mb-12">
            Free search - Results delivered in ~60 minutes
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-10 border-4 border-cyan-300 shadow-2xl"
          >

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  Desired Business Name
                </label>

                <input
                  type="text"
                  value={searchData.name}
                  onChange={(e) =>
                    setSearchData({ ...searchData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                  placeholder="Enter your business name"
                  required
                />

                <p className="text-sm text-gray-500 mt-2">
                  Don't include LLC, Inc, Corp, etc. - we'll check all variations
                </p>
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  State
                </label>

                <select
                  value={searchData.state}
                  onChange={(e) =>
                    setSearchData({ ...searchData, state: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                  required
                >
                  <option value="">Select Your State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="FL">Florida</option>
                  <option value="IL">Illinois</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">

              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  Entity Type
                </label>

                <select
                  value={searchData.entityType}
                  onChange={(e) =>
                    setSearchData({ ...searchData, entityType: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                  required
                >
                  <option value="">Select Entity Type</option>
                  <option value="LLC">LLC</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Nonprofit">Nonprofit</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  Email Address
                </label>

                <input
                  type="email"
                  value={searchData.email}
                  onChange={(e) =>
                    setSearchData({ ...searchData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 outline-none text-lg"
                  placeholder="your@email.com"
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:from-cyan-700 hover:to-blue-700 transition-all shadow-xl transform hover:scale-105"
            >
              Search Name Availability - FREE
            </button>

          </form>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1684833757559-269b96781804?q=80"
          alt="Importance of choosing a great business name and brand identity"
          className="rounded-3xl shadow-2xl"
        />
      </div>

      {/* Content */}
      <div>
        <span className="text-cyan-500 font-semibold tracking-wide uppercase">
          Your Choice Matters
        </span>

        <h2 className="text-4xl font-black text-gray-900 mt-4 mb-6">
          Importance of a Great Business Name
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Choosing the right <strong>business name</strong> is one of the most important
          steps when starting a company. A strong and memorable 
          <strong> brand name</strong> shapes how customers perceive your business,
          builds trust, and helps your startup stand out in a competitive market.
          The best <strong>company names</strong> are short, unique, and easy to remember,
          making them perfect for branding, marketing, and domain registration.
        </p>

        <div className="space-y-6">
          {[
            {
              icon: "🚀",
              title: "Build a Strong Brand Identity",
              desc: "A unique and memorable business name helps establish a powerful brand identity and makes your company easier for customers to recognize and remember.",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: "📈",
              title: "Improve Marketing & SEO",
              desc: "The right company name improves brand visibility, supports marketing campaigns, and can help your business rank better in search engines.",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: "⭐",
              title: "Create Customer Trust",
              desc: "Professional and well-chosen startup names build credibility and confidence, making customers more likely to choose your brand.",
              color: "from-green-500 to-emerald-500"
            }
          ].map((benefit, idx) => (
            <div key={idx} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>

              <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>
      

      <section className="py-16 bg-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">What We Check</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏛️',
                title: 'State Registry',
                desc: 'Official Secretary of State business database',
                image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                icon: '📝',
                title: 'Similar Names',
                desc: 'Names that are confusingly similar to yours',
                image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                icon: '🔍',
                title: 'All Variations',
                desc: 'LLC, Inc, Corp, and other entity designators',
                image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
            ].map((check, idx) => (
              <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <img src={check.image} alt={check.title} className="w-full h-48 object-cover" />
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">{check.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{check.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{check.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">Not Sure About a Name?</h2>
          <p className="text-2xl mb-10 text-cyan-100">Try our Business Name Generator for ideas</p>
          <Link to="/business-name-generator" className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl transform hover:scale-105">
            Generate Business Names
          </Link>
        </div>
      </section>
      <GetStartedModal
                                      isOpen={isModalOpen}
                                      onClose={() => setIsModalOpen(false)}
                                      selectedBusinessType={selectedBusinessType}
                                    />
    </div>
    {/* POPUP */}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

          <div className="bg-white rounded-2xl p-10 max-w-lg text-center shadow-2xl">

            <h3 className="text-3xl font-bold text-green-600 mb-4">
              Thank You!
            </h3>

            <p className="text-gray-700 text-lg mb-6">
              Thank you for contacting us. Our executive will contact you very soon.
              <br /><br />
              Thank you for choosing <strong>Future Perfect Global LLC.</strong>
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700"
            >
              Close
            </button>

          </div>

        </div>
      )}
      </>
  );
}
