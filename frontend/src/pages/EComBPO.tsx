import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function EComBPO() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO Optimized Content (eCommerce BPO)

const benefits = [
  "Increase online sales with SEO-optimized product listings.",
  "Save operational costs with eCommerce outsourcing services.",
  "Faster product uploads and catalog management.",
  "High accuracy with multi-level quality checks.",
  "Scalable solutions for growing online stores.",
  "Improved product visibility on search engines.",
  "Better inventory and order management efficiency.",
  "Focus on core business while experts handle backend operations."
];

const faqs = [
{
q: "What is eCommerce BPO services?",
a: "eCommerce BPO services involve outsourcing product data entry, catalog management, order processing, and backend operations to improve efficiency and reduce costs."
},
{
q: "Which platforms do you support?",
a: "We support Shopify, Amazon, WooCommerce, Magento, eBay, and other major eCommerce platforms."
},
{
q: "How does SEO product listing help?",
a: "SEO-optimized product listings improve search rankings, increase visibility, and drive more organic traffic to your online store."
},
{
q: "Do you handle bulk product uploads?",
a: "Yes, we specialize in bulk product data entry, uploads, and catalog management for large inventories."
},
{
q: "Is my eCommerce data secure?",
a: "Yes, we follow strict data security protocols and confidentiality agreements to protect your business data."
},
{
q: "Can you manage multiple marketplaces?",
a: "Yes, we manage product listings and data across multiple platforms like Amazon, Shopify, and eBay."
},
{
q: "Do you provide inventory management?",
a: "Yes, we handle stock updates, pricing changes, and inventory tracking efficiently."
},
{
q: "What is turnaround time?",
a: "Turnaround time depends on project size, but we ensure fast and efficient delivery."
},
{
q: "Can small businesses use your services?",
a: "Yes, our solutions are scalable and suitable for startups as well as large enterprises."
},
{
q: "How does outsourcing help eCommerce growth?",
a: "Outsourcing improves efficiency, reduces costs, and allows businesses to focus on marketing and sales growth."
}
];

const services = [
  "eCommerce account setup and onboarding",
  "Product photoshoot guidelines & image optimization",
  "Master catalog development & bulk product listing",
  "Order management and fulfillment support",
  "Inventory management and stock updates",
  "Payment reconciliation and financial tracking",
  "Return and claim management",
  "Customer support and query handling",
  "SEO product optimization and keyword targeting",
  "Account health management and performance monitoring",
  "Negative feedback and review management",
  "Product research and competitor analysis"
];

const steps = [
{
title: "Market Research & Analysis",
desc: "We perform in-depth market research and competitor analysis to position your products at the top of search results. Our pricing strategy ensures optimal profit margins while staying competitive.",
},
{
title: "Product Photoshoot & Image Optimization",
desc: "High-quality product images are optimized as per marketplace standards to increase engagement and conversions. We ensure your products create a strong first impression.",
},
{
title: "Product Data Collection",
desc: "We gather complete product specifications and attributes to improve search visibility and ensure accurate product listings across eCommerce platforms.",
},
{
title: "SEO Content Writing",
desc: "Our team creates SEO-optimized product titles, descriptions, and keywords to boost rankings, visibility, and conversions.",
},
{
title: "Pricing Strategy & Approval",
desc: "We analyze market pricing trends and finalize competitive pricing with your approval to maximize sales and profitability.",
},
{
title: "Master Catalog Management",
desc: "All product data, images, and details are organized into a structured master catalog for easy management, scalability, and updates.",
},
{
title: "Store Linking & Navigation",
desc: "We create optimized product URLs and internal linking structures to improve user experience and SEO performance.",
},
{
title: "Store Launch & Optimization",
desc: "Before going live, we perform complete QA checks including SEO, performance, security, and error handling to ensure a flawless store launch.",
}
];

const platforms = [
"Shopify", "WooCommerce", "Magento", "OpenCart", "BigCommerce",
"Volusion", "3DCart", "X-Cart", "Drupal Commerce", "Zepo", "Miva"
];

