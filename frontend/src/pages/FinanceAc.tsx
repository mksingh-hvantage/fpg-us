import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function FinanceAc() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO Content
const challenges = [
  "Managing complex accounting regulations and tax compliance requirements.",
  "High operational costs of maintaining an in-house accounting team.",
  "Time-consuming bookkeeping and financial reporting processes.",
  "Risk of errors in financial data entry and reconciliation.",
  "Difficulty in scaling accounting operations with business growth.",
];

const services = [
  "Bookkeeping and general ledger management services.",
  "Accounts payable and receivable management.",
  "Financial statement preparation and reporting.",
  "Tax preparation and compliance support.",
  "Payroll processing and reconciliation services.",
  "Bank and credit card reconciliation.",
  "Virtual CFO and financial advisory services.",
];

const benefits = [
  "Reduce accounting and operational costs significantly",
  "Access to experienced accounting professionals",
  "Improved financial accuracy and compliance",
  "Real-time financial insights and reporting",
  "Scalable solutions tailored to your business growth",
  "Focus more on core business activities",
];

const faqs = [
{
q: "What is Accounting Outsourcing?",
a: "Accounting outsourcing is the process of delegating financial tasks such as bookkeeping, payroll, tax preparation, and financial reporting to specialized third-party service providers. This allows businesses to improve efficiency, reduce costs, and ensure compliance with financial regulations."
},
{
q: "Who should consider outsourcing accounting services?",
a: "Startups, small businesses, enterprises, and CPA firms can all benefit from accounting outsourcing. It is especially useful for companies looking to reduce overhead costs, improve financial accuracy, and access expert accounting support without hiring a full in-house team."
},
{
q: "What services are included in accounting outsourcing?",
a: "Services typically include bookkeeping, accounts payable and receivable, payroll processing, tax preparation, financial reporting, bank reconciliation, and virtual CFO services. These services can be customized based on business needs."
},
{
q: "Is outsourcing accounting services secure?",
a: "Yes, professional accounting outsourcing firms use secure cloud platforms, data encryption, and strict compliance protocols to ensure the safety and confidentiality of financial data."
},
{
q: "How does accounting outsourcing reduce costs?",
a: "Outsourcing eliminates the need for hiring, training, and maintaining an in-house accounting team. It converts fixed costs into flexible operational expenses while ensuring access to expert-level services."
},
{
q: "Can outsourced accountants handle tax compliance?",
a: "Yes, outsourced accounting professionals stay updated with the latest tax laws and regulations. They help businesses file accurate returns, avoid penalties, and ensure full compliance with local and international tax requirements."
},
{
q: "Will I have control over my financial data?",
a: "Absolutely. You retain full control and visibility over your financial data. Most outsourcing providers offer real-time dashboards and reports so you can monitor performance anytime."
},
{
q: "How do outsourced accounting services improve accuracy?",
a: "Outsourced firms use advanced accounting software, automation tools, and experienced professionals to minimize human errors and ensure accurate financial reporting."
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
Accounting Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Accounting Outsourcing Services for Businesses & CPA Firms
</h1>

<p className="mt-6 text-lg text-slate-300">
Streamline your financial operations with expert accounting outsourcing services designed to improve accuracy, ensure compliance, and reduce costs.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our accounting outsourcing solutions help businesses manage bookkeeping, payroll, tax compliance, and financial reporting efficiently using modern cloud-based tools and experienced professionals.
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
src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
alt="Accounting"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End Accounting Outsourcing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Accounting outsourcing allows businesses to manage financial operations efficiently while ensuring compliance with constantly evolving tax laws and accounting standards.
</p>

<p className="mt-4 text-base text-slate-600">
From bookkeeping and payroll to financial reporting and tax preparation, our services are designed to improve accuracy, reduce risks, and enhance financial visibility.
</p>

<div className="mt-6 space-y-3">

{[
"Automated accounting workflows",
"Improved compliance and audit readiness",
"Real-time financial reporting",
"Scalable accounting solutions"
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
Key Benefits of Accounting Outsourcing
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
  🚀 Accounting Outsourcing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
  Simplify Your Finances with
  <span className="block text-cyan-200">
    Expert Accounting Solutions
  </span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
  Reduce costs, improve accuracy, and gain real-time financial insights with our professional accounting outsourcing services.
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