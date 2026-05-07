import GetStartedModal from '../components/GetStartedModal';
import { Cloud, CheckCircle2, ArrowRight, ChevronDown, TrendingUp, Shield, Zap, Globe, BarChart2, Settings } from "lucide-react";
import { useState } from 'react';

// Utility: color last two words of a heading cyan
function ColoredHeading({ text, className = "" }: { text: string; className?: string }) {
  const words = text.trim().split(" ");
  const normal = words.slice(0, -2).join(" ");
  const colored = words.slice(-2).join(" ");
  return (
    <span className={className}>
      {normal} <span className="text-cyan-500">{colored}</span>
    </span>
  );
}

export default function BusinessProcessOutsourcing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const challenges = [
    { icon: <Settings className="h-5 w-5" />, text: "Managing complex operations while driving digital transformation leads to inefficiencies." },
    { icon: <Shield className="h-5 w-5" />, text: "Strict compliance requirements increase operational risks." },
    { icon: <BarChart2 className="h-5 w-5" />, text: "Legacy systems create data silos and inefficiencies." },
    { icon: <TrendingUp className="h-5 w-5" />, text: "High infrastructure costs slow business growth." },
    { icon: <Zap className="h-5 w-5" />, text: "Limited access to advanced automation tools." },
  ];

  const services = [
    "End-to-end business process outsourcing services.",
    "Finance & insurance operations management.",
    "Healthcare and life sciences support services.",
    "Back-office outsourcing for high-volume operations.",
    "Cloud-based automation & analytics platforms.",
  ];

  const benefits = [
    { icon: <TrendingUp className="h-6 w-6" />, title: "Reduce Operational Costs", desc: "Cut overheads by up to 40% with lean cloud infrastructure and shared resource models." },
    { icon: <Zap className="h-6 w-6" />, title: "Automation-Driven Efficiency", desc: "Replace manual steps with intelligent workflows that run faster and with fewer errors." },
    { icon: <Globe className="h-6 w-6" />, title: "Enterprise-Grade Technology", desc: "Access best-in-class tools and platforms without the heavy upfront investment." },
    { icon: <Shield className="h-6 w-6" />, title: "Compliance & Security", desc: "Stay audit-ready with built-in governance frameworks and data protection standards." },
    { icon: <BarChart2 className="h-6 w-6" />, title: "Real-Time Analytics", desc: "Make smarter decisions with live dashboards and predictive insights." },
    { icon: <Settings className="h-6 w-6" />, title: "Scalable Operations", desc: "Scale resources up or down instantly to match business demand and seasonal peaks." },
  ];

  const faqs = [
    { q: "What is Business Process Outsourcing (BPO)?", a: "Business Process Outsourcing (BPO) is the practice of outsourcing non-core business operations such as customer support, finance, data processing, and back-office tasks to specialized service providers. It helps organizations improve efficiency, reduce operational costs, and focus on core business activities." },
    { q: "What are the benefits of outsourcing business processes?", a: "Outsourcing offers multiple benefits including cost reduction, improved operational efficiency, access to advanced technology, scalability, and enhanced focus on core business functions. It also enables businesses to leverage expert resources without heavy infrastructure investment." },
    { q: "Is BPO secure for handling sensitive business data?", a: "Yes, modern BPO providers use enterprise-grade security frameworks, data encryption, compliance standards, and secure cloud infrastructure to ensure data protection. Most providers follow global compliance standards such as GDPR, HIPAA, and ISO certifications." },
    { q: "Which industries benefit the most from BPO services?", a: "Industries such as banking, financial services, insurance (BFSI), healthcare, life sciences, eCommerce, and telecommunications benefit significantly from BPO services due to their high-volume operations and compliance requirements." },
    { q: "What is the difference between BPO and BPaaS?", a: "BPO focuses on outsourcing business processes, while Business Process as a Service (BPaaS) delivers those services through cloud-based platforms combined with automation, analytics, and scalable infrastructure." },
    { q: "How does outsourcing reduce operational costs?", a: "Outsourcing reduces costs by eliminating the need for in-house infrastructure, reducing staffing expenses, and converting fixed costs into flexible operating expenses (OPEX). It also improves efficiency through automation and standardized workflows." },
    { q: "Can BPO services scale with business growth?", a: "Yes, BPO solutions are highly scalable. Businesses can easily increase or decrease resources based on demand, making outsourcing an ideal solution for growing companies and seasonal operations." },
    { q: "How do I choose the right outsourcing partner?", a: "When selecting a BPO provider, consider their industry expertise, technology capabilities, security standards, scalability, client reviews, and ability to customize solutions based on your business needs." },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center bg-slate-950 overflow-hidden">

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(var(--tw-gradient-from,#06b6d4) 1px,transparent 1px),linear-gradient(90deg,var(--tw-gradient-from,#06b6d4) 1px,transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[30%] right-[20%] w-[200px] h-[200px] rounded-full bg-slate-600/20 blur-2xl animate-pulse" style={{ animationDelay: "0.8s" }} />

        {/* Animated floating badge strip */}
        <div className="absolute top-8 left-0 right-0 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs text-cyan-300 tracking-widest uppercase animate-bounce" style={{ animationDuration: "3s" }}>
            <Cloud className="h-3.5 w-3.5" /> Managed BPO & BPaaS Solutions
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white">
              Cloud-Based BPO Solutions for{" "}
              <span className="text-cyan-400 relative">
                Modern Businesses
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-cyan-400/40 rounded-full" />
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Optimize operations, reduce costs, and scale faster with intelligent outsourcing powered by cloud technology, automation, and deep industry expertise.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[["40%", "Cost Reduction"], ["2×", "Efficiency"], ["24/7", "Support"]].map(([val, label]) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm">
                  <span className="font-bold text-cyan-400">{val}</span>
                  <span className="text-slate-400">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="group flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-3.5 text-slate-900 font-semibold hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="flex items-center gap-2 rounded-2xl border border-slate-700 px-7 py-3.5 text-slate-300 hover:border-slate-500 hover:text-white transition-all duration-200">
                Explore Services
              </a>
            </div>
          </div>

          {/* Hero image with animated ring */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 blur-2xl" />
            {/* Rotating ring */}
            <div className="absolute w-[110%] h-[110%] rounded-full border border-cyan-500/10 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute w-[90%] h-[90%] rounded-full border border-slate-700/50 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="BPO Solutions"
              className="relative rounded-3xl shadow-2xl shadow-black/50 w-full object-cover aspect-[4/3]"
            />
            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/90 backdrop-blur px-5 py-3 shadow-xl">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-xs text-slate-400">Operational</p>
                <p className="text-sm font-semibold text-white">100% Scalable Model</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
            alt="Team collaboration"
          />
          {/* Overlay badge */}
          <div className="absolute top-5 right-5 rounded-2xl bg-white/90 backdrop-blur border border-slate-100 shadow-lg px-5 py-3">
            <p className="text-xs text-slate-500 mb-1">Average result</p>
            <p className="text-2xl font-extrabold text-slate-900">40% <span className="text-cyan-500 text-base font-semibold">cost saved</span></p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="inline-block rounded-full bg-cyan-50 border border-cyan-200 px-4 py-1.5 text-xs text-cyan-700 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-extrabold leading-tight">
            <ColoredHeading text="Operational Excellence with Managed Outsourcing" />
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Our BPO services enable organizations to streamline workflows, reduce complexity, and improve business performance through technology-driven solutions. We combine domain expertise with cloud platforms, automation, and analytics to transform traditional processes into agile, scalable operations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {[
              "Standardize processes across departments",
              "Improve compliance & governance",
              "Leverage automation for smarter decisions",
              "Enable faster scalability",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" />
                <p className="text-sm text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGES + SERVICES ── */}
      <section id="services" className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 text-xs text-slate-400 font-semibold uppercase tracking-widest">
              Problems & Solutions
            </span>
            <h2 className="text-4xl font-extrabold text-white">
              <ColoredHeading text="Challenges We Help You Overcome" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 space-y-4">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-400" /> Common Challenges
              </h3>
              {challenges.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition">
                  <span className="mt-0.5 flex-shrink-0 text-red-400">{item.icon}</span>
                  <p className="text-sm text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 space-y-4">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" /> Our Services
              </h3>
              {services.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/25 transition">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3 max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-cyan-50 border border-cyan-200 px-4 py-1.5 text-xs text-cyan-700 font-semibold uppercase tracking-widest">
              Why It Matters
            </span>
            <h2 className="text-4xl font-extrabold">
              <ColoredHeading text="Key Benefits of Managed BPO Services" />
            </h2>
            <p className="text-slate-500">Unlock efficiency, scalability, and cost savings with our cloud-powered outsourcing solutions.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-cyan-200 transition-all duration-300">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-6 rounded-3xl bg-slate-950 p-8 text-center">
            {[["40%", "Cost Reduction"], ["2×", "Operational Efficiency"], ["100%", "Scalable Model"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-cyan-400">{val}</p>
                <p className="text-sm text-slate-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO / FEATURES SECTION ── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs text-slate-500 font-semibold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="text-4xl font-extrabold leading-tight">
              <ColoredHeading text="Managed Business Process Outsourcing" />
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Our cloud-based BPO solutions empower organizations to reduce operational costs, improve efficiency, and scale seamlessly in a competitive digital landscape. By leveraging BPaaS, advanced automation, and data-driven insights, we help enterprises transform traditional workflows into agile, efficient operations.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Our managed outsourcing services are designed for industries such as banking, financial services, insurance, healthcare, and life sciences — ensuring compliance, accuracy, and operational excellence at every stage.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "End-to-end process management with cloud integration",
                "Automation-driven workflows to reduce manual errors",
                "Real-time analytics for better decision-making",
                "Secure, compliant, and scalable infrastructure",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" />
                  <p className="text-sm text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              alt="Team working"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-block rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 text-xs text-slate-500 font-semibold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-5xl font-extrabold">
              <ColoredHeading text="Frequently Asked Questions" />
            </h2>
            <p className="text-slate-500">Common questions about BPO and managed outsourcing.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openIndex === i ? "border-cyan-200 bg-cyan-50/50" : "border-slate-100 bg-white hover:border-slate-200"}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-slate-900 text-base">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${openIndex === i ? "rotate-180 text-cyan-500" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-base text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-slate-950 py-28">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#06b6d4 1px,transparent 1px),linear-gradient(90deg,#06b6d4 1px,transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-5 py-2 text-xs text-slate-300 tracking-widest uppercase">
            🚀 Managed BPO & Outsourcing Solutions
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Transform Your Business Operations with{" "}
            <span className="text-cyan-400">Scalable Outsourcing</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Reduce costs, improve efficiency, and accelerate growth with cloud-based BPO and BPaaS services tailored for modern enterprises.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-slate-700 px-8 py-4 text-base font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-all">
              Explore Services
            </a>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
            {[["40%", "Cost Reduction"], ["2×", "Efficiency Boost"], ["24/7", "Support"], ["100%", "Scalable"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-cyan-400">{val}</p>
                <p className="text-xs text-slate-500 mt-1">{label}</p>
              </div>
            ))}
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