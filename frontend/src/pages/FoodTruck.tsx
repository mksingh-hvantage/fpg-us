import { Truck, Target, FileText, Shield, Settings, BookOpen, Users, Wrench, AlertCircle, DollarSign, TrendingUp, MapPin, ChefHat, Calendar, CheckCircle, BarChart, CreditCard, Home, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function FoodTruck() {
const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
const [active, setActive] = useState("types");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // center me aate hi active
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `whitespace-nowrap transition font-medium ${
      active === id
        ? "text-cyan-600 border-b-2 border-cyan-600"
        : "text-gray-700 hover:text-cyan-600"
    }`;

  return (
    <div className="bg-white">
      <header className="bg-gradient-to-br from-cyan-400 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Truck className="w-20 h-20" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Start Your Food Truck Business</h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive guide to launching, operating, and growing a successful mobile food business from the ground up
            </p>
            <div className="flex gap-4 justify-center flex-wrap mt-8">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
              Get Started Now
            </button>
          </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-33 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto py-4 gap-6 text-sm">
          <a href="#types" className={linkClass("types")}>Business Types</a>
          <a href="#validation" className={linkClass("validation")}>Validation</a>
          <a href="#plan" className={linkClass("plan")}>Business Plan</a>
          <a href="#structure" className={linkClass("structure")}>Legal Structure</a>
          <a href="#operations" className={linkClass("operations")}>Operations</a>
          <a href="#regulations" className={linkClass("regulations")}>Regulations</a>
          <a href="#insurance" className={linkClass("insurance")}>Insurance</a>
          <a href="#resources" className={linkClass("resources")}>Resources</a>
        </div>
      </div>
    </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section id="types" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <ChefHat className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">What Type of Food Truck Should You Start?</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Before investing in your mobile kitchen, it's crucial to identify which food truck category aligns best with your expertise, passion, and market opportunity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-red-50 rounded-2xl p-8 border border-cyan-200 hover:shadow-lg transition">
              <div className="bg-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Cuisines</h3>
              <p className="text-gray-700 leading-relaxed">
                The most popular category featuring trucks that specialize in food from a particular region or culinary tradition. Think authentic tacos, gourmet burgers, artisanal pizzas, or regional BBQ styles. Success depends on executing your specialty exceptionally well.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Diet Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                Targeting specific dietary needs like plant-based, gluten-free, keto, paleo, or culture-specific nutritional preferences. This niche approach allows you to serve an underserved market with dedicated dietary requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event & Location Partnerships</h3>
              <p className="text-gray-700 leading-relaxed">
                Vendors who secure long-term agreements with venue owners, event organizers, festivals, and corporate campuses. This model provides reliable, predictable revenue streams and reduces the uncertainty of daily location scouting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200 hover:shadow-lg transition">
              <div className="bg-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Restaurant & Brewery Extensions</h3>
              <p className="text-gray-700 leading-relaxed">
                Mobile operations from established eateries or breweries seeking expanded market reach. Leverage existing brand recognition, tested recipes, and customer loyalty while reaching new neighborhoods and events.
              </p>
            </div>
          </div>
        </section>

        <section id="validation" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Target className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Validate Your Food Truck Concept</h2>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-10 rounded-r-xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Critical Investment Warning</h3>
                <p className="text-red-800 leading-relaxed">
                  Expect startup costs between <span className="font-bold">$50,000 to $100,000</span> for launch expenses. Thorough validation before committing this capital is essential.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Essential Validation Steps</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Research Existing Competitors</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Thoroughly analyze food trucks already operating in your target area. Visit them, study their menus, pricing, locations, and customer flow. Identify gaps in the market that you can fill.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Define Your Unique Selling Points</h4>
                  <p className="text-gray-700 leading-relaxed">
                    What makes your food truck different? Whether it's a secret recipe, unique flavor combinations, sustainable sourcing, or exceptional service, clearly articulate what sets you apart.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Understand Your Target Market</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Identify your ideal customer demographics, their spending habits, meal preferences, and where they congregate. Are you targeting lunch crowds in business districts, late-night snackers, or family-friendly weekend events?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Engage Potential Customers Directly</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Conduct surveys, host tasting events, or offer samples at local gatherings. Direct feedback from your target audience is invaluable for refining your concept and menu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Join Food Truck Communities</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Participate in forums, social media groups, and local food truck associations. Learn from experienced operators about challenges, opportunities, and insider knowledge that can save you time and money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="plan" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <FileText className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Craft Your Business Plan</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            A comprehensive business plan is your roadmap to success. It clarifies your vision, identifies potential challenges, and provides a framework for measuring progress.
          </p>

          <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 mb-10 rounded-r-xl">
            <p className="text-cyan-900 font-semibold leading-relaxed">
              "Your food truck business will succeed or fail based on its profitability, so a rock solid understanding of your pricing and expenses is essential."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Executive Summary</h3>
                  <p className="text-gray-700">A concise overview highlighting key points, mission statement, and what makes your food truck unique.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Goals & Objectives</h3>
                  <p className="text-gray-700">Specific, measurable targets for revenue, customer acquisition, and expansion within defined timeframes.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Business Description</h3>
                  <p className="text-gray-700">Detailed background on your concept, cuisine type, service model, and the story behind your venture.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Market Analysis</h3>
                  <p className="text-gray-700">Comprehensive research on demand, target demographics, competitor landscape, and market opportunities.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Business Structure</h3>
                  <p className="text-gray-700">Legal entity type, ownership structure, and organizational hierarchy of your operation.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Business Model</h3>
                  <p className="text-gray-700">How you'll generate revenue, pricing strategy, cost structure, and paths to profitability.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">7</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Marketing Strategy</h3>
                  <p className="text-gray-700">Plans for attracting customers through social media, local advertising, partnerships, and brand building.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">8</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Financial Projections</h3>
                  <p className="text-gray-700">Detailed forecasts including startup costs, operating expenses, revenue projections, and break-even analysis.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">9</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Supporting Appendices</h3>
                  <p className="text-gray-700">Supplementary documents like sample menus, equipment quotes, location maps, permits, and market research data.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="structure" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Choose Your Legal Structure</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Your business structure affects liability protection, taxation, and operational complexity. Here's how the five main U.S. entity types compare for food truck businesses:
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Sole Proprietorship</h3>
                  <p className="text-gray-700 mb-3">Operating as an individual without formal business entity formation.</p>
                  <div className="inline-block bg-red-200 text-red-900 px-4 py-2 rounded-lg font-semibold text-sm">
                    ❌ Not Recommended
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                <strong>Why avoid:</strong> Provides no legal separation between personal and business assets, leaving you personally liable for all debts and lawsuits.
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">General Partnership</h3>
                  <p className="text-gray-700 mb-3">Two or more individuals sharing ownership without formal entity creation.</p>
                  <div className="inline-block bg-red-200 text-red-900 px-4 py-2 rounded-lg font-semibold text-sm">
                    ❌ Not Recommended
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                <strong>Why avoid:</strong> No limited liability protection and partners are jointly liable for business obligations and each other's actions.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Limited Liability Company (LLC)</h3>
                  <p className="text-gray-700 mb-3">Flexible structure combining liability protection with pass-through taxation.</p>
                  <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    ✓ Most Recommended
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                <strong>Why choose:</strong> Fast and simple to establish, inexpensive to maintain, protects personal assets from business liabilities, and offers tax flexibility. Ideal for most food truck operations.
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">S Corporation</h3>
                  <p className="text-gray-700 mb-3">Corporate structure with pass-through taxation and strict eligibility requirements.</p>
                  <div className="inline-block bg-yellow-200 text-yellow-900 px-4 py-2 rounded-lg font-semibold text-sm">
                    ⚠️ Complex Choice
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                <strong>Consider carefully:</strong> More complex than LLC with stricter rules on ownership and operations. Generally not ideal for typical food truck businesses.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">C Corporation</h3>
                  <p className="text-gray-700 mb-3">Traditional corporate structure with double taxation and complex governance.</p>
                  <div className="inline-block bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm">
                    ⚠️ Overly Complex
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                <strong>Usually unnecessary:</strong> Designed for large corporations seeking outside investment. The administrative burden and double taxation make it impractical for most food truck operations.
              </p>
            </div>
          </div>
        </section>

        <section id="operations" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Settings className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Set Up Operations</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Successfully launching your food truck requires coordinating multiple operational components simultaneously. Here's what you need to establish:
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Marketing & Promotion</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Develop strong social media presence across Instagram, Facebook, and Twitter</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Create eye-catching flyers and distribute in high-traffic areas</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Leverage local radio advertising during peak commute times</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Partner with local businesses, events, and food delivery platforms</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Build email list for announcements about locations and special offers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Finances & Taxes</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Open dedicated business bank account to separate personal and business finances</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Implement robust bookkeeping system from day one</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Consider business credit card for expense tracking and building credit</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Set aside funds regularly for quarterly estimated tax payments</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Track all receipts and maintain detailed financial records</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-cyan-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">Staffing</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Determine if you'll handle all operations solo or need employees</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Hire experienced cooks if not personally managing food preparation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Recruit customer service staff for order taking and cashier duties</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Provide comprehensive training on food safety and customer service</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Establish clear scheduling system for consistent operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <BarChart className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Software & Systems</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Implement reliable point-of-sale system for payment processing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Set up inventory management software for ingredient tracking</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Use financial management tools for expense and revenue monitoring</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Consider scheduling apps for posting daily locations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Integrate online ordering capabilities if feasible</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Location Strategy</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Your truck is your mobile restaurant - maximize its potential</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Research and secure high-traffic locations with proper permits</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Build relationships with property owners for regular spots</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Participate in food truck events, festivals, and markets</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Maintain flexibility to adapt to seasonal opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8 text-slate-600" />
                <h3 className="text-2xl font-bold text-gray-900">Equipment & Setup</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>Install commercial-grade cooking appliances: stove, oven, grill</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>Ensure adequate refrigeration and freezer capacity</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>Properly secure and anchor all equipment for road safety</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>Install fire suppression system and safety equipment</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>Design efficient workflow layout within limited space</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="regulations" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Navigate Regulations & Taxes</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Food truck operations are subject to multiple layers of oversight. Compliance isn't optional - it's essential for legal operation and customer safety.
          </p>

          <div className="bg-gradient-to-br from-red-50 to-cyan-50 rounded-2xl p-10 mb-10 border-2 border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Licenses & Permits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Business License</h4>
                  <p className="text-gray-700">General permit to operate a business in your city or county</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Food Handler Permits</h4>
                  <p className="text-gray-700">Certification demonstrating food safety knowledge for all staff</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Health Department Permits</h4>
                  <p className="text-gray-700">Approval following inspection of food preparation and storage</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Fire Department Inspection</h4>
                  <p className="text-gray-700">Verification of proper fire suppression and safety equipment</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Mobile Food Vendor License</h4>
                  <p className="text-gray-700">Special permit for operating mobile food service business</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Sales Tax Permit</h4>
                  <p className="text-gray-700">Authorization to collect and remit sales tax on food sales</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tax Obligations</h3>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-6 mb-8 rounded-r-xl">
              <p className="text-blue-900 font-semibold leading-relaxed">
                "We recommend holding back around one-third of your earnings to pay your taxes to avoid surprises."
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Self-Employment Tax</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Covers Social Security and Medicare contributions for business owners. Calculated on your net earnings and paid with your annual return.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Federal Income Tax</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Based on your business profits after deductions. Requires quarterly estimated payments throughout the year to avoid penalties.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">State Income Tax</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Most states require income tax on business earnings. Rates and rules vary significantly by state, so consult local requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Sales and Use Tax</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Collected from customers at point of sale and remitted to state/local authorities monthly or quarterly. Rates depend on your operating locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="insurance" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Protect Your Business with Insurance</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Insurance protects your investment and shields you from potentially devastating financial losses. Don't operate without proper coverage.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 transition hover:shadow-xl">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workers' Compensation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Covers employee medical expenses, lost wages, and rehabilitation for job-related injuries, illnesses, or disabilities.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Requirements:</strong> Varies by state. Not required if you have no employees, but may be mandatory once you hire staff.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-cyan-300 rounded-2xl p-8 shadow-xl">
              <div className="bg-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">General Liability Insurance</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Protects against lawsuits, property damage, bodily injury claims, and personal liability issues.
              </p>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <p className="text-sm text-cyan-900 font-semibold">
                  This type of insurance could be essential to your food truck business and may be required by venues.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 transition hover:shadow-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Auto & Equipment Coverage</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Standard auto insurance is insufficient. Specialized food truck coverage protects the vehicle, equipment, and inventory.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Critical:</strong> Must cover commercial use, cooking equipment, and potential food spoilage from breakdowns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="compliance" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Calendar className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Maintain Ongoing Compliance</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Staying compliant requires regular attention to documentation, renewals, and filings throughout the year.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-10 border-2 border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-slate-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">File Annual State Reports</h3>
                  <p className="text-gray-700">Most states require yearly reports updating your business information and maintaining good standing.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Pay Quarterly Estimated Taxes</h3>
                  <p className="text-gray-700">Due in April, June, September, and January to avoid penalties and interest charges.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Renew Permits & Licenses</h3>
                  <p className="text-gray-700">Business licenses, health permits, and vendor permits typically expire annually and require renewal.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Prepare Tax Documents</h3>
                  <p className="text-gray-700">Work with an accountant to organize records, track deductions, and prepare accurate returns.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">File Annual Tax Returns</h3>
                  <p className="text-gray-700">Submit federal and state income tax returns by the April deadline or request an extension.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Ongoing Payroll & Sales Tax</h3>
                  <p className="text-gray-700">If you have employees, make regular payroll tax deposits and file required employment tax returns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <MessageSquare className="w-10 h-10 text-cyan-600" />
            <h2 className="text-5xl font-extrabold text-gray-900">Communities & Resources</h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Connect with fellow food truck entrepreneurs, share experiences, and learn from those who've successfully navigated the challenges you're facing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Communities</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Users className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">r/foodtrucks</strong>
                    <p className="text-gray-700 text-sm">Reddit community dedicated to food truck owners sharing advice, challenges, and success stories</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">r/EntrepreneurRideAlong</strong>
                    <p className="text-gray-700 text-sm">Follow real-time business journeys and learn from entrepreneurs building from scratch</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Food Business Forums</strong>
                    <p className="text-gray-700 text-sm">Specialized discussion boards for food industry professionals and aspiring restaurateurs</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Useful Tools</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Project Management</h4>
                  <p className="text-gray-700 text-sm mb-1">Asana, Basecamp, Trello</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Social Media Management</h4>
                  <p className="text-gray-700 text-sm mb-1">Hootsuite, Buffer, Sprout Social</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Customer Relationship</h4>
                  <p className="text-gray-700 text-sm mb-1">Salesforce, Insightly, Zoho CRM</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Point of Sale</h4>
                  <p className="text-gray-700 text-sm mb-1">Square, Toast, Clover</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Analytics</h4>
                  <p className="text-gray-700 text-sm mb-1">Google Analytics, Matomo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-cyan-600 to-slate-600 rounded-3xl p-12 text-white text-center">
          <Truck className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-5xl font-extrabold mb-6">Ready to Roll?</h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Find the right niche, execute with excellence, and your food truck business could be an enormous success. The mobile food industry continues to grow, offering incredible opportunities for passionate entrepreneurs willing to put in the work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
              <div className="text-3xl font-bold">$50K-$100K</div>
              <div className="text-sm text-cyan-100">Startup Investment</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
              <div className="text-3xl font-bold">33%</div>
              <div className="text-sm text-cyan-100">Set Aside for Taxes</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
              <div className="text-3xl font-bold">LLC</div>
              <div className="text-sm text-cyan-100">Recommended Structure</div>
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
