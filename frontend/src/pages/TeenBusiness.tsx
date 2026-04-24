import { useState } from 'react';
import { Helmet } from "react-helmet-async"; 
import GetStartedModal from '../components/GetStartedModal';
import {
Rocket,
Target,
Users,
TrendingUp,
FileText,
Building2,
CheckCircle2,
Lightbulb,
Shield,
DollarSign,
Star,
ArrowRight,
Sparkles,
Award,
AlertCircle,
ExternalLink,
Wrench
} from 'lucide-react';
const planElements = [
'Executive summary highlighting key points',
'Clear goals and success metrics',
'Business description and background',
'Market analysis and demand research',
'Organizational structure overview',
'Revenue model and pricing strategy',
'Marketing and sales approach',
'Financial projections and budgets'
];

const structures = [
{
name: 'Sole Proprietorship',
description: 'The default structure for small ventures earning minimal income.',
pros: 'Simple to set up, no formal registration needed',
cons: 'No liability protection for personal assets',
bestFor: 'Very small operations just getting started'
},
{
name: 'Partnership',
description: 'Formed when two or more people collaborate without formal entity creation.',
pros: 'Easy to establish with multiple people',
cons: 'Limited legal protection, challenging for long-term teen commitments',
bestFor: 'Short-term collaborative projects'
},
{
name: 'Limited Liability Company (LLC)',
description: 'The most popular choice for serious teen entrepreneurs.',
pros: 'Protects personal assets, professional credibility, tax flexibility',
cons: 'Requires parent/guardian involvement if under 18',
bestFor: 'Serious ventures with growth ambitions',
highlighted: true
},
{
name: 'Corporation (C-Corp or S-Corp)',
description: 'Complex structure typically unnecessary for teen businesses.',
pros: 'Maximum liability protection',
cons: 'Complicated setup and maintenance, expensive',
bestFor: 'Large-scale operations with multiple stakeholders'
}
];
export default function TeenBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
return (
<div className="min-h-screen bg-white">
   <Helmet>
      <title>
         Start a Teen Business in USA – Business Setup & LLC Registration | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Learn how teens can start a business in the USA. The Future Perfect Global provides guidance on business registration, LLC formation, legal requirements, EIN application, and compliance for teen entrepreneurs."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/start-a-business/teen-business"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="teen business USA, start business as a teen USA, teen entrepreneur USA, teen startup USA, business registration for teens, teen LLC formation USA, youth business USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/teen-business"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/start-a-business/teen-business"
         hrefLang="x-default"
         />
      <meta name="ROBOTS" content="INDEX, FOLLOW" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="Start a Teen Business in USA – Business Setup & Registration"
         />
      <meta
         property="og:description"
         content="Start your business journey as a teen in the USA with expert guidance on registration, LLC formation, and compliance from The Future Perfect Global."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/start-a-business/teen-business"
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
         content="Teen Business Setup in USA – The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="Start a Teen Business in USA – Business Setup & Registration"
         />
      <meta
         name="twitter:description"
         content="Looking to start a business as a teen in the USA? Get expert help with registration, LLC formation, and legal compliance."
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
           "name": "Teen Business Setup in USA",
           "url": "https://us.thefutureperfectglobal.com/start-a-business/teen-business",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "Professional guidance for teens starting a business in the USA, including business registration, LLC formation, EIN application, and compliance support.",
           "areaServed": [
             "United States"
           ],
           "serviceType": [
             "Teen Business Registration USA",
             "LLC Formation for Teens",
             "Startup Guidance",
             "EIN Registration",
             "Compliance Support"
           ]
         }`}
      </script>
   </Helmet>
   <section className="relative bg-gray-950 overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full"></div>
  </div>

  {/* Grid Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
    
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-6">
      <Rocket className="w-4 h-4 text-cyan-400" />
      <span className="text-sm text-gray-300">Start Your Journey Today</span>
    </div>

    {/* Heading */}
    <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
      Build Your Teen <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
        Business Empire
      </span>
    </h1>

    {/* Subtext */}
    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
      Turn your ideas into real income. Learn how to build, launch, and grow a successful business while still in school.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      
      {/* Primary CTA */}
      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2"
      >
        Get Started Free
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Secondary CTA */}
      <button className="px-8 py-4 bg-white/5 text-gray-300 rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md">
        Watch Success Stories
      </button>
    </div>
  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent"></div>
</section>
   <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-8">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-2">
               Trusted by Young Entrepreneurs
            </p>
            <p className="text-3xl font-extrabold text-gray-900">Join 500+ Teen Business Owners</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl">
               <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-500 text-cyan-500" />
                  ))}
               </div>
               <p className="text-2xl font-bold text-gray-900 mb-1">4.5/5.0</p>
               <p className="text-sm text-gray-600">Based on 500+ Reviews</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-50 rounded-2xl">
               <TrendingUp className="w-10 h-10 text-cyan-600 mb-3" />
               <p className="text-2xl font-bold text-gray-900 mb-1">$1.5M+</p>
               <p className="text-sm text-gray-600">Revenue Generated by Teens</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-50 to-amber-50 rounded-2xl">
               <Award className="w-10 h-10 text-cyan-600 mb-3" />
               <p className="text-2xl font-bold text-gray-900 mb-1">Top Rated</p>
               <p className="text-sm text-gray-600">Youth Entrepreneurship Platform</p>
            </div>
         </div>
      </div>
   </section>
   <section className="bg-cyan-50 py-16 overflow-hidden">

      <div className="relative max-w-7xl px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-extrabold mb-6 text-black">
            Ultimate Guide to Starting a <span className='text-cyan-600'>Teen Business</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover profitable business ideas for teenagers, from selling products online to building a successful YouTube channel. Learn how to start a business as a teen, create a strong business plan, and grow a brand that stands out in today’s digital world.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-4 text-black">
              How to Start a Business as a Teen
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Starting a business as a teenager opens up endless opportunities. Whether it’s selling handmade products on Etsy, launching a YouTube channel, freelancing online, or offering local services, there are countless ways to earn money and build skills early.
            </p>
            <p className="text-gray-600 mt-4 text-base mb-6 leading-relaxed">
              The key is to choose a business idea you are passionate about. Balancing school, activities, and a business requires dedication, so picking something you genuinely enjoy will help you stay consistent and motivated.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-black">
              Build a Strong Business Foundation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Running a successful teen business requires planning, consistency, and effort. From creating a business plan to managing daily operations, every step plays a crucial role in long-term success.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              With the right mindset and strategy, teenagers can quickly build profitable businesses and gain real-world experience that sets them apart in the future.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1612909000917-fb13c94ce179?q=80"
              alt="Teen entrepreneur working on laptop"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Key Questions */}
        <div className="grid md:grid-cols-3 px-6 gap-8">
          {/* USP */}
          <div className="bg-white border border-cyan-200 rounded-2xl p-6">
            <Lightbulb className="w-8 h-8 text-cyan-600 mb-4" />
            <h4 className="text-xl font-bold mb-3">Unique Selling Point (USP)</h4>
            <p className="text-gray-600 leading-relaxed">
              Define what makes your business unique. Whether it’s your creativity, speed, quality, or approach, having a strong USP helps you stand out in a competitive market.
            </p>
          </div>

          {/* Target Market */}
          <div className="bg-white border border-cyan-200 rounded-2xl p-6">
            <Target className="w-8 h-8 text-cyan-600 mb-4" />
            <h4 className="text-xl font-bold mb-3">Identify Your Target Audience</h4>
            <p className="text-gray-600 leading-relaxed">
              Understand who your customers are, where they spend time, and how to reach them. This could include social media platforms, local communities, or online marketplaces.
            </p>
          </div>

          {/* Customer Needs */}
          <div className="bg-white border border-cyan-200 rounded-2xl p-6">
            <Users className="w-8 h-8 text-cyan-600 mb-4" />
            <h4 className="text-xl font-bold mb-3">Understand Customer Needs</h4>
            <p className="text-gray-600 leading-relaxed">
              Talk to potential customers and validate your idea. Make sure people are willing to pay for your product or service before investing too much time or money.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center max-w-6xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            Not every idea will succeed—and that’s okay. Many successful entrepreneurs fail multiple times before finding the right opportunity. Learn quickly, adapt, and focus your energy on ideas that show real potential.
          </p>
        </div>
      </div>
    </section>
   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
               Step 1: Discover Your Perfect <span className='text-cyan-600'>Business Idea</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               The foundation of any successful venture starts with finding the right opportunity that
               aligns with your interests and market demand.
            </p>
         </div>
         <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
               <Lightbulb className="w-12 h-12 text-cyan-600 mb-4" />
               <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Find Your Passion & Expertise
               </h3>
               <p className="text-gray-600 leading-relaxed mb-4">
                  Success comes easier when you love what you do. Consider your hobbies, skills, and
                  interests. Are you great at design? Love creating videos? Skilled at tutoring? Your
                  passion is your competitive advantage.
               </p>
               <p className="text-gray-600 leading-relaxed">
                  Remember, balancing business with school and activities requires genuine interest.
                  Choose something that excites you enough to stay motivated through challenges.
               </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
               <Target className="w-12 h-12 text-cyan-600 mb-4" />
               <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Identify Your Unique Advantage
               </h3>
               <p className="text-gray-600 leading-relaxed mb-4">
                  What makes you different? Maybe it's your speed, reliability, creative approach, or
                  specialized knowledge. Your unique selling proposition is what sets you apart from
                  competitors.
               </p>
               <p className="text-gray-600 leading-relaxed">
                  Don't just copy what others are doing. Think about how you can deliver value in a
                  way that's distinctly yours.
               </p>
            </div>
         </div>
         <div className="bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Essential Questions to Answer</h3>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Users className="w-8 h-8 mb-3" />
                  <h4 className="text-xl font-bold mb-2">Who Are Your Customers?</h4>
                  <p className="text-cyan-50">
                     Define your target audience precisely. Where do they spend time? What platforms
                     do they use? For local businesses, this might be neighbors. For online ventures,
                     you'll need deeper research into demographics and behaviors.
                  </p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <TrendingUp className="w-8 h-8 mb-3" />
                  <h4 className="text-xl font-bold mb-2">What Do They Actually Want?</h4>
                  <p className="text-cyan-50">
                     Don't assume, ask. Talk to potential customers and validate your concept. Most
                     importantly, find out if they'd actually pay real money for your solution.
                     Honest feedback now saves time later.
                  </p>
               </div>
            </div>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20">
               <p className="text-lg font-medium">
                  💡 Pro Tip: It's perfectly normal to pivot. Many successful entrepreneurs didn't
                  get it right on their first, second, or even third try. The key is learning quickly
                  and adapting based on real feedback.
               </p>
            </div>
         </div>
      </div>
   </section>
   <section className="py-20 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
                  <FileText className="w-4 h-4 text-cyan-700" />
                  <span className="text-sm font-semibold text-cyan-700">Step 2</span>
               </div>
               <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                  Craft Your Business <span className='text-cyan-600'>cyanprint</span>
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  If you're aiming for serious success beyond just pocket money, a business plan is
                  your secret weapon. It forces you to think strategically about every aspect of your
                  venture and demonstrates your commitment.
               </p>
               <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  A well-crafted plan helps you define operations, marketing strategies, sales processes,
                  profitability goals, and growth trajectory. Think of it as your business GPS.
               </p>
               <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-200">
                  <p className="text-gray-700 font-medium">
                     Building something big? Planning for college funds or long-term growth? A business
                     plan transforms vague ideas into concrete action steps.
                  </p>
               </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Essential Plan Components
               </h3>
               <div className="space-y-2">
                  {planElements.map((element, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-white rounded-xl shadow-sm">
                     <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                     <span className="text-gray-700 font-medium">{element}</span>
                  </div>
                  ))}
               </div>
               <div className="mt-6 p-4 bg-cyan-100 rounded-xl">
                  <p className="text-sm text-cyan-900 font-medium">
                     Need guidance? We offer comprehensive templates and resources to help you create a
                     professional business plan that impresses investors and keeps you on track.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
               <Building2 className="w-4 h-4 text-cyan-700" />
               <span className="text-sm font-semibold text-cyan-700">Step 3</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
               Choose Your Business <span className='text-cyan-600'>Structure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Selecting the right legal structure protects you and sets the foundation for growth.
               Here are your options explained simply.
            </p>
         </div>
         <div className="grid md:grid-cols-2 gap-6 mb-12">
            {structures.map((structure, index) => (
            <div
            key={index}
            className={`rounded-2xl p-8 border-2 transition-all ${
            structure.highlighted
            ? 'bg-gradient-to-br from-cyan-50 to-cyan-50 border-cyan-300 shadow-lg'
            : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
            >
            {structure.highlighted && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-600 text-white text-sm font-semibold rounded-full mb-4">
               <Shield className="w-4 h-4" />
               Recommended
            </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
               {structure.name}
            </h3>
            <p className="text-gray-600 mb-4">
               {structure.description}
            </p>
            <div className="space-y-3 mb-4">
               <div className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold text-lg">✓</span>
                  <p className="text-sm text-gray-700"><strong>Pros:</strong> {structure.pros}</p>
               </div>
               <div className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold text-lg">✗</span>
                  <p className="text-sm text-gray-700"><strong>Cons:</strong> {structure.cons}</p>
               </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
               <p className="text-sm font-medium text-gray-900">
                  Best for: <span className="text-gray-600">{structure.bestFor}</span>
               </p>
            </div>
         </div>
         ))}
      </div>
      <div className="bg-cyan-50 rounded-2xl p-8 border-2 border-cyan-200">
         <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
               <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Important for Teen Entrepreneurs
               </h4>
               <p className="text-gray-700 leading-relaxed mb-3">
                  If you're under 18 and want to form an LLC or corporation, you'll need a parent
                  or guardian to help with the legal process. This is standard practice and protects
                  everyone involved.
               </p>
               <p className="text-gray-700 leading-relaxed">
                  We recommend consulting with a business mentor or attorney in your state to understand
                  specific requirements and find the best structure for your unique situation.
               </p>
            </div>
         </div>
      </div>
