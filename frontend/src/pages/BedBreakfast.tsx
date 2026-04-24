import { useState } from 'react'; 
import GetStartedModal from '../components/GetStartedModal';
import {
  Home,
  Briefcase,
  Heart,
  GraduationCap,
  Coffee,
  Building2,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Users,
  MessageCircle,
  FileText,
  DollarSign,
  Calendar,
  Lightbulb,
  Target,
  BarChart3,
  Mail,
  AlertCircle,
  ArrowRight,
  Bed,
  Globe,
  Laptop,
  Scale,
  Sofa,
  UtensilsCrossed
} from 'lucide-react';


export default function BedBreakfast() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

const businessTypes = [
  {
    icon: Home,
    title: 'Tourist Boutique Hotel',
    description: 'The classic B&B model catering to vacationers seeking local charm and authentic experiences. Focus on proximity to attractions, comfortable amenities, and insider knowledge of the area. Build partnerships with tourism boards and local businesses.'
  },
  {
    icon: Briefcase,
    title: 'Business Traveler Hub',
    description: 'Serve professionals visiting for work in urban locations. Prioritize convenient transportation access, workspace-equipped rooms, high-speed internet, and relaxation areas. Ideal for commercial districts and conference center areas.'
  },
  {
    icon: Heart,
    title: 'Romantic Retreat',
    description: 'Create intimate escapes for couples seeking special moments away from daily life. Offer luxurious accommodations, proximity to fine dining, champagne packages, spa amenities, and thoughtful romantic touches throughout.'
  },
  {
    icon: GraduationCap,
    title: 'College Town Lodging',
    description: 'Target families visiting students and prospective students touring campuses. Provide comfortable, affordable rooms near universities. Peak demand during orientation, homecoming, graduation, and college visit seasons.'
  },
  {
    icon: Coffee,
    title: 'Specialized Niche B&B',
    description: 'Differentiate with a unique angle like farm-to-table dining, wellness retreats, eco-friendly practices, pet-friendly accommodations, or specific dietary focuses. Ensure sufficient market demand before specializing.'
  },
  {
    icon: Building2,
    title: 'Short-Term Rental Platform',
    description: 'Leverage platforms like Airbnb for flexible hosting, especially if you have limited rooms. Benefit from built-in marketing, booking systems, and guest reviews while maintaining control over your property and pricing.'
  }
];

const validationSteps = [
  {
    icon: Target,
    title: 'Define Your Unique Value',
    description: 'Identify what makes your B&B exceptional. Is it your world-class service, gourmet breakfast creations, prime location, or distinctive ambiance? Your unique selling points will set you apart in a competitive market.'
  },
  {
    icon: BarChart3,
    title: 'Analyze Your Competition',
    description: 'Study other accommodations in your area to understand what they offer and where gaps exist. Competition validates demand, but you must offer something meaningfully different to attract guests.'
  },
  {
    icon: Users,
    title: 'Know Your Target Market',
    description: 'Research your ideal guests deeply. Understand their preferences, spending habits, where they discover accommodations, and what influences their booking decisions. This intelligence drives your entire strategy.'
  },
  {
    icon: MessageCircle,
    title: 'Interview Potential Guests',
    description: 'Have real conversations with people who match your target demographic. Understand their accommodation needs and ask if they would genuinely book your B&B at your proposed price point.'
  },
  {
    icon: TrendingUp,
    title: 'Join Industry Communities',
    description: 'Connect with established B&B owners through online forums, Facebook groups, and local hospitality associations. Learn from their experiences, challenges, and insights before investing significant capital.'
  }
];

const planComponents = [
  'Executive Summary highlighting key business points',
  'Vision, mission, and strategic objectives',
  'Detailed business description and background',
  'Market analysis and demand forecasting',
  'Organizational structure and management team',
  'Revenue model and pricing strategy',
  'Marketing and sales approach',
  'Financial projections and profitability timeline',
  'Risk assessment and mitigation strategies',
  'Supporting documents and appendices'
];

