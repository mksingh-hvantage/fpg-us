import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function HumanResources() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Managing employee lifecycle processes efficiently across departments.",
  "High HR operational costs due to in-house hiring and infrastructure.",
  "Compliance risks with constantly changing labor laws and regulations.",
  "Time-consuming payroll processing and benefits administration.",
  "Difficulty in maintaining employee engagement and performance tracking.",
];

const services = [
  "End-to-end HR outsourcing including recruitment and onboarding.",
  "Payroll processing, tax filing, and compensation management.",
  "Employee benefits administration and compliance management.",
  "Performance management and employee engagement solutions.",
  "HR analytics, reporting, and workforce planning support.",
];

const benefits = [
  "Reduced HR operational and administrative costs",
  "Improved compliance with labor laws and regulations",
  "Faster recruitment and onboarding processes",
  "Enhanced employee experience and engagement",
  "Scalable HR solutions for growing businesses",
  "Access to experienced HR professionals and technology",
];

const faqs = [
{
q: "What is HR outsourcing and how does it work?",
a: "HR outsourcing involves delegating human resource functions such as recruitment, payroll, compliance, and employee management to a specialized service provider. Businesses partner with HR outsourcing firms to streamline operations, reduce costs, and ensure compliance while focusing on core business activities."
},
{
q: "Which HR functions can be outsourced?",
a: "Organizations can outsource a wide range of HR functions including talent acquisition, onboarding, payroll processing, employee benefits administration, compliance management, performance evaluation, training, and HR analytics. The services can be customized based on business needs."
},
{
q: "Is HR outsourcing suitable for small businesses?",
a: "Yes, HR outsourcing is highly beneficial for small and medium-sized businesses. It allows them to access professional HR expertise without maintaining a full in-house HR team, helping reduce costs while ensuring compliance and efficient workforce management."
},
{
q: "How does HR outsourcing improve compliance?",
a: "HR outsourcing providers stay updated with local and international labor laws, tax regulations, and compliance requirements. They implement structured processes, documentation, and reporting systems to ensure businesses remain compliant and avoid legal risks."
},
{
q: "Can HR outsourcing improve employee satisfaction?",
a: "Yes, by streamlining HR processes, improving payroll accuracy, and offering structured performance management systems, HR outsourcing enhances the overall employee experience, leading to higher satisfaction and retention."
},
{
q: "How secure is HR data with outsourcing providers?",
a: "Professional HR outsourcing companies use secure cloud systems, data encryption, and strict confidentiality protocols to ensure sensitive employee information is protected against unauthorized access and data breaches."
},
{
q: "Does HR outsourcing help in recruitment?",
a: "Absolutely. HR outsourcing providers offer recruitment services including candidate sourcing, screening, interviews, and onboarding. This significantly reduces hiring time and improves the quality of talent acquisition."
},
{
q: "What industries benefit from HR outsourcing services?",
a: "Almost all industries including IT, healthcare, finance, retail, manufacturing, and startups benefit from HR outsourcing. It is especially useful for companies experiencing rapid growth or managing distributed teams."
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
HR Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Comprehensive HR Outsourcing Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Streamline your human resource operations with scalable HR outsourcing solutions designed to improve efficiency, compliance, and employee experience.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our HR Outsourcing services help businesses manage recruitment, payroll, compliance, and employee lifecycle processes efficiently using advanced technology and expert-driven strategies—while reducing operational costs.
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
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
alt="HR Outsourcing"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End HR Outsourcing Solutions for Modern Businesses
</h2>

<p className="mt-6 text-base text-slate-600">
HR outsourcing allows organizations to efficiently manage workforce operations while ensuring compliance with labor laws and industry standards.
</p>

<p className="mt-4 text-base text-slate-600">
From recruitment and onboarding to payroll processing and performance management, our HR outsourcing services are designed to optimize productivity and improve employee engagement.
</p>

<div className="mt-6 space-y-3">

{[
"Efficient workforce management systems",
"Improved compliance and risk mitigation",
"Automation-driven HR processes",
"Flexible and scalable HR solutions"
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
<h3 className="text-2xl font-extrabold mb-6">HR Challenges</h3>
{challenges.map((item, i) => (
<div key={i} className="flex gap-3 mb-4">
<CheckCircle2 className="text-red-500"/>
<p>{item}</p>
</div>
))}
</div>

<div className="bg-white p-8 rounded-3xl shadow">
<h3 className="text-2xl font-extrabold mb-6">Our HR Services</h3>
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
Key Benefits of HR Outsourcing
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
  🚀 HR Outsourcing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
  Transform Your HR Operations with
  <span className="block text-cyan-200">
    Scalable Outsourcing Solutions
  </span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
  Reduce HR costs, improve compliance, and enhance workforce productivity with our end-to-end HR outsourcing services tailored for modern businesses.
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