import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import { FileText, Receipt, Building2, UserCheck, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useState } from "react";
 
export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col">
      <Helmet>
  {/* Title */}
  <title>Contact Us – USA Business Setup & LLC Registration | The Future Perfect Global</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Contact The Future Perfect Global for USA business setup, LLC formation, EIN registration, incorporation services, and compliance support. Get expert consultation today."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/contact"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/contact"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/contact"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Contact Us – USA Business Setup & LLC Formation Experts"
  />
  <meta
    property="og:description"
    content="Get in touch with The Future Perfect Global for professional USA business setup, LLC registration, EIN application, and compliance services."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/contact"
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
    content="The Future Perfect Global USA Business Setup"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Contact Us – USA Business Setup & LLC Formation"
  />
  <meta
    name="twitter:description"
    content="Reach out to The Future Perfect Global for expert guidance on USA company formation, LLC registration, and compliance support."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact The Future Perfect Global – USA Business Setup",
      "url": "https://us.thefutureperfectglobal.com/contact",
      "description": "Contact page for The Future Perfect Global offering USA business setup, LLC formation, EIN registration, and compliance services.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global – USA Business Setup",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        }
      }
    }`}
  </script>
</Helmet>

      <section className="relative overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=compress&cs=tinysrgb&w=1920"
          alt="Real estate background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Contact <span className="text-cyan-400">Us</span>
          </h1>

          <p className="text-2xl sm:text-2xl text-gray-300 mb-10">
            Helping over <span className="font-semibold text-white">500+ entrepreneurs</span> launch and grow successful businesses since 2004.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/30">
              Get Started
            </button>
          </div>

          {/* Availability */}
          <p className="text-sm text-gray-500 mt-8">
            Available Monday–Friday, 9:00 AM – 6:00 PM (EST)
          </p>
        </div>
      </div>
    </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Existing Client Resources
            </h2>
            <p className="text-lg text-gray-600">
              Quick access to your business documents and information
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                  <FileText className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  View Business Documents
                </h3>
                <p className="text-sm text-gray-600">
                  Access your formation documents and business files
                </p>
              </div>
            </a>

            <a
              href="#"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                  <Receipt className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Receipts & Order History
                </h3>
                <p className="text-sm text-gray-600">
                  View your past orders and download receipts
                </p>
              </div>
            </a>

            <a
              href="#"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                  <Building2 className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  EIN Information
                </h3>
                <p className="text-sm text-gray-600">
                  Retrieve your Employer Identification Number
                </p>
              </div>
            </a>

            <a
              href="#"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                  <UserCheck className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Registered Agent Details
                </h3>
                <p className="text-sm text-gray-600">
                  Check your registered agent information
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Get in Touch With Our US Business Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to us for LLC formation, EIN applications, registered agent services,
              and ongoing US business compliance support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <ul className="space-y-5 text-gray-700">
                <li>
                  <span className="block font-semibold text-gray-900">Company Name</span>
                  The Future Perfect Global USA
                </li>

                <li>
                  <span className="block font-semibold text-gray-900">Office Address</span>
                  123 Business Avenue, Suite 456,<br />
                  New York, NY, United States
                </li>

                <li>
                  <span className="block font-semibold text-gray-900">Phone Number</span>
                  +852 6553 7375
                </li>

                <li>
                  <span className="block font-semibold text-gray-900">Email Address</span>
                  neelesh@thefutureperfectglobal.com
                </li>

                <li>
                  <span className="block font-semibold text-gray-900">Office Hours</span>
                  Monday – Friday: 9:00 AM – 6:00 PM (EST)
                </li>

                <li>
                  <span className="block font-semibold text-gray-900">Website</span>
                  <a
                    href="https://us.thefutureperfectglobal.com"
                    className="text-cyan-500 font-medium hover:underline"
                  >
                    us.thefutureperfectglobal.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-200">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                    required
                  >
                    <option value="">Select a service</option>
                    <option>LLC Formation</option>
                    <option>EIN Application</option>
                    <option>Registered Agent Services</option>
                    <option>US Business Compliance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business requirements..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-start gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
                      required
                    />
                    <span>
                      I agree to the{' '}
                      <a href="#" className="text-cyan-500 hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-cyan-500 hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="bg-cyan-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 transition shadow-lg"
                  >
                    Submit Your Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-3">
              Follow Us on Social Media
            </h2>
            <p className="text-lg text-gray-600">
              Stay connected with us for updates, tips, and business insights
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <a
              href="#"
              className="group w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="group w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="group w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="group w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="group w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="font-bold text-gray-900">Legal Disclaimer:</strong>{' '}
              The Future Perfect Global USA is NOT a law firm and does NOT provide legal advice.
              We provide business formation and compliance services. For legal matters, please consult
              with a licensed attorney in your jurisdiction.
            </p>
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


