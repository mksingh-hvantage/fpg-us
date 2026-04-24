import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function SouNPro() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO Optimized Content

const challenges = [
  "Inefficient supply chain visibility and tracking systems",
  "High logistics and transportation costs affecting profitability",
  "Manual order processing and shipment errors",
  "Delays in inventory management and warehouse operations",
  "Difficulty in managing multi-channel logistics operations",
];

const services = [
  "End-to-end logistics process outsourcing solutions",
  "Order processing, shipment tracking, and fulfillment support",
  "Inventory and warehouse management services",
  "Freight management and transportation coordination",
  "Supply chain analytics, reporting, and optimization",
];

const benefits = [
  "Reduced logistics and operational costs",
  "Faster order processing and delivery timelines",
  "Improved supply chain visibility and tracking",
  "Enhanced accuracy and reduced manual errors",
  "Scalable logistics operations for business growth",
];

const faqs = [
{
q: "What is logistics outsourcing and how does it work?",
a: "Logistics outsourcing involves delegating supply chain, transportation, warehousing, and order fulfillment processes to a specialized third-party provider. These providers use advanced tools, automation, and experienced teams to manage logistics operations efficiently while reducing costs and improving delivery timelines."
},
{
q: "Which businesses benefit from logistics outsourcing services?",
a: "E-commerce companies, retail businesses, manufacturers, wholesalers, and distributors benefit significantly from logistics outsourcing. It helps them streamline operations, improve delivery speed, and focus more on core business functions like sales and customer experience."
},
{
q: "How does logistics outsourcing reduce operational costs?",
a: "Outsourcing eliminates the need for maintaining in-house logistics infrastructure, warehouses, and large operational teams. It converts fixed costs into variable costs and allows businesses to leverage economies of scale provided by outsourcing partners."
},
{
q: "What services are included in logistics process outsourcing?",
a: "Services typically include order processing, shipment tracking, inventory management, warehouse support, freight coordination, supply chain analytics, returns management, and last-mile delivery optimization."
},
{
q: "Is logistics outsourcing secure and reliable?",
a: "Yes, professional logistics outsourcing providers use secure systems, cloud-based tracking, real-time reporting, and strict compliance protocols to ensure data security, transparency, and reliable operations."
},
{
q: "How does outsourcing improve supply chain efficiency?",
a: "Outsourcing providers use automation tools, AI-driven analytics, and optimized workflows to reduce delays, improve accuracy, and ensure faster movement of goods across the supply chain."
},
{
q: "Can logistics outsourcing scale with business growth?",
a: "Absolutely. Logistics outsourcing solutions are highly scalable, allowing businesses to handle increased order volumes, seasonal demand spikes, and expansion into new markets without operational disruptions."
},
{
q: "What role does technology play in logistics outsourcing?",
a: "Technology plays a critical role by enabling real-time tracking, warehouse automation, predictive analytics, route optimization, and seamless communication across the supply chain ecosystem."
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
Logistics Outsourcing Solutions
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Logistics Process Outsourcing Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Optimize your supply chain with advanced logistics outsourcing solutions designed to improve efficiency, reduce costs, and enhance delivery performance.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our logistics outsourcing services help businesses manage order processing, inventory, warehousing, and transportation operations using automation, analytics, and scalable infrastructure.
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
src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
alt="Logistics"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088"
className="rounded-3xl shadow-lg"
/>
</div>

<div>

<h2 className="mt-6 text-3xl font-extrabold">
End-to-End Logistics Outsourcing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Logistics outsourcing enables businesses to streamline supply chain operations while ensuring faster delivery, improved inventory control, and better customer satisfaction.
</p>

<p className="mt-4 text-base text-slate-600">
Our solutions cover everything from order processing and warehouse management to transportation coordination and supply chain analytics.
</p>

<div className="mt-6 space-y-3">

{[
"Real-time shipment tracking and visibility",
"Automation-driven logistics workflows",
"Improved inventory accuracy",
"Scalable supply chain operations"
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
Key Benefits of Logistics Outsourcing
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

<span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm">
🚀 Logistics Outsourcing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
Transform Your Supply Chain with
<span className="block text-cyan-200">
Smart Logistics Solutions
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto">
Reduce costs, improve delivery speed, and gain full control over your logistics operations with our scalable outsourcing services.
</p>

<div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

<button
onClick={() => setIsModalOpen(true)}
className="bg-white px-8 py-4 rounded-2xl text-cyan-700 font-semibold"
>
Get Started Now
</button>

<a
href="#services"
className="border border-white/30 px-8 py-4 rounded-2xl"
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