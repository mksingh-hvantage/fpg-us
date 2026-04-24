import { useParams, Link } from 'react-router-dom';
import { contractTemplates } from '../data/contracts';

export default function ContractTemplate() {
  const { template } = useParams();
  const contractData = contractTemplates.find(c => c.slug === template);

  if (!contractData) {
    return <div className="py-20 text-center">Template not found</div>;
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full font-bold mb-6">
              📄 {contractData.category}
            </div>
            <h1 className="text-6xl font-black mb-6">{contractData.name}</h1>
            <p className="text-2xl mb-8 text-blue-100">Free legal document template for your business</p>
            <button className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105">
              DOWNLOAD FREE TEMPLATE
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-8">What is a {contractData.name}?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            A {contractData.name} is a legally binding document that outlines the terms and conditions between
            parties. This template provides a comprehensive framework to protect your interests and ensure clear
            understanding of obligations.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-4 border-blue-200 mb-12">
            <h3 className="text-2xl font-black text-gray-900 mb-6">What's Included in This Template</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Clear terms and conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Payment terms and schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Rights and obligations of each party</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Termination clauses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Dispute resolution procedures</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-4 border-yellow-200 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div className="text-4xl">⚠️</div>
              <div>
                <h4 className="font-black text-gray-900 text-lg mb-2">Legal Disclaimer</h4>
                <p className="text-gray-700">
                  This template is provided for informational purposes only and does not constitute legal advice.
                  We recommend having any legal documents reviewed by a qualified attorney before use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">Need Help With Your Business?</h2>
          <p className="text-xl mb-10 text-gray-300">We can help you form your LLC, get your EIN, and more.</p>
          <Link
            to="/llc"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-5 rounded-full text-xl font-black hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-2xl transform hover:scale-105"
          >
            START YOUR BUSINESS
          </Link>
        </div>
      </section>
    </div>
  );
}
