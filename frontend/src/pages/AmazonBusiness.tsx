import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { ShoppingCart, TrendingUp, Package, Users, Target, Zap, Shield, DollarSign, Clock, Star, BarChart3, Lightbulb, CheckCircle2, AlertCircle, Rocket, MessageSquare, ArrowRight, Calculator, Globe, Briefcase, Building2, Calendar, Cog, CreditCard, FileText, Laptop, MapPin, Wrench } from 'lucide-react';

const stats = [
    {
      icon: TrendingUp,
      value: '20%+',
      label: 'Year-over-year growth in e-commerce',
      color: 'text-emerald-600'
    },
    {
      icon: Users,
      value: '80%',
      label: 'Of Americans shop online regularly',
      color: 'text-cyan-600'
    },
    {
      icon: DollarSign,
      value: '$1M+',
      label: 'Earned by top 15% of sellers annually',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      value: '180+',
      label: 'Countries Amazon operates in',
      color: 'text-cyan-600'
    }
  ];

  const models = [
    {
      title: 'Fulfilled by Amazon (FBA)',
      icon: Zap,
      description: 'Amazon handles storage, shipping, customer service, and returns for you.',
      features: [
        'Products stored in Amazon warehouses',
        'Prime eligibility for faster delivery',
        'Amazon manages customer service',
        'Automated returns processing',
        'Focus on sourcing and sales'
      ],
      popular: true,
      adoption: '78% of sellers use FBA'
    },
    {
      title: 'Fulfilled by Merchant (FBM)',
      icon: Package,
      description: 'You handle all logistics, storage, and customer service independently.',
      features: [
        'Complete control over inventory',
        'Lower Amazon fees',
        'Direct customer relationships',
        'Flexible shipping options',
        'Manage your own returns'
      ],
      popular: false,
      adoption: '22% use FBM exclusively'
    }
  ];

  const factors = [
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Customers compare prices across platforms. Your pricing strategy must balance profitability with market competitiveness.'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Speed matters. Prime members expect 2-day shipping. FBA helps meet these expectations automatically.'
    },
    {
      icon: Star,
      title: 'Quality Products',
      description: 'Even budget items must deliver value. Quality builds trust and reduces returns, protecting your margins.'
    },
    {
      icon: Target,
      title: 'Customer Reviews',
      description: 'Reviews drive visibility and conversions. Products with 4+ star ratings and numerous reviews perform significantly better.'
    }
  ];

  const skills = [
    {
      icon: BarChart3,
      title: 'Research & Analysis',
      description: 'Identify profitable products, reliable suppliers, and target customers through data-driven research.'
    },
    {
      icon: TrendingUp,
      title: 'Market Forecasting',
      description: 'Predict trends, seasonal demand, and inventory needs to optimize stock levels and cash flow.'
    },
    {
      icon: Zap,
      title: 'Adaptability',
      description: 'Quickly pivot strategies based on market changes, customer feedback, and competitive landscape.'
    },
    {
      icon: Calculator,
      title: 'Financial Acumen',
      description: 'Master profit margin calculations, cash flow management, and currency exchange considerations.'
    },
    {
      icon: Target,
      title: 'Attention to Detail',
      description: 'Analyze competitor listings, product specs, and supplier requirements with precision.'
    },
    {
      icon: Lightbulb,
      title: 'Marketing Expertise',
      description: 'Craft compelling product titles, descriptions, and images that convert browsers into buyers.'
    }
  ];

  const challenges = [
    {
      title: 'Thin Profit Margins',
      description: 'The Amazon marketplace is highly competitive. You must carefully manage costs including product sourcing, Amazon fees, shipping, and advertising while maintaining competitive prices.',
      impact: 'Requires meticulous financial planning and cost optimization.'
    },
    {
      title: 'Cash Flow Management',
      description: 'Balancing inventory investment with available capital is crucial. You need sufficient stock to meet demand while avoiding cash flow problems from overstocking.',
      impact: 'Plan for supplier lead times and seasonal demand fluctuations.'
    },
    {
      title: 'Intense Competition',
      description: 'Thousands of sellers compete in most product categories. Staying competitive requires constant market monitoring and strategic positioning.',
      impact: 'Differentiation through quality, branding, or unique value propositions is essential.'
    },
    {
      title: 'Marketing & Visibility',
      description: 'Organic visibility takes time. Most sellers need to invest in Amazon PPC advertising, social media marketing, or other promotional strategies.',
      impact: 'Budget for marketing costs and learn effective advertising techniques.'
    }
  ];

  const activities = [
    'Review sales performance from previous day, week, and month to identify trends',
    'Analyze inventory levels and reorder products approaching low stock thresholds',
    'Monitor competitor pricing and adjust your listings for competitive positioning',
    'Place new orders with suppliers and coordinate payment and shipping logistics',
    'Respond to customer inquiries and address any product issues or concerns',
    'Research potential new products and evaluate market opportunities',
    'Optimize product listings with better images, descriptions, or keywords',
    'Review and respond to customer reviews to build trust and engagement',
    'Calculate profit margins and adjust prices to maintain healthy cash flow',
    'Manage Amazon PPC campaigns and optimize advertising spend',
    'Address any policy compliance issues or notifications from Amazon',
    'Plan promotional strategies for upcoming seasons or sales events'
  ];

  const structures = [
    {
      icon: Users,
      title: 'Sole Proprietorship',
      pros: ['Simple setup', 'Low cost', 'Complete control', 'Simple tax filing'],
      cons: ['Unlimited personal liability', 'Harder to raise capital', 'Business tied to owner'],
      best: 'Testing the waters with minimal investment'
    },
    {
      icon: Shield,
      title: 'Limited Liability Company (LLC)',
      pros: ['Personal asset protection', 'Pass-through taxation', 'Flexible management', 'Professional credibility'],
      cons: ['State filing fees', 'Annual reports required', 'More paperwork than sole proprietorship'],
      best: 'Most Amazon sellers - balances protection and simplicity',
      recommended: true
    },
    {
      icon: Building2,
      title: 'S Corporation',
      pros: ['Asset protection', 'Tax advantages on profits', 'No double taxation', 'Professional structure'],
      cons: ['More complex setup', 'Stricter requirements', 'Ongoing compliance', 'Limited ownership structure'],
      best: 'Established sellers with significant revenue'
    },
    {
      icon: Briefcase,
      title: 'C Corporation',
      pros: ['Strong liability protection', 'Easier to raise capital', 'Unlimited growth potential', 'Transferable ownership'],
      cons: ['Double taxation', 'Complex administration', 'Higher costs', 'Extensive regulations'],
      best: 'Large-scale operations seeking major investment'
    }
  ];

  const steps = [
    {
      icon: MapPin,
      title: 'Business Location',
      description: 'Decide where to operate your business. Most sellers start from home to minimize overhead costs.',
      action: 'Consider a dedicated workspace for inventory management if not using FBA.'
    },
    {
      icon: FileText,
      title: 'Licenses & Permits',
      description: 'Research required business licenses, sales tax permits, and industry-specific regulations.',
      action: 'Requirements vary by state and product category - ensure full compliance.'
    },
    {
      icon: CreditCard,
      title: 'Financial Setup',
      description: 'Open a dedicated business bank account and obtain a business credit card.',
      action: 'Separate business and personal finances from day one for easier accounting.'
    },
    {
      icon: Cog,
      title: 'Business Processes',
      description: 'Establish efficient workflows for inventory management, supplier communications, and order processing.',
      action: 'Document your processes to maintain consistency and efficiency.'
    },
    {
      icon: Laptop,
      title: 'Equipment & Tools',
      description: 'Invest in necessary equipment: computer, printer, shipping supplies (if FBM), and software tools.',
      action: 'All business equipment expenses are tax-deductible.'
    },
    {
      icon: Users,
      title: 'Hiring & Delegation',
      description: 'As you scale, consider hiring virtual assistants for customer service, product research, or bookkeeping.',
      action: 'Start solo, then delegate tasks as revenue grows.'
    },
    {
      icon: BarChart3,
      title: 'Software & Analytics',
      description: 'Utilize tools like Helium 10, Jungle Scout, or Keepa for product research and market analysis.',
      action: 'Invest in quality software to gain competitive advantages.'
    },
    {
      icon: Calendar,
      title: 'Ongoing Maintenance',
      description: 'File annual reports, renew licenses, manage tax obligations, and maintain compliance.',
      action: 'Set calendar reminders for all recurring business obligations.'
    }
  ];

  const communities = [
    'Amazon Seller Performance Facebook Group',
    'FBA High Rollers Community',
    'Amazon Sellers Society',
    'Private Label Hub'
  ];

  const forums = [
    'Amazon Seller Central Forums',
    'Reddit r/FulfillmentByAmazon',
    'Seller Central Discussion Boards',
    'eCommerce Fuel Community'
  ];

  const events = [
    'Seller Summit Annual Conference',
    'Amazon Accelerate',
    'Prosper Show',
    'ASGTG Meetups'
  ];

  const tools = [
    { name: 'Helium 10', category: 'Product Research & SEO' },
    { name: 'Jungle Scout', category: 'Market Analysis' },
    { name: 'Keepa', category: 'Price Tracking' },
    { name: 'FeedbackWhiz', category: 'Review Management' },
    { name: 'InventoryLab', category: 'Inventory Management' },
    { name: 'QuickBooks', category: 'Accounting' }
  ];

  const benefits = [
    'Access to 300M+ active customers',
    'Proven e-commerce infrastructure',
    'Flexible fulfillment options',
    'Scalable business model',
    'Global marketplace opportunities',
    'Comprehensive seller support'
  ];

