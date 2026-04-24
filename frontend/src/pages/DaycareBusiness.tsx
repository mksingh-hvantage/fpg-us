import { CheckCircle, Users, DollarSign, FileText, Lightbulb, Target, Clock, AlertCircle, ArrowRight, ChevronDown, Megaphone, MapPin, Package, Settings, Receipt, ShieldCheck, Home, ExternalLink, Wrench } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

type FAQ = {
  q: string;
  a: string;
};

export default function DaycareBusiness() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      q: "How much experience do I need to start a daycare?",
      a: "While formal childcare experience is beneficial, many successful daycare owners start without it. Most states require specific certifications and training, which you can obtain before or during startup."
    },
    {
      q: "What's the minimum number of children I need to be profitable?",
      a: "This varies by location and pricing model, but most daycare centers need 60–80% capacity to break even."
    },
    {
      q: "Do I need my own building or can I rent?",
      a: "You can rent, but the space must meet all state childcare facility requirements."
    },
    {
      q: "How long does it take to get licensed?",
      a: "The timeline varies by state but typically takes 3–6 months."
    },
    {
      q: "What type of insurance do I need?",
      a: "General liability, property insurance, and workers’ compensation are essential."
    },
    {
      q: "Can I run a daycare from my home?",
      a: "Yes, many states allow family daycare homes with lower capacity limits."
    },
    {
      q: "How do I handle late pickups?",
      a: "Use clear late pickup policies and fees in parent agreements."
    },
    {
      q: "How do I manage cash flow?",
      a: "Advance payments, auto billing, and a 3–6 month reserve help a lot."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg")'
    }}
  ></div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/90 via-cyan-600/85 to-slate-600/80"></div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-white">
      <h1 className="text-5xl font-extrabold mb-4 leading-xl">
        Start a Successful Daycare Business & Grow Your Childcare Center
      </h1>

      <p className="text-lg md:text-xl text-cyan-100 mb-6 max-w-xl leading-relaxed">
        Launch and scale a profitable daycare or childcare business with the right 
        strategy, licensing, and marketing approach. Build a safe, nurturing 
        environment for children while creating a sustainable income stream.
      </p>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="bg-white text-cyan-700 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition shadow-lg"
        >
          Get Started Now
        </button>

        <a
          href="/contact"
          className="border border-white/80 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* RIGHT VISUAL CARD */}
    <div className="hidden md:block">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl">
        <img
          src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
          alt="Daycare children learning and playing"
          className="rounded-2xl object-cover w-full h-[320px]"
        />

        <div className="mt-4 text-white">
          <p className="text-sm text-cyan-100">Trusted Childcare Business</p>
          <p className="font-semibold text-lg">
            Build a Safe & Profitable Learning Environment
          </p>
        </div>
      </div>
    </div>

  </div>

