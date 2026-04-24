import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getState, updateState } from '../../../services/stateService';

export default function StateForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '', filingFee: '', processingTime: '', annualReportFee: '',
    expeditedTime: '', description: '', benefits: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!id) return;
    getState(id)
      .then((state) => {
        setForm({
          name: state.name,
          filingFee: state.filingFee,
          processingTime: state.processingTime,
          annualReportFee: state.annualReportFee,
          expeditedTime: state.expeditedTime || '',
          description: state.description,
          benefits: Array.isArray(state.benefits) ? state.benefits.join('\n') : '',
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSaving(true);
    setError('');
    setSuccess(false);
    try {
      const benefits = form.benefits.split('\n').filter((b) => b.trim());
      await updateState(id, {
        filingFee: form.filingFee,
        processingTime: form.processingTime,
        annualReportFee: form.annualReportFee,
        expeditedTime: form.expeditedTime || undefined,
        description: form.description,
        benefits,
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to update state:', err);
      setError('Failed to update state.');
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
        <button onClick={() => navigate('/admin/states')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Edit State: {form.name}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}
      {success && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">State updated successfully!</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Filing Fee" value={form.filingFee} onChange={(e) => handleChange('filingFee', (e.target as HTMLInputElement).value)} required placeholder="e.g. $70" />
          <FormField label="Processing Time" value={form.processingTime} onChange={(e) => handleChange('processingTime', (e.target as HTMLInputElement).value)} required placeholder="e.g. 10-15 business days" />
          <FormField label="Annual Report Fee" value={form.annualReportFee} onChange={(e) => handleChange('annualReportFee', (e.target as HTMLInputElement).value)} required placeholder="e.g. $800" />
          <FormField label="Expedited Time" value={form.expeditedTime} onChange={(e) => handleChange('expeditedTime', (e.target as HTMLInputElement).value)} placeholder="e.g. 1-2 business days" />
        </div>

        <FormField label="Description" as="textarea" value={form.description} onChange={(e) => handleChange('description', (e.target as HTMLTextAreaElement).value)} required />

        <FormField label="Benefits (one per line)" as="textarea" value={form.benefits} onChange={(e) => handleChange('benefits', (e.target as HTMLTextAreaElement).value)} placeholder="No state income tax&#10;Low filing fees&#10;..." />

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Update State'}
          </button>
          <button type="button" onClick={() => navigate('/admin/states')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
