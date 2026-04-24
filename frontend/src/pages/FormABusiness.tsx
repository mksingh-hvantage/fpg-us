import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { Star, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';
export default function FormABusiness() {
const [openFaq, setOpenFaq] = useState
<number | null>
(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const businessCards = [
{
title: 'Nonprofit Corporation Formation',
subtitle: 'Start a 501(c)(3) Tax-Exempt Organization',
icon: 'N',
color: 'bg-cyan-400'
},
{
title: 'C Corporation Formation',
subtitle: 'Best Structure for Startups & Investors',
icon: 'C',
color: 'bg-cyan-400',
badge: 'Most Popular'
},
{
title: 'S Corporation Formation',
subtitle: 'Save on Self-Employment Taxes',
icon: 'S',
color: 'bg-gray-700',
badge: null
},
{
title: 'LLC Formation Services',
subtitle: 'Fast & Affordable Business Registration',
icon: 'L',
color: 'bg-cyan-500',
badge: null,
}
];
const businessTypes = [
{
title: 'LLC Formation Services',
subtitle: 'Start an LLC Online – $0 + State Filing Fee',
description: 'Protect your personal assets and launch your business with affordable LLC registration and expert filing support.',
link: '/llc',
icon: 'L',
color: 'bg-cyan-500'
},
{
title: 'S Corporation (S Corp) Tax Election',
subtitle: 'Reduce Self-Employment Taxes with IRS Form 2553',
description: 'Elect S Corp status for your LLC or Corporation and maximize tax savings with proper IRS filing.',
link: '/s-corporation',
icon: 'S',
color: 'bg-gray-700'
},
{
title: 'C Corporation Formation Services',
subtitle: 'Incorporate a C Corp for Investors & Growth',
description: 'Register a C Corporation ideal for startups, venture capital funding, and scalable business expansion.',
link: '/c-corporation',
icon: 'C',
color: 'bg-cyan-400'
},
{
title: 'Nonprofit Formation (501(c)(3))',
subtitle: 'Start a Tax-Exempt Nonprofit Organization',
description: 'Form a nonprofit corporation and apply for 501(c)(3) tax-exempt status to support your mission.',
link: '/nonprofit',
icon: 'N',
color: 'bg-cyan-400'
}
];
const whyBizeeReasons = [
{
title: 'Start Your LLC for $0 + tSate Fees',
description: 'Form your LLC online at no service cost. Pay only the required state filing fee with transparent pricing and no hidden charges.'
},
{
title: 'Fast Online Business Formation',
description: 'Register your business in minutes with our streamlined LLC and corporation filing process. Quick approvals and hassle-free setup.'
},
{
title: 'Free Registered Agent & Privacy Protection',
description: 'Protect your personal address with a secure virtual business address and registered agent service included with your formation.'
},
{
title: 'Trusted Business Formation Experts',
description: 'Thousands of entrepreneurs trust us for LLC formation, EIN filing, and ongoing compliance support across the United States.'
}
];
const steps = [
{
number: '1',
title: 'Select the Right Business Structure (LLC, S-Corp, C-Corp or Nonprofit)',
description: 'Compare LLC vs Corporation options with expert guidance. We help you choose the best structure for tax benefits, liability protection, and long-term growth.'
},
{
number: '2',
title: 'Complete Our Simple Online Business Registration Form',
description: 'Provide your basic company details through our secure online form. We prepare and review all formation documents, EIN applications, and state filings for accuracy.'
},
{
number: '3',
title: 'We File Your Business Formation with the State',
description: 'Our team submits your LLC or corporation formation documents quickly and ensures full state compliance so you can start operating without delays.'
}
];
const faqs = [
{
question: "What services are included when forming a business with The Future Perfect Global?",
answer: "The Future Perfect Global provides end-to-end US business formation services, including entity selection guidance, state registration, document preparation and filing, registered agent assistance, EIN application support, and compliance guidance. The goal is to make the entire process simple, compliant, and suitable for both US residents and non-residents."
},
{
question: "Can non-US residents form a business in the United States?",
answer: "Yes, non-US residents can legally form and own a US business. You do not need a US visa or Social Security Number to register a company. The Future Perfect Global specializes in helping international entrepreneurs set up US businesses remotely with full compliance."
},
{
question: "Which business structure is best for forming a company in the USA?",
answer: "The most common options are LLCs and Corporations (C-Corp or S-Corp). LLCs are popular for small to medium businesses due to flexible management and pass-through taxation. C-Corps are preferred by startups seeking venture capital. The right structure depends on taxation, ownership, and growth plans."
},
{
question: "How long does it take to form a business in the USA?",
answer: "Business formation timelines depend on the state and entity type. In most cases, an LLC or Corporation can be registered within 3 to 10 business days. Expedited processing may be available in certain states for faster approvals."
},
{
question: "What documents are required to form a US company?",
answer: "Generally, you need basic personal details of the owners, a company name, business address, registered agent details, and management structure information. Non-residents typically only need a valid passport copy to start the process."
},
{
question: "What is a Registered Agent and why is it required?",
answer: "A Registered Agent is a mandatory requirement for all US businesses. They receive legal notices, government correspondence, and compliance documents on behalf of your company. The agent must have a physical address in the state of incorporation."
},
{
question: "Can I open a US bank account after forming my company?",
answer: "Yes, once your business is registered and you have an EIN, you can open a US business bank account. Depending on the bank, this can be done either remotely or by visiting the US. The Future Perfect Global assists with bank account guidance."
},
{
question: "What is an EIN and why do I need it?",
answer: "An EIN (Employer Identification Number) is issued by the IRS and is required for tax filing, opening a bank account, hiring employees, and conducting financial transactions. It acts as the tax ID for your US business."
},
{
question: "Which US state is best for business formation?",
answer: "Popular states include Delaware, Wyoming, and Florida due to business-friendly laws and tax benefits. However, the best state depends on your business activities, target market, and compliance needs. Expert guidance helps avoid unnecessary costs."
},
{
question: "Do I need a physical office in the USA to form a business?",
answer: "No, a physical office is not required to register a US company. Many businesses operate remotely using a registered agent and virtual address services while remaining fully compliant with state laws."
},
{
question: "What are the ongoing compliance requirements after company formation?",
answer: "US businesses must meet annual compliance requirements such as state annual reports, franchise taxes (if applicable), and federal tax filings. Failure to comply may result in penalties or loss of good standing."
},
{
question: "Is forming a US company legal for international eCommerce and online businesses?",
answer: "Yes, forming a US company is highly beneficial for eCommerce, SaaS, Amazon FBA, and digital businesses. It improves payment gateway access, customer trust, and global credibility."
},
{
question: "What taxes will my US business need to pay?",
answer: "Tax obligations depend on the business structure, state of incorporation, and whether you have US-sourced income. LLCs may have pass-through taxation, while C-Corps are subject to corporate tax. Professional tax guidance is recommended."
},
{
question: "Can I add partners or investors to my US company later?",
answer: "Yes, ownership structure can be updated after incorporation. LLC operating agreements and corporate bylaws can be amended to add partners, shareholders, or investors as your business grows."
},
{
question: "Why should I choose The Future Perfect Global for US business formation?",
answer: "The Future Perfect Global offers expert support, transparent pricing, global client experience, and personalized guidance for US business setup. From formation to compliance, they ensure a smooth and stress-free incorporation process."
}
];
return (
<div className="bg-white">
   <Helmet>
      {/* Primary SEO */}
      <title>
         Form a Business in USA – Company Registration & Setup Services | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Form a business in the USA with The Future Perfect Global. Expert assistance for company registration, LLC and corporation formation, EIN application, compliance, and end-to-end business setup services."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/business-formation/form-a-business"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="form a business in USA, business formation USA, company registration USA, start a business in USA, LLC or corporation USA, US business setup services, EIN application USA, incorporation services USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/business-formation/form-a-business"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/business-formation/form-a-business"
         hrefLang="x-default"
         />
      <meta name="robots" content="index, follow" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Form a Business in USA – Company Registration & Setup"
         />
      <meta
         property="og:description"
         content="Start your business in the USA with expert company formation support. We assist with registration, entity selection, EIN, compliance, and ongoing advisory."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/business-formation/form-a-business"
         />
      <meta
         property="og:site_name"
         content="The Future Perfect Global – USA Business Formation"
         />
      <meta
         property="og:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      <meta
         property="og:image:alt"
         content="USA Business Formation Services by The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Form a Business in USA – Company Registration Services"
         />
      <meta
         name="twitter:description"
         content="Get professional help to form a business in the USA. Company registration, EIN application, compliance, and expert advisory services."
         />
      <meta
         name="twitter:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
         {`{
           "@context": "https://schema.org",
           "@type": "Service",
           "name": "Business Formation in USA",
           "url": "https://us.thefutureperfectglobal.com/business-formation/form-a-business",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "url": "https://us.thefutureperfectglobal.com/",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "End-to-end business formation services in the USA including company registration, LLC and corporation setup, EIN application, and compliance support.",
           "areaServed": [
             "United States",
             "Delaware",
             "California",
             "Texas",
             "Florida",
             "New York",
             "Nevada",
             "Wyoming"
           ],
           "serviceType": [
             "Business Registration USA",
             "LLC & Corporation Formation",
             "EIN Application",
             "Compliance & Annual Filings",
             "Startup & Business Advisory"
           ]
         }`}
      </script>
   </Helmet>
   <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-16">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 w-fit">
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-300 ml-1.5 font-medium">4.5/5</span>
                <span className="text-sm text-slate-500 ml-1">· Trusted by thousands</span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight">
                Start Your LLC or{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Corporation Today.
                </span>
              </h1>
              <p className="mt-3 text-xl font-semibold text-slate-400 tracking-tight">
                Incorporate with Confidence.
              </p>
            </div>

            <p className="text-base text-slate-400 leading-relaxed max-w-lg">
              Form your LLC, S Corporation, C Corporation, or Nonprofit online with expert support.
              Fast registration, EIN filing, state compliance, and transparent pricing —
              <span className="text-slate-300 font-medium"> no hidden fees.</span>
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              {[
                { icon: <Shield size={14} className="text-cyan-400" />, label: 'No hidden fees' },
                { icon: <Zap size={14} className="text-cyan-400" />, label: 'Fast filing' },
                { icon: <Sparkles size={14} className="text-cyan-400" />, label: 'Expert support' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                START YOUR BUSINESS NOW
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="flex items-center justify-center gap-2 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 backdrop-blur-sm">
                View Pricing
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {businessCards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:scale-[1.01] hover:shadow-xl hover:shadow-black/30 backdrop-blur-sm"
                onClick={() => {
                  setSelectedBusinessType(card.title);
                  setIsModalOpen(true);
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${card.color} w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    {card.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-white">{card.title}</h3>
                      {card.badge && (
                        <span className="text-[10px] font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-200 truncate">
                      {card.subtitle}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                  />
                </div>
              </div>
            ))}

            <p className="text-center text-xs text-slate-600 pt-1">
              All entity types include registered agent & compliance support
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-2">
              {selectedBusinessType ? `Start a ${selectedBusinessType}` : 'Start Your Business'}
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              You selected: <span className="text-cyan-400 font-semibold">{selectedBusinessType || 'All options'}</span>
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200"
            >
              Continue
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full text-slate-500 hover:text-slate-300 mt-3 text-sm transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
   <section className="bg-cyan-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <p className="text-sm">
            <span className="font-bold">Bootstrapped. Founder Led. Independently Owned</span> Since 2004 With{' '}
            <span className="font-bold text-cyan-600">Over 500 Entrepreneurs Served!</span>
         </p>
      </div>
   </section>
   <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
               Choose Your Ideal Business Entity<br />Built for Growth, Protection & Tax Efficiency
            </h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {businessTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
               <div className="flex items-start justify-between mb-4">
                  <div className={`${type.color} w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-3xl`}>
                     {type.icon}
                  </div>
               </div>
               <h3 className="text-2xl font-black text-gray-900 mb-1">{type.title}</h3>
               {type.subtitle && (
               <p className="text-cyan-600 font-bold mb-3">{type.subtitle}</p>
               )}
               <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>
               <button
                  onClick={() => {
               setSelectedBusinessType(type.title);
               setIsModalOpen(true);
               }}
               className="text-cyan-600 font-bold hover:text-cyan-700 transition-all"
               >
               Learn More →
               </button>
            </div>
            ))}
         </div>
      </div>
   </section>
   <section className="py-20 bg-purple-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-5xl font-black text-gray-900 mb-4">
                  Trusted by 500+ Entrepreneurs for LLC & Corporation Formation
               </h2>
               <p className="text-2xl font-bold text-gray-900 mb-12">
                  Why Business Owners Choose The Future Perfect Global to Start & Register Their Company in the USA
               </p>
               <div className="space-y-8">
                  {whyBizeeReasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                     <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full border-2 border-cyan-500 flex items-center justify-center font-bold text-cyan-500">
                           {index + 1}
                        </div>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                     </div>
                  </div>
                  ))}
               </div>
               <button
                  onClick={() => {
               setSelectedBusinessType('');
               setIsModalOpen(true);
               }}
               className="mt-12 bg-cyan-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all"
               >
               GET PLANS & PRICING
               </button>
            </div>
            <div className="relative">
               <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm transform rotate-3 hover:rotate-0 transition-transform">
                     <div className="text-center">
                        <div className="bg-cyan-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-4">
                           B
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">ACME Inc.</h3>
                        <p className="text-gray-600 mb-6">Your business starts here</p>
                        <div className="space-y-3">
                           <div className="bg-cyan-50 rounded-lg p-3 text-left">
                              <p className="text-sm font-bold text-gray-900">Formation Complete</p>
                              <p className="text-xs text-gray-600">LLC filed in California</p>
                           </div>
                           <div className="bg-green-50 rounded-lg p-3 text-left">
                              <p className="text-sm font-bold text-gray-900">EIN Received</p>
                              <p className="text-xs text-gray-600">Ready for business</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                     src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                     alt="Entrepreneur working"
                     className="w-full h-full object-cover"
                     />
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="text-5xl font-black text-gray-900 mb-4">
                  Register Your Business in the USA in Just 3 Easy Steps
               </h2>
               <div className="space-y-8 mt-12">
                  {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                     <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
                           {step.number}
                        </div>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                     </div>
                  </div>
                  ))}
               </div>
               <button
                  onClick={() => {
               setSelectedBusinessType('');
               setIsModalOpen(true);
               }}
               className="mt-12 bg-cyan-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all"
               >
               START MY BUSINESS
               </button>
            </div>
         </div>
      </div>
   </section>
   <section className="py-20 bg-red-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-5xl font-black text-gray-900 mb-4">
            LLC vs S Corporation vs C Corporation vs Nonprofit —{' '}
            <span className="text-cyan-500">Compare Business Structures & Tax Benefits</span>
         </h2>
         <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choosing your business structure is a big deal, but it doesn't have to be a big mystery. We're here to make it clear, founder-focused, and forward-moving.
         </p>
         <a href="/business-formation/business-entity-comparison" className="bg-cyan-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all"
            >
         COMPARE BUSINESS TYPES
         </a>
      </div>
   </section>
   <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
               Got Questions? We've Got Answers.
            </h2>
         </div>
         <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
               <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
               className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all"
               >
               <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
               <span className="text-cyan-500 text-2xl flex-shrink-0">
               {openFaq === index ? '−' : '+'}
               </span>
               </button>
               {openFaq === index && (
               <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
               </div>
               )}
            </div>
            ))}
         </div>
      </div>
   </section>
   <section className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
         <img
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Background"
            className="w-full h-full object-cover"
            />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="max-w-3xl">
            <h2 className="text-6xl font-black mb-6 text-white leading-tight">
               Ready To Go From Idea To Launch?
            </h2>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed">
               We don't just help you build what's next. Let's make it official.
            </p>
            <button
               onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }}
            className="bg-cyan-500 text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-cyan-600 transition-all"
            >
            START NOW
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