</section>

      {/* Why Start a Daycare Business */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center font-extrabold mb-4 text-gray-900">Why Start a Daycare Business?</h2>
          <p className="text-gray-600 text-center text-lg mb-12">
            The childcare industry remains one of the most rewarding and resilient business opportunities available today.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-cyan-600">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-cyan-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Growing Demand</h3>
              </div>
              <p className="text-gray-600">With more parents entering the workforce, childcare services are in high demand and this trend continues to grow.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Users className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Community Impact</h3>
              </div>
              <p className="text-gray-600">Make a meaningful difference in children's lives while supporting families in your community.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-cyan-600">
              <div className="flex items-center mb-4">
                <DollarSign className="text-cyan-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Revenue Potential</h3>
              </div>
              <p className="text-gray-600">Flexible pricing structures allow you to create a profitable business model tailored to your market.</p>
            </div>
          </div>
        </div>
      </section>

          <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-14">
          <p className="text-cyan-600 font-semibold mb-3">
            Business Startup Guides
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How to Start a Daycare Business Successfully
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Starting a daycare business is a rewarding opportunity for individuals 
            with childcare experience who want to build a profitable and meaningful 
            career. With the right skills, planning, and strategy, you can create a 
            trusted childcare center that supports families and generates steady income.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-slate-600 leading-relaxed">

            <p>
              To start a successful daycare business, you’ll need a strong combination 
              of childcare expertise, people management, and administrative skills. 
              A well-structured daycare business plan and effective marketing strategy 
              will help you attract parents and build long-term trust.
            </p>

            <p>
              This guide walks you through everything—from validating your childcare 
              business idea and conducting market research to registering your business, 
              handling legal requirements, and managing daily operations.
            </p>

            <p>
              Whether you're launching a small home daycare or a large childcare center, 
              this step-by-step guide will help you build, grow, and scale your business 
              with confidence.
            </p>

          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Megaphone className="w-6 h-6 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold">
                Trusted by Aspiring Entrepreneurs
              </h3>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Since 2004, we’ve helped over <span className="font-semibold text-white">1,000,000+ entrepreneurs</span> 
              start and grow successful businesses across industries.
            </p>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              From idea validation and research to legal setup and daily operations, 
              we provide expert guidance to help you launch and scale your daycare business.
            </p>

            <div className="bg-white/10 rounded-xl p-4 text-sm text-white/90">
              Get step-by-step support, actionable insights, and proven strategies 
              to turn your childcare business idea into a successful venture.
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 text-xl font-bold mb-6">
            Ready to launch your daycare business and become a successful entrepreneur?
          </p>

          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition shadow-lg">
            Start Your Daycare Business
          </button>
        </div>

      </div>
    </section>

      {/* Steps to Start */}
      <section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-4 text-gray-900">
      Why Starting a Daycare Business is a Smart Opportunity
    </h2>

    <p className="text-gray-600 text-center text-lg mb-10 max-w-3xl mx-auto">
      The childcare and daycare industry is growing rapidly, making it one of the most 
      profitable small business opportunities today. With increasing demand from working 
      families, starting a daycare business can provide both financial stability and a 
      meaningful impact in your community.
    </p>

    {/* STATS */}
    <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-3xl font-bold text-cyan-600">700K+</p>
        <p className="text-gray-600 text-sm">Daycare Businesses in the U.S.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-3xl font-bold text-cyan-600">$50B+</p>
        <p className="text-gray-600 text-sm">Annual Industry Revenue</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-3xl font-bold text-cyan-600">1.5M+</p>
        <p className="text-gray-600 text-sm">People Employed in Childcare</p>
      </div>
    </div>

    {/* INSIGHTS */}
    <div className="grid md:grid-cols-2 gap-6 mb-12 text-gray-600">
      <ul className="space-y-3">
        <li>• Most daycare customers come from middle-income households ($40K–$100K)</li>
        <li>• Demand for childcare services continues to grow steadily each year</li>
      </ul>

      <ul className="space-y-3">
        <li>• Over 8.5 million children are enrolled in early education programs</li>
        <li>• Many daycare businesses operate successfully as solo-owned ventures</li>
      </ul>
    </div>

    {/* CTA LINE */}
    <p className="text-center text-gray-700 font-medium mb-2">
      Now is the perfect time to start your daycare business and tap into this growing industry.
    </p>

  </div>
</section>

<section className="py-16 px-4 bg-cyan-50">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl text-center font-extrabold mb-4 text-gray-900">
      A Day in the Life of a Daycare Business Owner
    </h2>

    <p className="text-gray-600 text-center text-lg mb-12">
      Running a daycare business involves managing children, parents, and daily operations while ensuring a safe and engaging environment.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {/* DAILY TASKS */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <FileText className="text-cyan-600 mr-2" size={20} />
          <h3 className="text-xl font-bold text-gray-900">
            Daily Responsibilities
          </h3>
        </div>

        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Communicating with parents about their child’s needs and progress</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Providing childcare for several hours each day in a safe environment</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Managing feeding, diapering, naps, and daily routines</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Planning fun, educational activities for children</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Handling minor issues and ensuring child safety</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Managing supplies, equipment, and inventory</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Running business operations like marketing, billing, and administration</span>
          </li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <AlertCircle className="text-cyan-600 mr-2" size={20} />
          <h3 className="text-xl font-bold text-gray-900">
            Essential Skills for Daycare Owners
          </h3>
        </div>

        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Childcare experience and understanding of child development</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Strong communication and relationship-building with parents</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Organizational and time management skills</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Basic business management and marketing knowledge</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1" />
            <span>Problem-solving and decision-making abilities</span>
          </li>
        </ul>
      </div>

    </div>

    {/* CUSTOMER EXPECTATION */}
    <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded mt-8">
      <p className="text-cyan-900 font-semibold mb-2">
        What Parents Look for in a Daycare
      </p>

      <p className="text-cyan-800">
        Parents want a daycare they can trust to provide safe, reliable, and affordable childcare. 
        They look for a nurturing environment where their children are engaged, learning, and well cared for. 
        By delivering quality care while managing your operations efficiently, you can build a successful 
        and growing daycare business.
      </p>
    </div>

  </div>
</section>

      {/* Licensing & Requirements */}
      <section className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-4 text-gray-900">
      Types of Daycare Businesses You Can Start
    </h2>

    <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
      Explore different daycare business models and choose the one that best fits your skills, budget, and target market.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* CORPORATE DAYCARE */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Corporate & Employer-Sponsored Daycare
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Partner with companies to provide childcare services for employees</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Operate onsite daycare centers or offer remote childcare solutions</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Work directly with HR teams to secure long-term contracts</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Ideal for stable income and scalable business growth</span>
          </li>
        </ul>
      </div>

      {/* SPECIALIZED DAYCARE */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Specialized Childcare Services
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Offer daycare for children with specific needs or requirements</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Provide services for dietary needs (gluten-free, vegetarian, etc.)</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Support children with mild learning or physical disabilities</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>High demand niche with premium pricing opportunities</span>
          </li>
        </ul>
      </div>

      {/* FRANCHISE */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition md:col-span-2">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Franchise Daycare Business
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Invest in an established daycare franchise brand</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Get proven business models, systems, and operational support</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Benefit from brand recognition and existing customer trust</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-3">•</span>
            <span>Ideal for beginners who want lower risk and guided setup</span>
          </li>
        </ul>
      </div>

    </div>

    {/* NOTE */}
    <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded mt-10">
      <p className="text-cyan-900 font-semibold mb-2">Pro Tip:</p>
      <p className="text-cyan-800">
        Choosing the right daycare business model is crucial for long-term success. 
        Evaluate your budget, expertise, and local demand before selecting the best option for your childcare business.
      </p>
    </div>

  </div>
</section>

<section className="py-16 px-4 bg-cyan-50">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <h2 className="text-5xl text-center font-extrabold mb-4 text-gray-900">
      Assess the Viability of Your Daycare Business Concept
    </h2>
    <p className="text-gray-600 text-center text-lg mb-12">
      Ensure your daycare business idea has strong demand, clear positioning, and long-term growth potential before launching.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {/* LEFT CARD */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <FileText className="text-cyan-600 mr-2" size={20} />
          <h3 className="text-xl font-bold text-gray-900">
            Market Research & Competition Analysis
          </h3>
        </div>

        <ul className="space-y-3 text-gray-600">

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Research local daycare centers and childcare competitors in your area
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Evaluate demand to ensure there is a viable market for your services
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Analyze location advantages, as daycare businesses depend heavily on local demand
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Identify gaps in existing childcare services to position your business effectively
            </span>
          </li>

        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <AlertCircle className="text-cyan-600 mr-2" size={20} />
          <h3 className="text-xl font-bold text-gray-900">
            Define Your Unique Value & Target Market
          </h3>
        </div>

        <ul className="space-y-3 text-gray-600">

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Identify your unique selling points (USPs) to stand out from competitors
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Define your ideal customers and understand parent needs and expectations
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Talk directly with parents to validate your daycare business idea
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Refine your services based on feedback to create a competitive childcare offering
            </span>
          </li>

        </ul>
      </div>
    </div>

    {/* NOTE */}
    <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded mt-8">
      <p className="text-cyan-900 font-semibold mb-2">Pro Tip:</p>
      <p className="text-cyan-800">
        Not every daycare idea will succeed. Evaluate your strengths, skills, and resources 
        carefully to choose a childcare business model that aligns with your capabilities 
        and has strong market demand.
      </p>
    </div>

  </div>
</section>

<section className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <h2 className="text-5xl text-center font-extrabold mb-4 text-gray-900">
      Create a Strong Daycare Business Plan
    </h2>

    <p className="text-gray-600 text-center text-lg mb-12">
      A well-structured daycare business plan is essential to launch, manage, and grow a successful childcare business.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* LEFT CARD */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <FileText className="text-cyan-600 mr-2" size={20} />
          <h3 className="text-xl font-bold text-gray-900">
            Business Planning Essentials
          </h3>
        </div>

        <ul className="space-y-3 text-gray-600">

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Write a clear executive summary highlighting your daycare business vision and strategy
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Define your business goals, growth targets, and long-term childcare objectives
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Describe your daycare services, background, and what makes your childcare center unique
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Conduct market research to understand local demand and parent needs
            </span>
          </li>

        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <AlertCircle className="text-cyan-600 mr-2" size={20} />
          <h3 className="text-xl font-bold text-gray-900">
            Strategy & Financial Planning
          </h3>
        </div>

        <ul className="space-y-3 text-gray-600">

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Outline your daycare business structure, ownership model, and operations
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Define your business model, pricing strategy, and revenue streams
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Plan your marketing and sales strategy to attract parents and grow enrollment
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Prepare financial projections including costs, revenue, and profitability
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span>
              Add supporting documents and appendices for additional details and references
            </span>
          </li>

        </ul>
      </div>

    </div>

    {/* NOTE */}
    <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded mt-8">
      <p className="text-cyan-900 font-semibold mb-2">Pro Tip:</p>
      <p className="text-cyan-800">
        A detailed daycare business plan not only helps you stay organized but also 
        increases your chances of securing funding, attracting clients, and building 
        a profitable childcare business in a competitive market.
      </p>
    </div>

  </div>
</section>

<section className="py-20 bg-cyan-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Choose the Right Structure for Your Daycare Business
      </h2>
      <p className="text-slate-600 text-lg">
        Selecting the right legal structure impacts your liability, taxes, and long-term growth.
      </p>
    </div>

    {/* CARD STRIP */}
    <div className="grid md:grid-cols-5 gap-6 mb-12">

      {[
        {
          title: "Sole Proprietor",
          desc1: "Simple and easy to set up with minimal paperwork.",
          desc2: "However, it does not provide protection for personal assets.",
          note: "Best for: very small or home-based setups",
          highlight: false
        },
        {
          title: "Partnership",
          desc1: "Ideal when two or more people run a daycare together.",
          desc2: "Shared responsibilities but limited liability protection.",
          note: "Best for: co-owned daycare businesses",
          highlight: false
        },
        {
          title: "LLC",
          desc1: "Offers strong liability protection and flexible management.",
          desc2: "Easy to set up and the most popular choice for startups.",
          note: "Best for: most daycare business owners",
          highlight: true
        },
        {
          title: "S Corporation",
          desc1: "Provides potential tax advantages for growing businesses.",
          desc2: "Requires more compliance and structured operations.",
          note: "Best for: scaling or mid-size businesses",
          highlight: false
        },
        {
          title: "C Corporation",
          desc1: "Designed for large businesses with investors and expansion.",
          desc2: "More complex with higher legal and tax requirements.",
          note: "Best for: large-scale enterprises",
          highlight: false
        }
      ].map((item, i) => (
        <div
          key={i}
          className={`p-6 rounded-2xl border transition hover:shadow-lg flex flex-col justify-between ${
            item.highlight
              ? "bg-slate-900 text-white border-slate-900 scale-105"
              : "bg-white text-slate-700"
          }`}
        >
          <div>
            <h3 className="font-bold text-lg mb-3">{item.title}</h3>

            <p className={`text-sm mb-2 ${item.highlight ? "text-white/80" : "text-slate-500"}`}>
              {item.desc1}
            </p>

            <p className={`text-sm mb-4 ${item.highlight ? "text-white/80" : "text-slate-500"}`}>
              {item.desc2}
            </p>
          </div>

          <div>
            <p className={`text-xs ${item.highlight ? "text-cyan-300" : "text-slate-400"}`}>
              {item.note}
            </p>

            {item.highlight && (
              <div className="mt-3 text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full inline-block">
                Recommended
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* BOTTOM STRIP */}
    <div className="bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="max-w-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Register Your Daycare Business Properly
        </h3>
        <p className="text-slate-600 text-sm">
          After selecting your structure, complete registration, licensing, and legal steps 
          to operate your daycare business smoothly and legally.
        </p>
      </div>

      <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition">
        Get Started
      </button>
    </div>

  </div>
</section>

<section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Set Up & Manage Your Daycare Business Operations
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Once your daycare business is registered, the next step is building a 
            strong operational system. From choosing the right location to managing 
            finances and staff, every decision impacts your long-term success.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              icon: MapPin,
              title: "Choose the Right Daycare Location",
              desc: "Select a safe and accessible location with strong demand. Whether you run a home daycare or a commercial center, ensure the space is child-friendly, secure, and cost-effective."
            },
            {
              icon: Megaphone,
              title: "Market Your Childcare Business",
              desc: "Promote your daycare through a professional website, social media, local ads, and parent referrals. Strong branding builds trust and helps attract consistent enrollments."
            },
            {
              icon: Settings,
              title: "Use the Right Tools & Systems",
              desc: "Implement daycare management software, scheduling tools, and billing systems to streamline daily operations and improve efficiency."
            },
            {
              icon: Users,
              title: "Hire & Manage Staff",
              desc: "Start small or operate solo, then gradually hire qualified childcare professionals as your daycare grows. Ensure proper training and compliance."
            },
            {
              icon: Package,
              title: "Essential Daycare Equipment",
              desc: "Invest in toys, learning materials, safety equipment, and both indoor and outdoor activities to create a fun and engaging environment for children."
            },
            {
              icon: DollarSign,
              title: "Manage Finances & Taxes",
              desc: "Set up a separate business bank account, track expenses, maintain records, and handle taxes properly to ensure long-term profitability and compliance."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-5 group-hover:scale-110 transition">
                <item.icon size={22} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-xl">
            Daycare Business Licenses, Regulations & Tax Requirements
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Starting and operating a daycare business requires compliance with 
            various legal, licensing, and tax regulations. Understanding these 
            requirements is essential to run your childcare business smoothly, 
            avoid penalties, and build a trustworthy brand.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LICENSING */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-100 p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Licensing & Regulations
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              To legally operate a daycare or childcare center, you must obtain 
              the required licenses and permits from local, state, and federal 
              authorities. These regulations ensure that your facility meets 
              safety, health, and operational standards.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Depending on your location, you may need childcare licenses, zoning 
              approvals, safety inspections, and background checks. Proper 
              compliance not only protects your business but also builds trust 
              with parents and guardians.
            </p>

          </div>

          {/* TAXES */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Receipt className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold">
                Taxes & Financial Planning
              </h3>
            </div>

            <p className="text-white/80 leading-relaxed mb-4">
              Managing taxes is a crucial part of running a daycare business. 
              You may be required to pay self-employment tax, state income tax, 
              and federal income tax based on your business structure.
            </p>

            <p className="text-white/80 leading-relaxed mb-4">
              If you offer taxable services or sell products, you may also need 
              to collect and file sales and use taxes. Keeping accurate records 
              and planning ahead is essential for financial stability.
            </p>

            <div className="bg-white/10 rounded-xl p-4 text-sm text-white/90">
              💡 It’s recommended to set aside around <span className="font-semibold text-white">25–35%</span> 
              of your earnings to cover tax obligations and avoid financial stress.
            </div>

          </div>

        </div>

      </div>
    </section>

     <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Daycare Business Insurance: Protect Your Childcare Center
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Having the right daycare business insurance is essential to protect your childcare 
            center from financial risks, legal claims, and unexpected incidents. Whether you run 
            a home daycare or a large childcare facility, proper coverage ensures long-term 
            stability and peace of mind.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* WORKERS COMP */}
          <div className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="bg-cyan-100 p-3 rounded-xl w-fit mb-4">
              <Users className="w-6 h-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Workers’ Compensation Insurance
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              This insurance covers employees in case of work-related injuries, illnesses, 
              or disabilities. It typically includes medical expenses, lost wages, and 
              rehabilitation costs. Requirements vary by location, and if you don’t have 
              employees, this coverage may not be necessary.
            </p>
          </div>

          {/* GENERAL LIABILITY */}
          <div className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="bg-cyan-100 p-3 rounded-xl w-fit mb-4">
              <ShieldCheck className="w-6 h-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              General Liability Insurance
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              General liability insurance protects your daycare business from claims such as 
              child injuries, property damage, or legal disputes. It also covers legal defense 
              costs and helps prevent financial losses, making it one of the most important 
              policies for childcare providers.
            </p>
          </div>

          {/* HOME & AUTO */}
          <div className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="bg-cyan-100 p-3 rounded-xl w-fit mb-4">
              <Home className="w-6 h-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Home & Auto Insurance Coverage
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              If you operate your daycare from home or use a vehicle for business purposes, 
              review your existing insurance policies. Standard home or auto insurance may 
              not cover business activities, so upgrading your coverage or adding dedicated 
              business protection is highly recommended.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg max-w-xl">
            Protect your daycare business with the right insurance policies and ensure 
            long-term success with complete peace of mind.
          </p>

          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-500 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition">
            Get Expert Guidance
          </button>
        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How to Maintain Your Daycare Business Successfully
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Running a successful daycare business requires more than just daily operations. 
            To stay compliant and financially stable, you must follow essential legal, tax, 
            and administrative requirements throughout the year.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "File Annual Business Reports",
              desc: "Submit your annual report to keep your daycare business in good standing. This ensures your business information remains updated with state authorities."
            },
            {
              title: "Pay Estimated Taxes",
              desc: "Make quarterly estimated tax payments based on your expected income. This helps avoid penalties and keeps your finances on track."
            },
            {
              title: "Renew Licenses & Permits",
              desc: "Ensure all daycare licenses, permits, and registrations are renewed on time to continue operating legally without interruptions."
            },
            {
              title: "Prepare Financial Records",
              desc: "Work with an accountant to organize your income, expenses, and financial documents for accurate tax filing and reporting."
            },
            {
              title: "File Business Taxes",
              desc: "Submit your federal, state, and local tax returns on time to maintain compliance and avoid legal issues."
            },
            {
              title: "Manage Payroll & Sales Taxes",
              desc: "If applicable, handle payroll taxes for employees and collect and pay sales taxes regularly as required by law."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"
            >
              
              {/* NUMBER */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-600 text-white font-bold mb-4">
                {index + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Stay compliant and grow your daycare business with proper planning and management.
          </p>

          <button className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition shadow-md">
            Get Expert Help
          </button>
        </div>

      </div>
    </section>

    
    {/* Tools & Software */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="max-w-7xl px-8 mx-auto">

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
                className="border bg-white border-gray-200 rounded-2xl p-6 hover:shadow-lg transition group"
              >
                <Wrench className="w-6 h-6 text-cyan-600 mb-4" />

                <h3 className="font-bold text-gray-900 mb-4">
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


      {/* Revenue Model */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center font-extrabold mb-4 text-gray-900">Revenue Models & Pricing</h2>
          <p className="text-gray-600 text-center text-lg mb-12">Choose pricing structures that work for your market and business model.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Per-Child Daily Rates</h3>
              <p className="text-gray-600 mb-4">The most common model for most childcare facilities.</p>
              <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-700">Infant care</span>
                  <span className="font-bold text-gray-900">$15-25/day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Toddler care</span>
                  <span className="font-bold text-gray-900">$12-20/day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Preschool</span>
                  <span className="font-bold text-gray-900">$10-18/day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">School-age</span>
                  <span className="font-bold text-gray-900">$8-15/day</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Other Pricing Options</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-bold text-gray-900">Hourly Rates</p>
                  <p className="text-gray-600 text-sm">$5-12 per hour for flexible drop-in care</p>
                </li>
                <li>
                  <p className="font-bold text-gray-900">Weekly Packages</p>
                  <p className="text-gray-600 text-sm">Discounted rates for committed weekly schedules</p>
                </li>
                <li>
                  <p className="font-bold text-gray-900">Monthly Subscriptions</p>
                  <p className="text-gray-600 text-sm">Flat rates for unlimited monthly attendance</p>
                </li>
                <li>
                  <p className="font-bold text-gray-900">Sibling Discounts</p>
                  <p className="text-gray-600 text-sm">Reduced rates for multiple children from same family</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategies */}
      <section className="py-16 px-4 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center font-extrabold mb-4 text-gray-900">Marketing Your Daycare Business</h2>
          <p className="text-gray-600 text-center text-lg mb-12">Effective marketing attracts families and builds your reputation in the community.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target size={24} />,
                title: "Digital Presence",
                items: ["Professional website", "Social media profiles", "Google Business listing", "Online reviews & testimonials"]
              },
              {
                icon: <Users size={24} />,
                title: "Community Engagement",
                items: ["Local partnerships", "Community events", "Parent networking groups", "Referral programs"]
              },
              {
                icon: <Lightbulb size={24} />,
                title: "Content Marketing",
                items: ["Blog posts on childcare", "Parent guides & tips", "Educational webinars", "Newsletter updates"]
              },
              {
                icon: <Clock size={24} />,
                title: "Traditional Marketing",
                items: ["Yard signs & flyers", "Local newspaper ads", "Community bulletin boards", "School partnerships"]
              }
            ].map((strategy, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-cyan-600 mr-3">{strategy.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{strategy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {strategy.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ArrowRight size={16} className="text-cyan-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations & Management */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">Daily Operations & Management</h2>
          <p className="text-gray-600 text-lg mb-12">Running a successful daycare requires strong operational systems.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Systems to Implement</h3>
              <ul className="space-y-4">
                {[
                  "Enrollment & registration processes",
                  "Billing & payment collection",
                  "Attendance tracking",
                  "Parent communication channels",
                  "Child development documentation",
                  "Staff scheduling",
                  "Health & safety checklists",
                  "Emergency procedures"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Staff Management Essentials</h3>
              <ul className="space-y-4">
                {[
                  "Clear hiring & training standards",
                  "Competitive compensation packages",
                  "Professional development opportunities",
                  "Performance evaluation systems",
                  "Staff handbook & policies",
                  "Regular team meetings",
                  "Background check requirements",
                  "Continuing education support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cyan-100/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border-l-4 border-cyan-600 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {faq.q}
                </h3>

                <ChevronDown
                  className={`w-5 h-5 text-cyan-600 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Resources & Next Steps */}
      <section className="py-16 px-4 bg-cyan-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Start Your Daycare Journey?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Take action today with these essential resources and next steps to launch your successful daycare business.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Research Requirements",
                description: "Contact your state's childcare licensing agency for specific regulations"
              },
              {
                title: "Develop Your Plan",
                description: "Create a comprehensive business plan including financials and operations"
              },
              {
                title: "Get Certified",
                description: "Complete required training and certifications in your state"
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-cyan-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-cyan-100">{step.description}</p>
              </div>
            ))}
          </div>

          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition inline-flex items-center gap-2">
            Start Your Daycare Business <ArrowRight size={24} />
          </button>
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
