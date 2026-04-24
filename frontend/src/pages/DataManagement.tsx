import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function DataManagement() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Managing large volumes of structured and unstructured data efficiently.",
  "Data inconsistency and duplication across multiple systems.",
  "High operational costs for in-house data management teams.",
  "Ensuring data accuracy, quality, and standardization.",
  "Maintaining data security, privacy, and compliance with regulations.",
];

const services = [
  "Data entry, data processing, and data cleansing services.",
  "Data mining, data extraction, and data enrichment solutions.",
  "Database management and maintenance services.",
  "Data conversion, digitization, and document management.",
  "Data validation, quality checks, and reporting support.",
];

const benefits = [
  "Improved data accuracy and consistency across systems",
  "Reduced operational costs and improved efficiency",
  "Faster access to business-critical information",
  "Enhanced data security and compliance standards",
  "Scalable solutions for growing data requirements",
];

const faqs = [
{
q: "What are data management outsourcing services?",
a: "Data management outsourcing services involve delegating tasks such as data entry, data processing, data cleansing, and database management to specialized service providers. This helps businesses handle large datasets efficiently while maintaining accuracy, security, and compliance."
},
{
q: "Why is data management important for businesses?",
a: "Effective data management ensures that business information is accurate, accessible, and secure. It supports better decision-making, improves operational efficiency, enhances customer experience, and ensures compliance with regulatory requirements."
},
{
q: "What industries can benefit from data management services?",
a: "Industries such as healthcare, finance, eCommerce, real estate, logistics, and IT services benefit significantly from data management outsourcing. Any business that handles large volumes of data can improve efficiency and accuracy through these services."
},
{
q: "How do data management services improve accuracy?",
a: "Data management providers use advanced tools, automation, and multi-level quality checks to eliminate errors, remove duplicates, and standardize data. This ensures high accuracy and reliability of business data."
},
{
q: "Is outsourcing data management secure?",
a: "Yes, professional data management service providers follow strict data security protocols, including encryption, secure cloud environments, and compliance with international data protection standards to ensure confidentiality and safety."
},
{
q: "What types of data can be managed through outsourcing?",
a: "Outsourcing providers can manage various types of data including customer data, financial records, product information, inventory data, medical records, and digital documents across multiple formats."
},
{
q: "How does data cleansing help businesses?",
a: "Data cleansing removes duplicate, incorrect, or outdated information from databases. This improves data quality, enhances reporting accuracy, and ensures better business insights and decision-making."
},
{
q: "Can data management services scale with business growth?",
a: "Yes, outsourced data management services are highly scalable. They can easily handle increasing data volumes and evolving business requirements without the need for additional in-house infrastructure."
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
Data Management Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Data Management Outsourcing Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Streamline your business data operations with reliable, scalable, and secure data management outsourcing services tailored for modern enterprises.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our data management solutions help organizations efficiently handle large volumes of data through data entry, processing, cleansing, and database management—ensuring accuracy, compliance, and faster access to critical information.
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
src="https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?q=80"
alt="Data Management"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End Data Management Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Managing data efficiently is crucial for business success in today’s digital landscape. Data management outsourcing helps organizations streamline data operations while ensuring quality, consistency, and compliance.
</p>

<p className="mt-4 text-base text-slate-600">
Our services include data entry, cleansing, processing, and database management using advanced automation tools and secure cloud infrastructure to deliver accurate and reliable results.
</p>

<div className="mt-6 space-y-3">

{[
"Standardized data workflows and processes",
"Improved data quality and consistency",
"Automation-driven data handling",
"Flexible and scalable data solutions"
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
Key Benefits of Data Management Services
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
  🚀 Data Management Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
  Transform Your Business with
  <span className="block text-cyan-200">
    Smart Data Management Solutions
  </span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
  Improve data accuracy, reduce operational costs, and unlock valuable insights with our scalable and secure data management outsourcing services.
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