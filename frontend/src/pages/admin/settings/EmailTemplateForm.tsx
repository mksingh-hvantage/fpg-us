import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getEmailTemplate, createEmailTemplate, updateEmailTemplate } from '../../../services/emailTemplateService';

export default function EmailTemplateForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    slug: '',
    name: '',
    subject: '',
    body: '',
    variables: '',
    active: true,
  });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      getEmailTemplate(id)
        .then((template) => {
          setForm({
            slug: template.slug,
            name: template.name,
            subject: template.subject,
            body: template.body,
            variables: template.variables ? JSON.stringify(template.variables, null, 2) : '',
            active: template.active,
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
    if (!form.slug || !form.name || !form.subject || !form.body) {
      setError('Slug, name, subject, and body are required.');
      return;
    }

    let variables: Record<string, string> | undefined;
    if (form.variables.trim()) {
      try {
        variables = JSON.parse(form.variables);
      } catch {
        setError('Variables must be valid JSON.');
        return;
      }
    }

    setSaving(true);
    setError('');
    try {
      const payload = {
        slug: form.slug,
        name: form.name,
        subject: form.subject,
        body: form.body,
        variables,
        active: form.active,
      };
      if (isEdit) {
        await updateEmailTemplate(id!, payload);
      } else {
        await createEmailTemplate(payload);
      }
      navigate('/admin/email-templates');
    } catch (err) {
      console.error('Failed to save email template:', err);
      setError('Failed to save email template.');
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
        <button onClick={() => navigate('/admin/email-templates')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Email Template' : 'New Email Template'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Slug"
            value={form.slug}
            onChange={(e) => handleChange('slug', (e.target as HTMLInputElement).value)}
            required
            placeholder="e.g. order-confirmation"
          />
          <FormField
            label="Name"
            value={form.name}
            onChange={(e) => handleChange('name', (e.target as HTMLInputElement).value)}
            required
            placeholder="e.g. Order Confirmation"
          />
        </div>

        <FormField
          label="Subject"
          value={form.subject}
          onChange={(e) => handleChange('subject', (e.target as HTMLInputElement).value)}
          required
          placeholder="e.g. Your order {{orderNumber}} has been confirmed"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Body (HTML)</label>
          <textarea
            value={form.body}
            onChange={(e) => handleChange('body', e.target.value)}
            rows={16}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
            placeholder="<html>...</html>"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Variables (JSON)</label>
          <textarea
            value={form.variables}
            onChange={(e) => handleChange('variables', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
            placeholder='{"orderNumber": "The order number", "customerName": "Customer full name"}'
          />
          <p className="text-xs text-gray-400 mt-1">Define available template variables and their descriptions.</p>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => handleChange('active', e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
          />
          <span className="text-sm font-medium text-gray-700">Active</span>
        </label>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Template' : 'Create Template'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/email-templates')}
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
