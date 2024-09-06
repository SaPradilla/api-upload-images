import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { SendImage } from "../controllers/Image.controller.js";
import { guard } from "../middleware/guard.middleware.js";

const router = Router();

router
    .post('/upload/image',guard,upload,SendImage)

export default router;