</div>
</section>

<section className="py-20 bg-cyan-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-red-700" />
            <span className="text-sm font-semibold text-red-700">Step 5</span>
         </div>
         <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Navigate <span className='text-cyan-600'>Rules & Regulations</span>
         </h2>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding legal requirements protects you and your family. Here's what teen
            entrepreneurs need to know.
         </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <AlertCircle className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
               Parental Involvement Required
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
               If you're under 18, you'll need a parent or guardian's help with legal formation,
               contracts, and financial accounts. This isn't meant to hold you back, it's designed
               to protect everyone involved.
            </p>
            <p className="text-gray-600 leading-relaxed">
               Minors can't legally form corporations or LLCs independently, but you can serve as
               a member or partner. Your parent will handle the legal paperwork while you run the
               day-to-day operations.
            </p>
         </div>
         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <FileText className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
               State-Specific Requirements
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
               Business regulations vary significantly by state. Some states are extremely teen-friendly
               with simple processes, while others have more complex requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
               Research your state's child labor laws, licensing requirements, and formation rules.
               States like Delaware, Nevada, and Wyoming are known for business-friendly policies,
               while Montana and South Dakota top lists for small business ease.
            </p>
         </div>
      </div>
      <div className="bg-gradient-to-br from-red-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border-2 border-red-200">
         <div className="flex items-start gap-4 mb-8">
            <DollarSign className="w-10 h-10 text-red-700 flex-shrink-0" />
            <div>
               <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Understanding Your Tax Obligations
               </h3>
               <p className="text-lg text-gray-700 leading-relaxed">
                  Once you earn over $400 annually, you'll need to file taxes. This includes
                  self-employment tax, state income tax, and federal income tax. Depending on what
                  you sell, sales tax may also apply.
               </p>
            </div>
         </div>
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
               <h4 className="text-xl font-bold text-gray-900 mb-3">Tax Planning</h4>
               <p className="text-gray-700 leading-relaxed mb-3">
                  As a general rule, set aside about 30% of your earnings for taxes. This ensures
                  you're prepared when tax season arrives.
               </p>
               <p className="text-gray-700 leading-relaxed">
                  Keep detailed records of all income and expenses throughout the year. This makes
                  filing much easier and helps you maximize deductions.
               </p>
            </div>
            <div className="bg-white rounded-xl p-6">
               <h4 className="text-xl font-bold text-gray-900 mb-3">Payment Schedule</h4>
               <p className="text-gray-700 leading-relaxed mb-3">
                  You'll likely need to pay estimated quarterly taxes in April, June, September,
                  and January. Missing these can result in penalties.
               </p>
               <p className="text-gray-700 leading-relaxed">
                  Consider working with an accountant or tax professional who can guide you through
                  the process and ensure compliance.
               </p>
            </div>
         </div>
      </div>
      <div className="mt-8 bg-cyan-50 rounded-2xl p-6 border border-cyan-200">
         <p className="text-gray-700 font-medium text-center">
            💡 We offer tax preparation services and can help you understand your obligations.
            Getting professional guidance early prevents costly mistakes later.
         </p>
      </div>
   </div>
