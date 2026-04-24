import { useState } from 'react'; 
import GetStartedModal from '../components/GetStartedModal';
import { Book, Users, Briefcase, FileText, Building, Settings, Shield, Wrench, CheckCircle, TrendingUp, Heart, Coffee, Calendar, MessageCircle, DollarSign, MapPin, Award, ExternalLink } from 'lucide-react';

export default function Bookstore() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative py-20 px-4">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg"
      alt="Bookstore"
      className="w-full h-full object-cover"
    />
    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 via-slate-600/80 to-cyan-100/70"></div>
  </div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto text-center">

    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
      <Book className="w-10 h-10 text-cyan-700" />
    </div>

    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
      Open Your Dream Bookstore
    </h1>

    <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
      Transform your passion for books into a thriving community hub.
      Learn everything you need to launch and grow a successful independent bookstore.
    </p>

    <div className="flex gap-4 justify-center flex-wrap mt-8">
      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-700 transition"
      >
        Get Started Now
      </button>

      <a
        href="/contact"
        className="border-2 text-white border-white px-8 py-3 rounded-lg font-bold hover:bg-white transition"
      >
        Learn More
      </a>
    </div>

    <div className="mt-10 flex flex-wrap gap-6 justify-center text-sm">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-green-600" />
        <span className="text-white">35% Industry Growth</span>
      </div>
      <div className="flex items-center gap-2">
        <DollarSign className="w-5 h-5 text-green-600" />
        <span className="text-white">$10B Annual Sales</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="w-5 h-5 text-green-600" />
        <span className="text-white">600+ New Stores</span>
      </div>
    </div>

  </div>
