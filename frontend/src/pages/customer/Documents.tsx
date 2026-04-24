import { useState, useEffect } from 'react';
import { Loader2, FolderOpen, Download, FileText } from 'lucide-react';
import { getCustomerDocuments, downloadCustomerDocument } from '../../services/customerService';
import type { CustomerDocument } from '../../types/customer';

const CATEGORY_TABS = ['ALL', 'FORMATION', 'LEGAL', 'TAX', 'COMPLIANCE', 'GENERAL'];

const categoryColors: Record<string, string> = {
  FORMATION: 'bg-blue-100 text-blue-700',
  LEGAL: 'bg-purple-100 text-purple-700',
  TAX: 'bg-green-100 text-green-700',
  COMPLIANCE: 'bg-orange-100 text-orange-700',
  GENERAL: 'bg-gray-100 text-gray-700',
};

export default function CustomerDocuments() {
  const [documents, setDocuments] = useState<CustomerDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('ALL');

  useEffect(() => {
    setLoading(true);
    getCustomerDocuments({ category: category === 'ALL' ? undefined : category })
      .then((res) => setDocuments(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [category]);

  const handleDownload = async (id: string) => {
    try {
      const res = await downloadCustomerDocument(id);
      window.open(res.data.url, '_blank');
    } catch { /* ignore */ }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Documents</h1>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORY_TABS.map((tab) => (
          <button key={tab} onClick={() => setCategory(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              category === tab ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab === 'ALL' ? 'All' : tab.charAt(0) + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>
      ) : documents.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No documents found</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-orange-500" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[doc.category] || ''}`}>
                  {doc.category}
                </span>
              </div>
              <h3 className="font-medium text-sm mb-1 line-clamp-1">{doc.fileName}</h3>
              {doc.order && (
                <p className="text-xs text-gray-500 mb-2">{doc.order.llcName}</p>
              )}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">{new Date(doc.createdAt).toLocaleDateString()}</span>
                <button onClick={() => handleDownload(doc.id)}
                  className="flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 font-medium"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
