import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function EPublishing() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Content
const challenges = [
  "Converting print content into digital formats across multiple devices.",
  "Maintaining formatting consistency across eReaders like Kindle and iPad.",
  "Managing large volumes of content and complex publishing workflows.",
  "Slow time-to-market for digital publications.",
  "Ensuring compatibility across multiple file formats and platforms.",
];

const services = [
  "eBook development, formatting, and digital publishing solutions.",
  "Print to eBook conversion (PDF, Word, InDesign to EPUB, MOBI).",
  "XML/HTML conversion and structured content transformation.",
  "Multi-device compatibility for Kindle, iPad, Android, and Nook.",
  "Content digitization, validation, and publishing workflow management.",
];

const benefits = [
  "Faster digital publishing and reduced turnaround time",
  "High-quality formatting across all devices",
  "Improved reader experience and accessibility",
  "Cost-effective content conversion and management",
  "Scalable publishing solutions for growing content needs",
];

const faqs = [
{
q: "What is ePublishing?",
a: "ePublishing, also known as electronic publishing, is the process of converting, formatting, and distributing content in digital formats such as EPUB, MOBI, PDF, and HTML. It allows books, journals, and documents to be accessed on devices like Kindle, iPad, smartphones, and web platforms. ePublishing helps businesses and authors reach a global audience while ensuring faster distribution and lower costs compared to traditional publishing."
},
{
q: "What formats do you support for digital publishing?",
a: "We support all major eBook and digital publishing formats including EPUB, MOBI (Kindle format), PDF, HTML, XML, and InDesign conversions. Our services ensure compatibility across popular eReaders like Amazon Kindle, Apple Books, Google Play Books, and other digital platforms, helping you maximize reach and user experience."
},
{
q: "Can you convert printed books into eBooks?",
a: "Yes, we specialize in print-to-digital conversion services. We convert printed books, scanned documents, and manuscripts into high-quality eBooks using formats like EPUB and MOBI. Our process includes OCR (Optical Character Recognition), formatting, proofreading, and optimization to ensure your digital book is clean, readable, and ready for publishing on platforms like Amazon Kindle."
},
{
q: "Do you support Kindle, iPad, and other devices?",
a: "Yes, we create fully responsive and device-compatible eBooks optimized for Amazon Kindle, Apple iPad, Android tablets, and smartphones. Our ePublishing solutions ensure that your content displays correctly across all screen sizes, providing a seamless reading experience for users on different devices."
},
{
q: "What is XML conversion in publishing?",
a: "XML conversion in publishing is the process of structuring content into a standardized format that allows easy reuse, scalability, and multi-platform publishing. XML-based workflows are widely used in academic publishing, journals, and enterprise content management because they improve consistency, automation, and search engine visibility."
},
{
q: "Do you ensure formatting consistency across devices?",
a: "Yes, we follow strict quality standards to maintain consistent formatting, typography, and layout across all digital formats and devices. Whether it's EPUB, MOBI, or PDF, we ensure your content looks professional and readable on Kindle, tablets, and mobile devices without formatting errors."
},
{
q: "Can you handle bulk ePublishing or large-scale projects?",
a: "Yes, we offer scalable ePublishing solutions for bulk projects, including journals, magazines, books, and enterprise content. Our team uses automated workflows and quality control processes to efficiently manage high-volume publishing while maintaining accuracy and consistency."
},
{
q: "Do you offer ongoing ePublishing support and maintenance?",
a: "Yes, we provide end-to-end ePublishing support including updates, revisions, content management, and format upgrades. Whether you need to update existing eBooks, optimize for new devices, or manage large digital libraries, our ongoing support ensures your content stays up-to-date and competitive."
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
ePublishing Experts
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Digital Publishing & eBook Conversion Services
</h1>

<p className="mt-6 text-lg text-slate-300">
Convert, manage, and publish your content across all digital platforms.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We help businesses and publishers transform content into high-quality digital formats, ensuring compatibility across multiple devices and delivering an enhanced reading experience.
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
src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80"
alt="ePublishing"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>

{/* INTRO */}
<section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>
<img
src="https://images.unsplash.com/photo-1656266724092-d979cb85469b?q=80"
className="rounded-3xl shadow-lg"
/>
</div>
<div>

<h2 className="text-3xl font-extrabold">
End-to-End Digital Publishing Solutions
</h2>

<p className="mt-6 text-base text-slate-600">
Digital publishing has transformed how content is created, distributed, and consumed across platforms. 
With the growing demand for <strong>eBooks, online publications, and digital content</strong>, businesses and authors 
need scalable and efficient <strong>ePublishing services</strong> to stay competitive.
</p>

<p className="mt-4 text-base text-slate-600">
We provide complete <strong>digital publishing solutions</strong> including <strong>eBook conversion, formatting, XML conversion, and multi-device optimization</strong> 
to ensure your content is accessible, readable, and optimized for platforms like <strong>Amazon Kindle, Apple Books, and mobile devices</strong>.
</p>

<p className="mt-4 text-base text-slate-600">
Our approach focuses on delivering <strong>high-quality, SEO-friendly digital content</strong> that improves discoverability, enhances user experience, 
and supports long-term content scalability for publishers, enterprises, and content creators.
</p>

<p className="mt-4 text-base text-slate-600">
Our ePublishing solutions are designed to support <strong>global content distribution</strong>, enabling seamless publishing across multiple digital platforms and marketplaces.
</p>

<p className="mt-4 text-base text-slate-600">
We also ensure <strong>SEO-friendly structuring and metadata optimization</strong> to improve content discoverability on search engines and digital libraries.
</p>

<p className="mt-4 text-base text-slate-600">
From authors to enterprises, our services help streamline <strong>digital content management, publishing workflows, and audience reach</strong> effectively.
</p>

<div className="mt-6 space-y-3">

{[
"Multi-format eBook conversion (EPUB, MOBI, PDF, HTML)",
"Device-compatible formatting (Kindle, iPad, Android, tablets)",
"Structured XML-based content workflows for scalability",
"Scalable publishing solutions for bulk and enterprise projects",
"OCR-based print-to-digital conversion for books and documents",
"Metadata optimization for better search visibility",
"Quality assurance for consistent layout and formatting",
"Support for Amazon Kindle, Apple Books & global platforms"
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
<section id="services" className="py-20 bg-cyan-100/40">

  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-5xl font-extrabold">
        Challenges vs Our Solutions
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        We identify key problems and deliver result-driven solutions to help your business grow faster and smarter.
      </p>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-2 gap-10">

      {/* Challenges Card */}
      <div className="relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition">

        <div className="absolute -top-5 left-6 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow">
          Challenges
        </div>

        <div className="mt-6 space-y-5">
          {challenges.map((item, i) => (
            <div key={i} className="flex items-start gap-4 group">

              <div className="min-w-[36px] h-9 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-500 transition">
                <CheckCircle2 className="text-red-500 group-hover:text-white"/>
              </div>

              <p className="text-slate-700">{item}</p>

            </div>
          ))}
        </div>

      </div>

      {/* Services Card */}
      <div className="relative bg-gradient-to-br from-cyan-600 to-slate-900 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">

        <div className="absolute -top-5 left-6 bg-white text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold shadow">
          Our Solutions
        </div>

        <div className="mt-6 space-y-5">
          {services.map((item, i) => (
            <div key={i} className="flex items-start gap-4 group">

              <div className="min-w-[36px] h-9 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white transition">
                <CheckCircle2 className="text-white group-hover:text-cyan-600"/>
              </div>

              <p className="text-white/90">{item}</p>

            </div>
          ))}
        </div>

      </div>

    </div>

  </div>

</section>

{/* BENEFITS */}
<section className="py-16 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4">

<h2 className="text-5xl font-extrabold text-center">
Benefits of ePublishing Services
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
className="w-full font-bold flex justify-between items-center p-6"
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
🚀 Publishing Experts
</span>

<h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
Transform Your Content
<span className="block text-cyan-200">
into Digital Publishing Success
</span>
</h2>

<p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
Reach global audiences with professionally formatted and optimized digital publications.
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