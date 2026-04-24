import { Outlet } from 'react-router-dom';
import CustomerSidebar from './CustomerSidebar';
import CustomerHeader from './CustomerHeader';

export default function CustomerLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <CustomerSidebar />
      <div className="flex-1 flex flex-col">
        <CustomerHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
