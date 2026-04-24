import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getUser, createUser, updateUser } from '../../../services/userService';

const roles = ['SUPER_ADMIN', 'ADMIN', 'EDITOR'];

export default function UserForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({ email: '', password: '', fullName: '', role: 'ADMIN' });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      getUser(id)
        .then((user) => {
          setForm({ email: user.email, password: '', fullName: user.fullName, role: user.role });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.fullName || (!isEdit && !form.password)) {
      setError('All fields are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      if (isEdit) {
        const data: Record<string, string> = { email: form.email, fullName: form.fullName, role: form.role };
        if (form.password) data.password = form.password;
        await updateUser(id!, data);
      } else {
        await createUser(form);
      }
      navigate('/admin/users');
    } catch (err) {
      console.error('Failed to save user:', err);
      setError('Failed to save user. Email might already be in use.');
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
        <button onClick={() => navigate('/admin/users')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit User' : 'New User'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4 max-w-lg">
        <FormField label="Full Name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: (e.target as HTMLInputElement).value })} required />
        <FormField label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: (e.target as HTMLInputElement).value })} required />
        <FormField
          label={isEdit ? 'Password (leave blank to keep current)' : 'Password'}
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: (e.target as HTMLInputElement).value })}
          required={!isEdit}
          placeholder={isEdit ? 'Leave blank to keep current' : 'Enter password'}
        />
        <FormField label="Role" as="select" value={form.role} onChange={(e) => setForm({ ...form, role: (e.target as HTMLSelectElement).value })}>
          {roles.map((r) => <option key={r} value={r}>{r.replace(/_/g, ' ')}</option>)}
        </FormField>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update User' : 'Create User'}
          </button>
          <button type="button" onClick={() => navigate('/admin/users')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
