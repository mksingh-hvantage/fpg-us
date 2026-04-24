import { useParams, Link } from 'react-router-dom';
import { states } from '../data/states';
import { useState, useEffect } from 'react';
import GetStartedModal from './GetStartedModal';
import { 
AlertCircle,
CheckCircle
} from 'lucide-react';
export default function StateDetail() {
const { slug } = useParams<{ slug: string }>();
const [isModalOpen, setIsModalOpen] = useState(false);
const [, setSelectedBusinessType] = useState
<string>
('');
const [activeSection, setActiveSection] = useState('overview');
const state = states.find(s => s.slug === slug);
if (!state) {
return (
<div className="min-h-screen flex items-center justify-center">
   <div className="text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
         State Not Found
      </h1>
      <Link to="/" className="text-cyan-600 font-extrabold">
      Return to Home
      </Link>
   </div>
</div>
);
}
/* ===============================
SCROLL SPY (IMPORTANT PART)
================================ */
useEffect(() => {
const sectionIds = [
'overview',
'names',
'agent',
'requirements',
'taxes',
'faq',
];
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setActiveSection(entry.target.id);
}
});
},
{
rootMargin: '-120px 0px -60% 0px',
threshold: 0,
}
);
sectionIds.forEach((id) => {
const el = document.getElementById(id);
if (el) observer.observe(el);
});
return () => observer.disconnect();
}, []);
const scrollToSection = (id: string) => {
const el = document.getElementById(id);
if (!el) return;
const yOffset = -100;
const y =
el.getBoundingClientRect().top + window.pageYOffset + yOffset;
window.scrollTo({ top: y, behavior: 'smooth' });
};
return (
<div className="min-h-screen bg-white">
   {/* ================= HERO ================= */}
   <div className="relative bg-gradient-to-br from-slate-600 via-slate-500 to-slate-500 py-16 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop')"
    }}
  />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <a className="inline-flex items-center text-white hover:text-cyan-100 mb-8 font-extrabold transition-colors" href="/state-information" data-discover="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left w-5 h-5 mr-2" aria-hidden="true">
               <path d="m12 19-7-7 7-7"></path>
               <path d="M19 12H5"></path>
            </svg>
            Back to All States
         </a>
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <span className="inline-block px-4 py-1.5 mb-6 text-sm font-extrabold tracking-wide uppercase text-cyan-600 bg-white/90 rounded-full">State Guide</span>
               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">How to Form an LLC in {state.name}</h1>
               <p className="text-xl text-white/95 mb-8 leading-relaxed">{state.name} offers a straightforward LLC formation process with competitive filing fees.</p>
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                     <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dollar-sign w-5 h-5 text-white" aria-hidden="true">
                           <line x1="12" x2="12" y1="2" y2="22"></line>
                           <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span className="text-sm text-white/80 font-medium">Filing Fee</span>
                     </div>
                     <p className="text-2xl font-bold text-white">$200</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                     <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-5 h-5 text-white" aria-hidden="true">
                           <path d="M12 6v6l4 2"></path>
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="text-sm text-white/80 font-medium">Processing</span>
                     </div>
                     <p className="text-2xl font-bold text-white">7-10 business days</p>
                  </div>
               </div>
               <button onClick={() => {
               setSelectedBusinessType('');
               setIsModalOpen(true);
               }} className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all shadow-2xl hover:shadow-cyan-500/20 active:scale-95">Form Your Alabama LLC Now</button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
               <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20"><span className="text-white/80 font-medium">Annual Report Fee</span><span className="text-white font-bold text-lg">$100</span></div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20"><span className="text-white/80 font-medium">Processing Time</span><span className="text-white font-bold text-lg">7-10 business days</span></div>
                  <div className="flex justify-between items-center py-3"><span className="text-white/80 font-medium">Formation Cost</span><span className="text-white font-bold text-lg">$200</span></div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* ================= STICKY SUBMENU ================= */}
   <div className="sticky top-32 z-40 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
         <nav className="flex gap-8 overflow-x-auto py-4">
            {[
            { id: 'overview', label: 'Overview' },
            { id: 'names', label: 'Business Name' },
            { id: 'agent', label: 'Registered Agent' },
            { id: 'requirements', label: 'Filing Fees & Requirements' },
            { id: 'taxes', label: 'Business Taxes' },
            { id: 'faq', label: 'FAQ' },
            ].map((item) => (
            <button
               key={item.id}
               onClick={() => scrollToSection(item.id)}
            className={`relative font-extrabold pb-2 whitespace-nowrap ${
            activeSection === item.id
            ? 'text-cyan-500'
            : 'text-slate-600 hover:text-cyan-500'
            }`}
            >
            {item.label}
            {activeSection === item.id && (
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-600 rounded-full" />
            )}
            </button>
            ))}
         </nav>
      </div>
   </div>
   {/* ================= CONTENT ================= */}
   <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* OVERVIEW */}
      <section id="overview" className="scroll-mt-32 space-y-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-6xl mb-12">
          <h2 className="text-4xl font-extrabold text-cyan-500 mb-4">
            How to Start an LLC in {state.name}: Complete Guide for Business Owners
          </h2>

          <p className="text-lg text-gray-600">
            {state.name} is considered one of the most business-friendly states in the
            United States. Entrepreneurs benefit from competitive tax rates,
            reasonable operating costs, and several incentives that support new
            and growing businesses. Creating a Limited Liability Company (LLC)
            is one of the most popular ways to legally establish a business in
            {state.name} because it combines liability protection with flexible tax
            options and simplified management requirements.
          </p>
        </div>


        {/* Benefits */}
        <div className="mb-16">

          <h3 className="text-2xl font-extrabold text-cyan-500 mb-6">
            Advantages of Registering an {state.name} LLC
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">

            <li className="flex gap-3">
              <CheckCircle className="text-cyan-500 mt-1" size={18}/>
              Protect personal assets from business debts and legal liabilities
            </li>

            <li className="flex gap-3">
              <CheckCircle className="text-cyan-500 mt-1" size={18}/>
              Flexible tax treatment options for small businesses and startups
            </li>

            <li className="flex gap-3">
              <CheckCircle className="text-cyan-500 mt-1" size={18}/>
              Simple management structure compared to traditional corporations
            </li>

            <li className="flex gap-3">
              <CheckCircle className="text-cyan-500 mt-1" size={18}/>
              Affordable state filing fee starting at approximately $200
            </li>

          </ul>

        </div>


        {/* Steps */}
        <div>

          <h3 className="text-2xl font-extrabold text-cyan-500 mb-8">
            Step-by-Step Process to Form an {state.name} LLC
          </h3>

          <div className="space-y-8 text-gray-700">

            <div>
              <h4 className="font-extrabold text-lg mb-1">
                1. Choose a Unique Business Name
              </h4>
              <p>
                Select a business name that complies with {state.name} LLC naming
                guidelines and confirm its availability using the {state.name}
                Secretary of State business entity search tool. The state also
                requires entrepreneurs to submit a Name Reservation request
                before filing formation documents.
              </p>
            </div>


            <div>
              <h4 className="font-extrabold text-lg mb-1">
                2. Provide a Registered Business Address
              </h4>
              <p>
                Every LLC must list an official physical address where legal and
                business correspondence can be delivered. The address can be in
                or outside {state.name}, but it must be a valid street location and
                cannot be a P.O. box.
              </p>
            </div>


            <div>
              <h4 className="font-extrabold text-lg mb-1">
                3. Appoint a Registered Agent
              </h4>
              <p>
                A registered agent receives important legal documents, tax
                notices, and government correspondence on behalf of the
                business. The agent must have a physical address in {state.name} and
                be available during standard business hours.
              </p>
            </div>


            <div>
              <h4 className="font-extrabold text-lg mb-1">
                4. File the Certificate of Formation
              </h4>
              <p>
                To officially create your LLC, submit the Certificate of
                Formation to the {state.name} Secretary of State. This document
                includes your business name, registered agent information,
                company purpose, management details, and organizer information.
                Filing can be completed online or by mail, and the current state
                filing fee is approximately $200.
              </p>
            </div>


            <div>
              <h4 className="font-extrabold text-lg mb-1">
                5. Apply for an Employer Identification Number (EIN)
              </h4>
              <p>
                An Employer Identification Number issued by the Internal
                Revenue Service is used to identify your business for federal
                tax purposes. Most LLCs need an EIN to open a business bank
                account, hire employees, and file federal tax returns.
              </p>
            </div>


            <div>
              <h4 className="font-extrabold text-lg mb-1">
                6. Draft an Operating Agreement
              </h4>
              <p>
                Although {state.name} does not legally require an operating
                agreement, this document is highly recommended. It outlines
                ownership structure, decision-making authority, and operational
                guidelines for the business.
              </p>
            </div>

          </div>

        </div>


        {/* CTA */}
        {/* CTA */}
