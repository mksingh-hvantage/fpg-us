import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ArrowRight, DollarSign, Users, CheckCircle, AlertCircle, FileText, Briefcase } from "lucide-react";

export default function ConstructionCompany() { 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
    return (
    <div className="w-full bg-white">
          <section className="relative py-16 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 overflow-hidden">
  {/* subtle glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
    
    {/* LEFT CONTENT */}
    <div>
      <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-4">
        Start Your Construction Company
      </p>

      <h1 className="text-5xl font-extrabold text-white leading-xl mb-4">
        Build & Grow a Profitable <span className="text-cyan-400">Construction Business
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
        Learn how to start a construction business from scratch with expert guidance on 
        <span className="text-white font-medium"> licensing, permits, project management, contractor setup, and business growth strategies</span>. 
        Your complete step-by-step construction startup guide.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-lg transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
        >
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </button>

        <button className="border border-gray-400 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition">
          View Business Guide
        </button>
      </div>

      {/* TRUST POINTS */}
      <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">
        <span>✔ Step-by-Step Setup</span>
        <span>✔ Legal & Licensing Guide</span>
        <span>✔ 100% Beginner Friendly</span>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="hidden md:block relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-xl blur-xl"></div>
      <img
        src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Construction workers planning project on site"
        className="relative rounded-xl shadow-2xl border border-white/10"
      />
    </div>
  </div>
</section>

      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="text-center max-w-6xl mx-auto mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Start & Scale Your Construction Business
      </h2>
      <p className="text-gray-600 text-lg">
        A complete guide to choosing your construction niche and building a profitable 
        construction company with the right business strategy, planning, and execution.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* CARD 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-cyan-400/40 transition backdrop-blur">
        <h3 className="text-2xl font-bold mb-4">
          Determine Your Construction Niche
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Before you start a construction business, identifying the right niche is critical. 
          Your niche defines your target market, services, and long-term growth potential. 
          Conduct proper market research to understand demand, competition, and profitability 
          in your area.
        </p>

        {/* SUB SECTION */}
        <div className="space-y-6">
          
          <div className="">
            <h4 className="font-bold text-xl text-cyan-600 mb-2">
              Residential Construction
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Residential construction projects are ideal for beginners starting a construction 
              company. These projects are smaller, less competitive, and easier to manage. However, 
              working with homeowners requires strong communication, clear expectations, and 
              attention to detail.
            </p>
          </div>

          <div className="">
            <h4 className="font-bold text-xl text-cyan-600 mb-2">
              Commercial Construction
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Commercial construction projects involve larger budgets, strict building codes, 
              permits, and licenses. While highly competitive, they offer higher revenue potential 
              and faster project turnaround, making them a profitable option for scaling your 
              construction business.
            </p>
          </div>

        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 hover:border-cyan-400/40 transition backdrop-blur">
        <h3 className="text-2xl font-bold mb-4">
          Create a Construction Business Plan
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          A well-structured construction business plan is essential for long-term success. 
          It outlines your services, target market, pricing strategy, and revenue model. 
          Having a clear plan helps you attract clients, secure funding, and grow your 
          construction company efficiently.
        </p>

        {/* POINTS */}
        <ul className="space-y-4 text-gray-600 text-base">
          <li className="flex gap-3">
            <span className="text-cyan-600">✔</span>
            Define your construction services and business model
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-600">✔</span>
            Estimate startup costs, permits, and licensing requirements
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-600">✔</span>
            Plan revenue, profit margins, and financial projections
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-600">✔</span>
            Forecast growth for 3 months, 1 year, and 2 years
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-600">✔</span>
            Allocate budget for scaling, hiring, and operations
          </li>
        </ul>

        {/* NOTE */}
        <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg text-base text-gray-600">
          Building a strong construction startup strategy ensures faster growth, better 
          profitability, and long-term business stability.
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 bg-slate-950 text-white overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* HEADER */}
    <div className="text-center max-w-6xl mx-auto mb-16">
      <p className="text-cyan-400 uppercase tracking-wider font-semibold mb-3">
        Business Registration Guide
      </p>

      <h2 className="text-5xl font-extrabold mb-6 leading-xl">
        Register Your Construction Business 
        <span className="text-cyan-400 block">Legally & Professionally</span>
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed">
        Learn how to <span className="text-white font-medium">register a construction company</span>, 
        choose the best <span className="text-white font-medium">business structure</span>, apply for an 
        <span className="text-white font-medium"> EIN number</span>, and complete 
        <span className="text-white font-medium"> federal, state, and local business registration</span>. 
        A complete step-by-step guide for contractors and builders.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
        <div className="text-cyan-400 text-3xl mb-4">📁</div>
        <h3 className="text-xl font-bold mb-4">
          Choose the Right Business Structure
        </h3>

        <p className="text-gray-400 mb-6 text-sm">
          Selecting the right legal entity is critical for taxes, liability protection, and growth.
        </p>

        <ul className="space-y-3 text-sm text-gray-300">
          <li><span className="text-white font-medium">Sole Proprietorship:</span> Easy setup but no liability protection.</li>
          <li><span className="text-white font-medium">Partnership:</span> Shared ownership but limited legal protection.</li>
          <li><span className="text-cyan-400 font-semibold">LLC (Recommended):</span> Protects personal assets, simple and cost-effective.</li>
          <li><span className="text-white font-medium">S Corporation:</span> Tax-saving benefits for growing businesses.</li>
          <li><span className="text-white font-medium">C Corporation:</span> Best for large-scale construction companies.</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
        <div className="text-cyan-400 text-3xl mb-4">📧</div>
        <h3 className="text-xl font-bold mb-4">
          Apply for EIN Number
        </h3>

        <p className="text-gray-400 text-sm mb-6">
          Get your <span className="text-white font-medium">Employer Identification Number (EIN)</span> 
          to handle taxes, payroll, and business banking.
        </p>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>Required for hiring employees</li>
          <li>Needed to open a business bank account</li>
          <li>Essential for tax filing & compliance</li>
          <li>Acts like a Social Security Number for your business</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
        <div className="text-cyan-400 text-3xl mb-4">✔</div>
        <h3 className="text-xl font-bold mb-4">
          Register with Government Authorities
        </h3>

        <p className="text-gray-400 text-sm mb-6">
          Complete your <span className="text-white font-medium">construction business registration</span> 
          with federal, state, and local agencies.
        </p>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>Register your business name legally</li>
          <li>Apply for licenses & permits</li>
          <li>Follow local contractor regulations</li>
          <li>Register in multiple states if required</li>
        </ul>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button
        onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
        className="bg-cyan-600 hover:bg-black text-white font-bold px-10 py-4 rounded-lg shadow-lg shadow-cyan-500/30 transition"
      >
        Start Your Construction Business Today
      </button>
    </div>

  </div>
</section>

<section className="relative py-16 bg-gradient-to-br from-white via-cyan-50 to-blue-50 overflow-hidden">

  {/* subtle background pattern */}
  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_#22d3ee_0,_transparent_40%)]"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* HEADER */}
    <div className="text-center max-w-6xl mx-auto mb-10">
      <p className="text-cyan-600 font-semibold uppercase tracking-wide mb-3">
        Construction Business Plan Guide
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Create a Winning 
        <span className="text-cyan-600"> Construction Business Plan</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Build a strong foundation for your construction company with a complete business plan covering 
        <span className="font-medium text-gray-900"> market analysis, contractor setup, licensing, financial projections, and growth strategies</span>. 
        Perfect for beginners and growing businesses.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Executive Summary",
          desc: "Summarize your construction business plan with key services, goals, target market, and growth strategy to attract investors and clients."
        },
        {
          title: "Business Goals",
          desc: "Define clear goals to grow your construction company, increase revenue, and build a strong brand in the construction industry."
        },
        {
          title: "Company Overview",
          desc: "Describe your construction business, services, expertise, and industry background to establish credibility and trust."
        },
        {
          title: "Market Analysis",
          desc: "Understand demand, target customers, competitors, and trends in the construction industry to find profitable opportunities."
        },
        {
          title: "Business Structure",
          desc: "Explain your company structure, legal setup, ownership, and team roles for efficient business operations."
        },
        {
          title: "Revenue Model",
          desc: "Outline how your construction business earns money, including pricing strategy, project types, and service offerings."
        },
        {
          title: "Marketing Strategy",
          desc: "Plan how to attract clients using SEO, online marketing, local ads, and lead generation for construction services."
        },
        {
          title: "Financial Plan",
          desc: "Include cost estimates, revenue projections, profit margins, and financial planning for long-term success."
        },
        {
          title: "Supporting Documents",
          desc: "Add licenses, permits, certifications, contracts, and other documents to strengthen your business plan."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-10 py-4 rounded-lg transition shadow-md"
      >
        Start Your Construction Business
      </button>
    </div>

  </div>
</section>

<section className="relative py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
  {/* glow effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* HEADER */}
    <div className="text-center max-w-6xl mx-auto mb-10">
      <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-3">
        Legal & Compliance Guide
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Construction Business Licenses, Permits & Insurance
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Get your construction company legally compliant with the right 
        <span className="text-white font-medium"> contractor licenses, permits, surety bonds, and construction insurance policies</span>. 
        Protect your business, reduce risk, and meet all government regulations with confidence.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* LICENSES */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
        <h3 className="text-xl font-semibold text-white mb-4">
          Licenses & Permits
        </h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          Ensure your construction business operates legally by obtaining all required 
          <span className="text-white"> federal, state, and local contractor licenses and permits</span>.
        </p>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>✔ General Contractor License (mandatory in most states)</li>
          <li>✔ Business registration & local permits</li>
          <li>✔ Pass licensing exams & background verification</li>
          <li>✔ Submit application fees & compliance documents</li>
        </ul>
      </div>

      {/* BONDS */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
        <h3 className="text-xl font-semibold text-white mb-4">
          Surety Bonds
        </h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          Build trust and meet licensing requirements with 
          <span className="text-white"> construction surety bonds</span> that guarantee project completion and financial responsibility.
        </p>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>✔ Required for contractor licensing approval</li>
          <li>✔ Protects clients from contract breaches</li>
          <li>✔ Covers unpaid suppliers & workers</li>
          <li>✔ Enhances credibility & project trust</li>
        </ul>
      </div>

      {/* INSURANCE */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
        <h3 className="text-xl font-semibold text-white mb-4">
          Construction Insurance
        </h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          Protect your construction company from risks with essential 
          <span className="text-white"> business insurance policies</span> designed for contractors.
        </p>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>✔ General Liability Insurance (accidents & damages)</li>
          <li>✔ Workers Compensation Insurance (employee protection)</li>
          <li>✔ Property Insurance (office & site protection)</li>
          <li>✔ Tools & Equipment Insurance (theft/damage coverage)</li>
          <li>✔ Builder’s Risk Insurance (project protection)</li>
        </ul>
      </div>

    </div>

    {/* BOTTOM CTA */}
    <div className="text-center mt-16">
      <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-10 py-4 rounded-lg shadow-lg shadow-cyan-500/30 transition">
        Get Your Construction Business Compliant
      </button>
    </div>

  </div>
</section>

<section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-cyan-50 overflow-hidden">
  
  {/* subtle background blur */}
  <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-200/40 blur-[100px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* HEADER */}
    <div className="text-center max-w-6xl mx-auto mb-10">
      <p className="text-cyan-600 font-semibold uppercase tracking-wide mb-3">
        Construction Business Funding
      </p>

      <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-xl">
        Secure Financing for Your 
        <span className="text-cyan-600"> Construction Company</span>
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Explore the best ways to fund your construction startup, including 
        <span className="font-medium text-gray-900"> equipment financing, business loans, SBA loans, and credit lines</span>. 
        Get the capital you need to grow your construction business successfully.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition">
        <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
          🛠
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Equipment Financing
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Finance essential construction equipment like machinery, tools, and vehicles without heavy upfront costs. 
          Compare the best construction equipment loans or explore alternative funding options to reduce financial risk.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition">
        <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
          💰
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Business Line of Credit
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Access flexible working capital with a business line of credit. Pay interest only on what you use, making it ideal for managing cash flow in construction projects. 
          Best suited for businesses with some operational history.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition">
        <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
          📊
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          SBA Loans (Low-Interest)
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          Government-backed SBA loans offer low-interest financing for small construction businesses. Ideal for expansion, equipment purchase, or working capital.
        </p>

        <ul className="text-sm text-gray-600 space-y-2">
          <li><span className="font-semibold text-gray-800">7(a) Loan:</span> Up to $5M for growth & operations</li>
          <li><span className="font-semibold text-gray-800">Microloan:</span> Up to $50K for small needs</li>
          <li><span className="font-semibold text-gray-800">CDC/504:</span> For heavy equipment & assets</li>
        </ul>
      </div>
    </div>

    {/* BOTTOM CTA */}
    <div className="text-center mt-16">
      <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition">
        Explore Financing Options
      </button>
    </div>

  </div>
</section>

<section className="relative py-16 bg-cyan-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="text-center max-w-6xl mx-auto mb-10">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Maintain & Grow Your 
        <span className="text-cyan-600"> Construction Business</span>
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Discover proven strategies to manage, scale, and grow your construction company successfully. 
        From <span className="font-medium text-gray-800">renewing licenses and permits</span> to 
        generating high-quality <span className="font-medium text-gray-800">construction leads, bidding projects, and contractor marketing</span> — everything you need to build a profitable and sustainable business.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">File Annual Business Reports</h3>
        <p className="text-gray-600 leading-relaxed">
          Stay compliant by filing your annual business report. Keep your construction company legally updated with ownership details, structural changes, and compliance requirements.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Renew Licenses & Permits</h3>
        <p className="text-gray-600 leading-relaxed">
          Ensure smooth operations by renewing contractor licenses, permits, and certifications regularly to avoid legal issues and maintain credibility.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Generate Construction Leads</h3>
        <p className="text-gray-600 leading-relaxed">
          Find high-quality construction projects using platforms like HomeAdvisor, Dodge Construction Network, and BuildingConnected to maintain a steady pipeline of leads.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Send Estimates & Bids</h3>
        <p className="text-gray-600 leading-relaxed">
          Improve your chances of winning contracts by sending accurate construction estimates and competitive bids. Consider hiring a professional estimator for better results.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Build Client Relationships</h3>
        <p className="text-gray-600 leading-relaxed">
          Strengthen your construction business by following up with clients, improving communication, and building long-term trust for repeat projects and referrals.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Marketing Strategies</h3>
        <ul className="text-gray-600 space-y-2 list-disc pl-5">
          <li>Run Facebook Ads for residential projects</li>
          <li>Use LinkedIn Ads for commercial contracts</li>
          <li>Improve Google rankings with Local SEO</li>
          <li>Collect leads using ebooks & email funnels</li>
          <li>Get referrals and positive Google reviews</li>
        </ul>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition"
      >
        Grow Your Construction Business Today →
      </button>
    </div>

  </div>
</section>

<section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
  
  {/* glow effect */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Construction Industry Resources & Business Tools
      </h2>
      <p className="text-lg text-gray-400 leading-relaxed">
        Explore the best resources to start and grow your construction business. 
        Stay updated with the latest construction industry news, access government 
        guidelines, join professional associations, and improve your skills with 
        top construction training programs.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* FEDERAL */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
        <h3 className="text-xl font-semibold text-white mb-4">
          Federal Resources
        </h3>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="https://www.bls.gov/iag/tgs/iag23.htm" target="_blank" className="hover:text-cyan-400">
              Bureau of Labor Statistics – Construction Sector
            </a>
          </li>
          <li>
            <a href="https://www.dol.gov/general/topic/construction" target="_blank" className="hover:text-cyan-400">
              U.S. Department of Labor – Construction Industry
            </a>
          </li>
        </ul>
      </div>

      {/* ASSOCIATIONS */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
        <h3 className="text-xl font-semibold text-white mb-4">
          Associations & Networks
        </h3>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="https://www.constructionmarketingassociation.org/" target="_blank" className="hover:text-cyan-400">
              Construction Marketing Association
            </a>
          </li>
          <li>
            <a href="https://www.agc.org/" target="_blank" className="hover:text-cyan-400">
              Associated General Contractors of America
            </a>
          </li>
          <li>
            <a href="https://www.bdcnetwork.com/" target="_blank" className="hover:text-cyan-400">
              Building Design + Construction Network
            </a>
          </li>
        </ul>
      </div>

      {/* PUBLICATIONS */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
        <h3 className="text-xl font-semibold text-white mb-4">
          Industry News & Publications
        </h3>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="https://www.builderonline.com/" target="_blank" className="hover:text-cyan-400">
              Builder Magazine
            </a>
          </li>
          <li>
            <a href="https://www.constructionenquirer.com/" target="_blank" className="hover:text-cyan-400">
              Construction Enquirer
            </a>
          </li>
          <li>
            <a href="https://www.enr.com/" target="_blank" className="hover:text-cyan-400">
              Engineering News-Record
            </a>
          </li>
          <li>
            <a href="https://www.constructionexec.com/" target="_blank" className="hover:text-cyan-400">
              Construction Executive
            </a>
          </li>
          <li>
            <a href="https://www.equipmentworld.com/" target="_blank" className="hover:text-cyan-400">
              Equipment World
            </a>
          </li>
        </ul>
      </div>

      {/* EDUCATION */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
        <h3 className="text-xl font-semibold text-white mb-4">
          Training & Education
        </h3>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="https://www.procore.com/training" target="_blank" className="hover:text-cyan-400">
              Procore Learning Portal
            </a>
          </li>
          <li>
            <a href="https://www.nccer.org/" target="_blank" className="hover:text-cyan-400">
              NCCER (Construction Education & Research)
            </a>
          </li>
          <li>
            <a href="https://www.acce-hq.org/" target="_blank" className="hover:text-cyan-400">
              American Council for Construction Education
            </a>
          </li>
        </ul>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <p className="text-gray-400 mb-6">
        Want a complete step-by-step guide to launching your construction business?
      </p>
      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-500/30"
      >
        Get Your Free Business Guide
      </button>
    </div>

  </div>
</section>

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">Essential Skills for Success</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership</h3>
              <p className="text-gray-600">Manage teams, make decisions, solve conflicts, and motivate workers toward common goals. Strong leadership keeps projects on schedule and maintains company culture.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Management</h3>
              <p className="text-gray-600">Understand accounting, budgeting, invoicing, and cash flow. Track costs accurately, price projects competitively, and maintain profitability.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Knowledge</h3>
              <p className="text-gray-600">Deep understanding of your trade, building codes, safety regulations, and industry best practices. Continuous learning keeps you competitive.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Consciousness</h3>
              <p className="text-gray-600">Prioritize worker safety and job site security. Implement safety protocols, conduct training, and maintain compliance with OSHA regulations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sales & Marketing</h3>
              <p className="text-gray-600">Build client relationships, pitch your services effectively, and create a strong brand reputation. Word-of-mouth and referrals are crucial.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Management</h3>
              <p className="text-gray-600">Plan, schedule, and execute projects efficiently. Manage timelines, budgets, resources, and keep clients informed every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does it take to start a construction business?",
                a: "Timeline varies from 2-6 months depending on your location, trade, and licensing requirements. Simple sole proprietorships can start in weeks, while more complex structures with extensive licensing may take several months."
              },
              {
                q: "Do I need previous construction experience?",
                a: "While not always required for licensing, having hands-on experience is crucial. Many states require 4-10 years of documented work experience for general contractor licenses. Starting as a apprentice or subcontractor builds valuable skills."
              },
              {
                q: "What's the difference between a contractor and a subcontractor?",
                a: "A general contractor manages entire projects and hires subcontractors to handle specific trades. Subcontractors specialize in one area like plumbing or electrical work. Subcontracting is an easier entry point to start a construction business."
              },
              {
                q: "How much should I charge for my services?",
                a: "Pricing depends on your location, trade, project complexity, and overhead costs. Research competitor rates, calculate your costs plus desired profit margin, and consider market conditions. Start competitive while maintaining profitability."
              },
              {
                q: "What insurance do I absolutely need?",
                a: "General liability and workers' compensation are essential. Most states legally require workers' comp if you have employees. Additional coverage like vehicle insurance and equipment insurance is highly recommended for comprehensive protection."
              },
              {
                q: "Can I start part-time while keeping my job?",
                a: "Yes, many start part-time as subcontractors or do evenings/weekends work. However, licensing requirements may restrict this, and you'll need significant time to build a business. Most successful contractors eventually transition full-time."
              },
              {
                q: "What are common reasons construction businesses fail?",
                a: "Common failures include poor cash flow management, underpricing jobs, inadequate insurance, hiring/training problems, and overexpansion. Success requires solid business fundamentals, financial discipline, and calculated growth."
              },
              {
                q: "How do I find my first clients?",
                a: "Build a strong network through previous connections, join local business groups, create a professional website, ask for referrals, partner with real estate agents, and consider offering discounts for first-time clients. Reputation and referrals become crucial for long-term success."
              }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-lg shadow hover:shadow-lg transition">
                <summary className="p-6 font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  {item.q}
                  <span className="ml-4">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold text-white mb-4">Ready to Build Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Starting a construction business is a significant opportunity. Take the first step today with a solid plan, proper licensing, and the right mindset for success.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

 <GetStartedModal
                                                                     isOpen={isModalOpen}
                                                                     onClose={() => setIsModalOpen(false)}
                                                                     selectedBusinessType={selectedBusinessType}
                                                                   />
      
    </div>
    )
}