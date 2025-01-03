import { Router } from "express";
import type { IRouter } from "express";
import { uploadFile } from "../controllers/upload-file";
import { uploadText } from "../controllers/upload-text";
import { getEmbeddings } from "../controllers/embeddings";
import { upload } from "../middleware/upload";

export const router: IRouter = Router();

router.post("/upload_file", upload.single("file"), uploadFile);
router.post("/upload_text", uploadText);
router.post("/embeddings", getEmbeddings);
