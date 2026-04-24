import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle,
  Home,
  Building2,
  Target,
  Zap,
  Award,
  ChevronDown,
  ExternalLink,
  Wrench,
  ArrowRight,
  Star,
  Shield
} from 'lucide-react';

export default function CoachBusiness() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <main className="">
        <section className="relative py-16 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-800/70"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-6xl mx-auto">

              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Your Complete Guide to Success
              </div>

              <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                Launch Your Coaching Business with Confidence
              </h1>

              <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
                Transform your expertise into a thriving coaching career. Start a profitable life or business coaching practice with our comprehensive guide covering everything from niche selection to daily client operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSelectedBusinessType('');
                    setIsModalOpen(true);
                  }}
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start Your Business Today
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold">
                  Download Free Guide
                </button>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white fill-yellow-400" />
                  <span>4.5/5 from 500+ entrepreneurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  <span>Trusted since 2017</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="overview" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Starting a <span className='text-cyan-600'>Coaching Business</span> Made Simple
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Launch a fulfilling and profitable coaching business with your expertise and passion for helping others. The coaching industry is booming, offering flexible operations, high earning potential, and meaningful long-term impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-lg transition-all">
                <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$10B+</h3>
                <p className="text-gray-600">
                  U.S. self-improvement market revenue, with life coaching exceeding $1B annually
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">53,300+</h3>
                <p className="text-gray-600">
                  Coaches currently operating worldwide, a number that continues to grow rapidly
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-amber-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-lg transition-all">
                <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$62K+</h3>
                <p className="text-gray-600">
                  Average yearly coach income, with top performers earning over $100K annually
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500–700% ROI</h3>
                <p className="text-gray-600">
                  Return on investment reported by executives and businesses from professional coaching
                </p>
              </div>
            </div>

            {/* Content + Insights */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Complete Coaching Business Guide & Industry Insights
              </h3>

              <p className="text-gray-600 mb-8">
                The coaching business is one of the fastest-growing and most rewarding service industries. Whether you are starting a life coaching practice or a business coaching consultancy, this model offers exceptional flexibility, recurring revenue, and the opportunity to create real transformation in your clients' lives. With the right niche, marketing, and systems, you can build a scalable and impactful coaching business.
              </p>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Business coaching generates the highest revenue, with organizations investing heavily in executive development and productivity improvements.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    The number of professional coaches continues to grow, yet strong demand ensures abundant opportunity for new entrants with a clear niche.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Retainer and monthly coaching contracts provide consistent income, with typical clients paying $200–$500 per month for ongoing engagement.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Coaching is not disrupted by eCommerce or automation, making it one of the most resilient and future-proof service businesses available.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Starting a coaching business requires minimal capital investment, making it one of the best low-overhead business ideas for skilled professionals.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    With proper positioning, certification, and digital marketing, you can scale your coaching practice into a long-term, highly profitable business.
                  </p>
                </div>

              </div>

              <p className="text-gray-600 mt-8">
                This coaching business guide covers everything you need, including how to identify your niche, attract clients, structure your services, handle legal requirements, manage taxes, and operate daily. By following the right steps, you can successfully launch and grow your own coaching company.
              </p>

            </div>
          </div>
        </section>

        <section className="py-20 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Is Starting a <span className='text-cyan-600'>Coaching Business</span> Right for You?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Before you start a coaching business, it's important to understand the skills, challenges, and daily responsibilities involved. This guide helps you decide if the coaching industry is the right fit for your goals and personality.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-12">

              {/* LEFT SIDE - QUALITIES */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1626105985445-6430a31f6f96?q=80"
                  alt="Landscaping Business"
                  className="w-full h-48 object-cover rounded-xl hover:scale-105 transition duration-300"
                  />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
                  Key Skills Needed for a Successful Coaching Business
                </h3>

                <div className="space-y-4">

                  {[
                    "Excellent interpersonal and influencing skills to connect with clients and drive meaningful change",
                    "Powerful analytical and investigative abilities to assess client situations and develop effective strategies",
                    "Marketing and promotional expertise to attract clients and build a recognizable personal brand",
                    "Strong administration capabilities to manage scheduling, contracts, and client communications",
                    "Comprehensive research proficiency to stay current with industry trends and client-specific knowledge",
                    "Active listening and empathy to understand client needs and create a safe, productive environment",
                    "Ability to demonstrate measurable results and ROI to retain clients and earn referrals"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-1" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}

                </div>
              </div>

              {/* RIGHT SIDE - CHALLENGES */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Common Challenges in the Coaching Business
                </h3>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-6">
                  <p className="text-gray-700 mb-4">
                    Starting a coaching business comes with challenges like building credibility and attracting your first paying clients. The biggest hurdle is demonstrating tangible value and results to justify your fees in a competitive market.
                  </p>
                  <p className="text-gray-700">
                    You must also understand pricing strategies, positioning, and how to differentiate your services. Since coaching is a trust-based business, building a reputation and client pipeline requires patience and consistent effort.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Daily Tasks of a Coaching Business Owner
                </h4>

                <div className="space-y-3">
                  {[
                    "Marketing for new clients through social media and content creation",
                    "Handling client inquiries and onboarding new prospects",
                    "Researching industry trends and client-specific topics",
                    "Traveling to or hosting virtual and in-person coaching sessions",
                    "Conducting structured coaching sessions with clients",
                    "Documenting session notes and tracking client progress",
                    "Managing financial records, invoices, and administrative tasks",
                    "Completing ongoing professional training and certifications",
                    "Performing client-specific research and preparing materials",
                    "Analyzing business and sector data to better serve clients"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100">
                      <span className="w-8 h-8 flex items-center justify-center bg-cyan-600 text-white rounded-full text-sm font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{task}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-cyan-600 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Start Your Coaching Business?
                </h3>
                <p className="mb-6 text-cyan-100">
                  With the right skills, planning, and strategy, you can build a successful and profitable coaching practice in one of the world's fastest-growing industries.
                </p>
                <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }} className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Started Today
                </button>
              </div>
            </div>

          </div>
        </section>

        <section id="types" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-base mb-4">
                Find the Right <span className='text-cyan-600'>Coaching Business</span> to Start Today
              </h2>
              <p className="text-lg text-gray-600">
                Choose the right coaching niche to start and grow a profitable practice. From life coaching to executive business coaching, each specialty offers unique opportunities and client segments.
              </p>
            </div>

            {/* Main Types */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Users, title: 'Family & Relationship Coaching', desc: 'Help individuals and couples improve interpersonal relationships, communication, and family dynamics.' },
                { icon: Sparkles, title: 'Life Potential Coaching', desc: 'Guide clients in building strong foundations for personal growth and unlocking future opportunities.' },
                { icon: Zap, title: 'Fitness & Lifestyle Coaching', desc: 'Support clients with nutrition, exercise habits, and sustainable healthy living routines.' },
                { icon: Target, title: 'Executive Productivity Coaching', desc: 'Enhance performance and efficiency for leaders, managers, and high-achieving professionals.' },
                { icon: TrendingUp, title: 'Business Financial Coaching', desc: 'Provide expertise in margins, cost reduction, and financial strategy to help businesses grow profitably.' },
                { icon: Building2, title: 'Executive Culture Coaching', desc: 'Strengthen organizational culture, leadership relationships, and management effectiveness at the executive level.' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200 group">
                  <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Specialized Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Specialized Coaching Services You Can Offer
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                    <Home className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Overcoming Past Limitations</h4>
                    <p className="text-gray-600">
                      Help clients identify and resolve past issues or limiting beliefs that are holding back their personal or professional progress.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg h-fit">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Current Challenge Management</h4>
                    <p className="text-gray-600">
                      Support clients navigating present-day challenges in career transitions, relationships, stress, and decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg h-fit">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Future Planning & Preparation</h4>
                    <p className="text-gray-600">
                      Equip clients with practical tools, frameworks, and strategies to prepare for and confidently achieve their future goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                    <Target className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialized Niche Coaching</h4>
                    <p className="text-gray-600">
                      Offer focused coaching in areas like relationships, nutrition, lifestyle design, or specific business functions for a targeted client base.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Planning Section */}
            <div className="text-center max-w-6xl mt-12 mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Build a Strong Foundation for Your Coaching Business
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Starting a coaching business requires careful niche selection and smart positioning. Research your target clientele, analyze demand within your specialty, and estimate your service pricing and income potential. Develop a clear coaching methodology, understand your competitive landscape, and set up efficient client management systems to ensure long-term success and scalability.
              </p>
            </div>

          </div>
        </section>

        <section className="py-16 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section 1 - Market Research */}
            <div className="text-center mb-10">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                Market Research for Your <span className='text-cyan-600'>Coaching Business</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Before starting a coaching business, it's essential to validate your coaching services and understand market demand. Proper market research helps you identify the right niche, target clients, and build a profitable practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                {
                  title: "Define Your Unique Selling Points (USPs)",
                  desc: "Stand out in the coaching industry by offering specialized expertise, a proven methodology, strong testimonials, or a unique approach to client transformation."
                },
                {
                  title: "Analyze Coaching Competitors",
                  desc: "Study other coaches in your niche to understand their pricing, packages, positioning, and client expectations. Healthy competition indicates strong market demand."
                },
                {
                  title: "Join Business & Coaching Communities",
                  desc: "Engage in coaching forums, professional associations, and social platforms to gain insights, ask questions, and build relationships with potential clients."
                },
                {
                  title: "Use Market Research Reports",
                  desc: "Explore coaching industry reports and self-improvement market data to understand demand for life coaching, business coaching, and niche specialties."
                },
                {
                  title: "Talk to Potential Clients",
                  desc: "Gather direct feedback from your target audience to understand their goals, pain points, pricing expectations, and willingness to invest in coaching."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 2 - Business Model */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 mb-6">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
                Build a Strong Coaching Business Model
              </h3>
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
                A solid business model is the foundation of a successful coaching practice. It defines how you will attract clients, deliver your coaching programs, and generate consistent recurring revenue.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Service Strategy</h4>
                  <p className="text-gray-600">
                    Decide whether to offer one-on-one sessions, group coaching programs, online courses, or retainer packages to maximize your revenue and reach.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Client Acquisition</h4>
                  <p className="text-gray-600">
                    Use content marketing, social media, referral programs, speaking engagements, and professional networks to attract new coaching clients consistently.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 - Financial Planning */}
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Financial Planning & Revenue Projections
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Understanding your coaching business finances is crucial for sustainable growth. Estimate your service pricing, expected client volume, and monthly revenue targets. Plan your income across monthly, quarterly, and annual horizons. Since coaching income can fluctuate, building a stable client roster and retainer agreements early will help you achieve consistent profitability.
              </p>
            </div>

          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-cyan-50 via-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                Write a Business Plan for Your <span className='text-cyan-600'>Coaching Business</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A well-structured coaching business plan is essential to launch and grow a successful practice. It helps you define your strategy, attract ideal clients, and ensure long-term profitability in the coaching services industry.
              </p>
            </div>

            {/* Plan Points */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                {
                  title: "Executive Summary",
                  desc: "Summarize the key points of your coaching business plan, including your niche, services, goals, and overall growth strategy."
                },
                {
                  title: "Business Goals & Objectives",
                  desc: "Define your short-term and long-term goals for your coaching practice and outline how you plan to achieve measurable milestones."
                },
                {
                  title: "Business Description",
                  desc: "Explain your coaching services, target clientele, and what makes your coaching approach or methodology uniquely valuable."
                },
                {
                  title: "Market Analysis",
                  desc: "Analyze demand for coaching in your chosen niche, identify your ideal clients, and evaluate competitors in your local and online market."
                },
                {
                  title: "Business Structure",
                  desc: "Outline your company structure, operational workflow, and any team members or contractors involved in delivering your coaching services."
                },
                {
                  title: "Business Model",
                  desc: "Describe how your coaching practice will generate revenue through sessions, packages, retainers, group programs, or digital products."
                },
                {
                  title: "Marketing & Sales Strategy",
                  desc: "Plan how you will promote your coaching services through content marketing, social media, referrals, partnerships, and speaking opportunities."
                },
                {
                  title: "Financial Projections",
                  desc: "Estimate your coaching business revenue, monthly expenses, and profitability timeline to ensure a clear path to sustainable growth."
                },
                {
                  title: "Appendices",
                  desc: "Include additional documents such as coaching credentials, certifications, client testimonials, sample contracts, and supporting data."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Writing Your Coaching Business Plan?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Creating a professional business plan can help you launch faster and grow smarter. Follow a proven step-by-step guide to build a strong foundation for your coaching business success.
              </p>

              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-md">
                Download Business Plan Guide
              </button>
            </div>

          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                Choose the Right Business Structure for Your <span className='text-cyan-600'>Coaching Business</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Selecting the right legal structure is a crucial step when starting a coaching business. Your business entity impacts taxes, liability protection, and how you manage your coaching practice long term.
              </p>
            </div>

            {/* Business Structures */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                {
                  title: "Sole Proprietorship",
                  desc: "The simplest structure for a coaching business, but it offers no personal liability protection. Not recommended for professional coaches working with paying clients."
                },
                {
                  title: "Limited Liability Company (LLC)",
                  desc: "The most popular and recommended choice for coaching businesses. An LLC protects your personal assets, is easy to set up, and offers flexible tax treatment."
                },
                {
                  title: "Series LLC",
                  desc: "A specialized LLC structure that allows multiple service divisions with separate liability protection under one main entity (available in select states)."
                },
                {
                  title: "S Corporation",
                  desc: "A more complex structure that offers potential tax advantages for higher-earning coaches, but requires additional compliance and payroll management."
                },
                {
                  title: "C Corporation",
                  desc: "Designed for large-scale businesses with investors and complex structures. Typically unnecessary for solo coaches or small coaching practices."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Recommendation Section */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 mb-12 text-center">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                Recommended Structure for Coaching Businesses
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                In most cases, forming an LLC for your coaching business is the best option. It offers strong personal liability protection, flexible management, and is cost-effective for coaches at every stage of business growth.
              </p>
            </div>

            {/* Special Considerations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Important Considerations for Coaching Business Setup
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Liability Protection</h4>
                  <p className="text-gray-600">
                    Coaching businesses face professional liability risks. Choosing the right business structure helps protect your personal assets from potential client disputes or claims.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Insurance</h4>
                  <p className="text-gray-600">
                    Obtain professional liability (errors and omissions) insurance to protect your coaching business against unexpected claims, disputes, or legal challenges.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="py-16 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                Setting Up Your <span className='text-cyan-600'>Coaching Business</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                After registering your coaching business, the next step is setting up operations. From choosing your workspace to building your digital presence and developing your coaching methodology, every element plays a key role in your success.
              </p>
            </div>

            {/* Setup Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Business Location",
                  desc: "Most coaching businesses operate from a home office, virtual setting, or rented meeting space. Decide whether you will deliver sessions in-person, online via video call, or a hybrid model."
                },
                {
                  title: "Equipment & Technology",
                  desc: "Invest in a reliable computer, high-quality webcam, microphone, and professional lighting for video sessions. A smartphone and tablet are also useful for managing your practice on the go."
                },
                {
                  title: "Software & Client Management",
                  desc: "Use scheduling tools, CRM software, video conferencing platforms, and invoicing systems to manage bookings, communications, and payments efficiently."
                },
                {
                  title: "Marketing & Branding",
                  desc: "Build a professional coaching website, define your brand voice, and leverage social media, content marketing, and email campaigns to attract and nurture potential clients."
                },
                {
                  title: "Coaching Methodology & Programs",
                  desc: "Develop a structured coaching framework, session formats, and program packages that deliver consistent, measurable results for your clients."
                },
                {
                  title: "Qualifications & Certifications",
                  desc: "Pursue coaching certifications from recognized bodies such as the ICF to build credibility and demonstrate professional expertise to prospective clients."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Highlight Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Build a Strong Foundation for Your Coaching Business
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A successful coaching business requires the right setup, including the right tools, systems, and a clear marketing plan. Investing in your brand, methodology, and client experience early will help you deliver transformational results and scale your practice efficiently.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Launch Your Coaching Business?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Take the next step by setting up your tools, defining your niche, and promoting your coaching services to start attracting paying clients.
              </p>

              <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-md">
                Start Your Business Setup
              </button>
            </div>

          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Discussion Groups & Forums for <span className='text-cyan-600'>Coaching Business</span> Owners
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join online coaching communities, forums, and discussion groups to learn from experienced professionals, share insights, and connect with potential clients. Networking is essential to grow your coaching practice.
              </p>
            </div>

            {/* Forums List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

              <a
                href="https://coachfederation.org/community"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all block"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ICF Community (International Coaching Federation)
                </h3>
                <p className="text-gray-600">
                  The world's leading coaching organization offering community forums, professional development resources, and networking for coaches at every level.
                </p>
              </a>

              <a
                href="https://www.reddit.com/r/Entrepreneur/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all block"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Entrepreneur Subreddit
                </h3>
                <p className="text-gray-600">
                  A large Reddit community where entrepreneurs share business advice, coaching strategies, and real-world growth tips for building a successful practice.
                </p>
              </a>

              <a
                href="https://coach.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all block"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Coach.me
                </h3>
                <p className="text-gray-600">
                  A platform and community connecting coaches with clients, offering tools to manage your practice, track client progress, and grow your reputation.
                </p>
              </a>

            </div>

            {/* Bottom Note */}
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Join Coaching Business Communities?
              </h3>
              <p className="text-gray-600">
                Engaging with coaching forums and professional associations helps you stay updated with industry trends, refine your methodology, solve real-world challenges, and build a strong referral network that fuels consistent client growth.
              </p>
            </div>

          </div>
        </section>

        <section className="py-16 bg-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                <span className='text-cyan-600'>FAQ - </span>Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to the most common questions about starting a coaching business.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How much can I earn as a coaching business owner?',
                  answer: 'The average yearly income for a coach is around $62,000, but top coaches earn over $100,000 annually. Life coaching clients typically pay $200–$500 per month, while business coaching can command significantly higher rates. Your income depends on your niche, experience, pricing strategy, and client volume.'
                },
                {
                  question: 'Do I need certifications to start a coaching business?',
                  answer: 'Certifications are not legally required to call yourself a coach, but they greatly enhance your credibility and attractiveness to clients. Organizations like the International Coaching Federation (ICF) offer widely recognized credentials. Certifications also help you stand out in a competitive market and justify premium pricing.'
                },
                {
                  question: 'Should I form an LLC for my coaching business?',
                  answer: 'Yes, forming an LLC is strongly recommended. It protects your personal assets from professional liability claims, which is especially important when working one-on-one with clients. LLCs are also relatively inexpensive to set up, offer tax flexibility, and give your business a more professional appearance.'
                },
                {
                  question: 'How do I find my first coaching clients?',
                  answer: 'Start with your existing network — friends, colleagues, and professional contacts. Offer free or discounted discovery calls to build testimonials. Create a professional website and establish a presence on LinkedIn and social media. Content marketing, guest blogging, and speaking at events are powerful ways to attract your ideal clients organically.'
                },
                {
                  question: 'What should I charge for coaching services?',
                  answer: 'Pricing depends on your niche, experience level, and target market. Life coaching sessions typically range from $75–$300 per hour, while business and executive coaching can command $200–$600 per hour or more. Many coaches package sessions into monthly retainers or structured programs, which provides more predictable income and better client outcomes.'
                },
                {
                  question: 'Can I run a coaching business from home?',
                  answer: 'Absolutely. Most coaching businesses operate entirely from a home office or virtually. With video conferencing tools like Zoom or Skype, you can serve clients globally without a physical office. You may also be eligible for home office tax deductions. As your business grows, you can rent a coworking or meeting space for in-person sessions.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
                Useful Online Tools for <span className='text-cyan-600'>Coaching Business</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore essential tools to manage, grow, and scale your coaching business efficiently
              </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  category: 'Project Management',
                  tools: [
                    { name: 'Basecamp', link: 'https://basecamp.com' },
                    { name: 'Trello', link: 'https://trello.com' },
                    { name: 'Asana', link: 'https://asana.com' }
                  ]
                },
                {
                  category: 'Productivity',
                  tools: [
                    { name: 'Todoist', link: 'https://todoist.com' },
                    { name: 'Evernote', link: 'https://evernote.com' },
                    { name: 'Notion', link: 'https://notion.so' }
                  ]
                },
                {
                  category: 'Communication',
                  tools: [
                    { name: 'Zoom', link: 'https://zoom.us' },
                    { name: 'Slack', link: 'https://slack.com' },
                    { name: 'Grasshopper', link: 'https://grasshopper.com' }
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
                    { name: 'HubSpot', link: 'https://hubspot.com' },
                    { name: 'Zoho CRM', link: 'https://zoho.com/crm' },
                    { name: 'Insightly', link: 'https://insightly.com' }
                  ]
                },
                {
                  category: 'Scheduling',
                  tools: [
                    { name: 'Calendly', link: 'https://calendly.com' },
                    { name: 'Acuity Scheduling', link: 'https://acuityscheduling.com' }
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
                    { name: 'Squarespace', link: 'https://squarespace.com' },
                    { name: 'Wix', link: 'https://wix.com' }
                  ]
                },
                {
                  category: 'Payments & Contracts',
                  tools: [
                    { name: 'Stripe', link: 'https://stripe.com' },
                    { name: 'DocuSign', link: 'https://docusign.com' },
                    { name: 'Square', link: 'https://squareup.com' }
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

        <section className="py-20 bg-gradient-to-br from-cyan-600 via-slate-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Start Your Coaching Business Today
            </h2>
            <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
              Join thousands of successful coaches who have built profitable, purpose-driven practices. We'll handle the paperwork while you focus on transforming lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                Form Your LLC Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/contact" className="bg-black text-white px-8 py-4 rounded-lg hover:bg-cyan-800 transition-all font-semibold border-2 border-cyan-400">
                Talk to an Expert
              </a>
            </div>
            <p className="mt-6 text-cyan-100 text-sm">
              Money-back guarantee &bull; Set up in minutes &bull; Trusted by 60,000+ businesses
            </p>
          </div>
        </section>
      </main>

      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedBusinessType={selectedBusinessType}
      />
    </div>
  );
}
