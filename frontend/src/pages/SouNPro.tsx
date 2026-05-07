import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Truck,
  Package,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Clock,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

// Colorizes last two words of a heading with cyan-600
function ColoredHeading({ text, className = "" }: { text: string; className?: string }) {
  const words = text.trim().split(" ");
  if (words.length <= 2) {
    return <span className={className} style={{ color: "#0891b2" }}>{text}</span>;
  }
  const main = words.slice(0, words.length - 2).join(" ");
  const last2 = words.slice(-2).join(" ");
  return (
    <span className={className}>
      {main}{" "}
      <span style={{ color: "#0891b2" }}>{last2}</span>
    </span>
  );
}

// Scroll-triggered fade-in
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function SouNPro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    { icon: Layers, text: "Inefficient supply chain visibility and tracking systems" },
    { icon: BarChart3, text: "High logistics and transportation costs affecting profitability" },
    { icon: Package, text: "Manual order processing and shipment errors" },
    { icon: Clock, text: "Delays in inventory management and warehouse operations" },
    { icon: Globe, text: "Difficulty in managing multi-channel logistics operations" },
  ];

  const services = [
    { icon: Truck, text: "End-to-end logistics process outsourcing solutions" },
    { icon: Package, text: "Order processing, shipment tracking, and fulfillment support" },
    { icon: Layers, text: "Inventory and warehouse management services" },
    { icon: Globe, text: "Freight management and transportation coordination" },
    { icon: BarChart3, text: "Supply chain analytics, reporting, and optimization" },
  ];

  const benefits = [
    { icon: BarChart3, text: "Reduced logistics and operational costs" },
    { icon: Zap, text: "Faster order processing and delivery timelines" },
    { icon: Globe, text: "Improved supply chain visibility and tracking" },
    { icon: ShieldCheck, text: "Enhanced accuracy and reduced manual errors" },
    { icon: Layers, text: "Scalable logistics operations for business growth" },
    { icon: Truck, text: "Expert-driven freight and transportation coordination" },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "2×", label: "Faster Delivery" },
    { value: "98%", label: "Order Accuracy" },
    { value: "300+", label: "Clients Served" },
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
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center bg-slate-950 text-white overflow-hidden">

        {/* Animated dot grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `radial-gradient(rgba(8,145,178,0.18) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />

        {/* Moving route line SVG */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.07 }}
          preserveAspectRatio="none"
        >
          <polyline points="0,200 200,200 250,120 500,120 560,240 800,240 860,100 1200,100 1280,200 1600,200"
            fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="8 6" />
          <polyline points="0,340 150,340 220,260 480,260 540,380 900,380 960,200 1400,200 1440,340 1600,340"
            fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 8" />
        </svg>

        {/* Glow orbs */}
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(8,145,178,0.20) 0%, transparent 70%)", zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "360px", height: "360px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", zIndex: 0,
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}
          <div>
            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0ms, transform 0.7s ease 0ms",
            }}>
              <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                <Cloud className="mr-2 h-4 w-4" />
                Logistics Outsourcing Solutions
              </span>
            </div>

            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease 120ms, transform 0.7s ease 120ms",
            }}>
              <h1 className="mt-6 text-5xl font-extrabold leading-tight">
                Logistics Process{" "}
                <span style={{ color: "#22d3ee" }}>Outsourcing</span>{" "}
                <span style={{ color: "#22d3ee" }}>Services</span>
              </h1>
            </div>

            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 240ms, transform 0.7s ease 240ms",
            }}>
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Optimize your supply chain with advanced logistics outsourcing solutions designed to improve efficiency, reduce costs, and enhance delivery performance.
              </p>
              <p className="mt-4 text-base text-slate-400 max-w-xl">
                Our logistics outsourcing services help businesses manage order processing, inventory, warehousing, and transportation operations using automation, analytics, and scalable infrastructure.
              </p>
            </div>

            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(36px)",
              transition: "opacity 0.7s ease 360ms, transform 0.7s ease 360ms",
            }} className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="group flex items-center gap-2 bg-cyan-500 px-7 py-3.5 rounded-xl text-slate-900 font-semibold hover:bg-cyan-400 transition-all duration-200"
                style={{ boxShadow: "0 0 28px rgba(6,182,212,0.35)" }}
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="border border-white/20 px-7 py-3.5 rounded-xl text-white hover:bg-white/10 transition">
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease 480ms, transform 0.7s ease 480ms",
            }} className="mt-12 grid grid-cols-4 gap-4 border-t border-white/10 pt-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-extrabold" style={{ color: "#22d3ee" }}>{s.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.9s ease 200ms, transform 0.9s ease 200ms",
            position: "relative",
          }}>
            <div style={{
              borderRadius: "24px", overflow: "hidden",
              border: "1px solid rgba(8,145,178,0.3)",
              boxShadow: "0 0 60px rgba(8,145,178,0.2)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="Logistics"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(2,6,23,0.55) 0%, transparent 55%)"
              }} />
            </div>

            {/* Floating tracking card */}
            <div style={{
              position: "absolute", bottom: "28px", left: "28px",
              background: "rgba(15,23,42,0.88)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "16px",
              padding: "14px 18px",
              display: "flex", alignItems: "center", gap: "12px",
              animation: "floatA 3.5s ease-in-out infinite",
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "10px",
                background: "rgba(6,182,212,0.15)", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}>
                <Truck style={{ color: "#22d3ee", width: "20px", height: "20px" }} />
              </div>
              <div>
                <p style={{ color: "#22d3ee", fontWeight: 700, fontSize: "15px", margin: 0 }}>Live Tracking</p>
                <p style={{ color: "#94a3b8", fontSize: "11px", margin: 0 }}>300+ shipments active</p>
              </div>
            </div>

            {/* Floating badge top-right */}
            <div style={{
              position: "absolute", top: "28px", right: "28px",
              background: "rgba(15,23,42,0.88)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "12px",
              padding: "10px 16px",
              animation: "floatB 4.2s ease-in-out infinite",
            }}>
              <p style={{ color: "#22d3ee", fontWeight: 700, fontSize: "13px", margin: 0 }}>✓ 98% On-Time Delivery</p>
            </div>

            {/* Floating stat bottom-right */}
            <div style={{
              position: "absolute", bottom: "28px", right: "28px",
              background: "rgba(15,23,42,0.88)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "12px",
              padding: "10px 16px",
              animation: "floatC 3.8s ease-in-out infinite",
            }}>
              <p style={{ color: "#94a3b8", fontSize: "11px", margin: 0 }}>Cost Savings</p>
              <p style={{ color: "#22d3ee", fontWeight: 700, fontSize: "18px", margin: 0 }}>Up to 40%</p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes floatA {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes floatB {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes floatC {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088"
              alt="Logistics warehouse"
              style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "24px", display: "block" }}
            />
            {/* Overlay card */}
            <div style={{
              position: "absolute", bottom: "24px", right: "24px",
              background: "white", borderRadius: "16px",
              padding: "16px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              display: "flex", gap: "12px", alignItems: "center",
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: "#ecfeff", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <ShieldCheck style={{ color: "#0891b2", width: "20px", height: "20px" }} />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "16px", color: "#0f172a", margin: 0 }}>98% Accuracy</p>
                <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Order fulfillment rate</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="text-3xl font-extrabold">
            <ColoredHeading text="End-to-End Logistics Outsourcing Solutions" />
          </h2>
          <p className="mt-6 text-base text-slate-600">
            Logistics outsourcing enables businesses to streamline supply chain operations while ensuring faster delivery, improved inventory control, and better customer satisfaction.
          </p>
          <p className="mt-4 text-base text-slate-600">
            Our solutions cover everything from order processing and warehouse management to transportation coordination and supply chain analytics.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Real-time shipment tracking and visibility",
              "Automation-driven logistics workflows",
              "Improved inventory accuracy",
              "Scalable supply chain operations",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0" />
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── CHALLENGES + SERVICES ── */}
      <section id="services" className="py-16" style={{ background: "#f0f9ff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-5xl font-extrabold">
                <ColoredHeading text="Challenges We Solve for You" />
              </h2>
              <p className="mt-4 text-slate-500 max-w-xl mx-auto">
                From broken visibility to rising costs — we tackle the toughest supply chain pain points.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn delay={100}>
              <div className="bg-white rounded-3xl p-8 h-full" style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-8">
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Layers style={{ color: "#ef4444", width: "20px", height: "20px" }} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800">Logistics Challenges</h3>
                </div>
                <div className="space-y-4">
                  {challenges.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
                      <item.icon style={{ color: "#ef4444", width: "20px", height: "20px", marginTop: "2px", flexShrink: 0 }} />
                      <p className="text-slate-700 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl p-8 h-full" style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-8">
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ecfeff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle2 style={{ color: "#0891b2", width: "20px", height: "20px" }} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800">Our Logistics Services</h3>
                </div>
                <div className="space-y-4">
                  {services.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: "#ecfeff", border: "1px solid #a5f3fc" }}>
                      <item.icon style={{ color: "#0891b2", width: "20px", height: "20px", marginTop: "2px", flexShrink: 0 }} />
                      <p className="text-slate-700 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-5xl font-extrabold">
                <ColoredHeading text="Key Benefits of Logistics Outsourcing" />
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Measurable outcomes that transform your supply chain performance.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div
                  className="p-6 rounded-2xl h-full transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(8,145,178,0.12)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(8,145,178,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: "rgba(8,145,178,0.15)", display: "flex",
                    alignItems: "center", justifyContent: "center", marginBottom: "16px",
                  }}>
                    <item.icon style={{ color: "#22d3ee", width: "22px", height: "22px" }} />
                  </div>
                  <p className="text-slate-200">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold">
                <ColoredHeading text="Frequently Asked Questions" />
              </h2>
              <p className="mt-4 text-slate-500">Everything you need to know about logistics outsourcing.</p>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 45}>
                <div
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-200"
                  style={{
                    border: openIndex === i ? "1px solid #a5f3fc" : "1px solid #e2e8f0",
                    boxShadow: openIndex === i ? "0 4px 20px rgba(8,145,178,0.1)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                    <ChevronDown
                      className="shrink-0 transition-transform duration-300"
                      style={{
                        color: "#0891b2",
                        transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <div style={{
                    maxHeight: openIndex === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}>
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden py-16 text-white"
        style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0e7490 50%, #0f172a 100%)" }}
      >
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "320px", height: "320px", borderRadius: "50%",
          background: "rgba(6,182,212,0.1)", zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", left: "8%",
          width: "220px", height: "220px", borderRadius: "50%",
          background: "rgba(6,182,212,0.07)", zIndex: 0,
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm">
              🚀 Logistics Outsourcing Experts
            </span>
            <h2 className="mt-5 text-5xl sm:text-5xl font-extrabold leading-tight">
              Transform Your Supply Chain with{" "}
              <span style={{ color: "#67e8f9" }}>Smart Logistics Solutions</span>
            </h2>
            <p className="mt-5 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
              Reduce costs, improve delivery speed, and gain full control over your logistics operations with our scalable outsourcing services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-cyan-700 hover:bg-slate-100 transition-all"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
              >
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>
          </FadeIn>
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