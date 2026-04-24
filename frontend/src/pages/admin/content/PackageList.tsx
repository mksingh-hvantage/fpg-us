import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, GripVertical, Star } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import FormField from '../../../components/admin/FormField';
import { getPackages, createPackage, updatePackage, deletePackage } from '../../../services/packageService';
import type { Package, PackageFeature } from '../../../types/admin';

const emptyFeature: PackageFeature = { name: '', included: false };

interface PackageForm {
  name: string;
  price: number;
  processingTime: string;
  recommended: boolean;
  sortOrder: number;
  published: boolean;
  features: PackageFeature[];
}

const defaultForm: PackageForm = {
  name: '',
  price: 0,
  processingTime: '',
  recommended: false,
  sortOrder: 0,
  published: true,
  features: [{ ...emptyFeature }],
};

export default function PackageList() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<PackageForm>({ ...defaultForm });
  const [saving, setSaving] = useState(false);

  const fetchPackages = async () => {
    try {
      const data = await getPackages();
      setPackages(data);
    } catch (err) {
      console.error('Failed to fetch packages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPackages(); }, []);

  const openCreate = () => {
    setEditId(null);
    setForm({ ...defaultForm, features: [{ ...emptyFeature }] });
    setShowModal(true);
  };

  const openEdit = (pkg: Package) => {
    setEditId(pkg.id);
    setForm({
      name: pkg.name,
      price: pkg.price,
      processingTime: pkg.processingTime,
      recommended: pkg.recommended,
      sortOrder: pkg.sortOrder,
      published: pkg.published,
      features: pkg.features.length > 0 ? pkg.features.map(f => ({ ...f })) : [{ ...emptyFeature }],
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...form,
        features: form.features.filter(f => f.name.trim() !== ''),
      };
      if (editId) {
        await updatePackage(editId, payload);
      } else {
        await createPackage(payload);
      }
      setShowModal(false);
      fetchPackages();
    } catch (err) {
      console.error('Failed to save package:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this package?')) return;
    try {
      await deletePackage(id);
      fetchPackages();
    } catch (err) {
      console.error('Failed to delete package:', err);
    }
  };

  const handleTogglePublish = async (pkg: Package) => {
    try {
      await updatePackage(pkg.id, { published: !pkg.published });
      fetchPackages();
    } catch (err) {
      console.error('Failed to toggle publish:', err);
    }
  };

  const updateFeature = (index: number, updates: Partial<PackageFeature>) => {
    setForm(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? { ...f, ...updates } : f),
    }));
  };

  const addFeature = () => {
    setForm(prev => ({ ...prev, features: [...prev.features, { ...emptyFeature }] }));
  };

  const removeFeature = (index: number) => {
    setForm(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }));
  };

  const columns = [
    {
      key: 'name', label: 'Name', sortable: true,
      render: (p: Package) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{p.name}</span>
          {p.recommended && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
        </div>
      ),
    },
    {
      key: 'price', label: 'Price', sortable: true,
      render: (p: Package) => <span>${p.price}</span>,
    },
    { key: 'processingTime', label: 'Processing Time' },
    {
      key: 'sortOrder', label: 'Order', sortable: true,
      render: (p: Package) => <span className="text-gray-500">{p.sortOrder}</span>,
    },
    {
      key: 'published', label: 'Status',
      render: (p: Package) => (
        <button
          onClick={(e) => { e.stopPropagation(); handleTogglePublish(p); }}
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${p.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
        >
          {p.published ? 'Published' : 'Draft'}
        </button>
      ),
    },
    {
      key: 'actions', label: 'Actions',
      render: (p: Package) => (
        <div className="flex gap-2">
          <button onClick={(e) => { e.stopPropagation(); openEdit(p); }} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Edit className="w-4 h-4" /></button>
          <button onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="w-4 h-4" /></button>
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
        <h2 className="text-2xl font-bold text-gray-900">Packages</h2>
        <button onClick={openCreate} className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700">
          <Plus className="w-4 h-4" /> New Package
        </button>
      </div>

      <DataTable columns={columns} data={packages} searchPlaceholder="Search packages..." />

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl my-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{editId ? 'Edit' : 'New'} Package</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value })}
                  required
                />
                <FormField
                  label="Price ($)"
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: parseInt((e.target as HTMLInputElement).value) || 0 })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Processing Time"
                  value={form.processingTime}
                  onChange={(e) => setForm({ ...form, processingTime: (e.target as HTMLInputElement).value })}
                  required
                  placeholder="e.g. 4 Weeks"
                />
                <FormField
                  label="Sort Order"
                  type="number"
                  value={form.sortOrder}
                  onChange={(e) => setForm({ ...form, sortOrder: parseInt((e.target as HTMLInputElement).value) || 0 })}
                />
              </div>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.recommended}
                    onChange={(e) => setForm({ ...form, recommended: e.target.checked })}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  Recommended
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) => setForm({ ...form, published: e.target.checked })}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  Published
                </label>
              </div>

              {/* Features editor */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">Features</label>
                  <button type="button" onClick={addFeature} className="text-xs text-cyan-600 hover:text-cyan-700 font-medium">
                    + Add Feature
                  </button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-3">
                  {form.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <GripVertical className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      <input
                        type="text"
                        value={feature.name}
                        onChange={(e) => updateFeature(idx, { name: e.target.value })}
                        placeholder="Feature name"
                        className="flex-1 px-2 py-1.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
                      />
                      <label className="flex items-center gap-1 text-xs text-gray-600 flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={feature.included}
                          onChange={(e) => updateFeature(idx, { included: e.target.checked })}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        Included
                      </label>
                      {!feature.included && (
                        <input
                          type="number"
                          value={feature.addonPrice ?? ''}
                          onChange={(e) => updateFeature(idx, {
                            addonPrice: e.target.value ? parseInt(e.target.value) : undefined,
                          })}
                          placeholder="Addon $"
                          className="w-20 px-2 py-1.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => removeFeature(idx)}
                        className="p-1 rounded hover:bg-red-50 text-red-400 hover:text-red-600 flex-shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving} className="flex-1 bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50">
                  {saving ? 'Saving...' : editId ? 'Update' : 'Create'}
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