export default function AmazonBusiness() {
    const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
  {/* Title */}
  <title>Start an Amazon Business in USA | Seller Setup & Compliance Guide</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Learn how to start an Amazon business in the USA. Get guidance on LLC formation, Amazon seller account setup, EIN, tax compliance, and licensing requirements."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/start-a-business/amazon-business"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/amazon-business"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/start-a-business/amazon-business"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="Start an Amazon Business in USA | Seller Setup Guide"
  />
  <meta
    property="og:description"
    content="Step-by-step guide to starting an Amazon business in the USA, including seller account registration, LLC setup, EIN, and tax compliance."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/start-a-business/amazon-business"
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
    content="Start an Amazon Business in USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Start an Amazon Business in USA | Complete Guide"
  />
  <meta
    name="twitter:description"
    content="Discover how to launch and run an Amazon seller business in the USA with proper LLC formation, EIN registration, and compliance support."
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
      "headline": "How to Start an Amazon Business in the USA",
      "url": "https://us.thefutureperfectglobal.com/start-a-business/amazon-business",
      "description": "A complete guide to starting an Amazon business in the USA, covering Amazon seller account setup, LLC formation, EIN registration, and tax compliance.",
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

     <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">

          {/* Icon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-cyan-100 rounded-full shadow-sm mb-2">
            <ShoppingCart className="w-5 h-5 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">
              Summer Business Opportunity 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Launch Your <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2">
              Amazon Business
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-600 mb-6 max-w-5xl mx-auto leading-relaxed">
            Start a profitable summer business with low investment and high demand. 
            Discover proven seasonal business ideas, attract customers fast, and build 
            a scalable income stream during peak season.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <button
              onClick={() => {
                setSelectedBusinessType("");
                setIsModalOpen(true);
              }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-2xl"
            >
              Start Your Business
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-xl font-semibold text-lg text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-sm">
              Explore Ideas
            </button>
          </div>

          {/* Stats Section (Glass Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            <div className="bg-white/70 backdrop-blur-lg border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <div className="text-3xl font-bold text-cyan-600 mb-2">80%+</div>
              <div className="text-gray-600">Seasonal Demand Growth</div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <div className="text-3xl font-bold text-cyan-600 mb-2">Low Cost</div>
              <div className="text-gray-600">Startup Investment</div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <div className="text-3xl font-bold text-cyan-600 mb-2">Fast</div>
              <div className="text-gray-600">Time to Launch</div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            The E-commerce Revolution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Online shopping continues to dominate retail, creating unprecedented opportunities for entrepreneurs worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mb-4`} />
              <div className="text-5xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Business Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amazon offers two primary fulfillment models. Each has unique advantages depending on your business goals and resources.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 ${
                model.popular ? 'border-cyan-500 shadow-xl' : 'border-gray-200'
              } hover:shadow-2xl transition-all duration-300`}
            >
              {model.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${
                  model.popular ? 'bg-cyan-100' : 'bg-gray-100'
                }`}>
                  <model.icon className={`w-8 h-8 ${
                    model.popular ? 'text-cyan-600' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="inline-block bg-cyan-50 text-cyan-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {model.adoption}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {model.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cyan-50 border border-cyan-200 rounded-xl p-6">
          <p className="text-gray-700 text-center">
            <span className="font-semibold">Pro Tip:</span> Many successful sellers use a hybrid approach,
            utilizing FBA for best-sellers and FBM for specialized or low-volume products.
          </p>
        </div>
      </div>
    </section>

          <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Understanding Your Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success on Amazon requires deep understanding of customer expectations and market dynamics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-200 transition-colors">
                  <factor.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Product Selection is Critical</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Finding the right product-market fit determines your success. Research demand, analyze competition,
              and calculate profit margins before committing to inventory. Tools like Jungle Scout and Helium 10
              can provide invaluable market intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>

<section className="py-20 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Essential Skills for Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a thriving Amazon business requires a diverse skill set. Here's what separates successful sellers from the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-50 rounded-xl inline-block mb-4 group-hover:bg-cyan-100 transition-colors">
                <skill.icon className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't worry if you don't have all these skills yet. Many successful Amazon sellers developed
            these abilities through experience and continuous learning.
          </p>
        </div>
      </div>
    </section>

          <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-100 rounded-xl mb-6">
            <AlertCircle className="w-8 h-8 text-cyan-600" />
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Key Challenges to Overcome
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding potential obstacles helps you prepare effective strategies for long-term success.
          </p>
        </div>

        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-cyan-50 p-8 rounded-2xl border-l-4 border-cyan-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                {challenge.description}
              </p>
              <div className="bg-cyan-100 border border-cyan-200 rounded-lg p-4">
                <p className="text-cyan-900 font-medium">
                  <span className="font-bold">Key Takeaway:</span> {challenge.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            The Upside is Enormous
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            While challenges exist, the rewards can be substantial. The top 15% of Amazon sellers generate over
            $1 million in annual revenue. With proper planning, persistence, and continuous optimization, you can
            build a highly profitable e-commerce business.
          </p>
        </div>
      </div>
    </section>

          <section className="py-20 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            A Day in the Life of an Amazon Seller
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Running an Amazon business involves diverse daily responsibilities. Here's what a typical day might look like.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-8">
            <h3 className="text-2xl font-bold text-white text-center">
              Daily Activities & Responsibilities
            </h3>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-cyan-50 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">4-6 hrs</div>
            <div className="text-gray-600">Average daily time commitment</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">Flexible</div>
            <div className="text-gray-600">Work from anywhere schedule</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">Scalable</div>
            <div className="text-gray-600">Grow at your own pace</div>
          </div>
        </div>
      </div>
    </section>

              <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Business Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selecting the right legal structure protects your personal assets and optimizes your tax situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {structures.map((structure, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 ${
                structure.recommended ? 'border-green-500 shadow-xl' : 'border-gray-200'
              } hover:shadow-2xl transition-all duration-300`}
            >
              {structure.recommended && (
                <div className="absolute -top-4 right-8 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Recommended
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${
                  structure.recommended ? 'bg-green-100' : 'bg-cyan-100'
                }`}>
                  <structure.icon className={`w-8 h-8 ${
                    structure.recommended ? 'text-green-600' : 'text-cyan-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {structure.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                  <ul className="space-y-1">
                    {structure.pros.map((pro, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-green-500 font-bold">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-700 mb-2">Considerations:</h4>
                  <ul className="space-y-1">
                    {structure.cons.map((con, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-cyan-500 font-bold">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <p className="text-sm text-cyan-900">
                  <span className="font-bold">Best for:</span> {structure.best}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Deciding?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Most Amazon sellers start with an LLC for its balance of protection and simplicity.
            Consult with a legal or tax professional to determine the best structure for your specific situation.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
            Get Professional Guidance
          </button>
        </div>
      </div>
    </section>

          <section className="py-20 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Setup & Launch Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these essential steps to properly establish and maintain your Amazon selling business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <span className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-3 rounded">
                    <p className="text-sm text-cyan-900 font-medium">
                      {step.action}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-10 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Launch?</h3>
            <p className="text-xl mb-8 text-emerald-50">
              With proper setup and planning, you'll be positioned for long-term success. Take the time to
              establish a solid foundation before scaling your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
                Start Your Business
              </button>
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-800 transition-colors border-2 border-emerald-500">
                Download Checklist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

     <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Resources & Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow sellers, access valuable tools, and continue your education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Users className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Social Communities</h3>
            </div>
            <ul className="space-y-3">
              {communities.map((community, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  {community}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <MessageSquare className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Forums & Discussion</h3>
            </div>
            <ul className="space-y-3">
              {forums.map((forum, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {forum}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Calendar className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Events & Conferences</h3>
            </div>
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  {event}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Wrench className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Essential Tools</h3>
            </div>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{tool.name}</div>
                    <div className="text-sm text-gray-600">{tool.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

              <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-cyan-500 rounded-full mb-6">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Ready to Start Your Amazon Journey?
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Join thousands of successful entrepreneurs building profitable businesses on Amazon.
            The opportunity is waiting for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
            >
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Take the First Step Today
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none">
                  <option>Just exploring</option>
                  <option>Ready to start</option>
                  <option>Already selling</option>
                  <option>Looking to scale</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-4 rounded-lg font-bold text-lg hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              No credit card required. Start your journey today.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <div className="text-5xl font-extrabold text-white mb-2">$1M+</div>
            <div className="text-cyan-200">
              Annual revenue achieved by top 15% of sellers
            </div>
          </div>
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
