import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import {
  Shield,
  Clock,
  Bell,
  FileCheck,
  Lock,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

type FAQItem = {
  title: string;
  content: string;
};

export default function RegAgent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [open, setOpen] = useState<number | null>(null);
const [videoOpen, setVideoOpen] = useState<boolean>(false);

const toggle = (i:number) => {
  setOpen(open === i ? null : i);
};

const faq:FAQItem[] = [

{
title:"Does my company actually need a registered agent?",
content:"In most U.S. states every LLC or corporation must appoint a registered agent. This person or service receives legal notices, government mail, and official compliance documents on behalf of your company."
},

{
title:"What advantages come with using a professional registered agent?",
content:"A professional registered agent ensures that critical documents reach you quickly and safely while also helping you stay organized with state compliance reminders."
},

{
title:"Why do some providers include a free registered agent service?",
content:"Many formation providers include the first year of registered agent service without extra cost when you register your business with them."
},

{
title:"How can a registered agent reduce my administrative workload?",
content:"Instead of constantly monitoring state correspondence yourself, the agent receives documents and sends you notifications so you can focus on running your business."
},

{
title:"What happens if my business doesn't maintain a registered agent?",
content:"Failing to maintain one may result in penalties, loss of good standing with the state, or missing important legal notices."
}

];

  const benefits = [
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Keep your personal address off public records and maintain your privacy with our registered agent service."
    },
    {
      icon: Clock,
      title: "Available Business Hours",
      description: "We're available during standard business hours to receive important legal and compliance documents on your behalf."
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Get immediate alerts via email and text when important documents arrive, so you're always in the loop."
    },
    {
      icon: FileCheck,
      title: "Document Management",
      description: "Professional handling and secure delivery of all service of process and compliance documents."
    },
    {
      icon: Lock,
      title: "Compliance Assurance",
      description: "Stay compliant with state requirements and never miss critical filing deadlines or legal notices."
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Physical presence in all 50 states, ensuring reliable service no matter where you operate."
    }
  ];

  const features = [
    "Free first year when bundled with LLC formation",
    "Professional acceptance of legal documents",
    "Instant email and SMS notifications",
    "Secure online document access portal",
    "Annual report reminders and compliance alerts",
    "No long-term contracts required",
    "Easy change of agent process",
    "Privacy protection for business owners"
  ];

  const faqs = [
  {
    question: "What is a registered agent and why is it required?",
    answer:
      "A registered agent is a legally designated person or company responsible for receiving official state correspondence, legal notices, and service of process on behalf of your business. Most U.S. states require every LLC and corporation to maintain an active registered agent to remain compliant."
  },
  {
    question: "Do LLCs and corporations need a registered agent?",
    answer:
      "Yes. All LLCs, corporations, and most formal business entities are legally required to appoint a registered agent in the state where they are formed or registered to do business."
  },
  {
    question: "Can I be my own registered agent?",
    answer:
      "You can act as your own registered agent in most states if you have a physical address in the state and are available during normal business hours. However, using a professional registered agent service offers privacy, reliability, and compliance benefits."
  },
  {
    question: "What happens if I don’t have a registered agent?",
    answer:
      "Failing to maintain a registered agent can lead to penalties, loss of good standing, missed legal notices, fines, or even administrative dissolution of your business by the state."
  },
  {
    question: "How much does a registered agent service cost?",
    answer:
      "Registered agent service costs typically range from $99 to $300 per year, depending on the provider and state. Professional services often include compliance reminders, document scanning, and online access."
  },
  {
    question: "What documents does a registered agent receive?",
    answer:
      "A registered agent receives legal documents such as lawsuits (service of process), state notices, tax correspondence, annual report reminders, and other official government communications."
  },
  {
    question: "Does a registered agent protect my privacy?",
    answer:
      "Yes. Using a registered agent service keeps your personal or business address off public records, helping protect your privacy and reduce unsolicited mail."
  },
  {
    question: "Can I change my registered agent later?",
    answer:
      "Yes. You can change your registered agent at any time by filing the appropriate form with the state and paying a small filing fee. Many businesses switch to professional agents as they grow."
  },
  {
    question: "Do I need a registered agent in every state?",
    answer:
      "If your business is registered to operate in multiple states (foreign qualification), you must maintain a registered agent in each state where you do business."
  },
  {
    question: "What is service of process?",
    answer:
      "Service of process refers to the formal delivery of legal documents such as lawsuits or subpoenas. A registered agent ensures these documents are received promptly and handled correctly."
  },
  {
    question: "Is a registered agent address required to be physical?",
    answer:
      "Yes. A registered agent must have a physical street address in the state of registration. P.O. boxes and virtual addresses are not accepted by state authorities."
  },
  {
    question: "How quickly will I receive documents from my registered agent?",
    answer:
      "Professional registered agent services typically provide same-day or next-business-day document scanning and digital notifications once documents are received."
  },
  {
    question: "Does hiring a registered agent help with compliance?",
    answer:
      "Yes. Most registered agent services offer compliance support such as annual report reminders, deadline alerts, and centralized document management to help keep your business in good standing."
  },
  {
    question: "Is a registered agent service worth it for small businesses?",
    answer:
      "Absolutely. For small businesses and startups, a registered agent service reduces administrative burden, ensures legal reliability, and provides peace of mind at a relatively low annual cost."
  }
];


  return (
    <div className="flex flex-col min-h-screen antialiased bg-white">
<Helmet>
  <title>
    Registered Agent Services in USA – Business Management Support | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Learn about registered agent services in the USA, including requirements, benefits, duties, and how The Future Perfect Global can help you stay compliant with state regulations."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="registered agent services USA, registered agent requirements, business registered agent, corporate registered agent service, compliance support USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/registered-agent"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Registered Agent Services in USA – Business Management Support"
  />
  <meta
    property="og:description"
    content="Get expert registered agent services for your business in the USA. Understand state requirements, duties, and compliance support with The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/registered-agent"
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
    content="Registered Agent Services USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Registered Agent Services in USA – Business Compliance"
  />
  <meta
    name="twitter:description"
    content="Explore registered agent services and compliance support for your U.S. business with The Future Perfect Global."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Registered Agent Services in USA",
      "url": "https://us.thefutureperfectglobal.com/business-management/registered-agent",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Professional registered agent support for U.S. businesses, including state compliance, document handling, and legal notifications.",
      "areaServed": [
        "United States"
      ],
      "serviceType": [
        "Registered Agent Services",
        "Business Compliance Support",
        "State Filing Assistance"
      ]
    }`}
  </script>
</Helmet>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-cyan-50 via-cyan-100 to-cyan-200">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgb(249 115 22) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="max-w-2xl">
              <div className="inline-flex items-center bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 500,000+ Businesses
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                Professional <span className="text-cyan-600">Registered Agent</span> Service
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Protect your privacy, ensure compliance, and never miss important legal documents.
                Get reliable registered agent service with instant notifications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-flex items-center justify-center bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-cyan-600/30 hover:bg-cyan-700 transition duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="inline-flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg border-2 border-cyan-600 hover:bg-cyan-50 transition duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">FREE First Year</p>
                  <p className="text-gray-600">When bundled with LLC or corporation formation</p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional business services"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cyan-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">$119/yr</p>
                <p className="text-cyan-100">After first year</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Our Registered Agent Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional, reliable registered agent services that keep your business compliant and your personal information private.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl border border-cyan-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED A REGISTERED AGENT */}
            <section className="py-20 bg-cyan-100/50">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-14">

<h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
Do You Need a Registered Agent? Here’s Why
</h2>

<p className="text-lg text-gray-600 max-w-3xl mx-auto">
A registered agent ensures your company receives important legal
documents and compliance notices so you never miss critical deadlines.
</p>

</div>

<div className="grid lg:grid-cols-2 gap-12 items-center">

{/* FAQ */}

<div>

<p className="text-cyan-600 font-semibold mb-2">
Important Things To Understand
</p>

<h3 className="text-2xl font-bold text-gray-900 mb-6">
Common Questions About Registered Agents
</h3>

<div className="space-y-4">

{faq.map((item, i:number) => (

<div key={i} className="bg-white border rounded-xl shadow-sm">

<button
onClick={()=>toggle(i)}
className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center"
>

{item.title}

<span className="text-cyan-500 text-xl">
{open===i ? "-" : "+"}
</span>

</button>

{open===i && (

<p className="px-6 pb-5 text-gray-600">
{item.content}
</p>

)}

</div>

))}

</div>

</div>

{/* VIDEO */}

<div className="relative">

<div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">

<img
src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
className="w-full opacity-60"
/>

<button
onClick={()=>setVideoOpen(true)}
className="absolute inset-0 flex items-center justify-center"
>

<div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">

<svg
xmlns="http://www.w3.org/2000/svg"
fill="white"
viewBox="0 0 24 24"
className="w-10 h-10 ml-1"
>
<path d="M8 5v14l11-7z"/>
</svg>

</div>

</button>

</div>

</div>

</div>

<div className="text-center mt-16">

<button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition">
GET STARTED
</button>

</div>

</div>


{/* VIDEO MODAL */}

{videoOpen && (

<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

<div className="relative w-full max-w-4xl">

<button
onClick={()=>setVideoOpen(false)}
className="absolute -top-10 right-0 text-white text-3xl"
>
×
</button>

<iframe
className="w-full h-[500px] rounded-xl"
src="https://www.youtube.com/embed/8jPQjjsBbIc"
title="Registered Agent"
allowFullScreen
/>

</div>

</div>

)}

</section>

      {/* FEATURES INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              What's Included in Our Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for reliable, professional registered agent representation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-r from-cyan-50 to-white p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about registered agent services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition duration-300"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Get Professional Registered Agent Service?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Protect your privacy, ensure compliance, and focus on growing your business.
            Get started today with our reliable registered agent service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="inline-flex items-center justify-center bg-cyan-600 text-white px-10 py-5 rounded-lg font-bold text-lg shadow-lg shadow-cyan-600/50 hover:bg-cyan-700 transition duration-300 transform hover:scale-105">
              Start Free First Year
            </button>
            <a href="/contact" className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300">
              Contact Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>50-state coverage</span>
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