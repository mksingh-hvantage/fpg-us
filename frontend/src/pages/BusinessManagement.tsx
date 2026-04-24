import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ArrowRight, X, BadgeCheck, FileBadge, FileText, Globe, PenTool, RefreshCcw, RotateCcw, UserCheck, XCircle } from 'lucide-react';

export default function BusinessManagement() {
  const features = [
    {
      title: "Transparent & Affordable Pricing",
      desc: "Access professional business services at competitive rates designed to support startups and growing companies.",
      number: "01",
    },
    {
      title: "Trusted by Thousands of Businesses",
      desc: "Entrepreneurs across the country rely on our experience to keep their companies compliant and running smoothly.",
      number: "02",
    },
    {
      title: "Stress-Free Business Management",
      desc: "From filings to compliance, we handle the complex details so you can focus on growing your business.",
      number: "03",
    },
  ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <>
    <div className="min-h-screen bg-white">
    
     <section className="py-12 bg-gradient-to-br from-cyan-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Manage Your Business Like Never Before
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Streamline operations, boost productivity, and scale your
                business with our all-in-one management platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* WATCH DEMO BUTTON */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold"
                >
                  Watch Demo
                </button>

              </div>

              <p className="text-sm text-gray-500 mt-6">
                No credit card required • 14-day free trial
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Business dashboard"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      

<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
            alt="Business management dashboard"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* CONTENT */}
        <div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            The Engine Behind Businesses That Keep Growing
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Successful businesses are not built on ideas alone — they are powered
            by systems that keep everything running smoothly. From managing
            documents and compliance to keeping operations organized, the real
            work happens behind the scenes.
          </p>

          <p className="mt-4 mb-12 text-lg text-slate-600 leading-relaxed">
            Our platform gives entrepreneurs the tools to stay focused on growth
            while we handle the structure, organization, and details that keep
            your company moving forward.
          </p>

          <a href="/form-order-now" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition">
            Get Started
          </a>

        </div>

      </div>
    </section>

    

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Powerful Features for Modern Businesses</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to manage your business efficiently in one comprehensive platform.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
  {[
  {
    icon: FileText,
    link: '/annual-report',
    title: "File Your Annual Report",
    desc: "Meet your state’s yearly filing requirements and keep your company compliant without the stress."
  },
  {
    icon: UserCheck,
    link: '/business-management/registered-agent',
    title: "Dedicated Registered Agent",
    desc: "Ensure every legal notice and government document is received and handled on time."
  },
  {
    icon: PenTool,
    link: '/business-management/amendment',
    title: "Update Business Information",
    desc: "Modify your company details such as name, address, or ownership with a simple amendment filing."
  },
  {
    icon: Globe,
    link: '/business-management/foreign-qualification',
    title: "Operate in Multiple States",
    desc: "Legally expand your business presence by registering to do business outside your home state."
  },
  {
    icon: BadgeCheck,
    link: '/business-management/certificate-of-good-standing',
    title: "Proof of Good Standing",
    desc: "Obtain an official certificate showing your business is active and compliant with state regulations."
  },
  {
    icon: FileBadge,
    link: '/business-management/form-2553',
    title: "S-Corporation Tax Election",
    desc: "Elect S-Corp tax status to potentially reduce taxes and optimize your company’s financial structure."
  },
  {
    icon: RefreshCcw,
    link: '/business-management/registered-agent-change',
    title: "Replace Your Registered Agent",
    desc: "Switch to a new registered agent quickly while keeping your state records up to date."
  },
  {
    icon: RotateCcw,
    link: '/reinstatement',
    title: "Restore Your Business Status",
    desc: "Bring a suspended or dissolved company back into compliance and resume operations."
  },
  {
    icon: XCircle,
    link: '/business-management/dissolution',
    title: "Close Your Business Properly",
    desc: "Dissolve your company the right way and ensure all legal and state obligations are completed."
  }
].map((feature, idx) => (
    <div
      key={idx}
      className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition"
    >
      <feature.icon className="h-12 w-12 text-cyan-600 mb-4" />

      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {feature.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {feature.desc}
      </p>

      <a
        href={feature.link}
        className="text-cyan-600 font-semibold hover:underline"
      >
        Learn More →
      </a>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="py-24 bg-cyan-100/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="text-center mb-16">
  <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
    Business Growth Insights & Startup Strategies
  </h2>

  <p className="text-lg text-slate-600 max-w-5xl mx-auto">
    Expert startup tips, proven business strategies, and practical advice from Startup Central to help entrepreneurs build, manage, and grow a successful business.
  </p>
</div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <ResourceCard
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80"
        title="Understanding Filing Fees"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80"
        title="Navigating Filing Times"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80"
        title="Business Name Search"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80"
        title="Filing Annual Reports"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80"
        title="State LLC Filing Tips"
        link="#"
      />

      <ResourceCard
        image="https://images.unsplash.com/photo-1619898381495-5416f6c8045c?q=80"
        title="File in Another Country"
        link="#"
      />

    </div>

  </div>
</section>

<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1664575599730-0814817939de?q=80"
            alt="Customer support professional"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
            Reliable Business Support That Works for You
          </h2>

          <div className="space-y-4">

            {features.map((item, index) => (
              <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-6">

                <div className="max-w-md">
                  <h3 className="text-xl font-bold text-cyan-500 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <span className="text-gray-400 text-2xl font-semibold">
                  {item.number}
                </span>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>

    <section className="py-20 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
{
q: "What is business management compliance and why is it important for my company?",
a: "Business compliance management refers to the ongoing legal and administrative requirements that businesses must maintain after formation. This includes filing annual reports, maintaining a registered agent, updating company records, and staying in good standing with the state. Failing to meet these requirements can result in penalties, late fees, or even administrative dissolution of your company. Business management services help ensure that important filings and compliance deadlines are handled correctly so your company remains legally active and protected."
},
{
q: "What is an Annual Report and do I need to file one for my business?",
a: "An Annual Report is a required state filing that confirms or updates important information about your business such as its address, owners, and registered agent. Most states require LLCs and corporations to submit this report every year to remain in good standing. Missing an annual report deadline can lead to late fees, penalties, or suspension of your business status. Filing your annual report on time ensures your company stays compliant and legally active with the state."
},
{
q: "What does a Registered Agent do for a business?",
a: "A Registered Agent is a designated individual or service responsible for receiving official legal documents and government notices on behalf of a business. These documents may include lawsuits, tax notifications, compliance reminders, and state correspondence. Most states legally require LLCs and corporations to maintain a registered agent with a physical address in the state of formation. Using a professional registered agent service helps ensure important documents are received promptly and that business owners never miss critical deadlines."
},
{
q: "What is a Certificate of Good Standing and why would I need one?",
a: "A Certificate of Good Standing is an official document issued by the state confirming that a business is properly registered and compliant with all state requirements. Many banks, lenders, investors, and government agencies require this certificate before approving loans, opening business bank accounts, or allowing a company to expand into another state. Maintaining good standing ensures your business can operate without restrictions and continue growing."
},
{
q: "What is Foreign Qualification and when does a business need it?",
a: "Foreign Qualification is the process of registering your business to operate legally in a state other than the one where it was originally formed. For example, if your LLC was created in Texas but you want to do business in California, you must register as a foreign entity in California. This filing allows your business to legally conduct operations, hire employees, and open locations in additional states while remaining compliant with state laws."
},
{
q: "What is a Business Amendment and when should it be filed?",
a: "A Business Amendment is a formal update filed with the state when important details about your company change. This can include changes to the business name, ownership structure, company address, or management information. Filing an amendment ensures your official business records remain accurate and compliant with state regulations. Keeping this information updated is important for legal protection, banking, and tax purposes."
},
{
q: "What is IRS Form 2553 and how does S-Corporation election work?",
a: "IRS Form 2553 is used by eligible businesses to elect S-Corporation tax status. By making an S-Corp election, a business can potentially reduce self-employment taxes while still maintaining the legal protections of an LLC or corporation. To qualify, the business must meet certain IRS requirements and submit the form within the required time frame. Many small business owners choose S-Corp taxation to optimize tax savings and improve financial efficiency."
},
{
q: "What happens if my business falls out of good standing with the state?",
a: "If a business fails to meet compliance requirements—such as filing annual reports or paying state fees—it may fall out of good standing. This can lead to penalties, loss of liability protection, and possible administrative dissolution by the state. In many cases, a business can restore its status through a reinstatement process, which involves filing overdue documents and paying any outstanding fees."
},
{
q: "Can I change my Registered Agent after forming my business?",
a: "Yes, businesses can change their registered agent at any time by filing a Change of Registered Agent form with the state. Companies often update their registered agent when they move, switch service providers, or want a professional service to handle legal notices and compliance reminders. Keeping an active registered agent on file is required in most states to maintain business compliance."
},
{
q: "How do I dissolve or close a business legally?",
a: "Business dissolution is the formal process of closing a company with the state where it was registered. This typically involves filing dissolution paperwork, paying outstanding taxes or fees, and notifying creditors and relevant agencies. Properly dissolving a business prevents future tax obligations, penalties, or compliance requirements and officially ends the company’s legal existence."
}
]
            .map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl p-6 group border-2 border-gray-200 hover:border-cyan-500 transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <svg className="w-6 h-6 text-cyan-500 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-extrabold mb-6">You Built Your Business to Grow — Not to Handle Paperwork.<br/>
That’s Where We Come In.</h2>
          <p className="text-xl mb-8 text-cyan-50">Helping businesses stay organized, compliant, and in control is what we do best. Start with The Future Perfect Global LLC today and focus on growing your business while we handle the details.</p>
          <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition">
            Start Your Free Trial Today
          </button>
        </div>
      </section>
            <GetStartedModal
                              isOpen={isModalOpen}
                              onClose={() => setIsModalOpen(false)}
                              selectedBusinessType={selectedBusinessType}
                            />

                            {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="relative bg-black rounded-xl overflow-hidden max-w-4xl w-full">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 text-white z-50 bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <X size={20} />
            </button>

            {/* VIDEO */}
            <video
              controls
              autoPlay
              className="w-full h-full"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>

          </div>

        </div>
      )}
    </div>
     </>
  );
}


// Sub-component for clean code
function ResourceCard(props: { image: any; title: any; link: any; }) {
  const image = props.image;
  const title = props.title;
  const link = props.link;

  return (
    <a
      href={link}
      className="group block bg-white rounded-3xl overflow-hidden
                 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-4">
        <h3 className="text-base font-semibold text-slate-900">
          {title}
        </h3>
        <span className="text-xl text-slate-400 group-hover:text-bizee-cyan transition-colors">
          ↗
        </span>
      </div>
    </a>
  );
}
