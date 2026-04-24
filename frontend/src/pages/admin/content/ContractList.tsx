import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import FormField from '../../../components/admin/FormField';
import { getContractTemplates, createContractTemplate, updateContractTemplate, deleteContractTemplate } from '../../../services/contentService';
import type { ContractTemplate } from '../../../types/admin';

export default function ContractList() {
  const [contracts, setContracts] = useState<ContractTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', slug: '', category: '', description: '', published: true });
  const [saving, setSaving] = useState(false);

  const fetchContracts = async () => {
    try {
      const data = await getContractTemplates();
      setContracts(data);
    } catch (err) {
      console.error('Failed to fetch contracts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchContracts(); }, []);

  const openCreate = () => {
    setEditId(null);
    setForm({ name: '', slug: '', category: '', description: '', published: true });
    setShowModal(true);
  };

  const openEdit = (contract: ContractTemplate) => {
    setEditId(contract.id);
    setForm({ name: contract.name, slug: contract.slug, category: contract.category, description: contract.description || '', published: contract.published });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editId) {
        await updateContractTemplate(editId, form);
      } else {
        await createContractTemplate(form);
      }
      setShowModal(false);
      fetchContracts();
    } catch (err) {
      console.error('Failed to save contract:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this contract template?')) return;
    try {
      await deleteContractTemplate(id);
      fetchContracts();
    } catch (err) {
      console.error('Failed to delete contract:', err);
    }
  };

  const handleTogglePublish = async (contract: ContractTemplate) => {
    try {
      await updateContractTemplate(contract.id, { published: !contract.published });
      fetchContracts();
    } catch (err) {
      console.error('Failed to toggle publish:', err);
    }
  };

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'slug', label: 'Slug' },
    { key: 'category', label: 'Category', sortable: true },
    {
      key: 'published', label: 'Status',
      render: (c: ContractTemplate) => (
        <button
          onClick={(e) => { e.stopPropagation(); handleTogglePublish(c); }}
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${c.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
        >
          {c.published ? 'Published' : 'Draft'}
        </button>
      ),
    },
    {
      key: 'actions', label: 'Actions',
      render: (c: ContractTemplate) => (
        <div className="flex gap-2">
          <button onClick={(e) => { e.stopPropagation(); openEdit(c); }} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Edit className="w-4 h-4" /></button>
          <button onClick={(e) => { e.stopPropagation(); handleDelete(c.id); }} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="w-4 h-4" /></button>
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
        <h2 className="text-2xl font-bold text-gray-900">Contract Templates</h2>
        <button onClick={openCreate} className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700">
          <Plus className="w-4 h-4" /> New Template
        </button>
      </div>

      <DataTable columns={columns} data={contracts} searchPlaceholder="Search contracts..." />

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{editId ? 'Edit' : 'New'} Contract Template</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value, ...(!editId ? { slug: (e.target as HTMLInputElement).value.toLowerCase().replace(/[^a-z0-9]+/g, '-') } : {}) })} required />
              <FormField label="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: (e.target as HTMLInputElement).value })} required />
              <FormField label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: (e.target as HTMLInputElement).value })} required placeholder="e.g. Business, Legal, Employment" />
              <FormField label="Description" as="textarea" value={form.description} onChange={(e) => setForm({ ...form, description: (e.target as HTMLTextAreaElement).value })} />
              <div className="flex gap-3">
                <button type="submit" disabled={saving} className="flex-1 bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50">
                  {saving ? 'Saving...' : editId ? 'Update' : 'Create'}
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
