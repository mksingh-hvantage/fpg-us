import { useState } from 'react';
import { Helmet } from "react-helmet-async"; 
import GetStartedModal from '../components/GetStartedModal';
import { ArrowRight, CheckCircle, DollarSign, FileText, Globe, Megaphone, RefreshCw } from 'lucide-react';

export default function VirtualAddress() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      <Helmet>
  <title>
    Women-Owned Business Setup in USA – LLC & Company Registration for Women | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Start a women-owned business in the USA with expert support. The Future Perfect Global offers LLC formation, company registration, EIN application, compliance, and business consulting tailored for women entrepreneurs."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/start-a-business/women-business"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="women business setup USA, women owned business USA, women LLC formation USA, women entrepreneurs USA, start women business in USA, women company registration USA, women startup USA, EIN for women business"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/women-business"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/women-business"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Women-Owned Business Setup in USA – LLC & Company Registration"
  />
  <meta
    property="og:description"
    content="Launch your women-owned business in the USA with professional LLC formation, incorporation, EIN registration, and compliance services from The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/start-a-business/women-business"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Business Setup"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Women-Owned Business Setup in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Women-Owned Business Setup in USA – LLC & Company Registration"
  />
  <meta
    name="twitter:description"
    content="Empowering women entrepreneurs with complete business setup, LLC formation, and compliance services across the USA."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Future Perfect Global – Women Business Setup USA",
      "url": "https://us.thefutureperfectglobal.com/start-a-business/women-business",
      "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp",
      "description": "Professional women-owned business setup services in the USA including LLC formation, company registration, EIN application, compliance support, and consulting for women entrepreneurs.",
      "areaServed": [
        "United States",
        "California",
        "New York",
        "Texas",
        "Florida",
        "Delaware",
        "Wyoming",
        "Nevada"
      ],
      "serviceType": [
        "Women-Owned LLC Formation USA",
        "Women Business Registration USA",
        "EIN Registration",
        "Registered Agent Services",
        "Women Entrepreneur Consulting",
        "Compliance & Annual Filings"
      ]
    }`}
  </script>
</Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 to-slate-700 py-12 px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl font-extrabold text-white text-[55px] mb-6 leading-xl">
                Women in Business Resources & Support
              </h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Empower your entrepreneurial journey with comprehensive resources, networking opportunities, and expert guidance designed specifically for women business owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2">
                  Get Started <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women entrepreneurs"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Choose the Right Niche for Your Women-Owned Business
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Starting a women-owned business begins with selecting the right niche. 
            With the rise in entrepreneurship and more women launching businesses than ever before, 
            now is the perfect time to turn your ideas into a successful venture.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-10">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-slate-600 leading-relaxed">

            <p>
              The number of new business applications has grown significantly in recent years, 
              with women entrepreneurs leading the way. Choosing a niche that aligns with your 
              skills, interests, and long-term goals is essential for building a sustainable business.
            </p>

            <p>
              Before getting started, decide what type of business you want to launch and determine 
              the right legal structure. This early planning stage helps you create a strong 
              foundation for growth and profitability.
            </p>

            <p>
              Whether you prefer working from home, running an online business, or interacting 
              with clients in person, your niche should match your desired lifestyle and work environment.
            </p>

          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              Why Choosing the Right Niche Matters
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li>• Helps you stand out in a competitive market</li>
              <li>• Aligns your business with your lifestyle goals</li>
              <li>• Improves long-term profitability and growth</li>
              <li>• Makes marketing and branding more effective</li>
            </ul>
          </div>

        </div>

        {/* BUSINESS IDEAS */}
        <div className="mb-10">
          <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">
            Popular Women-Owned Business Ideas
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "Sell handmade products online",
              "Start an Amazon or eCommerce business",
              "Open a daycare or childcare center",
              "Launch a consulting business",
              "Offer pet care services",
              "Start a fitness or wellness business",
              "Become an event planner",
              "Start a photography business"
            ].map((idea, index) => (
              <div
                key={index}
                className="bg-cyan-50 border border-slate-200 rounded-2xl p-5 text-center hover:shadow-lg transition"
              >
                <p className="text-sm font-medium text-slate-700">
                  {idea}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="max-w-6xl mx-auto text-center text-slate-600">
          <p className="leading-relaxed">
            Take the time to evaluate your interests, strengths, and lifestyle goals before 
            finalizing your business niche. Choosing the right direction early will help you 
            build a business that is not only profitable but also fulfilling in the long run.
          </p>
        </div>

      </div>
    </section>

<section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How to Create a Successful Business Plan for a Women-Owned Business
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A well-structured business plan is the foundation of every successful 
            women-owned business. It helps you define your vision, understand your 
            market, and create a clear roadmap for growth, profitability, and long-term success.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Starting a business can feel overwhelming, but creating a business plan 
              doesn’t have to be complicated. By focusing on the right elements, you can 
              build a strong strategy that guides your decisions and helps attract investors, 
              partners, and customers.
            </p>

            <p>
              Whether you are launching a small startup or scaling an existing venture, 
              your business plan will act as a blueprint for operations, marketing, and 
              financial management.
            </p>

            {/* HIGHLIGHT BOX */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-sm text-white/80">
                💡 A powerful business plan not only helps you stay organized but also 
                increases your chances of securing funding and building a sustainable brand.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - STEPS */}
          <div className="grid sm:grid-cols-4 gap-6">

            {[
              {
                title: "Executive Summary",
                desc: "Provide a concise overview of your business plan, including your mission, vision, and key objectives."
              },
              {
                title: "Business Goals",
                desc: "Define clear, measurable goals that outline what you want to achieve with your business."
              },
              {
                title: "Business Description",
                desc: "Explain your business idea, background, and what makes your women-owned business unique."
              },
              {
                title: "Market Analysis",
                desc: "Research your target audience, competitors, and industry trends to identify demand."
              },
              {
                title: "Business Structure",
                desc: "Outline your team structure, ownership model, and operational setup."
              },
              {
                title: "Marketing & Sales Strategy",
                desc: "Detail how you will promote your business and convert leads into customers."
              },
              {
                title: "Financial Planning",
                desc: "Estimate startup costs, ongoing expenses, revenue projections, and profitability."
              },
              {
                title: "Appendices",
                desc: "Include supporting documents, references, and additional business details."
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
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Estimate Startup Costs & Secure Funding for Your Business
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Starting a business requires careful financial planning. From initial 
            setup costs to ongoing expenses, understanding your budget is essential 
            for long-term success. If you don’t have enough capital, there are multiple 
            funding options available to help you launch and grow your business.
          </p>
        </div>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* COST SECTION */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Understand Your Startup Costs
            </h3>

            <p className="text-slate-600 leading-relaxed mb-4">
              Every business requires upfront investment, including equipment, 
              licenses, marketing, and operational expenses. Accurately estimating 
              your startup costs helps you avoid financial surprises and plan 
              your funding strategy effectively.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Creating a detailed budget allows you to determine how much capital 
              you need and ensures you’re financially prepared before launching 
              your business.
            </p>
          </div>

          {/* FUNDING INTRO */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Explore Business Funding Options
            </h3>

            <p className="text-white/80 leading-relaxed mb-4">
              If your available funds are not enough, don’t worry. Many organizations 
              and financial institutions offer funding opportunities to help 
              entrepreneurs turn their ideas into reality.
            </p>

            <p className="text-white/80 leading-relaxed">
              From government programs to private grants and investors, you can 
              choose the funding source that best fits your business goals.
            </p>
          </div>

        </div>

        {/* FUNDING SOURCES */}
        <div className="mb-20">
          <h3 className="text-3xl font-extrabold text-cyan-600 mb-10">
            Popular Funding Sources for Entrepreneurs
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Government Funding Programs",
                desc: "Access grants, loans, and business support programs designed to help small businesses grow and succeed."
              },
              {
                title: "Amber Grant for Women",
                desc: "A popular funding program offering monthly and annual grants to women entrepreneurs across industries."
              },
              {
                title: "IFundWomen Platform",
                desc: "A funding ecosystem that combines crowdfunding, coaching, and grants specifically for women-led businesses."
              },
              {
                title: "Tory Burch Foundation",
                desc: "Provides financial support, mentorship, and fellowship programs for women entrepreneurs."
              },
              {
                title: "Cartier Women’s Initiative",
                desc: "A global program offering funding, mentorship, and recognition to women-led startups."
              },
              {
                title: "Alternative Funding Options",
                desc: "Explore bank loans, business credit lines, crowdfunding platforms, venture capital, or personal funding sources."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition"
              >
                <h4 className="font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-6">
            Ready to fund your business and turn your idea into reality?
          </p>

          <button className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition shadow-md">
            Get Funding Guidance
          </button>
        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            How to Legally Register Your Daycare Business
          </h2>
          <p className="text-lg text-slate-600">
            Register your business, choose the right structure, and unlock growth opportunities with proper certification.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE (STICKY PANEL) */}
          <div className="lg:sticky top-24 space-y-6">

            {/* MAIN CARD */}
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Start Strong with the Right Foundation
              </h3>

              <p className="text-slate-600 leading-relaxed mb-4">
                Choosing the right business structure and completing legal registration 
                are critical steps to protect your assets and build a scalable company.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Whether you're launching a side hustle or a full-time business, 
                proper setup ensures long-term success.
              </p>
            </div>

            {/* CTA CARD */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-6 rounded-3xl shadow-lg">
              <p className="text-sm text-white/80 mb-2">
                Ready to get started?
              </p>
              <p className="font-semibold text-lg mb-4">
                Register your business and launch with confidence.
              </p>

              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
                Start Now
              </button>
            </div>

          </div>

          {/* RIGHT SIDE (TIMELINE) */}
          <div className="relative">

            {/* LINE */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"></div>

            <div className="space-y-10">

              {[
                {
                  title: "Choose Your Business Structure",
                  desc: "Select from LLC, sole proprietorship, partnership, or corporation based on your goals and liability needs."
                },
                {
                  title: "Register Your Business",
                  desc: "File official documents like Articles of Organization or Incorporation with your state authority."
                },
                {
                  title: "Submit to State Authorities",
                  desc: "Complete your registration through the Secretary of State or relevant agency in your region."
                },
                {
                  title: "Understand Filing Costs",
                  desc: "Registration fees vary by state, typically ranging between $40 and $500."
                },
                {
                  title: "Get Certified (WOSB / EDWOSB)",
                  desc: "Apply for woman-owned business certification to access funding, grants, and government contracts."
                },
                {
                  title: "Choose Certification Method",
                  desc: "Apply through SBA or approved organizations like WBENC or the Women's Chamber of Commerce."
                }
              ].map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">

                  {/* DOT */}
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-cyan-600 text-white font-bold shadow-md">
                    {index + 1}
                  </div>

                  {/* CARD */}
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition w-full">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Maintain and Grow Your Business Successfully
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            To build a sustainable and profitable business, ongoing maintenance, 
            financial management, and strategic growth planning are essential. 
            Staying compliant and proactive helps you avoid penalties while 
            maximizing long-term success.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-slate-600 leading-relaxed">

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Business planning and growth strategy"
                className="w-full h-[340px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow">
                <p className="text-xs text-slate-500">Business Growth</p>
                <p className="text-sm font-semibold text-slate-900">
                  Plan • Manage • Scale
                </p>
              </div>
            </div>
            <p>
              Business success doesn’t stop after launch. Regular compliance, 
              smart financial planning, and consistent marketing efforts are key 
              to maintaining stability and scaling your operations.
            </p>

            <p>
              By focusing on essential administrative tasks and optimizing your 
              marketing strategy, you can attract more customers, increase revenue, 
              and strengthen your brand presence in the market.
            </p>

            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md">
              <p className="text-sm text-white/80">
                Pro Tip: Consistent monitoring of your finances, licenses, and 
                marketing performance can significantly reduce risks and improve 
                long-term business growth.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="space-y-5">

            {[
              {
                icon: <FileText className="w-5 h-5 text-cyan-600" />,
                title: "File Annual Reports",
                desc: "Keep your business compliant by submitting annual reports with updated details such as ownership, location, and operations."
              },
              {
                icon: <DollarSign className="w-5 h-5 text-cyan-600" />,
                title: "Manage Taxes & Finances",
                desc: "Pay quarterly estimated taxes, file annual returns, and maintain proper financial records to ensure stability and compliance."
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-cyan-600" />,
                title: "Renew Licenses & Contracts",
                desc: "Regularly renew business licenses, permits, and agreements with employees, vendors, and partners to avoid disruptions."
              },
              {
                icon: <Megaphone className="w-5 h-5 text-cyan-600" />,
                title: "Optimize Your Marketing Strategy",
                desc: "Use cost-effective marketing channels like SEO, social media, email marketing, and promotions to grow your audience."
              },
              {
                icon: <Globe className="w-5 h-5 text-cyan-600" />,
                title: "Keep Your Website Updated",
                desc: "Maintain a modern, user-friendly website by updating content, design, and performance regularly to attract customers."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition"
              >
                <div className="bg-cyan-50 p-3 rounded-xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>

      {/* Getting Started Section */}
      <section className="py-20 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-4">Get Started in 4 Simple Steps</h2>
          <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Launching your business has never been easier with our guided process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Define Your Vision",
                description: "Clarify your business idea, target market, and unique value proposition."
              },
              {
                number: "2",
                title: "Create Your Plan",
                description: "Use our templates to develop a comprehensive business and financial plan."
              },
              {
                number: "3",
                title: "Set Up Your Business",
                description: "Handle legal structure, registration, and get your professional business address."
              },
              {
                number: "4",
                title: "Launch & Grow",
                description: "Execute your plan, connect with the community, and scale your business."
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center bg-white border border-gray-100 p-6">
                <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-10">Women Entrepreneurs Are Growing Faster Than Ever</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "42%", label: "Women-owned businesses growing annually" },
              { number: "12M+", label: "Women entrepreneurs in the US" },
              { number: "$1.9T", label: "Economic impact of women-owned businesses" },
              { number: "2.4x", label: "Faster growth rate than average businesses" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-gray-800 rounded-lg">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{stat.number}</div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-10">Essential Resources for Women Business Owners</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Funding & Finance</h3>
              <ul className="space-y-4">
                {[
                  "Small business loans for women entrepreneurs",
                  "Grant opportunities and funding programs",
                  "Financial planning and bookkeeping guides",
                  "Tax strategies and deductions",
                  "Investor pitch resources and templates",
                  "Crowdfunding best practices"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-12 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Marketing & Branding</h3>
              <ul className="space-y-4">
                {[
                  "Brand development and identity creation",
                  "Digital marketing strategies",
                  "Social media content calendar templates",
                  "Email marketing best practices",
                  "SEO and content marketing guide",
                  "Customer acquisition strategies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-purple-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-12 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Legal & Compliance</h3>
              <ul className="space-y-4">
                {[
                  "Business structure and registration guide",
                  "Required licenses and permits checklist",
                  "Contract templates and samples",
                  "Intellectual property protection",
                  "Employment law basics",
                  "Insurance requirements for businesses"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-cyan-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-12 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operations & Growth</h3>
              <ul className="space-y-4">
                {[
                  "Operations planning and management",
                  "Hiring and team building guides",
                  "Customer service best practices",
                  "Technology and tools recommendations",
                  "Scaling your business playbook",
                  "Work-life balance strategies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-red-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-slate-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Start Your Business Journey?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join thousands of successful women entrepreneurs who have used our platform to build thriving businesses. Get access to all resources, tools, and community support today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Create Free Account <ArrowRight size={20} />
            </button>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              Schedule Consultation
            </a>
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
