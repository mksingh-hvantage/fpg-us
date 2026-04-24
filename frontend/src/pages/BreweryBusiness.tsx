import { useState } from 'react'; 
import GetStartedModal from '../components/GetStartedModal';
import { Beer, Target, FileText, DollarSign, Users, TrendingUp, CheckCircle, MapPin, Shield, Lightbulb, Wrench, BarChart, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function BreweryBusiness() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');const breweryTypes = [
  {
    title: "Microbrewery Only",
    desc: "Produce your own craft beer and supply it to bars, pubs, and retailers without managing a bar or taproom.",
  },
  {
    title: "Brewpub / Microbrewery with Bar",
    desc: "Sell your beer directly to customers with an on-site bar or restaurant and build a strong local brand.",
  },
  {
    title: "Specialized Microbrewery",
    desc: "Focus on a niche like IPAs, stouts, sours, or regional styles and master a specific beer category.",
  },
  {
    title: "Cidery",
    desc: "Produce hard cider using apples or other fruits like berries and pears with less competition.",
  },
  {
    title: "Distillery",
    desc: "Create spirits like whiskey, vodka, gin, rum, or bourbon instead of beer.",
  },
  {
    title: "Winery",
    desc: "Produce and sell wine by growing grapes or sourcing them for premium wine production.",
  },
];

const faqs = [
  {
    question: "How do I start a brewery business?",
    answer: "To start a brewery business, you need to choose a brewery type (microbrewery, brewpub, or craft brewery), create a detailed business plan, secure funding, obtain licenses and permits, purchase brewing equipment, and select a suitable location. Proper market research and branding are also essential for long-term success."
  },
  {
    question: "What licenses are required to open a brewery?",
    answer: "Starting a brewery requires federal, state, and local licenses. In most cases, you need approval from alcohol regulatory authorities, a brewing license, health permits, zoning approvals, and business registration. Requirements vary by country and region, so always check with local authorities before launching."
  },
  {
    question: "How much does it cost to start a microbrewery?",
    answer: "The cost to start a microbrewery can range from $100,000 to over $1 million depending on the size, equipment, and location. Expenses include brewing equipment, licensing fees, rent, staffing, raw materials, and marketing. A detailed financial plan is essential to estimate startup and operational costs."
  },
  {
    question: "Is a brewery business profitable?",
    answer: "A brewery business can be highly profitable if managed efficiently. Profitability depends on production capacity, pricing strategy, distribution channels, and brand positioning. Successful breweries often diversify revenue through taprooms, direct sales, and partnerships with retailers."
  },
  {
    question: "What equipment is needed to start a brewery?",
    answer: "Essential brewery equipment includes brewing tanks, fermentation vessels, cooling systems, filtration units, bottling or canning lines, and storage facilities. The type and scale of equipment depend on whether you are starting a small microbrewery or a large production brewery."
  },
  {
    question: "Do I need a business plan for a brewery startup?",
    answer: "Yes, a brewery business plan is crucial for success. It outlines your goals, target market, production strategy, financial projections, and marketing approach. A strong plan also helps secure funding from investors or lenders and guides your business growth."
  },
  {
    question: "How long does it take to open a brewery?",
    answer: "Opening a brewery typically takes 6 to 18 months. The timeline depends on licensing approvals, equipment installation, location setup, and funding availability. Delays often occur due to regulatory processes, so early planning is important."
  }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-white overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg")'
    }}
  ></div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-cyan-900/60"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto text-center">

    {/* ICON */}
    <div className="flex items-center justify-center mb-6">
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
        <Beer className="w-8 h-8 md:w-8 md:h-8 text-white" />
      </div>
    </div>

    {/* TITLE */}
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
      Start Your Brewery Business
    </h1>

    {/* DESCRIPTION */}
    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
      Turn your passion for craft beer into a profitable venture. Learn how to launch, manage, 
      and grow a successful brewery with the right strategy and tools.
    </p>

    {/* BUTTONS */}
    <div className="flex gap-4 justify-center flex-wrap">

      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg"
      >
        Get Started Now
      </button>

      <a
        href="/contact"
        className="border border-white/40 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition backdrop-blur-sm"
      >
        Learn More
      </a>

    </div>

  </div>
