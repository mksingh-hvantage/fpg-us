import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, CheckCircle, Star, Briefcase, Lightbulb, Shield, CheckCircle2, BookOpen, Glasses, MessageCircle, Search, User, Laptop, MapPin, Megaphone, Settings, ExternalLink, Wrench, ChevronDown } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';

export default function SideHustle() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much time do I need to dedicate to a side hustle?",
      answer:
        "The time required for a side hustle depends on your goals and the type of business you choose. Most beginners start with 5–10 hours per week, working during evenings or weekends. As your side hustle grows, you can gradually increase your time investment. The flexibility allows you to scale at your own pace without affecting your full-time job."
    },
    {
      question: "Do I need to register my side hustle as a business?",
      answer:
        "In the early stages, many side hustlers operate as sole proprietors without formal registration. However, as your income increases, registering your business (such as an LLC or private limited company) can provide legal protection, tax benefits, and increased credibility. Always check your local regulations to ensure compliance."
    },
    {
      question: "How much money do I need to start a side hustle?",
      answer:
        "One of the biggest advantages of a side hustle is the low startup cost. Many service-based side hustles like freelancing, consulting, or tutoring can be started with minimal or no investment. Product-based businesses may require initial capital for inventory, packaging, and shipping, but you can start small and scale gradually."
    },
    {
      question: "How long does it take to start earning money?",
      answer:
        "The timeline varies depending on your niche and effort. Some service-based side hustles can generate income within a few days or weeks, especially if you already have skills and a network. Product-based or content-driven businesses may take a few months to gain traction. Consistency and marketing play a key role in faster results."
    },
    {
      question: "Can I manage a side hustle while working full-time?",
      answer:
        "Yes, most side hustlers successfully manage their business alongside a full-time job. The key is proper time management, setting realistic goals, and avoiding burnout. Make sure to check your employment agreement for any restrictions such as non-compete clauses before starting."
    },
    {
      question: "What is the best side hustle for beginners?",
      answer:
        "The best side hustle is one that matches your existing skills and interests. Popular beginner-friendly options include freelance writing, graphic design, virtual assistance, online tutoring, and social media management. These options have low entry barriers, minimal investment, and high demand in the market."
    },
    {
      question: "Do I need special skills or qualifications to start?",
      answer:
        "Not necessarily. Many side hustles focus more on practical skills and results rather than formal qualifications. However, learning new skills through online courses, certifications, or practice can significantly improve your earning potential and help you stand out from competitors."
    },
    {
      question: "How can I find my first clients or customers?",
      answer:
        "Start by leveraging your existing network such as friends, family, and former colleagues. You can also use freelance platforms like Upwork, Fiverr, or LinkedIn to find opportunities. Building a strong online presence, sharing your work on social media, and offering competitive initial pricing can help you attract your first clients quickly."
    }
  ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
    const data = [
  {
    title: "Content Creation as a Side Hustle",
    desc: "Build your personal brand and generate income through blogging, YouTube, podcasts, or social media. Content creation offers unlimited scalability with minimal startup costs.",
    points: [
      "Start a niche blog and monetize with SEO",
      "Launch a YouTube channel for passive income",
      "Create podcasts and grow your audience",
      "Build influence on Instagram or social media",
    ],
  },
  {
    title: "Reselling & Flipping for Profit",
    desc: "Turn everyday finds into profitable opportunities. Reselling is a highly popular and beginner-friendly side hustle with strong earning potential.",
    points: [
      "Sell vintage items on eBay",
      "Open a niche store on Etsy",
      "Flip furniture on Facebook Marketplace",
      "Use platforms like Poshmark or OfferUp",
    ],
  },
  {
    title: "Freelancing & Consulting Services",
    desc: "Offer your professional skills online and work from anywhere. Freelancing is one of the highest-paying side hustles with flexible hours.",
    points: [
      "Content writing and copywriting",
      "Graphic design services",
      "Photography and editing",
      "Work via Fiverr, Upwork or Freelancer",
    ],
  },
  {
    title: "Gig Economy Opportunities",
    desc: "Earn money quickly by leveraging gig platforms. Ideal for part-time income without long-term commitment.",
    points: [
      "Drive with Uber or ride apps",
      "Deliver via Instacart or DoorDash",
      "Pet sitting and babysitting",
      "Quick tasks with flexible timing",
    ],
  },
  {
    title: "Monetize Your Expertise",
    desc: "Turn your skills into income by teaching, coaching, or consulting. People are always willing to pay for knowledge.",
    points: [
      "Offer online tutoring services",
      "Teach sports or physical skills",
      "Provide editing or academic help",
      "Become a social media coach",
    ],
  },
  {
    title: "Real Estate Side Income",
    desc: "Generate passive income through property-based opportunities without needing large investments.",
    points: [
      "Rent your space on Airbnb",
      "Convert extra rooms into rentals",
      "Become a property manager",
      "Earn from short-term rentals",
    ],
  },
];

