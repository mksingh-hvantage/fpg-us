import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, ShoppingCart, Users, FileText, MapPin, ScrollText,
  Factory, Package as PackageIcon, UserCog, ChevronDown,
  FolderOpen,
  CreditCard, Receipt, BarChart3, Settings, Flag,
  Shield, ClipboardList
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface NavItem {
  to: string;
  icon: React.ElementType;
  label: string;
  end?: boolean;
  module?: string; // maps to Permission.module for access control
}

const mainItems: NavItem[] = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
];

const operationsItems: NavItem[] = [
  { to: '/admin/orders', icon: ShoppingCart, label: 'Orders', module: 'Orders' },
  { to: '/admin/contacts', icon: Users, label: 'Contacts', module: 'Contacts' },
  { to: '/admin/documents', icon: FolderOpen, label: 'Documents', module: 'Documents' },
];

const contentItems: NavItem[] = [
  { to: '/admin/articles', icon: FileText, label: 'Articles', module: 'Articles' },
  { to: '/admin/states', icon: MapPin, label: 'States', module: 'States' },
  { to: '/admin/contracts', icon: ScrollText, label: 'Contracts', module: 'Contracts' },
  { to: '/admin/industries', icon: Factory, label: 'Industries', module: 'Industries' },
  { to: '/admin/packages', icon: PackageIcon, label: 'Packages', module: 'Packages' },
];

const financeItems: NavItem[] = [
  { to: '/admin/payments', icon: CreditCard, label: 'Payments', module: 'Payments' },
  { to: '/admin/invoices', icon: Receipt, label: 'Invoices', module: 'Invoices' },
];

const adminItems: NavItem[] = [
  { to: '/admin/analytics', icon: BarChart3, label: 'Analytics', module: 'Analytics' },
  { to: '/admin/users', icon: UserCog, label: 'Staff', module: 'Users' },
  { to: '/admin/customers', icon: Users, label: 'Customers' },
  { to: '/admin/audit-logs', icon: Shield, label: 'Audit Logs', module: 'AuditLogs' },
  { to: '/admin/settings', icon: Settings, label: 'Settings', module: 'Settings' },
  { to: '/admin/state-rules', icon: ClipboardList, label: 'State Rules' },
];

interface SectionProps {
  label: string;
  icon: React.ElementType;
  items: NavItem[];
  defaultOpen?: boolean;
  linkClass: (props: { isActive: boolean }) => string;
}

function CollapsibleSection({ label, icon: Icon, items, defaultOpen = false, linkClass }: SectionProps) {
  const { pathname } = useLocation();
  const hasActiveChild = items.some((item) => pathname === item.to || pathname.startsWith(item.to + '/'));
  const [open, setOpen] = useState(defaultOpen || hasActiveChild);

  if (items.length === 0) return null;

  return (
    <div className="pt-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition"
      >
        <span className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5" />
          {label}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-1 space-y-0.5">
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminSidebar() {
  const { user, canView } = useAuth();
  const isSuperAdmin = user?.role === 'SUPER_ADMIN';

  const filterItems = (items: NavItem[]) =>
    isSuperAdmin ? items : items.filter((item) => !item.module || canView(item.module));

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive ? 'bg-blue-100 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'
    }`;

  const filteredOps = filterItems(operationsItems);
  const filteredContent = filterItems(contentItems);
  const filteredFinance = filterItems(financeItems);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">FPG Admin</h2>
        <p className="text-xs text-gray-500">Management Panel</p>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {/* Dashboard — always visible */}
        {mainItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}

        {/* Main */}
        <CollapsibleSection label="Main" icon={Flag} items={filteredOps} defaultOpen={true} linkClass={linkClass} />

        {/* Content */}
        <CollapsibleSection label="Content" icon={FileText} items={filteredContent} defaultOpen={false} linkClass={linkClass} />

        {/* Finance */}
        <CollapsibleSection label="Finance" icon={CreditCard} items={filteredFinance} defaultOpen={false} linkClass={linkClass} />

        {/* Admin — SUPER_ADMIN only */}
        {isSuperAdmin && (
          <CollapsibleSection label="Admin" icon={Shield} items={adminItems} defaultOpen={false} linkClass={linkClass} />
        )}
      </nav>
    </aside>
  );
}
