import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { Check, ChevronDown, X, Minus } from 'lucide-react';
import api from '../services/api';
import { useOrder } from '../contexts/OrderContext';
import type { Package } from '../types/order';

interface StateData {
  id: string;
  name: string;
  slug: string;
  filingFee: string;
  processingTime: string;
  annualReportFee: string;
  description: string;
}

const entityTypes = ['LLC', 'S-Corporation', 'C-Corporation', 'Nonprofit'];

const faqs = [
  {
    question: "How much does it cost to start an LLC in the United States?",
    answer: "The cost to start an LLC in the USA depends on the state where you form your business. State filing fees typically range from $50 to $500. The total LLC formation cost may also include services like document preparation, registered agent service, and EIN application depending on the package you choose."
  },
  {
    question: "What are the requirements to start an LLC in the USA?",
    answer: "To start an LLC in the United States, you generally need to choose a unique business name, appoint a registered agent for your LLC, file Articles of Organization, and pay the required state filing fee. Some states may also require additional reports or business licenses depending on your industry."
  },
  {
    question: "How long does it take to form an LLC in the United States?",
    answer: "The time required for LLC formation in the US depends on the state and the filing method. Standard processing usually takes 1–4 weeks, while expedited services in many states can reduce the time to just a few business days."
  },
  {
    question: "Do I need a registered agent for my LLC?",
    answer: "Yes, every business must have a registered agent for an LLC in the state where it is formed. A registered agent receives legal notices, tax documents, and official government correspondence on behalf of your business."
  },
  {
    question: "What is an EIN and why does my LLC need one?",
    answer: "An EIN for LLC (Employer Identification Number) is a federal tax ID issued by the IRS. Most businesses need an EIN to open a business bank account, hire employees, file taxes, and operate legally in the United States."
  },
  {
    question: "Can a non-US resident start an LLC in the United States?",
    answer: "Yes, non-US residents can start an LLC in the USA. Many international entrepreneurs form US LLCs to access the US market. However, they typically need an EIN, registered agent, and US business address to operate their company."
  },
  {
    question: "What documents are required to form an LLC in the US?",
    answer: "To form an LLC in the United States, the primary document required is the Articles of Organization, which is filed with the state. Businesses may also prepare an Operating Agreement to define ownership and management structure."
  },
  {
    question: "Do I need an Operating Agreement for my LLC?",
    answer: "An LLC Operating Agreement outlines the ownership structure, responsibilities, and management rules of your company. While not always required by state law, it is strongly recommended for all businesses to avoid future disputes."
  },
  {
    question: "What happens after my LLC is approved?",
    answer: "After your LLC formation is approved, you can obtain an EIN for your business, open a business bank account, apply for required licenses, and begin operating legally in the United States."
  },
  {
    question: "Do LLCs in the United States have annual fees?",
    answer: "Yes, most states require businesses to pay annual LLC fees or file annual reports to remain compliant. The exact requirements vary depending on the state where your LLC is registered."
  },
  {
    question: "Can I change my LLC details after formation?",
    answer: "Yes, you can update your company details by filing an amendment with the state. Businesses commonly update their registered agent, business address, or company name after formation."
  },
  {
    question: "What are the benefits of forming an LLC in the United States?",
    answer: "The main benefits of starting an LLC in the USA include limited liability protection, flexible taxation options, simple management structure, and credibility when doing business with customers and partners."
  }
];

