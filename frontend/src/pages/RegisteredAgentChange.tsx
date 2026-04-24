import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { Clock, Shield, CheckCircle2, ArrowRight, ChevronUp, ChevronDown, Bell, FileText, ShieldCheck } from 'lucide-react';

export default function RegisteredAgentChange() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  
  const features = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Stay State Compliant",
    desc: "We help ensure your business always meets state compliance requirements so you never miss important legal obligations."
  },
  {
    icon: <FileText size={22} />,
    title: "Secure Document Handling",
    desc: "All legal and government documents are received, scanned, and securely stored in your online dashboard."
  },
  {
    icon: <Bell size={22} />,
    title: "Instant Notifications",
    desc: "Receive real-time alerts when important state or legal documents arrive for your business."
  },
  {
    icon: <Clock size={22} />,
    title: "Fast & Reliable Support",
    desc: "Our experts manage paperwork and compliance tasks so you can focus on growing your company."
  }
];


  return (
    <div className="bg-white">
      <Helmet>
  {/* Title */}
  <title>Registered Agent Change in USA | Update LLC or Corporation Agent</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Change your registered agent in the USA for LLCs and corporations. The Future Perfect Global helps you update registered agent details, file state forms, and stay compliant."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent-change"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent-change"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent-change"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Registered Agent Change in USA | LLC & Corporation Compliance"
  />
  <meta
    property="og:description"
    content="Professional registered agent change services in the USA. Update your LLC or corporation agent quickly and remain state compliant."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/registered-agent-change"
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
    content="Registered Agent Change Services USA"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Registered Agent Change in USA | LLC & Corporation Services"
  />
  <meta
    name="twitter:description"
    content="Change or update your registered agent in the USA with expert compliance support from The Future Perfect Global."
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
      "name": "Registered Agent Change Service USA",
      "serviceType": "Registered Agent Change & Compliance Filing",
      "url": "https://us.thefutureperfectglobal.com/business-management/registered-agent-change",
      "description": "Registered agent change services for USA LLCs and corporations including state filing, compliance updates, and documentation support.",
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

      <section className="relative py-16 text-white">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80"
      alt="Change Registered Agent Service"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/80"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto text-center">

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Change Your Registered Agent 
        <span className="text-cyan-400"> Quickly & Stay Compliant</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
        Looking to <strong>change your registered agent</strong> or switch to a 
        more reliable <strong>registered agent service</strong>? 
        Future Perfect Global LLC makes the process simple and fast. 
        We handle the filing, paperwork, and compliance requirements so your 
        business remains legally protected and up to date with state regulations.
      </p>

      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-2xl inline-flex items-center gap-3"
      >
        Get Started Today
        <ArrowRight className="w-5 h-5" />
      </button>

    </div>
  </div>
</section>

          <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-6xl mx-auto mb-16">

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Upgrade Your Registered Agent Service
          </h2>

          <p className="text-lg text-gray-600">
            Upgrade to a reliable registered agent service and keep your business
            fully compliant with state regulations. Secure document handling,
            instant alerts, and professional compliance support.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-200 rounded-full blur-3xl opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>


          {/* RIGHT FEATURES */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, i) => (

              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-4">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

            <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
      Trusted by <span className="text-cyan-600">500+ Entrepreneurs & Business Owners</span> Worldwide
    </h2>

    <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">

      <span className="text-cyan-600 font-bold text-lg">
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

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business owner working"
                className="rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Why Use This Service
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 rounded-full p-2 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Multi-State Business Expansion</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Expanding to multiple states requires registered agents in each jurisdiction
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 rounded-full p-2 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Save Time and Focus</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Busy owners lacking time to manage legal correspondence efficiently
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 rounded-full p-2 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Privacy Protection</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Home-based businesses seeking privacy by keeping residential addresses off public records
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              How to Change Your Registered Agent
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex gap-6 rounded-2xl p-8 border border-cyan-200">
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Visit Your Secretary of State's Website</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Navigate to your state's official Secretary of State website to access the necessary forms.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-2xl p-8 border border-cyan-200">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Search for "Change of Registered Agent"</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Look for the specific forms or process required for changing your registered agent.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-2xl p-8 border border-cyan-200">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Follow State-Specific Directions</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Each state has varying requirements and procedures for changing your registered agent.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-2xl p-8 border border-cyan-200">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Complete Forms and Submit Fees</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Fill out required paperwork and pay applicable state filing fees to complete the change.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-3 flex items-center gap-3">
                <Shield className="w-8 h-8 text-cyan-400" />
                Or Let Us Handle It For You
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                States have varying requirements that can be complex. For example, New York requires multiple
                different forms. We simplify this process by handling all paperwork and compliance requirements
                for you.
              </p>
              <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-10 py-4 rounded-full text-lg font-black hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-2">
                GET STARTED NOW
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ SECTION */}
<section className="py-20 bg-cyan-100/50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
        Common Questions About Changing a Registered Agent
      </h2>

      <p className="text-xl text-gray-600">
        Everything you need to know about updating your registered agent quickly and correctly
      </p>
    </div>

    <div className="space-y-5">
      {[
        {
          q: 'What is a registered agent?',
          a: 'A registered agent is a designated individual or company responsible for receiving legal documents, government notices, and compliance correspondence on behalf of your business.'
        },
        {
          q: 'When should I change my registered agent?',
          a: 'You should change your registered agent if your current agent resigns, changes address, provides poor service, or if you want better compliance support and privacy.'
        },
        {
          q: 'Is it legally required to update a registered agent change?',
          a: 'Yes. States require businesses to maintain accurate registered agent information. Failure to update this can result in penalties, loss of good standing, or missed legal notices.'
        },
        {
          q: 'How do I change my registered agent?',
          a: 'A registered agent change is completed by filing the appropriate form with the Secretary of State. This can usually be done online or by mail, depending on the state.'
        },
        {
          q: 'How long does a registered agent change take?',
          a: 'Processing times vary by state but are often completed within a few business days. Some states offer expedited processing for faster approval.'
        },
        {
          q: 'How much does it cost to change a registered agent?',
          a: 'State filing fees vary. Our service includes preparation, filing, and handling of all required documentation, helping you avoid errors or delays.'
        },
        {
          q: 'Can I be my own registered agent?',
          a: 'Yes, but it requires maintaining a physical address in the state, being available during business hours, and having your address on public record.'
        },
        {
          q: 'Can I change my registered agent online?',
          a: 'Many states allow online filing, while others require mailed forms. We ensure your filing follows the correct state-specific process.'
        },
        {
          q: 'Does changing a registered agent affect my EIN?',
          a: 'No. Changing your registered agent does not affect your EIN, tax status, or ownership structure.'
        },
        {
          q: 'Will my business address change when I change my registered agent?',
          a: 'Not necessarily. The registered agent address is separate from your principal business address unless you are acting as your own agent.'
        },
        {
          q: 'Do I need to notify anyone else after changing my registered agent?',
          a: 'In most cases, notifying the state is sufficient. However, you may also want to inform your attorney, bank, or compliance provider.'
        },
        {
          q: 'What happens if my registered agent resigns?',
          a: 'If your agent resigns, you must appoint a new registered agent immediately to remain compliant and avoid administrative penalties.'
        },
        {
          q: 'Can I change my registered agent in multiple states?',
          a: 'Yes. If your business operates in multiple states, you must update the registered agent separately in each state where you are registered.'
        },
        {
          q: 'Is a registered agent change the same as an amendment?',
          a: 'Not always. Some states treat registered agent updates as a separate filing, while others include it under Articles of Amendment.'
        },
        {
          q: 'How will I know my registered agent change is approved?',
          a: 'Once processed, the state will issue confirmation showing the updated registered agent details on your business record.'
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-600 via-slate-600 to-slate-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Switch to Our Service Today
            </h2>
            <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto">
              Professional registered agent service in all 50 states for just $119/year
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
              Free first-year service included with select business formation packages
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-12 py-5 rounded-full text-xl font-black hover:bg-gray-50 transition-all shadow-2xl inline-flex items-center gap-2">
              ORDER NOW
              <ArrowRight className="w-6 h-6" />
            </button>
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
