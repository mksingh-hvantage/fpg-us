import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getService, createService, updateService } from '../../../services/serviceManagementService';

export default function ServiceForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    category: '',
    basePrice: '',
    isRecurring: false,
    interval: '',
    published: false,
    sortOrder: '0',
  });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      getService(id)
        .then((service) => {
          setForm({
            name: service.name,
            slug: service.slug,
            description: service.description || '',
            category: service.category || '',
            basePrice: String(service.basePrice),
            isRecurring: service.isRecurring,
            interval: service.interval || '',
            published: service.published,
            sortOrder: String(service.sortOrder),
          });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'name' && !isEdit) {
        updated.slug = String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.basePrice) {
      setError('Name, slug, and base price are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const payload = {
        name: form.name,
        slug: form.slug,
        description: form.description || undefined,
        category: form.category || undefined,
        basePrice: form.basePrice,
        isRecurring: form.isRecurring,
        interval: form.isRecurring ? form.interval || undefined : undefined,
        published: form.published,
        sortOrder: Number(form.sortOrder) || 0,
      };
      if (isEdit) {
        await updateService(id!, payload);
      } else {
        await createService(payload);
      }
      navigate('/admin/services');
    } catch (err) {
      console.error('Failed to save service:', err);
      setError('Failed to save service. Check if slug is unique.');
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
        <button onClick={() => navigate('/admin/services')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Service' : 'New Service'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Name" value={form.name} onChange={(e) => handleChange('name', (e.target as HTMLInputElement).value)} required />
          <FormField label="Slug" value={form.slug} onChange={(e) => handleChange('slug', (e.target as HTMLInputElement).value)} required />
        </div>

        <FormField label="Description" as="textarea" value={form.description} onChange={(e) => handleChange('description', (e.target as HTMLTextAreaElement).value)} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField label="Category" value={form.category} onChange={(e) => handleChange('category', (e.target as HTMLInputElement).value)} />
          <FormField label="Base Price" type="number" step="0.01" min="0" value={form.basePrice} onChange={(e) => handleChange('basePrice', (e.target as HTMLInputElement).value)} required />
          <FormField label="Sort Order" type="number" value={form.sortOrder} onChange={(e) => handleChange('sortOrder', (e.target as HTMLInputElement).value)} />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isRecurring"
              checked={form.isRecurring}
              onChange={(e) => handleChange('isRecurring', e.target.checked)}
              className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
            />
            <label htmlFor="isRecurring" className="text-sm font-medium text-gray-700">Recurring</label>
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
        </div>

        {form.isRecurring && (
          <FormField label="Interval" value={form.interval} onChange={(e) => handleChange('interval', (e.target as HTMLInputElement).value)} placeholder="e.g. monthly, yearly" />
        )}

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Service' : 'Create Service'}
          </button>
          <button type="button" onClick={() => navigate('/admin/services')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
