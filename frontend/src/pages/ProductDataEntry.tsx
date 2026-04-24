import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function ProductDataEntry() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Manual product data entry consumes time and increases operational costs.",
  "Inconsistent product information across multiple platforms.",
  "Errors in pricing, SKU, descriptions, and product attributes.",
  "Managing bulk product uploads from different data sources.",
  "Maintaining updated and accurate product listings regularly.",
];

const services = [
  "Bulk product data entry and upload services for eCommerce stores.",
  "Accurate product information entry including SKU, pricing, and specifications.",
  "Product categorization and attribute mapping for better navigation.",
  "Image processing, resizing, and naming standardization.",
  "Ongoing product updates, editing, and database management.",
];

const benefits = [
  "High accuracy in product data and listings",
  "Reduced operational workload and manual effort",
  "Faster product uploads and updates",
  "Improved product discoverability and SEO",
  "Consistent data across multiple sales channels",
];

const faqs = [
{
q: "What is product data entry in eCommerce?",
a: "Product data entry involves adding and managing product details such as title, description, price, SKU, images, and specifications in an online store."
},
{
q: "Why is product data accuracy important?",
a: "Accurate product data ensures better customer experience, reduces returns, and improves search rankings on eCommerce platforms."
},
{
q: "Do you support bulk product uploads?",
a: "Yes, we provide bulk product data entry services from multiple sources like Excel, PDFs, and supplier catalogs."
},
{
q: "Can you manage product data across multiple platforms?",
a: "Yes, we handle product listings on platforms like Amazon, Shopify, WooCommerce, Magento, and custom websites."
},
{
q: "Do you optimize product listings for SEO?",
a: "Yes, we create SEO-friendly titles, descriptions, and keywords to improve product visibility and ranking."
},
{
q: "How do you ensure data accuracy?",
a: "We follow strict quality checks, validation processes, and structured workflows to maintain high accuracy."
},
{
q: "Can you update existing product listings?",
a: "Yes, we provide ongoing support for updating product details, prices, images, and inventory."
},
{
q: "Do you offer ongoing support?",
a: "Yes, we provide continuous product data management and maintenance services."
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
Product Data Entry Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Accurate & Scalable Product Data Entry Services for eCommerce
</h1>

<p className="mt-6 text-lg text-slate-300">
Simplify product uploads, maintain accuracy, and scale your online store effortlessly.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We provide reliable and efficient product data entry solutions that ensure your product listings are accurate, consistent, and optimized for better visibility and conversions.
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
src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80"
alt="Product Data Entry"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1739527324181-e02978b400c0?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
Professional Product Data Entry Solutions for eCommerce Stores
</h2>

<p className="mt-6 text-base text-slate-600">
Managing product data efficiently is critical for the success of any eCommerce business.
</p>

<p className="mt-4 text-base text-slate-600">
We help businesses streamline product uploads, maintain data accuracy, and ensure consistency across all platforms.
</p>

<div className="mt-6 space-y-3">

{[
"Accurate product data entry with zero errors",
"SEO-optimized product titles and descriptions",
"Bulk upload and catalog structuring",
"Consistent data across all eCommerce platforms"
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
Benefits of Product Data Entry Services
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
🚀 Data Entry Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Streamline Your Product Data
<span className="block text-cyan-200">
& Scale Your eCommerce Business
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Ensure accurate listings, faster uploads, and better product visibility with our expert data entry services.
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