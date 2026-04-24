import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function CustomerService() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Inconsistent customer support quality across multiple channels.",
  "High response and resolution time impacting customer satisfaction.",
  "Difficulty managing 24/7 customer support operations in-house.",
  "Lack of skilled agents to handle complex customer queries.",
  "Increasing operational costs for in-house support teams.",
];

const services = [
  "24/7 omnichannel customer support (call, email, chat, social media).",
  "Inbound & outbound call center services.",
  "Technical support and helpdesk management.",
  "Complaint resolution and escalation handling.",
  "CRM management and customer data processing.",
  "Order processing, tracking, and after-sales support.",
];

const benefits = [
  "Improved customer satisfaction and brand loyalty",
  "24/7 customer support availability",
  "Reduced operational and staffing costs",
  "Access to trained and experienced agents",
  "Faster response and resolution time",
  "Scalable operations during peak demand",
];

const faqs = [
{
q: "What is customer service outsourcing?",
a: "Customer service outsourcing is the practice of delegating customer support operations such as calls, emails, live chat, and helpdesk services to a third-party provider. It helps businesses deliver consistent, professional, and efficient customer experiences."
},
{
q: "Why should businesses outsource customer support?",
a: "Outsourcing helps businesses reduce operational costs, ensure 24/7 support, improve response times, and access trained professionals. It allows companies to focus on core business activities while improving customer satisfaction."
},
{
q: "Which industries benefit from customer support outsourcing?",
a: "Industries like eCommerce, SaaS, healthcare, fintech, telecom, and retail benefit the most. Any business with high customer interaction can improve efficiency and service quality through outsourcing."
},
{
q: "What channels are included in customer support services?",
a: "Customer support includes phone support, email support, live chat, social media management, and helpdesk services. Omnichannel support ensures customers can connect through their preferred platforms."
},
{
q: "Is customer service outsourcing secure?",
a: "Yes, outsourcing providers use secure cloud systems, data encryption, and strict compliance standards to ensure data privacy and protection."
},
{
q: "How does outsourcing improve customer satisfaction?",
a: "Outsourcing provides faster response times, professional communication, and 24/7 availability. This leads to better customer experiences, higher retention, and improved brand reputation."
},
{
q: "Can outsourced teams handle high customer volume?",
a: "Yes, outsourcing providers offer scalable solutions that easily handle peak seasons, sales spikes, and growing customer demand without compromising quality."
},
{
q: "How cost-effective is customer support outsourcing?",
a: "It eliminates hiring, training, and infrastructure costs, converting fixed expenses into flexible operational costs, making it highly cost-efficient."
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
Customer Service Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Customer Support Outsourcing Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Deliver exceptional customer experiences with professional outsourcing solutions tailored for modern businesses.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our customer service outsourcing solutions help businesses manage customer interactions, improve response time, and maintain high-quality support while reducing operational costs.
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
alt="Customer Support"
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
End-to-End Customer Support Outsourcing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Customer service outsourcing enables businesses to deliver seamless support without managing in-house teams.
</p>

<p className="mt-4 text-base text-slate-600">
From handling queries to resolving complaints, our services ensure faster resolution, better engagement, and improved customer satisfaction.
</p>

<div className="mt-6 space-y-3">

{[
"Omnichannel support (call, chat, email)",
"Experienced and trained support agents",
"Advanced CRM integration",
"Scalable support infrastructure"
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
Key Benefits of Customer Support Outsourcing
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
  🚀 Customer Support Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
  Elevate Your Customer Experience with
  <span className="block text-cyan-200">
    Scalable Support Solutions
  </span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
  Improve response time, enhance customer satisfaction, and reduce costs with our expert outsourcing solutions.
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