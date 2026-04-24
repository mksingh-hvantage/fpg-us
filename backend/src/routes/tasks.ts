import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';
import { logAudit } from '../utils/audit.js';

const router = Router();
router.use(authenticate);

// GET /api/tasks
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, type, priority, assigneeId, orderId, search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    if (status && status !== 'all') where.status = status;
    if (type && type !== 'all') where.type = type;
    if (priority && priority !== 'all') where.priority = priority;
    if (assigneeId) where.assigneeId = assigneeId;
    if (orderId) where.orderId = orderId;
    if (search) {
      where.OR = [
        { title: { contains: String(search), mode: 'insensitive' } },
        { description: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [tasks, total] = await Promise.all([
      prisma.task.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          assignee: { select: { id: true, fullName: true, email: true } },
          createdBy: { select: { id: true, fullName: true } },
          order: { select: { id: true, orderNumber: true, llcName: true } },
        },
      }),
      prisma.task.count({ where }),
    ]);

    res.json({ tasks, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get tasks error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/tasks/my
router.get('/my', async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await prisma.task.findMany({
      where: { assigneeId: req.user!.userId, status: { in: ['PENDING', 'IN_PROGRESS'] } },
      orderBy: [{ priority: 'desc' }, { dueDate: 'asc' }],
      include: {
        order: { select: { id: true, orderNumber: true, llcName: true } },
      },
    });
    res.json(tasks);
  } catch (error) {
    console.error('Get my tasks error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/tasks/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: req.params.id },
      include: {
        assignee: { select: { id: true, fullName: true, email: true } },
        createdBy: { select: { id: true, fullName: true } },
        order: { select: { id: true, orderNumber: true, llcName: true } },
      },
    });
    if (!task) { res.status(404).json({ error: 'Task not found' }); return; }
    res.json(task);
  } catch (error) {
    console.error('Get task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/tasks
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, type, priority, assigneeId, orderId, contactId, dueDate } = req.body;
    if (!title) { res.status(400).json({ error: 'Title is required' }); return; }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        type: type || 'GENERAL',
        priority: priority || 'MEDIUM',
        assigneeId,
        createdById: req.user!.userId,
        orderId,
        contactId,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      },
      include: {
        assignee: { select: { id: true, fullName: true, email: true } },
        createdBy: { select: { id: true, fullName: true } },
      },
    });

    await logAudit({ userId: req.user!.userId, action: 'CREATE', entity: 'Task', entityId: task.id, req });
    res.status(201).json(task);
  } catch (error) {
    console.error('Create task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/tasks/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, type, status, priority, assigneeId, orderId, contactId, dueDate } = req.body;
    const data: Record<string, unknown> = {};
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description;
    if (type !== undefined) data.type = type;
    if (status !== undefined) {
      data.status = status;
      if (status === 'COMPLETED') data.completedAt = new Date();
    }
    if (priority !== undefined) data.priority = priority;
    if (assigneeId !== undefined) data.assigneeId = assigneeId;
    if (orderId !== undefined) data.orderId = orderId;
    if (contactId !== undefined) data.contactId = contactId;
    if (dueDate !== undefined) data.dueDate = dueDate ? new Date(dueDate) : null;

    const task = await prisma.task.update({
      where: { id: req.params.id },
      data,
      include: {
        assignee: { select: { id: true, fullName: true, email: true } },
        createdBy: { select: { id: true, fullName: true } },
        order: { select: { id: true, orderNumber: true, llcName: true } },
      },
    });

    await logAudit({ userId: req.user!.userId, action: 'UPDATE', entity: 'Task', entityId: task.id, details: data, req });
    res.json(task);
  } catch (error) {
    console.error('Update task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/tasks/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.task.delete({ where: { id: req.params.id } });
    await logAudit({ userId: req.user!.userId, action: 'DELETE', entity: 'Task', entityId: req.params.id, req });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    console.error('Delete task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
