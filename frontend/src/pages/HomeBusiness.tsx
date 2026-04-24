import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Home, DollarSign, Users, TrendingUp, CheckCircle, FileText, Settings, Wrench, Briefcase, Palette, PenTool, ShoppingCart, Truck, CheckCircle2, MessageCircle, Lightbulb, Target, Laptop, MapPin, Megaphone, Landmark, ShieldCheck, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeBusiness() {
  const forums = [
  {
    title: "Small Business Forums",
    description:
      "Join one of the most active communities for entrepreneurs. Discuss marketing, growth strategies, and real-world challenges with business owners.",
    link: "https://www.smallbusinessforums.org",
  },
  {
    title: "Home Business Forum",
    description:
      "A dedicated space for home-based entrepreneurs to share ideas, get support, and scale their businesses effectively.",
    link: "https://www.homebusinessforum.com",
  },
  {
    title: "Startup Nation",
    description:
      "Access expert advice, startup resources, and a thriving community focused on home-based business success.",
    link: "https://startupnation.com",
  },
  {
    title: "Facebook Business Groups",
    description:
      "Discover niche-specific groups, collaborate with entrepreneurs, and find new opportunities in active communities.",
    link: "https://www.facebook.com/groups",
  },
];
  const features = [
  {
    icon: MapPin,
    title: "Home Office Setup",
    desc: "Create a dedicated home office space to boost productivity and maintain focus. Whether you're running an online business, freelancing, or selling products, having an organized workspace helps improve efficiency and professionalism.",
  },
  {
    icon: Laptop,
    title: "Business Equipment",
    desc: "Choose the right tools and equipment based on your business type. From laptops and smartphones for freelancers to specialized tools for eCommerce or handmade products, ensure everything is optimized for performance and safety.",
  },
  {
    icon: Users,
    title: "Hiring & Outsourcing",
    desc: "Start lean by managing your business solo, then scale with remote freelancers. Platforms like Upwork and Fiverr make it easy to outsource tasks such as design, marketing, and development.",
  },
  {
    icon: Settings,
    title: "Software & Automation",
    desc: "Use powerful business tools, CRM software, and automation systems to streamline operations. The right software can save time, improve workflow, and help you scale your home-based business faster.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Strategy",
    desc: "Grow your online business with SEO, social media marketing, email campaigns, and paid ads. A strong digital presence and branding strategy are essential for attracting and converting customers.",
  },
  {
    icon: DollarSign,
    title: "Finance & Tax Management",
    desc: "Separate personal and business finances with a dedicated bank account. Track expenses, manage bookkeeping, and stay compliant with tax regulations to ensure long-term business success.",
  },
];
  const businessTypes = [
  {
    icon: <PenTool className="w-6 h-6 text-cyan-600" />,
    title: "Freelancing From Home",
    desc: "Start a profitable freelancing business from home using in-demand skills like content writing, graphic design, web development, and digital marketing. Build a strong portfolio, attract clients, and scale your income online."
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-cyan-600" />,
    title: "Start an Ecommerce Business",
    desc: "Launch your online store and sell products from home using platforms like Shopify, Amazon, or eBay. Build a scalable ecommerce business with inventory management, shipping, and digital marketing strategies."
  },
  {
    icon: <Truck className="w-6 h-6 text-cyan-600" />,
    title: "Dropshipping Business Model",
    desc: "Start a dropshipping business with low investment. Sell trending products online without holding inventory while suppliers handle shipping. Perfect for beginners entering ecommerce with minimal risk."
  },
  {
    icon: <Palette className="w-6 h-6 text-cyan-600" />,
    title: "Sell Handmade or Digital Products",
    desc: "Turn your creativity into income by selling handmade products, digital downloads, prints, or custom designs. Platforms like Etsy and print-on-demand services make it easy to start your creative business."
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-600" />,
    title: "Offer Home-Based Services",
    desc: "Start a service-based business from home such as online tutoring, coaching, consulting, childcare, or fitness training. Build a loyal client base and grow with recurring income opportunities."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-cyan-600" />,
    title: "Professional Services Business",
    desc: "Leverage your professional skills to offer services like accounting, bookkeeping, business consulting, or legal advisory. High-demand and high-income opportunities for certified professionals."
  }
];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
    const steps = [
    {
      icon: <Lightbulb className="w-6 h-6 text-cyan-600" />,
      title: "Define Your Unique Selling Proposition (USP)",
      desc: "Identify what makes your home-based business unique. Whether it's pricing, quality, speed, or innovation, your USP helps you stand out in a competitive market."
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-600" />,
      title: "Analyze Competitors",
      desc: "Research existing businesses in your niche. A competitive market validates demand, but you need a strong differentiation strategy to succeed."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-600" />,
      title: "Understand Your Target Audience",
      desc: "Define your ideal customers, their needs, and where they spend time online. This helps you build an effective marketing and sales strategy."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-cyan-600" />,
      title: "Validate with Real Customers",
      desc: "Talk to potential customers and gather feedback. Ask if they would actually pay for your product or service before investing heavily."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-cyan-600" />,
      title: "Join Business Communities",
      desc: "Engage in online forums and entrepreneur groups to gain insights, trends, and real-world advice for growing your home business."
    }
  ];

  const planPoints = [
  {
    title: "Executive Summary",
    desc: "A concise overview of your home-based business plan, highlighting key goals, strategy, and success roadmap."
  },
  {
    title: "Business Goals & Vision",
    desc: "Define your startup goals, long-term vision, and measurable success metrics for sustainable growth."
  },
  {
    title: "Business Description",
    desc: "Explain your online business model, background, niche, and the value you provide to your target audience."
  },
  {
    title: "Market Analysis",
    desc: "Research your target market, customer demand, industry trends, and competitor insights to stay ahead."
  },
  {
    title: "Business Structure",
    desc: "Outline your operational structure, roles, workflow, and how your home business will function efficiently."
  },
  {
    title: "Revenue Model",
    desc: "Define how your business will generate income, pricing strategy, and monetization methods."
  },
  {
    title: "Marketing & Sales Strategy",
    desc: "Plan your digital marketing strategy including SEO, social media, and sales funnels to attract customers."
  },
  {
    title: "Financial Projections",
    desc: "Estimate revenue, costs, profit margins, and long-term financial sustainability of your business."
  },
  {
    title: "Appendices",
    desc: "Include supporting documents, data, and additional insights that strengthen your business plan."
  }
];
const businessTypess = [
  {
    title: "Sole Proprietorship",
    desc: "The simplest way to start a home-based business. However, it offers no personal liability protection, making it a risky choice for long-term growth."
  },
  {
    title: "Limited Liability Company (LLC)",
    desc: "The most popular choice for small businesses. An LLC protects your personal assets, is easy to manage, and ideal for starting a home-based business legally."
  },
  {
    title: "Series LLC",
    desc: "A flexible structure allowing multiple business units under one umbrella. Suitable for entrepreneurs managing multiple income streams."
  },
  {
    title: "S Corporation",
    desc: "A tax-advantaged structure for growing businesses. More complex and generally not ideal for beginners or small home businesses."
  },
  {
    title: "C Corporation",
    desc: "Best suited for large-scale companies and startups seeking investors. Comes with strict compliance and higher operational complexity."
  }
];

  return (
    <div className="min-h-screen bg-white">

     <section
  className="relative py-12 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1920&q=60')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Content */}
      <div className="text-white">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
          Introduction
        </span>

        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Empowering Growth Through Smart Digital Innovation
        </h1>

        <p className="text-lg leading-relaxed mb-4 text-white/90">
          Home-based businesses allow entrepreneurs to start lean, minimize risk, and scale rapidly without investing heavily in infrastructure.
        </p>

        <div className="flex items-center gap-4">
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-6 py-3 rounded-lg border border-cyan-600 font-semibold shadow hover:shadow-lg transition-all">
            Get Started Now
          </button>

          <button className="px-6 py-3 rounded-lg font-semibold border border-white/30 text-white hover:border-white transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Highlight Card */}
      <div className="hidden lg:block">
        <img
          src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Workspace"
          className="relative rounded-3xl w-full h-[420px] object-cover shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

          <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-cyan-50 overflow-hidden">

  {/* soft background accent */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 blur-[120px] rounded-full opacity-40"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* HEADER */}
    <div className="text-center max-w-6xl mx-auto mb-10">
      <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-3">
        Work From Home Business Guide
      </p>

      <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Start & Grow a 
        <span className="text-cyan-600"> Home-Based Business</span>
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        Learn how to start a home-based business with low investment and build a 
        profitable work-from-home income. Discover proven strategies, business ideas, 
        and step-by-step guidance to launch and grow successfully.
      </p>
    </div>

    {/* VIDEO + CONTENT */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">

      {/* VIDEO */}
      <div className="relative">
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="Home Based Business Guide"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Build a Profitable Business from Home
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Starting a home-based business is one of the most effective ways to earn income 
          online while enjoying flexibility and independence. With the right niche and strategy, 
          you can create a scalable small business from the comfort of your home.
        </p>

        <p className="text-gray-500 leading-relaxed">
          From business idea validation and market research to legal setup and daily operations, 
          this complete guide helps you launch, manage, and grow your home business step-by-step.
        </p>

        {/* CTA */}
        <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="mt-8 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md">
          Start Your Business
        </button>
      </div>
    </div>

    {/* STATS */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">

      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
        <h4 className="text-4xl font-extrabold text-cyan-600 mb-2">40M+</h4>
        <p className="text-gray-600 text-sm">
          Home-Based Businesses Worldwide
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
        <h4 className="text-4xl font-extrabold text-cyan-600 mb-2">$400B+</h4>
        <p className="text-gray-600 text-sm">
          Annual Revenue Generated
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
        <h4 className="text-4xl font-extrabold text-cyan-600 mb-2">70%+</h4>
        <p className="text-gray-600 text-sm">
          Success Rate After 3 Years
        </p>
      </div>

    </div>

    {/* BENEFITS */}
    <div className="grid md:grid-cols-2 gap-10">

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h4 className="text-xl font-bold text-gray-900 mb-4">
          Why Start a Home-Based Business?
        </h4>

        <ul className="space-y-3 text-gray-600 text-base">
          <li>✔ Low investment startup (under $5,000)</li>
          <li>✔ Flexible work-from-home lifestyle</li>
          <li>✔ Scalable online business opportunities</li>
          <li>✔ Higher survival rate than traditional startups</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h4 className="text-xl font-bold text-gray-900 mb-4">
          How We Help You Succeed
        </h4>

        <ul className="space-y-3 text-gray-600 text-base">
          <li>✔ Step-by-step startup guidance</li>
          <li>✔ Business ideas & niche validation</li>
          <li>✔ Legal setup & documentation help</li>
          <li>✔ Growth & scaling strategies</li>
        </ul>
      </div>

    </div>

  </div>
</section>

<section className="bg-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Best Home-Based Business Ideas to Start in 2026
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover the most profitable home-based business ideas including 
            <span className="font-medium text-gray-900"> freelancing, ecommerce, dropshipping, online services, and professional consulting</span>. 
            Start your work-from-home business with low investment and high growth potential.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Validate Your <span className="">Home-Based Business Idea</span>
          </motion.h2>

          <p className="mt-6 text-lg text-gray-600">
            Turn your home-based business idea into a profitable venture by validating demand, 
            understanding your target market, and building a strong competitive advantage.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-50 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 bg-cyan-50 border border-cyan-100 rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            It’s Okay to Pivot 🚀
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not every business idea will succeed — and that’s part of the journey. 
            Successful entrepreneurs test, fail fast, learn, and refine their ideas 
            before building a scalable and profitable home-based business.
          </p>
        </motion.div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Build a Profitable Home-Based Business Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strong business plan is the foundation of every successful online business. 
            Define your strategy, attract customers, and scale your income with clarity and confidence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {planPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-xl group-hover:scale-110 transition">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Choose the Right Business Structure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your home-based business the right way by selecting the best legal structure. 
            Protect your assets, reduce risks, and build a scalable business foundation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypess.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="text-cyan-600 w-6 h-6 mt-1" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-3xl p-10 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Start Your Home-Based Business Today 🚀
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Our experts help you register your business, choose the right legal structure, 
            and ensure compliance — so you can focus on growing your income.
          </p>

          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-700 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </motion.div>

      </div>
    </section>


    <section className="bg-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Set Up Your Home-Based Business for Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how to build, manage, and scale a profitable home business with the right tools, workspace, marketing strategy, and financial setup.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-50 mb-4">
                <item.icon className="text-cyan-600" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Legal Requirements & Taxes for Home-Based Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay compliant, reduce risks, and manage your taxes efficiently with the right guidance for your home business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Licenses & Regulations */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-50 mb-6">
              <ShieldCheck className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Licenses & Permits
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ensure your home-based business meets all legal requirements including 
              business licenses, permits, and local, state, and federal regulations. 
              Proper compliance helps you avoid penalties and build trust.
            </p>
          </motion.div>

          {/* Taxes */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-50 mb-6">
              <Landmark className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Business Taxes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Manage your small business taxes with ease. This includes 
              self-employment tax, income tax, and sales tax depending on your 
              business model and location.
            </p>
          </motion.div>

          {/* Tax Planning */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-50 mb-6">
              <FileText className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Smart Tax Planning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Set aside around <span className="font-semibold">30% of your income</span> for taxes and stay prepared. 
              Professional tax filing and planning can help you maximize deductions 
              and stay stress-free.
            </p>
          </motion.div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Top Communities for Home-Based Entrepreneurs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect, learn, and grow with the best online forums and groups
            designed for home-based business success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forums.map((forum, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {forum.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {forum.description}
              </p>

              <a
                href={forum.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-cyan-600 group-hover:text-indigo-700 transition"
              >
                Visit Community
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>

              {/* subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-100 to-cyan-100 blur-xl transition duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Groups and Forums for Home-Based Business</h2>
            <p className="text-xl text-gray-600">Connect with other entrepreneurs and learn from their experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow">
              <Users className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">Small Business Forums</h3>
              <p className="text-blue-100">General business discussion and advice</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow">
              <Home className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">The Home Business Forum</h3>
              <p className="text-green-100">Dedicated to home-based entrepreneurs</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow">
              <TrendingUp className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">Startup Nation</h3>
              <p className="text-purple-100">Home-based business community</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow">
              <Users className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">Facebook Groups</h3>
              <p className="text-cyan-100">Home-Based Business community</p>
            </div>
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

      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Start Your Home-Based Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            With proper planning and execution, home-based businesses can grow to exceed $100,000 a year. The key is to start with a solid foundation, choose the right business structure, and consistently work towards your goals.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">We Can Help You</h3>
            <ul className="space-y-3 text-left max-w-2xl mx-auto text-blue-100">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>LLC formation and registration</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Business entity comparison assistance</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Annual report filing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Registered agent services</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Tax preparation and filing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Business licensing research</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Get Started Today
            </button>
            <p className="text-blue-100">
              Contact: 1 (888) 462-3453 | Monday-Friday, 9 AM-6 PM CST
            </p>
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
