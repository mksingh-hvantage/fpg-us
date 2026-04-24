import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from 'react';

export default function DigitalMarketing() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [openIndex, setOpenIndex] = useState<number | null>(null);

// SEO-OPTIMIZED CONTENT

const services = [
  "Search Engine Optimization (SEO) – On-page, Off-page & Technical SEO",
  "Pay-Per-Click (PPC) Advertising – Google Ads & Paid Campaigns",
  "Social Media Marketing (SMM) & Social Media Optimization (SMO)",
  "Content Marketing & SEO Content Strategy",
  "Conversion Rate Optimization (CRO) & Landing Page Optimization",
];

const subServices = [
  "Keyword Research & Competitor Analysis",
  "Google Ads & Meta Ads Campaign Management",
  "Backlink Building & Authority Growth",
  "Technical SEO Audits & Website Optimization",
  "Local SEO & Google My Business Optimization",
  "Email Marketing & Automation Funnels",
];

const benefits = [
  "Rank higher on Google with proven SEO strategies",
  "Generate high-quality leads and increase conversions",
  "Maximize ROI with performance-driven marketing campaigns",
  "Build strong brand visibility across digital platforms",
  "Data-driven strategies with measurable results",
];

const process = [
  "Business & competitor analysis",
  "Keyword research & strategy planning",
  "Campaign setup (SEO, PPC, Social)",
  "Execution & optimization",
  "Performance tracking & reporting",
];
const faqs = [
{
q: "What is Digital Marketing and how does it help businesses grow?",
a: "Digital marketing is the process of promoting your business online using strategies like SEO (Search Engine Optimization), PPC advertising, social media marketing, and content marketing. It helps businesses increase website traffic, generate high-quality leads, improve brand visibility, and boost conversions. With the right digital marketing strategy, businesses can reach their target audience, rank higher on Google, and achieve long-term growth."
},
{
q: "How long does SEO take to show results?",
a: "SEO is a long-term investment in your website’s growth. Typically, you can start seeing noticeable improvements in rankings and traffic within 3 to 6 months. However, the timeline depends on factors like competition, keyword difficulty, website age, and the quality of SEO optimization. Consistent on-page SEO, technical SEO, and backlink building are key to achieving sustainable results."
},
{
q: "Which is better for my business: SEO or PPC advertising?",
a: "Both SEO and PPC advertising have their advantages. SEO focuses on organic traffic and long-term growth by improving your website ranking on search engines. PPC (Pay-Per-Click) advertising delivers instant traffic and leads through paid campaigns like Google Ads. The best strategy is to combine both SEO and PPC to maximize visibility, drive targeted traffic, and increase ROI."
},
{
q: "What services are included in your digital marketing solutions?",
a: "Our digital marketing services include complete end-to-end solutions such as SEO optimization (on-page, off-page, and technical SEO), Google Ads and PPC campaign management, social media marketing (SMM), social media optimization (SMO), content marketing, email marketing, and conversion rate optimization (CRO). We create customized strategies based on your business goals to deliver measurable results."
},
{
q: "Will I receive reports and performance tracking updates?",
a: "Yes, we provide detailed performance reports that include website traffic, keyword rankings, lead generation data, and ROI analysis. Our digital marketing reporting helps you track campaign performance, understand user behavior, and make data-driven decisions. Regular updates ensure transparency and continuous improvement in your marketing strategy."
},
{
q: "Do you provide digital marketing services for small businesses and startups?",
a: "Yes, we specialize in helping small businesses, startups, and growing enterprises with customized digital marketing strategies. Whether you need local SEO, lead generation, or brand awareness, we design cost-effective marketing campaigns that deliver results within your budget and help your business scale efficiently."
}
];
return (
<div className="bg-white text-slate-800">

{/* HERO */}
<section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
<div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

<div>

<span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-200">
<Cloud className="mr-2 h-4 w-4" />
#1 Digital Marketing Agency
</span>

<h1 className="mt-6 text-4xl font-extrabold leading-tight">
Best Digital Marketing Services to <span className="text-cyan-400">Boost Traffic, Leads & Sales</span>
</h1>

<p className="mt-6 text-lg text-slate-300">
Grow your business with **SEO Services, PPC Advertising, Social Media Marketing, and Content Marketing** designed to deliver real results.
</p>

<p className="mt-4 text-base text-slate-400 max-w-xl">
We help businesses rank higher on Google, increase website traffic, generate high-quality leads, and maximize ROI using data-driven digital marketing strategies.
</p>

<div className="mt-8 flex gap-4">

<button
onClick={() => setIsModalOpen(true)}
className="bg-cyan-400 px-8 py-4 rounded-xl text-slate-900 font-semibold hover:bg-cyan-300 transition shadow-lg"
>
Get Free Consultation <ArrowRight className="inline ml-2 h-4 w-4"/>
</button>

<a
href="#services"
className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition"
>
Explore Services
</a>

</div>

</div>

<div>
<img
src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80"
className="rounded-3xl shadow-2xl"
/>
</div>

</div>
</section>
{/* SERVICES */}
<section id="services" className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-extrabold">
        Our Digital Marketing Services
      </h2>
      <p className="mt-4 text-slate-600">
        Performance-driven services designed to grow traffic, leads, and revenue.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
      {services.map((item, i) => (
        <div
          key={i}
          className="group relative bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-xl"
        >
          {/* Top Accent */}
          <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition">
            <CheckCircle2 className="text-cyan-600 group-hover:text-white transition"/>
          </div>

          <p className="font-semibold text-lg text-slate-800 group-hover:text-cyan-600 transition">
            {item}
          </p>

          {/* Hover line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
        </div>
      ))}
    </div>

  </div>
</section>


{/* SUB SERVICES */}
<section className="py-20 bg-cyan-100/40">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-extrabold">
        Advanced Marketing Solutions
      </h2>
      <p className="mt-4 text-slate-600">
        Deep-level strategies to scale your digital growth efficiently.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
      {subServices.map((item, i) => (
        <div
          key={i}
          className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start gap-4">

            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-cyan-500 transition">
              <CheckCircle2 className="text-slate-500 group-hover:text-white"/>
            </div>

            <p className="text-slate-700 font-medium group-hover:text-cyan-600 transition">
              {item}
            </p>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
{/* BENEFITS */}
<section className="py-16 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4">

<h2 className="text-4xl font-extrabold text-center">
Why Choose Our Digital Marketing Services?
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
{benefits.map((item, i) => (
<div key={i} className="bg-white/5 p-6 rounded-2xl">
<CheckCircle2 className="text-cyan-400 mb-3"/>
<p>{item}</p>
</div>
))}
</div>

</div>
</section>
{/* PROCESS */}
<section className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-4xl font-extrabold text-center">
      Our Proven Digital Marketing Process
    </h2>

    <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
      A structured, data-driven approach to deliver consistent growth and measurable results.
    </p>

    <div className="mt-16 relative">

      {/* Line */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200"></div>

      <div className="grid md:grid-cols-5 gap-8 relative">

        {process.map((step, i) => (
          <div key={i} className="text-center relative">

            {/* Step Circle */}
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-cyan-600 text-white font-bold text-lg shadow-lg">
              {i + 1}
            </div>

            {/* Card */}
            <div className="mt-6 bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <p className="font-semibold text-slate-800">{step}</p>
            </div>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>

{/* FAQ */}
<section className="bg-cyan-100/40 py-16">
<div className="max-w-5xl mx-auto px-4">

<h2 className="text-4xl font-extrabold text-center">
FAQs – Digital Marketing Services
</h2>

<div className="mt-10 space-y-4">
{faqs.map((faq, i) => (
<div key={i} className="bg-white rounded-xl shadow">

<button
onClick={() => setOpenIndex(openIndex === i ? null : i)}
className="w-full flex font-bold justify-between items-center p-6"
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
<section className="bg-gradient-to-br from-cyan-600 to-slate-900 text-white py-16 text-center">

<h2 className="text-5xl font-extrabold">
Grow Your Business with Digital Marketing
</h2>

<p className="mt-4 text-lg">
Start generating traffic, leads, and sales today.
</p>

<button
onClick={() => setIsModalOpen(true)}
className="mt-6 bg-white text-cyan-700 px-10 py-4 rounded-xl font-semibold"
>
Get Started Now
</button>

</section>

<GetStartedModal
isOpen={isModalOpen}
onClose={() => setIsModalOpen(false)}
selectedBusinessType={''}
/>

</div>
);
}