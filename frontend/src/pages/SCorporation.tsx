import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { Check, ChevronDown, Shield, FileText, Zap, Clock, Users, Award, TrendingUp } from 'lucide-react';
function SCorporation() {
const [openFaq, setOpenFaq] = useState
<number | null>
(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState
<string>
('');
const toggleFaq = (index: number) => {
setOpenFaq(openFaq === index ? null : index);
};
return (
<div className="min-h-screen bg-white">
   <Helmet>
      {/* Primary SEO */}
      <title>
         S Corporation Formation in USA – Register an S Corp | The Future Perfect Global
      </title>
      <meta
         name="description"
         content="Form an S Corporation in the USA with The Future Perfect Global. Get expert support for S Corp registration, IRS election, EIN application, compliance, and ongoing advisory services."
         />
      {/* Canonical */}
      <link
         rel="canonical"
         href="https://us.thefutureperfectglobal.com/s-corporation"
         />
      {/* Keywords */}
      <meta
         name="keywords"
         content="S corporation formation USA, register S corp USA, S corp registration USA, start an S corporation in USA, S corp EIN application, IRS S corporation election, US S corp compliance, S corp tax benefits USA"
         />
      {/* Hreflang */}
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/s-corporation"
         hrefLang="en-us"
         />
      <link
         rel="alternate"
         href="https://us.thefutureperfectglobal.com/s-corporation"
         hrefLang="x-default"
         />
      <meta name="robots" content="index, follow" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
         property="og:title"
         content="S Corporation Formation in USA – Register Your S Corp"
         />
      <meta
         property="og:description"
         content="Set up your S Corporation in the USA with professional guidance. We assist with IRS S Corp election, EIN registration, compliance, and ongoing support."
         />
      <meta
         property="og:url"
         content="https://us.thefutureperfectglobal.com/s-corporation"
         />
      <meta
         property="og:site_name"
         content="The Future Perfect Global – USA S Corporation Services"
         />
      <meta
         property="og:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      <meta
         property="og:image:alt"
         content="S Corporation Formation Services in USA by The Future Perfect Global"
         />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FPGCompanySetup" />
      <meta
         name="twitter:title"
         content="S Corporation Formation in USA – S Corp Registration Services"
         />
      <meta
         name="twitter:description"
         content="Register your S Corporation in the USA with expert assistance. IRS election, EIN application, compliance, and advisory services available."
         />
      <meta
         name="twitter:image"
         content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
         />
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
         {`{
           "@context": "https://schema.org",
           "@type": "Service",
           "name": "S Corporation Formation in USA",
           "url": "https://us.thefutureperfectglobal.com/s-corporation",
           "provider": {
             "@type": "Organization",
             "name": "The Future Perfect Global",
             "url": "https://us.thefutureperfectglobal.com/",
             "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
           },
           "description": "Professional S Corporation formation services in the USA including registration, IRS S Corp election, EIN application, and compliance support.",
           "areaServed": [
             "United States",
             "California",
             "Texas",
             "Florida",
             "New York",
             "Nevada",
             "Delaware",
             "Wyoming"
           ],
           "serviceType": [
             "S Corporation Registration USA",
             "IRS S Corporation Election",
             "EIN Application",
             "US S Corp Compliance",
             "Tax & Business Advisory"
           ]
         }`}
      </script>
   </Helmet>
   <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-14">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <div className="text-sm text-cyan-400 mb-2 tracking-wide uppercase">
          Small Business Formation | LLC to S Corporation Election
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Start an S Corporation for $0 + State Filing Fees
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Form your S Corporation online with our step-by-step S Corp filing service. 
          We handle business incorporation, IRS Form 2553 S Corp election, 
          state registration, and ongoing compliance — fast, affordable, 
          and with no hidden fees.
        </p>

        <button
          onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
          className="px-8 py-4 bg-cyan-500 text-white rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/40"
        >
          Start My S-Corp
        </button>

        <p className="text-sm text-gray-400 mt-4">
          <strong className="text-white">Includes:</strong> Registered Agent Service, 
          Compliance Alerts & Ongoing Business Support
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-2xl"></div>
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Start an S Corporation online with expert business formation support"
          className="relative rounded-2xl shadow-2xl border border-gray-700"
        />
      </div>

    </div>
  </div>
</section>
   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
               Start an S Corporation Online – Fast, Affordable & IRS Compliant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Form your S Corp with expert guidance. We handle state incorporation, IRS Form 2553 filing, registered agent service, and ongoing compliance so you can maximize tax savings and grow your small business with confidence.
            </p>
            </div>
         <div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-8">
    
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
        <FileText className="w-6 h-6 text-cyan-500" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          IRS Form 2553 Preparation & S Corp Election Filing
        </h3>
        <p className="text-gray-600">
          Our S Corporation filing service prepares and submits your IRS Form 2553 accurately and on time. We ensure your S Corp tax election meets all IRS requirements for maximum tax savings and full compliance.
        </p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
        <Zap className="w-6 h-6 text-cyan-500" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Fast & Expedited S Corporation Filing
        </h3>
        <p className="text-gray-600">
          Get your S Corp status approved quickly with expedited state filing where available. We prioritize your business incorporation so you can start operating and saving on taxes faster.
        </p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
        <Shield className="w-6 h-6 text-cyan-500" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Ongoing Compliance Monitoring & Deadline Alerts
        </h3>
        <p className="text-gray-600">
          Stay compliant with federal and state S Corporation requirements. Our automated compliance alerts help you avoid penalties by tracking annual reports, tax filings, and important deadlines.
        </p>
      </div>
    </div>

  </div>

  <div className="bg-gray-900 rounded-2xl p-8 text-white">
    <div className="mb-6">
      <div className="text-cyan-500 text-sm font-semibold mb-2">
        WHAT'S INCLUDED
      </div>
      <h3 className="text-2xl font-bold mb-6">
        Complete S Corporation Formation Package
      </h3>
    </div>

    <ul className="space-y-4">
      <li className="flex items-center space-x-3">
        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
        <span>IRS Form 2553 preparation and S Corp election filing</span>
      </li>

      <li className="flex items-center space-x-3">
        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
        <span>Free Registered Agent service for 1 year</span>
      </li>

      <li className="flex items-center space-x-3">
        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
        <span>Lifetime business compliance alerts & reminders</span>
      </li>

      <li className="flex items-center space-x-3">
        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
        <span>Custom Operating Agreement template</span>
      </li>

      <li className="flex items-center space-x-3">
        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
        <span>Small business tax consultation guidance</span>
      </li>

      <li className="flex items-center space-x-3">
        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
        <span>Expedited state filing (where available)</span>
      </li>
    </ul>
  </div>
</div>
      </div>
   </section>
   <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
    Why Choose The Future Perfect Global for S Corporation Formation?
  </h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Compare our affordable S Corp filing service with traditional business incorporation methods. From IRS Form 2553 preparation to registered agent service and compliance support, discover why thousands of small business owners trust The Future Perfect Global to start and manage their S Corporation.
  </p>
</div>
         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
            S Corporation Formation Features
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-500" />
              <span>The Future Perfect Global</span>
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
            DIY S Corp Filing
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
            Business Attorneys
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 text-gray-900 font-medium">
            Fast & Accurate S Corporation Formation
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">—</span>
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 text-gray-900 font-medium">
            Affordable S Corp Filing Service
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Higher Cost</span>
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 text-gray-900 font-medium">
            IRS Form 2553 Preparation & Filing
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Manual Filing Required</span>
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 text-gray-900 font-medium">
            Ongoing Compliance Monitoring & Alerts
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Not Included</span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Varies</span>
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 text-gray-900 font-medium">
            Registered Agent Service Included
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Not Included</span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Additional Fees</span>
          </td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 text-gray-900 font-medium">
            Professional Business Incorporation Support
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Limited Guidance</span>
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 text-gray-900 font-medium">
            Ongoing S Corp Management & Tax Support
          </td>
          <td className="px-6 py-4 text-center">
            <Check className="w-6 h-6 text-green-500 mx-auto" />
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Not Included</span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-gray-400">Additional Billing</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="p-6 bg-cyan-50 border-t border-cyan-100 text-center">
    <button
      onClick={() => {
        setSelectedBusinessType('');
        setIsModalOpen(true);
      }}
      className="px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors"
    >
      Start Your S Corporation Today
    </button>
  </div>
</div>
      </div>
   </section>
   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
               How to Start an S Corporation Online in 3 Easy Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Our simple S Corporation formation process covers state incorporation, IRS Form 2553 filing, and compliance requirements — making it fast and easy to form your S Corp and maximize small business tax benefits.
            </p>
            </div>
         <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white shadow-xl h-full">
    
    <div className="flex items-center justify-between mb-6">
      <span className="text-6xl font-bold opacity-20">01</span>
      <FileText className="w-12 h-12" />
    </div>

    <h3 className="text-2xl font-bold mb-4">
      Choose the Best State to Form Your S Corporation
    </h3>

    <p className="text-cyan-50 mb-6">
      Select the state where you want to register your S Corporation. We help you compare state filing fees, tax advantages, and compliance requirements so you can choose the best state for your business incorporation.
    </p>

    <ul className="space-y-2 text-sm">
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 flex-shrink-0" />
        <span>Compare S Corp tax benefits by state</span>
      </li>
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 flex-shrink-0" />
        <span>Review state filing fees & annual costs</span>
      </li>
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 flex-shrink-0" />
        <span>Get expert S Corporation recommendations</span>
      </li>
    </ul>

  </div>
</div>
           <div className="relative">
  <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl h-full">
    
    <div className="flex items-center justify-between mb-6">
      <span className="text-6xl font-bold opacity-20">02</span>
      <Zap className="w-12 h-12 text-cyan-500" />
    </div>

    <h3 className="text-2xl font-bold mb-4">
      Select Your S Corporation Formation Package
    </h3>

    <p className="text-gray-300 mb-6">
      Choose the S Corp filing package that fits your business needs and budget. 
      Our affordable S Corporation formation packages include IRS Form 2553 filing, 
      state incorporation, registered agent service, and ongoing compliance support.
    </p>

    <ul className="space-y-2 text-sm">
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span>Transparent S Corp pricing with no hidden fees</span>
      </li>
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span>Complete IRS Form 2553 preparation & filing</span>
      </li>
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span>Flexible business incorporation options</span>
      </li>
    </ul>

  </div>
</div>
            <div className="relative">
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-xl h-full">
    
    <div className="flex items-center justify-between mb-6">
      <span className="text-6xl font-bold opacity-20">03</span>
      <Award className="w-12 h-12 text-cyan-500" />
    </div>

    <h3 className="text-2xl font-bold mb-4">
      Provide Your Business Details for S Corp Filing
    </h3>

    <p className="text-gray-300 mb-6">
      Complete our secure online questionnaire with your business information. 
      We use these details to prepare your S Corporation registration documents, 
      file IRS Form 2553, and submit all required state incorporation paperwork accurately and on time.
    </p>

    <ul className="space-y-2 text-sm">
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span>Simple online S Corp application form</span>
      </li>
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span>Save progress and complete anytime</span>
      </li>
      <li className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span>Expert review before IRS & state filing</span>
      </li>
    </ul>

  </div>
</div>
         </div>
      </div>
   </section>

   <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        What Happens After You Start Your S Corporation Formation?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Here’s a step-by-step overview of the S Corp formation process, including IRS Form 2553 filing, state approval timelines, and when you can expect your official S Corporation confirmation.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
          <Clock className="w-8 h-8 text-cyan-500" />
        </div>
        <div className="text-sm text-cyan-500 font-semibold mb-2">
          WITHIN 24 HOURS
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Application Review & Verification
        </h3>
        <p className="text-gray-600">
          Our S Corp filing experts carefully review your online application to ensure accuracy and compliance with IRS and state requirements. We’ll reach out promptly if additional details are needed.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
          <FileText className="w-8 h-8 text-cyan-500" />
        </div>
        <div className="text-sm text-cyan-500 font-semibold mb-2">
          1–2 BUSINESS DAYS
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          IRS Form 2553 & State Filing Preparation
        </h3>
        <p className="text-gray-600">
          We prepare and submit your IRS Form 2553 for S Corporation tax election, along with all required state incorporation documents to officially register your S Corp.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
          <TrendingUp className="w-8 h-8 text-cyan-500" />
        </div>
        <div className="text-sm text-cyan-500 font-semibold mb-2">
          2–6 WEEKS
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Receive Official S Corp Approval
        </h3>
        <p className="text-gray-600">
          Once processed by the IRS and state agencies, you’ll receive confirmation of your S Corporation status, including approval of your S Corp tax election and official formation documents.
        </p>
      </div>

    </div>

    <div className="text-center">
      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="px-8 py-4 bg-cyan-500 text-white rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
      >
        Start Your S Corp Formation Online
      </button>
      <p className="text-sm text-gray-500 mt-4">
        Processing times vary based on state filing speed and current IRS workload.
      </p>
    </div>

    <div className="mt-16 grid md:grid-cols-2 gap-8">
      
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-start space-x-4">
          <Shield className="w-8 h-8 text-cyan-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Free Registered Agent Service Included
            </h4>
            <p className="text-gray-600">
              Your registered agent service starts immediately after formation, helping you receive legal documents, service of process, and important state notices without interruption.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-start space-x-4">
          <Users className="w-8 h-8 text-cyan-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Ongoing S Corp Compliance Support
            </h4>
            <p className="text-gray-600">
              Get expert guidance on annual reports, state compliance requirements, payroll setup, and maintaining your S Corporation tax status long-term.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

   <section className="py-20 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
               TRUSTED BY ENTREPRENEURS NATIONWIDE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
               500+ Entrepreneurs Across 50 States Choose The Future Perfect Global
            </h2>
            <p className="text-xl text-cyan-50 max-w-2xl mx-auto mb-8">
               Join the fastest-growing business formation platform trusted by entrepreneurs in every state across America.
            </p>
         </div>
         <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
               <div className="text-5xl font-bold mb-2">500+</div>
               <div className="text-cyan-100">Businesses Formed</div>
            </div>
            <div>
               <div className="text-5xl font-bold mb-2">50</div>
               <div className="text-cyan-100">States Covered</div>
            </div>
            <div>
               <div className="text-5xl font-bold mb-2">4.0★</div>
               <div className="text-cyan-100">Average Rating</div>
            </div>
         </div>
         <button className="px-8 py-4 bg-white text-cyan-600 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl">
         Join Today
         </button>
      </div>
   </section>
   <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
               Common Questions About Starting an S Corporation
            </h2>
            <p className="text-xl text-gray-600">
               Everything you need to know about S-Corp formation.
            </p>
         </div>
         <div className="space-y-4">
            {[
            {
            question: "Can I Start an S-Corp for free?",
            answer: "While our service fee is $0, you will need to pay your state's filing fees and the IRS processing fee for Form 2553. These fees vary by state but typically range from $50-$500. We provide transparent pricing upfront so there are no surprises."
            },
            {
            question: "How Much Does Your Service Cost?",
            answer: "Our basic S-Corporation formation service is completely free - you only pay state filing fees. We also offer premium packages with additional services like expedited filing, EIN obtainment, operating agreements, and more. All pricing is transparent with no hidden fees."
            },
            {
            question: "What Are the Requirements for My S-Corp?",
            answer: "To qualify for S-Corp status, your business must be a domestic corporation, have only allowable shareholders (individuals, certain trusts, and estates), have no more than 100 shareholders, have only one class of stock, and not be an ineligible corporation (such as certain financial institutions)."
            },
            {
            question: "What is My State's Filing Fee for S-Corps?",
            answer: "State filing fees vary significantly by state, ranging from around $50 to $500 or more. We'll provide you with the exact filing fee for your state during the order process. Some states also have additional annual fees or franchise taxes to maintain your S-Corp status."
            }
            ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
               <button
                  onClick={() => toggleFaq(index)}
               className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
               >
               <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
               <ChevronDown
               className={`w-5 h-5 text-gray-500 transition-transform ${
               openFaq === index ? 'transform rotate-180' : ''
               }`}
               />
               </button>
               {openFaq === index && (
               <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
               </div>
               )}
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
export default SCorporation;