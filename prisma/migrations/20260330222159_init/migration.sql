-- CreateTable
CREATE TABLE "mentorTeams" (
    "teamId" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "presentation" INTEGER NOT NULL,
    "innovationMarks" INTEGER NOT NULL,
    "technicalComplexity" INTEGER NOT NULL,
    "marketFeasibility" INTEGER NOT NULL,
    "futureScope" INTEGER NOT NULL,
    "totalMarks" INTEGER NOT NULL,

    CONSTRAINT "mentorTeams_pkey" PRIMARY KEY ("teamId")
);

-- CreateIndex
CREATE UNIQUE INDEX "mentorTeams_teamName_key" ON "mentorTeams"("teamName");
