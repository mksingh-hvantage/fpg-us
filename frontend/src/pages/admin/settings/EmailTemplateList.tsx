import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '../../../components/admin/DataTable';
import StatusBadge from '../../../components/admin/StatusBadge';
import { getEmailTemplates } from '../../../services/emailTemplateService';
import type { EmailTemplate } from '../../../types/admin';

export default function EmailTemplateList() {
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getEmailTemplates()
      .then(setTemplates)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = search
    ? templates.filter(
        (t) =>
          t.name.toLowerCase().includes(search.toLowerCase()) ||
          t.slug.toLowerCase().includes(search.toLowerCase()) ||
          t.subject.toLowerCase().includes(search.toLowerCase())
      )
    : templates;

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'slug', label: 'Slug', sortable: true },
    { key: 'subject', label: 'Subject', sortable: true },
    {
      key: 'active',
      label: 'Active',
      render: (template: EmailTemplate) => <StatusBadge status={template.active ? 'ACTIVE' : 'INACTIVE'} />,
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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Email Templates</h2>
        <button
          onClick={() => navigate('/admin/email-templates/new')}
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700"
        >
          <Plus className="w-4 h-4" />
          New Template
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        searchPlaceholder="Search by name, slug, or subject..."
        onSearch={setSearch}
        onRowClick={(template) => navigate(`/admin/email-templates/${template.id}`)}
      />
    </div>
  );
}
