import { FileEdit, Shield, Users, Building2, MapPin, Target, CheckCircle2, AlertCircle, Clock, FileCheck, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';

export default function Amendment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col">
      <Helmet>
  {/* Title */}
  <title>Company Amendment Filing in USA | LLC & Corporation Changes</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="File company amendments in the USA for LLCs and corporations. Update business name, address, members, managers, or activities with The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/amendment"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/amendment"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/amendment"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Company Amendment Filing in USA | LLC & Corporation Updates"
  />
  <meta
    property="og:description"
    content="Professional company amendment services in the USA. Amend LLC or corporation details such as name, address, members, or business activities."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/amendment"
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
    content="Company Amendment Services USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Company Amendment Filing in USA | LLC & Corporation Changes"
  />
  <meta
    name="twitter:description"
    content="Update or amend your LLC or corporation details in the USA with expert compliance support from The Future Perfect Global."
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
      "name": "Company Amendment Filing Service USA",
      "serviceType": "LLC & Corporation Amendment Filing",
      "url": "https://us.thefutureperfectglobal.com/business-management/amendment",
      "description": "Company amendment filing services in the USA for LLCs and corporations including changes to name, address, ownership, management, and business activities.",
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

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business amendment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
              <FileEdit className="w-5 h-5" />
              <span className="font-semibold">Official State Filing Service</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight drop-shadow-2xl">
              Articles of Amendment
            </h1>
            <p className="text-xl sm:text-2xl mb-10 text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Keep your business legally compliant with official amendments to your Articles of Incorporation or Organization
            </p>
            <button
              onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
              className="inline-block bg-white text-emerald-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl transform hover:scale-105 hover:shadow-emerald-900/20"
            >
              File Amendment - $149
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Understanding Articles of Amendment
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Articles of Amendment are formal filings submitted to the state whenever a business needs to modify details contained in its original formation documents, such as the Articles of Incorporation or the Articles of Organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border-2 border-emerald-200">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For Corporations</h3>
              <p className="text-gray-700 leading-relaxed">
                Corporations file amendments to their Articles of Incorporation when making changes to fundamental company information like name, purpose, or share structure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-200">
              <Building2 className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For LLCs</h3>
              <p className="text-gray-700 leading-relaxed">
                LLCs file amendments to their Articles of Organization when updating member information, business purpose, or other key details in their formation documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Why Filing Amendments Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keeping your business records current isn't just paperwork—it's essential protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Updating your official records ensures adherence to state laws and prevents costly fines or penalties. Stay in good standing with your Secretary of State.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Liability Protection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Filing amendments maintains your LLC or corporation's limited liability status through accurate documentation, protecting your personal assets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Public Records Accuracy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stakeholders like banks, investors, and vendors rely on current information in public records to make informed business decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Current records enable smooth business transactions requiring legal accuracy, from opening bank accounts to signing contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              When You Need to File
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              File Articles of Amendment whenever your business undergoes significant changes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FileEdit className="w-8 h-8" />,
                title: 'Company Name Change',
                description: 'Rebranding or updating your business name for better market clarity and recognition'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Address Change',
                description: 'Relocating your business to a new physical location within the same state'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Registered Agent Update',
                description: 'Hiring a new registered agent to handle legal mail and official correspondence'
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Membership Changes',
                description: 'Adding or removing members due to ownership transfers or business disputes'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Business Purpose',
                description: 'Shifting or expanding your company\'s core business operations and objectives'
              },
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: 'Share Structure',
                description: 'Modifying the number or type of authorized shares for your corporation'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Simple 4-Step Filing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all the complexity so you can focus on running your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: '1',
                title: 'Determine Form',
                description: 'We identify the correct amendment form required by your specific state'
              },
              {
                step: '2',
                title: 'Complete Form',
                description: 'Our team fills out all required information accurately and completely'
              },
              {
                step: '3',
                title: 'Submit Filing',
                description: 'We submit your amendment directly to your Secretary of State'
              },
              {
                step: '4',
                title: 'Confirmation',
                description: 'Receive updates and official confirmation of your approved amendment'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8">
                    <svg className="w-full h-full text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
<section className="py-20  bg-emerald-100/50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
        Common Questions About Articles of Amendment
      </h2>
      <p className="text-xl text-gray-600">
        Clear answers to the most frequently asked amendment filing questions
      </p>
    </div>

    <div className="space-y-5">
      {[
        {
          q: 'What are Articles of Amendment?',
          a: 'Articles of Amendment are official documents filed with the Secretary of State to record changes made to an existing LLC or corporation. They ensure your updated business information is legally recognized.'
        },
        {
          q: 'When do I need to file Articles of Amendment?',
          a: 'You should file an amendment whenever you change critical business details such as your company name, registered agent, office address, ownership structure, or authorized shares.'
        },
        {
          q: 'How long does it take to process Articles of Amendment?',
          a: 'Processing times vary by state but typically range from a few business days to 2–4 weeks. Expedited options may be available in certain states.'
        },
        {
          q: 'How much does it cost to file Articles of Amendment?',
          a: 'State filing fees vary by state. Our flat $149 service includes document preparation, filing, and applicable state fees, so there are no surprises.'
        },
        {
          q: 'Can I change my registered agent through an amendment?',
          a: 'Yes. Changing your registered agent is one of the most common reasons businesses file Articles of Amendment.'
        },
        {
          q: 'Do I need to file amendments in more than one state?',
          a: 'If your business is registered in multiple states as a foreign entity, you may need to update records in each applicable state.'
        },
        {
          q: 'What happens if I don’t file required amendments?',
          a: 'Failure to file amendments can result in penalties, loss of good standing, rejected contracts, or administrative dissolution of your business.'
        },
        {
          q: 'Can I file Articles of Amendment myself?',
          a: 'Yes, but filing errors can cause delays or rejections. Using a professional service ensures accuracy and saves time.'
        },
        {
          q: 'What information is required to file an amendment?',
          a: 'You’ll need your current business details, the exact changes being made, and company identification information such as your entity number.'
        },
        {
          q: 'Does changing my business name require an amendment?',
          a: 'Yes. A legal business name change must be filed with the state through Articles of Amendment before you can update banks, licenses, or contracts.'
        },
        {
          q: 'Are Articles of Amendment the same as an annual report?',
          a: 'No. Annual reports are recurring compliance filings, while Articles of Amendment are used only when making changes to business information.'
        },
        {
          q: 'Will my EIN change after filing an amendment?',
          a: 'In most cases, no. However, major structural changes may require IRS notification. We’ll guide you if additional steps are needed.'
        },
        {
          q: 'Can amendments be filed online?',
          a: 'Many states allow online filing, while others require mailed forms. We handle the correct filing method for your state.'
        },
        {
          q: 'Is filing an amendment legally required?',
          a: 'Yes, if certain changes occur. States require accurate, up-to-date business records to maintain compliance.'
        },
        {
          q: 'How will I know when my amendment is approved?',
          a: 'Once approved, you’ll receive official state confirmation and stamped documents via email.'
        }
      ].map((faq, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
          >
            <span className="text-lg font-bold text-gray-900 pr-6">
              {faq.q}
            </span>
            {openFaq === idx ? (
              <ChevronUp className="w-6 h-6 text-sky-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
            )}
          </button>

          {openFaq === idx && (
            <div className="px-6 pb-6">
              <p className="text-gray-700 leading-relaxed">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>


      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Update Your Business Records?
          </h2>
          <p className="text-xl mb-10 text-emerald-50 leading-relaxed">
            Keep your business compliant and protected with professional amendment filing
          </p>
          <button
            onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }}
            className="inline-block bg-white text-emerald-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl transform hover:scale-105"
          >
            File Your Amendment
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
