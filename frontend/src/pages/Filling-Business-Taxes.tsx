import { FileText, Shield, TrendingDown, Calendar, CheckCircle, Users, Building2, Briefcase, Calculator, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';

export default function FillingBusinessTaxes() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-cyan-100/50 py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
        Filing Business Taxes
      </h1>

      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        At The Future Perfect Global, we provide streamlined, expert solutions to help you form your
        company with ease and confidence. From comprehensive guidance to
        transparent pricing, we ensure your entrepreneurial journey starts on
        solid ground.
      </p>

      <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-gradient-to-r from-cyan-500 to-red-500 text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition">
        FIND OUT MORE
      </button>
    </div>

    {/* RIGHT IMAGE SHAPE */}
    <div className="relative">
      <div className="absolute inset-0 rounded-[45px] rotate-2 bg-gradient-to-r from-cyan-500 to-red-500 opacity-90"></div>

      <img
  src="https://images.pexels.com/photos/7821683/pexels-photo-7821683.jpeg"
  alt="Business tax planning and finance reports"
  className="relative z-10 w-full rounded-[40px] -rotate-2 object-cover shadow-2xl"
/>
    </div>

  </div>
</section>


      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Different Types of Business Taxes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              IRS requirements for small business taxes can be more or less complex, depending on the type of business entity.
              Filing requirements vary significantly based on your chosen business structure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LLC Taxes</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Limited Liability Companies function as pass-through entities where profits pass directly to owners' personal returns.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Required Filings:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Form 1065 (Partnership Return of Income)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Schedule K-1 (per each member)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500 bg-blue-50 p-4 rounded-lg">
                  Single-member LLCs report income on Schedule C and are taxed as sole proprietorships unless otherwise elected.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingDown className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">S Corporation Taxes</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                S Corps can provide tax advantages by reducing self-employment tax liability.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Required Filings:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Form 8832 (Entity Classification Election)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Form 1120S (Corporation Income Tax Return)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Form 1120-A (shortened version)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500 bg-cyan-50 p-4 rounded-lg">
                  Owners can pay themselves salaries (subject to self-employment taxes) plus distributions (not subject to self-employment taxes).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">C Corporation Taxes</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                C Corporations must pay corporate income tax, creating "double taxation" where both the company and owners pay taxes.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Required Filings:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Form 1120 (Corporation Income Tax Return)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Form 1040 (owner personal returns)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-cyan-50 rounded-2xl p-12 border-2 border-amber-200">
            <div className="flex items-start gap-6">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Tax Return Due Dates</h2>
                <p className="text-xl text-gray-700 mb-4">
                  <span className="font-bold text-amber-700">September 15, 2024</span> applies to:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    C Corporations
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Partnerships
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    S Corporations
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Single-member LLCs with activity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-cyan-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5 text-cyan-700" />
              <span className="text-cyan-700 font-semibold">Transparent Pricing</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Professional Tax Preparation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guidance at competitive rates. Get 15% combined discount when bundling business and personal returns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-cyan-500 transition-all duration-300">
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Tax Return</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$599</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Complete business tax return preparation for all entity types including LLCs, S Corps, and C Corps.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300">
              <div className="text-center">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zero-Income Tax Return</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$299</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  For businesses with no income activity during the tax year. Simplified filing process.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300">
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personal 1040 Return</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$299</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Individual tax return preparation. Bundle with business return for 15% discount on both.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold">
              <AlertCircle className="w-5 h-5" />
              Save 15% when bundling business and personal returns
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Key Benefits of Professional Tax Preparation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate complex tax requirements with expert support and maximize your deductions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FileText className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reduces Complexity</h3>
              <p className="text-sm text-gray-600">
                Navigate multiple forms and filing requirements with expert guidance
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Minimizes Errors</h3>
              <p className="text-sm text-gray-600">
                Professional review ensures accuracy and reduces filing mistakes
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <TrendingDown className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Identifies Deductions</h3>
              <p className="text-sm text-gray-600">
                Discover eligible deductions and credits to reduce tax liability
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Audit Protection</h3>
              <p className="text-sm text-gray-600">
                Expert preparation protects against IRS audit consequences
              </p>
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
