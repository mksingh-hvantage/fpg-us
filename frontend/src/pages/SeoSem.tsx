import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function SeoSem() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Low rankings on Google and poor organic visibility.",
  "Not targeting the right keywords for your business niche.",
  "High ad spend but low conversions in PPC campaigns.",
  "Lack of proper SEO strategy, audits, and optimization.",
  "Weak social media presence and low engagement rates.",
];

const services = [
  "Complete SEO services including on-page, off-page, and technical SEO.",
  "Advanced keyword research, competitor analysis, and SEO audits.",
  "Pay-Per-Click (PPC) campaign setup, optimization, and ROI tracking.",
  "Social Media Marketing (SMM) and Social Media Optimization (SMO).",
  "Link building, content marketing, and performance reporting.",
];

const benefits = [
  "Top rankings on search engines like Google",
  "Increased organic traffic and qualified leads",
  "Higher ROI from paid campaigns (PPC)",
  "Stronger brand visibility across digital platforms",
  "Data-driven marketing strategies for long-term growth",
];

const faqs = [
{
q: "What services are included in SEO & SEM?",
a: "Our SEO services include on-page SEO (meta tags, content optimization), off-page SEO (backlink building), keyword research, and technical SEO improvements such as website speed and mobile optimization. Our SEM services focus on paid advertising including Google Ads, PPC campaigns, display ads, and remarketing strategies to drive instant traffic and high-quality leads."
},
{
q: "How does SEO help my business grow?",
a: "SEO helps improve your website’s visibility on search engines like Google, allowing your business to rank higher for relevant keywords. This leads to increased organic traffic, better brand awareness, and more potential customers. With effective SEO strategies, businesses can generate long-term traffic and sustainable growth without relying solely on paid ads."
},
{
q: "What is PPC and how does it work?",
a: "PPC (Pay-Per-Click) advertising is a digital marketing strategy where you pay only when someone clicks on your ad. Platforms like Google Ads and Meta Ads allow businesses to target specific audiences based on keywords, location, and interests. PPC campaigns help generate instant traffic, leads, and sales, making it ideal for quick results alongside long-term SEO efforts."
},
{
q: "Do you provide keyword research?",
a: "Yes, we conduct in-depth keyword research using advanced tools to identify high-search-volume, low-competition, and high-converting keywords. Our keyword strategy ensures your business targets the right audience, improves search engine rankings, and drives qualified traffic to your website."
},
{
q: "Can you improve my Google ranking?",
a: "Yes, we use proven and white-hat SEO techniques including content optimization, backlink building, technical SEO fixes, and on-page improvements to enhance your Google rankings. Our goal is to improve your visibility for targeted keywords and help your business appear on the first page of search results."
},
{
q: "Do you manage social media marketing?",
a: "Yes, we offer complete social media marketing services including content creation, posting, ad campaigns, and audience engagement. Our SMM and SMO strategies help increase brand awareness, improve customer engagement, and drive traffic from platforms like Facebook, Instagram, and LinkedIn."
},
{
q: "Do you provide reports?",
a: "Yes, we provide detailed performance reports that include website traffic, keyword rankings, conversion rates, and campaign performance. Our reports help you track progress, understand ROI, and make data-driven decisions for continuous growth."
},
{
q: "How long does SEO take?",
a: "SEO is a long-term digital marketing strategy, and results typically start becoming visible within 3–6 months depending on your industry competition, website condition, and keyword difficulty. Consistent SEO efforts lead to long-lasting rankings, increased organic traffic, and better online visibility."
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
SEO & SEM Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Rank Higher, Drive Traffic & Grow with SEO & SEM Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Boost your online visibility with powerful SEO, PPC, and digital marketing strategies.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We help businesses achieve top search engine rankings, increase website traffic, and generate high-quality leads through result-driven SEO and SEM solutions.
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
src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80"
alt="SEO SEM Services"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End SEO, PPC & Digital Marketing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
In today’s competitive market, having a strong digital presence is essential for business success.
</p>

<p className="mt-4 text-base text-slate-600">
Our expert team combines SEO, PPC, and social media strategies to improve your visibility, attract targeted traffic, and maximize conversions.
</p>

<div className="mt-6 space-y-3">

{[
"On-page & off-page SEO optimization",
"Keyword research and competitor analysis",
"PPC campaign management with ROI tracking",
"Social media marketing and optimization"
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
Benefits of SEO & SEM Services
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
className="w-full font-bold flex justify-between items-center p-6"
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
🚀 Digital Marketing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Increase Rankings, Traffic & Revenue
<span className="block text-cyan-200">
with Smart SEO & SEM Strategies
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Drive consistent growth with expert SEO, PPC, and digital marketing solutions tailored for your business.
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