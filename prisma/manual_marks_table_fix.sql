BEGIN;

ALTER TABLE "onlineRound" ADD COLUMN IF NOT EXISTS "id" BIGSERIAL;
ALTER TABLE "offlineMentorRound" ADD COLUMN IF NOT EXISTS "id" BIGSERIAL;
ALTER TABLE "offlineJuryRound" ADD COLUMN IF NOT EXISTS "id" BIGSERIAL;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'onlineRound_pkey'
  ) THEN
    ALTER TABLE "onlineRound" ADD CONSTRAINT "onlineRound_pkey" PRIMARY KEY ("id");
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'offlineMentorRound_pkey'
  ) THEN
    ALTER TABLE "offlineMentorRound" ADD CONSTRAINT "offlineMentorRound_pkey" PRIMARY KEY ("id");
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'offlineJuryRound_pkey'
  ) THEN
    ALTER TABLE "offlineJuryRound" ADD CONSTRAINT "offlineJuryRound_pkey" PRIMARY KEY ("id");
  END IF;
END $$;

DROP INDEX IF EXISTS "onlineRound_teamName_key";
DROP INDEX IF EXISTS "offlineMentorRound_teamName_key";
DROP INDEX IF EXISTS "offlineJuryRound_teamName_key";

COMMIT;
