import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { Shield, FileText, DollarSign, Users, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

export default function FormAnLLC() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: 'Name Your LLC',
      description: 'Choose a distinctive name with "LLC" or "Limited Company" designator. Your LLC name should be unique and comply with your state\'s requirements.',
      content: (
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
            <span>Check state requirements and availability</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
            <span>Use our Business Name Search tool to verify availability</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
            <span>Try our Name Generator if you need inspiration</span>
          </li>
        </ul>
      ),
    },
    {
      number: 2,
      title: 'Provide an Address',
      description: 'Your LLC needs a physical address for official correspondence. Options include your home address, a rented office, or a virtual address.',
      content: (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-900 mb-1">Pro Tip:</p>
          <p className="text-sm text-blue-800">
            A virtual address offers privacy and flexible mail management. Note: Some states don't accept P.O. boxes.
          </p>
        </div>
      ),
    },
    {
      number: 3,
      title: 'Assign a Registered Agent',
      description: 'A registered agent serves as your LLC\'s legal point of contact with the state. This person or professional service receives important legal and tax documents on your behalf.',
      content: (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-green-900 mb-1">Value Add:</p>
          <p className="text-sm text-green-800">
            One year of free registered agent service included with our formation packages!
          </p>
        </div>
      ),
    },
    {
      number: 4,
      title: 'Provide LLC Member Names and Addresses',
      description: 'Submit information for all LLC members to the state. Depending on your state, you can use street addresses or P.O. boxes for member information.',
      content: null,
    },
    {
      number: 5,
      title: 'State Business Purpose',
      description: 'Define what your LLC will do. You can use a specific description or a broad "any lawful purpose" statement, which allows flexibility for future business expansion.',
      content: (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-purple-900 mb-1">Recommendation:</p>
          <p className="text-sm text-purple-800">
            Keep it simple for faster processing and maximum flexibility.
          </p>
        </div>
      ),
    },
    {
      number: 6,
      title: 'File Articles of Organization',
      description: 'This final step officially creates your LLC. Filing can be done online or by mail, depending on your state\'s requirements.',
      content: (
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-cyan-900 mb-1">Service Highlight:</p>
          <p className="text-sm text-cyan-800">
            The Future Perfect Global handles all the paperwork and filing for you, ensuring everything is done correctly.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white">
      
      <section className="relative bg-cyan-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Form an LLC: Don't Wait to Get Legal and Tax Benefits
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Starting an LLC is a significant step in your entrepreneurial journey, and we're here to guide you through each stage.
              </p>
              <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }} className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-700 font-medium">
                  Bootstrapped, Founder Led, Independently Owned Since 2004 with Over <span className="text-cyan-500 font-extrabold">500</span> Entrepreneurs Served!
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-8 shadow-2xl transform rotate-2">
                <div className="bg-white rounded-xl p-8 transform -rotate-2">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <FileText className="w-12 h-12 text-cyan-500" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-2">ACME INC</h3>
                    <p className="text-lg text-gray-600 font-medium">LLC Formation</p>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <CheckCircle className="w-6 h-6 fill-green-600" />
                        <span className="font-semibold">Approved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              6 Easy Steps to Form Your LLC
            </h2>
            <p className="text-lg text-gray-600">
              Follow our simple process to establish your business legally and efficiently
            </p>
          </div>

          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.number} className="border border-gray-200 rounded-lg overflow-hidden hover:border-cyan-300 transition-colors">
                <button
                  onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      {expandedStep !== step.number && (
                        <p className="text-gray-600 text-sm line-clamp-1">{step.description}</p>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedStep === step.number ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedStep === step.number && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    {step.content && (
                      <div className="mt-4">
                        {step.content}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Benefits of Forming an LLC
            </h2>
            <p className="text-lg text-gray-600">
              Discover the advantages that come with establishing your business as an LLC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Liability Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Safeguard your personal assets from business liabilities and legal claims.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Simplified Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy fewer regulations and reporting requirements than other business types.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Tax Flexibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Benefit from pass-through taxation, reporting profits on personal tax returns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Ease of Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Operate with less formality and administrative burden than corporations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              LLC Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Staying compliant requires periodic reports, annual fees, and tax obligations. Requirements vary by state, so it's essential to understand your specific obligations.
            </p>
            <a href="/annual-report" className="text-cyan-500 hover:text-cyan-600 font-semibold inline-flex items-center gap-2 transition-colors">
              View State-Specific Requirements
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-cyan-500 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Start Your LLC?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
            Join over 500 entrepreneurs who trust us to help launch and grow their businesses.
          </p>
          <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }} className="bg-white hover:bg-gray-100 text-cyan-500 px-10 py-4 rounded-lg font-extrabold text-lg transition-colors shadow-lg inline-flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-6 h-6" />
          </button>
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
