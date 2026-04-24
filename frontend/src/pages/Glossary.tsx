import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
}

const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    id: '1',
    term: 'Algorithm',
    definition: 'A step-by-step procedure for solving a problem or accomplishing a task, especially by a computer.',
    category: 'Technology',
  },
  {
    id: '2',
    term: 'API',
    definition: 'Application Programming Interface - a set of rules and protocols that allows different software applications to communicate with each other.',
    category: 'Technology',
  },
  {
    id: '3',
    term: 'Asset',
    definition: 'Anything of value that a business owns, including cash, equipment, inventory, and intellectual property.',
    category: 'Business',
  },
  {
    id: '4',
    term: 'Backup',
    definition: 'A copy of data or files stored separately to protect against data loss or system failure.',
    category: 'Technology',
  },
  {
    id: '5',
    term: 'Bandwidth',
    definition: 'The maximum rate of data transfer across a network, typically measured in bits per second.',
    category: 'Technology',
  },
  {
    id: '6',
    term: 'Bootstrap',
    definition: 'To initiate or start a process, often used when starting a business with minimal resources or starting a computer from a powered-off state.',
    category: 'Business',
  },
  {
    id: '7',
    term: 'Cache',
    definition: 'A hardware or software component that stores data so future requests for that data can be served faster.',
    category: 'Technology',
  },
  {
    id: '8',
    term: 'Client',
    definition: 'A computer or software application that requests services or resources from a server.',
    category: 'Technology',
  },
  {
    id: '9',
    term: 'Database',
    definition: 'An organized collection of structured data or information stored and accessed electronically.',
    category: 'Technology',
  },
  {
    id: '10',
    term: 'Deployment',
    definition: 'The process of releasing software or an application to a production environment where it can be used by end-users.',
    category: 'Technology',
  },
  {
    id: '11',
    term: 'Digital',
    definition: 'Involving or using computers or the internet; representing data in numerical form using digits.',
    category: 'Technology',
  },
  {
    id: '12',
    term: 'Domain',
    definition: 'A specific area of knowledge or activity; in internet terms, the name of a website (e.g., example.com).',
    category: 'Technology',
  },
  {
    id: '13',
    term: 'Encryption',
    definition: 'The process of converting information into code to prevent unauthorized access.',
    category: 'Technology',
  },
  {
    id: '14',
    term: 'Enterprise',
    definition: 'A large-scale business organization or undertaking.',
    category: 'Business',
  },
  {
    id: '15',
    term: 'Framework',
    definition: 'A pre-built set of tools, libraries, and conventions that provides a structure for developing software applications.',
    category: 'Technology',
  },
  {
    id: '16',
    term: 'Frontend',
    definition: 'The user-facing part of a software application that users interact with directly.',
    category: 'Technology',
  },
  {
    id: '17',
    term: 'Gateway',
    definition: 'A network node that serves as an access point to another network, often involving protocol translation.',
    category: 'Technology',
  },
  {
    id: '18',
    term: 'Hosting',
    definition: 'The service of providing space on a server to store website or application files.',
    category: 'Technology',
  },
  {
    id: '19',
    term: 'Infrastructure',
    definition: 'The basic physical systems and facilities needed for a business or technology system to operate.',
    category: 'Technology',
  },
  {
    id: '20',
    term: 'Integration',
    definition: 'The process of combining different systems, applications, or components to work together as a unified whole.',
    category: 'Technology',
  },
];

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(GLOSSARY_DATA.map(t => t.category)));
    return uniqueCategories;
  }, []);

  const filteredTerms = useMemo(() => {
    let result = GLOSSARY_DATA;

    if (searchQuery) {
      result = result.filter(term =>
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      result = result.filter(term => term.term[0].toUpperCase() === selectedLetter);
    }

    if (selectedCategory !== 'All') {
      result = result.filter(term => term.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedLetter, selectedCategory]);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSearchQuery('');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-slate-700 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-12 py-12">
          <h1 className="text-5xl font-extrabold text-white mb-3">Glossary</h1>
          <p className="text-lg text-gray-200">Explore our comprehensive collection of terms and definitions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-500"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-cyan-500'
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-cyan-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Alphabet Navigation */}
        <div className="mb-8 pb-6 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Quick Navigation</h3>
          <div className="flex flex-wrap gap-2">
            {alphabet.map(letter => (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                disabled={searchQuery !== ''}
                className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all ${
                  selectedLetter === letter && !searchQuery
                    ? 'bg-cyan-600 text-white'
                    : searchQuery
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-cyan-500'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Terms Display */}
        <div>
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
              <p className="text-slate-600 mb-2">No terms found</p>
              <p className="text-sm text-slate-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTerms.map(term => (
                <div
                  key={term.id}
                  className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow hover:border-slate-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">{term.term}</h3>
                    <span className="text-xs font-medium bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                      {term.category}
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{term.definition}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredTerms.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold text-slate-900">{filteredTerms.length}</span> of{' '}
              <span className="font-semibold text-slate-900">{GLOSSARY_DATA.length}</span> terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
