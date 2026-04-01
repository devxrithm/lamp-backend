import { Router } from "express";
import { onlineMentorRound, offlineMentorRound, offlineJuryRound } from "./marks-controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

router.post("/mentor-online", authMiddleware, onlineMentorRound);
router.post("/mentor-offline", authMiddleware, offlineMentorRound);
router.post("/jury-offline", authMiddleware, offlineJuryRound);

export default router;
