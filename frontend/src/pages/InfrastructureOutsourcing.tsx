import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function InfrastructureOutsourcing() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO Content
const challenges = [
  "Resistance to organizational change from employees and stakeholders.",
  "Lack of structured change management processes and frameworks.",
  "Poor communication during transformation initiatives.",
  "Low adoption rates of new systems and technologies.",
  "Difficulty in aligning people, processes, and business goals.",
];

const services = [
  "End-to-end change management strategy and implementation.",
  "Stakeholder engagement and communication planning.",
  "Training and development programs for smooth transition.",
  "Organizational transformation and process optimization.",
  "Change impact analysis and performance tracking.",
];

const benefits = [
  "Higher employee adoption and engagement",
  "Faster implementation of business transformations",
  "Reduced resistance to change initiatives",
  "Improved productivity and operational efficiency",
  "Stronger alignment between business goals and workforce",
];

const faqs = [
{
q: "What is Change Management Outsourcing?",
a: "Change management outsourcing involves partnering with experts to plan, execute, and manage organizational changes such as digital transformation, process upgrades, or structural shifts. It ensures smooth transitions with minimal disruption to operations."
},
{
q: "Why is change management important for businesses?",
a: "Effective change management helps organizations adapt to evolving market conditions, adopt new technologies, and improve operational efficiency while ensuring employees are aligned and engaged throughout the transformation process."
},
{
q: "Who can benefit from change management outsourcing?",
a: "Enterprises, startups, IT companies, financial institutions, and organizations undergoing digital transformation, mergers, or restructuring can significantly benefit from outsourced change management services."
},
{
q: "How does outsourcing improve change adoption?",
a: "Outsourcing providers bring structured frameworks, communication strategies, and training programs that help employees understand, accept, and adopt new processes faster and more effectively."
},
{
q: "What services are included in change management outsourcing?",
a: "Services include strategy development, stakeholder communication, training programs, process redesign, impact analysis, and continuous monitoring of change initiatives."
},
{
q: "How does change management reduce business risks?",
a: "By proactively identifying risks, preparing mitigation strategies, and ensuring proper communication, change management minimizes disruptions, errors, and resistance during transformation."
},
{
q: "Can change management outsourcing support digital transformation?",
a: "Yes, it plays a critical role in digital transformation by helping organizations implement new technologies, train employees, and ensure seamless adoption across departments."
},
{
q: "How do you measure the success of change management initiatives?",
a: "Success is measured through KPIs such as employee adoption rates, productivity improvements, reduced resistance, faster implementation timelines, and overall business performance."
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
Change Management Outsourcing
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Change Management Outsourcing Services for Business Transformation
</h1>

<p className="mt-6 text-lg text-slate-300">
Drive successful organizational change with expert-led outsourcing solutions designed to improve adoption, reduce resistance, and accelerate transformation.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
Our change management outsourcing services help businesses implement new processes, technologies, and strategies smoothly—ensuring employee alignment, improved productivity, and long-term success.
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
alt="Change Management"
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
End-to-End Change Management Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Change management outsourcing enables organizations to successfully implement transformation initiatives while minimizing disruption and maximizing efficiency.
</p>

<p className="mt-4 text-base text-slate-600">
We provide structured frameworks, strategic planning, and execution support to ensure seamless adoption of new processes, systems, and business models.
</p>

<div className="mt-6 space-y-3">

{[
"Structured change management frameworks",
"Effective communication strategies",
"Employee training and engagement",
"Data-driven performance tracking"
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
Key Benefits of Change Management Outsourcing
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
🚀 Change Management Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Lead Successful Transformations with
<span className="block text-cyan-200">
Expert Change Management Solutions
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Ensure smooth transitions, improve employee adoption, and achieve business goals faster with our proven change management outsourcing services.
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