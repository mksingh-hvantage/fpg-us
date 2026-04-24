import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Briefcase, CheckCircle, ArrowRight, MapPin, BarChart, DollarSign, Folder, Laptop, Megaphone, Settings, Users, ExternalLink, MessageCircle, Wrench } from 'lucide-react';
export default function ConsultingBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const items = [
    {
      icon: DollarSign,
      title: "Finances & Business Taxes",
      desc: "Set up a dedicated business bank account, manage expenses, and plan your tax strategy. Consider business credit cards and ensure proper tax filing to keep your consulting business financially healthy and profitable.",
    },
    {
      icon: Megaphone,
      title: "Marketing & Personal Branding",
      desc: "Build a professional brand with a high-quality website, logo, and business cards. Strong personal branding helps consultants attract clients and establish trust in competitive markets.",
    },
    {
      icon: Folder,
      title: "Licenses, Permits & Compliance",
      desc: "Ensure your consulting business meets all legal requirements, including business licenses, permits, and regulatory compliance based on your location and services.",
    },
    {
      icon: Users,
      title: "Hiring & Team Building",
      desc: "Start as a solo consultant, but plan for growth. Hire consultants or administrative staff to scale your business and focus more on high-value client work.",
    },
    {
      icon: Settings,
      title: "Business Processes & Systems",
      desc: "Create efficient workflows for research, analysis, note-taking, and reporting. Strong internal processes improve productivity and client delivery quality.",
    },
    {
      icon: BarChart,
      title: "Business Maintenance & Reporting",
      desc: "Stay compliant with annual reports, estimated taxes, and renewals of licenses and permits. Regular maintenance ensures long-term business stability.",
    },
    {
      icon: Laptop,
      title: "Equipment & Tools",
      desc: "Equip your consulting business with essential tools like a laptop, smartphone, and software. Plan expenses carefully and optimize them for tax deductions.",
    },
    {
      icon: MapPin,
      title: "Business Location & Workspace",
      desc: "Decide whether to work from home, a co-working space, or an office. Many consultants start remotely and scale to professional spaces as they grow.",
    },
  ];
const stats = [
{ value: "500+", label: "Consultants", sublabel: "Currently employed in U.S." },
{ value: "$150B", label: "Market Size", sublabel: "Global consulting industry" },
{ value: "$100-$220+", label: "Hourly Rate", sublabel: "Typical entry to experienced" },
{ value: "65B", label: "Operations", sublabel: "Largest consulting segment" },
];

const businessStructures = [
{
name: "Sole Proprietorship",
pros: ["Simplest to set up", "Lowest costs"],
cons: ["No liability protection", "Not recommended"]
},
{
name: "LLC (Recommended)",
pros: ["Personal liability protection", "Tax flexibility", "Simple administration", "Professional credibility"],
cons: ["Minimal drawbacks"]
},
{
name: "S-Corporation",
pros: ["Tax advantages", "Liability protection"],
cons: ["More complex", "Higher costs"]
},
];
 const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const socialGroups = [
    {
      name: "Consultants Network",
      link: "#",
    },
    {
      name: "Strategy Consulting Network",
      link: "#",
    },
    {
      name: "Proactive Business Consultants",
      link: "#",
    },
    {
      name: "Consulting, Contract, and Freelance Jobs",
      link: "#",
    },
  ];

  const forums = [
    {
      name: "Wall Street Oasis",
      link: "https://www.wallstreetoasis.com/",
    },
    {
      name: "Project Management Central",
      link: "https://www.projectmanagement.com/",
    },
  ];
