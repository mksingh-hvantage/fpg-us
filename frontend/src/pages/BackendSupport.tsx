import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function BackendSupport() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Managing orders, inventory, and returns manually across platforms.",
  "Handling customer queries and complaints efficiently.",
  "Tracking payments, refunds, and reconciliations accurately.",
  "Maintaining account health and avoiding penalties on marketplaces.",
  "Managing multiple backend operations while focusing on business growth.",
];

const services = [
  "Complete order processing and fulfillment management.",
  "Inventory tracking, stock updates, and synchronization.",
  "Payment reconciliation, refund handling, and reporting.",
  "Customer support management including queries and complaints.",
  "Account health monitoring, feedback management, and performance optimization.",
];

const benefits = [
  "Smooth and efficient backend operations",
  "Reduced workload and operational costs",
  "Improved customer satisfaction and retention",
  "Accurate financial tracking and reporting",
  "Better marketplace performance and account health",
];

const faqs = [
{
q: "What is eCommerce backend support?",
a: "Backend support includes managing all operational activities such as orders, inventory, payments, returns, and customer service to ensure smooth business functioning."
},
{
q: "Why is backend support important?",
a: "It ensures your operations run efficiently, reduces errors, improves customer experience, and allows you to focus on growing your business."
},
{
q: "Do you manage order processing?",
a: "Yes, we handle complete order lifecycle including order entry, processing, shipping coordination, and tracking."
},
{
q: "Can you manage inventory across platforms?",
a: "Yes, we provide real-time inventory tracking and updates across multiple eCommerce platforms."
},
{
q: "Do you handle returns and refunds?",
a: "Yes, we manage returns, refunds, claims, and customer disputes efficiently."
},
{
q: "How do you manage customer support?",
a: "We handle customer queries, complaints, feedback, and communication to ensure high satisfaction."
},
{
q: "Do you monitor account health?",
a: "Yes, we track account performance, feedback, ratings, and ensure compliance with marketplace policies."
},
{
q: "Do you provide ongoing support?",
a: "Yes, we offer continuous backend support services to ensure smooth operations and business growth."
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
eCommerce Backend Support Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
End-to-End Backend Support for Your eCommerce Business
</h1>

<p className="mt-6 text-lg text-slate-300">
Streamline your operations with expert backend management services.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We handle your daily operations including orders, inventory, payments, and customer support so you can focus on scaling your business.
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
src="https://images.unsplash.com/photo-1667372531881-6f975b1c86db?q=80"
alt="Backend Support"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1598870784088-35e7058da12c?q=80"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
Reliable eCommerce Backend Support Services
</h2>

<p className="mt-6 text-base text-slate-600">
Running an eCommerce business involves multiple backend operations that require constant monitoring and management.
</p>

<p className="mt-4 text-base text-slate-600">
We provide complete backend support solutions to ensure smooth operations, improved efficiency, and better customer experience.
</p>

<div className="mt-6 space-y-3">

{[
"End-to-end order and inventory management",
"Accurate payment and refund handling",
"Customer support and issue resolution",
"Performance monitoring and optimization"
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
Benefits of Backend Support Services
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
🚀 Backend Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Optimize Your Operations
<span className="block text-cyan-200">
& Scale Your eCommerce Business
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Let our experts manage your backend operations while you focus on growing your business.
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