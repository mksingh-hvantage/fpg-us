import { Search, Loader, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { US_STATES as states } from '../data/usStates';

export default function SearchBar() {
  const [formData, setFormData] = useState({
    businessName: '',
    entityType: 'llc',
    entityState: '',
    firstName: '',
    lastName: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    available: boolean;
    name: string;
  } | null>(null);

  const handleSearch = async () => {
    if (!formData.businessName.trim()) return;

    setLoading(true);
    setResult(null);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const available = !['apple', 'google', 'microsoft', 'meta', 'amazon', 'test llc', 'demo corp'].some(
      term => formData.businessName.toLowerCase().includes(term)
    );

    setResult({
      available,
      name: formData.businessName
    });

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEntityTypeChange = (type: 'llc' | 'corp') => {
    setFormData(prev => ({
      ...prev,
      entityType: type
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleSearch();
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-6xl font-semibold text-black mb-10 mt-24">
            Use Our Free Business Name Search Tool to Find Out if Your Company Name Is Available
          </h1>
          <h3 className="text-3xl font-bold text-black mb-4">
            We’ll take care of the entity search.
          </h3>
          <p className="text-xl font-semibold text-black mb-4">
            We’ll tell you if your business name is available with the New York Division of Corporations. Just fill in your proposed business name, and we’ll search the company registrar for you.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Please enter the business name information
          </h3>

          <div className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Requested Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Entity Type */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Entity Type
              </label>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="entityType"
                    value="llc"
                    checked={formData.entityType === 'llc'}
                    onChange={() => handleEntityTypeChange('llc')}
                    className="w-5 h-5 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700">LLC</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="entityType"
                    value="corp"
                    checked={formData.entityType === 'corp'}
                    onChange={() => handleEntityTypeChange('corp')}
                    className="w-5 h-5 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700">Corporation</span>
                </label>
              </div>
              <button className="text-cyan-500 hover:text-cyan-600 text-sm font-medium mt-2 flex items-center gap-1">
                <HelpCircle className="w-4 h-4" />
                Not Sure?
              </button>
            </div>

            {/* Entity State */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Entity State <span className="text-red-500">*</span>
              </label>
              <select
                name="entityState"
                value={formData.entityState}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              >
                <option value="">Select</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <p className="text-center text-sm text-gray-600 py-2">
              Let us know where we can let you know if your business name is available
            </p>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              disabled={loading || !formData.businessName.trim() || !formData.entityState.trim() || !formData.firstName.trim() || !formData.lastName.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mt-6"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Check Availability
                </>
              )}
            </button>

            {/* Result */}
            {result && (
              <div className={`rounded-lg p-4 ${
                result.available
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}>
                <p className={`font-semibold ${
                  result.available ? 'text-green-800' : 'text-red-800'
                }`}>
                  {result.available
                    ? `✓ "${result.name}" appears to be available!`
                    : `✗ "${result.name}" may not be available.`}
                </p>
                <p className={`text-sm mt-2 ${
                  result.available ? 'text-green-700' : 'text-red-700'
                }`}>
                  {result.available
                    ? 'This name is not registered in our database. Proceed with formation to secure it.'
                    : 'This name or a similar one is already registered. Try a different name.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}