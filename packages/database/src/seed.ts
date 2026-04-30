import { prisma } from './client.js';

async function main() {
  console.log('🌱 Starting database seed...\n');

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@aamold-hunter.com' },
    update: {},
    create: {
      email: 'admin@aamold-hunter.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  });
  console.log('👤 Created admin user:', admin.email);

  // Create test user
  const user = await prisma.user.upsert({
    where: { email: 'user@aamold-hunter.com' },
    update: {},
    create: {
      email: 'user@aamold-hunter.com',
      name: 'Test User',
      role: 'USER',
    },
  });
  console.log('👤 Created test user:', user.email);

  console.log('\n✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