const steps = [
    {
      icon: <User size={28} />,
      title: "Define Your Unique Selling Proposition (USP)",
      desc: "Identify what makes your side hustle stand out. Focus on your niche, unique services, faster delivery, or exceptional customer experience to differentiate yourself from competitors."
    },
    {
      icon: <Search size={28} />,
      title: "Analyze Your Competitors",
      desc: "Research businesses offering similar products or services. Study their pricing, marketing strategies, and customer feedback to discover opportunities for improvement and positioning."
    },
    {
      icon: <Glasses size={28} />,
      title: "Understand Your Target Market",
      desc: "Clearly define your ideal customers, their needs, pain points, and buying behavior. Choose the right platforms and strategies to reach and engage your audience effectively."
    },
    {
      icon: <BookOpen size={28} />,
      title: "Validate Your Business Idea",
      desc: "Talk directly to potential customers and gather feedback. Ensure people are willing to pay for your product or service before investing too much time and effort."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Join Business Communities",
      desc: "Engage in online forums, social groups, and networking events. Stay updated with trends, gain insights, and build valuable relationships to grow your side hustle."
    }
  ];

const planPoints = [
    "Executive summary covering key highlights of your business plan",
    "Clear goals and objectives for your side hustle growth",
    "Detailed business description with background and context",
    "Market analysis with target audience and demand insights",
    "Business structure and operational overview",
    "Defined online business model and revenue streams",
    "Marketing and sales strategy to attract customers",
    "Financial projections including revenue and profitability",
    "Supporting documents and appendices",
  ];

  const businessTypes = [
    {
      title: "Limited Liability Company (LLC)",
      desc: "An LLC is one of the best choices for side hustlers. It offers simple setup, low maintenance, and protects your personal assets from business risks.",
    },
    {
      title: "S Corporation (S Corp)",
      desc: "An S Corp allows pass-through taxation similar to an LLC and can provide tax benefits for certain businesses, though it may not be necessary for most side hustles.",
    },
    {
      title: "C Corporation (C Corp)",
      desc: "C Corps are ideal for large-scale businesses but are generally more complex and not suitable for small side hustles or beginners.",
    },
  ];

  const items = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Software & Business Processes",
      desc: "Using the right tools and software can streamline your side hustle operations. From automation tools to project management apps, efficient systems help save time, reduce manual work, and improve productivity."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing Strategy",
      desc: "A strong marketing strategy is essential to grow your side hustle. Whether you're selling through online marketplaces or independently, focus on building a strong brand presence, optimizing listings, and collecting positive customer reviews."
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Equipment & Tools",
      desc: "The equipment required for your side business depends on your niche. In most cases, a laptop and smartphone are enough, but some businesses may require specialized tools or devices to operate efficiently."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Business Location",
      desc: "Most side hustles are operated from home, making them cost-effective and flexible. However, depending on your business type, you may need storage space, a workspace, or even a mobile setup."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Finances & Taxes Management",
      desc: "Managing finances properly is crucial. Open a separate business bank account, track your expenses, maintain accurate records, and ensure timely tax filing to keep your business compliant and organized."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
  <title>
    Start a Side Hustle in USA – Business Setup & Registration Guide | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Learn how to start a side hustle in the USA while working full-time. Get expert guidance on business registration, LLC formation, taxes, EIN, and compliance from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/start-a-business/side-hustle"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="side hustle USA, start a side hustle in USA, side business registration USA, side hustle LLC USA, part time business USA, register side business USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/side-hustle"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/side-hustle"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Start a Side Hustle in USA – Business Setup & Registration"
  />
  <meta
    property="og:description"
    content="Start your side hustle in the USA with step-by-step guidance on business registration, LLC formation, taxes, and compliance."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/start-a-business/side-hustle"
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
    content="Start a Side Hustle in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Start a Side Hustle in USA – Business Setup Guide"
  />
  <meta
    name="twitter:description"
    content="Want to start a side hustle in the USA? Get expert help with registration, LLC formation, EIN, and compliance."
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
      "name": "Side Hustle Business Setup in USA",
      "url": "https://us.thefutureperfectglobal.com/start-a-business/side-hustle",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Professional guidance for starting a side hustle in the USA, including business registration, LLC formation, EIN application, tax considerations, and compliance support.",
      "areaServed": [
        "United States"
      ],
      "serviceType": [
        "Side Hustle Registration USA",
        "LLC Formation",
        "EIN Registration",
        "Startup Guidance",
        "Compliance Support"
      ]
    }`}
  </script>
</Helmet>

      <section className="relative bg-gradient-to-br from-cyan-600 via-slate-800 to-slate-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Turn Your Passion Into Profit
              </h1>
              <p className="text-xl text-cyan-50 mb-8">
                Start your side hustle today and earn extra income doing what you love. Join thousands of entrepreneurs who have transformed their ideas into successful businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition flex items-center justify-center gap-2 text-lg font-semibold">
                  Start Your Side Hustle
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:border-gray-400 transition text-lg font-semibold">
                  Explore Ideas
                </button>
              </div>
              <div className="flex gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-white">No experience needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-white">Start from $0</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person working on laptop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$2,500+</div>
                    <div className="text-sm text-gray-600">Average monthly earnings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold text-cyan-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Side Hustlers</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-cyan-600 mb-2">$150M+</div>
              <div className="text-gray-600">Total Earnings</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-cyan-600 mb-2">200+</div>
              <div className="text-gray-600">Side Hustle Ideas</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-cyan-600 mb-2">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10 text-center mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            What is a Side Hustle & Why You Should Start One Today
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A side hustle is a flexible way to earn extra income alongside your primary job. 
            Whether you're looking to build passive income, pay off debt, or achieve financial 
            independence, starting a side business can significantly improve your financial future.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <p className="text-slate-600 leading-relaxed">
              On average, side hustles can generate over <span className="font-semibold text-slate-900">$1,000+ per month</span>, 
              helping individuals cover expenses, invest in their goals, and create long-term wealth. 
              With minimal investment and just a few hours each week, you can start building a 
              profitable side business.
            </p>

            {/* BENEFITS LIST */}
            <div className="space-y-4">

              {[
                "Pay off student loans and reduce financial stress",
                "Travel more without relying on credit",
                "Clear personal debts like loans, mortgages, or vehicles",
                "Start planning for retirement early",
                "Achieve financial freedom and flexible lifestyle",
                "Build an additional passive income stream for long-term security",
                "Turn your skills or hobbies into a profitable side business"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-600 w-5 h-5 mt-1" />
                  <p className="text-base text-slate-600">{item}</p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
              </div>

              <h3 className="text-xl font-bold">
                Discover Profitable Side Hustle Ideas
              </h3>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Starting a side business begins with the right idea. From freelancing 
              and online services to eCommerce and digital products, almost any skill 
              can be turned into a profitable income stream.
            </p>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Focus on identifying what you can offer, who your target audience is, 
              and how you will deliver value. With the right approach, your idea can 
              quickly evolve into a successful side hustle.
            </p>

            <div className="bg-white/10 p-4 rounded-xl text-sm text-white/90">
              You don’t need a perfect idea to start — just take the first step and refine 
              your business as you grow.
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-600 text-2xl font-black mb-6">
            Ready to start earning extra income and build your side business?
          </p>

          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition shadow-md">
            Explore Side Hustle Ideas
          </button>
        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Best Side Hustle Ideas to <span className="text-cyan-600">Earn Extra Income</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover scalable and beginner-friendly side hustles that help you generate passive income, build skills, and achieve financial freedom.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-indigo-200 via-cyan-200 to-transparent hover:shadow-xl transition"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-gray-100 group-hover:border-indigo-200 transition">

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-base text-gray-700">
                      <span className="w-2 h-2 mt-2 mr-3 bg-indigo-500 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

    <section className="bg-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            How to Start a Side Hustle & Turn It Into a Profitable Business
          </h2>
          <p className="text-gray-600 mt-4">
            Treat your side hustle like a business, not a hobby. With the right
            strategy, discipline, and focus, you can build a sustainable income
            stream that improves your financial future.
          </p>
        </motion.div>

        {/* First Block */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-10 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-cyan-600">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Before You Start: Plan Your Time Commitment
              </h3>
              <p className="text-gray-600">
                Starting a side hustle requires dedication. Decide how much time
                you can realistically invest and what activities you’re willing
                to sacrifice. Consistency and focus are key to long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition"
            >
              <div className="text-cyan-600 mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

<section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Don’t Ignore Your Business Plan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A well-structured business plan is essential for turning your side hustle into a
            successful full-time business. It helps you define strategies, identify opportunities,
            and plan long-term growth effectively.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              What Should a Strong Business Plan Include?
            </h3>

            <div className="space-y-4">
              {planPoints.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-600 mt-1" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-cyan-50 rounded-xl border border-cyan-100">
              <p className="text-cyan-700 font-medium">
                📘 Bonus: Get a complete guide to writing a professional business plan and
                scaling your side hustle faster.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Protect Your Side Hustle with Legal Structure
            </h3>

            <p className="text-gray-600 mb-3">
              While starting as a sole proprietor is easy, it exposes your personal assets to
              risk. Forming a legal business entity helps protect you and builds credibility for
              long-term success.
            </p>

            <div className="space-y-4">
              {businessTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition"
                >
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {type.title}
                  </h4>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

<section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Launch Your Side Hustle Successfully
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Before starting your side hustle, it’s essential to plan key business functions like marketing, tools, finances, and operations to ensure long-term success and scalability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-slate-600 text-white mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Why Start a Side Hustle?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of earning extra income while maintaining your full-time job
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Extra Income</h3>
              <p className="text-gray-600 leading-relaxed">
                Earn additional money to pay off debt, save for goals, or simply improve your lifestyle. The average side hustler earns $1,000-$3,000 per month.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Schedule</h3>
              <p className="text-gray-600 leading-relaxed">
                Work on your own terms, whenever and wherever you want. Perfect for nights, weekends, or spare moments throughout your day.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn New Skills</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop valuable skills and expertise that can advance your career or lead to full-time entrepreneurship opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Create a safety net and diversify your income streams. Never rely on just one source of income again.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Your Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with like-minded entrepreneurs and expand your professional network in exciting new ways.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Business Ideas</h3>
              <p className="text-gray-600 leading-relaxed">
                Validate your business concepts with minimal risk before committing full-time. Perfect for aspiring entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ideas" className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Popular Side Hustle Ideas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect side hustle that matches your skills and interests
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Freelance Writing",
                image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$500-$5,000/mo",
                difficulty: "Beginner",
                description: "Write articles, blog posts, and content for businesses and websites."
              },
              {
                title: "Online Tutoring",
                image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$1,000-$4,000/mo",
                difficulty: "Beginner",
                description: "Teach students online in subjects you're knowledgeable about."
              },
              {
                title: "E-commerce Store",
                image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$1,000-$10,000/mo",
                difficulty: "Intermediate",
                description: "Sell products online through platforms like Shopify or Etsy."
              },
              {
                title: "Social Media Management",
                image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$800-$3,000/mo",
                difficulty: "Beginner",
                description: "Manage social media accounts for small businesses and influencers."
              },
              {
                title: "Web Development",
                image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$2,000-$8,000/mo",
                difficulty: "Intermediate",
                description: "Build websites and web applications for clients."
              },
              {
                title: "Photography",
                image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$500-$4,000/mo",
                difficulty: "Beginner",
                description: "Offer photography services for events, portraits, or sell stock photos."
              },
              {
                title: "Virtual Assistant",
                image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$1,000-$3,500/mo",
                difficulty: "Beginner",
                description: "Provide administrative support to businesses remotely."
              },
              {
                title: "Graphic Design",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$800-$5,000/mo",
                difficulty: "Intermediate",
                description: "Create logos, branding materials, and graphics for clients."
              },
              {
                title: "Consulting",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
                income: "$2,000-$10,000/mo",
                difficulty: "Advanced",
                description: "Offer expert advice in your field of expertise to businesses."
              }
            ].map((hustle, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img src={hustle.image} alt={hustle.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{hustle.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      {hustle.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{hustle.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-600 font-semibold">{hustle.income}</span>
                    <button className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">How to Start Your Side Hustle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to launch your successful side business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Idea",
                description: "Pick a side hustle that aligns with your skills, interests, and available time.",
                icon: Lightbulb
              },
              {
                step: "02",
                title: "Validate Your Market",
                description: "Research demand, competition, and pricing to ensure your idea is viable.",
                icon: TrendingUp
              },
              {
                step: "03",
                title: "Set Up Your Business",
                description: "Create your brand, build your online presence, and get the necessary tools.",
                icon: Briefcase
              },
              {
                step: "04",
                title: "Launch & Grow",
                description: "Start taking clients, deliver great work, and scale your income over time.",
                icon: Star
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="text-5xl font-bold text-cyan-100 mb-4">{item.step}</div>
                  <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

<section id="faq" className="py-20 bg-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know before starting your side hustle
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md transition"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>

      {/* Tools & Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Useful Online Tools for Publishers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore essential tools to manage, grow, and scale your publishing business efficiently
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                category: 'Project Management',
                tools: [
                  { name: 'Asana', link: 'https://asana.com' },
                  { name: 'Basecamp', link: 'https://basecamp.com' },
                  { name: 'Trello', link: 'https://trello.com' }
                ]
              },
              {
                category: 'Collaboration',
                tools: [
                  { name: 'Google Docs', link: 'https://docs.google.com' },
                  { name: 'Dropbox', link: 'https://dropbox.com' },
                  { name: 'Box', link: 'https://box.com' }
                ]
              },
              {
                category: 'Social Media',
                tools: [
                  { name: 'Hootsuite', link: 'https://hootsuite.com' },
                  { name: 'Buffer', link: 'https://buffer.com' },
                  { name: 'Sprout Social', link: 'https://sproutsocial.com' }
                ]
              },
              {
                category: 'Email Marketing',
                tools: [
                  { name: 'Mailchimp', link: 'https://mailchimp.com' },
                  { name: 'Campaign Monitor', link: 'https://campaignmonitor.com' }
                ]
              },
              {
                category: 'CRM Platforms',
                tools: [
                  { name: 'Salesforce', link: 'https://salesforce.com' },
                  { name: 'Zoho CRM', link: 'https://zoho.com/crm' },
                  { name: 'Insightly', link: 'https://insightly.com' }
                ]
              },
              {
                category: 'Analytics',
                tools: [
                  { name: 'Google Analytics', link: 'https://analytics.google.com' },
                  { name: 'Matomo', link: 'https://matomo.org' }
                ]
              },
              {
                category: 'SEO Tools',
                tools: [
                  { name: 'SEMrush', link: 'https://semrush.com' },
                  { name: 'Ahrefs', link: 'https://ahrefs.com' },
                  { name: 'Moz', link: 'https://moz.com' }
                ]
              },
              {
                category: 'Website Builders',
                tools: [
                  { name: 'WordPress', link: 'https://wordpress.org' },
                  { name: 'Wix', link: 'https://wix.com' },
                  { name: 'Squarespace', link: 'https://squarespace.com' }
                ]
              },
              {
                category: 'E-commerce',
                tools: [
                  { name: 'Square', link: 'https://squareup.com' },
                  { name: 'Recurly', link: 'https://recurly.com' },
                  { name: 'Vendio', link: 'https://vendio.com' }
                ]
              }
            ].map((category, index) => (

              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-lg transition group"
              >
                <Wrench className="w-6 h-6 text-cyan-600 mb-4" />

                <h3 className="font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>

                <ul className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <li key={idx}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-cyan-600 transition"
                      >
                        {tool.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Ready to Start Your Side Hustle Journey?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of successful side hustlers earning extra income doing what they love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition text-lg font-semibold">
              Schedule a Free Consultation
            </button>
          </div>
          <p className="text-cyan-200 mt-6 text-sm">
            No credit card required. Start earning in as little as 7 days.
          </p>
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
