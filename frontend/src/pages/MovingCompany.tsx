import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Calendar, CheckCircle2, DollarSign, Users, Sparkles, TrendingUp, FileText, Building2, Shield, Lightbulb } from 'lucide-react';

export default function MovingCompany() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="relative text-center text-white py-24 px-6 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg"
            alt="Moving Company"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/90 to-slate-700/80"></div>

        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6 leading-tight">
            How to Start a Moving Company
          </h1>

          <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            Turn your ambition into a thriving relocation business. Whether you want to serve local
            residents or expand into commercial moves, this guide covers everything you need to launch
            a successful moving company.
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
              Why Start a Moving Company?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 35 million Americans relocating every year, the moving industry offers
              consistent demand and exceptional growth potential for new entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High & Consistent Demand</h3>
              <p className="text-gray-600 leading-relaxed">
                People move for jobs, family, and lifestyle changes year-round. A well-run moving
                company benefits from a steady pipeline of local and long-distance clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Business Models</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from local residential moves, long-distance relocations, commercial office
                moves, or specialty moving services — each with its own profitable niche.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strong Revenue Potential</h3>
              <p className="text-gray-600 leading-relaxed">
                Moving companies can generate significant income by scaling from a single truck to
                a full fleet, with multiple pricing structures that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Steps to Launch Your Moving Company
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow this step-by-step roadmap to build and grow a successful moving business
            </p>
          </div>

          <div className="space-y-20">

            {[
              {
                title: "Choose Your Moving Niche",
                desc: "The moving industry offers several distinct business types. Selecting the right niche lets you focus your marketing, pricing, and equipment purchases for maximum efficiency.",
                points: [
                  "Local residential moves for individuals and families",
                  "Long-distance or interstate relocation services",
                  "Commercial office and business moving",
                  "Specialty moves — pianos, antiques, medical equipment"
                ],
                img: "https://images.pexels.com/photos/7464703/pexels-photo-7464703.jpeg"
              },
              {
                title: "Create a Solid Business Plan",
                desc: "A well-structured business plan defines your services, target market, pricing strategy, and financial projections — giving you a clear roadmap for growth and profitability.",
                points: [
                  "Define your service offerings and target market",
                  "Set competitive pricing and revenue projections",
                  "Analyze local competition and market demand",
                  "Outline a marketing and customer acquisition strategy"
                ],
                img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              },
              {
                title: "Register Your Business",
                desc: "Choosing the right legal structure protects your personal assets and gives your moving company credibility. Most moving businesses benefit most from forming an LLC.",
                points: [
                  "Select a business structure (LLC recommended)",
                  "Register with your state and obtain an EIN",
                  "Secure all required local and state business permits",
                  "Obtain a USDOT number if operating interstate"
                ],
                img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
              },
              {
                title: "Get Proper Insurance Coverage",
                desc: "Moving businesses handle people's most valuable possessions and operate heavy vehicles. Comprehensive insurance is not optional — it protects your business, employees, and clients.",
                points: [
                  "General liability insurance for property damage and injuries",
                  "Workers' compensation for employee coverage",
                  "Commercial auto insurance for your moving trucks",
                  "Cargo insurance to cover clients' belongings in transit"
                ],
                img: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg"
              },
              {
                title: "Acquire Equipment & Build Your Team",
                desc: "The right equipment and reliable employees are the backbone of a moving company. Start with essential tools and scale your fleet and workforce as demand grows.",
                points: [
                  "Purchase or lease moving trucks of appropriate size",
                  "Invest in dollies, moving blankets, straps, and packing supplies",
                  "Hire strong, reliable, and professional movers",
                  "Train staff on safe lifting, packing, and customer service"
                ],
                img: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
              },
              {
                title: "Market Your Moving Business",
                desc: "Building a strong local presence and online reputation is critical for attracting a steady flow of moving clients. Positive reviews and word-of-mouth referrals drive long-term growth.",
                points: [
                  "Build a professional website with online quote requests",
                  "Claim and optimize your Google Business Profile",
                  "Encourage satisfied clients to leave 5-star reviews",
                  "Run targeted local ads and optimize for local SEO"
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

                <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-[320px] object-cover rounded-3xl shadow-lg"
                  />
                </div>

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
              Essential Skills for Moving Company Owners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Running a successful moving company demands a combination of physical coordination,
              customer focus, and sharp business management skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building trust and delivering a stress-free experience leads to repeat business
                and valuable word-of-mouth referrals
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Logistics & Scheduling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coordinating crews, trucks, and move schedules efficiently is critical for
                maximizing daily jobs and minimizing delays
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Lightbulb className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem-Solving</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Navigating tight spaces, last-minute changes, and damaged items requires quick
                thinking and calm decision-making on the job
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Attention to Detail</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Careful packing, inventory tracking, and thorough estimates protect clients'
                belongings and your business reputation
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
              Choosing the right legal structure is one of the most important decisions you'll make
              when starting your moving company
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Building2 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">LLC (Recommended)</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Limited Liability Company is the most popular structure for moving companies.
                It separates your personal assets from business liabilities and offers flexible
                tax treatment with minimal administrative burden.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Personal asset protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Flexible taxation options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Professional credibility with clients</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sole Proprietorship</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The simplest structure to set up, requiring minimal paperwork. However, it offers
                no protection for personal assets, which is a significant risk in the moving
                industry where accidents and property damage can occur.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Easy and inexpensive to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Minimal administrative paperwork</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Complete ownership and control</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Building2 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporation</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Best suited for large-scale moving operations with multiple locations and investors.
                Corporations provide the strongest liability protection and greater access to
                financing and capital.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Strongest liability protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Easier access to investment capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Potential tax advantages at scale</span>
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
              Moving companies use several proven pricing strategies — choose the model that best
              fits your niche and client expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hourly Rate Pricing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Charge clients per hour based on the number of movers and trucks required.
                This is the most common model for local moves and is simple to explain and
                easy for clients to understand.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> $120–$180/hour for a 2-person
                  crew with one truck; add $40–$60/hour per additional mover
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flat Rate Per Move</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Offer a fixed all-inclusive price based on the size of the home and distance of
                the move. Clients appreciate the predictability, and your team can maximize
                efficiency without watching the clock.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> $600–$1,200 flat rate for a
                  2-bedroom local move within 20 miles
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weight-Based Pricing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Common for long-distance and interstate moves, this model charges based on the
                total weight of items being transported. It's the standard pricing method used
                by most major moving carriers for cross-country relocations.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> $0.50–$0.70 per pound for
                  interstate moves, plus fuel and distance surcharges
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Service Packages</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bundle packing, loading, transportation, unloading, and unpacking into tiered
                packages. Premium packages command higher fees and attract clients who prioritize
                convenience over cost.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> Basic ($800), Standard ($1,400),
                  White-Glove Full-Service ($2,500+)
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
                q: "How do I start a moving company?",
                a: "To start a moving company, begin by choosing your niche — whether local residential, long-distance, or commercial moves. Write a business plan, register your business as an LLC for liability protection, and obtain a USDOT number if operating interstate. Purchase or lease moving trucks and equipment, hire reliable movers, and secure the necessary insurance including general liability, workers' compensation, and cargo coverage. Build an online presence and gather reviews to attract your first clients."
              },
              {
                q: "How much does it cost to start a moving company?",
                a: "Startup costs for a moving company typically range from $10,000 to $50,000 or more depending on your scale. Key expenses include purchasing or leasing a moving truck ($5,000–$30,000), business registration and licensing ($500–$1,500), insurance ($2,000–$5,000 annually), moving equipment like dollies and blankets ($500–$2,000), and marketing and website costs ($500–$2,000). Starting small with one truck and scaling up is a common approach to keep initial costs manageable."
              },
              {
                q: "Do I need a license to operate a moving company?",
                a: "Yes, moving companies require several licenses and registrations. At minimum, you need a general business license from your state or local government. If you conduct interstate moves, you must register with the Federal Motor Carrier Safety Administration (FMCSA) to obtain a USDOT number and MC number. Some states also require a state-specific moving license or permit. Always check your local and state requirements before launching."
              },
              {
                q: "What insurance does a moving company need?",
                a: "A moving company requires several types of insurance to operate safely and legally. General liability insurance protects against property damage and bodily injury claims. Workers' compensation is required in most states to cover employee injuries on the job. Commercial auto insurance covers your moving trucks, and cargo insurance protects clients' belongings during transport. Without proper coverage, a single accident or lawsuit could put your business at serious financial risk."
              },
              {
                q: "Is starting a moving company profitable?",
                a: "Yes, moving companies can be highly profitable. Profit margins typically range from 10% to 40% depending on your pricing, efficiency, and overhead. Local moving companies can generate $100,000–$500,000 in annual revenue with one or two trucks. As you add more trucks, hire more crews, and build a strong reputation, revenue scales significantly. Focusing on excellent service and building a base of repeat and referral clients is key to long-term profitability."
              },
              {
                q: "What equipment do I need to start a moving company?",
                a: "Essential equipment for a moving company includes one or more moving trucks (box trucks or moving vans), furniture dollies, hand trucks, moving blankets and pads, stretch wrap and packing tape, floor runners and door frame protectors, and straps and tie-downs for securing items. As your business grows, you may also invest in specialized equipment for piano moving, art handling, or office furniture disassembly and reassembly."
              },
              {
                q: "How do moving companies get customers?",
                a: "Moving companies attract customers through a combination of local SEO, online reviews, and referrals. Claiming and optimizing your Google Business Profile is one of the most effective strategies for appearing in local search results. Building a professional website with an easy online quote request form helps convert visitors into leads. Listing your business on platforms like Yelp, Angi, and Thumbtack expands your visibility. Positive reviews from satisfied clients are the single most powerful driver of new business for moving companies."
              },
              {
                q: "What is the best business structure for a moving company?",
                a: "An LLC (Limited Liability Company) is the best business structure for most moving companies. It protects your personal assets from business liabilities — which is critical in an industry where accidents, vehicle damage, and property damage claims can arise. An LLC is also relatively simple and affordable to set up, and it offers flexible tax treatment. For larger operations seeking outside investment or planning to go public, a corporation may be more appropriate."
              },
              {
                q: "Can I start a moving company with one truck?",
                a: "Absolutely. Many successful moving companies started with a single truck and one or two employees. Starting with one truck keeps your overhead low and allows you to learn operations, build your client base, and refine your processes before scaling. Once your schedule is consistently full and you have positive reviews, you can reinvest revenue into a second truck and additional crew. This gradual approach reduces financial risk while building a solid foundation."
              },
              {
                q: "What are the biggest challenges of running a moving company?",
                a: "Common challenges include managing seasonal demand fluctuations (summer is peak moving season), finding and retaining reliable employees, handling liability for damaged or lost items, managing fuel and vehicle maintenance costs, and competing against established local movers. Building a strong reputation through excellent service and actively managing online reviews helps overcome these challenges. Proper insurance, clear contracts, and thorough employee training are also essential for minimizing risk and protecting your business."
              }
            ].map((faq, idx) => (
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
            Ready to Launch Your Moving Company?
          </h2>
          <p className="text-xl mb-8 text-cyan-50 leading-relaxed">
            Take the first step toward building a profitable relocation business.
            Get your moving company properly formed and legally protected today.
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
