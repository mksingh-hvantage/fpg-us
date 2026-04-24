import { Sparkles, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
export default function BeautySaloonBusiness() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const faqs = [
{
question: "Is opening a beauty salon profitable?",
answer: "Yes, beauty salons can be highly profitable ventures. The average salon generates healthy profits with steady clientele, and the industry continues to grow. Success depends on location, service quality, pricing strategy, and effective management."
},
{
question: "What are the main ongoing expenses?",
answer: "Regular expenses include rent or mortgage payments, product inventory, staff salaries or chair rental agreements, utilities, insurance premiums, license renewals, marketing costs, and equipment maintenance. Budgeting for these ensures smooth operations."
},
{
question: "How much does it cost to start a salon?",
answer: "Startup costs vary widely based on location and scale. Purchasing an existing salon typically ranges from $40,000 to $250,000, while building a new salon from scratch can cost $100,000 to $500,000. Smaller operations or booth rentals require less capital."
},
{
question: "What licenses do I need?",
answer: "Requirements vary by state but typically include a cosmetology license for you and your staff, a general business license, and potentially a retail sales license if selling products. Check with your local government for specific requirements in your area."
},
{
question: "Should I hire employees or rent chairs?",
answer: "Both models have advantages. Hiring employees gives you more control over scheduling and service quality but requires payroll management. Renting chairs to independent stylists reduces overhead and administrative burden but offers less direct oversight of operations."
}
];
const [openIndex, setOpenIndex] = useState
<number | null>
(0);
return (
<div className="min-h-screen bg-white">
   <section className="relative overflow-hidden text-white">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80" // apni image yaha daalo
      alt="Salon Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Optional Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIg...')] opacity-10"></div>

  {/* Content */}
  <div className="relative mx-auto text-center px-6 py-12 max-w-4xl">
    
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
      <Sparkles className="w-4 h-4 text-cyan-300" />
      <span className="text-sm font-semibold tracking-wide">
        Start Your Beauty Business
      </span>
    </div>

    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
      Launch Your Dream{" "}
      <span className="text-cyan-400 drop-shadow-md">
        Beauty Salon
      </span>
    </h1>

    <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
      Transform your passion for beauty and wellness into a profitable business.
      Discover the essential steps to create a salon that clients will love.
    </p>

    <button
      onClick={() => {
        setSelectedBusinessType('');
        setIsModalOpen(true);
      }}
      className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-cyan-100 transition-all duration-300"
    >
      Begin Your Saloon Journey
    </button>
  </div>
</section>
<section className="bg-slate-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold leading-base text-slate-800 mb-6">
            Conduct Powerful Market Research for Your <span className='text-cyan-600'>Salon Business</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-5xl mx-auto">
            Before investing in equipment or launching your beauty salon, it’s essential to understand your market. Market research helps validate your idea, identify opportunities, and build a profitable salon business.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-cyan-50 border border-cyan-100 rounded-2xl shadow-lg p-8 md:p-10">

          <p className="text-slate-700 mb-6 leading-relaxed">
            As explained by the Small Business Administration (SBA), market research blends consumer behavior and economic trends to confirm and improve your business idea. Start by gathering detailed insights about your target audience and local area demographics.
          </p>

          <p className="text-slate-700 mb-8 leading-relaxed">
            Analyze the location where you plan to open your salon. Understanding your potential customers will help you design services, pricing, and marketing strategies that actually work.
          </p>

          {/* Questions List */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Key Questions to Answer
            </h3>

            <ul className="space-y-4">
              {[
                "Is there sufficient demand for a new salon in this area?",
                "How many potential customers can your salon attract?",
                "Do your target customers have enough disposable income for salon services?",
                "Are your customers located nearby or will you need to target other areas?",
                "How many direct competitors exist in your market?",
                "What are your competitors’ pricing strategies and customer demand levels?"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 bg-cyan-500 rounded-full"></span>
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion Box */}
          <div className="mt-10 bg-cyan-50 border border-cyan-100 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed">
              With these insights, you’ll be better equipped to make data-driven decisions, reduce risk, and build a successful, customer-focused salon business.
            </p>
          </div>

        </div>
      </div>
    </section>
    <section className="bg-cyan-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-slate-800 mb-4">
            Choose the Right Type of Salon to Maximize Your <span className='text-cyan-600'>Business Success</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Choosing the right type of salon is a crucial step in building a successful beauty business. From hair styling to advanced skincare treatments, your services will define your brand, target audience, and revenue potential.
          </p>
        </div>

        {/* Intro Content */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 shadow-sm mb-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            The beauty industry offers endless opportunities. While all salons fall under the same category, each business can specialize in completely different services. Some salons focus only on hair, while others may specialize in tanning, skincare, or wellness treatments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            To simplify your decision, start by selecting the services you want to offer. This will help you define your salon type and create a focused, profitable business model.
          </p>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-10 text-center">
            Popular Salon Services You Can Offer
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Hair Services",
                desc: "Cutting, coloring, styling, and modern hair treatments"
              },
              {
                title: "Nail Services",
                desc: "Manicures, pedicures, nail extensions, and nail art"
              },
              {
                title: "Skin Treatments",
                desc: "Facials, waxing, and skincare routines"
              },
              {
                title: "Tanning Services",
                desc: "UV tanning beds or spray tanning solutions"
              },
              {
                title: "Makeup Services",
                desc: "Daily makeup, event looks, and bridal makeup services"
              },
              {
                title: "Massage Therapy",
                desc: "Relaxation massages and therapeutic body treatments"
              },
              {
                title: "Advanced Skincare",
                desc: "Chemical peels, microdermabrasion, and LED therapy"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 bg-cyan-50 border border-cyan-100 rounded-xl p-6 text-center">
          <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Once you’ve selected your core services, you can further differentiate your salon by specializing in niche offerings such as balayage, bridal makeup, or spray tanning. This helps you stand out in a competitive market and attract your ideal customers.
          </p>
        </div>

      </div>
    </section>
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto"> 

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-extrabold text-slate-800 mb-4">
            Choose a <span className='text-cyan-600'>Salon Business</span> Name and Create a Business Plan
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Choosing the perfect salon name and building a solid business plan are essential steps in launching a successful beauty salon. A memorable brand name combined with a strategic plan sets the foundation for long-term growth.
          </p>
        </div>

        {/* Naming Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 mb-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
            Choose a Unique and Memorable Salon Name
          </h3>

          <p className="text-slate-700 leading-relaxed mb-6">
            Once you’ve decided on your salon type, it’s time to create a name that reflects your brand personality. In the beauty industry, creative and catchy names can make your business more memorable and आकर्षक.
          </p>

          {/* Name Examples */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              "The Mane Event",
              "Shear Bliss",
              "Hairway to Heaven",
              "Hair's Looking at You",
              "The Big Clipper",
              "Nailed It",
              "Rain and Nail",
              "Face It"
            ].map((name, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 font-medium text-center">
                {name}
              </div>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed">
            If you prefer a more classic approach, simple and elegant names like <span className="font-medium">6th Street Salon</span> or <span className="font-medium">The Parlor</span> can also create a strong brand identity.
          </p>

          <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-xl p-5">
            <p className="text-slate-700">
              Still unsure? Use a business name generator to explore creative salon name ideas tailored to your niche and audience.
            </p>
          </div>
        </div>

        {/* Business Plan Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-10">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">
            Create a Professional Salon Business Plan
          </h3>

          <p className="text-slate-700 mb-8 leading-relaxed">
            A well-structured salon business plan helps you stay organized, attract investors, and guide your growth strategy. Make sure your plan includes the following key components:
          </p>

          {/* Plan Items */}
          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Executive Summary",
                desc: "Summarize the most important highlights of your salon business plan."
              },
              {
                title: "Main Goals",
                desc: "Define clear objectives such as hiring staff or acquiring customers."
              },
              {
                title: "Business Description",
                desc: "Explain what makes your salon unique and where it will be located."
              },
              {
                title: "Market & Demand Analysis",
                desc: "Evaluate local competition and customer demand for salon services."
              },
              {
                title: "Business Structure",
                desc: "Choose your legal entity such as LLC or other business types."
              },
              {
                title: "Business Model",
                desc: "Decide whether to hire employees or rent chairs to stylists."
              },
              {
                title: "Marketing & Sales Plan",
                desc: "Plan how to attract customers and increase service and product sales."
              },
              {
                title: "Financial Information",
                desc: "Outline expected expenses, revenue, and profitability."
              },
              {
                title: "Appendices",
                desc: "Include supporting documents, notes, and references."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-5">
                <div className="w-5 h-5 rounded-full bg-cyan-500 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
   <section className="bg-cyan-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-slate-800 mb-4">
            Estimate Salon Startup Costs and <span className='text-cyan-600'>Ongoing Expenses</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-6xl mx-auto">
            Understanding salon startup costs and ongoing expenses is essential to launching a profitable beauty business. From equipment to marketing, accurate budgeting helps you avoid surprises and plan for sustainable growth.
          </p>
        </div>

        {/* Cost Range Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Buy an Existing Salon
            </h3>
            <p className="text-slate-600 mb-4">
              Typical investment range
            </p>
            <div className="text-3xl font-bold text-cyan-600">
              $40,000 – $250,000
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Build a New Salon from Scratch
            </h3>
            <p className="text-slate-600 mb-4">
              Typical investment range
            </p>
            <div className="text-3xl font-bold text-cyan-600">
              $100,000 – $500,000
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm mb-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            Beauty salons are designed to deliver a premium, VIP experience. However, creating that environment requires significant investment in space, tools, and services.
          </p>
          <p className="text-slate-700 leading-relaxed">
            In addition to initial setup costs, you must carefully plan for recurring operational expenses to ensure your salon business remains financially stable.
          </p>
        </div>

        {/* Expense List */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Key Salon Expenses to Consider
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Licensing & Permits",
                desc: "Obtain required business licenses, sales tax registration, and cosmetology certifications based on your location."
              },
              {
                title: "Equipment",
                desc: "Salon chairs, wash stations, styling tools, mirrors, decor, massage tables, and retail shelving."
              },
              {
                title: "Insurance",
                desc: "Protect your business from risks with general liability and professional insurance coverage."
              },
              {
                title: "Rent or Lease",
                desc: "Monthly rental cost if you choose to lease your salon space instead of owning it."
              },
              {
                title: "Website & Branding",
                desc: "Invest in a professional website, logo, and brand identity to attract premium clients."
              },
              {
                title: "Marketing & Advertising",
                desc: "Budget for online ads, social media campaigns, and promotions to grow your salon."
              },
              {
                title: "Products & Inventory",
                desc: "Haircare, skincare, and beauty products for services and retail sales."
              },
              {
                title: "Utilities",
                desc: "Electricity, water usage, and other utilities required to operate salon equipment daily."
              }
            ].map((item, index) => (
              <div key={index} className="flex border border-slate-200 items-start gap-3 bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md transition-all">
                <div className="w-5 h-5 rounded-full bg-cyan-500 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 bg-cyan-50 border border-cyan-100 rounded-xl p-6 text-center">
          <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
            By accurately estimating your salon startup costs and monthly expenses, you can create a realistic financial plan, secure funding if needed, and build a sustainable, profitable beauty business.
          </p>
        </div>

      </div>
    </section>
   <section className="bg-white py-16 px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-slate-800 mb-4">
            Get Funding and Choose the Right <span className='text-cyan-600'>Salon Location</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Securing funding and selecting the perfect location are critical steps in launching a successful beauty salon. A strong financial base combined with a strategic location can significantly impact your growth.
          </p>
        </div>

        {/* Funding Options */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-slate-800 mb-10 text-center">
            Popular Salon Funding Options
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Traditional Bank Loans",
                desc: "Offer low interest rates but often require strong credit history and documentation."
              },
              {
                title: "SBA Loans",
                desc: "Government-backed loans including microloans and 7(a) loans for small businesses."
              },
              {
                title: "Investment Groups",
                desc: "Raise capital by pitching your salon business idea to investors in exchange for equity."
              },
              {
                title: "Friends & Family",
                desc: "A flexible funding option, but ensure agreements are documented to avoid conflicts."
              },
              {
                title: "Crowdfunding",
                desc: "Platforms like Kickstarter allow you to raise funds from your community and audience."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all">
                <div className="w-5 h-5 rounded-full bg-cyan-500 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 md:p-8">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Secure Your Salon Location and Prepare for Launch
          </h3>

          <p className="text-slate-700 leading-relaxed mb-4">
            Once your funding is secured, the next step is to rent or purchase a salon space in a high-potential area. Your location plays a major role in attracting walk-in clients and building long-term success.
          </p>

          <p className="text-slate-700 leading-relaxed">
            After finalizing your space, set up your equipment, design your interiors, and start planning a successful grand opening to attract your first customers.
          </p>
        </div>

      </div>
    </section>
    <section className="bg-cyan-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-extrabold text-slate-800 mb-4">
            Enhance Your Salon with the <span className='text-cyan-600'>Latest Technology</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-6xl mx-auto">
            Modern technology is essential for running an efficient and profitable beauty salon. From POS systems to booking software, the right tools can streamline operations and enhance customer experience.
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 mb-10">
          <p className="text-slate-700 leading-relaxed">
            Just like you wouldn’t downgrade your smartphone, running your salon with outdated systems can slow down your growth. Investing in the right salon technology helps you manage bookings, payments, and communication seamlessly.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Cash Register & Hardware",
              desc: "Modern solutions like Square Stand Kit offer built-in cash drawers and receipt printing for smooth transactions."
            },
            {
              title: "POS Software",
              desc: "Tools like Square, Vagaro, Fresha, and Clover combine billing, scheduling, and appointment management."
            },
            {
              title: "Salon Management Software",
              desc: "Platforms like DaySmart, Mangomint, Zenoti, and Rosy help manage clients, bookings, analytics, and payments."
            },
            {
              title: "Website Builders",
              desc: "Create a professional salon website using Squarespace, Wix, or GoDaddy without coding knowledge."
            },
            {
              title: "Team Communication",
              desc: "Use Slack, Flock, or virtual phone services like Grasshopper to manage staff communication efficiently."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md transition-all">
              <div className="w-5 h-5 rounded-full bg-cyan-500 mt-1"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-white py-16 px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-slate-800 mb-4">
           Effectively Maintain and Manage Your <span className='text-cyan-600'>Beauty Salon</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Running a successful beauty salon doesn’t stop after launch. Ongoing compliance, financial management, and operational upkeep are essential for long-term success.
          </p>
        </div>

        {/* Maintenance Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "File Annual Reports",
              desc: "Submit required reports with updated business details, earnings, and management information each year."
            },
            {
              title: "Pay Taxes",
              desc: "Handle quarterly estimated taxes, annual returns, sales tax, and payroll taxes to stay compliant."
            },
            {
              title: "Renew Licenses & Contracts",
              desc: "Keep all salon permits, licenses, supplier agreements, and stylist contracts updated regularly."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md transition-all">
              <div className="w-5 h-5 rounded-full bg-cyan-500 mt-1"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 bg-cyan-50 border border-cyan-100 rounded-xl p-6 text-center">
          <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Staying compliant and organized ensures your salon runs smoothly, avoids legal issues, and continues to grow as a trusted beauty brand.
          </p>
        </div>

      </div>
    </section>
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4">
            A Deeper Look at the <span className='text-cyan-600'>Beauty Salon</span> Industry
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Before launching your beauty salon, it’s important to understand the industry landscape. Market size, growth trends, and earning potential all play a key role in shaping your business success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <p className="text-slate-300 text-sm mb-2">U.S. Salon Industry Value (2022)</p>
            <h3 className="text-3xl font-bold text-cyan-400">$53 Billion</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <p className="text-slate-300 text-sm mb-2">Global Market Growth</p>
            <h3 className="text-3xl font-bold text-cyan-400">$116B → $244.5B</h3>
            <p className="text-xs text-slate-400 mt-1">2020 to 2030</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <p className="text-slate-300 text-sm mb-2">Median Salon Owner Salary</p>
            <h3 className="text-3xl font-bold text-cyan-400">$69,000+</h3>
          </div>

        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300 leading-relaxed mb-4">
            The beauty salon industry, including hair, skincare, and nail services, continues to grow rapidly. With billions in market value and increasing demand for self-care and wellness, salons are becoming essential lifestyle businesses.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            Industry growth is driven by rising consumer spending on beauty services, increased awareness of personal grooming, and the expansion of premium salon experiences.
          </p>

          <p className="text-slate-300 leading-relaxed">
            As a future salon owner, you are entering a thriving and scalable industry with strong income potential and long-term growth opportunities.
          </p>
        </div>

        {/* Highlight */}
        <div className="mt-12 bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-6 text-center">
          <p className="text-slate-200 max-w-3xl mx-auto">
            With strong market growth and increasing demand, now is the perfect time to start and scale a successful beauty salon business.
          </p>
        </div>

      </div>
    </section>
   <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
               <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
                  What Sets Successful <span className='text-cyan-600'>Salons</span> Apart
               </h2>
               <p className="text-lg text-slate-600 mb-8">
                  Thriving beauty businesses share common characteristics that drive customer loyalty and sustainable growth.
               </p>
               <div className="space-y-4">
                  {[
                  "Exceptional customer service and personalized experiences",
                  "Highly skilled professionals with ongoing training",
                  "Clean, inviting atmosphere with modern amenities",
                  "Strategic location with convenient parking",
                  "Competitive pricing aligned with market expectations",
                  "Strong online presence and easy booking systems",
                  "Quality products and up-to-date equipment",
                  "Consistent branding across all touchpoints"
                  ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                     <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                     <p className="text-slate-700">{item}</p>
                  </div>
                  ))}
               </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl p-8 md:p-12 text-white">
               <h3 className="text-2xl font-bold mb-6">Service Ideas to Consider</h3>
               <div className="space-y-6">
                  <div>
                     <h4 className="font-semibold text-lg mb-2 text-cyan-300">Hair Services</h4>
                     <p className="text-slate-300">Cuts, color, highlights, balayage, treatments, extensions, styling</p>
                  </div>
                  <div>
                     <h4 className="font-semibold text-lg mb-2 text-cyan-300">Nail Care</h4>
                     <p className="text-slate-300">Manicures, pedicures, gel polish, nail art, acrylics, dip powder</p>
                  </div>
                  <div>
                     <h4 className="font-semibold text-lg mb-2 text-cyan-300">Skincare</h4>
                     <p className="text-slate-300">Facials, chemical peels, microdermabrasion, waxing, brow shaping</p>
                  </div>
                  <div>
                     <h4 className="font-semibold text-lg mb-2 text-cyan-300">Specialty Services</h4>
                     <p className="text-slate-300">Makeup application, spray tanning, lash extensions, massage therapy</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   
   <section className="py-16 px-6 bg-cyan-50">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
               Common Questions
            </h2>
            <p className="text-xl text-slate-600">
               Get answers to frequently asked questions about starting a beauty salon
            </p>
         </div>
         <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div
               key={index}
               className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-colors"
               >
               <button
                  onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">
                     {faq.question}
                  </h3>
                  <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                  }`}
                  />
               </button>
               <div
               className={`overflow-hidden transition-all ${
               openIndex === index ? 'max-h-96' : 'max-h-0'
               }`}
               >
               <p className="px-8 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
               </p>
            </div>
         </div>
         ))}
      </div>
</div>
</section>
<section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
   <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
         <h2 className="text-5xl font-extrabold text-white mb-6">
            Ready to Begin Your Salon Journey?
         </h2>
         <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Join thousands of successful salon owners who turned their passion into a thriving business
         </p>
         <button onClick={() =>
            {
            setSelectedBusinessType('');
            setIsModalOpen(true);
            }} className="group bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-xl">
            Start Your Salon Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
         </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
         {[
         { title: "Expert Guidance", description: "Step-by-step support throughout your journey" },
         { title: "Legal Protection", description: "Proper business formation and licensing" },
         { title: "Ongoing Support", description: "Resources to help your salon thrive" }
         ].map((benefit, index) => (
         <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
               <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
               <p className="text-slate-400 text-sm">{benefit.description}</p>
            </div>
         </div>
         ))}
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