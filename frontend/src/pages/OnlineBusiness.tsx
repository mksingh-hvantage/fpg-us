import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Globe, ArrowRight, Star, TrendingUp, Zap, Users, AlertCircle, Shield, CreditCard, Home, Laptop, Rocket, Sparkles, CheckCircle, HelpCircle, BookOpen, Briefcase, Code, Megaphone, Palette, ShoppingCart, Lightbulb, MessageSquare, Target, BarChart3, ClipboardList, DollarSign, FileText, Layers, ExternalLink, Wrench } from "lucide-react";
export default function OnlineBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const structures = [
{
name: 'Sole Proprietorship',
description: 'The default structure if you do not formally register.',
pros: 'Minimal setup required',
cons: 'No personal asset protection',
recommended: false
},
{
name: 'Limited Liability Company (LLC)',
description: 'The optimal choice for most online businesses.',
pros: 'Affordable, simple, protects personal assets',
cons: 'Requires state filing',
recommended: true
},
{
name: 'Series LLC',
description: 'Advanced LLC variant for multiple business lines.',
pros: 'Separate liability for each venture',
cons: 'Only available in certain states',
recommended: false
},
{
name: 'S Corporation',
description: 'More complex structure with tax implications.',
pros: 'Tax efficiency at scale',
cons: 'Unnecessary for most startups',
recommended: false
}
];
const operationalAreas = [
{
icon: Home,
title: 'Location Freedom',
description: 'Most online businesses operate from home or shared workspaces. Reduce overhead dramatically. Tax deductions apply for home office use.'
},
{
icon: Globe,
title: 'Website & Branding',
description: 'Your digital storefront must be professional. Invest in domain, branding, website platform, and regular updates that reflect quality.'
},
{
icon: Laptop,
title: 'Essential Equipment',
description: 'Likely just a computer and reliable internet. Some businesses need specialized tools. Invest wisely to match your business demands.'
},
{
icon: Zap,
title: 'Tools & Software',
description: 'Leverage automation extensively. CRM, scheduling, invoicing, email marketing, analytics, and project management tools multiply your effectiveness.'
},
{
icon: CreditCard,
title: 'Financial Management',
description: 'Separate business and personal finances. Open a business bank account, track every transaction, and maintain meticulous records for taxes.'
},
{
icon: Users,
title: 'Hiring Decisions',
description: 'Start solo if possible. Outsource selectively as you grow. Virtual assistants and freelancers scale your capacity without full-time commitment.'
}
];


