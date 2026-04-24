import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function SpecializedData() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO Optimized Content
const challenges = [
  "Managing high-volume data entry services across multiple US business operations.",
  "Manual data entry errors impacting data accuracy and business insights.",
  "Slow data processing affecting real-time decision-making.",
  "Handling multiple formats like PDF, images, invoices, and spreadsheets.",
  "Ensuring compliance with US data security and privacy regulations.",
  "High operational costs of in-house data entry teams in the USA.",
  "Difficulty scaling data processing services with business growth.",
  "Lack of automation in data digitization and data management workflows."
];

const services = [
  "Outsource data entry services in USA (online & offline).",
  "Data cleansing, data validation, and data enrichment services.",
  "OCR data entry and document data extraction services.",
  "Web research, data mining, and US market data collection.",
  "Form processing, survey data entry, and document digitization.",
  "Database management and data conversion services.",
  "eCommerce product data entry services for Shopify, Amazon, and eBay.",
  "Document digitization, indexing, and data archiving solutions.",
  "Data formatting, data deduplication, and quality assurance.",
  "Custom data processing solutions for US-based industries."
];

const benefits = [
  "Fast turnaround for data entry outsourcing projects in the USA.",
  "High accuracy data entry with multi-level quality checks.",
  "Cost-effective data processing compared to in-house operations.",
  "Secure and compliant data management solutions.",
  "Scalable data entry services for growing US businesses.",
  "Access to skilled data entry professionals and automation tools.",
  "Better decision-making with structured and accurate data.",
  "Improved productivity and operational efficiency."
];

const faqs = [
{
q: "What are data entry services in the USA?",
a: "Data entry services in the USA involve converting raw data into structured formats such as spreadsheets, databases, or CRM systems. These services include data processing, data cleansing, and data digitization."
},
{
q: "Why outsource data entry services?",
a: "Outsourcing data entry helps businesses reduce operational costs, improve efficiency, and access skilled professionals without investing in infrastructure."
},
{
q: "Which industries need data entry services?",
a: "Healthcare, finance, eCommerce, real estate, logistics, and retail industries in the USA benefit the most from data entry outsourcing services."
},
{
q: "What is OCR data entry?",
a: "OCR (Optical Character Recognition) data entry converts scanned documents, PDFs, and images into editable digital formats automatically."
},
{
q: "Is outsourced data secure?",
a: "Yes, professional data entry companies follow strict data security protocols, encryption, and compliance standards to protect sensitive information."
},
{
q: "What formats do you support?",
a: "We handle PDFs, scanned images, Excel sheets, Word files, databases, and web-based data formats."
},
{
q: "Can you handle bulk data entry projects?",
a: "Yes, we provide scalable data entry solutions capable of handling large volumes of data efficiently."
},
{
q: "What is the turnaround time?",
a: "Turnaround time depends on project size, but we ensure fast delivery using automation and expert teams."
},
{
q: "Do you provide eCommerce data entry?",
a: "Yes, we offer product data entry services for Shopify, Amazon, eBay, and other eCommerce platforms."
},
{
q: "How does data entry improve business growth?",
a: "Accurate and structured data improves decision-making, enhances productivity, and supports business growth."
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
USA Data Entry & Processing Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Top Data Entry Services in USA | Outsource Data Processing Solutions
</h1>

<p className="mt-6 text-lg text-slate-300">
Leading provider of data entry services in the USA offering fast, accurate, and secure data processing solutions.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We specialize in data entry outsourcing, OCR data entry, data cleansing, and document digitization services for US businesses.
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
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
alt="Data Entry Services USA"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
Outsource Data Entry Services to Experts in USA
</h2>

<p className="mt-6 text-base text-slate-600">
We provide professional data entry outsourcing services to help US businesses manage and process large volumes of data efficiently.
</p>

<p className="mt-4 text-base text-slate-600">
Our expertise includes OCR data entry, data processing, and data digitization using advanced automation tools.
</p>

<p className="mt-4 text-base text-slate-600">
Our scalable data entry solutions help businesses reduce costs and improve operational efficiency.
</p>

<div className="mt-6 space-y-3">

{[
"High-speed data entry services",
"OCR & automated data processing",
"Secure data handling & compliance",
"Scalable outsourcing solutions"
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
<h3 className="text-2xl font-extrabold mb-6">Business Challenges</h3>
{challenges.map((item, i) => (
<div key={i} className="flex gap-3 mb-4">
<CheckCircle2 className="text-red-500"/>
<p>{item}</p>
</div>
))}
</div>

<div className="bg-white p-8 rounded-3xl shadow">
<h3 className="text-2xl font-extrabold mb-6">Our Services</h3>
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
Benefits of Outsourcing Data Entry Services in USA
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
🚀 Data Entry Experts USA
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
Outsource Data Entry & Boost Business Efficiency
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto">
Get reliable, accurate, and scalable data entry services for your business.
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