import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2 } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import { getArticles, deleteArticle, updateArticle } from '../../../services/articleService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Article } from '../../../types/admin';

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { canCreate, canEdit, canDelete } = useAuth();

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getArticles({ search, page, limit: 20 });
      setArticles(data.articles);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch articles:', err);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => { fetchArticles(); }, [fetchArticles]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    try {
      await deleteArticle(id);
      fetchArticles();
    } catch (err) {
      console.error('Failed to delete article:', err);
    }
  };

  const handleTogglePublish = async (article: Article) => {
    try {
      await updateArticle(article.id, { published: !article.published });
      fetchArticles();
    } catch (err) {
      console.error('Failed to toggle publish:', err);
    }
  };

  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    {
      key: 'published', label: 'Status',
      render: (a: Article) => canEdit('Articles') ? (
        <button
          onClick={(e) => { e.stopPropagation(); handleTogglePublish(a); }}
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${a.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
        >
          {a.published ? 'Published' : 'Draft'}
        </button>
      ) : (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${a.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {a.published ? 'Published' : 'Draft'}
        </span>
      ),
    },
    { key: 'createdAt', label: 'Created', sortable: true, render: (a: Article) => new Date(a.createdAt).toLocaleDateString() },
    {
      key: 'actions', label: 'Actions',
      render: (a: Article) => (
        <div className="flex gap-2">
          {canEdit('Articles') && (
            <button onClick={(e) => { e.stopPropagation(); navigate(`/admin/articles/${a.id}`); }} className="p-1.5 rounded hover:bg-gray-100 text-gray-500">
              <Edit className="w-4 h-4" />
            </button>
          )}
          {canDelete('Articles') && (
            <button onClick={(e) => { e.stopPropagation(); handleDelete(a.id); }} className="p-1.5 rounded hover:bg-red-50 text-red-500">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      ),
    },
  ];

  if (loading && articles.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Articles</h2>
        {canCreate('Articles') && (
          <button
            onClick={() => navigate('/admin/articles/new')}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" /> New Article
          </button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={articles}
        searchPlaceholder="Search articles..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
        onRowClick={(article) => navigate(`/admin/articles/${article.id}`)}
      />
    </div>
  );
}
