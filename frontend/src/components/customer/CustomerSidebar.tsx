import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, ShoppingCart, CheckSquare, FolderOpen,
  Mail, CreditCard, Receipt, Lightbulb, Store,
  Bell, Settings, HelpCircle,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Overview', end: true },
  { to: '/dashboard/orders', icon: ShoppingCart, label: 'Order Tracking' },
  { to: '/dashboard/tasks', icon: CheckSquare, label: 'To-Do Tasks' },
  { to: '/dashboard/documents', icon: FolderOpen, label: 'Documents' },
  { to: '/dashboard/mailroom', icon: Mail, label: 'Mailroom' },
  { to: '/dashboard/payments', icon: CreditCard, label: 'Payments' },
  { to: '/dashboard/invoices', icon: Receipt, label: 'Invoices' },
  { to: '/dashboard/recommendations', icon: Lightbulb, label: 'Recommendations' },
  { to: '/dashboard/marketplace', icon: Store, label: 'Marketplace' },
  { to: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
  { to: '/dashboard/support', icon: HelpCircle, label: 'Support' },
];

export default function CustomerSidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
      isActive ? 'bg-orange-50 text-orange-700' : 'text-gray-600 hover:bg-orange-50/50 hover:text-gray-900'
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-5 border-b border-gray-200">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FPG</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">My Business</h2>
            <p className="text-xs text-gray-500">Dashboard</p>
          </div>
        </NavLink>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
            <item.icon className="w-4.5 h-4.5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