const structures = [
  {
    name: 'Sole Proprietorship',
    recommended: false,
    description: 'Default structure with no formal registration. Offers no legal protection between you and your business.',
    pros: ['Simple to start', 'Low cost'],
    cons: ['Personal liability for debts', 'No asset protection', 'Limited growth potential']
  },
  {
    name: 'Partnership',
    recommended: false,
    description: 'Formed when multiple people operate together without creating a legal entity. Limited liability protection.',
    pros: ['Easy to establish', 'Shared responsibilities'],
    cons: ['Partners personally liable', 'Potential for disputes', 'Shared control']
  },
  {
    name: 'Limited Liability Company (LLC)',
    recommended: true,
    description: 'Most popular choice for small businesses. Provides personal asset protection with simple setup and maintenance.',
    pros: ['Personal asset protection', 'Tax flexibility', 'Simple structure', 'Professional credibility'],
    cons: ['State filing fees', 'Annual requirements', 'Some administrative overhead']
  },
  {
    name: 'S Corporation',
    recommended: false,
    description: 'More complex structure with strict requirements. Generally unnecessary for most B&B operations.',
    pros: ['Tax advantages at scale', 'Stock structure'],
    cons: ['Complex requirements', 'Strict regulations', 'More expensive to maintain']
  },
  {
    name: 'C Corporation',
    recommended: false,
    description: 'Largest and most complex business structure. Far more than most hospitality entrepreneurs need.',
    pros: ['Unlimited growth potential', 'Easy to raise capital'],
    cons: ['Double taxation', 'Extensive regulations', 'High costs', 'Complex management']
  }
];

const communities = [
  {
    icon: Users,
    name: 'B&B Owners Association',
    description: 'Professional organization offering resources, education, and networking opportunities for bed and breakfast owners nationwide.',
    benefits: ['Annual conferences', 'Educational webinars', 'Industry research', 'Networking events']
  },
  {
    icon: MessageCircle,
    name: 'Innkeepers Forum',
    description: 'Active online community where B&B owners share experiences, solve problems, and offer advice on daily operations.',
    benefits: ['24/7 peer support', 'Real-world solutions', 'Industry trends', 'Best practices']
  },
  {
    icon: Globe,
    name: 'Hotel & Hospitality Groups',
    description: 'Facebook and LinkedIn groups connecting thousands of hospitality professionals for collaboration and support.',
    benefits: ['Social networking', 'Marketing tips', 'Vendor recommendations', 'Industry news']
  },
  {
    icon: Heart,
    name: 'Local Tourism Boards',
    description: 'Connect with your regional tourism organization for marketing support, referrals, and community partnerships.',
    benefits: ['Marketing exposure', 'Guest referrals', 'Local partnerships', 'Event promotion']
  }
];

const keyTakeaways = [
  'Define your unique B&B concept and validate market demand',
  'Create a comprehensive business plan with realistic financial projections',
  'Choose the right legal structure (LLC recommended for most)',
  'Secure proper insurance coverage to protect your investment',
  'Obtain all necessary licenses, permits, and certifications',
  'Invest in quality furnishings and equipment for guest satisfaction',
  'Implement efficient technology systems for operations',
  'Build relationships within the hospitality community',
  'Maintain ongoing compliance with tax and regulatory requirements',
  'Focus relentlessly on creating exceptional guest experiences'
];

