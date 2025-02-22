import express from 'express'
import UploadArchive from '../controller/DocumentCotrolller';
import multer from "multer";

const router = express.Router();

// Multer Storage Setup (Store files in `uploads/` temporarily)
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });


/// To upload A archiv file
router.post("/upload-archive",upload.single("file"),UploadArchive)

export default router