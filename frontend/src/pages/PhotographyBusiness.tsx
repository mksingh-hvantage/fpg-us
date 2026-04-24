import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
import { Camera, DollarSign, MapPin, Users, Briefcase, TrendingUp, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, ImageIcon, AlertCircle, Sparkles, Megaphone, Settings, ShieldCheck, Building2, Laptop, Wrench, MessageCircle, ExternalLink } from 'lucide-react';

export default function PhotographyBusiness() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
    const [openIndex, setOpenIndex] = useState<number>(-1);
    const points = [
    "Understand the modern photography industry and choose a profitable niche",
    "Learn how to market, scale, and manage a successful photography business",
    "Choose the best legal structure for your photography startup",
    "Access essential tools and resources for professional photographers",
    "Follow important laws, licenses, and photography business regulations",
    "Master photography business taxes, pricing, and financial planning",
    "Evaluate if you're ready to start and grow a photography business",
    "Step-by-step guidance to build a high-demand freelance photography career",
    "Build a strong photography portfolio that attracts high-paying clients",
    ];

const faqs = [
    {
      question: 'How much money do I need to start a photography business?',
      answer:
        'You can start with as little as $2,000-$5,000 for basic equipment and business setup, though $8,500-$25,000 is more typical for a fully professional setup. Many photographers start part-time and reinvest their earnings to grow gradually.',
    },
    {
      question: 'Do I need formal photography training or a degree?',
      answer:
        'No formal training is required. However, strong technical and artistic skills are essential. Many photographers are self-taught or take workshops/online courses instead of formal degrees.',
    },
    {
      question: 'How do I price my photography services?',
      answer:
        'Research competitors, calculate your costs, determine profit margin, and consider experience level. Most photographers charge per session/event with optional upsell for prints.',
    },
    {
      question: 'Should I form an LLC for my photography business?',
      answer:
        'An LLC provides liability protection, professional credibility, and tax flexibility. Recommended once you start taking paid clients regularly.',
    },
    {
      question: 'What insurance do I need as a photographer?',
      answer:
        'General liability and equipment insurance are essential. Professional liability insurance is recommended. Costs usually range $500–$1,500 annually.',
    },
    {
      question: 'How long does it take to become profitable?',
      answer:
        'Most photographers become profitable in 6–18 months depending on startup cost, pricing, workload, and marketing efforts.',
    },
    {
      question: 'How do I find my first clients?',
      answer:
        'Build portfolio by shooting friends/family, then use social media, networking, partnerships, referrals, and a branded website.',
    },
    {
      question: 'What equipment do I absolutely need to start?',
      answer:
        'A professional camera, 2–3 lenses, computer, editing software, external storage, and basic lighting gear.',
    },
    {
      question: 'Can I run a photography business from home?',
      answer:
        'Yes. Many do. Check local zoning/permit rules and decide if you need a studio or will shoot mostly on-location.',
    },
    {
      question: 'How do I handle taxes as a photography business owner?',
      answer:
        'Track income/expenses, set aside 25–30% for taxes, track mileage, and consider hiring a tax professional.',
    },
  ];

