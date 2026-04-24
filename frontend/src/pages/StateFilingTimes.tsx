import { useState } from 'react';
import { Clock, Zap, Search, X, Plus, ChevronDown } from 'lucide-react';
import { Helmet } from "react-helmet-async"; 
import { states, type State } from '../data/statess';
import GetStartedModal from '../components/GetStartedModal';
import StateFilingStats from '../components/StateFilingStats'; 

export default function StateFilingTimes() {
  const [selectedStates, setSelectedStates] = useState<State[]>([]);
  const [showStateList, setShowStateList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

  const filteredStates = states.filter(
    state =>
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedStates.find(s => s.slug === state.slug)
  );

  const addState = (state: State) => {
    if (selectedStates.length < 4) {
      setSelectedStates([...selectedStates, state]);
      setSearchQuery('');
      setShowStateList(false);
    }
  };

  const removeState = (slug: string) => {
    setSelectedStates(selectedStates.filter(s => s.slug !== slug));
  };

  const clearAll = () => {
    setSelectedStates([]);
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
  <title>
    State Filing Times in USA – Business Formation Processing Time | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Check state filing times in the USA for LLC and business formation. The Future Perfect Global provides up-to-date processing timelines, expedited options, and expert guidance for faster state approvals."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/business-management/state-filing-times"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="state filing times USA, LLC filing time by state, business formation processing time USA, state approval times LLC, how long does LLC take USA, expedited state filing USA"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/state-filing-times"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/business-management/state-filing-times"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="State Filing Times in USA – LLC & Business Formation Timelines"
  />
  <meta
    property="og:description"
    content="Know how long state approvals take for LLC and business formation in the USA. View state-wise filing timelines and expedited options."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/business-management/state-filing-times"
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
    content="State Filing Times in USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="State Filing Times in USA – Business Formation Timelines"
  />
  <meta
    name="twitter:description"
    content="Find accurate state filing times for LLC and business registration in the USA with expert guidance from The Future Perfect Global."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "State Filing Times in USA",
      "url": "https://us.thefutureperfectglobal.com/business-management/state-filing-times",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
      },
      "description": "State-wise filing and processing timelines for LLC and business formation in the USA, including expedited filing options and compliance guidance.",
      "areaServed": [
        "United States"
      ],
      "serviceType": [
        "State Filing Time Information",
        "LLC Formation USA",
        "Business Registration USA",
        "Expedited State Filing",
        "Compliance Support"
      ]
    }`}
  </script>
</Helmet>

      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Compare State Filing Times
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
              Timing is critical when launching your business. Utilize our state comparison tool to discover which states provide the fastest processing times for LLC formation.
            </p>
            <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-teal-600 mt-8 px-10 py-4 rounded-full text-lg font-black hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-black text-gray-900">
                  Select States to Compare
                </h2>
                {selectedStates.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-teal-600 hover:text-teal-700 font-bold text-sm flex items-center gap-2 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear All
                  </button>
                )}
              </div>

              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for a state..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowStateList(true);
                    }}
                    onFocus={() => setShowStateList(true)}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none text-lg transition-colors"
                  />
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                {showStateList && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowStateList(false)}
                    />
                    <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto">
                      {filteredStates.length > 0 ? (
                        <div className="p-2">
                          {filteredStates.map((state) => (
                            <button
                              key={state.slug}
                              onClick={() => addState(state)}
                              className="w-full text-left px-4 py-3 hover:bg-teal-50 rounded-lg transition-colors flex items-center justify-between group"
                            >
                              <span className="font-semibold text-gray-900">{state.name}</span>
                              <Plus className="w-5 h-5 text-gray-400 group-hover:text-teal-600" />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="p-8 text-center text-gray-500">
                          No states found matching your search
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {selectedStates.length < 4 && selectedStates.length > 0 && (
                <p className="mt-3 text-sm text-gray-600">
                  You can select up to {4 - selectedStates.length} more state{4 - selectedStates.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {selectedStates.length === 0 ? (
              <div className="text-center py-20">
                <Clock className="w-20 h-20 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  Add States to See Their Comparison
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Select states from the search box above to compare their filing times
                </p>
                <button
                  onClick={() => {
                    const randomStates = [...states].sort(() => 0.5 - Math.random()).slice(0, 3);
                    setSelectedStates(randomStates);
                  }}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-full font-bold hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
                >
                  View Sample Comparison
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {selectedStates.map((state) => (
                      <div
                        key={state.slug}
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200 relative"
                      >
                        <button
                          onClick={() => removeState(state.slug)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-2xl font-black text-gray-900 mb-6 pr-8">
                          {state.name}
                        </h3>

                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-5 h-5 text-teal-600" />
                              <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                                Normal Processing
                              </span>
                            </div>
                            <div className="text-3xl font-black text-gray-900">
                              {state.processingTime}
                            </div>
                          </div>

                          <div className="border-t-2 border-teal-200 pt-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="w-5 h-5 text-cyan-500" />
                              <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                                Expedited Processing
                              </span>
                            </div>
                            <div className="text-3xl font-black text-teal-600 mb-2">
                              {state.expeditedTime}
                            </div>
                            <div className="text-lg font-bold text-cyan-600">
                              {state.expeditedFee}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-100">
              <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Compare Across All States
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Easily evaluate filing times across every state to identify the best option for your business launch timeline.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-yellow-50 rounded-2xl p-8 border-2 border-cyan-100">
              <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Find State-Specific Timelines
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Get detailed processing information for any state including both standard and expedited filing options.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-100">
              <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Access Rush Filing Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Discover expedited processing options to accelerate your LLC formation and get started faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Which States Have the Fastest Filing Times?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              When launching your business, understanding both average and expedited filing times helps you select the optimal state for your LLC formation. Processing times vary significantly across states, ranging from as quick as 24 hours to several weeks depending on the state and filing method you choose.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Several states stand out for their rapid processing capabilities. Wyoming, Indiana, and Michigan typically process LLC formations within 1-2 weeks under standard filing, while states like California, Alabama, and Kentucky may require 4-6 weeks or longer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Nearly every state offers expedited processing services for businesses that need faster turnaround. These rush services can reduce processing time to as little as 24-48 hours, though fees vary by state. Delaware, Nevada, Idaho, and Utah are known for offering same-day or next-day expedited processing options.
            </p>

            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-black mb-4">Ready to Launch Your Business?</h3>
              <p className="text-teal-50 text-lg mb-6 leading-relaxed">
                Don't let long processing times delay your entrepreneurial journey. Our comprehensive formation services ensure your LLC is filed correctly and efficiently.
              </p>
              <button onClick={() => {
                setSelectedBusinessType('');
                setIsModalOpen(true);
              }} className="bg-white text-teal-700 px-10 py-4 rounded-full text-lg font-black hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl">
                START YOUR LLC TODAY
              </button>
            </div>
          </div>
        </div>
      </section>

      <StateFilingStats />

      <section className="py-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-6">Need It Faster?</h2>
          <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
            Expedited processing is available in most states. We offer rush filing services to get your business operational in as little as 24-48 hours. Skip the wait and accelerate your business launch.
          </p>
          <button onClick={() => {
            setSelectedBusinessType('');
            setIsModalOpen(true);
          }} className="bg-white text-cyan-600 px-10 py-4 rounded-full text-lg font-black hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl">
            EXPEDITE MY FILING
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
