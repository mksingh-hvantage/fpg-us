import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getBanner, createBanner, updateBanner } from '../../../services/bannerService';

const typeOptions = ['info', 'warning', 'success', 'promo'];

export default function BannerForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: '',
    message: '',
    type: 'info',
    linkUrl: '',
    linkText: '',
    startDate: '',
    endDate: '',
    active: true,
    sortOrder: '0',
  });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      getBanner(id)
        .then((banner) => {
          setForm({
            title: banner.title,
            message: banner.message,
            type: banner.type,
            linkUrl: banner.linkUrl || '',
            linkText: banner.linkText || '',
            startDate: banner.startDate ? banner.startDate.split('T')[0] : '',
            endDate: banner.endDate ? banner.endDate.split('T')[0] : '',
            active: banner.active,
            sortOrder: String(banner.sortOrder),
          });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.message) {
      setError('Title and message are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const payload = {
        title: form.title,
        message: form.message,
        type: form.type,
        linkUrl: form.linkUrl || undefined,
        linkText: form.linkText || undefined,
        startDate: form.startDate || undefined,
        endDate: form.endDate || undefined,
        active: form.active,
        sortOrder: Number(form.sortOrder) || 0,
      };
      if (isEdit) {
        await updateBanner(id!, payload);
      } else {
        await createBanner(payload);
      }
      navigate('/admin/cms/banners');
    } catch (err) {
      console.error('Failed to save banner:', err);
      setError('Failed to save banner.');
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
        <button onClick={() => navigate('/admin/cms/banners')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Banner' : 'New Banner'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <FormField label="Title" value={form.title} onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)} required />

        <FormField label="Message" as="textarea" value={form.message} onChange={(e) => handleChange('message', (e.target as HTMLTextAreaElement).value)} required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Type"
            as="select"
            value={form.type}
            onChange={(e) => handleChange('type', (e.target as HTMLSelectElement).value)}
          >
            {typeOptions.map((t) => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
          </FormField>
          <FormField label="Sort Order" type="number" value={form.sortOrder} onChange={(e) => handleChange('sortOrder', (e.target as HTMLInputElement).value)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Link URL" value={form.linkUrl} onChange={(e) => handleChange('linkUrl', (e.target as HTMLInputElement).value)} placeholder="https://..." />
          <FormField label="Link Text" value={form.linkText} onChange={(e) => handleChange('linkText', (e.target as HTMLInputElement).value)} placeholder="e.g. Learn More" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Start Date" type="date" value={form.startDate} onChange={(e) => handleChange('startDate', (e.target as HTMLInputElement).value)} />
          <FormField label="End Date" type="date" value={form.endDate} onChange={(e) => handleChange('endDate', (e.target as HTMLInputElement).value)} />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="active"
            checked={form.active}
            onChange={(e) => handleChange('active', e.target.checked)}
            className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
          />
          <label htmlFor="active" className="text-sm font-medium text-gray-700">Active</label>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Banner' : 'Create Banner'}
          </button>
          <button type="button" onClick={() => navigate('/admin/cms/banners')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
