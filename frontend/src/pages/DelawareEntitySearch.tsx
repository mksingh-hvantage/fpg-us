import { Check, AlertCircle, FileText, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NamingRules from '../components/NamingRules';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function DelawareEntitySearch() {
  const [activeTab, setActiveTab] = useState<'llc' | 'corp'>('llc');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-800 pt-16 pb-24">
  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
        Find Your Perfect Delaware Business Name
      </h1>
      <p className="text-xl text-slate-200 max-w-2xl mx-auto">
        Check if your LLC or corporation name is available in Delaware's business
        registry. Search instantly and validate your business identity before forming.
      </p>
    </div>

    {/* Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
          <Zap className="w-6 h-6 text-cyan-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Instant Results
        </h3>
        <p className="text-gray-600">
          Get immediate feedback on name availability from the NY Department of State database
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <Shield className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Free to Use
        </h3>
        <p className="text-gray-600">
          No fees, no hidden charges. Check as many business names as you need
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Guided Formation
        </h3>
        <p className="text-gray-600">
          Once approved, we guide you through LLC or corporation formation process
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Search Bar */}
    <SearchBar />

      {/* Naming Rules Section */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">Delaware Naming Requirements</h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('llc')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'llc'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              LLC Requirements
            </button>
            <button
              onClick={() => setActiveTab('corp')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'corp'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Corporation Requirements
            </button>
          </div>

          {/* Core Rules */}
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Core Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Name must be unique and distinguishable from existing NY businesses</li>
                  <li>• Cannot imply connection with state entities or licensed professions without consent</li>
                  <li className={activeTab === 'llc' ? '' : 'hidden'}>• Must include "Limited Liability Company" or "LLC" designation</li>
                  <li className={activeTab === 'corp' ? '' : 'hidden'}>• Must include "Incorporated", "Corporation", "Corp." or similar designation</li>
                </ul>
              </div>
            </div>
          </div>

          <NamingRules />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      {/* Prohibited Words Section */}
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Prohibited & Restricted Words
        </h2>

        <p className="text-gray-700 mb-6">
          These words cannot be used in your Delaware business name:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Attorney',
            'Board of Trade',
            'Chamber of Commerce',
            'Community',
            'Cooperation',
            'Cooperative',
            'Corporation',
            'Incorporated',
            'Partnership',
            'Redevelopment',
            'State Police',
            'State Trooper',
            'Tenant Relocation',
            'Urban Development',
            'Urban Relocation'
          ].map((word, idx) => (
            <div
              key={idx}
              className="bg-red-50 border border-red-100 rounded-lg p-3 text-center"
            >
              <p className="text-sm text-gray-700 font-medium">{word}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-6 text-sm">
          Additionally, no obscene, misleading, or unlawful language is permitted.
        </p>
      </div>

      {/* About Delaware Section */}
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Why Choose Delaware for Your Business?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Delaware is a global hub for finance, technology, and innovation. From
          Manhattan to growing statewide markets, the state offers unmatched
          business potential.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Entrepreneurs thrive across multiple high-growth industries:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Finance & Banking',
            'Technology & Innovation',
            'Media & Entertainment',
            'Tourism & Hospitality',
            'Professional Services',
            'Real Estate & Construction'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* How It Works Section */}
      <section className="py-16 bg-cyan-100/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">Your Business Formation Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Search Your Name', description: 'Check availability using our search tool' },
              { step: 2, title: 'Verify Compliance', description: 'Ensure name meets NY naming rules' },
              { step: 3, title: 'Form Your Entity', description: 'Complete LLC or corporation formation' },
              { step: 4, title: 'Get Filing Documents', description: 'Receive official formation paperwork' }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-cyan-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">Common Questions</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}