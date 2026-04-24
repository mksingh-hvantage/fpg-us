import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Calendar, CheckCircle2, DollarSign, Users, Sparkles, TrendingUp, FileText, Building2, Shield, Lightbulb } from 'lucide-react';

export default function EventPlanning() {
      const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="relative text-center text-white py-24 px-6 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg"
      alt="Event Planning"
      className="w-full h-full object-cover"
    />
  </div>

  {/* OVERLAY (Gradient for readability) */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/90 to-slate-700/80"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto">
    <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6 leading-tight">
      Start Your Event Planning Business
    </h1>

    <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
      Transform your passion for creating memorable experiences into a thriving business.
      Learn everything you need to launch and grow a successful event planning company.
    </p>

    <button
      onClick={() => {
        setSelectedBusinessType('');
        setIsModalOpen(true);
      }}
      className="bg-white text-slate-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Get Started Today
    </button>
  </div>

</header>

      <section className="py-16 px-6 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Why Start an Event Planning Business?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The event planning industry is booming, with opportunities across corporate events,
              weddings, social gatherings, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growing Industry</h3>
              <p className="text-gray-600 leading-relaxed">
                The event planning market continues to expand as businesses and individuals seek
                professional help to create unforgettable experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Freedom</h3>
              <p className="text-gray-600 leading-relaxed">
                Express your creativity and bring unique visions to life while building lasting
                relationships with clients and vendors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Revenue</h3>
              <p className="text-gray-600 leading-relaxed">
                Set your own rates and scale your business from solo operations to a full-service
                agency with multiple revenue streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Steps to Launch Your Event Planning Business
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Follow this roadmap to build and grow your event planning company
      </p>
    </div>

    <div className="space-y-20">

      {[
        {
          title: "Define Your Niche",
          desc: "Choose a specialization like weddings, corporate events, or social functions to stand out and build expertise.",
          points: [
            "Research market demand",
            "Assess your skills",
            "Analyze competition"
          ],
          img: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg"
        },
        {
          title: "Create a Business Plan",
          desc: "Plan your services, pricing, and growth strategy to build a scalable business.",
          points: [
            "Define services & packages",
            "Set pricing strategy",
            "Plan marketing approach"
          ],
          img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        },
        {
          title: "Register Your Business",
          desc: "Choose a legal structure and register your business with proper licenses.",
          points: [
            "Select business structure",
            "Register legally",
            "Get required permits"
          ],
          img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
        },
        {
          title: "Get Insured",
          desc: "Protect your business and clients with proper insurance coverage.",
          points: [
            "General liability insurance",
            "Professional coverage",
            "Risk protection"
          ],
          img: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg"
        },
        {
          title: "Build Your Network",
          desc: "Create strong vendor relationships for smooth event execution.",
          points: [
            "Connect with vendors",
            "Attend industry events",
            "Build partnerships"
          ],
          img: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
        },
        {
          title: "Market Your Services",
          desc: "Promote your brand and attract clients through digital marketing.",
          points: [
            "Build website & portfolio",
            "Use social media",
            "Show testimonials"
          ],
          img: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
        }
      ].map((step, i) => (

        <div
          key={i}
          className={`grid md:grid-cols-2 gap-10 items-center ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >

          {/* IMAGE */}
          <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-[320px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* CONTENT */}
          <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {step.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {step.desc}
            </p>

            <ul className="space-y-2">
              {step.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>

      ))}

    </div>
  </div>
</section>

      <section className="py-16 px-6 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Essential Skills for Event Planners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Successful event planners combine creativity with strong organizational abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear communication with clients, vendors, and team members is crucial for success
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Organization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Managing multiple events, timelines, and details requires exceptional organizational skills
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Lightbulb className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem-Solving</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quick thinking and creative solutions help navigate unexpected challenges during events
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Attention to Detail</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every detail matters in creating seamless, memorable experiences for clients
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Business Structure Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right legal structure for your event planning business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Building2 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">LLC</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Limited Liability Company offers personal asset protection and flexible tax options.
                Popular choice for small to medium event planning businesses.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Personal liability protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Flexible taxation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Professional credibility</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sole Proprietorship</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Simplest business structure with minimal paperwork. Good for starting out, but
                offers no personal liability protection.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Easy to establish</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Minimal paperwork</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Complete control</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Building2 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporation</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                More complex structure suitable for larger operations. Offers strong liability
                protection and easier access to capital.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Strong liability protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Easier to raise capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Tax advantages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Revenue and Pricing Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to structure your event planning fees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Percentage-Based Pricing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Charge a percentage (typically 10-20%) of the total event budget. This model scales
                with the event size and aligns your success with the client's investment.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> For a $50,000 wedding, a 15% fee
                  would be $7,500
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flat Fee Pricing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Set a fixed price for your services based on the scope and complexity of the event.
                Provides predictable income and clear client expectations.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> Charge $5,000 for full-service
                  wedding planning regardless of budget
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hourly Rate</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bill by the hour for consulting or partial planning services. Works well for clients
                who need limited support or day-of coordination.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> Charge $75-150 per hour for
                  consultation and planning sessions
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Pricing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Offer tiered service packages (basic, premium, luxury) with defined deliverables.
                Simplifies decision-making and can encourage upsells.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> Basic ($2,500), Premium ($5,000),
                  Luxury ($10,000+)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
  {
    q: "How do I start an event planning business?",
    a: "To start an event planning business, you need to choose a niche such as weddings, corporate events, or social parties, create a business plan, and register your business legally. You should also build a strong network of vendors like caterers, decorators, and photographers. Creating a professional website and showcasing your portfolio is essential to attract clients. Many successful event planners start small, gain experience, and scale their services over time through referrals and online marketing."
  },
  {
    q: "How much does it cost to start an event planning business?",
    a: "The cost of starting an event planning business can range from $1,000 to $10,000 depending on your scale and services. Basic costs include business registration, website development, marketing, branding, and initial networking expenses. If you work from home and outsource vendors, your startup costs can be relatively low. However, investing in branding, marketing, and tools can help you grow faster and attract high-paying clients."
  },
  {
    q: "Is event planning a profitable business?",
    a: "Yes, event planning can be a highly profitable business if managed properly. Profit margins typically range between 10% to 30% depending on the type of events and pricing strategy. High-end events such as weddings and corporate conferences can generate significant revenue. As your experience and reputation grow, you can charge premium fees and increase your profitability through packages, vendor commissions, and repeat clients."
  },
  {
    q: "Do I need a license to start an event planning business?",
    a: "In most cases, you do not need a special license specifically for event planning, but you will need to register your business and obtain general business licenses as required by your local or state authorities. Depending on your services, you may also need permits for specific events, insurance coverage, or vendor-related certifications. It is always recommended to check local regulations to ensure compliance."
  },
  {
    q: "What skills are required to become a successful event planner?",
    a: "Successful event planners need strong organizational, communication, and time management skills. Creativity, problem-solving ability, and attention to detail are essential for planning memorable events. You should also have negotiation skills to deal with vendors and budgeting skills to manage client expectations. Marketing and networking skills are equally important for growing your client base."
  },
  {
    q: "How do event planners get clients?",
    a: "Event planners get clients through a combination of online and offline marketing strategies. Building a professional website, using social media platforms like Instagram and Pinterest, and showcasing past events can attract potential clients. Networking with vendors, venues, and local businesses also helps generate referrals. Many planners also use Google ads, SEO, and listing platforms to increase visibility and generate leads."
  },
  {
    q: "What are the best niches in the event planning business?",
    a: "Some of the most profitable niches in the event planning business include wedding planning, corporate events, birthday parties, destination events, and luxury events. Wedding planning is one of the highest-demand niches, while corporate events often provide consistent income. Choosing a niche helps you build expertise, target a specific audience, and stand out in a competitive market."
  },
  {
    q: "How much do event planners charge per event?",
    a: "Event planners typically charge either a flat fee, hourly rate, or a percentage of the total event cost. On average, planners charge 10% to 20% of the total event budget. For smaller events, fees may range from $500 to $2,000, while large weddings or corporate events can generate $5,000 to $20,000 or more depending on complexity and scale."
  },
  {
    q: "Can I start an event planning business from home?",
    a: "Yes, many event planning businesses are started and operated from home. Since most of the work involves coordination, planning, and communication, you do not need a physical office initially. You can manage clients online, meet at venues, and work remotely. Starting from home reduces costs and allows you to scale gradually as your business grows."
  },
  {
    q: "What tools do event planners use?",
    a: "Event planners use various tools for project management, communication, and marketing. Popular tools include Trello or Asana for task management, Google Workspace for collaboration, Canva for design, and social media platforms for promotion. CRM tools help manage client relationships, while budgeting software helps track expenses and profitability."
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

      <section className="py-16 px-6 bg-gradient-to-br from-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Launch Your Event Planning Business?
          </h2>
          <p className="text-xl mb-8 text-cyan-50 leading-relaxed">
            Take the first step toward building a successful event planning company.
            Start creating unforgettable experiences today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl">
              Start Your Business
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-800 transition-all border-2 border-white">
              Learn More
            </button>
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
