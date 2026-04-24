import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  Beer,
  Users,
  TrendingUp,
  MapPin,
  CheckCircle,
  Wrench,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BarNightclub() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const stats = [
    { value: '$27B', label: 'Annual Industry Revenue' },
    { value: '65,000+', label: 'Bars & Clubs in the U.S.' },
    { value: '400K+', label: 'Industry Employees' },
    { value: '200M+', label: 'Beer Barrels Sold Yearly' }
  ];
  
  const points = [
    "Understanding the bar & nightclub industry trends",
    "Bar startup costs, taxes & financial planning",
    "How to start a bar business successfully",
    "Liquor licenses, permits & legal compliance",
    "Choosing the right business structure (LLC, Corporation, etc.)",
    "Bar marketing strategies & brand positioning",
    "Daily operations & business administration",
    "Finding resources, suppliers & vendors",
    "Business planning & revenue growth strategies",
    "Hiring staff & managing employees efficiently",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center mb-8">
            <Beer className="w-16 h-16 text-cyan-500" />
          </div>

          <h1 className="text-5xl font-extrabold text-center mb-6 tracking-tight">
            Launch Your Dream <span className="text-cyan-400">
              Bar or Nightclub
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Your comprehensive roadmap to creating a thriving venue where people gather, celebrate, and create unforgettable memories.
          </p>

          <div className="flex justify-center">
  <button
    onClick={() => {
      setSelectedBusinessType('');
      setIsModalOpen(true);
    }}
    className="group px-8 py-4 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
  >
    Get Started Free
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 text-gray-900 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Ultimate Guide to <span className="text-cyan-600">Starting Your Bar or Nightclub</span>
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            Planning to open a <strong>bar, pub, or nightclub</strong>? 
            Success requires more than great drinks — manage <strong>licenses, staff, finances, and marketing</strong> efficiently.
          </p>

          <p className="text-gray-600 mb-8">
            Our comprehensive guide helps you learn <strong>how to start a profitable bar business</strong>, handle operations smoothly, and grow your revenue. 
            Whether it’s a cocktail lounge, sports bar, or nightclub, this guide has you covered.
          </p>

          <div className="space-y-4">
            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-cyan-500 mt-1" size={20} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARD UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
        >

            <img 
  src="https://images.unsplash.com/photo-1659626672787-f907aea3bc6a?q=80" 
  alt="Confident bar owner smiling at a modern, welcoming bar with patrons enjoying drinks" 
  className="w-full h-auto rounded-xl shadow-lg object-cover"
/>

          <h2 className="mt-4 text-2xl font-bold mb-4">
            Start Your Bar Business Today
          </h2>

          <p className="text-gray-600 mb-6">
            Get step-by-step guidance to launch and grow a 
            <strong> profitable bar, pub, or nightclub</strong> business.
          </p>

          <ul className="space-y-3 mb-6 text-gray-700">
            <li>✔ Bar business plan template</li>
            <li>✔ Licensing & compliance checklist</li>
            <li>✔ Marketing & branding strategies</li>
            <li>✔ Hiring & operations guide</li>
          </ul>

          <button className="w-full bg-cyan-500 text-white font-semibold py-3 rounded-xl hover:bg-cyan-400 transition duration-300 shadow-md">
            Get Started Now
          </button>
        </motion.div>

      </div>
    </section>

    <section className="bg-cyan-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          <span className='text-cyan-600'>Bar & Nightclub</span> Industry Insights
        </h2>
        <p className="text-gray-700 mb-12 leading-relaxed">
          The U.S. bar and nightclub industry is a dynamic market generating over 
          <span className="font-semibold"> $25 billion in annual revenue</span>. With steady growth of 
          <span className="font-semibold"> 1.1–1.4% per year</span> and over 
          <span className="font-semibold"> 400,000 people employed</span>, there’s a thriving opportunity for entrepreneurs. Every year, Americans consume roughly 
          <span className="font-semibold"> 200 million barrels of beer</span>, highlighting a strong demand for quality bars and clubs.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold text-cyan-600">65,000+</p>
            <p className="mt-2 text-gray-600">Bars & Clubs in the U.S.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold text-cyan-600">6–7</p>
            <p className="mt-2 text-gray-600">Employees per establishment</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold text-cyan-600">42%</p>
            <p className="mt-2 text-gray-600">Beer sales share</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-3xl font-bold text-cyan-600">80%</p>
            <p className="mt-2 text-gray-600">Small businesses with &lt;10 employees</p>
          </div>
        </div>

        {/* Local Market */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Understand Your Local Bar Market
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Success in the bar and nightclub industry depends on understanding your local market. Assess your neighborhood’s competition, identify underserved niches, and target customers with disposable income seeking quality entertainment. 
            Choosing the right location can make or break your bar or club business.
          </p>
        </div>

        {/* Types of Bars / Clubs */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Bar & Club Concepts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Brewhouse & Pub", desc: "Craft your own beer and serve it fresh to patrons." },
              { title: "Cocktail Bar", desc: "Specialize in creative spirits, mixers, and signature cocktails." },
              { title: "Nightclub / Dance Club", desc: "Offer a vibrant space for music and dancing." },
              { title: "Themed Bar", desc: "Create a unique experience with Irish, Mexican, or British pub themes." },
              { title: "Wine Bar", desc: "Feature an extensive selection of premium wines." },
              { title: "Sports Bar", desc: "Attract fans with live games, big screens, and drinks." },
              { title: "Live Music & Comedy Bar", desc: "Host performances to entertain and draw crowds." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-cyan-600 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            <span className='text-cyan-600'>Bar & Nightclub Business:</span> Challenges, Profitability & Ownership Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what it takes to successfully run a bar or nightclub, from licensing and marketing
            to customer experience and financial management.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Column */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Is Owning a Bar or Club Profitable?
            </h2>
            <p className="text-gray-600 mb-4">
              The bar and nightclub industry offers strong profit potential, but success depends on 
              effective business management, brand positioning, and customer retention strategies.
              Unlike many industries, no major corporations dominate the market, creating opportunities 
              for independent bar owners.
            </p>
            <p className="text-gray-600 mb-4">
              However, profit margins are typically tight. To succeed, owners must focus on delivering 
              a unique nightlife experience, building loyal customers, and executing smart marketing campaigns.
            </p>
            <p className="text-gray-600">
              Due to low barriers to entry, competition is high. Poorly managed venues often fail quickly,
              while well-run bars thrive through consistency and strong operational control.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Key Challenges of Running a Bar or Nightclub
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Long working hours including late nights and early mornings</li>
              <li>• Managing staff, training employees, and handling high turnover</li>
              <li>• Strict alcohol licensing and legal compliance requirements</li>
              <li>• Local zoning laws and noise regulations</li>
              <li>• Constant competition from new bars and clubs</li>
              <li>• Maintaining consistent customer service and experience</li>
            </ul>
          </div>
        </div>

        {/* Licensing Section */}
        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Licensing, Regulations & Legal Requirements
          </h2>
          <p className="text-gray-300 mb-3">
            Opening a bar or nightclub requires obtaining the correct alcohol licenses, food permits,
            and entertainment permits. These vary significantly by location and can be costly and time-consuming.
          </p>
          <p className="text-gray-300">
            Business owners must also comply with local laws regarding operating hours, safety standards,
            and community regulations. Failure to meet these requirements can lead to fines or closure.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-center text-cyan-600 mb-10">
            Essential Skills for Successful Bar & Club Owners
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              {
                title: "Market Research",
                desc: "Understand customer preferences and nightlife trends."
              },
              {
                title: "Employee Management",
                desc: "Hire, train, and retain skilled bartenders and staff."
              },
              {
                title: "Marketing Strategy",
                desc: "Promote your venue and attract loyal customers."
              },
              {
                title: "Financial Management",
                desc: "Control costs and maximize profitability."
              },
              {
                title: "Negotiation",
                desc: "Secure the best supplier and vendor deals."
              },
              {
                title: "Customer Experience",
                desc: "Deliver exceptional service to build loyalty."
              },
              {
                title: "Time Management",
                desc: "Balance long working hours efficiently."
              },
              {
                title: "Operations Management",
                desc: "Oversee daily business activities smoothly."
              }
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-cyan-50 border border-cyan-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Is a Bar or Nightclub Business Right for You?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Running a successful bar or nightclub requires passion, resilience, and strong business skills.
            If you can manage operations, deliver a standout experience, and adapt to challenges, this industry
            offers exciting opportunities for growth and profitability.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-slate-800 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-white mb-8">
            How to Plan a Successful <span className='text-cyan-600'>Bar & Nightclub Business</span>
          </h1>
          <p className="text-lg text-gray-100 mx-auto mb-6">
            Build a profitable bar or nightclub with a strong business plan, market research,
            and a unique concept that attracts loyal customers.
          </p>
          <p className="text-gray-100 text-lg leading-relaxed">
            Starting a bar or nightclub requires strategic planning, financial forecasting, and 
            deep market understanding. Before launching, you must validate your concept, analyze 
            demand, and ensure your business idea is both profitable and sustainable.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12">
          
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-cyan-500 mb-10 text-center">
          Market Research & Business Validation for Bars and Clubs
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Analyze Local Market Demand
            </h3>
            <p className="text-gray-600 text-sm">
              Study local demographics, tourism trends, and nightlife demand. 
              A bar’s success depends heavily on location, foot traffic, and 
              the preferences of your target audience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Conduct Competitive Analysis
            </h3>
            <p className="text-gray-600 text-sm">
              Research existing bars and nightclubs in your area. Identify their strengths,
              weaknesses, pricing strategies, and customer base to find opportunities
              for differentiation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Validate Your Business Concept
            </h3>
            <p className="text-gray-600 text-sm">
              Test your bar or nightclub idea before launch. Ensure there’s real demand
              for your theme, drinks, entertainment, and overall customer experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Gather Customer Insights
            </h3>
            <p className="text-gray-600 text-sm">
              Talk to potential patrons to understand their expectations, spending habits,
              and preferences. Discover gaps in the market you can fill.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Define Your Unique Selling Proposition (USP)
            </h3>
            <p className="text-gray-600 text-sm">
              Stand out with a unique concept — whether it’s craft cocktails, themed nightlife,
              live music, or exclusive experiences that attract repeat customers.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Engage with Industry Communities
            </h3>
            <p className="text-gray-600 text-sm">
              Connect with bar owners, hospitality professionals, and business groups
              to gain insights, share ideas, and stay updated on industry trends.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 bg-gray-900 text-white rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Build a Strong Bar Business Plan
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A well-researched business plan is the foundation of a successful bar or nightclub.
            By understanding your market, validating your concept, and defining your unique value,
            you can launch with confidence and maximize your chances of long-term success.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            <span className='text-cyan-600'>Bar & Nightclub Business</span> Model and Financial Projections Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to build a profitable bar or nightclub with a strong business model,
            revenue strategy, and accurate financial forecasting.
          </p>
        </div>

        {/* Business Model Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Define Your Bar or Club Business Model
            </h2>
            <p className="text-gray-600 mb-4">
              A solid bar or nightclub business model outlines how your venue generates revenue,
              attracts customers, and delivers a memorable nightlife experience. Establishing
              this early helps you launch faster and operate efficiently from day one.
            </p>
            <p className="text-gray-600">
              Your business model may include multiple revenue streams such as drink sales,
              food service, event hosting, VIP experiences, and entertainment offerings.
              A well-defined strategy ensures consistent cash flow and long-term growth.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Revenue Streams in the Nightlife Industry
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Alcohol and beverage sales</li>
              <li>• Food and bar snacks</li>
              <li>• Ticketed events and live entertainment</li>
              <li>• VIP tables and bottle service</li>
              <li>• Private parties and venue bookings</li>
              <li>• Brand partnerships and promotions</li>
            </ul>
          </div>

        </div>

        {/* Financial Projections Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 shadow-lg mb-14">
          <h2 className="text-2xl font-bold mb-4">
            Financial Projections & Profitability Planning
          </h2>
          <p className="text-gray-300 mb-4">
            Financial projections are essential for understanding the profitability of your
            bar or nightclub. Estimate your expected revenue, operating costs, and profit margins
            to ensure your business is financially viable.
          </p>
          <p className="text-gray-300">
            Forecast your income over multiple timeframes — monthly, quarterly, yearly, and
            long-term — to guide decision-making and business growth strategies.
          </p>
        </div>

        {/* Forecast Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Monthly Forecast",
              desc: "Track short-term sales, expenses, and cash flow performance."
            },
            {
              title: "Quarterly Planning",
              desc: "Analyze trends and adjust pricing, promotions, and staffing."
            },
            {
              title: "Annual Projections",
              desc: "Estimate yearly revenue, profitability, and growth targets."
            },
            {
              title: "Long-Term Growth",
              desc: "Plan expansion, reinvestment, and scaling opportunities."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* Financial Planning Details */}
        <div className="mt-14 grid md:grid-cols-2 gap-10">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Key Financial Questions to Answer
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• What are your expected sales and revenue streams?</li>
              <li>• What are your startup and operating costs?</li>
              <li>• What profit margins can you realistically achieve?</li>
              <li>• How much will you reinvest into business growth?</li>
              <li>• What salary will you pay yourself and your team?</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Smart Financial Strategy Tips
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Keep operating costs under tight control</li>
              <li>• Monitor inventory and reduce waste</li>
              <li>• Use data to optimize pricing and promotions</li>
              <li>• Maintain healthy cash reserves</li>
              <li>• Continuously evaluate profitability metrics</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Build a Profitable Bar or Nightclub Business
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A strong business model combined with accurate financial projections is the key
            to long-term success in the nightlife industry. Plan strategically, monitor performance,
            and adapt to maximize your profitability.
          </p>
        </div>

      </div>
    </section>


     <section className="bg-cyan-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl max-w-6xl mx-auto font-extrabold leading-xl text-gray-900 mb-6">
            How to Write a Winning <span className='text-cyan-600'>Bar & Nightclub</span> Business Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Create a professional bar business plan with clear goals, financial projections,
            and marketing strategies to launch and grow a profitable nightlife business.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            A well-structured business plan is essential for any bar or nightclub startup.
            It helps you define your vision, attract investors, secure funding, and guide
            your operations. A strong plan ensures your business is strategically positioned
            for long-term success in the competitive nightlife industry.
          </p>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-cyan-600 text-center mb-10">
          Key Components of a Bar or Nightclub Business Plan
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Executive Summary",
              desc: "Summarize your bar or nightclub concept, vision, and key highlights to give investors a clear overview of your business plan."
            },
            {
              title: "Business Goals & Objectives",
              desc: "Define your short-term and long-term goals, including revenue targets, growth plans, and market positioning."
            },
            {
              title: "Business Model & Financial Projections",
              desc: "Outline your revenue streams, pricing strategy, cost structure, and detailed financial forecasts for profitability."
            },
            {
              title: "Target Market & Customer Base",
              desc: "Identify your ideal audience, customer demographics, and nightlife preferences to tailor your offerings effectively."
            },
            {
              title: "Marketing & Promotion Strategy",
              desc: "Plan how you will attract and retain customers through digital marketing, social media, events, and branding."
            },
            {
              title: "Operations & Management Plan",
              desc: "Detail your daily operations, staffing structure, supplier management, and overall business workflow."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="absolute -top-4 left-6 bg-gray-900 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Build a Professional Bar Business Plan That Gets Results
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A complete and well-researched business plan is your roadmap to success.
            It helps you stay focused, secure investment, and confidently launch your
            bar or nightclub in a competitive market.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Start planning today and turn your bar or nightclub idea into a profitable business.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
            Choose the Best Legal Structure for Your <span className='text-cyan-600'>Bar & Nightclub Business</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Learn how to register your bar or nightclub, select the right business entity,
            and protect your assets with the most suitable legal structure.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Selecting the right business structure is a critical step when starting a bar or nightclub.
            Your choice will impact taxes, liability protection, legal compliance, and long-term growth.
            Understanding your options ensures your business is set up for success from day one.
          </p>
        </div>

        {/* Business Structures */}
        <h2 className="text-3xl font-extrabold text-cyan-600 text-center mb-10">
          Types of Business Structures for Bars and Nightclubs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Sole Proprietorship",
              desc: "The simplest business structure with minimal setup. However, it offers no personal liability protection, making it risky for bar or nightclub owners."
            },
            {
              title: "Limited Liability Company (LLC)",
              desc: "The most popular choice for bar businesses. An LLC provides liability protection, flexible management, and simple setup, making it ideal for startups."
            },
            {
              title: "Series LLC",
              desc: "A specialized LLC structure available in select states. It allows multiple business units with separate liabilities under one parent entity."
            },
            {
              title: "S Corporation (S Corp)",
              desc: "A more complex structure that offers potential tax advantages but requires stricter compliance and may not suit small bar startups."
            },
            {
              title: "C Corporation (C Corp)",
              desc: "A large-scale business structure designed for corporations. It involves complex regulations and is typically unnecessary for most bar owners."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-cyan-50 border border-cyan-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* Recommendation Section */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Why an LLC is the Best Choice for Most Bar & Nightclub Businesses
          </h2>
          <p className="text-gray-300 mb-3">
            A Limited Liability Company (LLC) is widely recommended for bar and nightclub startups
            due to its balance of simplicity, flexibility, and legal protection. It separates your
            personal assets from your business liabilities, reducing financial risk.
          </p>
          <p className="text-gray-300">
            LLC formation is typically fast and cost-effective, making it the ideal structure for
            entrepreneurs entering the hospitality and nightlife industry.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-extrabold text-cyan-600 text-center mb-10">
            How to Register Your Bar or Nightclub Business
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Choose a Business Name",
                desc: "Select a unique and memorable name that reflects your brand."
              },
              {
                title: "Register Your Entity",
                desc: "File the necessary documents with your local or state authorities."
              },
              {
                title: "Apply for Licenses",
                desc: "Obtain alcohol licenses, permits, and regulatory approvals."
              },
              {
                title: "Set Up Compliance",
                desc: "Ensure you meet all legal, tax, and operational requirements."
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-cyan-50 border border-cyan-100 rounded-xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Start Your Bar or Nightclub Business Today
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choosing the right legal structure is the foundation of a successful business.
            Register your bar or nightclub properly, protect your assets, and set yourself up
            for long-term growth and profitability.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-gray-950 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold mb-4">
            Setting Up Your Bar or Nightclub for Success
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Build a high-performing bar or nightclub with the right location, marketing strategy,
            skilled staff, and essential equipment to deliver an unforgettable customer experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Location */}
          <div className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition border border-gray-800">
            <h3 className="text-xl font-bold mb-3 text-cyan-500">
              Prime Location Strategy
            </h3>
            <p className="text-gray-400 text-base">
              Choosing the right bar or nightclub location is critical. High foot traffic,
              strong nightlife demand, and visibility can significantly impact your revenue
              and long-term success. Prioritize areas with consistent customer flow.
            </p>
          </div>

          {/* Marketing */}
          <div className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition border border-gray-800">
            <h3 className="text-xl font-bold mb-3 text-cyan-500">
              Nightclub Marketing & Branding
            </h3>
            <p className="text-gray-400 text-base">
              Establish a strong online presence with a professional website, social media
              marketing, and branded assets. Effective digital marketing and promotions are
              essential to attract and retain loyal customers.
            </p>
          </div>

          {/* Employees */}
          <div className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition border border-gray-800">
            <h3 className="text-xl font-bold mb-3 text-cyan-500">
              Hiring & Managing Staff
            </h3>
            <p className="text-gray-400 text-base">
              Recruit skilled bartenders, servers, and support staff. The hospitality industry
              often experiences high staff turnover, so continuous hiring and training are key
              to maintaining service quality.
            </p>
          </div>

          {/* Equipment */}
          <div className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition border border-gray-800">
            <h3 className="text-xl font-bold mb-3 text-cyan-500">
              Bar Equipment & Inventory
            </h3>
            <p className="text-gray-400 text-base">
              Invest in quality furniture, fixtures, and bar equipment. Build a strong inventory
              of beverages and supplies, and consider specialized equipment like commercial
              kitchens or brewing systems if required.
            </p>
          </div>

        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-cyan-500 mb-4">
            Create a High-Performance Nightlife Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From selecting the perfect location to building a strong team and investing in
            the right equipment, every detail matters. A well-executed setup ensures your
            bar or nightclub stands out in a competitive market and delivers consistent profitability.
          </p>
        </div>

      </div>
    </section>

     <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Bar & Nightclub Laws, Licenses, Taxes and Compliance Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understand liquor license requirements, legal regulations, business insurance,
            and tax obligations to operate your bar or nightclub legally and successfully.
          </p>
        </div>

        {/* Licensing Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">

          {[
            {
              title: "Local Licenses & Permits",
              desc: "City or county authorities require permits to operate a bar or nightclub. These include alcohol serving laws, operating hours, and zoning compliance."
            },
            {
              title: "State Regulations",
              desc: "State governments regulate liquor licenses, business registration, and compliance rules. Check your Secretary of State or licensing authority."
            },
            {
              title: "Federal Requirements",
              desc: "Federal agencies provide guidelines for alcohol distribution, taxation, and regulatory compliance for bar and nightclub businesses."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* Key Compliance Areas */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Key Legal Requirements for Bars and Nightclubs
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
            <li>• Liquor licenses for beer, wine, and spirits</li>
            <li>• Accurate inventory and supplier record keeping</li>
            <li>• Food service permits (if applicable)</li>
            <li>• Zoning and location compliance laws</li>
            <li>• Alcohol regulatory bodies (TTB & ABC agencies)</li>
            <li>• Entertainment, advertising, and staffing regulations</li>
          </ul>
        </div>

        {/* Insurance Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">

          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Workers’ Compensation Insurance
            </h2>
            <p className="text-gray-600">
              Protect your employees with workers’ compensation insurance. It covers workplace
              injuries, medical costs, lost wages, and rehabilitation. Requirements vary by state
              but are essential for bar and nightclub businesses.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              General Liability Insurance
            </h2>
            <p className="text-gray-600">
              Safeguard your business from lawsuits, property damage, and customer-related incidents.
              This insurance is critical for nightlife venues where customer interaction is constant.
            </p>
          </div>

        </div>

        {/* Taxes Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 shadow-lg mb-14">
          <h2 className="text-2xl font-bold mb-6">
            Taxes for Bar & Nightclub Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">

            <ul className="space-y-3">
              <li>• Register your business with the IRS</li>
              <li>• Pay payroll taxes for employees</li>
              <li>• Self-employment tax (~15%) on earnings</li>
              <li>• State income tax (if applicable)</li>
            </ul>

            <ul className="space-y-3">
              <li>• Federal income tax on profits</li>
              <li>• Sales tax on drinks and services</li>
              <li>• Corporation tax (for C Corps)</li>
              <li>• Additional taxes based on operations</li>
            </ul>

          </div>

          <p className="mt-6 text-gray-400">
            Tip: Set aside approximately 30% of your revenue to cover tax obligations and avoid
            financial stress during filing periods.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Stay Compliant and Protect Your Bar Business
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding legal requirements, licenses, insurance, and taxes is essential for
            running a successful bar or nightclub. Stay compliant, reduce risks, and build a
            sustainable and profitable business.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-gray-950 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold mb-4">
            Bar & Nightclub Compliance: Ongoing Legal & Tax Requirements
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Stay compliant and keep your bar or nightclub running smoothly by managing
            annual reports, tax filings, license renewals, and financial obligations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Annual Report Filing",
              desc: "Most businesses must file an annual report to update ownership details and maintain legal standing with state authorities."
            },
            {
              title: "Estimated Tax Payments",
              desc: "Pay quarterly estimated taxes based on projected earnings to avoid penalties and manage cash flow effectively."
            },
            {
              title: "License & Permit Renewal",
              desc: "Renew liquor licenses, business permits, and regulatory approvals annually to remain compliant with local laws."
            },
            {
              title: "Annual Tax Filing",
              desc: "Submit your business tax returns each year to report income, expenses, and overall profitability."
            },
            {
              title: "Payroll & Sales Tax Compliance",
              desc: "Regularly pay payroll taxes for employees and collect and remit sales tax on drinks and services."
            },
            {
              title: "Tax Preparation & Accounting",
              desc: "Work with an accountant to prepare accurate financial records, ensure compliance, and optimize your tax strategy."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-sm text-gray-500 mb-2">
                Requirement {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Keep Your Bar Business Compliant & Profitable
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ongoing compliance is essential for long-term success in the nightlife industry.
            By staying on top of tax deadlines, license renewals, and legal requirements,
            you can avoid penalties and focus on growing your bar or nightclub business.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Hiring, Training & Managing Staff for Your Bar or Nightclub
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to hire bar staff, train bartenders, manage payroll, and stay compliant
            with employment laws to run a successful and profitable nightlife business.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Running a bar or nightclub requires a strong team. From hiring employees to training
            bartenders and managing payroll, effective staff management is essential. Due to high
            turnover in the hospitality industry, you’ll need a reliable hiring process and ongoing
            training to maintain service quality and profitability.
          </p>
        </div>

        {/* Staff Insights */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">

          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Hiring & Retaining Bar Staff
            </h2>
            <p className="text-gray-600 mb-3">
              The bar and nightclub industry often experiences high employee turnover due to
              low base wages supplemented by tips. This means ongoing recruitment, interviewing,
              and onboarding are critical parts of your operations.
            </p>
            <p className="text-gray-600">
              Focus on hiring trustworthy, reliable staff who can deliver excellent customer service
              and contribute positively to your venue’s atmosphere.
            </p>
          </div>

          <div className="bg-white border border-gray-200  rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Bartender Training & Performance
            </h2>
            <p className="text-gray-600 mb-3">
              Bartenders directly impact your profitability. Speed, accuracy, and efficiency
              in pouring drinks are essential for maximizing revenue and minimizing waste.
            </p>
            <p className="text-gray-600">
              Proper training helps prevent over-pouring, reduces losses, and ensures consistent
              quality service across your business.
            </p>
          </div>

        </div>

        {/* Compliance Grid */}
        <h2 className="text-3xl font-extrabold text-cyan-600 text-center mb-10">
          Employee Compliance & Legal Requirements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Report New Hires",
              desc: "Notify state authorities when you hire new employees to comply with employment regulations."
            },
            {
              title: "Employee Payroll",
              desc: "Pay staff wages and manage tip-based income structures common in bars and nightclubs."
            },
            {
              title: "Workers’ Compensation Insurance",
              desc: "Protect employees with coverage for workplace injuries, medical costs, and lost wages."
            },
            {
              title: "Employment Eligibility Verification",
              desc: "Ensure all employees are legally authorized to work and complete necessary documentation."
            },
            {
              title: "Employer Identification Number (EIN)",
              desc: "Register for an EIN with the IRS to manage payroll taxes and business tax filings."
            },
            {
              title: "Tax Withholding & Payroll Taxes",
              desc: "Withhold income tax and pay employer payroll taxes to stay compliant with regulations."
            },
            {
              title: "Workplace Compliance & Safety",
              desc: "Follow labor laws, provide contracts, ensure safety standards, and meet OSHA requirements."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Build a Strong Team for Your Bar Business
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hiring the right employees, providing proper training, and staying compliant with labor
            laws are essential for long-term success. A well-managed team ensures better service,
            higher profits, and a stronger brand reputation.
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Beer className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Launch Your Venue?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Starting a bar or nightclub is challenging but incredibly rewarding for those with passion, dedication, and a solid plan. Focus on location, customer experience, and building a unique atmosphere that keeps people coming back.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 rounded-xl p-6">
              <MapPin className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Perfect Location</h3>
              <p className="text-slate-400 text-sm">Find the right spot in your market</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Users className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Great Team</h3>
              <p className="text-slate-400 text-sm">Hire and train excellent staff</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <TrendingUp className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Smart Planning</h3>
              <p className="text-slate-400 text-sm">Execute your business strategy</p>
            </div>
          </div>

          <p className="text-slate-400">
            With the right preparation, your bar or nightclub can become the heart of your community - a place where memories are made and relationships are built.
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
