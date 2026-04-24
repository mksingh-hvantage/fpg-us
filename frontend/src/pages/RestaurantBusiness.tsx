import { ChefHat, Users, DollarSign, ChevronDown, BarChart3, Sparkles, ClipboardList, Briefcase, Megaphone, Settings, UserCheck, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
export default function RestaurantBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const [expandedFAQ, setExpandedFAQ] = useState
<number | null>
(null);
const toggleFAQ = (index: number) => {
setExpandedFAQ(expandedFAQ === index ? null : index);
};
const skills = [
{
icon: UserCheck,
title: "Hiring & Recruitment",
desc: "Identify, interview, and hire skilled restaurant staff for both front-of-house and kitchen roles. Building a strong team is essential for any successful restaurant business.",
},
{
icon: Users,
title: "People Management",
desc: "Manage employees, schedules, conflicts, and team performance. Strong leadership and staff management skills are critical in the hospitality industry.",
},
{
icon: Megaphone,
title: "Restaurant Marketing",
desc: "Promote your restaurant using digital marketing, local SEO, and branding strategies to attract and retain customers in a competitive food business market.",
},
{
icon: ChefHat,
title: "Menu & Meal Design",
desc: "Collaborate with chefs to create innovative menus, optimize food costs, and maintain high-quality dishes that maximize profit margins.",
},
{
icon: ClipboardList,
title: "Restaurant Setup & Design",
desc: "Plan and design your restaurant layout, including furniture, kitchen equipment, and ambiance to deliver an exceptional dining experience.",
},
{
icon: Settings,
title: "Operations Management",
desc: "Ensure smooth daily operations, fast service, and consistent food quality to enhance customer satisfaction and retention.",
},
{
icon: Briefcase,
title: "Business & Financial Management",
desc: "Handle accounting, payroll, budgeting, and profit optimization to ensure long-term sustainability of your restaurant business.",
},
];
const challenges = [
{
icon: AlertTriangle,
title: "High Competition in Restaurant Industry",
desc: "The restaurant business is highly competitive with limited local footfall. Strong branding, local SEO, and digital marketing strategies are essential to attract and retain customers.",
},
{
icon: DollarSign,
title: "Low Profit Margins & Cost Control",
desc: "Restaurant profit margins are typically between 2–6%. Major expenses include food costs (30–35%), staff wages (30–35%), and rent/utilities (5–10%), making financial management critical.",
},
{
icon: Users,
title: "Staff & Team Management",
desc: "Managing restaurant staff involves handling scheduling, absenteeism, and team conflicts. Strong leadership and people management skills are essential for smooth operations.",
},
{
icon: Clock,
title: "Long Working Hours & Operations",
desc: "Restaurant owners often work 12+ hours daily—from planning and marketing to managing lunch and dinner service—making work-life balance challenging.",
},
];
const structures = [
    {
      title: "Sole Proprietorship",
      description:
        "A sole proprietorship is the simplest business structure and the default option for new entrepreneurs. However, it does not provide legal liability protection, making it risky for restaurant owners handling finances, staff, and customers.",
      highlight: "Not recommended for restaurants due to lack of protection.",
    },
    {
      title: "Limited Liability Company (LLC)",
      description:
        "An LLC is the most popular and recommended business structure for restaurant startups. It offers strong personal liability protection, flexible tax options, and low maintenance requirements, making it ideal for small business owners.",
      highlight: "Best choice for most restaurant businesses.",
    },
    {
      title: "Series LLC",
      description:
        "A Series LLC allows business owners to create multiple sub-entities under one parent company. Each unit has separate liability protection, which is useful for managing multiple restaurant locations or brands.",
      highlight: "Available only in select U.S. states.",
    },
    {
      title: "S Corporation",
      description:
        "An S Corporation provides tax advantages by avoiding double taxation. However, it comes with stricter compliance requirements and is generally better suited for established businesses.",
      highlight: "Complex structure for growing businesses.",
    },
    {
      title: "C Corporation",
      description:
        "A C Corporation is designed for large-scale enterprises seeking investment opportunities. While it offers strong liability protection, it involves double taxation and complex regulations.",
      highlight: "Best for large restaurant chains or franchises.",
    },
  ];
  const forums = [
    {
      title: "Reddit – Restaurateur Community",
      description:
        "Join one of the most active restaurant owner communities online. Discuss restaurant management, startup challenges, marketing strategies, and real-world experiences.",
      link: "https://www.reddit.com/r/restaurateur/",
    },
    {
      title: "Restaurant Owners Forum",
      description:
        "A dedicated forum for restaurant owners to share business strategies, staff management tips, and operational advice to grow a profitable restaurant business.",
      link: "https://www.restaurantowner.com/public/Forum.cfm",
    },
    {
      title: "Restaurant Management Forum",
      description:
        "Explore expert discussions on restaurant operations, cost control, menu planning, and customer experience improvement.",
      link: "https://www.restaurantmanagementforum.com/",
    },
  ];

  const conferences = [
    {
      title: "Restaurant Leadership Conference",
      description:
        "A premier restaurant industry event focused on leadership, innovation, and growth strategies for restaurant businesses.",
      link: "https://www.restaurantleadership.com/",
    },
    {
      title: "MUFSO Restaurant News Conference",
      description:
        "The Multi-Unit Foodservice Operators Conference covers trends, expansion strategies, and insights for scaling restaurant brands.",
      link: "https://www.mufso.com/",
    },
    {
      title: "International Restaurant & Foodservice Show",
      description:
        "Discover the latest trends in foodservice, equipment, and restaurant technology at this global industry event.",
      link: "https://www.internationalrestaurantny.com/",
    },
    {
      title: "National Restaurant Association",
      description:
        "Access resources, networking opportunities, and one of the largest restaurant trade shows in the world.",
      link: "https://restaurant.org/",
    },
    {
      title: "Fast Casual Executive Summit",
      description:
        "A must-attend event for fast casual restaurant operators focusing on innovation, branding, and scaling strategies.",
      link: "https://fastcasualsummit.com/",
    },
  ];
return (
<div className="min-h-screen bg-white">
   <Helmet>
      <title>
         Start a Restaurant Business in USA – Restaurant Startup Guide | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Learn how to start a restaurant business in the USA. Get step-by-step guidance on business registration, licensing, permits, LLC formation, taxes, and compliance from The Future Perfect Global."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/start-a-business/restaurant-business"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="start restaurant business USA, restaurant startup guide USA, restaurant business registration, restaurant licenses USA, restaurant LLC formation"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/restaurant-business"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/restaurant-business"
         hrefLang="x-default"
         />
      <meta name="ROBOTS" content="INDEX, FOLLOW" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Start a Restaurant Business in USA – Restaurant Startup Guide"
         />
      <meta
         property="og:description"
         content="Discover how to start a restaurant business in the USA with expert tips on registration, permits, licensing, LLC formation, and compliance."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/start-a-business/restaurant-business"
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
         content="Start a Restaurant Business in USA – The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Start a Restaurant Business in USA – Startup Guide"
         />
      <meta
         name="twitter:description"
         content="Planning to start a restaurant business in the USA? Get registration, licensing, and compliance guidance."
         />
      <meta
         name="twitter:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      {/* JSON-LD */}
      <script type="application/ld+json">
         {`{
           "@context": "https://schema.org",
           "@type": "Service",
           "name": "Restaurant Business Setup in USA",
           "url": "https://us.thefutureperfectglobal.com/start-a-business/restaurant-business",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "Comprehensive guidance on starting a restaurant business in the USA, including registration, permits, licensing, LLC formation, tax planning, and compliance.",
           "areaServed": [
             "United States"
           ],
           "serviceType": [
             "Restaurant Business Registration USA",
             "Restaurant Startup Guide",
             "Business Licenses USA",
             "LLC Formation",
             "Compliance Support"
           ]
         }`}
      </script>
   </Helmet>
   <header className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
         <img
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
            alt="Modern restaurant interior"
            className="w-full h-full object-cover opacity-40"
            />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
         {/* Icon */}
         <div className="inline-flex items-center justify-center mb-6 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
            <ChefHat className="w-8 h-8 text-cyan-400" />
         </div>
         {/* Heading */}
         <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Build a <span className="text-cyan-400">Successful Restaurant</span> Business
         </h1>
         {/* Description */}
         <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Turn your culinary passion into a profitable restaurant business. Learn how to launch, manage, and grow a modern food business that attracts loyal customers.
         </p>
         {/* Buttons */}
         <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button */}
            <button
               onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
            Get Started
            </button>
            {/* Secondary Button */}
            <button className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            Learn More
            </button>
         </div>
      </div>
   </header>
   <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-10">
         {/* MAIN CONTENT */}
         <div className="">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
               Complete Guide to Starting a Successful Restaurant Business
            </h2>
            <p className="text-gray-600 mb-5 text-lg">
               Starting a <strong>restaurant business</strong> can be highly rewarding, but it also comes with significant challenges. 
               Successful <strong>restaurant entrepreneurs</strong> must manage operations, marketing, customer experience, and finances—all at once. 
               If you're passionate about food and hospitality, launching a <strong>food business startup</strong> can be a powerful opportunity to build a loyal customer base.
            </p>
            <p className="text-gray-600 mb-5 text-lg">
               Turning your restaurant idea into a profitable venture requires the right strategy, planning, and execution. 
               With the right approach, you can create a unique dining experience, deliver exceptional cuisine, and stand out in a competitive market.
            </p>
            {/* LIST */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
               <ul className="space-y-3 text-gray-700">
                  <li>✔ Understanding the restaurant industry and market trends</li>
                  <li>✔ Managing restaurant finances, taxes, and budgeting</li>
                  <li>✔ Choosing the best legal structure for your business</li>
                  <li>✔ Complying with food safety laws and regulations</li>
               </ul>
               <ul className="space-y-3 text-gray-700">
                  <li>✔ Building a strong restaurant brand and marketing strategy</li>
                  <li>✔ Hiring staff and managing operations efficiently</li>
                  <li>✔ Accessing essential tools and business resources</li>
                  <li>✔ Evaluating if you're ready to start a restaurant</li>
               </ul>
            </div>
            <p className="text-gray-600 mb-12 text-lg">
               By following a structured <strong>restaurant startup guide</strong>, you can gain the knowledge needed to launch, manage, 
               and grow a successful restaurant business in today’s competitive hospitality industry.
            </p>
            {/* INDUSTRY SECTION */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
               Understanding the Restaurant Industry
            </h3>
            <p className="text-gray-600 mb-5">
               The <strong>restaurant industry</strong> is one of the oldest and most dynamic business sectors. People love dining out, 
               exploring new cuisines, and enjoying unique food experiences. As disposable income rises globally, spending on restaurants continues to grow steadily.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8 text-center">
               <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-cyan-600">10%</h4>
                  <p className="text-gray-600 text-sm">Workforce employed in food & restaurant businesses</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-cyan-600">$600B+</h4>
                  <p className="text-gray-600 text-sm">Annual spending in the restaurant industry</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-cyan-600">5%</h4>
                  <p className="text-gray-600 text-sm">Average yearly industry growth rate</p>
               </div>
            </div>
            <p className="text-gray-600 mb-6">
               With over a million restaurants and thousands of new openings every year, the industry offers huge opportunities. 
               However, it also comes with challenges such as high competition, operational complexity, staffing issues, and tight profit margins.
            </p>
            <p className="text-gray-600 text-lg">
               For dedicated entrepreneurs with strong focus, discipline, and passion, running a restaurant can be an incredibly fulfilling journey— 
               delivering value not only to customers but also creating meaningful experiences for your team and community.
            </p>
         </div>
      </div>
   </section>
   <section className="relative py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top,cyan,transparent)]"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
         {/* HEADING */}
         <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Is Restaurant Entrepreneurship the Right Path for You?
         </h2>
         <p className="text-gray-300 text-lg md:text-xl mb-10">
            Launching a <strong>restaurant business</strong> is one of the most exciting opportunities in the 
            <strong> hospitality industry</strong>. It requires creativity, resilience, and strong 
            <strong> restaurant management</strong> skills to stand out in a competitive food market.
         </p>
         {/* GLASS CARD */}
         <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <p className="text-gray-300 mb-6">
               A successful <strong>food business startup</strong> goes beyond just great recipes. You must build a strong brand, 
               create unforgettable dining experiences, and implement effective 
               <strong> restaurant marketing strategies</strong> to attract and retain customers.
            </p>
            <p className="text-gray-300 mb-6">
               From hiring skilled chefs and managing staff to sourcing quality ingredients and designing the perfect ambiance, 
               every detail contributes to your restaurant’s success.
            </p>
            <p className="text-gray-300">
               At the same time, mastering operations like cost control, supplier management, and profit optimization is critical. 
               Restaurant entrepreneurship is challenging—but for those committed, it offers unmatched growth and rewards.
            </p>
         </div>
         {/* FEATURES GRID */}
         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
               <Sparkles className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
               <h3 className="font-semibold">Creativity</h3>
               <p className="text-sm text-gray-400 mt-2">
                  Design unique menus and dining experiences
               </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
               <Users className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
               <h3 className="font-semibold">Team Management</h3>
               <p className="text-sm text-gray-400 mt-2">
                  Hire, train, and lead restaurant staff
               </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
               <ChefHat className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
               <h3 className="font-semibold">Food Innovation</h3>
               <p className="text-sm text-gray-400 mt-2">
                  Deliver high-quality and unique cuisine
               </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
               <BarChart3 className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
               <h3 className="font-semibold">Profit Strategy</h3>
               <p className="text-sm text-gray-400 mt-2">
                  Optimize costs and maximize revenue
               </p>
            </div>
         </div>
      </div>
   </section>
   <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
         {/* HEADER */}
         <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
               Essential Skills to Become a Successful Restaurant Entrepreneur
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
               Running a profitable <strong>restaurant business</strong> requires a diverse skill set across 
               operations, marketing, finance, and team management. Mastering these core areas is key to 
               building a scalable and successful <strong>food business startup</strong>.
            </p>
         </div>
         {/* TIMELINE STYLE */}
         <div className="relative">
            {/* vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gray-200"></div>
            <div className="space-y-12">
               {skills.map((item, index) => {
               const Icon = item.icon;
               const isLeft = index % 2 === 0;
               return (
               <div
               key={index}
               className={`relative flex flex-col md:flex-row items-center ${
               isLeft ? "md:flex-row" : "md:flex-row-reverse"
               }`}
               >
               {/* ICON */}
               <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 bg-cyan-600 text-white p-3 rounded-full shadow-lg z-10">
                  <Icon className="w-5 h-5" />
               </div>
               {/* CARD */}
               <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                     </h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
               </div>
            </div>
            );
            })}
         </div>
      </div>
