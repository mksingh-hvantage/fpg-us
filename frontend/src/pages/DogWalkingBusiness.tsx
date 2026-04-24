import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { TrendingUp, Users, Shield, MapPin, Briefcase, Target, CheckCircle, DollarSign, PawPrint, BarChart3, FileText, Building2, ShieldCheck, Code2, Megaphone, Wallet, FileCheck, Landmark, Percent, Car, Calculator, CalendarCheck, CreditCard, Receipt, RefreshCcw, ExternalLink, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
export default function DogWalkingBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const stats = [
    {
      value: "20M+",
      label: "Dogs in U.S. Households",
      desc: "Millions of dog owners actively seek reliable pet care services like dog walking and pet sitting.",
    },
    {
      value: "$70B+",
      label: "Annual Pet Industry Spending",
      desc: "Pet owners spend billions every year on food, healthcare, grooming, and boarding services.",
    },
    {
      value: "$6B+",
      label: "Grooming & Boarding Market",
      desc: "A rapidly growing segment with high demand for premium pet care and services.",
    },
  ];

  const points = [
    "Pet owners spend over $130 per year on dog walking, pet sitting, and kennel services",
    "The average annual cost of owning a dog is around $1,200",
    "High-income households contribute to over 60% of total pet care spending",
  ];
   const dailyTasks = [
    "Visit pet owners’ homes and build strong relationships with clients and their pets",
    "Understand each pet’s behavior, personality, likes, and dislikes",
    "Track medical, dietary, and special care requirements for every dog",
    "Manage your daily schedule to handle multiple clients efficiently",
    "Take dogs on regular walks and ensure proper exercise routines",
    "Keep pets engaged, safe, and well-fed throughout the day",
  ];

  const skills = [
    "Strong knowledge of dog behavior and pet handling techniques",
    "Ability to manage multiple dogs safely in different environments",
    "Excellent communication and customer service skills",
    "Time management and punctuality for client appointments",
    "Flexible schedule to adapt to pet owner needs",
    "Comfort working outdoors in all weather conditions",
    "Ability to handle pet emergencies calmly and responsibly",
    "Willingness to manage pet hygiene and daily care routines",
  ];
  const businessTypes = [
    {
      title: "Dog Walking Business",
      description:
        "Starting a dog walking business is one of the easiest low-investment pet care business ideas. It requires minimal equipment, strong time management, and a love for dogs. With growing demand, dog walking services offer consistent income and flexible working hours.",
    },
    {
      title: "Pet Sitting Business",
      description:
        "A pet sitting business allows you to care for pets while owners are away. Services can include home visits, overnight stays, feeding, and companionship. You can also combine pet sitting with dog walking to increase revenue streams.",
    },
    {
      title: "Dog Daycare, Boarding & Kennels",
      description:
        "Dog daycare and boarding services are ideal for entrepreneurs looking to scale their pet care business. Provide safe, supervised environments for dogs during the day or overnight stays, meeting the needs of busy pet owners.",
    },
    {
      title: "Dog Grooming Business",
      description:
        "A dog grooming business focuses on pet hygiene and appearance, including bathing, haircuts, nail trimming, and styling. You can operate from a physical location or offer mobile grooming services for added convenience.",
    },
  ];
return (
<div className="min-h-screen bg-white">
   <header className="relative text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507146426996-ef05306b995a')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/70 to-teal-600/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          How to Start a Profitable<br />Dog Walking Business
        </h1>

        {/* SEO Optimized Paragraph */}
        <p className="text-xl md:text-2xl mb-10 text-cyan-50 max-w-3xl mx-auto">
          Learn how to start a dog walking business with low investment and turn your love for pets into a successful income stream. Tap into the fast-growing pet care industry and build a flexible, high-demand business.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }}
            className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Start Your Dog Walking Business
          </button>

          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-700 transition">
            Explore Business Guide
          </button>
        </div>
      </div>
    </header>
   <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Dog Walking Business Opportunity & Startup Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto">
            Discover how to start a dog walking or pet sitting business with low investment. 
            The pet care industry is booming, creating high demand for reliable, professional 
            pet services like dog walking, pet sitting, grooming, and daycare.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100 p-6 rounded-2xl">
            <TrendingUp className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Fast-Growing Pet Industry
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Millions of pet owners are actively searching for trusted dog walkers 
              and pet sitters, making this one of the fastest-growing small business opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-cyan-100 p-6 rounded-2xl">
            <DollarSign className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Low Investment, High Profit Potential
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Start a dog walking business with minimal startup costs while generating 
              consistent income through recurring clients and premium pet care services.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 border border-cyan-100 p-6 rounded-2xl">
            <Users className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Loyal & Repeat Customers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Pet owners value trust and reliability, allowing you to build long-term 
              relationships and recurring revenue streams.
            </p>
          </div>
        </div>

        {/* Guide Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-3xl p-10 lg:p-14 shadow-xl">
          
          <h3 className="text-3xl font-bold mb-6 text-center">
            Complete Dog Walking & Pet Sitting Business Guide
          </h3>

          <p className="text-lg text-cyan-50 max-w-3xl mx-auto text-center mb-10">
            Turn your love for animals into a profitable pet care business. From dog walking 
            and pet sitting to grooming and daycare services, learn how to build a successful 
            business step-by-step with expert guidance, proven strategies, and industry insights.
          </p>

          {/* Checklist */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {[
              "Why starting a dog walking or pet sitting business is a profitable idea",
              "How to choose the best business structure for your pet care company",
              "Identify if a dog-related business is the right fit for you",
              "Top dog business ideas including grooming, daycare, and kennels",
              "Validate your business idea and demand in your local market",
              "Create a winning dog walking business plan",
              "Set up your business: location, equipment, staff, licenses & taxes",
              "Find communities, forums, and networking groups for support",
              "Best software tools for managing your pet care business",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-cyan-50">{item}</span>
              </div>
            ))}
          </div>

          {/* Trust Line */}
          <p className="text-center text-cyan-100 mt-10 max-w-2xl mx-auto">
            Trusted by over <strong>1,000,000+ entrepreneurs</strong> since 2004, 
            helping individuals launch and grow successful small businesses worldwide.
          </p>
        </div>

      </div>
    </section>
    <section className="py-16 bg-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Why Start a Dog Walking or Pet Sitting Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The pet care industry is booming as pets are treated like family members. 
            Starting a dog walking or pet sitting business offers a low-cost, high-demand 
            opportunity to build a profitable and flexible income stream.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-extrabold text-cyan-600 mb-2">
                {item.value}
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {item.label}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-3xl p-10 lg:p-14 shadow-xl">
          
          <h3 className="text-3xl font-bold mb-6 text-center">
            Key Pet Industry Insights & Opportunities
          </h3>

          <p className="text-lg text-cyan-50 max-w-3xl mx-auto text-center mb-10">
            Dog walking, pet sitting, and related services are among the best 
            low-investment business ideas. With increasing pet ownership and spending, 
            this industry offers strong growth potential and recurring income opportunities.
          </p>

          {/* Bullet Points */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-cyan-50">{point}</span>
              </div>
            ))}
          </div>

          {/* Closing */}
          <p className="text-center text-cyan-100 mt-10 max-w-2xl mx-auto">
            If you love animals and want to start a profitable small business, 
            a dog walking or pet sitting service is one of the easiest ways to enter 
            the booming pet care market.
          </p>
        </div>

        {/* Next Section Intro */}
        <div className="mt-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Is a Dog Walking Business Right for You?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            While starting a pet care business is exciting, it also requires dedication, 
            responsibility, and strong customer trust. Understand the key responsibilities 
            and expectations before launching your business.
          </p>
        </div>

      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Dog Walking Business: Daily Routine, Skills & Customer Expectations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn what it’s like to run a successful dog walking or pet sitting business. 
            From daily responsibilities to essential skills and customer expectations, 
            discover how to build a trusted and profitable pet care service.
          </p>
        </div>

        {/* Daily Tasks */}
        <div className="grid md:grid-cols-2 gap-10 mb-6">
          
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Daily Tasks of a Dog Walking Business Owner
            </h3>
            <div className="space-y-4">
              {dailyTasks.map((task, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Essential Skills for Pet Care Entrepreneurs
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Best Dog Walking & Pet Care Business Ideas to Start
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most profitable dog walking and pet care business opportunities. 
            From low-cost startups to scalable pet services, choose the right business 
            model based on your budget, skills, and growth goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessTypes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border"
            >
              <div className="mb-4">
                <PawPrint className="w-10 h-10 text-cyan-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {index + 1}. {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-3xl p-10 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">
            Choose the Right Pet Care Business for You
          </h3>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-6">
            Whether you want to start a dog walking service, pet sitting business, 
            or a full-scale pet care company, selecting the right business model 
            is the first step toward building a profitable and sustainable business.
          </p>
          <button onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }} className="bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Start Your Pet Business
          </button>
        </div>

      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Start Smart
          </span>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Validate Your Dog Walking & Pet Sitting Business Idea
          </h2>
          <p className="text-gray-600 text-lg">
            Build a profitable <strong>dog walking business</strong> or 
            <strong> pet sitting service</strong> by identifying your strengths, 
            understanding your market, and creating a unique brand that stands out locally.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-cyan-50 p-8 rounded-2xl shadow-lg border border-cyan-100"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Define Your Unique Selling Proposition (USP)
            </h3>
            <p className="text-gray-600 mb-4">
              Stand out in the competitive <strong>pet care industry</strong> by offering 
              specialized services like <strong>puppy care, senior dog walking, weight management,</strong> 
              or <strong>behavioral training support</strong>.
            </p>
            <a
              href="/services"
              className="text-blue-600 font-medium hover:underline"
            >
              Explore Pet Services →
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-cyan-50 p-8 rounded-2xl shadow-lg border border-cyan-100"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Analyze Local Competitors
            </h3>
            <p className="text-gray-600 mb-4">
              Research nearby <strong>dog walking and pet sitting businesses</strong>. 
              Identify gaps in their services and position your brand as a 
              <strong> premium or niche pet care provider</strong>.
            </p>
            <a
              href="/market-analysis"
              className="text-blue-600 font-medium hover:underline"
            >
              Learn Market Strategy →
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-cyan-50 p-8 rounded-2xl shadow-lg border border-cyan-100"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Understand Your Target Audience
            </h3>
            <p className="text-gray-600 mb-4">
              Identify your ideal <strong>pet owners</strong> and their needs. 
              Focus on busy professionals, travelers, or families who require 
              <strong> reliable pet sitting services</strong>.
            </p>
            <a
              href="/target-audience"
              className="text-blue-600 font-medium hover:underline"
            >
              Discover Your Customers →
            </a>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-cyan-50 p-8 rounded-2xl shadow-lg border border-cyan-100"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Validate with Real Customers
            </h3>
            <p className="text-gray-600 mb-4">
              Talk to potential clients and test your <strong>pet care business idea</strong>. 
              Ask if they would pay for your services and gather feedback to refine your offering.
            </p>
            <a
              href="/contact"
              className="text-blue-600 font-medium hover:underline"
            >
              Get Customer Feedback →
            </a>
          </motion.div>
        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
            Business Strategy
          </span>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Create a Winning Dog Walking & Pet Sitting Business Plan
          </h2>
          <p className="text-lg text-gray-600">
            Build a scalable <strong>dog walking business plan</strong> or 
            <strong> pet sitting business model</strong> that drives consistent 
            <strong> revenue, client growth, and long-term profitability</strong>. 
            A structured plan helps you attract customers, optimize services, 
            and grow your <strong>pet care business</strong> from day one.
          </p>
        </motion.div>

        {/* Top Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-md border border-gray-200"
          >
            <FileText className="w-10 h-10 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Why You Need a Business Plan
            </h3>
            <p className="text-gray-600">
              A professional <strong>pet sitting business plan</strong> helps you define 
              your services, pricing strategy, marketing approach, and 
              <strong> revenue generation model</strong>. It ensures you launch with clarity 
              and scale faster in a competitive local market.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md border border-gray-200"
          >
            <DollarSign className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Financial Planning & Revenue Growth
            </h3>
            <p className="text-gray-600">
              Forecast your <strong>dog walking service pricing</strong>, expected sales, 
              and monthly income. Plan your <strong>profit margins</strong>, reinvestment 
              strategy, and salaries to ensure sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Checklist Section */}
        <div className="bg-gray-50 rounded-2xl p-10 shadow-inner">
          <h3 className="text-3xl font-bold text-center text-cyan-600 mb-6">
            Essential Elements of a Successful Pet Care Business Plan
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Executive summary highlighting key business insights",
              "Clear business goals and growth strategy",
              "Detailed business description and background",
              "Market analysis and local demand for pet services",
              "Business structure and operational setup",
              "Profitable dog walking & pet sitting business model",
              "Marketing strategy for client acquisition",
              "Financial projections, revenue & profit planning",
              "Supporting documents and appendices"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border"
              >
                <BarChart3 className="text-cyan-600 mt-1" size={20} />
                <p className="text-gray-700 text-base">{item}</p>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-cyan-600 text-white rounded-2xl p-10 text-center"
        >
          <Target className="mx-auto mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-4">
            Start Your Profitable Pet Care Business Today
          </h3>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-6">
            Turn your passion into a thriving <strong>dog walking or pet sitting business</strong>. 
            With the right strategy, pricing model, and marketing plan, you can 
            attract loyal clients and build a sustainable income stream.
          </p>
          <a
            href="/business-plan-guide"
            className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Download Business Plan Guide
          </a>
        </motion.div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
            Legal Setup
          </span>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Choose the Best Legal Structure for Your Dog Walking & Pet Sitting Business
          </h2>
          <p className="text-lg text-gray-600">
            Selecting the right <strong>business structure</strong> is essential for your 
            <strong> dog walking business</strong> or <strong>pet sitting services</strong>. 
            It impacts your <strong>taxes, liability protection, and long-term growth</strong>. 
            Start your <strong>pet care business</strong> with the right legal foundation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Sole Proprietorship */}
          <motion.div whileHover={{ y: -8 }} className="bg-white p-7 rounded-2xl shadow-lg border border-gray-200">
            <Briefcase className="text-red-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Sole Proprietorship
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              The simplest <strong>dog walking business structure</strong>, but offers 
              <strong> no legal protection</strong>. Your personal assets are at risk, 
              making it less ideal for professional <strong>pet care services</strong>.
            </p>
            <span className="text-red-500 text-sm font-medium">
              Not Recommended ❌
            </span>
          </motion.div>

          {/* Partnership */}
          <motion.div whileHover={{ y: -8 }} className="bg-white p-7 rounded-2xl shadow-lg border border-gray-200">
            <Briefcase className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Partnership (General)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              A shared <strong>pet sitting business</strong> setup, but without 
              <strong> limited liability protection</strong>. Each partner is 
              personally responsible for debts and legal risks.
            </p>
            <span className="text-orange-500 text-sm font-medium">
              Limited Protection ⚠️
            </span>
          </motion.div>

          {/* LLC */}
          <motion.div whileHover={{ y: -8 }} className="bg-white p-7 rounded-2xl shadow-lg border border-gray-200">
            <ShieldCheck className="text-cyan-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Limited Liability Company (LLC)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              The most popular choice for <strong>dog walking and pet sitting businesses</strong>. 
              An LLC offers <strong>personal asset protection</strong>, tax flexibility, 
              and is easy to set up—perfect for small business owners.
            </p>
            <span className="text-cyan-600 text-sm font-semibold">
              Recommended ✅
            </span>
          </motion.div>

          {/* S Corp */}
          <motion.div whileHover={{ y: -8 }} className="bg-white p-7 rounded-2xl shadow-lg border border-gray-200">
            <Building2 className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              S Corporation
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Offers potential <strong>tax advantages</strong>, but involves 
              more compliance and complexity. Usually better suited for 
              growing businesses with higher revenue.
            </p>
            <span className="text-blue-500 text-sm font-medium">
              Advanced Option
            </span>
          </motion.div>

          {/* C Corp */}
          <motion.div whileHover={{ y: -8 }} className="bg-white p-7 rounded-2xl shadow-lg border border-gray-200">
            <Building2 className="text-gray-700 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              C Corporation
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Designed for large-scale companies and investors. Not ideal for 
              small <strong>pet care startups</strong> due to complex regulations 
              and double taxation.
            </p>
            <span className="text-gray-500 text-sm font-medium">
              Not Suitable ❌
            </span>
          </motion.div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-900 text-blue-300 rounded-full text-sm font-semibold mb-4">
            Business Operations
          </span>
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Set Up & Scale Your Dog Walking or Pet Sitting Business
          </h2>
          <p className="text-gray-400 text-lg">
            Build a successful <strong>dog walking business</strong> or 
            <strong> pet sitting service</strong> by optimizing your operations, 
            marketing strategy, tools, and finances for long-term growth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Location */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <MapPin className="text-blue-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">Business Location</h3>
            <p className="text-gray-400 text-sm">
              Choose the right setup for your <strong>pet care business</strong>. 
              Work from home for dog walking or invest in a facility for grooming 
              or boarding. Consider <strong>zoning laws, accessibility, and space</strong>.
            </p>
          </motion.div>

          {/* Marketing */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Megaphone className="text-pink-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">Marketing Strategy</h3>
            <p className="text-gray-400 text-sm">
              Grow your <strong>dog walking or pet sitting business</strong> with 
              <strong> SEO, social media marketing, local ads, and branding</strong>. 
              Partner with shelters, pet events, and local communities to boost visibility.
            </p>
          </motion.div>

          {/* Software */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Code2 className="text-green-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">Software & Tools</h3>
            <p className="text-gray-400 text-sm">
              Use the best <strong>pet business software</strong> for scheduling, 
              payments, and client management. Streamline operations with 
              automation tools to save time and scale faster.
            </p>
          </motion.div>

          {/* Employees */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Users className="text-yellow-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">Hiring & Team Growth</h3>
            <p className="text-gray-400 text-sm">
              Start solo and expand your <strong>pet care team</strong> once you 
              have steady clients. Hire trained staff to deliver high-quality services.
            </p>
          </motion.div>

          {/* Equipment */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Briefcase className="text-purple-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">Equipment & Supplies</h3>
            <p className="text-gray-400 text-sm">
              Invest in essential <strong>dog walking equipment</strong> like leashes, 
              collars, and treats. Advanced services may require grooming tools 
              or specialized pet care products.
            </p>
          </motion.div>

          {/* Finance */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Wallet className="text-teal-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">Finances & Taxes</h3>
            <p className="text-gray-400 text-sm">
              Manage your <strong>pet business finances</strong> with a separate 
              business account, bookkeeping, and tax planning. Ensure compliance 
              and maximize profitability.
            </p>
          </motion.div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-600 text-cyan-200 rounded-full text-sm font-semibold mb-4">
            Legal & Taxes
          </span>
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Business Licenses, Regulations & Taxes for Pet Care Services
          </h2>
          <p className="text-gray-400 text-lg">
            Stay compliant while running your <strong>dog walking business</strong> or 
            <strong> pet sitting service</strong>. Understand <strong>business licenses, permits, 
            and tax requirements</strong> to avoid penalties and build a trusted brand.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {/* Licenses */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-xl">
            <ShieldCheck className="text-green-400 mb-4" size={32} />
            <h3 className="text-xl text-gray-700 font-bold mb-3">
              Licenses & Permits
            </h3>
            <p className="text-gray-600 text-base">
              Every <strong>pet care business</strong> must comply with 
              <strong> local, state, and federal regulations</strong>. 
              Research required <strong>dog walking licenses, pet sitting permits</strong>, 
              and zoning rules to legally operate your business.
            </p>
          </motion.div>

          {/* Regulations */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-xl">
            <FileCheck className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl text-gray-700 font-bold mb-3">
              Legal Compliance
            </h3>
            <p className="text-gray-600 text-base">
              Follow all <strong>business regulations</strong>, contracts, and 
              insurance requirements to protect your <strong>dog walking or pet sitting business</strong>. 
              Compliance builds trust and credibility with clients.
            </p>
          </motion.div>

          {/* Taxes */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-xl">
            <Percent className="text-yellow-400 mb-4" size={32} />
            <h3 className="text-xl text-gray-700 font-bold mb-3">
              Business Taxes
            </h3>
            <p className="text-gray-600 text-base">
              Manage your <strong>pet business taxes</strong>, including 
              <strong> self-employment tax, federal income tax, and state tax</strong>. 
              You may also need to collect <strong>sales tax</strong> depending on your services.
            </p>
          </motion.div>

          {/* Financial Tip */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-xl">
            <Landmark className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl text-gray-700 font-bold mb-3">
              Smart Tax Planning
            </h3>
            <p className="text-gray-600 text-base">
              Set aside at least <strong>30% of your income</strong> for taxes. 
              Maintain accurate bookkeeping and consider hiring professionals 
              to handle <strong>tax filing and compliance</strong>.
            </p>
          </motion.div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-700 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-900 text-blue-300 rounded-full text-sm font-semibold mb-4">
            Business Protection
          </span>
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Insurance for Your Dog Walking & Pet Sitting Business
          </h2>
          <p className="text-gray-400 text-lg">
            Protect your <strong>dog walking business</strong> or 
            <strong> pet sitting services</strong> with the right 
            <strong> business insurance coverage</strong>. Safeguard your income, 
            assets, and reputation against unexpected risks.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Workers Comp */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Users className="text-green-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">
              Workers Compensation Insurance
            </h3>
            <p className="text-gray-400 text-sm">
              Covers <strong>employee injuries, illnesses, and lost wages</strong>. 
              Essential if you hire staff for your <strong>pet care business</strong>. 
              Requirements vary by state.
            </p>
          </motion.div>

          {/* Liability */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Shield className="text-blue-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">
              General Liability Insurance
            </h3>
            <p className="text-gray-400 text-sm">
              Protects against <strong>lawsuits, injuries, and property damage</strong>. 
              A must-have for <strong>dog walking and pet sitting businesses</strong> 
              dealing with animals and public interactions.
            </p>
          </motion.div>

          {/* Home & Auto */}
          <motion.div whileHover={{ y: -8 }} className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-xl">
            <Car className="text-purple-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-3">
              Home & Auto Insurance
            </h3>
            <p className="text-gray-400 text-sm">
              Ensure your <strong>home-based pet business</strong> or vehicle is 
              covered for business use. Upgrade policies or get dedicated 
              <strong>commercial insurance</strong> if needed.
            </p>
          </motion.div>

        </div>
      </div>
    </section>

            <section className="py-16 bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            Business Compliance
          </span>
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Maintain & Grow Your Dog Walking or Pet Sitting Business
          </h2>
          <p className="text-gray-600 text-lg">
            Keep your <strong>dog walking business</strong> or 
            <strong> pet sitting service</strong> compliant with 
            <strong> annual filings, tax payments, and license renewals</strong>. 
            Staying organized ensures smooth operations and long-term success.
          </p>
        </motion.div>

        {/* Checklist Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-gray-200 shadow-md">
            <FileText className="text-blue-600 mb-4" size={30} />
            <h3 className="text-lg font-semibold mb-2">File Annual Report</h3>
            <p className="text-gray-600 text-sm">
              Submit your <strong>business annual report</strong> and update any changes.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-gray-200 shadow-md">
            <CalendarCheck className="text-green-600 mb-4" size={30} />
            <h3 className="text-lg font-semibold mb-2">Pay Estimated Taxes</h3>
            <p className="text-gray-600 text-sm">
              Pay quarterly <strong>estimated taxes</strong> to avoid penalties.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-gray-200 shadow-md">
            <RefreshCcw className="text-purple-600 mb-4" size={30} />
            <h3 className="text-lg font-semibold mb-2">Renew Licenses</h3>
            <p className="text-gray-600 text-sm">
              Keep your <strong>licenses and permits</strong> up to date.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-gray-200 shadow-md">
            <Calculator className="text-yellow-600 mb-4" size={30} />
            <h3 className="text-lg font-semibold mb-2">Prepare Taxes</h3>
            <p className="text-gray-600 text-sm">
              Work with an expert to prepare accurate <strong>tax returns</strong>.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-gray-200 shadow-md">
            <Receipt className="text-pink-600 mb-4" size={30} />
            <h3 className="text-lg font-semibold mb-2">File Tax Returns</h3>
            <p className="text-gray-600 text-sm">
              Submit your <strong>annual taxes</strong> on time.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white p-7 rounded-2xl border border-gray-200 shadow-md">
            <CreditCard className="text-teal-600 mb-4" size={30} />
            <h3 className="text-lg font-semibold mb-2">Payroll & Sales Taxes</h3>
            <p className="text-gray-600 text-sm">
              Manage <strong>payroll and sales tax payments</strong> regularly.
            </p>
          </motion.div>

        </div>

      </div>
    </section>

    {/* Tools & Software */}
      <section className="py-16 px-4 bg-cyan-50">
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

   <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
         <p className="text-xl md:text-2xl mb-8 text-cyan-50 leading-relaxed">
            Join thousands of successful pet care entrepreneurs who turned their passion into profit.
            The perfect time to start is now.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }} className="bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors shadow-xl">
            Launch Your Business Today
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
            Download Free Guide
            </button>
         </div>
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