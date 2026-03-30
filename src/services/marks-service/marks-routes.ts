import { Router } from "express";
import { mentorUploadMarks } from "./marks-controller";

const router = Router();

router.post("/upload-marks", mentorUploadMarks);

export default router;