const niches = [
    {
      title: "Fashion Photography",
      desc: "Capture clothing, models, and lifestyle visuals for brands, magazines, and eCommerce with creative styling and professional editing.",
    },
    {
      title: "Landscape Photography",
      desc: "Create stunning images of nature, travel destinations, and scenic views using composition, lighting, and wide-angle techniques.",
    },
    {
      title: "Family, Baby & Pet Photography",
      desc: "Offer portrait photography services for families, newborns, and pets — one of the most consistent and high-demand niches.",
    },
    {
      title: "Real Estate Photography",
      desc: "Work with real estate agents and builders to showcase properties with high-quality interior and exterior photography.",
    },
    {
      title: "Event & Concert Photography",
      desc: "Capture live events, concerts, and celebrations with dynamic shots that reflect energy and atmosphere.",
    },
    {
      title: "Aerial (Drone) Photography",
      desc: "Use drone technology to capture unique aerial views for real estate, travel, and commercial projects.",
    },
    {
      title: "Food Photography",
      desc: "Create mouth-watering visuals for restaurants, brands, and social media marketing campaigns.",
    },
    {
      title: "Advertising Photography",
      desc: "Shoot high-quality visuals for brands, websites, magazines, and digital marketing campaigns.",
    },
    {
      title: "Stock Photography",
      desc: "Sell photos online through stock platforms and generate passive income from high-demand images.",
    },
    {
      title: "Wedding Photography",
      desc: "Capture once-in-a-lifetime moments and build a highly profitable photography business in the wedding industry.",
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Photography Industry Growth",
      desc: "The global photography business is steadily growing at around 1.7% annually, generating over $10 billion in revenue and offering strong long-term opportunities."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Rise of Freelance Photographers",
      desc: "More than 50% of photographers are self-employed, making freelance photography one of the most popular creative careers worldwide."
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Importance of Photography Portfolio",
      desc: "A strong photography portfolio is essential to attract clients, build credibility, and stand out in a competitive photography market."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Demand for Additional Services",
      desc: "Photographers offering editing, retouching, post-production, and website services can increase income and attract premium clients."
    },
  ];

  const pointss = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "High Competition in Photography",
      desc: "The photography industry is highly competitive, with more freelance photographers entering the market than available jobs. Building a unique photography style and niche is essential."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Strong Business & Marketing Skills",
      desc: "Success in a photography business requires more than creativity. You need skills in marketing, client management, branding, and business operations."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Consistent Hustle & Client Acquisition",
      desc: "Freelance photographers must constantly find new clients, promote their services, and maintain a steady workflow to grow their photography business."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Advanced Photography & Editing Skills",
      desc: "Skills like photo editing, retouching, and post-production can significantly boost your value and help you stand out in the photography market."
    },
  ];

  const skills = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Photography Business Management Skills",
      desc: "Master essential business skills like accounting, financial planning, client relationship management, and daily operations to run a successful photography business."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing & Personal Branding",
      desc: "Develop strong marketing skills including SEO for photographers, social media marketing, local advertising, and personal branding to attract high-paying clients."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Photo Editing & Post-Production Skills",
      desc: "Enhance your photography services with advanced photo editing, retouching, and post-production using tools like Photoshop and Lightroom."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Specialized Photography Expertise",
      desc: "Gain professional training and certifications in your chosen photography niche such as wedding, fashion, product, or commercial photography."
    },
  ];

   const challenges = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Management for Photographers",
      desc: "Managing cash flow, pricing photography services, and maintaining steady income are key challenges. Successful photographers plan finances carefully and build a buffer for slow seasons."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Relationship Management",
      desc: "Building long-term relationships with clients is essential for repeat business. Strong communication, trust, and client experience can help grow your photography brand."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing & Finding Photography Clients",
      desc: "Promoting your photography business through SEO, social media, and networking is crucial. Consistently finding new clients and projects is one of the biggest challenges for freelancers."
    },
  ];

   const steps = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Planning & Client Preparation",
      desc: "Start your day by understanding client requirements, planning shoots, and preparing equipment. Clear communication ensures successful photography sessions."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Studio Setup or On-Location Shooting",
      desc: "Whether working in a studio or at live events like weddings, photographers set up lighting, adjust camera settings, and capture high-quality images."
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Photo Editing & Post-Production",
      desc: "After the shoot, photographers review hundreds of images, select the best shots, and enhance them using editing tools like Photoshop or Lightroom."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Management & Client Delivery",
      desc: "Finalize and deliver images to clients, manage invoices, handle business operations, and actively market your photography services to attract new clients."
    },
  ];

  const structures = [
    {
      title: "Sole Proprietorship",
      desc: "The simplest way to start a photography business, but offers no personal liability protection. Not ideal for long-term growth or risk management."
    },
    {
      title: "Series LLC",
      desc: "A flexible LLC structure available in select regions, allowing multiple business units under one entity with separate liability protection."
    },
    {
      title: "Partnership (or LLC Partnership)",
      desc: "Suitable for photographers working with partners, but requires clear agreements and may lack full legal protection without proper structuring."
    },
    {
      title: "S Corporation (S Corp)",
      desc: "A more advanced business structure offering tax benefits, but involves complex compliance and is better suited for established businesses."
    },
    {
      title: "C Corporation (C Corp)",
      desc: "Designed for large-scale companies with investors. Typically unnecessary for small or freelance photography businesses."
    },
  ];

   const items = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Business Location & Studio Setup",
      desc: "Start your photography business from home or invest in a professional studio. A well-located studio can help attract clients and build a strong local presence."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Business Maintenance & Compliance",
      desc: "Stay compliant by filing annual reports, renewing licenses, and managing legal requirements for your photography business."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Photography Finances & Taxes",
      desc: "Set up a business bank account, track income and expenses, and manage taxes efficiently to maintain financial stability."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Software & Editing Tools",
      desc: "Invest in photography software like Photoshop or Lightroom, along with tools to manage clients and deliver images online."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing & Branding",
      desc: "Build your photography brand with a professional website, SEO optimization, logo design, and social media marketing strategies."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hiring Employees & Assistants",
      desc: "As your photography business grows, consider hiring assistants or administrative staff to manage operations efficiently."
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Photography Equipment & Tools",
      desc: "Beyond cameras, invest in computers, smartphones, lighting, and accessories. Many business-related purchases can be tax-deductible."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Permits, Licenses & Legal Requirements",
      desc: "Ensure your photography business follows all local laws, permits, and licensing requirements to operate legally."
    },
  ];

  const socialGroups = [
    {
      name: "Shoot and Share",
      link: "https://shootandshare.com",
    },
    {
      name: "Photoshop and Lightroom Group",
      link: "https://www.facebook.com/groups/photoshopandlightroom",
    },
    {
      name: "Photographer Entrepreneur",
      link: "https://www.facebook.com/groups/photographerentrepreneur",
    },
    {
      name: "The Art of the Second Shot",
      link: "https://www.facebook.com/groups/thesecondshot",
    },
    {
      name: "Photo Marketing Association International",
      link: "https://pmai.org",
    },
    {
      name: "Professional Photographers of America",
      link: "https://www.ppa.com",
    },
  ];

  const forums = [
    {
      name: "The Photo Forum",
      link: "https://www.thephotoforum.com",
    },
    {
      name: "Photography Forum",
      link: "https://www.photography-forum.org",
    },
    {
      name: "Photo.net Forum",
      link: "https://www.photo.net/forums",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
        <Helmet>
          <title>
            Start a Photography Business in USA – Registration & Legal Setup | The Future Perfect Global
          </title>

          <meta
            name="description"
            content="Learn how to start a photography business in the USA. The Future Perfect Global offers expert support for business registration, LLC formation, licensing, EIN application, and tax compliance."
          />

          {/* Canonical */}
          <link
            rel="canonical"
            href="https://us.thefutureperfectglobal.com/start-a-business/photography-business"
          />

          {/* Keywords */}
          <meta
            name="keywords"
            content="photography business USA, start photography business USA, photography LLC USA, photographer business registration, photography startup USA, EIN for photographers"
          />

          {/* Hreflang */}
          <link
            rel="alternate"
            href="https://us.thefutureperfectglobal.com/start-a-business/photography-business"
            hrefLang="en-us"
          />
          <link
            rel="alternate"
            href="https://us.thefutureperfectglobal.com/start-a-business/photography-business"
            hrefLang="x-default"
          />

          <meta name="ROBOTS" content="INDEX, FOLLOW" />

          {/* Open Graph */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Start a Photography Business in USA – Registration & Setup"
          />
          <meta
            property="og:description"
            content="Start your photography business in the USA with expert guidance on registration, licensing, LLC formation, and tax compliance."
          />
          <meta
            property="og:url"
            content="https://us.thefutureperfectglobal.com/start-a-business/photography-business"
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
            content="Photography Business Setup in USA – The Future Perfect Global"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@FPGCompanySetup" />
          <meta
            name="twitter:title"
            content="Start a Photography Business in USA"
          />
          <meta
            name="twitter:description"
            content="Planning to start a photography business in the USA? Get expert help with registration, LLC formation, and compliance."
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
              "name": "Photography Business Setup in USA",
              "url": "https://us.thefutureperfectglobal.com/start-a-business/photography-business",
              "provider": {
                "@type": "Organization",
                "name": "The Future Perfect Global",
                "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
              },
              "description": "Professional assistance for starting a photography business in the USA, including LLC formation, licensing, EIN registration, and tax compliance.",
              "areaServed": ["United States"],
              "serviceType": [
                "Photography Business Registration",
                "LLC Formation for Photographers",
                "EIN Application",
                "Business Licensing",
                "Tax & Compliance Support"
              ]
            }`}
          </script>
        </Helmet>

      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-16 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg"
            alt="Photography background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-wide text-gray-300 backdrop-blur-md">
            📸 Business Starter Guide
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Build a <span className="text-cyan-400">Profitable Photography</span> Business
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your passion into a premium brand. Learn how to launch, market, and scale a photography business that attracts high-paying clients.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* Primary CTA */}
            <button
              onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Secondary CTA */}
            <button className="px-8 py-4 rounded-xl font-semibold text-base border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              Learn More
            </button>

          </div>

        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Start a <span className="text-cyan-600">Successful Photography Business</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Learn how to start a photography business and turn your passion into a profitable career. 
            Explore popular niches like wedding photography, portraits, product photography, fashion, and more while building a strong personal brand.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-gray-600 text-base leading-relaxed">
            <p>
              The photography industry offers endless opportunities for creative professionals. Whether you focus on 
              <span className="text-gray-900 font-medium"> wedding photography, portraits, commercial shoots, or food photography</span>, 
              choosing the right niche helps you stand out and attract the right clients.
              Running a successful photography business requires more than creativity. You’ll need marketing skills, 
              proper pricing strategies, and a clear business plan to grow sustainably.
            </p>

            <p>
              This complete guide will help you launch, manage, and scale your freelance photography business with confidence.
            </p>
            <div className="mt-8">
              <img
                src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
                alt="Professional photography business setup"
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>
          </div>

          {/* Right Points Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-cyan-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>

    <section className="bg-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-4">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Explore the Best <span className="text-cyan-600">Photography Niches</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The photography business offers a wide range of profitable niches. Whether you're starting a freelance photography career 
            or scaling your photography business, choosing the right specialization can help you stand out, attract clients, and grow faster.
          </p>
        </div>

        {/* Intro Text */}
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-10">
          <p>
            A successful photographer combines creative skills like composition, lighting, and editing with strong business knowledge. 
            Understanding market demand, local competition, and your unique strengths will help you choose the right photography niche 
            and build a sustainable business.
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {niches.map((niche, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <Camera className="w-8 h-8 text-cyan-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {niche.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {niche.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="max-w-7xl mx-auto text-center mt-8">
          <p className="text-gray-600 text-lg">
            The most popular photography business niches include portrait photography, wedding photography, event photography, 
            commercial photography, product photography, and photojournalism. Choosing the right niche can significantly increase 
            your chances of building a successful and profitable photography business.
          </p>
        </div>

      </div>
    </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Photography Business <span className="text-cyan-600">Market Trends & Statistics</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The photography industry continues to evolve with growing demand for creative services, freelance photographers, 
            and digital content creation. Understanding these photography business trends can help you build a profitable and sustainable career.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-10 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-cyan-600 mb-2">$10B+</h3>
            <p className="text-gray-600">Photography Industry Revenue</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-cyan-600 mb-2">230K+</h3>
            <p className="text-gray-600">Professionals Employed</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-cyan-600 mb-2">1.7%</h3>
            <p className="text-gray-600">Annual Industry Growth</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-cyan-600 bg-cyan-50 p-3 rounded-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Insight */}
        <div className="mt-10 text-center max-w-7xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            As disposable income increases globally, both individuals and businesses are investing more in photography services, 
            especially in marketing, advertising, and digital branding. Photographers who adapt to trends and offer value-added services 
            have a higher chance of building a successful photography business.
          </p>
        </div>

      </div>
    </section>

        <section className="bg-cyan-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Are You Ready to <span className="text-cyan-600">Start a Photography Business?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Before starting a photography business, it’s important to evaluate your skills, mindset, and readiness. 
            Photography entrepreneurship can be highly rewarding, but it also requires dedication, consistency, and business expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {pointss.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-50 text-cyan-600 p-3 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center max-w-7xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            If you have the passion for photography, strong business skills, and the drive to consistently improve, 
            you can build a successful freelance photography business. Not only will you earn income, but you'll also 
            create meaningful visual stories and lasting memories for your clients.
          </p>

        </div>

      </div>
    </section>

          <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Essential Skills to Become a 
            <span className="text-cyan-600"> Successful Photography Entrepreneur</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To build a profitable photography business, you need more than creative talent. 
            From business management and marketing to technical photography skills, mastering these core areas will help you grow a successful freelance photography career.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-xl">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center max-w-7xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            By developing these essential photography business skills, you can stand out in a competitive market and build a sustainable, high-income photography career.
          </p>

        </div>

      </div>
    </section>


          <section className="bg-cyan-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Key Challenges in Building a 
            <span className="text-cyan-600"> Photography Business</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Starting a photography business is not just about taking great photos. 
            Many freelance photographers struggle with business management, marketing, and consistent income. 
            To succeed, you must balance creativity with strong business and financial skills.
          </p>
        </div>

        {/* Intro Insight */}
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-16">
          <p>
            While mastering photography techniques is important, long-term success depends on your ability to manage finances, 
            attract clients, and build a strong personal brand. Understanding these challenges can help you prepare and grow 
            a profitable photography business.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mx-auto mb-4 w-fit bg-cyan-50 text-cyan-600 p-3 rounded-xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center max-w-7xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            By improving your financial planning, client management, and marketing strategies, you can overcome these challenges 
            and build a successful freelance photography business that generates consistent income.
          </p>

        </div>

      </div>
    </section>

    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            A Day in the Life of a 
            <span className="text-cyan-600"> Photography Entrepreneur</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Wondering what a typical day looks like for a freelance photographer? 
            From planning shoots and capturing moments to editing photos and managing clients, 
            running a photography business involves both creative work and business operations.
          </p>
        </div>

        {/* Timeline Style */}
        <div className="relative border-l border-gray-200 pl-8 space-y-12">

          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Dot */}
              <div className="absolute -left-[38px] top-1 w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center shadow-sm">
                {step.icon}
              </div>

              {/* Content */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center max-w-7xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            A successful photography career requires balancing creativity with business management. 
            By mastering your daily workflow, you can improve productivity, deliver better results, 
            and grow a profitable photography business.
          </p>

        </div>

      </div>
    </section>

          <section className="bg-cyan-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Choose the Right 
            <span className="text-cyan-600"> Photography Business Structure</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To start a photography business legally, choosing the right business structure is essential. 
            Whether you're a freelance photographer or building a photography company, selecting the right legal entity 
            impacts taxes, liability protection, and long-term growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {structures.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Recommendation Card */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-8 text-center max-w-6xl mx-auto shadow-sm">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            Recommended: Start an LLC for Your Photography Business
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For most photographers, forming a Limited Liability Company (LLC) is the best choice. 
            It provides personal liability protection, is easy to set up, cost-effective, and helps build credibility with clients.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-cyan-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">Protect your personal assets</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-cyan-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">Simple and affordable setup</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-cyan-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">Professional business credibility</span>
            </div>
          </div>

          <button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
            Register Your Photography Business
          </button>
        </div>

      </div>
    </section>

    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            How to <span className="text-cyan-600">Set Up & Manage</span> Your Photography Business
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            After registering your photography business, the next step is setting up operations, finances, marketing, and tools. 
            Proper planning and management will help you build a successful and sustainable photography business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center max-w-6xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Setting up and maintaining your photography business properly ensures long-term growth, consistent income, 
            and a professional brand that clients trust.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-cyan-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Best <span className="text-cyan-600">Photography Communities & Forums</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Joining photography communities and forums is essential for networking, learning, and growing your photography business. 
            Connect with professional photographers, discover new opportunities, and stay updated with industry trends.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Social Media Groups */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-cyan-600 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-900">
                Photography Social Media Groups
              </h3>
            </div>

            <ul className="space-y-4">
              {socialGroups.map((group, index) => (
                <li key={index}>
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
                  >
                    {group.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Forums */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-cyan-600 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-900">
                Photography Forums & Discussions
              </h3>
            </div>

            <ul className="space-y-4">
              {forums.map((forum, index) => (
                <li key={index}>
                  <a
                    href={forum.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
                  >
                    {forum.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center max-w-7xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Engaging with photography communities helps you improve your skills, build connections, and discover new clients. 
            Stay active, share your work, and learn from experienced photographers to grow your photography business.
          </p>
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

      <section className="py-12 bg-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600">
            Get answers to common questions about starting a photography business
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 transition"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="text-base font-semibold text-slate-900">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-slate-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-700" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-16 bg-gradient-to-r from-cyan-600 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Start Your Photography Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Take the first step today and turn your passion into a profitable business. We'll handle the paperwork so you can focus on your craft.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 rounded-lg font-bold text-base transition-colors flex items-center gap-2">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-bold text-base transition-colors">
              Talk to an Expert
            </button>
          </div>
          <p className="mt-8 text-cyan-100">
            Join thousands of photographers who have launched successful businesses
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
