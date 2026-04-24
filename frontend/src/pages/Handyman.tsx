import { useState, useEffect } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  Wrench,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  FileText,
  DollarSign,
  Shield,
  Home,
  Truck,
  Briefcase,
  Calendar,
  Paintbrush,
  Droplet,
  Zap,
  Trees,
  Hammer,
  Store,
  MessageSquare,
  Search,
  UserCheck,
  MapPin,
  Laptop,
  CreditCard,
  UserPlus,
  Settings,
  ClipboardCheck,
  FileCheck,
  Scale,
  Building,
  AlertCircle
} from 'lucide-react';

export default function Handyman() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'types', 'validation', 'business-plan', 'structure', 'operations', 'regulations', 'insurance', 'tools'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-gradient-to-br text-center from-cyan-500 via-cyan-600 to-slate-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-extrabold">
                How to Start a Home Handyman Business
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-cyan-50 mb-8 leading-relaxed">
              If you have skill with home improvement, DIY repairs, or fixing things, running a home handyman business could be the perfect path to financial independence. This comprehensive guide walks you through every step of launching and growing a profitable handyman company.
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-50 transition-all shadow-2xl transform hover:scale-105">
              Start Your Business Today
            </button>
          </div>
        </div>
      </header>

      <nav className="sticky top-33 z-40 bg-white border-b border-gray-200 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 text-sm font-medium">
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, 'overview')}
              className={`whitespace-nowrap transition ${
                activeSection === 'overview'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Overview
            </a>
            <a
              href="#types"
              onClick={(e) => handleNavClick(e, 'types')}
              className={`whitespace-nowrap transition ${
                activeSection === 'types'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Business Types
            </a>
            <a
              href="#validation"
              onClick={(e) => handleNavClick(e, 'validation')}
              className={`whitespace-nowrap transition ${
                activeSection === 'validation'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Validation
            </a>
            <a
              href="#business-plan"
              onClick={(e) => handleNavClick(e, 'business-plan')}
              className={`whitespace-nowrap transition ${
                activeSection === 'business-plan'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Business Plan
            </a>
            <a
              href="#structure"
              onClick={(e) => handleNavClick(e, 'structure')}
              className={`whitespace-nowrap transition ${
                activeSection === 'structure'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Legal Structure
            </a>
            <a
              href="#operations"
              onClick={(e) => handleNavClick(e, 'operations')}
              className={`whitespace-nowrap transition ${
                activeSection === 'operations'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Operations
            </a>
            <a
              href="#regulations"
              onClick={(e) => handleNavClick(e, 'regulations')}
              className={`whitespace-nowrap transition ${
                activeSection === 'regulations'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Regulations
            </a>
            <a
              href="#insurance"
              onClick={(e) => handleNavClick(e, 'insurance')}
              className={`whitespace-nowrap transition ${
                activeSection === 'insurance'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Insurance
            </a>
            <a
              href="#tools"
              onClick={(e) => handleNavClick(e, 'tools')}
              className={`whitespace-nowrap transition ${
                activeSection === 'tools'
                  ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Tools
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section id="overview" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Why Start a Handyman Business?</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Demand Vocational Skills</h3>
                  <p className="text-gray-600">Handyman services demand vocational skills that relatively few people possess, ensuring consistent work flow and strong earning potential for qualified professionals.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Recession-Resistant Industry</h3>
                  <p className="text-gray-600">Home repairs and maintenance remain essential services regardless of economic conditions. High-quality handyman work continues to be in demand even during economic downturns.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <Users className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Build a Strong Local Reputation</h3>
                  <p className="text-gray-600">Satisfied customers become loyal advocates. A handyman business thrives on word-of-mouth referrals and repeat business, creating a self-sustaining growth cycle.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <Shield className="w-10 h-10 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Resistant to Automation</h3>
                  <p className="text-gray-600">Hands-on home repair and maintenance work requires physical dexterity, problem-solving judgment, and craftsmanship that technology cannot easily replicate or replace.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl p-8 border border-cyan-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn in This Guide</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Types of handyman businesses and services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Choosing the optimal legal business structure</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Validating your handyman business concept</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Finding industry communities and mentors</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Licenses, permits, and trade certifications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Local marketing and customer acquisition</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Financial planning and self-employment taxes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Essential software tools for contractors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="types" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Types of Handyman Businesses</h2>
              <p className="text-xl text-gray-600 mb-12">Choose your specialization based on your existing skills, interests, and local market demand.</p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Wrench className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">General Repairs and Maintenance</h3>
                      <p className="text-gray-600 mb-4">
                        The most accessible entry point for new handyman entrepreneurs. Services include repainting, drywall repairs, flooring fixes, touch-up work, caulking, and general home upkeep. Ideal for versatile professionals who enjoy varied daily work and building long-term relationships with homeowners and property managers.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Low Barrier to Entry</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Consistent Demand</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <Paintbrush className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Painting and Decorating</h3>
                      <p className="text-gray-600 mb-4">
                        A popular specialization with a relatively lower skill barrier compared to licensed trades. Services include interior and exterior painting, wallpaper installation, cabinet refinishing, and decorative finishes. Offers high profit margins with modest startup equipment costs and year-round demand.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Creative Outlet</span>
                        <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">High Profit Margins</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 rounded-lg p-3">
                      <Droplet className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Plumbing and HVAC Services</h3>
                      <p className="text-gray-600 mb-4">
                        Among the highest-paid trades in the handyman industry, requiring formal qualifications and licensing in most jurisdictions. Plumbers and HVAC technicians command premium service rates due to the technical expertise, certification requirements, and critical nature of water, heating, and cooling systems.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">Premium Rates</span>
                        <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">Formal Qualifications Required</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 rounded-lg p-3">
                      <Zap className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Electrician Services</h3>
                      <p className="text-gray-600 mb-4">
                        Electrical work is always in high demand and commands strong pay rates, but requires proper licensing, training, and insurance. Services range from simple fixture installations and outlet replacements to complete home rewiring, panel upgrades, and safety inspections.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">High Demand</span>
                        <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Licensing Required</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <Trees className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Landscaping and Yard Maintenance</h3>
                      <p className="text-gray-600 mb-4">
                        Outdoor property care encompasses lawn mowing, pruning, landscape design, hardscaping, irrigation system installation, and seasonal maintenance. This niche offers excellent recurring revenue potential with residential and commercial clients who require regular service throughout the year.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Recurring Revenue</span>
                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Year-Round Opportunity</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 rounded-lg p-3">
                      <Hammer className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Kitchens, Cabinets and Carpentry</h3>
                      <p className="text-gray-600 mb-4">
                        Woodworking and carpentry specialization covers cabinet installation, custom shelving, kitchen remodels, trim work, and furniture building. Project sizes vary widely from quick repairs to extensive renovations, allowing you to scale your workload and revenue based on capacity and client needs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">Custom Projects</span>
                        <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">High Skill Premium</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-lg p-3">
                      <Store className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Franchise Opportunities</h3>
                      <p className="text-gray-600 mb-4">
                        For those seeking a structured entry into the handyman industry, established franchise brands offer proven systems, national marketing support, comprehensive training programs, and operational guidance. You pay franchise fees and royalties in exchange for reduced startup risk and immediate brand recognition.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Proven Business Model</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Built-In Brand Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <Home className="w-8 h-8 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Other Specialty Areas</h3>
                      <p className="text-gray-600 mb-4">
                        Numerous additional niches offer strong income potential, including flooring installation and refinishing, bathroom renovations, insulation upgrades, fencing installation and repair, gutter cleaning and installation, and deck building. Specializing in underserved niches can dramatically reduce local competition.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Niche Opportunities</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Less Competition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="validation" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Validate Your Handyman Business Idea</h2>
              <p className="text-xl text-gray-600 mb-12">Before committing significant time and capital, test your concept in the real local market to confirm demand.</p>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-cyan-500">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Identify Your Unique Selling Points (USPs)</h3>
                      <p className="text-gray-600 mb-4">
                        What separates your handyman business from competitors? Your unique selling proposition might be eco-friendly materials, 24/7 emergency availability, expertise with historic homes, senior-accessible modifications, or simply an exceptional commitment to punctuality and cleanliness. Clearly defined USPs help you attract your ideal customers.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Identify what you do better than local competitors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Determine which customer segment benefits most from your skills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Craft a clear, memorable brand message around your strengths</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <Search className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Research Local Competitors</h3>
                      <p className="text-gray-600 mb-4">
                        Thorough competitor research is critical before entering any market. Healthy competition validates that demand exists, but oversaturation makes customer acquisition costly and difficult. Analyze local competitors' service offerings, pricing structures, customer reviews, and marketing approaches to identify gaps you can fill.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Search Google, Yelp, Thumbtack, and Angi for local handymen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Read customer reviews to uncover service gaps and complaints</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Identify underserved specialties or neighborhoods in your area</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Understand Your Target Market</h3>
                      <p className="text-gray-600 mb-4">
                        Knowing exactly who needs your services shapes every business decision. Are you targeting busy dual-income homeowners, elderly residents who need accessibility modifications, residential property managers, or real estate investors preparing homes for sale? Understanding your ideal client informs your pricing, marketing, and service offerings.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Define clear demographic and geographic target profiles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Understand their recurring pain points and unmet needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Research how they search for and hire home service professionals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Talk Directly to Potential Customers</h3>
                      <p className="text-gray-600 mb-4">
                        Direct conversations with potential clients provide invaluable, unfiltered feedback. Ask about their frustrations with current contractors, what they prioritize when hiring a handyman, acceptable price ranges, and whether they'd hire you specifically. Real conversations reveal insights that market research alone cannot provide.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Conduct 10–15 informal interviews with homeowners in your area</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Ask directly about their willingness to pay specific price points</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Request warm introductions to neighbors or friends who need services</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Engage with Industry Communities and Forums</h3>
                      <p className="text-gray-600 mb-4">
                        Connecting with experienced handyman professionals and contractors accelerates your learning curve enormously. Online forums, local trade associations, and contractor networking groups provide mentorship, practical advice, and real-world insights that can save you from costly early mistakes.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Join Contractor Talk Forums and DIY Chatroom home improvement communities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Attend local contractor and small business networking events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Find a mentor who has already built a successful handyman company</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="business-plan" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Create Your Handyman Business Plan</h2>
              <p className="text-xl text-gray-600 mb-8">A comprehensive business plan is your strategic roadmap, helping you think critically about every aspect of your business before investing resources.</p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  Why Every Handyman Needs a Business Plan
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether you're a solo operator or planning to build a team, a written business plan forces you to think critically about your target market, competition, pricing, financials, and growth strategy. It's not just for bank loans — it's your personal blueprint for making smart decisions and measuring progress toward your goals.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <p className="font-semibold text-gray-900 mb-1">Clarify Your Vision</p>
                    <p className="text-sm text-gray-600">Define your goals, services, and competitive strategy</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <p className="font-semibold text-gray-900 mb-1">Secure Business Funding</p>
                    <p className="text-sm text-gray-600">Required for SBA loans and equipment financing</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <p className="font-semibold text-gray-900 mb-1">Identify Risks Early</p>
                    <p className="text-sm text-gray-600">Anticipate challenges before they become costly problems</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <p className="font-semibold text-gray-900 mb-1">Track Business Progress</p>
                    <p className="text-sm text-gray-600">Measure actual results against your financial projections</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Business Plan Components</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Executive Summary</h4>
                  <p className="text-gray-600">A concise overview of your entire plan, covering your mission statement, core services, target market, and key financial highlights. Write this section last, even though it appears first in the document.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Goals and Objectives</h4>
                  <p className="text-gray-600">Define specific, measurable short-term and long-term goals for revenue, customer acquisition, service expansion, and geographic reach. Clear objectives help you prioritize decisions and track meaningful progress.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Business Description and Background</h4>
                  <p className="text-gray-600">Detail your handyman services, your professional background and trade expertise, your service area, and what makes your business uniquely valuable to homeowners and property managers in your market.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Market Analysis and Demand Assessment</h4>
                  <p className="text-gray-600">Research your local target market, estimate market size, analyze trends in home service demand, and evaluate your competitive landscape. Include customer persona descriptions and demographic data for your service area.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Organizational Structure Overview</h4>
                  <p className="text-gray-600">Your legal business structure (LLC, sole proprietorship, etc.), ownership details, and team structure if you plan to hire employees, apprentices, or subcontractors to handle overflow work.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">6. Business Model Explanation</h4>
                  <p className="text-gray-600">A comprehensive breakdown of your services, pricing strategy, how you'll deliver value to clients, and any service packages, maintenance contracts, or subscription offerings you plan to provide.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">7. Marketing and Sales Strategy</h4>
                  <p className="text-gray-600">How you will attract and retain customers through your website, Google Business Profile, local advertising, referral programs, social media presence, and community engagement strategies.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">8. Financial Projections and Profitability Analysis</h4>
                  <p className="text-gray-600">Startup costs, monthly operating expenses, revenue forecasts, profit margins, break-even analysis, and cash flow projections for the first one to three years of operations.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">9. Appendices</h4>
                  <p className="text-gray-600">Supporting documents such as sample service agreements, contractor licenses, insurance certificates, letters of intent from potential clients, and any other materials that support your business case.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="structure" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Choose Your Legal Business Structure</h2>
              <p className="text-xl text-gray-600 mb-12">The right business structure protects your personal assets, optimizes your tax situation, and establishes credibility with clients and suppliers.</p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <Building className="w-8 h-8 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sole Proprietorship</h3>
                      <p className="text-gray-600 mb-3">
                        The default structure when you begin working independently. Requires no formal setup, but creates no legal separation between your personal finances and your business, leaving your personal assets fully exposed.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="font-semibold text-red-900 mb-1 text-sm">Disadvantages</p>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• No personal liability protection</li>
                        <li>• Harder to raise capital or get loans</li>
                        <li>• Business ends if owner becomes incapacitated</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-1 text-sm">Advantages</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Free and easy to start immediately</li>
                        <li>• Simple pass-through tax filing</li>
                        <li>• Complete operational control</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Partnership</h3>
                      <p className="text-gray-600 mb-3">
                        Formed when two or more individuals operate a business together without formal incorporation. Partners share profits, responsibilities, and liabilities equally, including liability for each other's business actions.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="font-semibold text-red-900 mb-1 text-sm">Disadvantages</p>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Each partner liable for the other's decisions</li>
                        <li>• Risk of conflict and disagreements</li>
                        <li>• Profits divided between partners</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-1 text-sm">Advantages</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Shared workload and complementary expertise</li>
                        <li>• More combined capital to invest</li>
                        <li>• Simple and low-cost to establish</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-xl p-8 shadow-md border-2 border-cyan-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-cyan-500 rounded-lg p-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-semibold text-gray-900">Limited Liability Company (LLC)</h3>
                        <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">RECOMMENDED</span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        The ideal choice for most home handyman businesses. Fast, simple, and inexpensive to set up and maintain, the LLC protects your personal assets from business liabilities while providing pass-through taxation and operational flexibility.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1 text-sm">Disadvantages</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• State formation fees and annual fees apply</li>
                        <li>• More paperwork than a sole proprietorship</li>
                        <li>• State-specific regulations and requirements</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1 text-sm">Advantages</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Personal asset protection from lawsuits</li>
                        <li>• Flexible pass-through tax treatment</li>
                        <li>• Professional credibility with clients</li>
                        <li>• Easier to open a business bank account</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <Briefcase className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">S Corporation</h3>
                      <p className="text-gray-600 mb-3">
                        A special IRS tax designation available to eligible LLCs and corporations. Can offer meaningful self-employment tax savings for higher-earning handyman businesses, but comes with strict IRS requirements and additional administrative complexity.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="font-semibold text-red-900 mb-1 text-sm">Disadvantages</p>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Strict IRS shareholder and income requirements</li>
                        <li>• Must run formal payroll for owners</li>
                        <li>• Significantly more complex accounting needed</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-1 text-sm">Advantages</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Potential self-employment tax savings</li>
                        <li>• Personal liability protection maintained</li>
                        <li>• Enhanced professional credibility</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <Building className="w-8 h-8 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">C Corporation</h3>
                      <p className="text-gray-600 mb-3">
                        A fully separate legal entity with the most complex structure and regulatory requirements. Generally unnecessary and overly burdensome for home handyman operations unless you are planning significant multi-state expansion or seeking outside investment.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="font-semibold text-red-900 mb-1 text-sm">Disadvantages</p>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Double taxation on profits and dividends</li>
                        <li>• Extensive ongoing record-keeping required</li>
                        <li>• High formation and maintenance costs</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-1 text-sm">Advantages</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Unlimited shareholders allowed</li>
                        <li>• Easier to raise significant outside capital</li>
                        <li>• Perpetual existence regardless of ownership</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-cyan-600" />
                  Our Recommendation
                </h3>
                <p className="text-gray-700">
                  For most home handyman businesses, an <strong>LLC provides the ideal balance of personal protection, simplicity, and tax flexibility</strong>. It shields your personal assets from business liabilities, keeps tax filing straightforward, and establishes professional credibility with homeowners and property managers who prefer insured, formally structured contractors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="operations" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Set Up Your Handyman Business Operations</h2>
              <p className="text-xl text-gray-600 mb-12">Get the practical operational foundations in place to run your handyman company smoothly and profitably from day one.</p>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <MapPin className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Business Location and Workspace</h3>
                      <p className="text-gray-600 mb-4">
                        Most home handyman businesses operate administrative functions from a home office, keeping overhead low in the early stages. Depending on your services, you may need dedicated workshop or storage space for materials, pre-built items, and larger equipment.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Home Office:</strong> Deduct a portion of rent, mortgage interest, utilities, and internet costs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Workshop Space:</strong> Consider renting shared shop space for fabrication or pre-build projects</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Storage Unit:</strong> A cost-effective solution for organizing materials, supplies, and equipment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-cyan-100 rounded-lg p-3">
                      <Wrench className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Tools and Equipment</h3>
                      <p className="text-gray-600 mb-4">
                        Quality tools are a core investment in your handyman business. Start with the essentials and expand your toolkit strategically as you take on more specialized or higher-value work. Consider renting expensive specialty equipment rather than purchasing outright until demand justifies ownership.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Basic Hand Tools:</strong> Hammer, screwdrivers, pliers, wrenches, levels, and measuring tape</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Power Tools:</strong> Cordless drill, circular saw, reciprocating saw, sander, and impact driver</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Specialty Equipment:</strong> Rent scaffolding, tile saws, and specialty tools as project needs arise</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Materials Inventory:</strong> Build material costs into your project quotes and track common supply usage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <Truck className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Vehicle and Transportation</h3>
                      <p className="text-gray-600 mb-4">
                        A reliable work vehicle is essential for transporting tools, materials, and getting to job sites efficiently. Your vehicle is also a mobile advertisement for your business, so present it professionally. Vehicles used primarily for business purposes may be depreciable for tax purposes.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Van or Pickup Truck:</strong> Secure tool storage and the ability to haul materials to any job site</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Vehicle Branding:</strong> Professional vinyl wrap or magnetic door signs turn your truck into moving advertising</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Tax Deductions:</strong> Track mileage, depreciation, fuel, maintenance, and commercial auto insurance costs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <Laptop className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Marketing and Online Presence</h3>
                      <p className="text-gray-600 mb-4">
                        Local visibility drives handyman business growth. A strong online presence, combined with proactive community engagement and a referral system, creates a steady pipeline of qualified leads without expensive advertising.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Professional Website:</strong> Showcase your services, pricing transparency, photo portfolio, and easy contact options</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Google Business Profile:</strong> Critical for appearing in Google Local searches and Google Maps results</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Social Media:</strong> Facebook, Nextdoor, and Instagram are powerful platforms for local home service businesses</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Review Strategy:</strong> Systematically request reviews from satisfied customers on Google and Yelp</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Referral Program:</strong> Reward existing customers financially for sending new clients your way</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-red-100 rounded-lg p-3">
                      <DollarSign className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Financial Management and Banking</h3>
                      <p className="text-gray-600 mb-4">
                        Separating business and personal finances from the very beginning is essential for clean accounting, accurate tax filing, and financial clarity. Meticulous bookkeeping records also protect you in case of an IRS audit.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Business Bank Account:</strong> Required for LLCs; essential for all handyman business structures</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Business Credit Card:</strong> Build business credit and keep all expenses clearly documented</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Accounting Software:</strong> Track all income, expenses, and generate reports for tax preparation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Tax Reserve:</strong> Set aside approximately one-third of every payment for self-employment and income taxes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-yellow-100 rounded-lg p-3">
                      <UserPlus className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hiring and Staffing</h3>
                      <p className="text-gray-600 mb-4">
                        Begin as a solo operator to minimize overhead while building your customer base and reputation. As consistent demand grows beyond your capacity, strategically bring on help through subcontractors, apprentices, or part-time employees.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Solo Start:</strong> Keep costs minimal while establishing your local reputation and client base</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Subcontractors:</strong> Bring in licensed specialists for plumbing, electrical, or HVAC work you can't perform</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Employees:</strong> Once revenue is stable, hire and train quality team members to scale your capacity</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Apprentices:</strong> Train skilled workers who share your quality standards and work ethic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-indigo-100 rounded-lg p-3">
                      <Settings className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Business Software and Processes</h3>
                      <p className="text-gray-600 mb-4">
                        Implementing the right management systems early dramatically reduces administrative burden, improves customer service, and frees more of your time for billable work. Start with simple tools and upgrade as your operation grows.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Job Scheduling:</strong> Digital calendar and dispatch tools for managing appointments and routes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Invoicing and Estimates:</strong> Professional billing software for quick quotes and online payment acceptance</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Customer Tracking:</strong> CRM software to manage leads, follow-ups, and client history</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><strong>Project Organization:</strong> Tools to track job progress, materials lists, and project timelines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="regulations" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Licenses, Permits, and Tax Obligations</h2>
              <p className="text-xl text-gray-600 mb-12">Stay fully compliant with legal requirements at the local, state, and federal levels to protect your business and avoid penalties.</p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Requirements Vary Significantly by Location</h3>
                    <p className="text-yellow-800">
                      Licensing, permit, and certification requirements for handyman businesses differ considerably based on your state, county, city, services offered, and project dollar amounts. Always verify the specific requirements for your jurisdiction before starting work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <FileCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Business Licenses and Contractor Permits</h3>
                      <p className="text-gray-600 mb-4">
                        Most cities and counties require a general business operating license. Depending on your services and project values, you may also need contractor licenses, trade-specific certifications, and building permits for certain types of work.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span><strong>General Business License:</strong> Required by most municipalities to legally operate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Contractor License:</strong> Often required for projects exceeding certain dollar thresholds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Trade Certifications:</strong> Electrical, plumbing, and HVAC work requires specialized licensing in most states</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Building Permits:</strong> Required for structural, electrical, and plumbing modifications in most jurisdictions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Self-Employment Tax Obligations</h3>
                      <p className="text-gray-600 mb-4">
                        As a self-employed handyman business owner, understanding your tax responsibilities is crucial for avoiding penalties and optimizing your financial position. Unlike traditional employees, you are responsible for calculating and paying your own taxes.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Self-Employment Tax</h4>
                          <p className="text-gray-600 text-sm">Covers Social Security and Medicare contributions. Approximately 15.3% of your net self-employment profit.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Federal Income Tax</h4>
                          <p className="text-gray-600 text-sm">Progressive federal tax on your net business income. Pay quarterly estimated taxes to avoid underpayment penalties.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">State Income Tax</h4>
                          <p className="text-gray-600 text-sm">Most states impose income tax on business earnings. Rates, deductions, and rules vary significantly by state.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Sales and Use Tax</h4>
                          <p className="text-gray-600 text-sm">May apply to labor, materials, or certain services depending on your state. Consult a tax professional familiar with your jurisdiction.</p>
                        </div>
                      </div>
                      <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 font-semibold">Pro Tip: Set aside approximately one-third of every payment received for combined tax obligations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <Scale className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ongoing Compliance Requirements</h3>
                      <p className="text-gray-600 mb-4">
                        Maintaining legal compliance is a recurring responsibility, not a one-time task. Build these obligations into your annual business calendar to avoid fines, penalties, or loss of operating authority.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Quarterly:</strong> Estimated federal and state tax payments (April, June, September, January)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Annually:</strong> File income tax returns and LLC annual reports with your state</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span><strong>As Needed:</strong> Renew business licenses, contractor permits, and trade certifications on schedule</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Monthly:</strong> Reconcile accounts, categorize expenses, and review profitability</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="insurance" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Protect Your Handyman Business with Insurance</h2>
              <p className="text-xl text-gray-600 mb-12">Proper insurance coverage protects your assets, gives clients confidence, and is often legally required to operate a handyman business.</p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Handyman Insurance is Non-Negotiable</h3>
                    <p className="text-red-800">
                      Working inside people's homes with tools, ladders, and materials creates significant liability exposure every single day. One accident, property damage incident, or injury claim could financially devastate your business without proper insurance coverage in place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">General Liability Insurance</h3>
                      <p className="text-gray-600 mb-4">
                        The most essential coverage for any handyman business. General liability insurance protects you from claims of property damage, bodily injury, and personal injury arising from your work. If you accidentally damage a client's home or a visitor is injured at your job site, this policy covers legal defense costs, settlements, and medical expenses.
                      </p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm text-blue-900"><strong>Typical Coverage:</strong> $1–2 million per occurrence, $2 million aggregate</p>
                        <p className="text-sm text-blue-900 mt-1"><strong>Annual Cost:</strong> $400–$1,500 depending on revenue and services performed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Workers' Compensation Insurance</h3>
                      <p className="text-gray-600 mb-4">
                        Required in most states as soon as you hire your first employee. Workers' compensation covers medical expenses, lost wages, disability benefits, and rehabilitation costs for any work-related injuries or illnesses your employees suffer on the job. It protects both your workers and your business from financial devastation.
                      </p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-sm text-green-900"><strong>When Required:</strong> Typically required as soon as you hire your first W-2 employee</p>
                        <p className="text-sm text-green-900 mt-1"><strong>Coverage:</strong> Medical costs, temporary disability benefits, and lost wage replacement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <Briefcase className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Professional Liability Insurance</h3>
                      <p className="text-gray-600 mb-4">
                        Also known as errors and omissions (E&O) insurance, professional liability coverage protects against claims that your work was negligent, contained mistakes, or failed to deliver promised results. Particularly important if you provide consulting, design advice, or specialize in complex technical services.
                      </p>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <p className="text-sm text-purple-900"><strong>Covers:</strong> Legal defense costs and financial settlements from workmanship quality claims</p>
                        <p className="text-sm text-purple-900 mt-1"><strong>Best For:</strong> Specialized contractors, renovation consultants, and design-build projects</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 rounded-lg p-3">
                      <Truck className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Commercial Auto Insurance</h3>
                      <p className="text-gray-600 mb-4">
                        If you use a vehicle to transport tools, haul materials, or travel between job sites, your personal auto insurance almost certainly will not cover accidents that occur during business use. Commercial auto insurance covers vehicle damage, tools stored inside, and liability from any accidents that happen while working.
                      </p>
                      <div className="bg-cyan-50 rounded-lg p-4">
                        <p className="text-sm text-cyan-900"><strong>Protects:</strong> Work vehicle damage, tools and equipment inside, and third-party liability</p>
                        <p className="text-sm text-cyan-900 mt-1"><strong>Required For:</strong> Vehicles owned by your business or primarily used for business purposes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-lg p-3">
                      <Home className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Home-Based Business Insurance</h3>
                      <p className="text-gray-600 mb-4">
                        Standard homeowner's insurance policies explicitly exclude business activities. If you store tools and equipment at your residence, maintain business records at home, or occasionally meet clients there, you need either a home business policy endorsement or a separate Business Owner's Policy (BOP) to cover those exposures.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4">
                        <p className="text-sm text-red-900"><strong>Options:</strong> Home business endorsement added to homeowner's policy or a standalone Business Owner's Policy</p>
                        <p className="text-sm text-red-900 mt-1"><strong>Covers:</strong> Business property, tools, equipment, and business liability at your home location</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 rounded-lg p-3">
                      <Wrench className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Tools and Equipment Insurance</h3>
                      <p className="text-gray-600 mb-4">
                        Your tools are the foundation of your livelihood. Tools and equipment insurance (also called inland marine coverage) protects your valuable equipment from theft, accidental damage, or loss — whether at a job site, in transit, or at your storage location. Fast replacement means minimal income disruption.
                      </p>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <p className="text-sm text-yellow-900"><strong>Inland Marine Coverage:</strong> Protects tools and equipment wherever they travel, including job sites and vehicles</p>
                        <p className="text-sm text-yellow-900 mt-1"><strong>Cost:</strong> Relatively inexpensive given the comprehensive protection it provides</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Getting Started with Handyman Business Insurance
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span>Get comparative quotes from multiple insurers specializing in contractors and tradespeople</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span>Start with general liability insurance as your core foundational coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span>Add workers' compensation immediately when you hire your first employee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span>Review and update all policy limits annually as your revenue and team grow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Essential Software Tools for Handyman Businesses</h2>
              <p className="text-xl text-gray-600 mb-12">Streamline your operations with proven digital tools used by successful home service contractors across the country.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Scheduling and Job Management</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Manage appointments, dispatch jobs efficiently, and optimize your daily routing for maximum billable hours.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Jobber</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">ServiceTitan</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Housecall Pro</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Invoicing and Payments</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Create professional estimates on the go, send digital invoices, and accept multiple payment methods from clients.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">QuickBooks</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">FreshBooks</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Square</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-8 h-8 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Customer Relationship Management</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Track leads, manage client communication history, and automate follow-up messages to win repeat business.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">Salesforce</span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">Zoho CRM</span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">Insightly</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <ClipboardCheck className="w-8 h-8 text-cyan-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Project Management</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Organize active jobs, manage materials lists, track timelines, and collaborate with subcontractors or employees.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm">Trello</span>
                    <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm">Asana</span>
                    <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm">Basecamp</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Business Communication</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Maintain professional communication with clients using a dedicated business phone line and team messaging apps.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Grasshopper</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Google Voice</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Slack</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-8 h-8 text-red-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Email Marketing and Advertising</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Nurture past clients with newsletters and promotions, and run targeted local ads to attract new customers in your area.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">Mailchimp</span>
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">Google Ads</span>
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">Campaign Monitor</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Laptop className="w-8 h-8 text-indigo-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Website and Online Presence</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Build a professional handyman website and track its performance to attract more organic search traffic from homeowners.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">WordPress</span>
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">Wix</span>
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">Squarespace</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Accounting and Bookkeeping</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Track all business income and expenses, categorize deductions, and stay organized for quarterly and annual tax filing.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">QuickBooks</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Wave</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Xero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-cyan-500 to-slate-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold mb-6">
                Ready to Start Your Home Handyman Business Today?
              </h2>

              <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
                Millions of homeowners need reliable, skilled handyman professionals right now. With the right business structure, insurance, licenses, and marketing strategy in place, you can build a profitable handyman company that generates consistent income and grows through client referrals. Start small, deliver exceptional quality, and let your reputation do the selling.
              </p>

              {/* Center Button */}
              <div className="flex justify-center">
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 font-bold text-xl px-8 py-4 rounded-lg shadow-md hover:bg-cyan-100 transition">
                  Get Started Now
                </button>
              </div>

            </div>
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