const benefits = [
  "Online retail is growing 8%–12% annually, outperforming traditional retail growth",
  "Over one-third of the U.S. workforce participates in the gig economy",
  "Online businesses typically have lower startup costs than traditional businesses",
];
const businessTypes = [
  {
    icon: Briefcase,
    title: "Freelance Online Business",
    description:
      "Start a freelance business and sell your skills online. Services like content writing, graphic design, editing, and virtual assistance are in high demand. You can promote yourself independently or join top freelance platforms like Upwork, Fiverr, and Freelancer to find clients worldwide.",
  },
  {
    icon: Palette,
    title: "Creative Online Business",
    description:
      "Turn your creativity into income by building an online brand. Photographers, designers, musicians, and artists can monetize their work through platforms like Etsy, CafePress, DeviantArt, and digital marketplaces, reaching a global audience.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Social Media Business",
    description:
      "If you excel at marketing and audience growth, start a digital marketing business. Offer services like social media management, branding, and affiliate marketing. Businesses are constantly looking for experts who can help them grow online.",
  },
  {
    icon: Code,
    title: "Software Development & SaaS",
    description:
      "Launch a tech-driven online business by developing mobile apps, web applications, or SaaS platforms. With the rapid growth of software and digital tools, developers have endless opportunities to build scalable and profitable businesses.",
  },
  {
    icon: Users,
    title: "Gig Economy & On-Demand Services",
    description:
      "Leverage gig economy platforms like Airbnb, TaskRabbit, and Lyft to earn income online or on-demand. These flexible opportunities can start as side hustles and grow into full-time online businesses.",
  },
  {
    icon: BookOpen,
    title: "Blogging & Digital Publishing",
    description:
      "Build a profitable blog or online publication by creating valuable content and growing an audience. Monetize through advertising platforms like Google AdSense, sponsorships, and affiliate marketing.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Online Store",
    description:
      "Start an ecommerce business by selling products online. Options include launching your own store with Shopify or BigCommerce, selling on marketplaces like Amazon and eBay, or exploring dropshipping and digital products for scalable income.",
  },
];
const validationSteps = [
  {
    icon: Target,
    title: "Assess Your Skills & Expertise",
    description:
      "Before starting an online business, evaluate your skills and experience. Whether it's freelancing, ecommerce, or digital services, you need a marketable skillset. Understanding product marketing, pricing, and customer acquisition is essential for long-term success.",
  },
  {
    icon: Lightbulb,
    title: "Understand Market Competition",
    description:
      "Online businesses are highly competitive. Even with low barriers to entry, you must stand out by offering superior value, better service, or a unique approach. Analyze your niche carefully before launching.",
  },
  {
    icon: CheckCircle,
    title: "Define Your Unique Selling Proposition (USP)",
    description:
      "Your USP is what differentiates your business from competitors. Whether it's pricing, quality, features, speed, or customer experience, clearly define why customers should choose you.",
  },
  {
    icon: Users,
    title: "Analyze Your Competitors",
    description:
      "Research existing businesses in your niche. Competition validates demand, but too much competition requires a strong USP. Identify gaps and opportunities you can leverage.",
  },
  {
    icon: MessageSquare,
    title: "Validate with Real Customers",
    description:
      "Talk to potential customers to understand their needs. Ask if they would actually pay for your product or service. Real feedback is critical to validating your online business idea before launch.",
  },
  {
    icon: Globe,
    title: "Join Online Communities & Learn",
    description:
      "Engage in online forums, communities, and industry groups. Learn from experienced entrepreneurs, understand market trends, and refine your idea before investing heavily.",
  },
];
const planSections = [
  {
    icon: FileText,
    title: "Executive Summary",
    description:
      "Summarize the key points of your online business plan, including your mission, goals, and strategy. This section provides a high-level overview of your business concept.",
  },
  {
    icon: Target,
    title: "Business Goals & Objectives",
    description:
      "Define clear short-term and long-term goals for your online business. Identify what success looks like and how you plan to achieve sustainable growth.",
  },
  {
    icon: Briefcase,
    title: "Business Description & Background",
    description:
      "Explain your online business idea, industry context, and background. Highlight your value proposition and how your business fits into the market.",
  },
  {
    icon: BarChart3,
    title: "Market Research & Demand Analysis",
    description:
      "Analyze your target audience, industry trends, and competitors. Understanding demand is critical for validating your online business idea and identifying opportunities.",
  },
  {
    icon: Layers,
    title: "Business Structure & Operations",
    description:
      "Outline how your business is structured and how it will operate. Define roles, workflows, and operational processes for efficient execution.",
  },
  {
    icon: ClipboardList,
    title: "Business Model",
    description:
      "Explain how your online business will make money. Whether it’s ecommerce, SaaS, freelancing, or digital products, define your revenue streams clearly.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Sales Strategy",
    description:
      "Detail how you will attract and convert customers. Include SEO, content marketing, social media, paid ads, and sales funnels to drive growth.",
  },
  {
    icon: DollarSign,
    title: "Financial Projections & Profitability",
    description:
      "Estimate your startup costs, expected revenue, and profit margins. Financial planning ensures your business remains sustainable and scalable.",
  },
  {
    icon: FileText,
    title: "Appendices & Supporting Documents",
    description:
      "Include additional resources such as research data, charts, legal documents, or any supporting material that strengthens your business plan.",
  },
];
return (
<div className="min-h-screen bg-white">
   <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-600 to-slate-600">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-gray-100 rounded-full shadow-sm mb-2">
              <Globe className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-medium text-gray-700">
                Build a Global Online Business
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              Start Your <span className="text-cyan-400">
                Online Business Today
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white mb-10 max-w-xl leading-relaxed">
              Launch a scalable online business and reach customers worldwide. 
              No physical limits, low startup costs, and unlimited growth potential — 
              all from the comfort of your home.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  setSelectedBusinessType("");
                  setIsModalOpen(true);
                }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-cyan-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-2xl"
              >
                Start Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-sm">
                Explore Opportunities
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            
            {/* Glass Card */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-xl">
              
              {/* Mock Dashboard / Image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Online Business Dashboard"
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-cyan-600">Global</div>
                <div className="text-sm text-gray-500">Reach Customers</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-cyan-600">24/7</div>
                <div className="text-sm text-gray-500">Online Sales</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
   <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-8">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-2">
               Trusted by Online Entrepreneurs
            </p>
            <p className="text-4xl font-extrabold text-gray-900">Join 50+ Online Businesses</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl">
               <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-500 text-cyan-500" />
                  ))}
               </div>
               <p className="text-2xl font-bold text-gray-900 mb-1">4.75/5.0</p>
               <p className="text-sm text-gray-600">200+ Customer Reviews</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl">
               <Globe className="w-10 h-10 text-cyan-600 mb-3" />
               <p className="text-2xl font-bold text-gray-900 mb-1">10+ Countries</p>
               <p className="text-sm text-gray-600">Operating Worldwide</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl">
               <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
               <p className="text-2xl font-bold text-gray-900 mb-1">8-12% Growth</p>
               <p className="text-sm text-gray-600">Year-over-Year E-commerce</p>
            </div>
         </div>
      </div>
   </section>

  <section className="relative overflow-hidden bg-cyan-50 py-16 px-16">
        
        {/* Background Glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-cyan-200 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-200 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              How to Start a Successful <span className='text-cyan-600'>Online Business</span> in 2026
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Starting an online business is one of the most powerful ways to build income and achieve freedom. 
              But success requires more than just launching a website or posting on social media. You need a solid 
              strategy, market research, and the ability to adapt to fast-changing digital tools and competition.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div>

              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                The low barrier to entry in online businesses means competition is high. To stand out, you must plan 
                carefully, validate your ideas, and execute effectively. Whether you're starting an eCommerce store, 
                freelance service, or digital platform, preparation is key to long-term success.
              </p>

              <div className="flex items-start gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-cyan-600 mt-1" />
                <p className="text-lg text-gray-900 font-bold">
                  So, where should you start your online business journey?
                </p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                This complete guide walks you through everything — from choosing the right online business idea 
                and validating your concept, to handling legal requirements and managing daily operations. 
                It’s your roadmap to becoming a successful internet entrepreneur.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Trusted by over <span className="font-semibold text-cyan-600">500+ entrepreneurs</span>, 
                we’ve been helping people start businesses online since 2004 — guiding them through every step 
                of the digital business journey.
              </p>
            </div>

            {/* RIGHT STATS + BENEFITS */}
            <div className="space-y-6">

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">$50B+</div>
                  <div className="text-gray-600 text-sm">
                    Annual U.S. Online Spending
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">$45K</div>
                  <div className="text-gray-600 text-sm">
                    Avg. Earnings for Top Freelancers
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Start an Online Business?
                </h3>

                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

    <section className="relative py-16 px-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Best <span className='text-cyan-600'>Online Business</span> Ideas You Can Start in 2026
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the most profitable online business opportunities. Whether you want to start freelancing, 
            launch an ecommerce store, or build a SaaS platform, these proven online business models can help you 
            generate income and scale globally.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

        {/* CTA */}
        <div className="max-w-7xl mx-auto mt-10 text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-600 text-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Choose the Right Online Business and Start Today
            </h3>
            <p className="text-lg opacity-90 mb-6">
              The best online business for you depends on your skills, interests, and goals. 
              Take the first step today and build a scalable, profitable digital business.
            </p>
            <button onClick={() => {
                  setSelectedBusinessType("");
                  setIsModalOpen(true);
                }} className="bg-white text-cyan-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Get Started Now
            </button>
          </div>
        </div>

      </div>
    </section>

     <section className="relative py-16 px-16 bg-cyan-50 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            How to Validate Your <span className='text-cyan-600'>Online Business</span> Idea Successfully
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Validating your online business idea is a crucial step before investing time and money. 
            Learn how to test demand, analyze competition, and refine your idea to build a profitable 
            and scalable online business.
          </p>
        </div>

        {/* Intro Text */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            There are hundreds of online business opportunities, but not every idea will succeed. 
            Choosing the right idea requires careful planning, honest evaluation, and real-world testing. 
            Remember — starting is easy, but building a successful online business takes strategy and execution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {validationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

        {/* Bottom Insight */}
        <div className="max-w-7xl mx-auto mt-10 text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-slate-600 text-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              It’s Okay to Pivot — Find the Right Business Idea
            </h3>
            <p className="text-lg opacity-90">
              Most successful entrepreneurs don’t get it right the first time. Testing, failing, and refining 
              your ideas is part of the journey. Validate your concept early, minimize risks, and focus on 
              building a business that truly works.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section className="relative py-16 px-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Create a Winning <span className='text-cyan-600'>Online Business</span> Plan for Success
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            A well-structured online business plan is essential for building a successful and scalable digital business. 
            It helps you define your strategy, understand your market, and plan for growth, profitability, and long-term success.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Many entrepreneurs overlook business planning when starting online, especially when using third-party platforms. 
            However, without a clear plan, it’s difficult to grow, compete, and succeed. A strong business plan organizes your ideas, 
            validates your strategy, and demonstrates your commitment to building a profitable online business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planSections.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

      </div>
    </section>

<section className="py-20 bg-cyan-100/60">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Legal <span className='text-cyan-600'>Structure</span>
         </h2>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your business structure determines liability protection, taxes, and administrative
            requirements. Choose strategically for your situation.
         </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
         {structures.map((structure, index) => (
         <div
         key={index}
         className={`rounded-2xl p-8 border-2 transition-all ${
         structure.recommended
         ? 'bg-gradient-to-br from-cyan-50 to-cyan-50 border-cyan-300 shadow-lg'
         : 'bg-white border-gray-200 hover:border-gray-300'
         }`}
         >
         {structure.recommended && (
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-600 text-white text-sm font-semibold rounded-full mb-4">
            <Shield className="w-4 h-4" />
            Recommended
         </div>
         )}
         <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {structure.name}
         </h3>
         <p className="text-gray-600 mb-4">
            {structure.description}
         </p>
         <div className="space-y-3 mb-4">
            <div>
               <p className="text-sm font-semibold text-gray-700 mb-1">Pros:</p>
               <p className="text-gray-600">{structure.pros}</p>
            </div>
            <div>
               <p className="text-sm font-semibold text-gray-700 mb-1">Cons:</p>
               <p className="text-gray-600">{structure.cons}</p>
            </div>
         </div>
      </div>
      ))}
   </div>
   <div className="bg-cyan-50 rounded-2xl p-8 border-2 border-cyan-200">
      <div className="flex items-start gap-4">
         <AlertCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
         <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
               Why Structure Matters
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
               An LLC separates your personal assets from business liabilities. If something goes
               wrong, your house and personal savings are protected. This peace of mind is worth
               the minimal cost and complexity.
            </p>
            <p className="text-gray-700 leading-relaxed">
               Formation varies by state, but with guidance, the process is straightforward. Register
               in your home state unless you have specific reasons to choose elsewhere.
            </p>
         </div>
      </div>
   </div>
   </div>
</section>
<section className="py-20 bg-white">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Build Your Operational <span className='text-cyan-600'>Foundation</span>
         </h2>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Once registered, establish the systems and processes that support daily operations.
            Smart choices here determine your efficiency and scalability.
         </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
         {operationalAreas.map((area, index) => {
         const Icon = area.icon;
         return (
         <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all"
            >
            <div className="bg-cyan-100 rounded-xl p-3 w-fit mb-4">
               <Icon className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
               {area.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
               {area.description}
            </p>
         </div>
         );
         })}
      </div>
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white">
         <h3 className="text-4xl font-extrabold mb-4">Systems Drive Success</h3>
         <p className="text-xl text-cyan-50 leading-relaxed mb-6">
            The difference between struggling and thriving online businesses is often systems.
            Automate routine tasks, systematize your processes, and create workflows that run
            semi-independently.
         </p>
         <p className="text-lg text-cyan-100 leading-relaxed">
            By investing time early in building systems, you create a scalable business that doesn't
            require your presence for every transaction. This is the path to real freedom.
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
              Useful Online Tools for <span className='text-cyan-600'>Publishers</span>
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
<section className="py-20 bg-cyan-100/60">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-600 to-cyan-600 rounded-3xl">
         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="relative px-8 sm:px-12 py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">Your Opportunity Awaits</span>
               </div>
               <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                  Build Your Online Empire
               </h2>
               <p className="text-xl text-cyan-50 leading-relaxed mb-10 max-w-2xl mx-auto">
                  The internet has removed traditional barriers. Success now depends on finding your
                  niche, understanding your market, and executing consistently. Start your journey today.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button onClick={() =>
                     {
                     setSelectedBusinessType('');
                     setIsModalOpen(true);
                     }} className="group px-8 py-4 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                     <Rocket className="w-5 h-5" />
                     Launch Your Business
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-cyan-700/50 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-cyan-700 transition-all border-2 border-white/30">
                  Download Playbook
                  </button>
               </div>
               <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center">
                     <p className="text-4xl font-extrabold text-white mb-1">500+</p>
                     <p className="text-cyan-100 text-sm">Businesses Online</p>
                  </div>
                  <div className="text-center">
                     <p className="text-4xl font-extrabold text-white mb-1">$3.0T+</p>
                     <p className="text-cyan-100 text-sm">Annual E-commerce</p>
                  </div>
                  <div className="text-center">
                     <p className="text-4xl font-extrabold text-white mb-1">4.50★</p>
                     <p className="text-cyan-100 text-sm">Client Satisfaction</p>
                  </div>
               </div>
            </div>
         </div>
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
)
}