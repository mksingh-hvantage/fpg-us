import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function ApplicationOutsourcing() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO Optimized Content
const challenges = [
  "Increasing complexity in application management and IT infrastructure.",
  "High operational costs of maintaining in-house development teams.",
  "Slow application deployment and scalability limitations.",
  "Frequent downtime and performance issues affecting business continuity.",
  "Security vulnerabilities and data protection challenges.",
];

const services = [
  "End-to-end application development and maintenance services.",
  "Legacy application modernization and cloud migration.",
  "Application testing, QA, and performance optimization.",
  "24/7 application support and monitoring services.",
  "Custom enterprise software solutions and integration services.",
];

const benefits = [
  "Reduced IT and operational costs with scalable outsourcing",
  "Faster application deployment and improved performance",
  "Enhanced data security and compliance standards",
  "Access to skilled developers and advanced technologies",
  "Improved business agility and digital transformation",
];

const faqs = [
{
q: "What is Application Outsourcing?",
a: "Application outsourcing refers to delegating software development, maintenance, testing, and support processes to specialized third-party service providers. This allows businesses to focus on core operations while experts handle technical requirements efficiently."
},
{
q: "Who should consider application outsourcing services?",
a: "Startups, enterprises, SaaS companies, and organizations with growing IT demands can benefit from outsourcing. It is especially useful for businesses looking to reduce costs, improve scalability, and access global technical expertise."
},
{
q: "How does outsourcing improve application performance?",
a: "Outsourcing partners use modern tools, automation, and agile methodologies to ensure faster development cycles, proactive monitoring, and continuous optimization, leading to better performance and minimal downtime."
},
{
q: "Is application outsourcing secure?",
a: "Yes, reputable outsourcing providers implement strict data security measures, including encryption, secure cloud environments, compliance with global standards, and regular audits to ensure complete data protection."
},
{
q: "What services are included in application outsourcing?",
a: "Services typically include application development, UI/UX design, testing, maintenance, cloud migration, system integration, and ongoing technical support."
},
{
q: "How does application outsourcing reduce costs?",
a: "It eliminates the need for hiring full-time developers, infrastructure investment, and training expenses, converting fixed IT costs into flexible, scalable operational costs."
},
{
q: "Can outsourcing help with legacy system modernization?",
a: "Yes, outsourcing providers specialize in upgrading outdated systems, migrating applications to modern cloud-based platforms, and improving system efficiency and scalability."
},
{
q: "What industries benefit most from application outsourcing?",
a: "Industries like finance, healthcare, e-commerce, logistics, education, and technology benefit significantly due to their reliance on scalable and secure applications."
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
Application Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Application Outsourcing Services for Scalable Business Growth
</h1>

<p className="mt-6 text-lg text-slate-300">
Optimize your business operations with reliable application outsourcing services designed to enhance performance, reduce costs, and accelerate digital transformation.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our expert team delivers end-to-end application management, from development to maintenance, ensuring seamless performance, enhanced security, and continuous scalability for modern businesses.
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
alt="Application Outsourcing"
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
End-to-End Application Outsourcing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Application outsourcing enables businesses to streamline software development, reduce IT overhead, and improve system efficiency while focusing on core growth strategies.
</p>

<p className="mt-4 text-base text-slate-600">
From custom application development to ongoing maintenance and cloud integration, our services are designed to deliver high-performance, secure, and scalable solutions.
</p>

<div className="mt-6 space-y-3">

{[
"Agile and scalable development approach",
"Cloud-based application infrastructure",
"High-level data security and compliance",
"Continuous monitoring and optimization"
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
Key Benefits of Application Outsourcing
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
<h3 className='font-bold'>{faq.q}</h3>
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
🚀 Application Outsourcing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Accelerate Your Digital Transformation with
<span className="block text-cyan-200">
Scalable Application Solutions
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Reduce IT costs, improve application performance, and scale your business faster with our secure and reliable outsourcing services.
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