</section>

{/* Tools & Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Useful Online Tools for <span className='text-cyan-600'>Teen Business</span>
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
                className="border rounded-2xl p-6 hover:shadow-lg transition group"
              >
                <Wrench className="w-6 h-6 text-cyan-600 mb-4" />

                <h3 className="font-semibold text-gray-900 mb-4">
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

<section className="py-20 bg-cyan-100/50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-600 to-cyan-600 rounded-3xl">
         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="relative px-8 sm:px-12 py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">Ready to Begin?</span>
               </div>
               <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                  From Idea to Launch: Start Your Teen Business Today
               </h2>
               <p className="text-xl text-cyan-50 leading-relaxed mb-10">
                  The internet has democratized entrepreneurship. Whether you're creating content,
                  selling products, or offering services, success is within reach. Build your reputation,
                  develop your skills, and create something meaningful.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button onClick={() =>
                     {
                     setSelectedBusinessType('');
                     setIsModalOpen(true);
                     }} className="group px-8 py-4 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                     <Rocket className="w-5 h-5" />
                     Start Your Business Now
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-cyan-700/50 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-cyan-700 transition-all border-2 border-white/30">
                  Download Free Guide
                  </button>
               </div>
               <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center">
                     <p className="text-3xl font-bold text-white mb-1">10K+</p>
                     <p className="text-cyan-100 text-sm">Teen Businesses Launched</p>
                  </div>
                  <div className="text-center">
                     <p className="text-3xl font-bold text-white mb-1">4.5★</p>
                     <p className="text-cyan-100 text-sm">Average Rating</p>
                  </div>
                  <div className="text-center">
                     <p className="text-3xl font-bold text-white mb-1">$1.0M+</p>
                     <p className="text-cyan-100 text-sm">Revenue Generated</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="mt-12 text-center">
         <p className="text-gray-500 text-sm">
            We're here to support your entrepreneurial journey every step of the way
         </p>
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