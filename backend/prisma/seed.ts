import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create admin user if not exists
  const adminEmail = 'admin@emad-panels.com';
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123456', 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'إدارة عماد الحلواني',
      },
    });
    console.log('✅ Admin user created: admin@emad-panels.com / admin123456');
  }

  // Create default site settings if not exists
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

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
