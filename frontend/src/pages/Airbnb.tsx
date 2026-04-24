import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { CheckCircle2, MapPin, Users, ChevronRight, Star, ChevronDown, Camera, Home, Sparkles, MessageSquare, Search, Target, Briefcase, DollarSign, Settings, AlertTriangle, FileText, ShieldCheck, ExternalLink, Wrench } from 'lucide-react';

type FAQ = {
  q: string;
  a: string;
};

export default function Airbnb() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      q: "How much can I earn as an Airbnb host?",
      a: "Earnings depend on your location, property type, pricing, and occupancy rate. Most hosts earn between $500 to $2,000+ per month, while premium properties in high-demand areas can earn significantly more."
    },
    {
      q: "Do I need special insurance to host?",
      a: "Airbnb provides Host Protection Insurance up to $1M–$3M in many regions, but it’s recommended to check local regulations and consider additional homeowner or short-term rental insurance."
    },
    {
      q: "Can I host part-time or only on weekends?",
      a: "Yes, absolutely. Many hosts list their property only on weekends, holidays, or selected dates, making hosting flexible alongside full-time jobs or personal use."
    },
    {
      q: "What happens if a guest damages my property?",
      a: "Airbnb offers AirCover for Hosts, which includes protection against guest damage. You should document damages promptly and file a claim through Airbnb’s Resolution Center."
    },
    {
      q: "How do I handle taxes on Airbnb income?",
      a: "Airbnb income is generally taxable. You should keep records of earnings and expenses and consult a tax professional. In some regions, Airbnb may collect and remit local occupancy taxes automatically."
    },
    {
      q: "Do I need to register or get a license to host?",
      a: "This depends on your city or country. Some locations require host registration, permits, or licenses. Always check local laws before listing your property."
    },
    {
      q: "Can I list a shacyan room or private room?",
      a: "Yes. Airbnb allows listings for entire homes, private rooms, and shacyan spaces. Each option has different earning potential and guest expectations."
    },
    {
      q: "How do I price my listing competitively?",
      a: "Use Airbnb’s Smart Pricing tool, analyze similar listings in your area, and adjust prices based on seasonality, events, and demand to maximize occupancy and revenue."
    },
    {
      q: "Is hosting safe?",
      a: "Airbnb offers identity verification, secure payments, guest reviews, and 24/7 customer support. Hosts can also set house rules and approve or decline booking requests."
    },
    {
      q: "How much time does hosting require?",
      a: "Time commitment varies. Some hosts spend just a few hours per week using automated check-ins and cleaning services, while others are more hands-on."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-white">
     <Helmet>
  {/* Title */}
  <title>Start an Airbnb Business in USA | Setup, Licensing & Compliance</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Learn how to start an Airbnb business in the USA. Get expert guidance on LLC formation, licenses, permits, tax registration, and compliance for short-term rentals."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/start-a-business/airbnb"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/airbnb"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/airbnb"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="Start an Airbnb Business in USA | Setup & Compliance Guide"
  />
  <meta
    property="og:description"
    content="Step-by-step guide to starting an Airbnb business in the USA, including LLC setup, permits, tax compliance, and short-term rental regulations."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/start-a-business/airbnb"
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
    content="Start an Airbnb Business in USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Start an Airbnb Business in USA | Complete Guide"
  />
  <meta
    name="twitter:description"
    content="Discover how to legally start and manage an Airbnb business in the USA with LLC formation, licensing, and compliance support."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Start an Airbnb Business in the USA",
      "url": "https://us.thefutureperfectglobal.com/start-a-business/airbnb",
      "description": "A comprehensive guide on starting an Airbnb business in the USA, covering LLC formation, short-term rental licenses, tax registration, and compliance requirements.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global – USA Business Setup",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        }
      }
    }`}
  </script>
</Helmet>

      <main>
        <section className="relative py-16 flex items-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-6 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}
              <div className="text-white">
                <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-sm tracking-wide">
                  Airbnb Hosting Opportunity
                </span>

                <h1 className="text-5xl font-extrabold leading-tight mb-6">
                  Turn Your Space Into
                  <span className="block text-cyan-400">
                    Monthly Income
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-xl">
                  Host your home, earn passive income, and join thousands of successful Airbnb hosts around the world.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      setSelectedBusinessType("");
                      setIsModalOpen(true);
                    }}
                    className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:opacity-90 transition flex items-center gap-2 shadow-lg"
                  >
                    Get Started Today <ChevronRight className="w-5 h-5" />
                  </button>

                  <button className="px-8 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition">
                    Learn More
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>

                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200"
                  alt="Airbnb Hosting"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Start a Profitable Airbnb Business
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Learn how to launch, manage, and scale a successful Airbnb business.
            From choosing the right property to maximizing bookings and revenue,
            this complete guide helps you build a sustainable rental business.
          </p>
        </div>

        {/* INTRO + GUIDE */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">

          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
  Starting an Airbnb business is one of the most accessible and profitable ways 
  to enter the modern hospitality industry. With millions of active users worldwide, 
  Airbnb offers a powerful marketplace for hosts to generate consistent income 
  through short-term rentals, vacation homes, and property leasing. Whether you're 
  renting out a single room or managing multiple properties, the platform provides 
  strong earning potential and global reach.
</p>

<p>
  This comprehensive guide walks you through every step of launching and scaling 
  a successful Airbnb business—from validating your rental business idea and choosing 
  the right property, to setting up your listing, optimizing pricing strategies, 
  managing bookings, and increasing occupancy rates. 
</p>
          </div>

          {/* GUIDE CARD */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              What You’ll Learn
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li>• Airbnb business models & ideas</li>
              <li>• Legal setup, licenses & taxes</li>
              <li>• Pricing, bookings & revenue strategies</li>
              <li>• Tools, communities & support</li>
              <li>• How to validate your business idea</li>
              <li>• Building a scalable Airbnb brand</li>
            </ul>
          </div>

        </div>

        {/* STATS BENTO */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-cyan-50 p-8 rounded-3xl shadow-md">
            <p className="text-4xl font-bold text-cyan-600">150M+</p>
            <p className="text-slate-500 mt-2">Active Airbnb Users</p>
          </div>

          <div className="bg-cyan-50 p-8 rounded-3xl shadow-md">
            <p className="text-4xl font-bold text-cyan-600">$34B+</p>
            <p className="text-slate-500 mt-2">Economic Impact (U.S.)</p>
          </div>

          <div className="bg-cyan-50 p-8 rounded-3xl shadow-md">
            <p className="text-4xl font-bold text-cyan-600">500M+</p>
            <p className="text-slate-500 mt-2">Total Guest Stays</p>
          </div>

        </div>

        {/* WHY INDUSTRY */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-3xl mb-12">
          <h3 className="text-2xl font-bold mb-6">
            Why Start an Airbnb Business?
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">
            {[
              "Millions of users actively book short-term stays worldwide",
              "High demand for alternative accommodations over hotels",
              "Strong year-on-year growth in bookings",
              "Flexible income potential for property owners",
              "Scalable model with multiple property listings",
              "Growing demand for group and family stays"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TWO COLUMN (DAY + SKILLS) */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          {/* DAY IN LIFE */}
          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              A Day in the Life of an Airbnb Host
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
              <p>• Managing guest inquiries</p>
              <p>• Handling bookings</p>
              <p>• Coordinating cleaning</p>
              <p>• Property maintenance</p>
              <p>• Updating listings</p>
              <p>• Pricing optimization</p>
              <p>• Responding to reviews</p>
              <p>• Improving guest experience</p>
            </div>
          </div>

          {/* SKILLS */}
          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Essential Skills for Airbnb Hosts
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
              <p>• Organization & time management</p>
              <p>• Communication skills</p>
              <p>• Financial planning</p>
              <p>• Customer service</p>
              <p>• Pricing strategy</p>
              <p>• Property management</p>
            </div>
          </div>

        </div>

        {/* GUEST EXPECTATIONS */}
        <div className="mb-12">
          <h3 className="text-4xl font-extrabold text-center mb-10 text-slate-900">
            What Airbnb Guests Expect
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Clean, safe, and well-maintained properties",
              "Accurate listings and clear descriptions",
              "Affordable pricing based on value",
              "Essential amenities like toiletries and linens",
              "Easy access and smooth check-in experience",
              "Local information and support from hosts"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-cyan-50 p-6 rounded-2xl text-base text-slate-600 hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg max-w-xl">
            Ready to launch your Airbnb business? Start building your rental
            empire today and turn your property into a profitable asset.
          </p>

          <button onClick={() => {
                      setSelectedBusinessType("");
                      setIsModalOpen(true);
                    }} className="bg-cyan-500 px-8 py-3 rounded-xl font-medium hover:bg-cyan-400 transition">
            Get Started Now
          </button>
        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-20">
          <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Create a Standout Airbnb Business That Drives Bookings
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Build a high-performing Airbnb listing by combining design, visibility, 
            and guest experience. A unique property helps you rank higher, attract 
            more guests, and increase long-term revenue.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE - STACKED FEATURE CARDS */}
          <div className="relative">

            {/* BIG CARD */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl mb-6">
              <Camera className="w-8 h-8 mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2">
                Professional Property Photography
              </h3>
              <p className="text-white/70 text-sm">
                High-quality visuals dramatically improve click-through rates and booking conversions.
              </p>
            </div>

            {/* SMALL STACK */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white border p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                <Home className="w-6 h-6 text-cyan-600 mb-2" />
                <p className="text-base font-bold text-slate-800">
                  Upgrade Interiors & Design
                </p>
              </div>

              <div className="bg-white border p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                <Sparkles className="w-6 h-6 text-cyan-600 mb-2" />
                <p className="text-base font-bold text-slate-800">
                  Highlight Unique Features
                </p>
              </div>

              <div className="bg-white border p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                <MapPin className="w-6 h-6 text-cyan-600 mb-2" />
                <p className="text-base font-bold text-slate-800">
                  Promote Location Benefits
                </p>
              </div>

              <div className="bg-white border p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                <Star className="w-6 h-6 text-cyan-600 mb-2" />
                <p className="text-base font-bold text-slate-800">
                  Build Strong Guest Reviews
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="space-y-6">

            <h3 className="text-3xl font-bold text-slate-900 leading-snug">
              Turn Your Property into a High-Converting Airbnb Listing
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Success in the Airbnb business depends on how well your property stands out. 
              A well-designed listing with strong visuals, compelling descriptions, and 
              positive guest feedback can significantly increase your visibility and bookings.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Focus on creating a memorable guest experience while clearly communicating 
              your property’s value. This not only improves rankings but also builds trust 
              and repeat customers.
            </p>

            {/* HIGHLIGHT STRIP */}
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 rounded-lg">
              <p className="text-sm text-slate-700">
                💡 Listings with professional photos, strong reviews, and unique features 
                consistently outperform generic properties.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-20">
  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
    How to Validate Your Airbnb Business Idea for Long-Term Success
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed">
    Starting an Airbnb business can be easy, but building a profitable and scalable 
    short-term rental business requires proper market validation. Before investing 
    time, money, and resources, you need to analyze local demand, study your competition, 
    and identify the best positioning for your Airbnb listing to maximize occupancy 
    and revenue.
  </p>
</div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="group border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition bg-gradient-to-b from-white to-slate-50">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-cyan-600/10 text-cyan-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Define Your Unique Selling Proposition
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              To succeed in the competitive Airbnb market, your listing must stand out. 
              Identify your unique selling points such as location, amenities, design, 
              or guest experience that differentiate your property from others.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition bg-gradient-to-b from-white to-slate-50">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-cyan-600/10 text-cyan-600">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Analyze Local Competition
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Research existing Airbnb listings in your area to understand pricing, 
              occupancy trends, and positioning. A healthy level of competition indicates 
              demand, but oversaturation can impact profitability.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition bg-gradient-to-b from-white to-slate-50">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-cyan-600/10 text-cyan-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Understand Your Target Market
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Identify the type of guests you want to attract. Tailor your property 
              experience based on their preferences—modern and vibrant for younger 
              travelers or peaceful and nature-focused for families and older guests.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="group border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition bg-gradient-to-b from-white to-slate-50">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-cyan-600/10 text-cyan-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Engage with Industry Communities
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Join Airbnb host communities, forums, and business groups to gain 
              insights from experienced hosts. Learning from real-world experiences 
              can help you avoid costly mistakes and refine your strategy.
            </p>
          </div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Create a Profitable Airbnb Business Plan
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A well-defined Airbnb business plan is essential for building a successful short-term rental business. 
            It helps you organize your operations, optimize bookings, manage costs, and create a scalable revenue model.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed">

            <p>
              Many property owners assume that listing on Airbnb is enough to generate income. 
              However, a structured business plan is critical if you want to maximize occupancy, 
              increase profitability, and build a long-term rental business.
            </p>

            <p>
              Your plan should clearly define how you will manage your property, attract guests, 
              set pricing strategies, and deliver a high-quality guest experience.
            </p>

            <p>
              Financial planning is equally important. You need to estimate booking revenue, 
              maintenance costs, operational expenses, and overall profitability to ensure 
              your Airbnb business remains sustainable and scalable.
            </p>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl h-fit">
            <h3 className="text-xl font-semibold mb-6">
              Key Financial Considerations
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li>• Expected booking revenue & occupancy rate</li>
              <li>• Property purchase or rental costs</li>
              <li>• Maintenance, utilities & cleaning expenses</li>
              <li>• Pricing strategy & seasonal demand</li>
              <li>• Profit margins & reinvestment planning</li>
            </ul>
          </div>

        </div>

        {/* PLAN STEPS */}
        <div className="mt-20">
  <h3 className="text-3xl font-extrabold text-slate-900 mb-14">
    What Should Your Airbnb Business Plan Include?
  </h3>

  <div className="relative">

    {/* CENTER LINE */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2"></div>

    <div className="space-y-12">

      {[
        "Executive summary outlining your Airbnb business goals and strategy",
        "Clear objectives and growth plan for your rental business",
        "Business description, property details, and market positioning",
        "Market analysis, demand trends, and competitor insights",
        "Business structure and operational setup",
        "Revenue model and pricing strategy",
        "Marketing and guest acquisition strategy",
        "Financial projections, revenue forecasts, and profitability",
        "Supporting documents and additional information"
      ].map((item, index) => {

        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center ${
              isLeft ? "md:justify-start" : "md:justify-end"
            }`}
          >

            {/* CARD */}
            <div className={`w-full md:w-[45%]`}>
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition">

                <div className="flex items-start gap-4">

                  {/* NUMBER */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-teal-500 text-white font-bold shadow-md">
                    {index + 1}
                  </div>

                  {/* TEXT */}
                  <p className="text-base text-slate-600 leading-xl">
                    {item}
                  </p>

                </div>

              </div>
            </div>

            {/* DOT ON LINE */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow"></div>

          </div>
        );
      })}

    </div>
  </div>
