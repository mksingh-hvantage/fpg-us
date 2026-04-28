import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { Building2, Users, FileText, CreditCard, Shield, TrendingUp } from 'lucide-react';

export default function EIN() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('');

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>EIN Registration in USA – Apply for US Tax ID (EIN) | The Future Perfect Global</title>
        <meta name="description" content="Apply for an EIN (Employer Identification Number) in the USA with The Future Perfect Global. Fast EIN registration for LLCs, corporations, nonprofits, and foreign-owned US businesses." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-formation/tax-id-ein" />
        <meta name="keywords" content="EIN registration USA, apply for EIN USA, US tax ID number, employer identification number USA, EIN for LLC USA, EIN for foreign owned business USA, IRS EIN application" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/tax-id-ein" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-formation/tax-id-ein" hrefLang="x-default" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EIN Registration in USA – Apply for US Tax ID Number" />
        <meta property="og:description" content="Get your US EIN quickly with expert assistance. We handle IRS EIN applications for LLCs, corporations, nonprofits, and non-resident founders." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-formation/tax-id-ein" />
        <meta property="og:site_name" content="The Future Perfect Global – USA EIN Registration Services" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta property="og:image:alt" content="EIN Registration & US Tax ID Services by The Future Perfect Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="EIN Registration in USA – Apply for US Tax ID" />
        <meta name="twitter:description" content="Apply for your EIN in the USA with professional support. IRS EIN filing for LLCs, corporations, nonprofits, and foreign founders." />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "EIN Registration in USA",
          "url": "https://us.thefutureperfectglobal.com/business-formation/tax-id-ein",
          "provider": {
            "@type": "Organization",
            "name": "The Future Perfect Global",
            "url": "https://us.thefutureperfectglobal.com/",
            "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
          },
          "description": "Professional EIN (Employer Identification Number) registration services in the USA for LLCs, corporations, nonprofits, and foreign-owned businesses.",
          "areaServed": ["United States","Delaware","California","Texas","Florida","New York","Nevada","Wyoming"],
          "serviceType": ["EIN Application","US Tax ID Registration","IRS EIN Filing","EIN for Foreign-Owned Businesses","Business Compliance Support"]
        }`}</script>

        {/* Animation keyframes injected via style tag */}
        <style>{`
          @keyframes ein-fadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes ein-float {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-8px); }
          }
          @keyframes ein-dot-drift {
            0%   { transform: translate(0, 0); }
            100% { transform: translate(24px, 16px); }
          }
          @keyframes ein-orb-pulse {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50%       { opacity: 0.25; transform: scale(1.08); }
          }
          @keyframes ein-badge-pop {
            0%   { opacity: 0; transform: scale(0.85); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes ein-cta-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(6,182,212,0.5); }
            50%       { box-shadow: 0 0 0 12px rgba(6,182,212,0); }
          }

          .ein-animate-badge   { animation: ein-badge-pop  0.5s cubic-bezier(.34,1.56,.64,1) both; }
          .ein-animate-h1      { animation: ein-fadeUp 0.65s 0.12s ease both; }
          .ein-animate-sub     { animation: ein-fadeUp 0.65s 0.24s ease both; }
          .ein-animate-cta     { animation: ein-fadeUp 0.65s 0.36s ease both; }
          .ein-animate-trust   { animation: ein-fadeUp 0.55s 0.46s ease both; }
          .ein-animate-cards   { animation: ein-fadeUp 0.65s 0.56s ease both; }

          .ein-float-1 { animation: ein-float 4.2s ease-in-out infinite; }
          .ein-float-2 { animation: ein-float 5.0s ease-in-out 0.6s infinite; }
          .ein-float-3 { animation: ein-float 4.6s ease-in-out 1.1s infinite; }

          .ein-dot-grid {
            position: absolute; inset: 0; pointer-events: none;
            background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px);
            background-size: 30px 30px;
            animation: ein-dot-drift 10s linear infinite alternate;
          }
          .ein-orb {
            position: absolute; border-radius: 9999px;
            filter: blur(72px); pointer-events: none;
            animation: ein-orb-pulse 6s ease-in-out infinite;
          }
          .ein-orb-1 { width: 380px; height: 380px; background: #06b6d4; top: -100px; right: -80px; }
          .ein-orb-2 { width: 260px; height: 260px; background: #0ea5e9; bottom: -80px; left: -60px; animation-delay: 3s; }

          .ein-cta-primary { animation: ein-cta-glow 2.4s ease-in-out 1.2s 4; }
        `}</style>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">

        {/* Animated dot grid */}
        <div className="ein-dot-grid" />

        {/* Glowing orbs */}
        <div className="ein-orb ein-orb-1" style={{ opacity: 0.15 }} />
        <div className="ein-orb ein-orb-2" style={{ opacity: 0.12 }} />

        {/* Subtle top-edge cyan line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="ein-animate-badge inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-5 py-1.5 rounded-full text-sm font-semibold mb-7 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
            IRS Tax ID Application Service
          </div>

          {/* H1 */}
          <h1 className="ein-animate-h1 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Apply for Your{' '}
            <span className="text-cyan-400">EIN Number Online</span>{' '}
            Fast &amp;{' '}
            <span className="text-cyan-400">Hassle-Free</span>
          </h1>

          {/* Subheading */}
          <p className="ein-animate-sub text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Get your <strong className="text-white">Employer Identification Number (EIN)</strong> quickly
            with our simple online process. Perfect for{' '}
            <strong className="text-white">LLCs, corporations, startups, and international founders</strong>{' '}
            who need an <strong className="text-white">IRS Tax ID number</strong> to open a business bank
            account, hire employees, or operate legally in the United States.
          </p>

          {/* CTA buttons */}
          <div className="ein-animate-cta flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="ein-cta-primary bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              Apply for EIN Now
            </button>
            <button className="border border-cyan-400 text-cyan-300 px-10 py-4 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all hover:scale-105">
              Learn About EIN
            </button>
          </div>

          {/* Trust line */}
          <p className="ein-animate-trust text-sm text-gray-400 mb-16">
            No credit card required to start &nbsp;•&nbsp; Secure EIN application process &nbsp;•&nbsp; Trusted by entrepreneurs worldwide
          </p>

          {/* Feature cards — floating */}
          <div className="ein-animate-cards grid sm:grid-cols-3 gap-6">

            <div className="ein-float-1 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Fast EIN Processing</h3>
              <p className="text-gray-300 text-sm">Submit your EIN application online and receive your IRS Tax ID quickly.</p>
            </div>

            <div className="ein-float-2 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">For LLCs &amp; Startups</h3>
              <p className="text-gray-300 text-sm">Perfect for LLCs, corporations, freelancers and new businesses.</p>
            </div>

            <div className="ein-float-3 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">100% Online Process</h3>
              <p className="text-gray-300 text-sm">Apply for your EIN from anywhere without complicated paperwork.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
            Trusted by{' '}
            <span className="text-cyan-500">500+ Entrepreneurs &amp; Business</span>{' '}
            <span className="text-cyan-600">Owners Worldwide</span>
          </h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-full shadow-md">
            <span className="text-cyan-500 font-bold text-lg">Serving Businesses Since 2018</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Bootstrapped &amp; Founder-Led</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold text-gray-800">Independently Owned Company</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Easy Steps to Get a Federal Tax{' '}
              <span className="text-cyan-600">ID Number (EIN)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our simple three-step process to obtain your EIN quickly and efficiently
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { n: 1, title: 'Complete the Application', desc: 'Fill out our simple online form with your business information. We guide you through every step.' },
                { n: 2, title: 'Review & Submit', desc: 'Our experts carefully review your application before submitting it to the IRS.' },
                { n: 3, title: 'Receive Your EIN', desc: 'Get your EIN delivered to your email, usually within 1–2 business days.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-extrabold text-xl">{n}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="https://shifton.com/wp-content/uploads/2025/06/apply-for-an-ein-1024x576.webp"
                alt="EIN Application Process"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DO YOU NEED AN EIN ────────────────────────────────── */}
      <section className="py-24 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Do You Need an EIN (Federal Tax ID) for{' '}
              <span className="text-cyan-600">Your Business?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn when a business needs an Employer Identification Number (EIN) and how it helps
              manage taxes, protect identity, and operate legally in the United States.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://evergreensmallbusiness.com/wp-content/uploads/2013/06/iStock_000002804133Small.jpg"
                alt="EIN Tax ID for business"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Sole Proprietors Without Employees',
                  desc: 'If you operate a sole proprietorship with no employees, you may not be required to obtain an EIN. Many sole owners use their Social Security Number for tax filings.',
                },
                {
                  title: 'Single-Member LLCs',
                  desc: "A single-member LLC can sometimes use the owner's Social Security Number, but many choose to obtain an EIN to keep personal and business records separate.",
                },
                {
                  title: 'Benefits of Having an EIN',
                  desc: 'An EIN helps simplify tax reporting, allows you to hire employees, open business bank accounts, and keeps your personal finances separate from your company.',
                },
                {
                  title: 'EIN as a Business Tax ID',
                  desc: 'The Employer Identification Number acts as your official IRS Tax ID, enabling LLCs, corporations, and partnerships to file taxes and establish their legal business identity.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white p-4 rounded-xl shadow-md border hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES USE EIN ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Why Businesses Use an{' '}
              <span className="text-cyan-600">EIN Tax ID</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your EIN is essential for many business operations and financial activities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {[
              { icon: Building2, title: 'Open Bank Accounts',          desc: 'Required to open business bank accounts and establish business credit lines' },
              { icon: Users,     title: 'Hire Employees',              desc: 'Necessary for payroll processing and reporting employee wages to the IRS' },
              { icon: FileText,  title: 'File Tax Returns',            desc: 'Used to file federal and state business tax returns and other IRS forms' },
              { icon: CreditCard,title: 'Apply for Business Licenses', desc: 'Often required when applying for business licenses and permits' },
              { icon: Shield,    title: 'Protect Your SSN',            desc: 'Keeps your Social Security Number private for business transactions' },
              { icon: TrendingUp,title: 'Build Business Credit',       desc: 'Essential for establishing and building your business credit profile' },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-cyan-500 transition-all group">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                  <Icon className="w-7 h-7 text-cyan-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
            Frequently Asked{' '}
            <span className="text-cyan-600">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is an EIN (Employer Identification Number) and why does my business need it?',
                a: 'An Employer Identification Number (EIN), also known as a Federal Tax ID Number, is a unique nine-digit number issued by the Internal Revenue Service (IRS) to identify a business for tax purposes. It functions similarly to a Social Security Number but is specifically used for businesses instead of individuals. Most businesses operating in the United States—including LLCs, corporations, partnerships, and nonprofit organizations—are required to have an EIN. Businesses need an EIN to hire employees, open a U.S. business bank account, file federal and state taxes, apply for business licenses, and establish business credit. Even sole proprietors who do not have employees often choose to obtain an EIN because it helps separate personal and business finances and protects their Social Security Number from being shared with vendors, clients, and financial institutions.',
              },
              {
                q: 'Who needs to apply for an EIN in the United States?',
                a: 'Most businesses operating in the United States are required to obtain an EIN. You typically need an EIN if your business hires employees, operates as a partnership or corporation, files employment or excise taxes, or withholds taxes on income paid to non-resident aliens. Limited Liability Companies (LLCs) and corporations almost always require an EIN in order to operate legally. In addition, businesses usually need an EIN to open a business bank account, apply for business credit cards, work with payment processors such as Stripe or PayPal, and register for state tax accounts. Certain organizations such as trusts, estates, nonprofits, and retirement plans must also obtain an EIN. Even single-member LLCs and sole proprietors often obtain an EIN because many banks, lenders, and government agencies require it.',
              },
              {
                q: 'How do I apply for an EIN with the IRS?',
                a: 'You can apply for an EIN directly with the IRS by completing Form SS-4. The fastest method is the online EIN application available through the IRS website, which allows eligible applicants to receive their EIN immediately after completing the form. Businesses can also apply by fax or by mail if they are unable to use the online system. Fax applications usually take a few business days to process, while mailed applications may take several weeks. During the application process you will need to provide information such as the legal name of the business, the business address, the business structure (LLC, corporation, partnership, or sole proprietorship), and details about the responsible party who owns or controls the business. Once the application is approved, the IRS will issue an EIN confirmation letter that serves as official proof of your Federal Tax ID.',
              },
              {
                q: 'How long does it take to get an EIN number?',
                a: 'The time required to receive an EIN depends on how the application is submitted. If you apply using the IRS online system and are eligible to use it, your EIN is usually issued immediately after completing the application. Fax applications are typically processed within a few business days if you provide a return fax number. Applications sent by mail generally take several weeks to process due to IRS handling and processing times. Because of these differences, many business owners prefer applying online or using professional EIN filing services that help ensure the application is completed correctly and submitted without errors.',
              },
              {
                q: 'Can non-U.S. residents apply for an EIN?',
                a: 'Yes, non-U.S. residents can apply for an EIN in order to operate a business in the United States. Many international entrepreneurs obtain an EIN when they form a U.S. LLC or corporation so they can open a U.S. business bank account, process payments, and file taxes with the IRS. If the responsible party does not have a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN), the IRS online application system cannot be used. In these situations, applicants typically submit Form SS-4 by fax or mail or apply by phone through the IRS international EIN department. Although the process may take slightly longer than the online application, it is still possible for foreign business owners to successfully obtain an EIN.',
              },
              {
                q: 'What information is required to apply for a Federal Tax ID (EIN)?',
                a: 'When applying for an EIN, you must provide specific details about your business and the person responsible for the entity. This typically includes the legal name of the business, any trade name or DBA if applicable, the physical business address, and the type of business entity such as an LLC, corporation, partnership, or sole proprietorship. The IRS also requires information about the responsible party who manages or controls the business, including their full name and taxpayer identification number such as an SSN or ITIN. In addition, the application may ask for the date the business was started, the industry in which it operates, and the expected number of employees. Providing accurate information is important because incorrect details can delay processing or require corrections later.',
              },
              {
                q: 'Can I use my EIN immediately after receiving it?',
                a: 'Yes. Once the IRS issues your EIN, you can begin using it immediately for most business activities. This includes opening a business bank account, applying for business licenses, registering for state taxes, hiring employees, and filing federal tax returns. The EIN confirmation notice issued by the IRS serves as official documentation of your Federal Tax ID and should be saved for your business records. Although the EIN can be used right away, some financial institutions may take a short period of time to verify the number in their internal systems before allowing certain services such as loans or payment processing.',
              },
              {
                q: 'Is applying for an EIN free through the IRS?',
                a: 'Yes, applying for an EIN directly through the IRS is completely free. The IRS does not charge any government fee to issue a Federal Tax ID number. Business owners can submit the EIN application online, by fax, or by mail without paying for the number itself. However, many entrepreneurs choose to use professional EIN filing services or business formation providers because these services help simplify the process, ensure the application is filled out correctly, and provide support if any issues arise. While these services charge a convenience fee, the EIN itself is always issued by the IRS at no cost.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl p-6 group border-2 border-gray-200 hover:border-cyan-500 transition-all">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <svg className="w-6 h-6 text-cyan-500 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Apply for an EIN (Federal Tax ID) for{' '}
            <span className="text-cyan-900">Your Business</span>
          </h2>
          <p className="text-xl mb-10 text-cyan-100 leading-relaxed">
            Secure your Employer Identification Number (EIN) quickly and easily. Our guided application
            process helps you obtain your official IRS Federal Tax ID so you can open a business bank
            account, hire employees, file taxes, and legally operate your business in the United States.
          </p>
          <button
            onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
            className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-extrabold text-lg hover:bg-cyan-50 transition-all shadow-xl"
          >
            Start Your Application
          </button>
          <p className="mt-6 text-cyan-100 text-sm">Join thousands of businesses who trust us for their EIN needs</p>
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