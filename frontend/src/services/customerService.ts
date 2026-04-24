import axios from 'axios';
import customerApi from './customerApi';
import type {
  Customer, CustomerOrder, CustomerTask, CustomerDocument,
  CustomerMailItem, CustomerNotification, CustomerPayment,
  CustomerInvoice, ComplianceAlert, ProfileScore, DashboardOverview,
  CustomerRecommendation, CustomerService,
} from '../types/customer';

// Auth — OTP-based
export const sendOtp = (email: string) =>
  customerApi.post<{ message: string }>('/customer-auth/send-otp', { email });

export const verifyOtp = (email: string, otp: string) =>
  customerApi.post<{ token: string; customer: Customer }>('/customer-auth/verify-otp', { email, otp });

export const getCustomerMe = () =>
  customerApi.get<Customer>('/customer-auth/me');

export const updateCustomerProfile = (data: Partial<Customer>) =>
  customerApi.put<Customer>('/customer-auth/profile', data);

// Dashboard
export const getDashboardOverview = () =>
  customerApi.get<DashboardOverview>('/customer/dashboard');

// Orders
export const getCustomerOrders = (params?: { status?: string; search?: string }) =>
  customerApi.get<CustomerOrder[]>('/customer/orders', { params });

export const getCustomerOrderDetail = (id: string) =>
  customerApi.get<CustomerOrder>(`/customer/orders/${id}`);

// Tasks
export const getCustomerTasks = (params?: { status?: string; priority?: string }) =>
  customerApi.get<CustomerTask[]>('/customer/tasks', { params });

// Documents
export const getCustomerDocuments = (params?: { category?: string }) =>
  customerApi.get<CustomerDocument[]>('/customer/documents', { params });

export const downloadCustomerDocument = (id: string) =>
  customerApi.get<{ url: string; fileName: string }>(`/customer/documents/${id}/download`);

// Mailroom
export const getCustomerMailroom = () =>
  customerApi.get<CustomerMailItem[]>('/customer/mailroom');

export const getCustomerMailDetail = (id: string) =>
  customerApi.get<CustomerMailItem>(`/customer/mailroom/${id}`);

export const markMailAsRead = (id: string) =>
  customerApi.put<CustomerMailItem>(`/customer/mailroom/${id}/read`);

// Payments
export const getCustomerPayments = () =>
  customerApi.get<CustomerPayment[]>('/customer/payments');

// Invoices
export const getCustomerInvoices = () =>
  customerApi.get<CustomerInvoice[]>('/customer/invoices');

export const getCustomerInvoiceDetail = (id: string) =>
  customerApi.get<CustomerInvoice>(`/customer/invoices/${id}`);

// Notifications
export const getCustomerNotifications = () =>
  customerApi.get<CustomerNotification[]>('/customer/notifications');

export const markNotificationAsRead = (id: string) =>
  customerApi.put<CustomerNotification>(`/customer/notifications/${id}/read`);

export const getUnreadNotificationCount = () =>
  customerApi.get<{ count: number }>('/customer/notifications/unread-count');

// Recommendations
export const getCustomerRecommendations = () =>
  customerApi.get<CustomerRecommendation[]>('/customer/recommendations');

// Services (marketplace)
export const getCustomerServices = (params?: { category?: string }) =>
  customerApi.get<CustomerService[]>('/customer/services', { params });

// Compliance
export const getComplianceAlerts = () =>
  customerApi.get<ComplianceAlert[]>('/customer/compliance-alerts');

// Profile
export const getProfileScore = () =>
  customerApi.get<ProfileScore>('/customer/profile-score');

// FAQs
export const getCustomerFaqs = (params?: { category?: string }) =>
  customerApi.get<Array<{ id: string; question: string; answer: string; category?: string }>>('/customer/faqs', { params });

// Support — submit contact message (public endpoint, direct call)
export const submitSupportMessage = (data: { source: string; name: string; email: string; phone?: string; subject?: string; message?: string }) =>
  axios.post('https://us.thefutureperfectglobal.com/api/contacts', data);
