import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { CheckCircle, Users, Phone, ChefHat, XCircle, Target, Briefcase, Building2, Landmark, Layers, ShieldCheck, DollarSign, MapPin, Megaphone, Monitor, Settings, Wrench, ExternalLink } from 'lucide-react';
export default function FrenchiseBusiness() {
const [openIndex, setOpenIndex] = useState
<number | null>
(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const faqs = [
{
q: "What is the success rate of franchise businesses compared to startups?",
a: "Franchise businesses generally have a higher success rate than independent startups due to their proven business model, brand recognition, and ongoing support. Industry reports suggest that around 80–90% of franchises survive the first 5 years, compared to approximately 20–30% of independent businesses. However, success depends on location, management, and market demand."
},
{
q: "How much does it cost to start a franchise business?",
a: "The cost to start a franchise can range from $50,000 to over $1 million depending on the brand, industry, and location. Low-cost service franchises (cleaning, consulting, home services) are more affordable, while restaurant and retail franchises require higher investment due to equipment, real estate, and staffing costs."
},
{
q: "Can I get financing or loans to start a franchise?",
a: "Yes, franchise financing is widely available. Options include SBA (Small Business Administration) loans, traditional bank loans, equipment financing, franchisor financing programs, and investor partnerships. Many lenders prefer franchises because they have lower risk compared to independent startups."
},
{
q: "What is a Franchise Disclosure Document (FDD) and why is it important?",
a: "The Franchise Disclosure Document (FDD) is a legally required document that provides detailed information about the franchise opportunity. It includes startup costs, fees, royalties, franchisor history, litigation records, financial performance, and obligations. Reviewing the FDD carefully helps you make an informed investment decision."
},
{
q: "How long does it take to open and launch a franchise business?",
a: "Opening a franchise typically takes between 3 to 12 months. The timeline depends on factors such as site selection, lease agreements, construction or buildout, licensing approvals, and training provided by the franchisor."
},
{
q: "What support and training do franchisors provide to franchise owners?",
a: "Franchisors usually provide comprehensive support including onboarding training, operations manuals, marketing strategies, brand guidelines, technology systems (POS/CRM), and ongoing coaching. This support helps franchisees operate efficiently and maintain brand standards."
},
{
q: "Can I own and operate multiple franchise locations?",
a: "Yes, multi-unit franchise ownership is common and often encouraged by franchisors. Once you successfully manage your first location and meet performance benchmarks, you may be approved to expand and operate multiple units, increasing revenue potential."
},
{
q: "What are the ongoing fees in a franchise business?",
a: "Franchise owners typically pay ongoing fees such as royalty fees (usually 4%–10% of revenue), marketing or advertising fees, and renewal fees. These fees support brand development, national marketing campaigns, and franchisor support services."
},
{
q: "Do I need prior experience to start a franchise business?",
a: "Not necessarily. Many franchises are designed for beginners and provide full training programs. However, having experience in management, sales, or the specific industry can improve your chances of success."
},
{
q: "Are franchise fees and royalties tax deductible?",
a: "In most cases, franchise fees and ongoing royalties are considered business expenses and may be tax deductible. However, tax treatment can vary depending on your business structure and location, so consulting a tax professional is recommended."
},
{
q: "Can I sell or transfer my franchise business in the future?",
a: "Yes, most franchise agreements allow you to sell your business. However, the franchisor must approve the buyer, and certain transfer fees or conditions may apply as outlined in the franchise agreement."
},
{
q: "What are the biggest risks of owning a franchise business?",
a: "Key risks include high initial investment, ongoing royalty obligations, limited operational flexibility, and dependence on the franchisor’s brand reputation. Poor location or management can also impact profitability."
},
{
q: "What happens if my franchise business fails?",
a: "If a franchise fails, you may still be responsible for lease agreements, loans, and contractual obligations such as unpaid royalties. Proper financial planning, market research, and support utilization are critical to minimize risks."
},
{
q: "How do I choose the best franchise opportunity?",
a: "To choose the right franchise, evaluate factors like initial investment, brand reputation, market demand, competition, franchisor support, and ROI potential. Reviewing the FDD and speaking with existing franchisees is highly recommended."
},
{
q: "Is franchising a good investment for long-term growth?",
a: "Franchising can be a highly profitable long-term investment due to its scalable model, brand recognition, and proven systems. Many entrepreneurs expand into multi-unit ownership, creating strong recurring revenue streams over time."
}
];
const toggle = (index: number) => {
setOpenIndex(openIndex === index ? null : index);
};
const items = [
    {
      icon: <MapPin className="text-cyan-600" size={28} />,
      title: "Business Location Strategy",
      desc: "Choose the right franchise location based on franchisor guidelines, target market demand, and territory restrictions. Location plays a critical role in foot traffic, visibility, and long-term success.",
    },
    {
      icon: <ShieldCheck className="text-cyan-600" size={28} />,
      title: "Licenses, Permits & Compliance",
      desc: "Ensure your franchise business meets all federal, state, and local regulations. Obtain required business licenses, permits, and industry certifications to stay compliant and avoid penalties.",
    },
    {
      icon: <DollarSign className="text-cyan-600" size={28} />,
      title: "Business Finances & Taxes",
      desc: "Set up a dedicated business bank account and manage cash flow effectively. Maintain accurate bookkeeping, track expenses, and file business taxes to ensure financial stability and compliance.",
    },
    {
      icon: <Monitor className="text-cyan-600" size={28} />,
      title: "Equipment & Inventory",
      desc: "Invest in the right equipment and inventory based on franchisor recommendations. Many franchises offer vendor partnerships to help reduce costs and streamline procurement.",
    },
    {
      icon: <Megaphone className="text-cyan-600" size={28} />,
      title: "Franchise Marketing Strategy",
      desc: "Leverage national brand marketing while executing local SEO, social media marketing, and advertising campaigns to attract customers and grow your franchise business.",
    },
    {
      icon: <Users className="text-cyan-600" size={28} />,
      title: "Hiring & Employee Management",
      desc: "Recruit skilled employees and build a strong team. Use franchisor-provided hiring systems, training programs, and workforce management strategies for smooth operations.",
    },
    {
      icon: <Settings className="text-cyan-600" size={28} />,
      title: "Software & Business Systems",
      desc: "Implement required franchise software such as POS systems, CRM tools, and inventory management solutions to streamline operations and improve efficiency.",
    },
    {
      icon: <Wrench className="text-cyan-600" size={28} />,
      title: "Ongoing Business Maintenance",
      desc: "Keep your franchise compliant by filing annual reports, renewing licenses, and paying estimated taxes. Regular maintenance ensures long-term business sustainability.",
    },
  ];
return (
<div className="min-h-screen bg-white">
   {/* Hero Section */}
   <header className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
         <img
            src="https://images.unsplash.com/photo-1575671883877-71e6519c7570?q=80"
            alt="Modern restaurant interior"
            className="w-full h-full object-cover opacity-40"
            />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
         {/* Icon */}
         <div className="inline-flex items-center justify-center mb-6 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
            <ChefHat className="w-8 h-8 text-cyan-400" />
         </div>
         {/* Heading */}
         <h1 className="text-5xl font-extrabold leading-tight mb-6">
            How to Start a Successful Franchise Business : <span className="text-cyan-400">A Complete Guide for Entrepreneurs</span>
         </h1>
         {/* Description */}
         <p className="text-lg sm:text-xl text-gray-300 max-w-5xl mx-auto mb-10 leading-relaxed">
            Brands like Subway, Cinnabon, Jiffy Lube, Ace Hardware, Hertz, Marriott, Dunkin’ Donuts, 7-Eleven, Jimmy John’s, and H&R Block are all successful franchises. These businesses offer entrepreneurs the chance to own a proven brand with established systems, support, and marketing, making it easier to grow a business without starting from scratch.
         </p>
         {/* Buttons */}
         <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button */}
            <button
               onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
            Get Started
            </button>
            {/* Secondary Button */}
            <button className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            Learn More
            </button>
         </div>
      </div>
   </header>
   {/* Key Stats */}
   <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">700K+</div>
               <p className="text-gray-700">Franchisees in the US</p>
            </div>
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">$700B+</div>
               <p className="text-gray-700">Industry Revenue</p>
            </div>
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">90%</div>
               <p className="text-gray-700">Success Rate</p>
            </div>
            <div className="text-center">
               <div className="text-5xl font-extrabold text-cyan-600 mb-2">4000+</div>
               <p className="text-gray-700">Franchise Brands</p>
            </div>
         </div>
      </div>
   </section>
   {/* Benefits Section */}
   <section className="bg-cyan-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Start a Profitable <span className="text-cyan-600">Franchise Business</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how to start a successful franchise business with proven
            systems, brand recognition, and expert support. Learn everything
            about franchise opportunities, investment, legal requirements, and
            long-term growth strategies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose a Franchise Business?
            </h2>
            <p className="text-gray-600 mb-6">
              Investing in a franchise allows entrepreneurs to partner with
              established brands while benefiting from built-in systems,
              training programs, and marketing strategies. With a franchise
              model, you reduce risks and accelerate business growth compared to
              starting from scratch.
            </p>

            <ul className="space-y-4">
              {[
                "Understand how franchise businesses work and identify the best opportunities",
                "Evaluate if you're ready to invest in a franchise business",
                "Learn how to create a solid franchise business plan",
                "Choose the right legal structure for your franchise",
                "Understand franchise laws, compliance, and regulations",
                "Manage taxes, finances, and operational costs effectively",
                "Hire employees and build strong marketing strategies",
                "Access tools, resources, and expert support for scaling",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-slate-800 mt-1"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Stats Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Franchise Industry Insights
            </h3>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-cyan-600">800K+</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Franchise establishments
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-600">9M+</h4>
                <p className="text-gray-600 text-sm mt-2">
                  People employed
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-600">$900B+</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Annual revenue
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-600">3000+</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Franchise brands
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-gray-600 text-sm">
              <p>
                ✔ One of the fastest-growing business models in the U.S.
              </p>
              <p>
                ✔ Popular across industries like food, retail, fitness, and services
              </p>
              <p>
                ✔ Trusted by entrepreneurs for scalability and stability
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
            Ready to Start Your Franchise Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Follow our complete franchise business guide to launch, manage, and
            grow a successful franchise with confidence.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }} className="bg-cyan-600 hover:bg-slate-700 text-white px-8 py-3 rounded-xl shadow-md transition">
            Explore Franchise Guide
          </button>
        </div>
      </div>
    </section>
   {/* Steps to Start */}
   <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            <span className="text-cyan-600">Franchise Business</span> Advantages & Disadvantages
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Before you invest in a franchise business, it’s essential to understand 
            the key benefits and challenges. Explore the pros and cons of franchising 
            to make a smart and profitable business decision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Advantages */}
          <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle className="text-slate-900" />
              Franchise Business Benefits
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="text-cyan-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Strong Brand Recognition
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Gain instant access to an established franchise brand with a 
                    loyal customer base. Brand recognition helps you stand out 
                    from independent businesses and boosts customer trust from day one.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-cyan-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Proven Marketing Strategies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Franchises often provide ready-to-use marketing systems, 
                    including digital marketing, social media campaigns, and 
                    local advertising strategies to help grow your business faster.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-cyan-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Training & Ongoing Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Benefit from expert training programs, operational guidance, 
                    and continuous support from franchisors to ensure smooth setup 
                    and long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disadvantages */}
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <XCircle className="text-slate-900" />
              Franchise Business Challenges
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <XCircle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Limited Business Control
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Franchise owners must follow strict brand guidelines, limiting 
                    flexibility in pricing, operations, and decision-making.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <XCircle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Initial Investment & Ongoing Fees
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Starting a franchise requires upfront investment along with 
                    ongoing royalty fees and marketing contributions, impacting 
                    overall profit margins.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <XCircle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Dependence on Brand Reputation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Your success is tied to the franchisor’s reputation. Any 
                    negative publicity or poor management at the brand level 
                    can directly affect your business performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-extrabold text-cyan-600 mb-4">
            Is a Franchise Business Right for You?
          </h3>
          <p className="text-gray-600 mb-6">
            Analyze the advantages and disadvantages carefully before investing 
            in a franchise opportunity to ensure long-term success and profitability.
          </p>
          <button className="bg-cyan-600 hover:bg-slate-700 text-white px-8 py-3 rounded-xl shadow-md transition">
            Explore More Insights
          </button>
        </div>
      </div>
    </section>
   {/* Costs & Investment */}
   <section className="bg-cyan-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Understand Your <span className='text-cyan-600'>Franchise Market</span> & Business Fit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to analyze your franchise market, identify target customers, 
            and determine if franchise entrepreneurship is the right investment 
            opportunity for you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* Left - Market Research */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Target className="text-cyan-600" />
              Franchise Market Research & Strategy
            </h3>

            <p className="text-gray-600 mb-6">
              Choosing the right franchise business starts with understanding your 
              local market demand and competitive landscape. While franchisors 
              provide proven systems and guidance, conducting your own franchise 
              market research is essential for long-term success.
            </p>

            <ul className="space-y-4">
              {[
                "Analyze local demand for franchise products and services in your area",
                "Identify your target audience and customer behavior trends",
                "Study competitors and existing franchise businesses nearby",
                "Connect with other franchise owners to gain real-world insights",
                "Review franchisor marketing strategies, campaigns, and partnerships",
                "Evaluate location potential and growth opportunities",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Users className="text-cyan-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Fit Checklist */}
          <div className="bg-slate-700 text-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Is Franchise Entrepreneurship Right for You?
            </h3>

            <p className="mb-6 text-cyan-100">
              Starting a franchise business can be highly rewarding if you have 
              the right mindset, financial resources, and willingness to follow 
              a proven system. Check if you meet these key requirements:
            </p>

            <div className="space-y-5">
              {[
                "You have the capital to invest in a franchise fee and business setup",
                "You want to leverage established brand recognition and marketing power",
                "You are comfortable following franchisor rules, systems, and processes",
                "You value training, guidance, and ongoing business support",
                "You understand and accept ongoing royalty and operational fees",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle className="text-white mt-1" />
                  <span className="text-cyan-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-base max-w-4xl mx-auto">
            A successful franchise business starts with the right market research 
            and a clear understanding of your capabilities. Combine data-driven 
            insights with franchisor expertise to maximize your chances of success.
          </p>
        </div>
      </div>
    </section>
   {/* Types of Franchises */}
   <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Choose the Right Business Structure for <span className='text-cyan-600'>Your Franchise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Selecting the right legal structure is a crucial step when starting 
            a franchise business. From LLC formation to corporation setup, your 
            business entity impacts taxes, liability protection, and long-term growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Sole Proprietorship */}
          <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
            <Building2 className="text-gray-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Sole Proprietorship</h3>
            <p className="text-gray-600 text-sm">
              The simplest business structure with no formal registration required. 
              However, it offers no personal liability protection, making it a risky 
              option for franchise business owners.
            </p>
          </div>

          {/* LLC */}
          <div className="p-6 rounded-2xl border border-slate-200 shadow-lg bg-gradient-to-br from-cyan-50 to-white">
            <ShieldCheck className="text-cyan-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">
              Limited Liability Company (LLC)
            </h3>
            <p className="text-gray-600 text-sm">
              The most popular choice for franchise businesses. LLC formation is 
              fast, affordable, and provides strong personal asset protection while 
              offering flexible tax benefits and easy management.
            </p>
          </div>

          {/* Series LLC */}
          <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
            <Layers className="text-cyan-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Series LLC</h3>
            <p className="text-gray-600 text-sm">
              A specialized LLC structure available in select states, allowing you 
              to create multiple sub-entities with separate assets and liabilities 
              under one master LLC.
            </p>
          </div>

          {/* S Corp */}
          <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
            <Briefcase className="text-green-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">S Corporation</h3>
            <p className="text-gray-600 text-sm">
              A tax election that can offer potential tax savings, but comes with 
              stricter compliance requirements. Best suited for growing businesses 
              rather than small franchise startups.
            </p>
          </div>

          {/* C Corp */}
          <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
            <Landmark className="text-red-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">C Corporation</h3>
            <p className="text-gray-600 text-sm">
              A complex business structure typically used by large enterprises. 
              It offers scalability and investment opportunities but involves 
              higher costs and double taxation.
            </p>
          </div>
        </div>

        {/* Recommendation Box */}
        <div className="mt-14 bg-gradient-to-r from-cyan-600 to-cyan-600 text-white rounded-2xl p-10 text-center shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Best Choice for Most Franchise Owners: LLC
          </h3>
          <p className="max-w-2xl mx-auto text-cyan-100 mb-6">
            For most entrepreneurs, forming an LLC is the best way to start a 
            franchise business. It provides legal protection, flexibility, and 
            meets the requirements of most franchisors who prefer agreements 
            with registered business entities rather than individuals.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }} className="bg-white text-cyan-600 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            Start Your LLC Formation Today
          </button>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Business registration requirements vary by state, but choosing the 
            right legal structure ensures compliance, protects your assets, and 
            sets the foundation for long-term franchise success.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-cyan-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Set Up & Manage Your <span className='text-cyan-600'>Franchise Business Successfully</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            After registering your franchise business, the next step is setting 
            up operations and maintaining compliance. From business licenses and 
            marketing to hiring employees and managing finances, these essential 
            steps will help you build a profitable and scalable franchise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition group"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-cyan-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-cyan-600 text-white rounded-2xl p-10 text-center shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Launch, Manage & Grow Your Franchise with Confidence
          </h3>
          <p className="max-w-2xl mx-auto text-cyan-100 mb-6">
            Build a strong operational foundation with the right tools, systems, 
            and strategies. Proper setup and ongoing management are key to long-term 
            franchise success and profitability.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }} className="bg-white text-cyan-600 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            Start Managing Your Franchise Today
          </button>
        </div>
      </div>
    </section>

   
   {/* FAQ Section */}
   <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
         <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
            <span className='text-cyan-600'>FAQ's</span> - Frequently Asked Questions
         </h2>
         <div className="space-y-4">
            {faqs.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg">
               <button
                  onClick={() => toggle(idx)}
               className="w-full flex justify-between items-center p-5 text-left"
               >
               <span className="text-lg font-semibold text-gray-900">{item.q}</span>
               <span className="text-gray-500 text-xl">
               {openIndex === idx ? "−" : "+"}
               </span>
               </button>
               {openIndex === idx && (
               <div className="p-5 pt-0 text-gray-700">
                  {item.a}
               </div>
               )}
            </div>
            ))}
         </div>
      </div>
   </section>
{/* Tools & Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Useful Online Tools for Publishers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore essential tools to manage, grow, and scale your publishing business efficiently
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                category: 'Project Management',
                tools: [
                  { name: 'Asana', link: 'https://asana.com' },
                  { name: 'Basecamp', link: 'https://basecamp.com' },
                  { name: 'Trello', link: 'https://trello.com' }
                ]
              },
              {
                category: 'Collaboration',
                tools: [
                  { name: 'Google Docs', link: 'https://docs.google.com' },
                  { name: 'Dropbox', link: 'https://dropbox.com' },
                  { name: 'Box', link: 'https://box.com' }
                ]
              },
              {
                category: 'Social Media',
                tools: [
                  { name: 'Hootsuite', link: 'https://hootsuite.com' },
                  { name: 'Buffer', link: 'https://buffer.com' },
                  { name: 'Sprout Social', link: 'https://sproutsocial.com' }
                ]
              },
              {
                category: 'Email Marketing',
                tools: [
                  { name: 'Mailchimp', link: 'https://mailchimp.com' },
                  { name: 'Campaign Monitor', link: 'https://campaignmonitor.com' }
                ]
              },
              {
                category: 'CRM Platforms',
                tools: [
                  { name: 'Salesforce', link: 'https://salesforce.com' },
                  { name: 'Zoho CRM', link: 'https://zoho.com/crm' },
                  { name: 'Insightly', link: 'https://insightly.com' }
                ]
              },
              {
                category: 'Analytics',
                tools: [
                  { name: 'Google Analytics', link: 'https://analytics.google.com' },
                  { name: 'Matomo', link: 'https://matomo.org' }
                ]
              },
              {
                category: 'SEO Tools',
                tools: [
                  { name: 'SEMrush', link: 'https://semrush.com' },
                  { name: 'Ahrefs', link: 'https://ahrefs.com' },
                  { name: 'Moz', link: 'https://moz.com' }
                ]
              },
              {
                category: 'Website Builders',
                tools: [
                  { name: 'WordPress', link: 'https://wordpress.org' },
                  { name: 'Wix', link: 'https://wix.com' },
                  { name: 'Squarespace', link: 'https://squarespace.com' }
                ]
              },
              {
                category: 'E-commerce',
                tools: [
                  { name: 'Square', link: 'https://squareup.com' },
                  { name: 'Recurly', link: 'https://recurly.com' },
                  { name: 'Vendio', link: 'https://vendio.com' }
                ]
              }
            ].map((category, index) => (

              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-lg transition group"
              >
                <Wrench className="w-6 h-6 text-cyan-600 mb-4" />

                <h3 className="font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>

                <ul className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <li key={idx}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-cyan-600 transition"
                      >
                        {tool.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            ))}

          </div>
        </div>
      </section>
   {/* CTA Section */}
   <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-cyan-800">
      <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-5xl font-extrabold text-white mb-6">Ready to Start Your Franchise Journey?</h2>
         <p className="text-xl text-cyan-100 mb-8">
            Connect with franchise consultants who can help you find the perfect opportunity for your goals and investment level.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() =>
               {
               setSelectedBusinessType('');
               setIsModalOpen(true);
               }} className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-bold text-lg hover:bg-cyan-50 transition flex items-center justify-center gap-2">
               <Phone className="w-5 h-5" />
               Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition">
            Browse Franchises
            </button>
         </div>
      </div>
   </section>
   <GetStartedModal
      isOpen={isModalOpen}
      onClose={() =>
   setIsModalOpen(false)}
   selectedBusinessType={selectedBusinessType}
   />
</div>
);
}