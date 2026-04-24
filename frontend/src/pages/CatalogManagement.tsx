import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function CatalogManagement() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Managing large product catalogs with consistent and accurate data.",
  "Time-consuming manual product uploads and frequent updates.",
  "Inconsistent product images, descriptions, and pricing errors.",
  "Low visibility due to unoptimized product listings.",
  "Handling multi-channel selling across Amazon, Shopify, and other platforms.",
];

const services = [
  "End-to-end product catalog management and optimization.",
  "Bulk product upload, editing, and structured data management.",
  "SEO-friendly product titles, descriptions, and keyword optimization.",
  "Product image enhancement and standardization.",
  "Multi-platform catalog handling (Amazon, Shopify, WooCommerce, Magento).",
];

const benefits = [
  "Well-organized and accurate product catalog",
  "Higher product visibility on search engines",
  "Improved conversion rates with optimized listings",
  "Reduced manual effort through automation",
  "Efficient multi-channel product management",
];

const faqs = [
{
q: "What is catalog management in eCommerce?",
a: "Catalog management involves organizing, updating, and optimizing product data such as titles, descriptions, images, and pricing to ensure accuracy and improve online visibility."
},
{
q: "Why is catalog management important?",
a: "Proper catalog management improves product discoverability, enhances user experience, and increases conversion rates by presenting accurate and optimized product information."
},
{
q: "Do you support multiple eCommerce platforms?",
a: "Yes, we manage product catalogs across platforms like Amazon, Shopify, WooCommerce, Magento, and other marketplaces."
},
{
q: "Can you handle bulk product uploads?",
a: "Absolutely. We provide bulk product upload and editing services to save time and maintain consistency across large inventories."
},
{
q: "Do you optimize product listings for SEO?",
a: "Yes, we create SEO-optimized product titles, descriptions, and keywords to improve search rankings and visibility."
},
{
q: "Will my product data remain accurate?",
a: "We ensure data accuracy through structured processes, validation checks, and continuous updates."
},
{
q: "Can you manage images and product content?",
a: "Yes, we optimize product images and content to maintain consistency and improve conversion rates."
},
{
q: "Do you offer ongoing catalog support?",
a: "Yes, we provide continuous catalog management support including updates, monitoring, and optimization."
}
];

return (
<div className="bg-white text-slate-800">

{/* HERO */}
<section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
<div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-12 items-center">

<div>

<span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">
<Cloud className="mr-2 h-4 w-4" />
eCommerce Catalog Management Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Streamline & Optimize Your Product Catalog for Maximum Sales
</h1>

<p className="mt-6 text-lg text-slate-300">
Manage, optimize, and scale your product listings with our expert catalog management services.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We help businesses maintain accurate product data, improve search visibility, and enhance customer experience through structured catalog management solutions.
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
src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80"
alt="Catalog Management"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1600693615301-8752ab9411f6?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="text-3xl font-extrabold">
Professional eCommerce Catalog Management Services
</h2>

<p className="mt-6 text-base text-slate-600">
Ensure your product data is accurate, optimized, and consistent across all platforms with our expert catalog management solutions.
</p>

<p className="mt-4 text-base text-slate-600">
We help businesses manage product listings efficiently while improving visibility, performance, and customer engagement.
</p>

<div className="mt-6 space-y-3">

{[
"Accurate and structured product data management",
"SEO-optimized product listings for better rankings",
"Consistent product images and descriptions",
"Scalable solutions for growing inventories"
].map((item, i) => (
<div key={i} className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">{item}</p>
</div>
))}

</div>

</div>

</section>

{/* CHALLENGES + SERVICES */}
<section id="services" className="bg-cyan-100/40 py-16">
<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

<div className="bg-white p-8 rounded-3xl shadow">
<h3 className="text-2xl font-extrabold mb-6">Challenges</h3>
{challenges.map((item, i) => (
<div key={i} className="flex gap-3 mb-4">
<CheckCircle2 className="text-red-500"/>
<p>{item}</p>
</div>
))}
</div>

<div className="bg-white p-8 rounded-3xl shadow">
<h3 className="text-2xl font-extrabold mb-6">Services</h3>
{services.map((item, i) => (
<div key={i} className="flex gap-3 mb-4">
<CheckCircle2 className="text-cyan-600"/>
<p>{item}</p>
</div>
))}
</div>

</div>
</section>

{/* BENEFITS */}
<section className="py-16 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4">

<h2 className="text-5xl font-extrabold text-center">
Benefits of Catalog Management
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

<span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide">
🚀 Catalog Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Optimize Your Product Listings
<span className="block text-cyan-200">
& Grow Your Online Sales Faster
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Improve product visibility, increase conversions, and scale your eCommerce business with expert catalog management services.
</p>

<div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

<button
onClick={() => setIsModalOpen(true)}
className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-cyan-700 shadow-xl hover:bg-slate-100 transition-all"
>
Get Started Now
</button>

<a
href="#services"
className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
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