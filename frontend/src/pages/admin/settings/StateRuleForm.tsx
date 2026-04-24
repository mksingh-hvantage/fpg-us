import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormField from '../../../components/admin/FormField';
import { getStateRule, createStateRule, updateStateRule } from '../../../services/stateRuleService';
import { getStates } from '../../../services/stateService';
import type { State } from '../../../types/admin';

export default function StateRuleForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    stateSlug: '',
    ruleType: '',
    description: '',
    dueDate: '',
    fee: '',
    penaltyFee: '',
    reminderDaysBefore: '',
    active: true,
  });
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const statesData = await getStates();
        setStates(statesData);
        if (id) {
          const rule = await getStateRule(id);
          setForm({
            stateSlug: rule.stateSlug,
            ruleType: rule.ruleType,
            description: rule.description || '',
            dueDate: rule.dueDate || '',
            fee: rule.fee || '',
            penaltyFee: rule.penaltyFee || '',
            reminderDaysBefore: rule.reminderDaysBefore?.toString() || '',
            active: rule.active,
          });
        }
      } catch (err) {
        console.error('Failed to load data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.stateSlug || !form.ruleType) {
      setError('State and rule type are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const payload = {
        stateSlug: form.stateSlug,
        ruleType: form.ruleType,
        description: form.description || undefined,
        dueDate: form.dueDate || undefined,
        fee: form.fee || undefined,
        penaltyFee: form.penaltyFee || undefined,
        reminderDaysBefore: form.reminderDaysBefore ? parseInt(form.reminderDaysBefore, 10) : undefined,
        active: form.active,
      };
      if (isEdit) {
        await updateStateRule(id!, payload);
      } else {
        await createStateRule(payload);
      }
      navigate('/admin/state-rules');
    } catch (err) {
      console.error('Failed to save state rule:', err);
      setError('Failed to save state rule.');
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
        <button onClick={() => navigate('/admin/state-rules')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit State Rule' : 'New State Rule'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="State"
            as="select"
            value={form.stateSlug}
            onChange={(e) => handleChange('stateSlug', (e.target as HTMLSelectElement).value)}
            required
          >
            <option value="">Select a state</option>
            {states.map((s) => (
              <option key={s.id} value={s.slug}>{s.name}</option>
            ))}
          </FormField>

          <FormField
            label="Rule Type"
            value={form.ruleType}
            onChange={(e) => handleChange('ruleType', (e.target as HTMLInputElement).value)}
            required
            placeholder="e.g. ANNUAL_REPORT, FRANCHISE_TAX"
          />

          <FormField
            label="Due Date"
            value={form.dueDate}
            onChange={(e) => handleChange('dueDate', (e.target as HTMLInputElement).value)}
            placeholder="e.g. March 1st, Anniversary Month"
          />

          <FormField
            label="Fee ($)"
            type="number"
            step="0.01"
            min="0"
            value={form.fee}
            onChange={(e) => handleChange('fee', (e.target as HTMLInputElement).value)}
            placeholder="0.00"
          />

          <FormField
            label="Penalty Fee ($)"
            type="number"
            step="0.01"
            min="0"
            value={form.penaltyFee}
            onChange={(e) => handleChange('penaltyFee', (e.target as HTMLInputElement).value)}
            placeholder="0.00"
          />

          <FormField
            label="Reminder Days Before"
            type="number"
            min="0"
            value={form.reminderDaysBefore}
            onChange={(e) => handleChange('reminderDaysBefore', (e.target as HTMLInputElement).value)}
            placeholder="e.g. 30"
          />
        </div>

        <FormField
          label="Description"
          as="textarea"
          value={form.description}
          onChange={(e) => handleChange('description', (e.target as HTMLTextAreaElement).value)}
          placeholder="Description of this filing rule..."
        />

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => handleChange('active', e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
          />
          <span className="text-sm font-medium text-gray-700">Active</span>
        </label>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Rule' : 'Create Rule'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/state-rules')}
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
