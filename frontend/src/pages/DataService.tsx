import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function DataService() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Handling large volumes of unstructured and structured data efficiently.",
  "Data entry errors leading to inaccurate business insights.",
  "High operational costs for in-house data processing teams.",
  "Difficulty maintaining data security and compliance standards.",
  "Time-consuming manual data extraction and validation processes.",
];

const services = [
  "Data entry, data processing, and data conversion services.",
  "Data cleansing, validation, and enrichment solutions.",
  "Image and document data extraction services.",
  "Database management and data mining support.",
  "E-commerce product data entry and catalog management.",
];

const benefits = [
  "Accurate and error-free data management",
  "Reduced operational and labor costs",
  "Faster turnaround time for data processing",
  "Improved decision-making with clean data",
  "Scalable solutions for growing data needs",
];

const faqs = [
{
q: "What are Data Services in BPO?",
a: "Data services in BPO refer to outsourcing tasks like data entry, processing, cleansing, validation, and management to specialized service providers. These services help businesses manage large datasets efficiently while ensuring accuracy and compliance."
},
{
q: "Who should outsource data processing services?",
a: "Businesses dealing with large volumes of data such as eCommerce companies, financial institutions, healthcare providers, logistics firms, and research organizations can benefit from outsourcing data services."
},
{
q: "How do data outsourcing services improve accuracy?",
a: "Professional data service providers use automation tools, quality checks, and validation processes to minimize human errors, ensuring high levels of accuracy and data consistency."
},
{
q: "Are outsourced data services secure?",
a: "Yes, reliable providers follow strict data security protocols including encryption, secure servers, NDAs, and compliance with global standards like GDPR to ensure data safety."
},
{
q: "What types of data can be processed?",
a: "Outsourcing providers handle structured and unstructured data such as customer data, financial records, product catalogs, invoices, surveys, and scanned documents."
},
{
q: "How does data outsourcing reduce costs?",
a: "It eliminates the need for in-house infrastructure, hiring, and training costs, allowing businesses to convert fixed costs into flexible operational expenses."
},
{
q: "Can data services scale with business growth?",
a: "Yes, outsourcing partners offer scalable solutions that adapt to increasing data volumes without compromising quality or turnaround time."
},
{
q: "What industries benefit the most from data services?",
a: "Industries like eCommerce, healthcare, finance, insurance, logistics, and real estate benefit significantly from data processing and management services."
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
Data Processing & Management Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Data Services Outsourcing for Accurate & Scalable Operations
</h1>

<p className="mt-6 text-lg text-slate-300">
Streamline your business operations with professional data entry, processing, and management services designed to improve accuracy and efficiency.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our data services help organizations transform raw data into meaningful insights through structured workflows, automation, and secure processing—enabling smarter decision-making and operational excellence.
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
alt="Data Services"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End Data Processing & Management Services
</h2>

<p className="mt-6 text-base text-slate-600">
Data is the backbone of modern businesses. Efficient data management ensures better insights, improved customer experiences, and enhanced operational efficiency.
</p>

<p className="mt-4 text-base text-slate-600">
Our outsourcing solutions cover data entry, cleansing, mining, and processing using advanced tools and industry best practices to ensure accuracy, speed, and compliance.
</p>

<div className="mt-6 space-y-3">

{[
"Structured and unstructured data handling",
"Advanced data validation and quality checks",
"Automation-driven workflows",
"Secure and compliant data processing"
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
Key Benefits of Data Outsourcing Services
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

<div className="absolute inset-0 opacity-30">
  <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
</div>

<div className="relative max-w-6xl mx-auto px-4 text-center">

<span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide">
  🚀 Data Outsourcing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
  Transform Your Business with
  <span className="block text-cyan-200">
    Reliable Data Services
  </span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
  Improve data accuracy, reduce costs, and unlock valuable insights with our scalable and secure data outsourcing solutions.
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