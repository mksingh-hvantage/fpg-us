import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  Dumbbell,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
  Building2,
  Briefcase,
  Shield,
  FileText,
  ClipboardCheck,
  DollarSign,
  MapPin,
  Laptop,
  Calendar,
  AlertCircle,
  Zap,
  Heart,
  Award,
  BarChart3,
  Mail,
  Share2
} from 'lucide-react';

export default function GymPersonalTraining() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const businessTypes = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Full-Service Gym & Fitness Center",
      description: "Complete facilities with diverse equipment, group fitness classes, and comprehensive wellness programs for all fitness levels."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Specialized Training Studio",
      description: "Focus on specific disciplines like CrossFit, Olympic lifting, martial arts, or endurance training for dedicated enthusiasts."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Budget-Friendly Fitness Center",
      description: "No-frills approach with essential equipment, flexible membership options, and 24/7 access at affordable pricing."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Low-Impact Wellness Studio",
      description: "Gentle fitness options including yoga, Pilates, barre, and dance classes promoting holistic health and mindfulness."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Personal Training Services",
      description: "Individualized coaching with customized programs, one-on-one attention, and specialized small group training sessions."
    }
  ];

  const dailyTasks = [
    "Welcoming and onboarding new members",
    "Equipment maintenance and facility upkeep",
    "Staying updated on fitness industry trends",
    "Scheduling classes and training sessions",
    "Leading workouts and providing coaching",
    "Building relationships with clients and staff",
    "Managing inventory and equipment purchases",
    "Handling business finances and operations",
    "Creating marketing campaigns and promotions"
  ];

  const essentialSkills = [
    "Deep understanding of exercise science and human anatomy",
    "Ability to design personalized fitness programs",
    "Strong motivational and coaching capabilities",
    "Excellent communication and interpersonal skills",
    "Business management and financial acumen",
    "Adaptability to emerging fitness trends",
    "Marketing expertise and customer insight"
  ];

  const validationSteps = [
    {
      title: "Define Your Unique Value",
      description: "Identify what sets your fitness business apart from competitors in your area."
    },
    {
      title: "Competitive Analysis",
      description: "Research existing gyms and studios to understand their offerings, pricing, and market position."
    },
    {
      title: "Target Market Research",
      description: "Define your ideal customer demographics, preferences, and fitness goals."
    },
    {
      title: "Customer Discovery",
      description: "Interview potential members to understand their needs, pain points, and expectations."
    },
    {
      title: "Iterate and Refine",
      description: "Use feedback to adjust your services, pricing, and business model before launch."
    }
  ];

  const equipmentNeeds = [
    "Cardio machines: treadmills, ellipticals, rowing machines, stationary bikes",
    "Free weights: dumbbells, barbells, weight plates, kettlebells",
    "Resistance equipment: cable machines, smith machines, leg press",
    "Functional training: battle ropes, medicine balls, suspension trainers",
    "Yoga and stretching: mats, blocks, straps, foam rollers",
    "Technology: sound system, TVs, check-in software, security cameras"
  ];

  const insuranceTypes = [
    {
      type: "General Liability Insurance",
      description: "Essential protection against injury claims and property damage - critically important for fitness businesses.",
      priority: "Required"
    },
    {
      type: "Workers' Compensation",
      description: "Mandatory coverage for employee injuries if you have staff members on payroll.",
      priority: "Required if hiring"
    },
    {
      type: "Professional Liability",
      description: "Protects against claims of negligence or inadequate instruction from personal training services.",
      priority: "Recommended"
    },
    {
      type: "Property Insurance",
      description: "Covers damage to your equipment, facility, and business property from various risks.",
      priority: "Recommended"
    }
  ];

  const toolsResources = [
    {
      category: "Project Management",
      tools: "Asana, Trello, Monday.com, Basecamp"
    },
    {
      category: "File Collaboration",
      tools: "Google Workspace, Dropbox, Microsoft OneDrive"
    },
    {
      category: "Social Media Management",
      tools: "Buffer, Hootsuite, Later, Sprout Social"
    },
    {
      category: "Email Marketing",
      tools: "Mailchimp, ConvertKit, Constant Contact"
    },
    {
      category: "CRM & Member Management",
      tools: "Mindbody, Zen Planner, Glofox, Pike13"
    },
    {
      category: "Website Creation",
      tools: "Squarespace, Wix, WordPress, Webflow"
    },
    {
      category: "Analytics & SEO",
      tools: "Google Analytics, SEMrush, Ahrefs, Moz"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
<header className="relative bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-600 text-white overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg")'
    }}
  ></div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

    <div className="flex items-center justify-center mb-6">
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
        <Dumbbell className="w-8 h-8 md:w-8 md:h-8" />
      </div>
    </div>

    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
      Launch Your Gym or Personal Training Business
    </h1>

    <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto mb-8 leading-relaxed">
      A comprehensive guide to building a successful fitness enterprise from the ground up
    </p>

    <button
      onClick={() => {
        setSelectedBusinessType('');
        setIsModalOpen(true);
      }}
      className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition"
    >
      Get Started Now
    </button>

  </div>