return (
  <>
<div className="min-h-screen bg-white">
<section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
   <div className="relative max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         {/* LEFT SIDE TEXT */}
         <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
               <Briefcase className="w-4 h-4 text-slate-300" />
               <span className="text-sm font-medium">Build Your Consulting Empire</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-xl mb-3">
               Launch Your
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-cyan-300">
               Consulting Business
               </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
               Transform your expertise into a high-value consulting practice. Provide strategic insights to organizations and command premium fees for your specialized knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button
                  onClick={() =>
                  {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                  }}
                  className="group bg-cyan-500 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
                  >
                  Start Your Consulting Business
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
               <a href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all">
               Learn More
               </a>
            </div>
         </div>
         {/* RIGHT SIDE IMAGE */}
         <div className="flex justify-center lg:justify-end">
            <img
               src="https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80"
               alt="Consulting Illustration"
               className="w-full drop-shadow-xl rounded-xl"
               />
         </div>
      </div>
   </div>
</section>
<section className="py-16 px-6 bg-slate-50">
   <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
         <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            Key Industry <span className='text-cyan-600'>Metrics</span>
         </h2>
         <p className="text-xl text-slate-600">Understanding the consulting market landscape</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 mb-6">
         {stats.map((stat, index) => (
         <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-center border border-slate-100 hover:border-slate-300 transition-colors">
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-cyan-600 mb-2">
               {stat.value}
            </div>
            <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
            <div className="text-sm text-slate-600">{stat.sublabel}</div>
         </div>
         ))}
      </div>
   </div>
</section>
<section className="relative bg-cyan-50 py-16 px-6 md:px-16 overflow-hidden">


        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Start Your{" "}
              <span className="text-cyan-600">
                Consulting Business
              </span>{" "}
              Today
            </h2>

            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              A consulting business is one of the most profitable business ideas for individuals with expertise in a specific field. Companies hire consultants to gain expert advice, innovative strategies, and specialized skills that may not exist within their organization.
            </p>

            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              If you have experience in improving business performance, solving problems, or driving growth, you can turn your knowledge into a successful consulting business. This allows you to earn high income while working flexible hours.
            </p>

            {/* Hidden Content */}
            {showMore && (
              <>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  Consulting services provide businesses with valuable insights without the need to hire full-time experts, making it a high-demand and scalable business model.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    "Types of consulting businesses and niches",
                    "Essential tools and resources for consultants",
                    "Best legal structure for your business",
                    "Taxes, finances, and pricing strategies",
                    "Questions to validate your readiness",
                    "Rules, regulations, and compliance",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                    >
                      <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full"></div>
                      <p className="text-gray-700 text-base">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  By following this complete consulting business guide, you will learn how to start, structure, and grow a successful consulting company that generates consistent income and long-term success.
                </p>
              </>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-cyan-600 font-semibold hover:underline mt-2"
            >
              {showMore ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative group">
            
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
              alt="Consulting business"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />

            {/* Overlay */}
            <div
              onClick={() => setIsVideoOpen(true)}
              className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center cursor-pointer"
            >
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition text-3xl text-cyan-600">
                ▶
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="bg-gradient-to-b from-white to-cyan-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* SECTION 1: STATS */}
        <div className="text-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Consulting Industry Growth & Market <span className='text-cyan-600'>Insights</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              The global consulting industry is rapidly expanding, creating new opportunities for entrepreneurs looking to start a consulting business. With increasing demand for expert advice, strategy, and transformation services, now is the perfect time to enter the consulting market.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              While major firms like PwC, Deloitte, McKinsey, Accenture, and IBM dominate the space, there is still significant opportunity for small consulting businesses and niche experts to succeed and grow.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-3xl font-bold text-cyan-600">1.4M+</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Professionals employed in consulting services (U.S.)
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-3xl font-bold text-cyan-600">$150–$300+</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Average hourly consulting fees based on experience
                </p>
              </div>
            </div>
          </div>

          
        </div>

        {/* SECTION 2: SKILLS */}
        <div>
          <h2 className="text-5xl font-extrabold mt-12 mb-16 text-center">
            Essential Skills to Become a Successful <span className='text-cyan-600'>Consultant</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Networking",
                desc: "Build strong relationships, connections, and professional networks to grow your consulting business."
              },
              {
                title: "Analysis & Measurement",
                desc: "Understand problems deeply through data analysis and performance measurement to deliver actionable insights."
              },
              {
                title: "Implementation",
                desc: "Work with teams and stakeholders to turn strategies into real-world execution and measurable results."
              },
              {
                title: "Strategic Questioning",
                desc: "Ask the right questions to uncover hidden problems and define clear business solutions."
              },
              {
                title: "Frameworks & Methods",
                desc: "Use proven consulting frameworks, tools, and best practices to drive improvements."
              },
              {
                title: "Niche Expertise",
                desc: "Develop authority and deep knowledge in a specific industry or niche to stand out."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition">
                <CheckCircle className="text-cyan-600 mb-3" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: CHALLENGES */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl font-extrabold mb-6">
              Challenges in a Consulting <span className='text-cyan-600'>Business</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Starting and scaling a consulting business comes with challenges. One of the biggest is acquiring clients, as consulting services often require building trust and demonstrating expertise.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Consultants must develop strong systems for research, analysis, and communication while adapting to changing business needs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Delivering long-term results requires collaboration with teams, continuous improvement, and ensuring that strategies are implemented effectively.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Finding high-quality clients and building a pipeline",
              "Understanding complex business problems quickly",
              "Adapting to changing market conditions",
              "Delivering measurable and sustainable results",
              "Collaborating with teams and stakeholders",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border shadow-sm">
                <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

            <section className="bg-gradient-to-b from-white to-slate-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Types of <span className='text-cyan-600'>Consulting Businesses</span> You Can Start
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Consulting is the process of providing expert advice in business, finance, technology, and operations. 
            Choosing the right consulting niche is essential for building a successful and profitable consulting business. 
            Below are the most in-demand consulting services that entrepreneurs can start today.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Business Process Improvement",
              desc: "Analyze existing business operations and workflows to improve efficiency, productivity, and overall performance."
            },
            {
              title: "HR & Workplace Culture Consulting",
              desc: "Work with HR teams and leadership to improve employee engagement, morale, and company culture."
            },
            {
              title: "Organizational Change Management",
              desc: "Optimize company structure, staffing, and operations to align with business goals and growth."
            },
            {
              title: "Leadership & Executive Coaching",
              desc: "Support CEOs and senior leaders in improving leadership skills, decision-making, and management strategies."
            },
            {
              title: "Business Strategy & Planning",
              desc: "Help companies develop growth strategies, adapt to market changes, and stay competitive."
            },
            {
              title: "Technology & IT Consulting",
              desc: "Provide guidance on software, systems, hardware, and digital transformation solutions."
            },
            {
              title: "Branding & Public Relations",
              desc: "Manage brand perception, reputation, and communication strategies to attract customers."
            },
            {
              title: "Financial Management Consulting",
              desc: "Improve cash flow, reduce costs, increase profitability, and manage financial operations effectively."
            },
            {
              title: "Legal & Compliance Consulting",
              desc: "Advise businesses on legal risks, regulations, compliance, and business strategy decisions."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number */}
              <div className="text-sm font-semibold text-cyan-600 mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="text-slate-600 leading-relaxed">
            Selecting the right consulting niche based on your expertise, industry demand, and market trends 
            can help you build a scalable, high-income consulting business with long-term growth potential.
          </p>
        </div>

      </div>
    </section>

<section className="py-16 px-6 bg-cyan-50">
   <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
         <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
            Business Structure <span className='text-cyan-600'>Guide</span>
         </h2>
         <p className="text-xl text-slate-600">Choose the right entity for your consulting practice</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
         {businessStructures.map((structure, index) => (
         <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{structure.name}</h3>
            <div className="mb-6">
               <h4 className="text-sm font-semibold text-slate-900 mb-3 text-emerald-600">Advantages</h4>
               <ul className="space-y-2">
                  {structure.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                     <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                     {pro}
                  </li>
                  ))}
               </ul>
            </div>
            {structure.cons.length > 0 && (
            <div>
               <h4 className="text-sm font-semibold text-slate-900 mb-3 text-amber-600">Considerations</h4>
               <ul className="space-y-2">
                  {structure.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                     <div className="w-4 h-4 rounded-full border border-amber-400 flex-shrink-0 mt-0.5" />
                        {con}
                  </li>
                  ))}
               </ul>
               </div>
               )}
            </div>
            ))}
         </div>
         <div className="mt-12 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <p className="text-slate-700">
               <span className="font-bold text-slate-900">Recommendation:</span> Most consulting businesses should form as an LLC. It provides liability protection, offers tax flexibility, maintains simplicity, and establishes professional credibility with clients and potential partners.
            </p>
         </div>
      </div>
