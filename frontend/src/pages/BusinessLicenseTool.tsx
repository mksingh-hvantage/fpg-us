import { useState } from 'react';
import { FileCheck, Search, MapPin, Briefcase } from 'lucide-react';
import { US_STATES } from '../data/usStates';

const INDUSTRIES = [
  'Restaurant & Food Service',
  'Retail & E-commerce',
  'Professional Services',
  'Healthcare',
  'Construction & Contracting',
  'Real Estate',
  'Beauty & Personal Care',
  'Home Services',
  'Transportation',
  'Manufacturing',
  'Technology & IT',
  'Other'
];

export default function BusinessLicenseTool() {
  const [formData, setFormData] = useState({
    state: '',
    industry: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="flex-1">
        <section className="bg-cyan-100/50 py-12 px-14 sm:px-16 lg:px-20 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="text-left">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Does Your Business Need a License?
        </h2>
        <p className="text-xl text-gray-800 mb-6">
          Most businesses require at least one license or permit to operate legally.
        </p>
        <p className="text-gray-600 max-w-xl">
          Use our smart tool to instantly discover which licenses and permits apply
          to your business based on your state and industry. Avoid fines, delays,
          and compliance issues before you launch.
        </p>
      </div>

      {/* RIGHT FORM / RESULT */}
      <div>
        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* State */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State of Formation
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a state</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select an industry</option>
                    {INDUSTRIES.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Search className="w-5 h-5" />
                Find Required Licenses
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-4">
              We've received your information for <strong>{formData.industry}</strong> in{" "}
              <strong>{formData.state}</strong>.
            </p>
            <p className="text-sm text-gray-500">
              Check your email at <strong>{formData.email}</strong>.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Start Another Search
            </button>
          </div>
        )}
      </div>

    </div>
  </div>
</section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE WITH VIDEO ICON */}
      <div className="relative cursor-pointer" onClick={() => setOpenVideo(true)}>
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
            alt="Business owner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-black/70 rounded-full flex items-center justify-center hover:scale-110 transition">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* angled white cut */}
        <div className="absolute top-0 right-0 h-full w-24 bg-white skew-x-[-12deg] origin-top-right hidden lg:block" />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Find out what licenses and permits you may need for your new business.
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Whether you’re starting a home-based business or running a startup with
          multiple employees, it’s important to meet all legal requirements at
          federal, state, and local levels.
        </p>

        <ul className="space-y-4 text-gray-600 max-w-xl">
          <li><strong className="text-gray-900">Location:</strong> Federal, state & local rules</li>
          <li><strong className="text-gray-900">Industry:</strong> Specialized permits</li>
          <li><strong className="text-gray-900">Business type:</strong> LLC, Corp, Sole prop</li>
          <li><strong className="text-gray-900">Products & services:</strong> Define licensing needs</li>
        </ul>
      </div>

    </div>
  </div>

  {/* VIDEO MODAL */}
  {openVideo && (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
      <div className="relative bg-black rounded-xl w-full max-w-4xl">
        
        {/* Close */}
        <button
          onClick={() => setOpenVideo(false)}
          className="absolute -top-10 right-0 text-white text-xl"
        >
          ✕ Close
        </button>

        {/* Video */}
        <video
          src="https://www.goldentravelshk.com/v1.mp4"
          controls
          autoPlay
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  )}
</section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-100/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
              Common License Types
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">General Business License</h3>
                <p className="text-gray-600">
                  Required by most cities and counties to operate any business within their jurisdiction.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional License</h3>
                <p className="text-gray-600">
                  Industry-specific licenses for regulated professions like healthcare, law, or accounting.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zoning Permit</h3>
                <p className="text-gray-600">
                  Ensures your business location is approved for your type of commercial activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
      Related Articles
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Article 1 */}
      <article className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
        <span className="text-sm font-semibold text-cyan-600 mb-2">
          Business Compliance
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          How to Get a Business License in the U.S.
        </h3>
        <p className="text-gray-600 mb-6 flex-1">
          Learn the complete step-by-step process for obtaining a business license,
          including costs, timelines, and requirements.
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:text-blue-700"
        >
          Read More →
        </a>
      </article>

      {/* Article 2 */}
      <article className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
        <span className="text-sm font-semibold text-cyan-600 mb-2">
          Startup Guide
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Licenses & Permits Required by Industry
        </h3>
        <p className="text-gray-600 mb-6 flex-1">
          Discover which licenses are mandatory for industries like restaurants,
          healthcare, construction, and e-commerce.
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:text-blue-700"
        >
          Read More →
        </a>
      </article>

      {/* Article 3 */}
      <article className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
        <span className="text-sm font-semibold text-cyan-600 mb-2">
          Legal & Tax
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          What Happens If You Operate Without a License?
        </h3>
        <p className="text-gray-600 mb-6 flex-1">
          Understand the penalties, fines, and legal risks of running a business
          without proper licenses or permits.
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:text-blue-700"
        >
          Read More →
        </a>
      </article>

    </div>
  </div>
</section>

      </main>

      
    </div>
  );
}
