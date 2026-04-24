import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function ContentWriting() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Struggling to create consistent and high-quality content regularly.",
  "Low website traffic due to poor keyword targeting and SEO strategy.",
  "Content that fails to engage users or convert into customers.",
  "Difficulty maintaining originality and avoiding plagiarism.",
  "Lack of structured content strategy across blogs, websites, and marketing channels.",
];

const services = [
  "SEO content writing including blogs, articles, and website content.",
  "Keyword research and content optimization for better rankings.",
  "Engaging blog writing to attract and retain audience.",
  "Website content creation for landing pages and service pages.",
  "Content strategy planning and ongoing content development support.",
];

const benefits = [
  "Higher search engine rankings and organic traffic",
  "Engaging and conversion-focused content",
  "Improved brand authority and credibility",
  "Consistent content publishing and growth",
  "Better user engagement and retention",
];

const faqs = [
{
q: "What is content development?",
a: "Content development involves creating, optimizing, and managing content such as blogs, articles, and website pages to attract and engage users while improving search rankings."
},
{
q: "Why is SEO content important?",
a: "SEO content helps your website rank higher on search engines by using targeted keywords and structured content strategies."
},
{
q: "Do you provide blog writing services?",
a: "Yes, we create engaging and SEO-friendly blog content to drive traffic and build audience engagement."
},
{
q: "How do you ensure content quality?",
a: "We follow strict quality checks, in-depth research, and ensure all content is original, engaging, and optimized."
},
{
q: "Can you optimize existing content?",
a: "Yes, we improve existing content by optimizing keywords, structure, and readability for better performance."
},
{
q: "Do you provide keyword research?",
a: "Yes, we conduct detailed keyword research to target the right audience and improve rankings."
},
{
q: "Is the content plagiarism-free?",
a: "Absolutely. All content is 100% original and checked using plagiarism tools."
},
{
q: "Do you offer ongoing content services?",
a: "Yes, we provide continuous content creation and management services for long-term growth."
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
Content Development Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
High-Quality Content Development Services to Grow Your Business
</h1>

<p className="mt-6 text-lg text-slate-300">
Create engaging, SEO-friendly, and conversion-driven content that boosts your online presence.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We help businesses attract, engage, and convert audiences with professionally crafted content including blogs, articles, and website pages optimized for search engines.
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
src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80"
alt="Content Development"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
Professional Content Writing & Development Services
</h2>

<p className="mt-6 text-base text-slate-600">
Content plays a crucial role in driving traffic, building trust, and converting visitors into customers.
</p>

<p className="mt-4 text-base text-slate-600">
Our expert writers create high-quality, SEO-optimized content that enhances your brand visibility and supports your digital marketing strategy.
</p>

<div className="mt-6 space-y-3">

{[
"SEO-optimized blogs and website content",
"Keyword-driven content strategy",
"Engaging and reader-friendly writing",
"Scalable content solutions for business growth"
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
Benefits of Content Development Services
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
🚀 Content Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Grow Your Business with Powerful Content
<span className="block text-cyan-200">
That Drives Traffic & Conversions
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Build authority, improve rankings, and engage your audience with professionally crafted content.
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