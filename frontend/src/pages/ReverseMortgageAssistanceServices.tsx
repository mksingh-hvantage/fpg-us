import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function ReverseMortgageAssistanceServices() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Complex regulatory requirements in reverse mortgage processing.",
  "High turnaround time in loan origination and underwriting.",
  "Manual documentation and verification errors.",
  "Operational inefficiencies due to legacy systems.",
  "Difficulty in maintaining compliance and audit readiness.",
];

const services = [
  "Reverse mortgage loan origination and processing support.",
  "Document verification and compliance checks.",
  "Underwriting assistance and risk assessment.",
  "Loan servicing and customer support.",
  "Title search, appraisal coordination, and closing support.",
];

const benefits = [
  "Faster loan processing and reduced turnaround time",
  "Improved compliance with regulatory standards",
  "Reduced operational and staffing costs",
  "Enhanced accuracy and reduced manual errors",
  "Scalable operations for growing loan volumes",
];

const faqs = [
{
q: "What is Reverse Mortgage Process Outsourcing (RMPO)?",
a: "RMPO refers to outsourcing reverse mortgage-related operations such as loan processing, underwriting, compliance, and servicing to specialized service providers."
},
{
q: "Who can benefit from reverse mortgage outsourcing?",
a: "Banks, mortgage lenders, financial institutions, and loan servicing companies benefit from RMPO by improving efficiency and reducing operational costs."
},
{
q: "How does RMPO improve loan processing efficiency?",
a: "By using automation tools, standardized workflows, and expert teams, RMPO reduces turnaround time and minimizes manual errors."
},
{
q: "Is reverse mortgage outsourcing secure?",
a: "Yes, RMPO providers use secure cloud platforms, data encryption, and compliance frameworks to ensure data protection and confidentiality."
},
{
q: "What services are included in RMPO?",
a: "Services include loan origination, underwriting support, document verification, compliance checks, servicing, and closing support."
},
{
q: "How does outsourcing reduce costs?",
a: "Outsourcing eliminates the need for in-house infrastructure and large teams, converting fixed costs into flexible operational expenses."
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
Reverse Mortgage Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Reverse Mortgage Process Outsourcing Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Streamline reverse mortgage operations with specialized outsourcing solutions designed for lenders, financial institutions, and mortgage service providers.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our Reverse Mortgage Process Outsourcing (RMPO) services help organizations manage loan processing, compliance, underwriting support, and servicing operations with accuracy, speed, and regulatory adherence—while reducing operational costs.
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
src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80"
alt="BPO"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1707623988408-ab88c9981730?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End Reverse Mortgage Outsourcing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Reverse mortgage outsourcing enables lenders and financial institutions to manage complex loan processes efficiently while ensuring compliance with evolving regulatory standards.
Our services cover loan origination, underwriting support, servicing, and documentation management using automation tools and secure cloud infrastructure.
</p>

<div className="mt-6 space-y-3">

{[
"Standardized mortgage workflows",
"Improved compliance and transparency",
"Automation-driven decision making",
"Scalable outsourcing model"
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
Key Benefits of RMPO Services
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

{/* background glow */}
<div className="absolute inset-0 opacity-30">
  <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
</div>

<div className="relative max-w-6xl mx-auto px-4 text-center">

{/* badge */}
<span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide">
  🚀 Reverse Mortgage Outsourcing Experts
</span>

{/* heading */}
<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
  Transform Your Mortgage Operations with
  <span className="block text-cyan-200">
    Scalable RMPO Solutions
  </span>
</h2>

{/* description */}
<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
  Improve turnaround time, reduce compliance risks, and streamline reverse mortgage processing with our secure, cloud-powered outsourcing services.
</p>

{/* buttons */}
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

{/* trust stats */}
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

<div>
  <p className="text-2xl font-bold">40%</p>
  <p className="text-sm text-cyan-200 mt-1">Cost Savings</p>
</div>

<div>
  <p className="text-2xl font-bold">2X</p>
  <p className="text-sm text-cyan-200 mt-1">Faster Processing</p>
</div>

<div>
  <p className="text-2xl font-bold">99%</p>
  <p className="text-sm text-cyan-200 mt-1">Accuracy Rate</p>
</div>

<div>
  <p className="text-2xl font-bold">24/7</p>
  <p className="text-sm text-cyan-200 mt-1">Support</p>
</div>

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