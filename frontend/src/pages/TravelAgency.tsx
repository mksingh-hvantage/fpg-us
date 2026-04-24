import { Plane, ArrowRight, CheckCircle, ChevronDown, Briefcase, Building, Clock, CreditCard, DollarSign, Heart, Percent, Shield, Ship, Sparkles, Star, Target, TrendingUp, ExternalLink, Wrench } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async"; 
import GetStartedModal from '../components/GetStartedModal';
export default function TravelAgency() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

 const benefits = [
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Set your own hours and create a work-life balance that suits your lifestyle. Work when it's convenient for you."
    },
    {
      icon: Shield,
      title: "Established Support Systems",
      description: "Join host agencies that provide training, technology, and supplier relationships, so you're never alone."
    },
    {
      icon: Star,
      title: "Travel Perks & FAM Trips",
      description: "Enjoy industry discounts and familiarization trips to destinations, allowing you to experience what you sell."
    },
    {
      icon: Target,
      title: "Multiple Revenue Streams",
      description: "Earn commissions, service fees, and bonuses while building a scalable business with unlimited earning potential."
    },
    {
      icon: Sparkles,
      title: "Creative Freedom",
      description: "Design unique travel experiences and specialize in niches that align with your interests and expertise."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Start solo and grow at your own pace. Add team members and expand your services as your client base grows."
    }
  ];

   const revenueStreams = [
    {
      icon: Percent,
      title: "Supplier Commissions",
      description: "Earn 10-20% commission on bookings from hotels, cruise lines, tour operators, and other travel suppliers.",
      range: "$500-$5,000 per booking"
    },
    {
      icon: DollarSign,
      title: "Service Fees",
      description: "Charge planning and consultation fees for your expertise, time, and personalized service.",
      range: "$50-$500 per client"
    },
    {
      icon: CreditCard,
      title: "Markup on Products",
      description: "Add a markup to net-rate products like vacation packages and tour components.",
      range: "10-30% markup"
    },
    {
      icon: TrendingUp,
      title: "Performance Bonuses",
      description: "Earn volume-based bonuses and incentives from preferred suppliers when you hit sales targets.",
      range: "Extra $5K-$50K annually"
    }
  ];
  
   const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need prior travel industry experience to start?",
      answer: "No prior experience is required, though a passion for travel is essential. Many successful travel agents started with no industry background. Host agencies provide comprehensive training, and certifications like those from The Travel Institute will teach you everything you need to know about bookings, suppliers, and customer service."
    },
    {
      question: "How much money can I realistically make?",
      answer: "Earnings vary widely based on your effort, niche, and client base. New agents typically earn $30,000-$50,000 in their first year working part-time. Full-time agents with established businesses often earn $60,000-$100,000+. Top performers specializing in luxury or corporate travel can exceed $150,000 annually. Your income grows as you build relationships and expertise."
    },
    {
      question: "Should I join a host agency or go independent?",
      answer: "For new agents, joining a host agency is highly recommended. Host agencies provide access to booking systems, supplier relationships, training, and commission processing for a small fee or commission split. This allows you to focus on selling rather than administrative tasks. Once established with experience, some agents choose to operate independently."
    },
    {
      question: "What licenses or certifications do I need?",
      answer: "Requirements vary by location. Most areas don't require special licenses to sell travel, but you'll need basic business registration. Professional certifications from ASTA, The Travel Institute, or CLIA are highly recommended and increase your credibility. Some states have seller of travel laws requiring registration. Always check your local regulations."
    },
    {
      question: "How do I find my first clients?",
      answer: "Start with your existing network - friends, family, and social connections. Share your new business on social media and offer to help people you know plan their trips. Join local business groups and networking events. Create valuable content about travel destinations. Ask satisfied clients for referrals. Building a client base takes time but grows exponentially through word-of-mouth."
    },
    {
      question: "Can I run this business from home?",
      answer: "Absolutely! Most travel agents operate from home, which keeps overhead costs low. You only need a dedicated workspace, reliable internet, computer, and phone. This flexibility allows you to work from anywhere and maintain a great work-life balance. As you grow, you can decide whether to keep your home office or rent commercial space."
    },
    {
      question: "What are the biggest challenges I'll face?",
      answer: "Common challenges include building a client base in the beginning, staying updated on constantly changing travel regulations, managing client expectations, and standing out in a competitive market. However, these are manageable with persistence, ongoing education, excellent service, and finding your unique niche. Most successful agents say the rewards far outweigh the challenges."
    },
    {
      question: "How long until I can expect to be profitable?",
      answer: "Many agents see their first bookings within 1-3 months of launching. Profitability typically comes within 6-12 months once you've established a client base and refined your marketing. The timeline depends on your startup costs, how much time you invest, and how effectively you market your services. Those who treat it as a serious business and work consistently see faster results."
    }
  ];
  
  const quickStart = [
    "Choose your business structure (LLC, sole proprietorship, etc.)",
    "Research and join a reputable host agency for support",
    "Complete travel agent certification training",
    "Build your professional website and social media presence",
    "Network and start marketing to your target audience",
    "Book your first clients and deliver exceptional service"
  ];

  const resources = [
    {
      title: "Industry Associations",
      items: [
        "American Society of Travel Advisors (ASTA)",
        "Travel Institute certifications",
        "Cruise Lines International Association (CLIA)"
      ]
    },
    {
      title: "Essential Tools",
      items: [
        "Booking systems and GDS training",
        "CRM software for client management",
        "Accounting and invoicing platforms"
      ]
    },
    {
      title: "Ongoing Education",
      items: [
        "Supplier webinars and training",
        "Destination familiarization trips",
        "Industry conferences and events"
      ]
    }
  ];
  
   const steps = [
    {
      number: "01",
      title: "Research & Planning",
      description: "Study the travel industry, identify your target market, and decide on your niche. Research host agencies and determine whether you'll operate independently or join an established network.",
      items: [
        "Define your ideal client profile",
        "Choose your specialization (luxury, adventure, family, etc.)",
        "Research host agency options",
        "Understand legal requirements in your area"
      ]
    },
    {
      number: "02",
      title: "Business Formation",
      description: "Establish your legal business structure, obtain necessary licenses, and set up your operations infrastructure including business accounts and insurance coverage.",
      items: [
        "Register your business entity",
        "Obtain required permits and licenses",
        "Set up business banking and accounting",
        "Secure errors & omissions insurance"
      ]
    },
    {
      number: "03",
      title: "Training & Certification",
      description: "Invest in professional development through industry training programs and certifications. Join a host agency for access to booking systems, training resources, and supplier relationships.",
      items: [
        "Complete travel agent certification programs",
        "Join a host agency or consortium",
        "Learn booking systems and software",
        "Build supplier relationships"
      ]
    },
    {
      number: "04",
      title: "Marketing & Launch",
      description: "Create your brand identity, build a professional website, and develop a marketing strategy to attract your first clients. Leverage social media and networking to build your presence.",
      items: [
        "Develop your brand and website",
        "Create social media presence",
        "Network within your community",
        "Launch marketing campaigns"
      ]
    },
    {
      number: "05",
      title: "Grow & Scale",
      description: "Focus on delivering exceptional service to build a strong reputation. Collect testimonials, encourage referrals, and continuously expand your knowledge and service offerings.",
      items: [
        "Deliver outstanding customer experiences",
        "Build a referral program",
        "Expand service offerings",
        "Consider hiring team members"
      ]
    }
  ];

