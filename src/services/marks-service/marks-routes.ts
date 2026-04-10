import { Router } from "express";
import { offlineMentorRound, offlineJuryRound } from "./marks-controller";
import { verifyJWT } from "../../middleware/jwt-verify";

const router = Router();

// router.post("/mentor-online",onlineMentorRound);
router.post("/mentor-offline", verifyJWT, offlineMentorRound);
router.post("/jury-offline", verifyJWT, offlineJuryRound);

export default router;
