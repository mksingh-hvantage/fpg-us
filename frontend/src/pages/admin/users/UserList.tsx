import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Shield, LogIn, ToggleLeft, ToggleRight } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getUsers, deleteUser, toggleUserActive, loginAsUser } from '../../../services/userService';
import { useAuth } from '../../../contexts/AuthContext';
import type { User } from '../../../types/admin';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { user: currentUser, login, canCreate, canEdit, canDelete } = useAuth();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleDelete = async (id: string) => {
    if (id === currentUser?.id) {
      alert('You cannot delete your own account.');
      return;
    }
    if (!confirm('Are you sure you want to delete this user?')) return;
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  const handleToggleActive = async (id: string) => {
    try {
      await toggleUserActive(id);
      fetchUsers();
    } catch (err) {
      console.error('Failed to toggle user:', err);
    }
  };

  const handleLoginAs = async (id: string) => {
    if (!confirm('Login as this user? You will be logged out of your current session.')) return;
    try {
      const data = await loginAsUser(id);
      login(data.token, data.user);
      navigate('/admin');
    } catch (err) {
      console.error('Failed to login as user:', err);
    }
  };

  const columns = [
    { key: 'fullName', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', render: (u: User) => <StatusBadge status={u.role} /> },
    {
      key: 'isActive', label: 'Status',
      render: (u: User) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.isActive !== false ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {u.isActive !== false ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    { key: 'createdAt', label: 'Created', sortable: true, render: (u: User) => new Date(u.createdAt).toLocaleDateString() },
    {
      key: 'actions', label: 'Actions',
      render: (u: User) => (
        <div className="flex gap-1">
          {canEdit('Users') && (
            <button onClick={(e) => { e.stopPropagation(); navigate(`/admin/users/${u.id}`); }} className="p-1.5 rounded hover:bg-gray-100 text-gray-500" title="Edit">
              <Edit className="w-4 h-4" />
            </button>
          )}
          {u.role !== 'SUPER_ADMIN' && canEdit('Permissions') && (
            <button onClick={(e) => { e.stopPropagation(); navigate(`/admin/users/${u.id}/permissions`); }} className="p-1.5 rounded hover:bg-gray-100 text-blue-500" title="Permissions">
              <Shield className="w-4 h-4" />
            </button>
          )}
          {u.id !== currentUser?.id && (
            <>
              {canEdit('Users') && (
                <button onClick={(e) => { e.stopPropagation(); handleToggleActive(u.id); }} className="p-1.5 rounded hover:bg-gray-100 text-yellow-600" title={u.isActive !== false ? 'Deactivate' : 'Activate'}>
                  {u.isActive !== false ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                </button>
              )}
              {canEdit('Users') && (
                <button onClick={(e) => { e.stopPropagation(); handleLoginAs(u.id); }} className="p-1.5 rounded hover:bg-gray-100 text-cyan-600" title="Login as">
                  <LogIn className="w-4 h-4" />
                </button>
              )}
              {canDelete('Users') && (
                <button onClick={(e) => { e.stopPropagation(); handleDelete(u.id); }} className="p-1.5 rounded hover:bg-red-50 text-red-500" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </>
          )}
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Staff / Users</h2>
        {canCreate('Users') && (
          <button onClick={() => navigate('/admin/users/new')} className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700">
            <Plus className="w-4 h-4" /> New User
          </button>
        )}
      </div>

      <DataTable columns={columns} data={users} searchPlaceholder="Search users..." />
    </div>
  );
}
