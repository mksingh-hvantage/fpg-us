import {
  FileCheck,
  Shield,
  Wallet,
  TrendingUp,
  Globe,
  MessageSquare,
  Palette,
  Zap,
  CheckCircle2,
  Building2,
  CreditCard,
  Calculator,
  DollarSign,
  Mail,
  ShoppingCart,
  Users,
  BarChart3,
  Phone,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react'; 
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function AnnualReport() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <Helmet>
  {/* Title */}
  <title>After Forming an LLC in USA | Next Steps & Compliance Guide</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Learn what to do after forming an LLC in the USA. Get guidance on EIN, operating agreement, bank account, compliance, licenses, and ongoing requirements."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/after-forming-llc"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/after-forming-llc"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/after-forming-llc"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="After Forming an LLC in USA | Next Steps & Compliance"
  />
  <meta
    property="og:description"
    content="Complete guide on what to do after forming an LLC in the USA, including EIN, bank account setup, licenses, and compliance obligations."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/after-forming-llc"
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
    content="After Forming an LLC in USA Guide"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="After Forming an LLC in USA | Next Steps Guide"
  />
  <meta
    name="twitter:description"
    content="Understand the next steps after forming an LLC in the USA including EIN, compliance, and operational requirements."
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
      "headline": "After Forming an LLC in USA: Next Steps & Compliance Guide",
      "url": "https://us.thefutureperfectglobal.com/after-forming-llc",
      "description": "A complete guide explaining the steps to take after forming an LLC in the USA including EIN registration, operating agreement, banking, licenses, and ongoing compliance.",
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

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-800 py-14">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center text-white">
      
      {/* Badge */}
      <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 font-semibold">
        Ongoing LLC Compliance Made Easy
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
        Stay Compliant After
        <br className="hidden sm:block" />
        Forming Your LLC
      </h1>

      {/* Subtext */}
      <p className="text-2xl mb-8 text-blue-50 leading-relaxed">
        From annual reports to registered agent services, we help keep your LLC
        active, compliant, and in good standing—year after year.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="inline-block bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105"
        >
          Manage My LLC Compliance
        </button>
      </div>

    </div>
  </div>
</section>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          <section id="filing-requirements" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-cyan-100 p-3 rounded-xl">
                <FileCheck className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">1. Understand Your State Filing Requirements</h2>
                <p className="text-lg text-gray-600">Stay compliant and avoid costly penalties</p>
              </div>
            </div>

            <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                Every state has unique filing obligations for LLCs. These requirements vary significantly, including annual
                reports, biennial statements, and franchise tax filings. Understanding your state's specific mandates is crucial
                for maintaining good standing.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Critical Warning</h4>
                    <p className="text-amber-800">
                      Missing filing deadlines can result in serious consequences, including company dissolution,
                      revocation of your business status, or substantial late fees that compound over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cyan-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                    Compliance Solutions
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>Lifetime company alert services with email reminders</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>Automated deadline tracking for all filing requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>State-specific compliance calendars</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-600" />
                    DIY Research Option
                  </h4>
                  <p className="text-gray-700">
                    You can independently research your state's requirements through the Secretary of State website.
                    Create a calendar system to track all annual deadlines and filing obligations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="trademark" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">2. Secure Your Business Name with Trademark Protection</h2>
                <p className="text-lg text-gray-600">Protect your brand identity nationwide</p>
              </div>
            </div>

            <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                While forming your LLC registers your business name at the state level, it doesn't provide federal protection.
                A federal trademark gives you exclusive nationwide rights to your business name, logo, or slogan, preventing
                others from using similar branding that could confuse customers.
              </p>

              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Professional Trademark Services Include:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Attorney consultation and legal guidance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprehensive trademark availability search</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">USPTO registration and filing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ongoing correspondence handling until approval</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Why Federal Trademark Matters</h4>
                <p className="text-gray-700">
                  Without federal trademark protection, another business in a different state could legally use your
                  business name, creating confusion and potentially damaging your brand reputation. Federal registration
                  provides legal presumption of ownership and the right to use the mark nationwide.
                </p>
              </div>
            </div>
          </section>

          <section id="finances" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-cyan-100 p-3 rounded-xl">
                <Wallet className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">3. Establish Your Financial Foundation</h2>
                <p className="text-lg text-gray-600">Set up banking, accounting, and payment systems</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Banking Setup</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Separating your business and personal finances is non-negotiable. This separation maintains your
                  liability protection, simplifies tax preparation, and presents a professional image to clients and partners.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-xl p-5 hover:border-cyan-300 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">U.S. Bank Silver Business</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 150 free monthly transactions</li>
                      <li>• 3,000+ branch locations nationwide</li>
                      <li>• Excellent for high-volume businesses</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5 hover:border-cyan-300 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">Capital One Spark Business</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Unlimited transactions</li>
                      <li>• Robust online banking platform</li>
                      <li>• Ideal for digital-first businesses</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5 hover:border-cyan-300 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">Wells Fargo Business Choice</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 200 free monthly transactions</li>
                      <li>• Extensive branch network</li>
                      <li>• Strong business support services</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5 hover:border-cyan-300 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">Bank of Internet Federal Bank</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 200 free monthly transactions</li>
                      <li>• Unlimited ATM fee reimbursement</li>
                      <li>• Perfect for online businesses</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-cyan-100/50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-cyan-600" />
                    Business Credit Cards
                  </h4>
                  <p className="text-gray-700">
                    Leverage business credit cards for expense tracking, cash-back rewards, and building business credit.
                    Tools like Expensify can integrate with your cards to automate expense management and receipt tracking.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Accounting Software Solutions</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Professional accounting software transforms financial management from a burden into an asset,
                  providing real-time insights into your business health.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="border-2 border-cyan-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-2">QuickBooks</h4>
                    <div className="text-2xl font-bold text-cyan-600 mb-2">$10/mo</div>
                    <p className="text-sm text-gray-600 mb-3">Industry standard with comprehensive features</p>
                    <p className="text-xs text-gray-500">Steeper learning curve but most powerful</p>
                  </div>

                  <div className="border-2 border-cyan-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-2">Xero</h4>
                    <div className="text-2xl font-bold text-cyan-600 mb-2">$20/mo</div>
                    <p className="text-sm text-gray-600 mb-3">User-friendly interface with excellent mobile app</p>
                    <p className="text-xs text-gray-500">Great QuickBooks alternative</p>
                  </div>

                  <div className="border-2 border-cyan-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-2">FreshBooks</h4>
                    <div className="text-2xl font-bold text-cyan-600 mb-2">$15/mo</div>
                    <p className="text-sm text-gray-600 mb-3">Time tracking and expense management</p>
                    <p className="text-xs text-gray-500">Perfect for service businesses</p>
                  </div>

                  <div className="border-2 border-cyan-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-2">Bench</h4>
                    <div className="text-2xl font-bold text-cyan-600 mb-2">$125/mo</div>
                    <p className="text-sm text-gray-600 mb-3">Includes dedicated bookkeeper support</p>
                    <p className="text-xs text-gray-500">Hands-off solution</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Payment Processing</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Accept credit card payments seamlessly through integrated platforms that match your business model.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">For Service Businesses</h4>
                    <p className="text-gray-700 text-sm">QuickBooks or FreshBooks integrated payment processing</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">For Retail & E-commerce</h4>
                    <p className="text-gray-700 text-sm">Shopify or Square for point-of-sale and online transactions</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Funding Your Business</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Explore diverse funding options to fuel your business growth and operational needs.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Investor Capital</h4>
                    <p className="text-sm text-gray-600">Angel investors or venture capital for high-growth potential</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Loans</h4>
                    <p className="text-sm text-gray-600">Quick access using personal credit for initial funding</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Credit</h4>
                    <p className="text-sm text-gray-600">Lines of credit from banks and financial institutions</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">SBA Financing</h4>
                    <p className="text-sm text-gray-600">Government-backed loans with favorable terms</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Bootstrapping</h4>
                    <p className="text-sm text-gray-600">Self-funding with existing capital and revenue</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Crowdfunding</h4>
                    <p className="text-sm text-gray-600">Community-backed funding for innovative projects</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="operations" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">4. Build Your Business Operations & Marketing</h2>
                <p className="text-lg text-gray-600">Establish your digital presence and brand identity</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Website Development</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Your website is your digital storefront and often the first impression potential customers have of your business.
                  A professional online presence is essential in today's market.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <span className="text-emerald-600 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Domain Registration</h4>
                      <p className="text-gray-600 text-sm">Secure your business domain name before someone else does. Choose a memorable,
                      brandable name that reflects your business identity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <span className="text-emerald-600 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Web Hosting Selection</h4>
                      <p className="text-gray-600 text-sm">Wix offers user-friendly hosting with integrated design tools,
                      perfect for businesses that need to launch quickly without technical expertise.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <span className="text-emerald-600 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Website Design</h4>
                      <p className="text-gray-600 text-sm">Choose between SquareSpace for stunning templates or WordPress
                      for maximum customization and scalability as your business grows.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Professional Communication</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Virtual phone systems like Grasshopper provide professional call handling, voicemail, and multiple extensions
                  without requiring physical phone hardware. Present a polished, established image from day one.
                </p>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Custom greetings and call routing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Multiple extensions for team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Voicemail-to-email transcription</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Mobile app for on-the-go management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Brand Identity Development</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Your brand identity extends beyond just a logo—it's the complete visual representation of your business values and personality.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Logo Design</h4>
                    <p className="text-gray-700 mb-4">
                      Create professional logos using Wix's design tools or browse pre-made templates from CreativeMarket
                      that you can customize to match your brand vision.
                    </p>
                    <div className="text-sm text-gray-600">
                      Investment: $50 - $500 depending on complexity
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Cards</h4>
                    <p className="text-gray-700 mb-4">
                      Vistaprint offers affordable, high-quality business cards with thousands of templates. Despite living
                      in a digital age, physical cards remain powerful networking tools.
                    </p>
                    <div className="text-sm text-gray-600">
                      Investment: $20 - $100 for professional cards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="tools" className="scroll-mt-20">
  <div className="flex items-start gap-4 mb-8">
    <div className="bg-cyan-100 p-3 rounded-xl">
      <Zap className="w-8 h-8 text-cyan-600" />
    </div>
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
        5. Essential Business Software & Tools
      </h2>
      <p className="text-lg text-gray-600">
        Equip your business with the right technology stack
      </p>
    </div>
  </div>

  <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
    <p className="text-gray-700 leading-relaxed mb-8">
      The right software tools can dramatically increase efficiency, improve collaboration,
      and scale your operations. Here are the industry-leading solutions across critical business functions.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Project Management */}
      <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-100 p-2 rounded-lg">
            <BarChart3 className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Project Management</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://asana.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Asana – Visual task management
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://basecamp.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Basecamp – All-in-one collaboration
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://trello.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Trello – Kanban-style workflows
            </a>
          </li>
        </ul>
      </div>

      {/* Accounting & Finance */}
      <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-100 p-2 rounded-lg">
            <Calculator className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Accounting & Finance</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://quickbooks.intuit.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              QuickBooks – Industry standard
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.xero.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Xero – User-friendly platform
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.freshbooks.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              FreshBooks – Service businesses
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://bench.co" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Bench – With bookkeeper
            </a>
          </li>
        </ul>
      </div>

      {/* Communication */}
      <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-100 p-2 rounded-lg">
            <MessageSquare className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Communication</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Slack – Team messaging
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://grasshopper.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Grasshopper – Business phone
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Skype – Video conferencing
            </a>
          </li>
        </ul>
      </div>

      {/* CRM */}
      <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-100 p-2 rounded-lg">
            <Users className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">CRM Solutions</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Salesforce – Enterprise-grade
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.zoho.com/crm/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Zoho CRM – Affordable option
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.insightly.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Insightly – Small business focus
            </a>
          </li>
        </ul>
      </div>

      {/* Email Marketing */}
      <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-100 p-2 rounded-lg">
            <Mail className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Email Marketing</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://mailchimp.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Mailchimp – Easy automation
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.campaignmonitor.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Campaign Monitor – Beautiful templates
            </a>
          </li>
        </ul>
      </div>

      {/* E-commerce */}
      <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-100 p-2 rounded-lg">
            <ShoppingCart className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">E-commerce</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Shopify – Full online store
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://squareup.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Square – POS integration
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <a href="https://www.wix.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Wix – Simple online selling
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-8 bg-cyan-50 rounded-xl p-6">
      <h4 className="font-semibold text-gray-900 mb-3">Selecting the Right Tools</h4>
      <p className="text-gray-700">
        Start with the essentials and add tools as your business grows. Most platforms offer free trials—test
        several options before committing. Consider integration capabilities to ensure your tools work seamlessly together.
      </p>
    </div>
  </div>