const services = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Secure the best airfare deals for clients with access to exclusive rates and consolidated fares not available to the public.",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Building,
      title: "Hotel Accommodations",
      description: "Book hotels, resorts, and vacation rentals with preferred rates and room upgrades through established supplier relationships.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: Ship,
      title: "Cruise Packages",
      description: "Offer comprehensive cruise vacation planning with access to exclusive onboard credits and cabin upgrades.",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Heart,
      title: "Tour Planning",
      description: "Design custom tour itineraries including guided excursions, activities, and unique local experiences.",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Heart,
      title: "Destination Weddings",
      description: "Coordinate magical wedding experiences in exotic locations, handling every detail from venue to guest accommodations.",
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Manage business travel programs with expense tracking, preferred vendor agreements, and 24/7 support.",
      color: "bg-slate-100 text-slate-600"
    }
  ];

    return (
    <div className="bg-white">
<Helmet>
  <title>
    Start a Travel Agency in USA – Business Setup, Licensing & LLC Formation | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Learn how to start a travel agency in the USA. The Future Perfect Global provides expert support for LLC formation, business registration, licensing guidance, EIN application, and compliance for travel businesses."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/start-a-business/travel-agency"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="start travel agency USA, travel agency business USA, travel agency LLC formation USA, travel business registration USA, travel agency license USA, start tourism business USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/travel-agency"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/travel-agency"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Start a Travel Agency in USA – Business Setup & Licensing"
  />
  <meta
    property="og:description"
    content="Start your travel agency in the USA with professional assistance for LLC formation, registration, licensing, and compliance from The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/start-a-business/travel-agency"
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
    content="Start a Travel Agency in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Start a Travel Agency in USA – Business Setup & Licensing"
  />
  <meta
    name="twitter:description"
    content="Looking to start a travel agency in the USA? Get expert guidance on business registration, LLC formation, licensing, and compliance."
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
      "name": "Travel Agency Business Setup in USA",
      "url": "https://us.thefutureperfectglobal.com/start-a-business/travel-agency",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Professional travel agency business setup services in the USA including LLC formation, business registration, licensing guidance, EIN application, and compliance support.",
      "areaServed": [
        "United States"
      ],
      "serviceType": [
        "Travel Agency LLC Formation",
        "Travel Business Registration USA",
        "Business Licensing Guidance",
        "EIN Registration",
        "Compliance Support"
      ]
    }`}
  </script>
</Helmet>

        <section className="relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-600 text-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Plane className="w-4 h-4" />
              <span className="text-sm font-medium">Launch Your Dream Business</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-xl">
              Start Your Own Travel Agency Business
            </h1>

            <p className="text-xl text-cyan-50 leading-relaxed">
              Transform your passion for travel into a thriving business. Build a profitable travel agency
              that helps people explore the world while creating the lifestyle you've always wanted.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-flex items-center justify-center gap-2 bg-white text-cyan-700 px-8 py-4 rounded-lg font-bold hover:bg-cyan-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold">$50B+</div>
                <div className="text-cyan-100 text-sm">Industry Value</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-2xl font-bold">Low Cost</div>
                <div className="text-cyan-100 text-sm">To Start</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-2xl font-bold">Work Anywhere</div>
                <div className="text-cyan-100 text-sm">100% Remote</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-cyan-400/20 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel Planning"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Plane className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-sm text-gray-600">New Agencies Monthly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Start a Profitable Travel Agency Business
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Launch a successful travel agency by helping people plan unforgettable journeys. 
            From customized itineraries to expert travel advice, build a business that turns 
            dream vacations into reality while generating consistent revenue.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "$17B+", label: "Industry Revenue" },
            { value: "12%", label: "Avg Profit Margin" },
            { value: "75%+", label: "Revenue from Commission" },
            { value: "4%+", label: "Industry Growth Rate" }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <p className="text-3xl font-bold text-cyan-600">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">

          {/* LEFT CONTENT */}
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <h3 className="text-3xl font-extrabold text-slate-900">
              Why Start a Travel Agency?
            </h3>

            <p>
              Even in the age of online booking platforms, travelers still value expert guidance. 
              A professional travel agent simplifies complex itineraries, recommends the best 
              destinations, and ensures a seamless experience. With growing global travel demand, starting a travel agency business presents a 
              strong opportunity to build a scalable and service-driven brand.
            </p>

            <p>
              If you can match customers with the right destinations, manage bookings efficiently, 
              and deliver exceptional experiences, this industry offers long-term growth potential.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              What This Guide Covers
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
              <p>• Industry trends & insights</p>
              <p>• Business structure selection</p>
              <p>• Travel agency ideas</p>
              <p>• Market validation</p>
              <p>• Business planning</p>
              <p>• Tools & software</p>
              <p>• Setup & operations</p>
              <p>• Growth strategies</p>
            </div>
          </div>

        </div>

        {/* SKILLS + DAY LIFE */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          {/* DAY IN LIFE */}
          <div className="bg-white border border-gray-200 p-6 rounded-3xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-cyan-600 mb-6">
              A Day in the Life of a Travel Agent
            </h3>

            <div className="grid grid-cols-2 gap-3 text-base text-slate-600">
              <p>• Handling customer inquiries</p>
              <p>• Creating travel itineraries</p>
              <p>• Booking flights & hotels</p>
              <p>• Managing travel plans</p>
              <p>• Updating offers & deals</p>
              <p>• Customer support</p>
            </div>
          </div>

          {/* SKILLS */}
          <div className="bg-white border border-gray-200 p-6 rounded-3xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-cyan-600 mb-6">
              Essential Skills for Success
            </h3>

            <div className="grid grid-cols-2 gap-3 text-base text-slate-600">
              <p>• Strong communication skills</p>
              <p>• Customer relationship management</p>
              <p>• Research & analysis ability</p>
              <p>• Attention to detail</p>
              <p>• Travel knowledge</p>
              <p>• Planning & organization</p>
            </div>
          </div>

        </div>

        {/* CUSTOMER EXPECTATION */}
        <div className="bg-gradient-to-br from-cyan-600 to-teal-600 text-white p-10 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-extrabold mb-6">
            What Travel Agency Customers Expect
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-white/90">
            <div>
              <h4 className="font-semibold mb-2">Convenience</h4>
              <p>Hassle-free booking and complete travel management</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Expert Advice</h4>
              <p>Personalized recommendations and destination insights</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Great Experience</h4>
              <p>Memorable trips with smooth planning and execution</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Services You Can Offer
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            As a travel agency owner, you'll provide a wide range of services that cater to every type
            of traveler, from leisure seekers to business professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-300 transition-all hover:shadow-lg"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Plus many specialized services like group travel, luxury experiences, adventure tourism, and more.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Benefits of Owning a Travel Agency
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Beyond the financial rewards, owning a travel agency offers lifestyle benefits
            and professional advantages that few other businesses can match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-cyan-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
                Turn Your Passion Into Profit
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you love travel and enjoy helping others, a travel agency business allows you to
                combine your passion with entrepreneurship. You'll wake up excited to work on planning
                dream vacations, knowing that every booking brings joy to your clients and income to your business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The travel industry rewards those who are dedicated and creative. With the right approach,
                you can build a thriving business that provides both financial freedom and personal fulfillment.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel Agent Working"
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-cyan-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold mb-1">89%</div>
                <div className="text-sm text-cyan-100">Owner Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            How to Start Your Travel Agency
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Follow this proven roadmap to launch and grow your travel agency business.
            Each step builds the foundation for long-term success.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border-2 border-gray-100 hover:border-cyan-200 transition-all"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <div className="text-6xl font-bold text-cyan-600 opacity-20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Your Revenue Model
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Travel agencies generate income through multiple channels, creating a stable and
            scalable business model with strong profit potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="bg-cyan-100 p-4 rounded-xl flex-shrink-0">
                  <stream.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stream.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{stream.description}</p>
                  <div className="inline-block bg-cyan-50 text-cyan-700 px-4 py-2 rounded-lg font-semibold text-sm">
                    {stream.range}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Earnings Potential</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-sm uppercase tracking-wide mb-2 text-cyan-100">First Year</div>
                <div className="text-4xl font-bold mb-2">$30K-$50K</div>
                <div className="text-sm text-cyan-100">Part-time or building phase</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-sm uppercase tracking-wide mb-2 text-cyan-100">Year 2-3</div>
                <div className="text-4xl font-bold mb-2">$60K-$100K</div>
                <div className="text-sm text-cyan-100">Full-time with established clients</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-sm uppercase tracking-wide mb-2 text-cyan-100">Experienced</div>
                <div className="text-4xl font-bold mb-2">$100K+</div>
                <div className="text-sm text-cyan-100">Established with team or niche</div>
              </div>
            </div>
          </div>
          <p className="text-center text-cyan-100 mt-8 text-sm">
            * Earnings vary based on experience, niche, client base, and effort invested
          </p>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Startup Costs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Initial Investment</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Business registration & licenses</span>
                  <span className="font-semibold">$200-$800</span>
                </li>
                <li className="flex justify-between">
                  <span>Host agency fees (optional)</span>
                  <span className="font-semibold">$0-$500</span>
                </li>
                <li className="flex justify-between">
                  <span>Website & branding</span>
                  <span className="font-semibold">$500-$3,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Insurance (E&O)</span>
                  <span className="font-semibold">$500-$1,500/yr</span>
                </li>
                <li className="flex justify-between">
                  <span>Training & certification</span>
                  <span className="font-semibold">$200-$1,000</span>
                </li>
                <li className="flex justify-between pt-3 border-t border-gray-200">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-cyan-600">$1,400-$6,800</span>
                </li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Monthly Operating Costs</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Marketing & advertising</span>
                  <span className="font-semibold">$100-$500</span>
                </li>
                <li className="flex justify-between">
                  <span>Website hosting & tools</span>
                  <span className="font-semibold">$30-$150</span>
                </li>
                <li className="flex justify-between">
                  <span>Professional development</span>
                  <span className="font-semibold">$50-$200</span>
                </li>
                <li className="flex justify-between">
                  <span>Office supplies & misc</span>
                  <span className="font-semibold">$50-$150</span>
                </li>
                <li className="flex justify-between pt-3 border-t border-cyan-200">
                  <span className="font-bold text-gray-900">Total/month</span>
                  <span className="font-bold text-cyan-600">$230-$1,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Tools & Software */}
      <section className="py-16 px-4 bg-cyan-100/40">
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

     <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about starting a travel agency business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-cyan-200 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white leading-relaxed">
            Follow these actionable steps to launch your travel agency and start serving clients
            within weeks, not months.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Checklist</h3>
            <div className="space-y-4">
              {quickStart.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white rounded-lg p-2 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-cyan-600" />
                  </div>
                  <p className="text-gray-700 pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">{resource.title}</h4>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-extrabold mb-4">Launch Your Agency Today</h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful travel entrepreneurs who have built thriving businesses
            doing what they love. Your journey starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-flex items-center justify-center gap-2 bg-white text-cyan-700 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all shadow-xl hover:scale-105">
              Start Your Business
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Download Free Guide
            </button>
          </div>
        </div>
      </div>
    </section>
                                   <GetStartedModal
                                                                                                    isOpen={isModalOpen}
                                                                                                    onClose={() => setIsModalOpen(false)}
                                                                                                    selectedBusinessType={selectedBusinessType}
                                                                                                  />
            

    </div>
    )
}
