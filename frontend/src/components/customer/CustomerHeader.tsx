import { LogOut, User, ChevronDown } from 'lucide-react';
import { useCustomerAuth } from '../../contexts/CustomerAuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import CustomerNotificationBell from './CustomerNotificationBell';

export default function CustomerHeader() {
  const { customer, logout } = useCustomerAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">
          {customer?.businessName || 'My Business Dashboard'}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <CustomerNotificationBell />
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              {customer?.avatarUrl ? (
                <img src={customer.avatarUrl} alt="" className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <User className="w-4 h-4 text-orange-600" />
              )}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {customer?.firstName} {customer?.lastName}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
              <button
                onClick={() => { setMenuOpen(false); navigate('/dashboard/settings'); }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <User className="w-4 h-4" /> My Account
              </button>
              <hr className="my-1" />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
