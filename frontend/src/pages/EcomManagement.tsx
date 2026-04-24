import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function EcomManagement() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO Content
const challenges = [
  "Managing multiple e-commerce platforms like Amazon, eBay, and Shopify efficiently.",
  "Low product visibility and poor search rankings on marketplaces.",
  "Time-consuming product listing and catalog management.",
  "Inventory mismatches and order processing delays.",
  "Handling customer queries, returns, and negative reviews effectively.",
];

const services = [
  "Amazon, eBay, and marketplace store setup and management.",
  "Product listing optimization with SEO-friendly titles and descriptions.",
  "Inventory management and order processing support.",
  "Customer service, feedback management, and review handling.",
  "Marketplace advertising (Amazon PPC) and sales growth strategies.",
];

const benefits = [
  "Increased product visibility and higher marketplace rankings",
  "Improved sales conversions and revenue growth",
  "Reduced operational workload and management costs",
  "Accurate inventory and faster order fulfillment",
  "Enhanced customer satisfaction and brand reputation",
];

const faqs = [
{
q: "What is e-commerce store management outsourcing?",
a: "E-commerce store management outsourcing involves delegating daily operations of online stores such as Amazon, eBay, and Shopify to experts who handle listings, inventory, orders, and customer support efficiently."
},
{
q: "Which platforms do you support?",
a: "We provide end-to-end support for major platforms including Amazon, eBay, Shopify, WooCommerce, Walmart Marketplace, and other global e-commerce platforms."
},
{
q: "How does outsourcing improve product visibility?",
a: "We optimize product listings with keyword-rich titles, descriptions, backend keywords, and images to improve search rankings and increase visibility on platforms like Amazon and eBay."
},
{
q: "Can you help increase sales on Amazon and eBay?",
a: "Yes, we use proven strategies including SEO optimization, PPC advertising, pricing strategies, and competitor analysis to boost conversions and sales performance."
},
{
q: "Do you manage inventory and order processing?",
a: "Yes, our team ensures accurate inventory tracking, timely order processing, shipping coordination, and returns management to maintain smooth operations."
},
{
q: "How do you handle customer support?",
a: "We provide professional customer service, including responding to inquiries, resolving complaints, managing returns, and maintaining positive seller ratings."
},
{
q: "Is my store data secure with outsourcing?",
a: "Absolutely. We follow strict data security protocols, secure access systems, and confidentiality agreements to ensure complete protection of your business data."
},
{
q: "Can small businesses benefit from e-commerce outsourcing?",
a: "Yes, startups and small businesses benefit greatly by saving time, reducing costs, and gaining access to expert strategies that help scale their online store quickly."
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
E-Commerce Store Management
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
E-Commerce Store Management Services for Amazon, eBay & Online Marketplaces
</h1>

<p className="mt-6 text-lg text-slate-300">
Scale your online business with expert e-commerce outsourcing services designed to optimize listings, manage operations, and increase sales across multiple platforms.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our e-commerce store management services help businesses efficiently handle product listings, inventory, order processing, and customer support while maximizing visibility and revenue on platforms like Amazon and eBay.
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
src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
alt="Ecommerce Management"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End E-Commerce Store Management Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Managing an online store requires continuous optimization, accurate operations, and strategic marketing. Our outsourcing solutions help businesses streamline their e-commerce operations and focus on growth.
</p>

<p className="mt-4 text-base text-slate-600">
From product listing optimization to inventory control and customer engagement, we ensure your store runs efficiently while improving visibility and conversions.
</p>

<div className="mt-6 space-y-3">

{[
"SEO-optimized product listings",
"Multi-platform store management",
"Real-time inventory tracking",
"Customer-focused support system"
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
Key Benefits of E-Commerce Outsourcing
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
🚀 E-Commerce Growth Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Scale Your Online Store with
<span className="block text-cyan-200">
Expert Marketplace Management
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Boost visibility, increase conversions, and streamline operations with our professional e-commerce outsourcing services for Amazon, eBay, and beyond.
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