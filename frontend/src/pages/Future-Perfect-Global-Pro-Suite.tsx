import { Shield, FileText, Users, Clock, CheckCircle, Building2, Award, Zap, HeadphonesIcon, Headphones } from 'lucide-react';

 export default function FuturePerfectGlobalProSuite() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-cyan-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                For CPAs & Attorneys
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
                Enable LLC formations with zero extra work
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We work quietly in the background, managing filings and support, so your firm can focus on serving clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-700 transition-colors text-lg flex items-center justify-center">
                  Join Now It's Free
                  <Zap className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-bold hover:border-gray-400 transition-colors text-lg">
                  Schedule A Demo
                </button>
              </div>
              <p className="text-sm text-gray-500 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Response within 2 business days or less
              </p>
            </div>
            <div className="relative">
                <img
                    src="https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da"
                    alt="LLC formation dashboard illustration"
                    className="w-full rounded-2xl shadow-2xl object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">What's Included in Every Formation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive LLC formation bundle with everything your clients need to get started
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Articles of Organization</h3>
              <p className="text-gray-600">Professional filing of formation documents</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">EIN Application</h3>
              <p className="text-gray-600">Federal tax ID submission handled</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Operating Agreement</h3>
              <p className="text-gray-600">Complete operating agreement included</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expedited Filing</h3>
              <p className="text-gray-600">Fast-track state filing process</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">S-Corp Election</h3>
              <p className="text-gray-600">Optional S-Corp status filing</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Registered Agent</h3>
              <p className="text-gray-600">FREE first year service included</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Alerts</h3>
              <p className="text-gray-600">Lifetime reminder notifications</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">50-State Support</h3>
              <p className="text-gray-600">Nationwide formation coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Focus on Clients, We Handle the Rest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform advantages that let you concentrate on what matters most
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No Training Required</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Intuitive platform with no software training needed. Start offering services immediately with dashboard access for client management.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <HeadphonesIcon className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Background Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We handle all filings and customer support in the background while you focus on building client relationships.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Building2 className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Full service menu including registered agents, annual reports, amendments, dissolutions, and more across all states.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Your Brand, Your Way</h3>
                  <p className="text-gray-600 leading-relaxed">
                    White-label solution that operates entirely under your firm's brand, maintaining your professional identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">No Upfront Costs, Ever</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with zero financial commitment to get started
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Membership</h3>
              <p className="text-gray-600">Activation with no upfront payment required</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Monthly Fees</h3>
              <p className="text-gray-600">Zero subscription costs or recurring charges</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pay Per Formation</h3>
              <p className="text-gray-600">Simple pricing only when LLC forms</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold text-gray-900">No hidden fees.</span> Clear, predictable costs.
              </p>
              <p className="text-gray-600">
                You only pay when your clients form an LLC through the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Additional Services Available</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of business services to support your clients throughout their journey
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Registered Agent Renewal</h3>
              <p className="text-sm text-gray-600">Ongoing compliance representation</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">EIN / Tax ID Services</h3>
              <p className="text-sm text-gray-600">Federal identification numbers</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Annual Reports</h3>
              <p className="text-sm text-gray-600">State compliance filing support</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Business Amendments</h3>
              <p className="text-sm text-gray-600">Entity modification services</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Foreign Qualifications</h3>
              <p className="text-sm text-gray-600">Multi-state registration support</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Business License Research</h3>
              <p className="text-sm text-gray-600">Local licensing requirements</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Trademark Registration</h3>
              <p className="text-sm text-gray-600">Brand protection services</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Virtual Addresses</h3>
              <p className="text-sm text-gray-600">Professional business addresses</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-cyan-400 hover:border-cyan-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Dissolution Services</h3>
              <p className="text-sm text-gray-600">Entity closure assistance</p>
            </div>
          </div>
        </div>
      </section>

        <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Eyebrow */}
    <p className="text-cyan-600 font-semibold tracking-wide uppercase mb-4">
      Contact
    </p>

    {/* Heading */}
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
      Ready to Get Started?
    </h2>

    {/* Card */}
    <div className="bg-gray-50 rounded-3xl border border-gray-200 px-8 py-16 max-w-4xl mx-auto">
      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-cyan-100">
        <Headphones className="w-7 h-7 text-cyan-600" />
      </div>

      {/* Card Heading */}
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Have More Questions?
        <br />
        Our team’s here to help.
      </h3>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Whether you’re curious about features, pricing, or how The Future Perfect Global Pro fits
        into your workflow, our team can walk you through it.
      </p>

      {/* CTA Button */}
      <button className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors shadow-md">
        Schedule a Quick Call
      </button>
    </div>
  </div>
</section>

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-slate-600 border border-gray-200 rounded-3xl px-8 py-20 text-center">
      
      {/* Eyebrow */}
      <p className="text-white font-semibold tracking-wide uppercase mb-4">
        Form
      </p>

      {/* Main Heading */}
      <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
        Become a Future Perfect Global Pro Today! 
        Start Offering LLC Formations With Zero Overhead.
      </h2>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
        Fill out the form to activate your free The Future Perfect Global Pro account. There’s no
        cost to join, no membership fees, and no subscription—just $99 (+state
        fees) when you file for a client. You’ll hear back from our team within
        2 business days or less.
      </p>

      {/* Highlight Pill */}
      <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm sm:text-base">
        It’s fast, free, and built for professionals.
      </div>

    </div>
  </div>
</section>


    </div>
  );
}
