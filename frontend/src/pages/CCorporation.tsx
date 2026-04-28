import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { FileText,
ShieldCheck,
Briefcase,
Bell,
Users,
BarChart3, ArrowRight, DollarSign, Clock } from 'lucide-react';
const benefits = [
{
icon: FileText,
title: "Streamlined C Corporation Registration",
description:
"Register your C Corporation with a simplified online process. We assist with preparing and filing Articles of Organization and other required incorporation documents."
},
{
icon: ShieldCheck,
title: "Legal Document Templates",
description:
"Access professionally prepared business contract templates and essential legal documents so you can operate confidently without expensive legal fees."
},
{
icon: Briefcase,
title: "Fast EIN Application Support",
description:
"Apply for your Employer Identification Number (EIN) quickly. This allows your corporation to open bank accounts, hire employees, and manage taxes."
},
{
icon: Users,
title: "Registered Agent Service",
description:
"Receive a complimentary first year of registered agent service to help manage official state correspondence and compliance requirements."
},
{
icon: Bell,
title: "Compliance Alerts & Notifications",
description:
"Stay on track with automated reminders for filings, deadlines, and compliance updates so your corporation remains in good standing."
},
{
icon: BarChart3,
title: "Business Growth Tools",
description:
"Access a centralized dashboard where you can manage documents, services, and additional tools designed to support your company's growth."
}
];
export default function App() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
return (
<div className="flex flex-col">
   <Helmet>
      {/* Primary SEO */}
      <title>
         C Corporation Formation in USA – Register a C Corp | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Form a C Corporation in the USA with The Future Perfect Global. Expert support for C Corp registration, EIN application, shareholder structure, compliance, and corporate advisory services."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/c-corporation"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="C corporation formation USA, register C corp USA, C corp registration USA, start a C corporation in USA, US C corp incorporation, EIN for C corporation, C corp compliance USA, startup incorporation USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/c-corporation"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/c-corporation"
         hrefLang="x-default"
         />
      <meta name="robots" content="index, follow" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="C Corporation Formation in USA – Register Your C Corp"
         />
      <meta
         property="og:description"
         content="Incorporate a C Corporation in the USA with professional guidance. We assist with C Corp registration, EIN application, compliance, and growth-focused advisory."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/c-corporation"
         />
      <meta
         property="og:site_name"
         content="The Future Perfect Global – USA C Corporation Services"
         />
      <meta
         property="og:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      <meta
         property="og:image:alt"
         content="C Corporation Formation Services in USA by The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="C Corporation Formation in USA – C Corp Registration Services"
         />
      <meta
         name="twitter:description"
         content="Register a C Corporation in the USA with expert assistance. Incorporation, EIN registration, compliance, and corporate advisory services."
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
           "name": "C Corporation Formation in USA",
           "url": "https://us.thefutureperfectglobal.com/c-corporation",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "url": "https://us.thefutureperfectglobal.com/",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "Professional C Corporation formation services in the USA including incorporation, EIN registration, shareholder structuring, and ongoing compliance support.",
           "areaServed": [
             "United States",
             "Delaware",
             "California",
             "New York",
             "Texas",
             "Florida",
             "Nevada",
             "Wyoming"
           ],
           "serviceType": [
             "C Corporation Registration USA",
             "Startup Incorporation",
             "EIN Application",
             "Corporate Compliance",
             "Business & Investor Advisory"
           ]
         }`}
      </script>
   </Helmet>

   {/* ===================== HERO SECTION — UPDATED ===================== */}
   <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-12 overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80"
            alt="C Corporation Formation USA"
            className="w-full h-full object-cover opacity-10 scale-110 animate-pulse"
          />
      </div>

      {/* Floating Glow Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            #1 Trusted C Corp Formation Service in the USA
          </div>

          {/* H1 — Primary SEO Keyword in Heading */}
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-base">
            Register a C Corporation in the USA{" "}
            <span className="text-cyan-500">
                Online — Free to Start
            </span>
          </h1>

          {/* SEO-rich subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
            The fastest way to incorporate a <strong className="text-white">C Corporation in the United States</strong>. 
            We handle your Articles of Incorporation, EIN registration, corporate bylaws, 
            registered agent service, and ongoing compliance — all in one place.
          </p>
          <p className="text-base text-gray-400 mb-8">
            Trusted by <strong className="text-cyan-400">500+ startups & entrepreneurs</strong> across all 50 states. 
            Delaware · California · Texas · New York · Nevada · Florida · Wyoming.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
            }}
            className="inline-block bg-cyan-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-700 transition-all duration-300 shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
          >
            Start Your C Corporation Today →
          </button>

          {/* Trust Signals Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-1">✓ No Hidden Fees</span>
            <span className="flex items-center gap-1">✓ 24-Hour Processing Available</span>
            <span className="flex items-center gap-1">✓ 95% Approval Rate</span>
            <span className="flex items-center gap-1">✓ IRS EIN Included</span>
          </div>

          {/* Quick Stats Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
              <div className="text-3xl font-extrabold text-cyan-400">500+</div>
              <p className="text-xs text-gray-400 mt-1">C Corps Formed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
              <div className="text-3xl font-extrabold text-cyan-400">50</div>
              <p className="text-xs text-gray-400 mt-1">States Covered</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
              <div className="text-3xl font-extrabold text-cyan-400">24hrs</div>
              <p className="text-xs text-gray-400 mt-1">Fast Processing</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
              <div className="text-3xl font-extrabold text-cyan-400">95%</div>
              <p className="text-xs text-gray-400 mt-1">Approval Rate</p>
            </div>
          </div>
      </div>
    </section>
   {/* ===================== END HERO SECTION ===================== */}

   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">95%</div>
               <p className="text-gray-600">Approval Rate</p>
            </div>
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">24hrs</div>
               <p className="text-gray-600">Average Processing</p>
            </div>
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">500+</div>
               <p className="text-gray-600">Companies Formed</p>
            </div>
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">50</div>
               <p className="text-gray-600">States Supported</p>
            </div>
         </div>
      </div>
   </section>

   <section className="bg-cyan-100/50 py-20" aria-labelledby="c-corp-guide-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
               id="c-corp-guide-heading"
               className="text-4xl md:text-5xl font-extrabold text-gray-900"
               >
               Simplify Your C Corporation{" "}
               <span className="text-cyan-600">Formation</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600">
               Starting a C Corporation involves legal paperwork, regulatory
               filings, and compliance requirements. Our streamlined online
               incorporation service helps entrepreneurs register their
               businesses faster while avoiding unnecessary costs and delays.
            </p>
         </div>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
               <div className="bg-gray-100 rounded-2xl shadow-xl p-6">
                  <img
                     src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80"
                     alt="Online C Corporation formation dashboard interface"
                     className="rounded-xl w-full max-w-md"
                     loading="lazy"
                     />
               </div>
            </div>
            <div className="space-y-8">
               <div className="flex gap-5 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100">
                     <DollarSign className="text-cyan-600 w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900">
                        Complex Incorporation{" "}
                        <span className="text-cyan-600">Requirements</span>
                     </h3>
                     <p className="mt-2 text-gray-600">
                        Forming a C Corporation requires compliance with federal
                        regulations, state registration rules, and official
                        documentation. Without proper guidance, this multi-step
                        process can become time-consuming and expensive.
                     </p>
                  </div>
               </div>
               <div className="flex gap-3 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100">
                     <Clock className="text-cyan-600 w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900">
                        Faster and More Affordable C Corp{" "}
                        <span className="text-cyan-600">Filing</span>
                     </h3>
                     <p className="mt-2 text-gray-600">
                        Our modern online platform simplifies the filing process,
                        helping entrepreneurs create a C Corporation quickly and
                        efficiently. Reduce administrative work and focus on
                        growing your business instead of dealing with paperwork.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section
      className="bg-gray-50 py-20"
      aria-labelledby="c-corp-benefits-heading"
      >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="text-center max-w-5xl mx-auto mb-16">
            <h2
               id="c-corp-benefits-heading"
               className="text-4xl md:text-5xl font-extrabold text-gray-900"
               >
               Benefits of Forming a C Corporation{" "}
               <span className="text-cyan-600">Online</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
               Entrepreneurs choose our online incorporation platform to start
               their C Corporations quickly and confidently. Our tools simplify
               registration, reduce administrative work, and provide ongoing
               support to help businesses grow.
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }} className="mt-8 bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition shadow-lg">
            Start Your C Corporation
            </button>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((feature, index) => {
            const Icon = feature.icon;
            return (
            <article
               key={index}
               className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
               >
               <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mb-6">
                  <Icon className="w-6 h-6 text-cyan-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
               </h3>
               <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
               </p>
            </article>
            );
            })}
         </div>
      </div>
   </section>

   <section className="py-20 bg-gradient-to-br from-cyan-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
            Step-by-Step Guide to Forming a C Corporation{" "}
            <span className="text-cyan-600">Online</span>
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
               <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  01
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Determine If a C Corporation Is Right for Your{" "}
                  <span className="text-cyan-600">Business</span>
               </h3>
               <p className="text-gray-600 mb-6">
                  Answer a few quick questions about your startup or small business, and we'll help you decide whether forming a C Corp is the best structure based on tax benefits, liability protection, and long-term growth goals.
               </p>
               <ul className="space-y-2 text-sm text-gray-600">
                  <li>Business entity comparison (LLC vs C Corp vs S Corp)</li>
                  <li>Corporate tax structure overview</li>
                  <li>Scalability and investor-readiness analysis</li>
               </ul>
            </div>
            <div className="bg-white rounded-xl p-8">
               <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  02
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Select Your C Corporation Formation{" "}
                  <span className="text-cyan-600">Package</span>
               </h3>
               <p className="text-gray-600 mb-6">
                  Choose from affordable C Corporation formation packages designed to cover state filing, corporate bylaws preparation, EIN assistance, and compliance services — all with transparent pricing and no hidden fees.
               </p>
               <ul className="space-y-2 text-sm text-gray-600">
                  <li>Basic and premium incorporation options</li>
                  <li>Upfront, transparent pricing</li>
                  <li>Optional registered agent and compliance add-ons</li>
               </ul>
            </div>
            <div className="bg-white rounded-xl p-8">
               <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  03
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  We File Your C Corp & Handle{" "}
                  <span className="text-cyan-600">Compliance</span>
               </h3>
               <p className="text-gray-600 mb-6">
                  Our incorporation experts prepare and submit your C Corporation documents to the state, ensure accurate filing, and help you meet ongoing corporate compliance requirements so you can focus on growing your business.
               </p>
               <ul className="space-y-2 text-sm text-gray-600">
                  <li>Professional document preparation</li>
                  <li>State C Corp filing submission</li>
                  <li>Ongoing corporate compliance support</li>
               </ul>
            </div>
         </div>
      </div>
   </section>

   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
            What Happens After You File Your{" "}
            <span className="text-cyan-600">C Corporation?</span>
         </h2>
         <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Here's what to expect after you start your C Corporation formation, including the state filing process, document preparation, and your official incorporation approval timeline.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <div className="bg-blue-100/50 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                     Immediate Steps{" "}
                     <span className="text-cyan-600">(Day 1)</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Confirmation email with order details</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Access to your online dashboard</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Questionnaire to gather company details</span>
                     </li>
                  </ul>
               </div>
               <div className="bg-blue-100/50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                     Processing Phase{" "}
                     <span className="text-cyan-600">(Days 2–5)</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Document preparation by legal team</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Review and approval from your side</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Filing submission to your state</span>
                     </li>
                  </ul>
               </div>
            </div>
            <div>
               <div className="bg-blue-100/50 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                     Approval & Launch{" "}
                     <span className="text-cyan-600">(Days 5–10)</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Certificate of Incorporation received</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>EIN number assigned by IRS</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Complete documentation package</span>
                     </li>
                  </ul>
               </div>
               <div className="bg-blue-100/50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                     Post-Formation{" "}
                     <span className="text-cyan-600">Support</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Ongoing compliance calendar alerts</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>24/7 customer support available</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Guidance on next business steps</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="py-20 bg-yellow-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Loved by{" "}
            <span className="text-cyan-600">500+</span>
         </h2>
         <p className="text-2xl text-gray-600 mb-12">entrepreneurs across all 50 states</p>
         <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="text-center">
               <div className="text-3xl font-bold text-cyan-600">500+</div>
               <p className="text-gray-600 text-sm">Businesses Formed</p>
            </div>
            <div className="text-center">
               <div className="text-3xl font-bold text-cyan-600">90%</div>
               <p className="text-gray-600 text-sm">Customer Satisfaction</p>
            </div>
            <div className="text-center">
               <div className="text-3xl font-bold text-cyan-600">50</div>
               <p className="text-gray-600 text-sm">States Supported</p>
            </div>
            <div className="text-center">
               <div className="text-3xl font-bold text-cyan-600">24/7</div>
               <p className="text-gray-600 text-sm">Expert Support</p>
            </div>
         </div>
         <button onClick={() => {
         setSelectedBusinessType('');
         setIsModalOpen(true);
         }} className="inline-block bg-cyan-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-700 transition-colors">
         Get Started Today
         </button>
      </div>
   </section>

   <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-16">
            Common Questions About Starting a{" "}
            <span className="text-cyan-600">C-Corporation</span>
         </h2>
         <div className="space-y-3">
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>How much does it cost to form a C-Corporation?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">Costs vary by state but typically range from $100-$300 in state filing fees. Our service fees start at $99 and go up based on the package you choose, which includes professional preparation and filing.</p>
            </details>
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>How long does it take to form a C-Corporation?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">Most C-Corporations are approved within 3-7 business days. We handle all the paperwork and submissions, so you don't have to worry about the details. Our expedited option can get you approved in as little as 24 hours.</p>
            </details>
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>Do I need a lawyer to form a C-Corporation?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">While not strictly required, our service provides expert guidance that replaces the need for a lawyer. We handle all documentation and filings according to your state's requirements, saving you money and time.</p>
            </details>
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>What's the difference between a C-Corp and an S-Corp?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">A C-Corporation pays corporate taxes, while an S-Corporation is a tax election that allows pass-through taxation. C-Corps can have unlimited shareholders and different stock classes, while S-Corps are limited to 100 shareholders and one stock class.</p>
            </details>
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>Can I convert my sole proprietorship to a C-Corporation?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">Yes, you can convert your existing business to a C-Corporation. We assist with the transition process, including entity conversion filings and ensuring proper handling of your assets and liabilities.</p>
            </details>
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>What is double taxation, and how can I minimize it?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">Double taxation occurs when a C-Corporation pays corporate taxes and shareholders pay personal taxes on dividends. You can minimize this by retaining profits in the business, taking reasonable salary deductions, or electing S-Corp status for tax purposes.</p>
            </details>
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>Do I need an EIN for my C-Corporation?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">Yes, all C-Corporations need an Employer Identification Number (EIN) from the IRS. We handle the EIN application process for you as part of our service, so you'll have it before you need to open a business bank account.</p>
            </details>
            <details className="bg-cyan-100/30 rounded-lg p-6 group">
               <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>What ongoing requirements do C-Corporations have?</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">+</span>
               </summary>
               <p className="mt-4 text-gray-700">C-Corporations must file annual reports, maintain corporate records, hold shareholder meetings, and pay taxes. We provide reminders and support for these compliance requirements, ensuring you stay on top of your obligations.</p>
            </details>
         </div>
      </div>
   </section>

   <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-5xl font-extrabold mb-6">
            Ready to Start Your C-Corporation{" "}
            <span className="text-cyan-200">Journey?</span>
         </h2>
         <p className="text-xl mb-12 opacity-90">Join over 1 million entrepreneurs who have successfully incorporated their businesses. Get started today with expert guidance and transparent pricing.</p>
         <button onClick={() => {
         setSelectedBusinessType('');
         setIsModalOpen(true);
         }} className="inline-block bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors">
         Form Your C-Corporation Now
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