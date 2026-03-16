-- CreateTable
CREATE TABLE "Team" (
    "teamId" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "innovationMarks" INTEGER NOT NULL,
    "technicalComplexity" INTEGER NOT NULL,
    "presentation" INTEGER NOT NULL,
    "impact" INTEGER NOT NULL,
    "functionality" INTEGER NOT NULL,
    "problemRelevance" INTEGER NOT NULL,
    "feasibility" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamName_key" ON "Team"("teamName");
