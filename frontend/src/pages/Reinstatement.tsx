import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Shield, FileText, XCircle, Award } from 'lucide-react';
export default function Reinstatement() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      <Helmet>
  {/* Title */}
  <title>Company Reinstatement in USA | Reinstate LLC or Corporation</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Reinstate your dissolved or inactive LLC or corporation in the USA. The Future Perfect Global assists with company reinstatement, penalties, and compliance filings."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/reinstatement"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/reinstatement"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/reinstatement"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Company Reinstatement in USA | LLC & Corporation Revival"
  />
  <meta
    property="og:description"
    content="Professional company reinstatement services in the USA. Reinstate your LLC or corporation, clear penalties, and restore good standing."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/reinstatement"
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
    content="Company Reinstatement Services USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Company Reinstatement in USA | LLC & Corporation Revival"
  />
  <meta
    name="twitter:description"
    content="Restore your dissolved or inactive USA company with expert LLC and corporation reinstatement services."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Company Reinstatement Service USA",
      "serviceType": "LLC & Corporation Reinstatement",
      "url": "https://us.thefutureperfectglobal.com/business-management/reinstatement",
      "description": "Company reinstatement services in the USA for dissolved or inactive LLCs and corporations including compliance restoration and penalty clearance.",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global – USA Business Setup",
        "url": "https://us.thefutureperfectglobal.com/",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    }`}
  </script>
</Helmet>

      <section className="bg-slate-700 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
             <h1 className="text-5xl font-black text-white mb-6 leading-xl">
<span className='text-cyan-400'>Reinstate Your Business</span> and Restore Good Standing Fast
</h1>

<p className="text-xl text-white mb-8 leading-relaxed">
File an Order of Reinstatement online and quickly restore your LLC or corporation to active status. Our streamlined business reinstatement service helps you regain good standing with the state, avoid penalties, and resume operations faster and more affordably than forming a new company.
</p>
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                FILE YOUR REINSTATEMENT
              </button>
              <p className="mt-6 text-gray-500 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Trusted by 100,000+ businesses nationwide
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business reinstatement documents"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-bold text-gray-900">Fast Processing</p>
                    <p className="text-sm text-gray-600">1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why <span className='text-cyan-500'>Business Reinstatement</span> Is Better Than Starting a New LLC
            </h2>

            <p className="text-xl text-gray-600 max-w-6xl mx-auto">
            Reinstating a dissolved LLC or corporation allows you to restore good standing with the state, reactivate your business license, and resume operations quickly. Business reinstatement helps you keep your company name, existing tax ID, and business history—saving time, costs, and paperwork compared to forming a brand-new company.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Faster Recovery</h3>
              <p className="text-gray-700 leading-relaxed">
                In many states, reinstatement procedures can be completed in less time than forming a new company. Get back to business quickly without lengthy formation delays.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-all">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Brand Preservation</h3>
              <p className="text-gray-700 leading-relaxed">
                Keep your original company name and established branding. Protect the reputation and recognition you've built with customers and partners.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Historical Continuity</h3>
              <p className="text-gray-700 leading-relaxed">
                Maintain your historical background. No starting from scratch! Preserve your business credit history, contracts, and established relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
      Trusted by <span className="text-cyan-500">500+ Entrepreneurs & Business Owners</span> Worldwide
    </h2>

    <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">

      <span className="text-cyan-500 font-bold text-lg">
        Serving Businesses Since 2018
      </span>

      <span className="text-gray-400">|</span>

      <span className="font-semibold text-gray-800">
        Bootstrapped & Founder-Led
      </span>

      <span className="text-gray-400">|</span>

      <span className="font-semibold text-gray-800">
        Independently Owned Company
      </span>

    </div>

  </div>
</section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our <span className='text-cyan-500'>Reinstatement</span> Process
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to restore your business to good standing
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-300 to-cyan-600 hidden md:block"></div>

            <div className="space-y-8">

  <div className="flex gap-6 items-start">
    <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg relative z-10">
      1
    </div>
    <div className="bg-white rounded-2xl p-8 flex-1 shadow-lg">
      <h3 className="text-2xl font-black text-gray-900 mb-3">
        File LLC or Corporation Reinstatement Documents
      </h3>
      <p className="text-gray-700 leading-relaxed">
        We prepare and file all required business reinstatement documents with your state’s Secretary of State. Our team ensures your LLC or corporation reinstatement forms, affidavits, and filings are completed accurately so your dissolved or inactive business can be restored to active status.
      </p>
    </div>
  </div>

  <div className="flex gap-6 items-start">
    <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg relative z-10">
      2
    </div>
    <div className="bg-white rounded-2xl p-8 flex-1 shadow-lg">
      <h3 className="text-2xl font-black text-gray-900 mb-3">
        Resolve Outstanding State Fees and Penalties
      </h3>
      <p className="text-gray-700 leading-relaxed">
        To reinstate a dissolved LLC or corporation, any unpaid annual report fees, state taxes, and penalties must be cleared. We help identify outstanding obligations and guide you through the payment process to restore your business to good standing.
      </p>
    </div>
  </div>

  <div className="flex gap-6 items-start">
    <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg relative z-10">
      3
    </div>
    <div className="bg-white rounded-2xl p-8 flex-1 shadow-lg">
      <h3 className="text-2xl font-black text-gray-900 mb-3">
        Get Official Business Reinstatement Approval
      </h3>
      <p className="text-gray-700 leading-relaxed">
        After approval from the Secretary of State, your business will be officially reinstated and returned to active status. Once your company regains good standing, you can legally resume operations and continue business activities with full compliance.
      </p>
    </div>
  </div>

</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 text-center">
            Should I <span className='text-cyan-500'>Reinstate</span> or Start New?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Compare your options to make the best decision for your business
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Reinstatement Benefits</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Maintains legal entity protections</span> - Your LLC or corporation status is restored with full liability protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Preserves customer relationships</span> - Continue business under the same name your clients know and trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Retains brand loyalty</span> - Keep your market presence, domain names, and business reputation intact</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Significantly faster timeline</span> - Can be completed in days versus weeks for new formation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Lower overall costs</span> - Avoid formation fees and setup expenses required for new entities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Preserves business history</span> - Maintain your original formation date and corporate track record</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Starting New Drawbacks</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Loss of historical records</span> - Your business history, formation date, and track record are gone forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Extended timeline</span> - New incorporation can take days to weeks depending on state processing times</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Higher filing fees</span> - Formation costs typically range from $200-$500+ depending on your state</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Risk of name loss</span> - Your original business name may be taken by another company</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">New EIN required</span> - Must obtain new tax ID and rebuild business credit from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Contract renegotiation</span> - All existing contracts and agreements need to be rewritten</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold">Liability gap</span> - Period without legal protection during formation process</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-black mb-3">The Clear Choice for Most Businesses</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Unless your business name is no longer available or you need a completely fresh start, reinstatement is typically the faster, more cost-effective option that preserves your brand and business continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Restore Your Business?
          </h2>
          <p className="text-2xl text-cyan-100 mb-8 leading-relaxed">
            Don't let administrative dissolution keep you from running your business. Our experts will handle all the paperwork and get your business back on track quickly and efficiently.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-12 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105 mb-6">
            FILE YOUR REINSTATEMENT TODAY
          </button>
          <p className="text-cyan-100 flex items-center justify-center gap-2">
            <span className="font-semibold">Questions?</span> Call us at +858-952-4549
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
