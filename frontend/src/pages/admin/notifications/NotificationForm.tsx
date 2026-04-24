import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { createNotification } from '../../../services/notificationService';

const typeOptions = ['INFO', 'WARNING', 'DEADLINE', 'SYSTEM'];
const roleOptions = ['', 'SUPER_ADMIN', 'ADMIN', 'EDITOR'];

export default function NotificationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    message: '',
    type: 'INFO',
    targetEmail: '',
    targetRole: '',
    link: '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
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
      const data: Record<string, string> = {
        title: form.title,
        message: form.message,
        type: form.type,
      };
      if (form.targetEmail) data.targetEmail = form.targetEmail;
      if (form.targetRole) data.targetRole = form.targetRole;
      if (form.link) data.link = form.link;
      await createNotification(data);
      navigate('/admin/notifications');
    } catch (err) {
      console.error('Failed to create notification:', err);
      setError('Failed to send notification.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/notifications')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Send Notification</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4 max-w-lg">
        <FormField
          label="Title"
          value={form.title}
          onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)}
          required
        />
        <FormField
          label="Message"
          as="textarea"
          value={form.message}
          onChange={(e) => handleChange('message', (e.target as HTMLTextAreaElement).value)}
          required
        />
        <FormField
          label="Type"
          as="select"
          value={form.type}
          onChange={(e) => handleChange('type', (e.target as HTMLSelectElement).value)}
        >
          {typeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
        </FormField>
        <FormField
          label="Target Email (optional)"
          type="email"
          value={form.targetEmail}
          onChange={(e) => handleChange('targetEmail', (e.target as HTMLInputElement).value)}
          placeholder="Send to specific email"
        />
        <FormField
          label="Target Role (optional)"
          as="select"
          value={form.targetRole}
          onChange={(e) => handleChange('targetRole', (e.target as HTMLSelectElement).value)}
        >
          <option value="">All roles</option>
          {roleOptions.filter(Boolean).map((r) => <option key={r} value={r}>{r.replace(/_/g, ' ')}</option>)}
        </FormField>
        <FormField
          label="Link (optional)"
          value={form.link}
          onChange={(e) => handleChange('link', (e.target as HTMLInputElement).value)}
          placeholder="e.g. /admin/orders/123"
        />

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Sending...' : 'Send Notification'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/notifications')}
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
