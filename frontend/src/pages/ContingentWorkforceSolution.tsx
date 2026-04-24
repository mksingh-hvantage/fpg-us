import GetStartedModal from '../components/GetStartedModal';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Code,
  TrendingUp,
  DollarSign,
  Headphones,
  Megaphone,
  FileText,
  ShoppingCart,
  Briefcase
} from "lucide-react";
import { useState } from 'react';

export default function ContingentWorkforceSolution() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const challenges = [
    "Managing sudden spikes in workforce demand without permanent overstaffing.",
    "High costs associated with full-time hiring, employee benefits, and long-term retention.",
    "Slow traditional recruitment cycles that delay critical project and business timelines.",
    "Difficulty sourcing specialized talent for short-term or niche technical assignments.",
    "Geographic and operational barriers when scaling distributed or remote teams quickly.",
  ];

  const services = [
    "Freelancers and independent contractors for project-based business engagements.",
    "Temporary, part-time, and contract staff for flexible workforce requirements.",
    "Offshore and remote resource deployment across IT, finance, and operations.",
    "Virtual assistants and customer support specialists on demand.",
    "IT, digital marketing, back-office, and consultant staffing solutions.",
  ];

  const benefits = [
    "Freedom from tax liability, bonuses, and compensation obligations",
    "Reduced infrastructure, stationery, and overhead resource costs",
    "Expert talent matched precisely to every project requirement",
    "Geographic flexibility through remote and offshore workforce deployment",
    "Greater agility — retain resources only as long as needed",
    "Faster talent fulfilment via a structured, proven staffing process",
  ];

  const subServices = [
  {
    icon: Code,
    title: "IT Technology",
    description:
      "Hire skilled developers, engineers, and IT specialists to build scalable software, manage infrastructure, implement cloud solutions, and provide ongoing technical support for your business systems."
  },
  {
    icon: TrendingUp,
    title: "Research & Analysis",
    description:
      "Get in-depth market research, competitor insights, and data-driven analysis from experienced professionals to help you make smarter strategic business decisions."
  },
  {
    icon: DollarSign,
    title: "Financial & Accounting",
    description:
      "Access certified accountants and finance experts for bookkeeping, tax compliance, auditing support, payroll management, and accurate financial reporting."
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Deliver exceptional customer experiences with trained support agents handling queries, complaints, technical issues, and relationship management across multiple channels."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Boost your brand visibility with experts in SEO, social media, content creation, paid ads, and performance marketing campaigns tailored to your goals."
  },
  {
    icon: FileText,
    title: "Claims Management",
    description:
      "Streamline insurance and claim processes with professionals skilled in documentation, verification, processing, and efficient customer communication."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Management",
    description:
      "Optimize your online store with specialists handling product listings, inventory tracking, order fulfillment, and marketplace growth strategies."
  },
  {
    icon: Briefcase,
    title: "Back Office & Operations",
    description:
      "Improve efficiency with reliable support for data entry, documentation, admin tasks, and day-to-day operational processes across your organization."
  }
];

  const faqs = [
    {
      q: "What are Contingent Workforce Solutions?",
      a: "Contingent workforce solutions refer to the strategic use of non-permanent workers—including freelancers, contractors, temporary employees, and outsourced resources—to meet specific business needs. These solutions help organizations scale quickly without the long-term commitment of permanent hiring."
    },
    {
      q: "What types of contingent workers can be sourced?",
      a: "Our contingent workforce solutions cover freelancers, consultants, temporary and part-time employees, short and long-term contractors, outsourced workers managed by a third party, W2 employees via staffing firm payroll, virtual assistants, remote resources, technical support staff, and development resources."
    },
    {
      q: "Which industries benefit most from contingent workforce outsourcing?",
      a: "Industries including IT and technology, financial and accounting services, digital marketing, customer support, e-commerce management, claims management, research and analysis, and back-office operations all benefit significantly from contingent staffing solutions."
    },
    {
      q: "How quickly can contingent resources be deployed?",
      a: "Our structured staffing process—from receiving a Request for Proposal (RFP) to final workforce delivery—is designed for speed and precision. We maintain a large, pre-qualified talent pool enabling rapid fulfilment without compromising quality."
    },
    {
      q: "How does contingent staffing reduce business costs?",
      a: "Contingent workforce solutions eliminate expenses related to permanent salaries, employee benefits, tax obligations, bonuses, and paid leaves. You pay only for productive output, converting fixed HR costs into flexible, scalable operational expenses."
    },
    {
      q: "Are contingent workers managed by your team?",
      a: "Yes. Depending on the engagement model, workers can be fully managed and paid by our team (outsourced model), deployed directly to your operations (contractor model), or provided as offshore staffing resources. We offer complete flexibility to suit your business model."
    },
    {
      q: "What is your process for delivering contingent workforce services?",
      a: "Our proven process includes: receiving a Request for Proposal, presenting a tailored proposal to the client, understanding project requirements and requisites, mapping key parameters, initiating the expert search, gathering a qualified talent pool, and delivering your contingent workforce on time."
    },
    {
      q: "Can contingent workforce solutions scale with business growth?",
      a: "Absolutely. Contingent staffing is inherently scalable—you can rapidly increase workforce capacity during peak demand and reduce it during slower periods, all without the long-term obligations of permanent employment. This flexibility is one of the primary advantages of our staffing solutions."
    }
  ];

  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">
              <Users className="mr-2 h-4 w-4" />
              BPO / Contingent Workforce Solutions
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight">
              Contingent Workforce Solutions for Flexible & Scalable Staffing
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Quick, timely, and expert contingent manpower solutions that bridge your operational gaps and accelerate business growth at every stage.
            </p>

            <p className="mt-4 text-base text-slate-400 max-w-xl">
              We help early-stage startups to mature enterprises overcome workforce scaling challenges by providing freelancers, contractors, remote resources, offshore teams, and on-demand specialists tailored to your exact business needs.
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
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Contingent Workforce Solutions"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Contingent Staffing Services"
            className="rounded-3xl shadow-lg"
          />
        </div>

        <div>

          <h2 className="mt-6 text-3xl font-extrabold">
            End-to-End Contingent Workforce Staffing Services
          </h2>

          <p className="mt-6 text-base text-slate-600">
            Your workforce needs are dynamic. Whether you require a single freelancer for a specialized task or an entire offshore team to manage a business function, our contingent workforce solutions deliver expert talent with speed and precision.
          </p>

          <p className="mt-4 text-base text-slate-600">
            We cover IT technology, research and analysis, financial and accounting, customer support, digital marketing, claims management, e-commerce management, and back-office operations — ensuring no requirement goes unmet.
          </p>

          <div className="mt-6 space-y-3">

            {[
              "Freelancers, contractors, and temporary staff on demand",
              "Offshore and remote resource deployment globally",
              "Structured fulfilment process for timely delivery",
              "Expert-matched staffing with zero long-term liability"
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

      {/* SUB SERVICES */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-slate-900">
                Our Specialized Service Areas
            </h2>
            <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Access a highly skilled and flexible workforce tailored to your business needs across multiple industries and functions. Scale faster with the right talent at the right time.
            </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {subServices.map((service, i) => {
                const IconComponent = service.icon;
                return (
                <div
                    key={i}
                    className="group bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-slate-700 mb-5 group-hover:scale-110 transition">
                    <IconComponent className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                    </p>

                    {/* subtle bottom line */}
                    <div className="mt-4 h-1 w-10 bg-cyan-500 rounded-full group-hover:w-16 transition-all"></div>
                </div>
                );
            })}
            </div>

        </div>
        </section>

      {/* BENEFITS */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-5xl font-extrabold text-center">
            Key Benefits of Contingent Workforce Solutions
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
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">

          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm tracking-wide">
            Contingent Workforce Specialists
          </span>

          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Scale Your Business with
            <span className="block text-cyan-200">
              Expert Contingent Staffing
            </span>
          </h2>

          <p className="mt-3 text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Bridge workforce gaps, reduce hiring costs, and access specialized talent on demand with our proven contingent workforce outsourcing solutions.
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
