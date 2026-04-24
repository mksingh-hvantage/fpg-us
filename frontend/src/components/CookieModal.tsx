import { X } from 'lucide-react';
import { useState } from 'react';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookieModal({ isOpen, onClose }: CookieModalProps) {
  const [performanceCookies, setPerformanceCookies] = useState(true);
  const [functionalCookies, setFunctionalCookies] = useState(true);

  if (!isOpen) return null;

  const handleAllowSelection = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Manage Cookie Preferences
            </h2>
          </div>

          <div className="mb-6 text-gray-600 text-sm leading-relaxed">
            <p>
              When you visit any website, it may store or retrieve information on your browser, mostly
              in the form of cookies. This information might be about you, your preferences or your
              device and is mostly used to make the site work as you expect it to. The information does
              not usually directly identify you, but it can give you a more personalized web experience.
              Because we respect your right to privacy, you can choose not to allow some types of
              cookies. Click on the different category headings to find out more and change our
              default settings. However, blocking some types of cookies may impact your experience of
              the site and the services we are able to offer.
            </p>
            <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">
              More information
            </a>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Manage Consent Preferences
          </h3>

          <div className="space-y-3 mb-6">
            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Strictly Necessary Cookies</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-blue-600">Always Active</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Performance Cookies</h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPerformanceCookies(!performanceCookies)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    performanceCookies ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      performanceCookies ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Functional Cookies</h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFunctionalCookies(!functionalCookies)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    functionalCookies ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      functionalCookies ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={handleAllowSelection}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full max-w-xs"
            >
              ALLOW SELECTION
            </button>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <span>Powered by</span>
              <span className="font-semibold text-gray-600">onetrust</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
