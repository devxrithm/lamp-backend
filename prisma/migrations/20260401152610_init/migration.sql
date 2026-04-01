/*
  Warnings:

  - You are about to drop the `mentorTeams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mentorTeams";

-- CreateTable
CREATE TABLE "onlineRound" (
    "teamId" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "presentation" INTEGER NOT NULL,
    "innovationMarks" INTEGER NOT NULL,
    "technicalComplexity" INTEGER NOT NULL,
    "marketFeasibility" INTEGER NOT NULL,
    "futureScope" INTEGER NOT NULL,
    "totalMarks" INTEGER NOT NULL,

    CONSTRAINT "onlineRound_pkey" PRIMARY KEY ("teamId")
);

-- CreateIndex
CREATE UNIQUE INDEX "onlineRound_teamName_key" ON "onlineRound"("teamName");
