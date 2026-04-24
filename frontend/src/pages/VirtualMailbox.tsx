import { useParams } from "react-router-dom";
import { states } from "../data/states";
import { useState } from 'react';
import { Helmet } from "react-helmet-async"; 
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown } from "lucide-react";

export default function VirtualMailbox() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const params = useParams();
  const stateSlug = params.stateSlug; // ✅ SAFE

  if (!stateSlug) {
    return (
      <div className="py-32 text-center text-red-600 text-xl font-bold">
        Invalid URL
      </div>
    );
  }

  const stateData = states.find(
    (state) => state.slug.toLowerCase() === stateSlug.toLowerCase()
  );

  if (!stateData) {
    return (
      <div className="py-32 text-center text-red-600 text-xl font-bold">
        State not found
      </div>
    );
  }
const faqs = [
{
  question: `What is a virtual mailbox in ${stateData.name}?`,
  answer: `A virtual mailbox in ${stateData.name} is a digital mail management service that provides you with a real physical street address to receive business correspondence. All incoming mail is securely received, scanned, and uploaded to an online dashboard, allowing you to access, read, and manage your mail from anywhere in the world. This is ideal for remote businesses, startups, and international entrepreneurs who need a reliable ${stateData.name} business address without maintaining a physical office.`
},
{
  question: `Is a virtual mailbox legal in ${stateData.name}?`,
  answer: `Yes, using a virtual mailbox in ${stateData.name} is completely legal and widely accepted for business operations. Many startups, LLCs, and online businesses use virtual mailbox services for receiving official mail, customer communication, and business registration purposes. However, certain use cases like registered agent services may require compliance with specific state regulations.`
},
{
  question: "Can I use a virtual mailbox for LLC or company registration?",
  answer: `Yes, a virtual mailbox can be used as a business mailing address for LLC formation and company registration. It helps establish a professional business presence while keeping your personal address private. Many entrepreneurs use a virtual business address for company registration, banking, and official correspondence, although some states may require a separate registered agent address.`
},
{
  question: "How does mail scanning and digital access work?",
  answer: `When mail is delivered to your virtual mailbox address in ${stateData.name}, it is processed by trained staff and scanned securely. The scanned copies are then uploaded to your online mailbox portal, where you can view, download, or manage your documents instantly. This digital mail scanning process ensures fast access, improved document organization, and efficient remote business operations.`
},
{
  question: "Can my mail be forwarded internationally?",
  answer: `Yes, virtual mailbox services offer global mail forwarding, allowing you to receive your physical mail at any location worldwide. You can request mail forwarding on demand, choose shipping options, and track deliveries. This makes it an ideal solution for digital nomads, remote business owners, and international companies operating in ${stateData.name}.`
},
{
  question: "Will I receive government, bank, and legal documents?",
  answer: `Yes, your virtual mailbox can receive official correspondence including government notices, tax documents, bank statements, and legal letters. It ensures that you never miss important communications from authorities such as the ${stateData.name} Division of Corporations or financial institutions, helping you stay compliant and organized.`
},
{
  question: "Is my personal address kept private and secure?",
  answer: `Absolutely. One of the main benefits of a virtual mailbox is privacy protection. Your personal home address remains confidential while all business communication is routed through your virtual address. Additionally, secure handling, encrypted digital access, and controlled document management ensure complete data protection.`
},
{
  question: `Who should use a virtual mailbox in ${stateData.name}?`,
  answer: `A virtual mailbox is ideal for startups, small businesses, freelancers, remote teams, digital nomads, and international entrepreneurs looking to establish a presence in ${stateData.name}. It is especially useful for businesses that operate online, want a professional mailing address, or need flexible and scalable mail management solutions.`
}
];

  return (
    <div className="bg-white">
        <Helmet>
  <title>
    Virtual Mailbox Services in USA – Business Address & Mail Handling | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Get a virtual mailbox in the USA for your business. The Future Perfect Global offers secure mail handling, a professional US business address, mail forwarding, and compliance support for entrepreneurs and companies."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="virtual mailbox USA, virtual business address USA, mail forwarding services USA, business mailbox USA, virtual office mailbox USA, mail handling services USA, remote business address USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Virtual Mailbox Services in USA – Business Address & Mail Handling"
  />
  <meta
    property="og:description"
    content="Secure and reliable virtual mailbox services in the USA. Get a professional business address, mail scanning, and forwarding with The Future Perfect Global."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/virtual-mailbox"
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
    content="Virtual Mailbox Services in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Virtual Mailbox Services in USA – Business Address & Mail Handling"
  />
  <meta
    name="twitter:description"
    content="Manage your business mail remotely with secure virtual mailbox services and a professional US address from The Future Perfect Global."
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
      "name": "Virtual Mailbox Services in USA",
      "url": "https://us.thefutureperfectglobal.com/business-management/virtual-mailbox",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "Professional virtual mailbox services in the USA offering business address, mail scanning, forwarding, and secure mail handling for companies and entrepreneurs.",
      "areaServed": [
        "United States"
      ],
      "serviceType": [
        "Virtual Mailbox USA",
        "Mail Forwarding Services",
        "Business Address Services",
        "Remote Mail Handling"
      ]
    }`}
  </script>
</Helmet>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📬</div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            {stateData.name} Virtual Business Address for LLCs & Corporations
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-10">
            Forget outdated P.O. boxes and upgrade to a {stateData.name} virtual address. Establish your business with a real {stateData.name} street address, secure privacy, and digitally access, scan, and manage your mail online from anywhere globally.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105">
            GET STARTED
          </button>
        </div>
      </section>

      {/* FEATURES */}
   {/* FEATURES */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
        Virtual Mailbox Features for Modern Businesses
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Manage your business communication with a secure, flexible, and scalable 
        <strong> virtual mailbox service</strong> designed for startups, entrepreneurs, and global companies.
      </p>
    </div>
    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        {
          icon: "🔔",
          title: "Instant Mail Notifications",
          desc: `Get real-time alerts for important documents from the ${stateData.name} Division of Corporations and Revenue so you never miss critical updates.`,
        },
        {
          icon: "🏛️",
          title: "Professional Business Address",
          desc: `Strengthen your brand with a reliable ${stateData.name} business address that builds trust with clients and partners.`,
        },
        {
          icon: "📍",
          title: "Business Presence Anywhere",
          desc: `Operate your business in ${stateData.name} without being physically present, perfect for remote entrepreneurs and global businesses.`,
        },
        {
          icon: "📬",
          title: "Secure Online Mailbox",
          desc: `Access and manage your mail anytime with a secure digital mailbox from anywhere in the world.`,
        },
        {
          icon: "🔒",
          title: "Privacy Protection",
          desc: `Keep your personal address safe by using a dedicated business mailing address for all official communications.`,
        },
        {
          icon: "📦",
          title: "Mail Forwarding & Scanning",
          desc: `Receive scanned copies or forward your mail worldwide from your ${stateData.name} address whenever needed.`,
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
        >

          <div className="text-3xl mb-4">{item.icon}</div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

      <section className="py-20 px-6 bg-pink-100/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the transition
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
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
