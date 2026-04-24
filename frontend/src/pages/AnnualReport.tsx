import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Shield, Clock, Users, FileText, AlertTriangle, XCircle, Building2 } from 'lucide-react';
import GetStartedModal from '../components/GetStartedModal';
import { US_STATES as states } from '../data/usStates';

const entityTypes = [
  "LLC",
  "Corporation",
  "S-Corporation",
  "C-Corporation",
  "Nonprofit Corporation",
  "Professional Corporation",
  "Professional LLC",
  "Limited Partnership",
  "Limited Liability Partnership",
  "General Partnership",
  "Benefit Corporation",
  "Series LLC"
];

const reportDatabase: any = {
  Georgia: {
    LLC: { frequency: "Annually", dueDate: "April 1", stateFee: 60, serviceFee: 99 },
    Corporation: { frequency: "Annually", dueDate: "April 1", stateFee: 50, serviceFee: 99 }
  },
  Texas: {
    LLC: { frequency: "Annually", dueDate: "May 15", stateFee: 0, serviceFee: 99 },
    Corporation: { frequency: "Annually", dueDate: "May 15", stateFee: 0, serviceFee: 99 }
  },
  California: {
    LLC: { frequency: "Every Year", dueDate: "Anniversary Month", stateFee: 20, serviceFee: 99 },
    Corporation: { frequency: "Every Year", dueDate: "Anniversary Month", stateFee: 25, serviceFee: 99 }
  }
};

