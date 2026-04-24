import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getFaq, createFaq, updateFaq } from '../../../services/faqService';

export default function FaqForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    question: '',
    answer: '',
    category: '',
    sortOrder: '0',
    published: false,
  });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      getFaq(id)
        .then((faq) => {
          setForm({
            question: faq.question,
            answer: faq.answer,
            category: faq.category || '',
            sortOrder: String(faq.sortOrder),
            published: faq.published,
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
    if (!form.question || !form.answer) {
      setError('Question and answer are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const payload = {
        question: form.question,
        answer: form.answer,
        category: form.category || undefined,
        sortOrder: Number(form.sortOrder) || 0,
        published: form.published,
      };
      if (isEdit) {
        await updateFaq(id!, payload);
      } else {
        await createFaq(payload);
      }
      navigate('/admin/cms/faqs');
    } catch (err) {
      console.error('Failed to save FAQ:', err);
      setError('Failed to save FAQ.');
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
        <button onClick={() => navigate('/admin/cms/faqs')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit FAQ' : 'New FAQ'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <FormField label="Question" value={form.question} onChange={(e) => handleChange('question', (e.target as HTMLInputElement).value)} required />

        <FormField label="Answer" as="textarea" value={form.answer} onChange={(e) => handleChange('answer', (e.target as HTMLTextAreaElement).value)} required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Category" value={form.category} onChange={(e) => handleChange('category', (e.target as HTMLInputElement).value)} placeholder="e.g. General, Pricing, Legal" />
          <FormField label="Sort Order" type="number" value={form.sortOrder} onChange={(e) => handleChange('sortOrder', (e.target as HTMLInputElement).value)} />
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
            {saving ? 'Saving...' : isEdit ? 'Update FAQ' : 'Create FAQ'}
          </button>
          <button type="button" onClick={() => navigate('/admin/cms/faqs')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
