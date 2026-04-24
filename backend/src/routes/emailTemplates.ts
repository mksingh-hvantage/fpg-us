import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate, requireRole } from '../middleware/auth.js';

const router = Router();
router.use(authenticate, requireRole('SUPER_ADMIN'));

// GET /api/email-templates
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const templates = await prisma.emailTemplate.findMany({ orderBy: { name: 'asc' } });
    res.json(templates);
  } catch (error) {
    console.error('Get email templates error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/email-templates/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const template = await prisma.emailTemplate.findUnique({ where: { id: req.params.id } });
    if (!template) { res.status(404).json({ error: 'Template not found' }); return; }
    res.json(template);
  } catch (error) {
    console.error('Get email template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/email-templates
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, name, subject, body, variables } = req.body;
    if (!slug || !name || !subject || !body) {
      res.status(400).json({ error: 'slug, name, subject, and body are required' });
      return;
    }
    const template = await prisma.emailTemplate.create({
      data: { slug, name, subject, body, variables },
    });
    res.status(201).json(template);
  } catch (error) {
    console.error('Create email template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/email-templates/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, name, subject, body, variables, active } = req.body;
    const data: Record<string, unknown> = {};
    if (slug !== undefined) data.slug = slug;
    if (name !== undefined) data.name = name;
    if (subject !== undefined) data.subject = subject;
    if (body !== undefined) data.body = body;
    if (variables !== undefined) data.variables = variables;
    if (active !== undefined) data.active = active;

    const template = await prisma.emailTemplate.update({ where: { id: req.params.id }, data });
    res.json(template);
  } catch (error) {
    console.error('Update email template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/email-templates/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.emailTemplate.delete({ where: { id: req.params.id } });
    res.json({ message: 'Template deleted' });
  } catch (error) {
    console.error('Delete email template error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
