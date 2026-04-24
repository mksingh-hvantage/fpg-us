import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getRecommendation, createRecommendation, updateRecommendation } from '../../../services/recommendationService';
import { getServices } from '../../../services/serviceManagementService';
import type { Service } from '../../../types/admin';

export default function RecommendationForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: '',
    description: '',
    serviceId: '',
    targetState: '',
    targetBizType: '',
    triggerEvent: '',
    isAutomatic: false,
    active: true,
    priority: '0',
  });
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const svcData = await getServices({ limit: 100 });
        setServices(svcData.services);

        if (id) {
          const rec = await getRecommendation(id);
          setForm({
            title: rec.title,
            description: rec.description || '',
            serviceId: rec.serviceId || '',
            targetState: rec.targetState || '',
            targetBizType: rec.targetBizType || '',
            triggerEvent: rec.triggerEvent || '',
            isAutomatic: rec.isAutomatic,
            active: rec.active,
            priority: String(rec.priority),
          });
        }
      } catch (err) {
        console.error('Failed to load data:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title) {
      setError('Title is required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const payload = {
        title: form.title,
        description: form.description || undefined,
        serviceId: form.serviceId || undefined,
        targetState: form.targetState || undefined,
        targetBizType: form.targetBizType || undefined,
        triggerEvent: form.triggerEvent || undefined,
        isAutomatic: form.isAutomatic,
        active: form.active,
        priority: Number(form.priority) || 0,
      };
      if (isEdit) {
        await updateRecommendation(id!, payload);
      } else {
        await createRecommendation(payload);
      }
      navigate('/admin/recommendations');
    } catch (err) {
      console.error('Failed to save recommendation:', err);
      setError('Failed to save recommendation.');
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
        <button onClick={() => navigate('/admin/recommendations')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Recommendation' : 'New Recommendation'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <FormField label="Title" value={form.title} onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)} required />

        <FormField label="Description" as="textarea" value={form.description} onChange={(e) => handleChange('description', (e.target as HTMLTextAreaElement).value)} />

        <FormField
          label="Service"
          as="select"
          value={form.serviceId}
          onChange={(e) => handleChange('serviceId', (e.target as HTMLSelectElement).value)}
        >
          <option value="">No service linked</option>
          {services.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField label="Target State" value={form.targetState} onChange={(e) => handleChange('targetState', (e.target as HTMLInputElement).value)} placeholder="e.g. california" />
          <FormField label="Target Business Type" value={form.targetBizType} onChange={(e) => handleChange('targetBizType', (e.target as HTMLInputElement).value)} placeholder="e.g. LLC" />
          <FormField label="Trigger Event" value={form.triggerEvent} onChange={(e) => handleChange('triggerEvent', (e.target as HTMLInputElement).value)} placeholder="e.g. order_completed" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Priority" type="number" value={form.priority} onChange={(e) => handleChange('priority', (e.target as HTMLInputElement).value)} />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isAutomatic"
              checked={form.isAutomatic}
              onChange={(e) => handleChange('isAutomatic', e.target.checked)}
              className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
            />
            <label htmlFor="isAutomatic" className="text-sm font-medium text-gray-700">Automatic</label>
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
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Recommendation' : 'Create Recommendation'}
          </button>
          <button type="button" onClick={() => navigate('/admin/recommendations')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
