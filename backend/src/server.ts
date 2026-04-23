import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/emad';
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

app.use(cors());
app.use(express.json());

// Seed Database internally on first boot
async function ensureSeeded() {
  const existingAdmin = await prisma.user.findUnique({ where: { email: 'admin@emad-panels.com' } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123456', 10);
    await prisma.user.create({
      data: {
        email: 'admin@emad-panels.com',
        password: hashedPassword,
        name: 'إدارة عماد الحلواني',
      },
    });
    console.log('✅ Admin user created: admin@emad-panels.com');
  }

  const existingSettings = await prisma.siteSettings.findFirst();
  if (!existingSettings) {
    await prisma.siteSettings.create({
      data: {
        siteName: 'عماد الحلواني للوحات الكهربائية',
        email1: 'info@emad-panels.com',
        phone1: '+20 100 123 4567',
        address: 'المنطقة الصناعية الثالثة، مدينة العاشر من رمضان',
      }
    });
    console.log('✅ Default Site Settings created');
  }
}

// ----------------------------------------
// Middleware
// ----------------------------------------
const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

// ----------------------------------------
// Public Routes
// ----------------------------------------
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/settings', async (req, res) => {
  const settings = await prisma.siteSettings.findFirst();
  res.json(settings || {});
});

app.get('/api/projects', async (req, res) => {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(projects);
});

app.get('/api/clients', async (req, res) => {
  const clients = await prisma.client.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(clients);
});

app.get('/api/certificates', async (req, res) => {
  const certificates = await prisma.certificate.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(certificates);
});

app.get('/api/services', async (req, res) => {
  const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(services);
});

app.post('/api/contact', async (req, res) => {
  try {
    const contact = await prisma.contact.create({ data: req.body });
    res.status(201).json({ success: true, contact });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact' });
  }
});

app.post('/api/quote', async (req, res) => {
  try {
    const quote = await prisma.quoteRequest.create({ data: req.body });
    res.status(201).json({ success: true, quote });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
});

// ----------------------------------------
// Admin Auth Routes
// ----------------------------------------
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid email or password.' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password.' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// ----------------------------------------
// Admin CRUD Routes (Protected)
// ----------------------------------------
app.put('/api/admin/settings', authMiddleware, async (req, res) => {
  const settings = await prisma.siteSettings.findFirst();
  const data = req.body;
  if (settings) {
    const updated = await prisma.siteSettings.update({ where: { id: settings.id }, data });
    res.json(updated);
  } else {
    const created = await prisma.siteSettings.create({ data });
    res.status(201).json(created);
  }
});

app.post('/api/admin/projects', authMiddleware, async (req, res) => {
  const project = await prisma.project.create({ data: req.body });
  res.status(201).json(project);
});

app.put('/api/admin/projects/:id', authMiddleware, async (req, res) => {
  const project = await prisma.project.update({ where: { id: Number(req.params.id) }, data: req.body });
  res.json(project);
});

app.delete('/api/admin/projects/:id', authMiddleware, async (req, res) => {
  await prisma.project.delete({ where: { id: Number(req.params.id) } });
  res.json({ success: true });
});

app.post('/api/admin/clients', authMiddleware, async (req, res) => {
  const client = await prisma.client.create({ data: req.body });
  res.status(201).json(client);
});

app.delete('/api/admin/clients/:id', authMiddleware, async (req, res) => {
  await prisma.client.delete({ where: { id: Number(req.params.id) } });
  res.json({ success: true });
});

app.post('/api/admin/certificates', authMiddleware, async (req, res) => {
  const cert = await prisma.certificate.create({ data: req.body });
  res.status(201).json(cert);
});

app.delete('/api/admin/certificates/:id', authMiddleware, async (req, res) => {
  await prisma.certificate.delete({ where: { id: Number(req.params.id) } });
  res.json({ success: true });
});

app.get('/api/admin/messages', authMiddleware, async (req, res) => {
  const contacts = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(contacts);
});

app.get('/api/admin/quotes', authMiddleware, async (req, res) => {
  const quotes = await prisma.quoteRequest.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(quotes);
});

app.put('/api/admin/messages/:id/read', authMiddleware, async (req, res) => {
  const contact = await prisma.contact.update({ where: { id: Number(req.params.id) }, data: { isRead: true } });
  res.json(contact);
});

app.put('/api/admin/quotes/:id/read', authMiddleware, async (req, res) => {
  const quote = await prisma.quoteRequest.update({ where: { id: Number(req.params.id) }, data: { isRead: true } });
  res.json(quote);
});

// Start Server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await ensureSeeded();
});
