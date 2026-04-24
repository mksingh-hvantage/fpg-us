import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, Shirt, Zap, TrendingUp, Users, AlertCircle, CheckCircle, FileText, DollarSign } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
export default function ShirtBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const [expandedSection, setExpandedSection] = useState
<string | null>
(null);
const toggleSection = (section: string) => {
setExpandedSection(expandedSection === section ? null : section);
};
const steps = [
  {
    title: "Choose a Profitable T-Shirt Niche",
    desc: "Identify a high-demand niche market such as custom graphic t-shirts, streetwear, fitness apparel, or personalized clothing. Conduct keyword research, analyze competitors, and validate your idea with your target audience to ensure strong demand and scalability."
  },
  {
    title: "Create Unique T-Shirt Designs",
    desc: "Design eye-catching and original t-shirt graphics using tools like Adobe Illustrator or Canva. You can also hire freelance designers or use design marketplaces. Focus on trending designs, typography, and niche-specific artwork to increase conversions."
  },
  {
    title: "Build Your eCommerce T-Shirt Store",
    desc: "Launch a professional online store using platforms like Shopify, WooCommerce, or Wix. Optimize your store for SEO with fast loading speed, mobile responsiveness, and keyword-rich product pages to rank higher on Google."
  },
  {
    title: "Partner with Print-on-Demand Services",
    desc: "Use print-on-demand platforms like Printful, Printify, or Teespring to handle printing, inventory, and shipping. This eliminates upfront costs and allows you to focus on scaling your custom t-shirt business."
  },
  {
    title: "Integrate and Launch Your Store",
    desc: "Connect your eCommerce store with your print-on-demand provider, upload your t-shirt designs, set pricing strategies, and launch your online business with a seamless workflow."
  },
  {
    title: "Focus on Branding & Digital Marketing",
    desc: "Build a strong brand identity with a premium logo, consistent color palette, and storytelling. Use SEO, social media marketing, influencer collaborations, and paid ads to drive traffic and increase sales."
  },
  {
    title: "Scale and Manage Your Business",
    desc: "Continuously analyze sales data, customer behavior, and trending products. Improve your designs, expand product lines, and optimize marketing strategies to grow your t-shirt business successfully."
  }
];
return (
<div className="min-h-screen bg-white">
   <Helmet>
      <title>
         Start a Shirt Business in USA – T-Shirt Business Setup Guide | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Learn how to start a shirt or T-shirt business in the USA. Get expert guidance on business registration, LLC formation, EIN, licensing, taxes, and compliance from The Future Perfect Global."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/start-a-business/shirt-business"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="shirt business USA, t shirt business USA, start t shirt business USA, shirt printing business USA, t shirt business registration USA, apparel business USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/shirt-business"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/shirt-business"
         hrefLang="x-default"
         />
      <meta name="ROBOTS" content="INDEX, FOLLOW" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Start a Shirt Business in USA – T-Shirt Business Setup"
         />
      <meta
         property="og:description"
         content="Start your shirt or T-shirt business in the USA with step-by-step guidance on registration, LLC formation, and compliance."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/start-a-business/shirt-business"
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
         content="Start a Shirt Business in USA – The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Start a Shirt Business in USA – T-Shirt Business Guide"
         />
      <meta
         name="twitter:description"
         content="Planning to start a shirt or T-shirt business in the USA? Get expert help with registration, LLC formation, and taxes."
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
           "name": "Shirt Business Setup in USA",
           "url": "https://us.thefutureperfectglobal.com/start-a-business/shirt-business",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "Professional guidance for starting a shirt or T-shirt business in the USA, including business registration, LLC formation, EIN application, tax planning, and compliance support.",
           "areaServed": [
             "United States"
           ],
           "serviceType": [
             "Shirt Business Registration USA",
             "T-Shirt Business Setup",
             "LLC Formation",
             "EIN Registration",
             "Compliance Support"
           ]
         }`}
      </script>
   </Helmet>
   {/* Hero Section */}
   <section className="relative overflow-hidden">
  
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <Shirt className="w-4 h-4" />
              Print-on-Demand & Apparel Business Guide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-xl mb-6">
              Start a Profitable T-Shirt Business Online
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Learn how to launch a successful t-shirt business with print-on-demand, custom designs, and eCommerce strategies. Build your clothing brand, sell online, and scale your apparel business with high-profit margins.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }}
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold shadow-lg"
              >
                Start Your T-Shirt Business
              </button>

              <button className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold">
                Download Free Guide
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <span>✔ Print-on-Demand Ready</span>
              <span>✔ No Inventory Needed</span>
              <span>✔ Beginner Friendly</span>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:block relative">
            <img
              src="https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80"
              alt="Custom T-Shirt Business and Print on Demand"
              className="rounded-2xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl">
              <p className="text-sm font-semibold">Top Selling Design</p>
              <p className="text-xs text-gray-500">$25 Profit / Shirt</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center max-w-5xl mx-auto mb-10">
            <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-3">
              Business Startup Guide
            </h2>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Start a Successful <span className='text-cyan-600'>T-Shirt Business</span> Online
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Starting a t-shirt business has never been easier. With the rise of print-on-demand and eCommerce platforms, you can design, launch, and sell custom t-shirts online without holding inventory. Build your clothing brand, reach global customers, and generate consistent income from your designs.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* LEFT TEXT */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete T-Shirt Business Formation Guide
              </h3>

              <p className="text-gray-600 mb-6">
                While starting a t-shirt business is simple, building a profitable and sustainable brand requires the right strategy. With low barriers to entry, competition is high—so choosing the right niche, creating unique designs, maintaining product quality, and implementing effective marketing strategies are critical to success.
              </p>

              <p className="text-gray-600 mb-6">
                This step-by-step guide will help you turn your ideas into a thriving online t-shirt business, from planning and branding to scaling your operations and increasing profits.
              </p>

              <p className="text-gray-600">
                Learn how to leverage print-on-demand platforms, build a strong eCommerce presence, and sell t-shirts online through marketplaces and your own website. With the right tools and strategy, you can turn your creativity into a scalable clothing brand and generate consistent online income.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?q=80"
                alt="T-shirt printing business and custom apparel design"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* CHECKLIST */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
              What You’ll Learn in This T-Shirt Business Guide
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Understanding the print-on-demand and t-shirt business model",
                "How to register and legally structure your t-shirt business",
                "Managing taxes, pricing, and profit margins",
                "Finding profitable niches and creating high-selling designs",
                "Building a strong clothing brand and online presence",
                "Marketing your t-shirt business using social media and ads",
                "Managing operations, orders, and customer experience",
                "Hiring team members and scaling your apparel business",
                "Accessing tools and resources to grow your t-shirt brand"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-cyan-600 font-bold">✓</div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Launch and Grow Your T-Shirt Business Today
            </h3>

            <p className="text-lg text-gray-600 mb-6">
              By following this complete guide, you’ll gain everything you need to start, manage, and scale a successful t-shirt business. Turn your creativity into a profitable online brand and start selling today.
            </p>

            <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-md">
              Get Started Now
            </button>
          </div>

        </div>
      </section>

      <section className="py-20 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center max-w-5xl mx-auto mb-10">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                Understanding the <span className='text-cyan-600'>T-Shirt Business</span> Industry
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The online t-shirt printing and custom apparel industry is rapidly growing, driven by ecommerce, print-on-demand services, and personalized fashion trends. If you're planning to start a t-shirt business, understanding market demand and industry growth is essential for long-term success.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center">
                <h3 className="text-5xl font-extrabold text-cyan-600 mb-2">$3B+</h3>
                <p className="text-gray-600">
                  Annual revenue generated by the global online t-shirt printing and ecommerce apparel market.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center">
                <h3 className="text-5xl font-extrabold text-cyan-600 mb-2">$10B+</h3>
                <p className="text-gray-600">
                  Expected market size of the custom t-shirt business industry by 2025, showing strong growth potential.
                </p>
              </div>

            </div>

            {/* Industry Insights */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Key T-Shirt Business Insights & Market Trends
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "There are hundreds of online t-shirt printing and ecommerce businesses, with new startups entering the market every year.",
                  "The t-shirt business industry is growing at an average rate of over 10% annually, driven by print-on-demand and custom design demand.",
                  "Thousands of professionals are employed across the apparel printing, ecommerce, and fulfillment sectors.",
                  "Leading platforms like Cafepress, CustomInk, Threadless, and Teespring dominate the market and set industry standards."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">✔</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunity Section */}
            <div className="text-center max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Now is the Best Time to Start a T-Shirt Business
              </h3>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With the rise of ecommerce platforms, print-on-demand services, and personalized fashion trends, starting a t-shirt business has never been easier. Entrepreneurs can launch with low investment, minimal inventory, and scalable business models.
              </p>

              <p className="text-gray-600 mb-8">
                Whether you're building a niche clothing brand or selling custom designs online, the t-shirt business offers massive growth potential for creative entrepreneurs.
              </p>

              <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-md">
                Start Your T-Shirt Business Today
              </button>
            </div>

          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* SECTION 1 */}
            <div className="mb-20">
              <div className="text-center max-w-5xl mx-auto mb-8">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                  What Customers Expect from a <span className='text-cyan-600'>Successful T-Shirt Brand</span>
                </h2>
                <p className="text-lg text-gray-600">
                  To build a profitable t-shirt business, you must understand what customers are looking for. From choosing the right niche to delivering high-quality products, every element plays a key role in your success in the custom apparel market.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Choose a Profitable Niche",
                    desc: "Focus on a specific niche such as pop culture, fitness, streetwear, or trending topics. A targeted niche helps your t-shirt business stand out and attract the right audience."
                  },
                  {
                    title: "Create Original T-Shirt Designs",
                    desc: "Unique and creative designs are essential for success. Work with designers or create your own artwork to build a strong and recognizable product line."
                  },
                  {
                    title: "Build a Strong Brand Identity",
                    desc: "Develop a memorable brand with a unique logo, colors, and messaging to build trust and customer loyalty in the competitive apparel market."
                  },
                  {
                    title: "Use High-Quality Materials",
                    desc: "Offer premium quality t-shirts that are comfortable, durable, and stylish. Better quality leads to higher customer satisfaction and repeat sales."
                  },
                  {
                    title: "Master T-Shirt Marketing",
                    desc: "Use social media marketing, influencer promotions, and paid ads to promote your t-shirt brand and reach a wider audience online."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2 */}
            <div>
              <div className="text-center max-w-5xl mx-auto mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                  Benefits & Challenges of Starting a <span className='text-cyan-600'>T-Shirt Business</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Starting a t-shirt business offers great opportunities, especially with print-on-demand and ecommerce. However, understanding the challenges and benefits will help you build a sustainable and profitable apparel brand.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">

                {/* Challenges */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-red-600 mb-6">
                    Challenges in the T-Shirt Business
                  </h3>

                  <ul className="space-y-4 text-gray-600">
                    <li>• High competition in the custom t-shirt and print-on-demand market</li>
                    <li>• Low profit margins require strong pricing and cost control strategies</li>
                    <li>• Initial investment needed for inventory if not using print-on-demand</li>
                    <li>• Requires consistent branding, marketing, and design innovation</li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-green-600 mb-6">
                    Benefits of a T-Shirt Business
                  </h3>

                  <ul className="space-y-4 text-gray-600">
                    <li>• Low startup costs with print-on-demand business model</li>
                    <li>• No inventory management required with dropshipping fulfillment</li>
                    <li>• Flexible and scalable ecommerce business opportunity</li>
                    <li>• Great entry point for beginners into online entrepreneurship</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            How to Start a Profitable T-Shirt Business
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete step-by-step guide to launching a successful custom t-shirt business online with high-converting strategies, SEO optimization, and scalable growth techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition duration-300 shadow-lg hover:shadow-yellow-500/20"
            >
              <div className="text-yellow-500 text-3xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   {/* Table of Contents */}
   <section className="bg-slate-50 py-8 px-4 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto">
         <h2 className="font-extrabold text-slate-900 mb-4">On this page</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#understanding" className="text-cyan-600 hover:text-cyan-800 font-medium">Understanding the Industry</a>
            <a href="#planning" className="text-cyan-600 hover:text-cyan-800 font-medium">Planning Your Business</a>
            <a href="#structure" className="text-cyan-600 hover:text-cyan-800 font-medium">Legal Structure</a>
         </div>
      </div>
   </section>
   <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Understanding Section */}
      <section id="understanding" className="mb-16">
         <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Understanding the T-Shirt Business
         </h2>
         {/* Industry Statistics */}
         <div className="bg-gradient-to-r from-cyan-50 to-slate-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Industry Statistics & Opportunity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-extrabold text-cyan-600 mb-2">$3B</div>
                  <p className="text-slate-600">Annual revenue for online t-shirt printing and sales</p>
               </div>
               <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-extrabold text-cyan-600 mb-2">$10B</div>
                  <p className="text-slate-600">Expected market growth by 2025</p>
               </div>
               <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-extrabold text-cyan-600 mb-2">11%</div>
                  <p className="text-slate-600">Annual growth rate for businesses in this sector</p>
               </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded border-l-4 border-cyan-600">
               <p className="text-slate-700">
                  With over 400 online t-shirt businesses and growing, this industry employs approximately 2,500 people. Major players include CafePress, CustomInk, Threadless, and Teespring. The low barrier to entry combined with high market demand creates significant opportunities for focused entrepreneurs.
               </p>
            </div>
         </div>
         {/* What Customers Want */}
         <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">What Your Customers Are Looking For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                     <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                     The Right Niche
                  </h4>
                  <p className="text-slate-600">Pick a specific niche and dominate it. This could be a band, TV show, art style, current events, or community. Success requires deep focus rather than broad appeal.</p>
               </div>
               <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                     <Zap className="w-5 h-5 mr-2 text-green-600" />
                     Original Designs
                  </h4>
                  <p className="text-slate-600">Originality is essential. Create designs yourself, partner with talented designers, or source from trusted creators. Get customer feedback early.</p>
               </div>
               <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                     <Shirt className="w-5 h-5 mr-2 text-green-600" />
                     Strong Branding
                  </h4>
                  <p className="text-slate-600">Build a recognizable brand that stands out and builds loyalty. Consistency across your website, marketing, and social presence matters.</p>
               </div>
               <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                     <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                     Quality Materials
                  </h4>
                  <p className="text-slate-600">Invest in comfortable, durable, stylish t-shirts. Higher quality materials justify premium pricing and create lasting customer impressions.</p>
               </div>
            </div>
         </div>
         {/* Benefits vs Challenges */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
               <h4 className="font-bold text-green-900 mb-4 flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Benefits
               </h4>
               <ul className="space-y-3">
                  <li className="flex items-start">
                     <span className="text-green-600 font-bold mr-3">✓</span>
                     <span className="text-slate-700"><strong>Low Overheads:</strong> Print-on-demand services handle fulfillment automatically</span>
                  </li>
                  <li className="flex items-start">
                     <span className="text-green-600 font-bold mr-3">✓</span>
                     <span className="text-slate-700"><strong>Low Risk:</strong> Perfect introduction to entrepreneurship and e-commerce</span>
                  </li>
                  <li className="flex items-start">
                     <span className="text-green-600 font-bold mr-3">✓</span>
                     <span className="text-slate-700"><strong>Scalable:</strong> Grow from home with minimal infrastructure</span>
                  </li>
               </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
               <h4 className="font-bold text-red-900 mb-4 flex items-center text-lg">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  Challenges
               </h4>
               <ul className="space-y-3">
                  <li className="flex items-start">
                     <span className="text-red-600 font-bold mr-3">✗</span>
                     <span className="text-slate-700"><strong>High Competition:</strong> Low barrier to entry means crowded market</span>
                  </li>
                  <li className="flex items-start">
                     <span className="text-red-600 font-bold mr-3">✗</span>
                     <span className="text-slate-700"><strong>Thin Margins:</strong> Close attention to costs and revenue required</span>
                  </li>
                  <li className="flex items-start">
                     <span className="text-red-600 font-bold mr-3">✗</span>
                     <span className="text-slate-700"><strong>Marketing Critical:</strong> Success depends on innovative marketing campaigns</span>
                  </li>
               </ul>
            </div>
         </div>
      </section>
      {/* Planning Section */}
      <section id="planning" className="mb-16">
         <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Planning Your T-Shirt Business
         </h2>
         {/* Action Plan */}
         <div className="bg-slate-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Step-by-Step Launch Plan</h3>
            <div className="space-y-4">
               {[
               { num: 1, title: 'Research Your Niche', desc: 'Validate demand and identify underserved market opportunities' },
               { num: 2, title: 'Create Designs', desc: 'Develop original designs or partner with talented designers' },
               { num: 3, title: 'Build E-Commerce Store', desc: 'Use Shopify, Wix, Squarespace, or WordPress + WooCommerce' },
               { num: 4, title: 'Select Print Provider', desc: 'Partner with Printful, Merch by Amazon, or similar services' },
               { num: 5, title: 'Connect Everything', desc: 'Integrate your store with print-on-demand fulfillment' },
               { num: 6, title: 'Launch & Market', desc: 'Use social media, influencers, and targeted advertising' },
               { num: 7, title: 'Monitor & Optimize', desc: 'Track analytics and continuously improve designs and marketing' },
               ].map((step) => (
               <div key={step.num} className="flex items-start bg-white p-4 rounded-lg border border-slate-200">
                  <div className="bg-cyan-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                     {step.num}
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900">{step.title}</h4>
                     <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
               </div>
               ))}
            </div>
         </div>
         {/* Market Research */}
         <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Market Research & Validation</h3>
            <div className="space-y-4">
               {[
               { title: 'Identify Unique Selling Points (USPs)', desc: 'What sets you apart? Better pricing, designs, niche focus, quality, or delivery?' },
               { title: 'Analyze Competition', desc: 'Study competitors to find market gaps and opportunities' },
               { title: 'Validate with Real Customers', desc: 'Test if people will pay money for your products' },
               { title: 'Gather Feedback', desc: 'Talk to potential customers about their needs and preferences' },
               { title: 'Join Communities', desc: 'Engage in business forums and discussion groups for insights' },
               { title: 'Review Market Reports', desc: 'Research industry trends locally, nationally, and internationally' },
               ].map((item, idx) => (
               <div key={idx} className="border-l-4 border-cyan-600 pl-6 py-3 bg-white p-4 rounded">
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
               </div>
               ))}
            </div>
         </div>
         {/* Business Model & Financials */}
         <div className="bg-gradient-to-r from-cyan-50 to-slate-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center">
               <DollarSign className="w-7 h-7 mr-3 text-cyan-600" />
               Business Model & Financial Projections
            </h3>
            <p className="text-slate-700 mb-4">
               Develop a clear business model for generating revenue and plan financial projections:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2">Revenue Planning</p>
                  <p className="text-slate-600 text-sm">Project sales for 1 month, 3 months, 1 year, and 2 years ahead</p>
               </div>
               <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2">Profitability</p>
                  <p className="text-slate-600 text-sm">Calculate costs, margins, and break-even point carefully</p>
               </div>
               <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2">Business Investment</p>
                  <p className="text-slate-600 text-sm">Decide how much profit to reinvest for growth</p>
               </div>
               <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2">Personal Compensation</p>
                  <p className="text-slate-600 text-sm">Plan your salary and any employee compensation</p>
               </div>
            </div>
         </div>
         {/* Business Plan */}
         <div className="border-2 border-cyan-200 rounded-lg p-8 bg-cyan-50">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center">
               <FileText className="w-7 h-7 mr-3 text-cyan-600" />
               Write Your Business Plan
            </h3>
            <p className="text-slate-700 mb-6">A comprehensive business plan should include:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
               'Executive summary with key points',
               'Your goals and vision',
               'Business description and background',
               'Market analysis and demand',
               'Business structure overview',
               'Revenue and profit model',
               'Marketing and sales strategy',
               'Financial projections',
               ].map((item, idx) => (
               <div key={idx} className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">•</span>
                  <span className="text-slate-700">{item}</span>
               </div>
               ))}
            </div>
         </div>
      </section>
      {/* Legal Structure Section */}
      <section id="structure" className="mb-16">
         <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Legal Structure & Registration
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
               <h4 className="font-bold text-red-900 mb-3">Sole Proprietorship</h4>
               <p className="text-slate-700 text-sm">Default structure with no legal separation. NOT recommended - lacks asset protection.</p>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
               <h4 className="font-bold text-green-900 mb-3">LLC (Recommended)</h4>
               <p className="text-slate-700 text-sm">Fast, simple, affordable. Protects personal assets. Best choice for most t-shirt businesses.</p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
               <h4 className="font-bold text-yellow-900 mb-3">Series LLC</h4>
               <p className="text-slate-700 text-sm">Available in select states only. Allows multiple mini-LLCs under one umbrella with separate liability.</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-lg p-6">
               <h4 className="font-bold text-slate-900 mb-3">Corporation</h4>
               <p className="text-slate-700 text-sm">More complex. Generally not recommended for small t-shirt businesses starting out.</p>
            </div>
         </div>
         <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded">
            <p className="text-slate-700">
               <strong>Our Recommendation:</strong> Form an LLC in your state. This provides the right balance of liability protection, tax flexibility, and administrative simplicity. The process varies by state, but most LLCs can be registered online within days.
            </p>
         </div>
      </section>
      {/* Running Your Business Section */}
      <section className="mb-16">
         <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Running Your T-Shirt Business
         </h2>
         <div className="space-y-4">
            {[
            { title: 'Location', desc: 'Run from home with print-on-demand, or rent warehouse space if printing yourself' },
            { title: 'Permits & Licenses', desc: 'Research and obtain necessary local, state, and federal business licenses' },
            { title: 'Marketing & Branding', desc: 'Invest heavily in distinctive branding and multi-channel marketing strategies' },
            { title: 'Analytics & Processes', desc: 'Monitor profit margins closely and implement systems to track performance' },
            { title: 'Equipment', desc: 'If not using print-on-demand, budget for printing equipment and inventory' },
            { title: 'Finances & Taxes', desc: 'Set up business bank account, credit card, and plan for tax obligations' },
            { title: 'Business Maintenance', desc: 'File annual reports and renew licenses/permits as required by your state' },
            ].map((item, idx) => (
            <button
               key={idx}
               onClick={() =>
               toggleSection(`section-${idx}`)}
               className="w-full text-left bg-white border border-slate-200 rounded-lg p-6 hover:border-cyan-600 hover:shadow-md transition-all"
               >
               <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 flex items-center">
                     <Users className="w-5 h-5 mr-3 text-cyan-600" />
                     {item.title}
                  </h4>
                  <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                  expandedSection === `section-${idx}` ? 'rotate-180' : ''
                  }`}
                  />
               </div>
               {expandedSection === `section-${idx}` && (
               <p className="text-slate-600 mt-3">{item.desc}</p>
               )}
            </button>
            ))}
         </div>
         {/* Employees Section */}
         <div className="mt-8 bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center">
               <Users className="w-7 h-7 mr-3 text-cyan-600" />
               Hiring Employees
            </h3>
            <div className="space-y-3">
               {[
               'Get an Employer Identification Number (EIN) from the IRS',
               'Verify employees can legally work in the U.S. with background checks',
               'Report new hires to your state as required',
               'Withhold and pay income and payroll taxes correctly',
               'Obtain workers compensation insurance for employee protection',
               'Establish regular payroll schedule per state requirements',
               'Meet legal responsibilities: safe environment, training, fair pay, proper contracts',
               ].map((item, idx) => (
               <div key={idx} className="flex items-start bg-white p-3 rounded border-l-2 border-cyan-600">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span className="text-slate-700">{item}</span>
               </div>
               ))}
            </div>
         </div>
      </section>
      {/* Resources Section */}
      <section className="mb-16">
         <h2 className="text-4xl font-extrabold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-12 bg-cyan-600 mr-4"></span>
            Useful Resources
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            { category: 'Print-On-Demand Providers', items: ['Printful', 'Merch by Amazon', 'Printify', 'Teespring', 'Zazzle', 'CafePress'] },
            { category: 'E-Commerce Platforms', items: ['Shopify', 'Wix', 'Squarespace', 'WordPress + WooCommerce'] },
            { category: 'Project Management', items: ['Asana', 'Monday.com', 'Trello', 'Basecamp'] },
            { category: 'Social Media Tools', items: ['Buffer', 'Hootsuite', 'Later', 'Sprout Social'] },
            { category: 'Email Marketing', items: ['Mailchimp', 'ConvertKit', 'Klaviyo', 'ActiveCampaign'] },
            { category: 'Analytics', items: ['Google Analytics', 'Hotjar', 'SEMrush', 'Ahrefs'] },
            ].map((resource, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
               <h4 className="font-bold text-slate-900 mb-4">{resource.category}</h4>
               <ul className="space-y-2">
                  {resource.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-slate-600 text-sm flex items-start">
                     <span className="text-cyan-600 mr-2">•</span>
                     {item}
                  </li>
                  ))}
               </ul>
            </div>
            ))}
         </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-lg p-12 text-center mb-6">
         <h2 className="text-4xl font-extrabold mb-4">Ready to Start Your T-Shirt Business?</h2>
         <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            With the right niche, original designs, and great marketing, you can build a thriving t-shirt brand. Start planning today and join thousands of successful entrepreneurs in the custom apparel space.
         </p>
         <button onClick={() => {
         setSelectedBusinessType('');
         setIsModalOpen(true);
         }} className="bg-white text-cyan-600 font-bold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors">
         Start Your Journey
         </button>
      </section>
   </div>
   <GetStartedModal
      isOpen={isModalOpen}
      onClose={() =>
   setIsModalOpen(false)}
   selectedBusinessType={selectedBusinessType}
   />
</div>
);
}