</section>

      {/* Why Start a Bookstore */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Why Open a Bookstore Now?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Despite the digital age, independent bookstores are experiencing remarkable growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">35% Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                Independent bookstores grew by 35% between 2009 and 2015, proving the market's resilience and consumer demand for local shops.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Book className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Print Resurgence</h3>
              <p className="text-gray-700 leading-relaxed">
                Print book sales increased annually for five consecutive years, reaching approximately $10 billion in the U.S. market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-cyan-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">New Openings</h3>
              <p className="text-gray-700 leading-relaxed">
                Nearly 600 new independent bookstores have opened their doors, creating vibrant literary communities across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Right for You */}
      <section className="py-20 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Is This Right for You?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the daily responsibilities and skills required for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-cyan-600" />
                Daily Responsibilities
              </h3>
              <ul className="space-y-4">
                {[
                  'Manage inventory and ordering systems',
                  'Provide exceptional customer service',
                  'Oversee and train staff members',
                  'Engage with the local community',
                  'Maintain store presentation and cleanliness',
                  'Handle financial administration and reporting'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-600" />
                Essential Skills
              </h3>
              <ul className="space-y-4">
                {[
                  'Strong interpersonal and communication abilities',
                  'Deep understanding of customer preferences',
                  'Meticulous attention to recordkeeping',
                  'Eye for visual merchandising and presentation',
                  'Robust networking capabilities',
                  'Passion for literature and learning'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Strategies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Build a Thriving Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven strategies to create meaningful connections and stand out from online competitors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Specialize', desc: 'Focus on specific genres or niches that resonate with your community' },
              { icon: Users, title: 'Expert Staff', desc: 'Hire knowledgeable, passionate readers who can recommend books' },
              { icon: Coffee, title: 'Comfortable Space', desc: 'Create inviting browsing areas with seating and café services' },
              { icon: Calendar, title: 'Host Events', desc: 'Organize author readings, book clubs, and literary gatherings' },
              { icon: MessageCircle, title: 'Social Media', desc: 'Build an engaged online following with curated content' },
              { icon: Building, title: 'Local Partners', desc: 'Collaborate with businesses for pop-up shops and events' },
              { icon: Book, title: 'Personal Touch', desc: 'Remember regular customers and their reading preferences' },
              { icon: TrendingUp, title: 'Community Hub', desc: 'Position your store as a cultural gathering place' }
            ].map((strategy, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow">
                <strategy.icon className="w-8 h-8 text-cyan-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{strategy.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{strategy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Planning */}
      <section className="py-20 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Create Your Business Plan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive roadmap is essential for securing funding and guiding your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Executive Summary', items: ['Business overview', 'Mission statement', 'Key objectives'] },
              { title: 'Market Analysis', items: ['Target audience', 'Competition research', 'Market trends'] },
              { title: 'Business Model', items: ['Revenue streams', 'Pricing strategy', 'Inventory approach'] },
              { title: 'Organization', items: ['Ownership structure', 'Management team', 'Staff requirements'] },
              { title: 'Marketing Strategy', items: ['Branding approach', 'Customer acquisition', 'Retention tactics'] },
              { title: 'Financial Projections', items: ['Startup costs', 'Revenue forecasts', 'Break-even analysis'] }
            ].map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Structure */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Choose Your Legal Structure</h2>
            <p className="text-lg text-gray-600">
              Proper business formation protects your personal assets and establishes credibility
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 p-10 rounded-2xl border-2 border-cyan-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Recommended: LLC Formation</h3>
                <p className="text-gray-700 leading-relaxed">
                  A Limited Liability Company (LLC) is the optimal choice for most bookstore businesses,
                  offering the perfect balance of protection and simplicity.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {[
                    'Personal liability protection',
                    'Flexible tax options',
                    'Professional credibility',
                    'Easy to manage and maintain'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Protections</h4>
                <ul className="space-y-2">
                  {[
                    'Separates personal and business assets',
                    'Shields from business debts',
                    'Professional legal standing',
                    'Suitable for small operations'
                  ].map((protection, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Shield className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{protection}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Setup */}
      <section className="py-20 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Operational Setup Essentials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key elements to get your bookstore up and running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Location Selection',
                points: ['High foot traffic areas', 'Adequate storage space', 'Accessible parking', 'Community visibility']
              },
              {
                icon: MessageCircle,
                title: 'Marketing Foundation',
                points: ['Professional website', 'Social media presence', 'Email newsletter', 'Local advertising']
              },
              {
                icon: Users,
                title: 'Staffing Strategy',
                points: ['Hire passionate readers', 'Part-time flexibility', 'Training programs', 'Employee benefits']
              },
              {
                icon: DollarSign,
                title: 'Financial Systems',
                points: ['Business bank account', 'Accounting software', 'POS system', 'Payment processing']
              },
              {
                icon: Wrench,
                title: 'Equipment & Fixtures',
                points: ['Quality bookshelves', 'Comfortable seating', 'Proper lighting', 'Security systems']
              },
              {
                icon: Settings,
                title: 'Management Software',
                points: ['Inventory tracking', 'Sales analytics', 'Customer database', 'Order management']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Maintenance */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Stay Compliant & Organized</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ongoing requirements to keep your bookstore legally sound and financially healthy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Annual Requirements</h3>
              <div className="space-y-4">
                {[
                  { task: 'File Annual Reports', freq: 'Yearly' },
                  { task: 'Renew Business Licenses', freq: 'Yearly' },
                  { task: 'Update Permits', freq: 'As Required' },
                  { task: 'File Business Taxes', freq: 'Yearly' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg">
                    <span className="text-gray-700 font-medium">{item.task}</span>
                    <span className="text-sm text-green-700 font-semibold">{item.freq}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quarterly Tasks</h3>
              <div className="space-y-4">
                {[
                  { task: 'Pay Estimated Taxes', freq: 'Quarterly' },
                  { task: 'Review Financial Records', freq: 'Quarterly' },
                  { task: 'Update Bookkeeping', freq: 'Monthly' },
                  { task: 'Maintain Business Records', freq: 'Ongoing' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg">
                    <span className="text-gray-700 font-medium">{item.task}</span>
                    <span className="text-sm text-blue-700 font-semibold">{item.freq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-cyan-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Protect Your Business</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential insurance coverage to safeguard your investment and operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Workers' Compensation",
                description: 'Protects your employees in case of work-related injuries or illnesses. Required in most states if you have employees.',
                coverage: ['Medical expenses', 'Lost wages', 'Disability benefits', 'Legal protection']
              },
              {
                title: 'General Liability',
                description: 'Covers customer injuries on your premises and protects against property damage claims.',
                coverage: ['Slip and fall incidents', 'Property damage', 'Legal defense costs', 'Medical payments']
              },
              {
                title: 'Property Insurance',
                description: 'Protects your inventory, equipment, and physical space from theft, fire, and natural disasters.',
                coverage: ['Building damage', 'Inventory loss', 'Equipment replacement', 'Business interruption']
              }
            ].map((insurance, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <Shield className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{insurance.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{insurance.description}</p>
                <ul className="space-y-2">
                  {insurance.coverage.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* Tools & Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

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
                className="border rounded-2xl p-6 hover:shadow-lg transition group"
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Book className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Start Your Bookstore Journey?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join the growing community of independent booksellers creating vibrant literary spaces.
            Your passion for books can become a thriving business that enriches your community.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white font-bold text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Started Today
          </button>
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
