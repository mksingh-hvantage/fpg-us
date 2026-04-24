import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Calendar, CheckCircle2, DollarSign, Sparkles, TrendingUp, FileText, Building2, Shield, Lightbulb } from 'lucide-react';

export default function SocialMediaInfluencer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="relative text-center text-white py-24 px-6 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
            alt="Social Media Influencer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/90 to-slate-700/80"></div>

        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6 leading-tight">
            How to Become a Social Media Influencer
          </h1>

          <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            Turn your passion for content creation into a thriving, monetized business. Whether
            you want to build a brand around beauty, fitness, travel, or lifestyle, this guide
            covers everything you need to launch and grow a successful social media influencer career.
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
              Why Become a Social Media Influencer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The global influencer marketing industry has surpassed $21 billion and continues
              to grow rapidly, creating extraordinary opportunities for content creators across
              every niche and platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A Booming Creator Economy</h3>
              <p className="text-gray-600 leading-relaxed">
                Brands are investing more than ever in influencer partnerships, with the
                creator economy projected to reach $480 billion by 2027. Every niche from
                beauty to finance is hungry for authentic, relatable content creators.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro-Influencers Thrive</h3>
              <p className="text-gray-600 leading-relaxed">
                You do not need millions of followers to earn real income. Micro-influencers
                with 10K–50K followers consistently outperform larger accounts in engagement
                rates, making them highly attractive to brands seeking targeted reach.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Revenue Streams</h3>
              <p className="text-gray-600 leading-relaxed">
                Influencers earn through sponsored posts, affiliate marketing commissions,
                ad revenue sharing, product sales, and brand gifting — creating diverse,
                scalable income that grows alongside your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Steps to Launch Your Influencer Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow this step-by-step roadmap to build a monetized, legally protected social media influencer business
            </p>
          </div>

          <div className="space-y-20">

            {[
              {
                title: "Define Your Niche and Content Strategy",
                desc: "The most successful influencers build their brand around a well-defined niche. Choosing a specific focus allows you to attract a loyal, engaged audience and position yourself as a credible authority that brands want to partner with.",
                points: [
                  "Identify your niche: beauty, fitness, travel, food, gaming, finance, parenting, or lifestyle",
                  "Research audience demand and which platforms your target viewers use most",
                  "Analyze competitors and find your unique angle, voice, and content style",
                  "Determine what content formats work best for your niche: video, photos, stories, or long-form"
                ],
                img: "https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg"
              },
              {
                title: "Create a Comprehensive Business Plan",
                desc: "Treating your influencer career as a real business from day one separates hobby creators from professional content entrepreneurs. A solid business plan clarifies your goals, income strategy, and the path to long-term profitability.",
                points: [
                  "Write an executive summary outlining your niche, target audience, and income goals",
                  "Define your business model: brand deals, affiliate income, product sales, or ad revenue",
                  "Map out your content calendar, posting frequency, and platform distribution strategy",
                  "Set financial projections including 6-month, 1-year, and 5-year revenue milestones"
                ],
                img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              },
              {
                title: "Name and Register Your Business",
                desc: "Registering your influencer business as a formal legal entity protects your personal assets and gives you the professional credibility brands and sponsors expect. Forming an LLC is the most popular and practical choice for content creators.",
                points: [
                  "Choose a business name: use your personal name with modifiers or create a unique brand name",
                  "Form an LLC to separate your personal finances from your business liabilities",
                  "Obtain an Employer Identification Number (EIN) from the IRS for tax purposes",
                  "Open a dedicated business bank account to track revenue, expenses, and tax obligations"
                ],
                img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
              },
              {
                title: "Set Up Legal Contracts and Financial Protections",
                desc: "Protecting your business legally before entering brand partnerships is critical. Clear, documented agreements prevent payment disputes and ensure you are fairly compensated for every piece of sponsored content you create.",
                points: [
                  "Draft a standard brand partnership contract covering deliverables, timelines, and compensation",
                  "Work with an attorney experienced in creator and influencer law to review agreements",
                  "Create an invoicing system to track payments and follow up on outstanding balances",
                  "Understand your tax obligations including self-employment tax and quarterly estimated payments"
                ],
                img: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
              },
              {
                title: "Build Your Media Kit and Online Presence",
                desc: "A professional media kit is your resume as an influencer — it signals to brands that you are serious, organized, and worth investing in. Pair it with a polished online presence that showcases your best content and audience engagement.",
                points: [
                  "Create a one-page media kit covering your niche, audience demographics, follower counts, and engagement rates",
                  "Include past brand collaborations, testimonials, and sample content in your kit",
                  "Build a professional website or landing page to serve as your brand's online hub",
                  "Maintain consistent branding across all social media profiles and platforms"
                ],
                img: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg"
              },
              {
                title: "Grow Your Audience and Monetize Your Influence",
                desc: "Consistent, high-quality content is the engine of audience growth. Once you have built an engaged following, strategically layering multiple income streams transforms your influence into sustainable, long-term business revenue.",
                points: [
                  "Post consistently and engage authentically with your audience to build trust and loyalty",
                  "Pitch brands directly or join influencer marketplaces to land your first sponsorship deals",
                  "Set up affiliate partnerships with brands in your niche to earn passive commission income",
                  "Launch digital products, courses, or merchandise to diversify beyond brand partnerships"
                ],
                img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
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
              Essential Skills for Influencer Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building a profitable influencer business requires more than great content —
              it demands a strategic blend of creativity, marketing savvy, business acumen, and data literacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Sparkles className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Creation & Storytelling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The ability to produce compelling, authentic, and visually engaging content
                that resonates with your audience and keeps them coming back is your most
                foundational skill as a creator
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media Strategy & Scheduling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Knowing when to post, how often to engage, and how to optimize content
                for each platform's algorithm significantly impacts your reach and
                audience growth trajectory
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Lightbulb className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Negotiation & Partnerships</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Understanding your market value, pitching brands confidently, and
                negotiating fair compensation for sponsored content is critical to
                building sustainable influencer income
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics & Audience Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tracking engagement rates, reach, impressions, and follower growth
                enables you to refine your content strategy, prove your value to brands,
                and make data-driven decisions for long-term growth
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
              Choosing the right legal structure is one of the most important decisions you will make
              when formalizing your social media influencer business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Building2 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">LLC (Recommended)</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Limited Liability Company is the most popular structure for social media
                influencers. It separates your personal assets from business liabilities,
                protects you in the event of brand disputes or legal claims, and gives
                sponsors and partners added confidence in your professionalism.
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
                  <span>Professional credibility with brands</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sole Proprietorship</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The simplest and cheapest way to get started, requiring no formal registration
                in most states. However, it provides no separation between your personal and
                business finances, meaning your personal assets are exposed if a brand deal
                or contract dispute turns into a legal claim.
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
                Best suited for high-earning influencers or creator businesses seeking outside
                investment, launching their own product lines, or scaling into a full media
                company. Corporations offer the strongest liability protection and the ability
                to bring on equity partners and investors.
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
              How Influencers Make Money
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Successful influencers build income across multiple monetization channels —
              understanding each revenue model helps you build a financially sustainable creator business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sponsored Posts & Brand Partnerships</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Brand sponsorships are the primary income source for most professional
                influencers. Brands pay creators to feature their products or services
                in posts, videos, or stories targeted at the creator's specific audience.
                Rates are driven by follower count, engagement rate, niche, and platform.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Earning range:</span> Influencers with
                  10K–50K followers earn $20–$1,250 per sponsored post; 1M+ followers can
                  command $25,000 or more per post
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Affiliate Marketing Commissions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Affiliate marketing allows influencers to earn a percentage of every sale
                generated through their unique referral links or discount codes. It requires
                no upfront investment, scales passively with content reach, and works
                exceptionally well for product-focused niches like fashion, beauty, and tech.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> An influencer promoting
                  skincare products at a 10% commission rate earns $1,000 for every
                  $10,000 in referred sales through their affiliate link
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ad Revenue & Creator Funds</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Platforms including YouTube, TikTok, and Facebook pay creators directly
                through ad revenue sharing programs and creator funds. As your content
                library grows and views compound over time, ad revenue becomes an
                increasingly significant and passive income stream.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> YouTube pays creators
                  approximately $3–$5 per 1,000 views (RPM); a channel generating
                  500K monthly views earns $1,500–$2,500 in ad revenue each month
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Sales & Digital Products</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Launching your own merchandise, courses, presets, e-books, or subscription
                communities transforms your audience into direct customers. Owned product
                revenue is the most profitable model because it eliminates the middleman
                and gives you full control over pricing and margins.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> An influencer with 50K
                  followers selling a $97 digital course to just 1% of their audience
                  generates $48,500 in a single launch
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
                q: "How do I become a social media influencer?",
                a: "To become a social media influencer, start by identifying a specific niche you are passionate about and knowledgeable in. Build profiles on the platforms where your target audience spends time and begin posting high-quality, consistent content. Engage authentically with your audience, grow your following organically, and formalize your business by registering an LLC and creating a media kit. Once you have an engaged audience, reach out to brands for sponsorship opportunities or join influencer marketing platforms to connect with relevant partners."
              },
              {
                q: "How much money do social media influencers make?",
                a: "Influencer earnings vary widely based on follower count, engagement rate, niche, and platform. Influencers with 1K–10K followers typically earn $2–$250 per sponsored post, while those with 10K–50K followers can earn $20–$1,250 per post. Influencers with 500K–1M followers command $1,000–$25,000 per post, and those with over 1 million followers can earn $25,000 or more per collaboration. Many influencers supplement sponsorship income with affiliate marketing, ad revenue, and their own product sales."
              },
              {
                q: "Do I need to register a business to be an influencer?",
                a: "While not legally required at the start, registering a formal business entity — especially an LLC — is strongly recommended as soon as you begin earning income from your content. An LLC protects your personal assets from business-related legal claims, provides tax flexibility, and gives brands additional confidence in your professionalism. It also allows you to open a dedicated business bank account, which simplifies bookkeeping and ensures accurate tax reporting."
              },
              {
                q: "What is the best social media platform for influencers?",
                a: "There is no single best platform for all influencers — the right choice depends on your niche and content format. YouTube is ideal for long-form educational or entertainment content and offers strong ad revenue. TikTok and Instagram excel for short-form video and visual content with fast audience growth potential. Pinterest works well for evergreen content in niches like food, fashion, and home design. Many successful influencers build a presence on two or three platforms to maximize reach and diversify their income."
              },
              {
                q: "What niche should I choose as an influencer?",
                a: "The best influencer niche is one you are genuinely passionate about, have real knowledge in, and that has a defined audience actively seeking content online. Popular and profitable niches include beauty and fashion, fitness and wellness, personal finance, travel, food and recipes, parenting and family life, technology, gaming, and home design. Choosing a niche you can sustain long-term is more important than chasing trending topics, as authenticity and consistency are the primary drivers of lasting audience growth."
              },
              {
                q: "How do I get brand deals as a new influencer?",
                a: "Getting your first brand deal starts with building a professional media kit that highlights your niche, audience demographics, follower counts, and engagement rates. Reach out directly to brands you already use and love with a personalized pitch. Join influencer marketing platforms such as AspireIQ, Creator.co, or GRIN to connect with brands actively seeking creators. Micro-influencers are in high demand due to their high engagement rates, so a smaller but loyal audience can still attract quality brand partnerships."
              },
              {
                q: "What legal contracts do influencers need?",
                a: "Every influencer should use a written brand partnership agreement before completing any sponsored content. This contract should clearly define deliverables, posting deadlines, content approval processes, compensation amounts, payment timelines, usage rights, and exclusivity terms. You should also have a clear invoicing system and terms of service if you sell digital products or offer consulting services. Working with an attorney experienced in influencer or creator law ensures your contracts protect your interests and comply with FTC disclosure requirements."
              },
              {
                q: "What is a media kit and do I need one?",
                a: "A media kit is a polished, one-page document that summarizes your personal brand, social media presence, audience demographics, engagement metrics, content examples, and past brand collaborations. Think of it as your influencer resume. Most brands and agencies request a media kit before entering into a partnership, making it an essential tool for monetizing your influence. A strong media kit should be visually consistent with your brand, clearly communicate your value, and be kept up to date as your following and metrics grow."
              },
              {
                q: "How do influencers pay taxes?",
                a: "Influencers are considered self-employed for tax purposes, meaning you are responsible for paying both income tax and self-employment tax (15.3%) on your net earnings. You will need to make quarterly estimated tax payments to the IRS to avoid penalties. Any income received from brand sponsorships, affiliate commissions, product sales, and ad revenue must be reported. Forming an LLC and working with a tax professional who specializes in self-employed creators can help you identify legitimate business deductions — such as equipment, software, and travel — to reduce your taxable income."
              },
              {
                q: "How long does it take to become a successful influencer?",
                a: "Building a profitable influencer business typically takes 6 months to 2 years of consistent effort, though results vary widely based on niche, platform, content quality, and posting frequency. Most influencers see meaningful audience growth after 3–6 months of consistent posting and engagement. Monetization often begins at the micro-influencer level (5K–10K followers), though some creators land small brand deals even earlier. Treating your influencer career as a long-term business — rather than a get-rich-quick opportunity — is the most reliable path to sustainable income."
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
            Ready to Become a Social Media Influencer?
          </h2>
          <p className="text-xl mb-8 text-cyan-50 leading-relaxed">
            Let content creation be your main focus. Get your influencer business
            properly formed and legally protected so you can grow with confidence.
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
