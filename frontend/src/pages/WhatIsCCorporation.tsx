import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Helmet } from "react-helmet-async"; 
import { CheckCircle, AlertCircle, FileText, DollarSign, Users, TrendingUp, BarChart3, BookOpen, Briefcase, Clock, Shield, ChevronDown } from 'lucide-react';

export default function WhatIsCcorporation() {
const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

   const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      <Helmet>
  <title>
    What Is a C Corporation? – Meaning, Benefits & Registration in USA | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Learn what a C Corporation is in the USA, its meaning, structure, benefits, taxation rules, and how to register a C Corp with expert guidance from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/what-is-c-corporation"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="what is c corporation, c corp meaning USA, c corporation benefits, c corporation taxation USA, c corp vs s corp, c corporation registration USA, c corp formation"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/what-is-c-corporation"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/what-is-c-corporation"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="What Is a C Corporation? – Meaning & Benefits in USA"
  />
  <meta
    property="og:description"
    content="Understand what a C Corporation is, how it works, its taxation structure, advantages, and the registration process in the USA."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/what-is-c-corporation"
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
    content="What Is a C Corporation in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="What Is a C Corporation? – Meaning & Registration in USA"
  />
  <meta
    name="twitter:description"
    content="A complete guide explaining what a C Corporation is, its taxation, benefits, and how to register a C Corp in the USA."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What Is a C Corporation? – Meaning, Benefits & Registration in USA",
      "url": "https://us.thefutureperfectglobal.com/what-is-c-corporation",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        }
      },
      "description": "Detailed guide explaining what a C Corporation is in the USA, including its structure, taxation, benefits, and registration process.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://us.thefutureperfectglobal.com/what-is-c-corporation"
      }
    }`}
  </script>
</Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={32} />
            <span className="text-cyan-100 text-lg font-semibold">Business Structure Guide</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            What is a C-Corporation?
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl leading-relaxed">
            Understand the complete guide to C-Corporations, including formation, tax implications, liability protection, and how they compare to other business structures.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-900 px-8 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Definition of a C-Corporation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A C-Corporation is a legally distinct business entity that is separate and independent from its owners. It is incorporated under state law and is taxed as a separate entity from its shareholders. This structure provides significant liability protection and offers various tax benefits, making it an attractive choice for many businesses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The "C" designation refers to Subchapter C of the Internal Revenue Code, which outlines the taxation rules for corporations. C-Corporations are the most common type of corporation in the United States and are suitable for businesses of all sizes.
              </p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-cyan-900 mb-4">Key Characteristics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Separate legal entity from owners</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited number of shareholders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Perpetual existence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Transferable ownership shares</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How C-Corporations Work */}
      <section className="py-16 px-4 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">How Do C-Corporations Work?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users size={28} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shareholders</h3>
              <p className="text-gray-700">Shareholders own the corporation through issued stock. They elect the board of directors and vote on major corporate decisions during annual meetings.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={28} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Board of Directors</h3>
              <p className="text-gray-700">The board oversees corporate management, approves major decisions, and ensures compliance with regulations. Directors are elected by shareholders.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Briefcase size={28} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Management</h3>
              <p className="text-gray-700">Officers and managers handle day-to-day operations. They report to the board of directors and implement strategic decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12">Advantages of C-Corporations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Shield size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Limited Liability Protection</h3>
                <p className="text-gray-700">Shareholders are not personally liable for corporate debts or legal judgments. Their losses are limited to their investment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <DollarSign size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tax Benefits</h3>
                <p className="text-gray-700">C-Corporations can retain earnings at lower corporate tax rates and take advantage of various business deductions and credits.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ease of Capital Raising</h3>
                <p className="text-gray-700">C-Corporations can issue stock and bonds to raise capital more easily, enabling growth and expansion opportunities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited Shareholders</h3>
                <p className="text-gray-700">C-Corporations can have an unlimited number of shareholders, making it easy to bring in investors and partners.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Perpetual Existence</h3>
                <p className="text-gray-700">The corporation continues to exist even if ownership changes, providing business continuity and stability.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FileText size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transferable Shares</h3>
                <p className="text-gray-700">Shareholders can easily buy, sell, or transfer their stock ownership without affecting corporate operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disadvantages Section */}
      <section className="py-16 px-4 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12">Disadvantages of C-Corporations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Double Taxation</h3>
                <p className="text-gray-700">Corporate profits are taxed at the corporate level, and dividends are taxed again at the shareholder level, resulting in higher overall tax burden.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complex Formation & Compliance</h3>
                <p className="text-gray-700">Setting up a C-Corporation requires extensive paperwork, legal filings, and ongoing compliance with state and federal regulations.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Administrative Costs</h3>
                <p className="text-gray-700">C-Corporations must maintain detailed records, hold shareholder meetings, file separate tax returns, and potentially hire compliance professionals.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Formalities Required</h3>
                <p className="text-gray-700">C-Corporations must follow strict corporate formalities including board meetings, shareholder votes, and documented decision-making processes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Less Flexibility</h3>
                <p className="text-gray-700">C-Corporations have limited flexibility in profit distribution and are subject to more restrictions compared to pass-through entities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Automatic Alternative Minimum Tax</h3>
                <p className="text-gray-700">C-Corporations may be subject to the Alternative Minimum Tax (AMT), which can increase their overall tax liability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Requirements */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Steps to Form a C-Corporation</h2>
          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "Choose a Business Name",
                description: "Select a unique name that complies with your state's naming requirements. Conduct a name search to ensure availability."
              },
              {
                number: "2",
                title: "File Articles of Incorporation",
                description: "Submit Articles of Incorporation with your state's Secretary of State office along with filing fees and required documentation."
              },
              {
                number: "3",
                title: "Obtain an EIN",
                description: "Apply for an Employer Identification Number (EIN) from the IRS. This unique number identifies your business for tax purposes."
              },
              {
                number: "4",
                title: "Create Bylaws",
                description: "Draft corporate bylaws that outline how the corporation will operate, including voting rights, meetings, and responsibilities."
              },
              {
                number: "5",
                title: "Issue Stock Certificates",
                description: "Issue stock certificates to shareholders and maintain detailed records of ownership and share distribution."
              },
              {
                number: "6",
                title: "Hold Initial Meeting",
                description: "Conduct an initial board meeting to adopt bylaws, elect officers, and authorize business activities."
              }
            ].map((step) => (
              <div key={step.number} className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taxation Section */}
      <section className="py-16 px-4 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">C-Corporation Taxation</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate-Level Taxation</h3>
              <p className="text-gray-700 mb-4">C-Corporations pay federal income tax on their net profits. The current federal corporate tax rate is a flat 21% (as of 2024). Additionally, some states impose state corporate income taxes.</p>
              <p className="text-gray-700">Corporations can deduct reasonable business expenses, allowing them to minimize taxable income through proper accounting and business decisions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Shareholder-Level Taxation</h3>
              <p className="text-gray-700 mb-4">Shareholders pay individual income tax on dividends received from the corporation. This results in the "double taxation" effect where profits are taxed twice.</p>
              <p className="text-gray-700">Qualified dividends may receive preferential tax treatment at the federal level, but this does not eliminate the double taxation issue entirely.</p>
            </div>
          </div>
          <div className="bg-cyan-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tax Planning Strategies</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Reinvest profits to defer dividend distributions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Utilize Section 179 equipment deductions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Consider S-Corporation election for tax optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-cyan-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Deduct reasonable officer salaries</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">C-Corporation vs. Other Business Structures</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">C-Corporation</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">S-Corporation</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">LLC</th>
                  <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Sole Proprietorship</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold text-gray-900">Liability Protection</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Yes</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Yes</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Yes</td>
                  <td className="border border-gray-300 p-4 text-gray-700">No</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold text-gray-900">Double Taxation</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Yes</td>
                  <td className="border border-gray-300 p-4 text-gray-700">No</td>
                  <td className="border border-gray-300 p-4 text-gray-700">No</td>
                  <td className="border border-gray-300 p-4 text-gray-700">No</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold text-gray-900">Ease of Formation</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Moderate</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Moderate</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Easy</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Very Easy</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold text-gray-900">Ownership Restrictions</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Unlimited</td>
                  <td className="border border-gray-300 p-4 text-gray-700">100 U.S. Shareholders</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Unlimited</td>
                  <td className="border border-gray-300 p-4 text-gray-700">One Owner</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold text-gray-900">Compliance Burden</td>
                  <td className="border border-gray-300 p-4 text-gray-700">High</td>
                  <td className="border border-gray-300 p-4 text-gray-700">High</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Low</td>
                  <td className="border border-gray-300 p-4 text-gray-700">Minimal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "What is the minimum number of shareholders required for a C-Corporation?",
                answer: "There is no minimum number of shareholders required for a C-Corporation. Unlike S-Corporations, which are limited to 100 U.S. shareholders, C-Corporations can be formed with a single shareholder. This flexibility makes C-Corporations an excellent choice for sole proprietors who want to establish a separate legal entity and enjoy liability protection without needing additional investors. As your business grows, you can easily add shareholders by issuing additional stock without any structural changes to the corporation. This makes it an ideal vehicle for business owners who may want to bring in investors in the future."
              },
              {
                question: "Can a C-Corporation have foreign shareholders?",
                answer: "Yes, C-Corporations can have an unlimited number of foreign shareholders, which is a significant advantage over S-Corporations. This makes C-Corporations particularly attractive for international business ventures, foreign investment opportunities, and multinational corporations. Foreign investors can freely buy and sell stock in C-Corporations without triggering the loss of favorable tax status, unlike S-Corporations which would lose their special tax treatment if foreign shareholders are introduced. However, foreign shareholders must comply with U.S. tax obligations on dividends received, and may be subject to withholding taxes. Corporations with foreign ownership should consult with international tax professionals to ensure proper compliance with both U.S. and foreign tax regulations."
              },
              {
                question: "What is the difference between C-Corporation and S-Corporation?",
                answer: "The primary difference between C-Corporations and S-Corporations lies in how they are taxed and their ownership restrictions. C-Corporations are subject to double taxation—the corporation pays federal income tax on profits, and shareholders pay individual income tax on dividends received. S-Corporations are pass-through entities that avoid this double taxation by allowing profits and losses to be passed through to shareholders' personal tax returns. However, S-Corporations have significant restrictions: they can have no more than 100 U.S. shareholders who must be citizens or permanent residents, and all shareholders must be individuals (not other corporations or partnerships). S-Corporations also require more complex election procedures and ongoing compliance. C-Corporations offer unlimited shareholders of any type and simpler ownership structure, but face the tax disadvantage. The choice depends on your business size, ownership structure, and tax situation—smaller businesses often benefit from S-Corporation treatment, while larger corporations typically use C-Corporation structure."
              },
              {
                question: "How much does it cost to form a C-Corporation?",
                answer: "The cost to form a C-Corporation varies significantly by state and the complexity of your business. State filing fees for Articles of Incorporation typically range from $100 to $500, with Delaware, Nevada, and other business-friendly states often on the higher end. Additional costs include: registered agent services ($100-$300 annually), legal fees for document preparation ($1,000-$5,000 if using an attorney), IRS EIN application (free), corporate bylaws and operating documents ($200-$1,000 if professionally drafted), initial business licenses and permits (varies by location and industry), and accounting setup fees ($500-$2,000). If you use online formation services, total costs typically range from $300-$1,500. It's important to note that formation is just the initial cost; ongoing compliance expenses include annual filing fees, tax return preparation, registered agent fees, and potential accounting services, which can add $1,000-$5,000+ annually depending on your business complexity."
              },
              {
                question: "Can a C-Corporation be taxed as an S-Corporation?",
                answer: "Yes, a C-Corporation can elect to be taxed as an S-Corporation, which can provide significant tax savings for many business owners. This is done by filing Form 2553 (Election by a Small Business Corporation) with the IRS. By making this election, your corporation can avoid double taxation while maintaining the liability protection and other benefits of a C-Corporation. This is particularly beneficial if your business generates substantial profits because you can split income between the corporation (at 21% tax rate) and yourself (at personal rates), potentially resulting in lower overall tax liability. When you elect S-Corporation taxation, profits and losses pass through to shareholders' personal tax returns. However, there are important requirements: you can have no more than 100 shareholders (all U.S. citizens or residents), you cannot have other corporations as shareholders, all shareholders must be individuals or certain trusts, and all shareholders must actively participate in voting and consent to the election. Many successful businesses use this strategy to optimize their tax situation while maintaining corporate liability protection."
              },
              {
                question: "What are the annual compliance requirements for C-Corporations?",
                answer: "C-Corporations have comprehensive annual compliance requirements that must be carefully tracked and completed. These include: filing Form 1120 (federal corporate income tax return) by the April 15th deadline following the tax year; maintaining detailed accounting records and financial statements; holding annual shareholder meetings to report on business performance and allow shareholders to vote on major decisions; keeping meeting minutes and documenting all corporate decisions; filing state annual reports or franchise tax returns (deadlines vary by state); paying estimated quarterly taxes if substantial profits are anticipated; updating and maintaining corporate bylaws and shareholder agreements; obtaining necessary business licenses and permits renewals; filing employment tax returns (Form 941) if you have employees; reporting employee wages (Form W-2); maintaining corporate seal and stock ledger; ensuring directors fulfill fiduciary duties; and complying with industry-specific regulations. Additionally, many states require registered agent services and state-specific filings. Failure to maintain these compliance obligations can result in penalties, loss of liability protection through piercing the corporate veil, or tax issues. Many businesses hire professional accountants and legal advisors to manage these requirements and ensure full compliance."
              },
              {
                question: "What are the tax advantages of a C-Corporation?",
                answer: "C-Corporations offer several significant tax advantages that make them attractive for many businesses, especially larger enterprises. Key advantages include: the ability to retain earnings within the corporation at a flat 21% federal tax rate, which may be lower than the owner's personal tax rate; generous business deductions including salaries, office expenses, equipment, and professional services; Section 179 deductions allowing immediate write-off of equipment purchases up to specified limits; accelerated depreciation through MACRS (Modified Accelerated Cost Recovery System); deductions for business losses that can offset other corporate income; the ability to defer profits by retaining earnings rather than distributing dividends; employee benefit deductions such as health insurance premiums, retirement plan contributions, and other qualified benefits (which are not available to sole proprietors); net operating loss (NOL) carryback and carryforward provisions; and tax credits for research and development, investment in certain areas, and hiring specific groups of workers. Additionally, capital gains on the sale of corporate assets may receive preferential treatment. The qualified business income (QBI) deduction may also apply. However, these advantages must be weighed against the double taxation issue and higher compliance costs to determine if a C-Corporation is the right choice for your specific situation."
              },
              {
                question: "Can shareholders be held personally liable for corporate debts?",
                answer: "Generally, no—this is one of the primary advantages of forming a C-Corporation. The corporate structure provides limited liability protection, meaning shareholders are typically not personally responsible for corporate debts, liabilities, or legal judgments against the corporation. A shareholder's personal liability is limited to their investment in the corporation. If the corporation owes money to creditors or faces a lawsuit, creditors must pursue the corporation's assets, not the shareholders' personal assets. This protection extends to personal residences, vehicles, bank accounts, and other personal property of shareholders. However, there are important exceptions to this protection called 'piercing the corporate veil,' which can occur if: the corporation is used fraudulently or illegally; personal and corporate finances are commingled without proper separation; the corporation is undercapitalized (formed with insufficient funds to meet reasonable business needs); corporate formalities (meetings, bylaws, minutes) are not properly maintained; or the corporation is used to avoid legitimate business obligations. To maintain liability protection, corporations must maintain separate bank accounts, keep detailed records, hold annual meetings, follow bylaws, and keep corporate and personal finances completely separate. Consulting with a business attorney can help ensure your corporation maintains proper liability protection."
              },
              {
                question: "How do dividends work in a C-Corporation?",
                answer: "Dividends are payments made by a C-Corporation to its shareholders from corporate profits. Here's how the process typically works: First, the corporation must have accumulated profits or earnings. The board of directors votes to declare a dividend and sets the amount and payment date. Dividends can be paid in cash, additional stock, or other property. The corporation typically maintains detailed records of which shareholders own what percentage of stock to calculate each shareholder's dividend payment. Shareholders pay individual income tax on dividends received at dividend tax rates, which are typically lower than ordinary income rates (0%, 15%, or 20% depending on your tax bracket and whether dividends are qualified). The corporation cannot deduct dividend payments from corporate taxable income—this is what creates the double taxation effect. Dividends are not mandatory; the board of directors can choose to retain profits within the corporation for reinvestment or other purposes. This flexibility allows business owners to control their personal tax liability by choosing when to declare dividends. However, the IRS requires that dividends be paid from legitimate corporate earnings and not used to avoid corporate income taxes. Many successful businesses minimize shareholder distributions, retaining earnings within the corporation to take advantage of lower corporate tax rates and reinvest profits for growth."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-cyan-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{item.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-cyan-600 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen size={48} className="mx-auto mb-6 opacity-80" />
          <h2 className="text-5xl font-extrabold mb-4">Ready to Form Your C-Corporation?</h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Take the next step in establishing your business with professional guidance and support throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
              Start Forming Today
            </button>
            <button className="bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors border border-cyan-600">
              Learn More
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