export default function AnnualReport() {
  const [state, setState] = useState("");
  const [entity, setEntity] = useState("");

  const report = reportDatabase[state]?.[entity];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return ( 
    <div className="flex flex-col">
      <Helmet>
  {/* Title */}
  <title>Annual Report Filing USA – LLC & Company Compliance Services | The Future Perfect Global</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Annual report filing services in the USA for LLCs and corporations. Stay compliant with state requirements, deadlines, and penalties with The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/annual-report"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/annual-report"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/annual-report"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Annual Report Filing USA – LLC & Company Compliance"
  />
  <meta
    property="og:description"
    content="Ensure timely annual report filing for your USA LLC or corporation. We handle compliance, deadlines, and state filings professionally."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/annual-report"
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
    content="Annual Report Filing Services USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Annual Report Filing USA – LLC & Corporate Compliance"
  />
  <meta
    name="twitter:description"
    content="Professional annual report filing services for USA LLCs and corporations. Avoid penalties and stay compliant."
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
      "name": "Annual Report Filing USA",
      "url": "https://us.thefutureperfectglobal.com/annual-report",
      "description": "Annual report filing and compliance services for USA LLCs and corporations.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global – USA Business Setup",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        }
      },
      "mainEntity": {
        "@type": "Service",
        "name": "Annual Report Filing USA",
        "serviceType": "LLC & Corporate Annual Compliance",
        "areaServed": "United States",
        "provider": {
          "@type": "Organization",
          "name": "The Future Perfect Global"
        }
      }
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 via-cyan-600/20 to-teal-500/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 font-semibold">
              State-Compliant Filing
            </div>
            <h1 className="text-5xl font-black mb-4 leading-xl drop-shadow-2xl">
              Annual Report Filing Service for LLCs & Corporations
            </h1>
            <p className="text-2xl mb-4 text-blue-50 leading-relaxed">
              File your business annual report quickly and securely online. Our streamlined process helps LLCs and corporations stay compliant with state requirements, avoid late filing fees, and maintain active business status — all in just a few minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-blue-600 px-10 py-3 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105">
                File Annual Report Now
              </button>
              <Link to="/check-deadline" className="inline-block border-4 border-white text-white px-10 py-3 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                Check Your Due Date
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                <span>All 50 States</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span>100% Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6" />
                <span>File in Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-6">Why Choose Us for Your Annual Report Filing?</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Over 10,000+ annual reports filed. We make compliance simple and stress-free.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
  {
    icon: Shield,
    title: 'Fully Compliant With State Requirements',
    desc: 'Submit your annual report quickly with a filing process designed to meet regulations in all 50 states.',
    stat: '460k+ Reports Successfully Submitted'
  },
  {
    icon: FileText,
    title: 'Simple Upfront Pricing',
    desc: 'Pay one clear fee with no hidden costs and absolutely no recurring plans.',
    stat: 'Clear & Honest Pricing'
  },
  {
    icon: Users,
    title: 'Dedicated Customer Assistance',
    desc: 'Our support team is available through phone, chat, and email whenever you need guidance.',
    stat: 'Rated 4.7★ on Trustpilot'
  },
  {
    icon: Clock,
    title: 'Smart Filing Notifications',
    desc: 'Receive timely alerts so your business never misses an important reporting deadline.',
    stat: 'Stress-Free Compliance'
  }
].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{item.desc}</p>
                <div className="text-sm font-semibold text-blue-600">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-blue-100/50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center mb-14">
          Choose your Entity Type and State
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-14">

          {/* Entity Card */}
          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

            <h3 className="text-blue-500 text-xl font-bold mb-4">
              Entity Type
            </h3>

            <select
              value={entity}
              onChange={(e) => setEntity(e.target.value)}
              className="w-full rounded-full border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Entity Type</option>

              {entityTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}

            </select>

          </div>

          {/* State Card */}
          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

            <h3 className="text-blue-500 text-xl font-bold mb-4">
              Choose State
            </h3>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-full border-2 border-blue-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >

              <option value="">Select State</option>

              {states.map((s) => (
                <option key={s}>{s}</option>
              ))}

            </select>

          </div>

        </div>

        {(state && entity) && (

          <div className="bg-white rounded-2xl border p-8 shadow-sm">

            <h2 className="text-2xl font-semibold mb-6">
              Annual Report
            </h2>

            {report ? (

              <div className="grid md:grid-cols-2 gap-6">

                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">Frequency</span>
                  <span>{report.frequency}</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">Due Date</span>
                  <span>{report.dueDate}</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">State Fee</span>
                  <span>${report.stateFee}</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">Service Fee</span>
                  <span>${report.serviceFee}</span>
                </div>

              </div>

            ) : (

              <p className="text-gray-500">
                No filing information available for this selection.
              </p>

            )}

            <div className="mt-8 text-center">

              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg">
                Start Filing Your Annual Report
              </button>

            </div>

          </div>

        )}

      </div>
    </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-6">What is an Annual Report?</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
            An annual report is a state-mandated document that businesses must file to confirm and update key company information. Think of it as a yearly check-in with your state to maintain your business registration.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: 'Company Information',
                desc: 'Updates your business name, address, registered agent, and principal office location'
              },
              {
                icon: Users,
                title: 'Management Details',
                desc: 'Lists current directors, officers, members, or managers of your company'
              },
              {
                icon: FileText,
                title: 'Business Activity',
                desc: 'Confirms your business purpose and may include share information for corporations'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <item.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-6">Are Annual Reports Mandatory?</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Filing requirements vary by state and business type. Here's what you need to know.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                Required to File
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Single-member and multi-member LLCs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>S Corporations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>C Corporations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Nonprofit organizations</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-gray-600" />
                Generally Exempt
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sole proprietorships and partnerships (no formal entity required)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Businesses in certain states like New Mexico and Ohio (for LLCs)</span>
                </div>
                <p className="text-sm italic mt-4 pl-4 border-l-4 border-gray-300">
                  Note: Some states require biennial (every two years) filing instead of annual filing. Always check your specific state requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">What Happens If You Don't File?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Failing to file your annual report can have serious consequences for your business
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-yellow-700">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Late Fees and Penalties</h3>
                  <p className="text-gray-700 leading-relaxed">
                    States impose additional penalties on top of regular filing fees. These fees increase the longer you wait, making it more expensive to get back into compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-500">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-cyan-700">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Loss of Good Standing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your business falls out of good standing with the state, which complicates operations, makes it difficult to obtain financing, and can impact your ability to enter contracts or conduct business legally.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-red-700">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Administrative Dissolution</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    The state may administratively dissolve your entity, removing it from the official register. This eliminates your liability protection and legal standing as a business.
                  </p>
                  <div className="bg-red-50 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold text-red-900 mb-2">Additional consequences include:</p>
                    <ul className="space-y-1 text-sm text-red-800">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Inability to operate under your business name</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Difficulty attracting partners, investors, or customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Potential personal liability for business debts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-100/50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-5xl font-black text-center text-gray-900 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">
      {[
        {
          q: 'What is an annual report for an LLC or corporation?',
          a: 'An annual report is a mandatory state filing that updates key business information such as your company address, registered agent, owners, managers, or officers. States use this report to keep their business records accurate and up to date.'
        },
        {
          q: 'Is filing an annual report required every year?',
          a: 'Most states require businesses to file an annual report every year, while some require biennial filings. The requirement depends on your state and business entity type. Failing to file can lead to penalties or loss of good standing.'
        },
        {
          q: 'When is my annual report due?',
          a: 'Annual report due dates vary by state. Some states have fixed deadlines, while others base the due date on your business formation date or anniversary month. Missing your deadline can result in late fees.'
        },
        {
          q: 'What happens if I don’t file my annual report?',
          a: 'If you fail to file your annual report, your business may face late penalties, loss of good standing, administrative dissolution, or even revocation of liability protection. Reinstating a dissolved business can be costly and time-consuming.'
        },
        {
          q: 'How much does it cost to file an annual report?',
          a: 'Annual report filing fees vary by state and business type. Fees can range from $0 to several hundred dollars. Some states also impose additional late penalties if the report is filed after the deadline.'
        },
        {
          q: 'What information is required for an annual report?',
          a: 'Most states require your legal business name, principal office address, registered agent details, and names of members, managers, directors, or officers. Corporations may also need to report share information.'
        },
        {
          q: 'Can I file my annual report myself?',
          a: 'Yes, business owners can file directly with the state. However, many choose a filing service to avoid mistakes, missed deadlines, or rejected filings that could put the business at risk.'
        },
        {
          q: 'How long does annual report filing take?',
          a: 'Online filings are often submitted immediately, but state processing times vary. Some states approve reports within minutes, while others may take several days or weeks to process the filing.'
        },
        {
          q: 'Do all states require annual reports?',
          a: 'Most states require annual or biennial reports, but a few states do not require LLCs to file annual reports. Requirements vary widely, so it’s important to understand your specific state’s rules.'
        },
        {
          q: 'Does filing an annual report mean I pay taxes?',
          a: 'No, an annual report is not a tax filing. It is a compliance requirement used to update state records. However, failure to file can affect your ability to file taxes or maintain good standing.'
        },
        {
          q: 'What is good standing, and why does it matter?',
          a: 'Good standing means your business is compliant with state requirements. Maintaining good standing is essential for opening bank accounts, obtaining financing, signing contracts, and protecting limited liability.'
        },
        {
          q: 'Can my business be dissolved for not filing an annual report?',
          a: 'Yes, states can administratively dissolve businesses that fail to file required reports. Dissolution removes liability protection and may require reinstatement fees to restore the business.'
        }
      ].map((faq, idx) => (
        <details
          key={idx}
          className="bg-white rounded-2xl p-8 group border-2 border-gray-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-lg"
        >
          <summary className="font-bold text-xl text-gray-900 cursor-pointer list-none flex justify-between items-center">
            <span>{faq.q}</span>
            <span className="text-blue-600 text-2xl font-bold transform group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">Stay Compliant. Stay Protected.</h2>
          <p className="text-2xl mb-10 text-blue-100">
            Join 460,000+ businesses that trust us with their annual report filing
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105">
            File Your Annual Report
          </button>
          <div className="mt-8 flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>100% State-Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              <span>Fast & Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span>Expert Support</span>
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
