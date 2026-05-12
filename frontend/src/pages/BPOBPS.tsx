import GetStartedModal from "../components/GetStartedModal";
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Database,
  PhoneCall,
  Globe,
  Image,
  BarChart3,
  Layers,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ─── Utility: accent last two words with text-cyan-600 ─── */
function AccentLastTwo({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 2) return <span className="text-cyan-600">{text}</span>;
  const main = words.slice(0, -2).join(" ");
  const accent = words.slice(-2).join(" ");
  return (
    <>
      {main} <span className="text-cyan-600">{accent}</span>
    </>
  );
}

/* ─── Fade-in on scroll ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const transforms: Record<string, string> = {
    bottom: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[from],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Animated counter ─── */
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(Math.floor(start));
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function BpoServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const challenges = [
    "Many organizations struggle with managing large volumes of administrative tasks while still maintaining excellent customer service standards.",
    "Handling customer communication across phone, email, and digital channels requires dedicated support teams and operational systems.",
    "Managing large datasets, documents, and transaction records internally can increase operational costs and reduce efficiency.",
    "Businesses expanding globally often require scalable support systems capable of handling customer interactions across multiple regions.",
  ];

  const services = [
    {
      title: "Inbound Customer Support",
      desc: "Professional call center teams handle customer inquiries, product support requests, service issues, and order tracking while maintaining consistent communication quality.",
      icon: PhoneCall,
      color: "bg-cyan-50 text-cyan-600",
      accent: "border-cyan-100",
    },
    {
      title: "Outbound Customer Engagement",
      desc: "Outbound communication services support lead generation, appointment scheduling, customer follow-ups, surveys, and market outreach campaigns.",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
      accent: "border-blue-100",
    },
    {
      title: "Back Office Operations",
      desc: "Administrative services including document processing, transaction handling, record management, and operational workflow support.",
      icon: Layers,
      color: "bg-violet-50 text-violet-600",
      accent: "border-violet-100",
    },
    {
      title: "Data Processing Services",
      desc: "High-volume data entry, data conversion, form processing, document digitization, and structured database management solutions.",
      icon: Database,
      color: "bg-emerald-50 text-emerald-600",
      accent: "border-emerald-100",
    },
    {
      title: "Digital Marketing & SEO Support",
      desc: "Online visibility improvement through search engine optimization, digital marketing campaigns, content development, and website optimization.",
      icon: BarChart3,
      color: "bg-amber-50 text-amber-600",
      accent: "border-amber-100",
    },
    {
      title: "Image Editing & Digital Media",
      desc: "Professional photo editing, background removal, color correction, and graphic optimization for marketing, e-commerce, and media businesses.",
      icon: Image,
      color: "bg-rose-50 text-rose-600",
      accent: "border-rose-100",
    },
  ];

  const benefits = [
    "Reduce operational overhead while maintaining consistent service quality across customer and administrative processes.",
    "Allow internal teams to focus on product innovation, strategic planning, and market expansion.",
    "Improve service efficiency with structured operational workflows and dedicated outsourcing teams.",
    "Access experienced professionals trained in customer service operations, data management, and digital business support.",
    "Enhance customer satisfaction through faster response times and professional communication.",
    "Create scalable operational frameworks that support business growth and increased service demand.",
    "Improve data accuracy and operational transparency through structured data management processes.",
    "Expand global service capabilities with multilingual support teams and extended service coverage.",
  ];

  const industries = [
    "Automotive and transportation companies",
    "E-commerce retailers and online marketplaces",
    "Financial institutions and insurance providers",
    "Technology companies and software providers",
    "Retail brands and consumer product companies",
    "Professional services firms and consulting businesses",
  ];

  const faqs = [
    {
      q: "What is Business Process Outsourcing (BPO)?",
      a: "Business Process Outsourcing (BPO) is the practice of delegating specific business operations to specialized third-party service providers. These processes may include customer service, call center support, administrative tasks, data processing, digital marketing, and technical assistance. By outsourcing these operational responsibilities, companies can reduce internal workload, lower operational costs, and focus on strategic initiatives such as product development, innovation, and business growth.",
    },
    {
      q: "Which business functions can be outsourced through BPO services?",
      a: "A wide range of business functions can be outsourced depending on operational needs. Commonly outsourced services include inbound and outbound call center operations, customer support, technical support, data entry, document processing, back-office administration, accounting assistance, digital marketing, and e-commerce store management.",
    },
    {
      q: "How does outsourcing improve operational efficiency for businesses?",
      a: "Outsourcing improves efficiency by allowing experienced service providers to manage repetitive or time-consuming tasks using structured workflows and specialized tools. Dedicated outsourcing teams focus entirely on operational processes, which leads to faster task completion, improved accuracy, and better resource utilization.",
    },
    {
      q: "Are BPO services suitable for startups and growing businesses?",
      a: "Yes, outsourcing services are highly beneficial for startups and growing companies. Instead of investing heavily in infrastructure, hiring large teams, and managing operational systems, businesses can leverage outsourcing partners to handle operational tasks efficiently.",
    },
    {
      q: "Can outsourcing support international or global business operations?",
      a: "Many BPO providers operate globally and offer multilingual support teams capable of handling customer interactions across multiple time zones and geographic regions. This enables businesses to deliver consistent customer support and operational services to international markets without establishing physical offices in every location.",
    },
    {
      q: "How do companies maintain service quality when outsourcing processes?",
      a: "Organizations maintain service quality through clearly defined service level agreements (SLAs), performance monitoring systems, and detailed reporting frameworks. Regular communication between the client company and outsourcing provider ensures that operational standards are maintained.",
    },
    {
      q: "Do BPO services support e-commerce and online businesses?",
      a: "Yes, outsourcing services are widely used in the e-commerce industry to manage daily operational activities including product catalog management, order processing support, inventory monitoring, customer service handling, and marketplace account management.",
    },
    {
      q: "What industries benefit the most from Business Process Outsourcing?",
      a: "Business Process Outsourcing is used across a wide range of industries including technology, finance, healthcare, retail, e-commerce, telecommunications, and automotive sectors. Outsourcing helps these businesses improve efficiency, reduce operational complexity, and maintain consistent service quality.",
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Clients Served" },
    { value: 40, suffix: "%", label: "Cost Reduction" },
    { value: 99, suffix: "%", label: "Accuracy Rate" },
    { value: 24, suffix: "/7", label: "Support Coverage" },
  ];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-18px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.6; }
          100% { transform: scale(1.05); opacity: 0; }
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #22d3ee 40%, #fff 60%, #67e8f9 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -8px rgba(0,0,0,0.12);
        }
      `}</style>

      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden">

        {/* Animated dot-grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(6,182,212,0.18) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Radial glows */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
          style={{ background: "radial-gradient(circle, #0e7490, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #164e63, transparent 70%)" }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${6 + i * 6.5}%`,
                top: `${12 + (i * 43) % 78}%`,
                opacity: 0.12 + (i % 5) * 0.04,
                animation: `float ${3.5 + (i % 4)}s ease-in-out ${i * 0.35}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Sweeping shimmer bar */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div
            className="h-full w-1/4"
            style={{
              background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
              animation: "sweep 3.5s linear infinite",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left copy */}
          <div>
            <div
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "none" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
                <Cloud className="h-4 w-4" />
                Business Process Outsourcing Services
              </span>
            </div>

            <h1
              className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight shimmer-text"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "none" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              }}
            >
              Scalable BPO & Business Process Services for Modern Enterprises
            </h1>

            <p
              className="mt-6 text-slate-300 text-lg leading-relaxed"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "none" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              Businesses today require efficient operational support to remain competitive in fast-moving digital markets. Our outsourcing services help organizations streamline customer support, administrative processes, data management, and digital workflows while reducing operational complexity.
            </p>

            {/* Feature pills */}
            <div
              className="mt-6 flex flex-wrap gap-2"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transition: "opacity 0.7s ease 0.28s",
              }}
            >
              {["24/7 Support", "Cost Efficient", "Global Coverage", "Scalable Teams"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="mt-8 flex flex-wrap gap-4"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "none" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.32s, transform 0.7s ease 0.32s",
              }}
            >
              <button
                onClick={() => {
                  setSelectedBusinessType("");
                  setIsModalOpen(true);
                }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]"
              >
                <span className="relative z-10">Request Consultation</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            {/* Mini stats */}
            <div
              className="mt-10 grid grid-cols-3 gap-6"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transition: "opacity 0.7s ease 0.42s",
              }}
            >
              {[
                { num: "500+", label: "Clients Worldwide" },
                { num: "40%", label: "Cost Savings" },
                { num: "99%", label: "Accuracy Rate" },
              ].map((s, i) => (
                <div key={i} className="border-l border-cyan-500/30 pl-4">
                  <p className="text-2xl font-bold text-white">{s.num}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div
            className="relative"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "none" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-cyan-500/8 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
              className="relative rounded-3xl shadow-2xl ring-1 ring-white/10 w-full object-cover"
              alt="BPO Services"
            />

            {/* Floating badge 1 */}
            <div
              className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/90 px-5 py-4 shadow-2xl backdrop-blur-sm"
              style={{ animation: "float 3s ease-in-out infinite alternate" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Service Quality</p>
                <p className="text-lg font-bold text-white">SLA-Backed</p>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div
              className="absolute -top-5 -right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/90 px-5 py-3 shadow-2xl backdrop-blur-sm"
              style={{ animation: "float 3.8s ease-in-out 0.6s infinite alternate" }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Efficiency Gain</p>
                <p className="text-sm font-bold text-white">Up to 60%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ INTRO ═══════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 py-24 text-center">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
            Why Outsource
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            <AccentLastTwo text="Comprehensive Outsourcing Solutions for Efficient Business Operations" />
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Business Process Outsourcing enables organizations to improve efficiency by delegating operational responsibilities to experienced service providers. These services allow companies to focus on strategic priorities such as innovation, growth planning, and customer experience development.
          </p>
        </FadeIn>

        {/* Icon trio */}
        <FadeIn delay={150} className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: Zap, title: "Operational Speed", desc: "Streamlined workflows reduce processing time across every business function." },
            { icon: ShieldCheck, title: "Quality Assurance", desc: "SLA-backed service delivery with performance monitoring and reporting." },
            { icon: TrendingUp, title: "Scalable Growth", desc: "Flexible teams that grow with your business demand and service volume." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 card-hover">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">
                <item.icon className="h-5 w-5 text-cyan-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* ═══════════════════════════ CHALLENGES + INDUSTRIES ═══════════════════════════ */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 rounded-full pointer-events-none opacity-10"
          style={{ background: "radial-gradient(ellipse, #0e7490, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Challenges & Industries
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold">
              <AccentLastTwo text="Operational Challenges & Industries We Support" />
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl mx-auto leading-relaxed">
              Modern organizations often face operational complexities while trying to deliver consistent customer service and maintain efficient business workflows. Our BPO solutions help businesses across multiple industries streamline processes and improve operational performance.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <FadeIn delay={100} from="left">
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15">
                    <ShieldCheck className="h-5 w-5 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300">Common Operational Challenges</h3>
                </div>
                <div className="space-y-4">
                  {challenges.map((item, i) => (
                    <div key={i} className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
                      <div className="flex h-7 w-7 shrink-0 mt-0.5 items-center justify-center rounded-lg bg-red-500/15">
                        <CheckCircle2 className="h-4 w-4 text-red-400" />
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Industries */}
            <FadeIn delay={200} from="right">
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15">
                    <Globe className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300">Industries Supported by Our BPO Services</h3>
                </div>
                <div className="space-y-4">
                  {industries.map((item, i) => (
                    <div key={i} className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
                      <div className="flex h-7 w-7 shrink-0 mt-0.5 items-center justify-center rounded-lg bg-cyan-500/15">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ SERVICES ═══════════════════════════ */}
      <section id="services" className="relative py-24 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
              What We Offer
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold">
              <AccentLastTwo text="Core Business Process Services" />
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 70}>
                  <div className={`group relative h-full rounded-3xl border bg-white p-6 shadow-sm card-hover ${item.accent}`}>
                    {/* Top accent line on hover */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-bold text-lg text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* ═══════════════════════════ BENEFITS ═══════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
              The Advantage
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-slate-900">
              <AccentLastTwo text="Business Benefits of Outsourcing" />
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Outsourcing operational processes allows organizations to improve efficiency, reduce costs, and scale business operations without expanding internal teams. Professional BPO services provide structured workflows and experienced support teams that help businesses operate more efficiently.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="group h-full flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm card-hover">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-100 group-hover:bg-cyan-200 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FAQ ═══════════════════════════ */}
      <section className="relative py-24 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-100 to-transparent" />

        <div className="max-w-3xl mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
              Got Questions?
            </span>
            <h2 className="mt-2 text-4xl font-extrabold">
              <AccentLastTwo text="Business Process Outsourcing FAQs" />
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 45}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${openFaq === index ? "border-cyan-200 shadow-md shadow-cyan-50" : "border-slate-200 hover:border-slate-300"}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-semibold text-sm leading-snug transition-colors ${openFaq === index ? "text-cyan-700" : "text-slate-900"}`}>
                      {faq.q}
                    </span>
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${openFaq === index ? "bg-cyan-100 rotate-180" : "bg-slate-100"}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${openFaq === index ? "text-cyan-600" : "text-slate-500"}`} />
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: openFaq === index ? "260px" : "0",
                      opacity: openFaq === index ? 1 : 0,
                      transition: "max-height 0.35s ease, opacity 0.25s ease",
                      overflow: "hidden",
                    }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA ═══════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24">
        <div
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #0e7490, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-10"
          style={{ background: "radial-gradient(circle, #7e22ce, transparent 70%)" }}
        />

        {/* Top shimmer bar */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div
            className="h-full w-1/3"
            style={{
              background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
              animation: "sweep 3s linear infinite",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              🚀 Trusted BPO Partner for Global Businesses
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
              Streamline Your Operations with
              <span className="block text-cyan-400 mt-1">Expert BPO Solutions</span>
            </h2>

            <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Reduce costs, improve efficiency, and scale faster with our professional outsourcing services tailored to your business needs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedBusinessType("");
                  setIsModalOpen(true);
                }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl shadow-cyan-500/20 transition-all hover:bg-cyan-400 active:scale-[0.98]"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            {/* Animated stat grid */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-5">
                    <p className="text-3xl font-extrabold text-white">
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-sm text-slate-400 mt-1">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
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