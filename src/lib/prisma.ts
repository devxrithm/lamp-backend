import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

let prismaClient: PrismaClient | null = null;

export const getPrisma = () => {
  if (prismaClient) {
    return prismaClient;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is missing");
  }

  const adapter = new PrismaPg({ connectionString });
  prismaClient = new PrismaClient({ adapter });
  return prismaClient;
};

export const ensureAuthSchema = async () => {
  const prisma = getPrisma();

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "User" (
      "id" TEXT PRIMARY KEY,
      "fullName" TEXT NOT NULL,
      "email" TEXT NOT NULL,
      "password" TEXT NOT NULL,
      "refreshToken" TEXT,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email")
  `);
};

export const ensureMarksSchema = async () => {
  const prisma = getPrisma();

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "onlineRound" (
      "id" SERIAL PRIMARY KEY,
      "teamId" INTEGER NOT NULL,
      "teamName" TEXT NOT NULL,
      "presentation" INTEGER NOT NULL,
      "innovationMarks" INTEGER NOT NULL,
      "technicalComplexity" INTEGER NOT NULL,
      "marketFeasibility" INTEGER NOT NULL,
      "futureScope" INTEGER NOT NULL,
      "totalMarks" INTEGER NOT NULL
    )
  `);

  await prisma.$executeRawUnsafe(`
    ALTER TABLE "onlineRound"
    ADD COLUMN IF NOT EXISTS "id" SERIAL,
    ADD COLUMN IF NOT EXISTS "teamId" INTEGER,
    ADD COLUMN IF NOT EXISTS "teamName" TEXT,
    ADD COLUMN IF NOT EXISTS "presentation" INTEGER,
    ADD COLUMN IF NOT EXISTS "innovationMarks" INTEGER,
    ADD COLUMN IF NOT EXISTS "technicalComplexity" INTEGER,
    ADD COLUMN IF NOT EXISTS "marketFeasibility" INTEGER,
    ADD COLUMN IF NOT EXISTS "futureScope" INTEGER,
    ADD COLUMN IF NOT EXISTS "totalMarks" INTEGER
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "offlineMentorRound" (
      "id" SERIAL PRIMARY KEY,
      "uploadedBy" TEXT NOT NULL,
      "teamName" TEXT NOT NULL,
      "presentation" INTEGER NOT NULL,
      "innovationMarks" INTEGER NOT NULL,
      "technicalComplexity" INTEGER NOT NULL,
      "marketFeasibility" INTEGER NOT NULL,
      "futureScope" INTEGER NOT NULL,
      "totalMarks" INTEGER NOT NULL,
      "round" INTEGER NOT NULL
    )
  `);

  await prisma.$executeRawUnsafe(`
    ALTER TABLE "offlineMentorRound"
    ADD COLUMN IF NOT EXISTS "id" SERIAL,
    ADD COLUMN IF NOT EXISTS "uploadedBy" TEXT,
    ADD COLUMN IF NOT EXISTS "teamName" TEXT,
    ADD COLUMN IF NOT EXISTS "presentation" INTEGER,
    ADD COLUMN IF NOT EXISTS "innovationMarks" INTEGER,
    ADD COLUMN IF NOT EXISTS "technicalComplexity" INTEGER,
    ADD COLUMN IF NOT EXISTS "marketFeasibility" INTEGER,
    ADD COLUMN IF NOT EXISTS "futureScope" INTEGER,
    ADD COLUMN IF NOT EXISTS "totalMarks" INTEGER,
    ADD COLUMN IF NOT EXISTS "round" INTEGER
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "offlineJuryRound" (
      "id" SERIAL PRIMARY KEY,
      "teamId" INTEGER NOT NULL,
      "uploadedBy" TEXT NOT NULL,
      "teamName" TEXT NOT NULL,
      "presentation" INTEGER NOT NULL,
      "innovationMarks" INTEGER NOT NULL,
      "technicalComplexity" INTEGER NOT NULL,
      "marketFeasibility" INTEGER NOT NULL,
      "futureScope" INTEGER NOT NULL,
      "totalMarks" INTEGER NOT NULL
    )
  `);

  await prisma.$executeRawUnsafe(`
    ALTER TABLE "offlineJuryRound"
    ADD COLUMN IF NOT EXISTS "id" SERIAL,
    ADD COLUMN IF NOT EXISTS "teamId" INTEGER,
    ADD COLUMN IF NOT EXISTS "uploadedBy" TEXT,
    ADD COLUMN IF NOT EXISTS "teamName" TEXT,
    ADD COLUMN IF NOT EXISTS "presentation" INTEGER,
    ADD COLUMN IF NOT EXISTS "innovationMarks" INTEGER,
    ADD COLUMN IF NOT EXISTS "technicalComplexity" INTEGER,
    ADD COLUMN IF NOT EXISTS "marketFeasibility" INTEGER,
    ADD COLUMN IF NOT EXISTS "futureScope" INTEGER,
    ADD COLUMN IF NOT EXISTS "totalMarks" INTEGER
  `);

  await prisma.$executeRawUnsafe(`
    DROP INDEX IF EXISTS "onlineRound_teamName_key"
  `);

  await prisma.$executeRawUnsafe(`
    DROP INDEX IF EXISTS "offlineMentorRound_teamName_key"
  `);

  await prisma.$executeRawUnsafe(`
    DROP INDEX IF EXISTS "offlineJuryRound_teamName_key"
  `);
};
