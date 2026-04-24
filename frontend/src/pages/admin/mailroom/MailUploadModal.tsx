import { useState, useRef } from 'react';
import { X } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { createMailItem } from '../../../services/mailroomService';

interface MailUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploaded: () => void;
}

export default function MailUploadModal({ isOpen, onClose, onUploaded }: MailUploadModalProps) {
  const [form, setForm] = useState({
    subject: '',
    description: '',
    sender: '',
    orderId: '',
    taggedEmail: '',
    notes: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.subject) {
      setError('Subject is required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('subject', form.subject);
      if (form.description) formData.append('description', form.description);
      if (form.sender) formData.append('sender', form.sender);
      if (form.orderId) formData.append('orderId', form.orderId);
      if (form.taggedEmail) formData.append('taggedEmail', form.taggedEmail);
      if (form.notes) formData.append('notes', form.notes);
      if (file) formData.append('scan', file);
      await createMailItem(formData);
      setForm({ subject: '', description: '', sender: '', orderId: '', taggedEmail: '', notes: '' });
      setFile(null);
      if (fileRef.current) fileRef.current.value = '';
      onUploaded();
    } catch (err) {
      console.error('Failed to upload mail:', err);
      setError('Failed to upload mail item.');
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Upload Mail</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {error && <div className="mx-5 mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <FormField
            label="Subject"
            value={form.subject}
            onChange={(e) => handleChange('subject', (e.target as HTMLInputElement).value)}
            required
          />
          <FormField
            label="Description"
            as="textarea"
            value={form.description}
            onChange={(e) => handleChange('description', (e.target as HTMLTextAreaElement).value)}
          />
          <FormField
            label="Sender"
            value={form.sender}
            onChange={(e) => handleChange('sender', (e.target as HTMLInputElement).value)}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Scan File</label>
            <input
              ref={fileRef}
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
            />
          </div>
          <FormField
            label="Order ID (optional)"
            value={form.orderId}
            onChange={(e) => handleChange('orderId', (e.target as HTMLInputElement).value)}
            placeholder="Link to an order"
          />
          <FormField
            label="Tagged Email"
            type="email"
            value={form.taggedEmail}
            onChange={(e) => handleChange('taggedEmail', (e.target as HTMLInputElement).value)}
          />
          <FormField
            label="Notes"
            as="textarea"
            value={form.notes}
            onChange={(e) => handleChange('notes', (e.target as HTMLTextAreaElement).value)}
          />

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={saving}
              className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
            >
              {saving ? 'Uploading...' : 'Upload Mail'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
