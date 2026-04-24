import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { getPermissions, updatePermissions } from '../../../services/permissionService';
import { getUser } from '../../../services/userService';
import type { Permission, User } from '../../../types/admin';

const defaultModules = [
  'Orders',
  'Contacts',
  'Tasks',
  'Documents',
  'Users',
  'Articles',
  'Packages',
  'States',
  'Contracts',
  'Industries',
  'AuditLogs',
  'Permissions',
  'Mailroom',
  'Notifications',
  'EmailTemplates',
  'Services',
  'Recommendations',
  'CMS',
  'FAQ',
  'Banners',
  'Payments',
  'Invoices',
  'Analytics',
  'Settings',
];

export default function UserPermissions() {
  const { id: userId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!userId) return;

    const load = async () => {
      try {
        const [userData, permsData] = await Promise.all([
          getUser(userId),
          getPermissions(userId),
        ]);
        setUser(userData);

        // Merge fetched permissions with defaults for any missing modules
        const permsMap = new Map(permsData.map((p) => [p.module, p]));
        const merged = defaultModules.map((mod) => permsMap.get(mod) || {
          module: mod,
          canView: false,
          canCreate: false,
          canEdit: false,
          canDelete: false,
        });
        setPermissions(merged);
      } catch (err) {
        console.error('Failed to load permissions:', err);
        setError('Failed to load permissions.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  const handleToggle = (module: string, field: keyof Omit<Permission, 'module'>) => {
    setPermissions((prev) =>
      prev.map((p) =>
        p.module === module ? { ...p, [field]: !p[field] } : p
      )
    );
  };

  const handleSave = async () => {
    if (!userId) return;
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      await updatePermissions(userId, permissions);
      setSuccess('Permissions saved successfully.');
    } catch (err) {
      console.error('Failed to save permissions:', err);
      setError('Failed to save permissions.');
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

  if (!user) return <p className="text-gray-500">User not found.</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/users')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Permissions</h2>
          <p className="text-sm text-gray-500">{user.fullName} ({user.email})</p>
        </div>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}
      {success && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">{success}</div>}

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Create</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {permissions.map((perm) => (
                <tr key={perm.module} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{perm.module}</td>
                  <td className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={perm.canView}
                      onChange={() => handleToggle(perm.module, 'canView')}
                      className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={perm.canCreate}
                      onChange={() => handleToggle(perm.module, 'canCreate')}
                      className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={perm.canEdit}
                      onChange={() => handleToggle(perm.module, 'canEdit')}
                      className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={perm.canDelete}
                      onChange={() => handleToggle(perm.module, 'canDelete')}
                      className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving...' : 'Save Permissions'}
        </button>
        <button
          onClick={() => navigate('/admin/users')}
          className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