</section>
<section className="bg-gradient-to-b from-slate-50 to-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Set Up & Manage Your <span className='text-cyan-600'>Consulting Business</span> Successfully
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            After registering your consulting business, the next step is building a strong foundation. 
            From finances and marketing to legal compliance and operations, these essential steps will help you 
            run and scale a successful consulting business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-50 mb-4">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Note */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="text-slate-600 leading-relaxed">
            Building a successful consulting business requires more than expertise — it demands proper systems, 
            strong branding, legal compliance, and efficient operations. Focus on these fundamentals to create a 
            scalable and sustainable consulting business.
          </p>
        </div>

      </div>
    </section>  
    <section className="bg-cyan-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Join Consulting Communities & Grow <span className='text-cyan-600'>Your Network</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Building a successful consulting business is not just about skills — it's also about connections. 
            Join top consulting groups, forums, and online communities to network, learn from experts, 
            and discover new business opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* SOCIAL MEDIA GROUPS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Social Media Groups for Consultants
              </h3>
            </div>

            <p className="text-slate-600 mb-6">
              Connect with consulting professionals, freelancers, and business experts through 
              active social media groups. These communities help you share ideas, gain insights, 
              and find new consulting clients.
            </p>

            <div className="space-y-4">
              {socialGroups.map((group, index) => (
                <a
                  key={index}
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border hover:bg-slate-50 transition"
                >
                  <span className="text-slate-800 font-medium">
                    {group.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* FORUMS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Consulting Forums & Discussion Platforms
              </h3>
            </div>

            <p className="text-slate-600 mb-6">
              Participate in consulting forums and online discussion platforms to ask questions, 
              share knowledge, and stay updated with industry trends, strategies, and best practices.
            </p>

            <div className="space-y-4">
              {forums.map((forum, index) => (
                <a
                  key={index}
                  href={forum.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border hover:bg-slate-50 transition"
                >
                  <span className="text-slate-800 font-medium">
                    {forum.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="text-slate-600 leading-relaxed">
            Actively engaging in consulting communities can help you build authority, expand your network, 
            and discover high-value opportunities for your consulting business growth.
          </p>
        </div>

      </div>
    </section>
{/* Tools & Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Useful Online Tools for Consulting Business
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
<section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
<div className="max-w-5xl mx-auto">
<div className="text-center">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
Ready to Launch Your Consulting Practice?
</h2>
<p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
Transform your expertise and experience into a thriving business that delivers value to organizations
</p>
<button onClick={() => {
setSelectedBusinessType('');
setIsModalOpen(true);
}} className="group bg-slate-500 hover:bg-slate-600 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-xl">
Get Started Today
<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
</button>
<div className="grid md:grid-cols-3 gap-8 mt-16">
{[
{ title: "Expert Support", description: "Guidance through every step of your journey" },
{ title: "Legal Protection", description: "Proper business formation and entity setup" },
{ title: "Growth Resources", description: "Tools and strategies to scale your practice" }
].map((benefit, index) => (
<div key={index} className="flex items-start gap-3">
<CheckCircle className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
<div>
<h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
<p className="text-slate-400 text-sm">{benefit.description}</p>
</div>
</div>
))}
</div>
</div>
</div>
</section>
<GetStartedModal
   isOpen={isModalOpen}
   onClose={() => setIsModalOpen(false)}
selectedBusinessType={selectedBusinessType}
/>
</div>

 {/* MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div
            className="absolute inset-0"
            onClick={() => setIsVideoOpen(false)}
          ></div>

          <div className="relative w-full max-w-3xl z-10 px-4">

            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-2 text-white text-2xl"
            >
              ✕
            </button>

            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
);
}