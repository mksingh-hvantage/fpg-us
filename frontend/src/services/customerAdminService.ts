import api from './api';

export interface AdminCustomer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  businessName: string | null;
  businessType: string | null;
  state: string | null;
  isActive: boolean;
  emailVerified: boolean;
  profileCompleted: boolean;
  lastLoginAt: string | null;
  createdAt: string;
  updatedAt: string;
  _count?: { orders: number };
}

export interface AdminCustomerDetail extends AdminCustomer {
  orders: Array<{
    id: string;
    orderNumber: string;
    status: string;
    packageType: string;
    llcName: string;
    state: string;
    total: string | null;
    createdAt: string;
  }>;
}

export const getCustomers = async (params?: { search?: string; page?: number; limit?: number }) => {
  const res = await api.get<{ customers: AdminCustomer[]; total: number; page: number; totalPages: number }>('/customers', { params });
  return res.data;
};

export const getCustomerById = async (id: string) => {
  const res = await api.get<AdminCustomerDetail>(`/customers/${id}`);
  return res.data;
};

export const updateCustomer = async (id: string, data: Partial<AdminCustomer>) => {
  const res = await api.put<AdminCustomer>(`/customers/${id}`, data);
  return res.data;
};

export const toggleCustomerActive = async (id: string) => {
  const res = await api.put<AdminCustomer>(`/customers/${id}/toggle-active`);
  return res.data;
};
