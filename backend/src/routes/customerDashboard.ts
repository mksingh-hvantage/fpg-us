import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticateCustomer } from '../middleware/customerAuth.js';

const router = Router();
router.use(authenticateCustomer);

// Helper: get all order IDs for a customer
async function getCustomerOrderIds(customerId: string): Promise<string[]> {
  const orders = await prisma.order.findMany({
    where: { customerId },
    select: { id: true },
  });
  return orders.map((o) => o.id);
}

// GET /api/customer/dashboard — Overview stats
router.get('/dashboard', async (req: Request, res: Response): Promise<void> => {
  try {
    const customerId = req.customer!.customerId;
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    if (!customer) { res.status(404).json({ error: 'Customer not found' }); return; }

    const orderIds = await getCustomerOrderIds(customerId);

    const [orderCount, pendingTasks, unreadMail, recentOrders, upcomingTasks, complianceAlerts, unreadNotifications] = await Promise.all([
      prisma.order.count({ where: { customerId } }),
      orderIds.length ? prisma.task.count({ where: { orderId: { in: orderIds }, status: { in: ['PENDING', 'IN_PROGRESS'] } } }) : 0,
      orderIds.length
        ? prisma.mailItem.count({ where: { OR: [{ orderId: { in: orderIds } }, { taggedEmail: customer.email }], status: 'RECEIVED' } })
        : prisma.mailItem.count({ where: { taggedEmail: customer.email, status: 'RECEIVED' } }),
      prisma.order.findMany({ where: { customerId }, orderBy: { createdAt: 'desc' }, take: 5, select: { id: true, orderNumber: true, llcName: true, status: true, state: true, packageType: true, createdAt: true } }),
      orderIds.length ? prisma.task.findMany({ where: { orderId: { in: orderIds }, status: { in: ['PENDING', 'IN_PROGRESS'] } }, orderBy: { dueDate: 'asc' }, take: 5 }) : [],
      customer.state ? prisma.stateFilingRule.findMany({ where: { stateSlug: customer.state, active: true }, take: 5 }) : [],
      prisma.notification.count({ where: { targetEmail: customer.email, isRead: false } }),
    ]);

    // Profile score
    const fields = [customer.firstName, customer.lastName, customer.email, customer.phone, customer.businessName, customer.businessType, customer.state];
    const filled = fields.filter(Boolean).length;
    const profileScore = Math.round((filled / fields.length) * 100);

    res.json({
      orderCount,
      pendingTasks: typeof pendingTasks === 'number' ? pendingTasks : 0,
      unreadMail: typeof unreadMail === 'number' ? unreadMail : 0,
      unreadNotifications,
      profileScore,
      complianceAlerts: complianceAlerts.length,
      recentOrders,
      upcomingTasks,
    });
  } catch (error) {
    console.error('Customer dashboard error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/orders
router.get('/orders', async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, search } = req.query;
    const where: Record<string, unknown> = { customerId: req.customer!.customerId };
    if (status && status !== 'ALL') where.status = status;
    if (search) {
      where.OR = [
        { llcName: { contains: String(search), mode: 'insensitive' } },
        { orderNumber: { contains: String(search), mode: 'insensitive' } },
      ];
    }
    const orders = await prisma.order.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true, orderNumber: true, llcName: true, status: true, state: true,
        packageType: true, total: true, createdAt: true, updatedAt: true,
      },
    });
    res.json(orders);
  } catch (error) {
    console.error('Customer orders error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/orders/:id
router.get('/orders/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await prisma.order.findFirst({
      where: { id: req.params.id, customerId: req.customer!.customerId },
      include: {
        tasks: { orderBy: { createdAt: 'desc' } },
        documents: { orderBy: { createdAt: 'desc' } },
        payments: { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!order) { res.status(404).json({ error: 'Order not found' }); return; }
    res.json(order);
  } catch (error) {
    console.error('Customer order detail error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/tasks
router.get('/tasks', async (req: Request, res: Response): Promise<void> => {
  try {
    const orderIds = await getCustomerOrderIds(req.customer!.customerId);
    if (!orderIds.length) { res.json([]); return; }
    const { status, priority } = req.query;
    const where: Record<string, unknown> = { orderId: { in: orderIds } };
    if (status && status !== 'ALL') where.status = status;
    if (priority && priority !== 'ALL') where.priority = priority;
    const tasks = await prisma.task.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: { order: { select: { orderNumber: true, llcName: true } } },
    });
    res.json(tasks);
  } catch (error) {
    console.error('Customer tasks error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/documents
router.get('/documents', async (req: Request, res: Response): Promise<void> => {
  try {
    const orderIds = await getCustomerOrderIds(req.customer!.customerId);
    if (!orderIds.length) { res.json([]); return; }
    const { category } = req.query;
    const where: Record<string, unknown> = { orderId: { in: orderIds } };
    if (category && category !== 'ALL') where.category = category;
    const documents = await prisma.document.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: { order: { select: { orderNumber: true, llcName: true } } },
    });
    res.json(documents);
  } catch (error) {
    console.error('Customer documents error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/documents/:id/download
router.get('/documents/:id/download', async (req: Request, res: Response): Promise<void> => {
  try {
    const orderIds = await getCustomerOrderIds(req.customer!.customerId);
    const doc = await prisma.document.findFirst({
      where: { id: req.params.id, orderId: { in: orderIds } },
    });
    if (!doc) { res.status(404).json({ error: 'Document not found' }); return; }
    res.json({ url: doc.fileUrl, fileName: doc.fileName });
  } catch (error) {
    console.error('Customer document download error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/mailroom
router.get('/mailroom', async (req: Request, res: Response): Promise<void> => {
  try {
    const customerId = req.customer!.customerId;
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    const orderIds = await getCustomerOrderIds(customerId);
    const where: Record<string, unknown> = {};
    if (orderIds.length && customer) {
      where.OR = [{ orderId: { in: orderIds } }, { taggedEmail: customer.email }];
    } else if (customer) {
      where.taggedEmail = customer.email;
    }
    const items = await prisma.mailItem.findMany({
      where,
      orderBy: { receivedDate: 'desc' },
      include: { order: { select: { orderNumber: true, llcName: true } } },
    });
    res.json(items);
  } catch (error) {
    console.error('Customer mailroom error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/mailroom/:id
router.get('/mailroom/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const customerId = req.customer!.customerId;
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    const orderIds = await getCustomerOrderIds(customerId);
    const item = await prisma.mailItem.findFirst({
      where: {
        id: req.params.id,
        OR: [
          ...(orderIds.length ? [{ orderId: { in: orderIds } }] : []),
          ...(customer ? [{ taggedEmail: customer.email }] : []),
        ],
      },
      include: { order: { select: { orderNumber: true, llcName: true } } },
    });
    if (!item) { res.status(404).json({ error: 'Mail item not found' }); return; }
    res.json(item);
  } catch (error) {
    console.error('Customer mail detail error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/customer/mailroom/:id/read
router.put('/mailroom/:id/read', async (req: Request, res: Response): Promise<void> => {
  try {
    const customerId = req.customer!.customerId;
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    const orderIds = await getCustomerOrderIds(customerId);
    const item = await prisma.mailItem.findFirst({
      where: {
        id: req.params.id,
        OR: [
          ...(orderIds.length ? [{ orderId: { in: orderIds } }] : []),
          ...(customer ? [{ taggedEmail: customer.email }] : []),
        ],
      },
    });
    if (!item) { res.status(404).json({ error: 'Mail item not found' }); return; }
    const updated = await prisma.mailItem.update({
      where: { id: item.id },
      data: { status: 'OPENED', openedAt: new Date() },
    });
    res.json(updated);
  } catch (error) {
    console.error('Customer mail read error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/payments
router.get('/payments', async (req: Request, res: Response): Promise<void> => {
  try {
    const orderIds = await getCustomerOrderIds(req.customer!.customerId);
    if (!orderIds.length) { res.json([]); return; }
    const payments = await prisma.payment.findMany({
      where: { orderId: { in: orderIds } },
      orderBy: { createdAt: 'desc' },
      include: { order: { select: { orderNumber: true, llcName: true } } },
    });
    res.json(payments);
  } catch (error) {
    console.error('Customer payments error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/invoices
router.get('/invoices', async (req: Request, res: Response): Promise<void> => {
  try {
    const customerId = req.customer!.customerId;
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    const orderIds = await getCustomerOrderIds(customerId);
    const where: Record<string, unknown> = {};
    if (orderIds.length && customer) {
      where.OR = [{ orderId: { in: orderIds } }, { customerEmail: customer.email }];
    } else if (customer) {
      where.customerEmail = customer.email;
    }
    const invoices = await prisma.invoice.findMany({
      where,
      orderBy: { issuedAt: 'desc' },
      include: { order: { select: { orderNumber: true, llcName: true } } },
    });
    res.json(invoices);
  } catch (error) {
    console.error('Customer invoices error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/invoices/:id
router.get('/invoices/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const customerId = req.customer!.customerId;
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    const orderIds = await getCustomerOrderIds(customerId);
    const invoice = await prisma.invoice.findFirst({
      where: {
        id: req.params.id,
        OR: [
          ...(orderIds.length ? [{ orderId: { in: orderIds } }] : []),
          ...(customer ? [{ customerEmail: customer.email }] : []),
        ],
      },
      include: { order: { select: { orderNumber: true, llcName: true } }, payment: true },
    });
    if (!invoice) { res.status(404).json({ error: 'Invoice not found' }); return; }
    res.json(invoice);
  } catch (error) {
    console.error('Customer invoice detail error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/notifications
router.get('/notifications', async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: req.customer!.customerId } });
    if (!customer) { res.status(404).json({ error: 'Customer not found' }); return; }
    const notifications = await prisma.notification.findMany({
      where: { targetEmail: customer.email },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    res.json(notifications);
  } catch (error) {
    console.error('Customer notifications error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/customer/notifications/:id/read
router.put('/notifications/:id/read', async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: req.customer!.customerId } });
    if (!customer) { res.status(404).json({ error: 'Customer not found' }); return; }
    const notif = await prisma.notification.findFirst({
      where: { id: req.params.id, targetEmail: customer.email },
    });
    if (!notif) { res.status(404).json({ error: 'Notification not found' }); return; }
    const updated = await prisma.notification.update({
      where: { id: notif.id },
      data: { isRead: true, readAt: new Date() },
    });
    res.json(updated);
  } catch (error) {
    console.error('Customer notification read error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/notifications/unread-count
router.get('/notifications/unread-count', async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: req.customer!.customerId } });
    if (!customer) { res.status(404).json({ error: 'Customer not found' }); return; }
    const count = await prisma.notification.count({
      where: { targetEmail: customer.email, isRead: false },
    });
    res.json({ count });
  } catch (error) {
    console.error('Customer unread count error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/recommendations
router.get('/recommendations', async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: req.customer!.customerId } });
    if (!customer) { res.status(404).json({ error: 'Customer not found' }); return; }
    const where: Record<string, unknown> = { active: true };
    if (customer.state || customer.businessType) {
      where.OR = [
        { targetState: null, targetBizType: null },
        ...(customer.state ? [{ targetState: customer.state }] : []),
        ...(customer.businessType ? [{ targetBizType: customer.businessType }] : []),
      ];
    }
    const recommendations = await prisma.recommendation.findMany({
      where,
      orderBy: { priority: 'desc' },
      include: { service: { select: { id: true, name: true, slug: true, basePrice: true, description: true } } },
    });
    res.json(recommendations);
  } catch (error) {
    console.error('Customer recommendations error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/services
router.get('/services', async (req: Request, res: Response): Promise<void> => {
  try {
    const { category } = req.query;
    const where: Record<string, unknown> = { published: true };
    if (category) where.category = category;
    const services = await prisma.service.findMany({
      where,
      orderBy: { sortOrder: 'asc' },
    });
    res.json(services);
  } catch (error) {
    console.error('Customer services error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/compliance-alerts
router.get('/compliance-alerts', async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: req.customer!.customerId } });
    if (!customer || !customer.state) { res.json([]); return; }
    const rules = await prisma.stateFilingRule.findMany({
      where: { stateSlug: customer.state, active: true },
      include: { state: { select: { name: true } } },
    });
    res.json(rules);
  } catch (error) {
    console.error('Customer compliance alerts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/profile-score
router.get('/profile-score', async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id: req.customer!.customerId } });
    if (!customer) { res.status(404).json({ error: 'Customer not found' }); return; }

    const checks = [
      { field: 'firstName', label: 'First Name', complete: !!customer.firstName },
      { field: 'lastName', label: 'Last Name', complete: !!customer.lastName },
      { field: 'email', label: 'Email', complete: !!customer.email },
      { field: 'phone', label: 'Phone', complete: !!customer.phone },
      { field: 'businessName', label: 'Business Name', complete: !!customer.businessName },
      { field: 'businessType', label: 'Business Type', complete: !!customer.businessType },
      { field: 'state', label: 'State', complete: !!customer.state },
    ];
    const score = Math.round((checks.filter((c) => c.complete).length / checks.length) * 100);

    res.json({ score, checks });
  } catch (error) {
    console.error('Customer profile score error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer/faqs
router.get('/faqs', async (req: Request, res: Response): Promise<void> => {
  try {
    const { category } = req.query;
    const where: Record<string, unknown> = { published: true };
    if (category) where.category = category;
    const faqs = await prisma.faq.findMany({
      where,
      orderBy: { sortOrder: 'asc' },
    });
    res.json(faqs);
  } catch (error) {
    console.error('Customer faqs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
