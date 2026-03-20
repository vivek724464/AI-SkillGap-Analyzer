import prisma from "../../../shared/infra/prismaClient.js";
import { asyncHandler } from "../../../shared/utils/asyncHandler.js";

export const uploadResume = asyncHandler(async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  const resume = await prisma.resume.create({
    data: {
      userId: req.user.userId,
      fileUrl: file.location,
      extractedSkills: [],
    },
  });

  return res.status(201).json({
    message: "Resume uploaded successfully",
    resumeId: resume.id,
    fileUrl: resume.fileUrl,
  });
});
