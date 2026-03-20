import multer from "multer";
import multerS3 from "multer-s3";
import s3 from "./s3.js";

const bucketName = process.env.AWS_S3_BUCKET_NAME;

if (!bucketName) {
  throw new Error(
    "Missing AWS_S3_BUCKET_NAME. Add it to backend/.env before starting the resume service."
  );
}

const upload = multer({
  storage: multerS3({
    s3,
    bucket: bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
      const fileName = `resumes/${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
});

export default upload;
