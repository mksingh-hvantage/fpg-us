import { useState } from 'react';
import { Check, X, ChevronDown, Star } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function BusinessNameGenerator() {
  const [keywords, setKeywords] = useState('');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const generateNames = () => {
    if (!keywords.trim()) return;

    const suffixes = ['Pro', 'Hub', 'Labs', 'Works', 'Group', 'Solutions', 'Services', 'Co', 'Digital', 'Tech'];
    const prefixes = ['Smart', 'Elite', 'Prime', 'Next', 'Peak', 'Apex', 'Core', 'Global', 'Bright', 'Swift'];

    const names = [];
    const keyword = keywords.trim();

    for (let i = 0; i < 20; i++) {
      const random = Math.random();
      if (random < 0.33) {
        names.push(`${prefixes[Math.floor(Math.random() * prefixes.length)]} ${keyword}`);
      } else if (random < 0.66) {
        names.push(`${keyword} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`);
      } else {
        names.push(`${prefixes[Math.floor(Math.random() * prefixes.length)]} ${keyword} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`);
      }
    }

    setGeneratedNames(names);
  };

  const faqs = [
  {
    question: "What is the Best Business Name Generator for Startups?",
    answer: "The best business name generator helps entrepreneurs create unique, creative, and brandable business names in seconds. A powerful AI business name generator suggests startup name ideas based on your industry, keywords, and brand style. It can generate LLC name ideas, startup brand names, and check domain availability so you can quickly find the perfect business name for your company."
  },
  {
    question: "What Are the Different Types of Business and Brand Names?",
    answer: "There are several popular types of business names used by startups and brands. Descriptive names explain what the business does, invented names are unique made-up words like Google, acronym names shorten long phrases like IBM, compound names combine two words like Facebook, founder names use a person’s name like Ford, and metaphorical names use symbolic meaning like Amazon or Apple. Choosing the right type depends on your branding and marketing strategy."
  },
  {
    question: "What Are Some Examples of Good Business Names?",
    answer: "Examples of strong business names include 'BrightPath Consulting', 'TechNova Solutions', 'Summit Marketing Group', or 'Elite Digital Agency'. A good business name is memorable, easy to spell, and clearly represents your brand. The best startup business names are unique, simple, and available for domain registration and social media handles."
  },
  {
    question: "How Do I Register a Business Name in the United States?",
    answer: "To register a business name in the United States, start by checking business name availability through your state’s Secretary of State website. Next, choose a business structure such as an LLC, corporation, or sole proprietorship. Then file your formation documents, obtain an EIN from the IRS, and register your business for taxes. You may also register a domain name and trademark your brand name for additional protection."
  },
  {
    question: "Can I Change My Business Name After Registration?",
    answer: "Yes, you can legally change your business name after registration. The process usually requires filing an amendment with your state business registry, updating your EIN information with the IRS, modifying business licenses, and updating branding materials like your website, logo, and marketing assets. Many companies rebrand as they grow to better match their market or services."
  },
  {
    question: "How Much Does It Cost to Register a Business Name?",
    answer: "The cost to register a business name depends on the state and business structure. LLC formation fees typically range from $50 to $500 depending on the state. Registering a DBA (Doing Business As) usually costs between $10 and $100. Trademark registration with the USPTO costs around $225 to $400 per class. Additional expenses may include domain registration and business formation services."
  },
  {
    question: "What Makes a Good and Successful Business Name?",
    answer: "A good business name is short, memorable, and easy to pronounce. It should clearly represent your brand identity, be unique in your industry, and have an available domain name. Successful business names are scalable, meaning they allow your company to grow into new products or markets without limiting your brand."
  },
  {
    question: "Should a Business Name Include SEO Keywords?",
    answer: "Including keywords in a business name can help improve local SEO and make it clear what your company does. For example, names like 'Denver Roofing Experts' immediately communicate the service offered. However, many successful brands use creative or invented names like Google or Uber, which become recognizable through branding and marketing."
  },
  {
    question: "How Can I Check if a Business Name is Available?",
    answer: "To check business name availability, search your state’s business registry or Secretary of State database. You should also check the USPTO trademark database, verify domain name availability through registrars like GoDaddy or Namecheap, and search social media platforms to ensure the name is not already in use. Performing a complete name search helps prevent legal issues and brand confusion."
  },
  {
    question: "What Does DBA Mean in Business?",
    answer: "DBA stands for 'Doing Business As'. It is also called a fictitious business name or trade name. A DBA allows a company to operate under a different name than its legal registered name. For example, if your LLC is registered as 'Smith Holdings LLC' but you run a café called 'Downtown Coffee House', you would register a DBA for that brand name."
  },
  {
    question: "Can Two Businesses Have the Same Name?",
    answer: "Two businesses may have the same name if they operate in different states or industries. However, if a name is trademarked nationally, other businesses cannot legally use it in the same industry. Even when legally allowed, using a similar business name can cause brand confusion and make marketing more difficult."
  },
  {
    question: "Should I Trademark My Business Name?",
    answer: "Trademarking your business name protects your brand and gives you exclusive rights to use the name in your industry. A registered trademark prevents competitors from using similar names and strengthens your brand identity. Many growing startups trademark their name once they establish their brand presence."
  },
  {
    question: "What Is the Ideal Length for a Business Name?",
    answer: "The best business names are typically short and simple, usually between two and three words. Short names are easier to remember, easier to spell, and work better for domain names and social media branding. Avoid extremely long names that are difficult for customers to recall."
  },
  {
    question: "What Are Common Mistakes When Choosing a Business Name?",
    answer: "Common mistakes include choosing names that are too generic, difficult to spell, too similar to competitors, or limiting future business growth. Another mistake is not checking domain availability or trademark conflicts before registering the name. A strong business name should be unique, scalable, and easy to market."
  },
  {
    question: "Can I Use My Personal Name for My Business?",
    answer: "Yes, many entrepreneurs use their personal names for businesses, especially in consulting, law firms, creative services, and personal brands. Using your own name can help build trust and credibility. However, it may make it harder to sell the business later or expand beyond a personal brand."
  }
];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <Helmet>
  {/* Primary SEO */}
  <title>
    Business Name Generator USA | Free Company Name Ideas Tool
  </title>

  <meta
    name="description"
    content="Generate unique business name ideas instantly with our free Business Name Generator for the USA. Find brandable company names available for registration."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-name-generator"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="business name generator USA, company name ideas, free business name tool, startup name generator, brand name generator USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-name-generator"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-name-generator"
    hrefLang="x-default"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Business Name Generator USA | Free Company Name Ideas"
  />
  <meta
    property="og:description"
    content="Use our free Business Name Generator to discover creative and available company name ideas for your USA business."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-name-generator"
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
    content="Free Business Name Generator Tool USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Business Name Generator USA"
  />
  <meta
    name="twitter:description"
    content="Generate unique and brandable business name ideas for free with our USA Business Name Generator."
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
      "name": "Business Name Generator USA",
      "url": "https://us.thefutureperfectglobal.com/business-name-generator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "description": "A free online business name generator tool to create unique and brandable company name ideas for USA businesses.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      }
    }`}
  </script>
</Helmet>

      <section className="bg-cyan-100/50 py-12 px-4">
      
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-sm mb-4 font-semibold text-bizee-gray uppercase tracking-wider">
              Powered by Business Formation & LLC Experts
            </p>

            <h1 className="text-5xl mb-4 font-extrabold text-bizee-dark leading-tight">
              Find the Perfect <span className='text-cyan-600'>Business Name</span><br />for Your LLC or Startup
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-bizee-gray max-w-3xl mx-auto leading-relaxed">
              Discover unique business name ideas using our AI-powered business name generator. 
              Create brandable, keyword-rich company names for your LLC, startup, or online business 
              that stand out in search results and attract more customers.
            </p>

             <div className="max-w-4xl mx-auto">
          <div className="">

            <div className="space-y-6">


              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && generateNames()}
                  placeholder="e.g., consulting, tech, design"
                  className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-bizee-cyan focus:border-bizee-cyan text-lg transition-all"
                />
                <button
                  onClick={generateNames}
                  className="bg-cyan-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-cyan-600 transition-all hover:shadow-lg whitespace-nowrap text-lg"
                >
                  Generate Names
                </button>
              </div>
            </div>
          </div>

          {generatedNames.length > 0 && (
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-bizee-dark mb-8">
                Generated Names
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-bizee-cyan transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-bizee-dark">{name}</span>
                      <button className="text-bizee-cyan hover:text-cyan-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

            <div className="pt-6 text-sm text-bizee-gray max-w-2xl mx-auto leading-relaxed">
              <p>
                <span className="font-semibold text-bizee-dark">Bootstrap your business, Founder Led.</span>
                {' '}Independently-Owned • We're 100% With{' '}
                <span className="font-semibold text-bizee-dark">Your $100k MRR</span> (monthly recurring revenue) • Forward
              </p>
            </div>
          </div>
        </div>
      </section>

          <section className="py-12 bg-blue-100/50">
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

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-bold text-bizee-cyan uppercase tracking-wider">
                  Business Name Ideas & Branding Tips
                </p>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-bizee-dark leading-xl">
                  Choosing the Perfect <span className='text-cyan-600'>Business Name</span> for Your Startup or LLC
                </h2>

                <div className="space-y-4 text-lg text-bizee-gray leading-relaxed">
                  <p>
                    Your business name is the foundation of your brand identity. A strong, 
                    memorable company name helps your startup or LLC stand out in search 
                    results, attract customers, and build long-term brand recognition in 
                    a competitive market.
                  </p>

                  <p>
                    The best business names are simple, unique, and easy to remember. 
                    Whether you're launching a startup, registering an LLC, or building 
                    an online brand, choosing the right name can improve your marketing, 
                    boost brand visibility, and create a lasting impression across websites, 
                    social media, and business directories.
                  </p>
                </div>
              </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5989932/pexels-photo-5989932.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business professional working on laptop"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 px-4 bg-cyan-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-bizee-dark">
                Tips for Choosing the Perfect <span className='text-cyan-500'>Business Name</span> for Your Startup or LLC
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* DO USE */}
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-bizee-dark">Best Practices</h3>
                </div>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Choose a short, memorable, and easy-to-spell business name
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Create a unique brand name that stands out from competitors
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Pick a name that is easy to pronounce and remember for customers
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Check domain name availability and social media handles
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Select a scalable business name that supports long-term growth
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Ensure the name has positive brand associations and trademark potential
                    </span>
                  </li>
                </ul>
              </div>

              {/* DON'T USE */}
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-bizee-dark">Common Mistakes to Avoid</h3>
                </div>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Long or complicated business names that are hard to remember
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Generic company names that lack brand identity
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Difficult spelling that customers may easily misspell
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Names too similar to existing brands or trademarks
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Location-specific names if you plan to expand your business
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-bizee-gray text-lg leading-relaxed">
                      Overused trendy words that may quickly become outdated
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">

                  {/* Heading */}
                  <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-bizee-dark mb-6">
                      <span className='text-cyan-500'>Business Name</span>, Branding & Startup Marketing Statistics
                    </h2>
                    <p className="text-lg text-bizee-gray leading-relaxed">
                      In today’s competitive digital marketplace, choosing the right business 
                      name and building a strong brand identity is essential for startups and 
                      small businesses. A memorable company name and professional branding help 
                      attract customers, build trust, and improve brand recognition across 
                      websites, social media, and online platforms.
                    </p>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Startup branding and business name strategy"
                        className="w-full h-[520px] object-cover"
                      />
                    </div>

                    {/* Stats */}
                    <div className="space-y-6">

                      {/* Card 1 */}
                      <div className="flex items-center gap-6 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
                        <div className="min-w-[90px] h-[90px] bg-bizee-peach rounded-2xl flex items-center justify-center">
                          <span className="text-3xl font-bold text-cyan-500">72%</span>
                        </div>
                        <p className="text-bizee-gray text-lg leading-relaxed">
                          <span className="font-semibold text-cyan-500">72%</span> of successful 
                          brand names are unique or invented words, helping startups create a 
                          strong and memorable brand identity.
                        </p>
                      </div>

                      {/* Card 2 */}
                      <div className="flex items-center gap-6 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
                        <div className="min-w-[90px] h-[90px] bg-bizee-peach rounded-2xl flex items-center justify-center">
                          <span className="text-3xl font-bold text-cyan-500">77%</span>
                        </div>
                        <p className="text-bizee-gray text-lg leading-relaxed">
                          <span className="font-semibold text-cyan-500">77%</span> of consumers 
                          say a recognizable brand name strongly influences their purchasing 
                          decisions.
                        </p>
                      </div>

                      {/* Card 3 */}
                      <div className="flex items-center gap-6 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
                        <div className="min-w-[90px] h-[90px] bg-bizee-peach rounded-2xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-cyan-500">7 SEC</span>
                        </div>
                        <p className="text-bizee-gray text-lg leading-relaxed">
                          Your business has only 
                          <span className="font-semibold text-cyan-500"> 7 seconds </span>
                          to make a strong first impression through your company name, logo, 
                          and overall brand presentation.
                        </p>
                      </div>

                      {/* Card 4 */}
                      <div className="flex items-center gap-6 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
                        <div className="min-w-[90px] h-[90px] bg-bizee-peach rounded-2xl flex items-center justify-center">
                          <span className="text-3xl font-bold text-cyan-500">55%</span>
                        </div>
                        <p className="text-bizee-gray text-lg leading-relaxed">
                          <span className="font-semibold text-cyan-500">55%</span> of a first 
                          impression is based on visual branding elements such as logo design, 
                          brand colors, and professional brand identity.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

          <section className="py-20 px-4 bg-cyan-100/50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16 space-y-4">
      <p className="text-sm font-bold text-bizee-cyan uppercase tracking-wider">
        Resources for Entrepreneurs & Startups
      </p>
      <h2 className="text-5xl font-extrabold text-bizee-dark">
        What To Do After Choosing Your <span className='text-cyan-500'>Business Name</span>
      </h2>
      <p className="text-lg text-bizee-gray max-w-4xl mx-auto">
        After using a business name generator and finding the perfect brand name, the next step is registering and legally protecting your business. Follow these essential steps to start your company the right way.
      </p>
    </div>

    <div className="space-y-24">

      {/* Step 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="text-cyan-600 text-4xl font-extrabold">01</div>
          <h3 className="text-2xl font-bold text-bizee-dark">
            Check Business Name Availability
          </h3>
          <p className="text-lg text-bizee-gray leading-relaxed">
            Before registering your company name, perform a business name availability search. 
            Check your state's business registry, run a trademark search, and confirm your 
            domain name is available. This helps avoid legal conflicts and ensures your 
            brand name is unique across online and offline platforms.
          </p>
          <a href="/business-name-search" className="inline-flex items-center text-bizee-cyan font-semibold text-lg hover:underline">
            Check Name Availability →
          </a>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="bg-gray-900 text-white p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-bizee-cyan font-semibold text-xl">Acme LLC</div>
            <div className="text-gray-400 text-sm mt-2">Status: Available</div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://images.pexels.com/photos/7688250/pexels-photo-7688250.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Choose business structure LLC corporation sole proprietorship"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="text-cyan-600 text-4xl font-extrabold">02</div>
          <h3 className="text-3xl font-bold text-cyan-600">
            Choose Your Business Structure
          </h3>
          <p className="text-lg text-bizee-gray leading-relaxed">
            Decide how your business will be legally structured. Popular options 
            include forming an LLC, registering a corporation, or starting as a 
            sole proprietorship. Your business structure impacts taxes, liability 
            protection, and how your business name is officially registered.
          </p>
          <a href="#" className="inline-flex items-center text-bizee-cyan font-semibold text-lg hover:underline">
            Compare Business Structures →
          </a>
        </div>
      </div>

      {/* Step 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <div className="text-cyan-600 text-4xl font-extrabold">03</div>
          <h3 className="text-3xl font-bold text-cyan-600">
            Register and Form Your LLC
          </h3>
          <p className="text-lg text-bizee-gray leading-relaxed">
            Once your name is confirmed, file your LLC formation documents with 
            the state to officially register your business. LLC registration 
            protects your brand name, provides liability protection, and allows 
            you to legally operate your company. Many entrepreneurs use LLC 
            formation services to simplify the process and ensure compliance.
          </p>
          <a
            href="/state-information-llc"
            className="inline-flex items-center text-bizee-cyan font-semibold text-lg hover:underline"
          >
            Start LLC Registration →
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="LLC formation and business registration process"
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-bizee-dark font-bold text-lg">Start Your LLC</p>
            <p className="text-sm text-bizee-gray">
              Fast • Secure • 100% Online
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-bizee-dark mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-bizee-cyan transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg sm:text-xl font-bold text-bizee-dark pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-bizee-cyan flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 sm:px-8 pb-8">
                    <p className="text-bizee-gray text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6">

            <div className="space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                Trusted by Entrepreneurs & Startups
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-500 leading-tight">
                Over <span className="text-bizee-cyan">500+</span>
              </h2>

              <p className="text-3xl sm:text-4xl font-bold text-white">
                Businesses Successfully Launched with Bizee
              </p>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bizee helps entrepreneurs turn ideas into real companies. From using our 
              powerful business name generator to completing LLC formation and business 
              registration, our platform provides everything you need to start a 
              successful business. Join hundreds of founders who trust Bizee to launch, 
              brand, and grow their startups faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-2">

              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-xl">4.5</span>
                <span className="text-gray-400 text-lg">G2 Reviews</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-xl">4.0</span>
                <span className="text-gray-400 text-lg">Trustpilot</span>
              </div>

            </div>

            <button
              onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }}
              className="bg-cyan-600 text-white px-12 py-3 rounded-full font-bold text-xl hover:bg-cyan-600 transition-all hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Business Today
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
