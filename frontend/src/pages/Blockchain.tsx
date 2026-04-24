import { useState } from 'react'; 
import GetStartedModal from '../components/GetStartedModal';
import { Check, X, Database, Shield, Network, Lock, FileText, Stethoscope, Building2, Package, FileCheck, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

export default function Blockchain() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="bg-white">
      
<section className="relative bg-[#0b0f19] text-white py-16 overflow-hidden">

  {/* Gradient Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
    <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-6 text-center">

    {/* Top Label */}
    <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur px-4 py-2 rounded-full text-sm text-white/80 mb-6">
      <Sparkles className="w-4 h-4 text-cyan-400" />
      Blockchain Startup Guide
    </div>

    {/* Headline */}
    <h1 className="text-5xl font-extrabold leading-tight mb-6 tracking-tight">
      Build a <span className="text-cyan-400">Blockchain Business</span><br />
      That Scales Globally
    </h1>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
      From legal setup to technology infrastructure, get a complete roadmap to launch, 
      operate, and scale a secure blockchain-based business.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

      <button
        onClick={() => {
          setSelectedBusinessType('');
          setIsModalOpen(true);
        }}
        className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/30"
      >
        Get Started
        <ArrowRight className="w-5 h-5" />
      </button>

      <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-lg font-medium transition">
        Learn More
      </button>

    </div>

    {/* Trust Indicators */}
    <div className="mt-12 flex justify-center gap-10 text-white/50 text-sm">
      <span>Secure & Compliant</span>
      <span>Global Ready</span>
      <span>Expert Guidance</span>
    </div>

  </div>
</section>

        <section className="py-16 border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center max-w-5xl mx-auto mb-16">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Blockchain Technology Explained for Modern Businesses
      </h2>
      <p className="text-lg text-gray-600">
        Blockchain technology is a decentralized digital ledger that securely records transactions across multiple systems, ensuring transparency, security, and data integrity for modern businesses.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Digitized */}
      <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-100">
        <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <Database className="w-7 h-7 text-cyan-600" />
        </div>
        <h3 className="text-xl font-bold text-cyan-600 mb-3">Digitized Infrastructure</h3>
        <p className="text-gray-600 leading-relaxed">
          Blockchain operates entirely on digital networks, enabling real-time data access, seamless integration, and efficient global transactions without physical limitations.
        </p>
      </div>

      {/* Decentralized */}
      <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
        <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <Network className="w-7 h-7 text-cyan-600" />
        </div>
        <h3 className="text-xl font-bold text-cyan-600 mb-3">Decentralized Network</h3>
        <p className="text-gray-600 leading-relaxed">
          Instead of relying on a central authority, blockchain distributes control across multiple nodes, increasing transparency, reliability, and system resilience.
        </p>
      </div>

      {/* Verifiable */}
      <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
        <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <Shield className="w-7 h-7 text-cyan-600" />
        </div>
        <h3 className="text-xl font-bold text-cyan-600 mb-3">Secure & Verifiable</h3>
        <p className="text-gray-600 leading-relaxed">
          Each transaction is validated through consensus mechanisms, ensuring accuracy, preventing fraud, and maintaining trust across all participants.
        </p>
      </div>

      {/* Immutable */}
      <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-100">
        <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <Lock className="w-7 h-7 text-cyan-600" />
        </div>
        <h3 className="text-xl font-bold text-cyan-600 mb-3">Immutable Records</h3>
        <p className="text-gray-600 leading-relaxed">
          Once recorded, data cannot be altered or deleted. This immutability ensures a permanent and auditable history of all transactions.
        </p>
      </div>

      {/* Ledger */}
      <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-100 md:col-span-2 lg:col-span-1">
        <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <FileText className="w-7 h-7 text-cyan-600" />
        </div>
        <h3 className="text-xl font-bold text-cyan-600 mb-3">Distributed Ledger System</h3>
        <p className="text-gray-600 leading-relaxed">
          Blockchain acts as a shared ledger that records all transactions across a network, providing full transparency and traceability for business operations.
        </p>
      </div>

    </div>
  </div>