<div className="mt-6 p-8 bg-slate-700 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">

  <div className="max-w-2xl">
    <h3 className="text-2xl font-extrabold text-cyan-500 mb-2">
      Launch Your {state.name} LLC Quickly and Easily
    </h3>

    <p className="text-white">
      Starting a business in {state.name} doesn't have to be complicated.
      From reserving your business name to obtaining an EIN and completing
      state filings, we help you set up your LLC the right way so you can
      focus on growing your company.
    </p>
  </div>

  <div>
    <button onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }} className="px-7 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-extrabold rounded-lg shadow-md transition">
      Get Started Now
    </button>
  </div>

</div>

      </div>
    </section>
      {/* BUSINESS NAME */}
      <section id="names" className="space-y-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-extrabold text-cyan-500 mb-6">
          How to Choose and Register Your LLC Name in {state.name}
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          If you’re planning to start a business in {state.name}, selecting the right
          Limited Liability Company (LLC) name is one of the most important
          steps in the formation process. Before registering your company, you
          must verify that your business name is available through the {state.name}
          Secretary of State business search database. Conducting an {state.name}
          LLC name search helps ensure that no other registered corporation or
          LLC in the state is already using your proposed name.
        </p>

        <p className="text-lg text-gray-600 mb-10">
          Whether you are brainstorming a unique business name, verifying name
          availability, or preparing to register your LLC with the {state.name}
          Secretary of State (SOS), this guide explains everything you need to
          know. Below you’ll learn the official naming rules, how to complete an
          {state.name} business entity search, and how to register your LLC name
          properly.
        </p>

        {/* CTA */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-extrabold text-cyan-500 mb-2">
            Start Your {state.name} LLC Today
          </h2>
          <p className="text-gray-700 mb-4">
            Form your {state.name} LLC quickly and easily. Many business owners
            choose professional services to handle formation paperwork while
            ensuring compliance with {state.name} state regulations.
          </p>
          <button onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }} className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-extrabold hover:bg-cyan-600 transition">
            Form Your LLC Now
          </button>
        </div>

        {/* General Naming Rules */}
        <h2 className="text-2xl font-extrabold text-cyan-500 mb-4">
          General Rules for Naming an LLC
        </h2>

        <p className="text-gray-600 mb-6">
          These general naming requirements apply to most LLCs across the
          United States, including companies formed in {state.name}. Understanding
          these rules will help you avoid common mistakes when choosing your
          business name.
        </p>

        <h3 className="text-xl font-extrabold text-cyan-500 mb-2">
          Your {state.name} LLC Name Must Be Unique
        </h3>

        <p className="text-gray-600 mb-6">
          The name you select for your LLC cannot already be used by another
          registered business entity in {state.name}. To verify availability, you
          must perform an {state.name} Secretary of State business search before
          submitting formation documents. This step prevents duplicate names
          within the state’s business registry.
        </p>

        <h3 className="text-xl font-extrabold text-cyan-500 mb-2">
          Your Business Name Cannot Be Confusingly Similar
        </h3>

        <p className="text-gray-600 mb-4">
          Even if a name is technically different, it cannot be misleadingly
          similar to another company’s name. The {state.name} Secretary of State
          may reject a name that appears too close to an existing business.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Changing only LLC suffixes such as LLC, Inc., Corp., Ltd.</li>
          <li>Adding articles like “A,” “An,” or “The”</li>
          <li>Using symbols such as “&” instead of the word “and”</li>
          <li>Changing plural or possessive versions of words</li>
          <li>Altering punctuation, fonts, abbreviations, or spacing</li>
        </ul>

        <h3 className="text-xl font-extrabold text-cyan-500 mb-2">
          Your LLC Name Must Include an LLC Designator
        </h3>

        <p className="text-gray-600 mb-6">
          {state.name} law requires every limited liability company to include an
          official LLC identifier in its name. Acceptable designations include
          “Limited Liability Company,” “LLC,” or “L.L.C.” These terms usually
          appear at the end of the business name.
        </p>

        <h3 className="text-xl font-extrabold text-cyan-500 mb-2">
          Additional Naming Restrictions
        </h3>

        <p className="text-gray-600 mb-4">
          Certain words or phrases may be restricted when naming your {state.name}
          LLC. Businesses cannot choose names that could mislead the public or
          imply government affiliation.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-10 space-y-2">
          <li>Names that resemble federal or state agencies</li>
          <li>Words implying government authority or endorsement</li>
          <li>Terms protected by organizations such as the Olympic Committee</li>
          <li>Names suggesting illegal business activities</li>
        </ul>

        {/* {state.name} Specific */}
        <h2 className="text-2xl font-extrabold text-cyan-500 mb-4">
          {state.name}-Specific LLC Naming Requirements
        </h2>

        <p className="text-gray-600 mb-6">
          In addition to general LLC naming guidelines, {state.name} law has
          additional requirements that business owners must follow when
          registering a company in the state.
        </p>

        <h3 className="text-xl font-extrabold text-cyan-500 mb-2">
          Choosing the Right Business Name
        </h3>

        <p className="text-gray-600 mb-4">
          Selecting a strong business name helps build brand recognition and
          credibility. Your LLC name should clearly represent your services,
          attract potential customers, and be easy to remember.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-10 space-y-2">
          <li>Reflect your products or services</li>
          <li>Appeal to your target market</li>
          <li>Be unique and memorable</li>
          <li>Comply with {state.name} naming rules</li>
        </ul>

        {/* Business Search */}
        <h2 className="text-2xl font-extrabold text-cyan-500 mb-4">
          {state.name} Business Entity Name Search
        </h2>

        <p className="text-gray-600 mb-6">
          Before forming your LLC, you should conduct an {state.name} business
          entity search to confirm that your proposed company name is not
          already registered. This search checks the official {state.name} Secretary
          of State database and prevents registration conflicts.
        </p>

        <p className="text-gray-600 mb-10">
          Performing an {state.name} LLC name search is simple. Enter your proposed
          business name into the state registry or a business name lookup tool.
          If no matching entity appears, the name may be available for use.
        </p>

        {/* Trademarks */}
        <h2 className="text-2xl font-extrabold text-cyan-500 mb-4">
          Trademark and Service Mark Considerations
        </h2>

        <p className="text-gray-600 mb-6">
          Even if a name is available in the {state.name} business registry, you
          should confirm that it does not violate an existing trademark or
          service mark. Conducting a trademark search ensures your LLC name
          does not infringe on protected intellectual property owned by
          another company.
        </p>

        {/* DBA */}
        <h2 className="text-2xl font-extrabold text-cyan-500 mb-4">
          {state.name} Trade Names (DBA)
        </h2>

        <p className="text-gray-600 mb-6">
          Many companies operate under a trade name or “doing business as”
          (DBA). In {state.name}, this is referred to as a trade name. Businesses
          may register a trade name if they want to operate under a brand
          different from their official LLC name.
        </p>

        <p className="text-gray-600 mb-10">
          For example, an LLC registered as “{state.name} Textile Holdings LLC”
          might sell products under a brand like “Cotton State Apparel.”
          Registering a trade name allows businesses to legally operate under
          that brand identity.
        </p>

        {/* Register */}
        <h2 className="text-2xl font-extrabold text-cyan-500 mb-4">
          Registering Your LLC Name with the {state.name} Secretary of State
        </h2>

        <p className="text-gray-600 mb-6">
          After verifying name availability and following the required naming
          guidelines, the final step is to officially register your business
          name with the {state.name} Secretary of State.
        </p>

        <ol className="list-decimal pl-6 text-gray-600 space-y-3 mb-10">
          <li>
            Submit a Name Reservation Request form to reserve your desired
            business name. Once approved, the name is typically held for one
            year.
          </li>
          <li>
            If you are ready to start your company immediately, you can file
            your Certificate of Formation directly with the {state.name} Secretary
            of State to create your LLC.
          </li>
        </ol>

        {/* FAQs */}
        <h2 className="text-2xl font-extrabold text-cyan-500 mb-4">
          FAQs About {state.name} LLC Name Registration
        </h2>

        <h3 className="font-bold mb-1">
          How can I check if my {state.name} business name is available?
        </h3>

        <p className="text-gray-600 mb-4">
          You can perform an {state.name} Secretary of State business search using
          the official state registry to see whether your desired LLC name is
          already in use.
        </p>

        <h3 className="font-bold mb-1">
          Are there official rules for naming an LLC in {state.name}?
        </h3>

        <p className="text-gray-600 mb-4">
          Yes. {state.name} LLCs must follow both general business naming rules and
          state-specific regulations that govern business entity names.
        </p>

        <h3 className="font-bold mb-1">
          Can I operate under a different business name?
        </h3>

        <p className="text-gray-600 mb-4">
          Yes. {state.name} businesses may register a trade name (DBA) if they wish
          to conduct business under a brand that differs from their legal LLC
          name.
        </p>

        <h3 className="font-bold mb-1">
          Can I reserve a business name in {state.name} before forming my LLC?
        </h3>

        <p className="text-gray-600">
          Yes. {state.name} allows entrepreneurs to reserve an LLC name before
          filing formation documents if they are not ready to create their
          company immediately.
        </p>

      </div>
    </section>
      {/* REGISTERED AGENT */}
      <section id="agent" className="bg-white">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold text-cyan-500">
            {state.name} Registered Agent Service for LLCs
          </h1>

          <p className="text-lg text-gray-600">
            Every limited liability company operating in {state.name} is legally required
            to appoint a Registered Agent. This individual or company receives
            official legal notices and government correspondence on behalf of your
            business. When you create your LLC with Bizee, you receive your first
            year of {state.name} Registered Agent service at no cost.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-extrabold text-cyan-500 mb-2">
            Start Your {state.name} LLC Today
          </h2>
          <p className="text-gray-700 mb-4">
            Form your {state.name} LLC quickly and easily. Many business owners
            choose professional services to handle formation paperwork while
            ensuring compliance with {state.name} state regulations.
          </p>
          <button onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }} className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-extrabold hover:bg-cyan-600 transition">
            Form Your LLC Now
          </button>
        </div>

        {/* Intro */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            Understanding the Role of an {state.name} Registered Agent
          </h2>

          <p className="text-gray-600">
            A Registered Agent in {state.name} acts as the official contact point
            between your business and the {state.name} Secretary of State. Their
            responsibility is to receive legal documents, state notices, tax
            correspondence, and other official communications for your LLC.
          </p>

          <p className="text-gray-600">
            Every {state.name} LLC must continuously maintain a Registered Agent.
            When you file your Certificate of Formation with the Secretary of
            State, you must designate an agent who will handle these important
            communications. If needed, you can update or replace your Registered
            Agent at any time after your business has been established.
          </p>
        </div>


        {/* Requirements */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            {state.name} Registered Agent Requirements
          </h2>

          <p className="text-gray-600">
            State regulations require every domestic and foreign LLC operating
            in {state.name} to maintain a Registered Agent with a physical address
            within the state. This ensures that government authorities and
            courts have a reliable method to contact your business.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              The agent may be either a business entity authorized to operate
              in {state.name} or an individual resident of the state.
            </li>
            <li>
              If the Registered Agent is a company, it must be legally approved
              to conduct business within {state.name}.
            </li>
            <li>
              If the agent is an individual, that person must reside within the
              state.
            </li>
            <li>
              The Registered Agent must be available during normal business
              hours to accept legal correspondence.
            </li>
            <li>
              The Registered Office must have a physical street address located
              in {state.name}. P.O. boxes are not permitted.
            </li>
            <li>
              The Registered Agent address does not need to match your primary
              business address.
            </li>
          </ul>

          <p className="text-gray-600">
            It's important to note that a virtual mailbox or mail forwarding
            service does not fulfill the legal requirements of a Registered
            Agent. These services perform different functions under {state.name} law.
          </p>
        </div>


        {/* Duties */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            Responsibilities of a Registered Agent in {state.name}
          </h2>

          <p className="text-gray-600">
            The main duty of a Registered Agent is to ensure your company
            receives time-sensitive legal and government documentation.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Official correspondence from the {state.name} Secretary of State</li>
            <li>Legal service of process documents if your business faces a lawsuit</li>
            <li>Federal and state government notifications</li>
            <li>Tax documentation and compliance notices</li>
            <li>Permit renewals, reporting reminders, and official filings</li>
          </ul>

          <p className="text-gray-600">
            Maintaining an active Registered Agent also demonstrates to the
            state that your company remains legally operational and compliant.
          </p>
        </div>


        {/* Bizee Service */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            Free {state.name} Registered Agent Service for the First Year
          </h2>

          <p className="text-gray-600">
            Bizee offers a complete Registered Agent service for businesses
            forming an LLC in {state.name}. When you register your company through
            Bizee, your Registered Agent service is included free for the first
            year. After that period, the annual renewal fee is $119.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>A secure online dashboard for managing business documents</li>
            <li>A dedicated Registered Agent available to receive legal documents</li>
            <li>Email alerts whenever official documents arrive</li>
            <li>Automatic document forwarding to your preferred contact address</li>
          </ul>
        </div>


        {/* Assign Agent */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            Appointing a Registered Agent for Your {state.name} LLC
          </h2>

          <p className="text-gray-600">
            A Registered Agent must be designated at the time your LLC is
            created. This information is included in the Certificate of
            Formation submitted to the {state.name} Secretary of State.
          </p>

          <p className="text-gray-600">
            If you form your company through Bizee, our team prepares and files
            the formation documents for you while assigning our Registered
            Agent service automatically.
          </p>

          <button onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }} className="mt-4 px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
            Start Your Business Formation
          </button>
        </div>


        {/* Change Agent */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            Changing Your Registered Agent in {state.name}
          </h2>

          <p className="text-gray-600">
            If your LLC already exists, you can update your Registered Agent
            by submitting a Change of Registered Agent form to the {state.name}
            Secretary of State along with the required filing fee.
          </p>

          <p className="text-gray-600">
            When you switch to Bizee’s Registered Agent service, our team will
            handle the paperwork and filing process on your behalf so you don’t
            have to worry about administrative steps.
          </p>
        </div>


        {/* Consequences */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            What Happens If Your LLC Does Not Maintain a Registered Agent
          </h2>

          <p className="text-gray-600">
            Failing to maintain a Registered Agent can lead to serious
            consequences for your business, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Missing important legal notices or court summons</li>
            <li>Receiving default judgments if your company fails to respond to lawsuits</li>
            <li>Losing good standing status with the {state.name} Secretary of State</li>
            <li>Possible administrative dissolution of your LLC</li>
          </ul>
        </div>


        {/* Self Agent */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            Can You Serve as Your Own Registered Agent?
          </h2>

          <p className="text-gray-600">
            {state.name} law allows business owners to act as their own Registered
            Agent if they maintain a physical address within the state.
            However, this approach may create challenges.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>You must be available at the registered address during all business hours</li>
            <li>Your personal name and address become part of the public record</li>
            <li>Moving locations requires additional filings with the state</li>
          </ul>

          <p className="text-gray-600">
            Using a professional Registered Agent service helps maintain
            privacy and ensures that important documents are handled properly.
          </p>
        </div>


        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            Frequently Asked Questions About {state.name} Registered Agents
          </h2>

          <p className="text-gray-600">
            <strong>Do all {state.name} LLCs need a Registered Agent?</strong>
            <br />
            Yes. {state.name} law requires every LLC to appoint a Registered Agent
            to receive official legal and government documents.
          </p>

          <p className="text-gray-600">
            <strong>When must the Registered Agent be assigned?</strong>
            <br />
            The Registered Agent must be designated when filing your Certificate
            of Formation with the {state.name} Secretary of State.
          </p>

          <p className="text-gray-600">
            <strong>Does the Registered Agent need a physical address in {state.name}?</strong>
            <br />
            Yes. The agent must maintain a street address located within the
            state where legal documents can be delivered.
          </p>
        </div>


        {/* CTA */}
        <div className="border border-cyan-500 rounded-xl p-10">
          <h2 className="text-3xl font-extrabold text-cyan-500 mb-4">
            Start Your {state.name} LLC With Bizee Today
          </h2>

          <p className="text-gray-600 mb-6">
            No contracts. No hidden costs. Launch your {state.name} business with
            professional formation services and a free Registered Agent for
            your first year.
          </p>

          <button onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }} className="px-10 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
            Start Your Business
          </button>
        </div>

      </div>
    </section>
      {/* REQUIREMENTS */}
      <section id="requirements" className="">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-blue-100">
            {state.name} LLC Guide
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cyan-500 sm:text-5xl">
            {state.name} LLC Filing Fees and Requirements in 2026
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Planning to start a limited liability company in {state.name}? This guide
            explains the most important{" "}
            <strong>{state.name} LLC filing fees</strong>, state requirements,
            annual report obligations, foreign registration rules, business
            license considerations, and other common costs involved in forming
            and maintaining an LLC in {state.name}.
          </p>
        </div>

        {/* Intro */}
        <div className="mx-auto mt-12 max-w-7xl rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-700">
                How Much Does It Cost to Start an LLC in {state.name}?
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                The standard <strong>{state.name} LLC filing fee</strong> for forming
                a new domestic LLC is one of the main startup costs every
                business owner should expect. In addition to the initial filing
                fee, your company may also need to budget for annual reports,
                licenses, permits, name reservations, amendments, certificates
                of good standing, and tax-related registrations depending on
                your business activities.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                While some fees are one-time costs paid during formation, others
                may be recurring or only required in specific situations. A
                clear understanding of these requirements can help you avoid
                delays, penalties, and compliance problems.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                Quick Overview
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-blue-50">{state.name} LLC State Fee</span>
                  <span className="text-xl font-bold">$35</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-blue-50">Annual Report Fee</span>
                  <span className="text-xl font-bold">$20</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-blue-50">DBA Filing Fee</span>
                  <span className="text-xl font-bold">$20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-50">Certificate of Fact</span>
                  <span className="text-xl font-bold">$15</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filing Fees Table */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="mb-8 text-left">
            <h2 className="text-3xl font-extrabold text-cyan-500">
              Initial {state.name} LLC Filing Fees
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              To officially register your business, you must file formation
              documents with the {state.name} Secretary of State and pay the required
              state fee.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Requirement
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Filing Fee
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Standard Filing Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Expedited Option
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {state.name} Domestic LLC Formation
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-cyan-500">
                      $35
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      About 3 weeks
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      As fast as 2 business days
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {state.name} Foreign LLC Registration
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-cyan-500">
                      $35
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Varies by filing volume
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      May be available through state processing options
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {state.name} Annual Report
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-cyan-500">
                      $20
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Filed yearly
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Due by April 15
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mx-auto mt-12 max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-cyan-500">
              {state.name} LLC Registration Requirements
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              To form an LLC in {state.name}, business owners generally need to file
              formation documents with the {state.name} Secretary of State, choose a
              compliant business name, appoint a registered agent, and keep
              their business information up to date with the state.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Choose a unique {state.name} LLC name</li>
              <li>• Appoint a registered agent in {state.name}</li>
              <li>• File the LLC formation documents</li>
              <li>• Pay the {state.name} state filing fee</li>
              <li>• Submit annual reports on time</li>
              <li>• Obtain any required business licenses and permits</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-cyan-500">
              Expedited Filing in {state.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {state.name} may allow faster processing for LLC filings if you choose
              an expedited filing option. This can be useful if you need to
              launch your business quickly, open a bank account sooner, or meet
              a contract deadline.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Standard filing may take around <strong>3 weeks</strong>, while
              faster processing may reduce the timeline to approximately{" "}
              <strong>2 business days</strong> depending on the filing method
              and state workload.
            </p>
          </div>
        </div>

        {/* EIN + Foreign LLC */}
        <div className="mx-auto mt-12 max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-2xl font-bold text-cyan-500">
              Employer Identification Number (EIN)
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Most LLCs should obtain an{" "}
              <strong>Employer Identification Number (EIN)</strong> from the
              Internal Revenue Service. This number is commonly needed to open a
              business bank account, file taxes, hire employees, and maintain a
              clear separation between personal and business finances.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              The IRS generally issues an EIN at no cost when you apply
              directly.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-cyan-500">
              {state.name} Foreign LLC Registration
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              If your LLC was formed in another state or country and you want to
              do business in {state.name}, you will likely need to register as a{" "}
              <strong>foreign LLC</strong>. This usually requires filing a
              Certificate of Authority with the {state.name} Secretary of State.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Foreign LLC registration in {state.name} typically costs{" "}
              <strong>$35</strong>. You may also need to submit a certificate of
              good standing or certificate of existence from the state where the
              business was originally formed.
            </p>
          </div>
        </div>

        {/* Other state operations */}
        <div className="mx-auto mt-12 max-w-7xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-cyan-500">
              Foreign Qualification for Expanding Into Another State
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              If you already have a {state.name} LLC and want to operate in another
              state, you may need to apply for{" "}
              <strong>foreign qualification</strong> there. This often becomes
              necessary when your business has a physical office, employees, or
              banking relationships in another state.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Each state has different filing rules, fees, and compliance
              standards. In most cases, you will need to file an application and
              pay the applicable state filing fee before legally transacting
              business there.
            </p>
          </div>
        </div>

        {/* Annual report */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-cyan-500">
              {state.name} Annual Report Requirements
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {state.name} requires LLCs to stay in good standing by filing an annual
              report with the Secretary of State.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Frequency
              </p>
              <p className="mt-4 text-3xl font-bold text-gray-700">Annually</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Due Date
              </p>
              <p className="mt-4 text-3xl font-bold text-gray-700">April 15</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Filing Fee
              </p>
              <p className="mt-4 text-3xl font-bold text-gray-700">$20</p>
            </div>
          </div>

          <p className="mt-8 text-base leading-7 text-gray-600">
            Filing your annual report on time helps keep your LLC active and in
            compliance with {state.name} law. Missing the deadline can lead to late
            fees, penalties, or administrative complications for your business.
          </p>
        </div>

        {/* Licenses */}
        <div className="mx-auto mt-12 max-w-7xl rounded-3xl">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            {state.name} Business License and Permit Requirements
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-700">
            Forming your LLC does not automatically mean your business is fully
            licensed to operate. Depending on your industry, location, and
            activities, you may need state, county, city, or federal licenses
            and permits.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Industry-Based Requirements
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Some businesses, such as restaurants, contractors, healthcare
                providers, and financial services companies, may need special
                regulatory approvals.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Location-Based Requirements
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Your county or city may require a local business license, zoning
                approval, or occupancy permit before you begin operations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Activity-Based Requirements
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Businesses selling taxable goods, hiring employees, or handling
                regulated products may need additional registrations and permits.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base leading-7 text-gray-700">
            Running an LLC without the proper licenses and permits in {state.name}
            can expose your business to compliance issues, fines, and possible
            business interruptions.
          </p>
        </div>

        {/* Operating agreement */}
        <div className="mx-auto mt-12 max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-cyan-500">
              Does {state.name} Require an Operating Agreement?
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {state.name} does <strong>not</strong> require LLCs to file or maintain
              an operating agreement as part of the formation process.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Even so, having an LLC operating agreement is highly recommended.
              It helps define ownership percentages, voting rights, management
              duties, profit distribution, member responsibilities, and internal
              procedures for handling disputes or future changes.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-cyan-500">
              Why an Operating Agreement Matters
            </h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Clarifies member and manager responsibilities</li>
              <li>• Helps prevent future internal disputes</li>
              <li>• Supports smoother business operations</li>
              <li>• Adds structure for ownership and decision-making</li>
              <li>• Can strengthen legal and financial organization</li>
            </ul>
          </div>
        </div>

        {/* Other fees */}
        <div className="mx-auto mt-12 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-cyan-500">
              Other Potential {state.name} LLC Fees and Requirements
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              In addition to the main formation and annual report costs, some
              LLCs may encounter extra one-time or occasional filing fees.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                DBA or Assumed Business Name
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                If your LLC wants to operate under a name different from its
                legal name, you must register an assumed business name in
                {state.name}.
              </p>
              <p className="mt-4 text-lg font-bold text-gray-700">
                Filing Fee: $20
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Change of Registered Agent
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                If you need to update your registered agent, you can file the
                appropriate change form with the {state.name} Secretary of State.
              </p>
              <p className="mt-4 text-lg font-bold text-gray-700">
                Filing Fee: $0
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Name Reservation
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Not ready to form your LLC yet? You can reserve a {state.name}
                business name for up to 120 days.
              </p>
              <p className="mt-4 text-lg font-bold text-gray-700">
                Filing Fee: $10
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Articles of Amendment
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                If important business details change after formation, you may
                need to file an amendment with the state.
              </p>
              <p className="mt-4 text-lg font-bold text-gray-700">
                Filing Fee: $10
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Certificate of Fact
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                This certificate may be required by lenders, banks, investors,
                or other entities that want proof your LLC is compliant.
              </p>
              <p className="mt-4 text-lg font-bold text-gray-700">
                Filing Fee: $15
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Tax and Regulatory Costs
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Your LLC may also need to pay self-employment taxes, payroll
                taxes, state taxes, sales taxes, and other regulatory charges
                depending on your business model.
              </p>
            </div>
          </div>
        </div>

        {/* Amendments detail */}
        <div className="mx-auto mt-12 max-w-7xl rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 className="text-3xl font-extrabold text-cyan-500">
            When You May Need to File Articles of Amendment
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            As your {state.name} LLC grows, certain details in your original
            formation documents may change. When that happens, filing an
            amendment with the state helps ensure your official records remain
            accurate.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 text-sm text-gray-700 shadow-sm">
              Add, remove, or update an LLC member or manager
            </div>
            <div className="rounded-2xl bg-white p-5 text-sm text-gray-700 shadow-sm">
              Change the structure of management
            </div>
            <div className="rounded-2xl bg-white p-5 text-sm text-gray-700 shadow-sm">
              Update the stated business purpose or activities
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-12 max-w-7xl">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-cyan-500">
              FAQs About {state.name} LLC Fees
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                What is the {state.name} LLC filing fee?
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                The standard state filing fee to form a domestic LLC in {state.name}
                is <strong>$35</strong>.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                How much is the {state.name} annual report fee?
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                {state.name} LLCs must file an annual report and pay a{" "}
                <strong>$20 filing fee</strong> each year, typically due by{" "}
                <strong>April 15</strong>.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Does {state.name} require an LLC operating agreement?
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                No, {state.name} does not legally require an operating agreement, but
                having one is strongly recommended for internal governance and
                legal clarity.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                Do I need an EIN for my {state.name} LLC?
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                Most LLCs should obtain an EIN from the IRS, especially if the
                business will open a bank account, hire employees, or file
                federal taxes.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-700">
                How much does a DBA cost in {state.name}?
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                Registering an assumed business name, also called a DBA, in
                {state.name} generally costs <strong>$20</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mx-auto mt-12 max-w-7xl rounded-3xl bg-gray-900 px-8 py-8 text-center text-white">
          <h2 className="text-3xl font-bold">
            Final Thoughts on {state.name} LLC Costs and Compliance
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-300">
            Starting and maintaining an LLC in {state.name} is relatively affordable,
            but it is still important to understand all required filings,
            deadlines, and optional fees. From the initial $35 {state.name} LLC
            filing fee to annual reports, DBA filings, amendments, and license
            requirements, staying compliant can help protect your business and
            keep operations running smoothly.
          </p>
          <button onClick={() => {
               setSelectedBusinessType('');
               setIsModalOpen(true);
               }} className="inline-flex items-center mt-6 px-8 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all shadow-2xl hover:shadow-cyan-500/20 active:scale-95">Form Your Alabama LLC Now</button>
        </div>
      </div>
    </section>

    <section id="taxes" className="scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="inline-flex rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-600">
            {state.name} LLC Tax Guide
          </span>
          <h1 className="text-5xl mt-4 font-extrabold tracking-tight text-cyan-500 sm:text-4xl lg:text-5xl">
            {state.name} Business Taxes for LLCs: Complete Guide for Owners
          </h1>
          <p className="mx-auto mt-6 max-w-7xl text-base leading-7 text-gray-600 sm:text-lg">
            Starting and running an LLC in {state.name} comes with important tax
            responsibilities. While {state.name} LLCs usually benefit from
            pass-through taxation, business owners may still need to handle
            state income tax, federal income tax, self-employment tax, payroll
            taxes, and estimated quarterly payments. This guide explains how
            {state.name} LLC taxes work, what LLC members should expect, and which
            business tax obligations may apply based on how the company is
            structured.
          </p>
        </div>

        {/* Intro Card */}
        <div className="mb-10 rounded-2xl border border-cyan-200 bg-gray-50 p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-cyan-500">
            How LLCs Are Taxed in {state.name}
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            Most {state.name} limited liability companies are not taxed at the
            business entity level in the same way as traditional C
            Corporations. Instead, LLC profits usually pass through to the
            owners, who then report that income on their personal tax returns.
            This means the business itself generally avoids federal corporate
            income tax unless it elects to be taxed differently.
          </p>
          <p className="mt-4 text-gray-700 leading-7">
            Depending on the nature of your business and whether you have
            employees, your {state.name} LLC may need to pay or account for several
            different taxes at the state and federal level.
          </p>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
              LLC owners may owe <strong>self-employment tax</strong> on
              business profits.
            </li>
            <li className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
              LLC owners may owe <strong>{state.name} state income tax</strong> on
              pass-through income.
            </li>
            <li className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
              LLC owners may owe <strong>federal income tax</strong> on profits
              after deductions and allowances.
            </li>
            <li className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
              Employers may need to handle <strong>payroll taxes</strong> and
              employee-related filings.
            </li>
          </ul>
        </div>

        {/* State Taxes */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-cyan-500">
            {state.name} State Taxes for LLCs
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            {state.name} does not impose every tax that business owners see in other
            states, but LLC owners still need to understand the taxes that may
            apply. For many businesses, the primary state-level obligation is
            {state.name} income tax on pass-through earnings.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                {state.name} Income Tax
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                If you earn income from your {state.name} LLC, that income generally
                flows through to your personal tax return. You may need to pay
                {state.name} state income tax on the money you take from the
                business, subject to available deductions, exemptions, and other
                tax adjustments.
              </p>
              <p className="mt-3 text-gray-700 leading-7">
                {state.name} uses graduated income tax rates, meaning the rate can
                increase as taxable income rises. Employees working for your LLC
                may also be subject to {state.name} income tax withholding from their
                wages.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Does {state.name} Have a Sales Tax?
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                No. {state.name} is one of the few states that does not impose a
                general statewide sales tax. This can be a major advantage for
                certain businesses and consumers. However, business owners
                should still review whether any local, industry-specific, or
                special tax obligations apply to their operations.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Does {state.name} Have a Franchise Tax?
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                {state.name} does not impose a traditional franchise tax on LLCs.
                That said, your business may still face other tax filing
                requirements depending on revenue, payroll, and industry type.
              </p>
            </div>
          </div>
        </div>

        {/* Federal Taxes */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-cyan-500">
            Federal Taxes for {state.name} LLCs
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            At the federal level, most LLCs are treated as pass-through
            entities. That means the company’s profits are typically reported
            by the owners on their personal tax returns. Even though the LLC
            itself may not pay federal income tax as a separate entity, the
            owners still have important federal tax obligations.
          </p>

          <div className="mt-6 grid gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Federal Self-Employment Tax
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                LLC members who actively earn profits from the business are
                often responsible for self-employment tax. This tax helps fund
                Social Security and Medicare. For many small business owners,
                this is one of the most important federal tax obligations to
                plan for throughout the year.
              </p>
              <p className="mt-3 text-gray-700 leading-7">
                Eligible business expenses and deductions can reduce taxable
                income, which may affect how much self-employment tax is owed.
                Because tax treatment can vary based on business structure and
                how profits are distributed, professional tax advice is often
                helpful.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Federal Income Tax
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                In addition to self-employment tax, LLC owners generally need to
                pay federal income tax on profits received from the business.
                The amount owed depends on total income, filing status,
                deductions, credits, and the tax bracket that applies to the
                owner.
              </p>
              <p className="mt-3 text-gray-700 leading-7">
                Common deductions may include qualified business expenses,
                certain health insurance costs, retirement contributions, and
                other eligible write-offs. Since every tax situation is
                different, a qualified accountant or tax preparer can help you
                determine the most accurate filing position.
              </p>
            </div>
          </div>
        </div>

        {/* S Corp */}
        <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Can a {state.name} LLC Reduce Taxes by Electing S Corporation Status?
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            In some cases, yes. The IRS allows eligible LLCs to elect to be
            taxed as an S Corporation. This option can help some business owners
            reduce self-employment tax by splitting income between reasonable
            salary and owner distributions.
          </p>
          <p className="mt-4 text-gray-700 leading-7">
            This strategy is not right for every business. Owners must follow
            IRS rules, maintain payroll compliance, and pay themselves a
            reasonable wage where required. Before making an S Corp election,
            it’s wise to review the financial and compliance impact with a tax
            professional.
          </p>
        </div>

        {/* Employees */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-cyan-500">
            Employee and Employer Taxes in {state.name}
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            If your LLC hires employees, your tax obligations become more
            complex. In addition to reporting business income, you may also need
            to withhold taxes from employee wages, contribute employer payroll
            taxes, and maintain compliance with labor and unemployment
            requirements.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Employer Payroll Tax Responsibilities
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                Employers are generally required to withhold applicable federal
                taxes from employee wages and may also need to match certain
                payroll tax contributions. Proper payroll setup is essential to
                avoid filing issues, penalties, or underpayment problems.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                State and Federal Employee Tax Filing
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                Employees may be required to file their own federal and state
                income tax returns, even when taxes are withheld from their
                wages. Employers should keep complete payroll records and ensure
                all reporting documents are issued accurately and on time.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Insurance and Unemployment Tax Requirements
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                Depending on the nature of your workforce, your LLC may also
                need to handle workers’ compensation insurance, unemployment
                insurance taxes, and other employment-related obligations under
                {state.name} and federal law.
              </p>
            </div>
          </div>
        </div>

        {/* Other taxes */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-cyan-500">
            Other Taxes Your {state.name} LLC May Need to Pay
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            Some LLCs may have industry-specific tax obligations beyond standard
            income and payroll taxes. These can vary depending on the products
            you sell, the services you provide, and whether your business is
            involved in regulated activities.
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-700 leading-7">
            <li>
              Fuel-related businesses may be subject to gasoline or excise
              taxes.
            </li>
            <li>
              Importers and exporters may need to account for customs duties or
              related fees.
            </li>
            <li>
              Businesses in specialized sectors may face licensing fees,
              regulatory assessments, or industry-specific state taxes.
            </li>
          </ul>
        </div>

        {/* Estimated taxes */}
        <div className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Estimated Taxes for {state.name} LLCs
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            Many {state.name} LLC owners are required to pay estimated taxes
            throughout the year instead of waiting until the annual filing
            deadline. Estimated tax payments are commonly made on a quarterly
            basis and may include both state and federal obligations.
          </p>
          <p className="mt-4 text-gray-700 leading-7">
            Estimated payments often apply to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700 leading-7">
            <li>Federal income tax</li>
            <li>Federal self-employment tax</li>
            <li>{state.name} state income tax</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-7">
            Making timely estimated payments can help reduce the risk of
            penalties and make year-end tax filing more manageable.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-cyan-500">
            FAQs About {state.name} Business Taxes for LLCs
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Does {state.name} have a sales tax?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                No, {state.name} does not impose a general statewide sales tax, which
                makes it different from most other states.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Do LLCs in {state.name} pay state income tax?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                LLC profits generally pass through to the owners, who then pay
                {state.name} state income tax on their share of business income.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Do {state.name} LLC owners pay self-employment tax?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                In many cases, yes. Active LLC members typically owe
                self-employment tax on profits earned from the business.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Does {state.name} have a franchise tax for LLCs?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                No, {state.name} does not impose a standard franchise tax on LLCs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Do {state.name} LLCs need to pay estimated taxes?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                Most LLC owners should expect to make estimated quarterly tax
                payments for federal and state tax obligations when required.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-cyan-500 p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Start Your {state.name} LLC With Confidence
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
            Building your business is easier when you understand your tax
            responsibilities from day one. Whether you are forming a new {state.name}
            LLC or reviewing your current tax setup, staying compliant can help
            you avoid penalties and plan for long-term growth.
          </p>
          <div className="mt-6">
            <button
              onClick={() => {
               setSelectedBusinessType('');
               setIsModalOpen(true);
               }}
              className="inline-flex items-center justify-center rounded-4xl bg-white px-6 py-4 text-xl font-bold text-gray-700 transition"
            >
              Form Your {state.name} LLC
            </button>
          </div>
        </div>
      </div>
    </section>
      {/* FAQ */}
      <section id="faq" className="scroll-mt-32">
  <h2 className="text-4xl font-extrabold text-cyan-500 mb-8">
    FAQs About Starting a {state.name} LLC
  </h2>

  <div className="space-y-4">
    {[
      {
        question: `How do I choose the best legal structure for my business in ${state.name}?`,
        answer: `For most small business owners, a ${state.name} LLC offers one of the best combinations of personal liability protection, flexible management, and simple ongoing maintenance. While some businesses may prefer an S Corporation or C Corporation for tax or investment reasons, an LLC is often the most practical option for entrepreneurs who want legal separation between personal and business assets without the formalities of a corporation.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `What do I need to start an LLC in ${state.name}?`,
        answer: `To start a ${state.name} LLC, you typically need a unique business name, a completed Articles of Organization filing, a registered agent, and the required ${state.name} state filing fee. Before filing, it is also smart to research your target market, prepare a business plan, create an operating agreement, and review any business license requirements that may apply to your industry or location.`,
      },
      {
        question: `How do I register an LLC in ${state.name}?`,
        answer: `You can register a ${state.name} LLC by filing your Articles of Organization through the ${state.name} Secretary of State’s online business portal. Once the filing is submitted and approved, your LLC becomes a legally recognized business entity in the state. Make sure all ownership, registered agent, and contact details are correct before submitting the application.`,
      },
      {
        question: `How much does it cost to form a ${state.name} LLC?`,
        answer: `The standard ${state.name} LLC filing fee is generally required when submitting the Articles of Organization, although state fees can change over time. Some formation providers may also offer optional expedited filing or additional business services for an extra charge. It is always best to verify the latest filing fee with the ${state.name} Secretary of State before submitting your application.`,
      },
      {
        question: `How long does it take to form an LLC in ${state.name}?`,
        answer: `Approval time usually depends on current state processing volume and whether you choose standard or expedited filing. In many cases, standard processing can take a few business days, while faster options may be available for an added fee. Filing online is generally the quickest way to submit your ${state.name} LLC documents.`,
      },
      {
        question: `How do I check if my ${state.name} LLC name is available?`,
        answer: `You can perform a ${state.name} business name search through the ${state.name} Secretary of State’s business portal to check whether your desired LLC name is already in use. Your name must be distinguishable from other registered businesses in the state and must comply with ${state.name} naming rules. It is a good idea to search name availability before filing your formation documents.`,
      },
      {
        question: `How do I register a business name in ${state.name}?`,
        answer: `If you are starting a new ${state.name} LLC, your business name is usually registered when you include it in your Articles of Organization. If you want to operate under a different name later, you may need to file for an assumed business name, also called a DBA. If you want broader brand protection, you may also consider registering a trademark for the business name.`,
      },
      {
        question: `What are Articles of Organization in ${state.name}?`,
        answer: `Articles of Organization are the official formation documents used to create an LLC in ${state.name}. This filing includes essential business information such as the LLC name, registered agent details, and management structure. Once the ${state.name} Secretary of State approves the Articles of Organization, your LLC is officially formed.`,
      },
      {
        question: `Does ${state.name} allow Series LLCs?`,
        answer: `${state.name} may allow Series LLC formation depending on current state law. A Series LLC can let business owners create one parent LLC with separate series under it, each potentially holding different assets or liabilities. This structure can be useful for certain real estate investors or multi-division businesses, but it is more complex and should be reviewed carefully with a legal or tax professional.`,
      },
      {
        question: `Do I need a registered agent for a ${state.name} LLC?`,
        answer: `Yes, every ${state.name} LLC must maintain a registered agent at all times. A registered agent receives legal notices, government correspondence, and service of process on behalf of your business. The agent must have a physical address in ${state.name} and be available during normal business hours.`,
      },
      {
        question: `How do I change my registered agent in ${state.name}?`,
        answer: `To change your ${state.name} registered agent, you typically need to file the appropriate change form with the ${state.name} Secretary of State. The filing updates the state’s records with your new registered agent information. It is important to keep this information current so your LLC does not miss legal notices or state correspondence.`,
      },
      {
        question: `How do I find the registered agent for a ${state.name} business?`,
        answer: `You can perform a ${state.name} registered agent search by looking up the business in the ${state.name} Secretary of State’s online business database. The listing usually shows the company’s registered agent name and registered office details. This can be useful when researching another business or confirming your own company records.`,
      },
      {
        question: `What taxes does a ${state.name} LLC need to pay?`,
        answer: `Most ${state.name} LLCs are taxed as pass-through entities, which means profits are usually reported on the owners’ personal tax returns rather than taxed at the business level. Depending on how the LLC is structured, owners may need to pay federal income tax, self-employment tax, payroll taxes, and ${state.name} state income tax. Tax obligations can vary based on whether the LLC has employees and whether it elects a different federal tax classification.`,
      },
      {
        question: `Does ${state.name} have a sales tax for LLCs?`,
        answer: `Sales tax rules depend on the state. Some states impose a general sales tax on the sale of taxable goods and services, while others do not. You should review the latest ${state.name} sales tax requirements to determine whether your LLC needs to collect, report, and remit sales tax.`,
      },
      {
        question: `When is ${state.name} sales tax due?`,
        answer: `Sales tax due dates in ${state.name} depend on your business tax registration and filing frequency. Depending on the state’s requirements, returns may be due monthly, quarterly, or annually. Always confirm your assigned filing schedule with the appropriate ${state.name} tax authority.`,
      },
      {
        question: `Does ${state.name} have a franchise tax?`,
        answer: `Franchise tax rules vary by state. Some states impose a franchise tax or similar entity-level fee for the privilege of doing business, while others do not. You should verify whether ${state.name} requires franchise tax filings or payments for LLCs based on your business structure and activity.`,
      },
      {
        question: `Do I need a business license to operate an LLC in ${state.name}?`,
        answer: `Many businesses need at least one license, permit, or local registration, but the exact requirements depend on your industry, services, products, and business location. Professional services, construction, food businesses, and regulated industries often have additional licensing rules. Before launching your LLC, it is important to confirm all state, county, and city licensing requirements that apply to your business in ${state.name}.`,
      },
    ].map((item, i) => (
      <details key={i} className="border rounded-xl p-6 bg-white">
        <summary className="flex items-center gap-3 cursor-pointer list-none">
          <AlertCircle className="text-cyan-600 shrink-0" />
          <span className="font-bold text-lg text-gray-900">
            {item.question}
          </span>
        </summary>
        <p className="mt-4 text-gray-700 leading-7">{item.answer}</p>
      </details>
    ))}
  </div>
</section>
      {/* CTA */}
      <section className="bg-cyan-600 text-white rounded-3xl p-12 text-center">
         <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your {state.name} LLC?
         </h2>
         <button
            onClick={() => setIsModalOpen(true)}
         className="bg-white text-cyan-600 px-10 py-4 rounded-full font-bold"
         >
         Get Started Now
         </button>
      </section>
   </div>
   <GetStartedModal
      isOpen={isModalOpen}
      onClose={() =>
   setIsModalOpen(false)}
   selectedBusinessType="LLC"
   />
</div>
);
}