</section>

      {/* Why Start a Brewery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
            Why Start a Brewery Business?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The craft beer industry continues to grow, offering exciting opportunities for entrepreneurs passionate about brewing.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 p-8 rounded-xl">
              <TrendingUp className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growing Market</h3>
              <p className="text-gray-700 leading-relaxed">
                The craft beer market continues to expand with consumers seeking unique, locally-produced beverages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
              <Lightbulb className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Expression</h3>
              <p className="text-gray-700 leading-relaxed">
                Brewing allows you to experiment with flavors, ingredients, and techniques to create signature products.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Building</h3>
              <p className="text-gray-700 leading-relaxed">
                Breweries become community hubs where people gather, creating loyal customer bases and local connections.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Beer className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Choose Your Brewery Type
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore different brewery business models and find the perfect fit
            for your vision, budget, and goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breweryTypes.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="text-cyan-400 mt-1" />
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Choose the Right Brewery Name & Build a Strong Business Plan
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Creating a memorable brand name and a well-structured business plan is essential 
            for launching a successful microbrewery. A strong foundation helps you stand out 
            in a competitive market and scale your brewery with confidence.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          {/* LEFT SIDE */}
<div className="space-y-8">

  <div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">
      Create a Memorable Brewery Name
    </h3>

    <p className="text-slate-600 leading-relaxed mb-4">
      Your brewery name is a key part of your brand identity. Study successful 
      breweries and explore creative, unique naming ideas that reflect your 
      vision, style, and target audience.
    </p>

    <p className="text-slate-600 leading-relaxed">
      Don’t hesitate to think outside the box — distinctive and bold names 
      often perform best in the craft beer industry.
    </p>
  </div>

  {/* IMAGE */}
  <div className="relative">
    <img
      src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
      alt="Craft brewery planning and branding"
      className="w-full h-[260px] object-cover rounded-3xl shadow-lg"
    />

    {/* OVERLAY LABEL (premium touch) */}
    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow">
      <p className="text-xs text-slate-500">Branding & Planning</p>
      <p className="text-sm font-semibold text-slate-900">
        Build a Strong Brewery Identity
      </p>
    </div>
  </div>

  {/* TIP BOX */}
  <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-2xl flex gap-4">
    <Lightbulb className="text-cyan-500 w-6 h-6 mt-1" />

    <div>
      <h4 className="font-semibold text-slate-900 mb-1">Pro Tip</h4>
      <p className="text-sm text-slate-600">
        Secure your domain name and social media handles as soon as you finalize 
        your brewery name to protect your brand identity online.
      </p>
    </div>
  </div>

