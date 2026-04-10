/*
  Warnings:

  - The primary key for the `offlineMentorRound` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `teamId` on the `offlineMentorRound` table. All the data in the column will be lost.
  - Added the required column `uploadedBy` to the `offlineJuryRound` table without a default value. This is not possible if the table is not empty.
  - Added the required column `round` to the `offlineMentorRound` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploadedBy` to the `offlineMentorRound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "offlineJuryRound" ADD COLUMN     "uploadedBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "offlineMentorRound" DROP CONSTRAINT "offlineMentorRound_pkey",
DROP COLUMN "teamId",
ADD COLUMN     "round" INTEGER NOT NULL,
ADD COLUMN     "uploadedBy" TEXT NOT NULL;
