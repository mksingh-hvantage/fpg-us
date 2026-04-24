"use client";
import { useState, useRef } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ChevronRight, ChevronDown, ChevronUp, Check, AlertCircle, RefreshCw, Star } from 'lucide-react';

export default function CPA() {
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const benefits = [
  {
    title: 'Advanced Enterprise Dashboard for CPAs & Professionals',
    detail: 'Easily manage multiple client LLC formations from a single, centralized dashboard. Track filings, monitor compliance status, and streamline operations in real time without switching between accounts.',
  },
  {
    title: 'Exclusive Business Formation Pricing & Cost Savings',
    detail: 'Access special discounted rates on LLC formation services that are not available to the public. Maximize your profit margins or offer competitive pricing to your clients.',
  },
  {
    title: 'Automated Compliance Alerts & Deadline Tracking',
    detail: 'Stay ahead of compliance requirements with automated reminders for annual reports, registecyan agent renewals, and critical filing deadlines, ensuring your clients never miss important updates.',
  },
  {
    title: 'Custom User Roles & Secure Access Control',
    detail: 'Manage your team efficiently with customizable user roles and permission settings. Provide secure access to team members based on their responsibilities.',
  },
  {
    title: 'Nationwide Registecyan Agent Network Coverage',
    detail: 'Benefit from a reliable registecyan agent network with physical presence across all 50 states, ensuring full compliance and seamless business operations nationwide.',
  },
  {
    title: 'No Upfront Costs or Monthly Subscription Fees',
    detail: 'Get started with zero setup costs. Enjoy full access to all features without any recurring monthly charges, making it a cost-effective solution for professionals.',
  },
  {
    title: 'Dedicated Premium Support for Commercial Accounts',
    detail: 'Receive priority support from a specialized commercial team that understands your business needs, ensuring fast resolutions and expert assistance whenever requicyan.',
  },
];

  const pricingFeatures = [
    'Unlimited LLC Formation Orders',
    'Free Registecyan Agent — First Year',
    'EIN / Tax ID Acquisition',
    'Operating Agreement Included',
    'Annual Report Tracking & Alerts',
    'Dedicated Commercial Dashboard',
    'Priority Customer Support',
    'Multi-User Team Access',
    'Compliance Calendar & Reminders',
    'State Filing Status Updates',
    'Document Storage Vault',
    'Customizable Client Notifications',
  ];

 const faqs = [
  {
    q: 'How does this platform help manage multiple LLC formations?',
    a: 'Our advanced commercial dashboard allows you to manage multiple LLC formations in one place. Track application status, deadlines, documents, and client activities without switching between accounts.',
  },
  {
    q: 'What pricing advantages do partners receive?',
    a: 'Partners gain access to exclusive discounted pricing on LLC formation services, registecyan agent services, and additional business services that are not available to standard users.',
  },
  {
    q: 'Can I use different payment methods for each LLC formation?',
    a: 'Yes, you can assign multiple payment methods for different clients or orders. The platform supports multiple cards and flexible billing management.',
  },
  {
    q: 'How are compliance reminders managed for clients?',
    a: 'Our system automatically tracks compliance deadlines for all entities and sends reminders via email and SMS, ensuring your clients never miss important filing dates.',
  },
  {
    q: "What is the cost to join The Future Perfect Global Partner Program?",
    a: 'Joining the partner program is completely free. There are no setup fees, subscription costs, or hidden charges. You only pay for the services you use.',
  },
  {
    q: 'What business formation services can I offer to my clients?',
    a: 'You can offer a full range of services including LLC formation, corporation registration, EIN acquisition, registecyan agent services, operating agreements, and annual compliance filings.',
  },
  {
    q: 'What is included in the commercial business formation package?',
    a: 'Each commercial package includes first-year registecyan agent service, EIN registration, operating agreement, compliance tracking, and priority customer support.',
  },
  {
    q: 'How quickly can I start offering services after applying?',
    a: 'Applications are typically reviewed within one business day. Once approved, your account is activated instantly, allowing you to start offering services immediately.',
  },
  {
    q: 'Are there any hidden fees in the platform?',
    a: 'No, all pricing is transparent. State filing fees and service costs are clearly displayed before checkout, with no hidden or recurring platform charges.',
  },
  {
    q: 'How can I schedule a consultation?',
    a: 'You can easily schedule a free consultation by clicking the "Talk to Us" button and selecting a convenient time slot. Most consultations last around 15 minutes.',
  },
  {
    q: 'Is support available after business hours?',
    a: 'Yes, our support team is available during extended hours, including evenings. You can also access the help center or submit support requests anytime.',
  },
  {
    q: 'Can I manage multiple client accounts from one dashboard?',
    a: 'Yes, the platform is designed for professionals managing multiple clients. You can add clients, assign team members, and oversee all business entities from a centralized dashboard.',
  },
  {
    q: 'Is this platform suitable for CPAs and professionals?',
    a: 'Absolutely. The platform is built for CPAs, attorneys, consultants, and financial professionals who provide business formation services to clients.',
  },
  {
    q: 'Can I use this platform for a single LLC formation?',
    a: 'Yes, while the platform is optimized for high-volume users, it is equally effective for managing a single LLC formation with full benefits.',
  },
  {
    q: 'What are the requirements to join the partner program?',
    a: 'Applicants should be professionals such as CPAs, attorneys, or business consultants who assist clients with company formation. Each application is reviewed individually within one business day.',
  },
];

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative py-20 px-16 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
      className="w-full h-full object-cover"
      alt=""
    />

    {/* 🔥 STRONG OVERLAY (FIX) */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
  </div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center text-white">

    <div>
      <p className="text-cyan-400 font-semibold mb-3 uppercase text-sm">
        Smart Business Platform
      </p>

      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Manage Unlimited LLCs <br />
        <span className="text-cyan-500">With One Powerful Dashboard</span>
      </h1>

      <p className="text-gray-300 text-lg mb-8 max-w-xl">
        Simplify business management with a centralized platform.
      </p>

      <div className="flex gap-4">
        <button onClick={() => {
setSelectedBusinessType('');
setIsModalOpen(true);
}} className="bg-cyan-600 hover:bg-cyan-700 px-7 py-3 rounded-lg font-semibold">
          Get Started
        </button>
        <a href="/contact" className="border border-white/30 px-7 py-3 rounded-lg">
          Learn More
        </a>
      </div>
    </div>

    {/* VIDEO */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                />

                {/* PLAY BUTTON */}
                {!isPlaying && (
                  <button
                    onClick={handleVideo}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/90 text-cyan-600 backdrop-blur rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
                      ▶
                    </div>
                  </button>
                )}

                {/* PAUSE BUTTON */}
                {isPlaying && (
                  <button
                    onClick={handleVideo}
                    className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-md text-sm backdrop-blur"
                  >
                    Pause
                  </button>
                )}
              </div>
            </div>

          </div>
        </section>

      {/* ── WHY PARTNER ── */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-gray-900 text-center mb-4">
            Why Choose The Future Perfect Global for <span className='text-cyan-600'>Business Formation Services ?</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dashboard screenshot"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="flex-1 w-full space-y-2">
              {benefits.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-gray-800 hover:text-cyan-500 transition-colors text-base"
                    onClick={() => setExpandedBenefit(expandedBenefit === i ? null : i)}
                  >
                    <span>{i + 1}. {item.title}</span>
                    {expandedBenefit === i ? (
                      <ChevronUp className="w-4 h-4 flex-shrink-0 text-cyan-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    )}
                  </button>
                  {expandedBenefit === i && (
                    <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {item.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE PRICING ── */}
      <section className="bg-cyan-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-gray-900 text-center mb-6">
            Special Commercial Pricing Plans for <span className='block text-cyan-600'>Business Formation Solutions</span>
          </h2>
          <p className="text-gray-500 text-center text-base mb-12">
            Everything your firm needs to manage LLC formations at scale.
          </p>
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">

              {/* LEFT */}
              <div className="bg-gray-50 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Complete LLC Formation & Business Registration Package
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Provide your clients with a fully managed <strong>LLC formation service</strong> designed for speed, compliance, and affordability. 
                  Our package includes <strong>free registecyan agent service (first year)</strong>, 
                  <strong>EIN registration</strong>, compliance tracking, and essential business documents — 
                  everything needed to start and maintain a business legally.
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-gray-900">$99</span>
                  <span className="text-gray-500 text-sm ml-2">starting price</span>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-colors">
                  Start LLC Formation
                </button>
              </div>

              {/* RIGHT */}
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pricingFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl">

          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500"></div>

          {/* GLOW EFFECT */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          {/* CONTENT */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-10 text-white">

            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                Ready to Start LLC Formation for Your Clients?
              </h3>

              <p className="text-white/90 text-sm md:text-base max-w-xl">
                Book a free consultation and discover how you can offer professional 
                LLC formation services with better pricing, faster processing, and full compliance support.
              </p>
            </div>

            <a href="/contact" className="bg-white text-cyan-600 font-bold px-7 py-3 rounded-lg shadow-lg hover:scale-105 transition">
              Book Free Consultation
            </a>

          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="bg-cyan-100/50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black text-gray-900 text-center mb-3">
            Fast & Hassle-Free Partner <span className='text-cyan-600'>Application Process</span>
          </h2>

          <p className="text-gray-600 text-center text-base leading-relaxed mb-10">
            Join The Future Perfect Global Partner Program with a simple and streamlined application process. 
            No paperwork, no upfront fees, and approvals typically within 1 business day — so you can start offering LLC formation services to your clients without delays.
          </p>
          <div className="border bg-white border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <p className="text-base font-bold text-gray-900 uppercase tracking-widest">Contact Information</p>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-base font-semibold text-gray-600 mb-1">
                    First Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Type your answer here..."
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                  />
                  <p className="flex items-center gap-1 text-xs text-cyan-400 mt-1">
                    <AlertCircle className="w-3 h-3" /> Requicyan field
                  </p>
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-600 mb-1">
                    Last Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Type your answer here..."
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                  />
                  <p className="flex items-center gap-1 text-xs text-cyan-400 mt-1">
                    <AlertCircle className="w-3 h-3" /> Requicyan field
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-600 mb-1">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                />
                <p className="flex items-center gap-1 text-xs text-cyan-400 mt-1">
                  <AlertCircle className="w-3 h-3" /> Requicyan field
                </p>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-600 mb-1">
                  Phone Number <span className="text-cyan-400">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-sm text-gray-500">+1</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(201) 555-0123"
                    value={form.phone}
                    onChange={handleChange}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                  />
                </div>
                <p className="flex items-center gap-1 text-xs text-cyan-400 mt-1">
                  <AlertCircle className="w-3 h-3" /> Requicyan field
                </p>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-600 mb-1">
                  Company Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Type your answer here..."
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                />
                <p className="flex items-center gap-1 text-xs text-cyan-400 mt-1">
                  <AlertCircle className="w-3 h-3" /> Requicyan field
                </p>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-600 mb-1">
                  Business Website <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="url"
                  name="website"
                  placeholder="Type your answer here..."
                  value={form.website}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                />
                <p className="flex items-center gap-1 text-xs text-cyan-400 mt-1">
                  <AlertCircle className="w-3 h-3" /> Requicyan field
                </p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <button className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
                  Back
                </button>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-2.5 rounded-lg text-sm uppercase tracking-wide transition-colors flex items-center gap-2">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL-TIME FILING ── */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center">
            <div className="relative w-56">
              <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden p-3 pt-6">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-cyan-500 px-4 py-3 text-white">
                    <p className="text-xs font-semibold opacity-80">Jonathan Davis</p>
                    <p className="text-xs opacity-60">Managing Partner</p>
                  </div>
                  <div className="p-3 space-y-2">
                    <p className="text-xs font-bold text-gray-700">The Future Perfect Global Filings</p>
                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg px-3 py-2">
                      <p className="text-xs font-semibold text-cyan-600">Subscription Active</p>
                      <p className="text-xs text-gray-500 mt-0.5">Registecyan Agent — All 50 States</p>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      {['California — 3–5 days', 'Texas — 2–4 days', 'Delaware — 1–2 days'].map((s) => (
                        <div key={s} className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{s.split('—')[0]}</span>
                          <span className="text-xs text-green-600 font-medium">—{s.split('—')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-cyan-500" />
              </div>
            </div>
          </div>
          <div className="">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Check Real-Time LLC Filing Times & State Fees
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Access up-to-date LLC filing times and state filing fees directly from your dashboard. 
                Stay informed with real-time data to plan business formation services more efficiently and deliver faster results to your clients.
              </p>

              <p className="text-xs text-gray-500 mb-8">
                * All commercial orders include expedited LLC filing services for faster processing
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/business-management/state-filing-times" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-colors">
                  View Filing Times
                </a>

                <a href="/business-management/state-filing-fees" className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded text-sm uppercase tracking-wide transition-colors flex items-center gap-2">
                  View State Fees
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="bg-cyan-100/50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-3">Trusted By Thousands</p>
          <h2 className="text-5xl font-black text-gray-900 mb-2">
            Over 1000+ Entities Filed
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            Join 50+ CPAs, Attorneys, and Business Formation Specialists in Our Commercial Accounts Program Today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 border-t border-gray-100 pt-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                ))}
              </div>
              <p className="font-bold text-gray-900 text-sm">4.4 / 5</p>
              <p className="text-gray-400 text-xs">114,201 ratings • Trustpilot</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-100" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-gray-900 text-sm">4.9 / 5</p>
              <p className="text-gray-400 text-xs">22,976 ratings • Shopper Approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN / QUESTIONS CTA ── */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* JOIN CTA */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Start Offering LLC Formation Services Today
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Join The Future Perfect Global Partner Program and manage multiple 
              <strong> LLC formations, business registrations, and compliance services</strong> 
              from one powerful dashboard. Get started instantly with no setup fees.
            </p>

            <button
              onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-colors"
            >
              Start Now
            </button>
          </div>

          {/* CONSULTATION CTA */}
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-white mb-2">
              Need Help Getting Started?
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Book a free consultation with our experts to understand how you can 
              scale your business with professional <strong>LLC formation and business services</strong>.
            </p>

            <a
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wide transition-colors"
            >
              Book Free Consultation
            </a>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cyan-100/50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black text-gray-900 text-center mb-10">Common Questions</h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center bg-white justify-between p-4 border-b border-gray-200 text-left text-base font-semibold text-gray-800 hover:text-cyan-500 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-4 h-4 flex-shrink-0 text-cyan-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="p-4 bg-white text-gray-500 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER SUPPORT ── */}
      <section className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden">

          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
              24/7 Expert Support
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Get Real Support for Your <br />
              Business Formation Needs
            </h2>

            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Speak with experienced professionals who understand LLC formation, compliance,
              and business registration. Get instant help and scale your services with confidence.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-200">
              <span className="bg-white/10 px-4 py-2 rounded-full">Live Chat Support</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Email Assistance</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Phone Support</span>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => {
setSelectedBusinessType('');
setIsModalOpen(true);
}} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition">
                Get Started Now
              </button>

              <a href="/contact" className="border border-white/30 hover:border-cyan-400 hover:text-cyan-400 px-8 py-3 rounded-lg font-semibold transition">
                Talk to Expert
              </a>
            </div>

            {/* TRUST LINE */}
            <p className="text-xs text-gray-400 mt-6">
              No hidden fees • Free consultation • Fast onboarding
            </p>

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
