import { useState, useEffect } from 'react';
import { Loader2, Save, User, Building } from 'lucide-react';
import { useCustomerAuth } from '../../contexts/CustomerAuthContext';
import { updateCustomerProfile, getProfileScore, getComplianceAlerts } from '../../services/customerService';
import type { ProfileScore, ComplianceAlert } from '../../types/customer';

type Tab = 'account' | 'business';

export default function CustomerSettings() {
  const { customer, updateCustomer } = useCustomerAuth();
  const [activeTab, setActiveTab] = useState<Tab>('account');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Account form
  const [account, setAccount] = useState({ firstName: '', lastName: '', phone: '' });
  // Business form
  const [business, setBusiness] = useState({ businessName: '', businessType: '', state: '' });
  // Profile score + compliance
  const [profileScore, setProfileScore] = useState<ProfileScore | null>(null);
  const [complianceAlerts, setComplianceAlerts] = useState<ComplianceAlert[]>([]);

  useEffect(() => {
    if (customer) {
      setAccount({ firstName: customer.firstName || '', lastName: customer.lastName || '', phone: customer.phone || '' });
      setBusiness({ businessName: customer.businessName || '', businessType: customer.businessType || '', state: customer.state || '' });
    }
    getProfileScore().then((res) => setProfileScore(res.data)).catch(() => {});
    getComplianceAlerts().then((res) => setComplianceAlerts(res.data)).catch(() => {});
  }, [customer]);

  const saveAccount = async () => {
    setSaving(true); setMessage(''); setError('');
    try {
      const res = await updateCustomerProfile(account);
      updateCustomer(res.data);
      setMessage('Account updated successfully');
    } catch { setError('Failed to update account'); }
    finally { setSaving(false); }
  };

  const saveBusiness = async () => {
    setSaving(true); setMessage(''); setError('');
    try {
      const res = await updateCustomerProfile(business);
      updateCustomer(res.data);
      setMessage('Business profile updated');
    } catch { setError('Failed to update business profile'); }
    finally { setSaving(false); }
  };

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: 'account', label: 'Account', icon: User },
    { key: 'business', label: 'Business Profile', icon: Building },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 max-w-md">
        {tabs.map((tab) => (
          <button key={tab.key} onClick={() => { setActiveTab(tab.key); setMessage(''); setError(''); }}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === tab.key ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {message && <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">{message}</div>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">{error}</div>}

      {/* Account Tab */}
      {activeTab === 'account' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input type="text" value={account.firstName} onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
              className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input type="text" value={account.lastName} onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
              className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="tel" value={account.phone} onChange={(e) => setAccount({ ...account, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" value={customer?.email || ''} disabled
              className="w-full border border-gray-200 rounded-lg py-2.5 px-4 bg-gray-50 text-gray-500" />
          </div>
          <button onClick={saveAccount} disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save Changes
          </button>
        </div>
      )}

      {/* Business Tab */}
      {activeTab === 'business' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Business Name</label>
              <input type="text" value={business.businessName} onChange={(e) => setBusiness({ ...business, businessName: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Business Type</label>
              <select value={business.businessType} onChange={(e) => setBusiness({ ...business, businessType: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option value="">Select type</option>
                <option value="LLC">LLC</option>
                <option value="S-Corp">S-Corporation</option>
                <option value="C-Corp">C-Corporation</option>
                <option value="Nonprofit">Nonprofit</option>
                <option value="DBA">DBA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input type="text" value={business.state} onChange={(e) => setBusiness({ ...business, state: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="e.g., california" />
            </div>
            <button onClick={saveBusiness} disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save Changes
            </button>
          </div>

          {/* Profile Score */}
          {profileScore && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg">
              <h3 className="font-semibold mb-3">Profile Completeness: {profileScore.score}%</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-orange-500 h-2 rounded-full transition-all" style={{ width: `${profileScore.score}%` }} />
              </div>
              <div className="space-y-2">
                {profileScore.checks.map((check) => (
                  <div key={check.field} className="flex items-center gap-2 text-sm">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${check.complete ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {check.complete ? '\u2713' : ''}
                    </span>
                    <span className={check.complete ? 'text-gray-700' : 'text-gray-400'}>{check.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compliance Alerts */}
          {complianceAlerts.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg">
              <h3 className="font-semibold mb-3">Compliance Alerts</h3>
              <div className="space-y-3">
                {complianceAlerts.map((alert) => (
                  <div key={alert.id} className="bg-orange-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-orange-900">{alert.ruleType}</p>
                    {alert.description && <p className="text-xs text-orange-700 mt-1">{alert.description}</p>}
                    <div className="flex gap-3 mt-2 text-xs text-orange-600">
                      {alert.dueDate && <span>Due: {alert.dueDate}</span>}
                      {alert.fee && <span>Fee: ${Number(alert.fee).toFixed(2)}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
