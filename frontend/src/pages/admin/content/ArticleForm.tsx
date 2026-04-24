import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Editor } from '@tinymce/tinymce-react';
import FormField from '../../../components/admin/FormField';
import { getArticle, createArticle, updateArticle } from '../../../services/articleService';

const categories = ['Legal', 'Taxes', 'Marketing', 'Strategy', 'Finance', 'Business'];

export default function ArticleForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: '', slug: '', excerpt: '', content: '', category: 'Legal',
    readTime: '', author: '', imageUrl: '', published: false, publishedDate: '',
  });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (id) {
      getArticle(id)
        .then((article) => {
          setForm({
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt || '',
            content: article.content,
            category: article.category,
            readTime: article.readTime || '',
            author: article.author || '',
            imageUrl: article.imageUrl || '',
            published: article.published,
            publishedDate: article.publishedDate ? article.publishedDate.split('T')[0] : '',
          });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      // Auto-generate slug from title
      if (field === 'title' && !isEdit) {
        updated.slug = String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content || !form.category) {
      setError('Title, slug, content, and category are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      if (isEdit) {
        await updateArticle(id!, form);
      } else {
        await createArticle(form);
      }
      navigate('/admin/articles');
    } catch (err) {
      console.error('Failed to save article:', err);
      setError('Failed to save article. Check if slug is unique.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/articles')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Article' : 'New Article'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Title" value={form.title} onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)} required />
          <FormField label="Slug" value={form.slug} onChange={(e) => handleChange('slug', (e.target as HTMLInputElement).value)} required />
        </div>

        <FormField label="Excerpt" as="textarea" value={form.excerpt} onChange={(e) => handleChange('excerpt', (e.target as HTMLTextAreaElement).value)} />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content <span className="text-red-500">*</span></label>
          <Editor
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            licenseKey="gpl"
            onInit={(_evt: unknown, editor: unknown) => (editorRef.current = editor)}
            initialValue={form.content}
            onEditorChange={(value: string) => handleChange('content', value)}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'anchor', 'autolink', 'charmap', 'code', 'codesample',
                'directionality', 'emoticons', 'fullscreen', 'help', 'image', 'importcss',
                'insertdatetime', 'link', 'lists', 'media', 'nonbreaking', 'pagebreak',
                'preview', 'quickbars', 'searchreplace', 'table',
                'visualblocks', 'visualchars', 'wordcount',
              ],
              toolbar: `
                undo redo | blocks fontfamily fontsize | bold italic underline strikethrough |
                forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify |
                lineheight | bullist numlist outdent indent | subscript superscript |
                link image media table emoticons charmap codesample |
                pagebreak nonbreaking anchor insertdatetime |
                ltr rtl | visualblocks visualchars | searchreplace wordcount |
                fullscreen preview | code | help
              `,
              content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; }',
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField label="Category" as="select" value={form.category} onChange={(e) => handleChange('category', (e.target as HTMLSelectElement).value)}>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </FormField>
          <FormField label="Author" value={form.author} onChange={(e) => handleChange('author', (e.target as HTMLInputElement).value)} />
          <FormField label="Read Time" value={form.readTime} onChange={(e) => handleChange('readTime', (e.target as HTMLInputElement).value)} placeholder="e.g. 8 min read" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Image URL" value={form.imageUrl} onChange={(e) => handleChange('imageUrl', (e.target as HTMLInputElement).value)} />
          <FormField label="Published Date" type="date" value={form.publishedDate} onChange={(e) => handleChange('publishedDate', (e.target as HTMLInputElement).value)} />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={form.published}
            onChange={(e) => handleChange('published', e.target.checked)}
            className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
          />
          <label htmlFor="published" className="text-sm font-medium text-gray-700">Published</label>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Article' : 'Create Article'}
          </button>
          <button type="button" onClick={() => navigate('/admin/articles')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
