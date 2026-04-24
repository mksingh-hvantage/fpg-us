import { useEffect, useState, useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import { getDocuments, uploadDocument } from '../../../services/documentService';
import { useAuth } from '../../../contexts/AuthContext';
import type { Document as DocType, DocumentCategory } from '../../../types/admin';

const categoryOptions: Array<'all' | DocumentCategory> = ['all', 'FORMATION', 'LEGAL', 'TAX', 'COMPLIANCE', 'GENERAL'];

function formatFileSize(bytes?: number): string {
  if (!bytes) return '-';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function DocumentList() {
  const [documents, setDocuments] = useState<DocType[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState<'all' | DocumentCategory>('all');
  const [search, setSearch] = useState('');
  const [showUpload, setShowUpload] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const { canCreate } = useAuth();
  const [uploadForm, setUploadForm] = useState({
    file: null as File | null,
    category: 'GENERAL' as DocumentCategory,
    orderId: '',
    notes: '',
  });

  const fetchDocuments = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (category !== 'all') params.category = category;
      if (search) params.search = search;
      const data = await getDocuments(params);
      setDocuments(data.documents);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch documents:', err);
    } finally {
      setLoading(false);
    }
  }, [category, search, page]);

  useEffect(() => { fetchDocuments(); }, [fetchDocuments]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadForm.file) {
      setUploadError('Please select a file.');
      return;
    }
    setUploading(true);
    setUploadError('');
    try {
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('category', uploadForm.category);
      if (uploadForm.orderId) formData.append('orderId', uploadForm.orderId);
      if (uploadForm.notes) formData.append('notes', uploadForm.notes);
      await uploadDocument(formData);
      setShowUpload(false);
      setUploadForm({ file: null, category: 'GENERAL', orderId: '', notes: '' });
      fetchDocuments();
    } catch (err) {
      console.error('Failed to upload document:', err);
      setUploadError('Failed to upload document.');
    } finally {
      setUploading(false);
    }
  };

  const columns = [
    { key: 'fileName', label: 'File Name', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    {
      key: 'order',
      label: 'Order',
      render: (doc: DocType) => doc.order?.orderNumber || '-',
    },
    {
      key: 'uploadedBy',
      label: 'Uploaded By',
      render: (doc: DocType) => doc.uploadedBy?.fullName || '-',
    },
    {
      key: 'fileSize',
      label: 'Size',
      render: (doc: DocType) => formatFileSize(doc.fileSize),
    },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (doc: DocType) => new Date(doc.createdAt).toLocaleDateString(),
    },
  ];

  if (loading && documents.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
        {canCreate('Documents') && (
          <button
            onClick={() => setShowUpload(true)}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
          >
            <Upload className="w-4 h-4" />
            Upload
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap">
        {categoryOptions.map((c) => (
          <button
            key={c}
            onClick={() => { setCategory(c); setPage(1); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              category === c ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {c === 'all' ? 'All' : c}
          </button>
        ))}
      </div>

      <DataTable
        columns={columns}
        data={documents}
        searchPlaceholder="Search documents..."
        onSearch={(q) => { setSearch(q); setPage(1); }}
        page={page}
        totalPages={totalPages}
        total={total}
        onPageChange={setPage}
      />

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Upload Document</h3>
              <button onClick={() => setShowUpload(false)} className="p-1 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {uploadError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">{uploadError}</div>
            )}

            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
                <input
                  type="file"
                  onChange={(e) => setUploadForm((prev) => ({ ...prev, file: e.target.files?.[0] || null }))}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={uploadForm.category}
                  onChange={(e) => setUploadForm((prev) => ({ ...prev, category: e.target.value as DocumentCategory }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                >
                  {categoryOptions.filter((c) => c !== 'all').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order ID (optional)</label>
                <input
                  type="text"
                  value={uploadForm.orderId}
                  onChange={(e) => setUploadForm((prev) => ({ ...prev, orderId: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  placeholder="Paste order ID if linked"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={uploadForm.notes}
                  onChange={(e) => setUploadForm((prev) => ({ ...prev, notes: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  placeholder="Optional notes..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
                >
                  {uploading ? 'Uploading...' : 'Upload'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowUpload(false)}
                  className="flex-1 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
                >
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
