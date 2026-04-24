import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../index.js';
import { authenticate, requireRole } from '../middleware/auth.js';

const router = Router();

// All user management routes require SUPER_ADMIN
router.use(authenticate, requireRole('SUPER_ADMIN'));

// GET /api/users
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, fullName: true, role: true, avatarUrl: true, isActive: true, createdAt: true, updatedAt: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/users/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      select: { id: true, email: true, fullName: true, role: true, avatarUrl: true, createdAt: true, updatedAt: true },
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/users
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, fullName, role } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).json({ error: 'Email, password, and full name are required' });
      return;
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(409).json({ error: 'Email already in use' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, fullName, role: role || 'ADMIN' },
      select: { id: true, email: true, fullName: true, role: true, createdAt: true },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/users/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, fullName, role } = req.body;
    const data: Record<string, unknown> = {};
    if (email !== undefined) data.email = email;
    if (fullName !== undefined) data.fullName = fullName;
    if (role !== undefined) data.role = role;
    if (password) data.password = await bcrypt.hash(password, 12);

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data,
      select: { id: true, email: true, fullName: true, role: true, createdAt: true, updatedAt: true },
    });
    res.json(user);
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/users/:id/toggle-active
router.put('/:id/toggle-active', async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.params.id === req.user!.userId) {
      res.status(400).json({ error: 'Cannot deactivate your own account' });
      return;
    }
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!user) { res.status(404).json({ error: 'User not found' }); return; }

    const updated = await prisma.user.update({
      where: { id: req.params.id },
      data: { isActive: !user.isActive },
      select: { id: true, email: true, fullName: true, role: true, isActive: true, createdAt: true, updatedAt: true },
    });
    res.json(updated);
  } catch (error) {
    console.error('Toggle user active error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/users/:id/login-as
router.post('/:id/login-as', async (req: Request, res: Response): Promise<void> => {
  try {
    const { signToken } = await import('../utils/jwt.js');
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!user) { res.status(404).json({ error: 'User not found' }); return; }

    const token = signToken({ userId: user.id, email: user.email, role: user.role });
    res.json({
      token,
      user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role, avatarUrl: user.avatarUrl },
    });
  } catch (error) {
    console.error('Login-as error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.params.id === req.user!.userId) {
      res.status(400).json({ error: 'Cannot delete your own account' });
      return;
    }
    await prisma.user.delete({ where: { id: req.params.id } });
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
