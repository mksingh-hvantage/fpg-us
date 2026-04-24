import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import {
  TrendingUp,
  Star,
  DollarSign,
  UserPlus,
  Share2,
  BarChart3,
  CheckCircle,
  ChevronDown
} from 'lucide-react';

export default function Affiliates() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <div className="min-h-screen bg-white">
      <Helmet>
  {/* Title */}
  <title>Affiliate Program – USA Business Setup & LLC Formation | The Future Perfect Global</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Join The Future Perfect Global affiliate program and earn commissions by referring clients for USA business setup, LLC formation, incorporation, and compliance services."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/affiliates"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/affiliates"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/affiliates"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Affiliate Program – Earn with USA Business Setup Services"
  />
  <meta
    property="og:description"
    content="Partner with The Future Perfect Global and earn commissions by promoting USA business setup, LLC registration, and compliance services."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/affiliates"
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
    content="The Future Perfect Global Affiliate Program"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Affiliate Program – USA Business Setup & LLC Formation"
  />
  <meta
    name="twitter:description"
    content="Earn commissions by joining The Future Perfect Global affiliate program for USA company formation and compliance services."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Affiliate Program – The Future Perfect Global",
      "url": "https://us.thefutureperfectglobal.com/affiliates",
      "description": "Affiliate program page for The Future Perfect Global offering commission-based partnerships for USA business setup, LLC formation, and compliance services.",
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

      {/* Hero Section */}
<section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent)]"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>

      <span className="inline-block text-cyan-400 font-medium mb-4">
        💼 Affiliate Partnership Program
      </span>

      <h1 className="text-5xl font-extrabold leading-xl">
        Generate Passive Income by Supporting Business Growth
        <span className="text-cyan-400"> Launch & Grow</span>
      </h1>

      <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
        Join The Future Perfect Global’s affiliate program and earn commissions by recommending a trusted 
        <strong> business formation and company setup service</strong>. Perfect for marketers, agencies, and entrepreneurs.
      </p>

           {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">

        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg hover:shadow-cyan-500/30"
        >
          Join Affiliate Program
        </button>

        <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition">
          Talk to Our Team
        </button>

      </div>

      {/* Trust Line */}
      <p className="mt-6 text-xs text-slate-400">
        Trusted by entrepreneurs, agencies & global partners
      </p>

    </div>

    {/* Right Image */}
    <div className="relative">

      <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <img
        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Entrepreneurs working together"
        className="relative rounded-3xl shadow-2xl border border-white/10"
      />

    </div>

  </div>
</section>

      {/* Key Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Commissions</h3>
              <p className="text-gray-700 leading-relaxed">
                Earnings aligned with industry standards through AWIN platform
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100K+ Verified Reviews</h3>
              <p className="text-gray-700 leading-relaxed">
                4.7-star average across Trustpilot and ShopperApproved
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry-Leading Value</h3>
              <p className="text-gray-700 leading-relaxed">
                $0 LLC formation + free registered agent for first year (+ state fees)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in four simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <div className="bg-cyan-100 text-cyan-600 font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                STEP 1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sign Up</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick enrollment on AWIN
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Share2 className="w-10 h-10 text-white" />
              </div>
              <div className="bg-cyan-100 text-cyan-600 font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                STEP 2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Share Your Link</h3>
              <p className="text-gray-600 leading-relaxed">
                Distribute custom affiliate URL
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="bg-cyan-100 text-cyan-600 font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                STEP 3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Earn Commissions</h3>
              <p className="text-gray-600 leading-relaxed">
                Revenue from customer signups
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="bg-cyan-100 text-cyan-600 font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                STEP 4
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Track Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Dashboard monitoring via AWIN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Entrepreneurs Trust The Future Perfect Global */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8">
                Why Entrepreneurs Trust Us
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Simple Hassle-Free Process
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Streamlined entity formation that takes the complexity out of starting a business
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Comprehensive Services
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Beyond LLCs: S-Corps, C-Corps, nonprofits, EINs, virtual addresses, and trademarks
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Customer-Focused Operations
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Privately owned company dedicated to exceptional customer service
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Customer support representative"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Can I use Future Perfect Global's logo and branding materials?",
                answer: "Logo and branding usage policies require written approval from our marketing team. Please contact us to request permission before using any The Future Perfect Global branding materials in your promotional content."
              },
              {
                question: "Are there restrictions on PPC advertising?",
                answer: "PPC bidding on trademarked terms is prohibited across Google Ads, Bing, and other platforms. This includes direct brand terms and trademark-plus (TM+) keywords to ensure fair competition among affiliates."
              },
              {
                question: "Do I need approval for marketing materials?",
                answer: "Yes, all marketing materials must receive pre-publication approval from our affiliate team. This ensures brand consistency and compliance with our marketing guidelines."
              },
              {
                question: "Can I use Google Shopping or Product Listing Ads?",
                answer: "Google Shopping and Product Listing Ads are restricted without express permission. Please reach out to our affiliate management team if you're interested in using these channels."
              },
              {
                question: "What happens if I violate affiliate policies?",
                answer: "Policy violations result in commission forfeiture and potential removal from the program. We take our affiliate guidelines seriously to maintain program integrity for all partners."
              },
              {
                question: "Are there specific terms I cannot bid on?",
                answer: "Bidding on The Future Perfect Global's trademarked terms or TM+ keywords in paid search is prohibited. Please review our complete Terms of Service for detailed advertising disclosure and package policies."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-cyan-600 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
