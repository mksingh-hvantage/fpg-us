import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function ClaimsManagement() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "High volume of insurance claims leading to processing delays.",
  "Complex compliance and regulatory requirements across regions.",
  "Manual data entry errors affecting claim accuracy and approvals.",
  "Fraud detection and risk assessment challenges.",
  "Inefficient communication between insurers, adjusters, and customers.",
];

const services = [
  "End-to-end insurance claims processing and lifecycle management.",
  "Claims data entry, validation, and document verification services.",
  "Fraud detection, risk analysis, and compliance checks.",
  "Claims adjudication and settlement support.",
  "Customer support, claims tracking, and reporting services.",
];

const benefits = [
  "Faster claims processing and reduced turnaround time",
  "Improved accuracy and minimized claim errors",
  "Enhanced fraud detection and risk mitigation",
  "Reduced operational and administrative costs",
  "Scalable solutions for growing insurance operations",
];

const faqs = [
{
q: "What are Claims Management Services?",
a: "Claims Management Services involve outsourcing the end-to-end handling of insurance claims, including data entry, validation, adjudication, settlement, and reporting. These services help insurers streamline operations, improve efficiency, and enhance customer satisfaction."
},
{
q: "Who should outsource insurance claims processing?",
a: "Insurance companies, third-party administrators (TPAs), healthcare providers, and financial institutions can benefit from outsourcing claims management to improve efficiency, reduce operational burden, and ensure compliance."
},
{
q: "How does outsourcing improve claims processing speed?",
a: "Outsourcing providers use automation tools, standardized workflows, and experienced professionals to process claims faster, reduce bottlenecks, and improve turnaround time significantly."
},
{
q: "Is claims management outsourcing secure?",
a: "Yes, professional claims management providers follow strict data security protocols, including encryption, secure cloud platforms, and compliance with regulations such as HIPAA and GDPR to ensure complete data protection."
},
{
q: "What types of claims can be handled?",
a: "Services can cover a wide range of claims including health insurance, life insurance, property and casualty claims, and other financial claims depending on business needs."
},
{
q: "How does claims outsourcing reduce costs?",
a: "Outsourcing eliminates the need for large in-house teams, infrastructure, and technology investments, converting fixed costs into variable costs and improving overall ROI."
},
{
q: "Can outsourcing help with fraud detection?",
a: "Yes, advanced analytics and AI-based tools are used to identify suspicious patterns, detect fraud early, and reduce financial losses for insurance providers."
},
{
q: "What technologies are used in claims management services?",
a: "Technologies include AI-based automation, OCR for document processing, cloud platforms, workflow management systems, and real-time analytics tools."
},
{
q: "How scalable are claims outsourcing services?",
a: "Claims outsourcing solutions are highly scalable, allowing businesses to handle seasonal spikes and growing claim volumes without compromising quality or speed."
},
{
q: "What is the turnaround time for claims processing?",
a: "Turnaround time depends on claim complexity, but outsourcing significantly reduces processing time through automation and streamlined workflows."
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
Claims Management Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Insurance Claims Management Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Optimize insurance claims processing with reliable, scalable, and technology-driven outsourcing solutions tailored for insurers and financial institutions.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our Claims Management Services help organizations streamline claim intake, verification, adjudication, and settlement processes with enhanced accuracy, faster turnaround, and strict compliance—while reducing operational costs.
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
src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
alt="Claims Management"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End Insurance Claims Processing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Claims management outsourcing enables insurance companies to efficiently handle large volumes of claims while ensuring accuracy, compliance, and customer satisfaction.
</p>

<p className="mt-4 text-base text-slate-600">
Our solutions cover the entire claims lifecycle—from first notice of loss (FNOL) to final settlement—leveraging automation, analytics, and expert support teams.
</p>

<div className="mt-6 space-y-3">

{[
"Automated claims workflows and faster approvals",
"Improved compliance with regulatory standards",
"Real-time claims tracking and reporting",
"Scalable and flexible outsourcing model"
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
Key Benefits of Claims Management Services
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
🚀 Insurance Claims Outsourcing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Transform Your Claims Processing with
<span className="block text-cyan-200">
Scalable Outsourcing Solutions
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Reduce processing time, improve claim accuracy, and enhance customer satisfaction with our advanced claims management outsourcing services.
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