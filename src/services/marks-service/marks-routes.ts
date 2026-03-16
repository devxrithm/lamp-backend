import { Router } from "express";
import { uploadMarks } from "./marks-controller";

const router = Router();

router.post("/upload-marks", uploadMarks);

export default router;
