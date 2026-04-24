export type OrderStatus = 'PENDING' | 'PROCESSING' | 'FILED' | 'COMPLETED' | 'CANCELLED';
export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export type TaskType = 'COMPLIANCE' | 'UPSELL' | 'FILING' | 'GENERAL';
export type DocumentCategory = 'FORMATION' | 'LEGAL' | 'TAX' | 'COMPLIANCE' | 'GENERAL';
export type MailStatus = 'RECEIVED' | 'OPENED' | 'FORWARDED' | 'ARCHIVED';
export type NotificationType = 'INFO' | 'WARNING' | 'DEADLINE' | 'SYSTEM';
export type PaymentStatus = 'PENDING' | 'SUCCEEDED' | 'FAILED' | 'REFUNDED' | 'PARTIALLY_REFUNDED';

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  state?: string;
  avatarUrl?: string;
  profileCompleted: boolean;
  emailVerified?: boolean;
  createdAt?: string;
}

export interface CustomerOrder {
  id: string;
  orderNumber: string;
  llcName: string;
  status: OrderStatus;
  state: string;
  packageType: string;
  total?: string;
  createdAt: string;
  updatedAt: string;
  tasks?: CustomerTask[];
  documents?: CustomerDocument[];
  payments?: CustomerPayment[];
}

export interface CustomerTask {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  completedAt?: string;
  createdAt: string;
  order?: { orderNumber: string; llcName: string };
}

export interface CustomerDocument {
  id: string;
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  mimeType?: string;
  category: DocumentCategory;
  notes?: string;
  createdAt: string;
  order?: { orderNumber: string; llcName: string };
}

export interface CustomerMailItem {
  id: string;
  subject: string;
  description?: string;
  sender?: string;
  scanUrl?: string;
  scanPages?: number;
  status: MailStatus;
  receivedDate: string;
  openedAt?: string;
  notes?: string;
  order?: { orderNumber: string; llcName: string };
}

export interface CustomerNotification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  readAt?: string;
  link?: string;
  createdAt: string;
}

export interface CustomerPayment {
  id: string;
  amount: string;
  currency: string;
  status: PaymentStatus;
  paymentMethod?: string;
  receiptUrl?: string;
  paidAt?: string;
  createdAt: string;
  order?: { orderNumber: string; llcName: string };
}

export interface CustomerInvoice {
  id: string;
  invoiceNumber: string;
  customerName: string;
  customerEmail: string;
  items: Array<{ description: string; amount: number }>;
  subtotal: string;
  tax: string;
  total: string;
  notes?: string;
  issuedAt: string;
  dueDate?: string;
  paidAt?: string;
  order?: { orderNumber: string; llcName: string };
  payment?: CustomerPayment;
}

export interface ComplianceAlert {
  id: string;
  stateSlug: string;
  ruleType: string;
  description?: string;
  dueDate?: string;
  fee?: string;
  penaltyFee?: string;
  reminderDaysBefore?: number;
  state?: { name: string };
}

export interface ProfileScore {
  score: number;
  checks: Array<{ field: string; label: string; complete: boolean }>;
}

export interface DashboardOverview {
  orderCount: number;
  pendingTasks: number;
  unreadMail: number;
  unreadNotifications: number;
  profileScore: number;
  complianceAlerts: number;
  recentOrders: CustomerOrder[];
  upcomingTasks: CustomerTask[];
}

export interface CustomerRecommendation {
  id: string;
  title: string;
  description?: string;
  priority: number;
  service?: {
    id: string;
    name: string;
    slug: string;
    basePrice: string;
    description?: string;
  };
}

export interface CustomerService {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category?: string;
  basePrice: string;
  isRecurring: boolean;
  interval?: string;
}
