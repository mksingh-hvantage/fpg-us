import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, BookOpen } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-cyan-100/60 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-600 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Articles
          </Link>

          <div className="mb-6">
            <span className="inline-block text-sm font-bold text-cyan-600 bg-white px-4 py-2 rounded-full uppercase tracking-wide">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-bizee-dark mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-bizee-gray">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(article.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-bizee-gray leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="space-y-6 text-bizee-dark leading-relaxed">
            <p>
              Starting a business is an exciting journey filled with opportunities and challenges.
              Whether you're launching your first venture or expanding an existing one, having the
              right information and guidance is crucial for success.
            </p>

            <h2 className="text-2xl font-bold text-bizee-dark mt-8 mb-4">
              Understanding the Basics
            </h2>

            <p>
              Before diving into the specifics, it's important to understand the foundational
              elements that make a business successful. This includes proper planning, legal
              compliance, financial management, and strategic marketing.
            </p>

            <h2 className="text-2xl font-bold text-bizee-dark mt-8 mb-4">
              Key Considerations
            </h2>

            <p>
              Every business is unique, but there are common factors that contribute to success.
              These include choosing the right business structure, understanding your target market,
              developing a solid business plan, and maintaining proper financial records.
            </p>

            <h2 className="text-2xl font-bold text-bizee-dark mt-8 mb-4">
              Next Steps
            </h2>

            <p>
              Taking action is the most important step. Start by researching your industry,
              creating a detailed business plan, and consulting with professionals who can
              guide you through the process. Remember, every successful business started with
              a single step forward.
            </p>

            <div className="bg-bizee-peach p-8 rounded-2xl mt-10 border-l-4 border-cyan-600">
              <h3 className="text-xl font-bold text-bizee-dark mb-3">
                Ready to Start Your Business?
              </h3>
              <p className="text-bizee-gray mb-4">
                Get expert help with formation, compliance, and everything you need to succeed.
              </p>
              <button className="bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-bizee-peach to-bizee-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold text-bizee-dark">
                Related Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedArticle.imageUrl}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-cyan-600 bg-cyan-600/10 px-3 py-1.5 rounded-full uppercase tracking-wide">
                        {relatedArticle.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-bizee-gray">
                        <Clock className="w-4 h-4" />
                        {relatedArticle.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-bizee-dark group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
