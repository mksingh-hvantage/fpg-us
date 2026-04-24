import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';
import contactRoutes from './routes/contacts.js';
import articleRoutes from './routes/articles.js';
import stateRoutes from './routes/states.js';
import contractRoutes from './routes/contracts.js';
import industryRoutes from './routes/industries.js';
import userRoutes from './routes/users.js';
import dashboardRoutes from './routes/dashboard.js';
import packageRoutes from './routes/packages.js';
// Phase 1
import taskRoutes from './routes/tasks.js';
import documentRoutes from './routes/documents.js';
import noteRoutes from './routes/notes.js';
import auditRoutes from './routes/audit.js';
import permissionRoutes from './routes/permissions.js';
// Phase 2
import mailroomRoutes from './routes/mailroom.js';
import notificationRoutes from './routes/notifications.js';
import emailTemplateRoutes from './routes/emailTemplates.js';
// Phase 3
import serviceRoutes from './routes/services.js';
import recommendationRoutes from './routes/recommendations.js';
import cmsRoutes from './routes/cms.js';
import faqRoutes from './routes/faqs.js';
import bannerRoutes from './routes/banners.js';
// Phase 4
import paymentRoutes from './routes/payments.js';
import invoiceRoutes from './routes/invoices.js';
import analyticsRoutes from './routes/analytics.js';
// Phase 5
import settingRoutes from './routes/settings.js';
import stateRuleRoutes from './routes/stateRules.js';
import apiKeyRoutes from './routes/apiKeys.js';
// Customer Dashboard
import customerAuthRoutes from './routes/customerAuth.js';
import customerDashboardRoutes from './routes/customerDashboard.js';
import customerAdminRoutes from './routes/customers.js';

export const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000', 'https://us.thefutureperfectglobal.com'], credentials: true }));

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

app.use(express.json());

// Prevent browser caching of API responses
app.use((_req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Routes — existing
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/states', stateRoutes);
app.use('/api/contract-templates', contractRoutes);
app.use('/api/industries', industryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/packages', packageRoutes);
// Routes — Phase 1
app.use('/api/tasks', taskRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/audit-logs', auditRoutes);
app.use('/api/permissions', permissionRoutes);
// Routes — Phase 2
app.use('/api/mailroom', mailroomRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/email-templates', emailTemplateRoutes);
// Routes — Phase 3
app.use('/api/services', serviceRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/cms', cmsRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/banners', bannerRoutes);
// Routes — Phase 4
app.use('/api/payments', paymentRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/analytics', analyticsRoutes);
// Routes — Phase 5
app.use('/api/settings', settingRoutes);
app.use('/api/state-rules', stateRuleRoutes);
app.use('/api/api-keys', apiKeyRoutes);

// Customer Dashboard
app.use('/api/customer-auth', customerAuthRoutes);
app.use('/api/customer', customerDashboardRoutes);
app.use('/api/customers', customerAdminRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
