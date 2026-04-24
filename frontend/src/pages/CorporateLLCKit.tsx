import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { CheckCircle, Shield, FileText, Package, Clock, Truck, Award, Users, BookOpen, BadgeCheck } from 'lucide-react';
import GetStartedModal from '../components/GetStartedModal';

export default function CorporateLLCKit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  return (
    <div className="bg-white">
      <Helmet>
        <title>Corporate LLC Kit $99 | Business Records & Compliance Kit USA</title>
        <meta
          name="description"
          content="Professional Corporate LLC Kit for $99 with free shipping. Includes custom binder, stock certificates, company seal, meeting minutes templates, and compliance documents for LLCs and Corporations."
        />
        <link
          rel="canonical"
          href="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit"
        />
        <meta
          name="keywords"
          content="corporate LLC kit, LLC kit $99, business records kit, corporate compliance kit, company seal, stock certificates, LLC documents, corporate binder, business formation kit, LLC operating agreement, corporate records book"
        />
        <link
          rel="alternate"
          href="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit"
          hrefLang="x-default"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="Corporate LLC Kit $99 | Business Compliance Package USA"
        />
        <meta
          property="og:description"
          content="Complete Corporate LLC Kit with custom binder, certificates, seal, and compliance documents. Professional business organization for just $99."
        />
        <meta
          property="og:url"
          content="https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit"
        />
        <meta
          property="og:site_name"
          content="The Future Perfect Global – USA Business Formation"
        />
        <meta
          property="og:image"
          content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta
          name="twitter:title"
          content="Corporate LLC Kit $99 | Business Records Package"
        />
        <meta
          name="twitter:description"
          content="Professional Corporate LLC Kit for LLCs and Corporations. Custom binder, certificates, seal, and compliance documents."
        />
        <meta
          name="twitter:image"
          content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Corporate LLC Kit",
            "description": "Professional business records kit including custom binder, stock certificates, company seal, transfer ledger, and organizational tools for LLCs and Corporations.",
            "brand": {
              "@type": "Organization",
              "name": "The Future Perfect Global"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://us.thefutureperfectglobal.com/business-formation/corporate-llc-kit",
              "priceCurrency": "USD",
              "price": "99.00",
              "priceValidUntil": "2027-12-31",
              "availability": "https://schema.org/InStock",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "deliveryTime": {
                  "@type": "ShippingDeliveryTime",
                  "businessDays": {
                    "@type": "OpeningHoursSpecification",
                    "minValue": 3,
                    "maxValue": 4
                  }
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1247"
            }
          }`}
        </script>
      </Helmet>

      <section className="relative py-12 text-white">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80')",
    }}
  ></div>

  {/* Color Overlay with low opacity */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/70 via-cyan-600/70 to-red-600/70"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-2">
        <Package className="w-12 h-12" />
      </div>

      <h1 className="text-5xl font-black mb-2 leading-tight">
        Professional Corporate LLC Kit
      </h1>

      <p className="text-xl text-cyan-50 max-w-4xl mx-auto mb-8 leading-relaxed">
        Complete business documentation package with custom binder,
        certificates, seal, and compliance records
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={() => {
            setSelectedBusinessType("");
            setIsModalOpen(true);
          }}
          className="inline-flex items-center justify-center bg-white text-cyan-600 px-10 py-3 rounded-full font-bold text-xl shadow-2xl hover:bg-cyan-50 transition-all transform hover:scale-105"
        >
          Order Your Kit Now
        </button>

        <a
          href="#whats-included"
          className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-3 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
        >
          See What's Included
        </a>
      </div>

      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        <div className="flex items-center gap-2 text-cyan-50">
          <Truck className="w-6 h-6" />
          <span className="font-semibold">Free FedEx Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-cyan-50">
          <Clock className="w-6 h-6" />
          <span className="font-semibold">3-4 Day Delivery</span>
        </div>
        <div className="flex items-center gap-2 text-cyan-50">
          <BadgeCheck className="w-6 h-6" />
          <span className="font-semibold">100% Customized</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
      <h2 className="text-5xl font-black text-gray-900 mb-6">
        Maintain Accurate Business Records for Legal Compliance
      </h2>

      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Proper business record keeping is essential for every company. Maintaining accurate business records, legal documents, and financial documentation helps ensure regulatory compliance, protects your business, and supports long-term growth and credibility.
      </p>
    </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-6">
            <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="text-4xl">📄</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Business Ownership Requires Proper Documentation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Starting and managing a business involves a large amount of paperwork and 
              business documentation. From business formation documents to ownership 
              records, entrepreneurs must maintain accurate and organized business records 
              to meet legal and regulatory compliance requirements.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-4xl">⚖️</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Stay Organized with an LLC Corporate Kit
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Essential corporate records include formation paperwork, shareholder or 
              member details, meeting minutes, company resolutions, licenses, and other 
              important legal documents. A professional LLC corporate kit helps keep all 
              your business records secure, organized, and easily accessible—reducing the 
              risk of compliance issues, legal disputes, or financial penalties.
            </p>
          </div>
        </div>
      </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional business meeting with corporate documents and LLC compliance records"
                className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black mb-6 text-center">Key Benefits of Professional Record Keeping</h2>
          <p className="text-center text-gray-300 mb-16 text-xl max-w-3xl mx-auto">
            How a corporate LLC kit supports your business success and compliance
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Safeguard Liability Protection</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">Demonstrate to courts and creditors that your business operates as a separate legal entity. Organized records are critical evidence if your liability protection is ever challenged.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Meet State Requirements</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">Many states require LLCs and corporations to maintain records of ownership, meetings, and major business decisions. Stay compliant and avoid penalties with proper documentation.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Streamline Banking & Lending</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">Banks require corporate documentation to open business accounts and approve loans. Having everything organized in one kit makes the process faster and smoother.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Prevent Ownership Disputes</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">Clear documentation of stock issuances, transfers, and ownership percentages helps prevent costly disputes between partners, members, or shareholders.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Simplify Annual Compliance</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">Templates and organization tools make it easy to document annual meetings, record resolutions, and maintain the ongoing compliance requirements of your business entity.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                    <Package className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Professional Business Image</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">A polished corporate kit with custom embossing conveys professionalism and attention to detail when meeting with investors, lenders, or business partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-6 text-center">How to Order Your Corporate LLC Kit</h2>
          <p className="text-center text-gray-600 mb-16 text-xl max-w-3xl mx-auto">
            Three simple steps to receive your customized business documentation package
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500 to-red-500 text-white rounded-3xl text-4xl font-black mb-6 shadow-xl">
                1
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Select Business Details</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Choose your entity type (LLC, Corporation, S-Corp, C-Corp), state of formation, and provide your company information through our simple online form.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-3xl text-4xl font-black mb-6 shadow-xl">
                2
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Complete Secure Checkout</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Pay the one-time $99 fee through our secure payment system. No hidden charges, no recurring fees, no surprises. What you see is what you pay.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-3xl text-4xl font-black mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Receive Your Custom Kit</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Your personalized corporate kit ships next business day via complimentary FedEx Ground. Arrives at your door in 3-4 business days, ready to use.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center bg-cyan-600 text-white px-12 py-4 rounded-full font-bold text-2xl shadow-2xl hover:bg-cyan-700 transition-all transform hover:scale-105"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <section id="whats-included" className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">Complete Corporate Kit Package</h2>
          <p className="text-center text-gray-600 mb-6 text-xl max-w-3xl mx-auto">
            Everything your business needs to maintain professional records and stay compliant
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-red-500 rounded-2xl flex items-center justify-center mb-5">
                <BookOpen className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Custom Embossed Binder</h3>
              <p className="text-gray-700 leading-relaxed">Premium 3-ring binder personalized with your company name stamped in gold foil on the spine. Professional presentation for your office or important meetings.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-5">
                <FileText className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">20 Ownership Certificates</h3>
              <p className="text-gray-700 leading-relaxed">Pre-printed stock certificates for corporations or membership certificates for LLCs. Includes your company name and ready to issue to shareholders or members.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-5">
                <BadgeCheck className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Custom Metal Embosser</h3>
              <p className="text-gray-700 leading-relaxed">Professional company seal embosser customized with your exact company name, state of formation, and incorporation date. Essential for authenticating official documents.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-red-500 rounded-2xl flex items-center justify-center mb-5">
                <FileText className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Meeting Minutes Templates</h3>
              <p className="text-gray-700 leading-relaxed">Pre-formatted forms for recording annual shareholder meetings, board resolutions, and corporate decisions. Simplifies compliance documentation throughout your business lifecycle.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-5">
                <BookOpen className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Stock Transfer Ledger</h3>
              <p className="text-gray-700 leading-relaxed">Official record-keeping system for tracking stock issuances, purchases, transfers, and sales. Maintains accurate ownership history for audit and compliance purposes.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-5">
                <Package className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Organizational Sections</h3>
              <p className="text-gray-700 leading-relaxed">Color-coded tabbed dividers for Articles of Incorporation, Bylaws, Operating Agreement, EIN documentation, business licenses, contracts, and annual reports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Fast, Reliable Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your customized corporate kit ships next business day via FedEx Ground
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-5">
                <Package className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Custom Production</h3>
              <p className="text-gray-700">Your corporate kit is personalized with your company name, entity type, and formation details before shipping.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-5">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Free FedEx Shipping</h3>
              <p className="text-gray-700">Complimentary FedEx Ground shipping to all continental US addresses. Ships next business day after your order is processed.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-5">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">3-4 Day Arrival</h3>
              <p className="text-gray-700">Most customers receive their complete corporate kit within 3-4 business days from order placement to doorstep delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-6 text-center">
            Perfect For All Business Entity Types
          </h2>
          <p className="text-center text-gray-600 mb-14 text-xl max-w-3xl mx-auto">
            Our corporate kits are customized for your specific business structure
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-cyan-400 transition-all text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">LLC Kit</h3>
              <p className="text-gray-600">Complete kit for Limited Liability Companies with member certificates and operating agreement sections</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-cyan-400 transition-all text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Corporation Kit</h3>
              <p className="text-gray-600">Professional kit for C-Corporations with stock certificates, bylaws, and board meeting templates</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-cyan-400 transition-all text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">S-Corp Kit</h3>
              <p className="text-gray-600">Specialized kit for S-Corporations including shareholder documentation and election records</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-cyan-400 transition-all text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Non-Profit Kit</h3>
              <p className="text-gray-600">Tailored kit for 501(c)(3) organizations with board member documentation and nonprofit governance forms</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-gray-900 mb-6 text-center">
            Frequently Asked Questions About Corporate LLC Kits
          </h2>
          <p className="text-center text-gray-600 mb-14 text-xl max-w-3xl mx-auto">
            Everything you need to know about ordering, using, and maintaining your corporate documentation kit
          </p>

          <div className="space-y-4">
            {[
              {
                q: 'What is a Corporate LLC Kit and why do I need one?',
                a: 'A Corporate LLC Kit is a professional organizational system that contains all essential business documents, records, and supplies your company needs. It includes a custom binder, ownership certificates, company seal, transfer ledger, and templates for meeting minutes. While not legally required in all states, maintaining organized corporate records is critical for preserving liability protection, meeting banking requirements, and demonstrating compliance to authorities.'
              },
              {
                q: 'How much does a Corporate LLC Kit cost?',
                a: 'Our complete Corporate LLC Kit is available for a one-time fee of $99 with FREE FedEx Ground shipping included. There are no hidden fees, no recurring charges, and no additional costs. You receive everything listed in the package for one transparent price.'
              },
              {
                q: 'What exactly is included in the $99 kit?',
                a: 'Your kit includes: (1) Custom 3-ring binder with gold foil company name, (2) 20 personalized stock/membership certificates, (3) Metal embosser with company details, (4) Stock transfer ledger, (5) Meeting minutes templates, (6) Color-coded tabbed dividers for organizing formation documents, bylaws, licenses, and more, (7) Complimentary FedEx Ground shipping.'
              },
              {
                q: 'How long does delivery take?',
                a: 'Your corporate kit ships next business day after order processing via FedEx Ground. Most continental US addresses receive delivery within 3-4 business days. Rush shipping options may be available upon request for urgent needs.'
              },
              {
                q: 'Is the kit customized with my company information?',
                a: 'Yes, completely personalized. Your company name is embossed in gold foil on the binder spine. The metal embosser is engraved with your company name, state of formation, and incorporation date. Stock certificates are pre-printed with your company name.'
              },
              {
                q: 'Can I use this kit for both LLCs and Corporations?',
                a: 'Absolutely. We customize the kit based on your entity type. LLCs receive membership certificates and LLC-specific documents. Corporations receive stock certificates and corporate governance forms. S-Corps and C-Corps are both supported with appropriate documentation.'
              },
              {
                q: 'Do I need a corporate kit if I just formed my business?',
                a: 'Yes, especially for new businesses. Starting with organized records from day one prevents compliance issues later. Many banks require these documents to open business accounts, and having them ready accelerates your business setup process.'
              },
              {
                q: 'What is a company seal and is it required?',
                a: 'A company seal is a metal embosser that creates a raised impression on documents to authenticate them as official company records. While not legally required in most states anymore, many banks, title companies, and legal institutions still expect to see sealed documents. It adds legitimacy and professionalism to your business paperwork.'
              },
              {
                q: 'Will this kit help me open a business bank account?',
                a: 'Yes, significantly. Banks typically require your Articles of Incorporation/Organization, EIN letter, ownership documentation, and often a corporate resolution authorizing account opening. A corporate kit provides organized storage for all these documents and includes resolution templates you can use.'
              },
              {
                q: 'Can I order a kit for an existing business?',
                a: 'Definitely. Corporate kits are valuable for existing businesses that need to organize historical records, issue new certificates to members/shareholders, or establish better documentation practices. It\'s never too late to improve your corporate record-keeping.'
              },
              {
                q: 'What if my company information changes?',
                a: 'The 3-ring binder design allows you to easily add, remove, or update documents as your business evolves. You can add new certificates, meeting minutes, amendments, or other documents over time. The organizational structure accommodates growth and changes.'
              },
              {
                q: 'Does the kit include operating agreement or bylaws?',
                a: 'The kit includes organized sections and tabbed dividers where you can store your operating agreement (LLC) or bylaws (Corporation). If you need these documents drafted, we offer separate legal document preparation services that can be combined with your kit order.'
              },
              {
                q: 'How many stock certificates do I get?',
                a: 'Each kit includes 20 pre-printed stock certificates (for corporations) or membership certificates (for LLCs). This is sufficient for most small to medium-sized businesses. Additional certificates can be ordered separately if needed for larger ownership structures.'
              },
              {
                q: 'Is there a satisfaction guarantee?',
                a: 'Yes, we stand behind the quality of our corporate kits. If you\'re not satisfied with your kit for any reason, contact our customer support team and we\'ll work to make it right. Our goal is to provide professional-grade business documentation tools that serve your company for years.'
              },
              {
                q: 'Do I need this if I have a single-member LLC?',
                a: 'Yes, even single-member LLCs benefit from organized corporate records. Maintaining proper documentation helps preserve your liability protection by demonstrating that you treat your LLC as a separate entity. It\'s also essential when seeking business financing or adding members in the future.'
              },
              {
                q: 'What states do you serve?',
                a: 'We provide corporate LLC kits for businesses formed in all 50 states, including popular formation states like Delaware, Wyoming, Nevada, California, Texas, Florida, and New York. Your kit is customized with your specific state information.'
              },
              {
                q: 'Can I track my shipment?',
                a: 'Yes, you will receive a FedEx tracking number via email once your kit ships. You can monitor the delivery progress and know exactly when your corporate kit will arrive at your business or home address.'
              },
              {
                q: 'What if I need help setting up my kit?',
                a: 'Our customer support team is available Monday through Friday, 9 AM to 6 PM CST to answer questions about organizing your kit, using the templates, or maintaining your corporate records. We\'re here to help ensure you get maximum value from your investment.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-2xl shadow-md border-2 border-gray-200 open:border-cyan-500 open:bg-white transition-all"
              >
                <summary className="flex justify-between items-center cursor-pointer px-8 py-6 font-bold text-gray-900 text-lg hover:text-cyan-600 transition-colors">
                  {faq.q}
                  <span className="text-3xl text-cyan-600 group-open:rotate-45 transition-transform font-light">
                    +
                  </span>
                </summary>
                <div className="px-8 pb-6 text-gray-700 leading-relaxed text-lg">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">
            Ready to Organize Your Business Records?
          </h2>
          <p className="text-xl text-cyan-50 mb-10 leading-relaxed">
            Get your complete Corporate LLC Kit delivered in 3-4 business days with free shipping. Professional documentation starts here.
          </p>

          <button
            onClick={() => {
              setSelectedBusinessType('');
              setIsModalOpen(true);
            }}
            className="inline-flex items-center justify-center bg-white text-cyan-600 px-12 py-4 rounded-full font-bold text-2xl shadow-2xl hover:bg-cyan-50 transition-all transform hover:scale-105 mb-6"
          >
            Enquire Now
          </button>

          <div className="flex justify-center gap-8 flex-wrap text-cyan-50 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>3-4 Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Fully Customized</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Hidden Fees</span>
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
