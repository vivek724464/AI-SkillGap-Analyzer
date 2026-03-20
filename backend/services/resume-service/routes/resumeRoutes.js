import express from "express";
import upload from "../config/multer.js";
import { uploadResume } from "../controllers/resumeController.js";
import { verifyToken } from "../../../shared/middleware/authMiddleware.js";

const router = express.Router();

router.post("/upload", verifyToken, upload.single("resume"), uploadResume);

export default router;
