import { Globe, Shield, Briefcase, Users, TrendingUp, DollarSign, Settings, MessageSquare, Award, CheckCircle, ArrowRight, Laptop, Wifi, Map, Wrench, ExternalLink, FileText, PlayCircle, Code, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { motion } from 'framer-motion';

export default function DigitalNomadBusiness() {
const features = [
  "Complete guide to starting a digital nomad business from anywhere in the world",
  "Understanding global taxes, finances, and legal compliance",
  "Latest digital nomad statistics and market opportunities",
  "How to hire and manage remote teams effectively",
  "Marketing, branding, and business growth strategies",
  "Choosing the best legal structure for your business",
  "Tools, resources, and systems for remote business success",
  "Key rules, regulations, and international business requirements",
  "Top remote business ideas including dropshipping, SaaS, and digital products",
  "Automation and passive income strategies to scale your online business globally",
];
const remoteJobs = [
  "Software development, web development, and coding",
  "Graphic design, UI/UX design, and creative services",
  "Content writing, blogging, and copywriting",
  "Video production, editing, and photography",
];

const businessIdeas = [
  "Dropshipping and eCommerce (Amazon, eBay, Shopify)",
  "Affiliate marketing and niche blogging",
  "Selling digital products (courses, ebooks, templates)",
  "Social media marketing and personal branding",
];

const freelancePlatforms = [
  "Upwork",
  "Fiverr",
  "Freelancer",
  "Toptal",
  "99Designs",
];

const businessStructures = [
  "Sole Proprietorship (basic but no liability protection)",
  "Limited Liability Company (LLC) – best for most digital nomads",
  "Series LLC – advanced structure for multiple business units",
  "S Corporation – suitable for growing structured businesses",
  "C Corporation – ideal for large-scale enterprises",
];

const taxPoints = [
  "U.S. citizens must pay taxes even when living abroad",
  "Foreign Earned Income Exclusion can reduce taxable income",
  "Additional reporting required for foreign bank accounts over $10,000",
  "Foreign housing expenses may be tax deductible",
  "Consult local tax professionals for compliance in your country of residence",
];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
   return (
    <div className="flex flex-col min-h-screen bg-white">

      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
          alt="Digital Nomad Workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6 backdrop-blur">
              <Wifi className="h-4 w-4" />
              <span className="text-sm font-semibold">Remote Business Lifestyle</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-xl">
              Start & Scale Your Online Business From Anywhere in the World
            </h1>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-xl">
              Build a profitable location-independent business and work remotely from any country. Discover how to launch, manage, and grow your business online without being tied to a physical office.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  setSelectedBusinessType("");
                  setIsModalOpen(true);
                }}
                className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500 transition flex items-center justify-center shadow-lg shadow-cyan-900/40"
              >
                Start Your Online Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <a
                href="/contact"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-cyan-500 hover:text-white transition"
              >
                Learn More
              </a>
            </div>

            
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-4 backdrop-blur">
                <div className="flex items-center justify-between mb-4">
                  <Laptop className="h-8 w-8 text-cyan-400" />
                  <span className="text-green-400 font-semibold flex items-center">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Live
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Your Global Business Dashboard
                </h3>
                <p className="text-gray-400 text-sm">
                  Monitor and manage your business from anywhere in real-time
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-white backdrop-blur">
                  <Map className="h-6 w-6 mb-2 text-cyan-400" />
                  <p className="text-sm font-semibold">Operate in 195+ Countries</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-white backdrop-blur">
                  <TrendingUp className="h-6 w-6 mb-2 text-cyan-400" />
                  <p className="text-sm font-semibold">1B Digital Nomads by 2035</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              What Is a Digital Nomad Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A digital nomad business is an enterprise you can operate from any location worldwide with just an internet connection. Whether you're in Bali, Barcelona, or Bangkok, your business travels with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "E-Commerce & Dropshipping",
                description: "Run online stores without holding inventory. Manage suppliers and customers from anywhere in the world."
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "SaaS Applications",
                description: "Build and maintain software-as-a-service platforms that generate recurring revenue globally."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Affiliate Marketing",
                description: "Create content-driven websites that earn commissions by promoting products and services."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Digital Products",
                description: "Sell online courses, ebooks, templates, and other information products to a worldwide audience."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Freelance Services",
                description: "Offer professional services like writing, design, development, or consulting to global clients."
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Content Creation",
                description: "Build audiences through blogs, podcasts, or videos and monetize through multiple channels."
              }
            ].map((business, index) => (
              <div key={index} className="bg-cyan-100/50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cyan-200">
                <div className="text-cyan-600 mb-4">{business.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{business.title}</h3>
                <p className="text-gray-600 leading-relaxed">{business.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4" />
            Digital Nomad Business Guide
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            How to Start a Digital Nomad Business & Work From Anywhere in the World
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Start a profitable digital nomad business and build a location-independent lifestyle.
            Launch, manage, and scale your online business globally — from dropshipping and SaaS
            to digital products — with this complete step-by-step guide.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Complete Digital Nomad Business Formation Guide
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Learn how to build and manage a successful remote business with proven strategies,
              global compliance knowledge, and scalable systems designed for modern entrepreneurs.
              Discover the best digital business models, tools, and automation techniques to grow faster
              and operate efficiently from anywhere in the world.
            </p>

            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content with Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Video Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                className="w-full h-[260px] md:h-[320px]"
                src="https://www.youtube.com/embed/9No-FiEInLA"
                title="Digital Nomad Business Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Overlay label */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">
                <PlayCircle className="w-3 h-3 text-cyan-400" />
                Watch Guide
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Laptop className="w-7 h-7 text-cyan-400" />
                <span className="text-green-400 text-sm flex items-center font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Remote Ready
                </span>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">
                Manage Your Business Globally
              </h4>

              <p className="text-gray-400 text-sm mb-4">
                Operate your business seamlessly from anywhere with digital tools,
                automation, and remote team management systems.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <Users className="w-4 h-4 text-cyan-400 mb-1" />
                  <p className="text-xs text-white">Global Clients</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <Briefcase className="w-4 h-4 text-cyan-400 mb-1" />
                  <p className="text-xs text-white">Remote Work</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <FileText className="w-4 h-4 text-cyan-400 mb-1" />
                  <p className="text-xs text-white">Legal Setup</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <Globe className="w-4 h-4 text-cyan-400 mb-1" />
                  <p className="text-xs text-white">Worldwide Access</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-lg">
            Ready to build a location-independent business and travel the world while earning?
            Start your digital nomad journey today.
          </p>

          <button className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition shadow-lg shadow-cyan-900/40">
            Start Your Digital Nomad Business
          </button>
        </motion.div>
      </div>
    </section>

      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Essential Skills for Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these competencies to thrive as a location-independent entrepreneur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Professional expertise in your chosen field",
              "Outstanding communication abilities",
              "Customer relationship management",
              "Remote work proficiency",
              "Financial discipline and planning",
              "Adaptability to change and challenges"
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-start space-x-4 shadow-sm border border-gray-200">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="relative py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4" />
            Digital Nomad Business Guide
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Best Remote Jobs & Digital Nomad Business Ideas to Work From Anywhere
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover the best digital nomad jobs, online business ideas, and legal strategies to build a profitable remote business. Learn how to start, manage, and scale your digital business globally while traveling the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Remote Jobs */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" />
              Remote Jobs You Can Do Anywhere
            </h3>
            <ul className="space-y-3 text-gray-300">
              {remoteJobs.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Ideas */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-cyan-400" />
              Profitable Online Business Ideas
            </h3>
            <ul className="space-y-3 text-gray-300">
              {businessIdeas.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Freelance Platforms */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              Top Freelance Platforms
            </h3>
            <ul className="space-y-3 text-gray-300">
              {freelancePlatforms.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Structure */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              Best Business Structure
            </h3>
            <ul className="space-y-3 text-gray-300">
              {businessStructures.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Setup */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Digital Nomad Business Setup Tips
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                Choose LLC for flexibility and liability protection
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                Use a registered agent for global compliance
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                Consider forming in business-friendly states like Delaware
              </li>
            </ul>
          </div>

          {/* Taxes */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-cyan-400" />
              Taxes for Digital Nomads
            </h3>
            <ul className="space-y-3 text-gray-300">
              {taxPoints.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-lg">
            Start your digital nomad business today and build a scalable, location-independent income stream from anywhere in the world.
          </p>
          <button onClick={() => {
                  setSelectedBusinessType("");
                  setIsModalOpen(true);
                }} className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition shadow-lg">
            Start Your Digital Nomad Business
          </button>
        </div>
      </div>
    </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                Choose the Right Legal Structure
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Selecting the proper business entity is crucial for protecting your assets and optimizing your tax situation while abroad.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Limited Liability Company (LLC)",
                    description: "The most popular choice for digital nomads. Quick to establish, affordable, and provides excellent personal asset protection. Highly recommended for most entrepreneurs.",
                    recommended: true
                  },
                  {
                    title: "S Corporation",
                    description: "Offers potential tax advantages for higher-earning businesses. More complex compliance requirements but can reduce self-employment taxes.",
                    recommended: false
                  },
                  {
                    title: "C Corporation",
                    description: "Best for businesses seeking significant outside investment or planning to go public. More formal structure with double taxation considerations.",
                    recommended: false
                  }
                ].map((entity, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{entity.title}</h3>
                      {entity.recommended && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{entity.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
              <Shield className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Protection While You Travel</h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                Using a registered agent service ensures you never miss important legal documents, even when you're halfway around the world.
              </p>
              <ul className="space-y-3">
                {[
                  "Receive legal notices promptly",
                  "Maintain privacy and security",
                  "Stay compliant across borders",
                  "Professional business address"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <DollarSign className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Navigate Tax Obligations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your tax responsibilities is essential for maintaining compliance while working internationally
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">U.S. Tax Requirements</h3>
                <ul className="space-y-4">
                  {[
                    "File taxes regardless of your location",
                    "Report foreign bank accounts over $10,000",
                    "Quarterly estimated tax payments",
                    "Maintain accurate financial records",
                    "Annual business reporting obligations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Potential Deductions</h3>
                <ul className="space-y-4">
                  {[
                    "Foreign Earned Income Exclusion (~$120,000)",
                    "Foreign housing expense deductions",
                    "Business travel costs",
                    "Home office expenses",
                    "Professional services and software"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border-t border-yellow-200 p-6">
              <p className="text-yellow-800 font-medium text-center">
                Always consult with a qualified tax professional who specializes in international taxation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Useful Online Tools for Digital Nomad Business
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

      <section className="py-20 bg-gradient-to-br from-cyan-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Users className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Join the Community
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Connect with thousands of location-independent entrepreneurs around the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Social Communities</h3>
              <ul className="space-y-4">
                {[
                  "Digital Nomad Entrepreneurs",
                  "Remote Entrepreneurs Network",
                  "Nomadic Business Owners",
                  "Location Independent Founders",
                  "Global Startup Community"
                ].map((community, index) => (
                  <li key={index} className="flex items-center space-x-3 text-white">
                    <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                    <span>{community}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Discussion Forums</h3>
              <ul className="space-y-4">
                {[
                  "Nomad List Community",
                  "Digital Nomad Subreddit",
                  "Remotive Community",
                  "Indie Hackers Forum",
                  "Entrepreneur.com Forums"
                ].map((forum, index) => (
                  <li key={index} className="flex items-center space-x-3 text-white">
                    <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
                    <span>{forum}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about starting your digital nomad business
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need a registered address to start a business?",
                answer: "Yes, most jurisdictions require a physical business address. Using a registered agent service is ideal for nomads, as it provides a permanent business address and ensures you receive important legal documents no matter where you're traveling."
              },
              {
                question: "How do I handle taxes while traveling internationally?",
                answer: "U.S. citizens must file taxes regardless of location. You may qualify for the Foreign Earned Income Exclusion (around $120,000) and foreign housing deductions. Always report foreign bank accounts exceeding $10,000 and pay quarterly estimated taxes. Consult with an international tax specialist."
              },
              {
                question: "What's the best business structure for digital nomads?",
                answer: "An LLC is typically the best choice for most digital nomads. It's quick and affordable to establish, provides strong personal asset protection, and offers flexible tax treatment. It's simpler than a corporation while still protecting your personal assets."
              },
              {
                question: "What equipment should I bring as a digital nomad?",
                answer: "Bring backup technology equipment, as availability and costs vary internationally. Essential items include a reliable laptop, portable chargers, universal adapters, backup hard drives, and a quality headset for client calls. Consider travel insurance for expensive equipment."
              },
              {
                question: "Can I hire employees while running a nomadic business?",
                answer: "Yes, you can hire remote employees or contractors from anywhere in the world. Ensure you comply with both your home country's labor laws and the laws of countries where your employees reside. Consider using global payroll services to simplify international hiring."
              },
              {
                question: "How do I maintain work-life balance on the road?",
                answer: "Set clear boundaries between work hours and exploration time. Establish routines, use productivity tools, and communicate your availability to clients. Many successful nomads follow the 'slow travel' approach, staying in each location for weeks or months rather than constantly moving."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="px-6 py-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ArrowRight className="h-5 w-5 text-gray-400 transform rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Launch Your Digital Nomad Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join thousands of entrepreneurs who've successfully built location-independent businesses. Start your journey today and work from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-lg flex items-center justify-center">
              Start Your Business Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg border border-white/30">
              Schedule Consultation
            </button>
          </div>
          <p className="mt-8 text-gray-400">
            Fast, simple, and affordable setup • Personal asset protection • Expert support
          </p>
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