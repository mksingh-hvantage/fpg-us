import GetStartedModal from '../components/GetStartedModal';
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Users,
  ShieldCheck,
  BarChart3,
  Layers,
  Zap,
  Globe
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';

// Utility: splits last two words and colorizes them cyan
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

// Hook: triggers animation when element enters viewport
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

// Animated section wrapper
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

export default function HumanResources() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    { icon: Users, text: "Managing employee lifecycle processes efficiently across departments." },
    { icon: ShieldCheck, text: "High HR operational costs due to in-house hiring and infrastructure." },
    { icon: Layers, text: "Compliance risks with constantly changing labor laws and regulations." },
    { icon: Zap, text: "Time-consuming payroll processing and benefits administration." },
    { icon: BarChart3, text: "Difficulty in maintaining employee engagement and performance tracking." },
  ];

  const services = [
    { icon: Users, text: "End-to-end HR outsourcing including recruitment and onboarding." },
    { icon: Zap, text: "Payroll processing, tax filing, and compensation management." },
    { icon: ShieldCheck, text: "Employee benefits administration and compliance management." },
    { icon: BarChart3, text: "Performance management and employee engagement solutions." },
    { icon: Globe, text: "HR analytics, reporting, and workforce planning support." },
  ];

  const benefits = [
    { icon: BarChart3, text: "Reduced HR operational and administrative costs" },
    { icon: ShieldCheck, text: "Improved compliance with labor laws and regulations" },
    { icon: Zap, text: "Faster recruitment and onboarding processes" },
    { icon: Users, text: "Enhanced employee experience and engagement" },
    { icon: Layers, text: "Scalable HR solutions for growing businesses" },
    { icon: Globe, text: "Access to experienced HR professionals and technology" },
  ];

  const stats = [
    { value: "60%", label: "Cost Reduction" },
    { value: "3×", label: "Faster Hiring" },
    { value: "99%", label: "Compliance Rate" },
    { value: "500+", label: "Companies Served" },
  ];

  const faqs = [
    {
      q: "What is HR outsourcing and how does it work?",
      a: "HR outsourcing involves delegating human resource functions such as recruitment, payroll, compliance, and employee management to a specialized service provider. Businesses partner with HR outsourcing firms to streamline operations, reduce costs, and ensure compliance while focusing on core business activities."
    },
    {
      q: "Which HR functions can be outsourced?",
      a: "Organizations can outsource a wide range of HR functions including talent acquisition, onboarding, payroll processing, employee benefits administration, compliance management, performance evaluation, training, and HR analytics. The services can be customized based on business needs."
    },
    {
      q: "Is HR outsourcing suitable for small businesses?",
      a: "Yes, HR outsourcing is highly beneficial for small and medium-sized businesses. It allows them to access professional HR expertise without maintaining a full in-house HR team, helping reduce costs while ensuring compliance and efficient workforce management."
    },
    {
      q: "How does HR outsourcing improve compliance?",
      a: "HR outsourcing providers stay updated with local and international labor laws, tax regulations, and compliance requirements. They implement structured processes, documentation, and reporting systems to ensure businesses remain compliant and avoid legal risks."
    },
    {
      q: "Can HR outsourcing improve employee satisfaction?",
      a: "Yes, by streamlining HR processes, improving payroll accuracy, and offering structured performance management systems, HR outsourcing enhances the overall employee experience, leading to higher satisfaction and retention."
    },
    {
      q: "How secure is HR data with outsourcing providers?",
      a: "Professional HR outsourcing companies use secure cloud systems, data encryption, and strict confidentiality protocols to ensure sensitive employee information is protected against unauthorized access and data breaches."
    },
    {
      q: "Does HR outsourcing help in recruitment?",
      a: "Absolutely. HR outsourcing providers offer recruitment services including candidate sourcing, screening, interviews, and onboarding. This significantly reduces hiring time and improves the quality of talent acquisition."
    },
    {
      q: "What industries benefit from HR outsourcing services?",
      a: "Almost all industries including IT, healthcare, finance, retail, manufacturing, and startups benefit from HR outsourcing. It is especially useful for companies experiencing rapid growth or managing distributed teams."
    }
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center bg-slate-950 text-white overflow-hidden">

        {/* Animated background grid */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `linear-gradient(rgba(8,145,178,0.07) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(8,145,178,0.07) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glowing orbs */}
        <div style={{
          position: "absolute", top: "-120px", right: "-120px",
          width: "560px", height: "560px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(8,145,178,0.18) 0%, transparent 70%)",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          zIndex: 0,
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}
          <div>
            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0ms, transform 0.7s ease 0ms",
              }}
            >
              <span
                className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
              >
                <Cloud className="mr-2 h-4 w-4" />
                HR Outsourcing Solutions
              </span>
            </div>

            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.7s ease 120ms, transform 0.7s ease 120ms",
              }}
            >
              <h1 className="mt-6 text-5xl font-extrabold leading-tight">
                Comprehensive HR{" "}
                <span style={{ color: "#22d3ee" }}>Outsourcing</span>{" "}
                <br className="hidden sm:block" />
                <span style={{ color: "#22d3ee" }}>Services</span>
              </h1>
            </div>

            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.7s ease 240ms, transform 0.7s ease 240ms",
              }}
            >
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Streamline your human resource operations with scalable HR outsourcing solutions designed to improve efficiency, compliance, and employee experience.
              </p>
              <p className="mt-4 text-base text-slate-400 max-w-xl">
                Our HR Outsourcing services help businesses manage recruitment, payroll, compliance, and employee lifecycle processes efficiently using advanced technology and expert-driven strategies—while reducing operational costs.
              </p>
            </div>

            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(36px)",
                transition: "opacity 0.7s ease 360ms, transform 0.7s ease 360ms",
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                className="group flex items-center gap-2 bg-cyan-500 px-7 py-3.5 rounded-xl text-slate-900 font-semibold hover:bg-cyan-400 transition-all duration-200"
                style={{ boxShadow: "0 0 28px rgba(6,182,212,0.35)" }}
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#services"
                className="border border-white/20 px-7 py-3.5 rounded-xl text-white hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>

            {/* Stats row */}
            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease 480ms, transform 0.7s ease 480ms",
              }}
              className="mt-12 grid grid-cols-4 gap-4 border-t border-white/10 pt-10"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-extrabold" style={{ color: "#22d3ee" }}>{s.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with floating card */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.9s ease 200ms, transform 0.9s ease 200ms",
              position: "relative",
            }}
          >
            <div style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(8,145,178,0.3)",
              boxShadow: "0 0 60px rgba(8,145,178,0.2)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="HR Outsourcing"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(2,6,23,0.6) 0%, transparent 60%)"
              }} />
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: "28px", left: "28px",
              background: "rgba(15,23,42,0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "16px",
              padding: "16px 20px",
              display: "flex", alignItems: "center", gap: "12px",
              animation: "floatBadge 3.5s ease-in-out infinite",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: "rgba(6,182,212,0.15)", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}>
                <Users style={{ color: "#22d3ee", width: "22px", height: "22px" }} />
              </div>
              <div>
                <p style={{ color: "#22d3ee", fontWeight: 700, fontSize: "18px", margin: 0 }}>500+</p>
                <p style={{ color: "#94a3b8", fontSize: "12px", margin: 0 }}>Companies Trust Us</p>
              </div>
            </div>

            {/* Second badge */}
            <div style={{
              position: "absolute", top: "28px", right: "28px",
              background: "rgba(15,23,42,0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "12px",
              padding: "10px 16px",
              animation: "floatBadge2 4s ease-in-out infinite",
            }}>
              <p style={{ color: "#22d3ee", fontWeight: 700, fontSize: "14px", margin: 0 }}>✓ ISO Certified</p>
            </div>
          </div>

        </div>

        {/* Keyframes injected */}
        <style>{`
          @keyframes floatBadge {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes floatBadge2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes pulse-ring {
            0% { box-shadow: 0 0 0 0 rgba(6,182,212,0.4); }
            70% { box-shadow: 0 0 0 14px rgba(6,182,212,0); }
            100% { box-shadow: 0 0 0 0 rgba(6,182,212,0); }
          }
        `}</style>
      </section>

      {/* ── INTRO ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team collaboration"
              style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "24px" }}
            />
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
                <p style={{ fontWeight: 700, fontSize: "16px", color: "#0f172a", margin: 0 }}>99% Compliance</p>
                <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Regulatory adherence</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="text-4xl font-extrabold">
            <ColoredHeading text="End-to-End HR Outsourcing Solutions for Modern Businesses" />
          </h2>
          <p className="mt-6 text-base text-slate-600">
            HR outsourcing allows organizations to efficiently manage workforce operations while ensuring compliance with labor laws and industry standards.
          </p>
          <p className="mt-4 text-base text-slate-600">
            From recruitment and onboarding to payroll processing and performance management, our HR outsourcing services are designed to optimize productivity and improve employee engagement.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Efficient workforce management systems",
              "Improved compliance and risk mitigation",
              "Automation-driven HR processes",
              "Flexible and scalable HR solutions",
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
                Understanding your pain points is the first step. Here's what we tackle head-on.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-3xl p-8 h-full" style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-8">
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Layers style={{ color: "#ef4444", width: "20px", height: "20px" }} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800">HR Challenges</h3>
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

            {/* Services */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl p-8 h-full" style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-8">
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#ecfeff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle2 style={{ color: "#0891b2", width: "20px", height: "20px" }} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800">Our HR Services</h3>
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
                <ColoredHeading text="Key Benefits of HR Outsourcing" />
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Transform your workforce management with measurable outcomes.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div
                  className="group p-6 rounded-2xl h-full transition-all duration-300"
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
              <p className="mt-4 text-slate-500">Everything you need to know about HR outsourcing.</p>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 50}>
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
                  <div
                    style={{
                      maxHeight: openIndex === i ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
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
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "320px", height: "320px", borderRadius: "50%",
          background: "rgba(6,182,212,0.1)", zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", left: "10%",
          width: "200px", height: "200px", borderRadius: "50%",
          background: "rgba(6,182,212,0.07)", zIndex: 0,
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide">
              🚀 HR Outsourcing Experts
            </span>
            <h2 className="mt-5 text-5xl sm:text-5xl font-extrabold leading-tight">
              Transform Your HR Operations with{" "}
              <span style={{ color: "#67e8f9" }}>Scalable Outsourcing Solutions</span>
            </h2>
            <p className="mt-5 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
              Reduce HR costs, improve compliance, and enhance workforce productivity with our end-to-end HR outsourcing services tailored for modern businesses.
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