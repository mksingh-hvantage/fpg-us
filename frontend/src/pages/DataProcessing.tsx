import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function DataProcessing() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Handling large volumes of unstructured and structured data efficiently.",
  "High risk of manual data entry errors and inconsistencies.",
  "Slow turnaround time affecting business decision-making.",
  "Difficulty in managing multi-format data (PDFs, images, spreadsheets).",
  "Compliance risks related to data security and privacy regulations.",
  "High operational cost of maintaining in-house data processing teams."
];

const services = [
  "Data entry and data processing services (online & offline).",
  "Data cleansing, validation, and enrichment solutions.",
  "Image, PDF, and document data extraction services.",
  "Data mining, web research, and data collection.",
  "Form processing, survey data entry, and digitization.",
  "Database management and data conversion services.",
  "eCommerce product data entry and catalog management.",
  "OCR (Optical Character Recognition) and document digitization."
];

const benefits = [
  "Faster turnaround time with high-volume data processing",
  "Improved data accuracy and reduced manual errors",
  "Cost-effective outsourcing model",
  "Enhanced data security and compliance",
  "Scalable solutions for growing business needs",
  "Access to skilled data processing professionals"
];

const faqs = [
{
q: "What are data processing services?",
a: "Data processing services involve collecting, organizing, validating, and transforming raw data into meaningful information. These services include data entry, data cleansing, data mining, and document digitization, helping businesses make accurate and timely decisions."
},
{
q: "Why should businesses outsource data processing?",
a: "Outsourcing data processing helps businesses reduce operational costs, improve efficiency, and focus on core activities. It eliminates the need for in-house infrastructure and provides access to skilled professionals and advanced tools."
},
{
q: "What industries benefit from data processing outsourcing?",
a: "Industries such as healthcare, finance, eCommerce, logistics, education, and real estate benefit greatly from data processing services. Any organization handling large volumes of data can leverage outsourcing for better efficiency."
},
{
q: "How do you ensure data accuracy?",
a: "We follow multi-level quality checks, validation rules, and automated tools to ensure high accuracy. Our teams also perform manual reviews and audits to maintain near-perfect data quality standards."
},
{
q: "Is my data secure with your services?",
a: "Yes, we follow strict data security protocols including encryption, secure cloud storage, NDA agreements, and compliance with global data protection standards to ensure complete confidentiality."
},
{
q: "What types of data formats do you handle?",
a: "We process data in multiple formats including PDFs, scanned images, handwritten documents, spreadsheets, databases, and web data. Our OCR and automation tools enable efficient multi-format processing."
},
{
q: "Can you handle bulk data processing projects?",
a: "Yes, our scalable infrastructure and experienced team allow us to handle high-volume data processing projects efficiently while maintaining speed and accuracy."
},
{
q: "What is the turnaround time for data processing?",
a: "Turnaround time depends on project size and complexity, but our optimized workflows and automation tools ensure fast delivery without compromising quality."
},
{
q: "Do you provide customized data processing solutions?",
a: "Absolutely. We offer tailored solutions based on your business requirements, industry needs, and data complexity to deliver maximum efficiency."
},
{
q: "How does data processing improve business performance?",
a: "Accurate and well-structured data enables better decision-making, improves operational efficiency, enhances customer experience, and supports business growth."
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
Data Processing Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Data Processing Services for Businesses
</h1>

<p className="mt-6 text-lg text-slate-300">
Transform raw data into actionable insights with reliable and scalable data processing outsourcing services tailored for modern businesses.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our data processing solutions help organizations manage large volumes of data with accuracy, speed, and security. From data entry and cleansing to advanced data extraction and digitization, we streamline your operations while reducing costs.
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
alt="Data Processing"
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
End-to-End Data Processing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Efficient data processing is the backbone of modern business operations. Our services help organizations convert raw, unstructured data into meaningful insights that drive strategic decisions.
</p>

<p className="mt-4 text-base text-slate-600">
We use advanced automation tools, OCR technology, and skilled professionals to ensure fast, accurate, and secure data handling across multiple industries.
</p>

<div className="mt-6 space-y-3">

{[
"High-speed data processing workflows",
"Advanced automation and OCR integration",
"Secure and compliant data handling",
"Scalable outsourcing infrastructure"
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
Key Benefits of Data Processing Services
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
🚀 Data Processing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
  Unlock the Power of Your Data
  <span className="block text-cyan-200">
    with Smart Data Processing Solutions
  </span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto">
  Improve accuracy, reduce costs, and accelerate decision-making with our reliable and scalable data processing outsourcing services.
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