import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { prisma } from '../index.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// Multer setup for blog images
const uploadDir = path.join(process.cwd(), 'uploads', 'blog');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB

// POST /api/articles/upload-image
router.post('/upload-image', authenticate, upload.single('image'), async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No image uploaded' });
      return;
    }
    res.json({ imageUrl: `/uploads/blog/${req.file.filename}` });
  } catch (error) {
    console.error('Upload article image error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/articles (admin — all; public could filter published)
router.get('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { search, page = '1', limit = '20' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    if (search) {
      where.OR = [
        { title: { contains: String(search), mode: 'insensitive' } },
        { slug: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    const [articles, total] = await Promise.all([
      prisma.article.findMany({ where, skip, take: Number(limit), orderBy: { createdAt: 'desc' } }),
      prisma.article.count({ where }),
    ]);

    res.json({ articles, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    console.error('Get articles error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/articles/:id
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const article = await prisma.article.findUnique({ where: { id: req.params.id } });
    if (!article) {
      res.status(404).json({ error: 'Article not found' });
      return;
    }
    res.json(article);
  } catch (error) {
    console.error('Get article error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/articles
router.post('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, title, excerpt, content, category, imageUrl, metaTitle, metaKeywords, metaDescription, imageAlt, imageTitle, published, publishedDate } = req.body;
    if (!slug || !title || !content || !category) {
      res.status(400).json({ error: 'Slug, title, content, and category are required' });
      return;
    }

    const article = await prisma.article.create({
      data: {
        slug, title, excerpt, content, category, imageUrl,
        metaTitle, metaKeywords, metaDescription, imageAlt, imageTitle,
        published: published ?? false,
        publishedDate: publishedDate ? new Date(publishedDate) : null,
      },
    });
    res.status(201).json(article);
  } catch (error) {
    console.error('Create article error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/articles/:id
router.put('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug, title, excerpt, content, category, imageUrl, metaTitle, metaKeywords, metaDescription, imageAlt, imageTitle, published, publishedDate } = req.body;
    const data: Record<string, unknown> = {};
    if (slug !== undefined) data.slug = slug;
    if (title !== undefined) data.title = title;
    if (excerpt !== undefined) data.excerpt = excerpt;
    if (content !== undefined) data.content = content;
    if (category !== undefined) data.category = category;
    if (imageUrl !== undefined) data.imageUrl = imageUrl;
    if (metaTitle !== undefined) data.metaTitle = metaTitle;
    if (metaKeywords !== undefined) data.metaKeywords = metaKeywords;
    if (metaDescription !== undefined) data.metaDescription = metaDescription;
    if (imageAlt !== undefined) data.imageAlt = imageAlt;
    if (imageTitle !== undefined) data.imageTitle = imageTitle;
    if (published !== undefined) data.published = published;
    if (publishedDate !== undefined) data.publishedDate = publishedDate ? new Date(publishedDate) : null;

    const article = await prisma.article.update({ where: { id: req.params.id }, data });
    res.json(article);
  } catch (error) {
    console.error('Update article error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/articles/:id
router.delete('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const article = await prisma.article.findUnique({ where: { id: req.params.id } });
    if (article?.imageUrl && article.imageUrl.startsWith('/uploads/blog/')) {
      const filePath = path.join(process.cwd(), article.imageUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    await prisma.article.delete({ where: { id: req.params.id } });
    res.json({ message: 'Article deleted' });
  } catch (error) {
    console.error('Delete article error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
