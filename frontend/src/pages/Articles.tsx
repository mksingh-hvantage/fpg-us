import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';

const ARTICLES_PER_PAGE = 9;

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Legal', 'Taxes', 'Marketing', 'Strategy', 'Finance'];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') {
      return articles;
    }
    return articles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    return filteredArticles.slice(startIndex, endIndex);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-cyan-100/60 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-cyan-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bizee-dark mb-6">
            Latest Blogs & Articles
          </h1>
          <p className="text-xl text-bizee-gray max-w-3xl mx-auto leading-relaxed">
            Articles, resources, and expert guidance to help you start, grow, and thrive in business.
          </p>
        </div>
      </section>

      <section className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="flex-1 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-bizee-gray">
              Showing {paginatedArticles.length} of {filteredArticles.length} articles
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-cyan-600 bg-cyan-600/10 px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-bizee-gray">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-bizee-dark mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-bizee-gray leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-bizee-gray">
                    <span>{article.author}</span>
                    <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === page
                      ? 'bg-cyan-600 text-white shadow-md'
                      : 'border border-gray-300 text-bizee-dark hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-cyan-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-bizee-dark text-center mb-12">
            Popular Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Starting a Business', 'LLC Formation', 'Business Taxes', 'Marketing', 'Business Plans', 'Funding', 'Legal Compliance', 'Growth Strategies'].map(topic => (
              <button
                key={topic}
                onClick={() => {
                  const categoryMap: { [key: string]: string } = {
                    'LLC Formation': 'Legal',
                    'Business Taxes': 'Taxes',
                    'Marketing': 'Marketing',
                    'Business Plans': 'Strategy',
                    'Funding': 'Finance',
                    'Legal Compliance': 'Legal',
                    'Growth Strategies': 'Strategy',
                    'Starting a Business': 'Strategy'
                  };
                  const category = categoryMap[topic] || 'All';
                  handleCategoryChange(category);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <h3 className="font-bold text-bizee-dark group-hover:text-cyan-600 transition-colors">
                  {topic}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
