import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function PhotoEditing() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Low-quality images affecting product appeal and customer engagement.",
  "Time-consuming manual editing for large volumes of images.",
  "Inconsistent image formats, sizes, and backgrounds.",
  "Difficulty in maintaining visual consistency across platforms.",
  "Lack of professional tools and expertise for advanced editing.",
];

const services = [
  "Professional photo retouching and image enhancement services.",
  "Background removal, replacement, and color correction.",
  "Clipping path, image masking, and object isolation.",
  "Product image editing for eCommerce and marketplaces.",
  "Real estate, fashion, and portrait photo editing solutions.",
];

const benefits = [
  "High-quality and visually appealing images",
  "Improved customer engagement and conversions",
  "Consistent branding across all platforms",
  "Faster turnaround time for bulk editing",
  "Professional and polished visual presentation",
];

const faqs = [
{
q: "What is photo editing service?",
a: "Photo editing involves enhancing and modifying images using professional tools to improve quality, color, background, and overall visual appeal."
},
{
q: "Why is photo editing important for eCommerce?",
a: "High-quality images attract customers, improve trust, and increase conversion rates by showcasing products more effectively."
},
{
q: "Do you provide background removal services?",
a: "Yes, we offer background removal, replacement, and customization for all types of images."
},
{
q: "Can you handle bulk image editing?",
a: "Yes, we specialize in bulk image editing with fast turnaround and consistent quality."
},
{
q: "Do you offer product photo editing?",
a: "Yes, we edit product images for eCommerce platforms including Amazon, Shopify, and websites."
},
{
q: "What industries do you serve?",
a: "We serve eCommerce, real estate, fashion, photography studios, and digital agencies."
},
{
q: "How do you ensure quality?",
a: "We follow strict quality checks, professional workflows, and use advanced editing tools."
},
{
q: "Do you provide ongoing support?",
a: "Yes, we offer continuous photo editing support for businesses with regular image requirements."
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
Photo Editing Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Professional Photo Editing Services for Stunning Visuals
</h1>

<p className="mt-6 text-lg text-slate-300">
Enhance your images with high-quality editing and create a lasting impression.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We provide advanced photo editing solutions including retouching, background removal, and image enhancement to help businesses present visually appealing content.
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
src="https://images.unsplash.com/photo-1487537708572-3c850b5e856e?q=80"
alt="Photo Editing"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1647712452980-64c0d5bf5dbc?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
High-Quality Image Editing Solutions for Businesses
</h2>

<p className="mt-6 text-base text-slate-600">
Images play a crucial role in attracting customers and building brand credibility.
</p>

<p className="mt-4 text-base text-slate-600">
Our expert photo editing services ensure your visuals are professional, consistent, and optimized for better engagement and conversions.
</p>

<div className="mt-6 space-y-3">

{[
"Professional image enhancement and retouching",
"Consistent background and color adjustments",
"Optimized images for web and marketplaces",
"Scalable solutions for bulk image editing"
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
Benefits of Photo Editing Services
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
🚀 Editing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Transform Your Images
<span className="block text-cyan-200">
into High-Converting Visuals
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Boost your brand, improve engagement, and increase sales with professionally edited images.
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