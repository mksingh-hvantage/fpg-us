import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getCmsPage, createCmsPage, updateCmsPage } from '../../../services/cmsService';

export default function CmsPageEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    slug: '',
    title: '',
    content: '',
    published: false,
  });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      getCmsPage(id)
        .then((page) => {
          setForm({
            slug: page.slug,
            title: page.title,
            content: page.content ? JSON.stringify(page.content, null, 2) : '',
            published: page.published,
          });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'title' && !isEdit) {
        updated.slug = String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.slug || !form.title) {
      setError('Slug and title are required.');
      return;
    }

    let parsedContent: Record<string, unknown> | undefined;
    if (form.content.trim()) {
      try {
        parsedContent = JSON.parse(form.content);
      } catch {
        setError('Content must be valid JSON.');
        return;
      }
    }

    setSaving(true);
    setError('');
    try {
      const payload = {
        slug: form.slug,
        title: form.title,
        content: parsedContent,
        published: form.published,
      };
      if (isEdit) {
        await updateCmsPage(id!, payload);
      } else {
        await createCmsPage(payload);
      }
      navigate('/admin/cms');
    } catch (err) {
      console.error('Failed to save CMS page:', err);
      setError('Failed to save page. Check if slug is unique.');
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
        <button onClick={() => navigate('/admin/cms')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit CMS Page' : 'New CMS Page'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Title" value={form.title} onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)} required />
          <FormField label="Slug" value={form.slug} onChange={(e) => handleChange('slug', (e.target as HTMLInputElement).value)} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content (JSON)</label>
          <textarea
            value={form.content}
            onChange={(e) => handleChange('content', e.target.value)}
            rows={16}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-sm font-mono"
            placeholder='{"sections": []}'
          />
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
            {saving ? 'Saving...' : isEdit ? 'Update Page' : 'Create Page'}
          </button>
          <button type="button" onClick={() => navigate('/admin/cms')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
