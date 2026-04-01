import { Router } from "express";
import { mentorUploadMarks } from "./marks-controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

router.post("/upload-marks", authMiddleware, mentorUploadMarks);

export default router;