export default function FormOrderNow() {
  const { order, setInitialSelection, addAddon, removeAddon } = useOrder();
  const [entityType, setEntityType] = useState(order.entityType || '');
  const [state, setState] = useState(order.selectedState?.name || '');
  const [selectedPackage, setSelectedPackage] = useState<string>(order.selectedPackage?.name || "Standard");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statesData, setStatesData] = useState<StateData[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/states/public')
      .then((res) => setStatesData(res.data))
      .catch((err) => console.error('Failed to fetch states:', err));

    api.get('/packages/public')
      .then((res) => setPackages(res.data))
      .catch((err) => console.error('Failed to fetch packages:', err));
  }, []);

  const selectedPackageData = packages.find(p => p.name === selectedPackage);
  const selectedStateData = statesData.find(s => s.name === state);
  const selectedStateFee = selectedStateData ? parseInt(selectedStateData.filingFee.replace(/[^0-9]/g, '')) || 0 : 0;
  const packagePrice = selectedPackageData?.price || 0;
  const addonsTotal = Object.values(selectedAddons).reduce((sum, p) => sum + p, 0);
  const total = packagePrice + selectedStateFee + addonsTotal;
  const packageRef = useRef<HTMLDivElement | null>(null);

  const toggleAddon = (featureName: string, price: number) => {
    setSelectedAddons(prev => {
      const next = { ...prev };
      if (next[featureName]) {
        delete next[featureName];
      } else {
        next[featureName] = price;
      }
      return next;
    });
  };

  const handleGetStarted = () => {
    if (packageRef.current) {
      packageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const allFeatureNames = useMemo(() => {
    const nameSet = new Set<string>();
    packages.forEach(pkg => {
      pkg.features.forEach(f => nameSet.add(f.name));
    });
    return Array.from(nameSet);
  }, [packages]);

  const handleProceed = () => {
    if (!selectedPackageData || !selectedStateData) return;
    setInitialSelection(entityType, selectedStateData, selectedPackageData);
    // Sync selected addons to context
    // First clear any existing package addons
    Object.keys(order.addons).forEach(key => {
      if (key.startsWith('pkg_')) removeAddon(key);
    });
    // Add newly selected addons
    Object.entries(selectedAddons).forEach(([name, price]) => {
      addAddon(`pkg_${name}`, { name, price });
    });
    navigate("/process-coinfo");
  };

  return (
    <div className="bg-white min-h-screen">

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-white to-cyan-100 py-12">

  {/* background glow */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

  <div className="relative max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
      Begins Your LLC or Company in the USA
      <span className="text-cyan-600 block">
        With Confidence
      </span>
    </h1>

    <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
      Join <span className="font-semibold text-gray-900">500+ entrepreneurs</span> who trust us
      to launch and grow their businesses successfully.
    </p>

    {/* Card */}
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 max-w-3xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Entity Type */}
        <div>
          <label className="block text-left text-sm font-semibold text-gray-700 mb-2">
            Entity Type
          </label>

          <div className="relative">
            <select
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select entity type</option>
              {entityTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
          </div>
        </div>

        {/* State */}
        <div>
          <label className="block text-left text-sm font-semibold text-gray-700 mb-2">
            State
          </label>

          <div className="relative">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select state</option>
              {statesData.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>

            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <button onClick={handleGetStarted} className="mt-8 cursor-pointer w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-4 rounded-xl shadow-lg transition">
        Get Started
      </button>

    </div>

  </div>
</section>

      {entityType && state && <section ref={packageRef} className="py-16 sm:py-24 bg-cyan-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
            Business Formation Packages
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Comparison Table */}
          <div className="lg:col-span-3 overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Header Row - Package Names & Prices */}
              <thead>
                <tr>
                  <th className="text-left p-4 align-bottom">
                    <span className="text-lg font-semibold text-gray-600">Business Formation<br/>Packages</span>
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.name}
                      className={`p-4 text-center align-bottom cursor-pointer transition-all ${
                        selectedPackage === pkg.name ? 'bg-cyan-50 border-x-2 border-t-2 border-cyan-500' : 'bg-white'
                      }`}
                      onClick={() => { setSelectedPackage(pkg.name); setSelectedAddons({}); }}
                    >
                      {pkg.recommended && (
                        <div className="bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                          Recommended
                        </div>
                      )}
                      <div className="text-xl font-extrabold text-gray-900">{pkg.name}</div>
                      <div className="mt-2">
                        <span className="text-3xl font-extrabold text-gray-900">${pkg.price}</span>
                        <span className="text-gray-500 text-sm block">+ ${selectedStateFee} state fee</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{pkg.processingTime}</div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPackage(pkg.name);
                          setSelectedAddons({});
                        }}
                        className={`mt-3 w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                          selectedPackage === pkg.name
                            ? 'bg-cyan-600 text-white'
                            : 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50'
                        }`}
                      >
                        {selectedPackage === pkg.name ? 'Selected' : 'Select'}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Feature Rows */}
              <tbody>
                {allFeatureNames.map((featureName, idx) => (
                  <tr key={featureName} className={idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                    <td className="p-4 text-sm text-gray-700 font-medium border-t border-gray-100">
                      {featureName}
                    </td>
                    {packages.map((pkg) => {
                      const feature = pkg.features.find(f => f.name === featureName);
                      const isSelected = selectedPackage === pkg.name;
                      const isAddonActive = selectedAddons[featureName] !== undefined;
                      return (
                        <td
                          key={pkg.name}
                          className={`p-4 text-center border-t border-gray-100 ${
                            isSelected ? 'bg-cyan-50/50 border-x-2 border-cyan-500' : ''
                          }`}
                        >
                          {feature ? (
                            feature.included ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : feature.addonPrice ? (
                              isSelected ? (
                                <button
                                  onClick={() => toggleAddon(featureName, feature.addonPrice!)}
                                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                                    isAddonActive
                                      ? 'bg-cyan-600 text-white shadow-sm'
                                      : 'border border-gray-300 text-gray-600 hover:border-cyan-500 hover:text-cyan-600'
                                  }`}
                                >
                                  {isAddonActive ? (
                                    <><Check className="w-4 h-4" /> ${feature.addonPrice}</>
                                  ) : (
                                    <>+ ${feature.addonPrice}</>
                                  )}
                                </button>
                              ) : (
                                <span className="text-sm text-gray-400">+${feature.addonPrice}</span>
                              )
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <Minus className="w-5 h-5 text-gray-200 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>{selectedPackage} Package:</span>
                  <span className="font-semibold">${packagePrice}</span>
                </div>
                {state && (
                  <div className="flex justify-between text-gray-700">
                    <span>{state} State Fee:</span>
                    <span className="font-semibold">${selectedStateFee}</span>
                  </div>
                )}
                {Object.entries(selectedAddons).map(([name, price]) => (
                  <div key={name} className="flex justify-between text-gray-700">
                    <span>{name}:</span>
                    <span className="font-semibold">${price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-extrabold text-gray-900">Total:</span>
                  <span className="text-2xl font-extrabold text-gray-900">${total}</span>
                </div>
              </div>

              <button
                onClick={handleProceed}
                className="w-full bg-cyan-600 cursor-pointer text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors mb-4"
              >
                Get Started
              </button>

              <div className="bg-cyan-50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-cyan-600 font-semibold">One-time fee</span>
                </div>
                <p className="text-sm text-gray-600">
                  Unlike companies that charge annual fees, our formation fee is one-time.
                </p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>}

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
