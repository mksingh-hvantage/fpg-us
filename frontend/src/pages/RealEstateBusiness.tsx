import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
import { ArrowRight, Briefcase, Building2, CheckCircle, Code, ExternalLink, FileText, Laptop, MapPin, Megaphone, Settings, TrendingUp, Users, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
export default function RealEstateBusiness() { 
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const benefits = [
'Expert guidance every step of the way',
'Complete business formation support',
'Ongoing compliance and maintenance help',
'Access to professional network',
'Tools and resources for success'
];
const items = [
  {
    icon: <FileText size={28} />,
    title: "Real Estate Permits & Business Licenses",
    desc: "Stay compliant by obtaining all required local, state, and federal permits and licenses for your real estate business.",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Real Estate Marketing & Brand Strategy",
    desc: "Grow your real estate business with strong branding, a professional website, and effective marketing strategies.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Choosing the Right Business Location",
    desc: "Select the best location for your real estate business, whether it's a home office, commercial space, or co-working setup.",
  },
  {
    icon: <Settings size={28} />,
    title: "Real Estate Business Operations & Processes",
    desc: "Build efficient workflows for property management, client handling, legal processes, and daily operations.",
  },
  {
    icon: <Code size={28} />,
    title: "Best Software Tools for Real Estate Business",
    desc: "Boost productivity using CRM, project management, scheduling, and document automation tools.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Essential Equipment for Real Estate Business",
    desc: "Equip your business with must-have tools like laptops, smartphones, and reliable transportation.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Real Estate Business Maintenance & Compliance",
    desc: "Manage taxes, file annual reports, and renew licenses to keep your business running legally and smoothly.",
  },
  {
    icon: <Users size={28} />,
    title: "Hiring Employees for Real Estate Business",
    desc: "Build a skilled team to support growth, manage operations, and scale your real estate business efficiently.",
  },
];
const sections = [
  {
    title: "Top Social Media Groups for Real Estate Agents & Investors",
    desc: "Joining real estate social media groups helps agents, brokers, and investors network, share insights, and stay updated with industry trends. These platforms are essential for building connections and growing your real estate business.",
    links: [
      { name: "Agents Online - Real Estate Forums", url: "#" },
      { name: "Raise the Bar on Real Estate", url: "#" },
      { name: "Lab Coat Agents — The Science of Real Estate", url: "#" },
      { name: "National Association of Realtors Facebook Group", url: "#" },
      { name: "Real Estate Success Principles", url: "#" },
      { name: "Social Media for Real Estate", url: "#" },
      { name: "Real Estate Open Networkers", url: "#" },
      { name: "Real Estate Professionals Group", url: "#" },
    ],
  },
  {
    title: "Best Real Estate Forums & Discussion Groups",
    desc: "Explore popular real estate forums and discussion platforms where professionals discuss property investment strategies, market trends, and business growth tips.",
    links: [
      { name: "Bigger Pockets Real Estate Agent Forums", url: "#" },
      { name: "Real Estate Investing Forum", url: "#" },
      { name: "Agents Online Real Estate Ideas Center", url: "#" },
      { name: "Local Real Estate Forums", url: "#" },
    ],
  },
  {
    title: "Top Real Estate Conferences & Investor Events",
    desc: "Attend leading real estate conferences and networking events to connect with industry experts, learn new investment strategies, and scale your business.",
    links: [
      { name: "Council of Residential Specialists", url: "#" },
      { name: "National Association of Realtors Conference and Expo", url: "#" },
      { name: "More Real Estate Conventions and Conferences", url: "#" },
      { name: "Single Family Rental Investment Forum", url: "#" },
    ],
  },
];
return (
<div className="min-h-screen bg-white">
   <Helmet>
      <title>
         Start a Real Estate Business in USA – Real Estate Startup Guide | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Learn how to start a real estate business in the USA. Get expert guidance on registration, licensing, LLC formation, taxes, and compliance with support from The Future Perfect Global."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/start-a-business/real-estate-business"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="start real estate business USA, real estate business registration, real estate LLC USA, real estate startup guide, property business USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/real-estate-business"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/real-estate-business"
         hrefLang="x-default"
         />
      <meta name="ROBOTS" content="INDEX, FOLLOW" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Start a Real Estate Business in USA – Real Estate Startup Guide"
         />
      <meta
         property="og:description"
         content="Discover how to start a real estate business in the USA with step-by-step guidance on registration, licensing, LLC formation, and compliance."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/start-a-business/real-estate-business"
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
         content="Start a Real Estate Business in USA – The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Start a Real Estate Business in USA – Real Estate Startup"
         />
      <meta
         name="twitter:description"
         content="Planning to start a real estate business in the USA? Get expert help with registration, licensing, and compliance."
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
           "name": "Real Estate Business Setup in USA",
           "url": "https://us.thefutureperfectglobal.com/start-a-business/real-estate-business",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "Professional guidance for starting a real estate business in the USA, including registration, licensing, LLC formation, tax planning, and compliance support.",
           "areaServed": [
             "United States"
           ],
           "serviceType": [
             "Real Estate Business Registration USA",
             "Real Estate Startup Guide",
             "Business Licensing",
             "LLC Formation",
             "Compliance Support"
           ]
         }`} 
      </script>
   </Helmet>
   {/* HERO */}
   <section className="relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      alt="education"
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/40 to-cyan-800/90"></div>
  </div>

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <h1 className="text-5xl font-extrabold leading-base mb-6">
        Launch Your <span className="text-cyan-500">Real Estate</span> Business Today
      </h1>

      <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
        Whether you're buying, selling, developing, or renting properties, the real estate market offers tremendous opportunities in both residential and commercial sectors. Transform your entrepreneurial vision into a thriving business.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition transform hover:scale-105 shadow-lg"
        >
          Get Started Now
        </button>

        <button className="border border-white/40 px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition backdrop-blur">
          Learn More
        </button>
      </div>
    </div>

    {/* Right Cards */}
    <div className="grid gap-6">

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-300/50 transition shadow-xl">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-400/20 p-3 rounded-xl">
            <Building2 className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Property Development</h3>
            <p className="text-blue-100 text-sm">
              Build, renovate, and develop properties for profit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-300/50 transition shadow-xl">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-400/20 p-3 rounded-xl">
            <TrendingUp className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Investment Returns</h3>
            <p className="text-blue-100 text-sm">
              Generate income through rentals & smart investments.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-300/50 transition shadow-xl">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-400/20 p-3 rounded-xl">
            <Users className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Market Opportunities</h3>
            <p className="text-blue-100 text-sm">
              Explore residential, commercial & industrial sectors.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-16">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-12 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
        Starting a <span className='text-cyan-600'>Real Estate</span> Business
      </h1>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Learn how to start a profitable real estate business, build long-term wealth,
        and succeed in the real estate investment industry.
      </p>
    </div>

    {/* Intro Content */}
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-slate-200">
      <p className="text-slate-700 text-lg leading-relaxed mb-6">
        The world of <strong>real estate investing</strong> is one of the most profitable
        and exciting industries to enter today. Whether you plan to buy, sell,
        develop, or rent properties, the real estate business offers endless
        opportunities across both residential and commercial sectors.
      </p>

      <p className="text-slate-700 text-lg leading-relaxed">
        From generating passive income through rentals to building long-term wealth
        with property investments, this industry allows you to earn high returns,
        build a scalable business, and help individuals, families, and businesses
        find the perfect space.
      </p>
    </div>

    {/* Guide Section */}
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Real Estate Business Formation Guide
      </h2>

      <p className="text-slate-700 mb-6 leading-relaxed">
        In this guide, we’ll explore everything you need to do to set up your real
        estate investment business and maximize your chances for success. We’ll cover:
      </p>

      <ul className="grid sm:grid-cols-2 gap-4 text-slate-700">
        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          Understanding the world of real estate
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          Information on taxes and finances for your real estate investing business
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          Questions to see if you’re ready to start a real estate business
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          Hiring employees, marketing, and administration strategies
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          Choosing the best legal structure for your organization
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          Resources for your real estate business
        </li>

        <li className="flex items-start gap-3 sm:col-span-2">
          <span className="mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          Basic rules and regulations you may need to follow
        </li>
      </ul>
    </div>

    {/* Video Section */}
    <div className="mb-10">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black flex items-center justify-center">
        {/* Replace src with your video */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Real Estate Guide Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Outro */}
    <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">...and much more</h3>

      <p className="text-blue-100 leading-relaxed text-lg">
        By the time you’ve read through our complete real estate investing business
        guide, you’ll have all the information you need to set up and manage a
        thriving real estate business. Let’s get into it.
      </p>
    </div>

  </div>
</section>
 <section className="bg-cyan-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Understand the World of <span className="text-cyan-600">Real Estate</span> Investing
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore high-growth opportunities in real estate. Learn how investors
            are building wealth through smart strategies, strong market trends,
            and scalable investment models.
          </p>
        </div>

        {/* STATS GRID (PREMIUM) */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "$100T", label: "Global Property Value" },
            { value: "90%", label: "Investor Success Rate" },
            { value: "75%", label: "Diversification Importance" },
            { value: "10%", label: "Average Annual Returns" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-cyan-600">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* TWO COLUMN SECTION */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* LEFT - GROWTH */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Market Growth & Insights
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-cyan-600">✔</span>
                Real estate industry growing at 9% annually
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600">✔</span>
                72% revenue from residential sales & rentals
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600">✔</span>
                Rising demand in commercial & industrial sectors
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600">✔</span>
                Strong future growth projections worldwide
              </li>
            </ul>
          </div>

          {/* RIGHT - OPPORTUNITIES */}
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Investment Opportunities
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">Property Flipping</h4>
                <p className="text-cyan-100 text-sm">
                  Buy undervalued properties, renovate, and sell for profit.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Rental Income</h4>
                <p className="text-cyan-100 text-sm">
                  Generate consistent passive income via rentals or Airbnb.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* HOW TO START (TIMELINE STYLE) */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How to Start Investing
          </h3>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Define business goals & strategy",
              "Analyze scalability & performance needs",
              "Choose frontend & backend technologies",
              "Select database & cloud infrastructure",
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-white p-6 rounded-2xl shadow border border-gray-100 hover:shadow-lg transition"
              >
                <div className="absolute -top-4 left-4 bg-cyan-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-600 mt-4 text-base">{step}</p>
              </div>
            ))}

          </div> 
        </div>

      </div>
    </section>
   <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Questions Before You Start <span className='text-cyan-600'>Real Estate</span> Investing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Understand whether real estate entrepreneurship is right for you,
            the skills required, challenges involved, and what daily life looks like.
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* Left */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Is Real Estate Right for You?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Requires resilience & problem-solving</li>
              <li>• Strong project & deal management skills</li>
              <li>• Handle clients, contractors & deadlines</li>
              <li>• Long working hours, especially early stage</li>
              <li>• Ability to manage multiple tasks</li>
              <li>• Income may be inconsistent</li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Key Skills Required
            </h3>
            <ul className="space-y-4 text-cyan-100">
              <li>✔ Strong interpersonal & communication skills</li>
              <li>✔ Effective time & task management</li>
              <li>✔ Powerful negotiation abilities</li>
              <li>✔ Market knowledge & legal understanding</li>
            </ul>
          </div>

        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h3 className="text-3xl text-center font-bold text-gray-900 mb-6">
            Challenges in Real Estate Business
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Managing property development",
              "Handling negotiations",
              "Busy schedules & workload",
              "Client relationship management",
              "High communication demands",
              "Competitive market pressure",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Life Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            A Day in the Life
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Review property development",
              "Coordinate with contractors",
              "Client communication",
              "Negotiate deals",
              "Manage contracts & legal work",
              "Organize property showings",
              "Prepare offers & documents",
              "Handle business operations",
              "Consult lawyers & advisors",
            ].map((task, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-gray-600 hover:bg-cyan-50 transition"
              >
                {task}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
   <section className="bg-cyan-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Register Your <span className='text-cyan-600'>Real Estate</span> Business
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Choose the right legal structure to protect your assets, optimize taxes,
            and scale your real estate investment business effectively.
          </p>
        </div>

        {/* Entity Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {[
            {
              title: "Sole Proprietorship",
              desc: "Basic structure with no legal protection. Not recommended for real estate investments.",
            },
            {
              title: "LLC",
              desc: "Most popular option. Protects personal assets and offers flexibility and simplicity.",
              highlight: true,
            },
            {
              title: "Series LLC",
              desc: "Allows multiple mini LLCs under one umbrella. Ideal for multiple properties.",
            },
            {
              title: "S Corporation",
              desc: "Complex structure with tax benefits but higher compliance requirements.",
            },
            {
              title: "C Corporation",
              desc: "Best for large enterprises. Not suitable for most small investors.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border border-gray-200 ${
                item.highlight
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-white text-gray-700"
              } hover:shadow-xl transition`}
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* Series LLC Highlight */}
        <div className="bg-white rounded-3xl p-6 shadow mb-12 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Why Series LLC is Powerful for Real Estate
          </h3>
          <p className="text-gray-600 mb-6">
            A Series LLC acts as an umbrella structure that allows you to separate
            multiple properties into individual liability units, reducing risk and
            improving portfolio management.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Delaware",
              "Illinois",
              "Iowa",
              "Nevada",
              "Oklahoma",
              "Tennessee",
              "Texas",
              "Utah",
            ].map((state, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {state}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Business Today 🚀
          </h3>
          <p className="text-gray-600 mb-6">
            Build a strong foundation with the right legal structure and scale your
            real estate investment business with confidence.
          </p>

          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-8 py-3 rounded-xl hover:bg-cyan-700 transition shadow-lg">
            Get Started
          </button>
        </div>

      </div>
    </section>
<section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Start and Grow Your <span className='text-cyan-600'>Real Estate</span> Business with Ease
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            After setting up your real estate investment business legally, it’s important to establish the necessary operations and structure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-gray-50 hover:bg-cyan-600 hover:text-white p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="mb-4 text-cyan-600 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm opacity-80">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Real Estate Networking <span className='text-cyan-500'>Resources</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the best platforms, forums, and events to connect with real estate professionals, investors, and industry experts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm mb-5">
                {section.desc}
              </p>

              <ul className="space-y-3">
                {section.links.map((link, i) => (
  <li key={i}>
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between text-sm text-gray-200 hover:text-blue-400 transition"
    >
      {link.name}
      <span className="ml-2">→</span>
    </a>
  </li>
))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  {/* Tools & Software */}
      <section className="py-16 px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Useful Online Tools for <span className='text-cyan-600'>Real Estate</span> Business
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
   <section className="py-16 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-5xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Build Your Real Estate Empire?
         </h2>
         <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Starting a real estate business is an exciting opportunity with tremendous growth potential. We're here to support you at every stage of your journey.
         </p>
         <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
               <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
               <span className="text-blue-50">{benefit}</span>
            </div>
            ))}
         </div>
         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
               Start Your Business Today
               <ArrowRight className="w-5 h-5" />
            </button>
            <a href="/contact" className="border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-lg font-semibold transition">
            Schedule a Consultation
            </a>
         </div>
         <p className="text-blue-100 text-sm">
            Support available Monday–Friday, 9am–6pm CST
         </p>
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