-- CreateTable
CREATE TABLE "offlineMentorRound" (
    "teamId" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "presentation" INTEGER NOT NULL,
    "innovationMarks" INTEGER NOT NULL,
    "technicalComplexity" INTEGER NOT NULL,
    "marketFeasibility" INTEGER NOT NULL,
    "futureScope" INTEGER NOT NULL,
    "totalMarks" INTEGER NOT NULL,

    CONSTRAINT "offlineMentorRound_pkey" PRIMARY KEY ("teamId")
);

-- CreateTable
CREATE TABLE "offlineJuryRound" (
    "teamId" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "presentation" INTEGER NOT NULL,
    "innovationMarks" INTEGER NOT NULL,
    "technicalComplexity" INTEGER NOT NULL,
    "marketFeasibility" INTEGER NOT NULL,
    "futureScope" INTEGER NOT NULL,
    "totalMarks" INTEGER NOT NULL,

    CONSTRAINT "offlineJuryRound_pkey" PRIMARY KEY ("teamId")
);

-- CreateIndex
CREATE UNIQUE INDEX "offlineMentorRound_teamName_key" ON "offlineMentorRound"("teamName");

-- CreateIndex
CREATE UNIQUE INDEX "offlineJuryRound_teamName_key" ON "offlineJuryRound"("teamName");
