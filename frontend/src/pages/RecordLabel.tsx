import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Calendar, CheckCircle2, DollarSign, Users, Sparkles, TrendingUp, FileText, Building2, Shield, Lightbulb } from 'lucide-react';

export default function RecordLabel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="relative text-center text-white py-24 px-6 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
            alt="Record Label"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/90 to-slate-700/80"></div>

        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6 leading-tight">
            How to Start a Record Label
          </h1>

          <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            Turn your passion for music into a thriving record label business. Whether you want to
            represent your own artistry or discover and develop new talent, this guide covers
            everything you need to launch a successful independent record label.
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
              Why Start a Record Label?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With global recorded music revenue surpassing $18.9 billion and independent labels
              generating over $450 million annually, the music industry offers remarkable growth
              potential for driven entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Booming Music Industry</h3>
              <p className="text-gray-600 leading-relaxed">
                Streaming revenue grew 33% in a single year, driving a $5 billion global increase
                in recorded music income. The industry's upward trajectory creates a prime
                environment for new record labels to thrive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Independent Label Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 3,500 independent record label businesses operate in the U.S., with the
                indie sector growing at a 2.5% annual rate. There has never been a better time
                to launch your own independent music label.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Revenue Streams</h3>
              <p className="text-gray-600 leading-relaxed">
                Record labels earn income through streaming royalties, sync licensing, physical
                sales, merchandise, live performance deals, and distribution agreements —
                creating diverse and scalable revenue opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Steps to Launch Your Record Label
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow this step-by-step roadmap to build and grow a successful independent record label business
            </p>
          </div>

          <div className="space-y-20">

            {[
              {
                title: "Define Your Record Label Niche",
                desc: "The music industry spans countless genres and business models. Choosing a clear niche allows you to focus your artist development, marketing strategy, and distribution channels for maximum impact and profitability.",
                points: [
                  "Identify your primary genre focus — hip-hop, indie rock, electronic, country, or pop",
                  "Decide whether to sign outside artists or release your own music",
                  "Determine your label's sound, brand identity, and unique positioning",
                  "Research your target audience and the streaming platforms they use most"
                ],
                img: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg"
              },
              {
                title: "Create a Record Label Business Plan",
                desc: "A well-structured business plan defines your artist roster strategy, revenue model, marketing approach, and financial projections — giving you a clear roadmap for profitability and long-term growth.",
                points: [
                  "Define your label's mission, vision, and artist development strategy",
                  "Map out revenue streams: streaming, licensing, merchandise, and live deals",
                  "Analyze the competitive landscape and identify your unique value proposition",
                  "Set financial projections, startup budgets, and break-even timelines"
                ],
                img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              },
              {
                title: "Register Your Record Label Business",
                desc: "Choosing the right legal structure protects your personal assets and gives your record label credibility with artists and industry partners. Most independent labels benefit most from forming an LLC.",
                points: [
                  "Select a business structure (LLC strongly recommended for music businesses)",
                  "Register your label name and obtain an Employer Identification Number (EIN)",
                  "Open a dedicated business bank account to separate personal and label finances",
                  "Register with a performing rights organization such as ASCAP, BMI, or SESAC"
                ],
                img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
              },
              {
                title: "Set Up Your Studio & Distribution",
                desc: "A record label needs access to quality recording resources and a reliable distribution strategy to get music in front of listeners. Leverage digital platforms to maximize reach and minimize upfront costs.",
                points: [
                  "Establish relationships with professional recording studios or build a home studio",
                  "Partner with digital distributors like DistroKid, TuneCore, or CD Baby",
                  "Set up digital storefronts across Spotify, Apple Music, Amazon Music, and YouTube",
                  "Invest in project management and collaboration tools to streamline production"
                ],
                img: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg"
              },
              {
                title: "Sign & Develop Your Artists",
                desc: "Your artist roster is the foundation of your record label. Finding, signing, and developing artists with commercial potential requires a sharp musical ear, strong negotiation skills, and meaningful industry connections.",
                points: [
                  "Scout local talent, attend open mics, and review music submissions online",
                  "Draft fair recording contracts that outline royalty splits, creative rights, and terms",
                  "Work with a music attorney to review and finalize all artist agreements",
                  "Build a development plan for each artist covering recording, promotion, and touring"
                ],
                img: "https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg"
              },
              {
                title: "Market & Promote Your Record Label",
                desc: "Building a strong digital presence and music industry reputation is critical for attracting artists, fans, and media attention. Consistent promotion across streaming platforms and social media drives discovery and long-term growth.",
                points: [
                  "Build a professional website showcasing your label's artists, releases, and story",
                  "Grow your label's social media presence on Instagram, TikTok, and YouTube",
                  "Pitch music to Spotify editorial playlists, blogs, and music press outlets",
                  "Run targeted digital advertising campaigns to grow streaming numbers and fanbase"
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
              Essential Skills for Record Label Owners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Running a successful record label demands a rare combination of musical instinct,
              business acumen, marketing expertise, and relationship management skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">A&R & Talent Discovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A sharp musical ear and the ability to identify commercially viable artists
                before they break is the single most valuable skill a label owner can have
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project & Release Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coordinating recording sessions, release timelines, distribution deadlines,
                and promotional campaigns requires exceptional organizational skills
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Lightbulb className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing & Promotion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Growing artist audiences through social media, playlist pitching, press outreach,
                and digital advertising is nearly essential to competitive success in music
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contracts & Financial Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Negotiating artist contracts, tracking royalties, managing recording budgets,
                and distributing payments accurately are core label owner responsibilities
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
              when starting your record label business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Building2 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">LLC (Recommended)</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Limited Liability Company is the most popular structure for independent record
                labels. It separates your personal assets from business liabilities, offers
                flexible tax treatment, and provides the professional credibility artists and
                industry partners expect.
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
                  <span>Professional credibility with artists</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sole Proprietorship</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The simplest structure to set up, requiring minimal paperwork and cost. However,
                it offers no separation between your personal and business finances, leaving
                your personal assets exposed to any legal or financial issues that arise with
                artists or contracts.
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
                Best suited for larger record labels seeking outside investors or planning to
                expand into multiple business verticals. Corporations provide the strongest
                liability protection, greater access to capital, and the ability to issue shares
                to partners and investors.
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
              Record labels generate income through several proven revenue streams — understanding
              each model helps you build a financially sustainable music business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Artist Royalty Deals</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Labels invest in recording, production, and promotion costs in exchange for
                a percentage of artist royalties. The label retains a share of streaming,
                physical, and download revenue based on the terms of the recording contract.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> Label receives 50%–80% of
                  master royalties while the artist earns 20%–50% after recouping advances
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Streaming Revenue</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Digital streaming platforms like Spotify, Apple Music, and YouTube distribute
                royalties based on total stream counts. Labels collect the master recording
                royalty on behalf of their artists and distribute agreed-upon percentages
                per contract terms.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> Spotify pays approximately
                  $0.003–$0.005 per stream; a song with 1M streams generates $3,000–$5,000
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sync Licensing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Licensing music for use in films, TV shows, commercials, video games, and
                online content is one of the most lucrative revenue streams for record labels.
                A single sync placement can generate thousands to hundreds of thousands of dollars.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> TV commercial sync fees
                  range from $5,000 to $500,000+ depending on usage, territory, and artist profile
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">360 Deal / Multi-Revenue Model</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Modern labels often sign 360 deals, earning a percentage of all of an artist's
                revenue streams including live performances, merchandise, endorsements, and
                publishing. This model maximizes label income as artists grow their careers.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> Label earns 15%–25% of touring
                  income, merchandise sales, and brand partnership deals in addition to recording royalties
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
                q: "How do I start a record label?",
                a: "To start a record label, begin by defining your genre niche and label identity. Write a business plan, register your business as an LLC for liability protection, and open a dedicated business bank account. Register with a performing rights organization like ASCAP or BMI, establish distribution through a digital distributor like DistroKid or TuneCore, and begin scouting and signing artists. Build your label's online presence through social media, a professional website, and playlist pitching to grow your first roster of artists."
              },
              {
                q: "How much does it cost to start a record label?",
                a: "Startup costs for a record label typically range from $1,000 to $10,000 or more depending on your scale. Key expenses include business registration and LLC formation ($100–$500), recording studio time ($500–$5,000 per project), digital distribution setup ($20–$100/year), website and branding ($500–$2,000), marketing and advertising ($500–$5,000), and music attorney fees for contract drafting ($500–$2,500). Starting lean with digital-first releases is a cost-effective approach for new independent labels."
              },
              {
                q: "Do I need a license to start a record label?",
                a: "You do not need a specific 'record label license,' but you do need to properly register your business entity (such as an LLC), obtain an EIN from the IRS, and register with a performing rights organization like ASCAP, BMI, or SESAC to collect royalties. If you plan to sell physical merchandise or operate from a commercial space, local business licenses may also be required. Working with a music attorney ensures you meet all legal and regulatory requirements."
              },
              {
                q: "What does a record label actually do?",
                a: "A record label is responsible for finding and signing artists, financing and overseeing recording sessions, manufacturing and distributing music, marketing and promoting releases, and collecting and distributing royalties. Labels also negotiate licensing deals, arrange tour support, handle public relations, and manage the overall development of each artist's career. Modern independent labels often handle all of these functions with lean teams and digital tools."
              },
              {
                q: "Is starting a record label profitable?",
                a: "Yes, record labels can be highly profitable, though building revenue takes time. Revenue comes from streaming royalties, sync licensing, merchandise, live performance splits, and brand partnerships. Profit margins vary widely based on the size of your roster, the commercial success of your releases, and your overhead costs. Independent labels that sign talented artists early and invest in strong marketing campaigns can generate significant returns as streaming numbers compound over time."
              },
              {
                q: "How do record labels make money?",
                a: "Record labels make money primarily through master recording royalties from streaming platforms, digital downloads, and physical sales. Additional income comes from sync licensing (placing music in TV, film, and ads), merchandise sales, 360 deal revenue shares from touring and endorsements, distribution fees, and advances recouped from artist earnings. Labels that build a strong catalog of recordings continue generating royalty income for decades."
              },
              {
                q: "How do I find and sign artists for my record label?",
                a: "Finding artists for your record label involves attending local live shows, open mic nights, and music festivals, as well as actively searching platforms like SoundCloud, Spotify, Instagram, and TikTok for emerging talent. Building a reputation as a fair and artist-friendly label attracts inbound submissions. Once you identify a promising artist, work with a music attorney to draft a recording contract that clearly outlines royalty splits, term length, creative rights, and any advance amounts."
              },
              {
                q: "What is the best business structure for a record label?",
                a: "An LLC (Limited Liability Company) is the best business structure for most independent record labels. It protects your personal assets from business liabilities such as contract disputes or copyright claims, which are common in the music industry. An LLC is straightforward to set up, cost-effective to maintain, and offers flexible tax treatment. For labels seeking significant outside investment or planning major expansion, an S Corp or C Corp may be worth considering as the business scales."
              },
              {
                q: "Do I need a music attorney to start a record label?",
                a: "While not legally required, having a music attorney is strongly recommended before signing any artists. Recording contracts, licensing agreements, distribution deals, and publishing splits are complex legal documents that can expose your label to significant risk if drafted or reviewed incorrectly. A qualified music attorney ensures your contracts are enforceable, fair, and protect the label's interests. Many music attorneys offer flat-fee contract templates or limited-scope consultations affordable for startup labels."
              },
              {
                q: "What are the biggest challenges of running a record label?",
                a: "Common challenges include finding commercially viable artists in a highly competitive talent market, managing the significant upfront investment in recording and promotion before seeing returns, navigating complex music licensing and copyright law, competing against major labels and established independents, and adapting to the rapidly evolving streaming landscape. Building a loyal fanbase for your artists through consistent marketing, social media engagement, and playlist placement is essential for overcoming these challenges and building long-term label revenue."
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
            Ready to Launch Your Record Label?
          </h2>
          <p className="text-xl mb-8 text-cyan-50 leading-relaxed">
            Take the first step toward building a thriving independent music business.
            Get your record label properly formed and legally protected today.
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