</div>

      </div>
    </section>


<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Choose the Right Business Structure for Your Airbnb Business
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Selecting the right legal structure is a crucial step when starting an Airbnb business. 
            It impacts your liability, taxes, and long-term scalability. Choosing the right entity 
            ensures your business is protected, compliant, and ready for growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Sole Proprietorship",
                desc: "The simplest structure where the business is not legally separate from the owner. While easy to start, it does not offer liability protection."
              },
              {
                title: "Partnership",
                desc: "Formed when two or more individuals operate a business together. It is simple to establish but may lack strong legal protection."
              },
              {
                title: "Limited Liability Company (LLC)",
                desc: "The most popular choice for Airbnb businesses. It offers liability protection, flexibility, and minimal administrative requirements."
              },
              {
                title: "S Corporation",
                desc: "A more complex structure that provides tax benefits but involves stricter compliance. Generally suited for larger businesses."
              },
              {
                title: "C Corporation",
                desc: "Designed for large-scale enterprises. It offers strong legal protection but comes with higher costs and regulatory complexity."
              }
            ].map((item, index) => (

              <div
                key={index}
                className={`p-6 rounded-2xl border transition hover:shadow-lg ${
                  item.title.includes("LLC")
                    ? "border-cyan-500 bg-cyan-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1" />
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* RECOMMENDED BADGE */}
                {item.title.includes("LLC") && (
                  <span className="inline-block mt-4 text-xs font-medium bg-cyan-600 text-white px-3 py-1 rounded-full">
                    Recommended for Most Airbnb Businesses
                  </span>
                )}
              </div>

            ))}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* INFO CARD */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Why Business Structure Matters
              </h3>

              <ul className="space-y-3 text-base text-white/80">
                <li>• Protect your personal assets</li>
                <li>• Optimize taxes and compliance</li>
                <li>• Build credibility with customers</li>
                <li>• Prepare for future growth</li>
              </ul>
            </div>

            {/* CTA CARD */}
            <div className="bg-gradient-to-br from-cyan-600 to-teal-500 text-white p-6 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-3">
                Start Your Airbnb Business Today
              </h3>

              <p className="text-base text-white/90 mb-6">
                Get expert guidance on choosing the right structure and registering your business with ease.
              </p>

              <button onClick={() => {
                      setSelectedBusinessType("");
                      setIsModalOpen(true);
                    }} className="w-full bg-white text-cyan-600 font-semibold py-3 rounded-xl hover:bg-slate-100 transition">
                Get Started Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-xl">
            Set Up Your Airbnb Business Operations for Long-Term Success
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            After registering your Airbnb business, it’s essential to establish 
            strong operational systems. From financial management to software tools, 
            building the right foundation will help you streamline processes, reduce 
            costs, and scale your short-term rental business efficiently.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* FINANCE */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mb-6">
              <DollarSign />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Financial Management
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Open a dedicated business bank account and consider using a business 
              credit card. Maintain accurate bookkeeping records and ensure timely 
              tax filing to keep your Airbnb business compliant and financially healthy.
            </p>
          </div>

          {/* LOCATION */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-6">
              <MapPin />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Business Location Setup
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Most Airbnb businesses can be managed remotely or from home, helping 
              reduce overhead costs. You may also benefit from tax deductions on 
              utilities and workspace expenses.
            </p>
          </div>

          {/* EQUIPMENT */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6">
              <Briefcase />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Equipment & Supplies
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Running an Airbnb business requires minimal equipment such as a laptop 
              or smartphone. However, maintaining your rental properties requires 
              proper supplies and inventory management.
            </p>
          </div>

          {/* EMPLOYEES */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-rose-100 text-rose-600 mb-6">
              <Users />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Staffing & Support
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              While full-time employees may not be necessary, outsourcing services 
              like cleaning, maintenance, and repairs ensures smooth day-to-day operations.
            </p>
          </div>

          {/* SOFTWARE */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-6">
              <Settings />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Software & Automation
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Use property management software, booking tools, and automation systems 
              to streamline operations, improve guest experience, and manage your 
              Airbnb listings efficiently.
            </p>
          </div>

        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Airbnb Regulations, Licenses & Tax Requirements
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Starting an Airbnb business requires more than just listing your property. 
            Understanding legal requirements, local regulations, and tax obligations 
            is essential to operate safely and profitably.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* LEFT - REGULATIONS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
            
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-7 h-7 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Licenses & Regulations
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Operating an Airbnb or short-term rental business requires compliance 
                with local, state, and federal regulations. You may need specific licenses, 
                permits, and approvals depending on your location.
              </p>

              <p>
                Zoning laws and municipal rules can restrict or regulate short-term rentals. 
                Some cities limit hosting permissions or require registration, and failure 
                to comply can result in fines or legal action.
              </p>

              <p>
                Always verify requirements with local authorities to ensure your Airbnb 
                business operates legally and avoids unnecessary risks.
              </p>
            </div>
          </div>

          {/* RIGHT - TAXES */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg">
            
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-7 h-7 text-cyan-400" />
              <h3 className="text-2xl font-bold">
                Airbnb Taxes & Compliance
              </h3>
            </div>

            <div className="space-y-4 text-white/80 leading-relaxed text-sm">
              <p>
                Running an Airbnb business involves multiple tax obligations. 
                Depending on your structure and location, you may need to pay 
                self-employment tax, state income tax, and federal income tax.
              </p>

              <p>
                If you provide additional services or sell products, you may also 
                be responsible for sales and use taxes.
              </p>

              <p>
                A common best practice is to set aside approximately 
                <span className="font-semibold text-white"> 25%–30% of your earnings </span> 
                to cover tax liabilities and avoid cash flow issues.
              </p>
            </div>
          </div>

        </div>

        {/* ALERT / NOTE */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start max-w-4xl mx-auto">
          <AlertTriangle className="w-6 h-6 text-amber-600 mt-1" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Important:</strong> This content may include affiliate links. 
            We may earn a commission if you purchase through these links. 
            Always review official sources or consult professionals for legal and tax advice.
          </p>
        </div>

      </div>
    </section>

    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-6xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Maintaining Your Airbnb Business Compliance
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            To run a successful and legally compliant Airbnb business, it’s essential 
            to stay on top of ongoing legal, financial, and operational requirements. 
            Proper compliance not only protects your business but also ensures 
            long-term growth and stability in the short-term rental industry.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "File Annual Business Reports",
              desc: "Most jurisdictions require businesses to submit an annual report detailing ownership updates and key business changes to maintain good legal standing."
            },
            {
              title: "Pay Estimated Taxes",
              desc: "Airbnb hosts are required to pay quarterly estimated taxes based on projected earnings, typically due in April, June, September, and January."
            },
            {
              title: "Renew Licenses & Permits",
              desc: "Ensure all business licenses, permits, and local registrations are renewed annually to avoid penalties or disruptions in operations."
            },
            {
              title: "File Annual Tax Returns",
              desc: "Submit your business tax returns accurately and on time to comply with government regulations and maintain financial transparency."
            },
            {
              title: "Manage Payroll & Sales Taxes",
              desc: "If you employ staff or collect applicable taxes, ensure timely payroll and sales tax payments to remain compliant."
            },
            {
              title: "Secure Business Insurance",
              desc: "Protect your Airbnb business with comprehensive insurance coverage, including property, liability, and guest-related risks."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition bg-slate-50"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-base text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* NUMBER TAG */}
              <div className="mt-4 text-xs font-medium text-cyan-600">
                Step {index + 1}
              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg max-w-xl">
            Stay compliant, avoid penalties, and build a sustainable Airbnb business 
            with proper legal and financial management.
          </p>

          <a href="/contact" target="_blank" className="bg-cyan-500 px-6 py-3 rounded-xl font-medium hover:bg-cyan-400 transition">
            Get Expert Help
          </a>
        </div>

      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Essential Insurance for Your Airbnb Business
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Protect your Airbnb or short-term rental business with the right insurance coverage. 
            From liability protection to employee safety, having proper insurance ensures long-term 
            stability, risk management, and financial security.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* WORKERS COMP */}
          <div className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 mb-6 group-hover:scale-110 transition">
              <Users className="w-7 h-7 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Workers’ Compensation Insurance
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              Workers’ compensation insurance is essential if you employ staff in your Airbnb business. 
              It covers job-related injuries, illnesses, and disabilities, including medical expenses, 
              lost wages, rehabilitation, and employee support. Requirements vary by region, so ensure 
              compliance with local laws.
            </p>
          </div>

          {/* GENERAL LIABILITY */}
          <div className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 mb-6 group-hover:scale-110 transition">
              <ShieldCheck className="w-7 h-7 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              General Liability Insurance
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              General liability insurance protects your Airbnb business from legal claims, including 
              guest injuries, property damage, and personal liability issues. It helps cover legal 
              fees, settlements, and unexpected financial risks, ensuring your business remains secure.
            </p>
          </div>

          {/* HOME & AUTO */}
          <div className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 mb-6 group-hover:scale-110 transition">
              <Home className="w-7 h-7 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Home & Auto Insurance Coverage
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              If you manage your Airbnb from home or use a vehicle for business operations, review your 
              existing home and auto insurance policies. Ensure they include business usage coverage or 
              upgrade to specialized insurance plans designed for short-term rental businesses.
            </p>
          </div>

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

        <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden transition hover:border-cyan-300"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="font-bold text-lg text-gray-900">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-6">Ready to Start Hosting?</h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
              Join our community of successful hosts. Transform your spare space into a profitable business today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="px-8 py-3 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Sign Up Now
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-semibold">
                Schedule Demo
              </button>
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

