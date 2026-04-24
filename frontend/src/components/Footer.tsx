import { Link } from 'react-router-dom';
import { useState } from 'react';
import CookieModal from './CookieModal';
 
export default function Footer() {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

  {/* BUSINESS FORMATION */}
  <div>
    <h3 className="text-white font-bold text-lg mb-6">Business Formation</h3>
    <ul className="space-y-3">
      <li><Link to="/llc" className="hover:text-cyan-500">LLC Formation</Link></li>
      <li><Link to="/c-corporation" className="hover:text-cyan-500">C Corporation</Link></li>
      <li><Link to="/s-corporation" className="hover:text-cyan-500">S Corporation</Link></li>
      <li><Link to="/nonprofit" className="hover:text-cyan-500">Nonprofit</Link></li>
      <li><Link to="/business-management/registered-agent" className="hover:text-cyan-500">Registered Agent</Link></li>
      <li><Link to="/business-formation/business-license-research-package" className="hover:text-cyan-500">Business License Search</Link></li>
    </ul>
  </div>
 
  {/* ABOUT US */}
  <div>
    <h3 className="text-white font-bold text-lg mb-6">About Us</h3>
    <ul className="space-y-3">
      <li><Link to="/about" className="hover:text-cyan-500">Why Choose Us</Link></li>
      <li><Link to="/company/about" className="hover:text-cyan-500">How It Works</Link></li>
      <li><Link to="/form-order-now" className="hover:text-cyan-500">Pricing</Link></li>
      <li><Link to="/partner-with-futureperfectglobal" className="hover:text-cyan-500">Partnerships</Link></li>
      <li><Link to="/affiliates" className="hover:text-cyan-500">Affiliates</Link></li>
    </ul>
  </div>

  {/* BUSINESS RESOURCES */}
  <div>
    <h3 className="text-white font-bold text-lg mb-6">Business Resources</h3>
    <ul className="space-y-3">
      <li><Link to="/articles" className="hover:text-cyan-500">Blog</Link></li>
      <li><Link to="/business-name-generator" className="hover:text-cyan-500">Business Name Generator</Link></li>
      <li><Link to="/business-name-search" className="hover:text-cyan-500">Business Name Search</Link></li>
      <li><Link to="/state-information-llc" className="hover:text-cyan-500">LLC State Guides</Link></li>
      <li><Link to="/state-information-corp" className="hover:text-cyan-500">Corp State Guides</Link></li>
    </ul>
  </div>

  {/* LEGAL POLICIES */}
  <div>
    <h3 className="text-white font-bold text-lg mb-6">Legal Policies</h3>
    <ul className="space-y-3">
      <li><Link to="/privacy-policy" className="hover:text-cyan-500">Privacy Policy</Link></li>
      <li><Link to="/terms" className="hover:text-cyan-500">Terms of Service</Link></li>
      <li><Link to="/glossary" className="hover:text-cyan-500">Glossary</Link></li>
      <li>
        <button
          onClick={() => setIsCookieModalOpen(true)}
          className="hover:text-cyan-500"
        >
          Cookies Policy
        </button>
      </li>
    </ul>
  </div>

  {/* CUSTOMER SUPPORT */}
  <div className="lg:pl-6">
    <h3 className="text-white font-bold text-lg mb-6">Customer Support</h3>

    <ul className="space-y-3 mb-6">
      <li><Link to="/contact" className="hover:text-cyan-500">Contact Us</Link></li>
      <li><Link to="/login" className="hover:text-cyan-500">Check Order Status</Link></li>
      <li><Link to="/help-center" className="hover:text-cyan-500">Help Center</Link></li>
    </ul>

    <div className="space-y-4 text-sm">
      <div>
        <div className="text-gray-400">Phone</div>
        <a href="tel:+85265537375" className="text-cyan-500 font-semibold">
          +858-952-4549
        </a>
      </div>

      <div>
        <div className="text-gray-400">Email</div>
        <a
          href="mailto:enquiry@thefutureperfectglobal.us"
          className="text-cyan-500 break-all"
        > 
          enquiry@thefutureperfectglobal.us
        </a>
      </div>
    </div>
  </div>

</div>

          {/* REVIEWS (CENTERED) */}
          <div className="border-t border-gray-800 pt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">Excellent 4.7 / 5</span>
              <span className="text-gray-400">(23,143 Reviews)</span>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5">
              {['instagram','facebook','twitter','linkedin','youtube'].map((s) => (
                <a
                  key={s}
                  href={`https://${s}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-500 transition"
                >
                  <i className={`fab fa-${s}`} />
                </a>
              ))}
            </div>
          </div>

          {/* CONNECT WITH US */}
<div className="text-center">
  <h3 className="text-white font-semibold text-lg mb-4">
    Connect With Us
  </h3>

  <div className="flex justify-center gap-6">
    
    {/* Facebook */}
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-cyan-500 transition"
      aria-label="Facebook"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22 12a10 10 0 10-11.5 9.95v-7.03H8.08V12h2.42V9.8c0-2.39 1.43-3.7 3.62-3.7 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.19 0-1.56.74-1.56 1.5V12h2.66l-.43 2.92h-2.23v7.03A10 10 0 0022 12z"/>
      </svg>
    </a>

    {/* Twitter */}
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-cyan-500 transition"
      aria-label="Twitter"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.15 12.15 0 013 4.79a4.28 4.28 0 001.32 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54 12.13 12.13 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0022.46 6z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-cyan-500 transition"
      aria-label="Instagram"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 7.4a2.9 2.9 0 112.9-2.9 2.9 2.9 0 01-2.9 2.9zM17.75 6.25a1 1 0 11-1-1 1 1 0 011 1z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-cyan-500 transition"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 8.98h3.96V21H3V8.98zM9.98 8.98H13.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V21h-3.96v-5.27c0-1.26-.03-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21H9.98V8.98z"/>
      </svg>
    </a>

  </div>
</div>

          {/* DISCLAIMER */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2025 Future Perfect Global. All Rights Reserved.</p>
            <p className="mt-2 text-xs">
              Future Perfect Global is not a law firm and does not provide legal advice.
              Services are provided by third-party partners.
            </p>
          </div>

        </div>
      </footer>
              {/* FLOATING ACTION BUTTONS */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

  {/* WhatsApp Button – Visible on all devices */}
  <a
    href="https://wa.me/85265537375"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
    aria-label="Chat on WhatsApp"
  >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.257.59 4.38 1.62 6.228L3.2 28.8l6.78-1.587a12.76 12.76 0 0 0 6.023 1.523h.002c7.07 0 12.8-5.73 12.8-12.8S23.073 3.2 16.003 3.2zm0 22.87a10.03 10.03 0 0 1-5.11-1.397l-.366-.215-4.022.942.955-3.918-.238-.403a10.07 10.07 0 1 1 8.78 4.99zm5.518-7.518c-.302-.15-1.788-.882-2.065-.982-.277-.1-.479-.15-.68.15-.202.302-.781.982-.958 1.183-.176.2-.352.226-.654.075-.302-.15-1.274-.469-2.427-1.496-.896-.798-1.5-1.784-1.676-2.086-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.529.15-.176.202-.302.302-.503.1-.2.05-.377-.025-.529-.075-.15-.68-1.637-.932-2.242-.246-.592-.497-.512-.68-.522l-.579-.01c-.201 0-.529.075-.806.377-.277.302-1.058 1.033-1.058 2.52 0 1.486 1.083 2.924 1.234 3.126.15.201 2.132 3.256 5.166 4.566.722.311 1.285.497 1.724.637.724.23 1.382.198 1.902.12.58-.087 1.788-.731 2.04-1.437.252-.706.252-1.31.176-1.437-.075-.126-.277-.201-.579-.352z" />
</svg>

  </a>

  {/* Call Button – Mobile only */}
  <a
    href="tel:+85265537375"
    className="flex md:hidden items-center justify-center w-14 h-14 rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-600 transition"
    aria-label="Call Now"
  >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M2.25 6.75c0 7.18 5.82 13 13 13h1.5a2.25 2.25 0 002.25-2.25v-2.41a2.25 2.25 0 00-1.74-2.19l-3.02-.76a2.25 2.25 0 00-2.48 1.03l-.45.67a11.52 11.52 0 01-5.3-5.3l.67-.45a2.25 2.25 0 001.03-2.48l-.76-3.02A2.25 2.25 0 004.66 2.25H2.25A2.25 2.25 0 000 4.5v2.25z" />
</svg>

  </a>

</div>


      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />
    </>
  );
}
