import { useParams, Link } from 'react-router-dom';
import { industries } from '../data/industries';

export default function IndustryGuide() {
  const { industry } = useParams();
  const industryData = industries.find(i => i.slug === industry);

  if (!industryData) {
    return <div className="py-20 text-center">Industry not found</div>;
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">{industryData.icon}</div>
            <h1 className="text-6xl font-black mb-6">How to Start a {industryData.name}</h1>
            <p className="text-2xl mb-8 text-cyan-100">Complete guide to launching your {industryData.name.toLowerCase()} in 2025</p>
            <Link
              to="/llc"
              className="inline-block bg-white text-cyan-600 px-12 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
            >
              START YOUR BUSINESS NOW
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-8">Step-by-Step Guide</h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black">1</div>
                <h3 className="text-2xl font-black text-gray-900">Choose Your Business Structure</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Most {industryData.name.toLowerCase()}s choose an LLC for liability protection and tax flexibility.
                An LLC protects your personal assets and is easy to maintain.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black">2</div>
                <h3 className="text-2xl font-black text-gray-900">Register Your Business Name</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Choose a unique, memorable name for your {industryData.name.toLowerCase()} and verify it's available
                in your state. We'll handle all the registration paperwork for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black">3</div>
                <h3 className="text-2xl font-black text-gray-900">Get Your EIN</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Obtain an Employer Identification Number (EIN) from the IRS. This is required to hire employees,
                open a business bank account, and file taxes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black">4</div>
                <h3 className="text-2xl font-black text-gray-900">Obtain Licenses & Permits</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Research and obtain all necessary licenses and permits for your {industryData.name.toLowerCase()}.
                Requirements vary by location and industry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black">5</div>
                <h3 className="text-2xl font-black text-gray-900">Open a Business Bank Account</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Separate your personal and business finances by opening a dedicated business bank account.
                This simplifies accounting and protects your limited liability status.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 border-4 border-cyan-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black">6</div>
                <h3 className="text-2xl font-black text-gray-900">Launch & Grow Your Business</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                With everything in place, you're ready to launch your {industryData.name.toLowerCase()} and start
                serving customers. Focus on marketing, customer service, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Start Your {industryData.name}?</h2>
          <p className="text-xl mb-10 text-gray-300">We'll handle all the paperwork so you can focus on building your business.</p>
          <Link
            to="/llc"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-5 rounded-full text-xl font-black hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-2xl transform hover:scale-105"
          >
            GET STARTED TODAY
          </Link>
        </div>
      </section>
    </div>
  );
}