const equipmentCategories = [
  {
    icon: Bed,
    title: 'Guest Room Essentials',
    items: [
      'Quality mattresses and box springs',
      'Luxury linens, pillows, and duvets',
      'Nightstands and reading lamps',
      'Comfortable seating or accent chairs',
      'Spacious closets with hangers',
      'Mirrors and adequate lighting',
      'Climate control systems',
      'Smart TVs and entertainment',
      'Work desks and ergonomic chairs',
      'Blackout curtains or blinds',
      'Luggage racks and storage',
      'Premium toiletries and towels'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen & Dining',
    items: [
      'Commercial-grade appliances',
      'Cookware and bakeware sets',
      'Professional cutlery',
      'Dishware and glassware sets',
      'Coffee makers and tea service',
      'Dining tables and chairs',
      'Buffet serving stations',
      'Food storage containers',
      'Small appliances (toasters, blenders)',
      'Commercial dishwasher',
      'Refrigerator and freezer units',
      'Food preparation surfaces'
    ],
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Sofa,
    title: 'Common Areas',
    items: [
      'Comfortable lounge seating',
      'Reading nooks with good lighting',
      'Decorative elements and artwork',
      'Bookshelves and reading materials',
      'Board games and entertainment',
      'Outdoor furniture and seating',
      'Garden and patio equipment',
      'Fire pit or outdoor heating',
      'Ambient lighting solutions',
      'Sound systems for atmosphere',
      'Welcome desk or reception area',
      'Guest information displays'
    ],
    color: 'from-purple-500 to-purple-600'
  }
];


const maintenanceTasks = [
  {
    task: 'File Annual Report',
    frequency: 'Annually',
    description: 'Submit your annual report to the state detailing any major business changes. This keeps your business in good legal standing.',
    timing: 'Due date varies by state'
  },
  {
    task: 'Pay Estimated Taxes',
    frequency: 'Quarterly',
    description: 'Make estimated tax payments based on projected annual earnings to avoid penalties and interest charges.',
    timing: 'April, June, September, January'
  },
  {
    task: 'Renew Licenses & Permits',
    frequency: 'Annually',
    description: 'Review and renew all business licenses, health permits, and operational certifications before expiration.',
    timing: 'Track individual renewal dates'
  },
  {
    task: 'Prepare Tax Documentation',
    frequency: 'Annually',
    description: 'Compile financial records, receipts, and documentation. Work with your accountant to prepare complete tax returns.',
    timing: 'January - March'
  },
  {
    task: 'File Tax Returns',
    frequency: 'Annually',
    description: 'Submit federal and state tax returns by the deadline, including all required schedules and supporting forms.',
    timing: 'April 15 (or extended deadline)'
  },
  {
    task: 'Process Payroll Taxes',
    frequency: 'Ongoing',
    description: 'If you have employees, withhold and remit payroll taxes according to federal and state requirements.',
    timing: 'Bi-weekly or monthly'
  },
  {
    task: 'Collect & Remit Sales Tax',
    frequency: 'Monthly/Quarterly',
    description: 'Calculate and pay occupancy tax and sales tax on taxable services and products.',
    timing: 'Based on your state requirements'
  }
];

const operationalAreas = [
  {
    icon: MapPin,
    title: 'Location Selection',
    description: 'Your property location is your most critical decision. Choose a space large enough for your planned room count with occupancy rates that ensure profitability. Consider living on-site to reduce costs and provide immediate guest support. Select an area that matches your target demographic and offers enough distance from direct competitors.',
    color: 'bg-blue-500'
  },
  {
    icon: Mail,
    title: 'Marketing Strategy',
    description: 'Build a strong online presence starting with a professional website. Establish your brand across social media platforms and email marketing campaigns. Leverage review sites like TripAdvisor and Google Reviews. Partner with travel agencies and list on booking platforms. Invest in digital advertising and search engine optimization to attract your ideal guests.',
    color: 'bg-purple-500'
  },
  {
    icon: Laptop,
    title: 'Systems & Technology',
    description: 'Implement robust software solutions to streamline operations. Use property management systems for bookings, channel managers for distribution, accounting software for finances, and communication tools for guest interactions. The right technology stack dramatically improves efficiency and guest satisfaction.',
    color: 'bg-cyan-500'
  },
  {
    icon: Users,
    title: 'Staffing Plan',
    description: 'Start by handling operations yourself to understand every aspect of your business. As you grow, strategically hire for housekeeping, breakfast preparation, front desk management, and maintenance. Consider part-time staff for flexibility during peak seasons. Invest in training to ensure consistent, exceptional service.',
    color: 'bg-cyan-500'
  },
  {
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Establish a dedicated business bank account from day one. Consider a business credit card for expense management and building credit. Implement meticulous bookkeeping practices and work with an accountant familiar with hospitality businesses. Plan for quarterly tax payments and maintain emergency reserves for unexpected expenses.',
    color: 'bg-rose-500'
  }
];

const regulatoryAreas = [
  {
    icon: Scale,
    title: 'Licenses & Permits',
    description: 'Research and obtain all required permits at local, state, and federal levels.',
    items: [
      'Business operating license',
      'Food service permits',
      'Health department certification',
      'Fire safety inspection approval',
      'Zoning compliance verification',
      'Occupancy permits',
      'Liquor license (if applicable)'
    ]
  },
  {
    icon: DollarSign,
    title: 'Tax Obligations',
    description: 'Stay compliant with multiple tax requirements specific to hospitality businesses.',
    items: [
      'Federal income tax',
      'State income tax',
      'Self-employment tax',
      'Hotel occupancy tax',
      'Sales and use tax',
      'Property taxes',
      'Payroll taxes (if applicable)'
    ]
  }
];

const tools = [
  {
    title: "Project Management",
    tools: [
      { name: "Asana", link: "https://asana.com" },
      { name: "Trello", link: "https://trello.com" },
      { name: "Basecamp", link: "https://basecamp.com" }
    ]
  },
  {
    title: "Marketing & Automation",
    tools: [
      { name: "HubSpot", link: "https://hubspot.com" },
      { name: "Mailchimp", link: "https://mailchimp.com" }
    ]
  },
  {
    title: "Communication",
    tools: [
      { name: "Slack", link: "https://slack.com" },
      { name: "Skype", link: "https://skype.com" }
    ]
  },
  {
    title: "CRM & Sales",
    tools: [
      { name: "Salesforce", link: "https://salesforce.com" },
      { name: "Zoho CRM", link: "https://zoho.com/crm" }
    ]
  },
  {
    title: "Website & CMS",
    tools: [
      { name: "WordPress", link: "https://wordpress.org" },
      { name: "Wix", link: "https://wix.com" }
    ]
  },
  {
    title: "SEO & Analytics",
    tools: [
      { name: "Google Analytics", link: "https://analytics.google.com" },
      { name: "Ahrefs", link: "https://ahrefs.com" },
      { name: "SEMrush", link: "https://semrush.com" }
    ]
  }
];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="Bed and Breakfast Business Setup"
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/20"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-12">
    <div className="max-w-6xl">

      {/* Badge */}
      <div className="flex items-center space-x-3 mb-2">
        <div className="bg-cyan-500/10 p-3 rounded-xl">
          <Home className="h-8 w-8 text-cyan-400" />
        </div>
        <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">
          Hospitality Business Guide
        </span>
      </div>

      {/* SEO Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-xl mb-4">
        How to Start a Profitable
        <span className="block text-cyan-400 mt-2">
          Bed & Breakfast Business
        </span>
      </h1>

      {/* SEO Description */}
      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
        Learn how to start a successful bed and breakfast business with expert guidance.
        From planning and licensing to guest experience and marketing, build a
        profitable hospitality business and create memorable stays for travelers.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">

        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="group bg-cyan-500 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl"
        >
          <span>Start Your B&B Business</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-md border border-white/20">
          Explore Business Guide
        </button>

      </div>

      {/* Trust Indicators (SEO + UX Boost) */}
      <div className="flex items-center gap-6 mt-10 text-sm text-slate-400">
        <span>✔ Step-by-Step Guide</span>
        <span>✔ Business Setup Tips</span>
        <span>✔ Marketing Strategies</span>
      </div>

    </div>
  </div>

  
</section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Your Journey into Hospitality Excellence
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            The travel industry continues to flourish, and boutique accommodations are more popular than ever. Now is the perfect time to create a unique lodging experience that stands out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Beautiful bed and breakfast interior"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="h-10 w-10 text-cyan-500" />
              <h3 className="text-2xl font-bold text-slate-900">Where Do You Begin?</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Starting a bed and breakfast requires careful planning and execution. You need to define your unique vision, streamline operations, and connect with your ideal guests effectively.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We've helped over one million entrepreneurs launch successful businesses since 2004. Our expertise in the hospitality sector has guided countless B&B owners from concept to opening day and beyond.
            </p>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">This comprehensive guide covers:</span> Market validation, business planning, legal structures, operational setup, marketing strategies, and ongoing management practices to ensure your success.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-cyan-500 mb-2">$100K+</div>
            <p className="text-slate-600">Average Annual Revenue Potential</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-cyan-500 mb-2">70%</div>
            <p className="text-slate-600">Average Occupancy Rate</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-cyan-500 mb-2">24/7</div>
            <p className="text-slate-600">Guest Experience Focus</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Choose Your B&B Direction
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every successful bed and breakfast starts with a clear vision. Explore these popular models to find the perfect fit for your goals and location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="bg-cyan-100 rounded-lg p-4 w-fit mb-6">
                <type.icon className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{type.title}</h3>
              <p className="text-slate-600 leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Validate Your Business Concept
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A strong foundation starts with thorough validation. Take these essential steps to ensure your B&B concept has real market potential before making major investments.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {validationSteps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 items-start bg-slate-50 rounded-xl p-8 hover:bg-slate-100 transition-colors duration-300"
            >
              <div className="bg-cyan-500 rounded-lg p-4 flex-shrink-0">
                <step.icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-cyan-50 border-2 border-amber-200 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-6">
            <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Embrace the Learning Process</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Most successful entrepreneurs don't get their first idea right. It's completely normal to refine, pivot, or even completely change your concept as you gather more information.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The key is to validate honestly and thoroughly before committing major time and resources. Ask tough questions and be willing to hear answers that might redirect your path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-12 w-12 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-lg">Strategic Planning</span>
            </div>

            <h2 className="text-5xl font-extrabold mb-6">
              Craft a Solid Business Plan
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A comprehensive business plan is essential for your B&B success. With startup costs potentially exceeding $100,000, you need a detailed roadmap that covers all critical aspects of your venture.
            </p>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Why You Need a Business Plan:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Secure financing from banks and investors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Clarify your strategy and decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Set measurable goals and milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Identify potential challenges before they arise</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Essential Plan Components</h3>
              <div className="space-y-4">
                {planComponents.map((component, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 bg-slate-50 rounded-lg hover:bg-cyan-50 transition-colors duration-300"
                  >
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 leading-relaxed pt-1">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     <section className="py-16 bg-[#f8fafc]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-5xl mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
          <Building2 className="h-6 w-6 text-cyan-600" />
        </div>
        <span className="text-sm font-medium text-cyan-600 tracking-wide uppercase">
          Business Setup
        </span>
      </div>

      <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mb-2">
        Establish Your Business with the Right Legal Structure
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Your business structure defines liability, taxation, and scalability. 
        Selecting the right one ensures long-term stability and operational efficiency.
      </p>
    </div>

    {/* Cards */}
    <div className="space-y-6">
      {structures.map((structure, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
            structure.recommended
              ? 'border-slate-200'
              : 'border-slate-200'
          }`}
        >
          {/* Accent Line */}
          
          <div className="grid md:grid-cols-3 gap-10">

            {/* Left Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-cyan-600">
                  {structure.name}
                </h3>

                {structure.recommended && (
                  <span className="text-xs font-medium bg-cyan-600 text-white px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}
              </div>

              <p className="text-slate-600 leading-relaxed">
                {structure.description}
              </p>
            </div>

            {/* Advantages */}
            <div>
              <h4 className="text-sm font-bold text-cyan-600 mb-4 tracking-wide uppercase">
                Advantages
              </h4>

              <ul className="space-y-3">
                {structure.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-slate-900" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Considerations */}
            <div>
              <h4 className="text-sm font-bold text-cyan-600 mb-4 tracking-wide uppercase">
                Considerations
              </h4>

              <ul className="space-y-3">
                {structure.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <AlertCircle className="h-4 w-4 mt-1 text-slate-400" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* Bottom Insight */}
    <div className="mt-8 border-t border-slate-200 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
      <div className="max-w-2xl">
        <h3 className="text-xl font-bold text-cyan-600 mb-2">
          Expert Insight
        </h3>
        <p className="text-slate-600">
          Most modern businesses prefer an LLC structure for its balance of liability protection 
          and operational flexibility. Always evaluate based on your long-term vision.
        </p>
      </div>

      <a href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition">
        Get Consultation
        <ArrowRight className="h-4 w-4" />
      </a>

    </div>

  </div>
</section>

     <section className="py-16 bg-cyan-100/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Setting Up Operations
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Once your business is legally established, focus on these operational fundamentals to create a smooth-running, profitable B&B.
          </p>
        </div>

        <div className="grid gap-8">
          {operationalAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`${area.color} rounded-xl p-6 flex items-center justify-center flex-shrink-0 w-fit h-fit`}>
                  <area.icon className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Pro Tip: Start Lean, Scale Smart</h3>
          <p className="text-xl leading-relaxed opacity-95">
            Many successful B&B owners begin by managing everything themselves. This hands-on approach helps you understand your business intimately, control costs, and make informed decisions about when and where to invest in help. Scale your operations gradually as revenue and demand grow.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Essential Equipment & Furnishings
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Create an exceptional guest experience with carefully selected equipment and furnishings. Quality investments in these areas directly impact guest satisfaction and reviews.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {equipmentCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <category.icon className="h-10 w-10 mb-4" />
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Investment Considerations</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Quality furnishings and equipment represent a significant upfront investment, but they pay dividends through guest satisfaction, positive reviews, and reduced replacement costs.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Budget $10,000-$20,000 per room for complete furnishings, with additional costs for common areas and kitchen equipment. Consider financing options or phased purchasing for better cash flow management.
            </p>
          </div>
        </div>
      </div>
    </section>


     <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Regulations & Tax Requirements
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Navigate the complex landscape of hospitality regulations and maintain good standing with proper licensing and tax compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {regulatoryAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200"
            >
              <div className="bg-blue-500 rounded-xl p-4 w-fit mb-6">
                <area.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{area.description}</p>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-8 w-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-slate-900">Tax Planning Strategy</h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Set aside 33-40% of your earnings for tax obligations. Make quarterly estimated tax payments in April, June, September, and January to avoid penalties.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Work with a tax professional familiar with hospitality businesses to maximize deductions and stay compliant.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">Permit Timeline</h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Start your licensing and permit process 3-6 months before your planned opening. Some permits require inspections and can take weeks to process.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Many permits require annual renewal, so maintain a calendar of important dates and deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>

      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-cyan-500 rounded-full p-4">
              <Calendar className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold mb-6">
            Ongoing Compliance & Maintenance
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Keep your B&B in good standing with regular administrative tasks and compliance requirements. Stay organized to avoid penalties and maintain smooth operations.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {maintenanceTasks.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.task}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:text-right flex-shrink-0">
                  <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg font-semibold border border-cyan-500/30">
                    {item.frequency}
                  </span>
                  <span className="text-slate-400 text-sm">{item.timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 border border-blue-500">
          <div className="flex items-start gap-6">
            <FileText className="h-12 w-12 text-white flex-shrink-0" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Organized with a Compliance Calendar</h3>
              <p className="text-xl leading-relaxed mb-4 opacity-95">
                Create a master calendar with all deadlines, renewal dates, and recurring obligations. Set reminders 30 days in advance to give yourself plenty of time to prepare.
              </p>
              <p className="text-lg opacity-90">
                Consider using accounting software or working with a bookkeeper to automate tracking and ensure nothing falls through the cracks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Join the B&B Community
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Connect with fellow hospitality entrepreneurs who understand your challenges and celebrate your successes. The B&B community is supportive, generous, and eager to help newcomers thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {communities.map((community, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl p-4 w-fit mb-6">
                <community.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">{community.name}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{community.description}</p>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {community.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-6">Learn From Those Who've Been There</h3>
            <p className="text-xl leading-relaxed mb-6 opacity-95">
              Experienced B&B owners are remarkably generous with their knowledge. Don't hesitate to ask questions, seek advice, and learn from others' mistakes and successes.
            </p>
            <p className="text-lg opacity-90">
              The relationships you build in these communities often become invaluable resources for troubleshooting challenges, discovering opportunities, and staying motivated through the ups and downs of entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-cyan-100/40">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-6xl mb-8">
      <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
        Essential Tools to Run & Grow Your Business
      </h2>
      <p className="text-lg text-slate-600">
        Discover industry-leading tools to manage operations, marketing, and customer relationships more efficiently.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-8">

      {tools.map((category, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition-all duration-300 bg-white"
        >

          {/* Category Title */}
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-cyan-600">
              {category.title}
            </h3>
            <span className="text-xs text-slate-400 uppercase tracking-wide">
              {category.tools.length} tools
            </span>
          </div>

          

          {/* Tools with Links */}
          <div className="flex flex-wrap gap-3">
            {category.tools.map((tool, i) => (
              <a
                key={i}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-3 py-1.5 text-sm bg-cyan-100/50 text-slate-700 rounded-md transition hover:bg-slate-200"
              >
                <span className="border-b border-transparent group-hover:border-slate-400 transition">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>

        </div>
      ))}

    </div>

    {/* Bottom CTA */}
    <div className="mt-20 border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-600 max-w-xl">
        The right tools simplify your workflow and help you scale faster with less effort.
      </p>

      <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition">
        Explore More Resources
      </button>
    </div>

  </div>
</section>

     <section className="py-16 bg-gradient-to-br from-cyan-500 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border-2 border-white/30">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-5xl font-extrabold mb-6">
              Your B&B Journey Starts Now
            </h2>

            <p className="text-2xl leading-relaxed opacity-95 mb-8">
              The bed and breakfast industry offers a unique opportunity to combine your passion for hospitality with entrepreneurial success. Create memorable experiences while building a sustainable, rewarding business.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Essential Steps Recap</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {keyTakeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg leading-relaxed opacity-95">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold mb-6">Ready to Welcome Your First Guests?</h3>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                With careful planning, dedication, and passion for hospitality, you can build a thriving B&B that delights guests and provides the lifestyle and income you desire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="group bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Start Your Business Today</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Download Complete Guide
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-90">
              Success in the B&B industry comes from combining excellent hospitality, smart business practices, and genuine care for your guests. We wish you tremendous success on this exciting journey.
            </p>
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
  );
}
