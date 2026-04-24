import { useEffect, useState } from 'react';
import { Plus, Trash2, Copy, Check, Key } from 'lucide-react';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getApiKeys, createApiKey, updateApiKey, deleteApiKey } from '../../../services/apiKeyService';
import type { ApiKey } from '../../../types/admin';

export default function ApiKeyList() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [creating, setCreating] = useState(false);
  const [generatedKey, setGeneratedKey] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchKeys = async () => {
    try {
      const data = await getApiKeys();
      setKeys(data);
    } catch (err) {
      console.error('Failed to fetch API keys:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchKeys(); }, []);

  const handleGenerate = async () => {
    if (!newKeyName.trim()) return;
    setCreating(true);
    try {
      const created = await createApiKey({ name: newKeyName.trim() });
      if (created.key) {
        setGeneratedKey(created.key);
      }
      setNewKeyName('');
      setShowForm(false);
      fetchKeys();
    } catch (err) {
      console.error('Failed to create API key:', err);
    } finally {
      setCreating(false);
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleActive = async (key: ApiKey) => {
    try {
      await updateApiKey(key.id, { active: !key.active });
      fetchKeys();
    } catch (err) {
      console.error('Failed to update API key:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this API key? This action cannot be undone.')) return;
    try {
      await deleteApiKey(id);
      fetchKeys();
    } catch (err) {
      console.error('Failed to delete API key:', err);
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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">API Keys</h2>
        <button
          onClick={() => { setShowForm(true); setGeneratedKey(''); }}
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
        >
          <Plus className="w-4 h-4" />
          Generate Key
        </button>
      </div>

      {/* Generated Key Banner */}
      {generatedKey && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-800 mb-2">
            API key generated successfully. Copy it now -- it will not be shown again.
          </p>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-white px-3 py-2 rounded border border-green-300 text-sm font-mono text-gray-900 break-all">
              {generatedKey}
            </code>
            <button
              onClick={() => handleCopy(generatedKey)}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}

      {/* Inline Generate Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Generate New API Key</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="Key name (e.g. Production API)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
            />
            <button
              onClick={handleGenerate}
              disabled={creating || !newKeyName.trim()}
              className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
            >
              {creating ? 'Generating...' : 'Generate'}
            </button>
            <button
              onClick={() => { setShowForm(false); setNewKeyName(''); }}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* API Keys List */}
      {keys.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <Key className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No API keys yet. Generate one to get started.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {keys.map((apiKey) => (
            <div key={apiKey.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-900">{apiKey.name}</h3>
                    <StatusBadge status={apiKey.active ? 'ACTIVE' : 'INACTIVE'} />
                  </div>
                  <p className="text-sm text-gray-500 font-mono">{apiKey.prefix}...</p>
                  <div className="flex gap-4 text-xs text-gray-400 mt-2">
                    {apiKey.createdBy && (
                      <span>Created by: {apiKey.createdBy.fullName}</span>
                    )}
                    {apiKey.lastUsedAt && (
                      <span>Last used: {new Date(apiKey.lastUsedAt).toLocaleDateString()}</span>
                    )}
                    {apiKey.expiresAt && (
                      <span>Expires: {new Date(apiKey.expiresAt).toLocaleDateString()}</span>
                    )}
                    <span>Created: {new Date(apiKey.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleActive(apiKey)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      apiKey.active
                        ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                        : 'bg-green-50 text-green-700 hover:bg-green-100'
                    }`}
                  >
                    {apiKey.active ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    onClick={() => handleDelete(apiKey.id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