const servicess = [
"eCommerce Website Development",
"Product Listing & Data Entry Services",
"Catalog Management & Optimization",
"SEO & SEM Services for eCommerce",
"Backend Support & Store Management",
"Inventory & Data Management Solutions"
];

return (
<div className="bg-white text-slate-800">

{/* HERO */}
<section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
<div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-12 items-center">

<div>

<span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">
<Cloud className="mr-2 h-4 w-4" />
eCommerce BPO & Data Entry Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
eCommerce Data Entry Services | Outsource Product Listing & Catalog Management
</h1>

<p className="mt-6 text-lg text-slate-300">
Boost your online store with professional eCommerce data entry, product listing, and catalog management services.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We help businesses manage Shopify, Amazon, and eCommerce stores with SEO-optimized product listings, bulk uploads, and backend support.
</p>

<div className="mt-8 flex flex-wrap gap-4">

<button
onClick={() => {
setSelectedBusinessType('');
setIsModalOpen(true);
}}
className="bg-cyan-400 px-6 py-3 rounded-xl text-slate-900 font-semibold hover:bg-cyan-300 transition"
>
Get Started <ArrowRight className="inline ml-2 h-4 w-4"/>
</button>

<a
href="#services"
className="border border-white/20 px-6 py-3 rounded-xl text-white hover:bg-white/10 transition"
>
Explore Services
</a>

</div>

</div>

<div>
<img
src="https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80"
alt="eCommerce Data Entry Services"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80"
className="rounded-3xl shadow-lg"
/>
</div>
<div>

<h2 className="mt-6 text-3xl font-extrabold">
Build & Scale Your Online Store with Expert eCommerce Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Looking to transform your business into a high-performing online store? We help you create a powerful eCommerce website that is visually appealing like a product catalog, functional like a physical store, and optimized for conversions.
Our end-to-end eCommerce services include store development, product listing, catalog management, SEO optimization, and digital marketing to ensure your business stands out in the competitive online marketplace.
</p>

<div className="mt-6 space-y-3">

{[
"Complete eCommerce store setup & development",
"SEO-optimized product listings & catalog management",
"High-quality product images & content optimization",
"Scalable solutions to grow your online business"
].map((item, i) => (
<div key={i} className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">{item}</p>
</div>
))}

</div>

</div>
</section>

<section className="py-16 bg-cyan-100/40">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold text-slate-900">
        Complete eCommerce Solutions for High-Performance Online Stores
      </h2>
      <p className="mt-4 text-slate-600 text-lg">
        We provide end-to-end eCommerce services including product listing, SEO optimization, catalog management, and marketplace support to help your business grow faster online.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

      {/* Pre Listing */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-4 text-cyan-700">
          Product Listing Optimization
        </h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Professional product image editing & enhancement</li>
          <li>• Background removal, retouching & resizing</li>
          <li>• SEO product descriptions & keyword research</li>
          <li>• Optimized product titles for better rankings</li>
          <li>• Conversion-focused content writing</li>
        </ul>
      </div>

      {/* Catalog */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-4 text-cyan-700">
          Catalog Management & Data Processing
        </h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Master catalog creation & management</li>
          <li>• Product data collection & structuring</li>
          <li>• Pricing strategy & tax calculation</li>
          <li>• Bulk product upload & data compilation</li>
          <li>• Centralized database management</li>
        </ul>
      </div>

      {/* Store Setup */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-4 text-cyan-700">
          eCommerce Store Setup & Development
        </h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Account setup on Shopify, Amazon & marketplaces</li>
          <li>• Web-store creation & customization</li>
          <li>• Product listing & ongoing maintenance</li>
          <li>• Photoshoot guidelines & content strategy</li>
        </ul>
      </div>

      {/* Operations */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-4 text-cyan-700">
          eCommerce Operations Management
        </h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Order processing & fulfillment support</li>
          <li>• Inventory management & stock updates</li>
          <li>• Payment reconciliation & reporting</li>
          <li>• Return & claim management</li>
        </ul>
      </div>

      {/* Customer & Growth */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-4 text-cyan-700">
          Customer Support & Growth Optimization
        </h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Customer support & query handling</li>
          <li>• Product optimization for better conversions</li>
          <li>• Account health monitoring</li>
          <li>• Negative feedback & review management</li>
        </ul>
      </div>

      {/* Marketing */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-4 text-cyan-700">
          eCommerce Marketing & Marketplace Growth
        </h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Product research & competitor analysis</li>
          <li>• SEO & SEM strategy implementation</li>
          <li>• Marketplace promotions & campaign participation</li>
          <li>• Performance analytics & reporting</li>
        </ul>
      </div>

    </div>

  </div>
</section>

<section className="py-16 bg-gradient-to-b from-white to-slate-50">
<div className="max-w-7xl mx-auto px-4">

{/* HEADER */}
<div className="text-center max-w-4xl mx-auto">
<h2 className="text-4xl font-extrabold">
eCommerce Growth & Management Solutions
</h2>
<p className="mt-4 text-slate-600">
End-to-end eCommerce services to build, manage, and scale your online store with confidence.
</p>
</div>

{/* WHY US */}
<div className="mt-16 grid md:grid-cols-3 gap-6">

{[
{
title: "For New Stores",
desc: "Complete eCommerce store setup with product listing, SEO optimization, and launch strategy."
},
{
title: "For Existing Stores",
desc: "Optimize your existing store with better listings, SEO, and performance improvements."
},
{
title: "For Growing Businesses",
desc: "Scale operations with catalog management, automation, and expert support."
}
].map((item, i) => (
<div key={i} className="bg-cyan-100/40 rounded-2xl p-6 shadow hover:shadow-lg transition">
<h3 className="text-xl font-bold">{item.title}</h3>
<p className="mt-3 text-slate-600">{item.desc}</p>
</div>
))}

</div>

{/* WHY GO ONLINE */}
<div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">

<div>
<h3 className="text-3xl font-extrabold">
Why Take Your Business Online?
</h3>

<p className="mt-4 text-slate-600">
Online shopping is growing rapidly. Customers prefer convenience, speed, and accessibility. Having an eCommerce store ensures your business stays competitive and future-ready.
</p>

<p className="mt-4 text-slate-600">
Sell anytime, anywhere, and reach a global audience while increasing your revenue potential.
</p>

<div className="mt-6 space-y-3">
{[
"Reach customers globally",
"24/7 sales capability",
"Lower operational costs",
"Higher scalability"
].map((item, i) => (
<div key={i} className="flex gap-3">
<CheckCircle2 className="text-cyan-600"/>
<p>{item}</p>
</div>
))}
</div>

</div>

<div className="">
<div><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80" className="rounded-3xl shadow-lg" /></div>
</div>

</div>

{/* SERVICES */}
<div className="mt-20">

<h3 className="text-3xl font-extrabold text-center">
Our eCommerce Services
</h3>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

{services.map((item, i) => (
<div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow hover:shadow-md transition">
<CheckCircle2 className="text-cyan-600 mt-1"/>
<p className="text-slate-700">{item}</p>
</div>
))}

</div>

</div>

{/* OUTSOURCE */}
<div className="mt-20 bg-cyan-100/40 p-10 rounded-3xl shadow-lg">

<h3 className="text-3xl font-extrabold">
Why Outsource eCommerce Management?
</h3>

<p className="mt-4 text-slate-600">
Managing an online store requires time, skilled staff, and constant monitoring. Outsourcing helps reduce costs and ensures expert handling of your business.
</p>

<p className="mt-4 text-slate-600">
Focus on growing your business while we manage your store operations efficiently.
</p>

</div>

{/* SUCCESS */}
<div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

<div>
<h3 className="text-3xl font-extrabold">
How We Help You Grow
</h3>

<p className="mt-4 text-slate-600">
We optimize every aspect of your eCommerce store to improve visibility, conversions, and revenue.
</p>

<div className="mt-6 space-y-3">
{[
"SEO optimized product listings",
"High-quality product images",
"Conversion-focused descriptions",
"Review & rating management"
].map((item, i) => (
<div key={i} className="flex gap-3">
<CheckCircle2 className="text-cyan-600"/>
<p>{item}</p>
</div>
))}
</div>

</div>

<div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
<h4 className="text-2xl font-bold">Result-Driven Approach</h4>
<p className="mt-4 text-slate-300">
We focus on data, strategy, and execution to ensure your eCommerce store grows consistently.
</p>
</div>

</div>

</div>
</section>


<section className="py-16 bg-cyan-100/40 to-white">
<div className="max-w-7xl mx-auto px-4">

{/* HEADER */}
<div className="text-center max-w-4xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-extrabold">
Our eCommerce Process & Solutions
</h2>
<p className="mt-4 text-slate-600">
A complete step-by-step eCommerce strategy to build, optimize, and scale your online store for maximum growth and conversions.
</p>
</div>

{/* PROCESS STEPS */}
<div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{steps.map((step, i) => (
<div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border border-slate-100">

<div className="text-cyan-600 font-bold text-lg mb-2">
Step {i + 1}
</div>

<h3 className="text-xl font-semibold">
{step.title}
</h3>

<p className="mt-3 text-slate-600 text-base">
{step.desc}
</p>

</div>
))}

</div>

{/* PLATFORMS */}
<div className="mt-20">

<h3 className="text-3xl font-extrabold text-center">
Platforms We Work With
</h3>

<div className="flex flex-wrap justify-center gap-3 mt-8">

{platforms.map((item, i) => (
<span
key={i}
className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm shadow-sm hover:shadow transition"
>
{item}
</span>
))}

</div>

</div>

{/* SERVICES */}
<div className="mt-20">

<h3 className="text-3xl font-extrabold text-center">
Our eCommerce Services
</h3>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

{servicess.map((item, i) => (
<div key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

<CheckCircle2 className="text-cyan-600 mt-1"/>

<p className="text-slate-700 font-medium">
{item}
</p>

</div>
))}

</div>

</div>

</div>
</section>


{/* BENEFITS */}
<section className="py-16 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4">

<h2 className="text-5xl font-extrabold text-center">
Benefits of eCommerce Data Entry Outsourcing
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
{benefits.map((item, i) => (
<div key={i} className="bg-white/5 p-6 rounded-2xl">
<CheckCircle2 className="text-cyan-400 mb-3"/>
<p>{item}</p>
</div>
))}
</div>

</div>
</section>

{/* FAQ */}
<section className="bg-cyan-100/40 py-16">
<div className="max-w-5xl mx-auto px-4">

<h2 className="text-5xl font-extrabold text-center">
Frequently Asked Questions
</h2>

<div className="mt-10 space-y-4">

{faqs.map((faq, i) => (
<div key={i} className="bg-white rounded-2xl shadow">

<button
onClick={() => setOpenIndex(openIndex === i ? null : i)}
className="w-full flex justify-between items-center p-6"
>
<h3>{faq.q}</h3>
<ChevronDown className={`transition ${openIndex === i ? "rotate-180" : ""}`} />
</button>

{openIndex === i && (
<div className="px-6 pb-6 text-slate-600">
{faq.a}
</div>
)}

</div>
))}

</div>

</div>
</section>

{/* CTA */}
<section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-900 text-white py-12">

<div className="relative max-w-6xl mx-auto px-4 text-center">

<span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm">
🚀 eCommerce Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
Grow Your Online Store with eCommerce BPO Services
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto">
Outsource product data entry and focus on scaling your eCommerce business.
</p>

<div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

<button
onClick={() => setIsModalOpen(true)}
className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-cyan-700"
>
Get Started Now
</button>

<a
href="#services"
className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold"
>
Explore Services
</a>

</div>

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