// src/lib/db.ts
import { PrismaClient } from '@/generated/prisma';

// Singleton pattern for Prisma Client
const globalForPrisma = global as typeof global & {
  prisma?: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;