</div>
    </section>
    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center max-w-6xl mx-auto mb-10">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                Challenges of Running a Successful Restaurant Business
            </h2>
            <p className="text-gray-600 text-lg">
                Building a profitable <strong>restaurant business</strong> comes with operational, financial, and management challenges. Understanding these key areas helps restaurant entrepreneurs plan for long-term success.
            </p>
          </div>
          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
            <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition duration-300"
                >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="p-3 bg-cyan-50 rounded-lg">
                      <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  {/* CONTENT */}
                  <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                  </div>
                </div>
            </div>
            );
            })}
          </div>
          {/* STATS BAR */}
          <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6 grid sm:grid-cols-3 text-center">
            <div>
                <p className="text-2xl font-bold text-gray-900">30–35%</p>
                <p className="text-sm text-gray-500">Food Cost</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-900">30–35%</p>
                <p className="text-sm text-gray-500">Labor Cost</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-900">2–6%</p>
                <p className="text-sm text-gray-500">Net Profit Margin</p>
            </div>
          </div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Choose the Best Legal Structure for Your Restaurant Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to register your restaurant business and select the right
            business structure. Choosing the correct legal entity ensures asset
            protection, tax benefits, and long-term growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {structures.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              <span className="inline-block text-sm font-medium text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Start Your Restaurant Business Today
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Register your restaurant business with the right legal structure and
            set yourself up for success. An LLC is often the best option for
            restaurant owners looking for protection and flexibility.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }} className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition">
            Get Started Now
          </button>
        </div>
      </div>
    </section>

    <section className="bg-cyan-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Best Restaurant Forums, Communities & Industry Conferences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with top restaurant owners, join online restaurant business
            forums, and attend leading food industry conferences to grow your
            restaurant, learn new strategies, and stay ahead of market trends.
          </p>
        </div>

        {/* Forums Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-cyan-600 mb-6">
            Top Restaurant Forums & Online Communities
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {forums.map((forum, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {forum.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {forum.description}
                </p>
                <a
                  href={forum.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-medium hover:underline"
                >
                  Visit Community →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Conferences Section */}
        <div>
          <h3 className="text-3xl font-bold text-cyan-600 mb-6">
            Must-Attend Restaurant Industry Conferences & Events
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {conferences.map((conf, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {conf.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {conf.description}
                </p>
                <a
                  href={conf.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 text-white px-5 py-2 rounded-full hover:bg-cyan-600 transition"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>


    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
            {
            question: "How much does it cost to start a restaurant?",
            answer: "Startup costs vary widely based on concept, size, and location. A small café might start at $100,000-$250,000, while a full-service restaurant typically requires $250,000-$500,000 or more. Major expenses include lease deposits, kitchen equipment, furniture, initial inventory, licenses, and working capital."
            },
            {
            question: "Do I need formal culinary training to open a restaurant?",
            answer: "While culinary training is beneficial, it's not mandatory. Many successful restaurant owners hire experienced chefs to run their kitchens. However, you should have strong business acumen, understanding of food service operations, and knowledge of health and safety regulations. Consider taking business and hospitality management courses."
            },
            {
            question: "How long does it take to become profitable?",
            answer: "Most restaurants take 1-2 years to become profitable. The first few months are typically the most challenging as you build your customer base and refine operations. It's crucial to have adequate cash reserves to sustain operations during this initial period. Focus on controlling costs and building steady revenue."
            },
            {
            question: "What are the most common reasons restaurants fail?",
            answer: "The primary causes include inadequate funding, poor location, weak concept, inconsistent quality, high operating costs, ineffective marketing, and lack of business experience. Success requires careful planning, sufficient capital, excellent execution, and the ability to adapt to customer feedback and market conditions."
            },
            {
            question: "Should I buy an existing restaurant or start from scratch?",
            answer: "Both options have merits. Buying an existing restaurant can be faster and potentially less expensive, with established equipment and customer base. However, you may inherit problems or negative reputation. Starting from scratch gives you complete control over concept, design, and branding, but requires more time and capital. Evaluate each opportunity carefully."
            },
            {
            question: "What technology should I invest in?",
            answer: "Essential technology includes a modern Point of Sale (POS) system, online ordering platform, inventory management software, and accounting software. Consider reservation systems, kitchen display systems, and employee scheduling tools. Social media management and email marketing platforms are also valuable for customer engagement."
            }
            ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() =>
                  toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                  >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown
                  className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform ${
                  expandedFAQ === index ? 'rotate-180' : ''
                  }`}
                  />
                </button>
                {expandedFAQ === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
                )}
            </div>
            ))}
          </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            
            {/* Heading */}
            <h2 className="text-5xl font-extrabold mb-6">
              Ready to Start Your Restaurant Business?
            </h2>

            {/* SEO Optimized Description */}
            <p className="text-xl mb-10 text-cyan-50 max-w-3xl mx-auto">
              Launch your restaurant successfully with the right strategy, funding,
              and business planning. Turn your food business idea into a profitable
              restaurant with expert guidance, smart marketing, and efficient
              operations.
            </p>

            {/* CTA Box */}
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Start Your Restaurant Journey Today
              </h3>

              <p className="text-cyan-100 mb-6">
                Take the first step toward building a successful restaurant business.
                Register your business, plan your operations, and grow your brand
                with confidence.
              </p>

              {/* Button */}
              <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
                }} className="inline-flex items-center gap-2 bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </section>

<GetStartedModal
   isOpen={isModalOpen}
   onClose={() =>
setIsModalOpen(false)}
selectedBusinessType={selectedBusinessType}
/>
</div>
);
}