</section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
          <div className="bg-cyan-100/50 rounded-3xl p-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Is Blockchain Right for Your Startup?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Blockchain technology may be ideal for your business if you meet these criteria:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Management Focus</h4>
                  <p className="text-gray-600">Your company manages, stores, or provides access to valuable data and information</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Verification Needs</h4>
                  <p className="text-gray-600">You require robust systems to verify, audit, and validate data integrity</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Sharing</h4>
                  <p className="text-gray-600">Your business model involves sharing data securely with external parties</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Superior Solution</h4>
                  <p className="text-gray-600">Blockchain offers advantages over traditional custom database solutions for your use case</p>
                </div>
              </div>
            </div>
          </div></div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
            Weighing the Pros and Cons
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-10 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Key Advantages</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lightning-fast data distribution across all authorized participants</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enhanced security with transparent and accessible application architecture</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive audit trails that verify every transaction independently</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Strong market interest from investors seeking innovative tech solutions</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Growing community of developers and expanding framework ecosystem</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-10 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-red-600 p-2 rounded-lg">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Important Challenges</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Alternative solutions might be more cost-effective for your specific needs</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Distributed application technology is still in early development stages</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Requires complete business model restructuring around blockchain architecture</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Limited adoption rates among stakeholders may hinder implementation</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Performance lags behind traditional software in certain applications</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">High development costs due to scarcity of skilled blockchain developers</span>
                </li>
              </ul>
            </div>
          </div></div>
        </section>

        <section className="py-16 bg-cyan-100/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Industries Primed for Blockchain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These sectors are experiencing remarkable transformation through blockchain implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 hover:border-cyan-400 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600">
                Secure medical records management, diagnostic data sharing, and patient history verification
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate</h3>
              <p className="text-gray-600">
                Property listing management, transaction processing, and ownership record maintenance
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 hover:border-cyan-400 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain</h3>
              <p className="text-gray-600">
                Raw material tracking, documentation management, and complete logistics transparency
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 hover:border-purple-400 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance</h3>
              <p className="text-gray-600">
                Policy administration, claims processing automation, and fraud prevention systems
              </p>
            </div>
          </div>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-extrabold mb-8">
              Your Blockchain Implementation Roadmap
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Identify Specific Use Cases</h4>
                  <p className="text-cyan-100">
                    Define precisely how blockchain will integrate within your operations and solve existing challenges
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Budget for Implementation Costs</h4>
                  <p className="text-cyan-100">
                    Incorporate blockchain development and maintenance expenses into your comprehensive business financial projections
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Choose Your Framework</h4>
                  <p className="text-cyan-100">
                    Select the blockchain framework that best aligns with your technical requirements and business objectives
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Build with User Feedback</h4>
                  <p className="text-cyan-100">
                    Develop applications iteratively while continuously gathering and incorporating stakeholder input
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Validate Your Solution</h4>
                  <p className="text-cyan-100">
                    Confirm that blockchain remains the optimal technology choice compared to alternative approaches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-10">
            <div className="flex gap-4 mb-6">
              <div className="bg-amber-500 p-3 rounded-xl flex-shrink-0">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Important Advisory: Cryptocurrency Ventures
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We strongly advise caution when considering cryptocurrency-focused business models. Cryptocurrencies face significant challenges including speculative valuations with limited intrinsic value and increasingly stringent regulatory oversight from the SEC and international financial authorities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Instead, focus on practical blockchain applications that solve real business problems in established industries. These non-cryptocurrency implementations offer more stable business opportunities with clearer regulatory frameworks and demonstrated market demand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center border-t border-gray-100 bg-slate-800">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Ready to Launch Your Blockchain Business?
          </h2>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Start your business formation process today with professional guidance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2">
              Start Your Business — $0 + State Fee
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-10 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
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
