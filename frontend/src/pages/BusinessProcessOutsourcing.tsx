import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown} from "lucide-react";
import { useState } from 'react';

export default function BusinessProcessOutsourcing() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

// Content
const challenges = [
  "Managing complex business operations while driving digital transformation often leads to inefficiencies.",
  "Strict compliance requirements increase operational risks.",
  "Legacy systems create data silos and inefficiencies.",
  "High infrastructure costs slow business growth.",
  "Limited access to advanced automation tools.",
];

const services = [
  "End-to-end business process outsourcing services.",
  "Finance & insurance operations management.",
  "Healthcare and life sciences support services.",
  "Back-office outsourcing for high-volume operations.",
  "Cloud-based automation & analytics platforms.",
];

const benefits = [
  "Reduce operational costs",
  "Improve efficiency with automation",
  "Enterprise-grade technology access",
  "Better compliance & security",
  "Scalable operations",
];

return (
<div className="bg-white text-slate-800">

{/* HERO */}
<section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">

<div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-12 items-center">

<div>

<span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">
<Cloud className="mr-2 h-4 w-4" />
Managed BPO & BPaaS Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Cloud-Based BPO Solutions for Modern Businesses
</h1>

<p className="mt-6 text-lg text-slate-300">
Optimize operations, reduce costs, and scale faster with intelligent outsourcing solutions powered by cloud technology, automation, and industry expertise.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our managed business process outsourcing (BPO) services help organizations streamline complex workflows, improve compliance, and gain real-time visibility into operations—without the burden of heavy infrastructure or large internal teams.
</p>

{/* CTA BUTTONS */}
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

{/* IMAGE */}
<div>
<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
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
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
className="rounded-3xl shadow-lg"
/>
</div>

<div>


<h2 className="mt-6 text-3xl font-extrabold">
Operational Excellence with Managed Outsourcing
</h2>

<p className="mt-6 text-base text-slate-600">
Our Business Process Outsourcing (BPO) services enable organizations to streamline workflows, reduce operational complexity, and improve overall business performance through technology-driven solutions.
By combining domain expertise with cloud-based platforms, automation tools, and data analytics, we help businesses transform traditional processes into agile, scalable, and efficient operations.
</p>

{/* KEY POINTS */}
<div className="mt-6 space-y-3">

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
Standardize and optimize business processes across departments
</p>
</div>

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
Improve compliance, governance, and operational transparency
</p>
</div>

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
Leverage automation and analytics for smarter decision-making
</p>
</div>

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
Enable faster scalability with flexible outsourcing models
</p>
</div>

</div>

</div>

</section>

{/* CHALLENGES + SERVICES */}
<section className="bg-cyan-100/40 py-16">

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
<section className="py-16 bg-slate-900 text-white relative overflow-hidden">

{/* background glow */}
<div className="absolute inset-0 opacity-20">
  <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
</div>

<div className="relative max-w-7xl mx-auto px-4">

{/* heading */}
<div className="text-center max-w-6xl mx-auto">
  <h2 className="text-5xl font-extrabold">
    Key Benefits of Managed BPO Services
  </h2>
  <p className="mt-4 text-slate-300">
    Unlock efficiency, scalability, and cost optimization with our cloud-powered outsourcing solutions.
  </p>
</div>

{/* cards */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{benefits.map((item, i) => (

<div
  key={i}
  className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
>

  {/* icon */}
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
    <CheckCircle2 className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition" />
  </div>

  {/* content */}
  <p className="text-base leading-7 text-slate-200">
    {item}
  </p>

  {/* bottom accent */}
  <div className="mt-6 h-1 w-12 bg-cyan-400 rounded-full group-hover:w-20 transition-all"></div>

</div>

))}

</div>

{/* bottom stats */}
<div className="grid grid-cols-3 gap-6 mt-20 text-center">

<div>
  <p className="text-3xl font-bold text-white">40%</p>
  <p className="text-sm text-slate-400 mt-1">Cost Reduction</p>
</div>

<div>
  <p className="text-3xl font-bold text-white">2x</p>
  <p className="text-sm text-slate-400 mt-1">Operational Efficiency</p>
</div>

<div>
  <p className="text-3xl font-bold text-white">100%</p>
  <p className="text-sm text-slate-400 mt-1">Scalable Model</p>
</div>

</div>

</div>

</section>

{/* SEO SECTION */}
<section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>

<h2 className="mt-6 text-5xl font-extrabold leading-tight">
Managed Business Process Outsourcing
</h2>

<p className="mt-6 text-base text-slate-600 max-w-2xl">
Our cloud-based Business Process Outsourcing (BPO) solutions empower organizations to reduce operational costs, improve efficiency, and scale seamlessly in a competitive digital landscape.
By leveraging Business Process as a Service (BPaaS), advanced automation, and data-driven insights, we help enterprises transform traditional workflows into agile, efficient, and highly scalable operations.
</p>

<p className="mt-4 text-base text-slate-600 max-w-2xl">
Our managed outsourcing services are designed for industries such as banking, financial services, insurance, healthcare, and life sciences—ensuring compliance, accuracy, and operational excellence at every stage.
</p>

{/* KEY FEATURES */}
<div className="mt-8 grid sm:grid-cols-2 gap-4">

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
End-to-end business process management with cloud integration
</p>
</div>

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
Automation-driven workflows to reduce manual effort and errors
</p>
</div>

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
Real-time analytics and reporting for better decision-making
</p>
</div>

<div className="flex items-start gap-3">
<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
<p className="text-slate-700">
Secure, compliant, and scalable outsourcing infrastructure
</p>
</div>

</div>

</div>

<div>
<img
src="https://images.unsplash.com/photo-1551434678-e076c223a692"
className="rounded-3xl shadow-lg"
/>
</div>

</section>

<section className="bg-cyan-100/40 py-16">

<div className="max-w-5xl mx-auto px-4">

{/* Heading */}
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-5xl font-extrabold text-slate-900">
Frequently Asked Questions
</h2>
<p className="mt-4 text-slate-600">
Explore common questions about Business Process Outsourcing (BPO), managed services, and how outsourcing solutions can help your business grow efficiently.
</p>
</div>

{/* FAQ Accordion */}
<div className="mt-14 space-y-4">

{[
{
q: "What is Business Process Outsourcing (BPO)?",
a: "Business Process Outsourcing (BPO) is the practice of outsourcing non-core business operations such as customer support, finance, data processing, and back-office tasks to specialized service providers. It helps organizations improve efficiency, reduce operational costs, and focus on core business activities."
},
{
q: "What are the benefits of outsourcing business processes?",
a: "Outsourcing offers multiple benefits including cost reduction, improved operational efficiency, access to advanced technology, scalability, and enhanced focus on core business functions. It also enables businesses to leverage expert resources without heavy infrastructure investment."
},
{
q: "Is BPO secure for handling sensitive business data?",
a: "Yes, modern BPO providers use enterprise-grade security frameworks, data encryption, compliance standards, and secure cloud infrastructure to ensure data protection. Most providers follow global compliance standards such as GDPR, HIPAA, and ISO certifications."
},
{
q: "Which industries benefit the most from BPO services?",
a: "Industries such as banking, financial services, insurance (BFSI), healthcare, life sciences, eCommerce, and telecommunications benefit significantly from BPO services due to their high-volume operations and compliance requirements."
},
{
q: "What is the difference between BPO and BPaaS?",
a: "BPO focuses on outsourcing business processes, while Business Process as a Service (BPaaS) delivers those services through cloud-based platforms combined with automation, analytics, and scalable infrastructure."
},
{
q: "How does outsourcing reduce operational costs?",
a: "Outsourcing reduces costs by eliminating the need for in-house infrastructure, reducing staffing expenses, and converting fixed costs into flexible operating expenses (OPEX). It also improves efficiency through automation and standardized workflows."
},
{
q: "Can BPO services scale with business growth?",
a: "Yes, BPO solutions are highly scalable. Businesses can easily increase or decrease resources based on demand, making outsourcing an ideal solution for growing companies and seasonal operations."
},
{
q: "How do I choose the right outsourcing partner?",
a: "When selecting a BPO provider, consider their industry expertise, technology capabilities, security standards, scalability, client reviews, and ability to customize solutions based on your business needs."
}
].map((faq, i) => {

const [openIndex, setOpenIndex] = useState<number | null>(null);

return (
<div
key={i}
className="bg-white border border-slate-200 rounded-2xl shadow-sm transition"
>

<button
onClick={() => setOpenIndex(openIndex === i ? null : i)}
className="w-full flex justify-between items-center text-left p-6"
>
<h3 className="font-semibold text-slate-900">
{faq.q}
</h3>

<ChevronDown
className={`h-5 w-5 text-slate-500 transition-transform ${
openIndex === i ? "rotate-180" : ""
}`}
/>

</button>

{openIndex === i && (
<div className="px-6 pb-6 text-slate-600 leading-7">
{faq.a}
</div>
)}

</div>
);

})}

</div>

</div>

</section>

{/* CTA */}
<section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-900 text-white py-24">

{/* background glow */}
<div className="absolute inset-0 opacity-30">
  <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
</div>

<div className="relative max-w-6xl mx-auto px-4 text-center">

{/* badge */}
<span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm">
  🚀 Managed BPO & Outsourcing Solutions
</span>

{/* heading */}
<h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
  Transform Your Business Operations with
  <span className="block text-cyan-200">
    Scalable Outsourcing Solutions
  </span>
</h2>

{/* description */}
<p className="mt-6 text-lg text-cyan-100 max-w-2xl mx-auto">
  Reduce operational costs, improve efficiency, and accelerate growth with our cloud-based Business Process Outsourcing (BPO) and BPaaS services tailored for modern enterprises.
</p>

{/* CTA buttons */}
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

<button
  onClick={() => setIsModalOpen(true)}
  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-cyan-700 shadow-lg hover:bg-slate-100 transition"
>
  Get Started Now
  <ArrowRight className="ml-2 h-5 w-5" />
</button>

<a
  href="#services"
  className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
>
  Explore Services
</a>

</div>

{/* trust indicators */}
<div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

<div>
  <p className="text-2xl font-bold">40%</p>
  <p className="text-sm text-cyan-200 mt-1">Cost Reduction</p>
</div>

<div>
  <p className="text-2xl font-bold">2X</p>
  <p className="text-sm text-cyan-200 mt-1">Efficiency Boost</p>
</div>

<div>
  <p className="text-2xl font-bold">24/7</p>
  <p className="text-sm text-cyan-200 mt-1">Operational Support</p>
</div>

<div>
  <p className="text-2xl font-bold">100%</p>
  <p className="text-sm text-cyan-200 mt-1">Scalable Model</p>
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