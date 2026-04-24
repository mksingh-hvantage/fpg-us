import { useState } from 'react';
import { Helmet } from "react-helmet-async"; 
import GetStartedModal from '../components/GetStartedModal';
import { Calculator, CalendarClock, CheckCircle, DollarSign, ExternalLink, FileCheck, FileText, Keyboard, MapPin, Megaphone, MessageCircle, RefreshCw, Settings, ShieldCheck, Sparkles, TrendingUp, Users, Wrench, Zap } from "lucide-react";
export default function SummerBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');

const summerIdeas = [
  {
    title: "Tutoring & Coaching Services",
    description:
      "Start a profitable summer tutoring business by offering academic support, sports coaching, or hobby-based lessons. Parents actively search for summer learning programs to keep kids engaged and ahead.",
  },
  {
    title: "Babysitting & Childcare Services",
    description:
      "Launch a reliable childcare or babysitting service during summer break. With schools closed, working parents need trusted caregivers, making this a high-demand seasonal business idea.",
  },
  {
    title: "Lawn Care & Yard Maintenance",
    description:
      "Offer lawn mowing, gardening, plant watering, and home care services. Summer is peak season for outdoor maintenance, especially when homeowners travel on vacation.",
  },
  {
    title: "Local Tour Guide Business",
    description:
      "Turn your local knowledge into income by starting a guided tour business. Create unique experiences for tourists with themed city tours, cultural walks, or hidden gem explorations.",
  },
  {
    title: "Travel Planning & Vacation Services",
    description:
      "Help clients save time by offering travel planning, itinerary creation, and booking services. This is a scalable summer business with high demand during peak travel season.",
  },
  {
    title: "Airbnb Hosting & Vacation Rentals",
    description:
      "Maximize income by renting out your property on Airbnb or managing vacation rentals. Summer is the busiest season for short-term rentals, making it a top passive income opportunity.",
  },
  {
    title: "Summer Camp & Activity Programs",
    description:
      "Organize summer camps, workshops, or activity programs for kids. Parents are willing to invest in fun, educational experiences, making this one of the most profitable summer businesses.",
  },
];
const validationSteps = [
  {
    title: "Evaluate Your Skills & Expertise",
    description:
      "Before starting a summer business, assess your skills, experience, and knowledge. Whether you're launching a tutoring service, coaching program, or local service business, having strong subject matter expertise is essential for delivering value and building trust with customers.",
  },
  {
    title: "Analyze Your Strengths & Weaknesses",
    description:
      "Not every summer business idea will succeed. Carefully evaluate your strengths and limitations to choose a business model that aligns with your abilities. Selecting the right opportunity increases your chances of long-term profitability and growth.",
  },
  {
    title: "Understand Market Competition",
    description:
      "Even seasonal businesses face competition. To succeed, you must differentiate yourself by offering superior products, better customer service, or a unique experience. Research competitors in your niche and identify gaps you can fill.",
  },
  {
    title: "Test Your Business Idea Before Launch",
    description:
      "Starting a summer business is easy, but building a profitable one requires validation. Test your idea with a small audience, gather feedback, and refine your offering before investing significant time and money.",
  },
  {
    title: "Define Your Unique Selling Proposition (USP)",
    description:
      "Your USP is what makes your business stand out in a crowded market. Whether it's competitive pricing, premium quality, faster service, or unique features, clearly define what sets you apart and why customers should choose you.",
  },
  {
    title: "Refine and Optimize Your Business Model",
    description:
      "Continuously improve your summer business idea based on real-world feedback. Optimize your pricing, services, and customer experience to ensure your business remains competitive and scalable throughout the season.",
  },
];
const businessStructures = [
  {
    title: "Sole Proprietorship",
    description:
      "A sole proprietorship is the default business structure when you start a business without formal registration. While it's simple and low-cost, it does not provide legal protection for your personal assets, making it a risky choice for most summer businesses.",
  },
  {
    title: "Partnership",
    description:
      "A partnership is formed when two or more individuals run a business together without creating a formal entity. Although easy to set up, partnerships offer limited liability protection and may expose personal assets to risk.",
  },
  {
    title: "Limited Liability Company (LLC)",
    description:
      "An LLC is the most popular business structure for small businesses and startups. It is easy to set up, cost-effective, and provides strong liability protection by separating personal and business assets. This makes it the best choice for most summer businesses.",
    highlight: true,
  },
  {
    title: "S Corporation (S Corp)",
    description:
      "An S Corporation is a more advanced business structure that offers tax advantages but comes with stricter requirements and administrative complexity. It is generally not ideal for small or seasonal businesses.",
  },
  {
    title: "C Corporation (C Corp)",
    description:
      "C Corporations are large, complex entities designed for scalable businesses and investors. They involve extensive regulations and are typically unnecessary for small summer business ventures.",
  },
];
const operationss = [
  {
    icon: Megaphone,
    title: "Marketing Strategy for Summer Business",
    description:
      "To maximize revenue during peak season, start marketing your summer business well in advance. Use SEO-optimized websites, social media marketing, paid ads, and local promotions to stay top-of-mind with your target audience such as parents, tourists, or local customers. Build anticipation during off-season months to grow your customer base.",
  },
  {
    icon: MapPin,
    title: "Choosing the Right Business Location",
    description:
      "Your business location depends on your business model. Many summer businesses can be run from home, while others require retail or physical locations. If renting space, opt for short-term leases to avoid long-term financial commitments.",
  },
  {
    icon: Users,
    title: "Hiring Employees & Staffing",
    description:
      "If your seasonal business grows, you may need to hire temporary staff. Set up systems for payroll, employee insurance, and tax compliance to ensure smooth operations and legal compliance.",
  },
  {
    icon: Settings,
    title: "Business Software & Automation",
    description:
      "Using the right business tools and software can streamline operations, automate administrative tasks, and improve efficiency. From scheduling tools to accounting software, investing in the right systems can save time and increase productivity.",
  },
  {
    icon: DollarSign,
    title: "Business Finances & Tax Management",
    description:
      "Open a dedicated business bank account and consider a business credit card for better financial management. Maintain accurate bookkeeping records, track expenses, and ensure timely filing of both business and personal taxes.",
  },
  {
    icon: MessageCircle,
    title: "Off-Season Planning & Growth",
    description:
      "Use spring, fall, and winter to plan and optimize your summer business. Test new marketing strategies, refine your services, automate processes, and explore new revenue streams to improve performance in the next season.",
  },
  {
    icon: Keyboard,
    title: "Equipment & Operational Costs",
    description:
      "Equipment needs vary depending on your business type. Since summer businesses operate for a limited time, keep startup and operational costs low. Focus on essential tools and avoid over-investing in inventory or equipment.",
  },
];
const complianceItems = [
  {
    icon: ShieldCheck,
    title: "Business Licenses, Permits & Legal Requirements",
    description:
      "Even if you're running a seasonal summer business, you must comply with all legal requirements. This includes obtaining the necessary local, state, and federal business licenses and permits. Requirements vary based on your industry and location, so it's essential to research and ensure full compliance before launching your business.",
  },
  {
    icon: FileText,
    title: "Understanding Small Business Taxes",
    description:
      "Running a summer business means you are responsible for multiple types of taxes. These may include self-employment tax, federal income tax, and state income tax. If you sell products or certain services, you may also need to collect and remit sales and use tax based on your jurisdiction.",
  },
  {
    icon: DollarSign,
    title: "Tax Planning & Financial Preparation",
    description:
      "To avoid financial stress, it’s recommended to set aside approximately 30% to 35% of your earnings for taxes. Maintaining accurate financial records and bookkeeping will help you stay organized and ensure timely tax filing. Professional tax preparation services can also simplify the process and ensure compliance.",
  },
];
const maintenanceSteps = [
  {
    icon: FileCheck,
    title: "File Your Annual Business Report",
    description:
      "Most U.S. states require businesses to file an annual report to remain in good standing. This report includes key updates such as ownership changes and business status. Filing on time ensures your business remains compliant and avoids penalties.",
  },
  {
    icon: CalendarClock,
    title: "Pay Estimated Taxes Throughout the Year",
    description:
      "Small business owners are typically required to pay estimated taxes quarterly—usually in April, June, September, and January. If your summer business generates seasonal income, consult an accountant to determine the most effective tax payment strategy.",
  },
  {
    icon: RefreshCw,
    title: "Renew Business Licenses & Permits",
    description:
      "To legally operate your summer business, you must renew all required licenses, permits, and registrations annually. Even seasonal businesses must maintain valid documentation to stay compliant with local, state, and federal regulations.",
  },
  {
    icon: Calculator,
    title: "Prepare Your Business Taxes",
    description:
      "Work with a professional accountant or use accounting software to prepare your business taxes accurately. Proper tax preparation helps reduce errors, maximize deductions, and ensure compliance with tax laws.",
  },
  {
    icon: FileText,
    title: "File Your Annual Tax Returns",
    description:
      "All businesses must file federal and, if applicable, state tax returns each year. Filing on time is essential to avoid penalties and maintain your business’s legal and financial standing.",
  },
  {
    icon: DollarSign,
    title: "Manage Payroll & Sales Tax Payments",
    description:
      "If your summer business has employees or sells taxable goods/services, you must regularly pay payroll taxes and sales taxes. Staying current with these obligations ensures compliance and prevents costly fines.",
  },
];
return (
<div className="min-h-screen bg-white">
   <Helmet>
      <title>
         Start a Summer Business in USA – Seasonal Business Setup & LLC Registration | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Start a profitable summer business in the USA with expert guidance from The Future Perfect Global. Get help with business registration, LLC formation, EIN application, and compliance for seasonal businesses."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/start-a-business/summer-business"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="summer business USA, seasonal business USA, start a summer business, summer startup ideas USA, seasonal LLC registration, summer business registration USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/summer-business"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/summer-business"
         hrefLang="x-default"
         />
      <meta name="ROBOTS" content="INDEX, FOLLOW" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Start a Summer Business in USA – Seasonal Business Setup"
         />
      <meta
         property="og:description"
         content="Launch a successful summer business in the USA with LLC formation, registration, and compliance support from The Future Perfect Global."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/start-a-business/summer-business"
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
         content="Summer Business Setup in USA – The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Start a Summer Business in USA – Seasonal Business Setup"
         />
      <meta
         name="twitter:description"
         content="Planning to start a summer business in the USA? Get expert assistance with registration, LLC formation, and compliance."
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
           "name": "Summer Business Setup in USA",
           "url": "https://us.thefutureperfectglobal.com/start-a-business/summer-business",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "Professional support for starting a summer or seasonal business in the USA, including LLC formation, EIN registration, and compliance management.",
           "areaServed": [
             "United States"
           ],
           "serviceType": [
             "Seasonal Business Registration USA",
             "Summer Business LLC Formation",
             "Startup Support",
             "EIN Registration",
             "Compliance & Annual Filings"
           ]
         }`}
      </script>
   </Helmet>
   <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-amber-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        
        {/* Badge */}
        <div className="flex justify-center mb-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">
              Build Profitable Seasonal Businesses Faster
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Turn Summer Into a <span className="bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">
              High-Income Business
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Launch a scalable summer business with proven ideas, step-by-step guidance, 
            and tools designed for students, creators, and entrepreneurs. Start fast, 
            grow smart, and maximize seasonal profits.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button
              onClick={() => {
                setSelectedBusinessType("");
                setIsModalOpen(true);
              }}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Free
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition">
              Explore Business Ideas
            </button>
          </div>
        </div>

        {/* Stats (Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/40 transition">
            <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
            <p className="text-gray-400 text-sm">Entrepreneurs Empowered</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/40 transition">
            <div className="text-3xl font-bold text-cyan-400 mb-1">15+ Years</div>
            <p className="text-gray-400 text-sm">Industry Expertise</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/40 transition">
            <div className="text-3xl font-bold text-cyan-400 mb-1">5K+</div>
            <p className="text-gray-400 text-sm">Successful Businesses Launched</p>
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Trusted by founders, freelancers & students worldwide 🌍
          </p>
        </div>
      </div>
    </section>
   <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
            alt="summer business"
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-6 bg-white p-5 rounded-xl shadow-md border max-w-xs">
            <div className="flex items-start gap-3">
              <Megaphone className="text-cyan-600 mt-1" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">1M+ entrepreneurs</span>{" "}
                have started their journey with our guidance since 2004.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
            Start a Profitable <span className='text-cyan-600'>Summer Business</span>
          </h2>

          <p className="text-gray-600 mb-6">
            A summer business is one of the best low-cost startup ideas for students, 
            teachers, and aspiring entrepreneurs. It allows you to earn extra income 
            while learning real-world business skills. From marketing and operations to finance and customer management, 
            seasonal businesses help you build a strong foundation and even scale 
            into a full-time venture.
          </p>

          {/* FEATURES */}
          <div className="space-y-2">
            {[
              "Explore trending summer business ideas with low investment",
              "Learn business setup, legal basics, and daily operations",
              "Understand marketing strategies and customer acquisition",
              "Scale your side business into a long-term opportunity",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-cyan-500 rounded-full"></span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button onClick={() => {
                setSelectedBusinessType("");
                setIsModalOpen(true);
              }} className="px-7 py-3 bg-cyan-600 text-white rounded-lg font-semibold shadow hover:bg-cyan-700 transition">
              Start Your Summer Business
            </button>
          </div>
        </div>

      </div>
    </section>

    <section className="w-full py-16 px-16 bg-cyan-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Best <span className='text-cyan-600'>Summer Business</span> Ideas to Start in 2026
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover profitable seasonal business opportunities you can start this
          summer. These ideas are low-cost, high-demand, and perfect for
          entrepreneurs looking to earn extra income.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {summerIdeas.map((idea, index) => (
          <div
            key={index}
            className="bg-white max-w-6xl mx-auto rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
          >
            <div className="text-sm font-semibold text-cyan-600 mb-2">
              Idea {index + 1}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {idea.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {idea.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full py-16 px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          How to Validate Your <span className='text-cyan-600'>Summer Business</span> Idea Successfully
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn how to validate a summer business idea before investing time and
          money. Follow proven strategies like market research, skill
          evaluation, and defining your unique selling proposition (USP) to
          build a profitable seasonal business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {validationSteps.map((step, index) => (
          <div
            key={index}
            className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-sm font-semibold text-cyan-600 mb-2">
              Step {index + 1}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10 text-center">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-600 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">
            Turn Your Summer Business Idea Into a Profitable Venture
          </h3>
          <p className="text-lg opacity-90">
            Success doesn't come from just having an idea — it comes from proper
            validation, clear positioning, and continuous improvement. Take the
            time to test your idea, stand out from competitors, and deliver
            exceptional value to your customers.
          </p>
        </div>
      </div>
    </section>

    <section className="w-full py-16 px-16 bg-cyan-50">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Choose the Right Business Structure for Your <span className='text-cyan-600'>Summer Business</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Selecting the right business structure is a crucial step when starting
              a summer business in the U.S. The right entity impacts your taxes,
              liability protection, and long-term success. Explore the most common
              business structures and find the best fit for your startup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessStructures.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl ${
                  item.highlight
                    ? "bg-cyan-600 text-white border-cyan-600 scale-105"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle
                    className={`w-5 h-5 ${
                      item.highlight ? "text-white" : "text-cyan-600"
                    }`}
                  />
                  <span className="text-sm font-semibold">
                    Option {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p
                  className={`leading-relaxed ${
                    item.highlight ? "text-cyan-100" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-16 space-y-6 text-center">
            <p className="text-lg text-gray-700">
              In most cases, the best business structure for a summer startup is a{" "}
              <span className="font-semibold text-cyan-600">
                Limited Liability Company (LLC)
              </span>
              . It offers flexibility, protects your personal assets, and is easy to
              register in most U.S. states.
            </p>

            <p className="text-gray-600">
              Business registration requirements vary by state, but choosing the
              right entity early ensures legal protection and smoother operations.
              For a deeper understanding, explore a complete guide comparing business
              structures, advantages, and disadvantages.
            </p>

            <div className="bg-cyan-600 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">
                Start Your Summer Business Today
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Get your business registered quickly and easily. Choose the right
                structure, protect your assets, and launch your summer business with
                confidence.
              </p>
              <button onClick={() => {
                setSelectedBusinessType("");
                setIsModalOpen(true);
              }} className="bg-white text-cyan-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                Get Started Now
              </button>
            </div>
          </div>
        </section>

<section className="w-full py-16 px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          How to Set Up and Manage Your Summer Business Operations
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn how to successfully run a summer business with the right
          operations, marketing strategy, staffing, and financial management.
          Optimize your seasonal business for maximum profitability and
          long-term growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {operationss.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 mb-4 group-hover:bg-cyan-600 transition">
                <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-600 text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-3">
            Build a Scalable and Profitable Summer Business
          </h3>
          <p className="text-lg opacity-90">
            Success in seasonal business comes from strong planning, efficient
            operations, and consistent marketing. Set up the right systems,
            control your costs, and continuously improve your strategy to
            maximize your summer income.
          </p>
        </div>
      </div>
    </section>

    <section className="w-full py-16 px-16 bg-cyan-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Business Licenses, Regulations & Taxes for Your Summer Business
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn the essential legal requirements, licenses, permits, and tax
          obligations for starting and running a summer business. Stay compliant
          with local, state, and federal regulations while managing your small
          business taxes effectively.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {complianceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 mb-4 group-hover:bg-cyan-600 transition">
                <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-3">
            Stay Compliant and Maximize Your Summer Business Profits
          </h3>
          <p className="text-lg opacity-90">
            Understanding business regulations and tax obligations is essential
            for long-term success. Plan ahead, stay compliant, and manage your
            finances wisely to avoid penalties and keep your summer business
            running smoothly.
          </p>
        </div>
      </div>
    </section>

        <section className="w-full py-16 px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          How to Maintain Your <span className='text-cyan-600'>Summer Business</span> and Stay Compliant
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Keeping your summer business in good standing requires ongoing
          compliance, tax management, and timely reporting. Follow these
          essential steps to maintain your business, avoid penalties, and ensure
          long-term success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {maintenanceSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 mb-4 group-hover:bg-cyan-600 transition">
                <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-3">
            Keep Your Summer Business Running Smoothly Year After Year
          </h3>
          <p className="text-lg opacity-90">
            Staying compliant with annual reports, tax payments, and licensing
            requirements is essential for long-term success. Build strong
            systems, stay organized, and manage your obligations efficiently to
            grow your seasonal business with confidence.
          </p>
        </div>
      </div>
    </section>

    {/* Tools & Software */}
      <section className="py-16 px-16 bg-white">
        <div className="max-w-7xl mx-auto">

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
{/* The Internet Advantage */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Start Your Summer Business with Ease</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Summer is the perfect time to launch a profitable seasonal business. With low startup costs and high demand, 
    you can turn your skills into a successful income stream. Whether it's services, local experiences, or online 
    opportunities, the right strategy and marketing can help you attract customers and grow quickly during peak season.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Launch Your Summer Business
          </button>
        </div>
      </section>
<GetStartedModal
   isOpen={isModalOpen}
   onClose={() =>
setIsModalOpen(false)}
selectedBusinessType={selectedBusinessType}
/>
</div>
);
}