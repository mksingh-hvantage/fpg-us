import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function DataEntry() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "High volume of repetitive data leading to internal resource strain.",
  "Manual data entry errors affecting business accuracy.",
  "Slow processing time impacting operational efficiency.",
  "Difficulty managing multiple data formats and sources.",
  "Lack of scalability during peak workloads.",
];

const services = [
  "Online and offline data entry services.",
  "Data cleansing, validation, and formatting.",
  "Data conversion (PDF, image, handwritten to digital formats).",
  "CRM and database management support.",
  "E-commerce product data entry and catalog management.",
];

const benefits = [
  "Accurate and error-free data processing",
  "Faster turnaround time for large datasets",
  "Reduced operational and labor costs",
  "Improved data quality and consistency",
  "Scalable solutions for business growth",
];

const faqs = [
{
q: "What is data entry outsourcing?",
a: "Data entry outsourcing is the process of delegating data input, processing, and management tasks to specialized third-party providers. This helps businesses save time, reduce costs, and improve data accuracy."
},
{
q: "Which industries benefit from data entry services?",
a: "Industries like healthcare, finance, e-commerce, logistics, real estate, and education benefit greatly from data entry outsourcing due to large volumes of data handling requirements."
},
{
q: "How do data entry services improve business efficiency?",
a: "By automating workflows, using trained professionals, and leveraging advanced tools, data entry services minimize errors, speed up processing, and allow internal teams to focus on core operations."
},
{
q: "Is my business data secure with outsourcing providers?",
a: "Yes, professional data entry service providers implement strict data security protocols, including encryption, secure servers, NDAs, and compliance with international data protection standards."
},
{
q: "What types of data entry services are offered?",
a: "Services include online/offline data entry, document digitization, data conversion, form processing, database management, CRM updates, and e-commerce product listing."
},
{
q: "Can data entry outsourcing scale with my business?",
a: "Absolutely. Outsourcing providers offer flexible and scalable solutions that can easily handle increasing data volumes without affecting turnaround time or quality."
},
{
q: "How does outsourcing reduce operational costs?",
a: "Outsourcing eliminates the need for hiring, training, infrastructure, and software investments, allowing businesses to convert fixed costs into variable expenses."
},
{
q: "What is the turnaround time for data entry projects?",
a: "Turnaround time depends on project size and complexity, but outsourcing firms typically ensure quick delivery through dedicated teams and optimized workflows."
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
Data Entry Outsourcing Services
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Professional Data Entry Services for Businesses
</h1>

<p className="mt-6 text-lg text-slate-300">
Streamline your business operations with accurate, reliable, and scalable data entry outsourcing solutions tailored for modern enterprises.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our data entry outsourcing services help businesses manage large volumes of data efficiently through automation, skilled professionals, and secure cloud-based systems—ensuring accuracy, speed, and cost savings.
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
src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80"
alt="Data Entry Services"
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
End-to-End Data Entry & Data Processing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Data entry outsourcing allows businesses to efficiently manage structured and unstructured data while maintaining high levels of accuracy and compliance.
</p>

<p className="mt-4 text-base text-slate-600">
We provide comprehensive data management solutions including data capture, validation, processing, and database management using modern automation tools.
</p>

<div className="mt-6 space-y-3">

{[
"Standardized and automated data workflows",
"High accuracy and data validation processes",
"Secure and compliant data handling",
"Flexible and scalable delivery model"
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
Key Benefits of Data Entry Outsourcing
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
  🚀 Data Entry Outsourcing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
  Transform Your Data Management with
  <span className="block text-cyan-200">
    Scalable Data Entry Solutions
  </span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
  Improve accuracy, reduce costs, and accelerate your business operations with our professional data entry outsourcing services.
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