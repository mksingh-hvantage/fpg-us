import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.use(authenticate);

// GET /api/notes?entity=Order&entityId=xxx
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { entity, entityId } = req.query;
    if (!entity || !entityId) {
      res.status(400).json({ error: 'entity and entityId are required' });
      return;
    }

    const notes = await prisma.internalNote.findMany({
      where: { entity: String(entity), entityId: String(entityId) },
      orderBy: { createdAt: 'desc' },
      include: {
        author: { select: { id: true, fullName: true, avatarUrl: true } },
      },
    });
    res.json(notes);
  } catch (error) {
    console.error('Get notes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/notes
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { content, entity, entityId } = req.body;
    if (!content || !entity || !entityId) {
      res.status(400).json({ error: 'content, entity, and entityId are required' });
      return;
    }

    const note = await prisma.internalNote.create({
      data: {
        content,
        entity,
        entityId,
        authorId: req.user!.userId,
      },
      include: {
        author: { select: { id: true, fullName: true, avatarUrl: true } },
      },
    });
    res.status(201).json(note);
  } catch (error) {
    console.error('Create note error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/notes/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await prisma.internalNote.findUnique({ where: { id: req.params.id } });
    if (!note) { res.status(404).json({ error: 'Note not found' }); return; }

    // Only author or SUPER_ADMIN can delete
    if (note.authorId !== req.user!.userId && req.user!.role !== 'SUPER_ADMIN') {
      res.status(403).json({ error: 'Not authorized to delete this note' });
      return;
    }

    await prisma.internalNote.delete({ where: { id: req.params.id } });
    res.json({ message: 'Note deleted' });
  } catch (error) {
    console.error('Delete note error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
