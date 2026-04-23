import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/emad';
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

const app = express();
const prisma = new PrismaClient({ adapter });
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Emad Al-Halawani API is running' });
});

// Example route: Get products
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Example route: Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await prisma.contact.create({
      data: { name, email, phone, message }
    });
    res.status(201).json({ success: true, contact });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