</div>

          {/* RIGHT SIDE */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              What to Include in Your Brewery Business Plan
            </h3>

            <div className="space-y-5">

              {[
                "Executive summary outlining key objectives and vision",
                "Clear business goals and growth targets",
                "Detailed description of your brewery and unique selling points",
                "Market research and demand analysis",
                "Business structure and ownership model",
                "Revenue strategy and business model",
                "Marketing and sales approach",
                "Financial projections including costs, revenue, and profitability",
                "Supporting documents and additional references"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">

                  <CheckCircle2 className="text-cyan-600 w-5 h-5 mt-1" />

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>

      {/* Steps to Start */}
      <section className="py-16 px-4 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
            Steps to Launch Your Brewery
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Follow this comprehensive roadmap to turn your brewery dream into reality.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: FileText,
                title: "Create a Business Plan",
                description: "Develop a detailed business plan covering your concept, target market, financial projections, and growth strategy. Include market research and competitive analysis.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Obtain Licenses & Permits",
                description: "Secure federal brewery permits from the TTB, state licenses, local permits, and health department approvals. This process can take several months.",
                color: "red"
              },
              {
                icon: MapPin,
                title: "Choose Your Location",
                description: "Find a suitable location with proper zoning, adequate space for equipment, taproom area, and storage. Consider foot traffic and accessibility.",
                color: "green"
              },
              {
                icon: Wrench,
                title: "Purchase Equipment",
                description: "Invest in brewing systems, fermentation tanks, kegs, bottling/canning lines, and taproom fixtures. Start with scalable equipment that matches your volume.",
                color: "cyan"
              },
              {
                icon: Users,
                title: "Build Your Team",
                description: "Hire experienced brewers, taproom staff, and sales personnel. Training and culture are key to delivering consistent quality and service.",
                color: "purple"
              },
              {
                icon: BarChart,
                title: "Launch & Market",
                description: "Create buzz with a grand opening, establish distribution channels, build your brand on social media, and engage with the local community.",
                color: "cyan"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-6">
                  <div className={`bg-${step.color}-100 p-4 rounded-lg flex-shrink-0`}>
                    <Icon className={`w-8 h-8 text-${step.color}-600`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-gray-300">0{index + 1}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Structure */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
            Choose Your Business Structure
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Select the right legal structure for your brewery based on liability protection, taxes, and funding needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "LLC",
                description: "Popular choice offering liability protection with flexible taxation options.",
                pros: ["Asset protection", "Tax flexibility", "Simple management"]
              },
              {
                title: "Corporation",
                description: "Ideal for larger operations seeking investors or planning significant growth.",
                pros: ["Strong liability shield", "Easy to raise capital", "Established structure"]
              },
              {
                title: "Partnership",
                description: "Suitable for co-founders sharing responsibilities and profits.",
                pros: ["Shared resources", "Combined expertise", "Tax pass-through"]
              },
              {
                title: "Sole Proprietorship",
                description: "Simplest structure for small-scale or home brewing operations.",
                pros: ["Easy setup", "Full control", "Minimal paperwork"]
              }
            ].map((structure, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-6 rounded-xl hover:border-cyan-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{structure.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{structure.description}</p>
                <ul className="space-y-2">
                  {structure.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Considerations */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <DollarSign className="w-12 h-12 text-cyan-600" />
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
            Startup Costs & Financing
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Understanding the financial requirements is crucial for launching a successful brewery.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Typical Startup Costs</h3>
              <div className="space-y-4">
                {[
                  { item: "Brewing Equipment", range: "$100,000 - $500,000" },
                  { item: "Real Estate & Renovation", range: "$50,000 - $300,000" },
                  { item: "Licenses & Permits", range: "$5,000 - $15,000" },
                  { item: "Initial Inventory", range: "$10,000 - $30,000" },
                  { item: "Marketing & Branding", range: "$5,000 - $20,000" },
                  { item: "Working Capital", range: "$25,000 - $100,000" }
                ].map((cost, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">{cost.item}</span>
                    <span className="text-cyan-600 font-semibold">{cost.range}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-cyan-200">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total Investment</span>
                  <span className="text-2xl font-bold text-cyan-600">$200K - $1M+</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Funding Options</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Small Business Loans",
                    description: "Traditional bank loans or SBA loans offer competitive rates for established entrepreneurs."
                  },
                  {
                    title: "Investors & Partnerships",
                    description: "Bring in partners or angel investors who believe in your brewery vision."
                  },
                  {
                    title: "Crowdfunding",
                    description: "Build community support and raise capital through platforms like Kickstarter."
                  },
                  {
                    title: "Personal Savings",
                    description: "Use personal funds or home equity for full ownership and control."
                  }
                ].map((option, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-cyan-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
            Marketing Your Brewery
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Build a strong brand and attract customers with these proven marketing strategies.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Taproom Experience",
                points: [
                  "Create inviting atmosphere",
                  "Host events and tastings",
                  "Offer tours and education",
                  "Build community connections"
                ],
                color: "cyan"
              },
              {
                title: "Digital Presence",
                points: [
                  "Active social media engagement",
                  "Professional website",
                  "Email marketing campaigns",
                  "Online ordering system"
                ],
                color: "blue"
              },
              {
                title: "Distribution",
                points: [
                  "Partner with local restaurants",
                  "Attend beer festivals",
                  "Retail store placement",
                  "Collaborate with other breweries"
                ],
                color: "green"
              }
            ].map((strategy, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{strategy.title}</h3>
                <ul className="space-y-3">
                  {strategy.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 text-${strategy.color}-600 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Everything you need to know about business licenses and permits</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="flex-shrink-0 w-6 h-6 text-cyan-600" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 w-6 h-6 text-cyan-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t-2 border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <Beer className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Ready to Start Your Brewery Journey?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
            Take the first step towards building your dream brewery business. With proper planning, passion, and persistence, you can create a thriving craft beer operation.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors shadow-lg">
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