</section>

          <section id="virtual-address" className="scroll-mt-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Building2 className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">6. Virtual Address Services</h2>
                <p className="text-lg text-gray-600">Professional business address without physical office space</p>
              </div>
            </div>

            <div className="bg-cyan-100/50 rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                Virtual mailbox solutions provide your business with a professional physical address for receiving mail
                and packages, enabling truly remote operations while maintaining a credible business presence.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Benefits of Virtual Addresses</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Protect your personal home address privacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Establish presence in prestigious business locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Access mail remotely from anywhere in the world</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Professional image for client communications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Mail scanning and digital delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Package receiving and forwarding services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Check depositing assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Compliance with state registration requirements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r-lg">
                <p className="text-cyan-900">
                  <span className="font-semibold">Perfect for:</span> Remote teams, digital nomads, home-based businesses,
                  and entrepreneurs who want to separate business and personal addresses without leasing physical office space.
                </p>
              </div>
            </div>
          </section>

        </div>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold mb-6">Ready to Build Your Business Foundation?</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                These six essential steps will set your LLC up for long-term success. Take action on each area
                systematically, and you'll build a strong foundation for sustainable growth and compliance.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
                <p className="text-sm text-gray-300">
                  Remember: Building a successful business is a marathon, not a sprint. Focus on steady progress
                  and continuous improvement as you implement these critical post-formation steps.
                </p>
              </div>
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
