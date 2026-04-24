export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR';
export type OrderStatus = 'PENDING' | 'PROCESSING' | 'FILED' | 'COMPLETED' | 'CANCELLED';
export type ContactStatus = 'NEW' | 'CONTACTED' | 'CONVERTED' | 'CLOSED';
export type TaskType = 'COMPLIANCE' | 'UPSELL' | 'FILING' | 'GENERAL';
export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export type DocumentCategory = 'FORMATION' | 'LEGAL' | 'TAX' | 'COMPLIANCE' | 'GENERAL';
export type MailStatus = 'RECEIVED' | 'OPENED' | 'FORWARDED' | 'ARCHIVED';
export type NotificationType = 'INFO' | 'WARNING' | 'DEADLINE' | 'SYSTEM';
export type PaymentStatus = 'PENDING' | 'SUCCEEDED' | 'FAILED' | 'REFUNDED' | 'PARTIALLY_REFUNDED';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  avatarUrl?: string;
  isActive?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  packageType: string;
  llcName: string;
  designator?: string;
  managementMethod?: string;
  state: string;
  filingFee?: string;
  packagePrice?: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  contactPhone?: string;
  companyAddress?: Record<string, string>;
  members?: Record<string, string>[];
  agentOption?: string;
  agentDetails?: Record<string, string>;
  taxInfo?: Record<string, string>;
  notes?: string;
  assignedToId?: string;
  assignedTo?: { id: string; fullName: string; email: string };
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  id: string;
  source: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  businessType?: string;
  businessName?: string;
  state?: string;
  status: ContactStatus;
  notes?: string;
  createdAt: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  category: string;
  imageUrl?: string;
  metaTitle?: string;
  metaKeywords?: string;
  metaDescription?: string;
  imageAlt?: string;
  imageTitle?: string;
  published: boolean;
  publishedDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContractTemplate {
  id: string;
  slug: string;
  name: string;
  category: string;
  description?: string;
  content?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  icon: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface State {
  id: string;
  name: string;
  slug: string;
  filingFee: string;
  processingTime: string;
  annualReportFee: string;
  expeditedTime?: string;
  description: string;
  benefits?: string[];
  updatedAt: string;
}

export interface PackageFeature {
  name: string;
  included: boolean;
  addonPrice?: number;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  processingTime: string;
  recommended: boolean;
  features: PackageFeature[];
  sortOrder: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// Phase 1
export interface Task {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId?: string;
  assignee?: { id: string; fullName: string; email: string };
  createdById: string;
  createdBy?: { id: string; fullName: string };
  orderId?: string;
  order?: { id: string; orderNumber: string; llcName: string };
  contactId?: string;
  dueDate?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Document {
  id: string;
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  mimeType?: string;
  category: DocumentCategory;
  orderId?: string;
  order?: { id: string; orderNumber: string; llcName: string };
  uploadedById: string;
  uploadedBy?: { id: string; fullName: string };
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface InternalNote {
  id: string;
  content: string;
  entity: string;
  entityId: string;
  authorId: string;
  author?: { id: string; fullName: string; avatarUrl?: string };
  createdAt: string;
}

export interface AuditLog {
  id: string;
  userId?: string;
  user?: { id: string; fullName: string; email: string };
  action: string;
  entity: string;
  entityId?: string;
  details?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

export interface Permission {
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
}

// Phase 2
export interface MailItem {
  id: string;
  subject: string;
  description?: string;
  sender?: string;
  scanUrl?: string;
  scanPages?: number;
  status: MailStatus;
  orderId?: string;
  order?: { id: string; orderNumber: string; llcName: string };
  taggedEmail?: string;
  receivedDate: string;
  openedAt?: string;
  uploadedById?: string;
  uploadedBy?: { id: string; fullName: string };
  notes?: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  targetEmail?: string;
  targetRole?: string;
  isRead: boolean;
  readAt?: string;
  link?: string;
  createdById?: string;
  createdBy?: { id: string; fullName: string };
  createdAt: string;
}

export interface EmailTemplate {
  id: string;
  slug: string;
  name: string;
  subject: string;
  body: string;
  variables?: Record<string, string>;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

// Phase 3
export interface Service {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category?: string;
  basePrice: string;
  isRecurring: boolean;
  interval?: string;
  published: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description?: string;
  serviceId?: string;
  service?: { id: string; name: string };
  targetState?: string;
  targetBizType?: string;
  triggerEvent?: string;
  isAutomatic: boolean;
  active: boolean;
  priority: number;
  _count?: { pushes: number };
  createdAt: string;
  updatedAt: string;
}

export interface RecommendationPush {
  id: string;
  recommendationId: string;
  targetEmail: string;
  orderId?: string;
  sentAt: string;
  clickedAt?: string;
  convertedAt?: string;
}

export interface CmsPage {
  id: string;
  slug: string;
  title: string;
  content?: Record<string, unknown>;
  published: boolean;
  publishedAt?: string;
  updatedById?: string;
  updatedBy?: { id: string; fullName: string };
  createdAt: string;
  updatedAt: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category?: string;
  sortOrder: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Banner {
  id: string;
  title: string;
  message: string;
  type: string;
  linkUrl?: string;
  linkText?: string;
  startDate?: string;
  endDate?: string;
  active: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

// Phase 4
export interface Payment {
  id: string;
  orderId?: string;
  order?: { id: string; orderNumber: string; llcName: string; contactEmail: string };
  stripePaymentId?: string;
  stripeCustomerId?: string;
  amount: string;
  currency: string;
  status: PaymentStatus;
  paymentMethod?: string;
  receiptUrl?: string;
  failureReason?: string;
  refundedAmount?: string;
  refundReason?: string;
  metadata?: Record<string, unknown>;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  paymentId?: string;
  payment?: Payment;
  orderId?: string;
  order?: { id: string; orderNumber: string; llcName?: string };
  customerName: string;
  customerEmail: string;
  items: { description: string; quantity: number; unitPrice: number; total: number }[];
  subtotal: string;
  tax: string;
  total: string;
  notes?: string;
  issuedAt: string;
  dueDate?: string;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AnalyticsOverview {
  totalOrders: number;
  newOrders: number;
  completedOrders: number;
  totalContacts: number;
  newContacts: number;
  totalRevenue: number;
}

// Phase 5
export interface Setting {
  id: string;
  key: string;
  value: string;
  group: string;
  label?: string;
  type: string;
}

export interface StateFilingRule {
  id: string;
  stateSlug: string;
  state?: { name: string; slug: string };
  ruleType: string;
  description?: string;
  dueDate?: string;
  fee?: string;
  penaltyFee?: string;
  reminderDaysBefore?: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  permissions?: Record<string, boolean>;
  lastUsedAt?: string;
  expiresAt?: string;
  active: boolean;
  createdById: string;
  createdBy?: { id: string; fullName: string };
  createdAt: string;
  key?: string; // Only on creation
}

export interface DashboardStats {
  orders: { total: number; pending: number; processing: number; completed: number };
  contacts: { total: number; new: number };
  articles: { total: number; published: number };
  recentOrders: Order[];
  recentContacts: Contact[];
}

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  totalPages: number;
  [key: string]: T[] | number;
}