</header>

<section className="bg-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Start a Fitness Business: Build a Profitable Gym or Personal Training Brand
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Looking to turn your passion for fitness into a successful business? Whether you’re planning to open a gym, 
            launch a personal training service, or build a health-focused brand, the fitness industry offers massive growth 
            opportunities. With the right strategy, planning, and execution, you can create a scalable and sustainable business.
          </p>
        </div>

        {/* INTRO GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-slate-600">
            <p>
              The fitness industry continues to expand rapidly, driven by increasing health awareness and demand for 
              personalized training services. From boutique gyms to online coaching platforms, there are multiple 
              business models to explore based on your budget and target audience.
            </p>

            <p>
              Choosing the right niche, understanding your customers, and creating a strong marketing strategy are 
              essential steps toward building a successful fitness brand in today’s competitive market.
            </p>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <p className="font-medium text-slate-800">
                💡 Over 1,000,000+ entrepreneurs have successfully launched their businesses with structured guidance and planning.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6">
              What You’ll Learn in This Guide
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">

              {[
                "Fitness industry trends & statistics",
                "Choosing the right business structure",
                "Ideas for gym & fitness businesses",
                "Validating your business concept",
                "Creating a solid business plan",
                "Best tools & software for fitness businesses",
                "Setup: location, staff, equipment & permits",
                "Taxes, funding & financial planning",
                "How to know if this business is right for you"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1" />
                  <span>{item}</span>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Ready to Launch Your Fitness Business?
            </h3>
            <p className="text-white/90">
              Follow a proven step-by-step approach to build, grow, and scale your fitness brand successfully.
            </p>
          </div>

          <button onClick={() => {
        setSelectedBusinessType('');
        setIsModalOpen(true);
      }} className="bg-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
            Get Started Today
          </button>
        </div>

      </div>
    </section>

      {/* Industry Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Why Enter the Fitness Industry?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The fitness sector demonstrates remarkable growth with expanding opportunities for entrepreneurs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <BarChart3 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strong Market Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                U.S. fitness revenues jumped from $26B to $27.5B between 2015-2016, with consistent annual growth of 4-7%.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Building2 className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Established Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 40,000 fitness facilities operate nationwide, creating a proven business model with clear demand.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Users className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Massive Customer Base</h3>
              <p className="text-gray-600 leading-relaxed">
                More than 60 million Americans hold gym memberships, with numbers continuing to rise each year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Zap className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diverse Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Boutique studios and budget gyms are gaining popularity, creating multiple niches to explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Types of Fitness Businesses
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Choose the model that aligns with your expertise, passion, and market opportunity
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-300 transition-all hover:shadow-xl"
              >
                <div className="text-cyan-600 mb-4 transform group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This For You */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Is This Business Right For You?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Understanding daily responsibilities and required skills will help you determine if this path suits you
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Daily Responsibilities</h3>
              </div>
              <ul className="space-y-4">
                {dailyTasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Essential Skills</h3>
              </div>
              <ul className="space-y-4">
                {essentialSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Steps */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <ClipboardCheck className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Validate Your Business Idea
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Test your concept before investing significant time and capital
          </p>

          <div className="max-w-4xl mx-auto">
            {validationSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Build a Winning Gym Business Plan
          </h2>
          <p className="text-lg text-slate-600">
            Plan smarter, grow faster, and create a profitable fitness business with a structured roadmap.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE (STICKY INFO CARD) */}
          <div className="lg:sticky top-24 space-y-6">

            <div className="bg-white/70 backdrop-blur-xl border border-slate-200 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why You Need a Business Plan
              </h3>

              <p className="text-slate-600 leading-relaxed mb-4">
                A gym business involves operations, marketing, memberships, and financial planning. 
                A clear strategy ensures everything works together efficiently.
              </p>

              <p className="text-slate-600 leading-relaxed">
                It also helps you stay focused, reduce risks, and build a scalable fitness brand.
              </p>
            </div>

            {/* FINANCIAL CARD */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                Financial Planning Essentials
              </h3>

              <ul className="space-y-2 text-sm text-white/80">
                <li>• Member growth & retention</li>
                <li>• Pricing & revenue streams</li>
                <li>• Equipment & operational costs</li>
                <li>• Profit margins & scaling</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDE (TIMELINE STYLE) */}
          <div className="relative">

            {/* LINE */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"></div>

            <div className="space-y-10">

              {[
                "Executive summary with key highlights",
                "Business goals and long-term vision",
                "Detailed business description",
                "Market research and demand analysis",
                "Business structure and team setup",
                "Revenue and business model",
                "Marketing and sales strategy",
                "Financial projections and profit planning",
                "Supporting documents and appendices"
              ].map((item, index) => (

                <div key={index} className="relative flex items-start gap-6">

                  {/* DOT */}
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-cyan-600 text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* CARD */}
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition w-full">
                    <p className="text-slate-600 text-base leading-relaxed">
                      {item}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>

      {/* Business Structure */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Choose Your Business Structure
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Your legal structure impacts taxes, liability, and operational flexibility
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl shadow-2xl p-10 text-white mb-8">
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold mb-2">Recommended: Limited Liability Company (LLC)</h3>
                  <p className="text-cyan-100 text-lg">Fast, simple, and inexpensive to set up and maintain</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Shield className="w-8 h-8 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Asset Protection</h4>
                  <p className="text-cyan-50 text-sm">Shields personal assets from business liabilities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Zap className="w-8 h-8 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Easy Setup</h4>
                  <p className="text-cyan-50 text-sm">Quick formation with minimal paperwork</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <DollarSign className="w-8 h-8 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Tax Benefits</h4>
                  <p className="text-cyan-50 text-sm">Flexible tax treatment options</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Sole Proprietorship</h4>
                <p className="text-gray-600 mb-3">Simplest structure but offers no liability protection</p>
                <span className="text-sm text-red-600 font-semibold">⚠️ Not Recommended</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Partnership</h4>
                <p className="text-gray-600 mb-3">Shared ownership without personal asset protection</p>
                <span className="text-sm text-red-600 font-semibold">⚠️ Not Recommended</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">S Corporation</h4>
                <p className="text-gray-600 mb-3">More complex structure with additional requirements</p>
                <span className="text-sm text-amber-600 font-semibold">Consider for larger operations</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">C Corporation</h4>
                <p className="text-gray-600 mb-3">Most complex, typically unnecessary for fitness startups</p>
                <span className="text-sm text-amber-600 font-semibold">Only for large enterprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Setup */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Setting Up Operations
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Essential components to launch and run your fitness business effectively
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Location & Facility</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Easily accessible location with ample parking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Adequate square footage for equipment and movement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Proper flooring to handle equipment weight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Sufficient electrical capacity for equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Consider working with commercial real estate agents</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <Dumbbell className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Equipment Essentials</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                {equipmentNeeds.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Staffing Needs</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Personal trainers may operate solo initially</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Gym owners typically need front desk staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Certified fitness instructors for group classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Cleaning and maintenance personnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Consider part-time or contract workers to start</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <Laptop className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Technology & Marketing</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Software Systems</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Member management and billing software</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Class scheduling and booking systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Accounting and financial tracking tools</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Marketing Channels</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Professional website with online booking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Active social media presence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Email marketing campaigns and newsletters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Legal Requirements & Compliance
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Protect your business and operate within regulatory requirements
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-cyan-50 border-l-4 border-amber-500 rounded-xl p-8">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Licenses & Permits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Research local, state, and federal requirements for your area</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Obtain business licenses and zoning permits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Ensure trainers have proper certifications (NASM, ACE, ISSA, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Renew permits and licenses annually as required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-xl p-8">
              <div className="flex items-start">
                <DollarSign className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tax Obligations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>File federal and state income taxes annually</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Pay self-employment taxes (approximately 15.3%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Submit quarterly estimated tax payments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Allocate roughly one-third of earnings for taxes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Handle payroll taxes if you have employees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600 to-teal-600 px-8 py-6">
                <div className="flex items-center text-white">
                  <Shield className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Insurance Coverage</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  Comprehensive insurance protection is critical for fitness businesses due to injury risks and liability exposure.
                </p>
                <div className="space-y-6">
                  {insuranceTypes.map((insurance, index) => (
                    <div key={index} className="border-l-4 border-cyan-500 pl-6 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">{insurance.type}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          insurance.priority === 'Required' ? 'bg-red-100 text-red-700' :
                          insurance.priority === 'Required if hiring' ? 'bg-amber-100 text-amber-700' :
                          'bg-cyan-100 text-cyan-700'
                        }`}>
                          {insurance.priority}
                        </span>
                      </div>
                      <p className="text-gray-600">{insurance.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Maintenance */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <ClipboardCheck className="w-10 h-10 text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Ongoing Business Maintenance
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Regular administrative tasks to keep your business compliant and thriving
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">File Annual Reports</h3>
                </div>
                <p className="text-gray-600">State requirement to maintain good standing with your business entity.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Quarterly Tax Payments</h3>
                </div>
                <p className="text-gray-600">Submit estimated tax payments every quarter to avoid penalties.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Renew Licenses</h3>
                </div>
                <p className="text-gray-600">Keep all business permits, certifications, and licenses current.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Annual Tax Filing</h3>
                </div>
                <p className="text-gray-600">Prepare and file complete annual tax returns by deadlines.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Update Records</h3>
                </div>
                <p className="text-gray-600">Maintain accurate financial records and member documentation.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Review Insurance</h3>
                </div>
                <p className="text-gray-600">Annually review and update coverage as your business grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Laptop className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
            Essential Business Tools
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Recommended software and platforms to streamline your operations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {toolsResources.map((resource, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-3">
                  {index === 0 && <ClipboardCheck className="w-6 h-6 text-cyan-600 mr-2" />}
                  {index === 1 && <Share2 className="w-6 h-6 text-teal-600 mr-2" />}
                  {index === 2 && <Share2 className="w-6 h-6 text-cyan-600 mr-2" />}
                  {index === 3 && <Mail className="w-6 h-6 text-cyan-600 mr-2" />}
                  {index === 4 && <Users className="w-6 h-6 text-teal-600 mr-2" />}
                  {index === 5 && <Laptop className="w-6 h-6 text-cyan-600 mr-2" />}
                  {index === 6 && <BarChart3 className="w-6 h-6 text-cyan-600 mr-2" />}
                  <h3 className="font-bold text-gray-900">{resource.category}</h3>
                </div>
                <p className="text-gray-600 text-sm">{resource.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br text-center from-cyan-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Dumbbell className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Launch Your Fitness Business?
          </h2>
          <p className="text-xl md:text-2xl text-teal-50 mb-8 leading-relaxed">
            The fitness industry offers tremendous opportunity for passionate entrepreneurs. With proper planning, the right structure, and dedication to your members' success, you can build a thriving business that transforms lives while achieving your professional goals.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className='bg-white text-slate-900 font-bold px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors items-center justify-center'>
            Get Started Now
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
