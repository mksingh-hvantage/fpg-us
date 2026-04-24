import { useState } from 'react';
import { Helmet } from "react-helmet-async"; 
import GetStartedModal from '../components/GetStartedModal';
import {
Sparkles,
Target,
Palette,
Home,
MessageSquare,
Wrench,
ShoppingBag,
Briefcase,
TrendingUp,
DollarSign,
Gift,
Building2,
FileText,
Shield,
CheckCircle2,
ChevronDown,
Rocket,
Lightbulb,
Users
} from 'lucide-react';
export default function WithNoMoneyBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const [openFaq, setOpenFaq] = useState
<number | null>
(null);
const businessIdeas = [
{
icon: Palette,
title: 'Creative Services',
description: 'Transform your artistic talents into income through painting, illustration, writing, or graphic design. Launch your portfolio on affordable platforms and connect with clients worldwide.',
platforms: ['Etsy', 'Upwork', 'Fiverr', 'Printful'],
cost: 'From $0.20/listing'
},
{
icon: Home,
title: 'Home Services',
description: 'Offer practical solutions like pet care, gardening, lawn maintenance, or childcare services. These businesses require minimal upfront investment and tap into consistent local demand.',
platforms: ['Local marketing', 'Word of mouth', 'Community boards'],
cost: 'Nearly $0'
},
{
icon: MessageSquare,
title: 'Consulting & Coaching',
description: 'Turn your specialized knowledge and professional experience into a consulting practice. Build credibility with a simple website and start advising clients in your field of expertise.',
platforms: ['Wix', 'LinkedIn', 'Personal website'],
cost: 'Free to start'
},
{
icon: Wrench,
title: 'Trade & Professional Services',
description: 'Offer skilled services like web development, bookkeeping, design consultation, carpentry, or electrical work. Many trades can start with existing tools and grow organically.',
platforms: ['Direct clients', 'Referrals', 'Professional networks'],
cost: 'Variable (may need licensing)'
},
{
icon: ShoppingBag,
title: 'E-commerce & Dropshipping',
description: 'Launch an online store without inventory through dropshipping models. You only purchase products after customers place orders, eliminating upfront inventory costs.',
platforms: ['Shopify', 'Amazon FBA', 'Affiliate programs'],
cost: 'Pay per order'
},
{
icon: Briefcase,
title: 'Gig Economy Platforms',
description: 'Leverage existing platforms to monetize your assets or time. From ridesharing to hosting to task completion, these services handle marketing and payment processing.',
platforms: ['Airbnb', 'Uber', 'Lyft', 'TaskRabbit'],
cost: '$0-$25 registration'
}
];
const fundingOptions = [
{
icon: TrendingUp,
title: 'Bootstrapping',
description: 'Build your business using personal resources and reinvest revenue generated from operations. This approach maintains full ownership and control while growing at a sustainable pace.'
},
{
icon: DollarSign,
title: 'Small Business Loans',
description: 'Access capital through traditional banks or SBA-backed programs. Various loan options exist with different terms, rates, and qualification requirements to match your needs.'
},
{
icon: Gift,
title: 'Business Grants',
description: 'Secure non-repayable funding from government agencies, foundations, and organizations. Grants are competitive but provide capital without giving up equity or taking on debt.'
},
{
icon: Building2,
title: 'Government Programs',
description: 'Take advantage of SBA initiatives including guaranteed loans, microloans, and support programs designed specifically for small businesses and startups.'
},
{
icon: Users,
title: 'Crowdfunding',
description: 'Raise capital from a large number of people through platforms like Kickstarter and Indiegogo. Build community support while validating your business concept.'
}
];
const planningElements = [
'Executive Summary: Concise overview of your business vision',
'Clear Goals: Measurable objectives and milestones',
'Business Description: What you offer and who you serve',
'Market Analysis: Industry research and competitor insights',
'Organizational Structure: Team roles and responsibilities',
'Business Model: How you generate revenue',
'Marketing Strategy: Customer acquisition and retention plans',
'Financial Projections: Revenue forecasts and expense planning'
];
const faqs = [
{
question: 'What types of businesses can I start with absolutely no money?',
answer: 'The easiest businesses to launch without capital leverage skills you already possess. Service-based businesses like consulting, freelance writing, virtual assistance, tutoring, or social media management require no inventory or equipment. You can start immediately using existing tools like your computer and internet connection.'
},
{
question: 'How much does it typically cost to launch a new business?',
answer: 'Startup costs vary dramatically by industry and business model. Service businesses can launch for under $100, while retail or manufacturing ventures may require thousands. Many entrepreneurs start with less than $1,000 by focusing on lean operations, using free tools, and growing organically.'
},
{
question: 'Should I register my business as an LLC from the start?',
answer: 'Approximately 80% of small businesses choose the LLC structure for its simplicity, flexibility, and liability protection. An LLC separates your personal assets from business obligations, which is crucial as you grow. Many formation services offer affordable or even free LLC registration options.'
},
{
question: 'What is the difference between a DBA and an LLC?',
answer: 'A DBA (Doing Business As) is simply a fictitious business name that lets you operate under a different name than your personal name. It provides no legal protection. An LLC is a formal business structure that creates a separate legal entity, offering liability protection and potential tax benefits.'
},
{
question: 'How can I validate my business idea before investing money?',
answer: 'Test your concept by conducting market research, surveying potential customers, creating a minimal viable product, and offering services on a small scale first. Pre-sell your offering, gather feedback, and refine your approach before making significant financial commitments.'
}
];
return (
<div className="min-h-screen bg-white">
   <Helmet>
      <title>
         Start a Business in USA With No Money – Low-Cost LLC & Company Registration | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Learn how to start a business in the USA with no money. The Future Perfect Global helps entrepreneurs with low-cost LLC formation, company registration, EIN application, compliance support, and expert business consulting."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/start-a-business/with-no-money-business"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="start business with no money USA, business without investment USA, low cost business USA, LLC formation with no money USA, start company in USA with no capital, zero investment business USA, entrepreneur startup USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/with-no-money-business"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/with-no-money-business"
         hrefLang="x-default"
         />
      <meta name="ROBOTS" content="INDEX, FOLLOW" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Start a Business in USA With No Money – Low-Cost Registration"
         />
      <meta
         property="og:description"
         content="Start your entrepreneurial journey in the USA with minimal or no investment. Get expert guidance on LLC formation, EIN registration, and compliance with The Future Perfect Global."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/start-a-business/with-no-money-business"
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
         content="Start a Business in USA With No Money – The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Start a Business in USA With No Money – Low-Cost Registration"
         />
      <meta
         name="twitter:description"
         content="Looking to start a business in the USA with no capital? We offer affordable LLC formation, EIN registration, and compliance services for startups."
         />
      <meta
         name="twitter:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      {/* JSON-LD */}
      <script type="application/ld+json">
         {`{
           "@context": "https://schema.org",
           "@type": "Organization",
           "name": "The Future Perfect Global – No Money Business Setup USA",
           "url": "https://us.thefutureperfectglobal.com/start-a-business/with-no-money-business",
           "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp",
           "description": "Affordable business setup services in the USA for entrepreneurs looking to start a business with little or no money, including LLC formation, company registration, EIN application, and compliance support.",
           "areaServed": [
             "United States",
             "California",
             "New York",
             "Texas",
             "Florida",
             "Delaware",
             "Wyoming",
             "Nevada"
           ],
           "serviceType": [
             "Low-Cost LLC Formation USA",
             "Startup Business Registration USA",
             "EIN Registration",
             "Registered Agent Services",
             "Startup Consulting USA",
             "Compliance & Annual Filings"
           ]
         }`}
      </script>
   </Helmet>
   {/* Hero Section */}
   <section className="relative bg-gradient-to-br from-slate-900 via-slate-700 to-slate-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="max-w-3xl">
               <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                  <Sparkles className="w-4 h-4" />
                  Zero Budget? No Problem
               </div>
               <h1 className="text-5xl font-extrabold text-white mb-2 leading-tight">
                  How to Build a Profitable Business with
                  <span className="block text-cyan-500">Minimal Investment</span>
               </h1>
               <p className="text-lg sm:text-xl text-gray-200 mb-4 leading-relaxed">
                  Limited funds don't have to limit your ambitions. Discover practical strategies to transform your entrepreneurial vision into reality on a minimal budget.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                  }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Started Free
                  </button>
                  <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 border-2 border-cyan-600">
                  View Business Ideas
                  </button>
               </div>
            </div>
            {/* Right Image */}
            <div className="relative w-full flex justify-center lg:justify-end">
               <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                  alt="Entrepreneur brainstorming business ideas"
                  className="w-full max-w-lg rounded-2xl shadow-xl border border-gray-200"
                  />
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-200 rounded-full opacity-30"></div>
               <div className="absolute -top-6 -right-4 w-20 h-20 bg-teal-200 rounded-full opacity-30"></div>
            </div>
         </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-cyan-200 to-transparent rounded-tl-full opacity-20"></div>
   </section>
   {/* Can You Start with No Money Section */}
   <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <Target className="w-5 h-5" />
                  THE REALITY
               </div>
               <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                  Yes, You Can Start with Zero Capital
               </h2>
               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The entrepreneurial journey doesn't require a hefty bank account. While traditional business wisdom once demanded significant startup capital, today's landscape has transformed dramatically.
               </p>
               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Creative thinking, resourcefulness, and leveraging existing skills can replace capital investment. Thousands of successful businesses launch daily with minimal or zero upfront costs, proving that financial constraints shouldn't prevent you from pursuing your entrepreneurial dreams.
               </p>
               <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg">
                  <p className="text-gray-700 font-medium">
                     "The best time to start a business is when you have the passion and determination. The money will follow if the idea is solid."
                  </p>
               </div>
            </div>
            <div className="relative">
               <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="bg-cyan-600 text-white p-3 rounded-lg">
                           <Lightbulb className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-gray-900 mb-2">Innovation Over Investment</h3>
                           <p className="text-gray-600">Smart strategies matter more than startup capital</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-teal-600 text-white p-3 rounded-lg">
                           <Rocket className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-gray-900 mb-2">Fast Market Entry</h3>
                           <p className="text-gray-600">Launch quickly and iterate based on real feedback</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-cyan-600 text-white p-3 rounded-lg">
                           <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
                           <p className="text-gray-600">Build profitably by reinvesting your earnings</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* Skills & Expertise Section */}
   <section className="py-16 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-4">
               <Target className="w-5 h-5" />
               YOUR FOUNDATION
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
               Leverage What You Already Know
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
               Your existing skills, passions, hobbies, and professional qualifications are valuable assets. The key is identifying how your competencies can solve real problems for potential customers.
            </p>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
               <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-cyan-600" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Creative Skills</h3>
               <p className="text-gray-600">Design, writing, photography, or artistic abilities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
               <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-teal-600" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Technical Expertise</h3>
               <p className="text-gray-600">Programming, data analysis, or IT knowledge</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
               <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-cyan-600" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Communication</h3>
               <p className="text-gray-600">Teaching, coaching, or public speaking abilities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
               <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-cyan-600" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Professional Experience</h3>
               <p className="text-gray-600">Industry insights and specialized knowledge</p>
            </div>
         </div>
      </div>
   </section>
   {/* Business Ideas Section */}
   <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-4">
               <Sparkles className="w-5 h-5" />
               OPPORTUNITIES
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
               Six Low-Cost Business Models
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
               Explore proven business concepts that require minimal upfront investment while offering significant growth potential.
            </p>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessIdeas.map((idea, index) => (
            <div
               key={index}
               className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 group"
               >
               <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors duration-300">
                  <idea.icon className="w-7 h-7 text-cyan-600" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">{idea.title}</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">{idea.description}</p>
               <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex flex-wrap gap-2">
                     {idea.platforms.map((platform, idx) => (
                     <span
                        key={idx}
                        className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                     {platform}
                     </span>
                     ))}
                  </div>
                  <p className="text-sm font-semibold text-cyan-600">{idea.cost}</p>
               </div>
            </div>
            ))}
         </div>
      </div>
   </section>
   {/* Funding Options Section */}
   <section className="py-16 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-4">
               <DollarSign className="w-5 h-5" />
               CAPITAL ACCESS
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
               Funding Strategies for Growth
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
               When you need capital to scale, multiple financing options exist to support your expansion without requiring massive personal investment.
            </p>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {fundingOptions.map((option, index) => (
            <div
               key={index}
               className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
               >
               <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-cyan-700" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
               <p className="text-gray-600 leading-relaxed">{option.description}</p>
            </div>
            ))}
         </div>
      </div>
   </section>
   {/* Business Planning Section */}
   <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <FileText className="w-5 h-5" />
                  FOUNDATION
               </div>
               <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                  Essential Business Planning Elements
               </h2>
               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A solid business plan transforms your vision into actionable steps. Even with zero startup capital, planning ensures you make strategic decisions and allocate resources effectively.
               </p>
               <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                  <p className="text-gray-700 font-medium mb-2">Pro Tip:</p>
                  <p className="text-gray-600">
                     Start with a one-page business plan. You can expand it as your business grows and you gather real market data.
                  </p>
               </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8">
               <div className="space-y-4">
                  {planningElements.map((element, index) => (
                  <div
                     key={index}
                     className="flex items-start gap-4 p-4 rounded-lg hover:bg-cyan-50 transition-colors duration-200"
                     >
                     <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                     <p className="text-gray-700 font-medium">{element}</p>
                  </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* Legal Formation Section */}
   <section className="py-16 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <Shield className="w-5 h-5" />
                  LEGAL STRUCTURE
               </div>
               <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                  Protect Your Business and Personal Assets
               </h2>
               <p className="text-xl text-gray-600 leading-relaxed">
                  Choosing the right business structure is crucial for liability protection, tax benefits, and professional credibility.
               </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="border-2 border-cyan-200 rounded-xl p-6 bg-cyan-50">
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Liability Company</h3>
                     <p className="text-gray-600 mb-4">
                        Approximately 80% of small businesses choose the LLC structure for its perfect balance of simplicity, flexibility, and protection.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700">Separates personal and business assets</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700">Simple tax treatment and reporting</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700">Minimal compliance requirements</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700">Enhanced business credibility</span>
                        </li>
                     </ul>
                  </div>
                  <div className="border-2 border-gray-200 rounded-xl p-6">
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">DBA Registration</h3>
                     <p className="text-gray-600 mb-4">
                        A "Doing Business As" name allows you to operate under a different name but provides no legal protection.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                           <div className="w-5 h-5 flex-shrink-0 mt-0.5 border-2 border-gray-400 rounded-full"></div>
                           <span className="text-gray-700">No liability protection</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-5 h-5 flex-shrink-0 mt-0.5 border-2 border-gray-400 rounded-full"></div>
                           <span className="text-gray-700">Personal assets remain at risk</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-5 h-5 flex-shrink-0 mt-0.5 border-2 border-gray-400 rounded-full"></div>
                           <span className="text-gray-700">Limited tax advantages</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700">Quick and inexpensive to file</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl p-6 text-white text-center">
                  <p className="text-lg font-semibold mb-2">Many services offer affordable LLC formation</p>
                  <p className="text-cyan-100">Some providers even offer $0 formation options to help you get started</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* FAQ Section */}
   <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-4">
               <MessageSquare className="w-5 h-5" />
               COMMON QUESTIONS
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
               Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
               Get answers to the most common questions about starting a business with limited capital.
            </p>
         </div>
         <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div
               key={index}
               className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-cyan-200 transition-colors duration-200"
               >
               <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
               className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
               >
               <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
               <ChevronDown
               className={`w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
               openFaq === index ? 'transform rotate-180' : ''
               }`}
               />
               </button>
               <div
               className={`overflow-hidden transition-all duration-300 ${
               openFaq === index ? 'max-h-96' : 'max-h-0'
               }`}
               >
               <div className="p-6 pt-0 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
               </div>
            </div>
         </div>
         ))}
      </div>
</div>
</section>
{/* CTA Section */}
<section className="py-16 bg-gradient-to-br from-cyan-600 to-teal-600">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
         Ready to Launch Your Business?
      </h2>
      <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
         Don't let limited funds hold you back from pursuing your entrepreneurial dreams. Start building your business today with the resources you already have.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <button onClick={() => {
         setSelectedBusinessType('');
         setIsModalOpen(true);
         }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl transform hover:scale-105">
         Start Your Free LLC
         </button>
         <button className="bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-800 transition-all duration-200 border-2 border-white">
         Explore Resources
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