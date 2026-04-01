import { Response, Request } from "express";
import { Marks } from "../../types/types";
import { getPrisma } from "../../lib/prisma";

export const mentorUploadMarks = async (
  req: Request<any, any, Marks>,
  res: Response,
) => {
  try {
    const prisma = getPrisma();

    const {
      teamId,
      teamName,
      presentation,
      innovationMarks,
      technicalComplexity,
      marketFeasibility,
      futureScope,
    } = req.body;

    const marks = {
      innovationMarks: Number(innovationMarks),
      technicalComplexity: Number(technicalComplexity),
      presentation: Number(presentation),
      marketFeasibility: Number(marketFeasibility),
      futureScope: Number(futureScope),
    };

    const totalMarks = Object.values(marks).reduce((sum, val) => sum + val, 0);

    const data = await prisma.onlineRound.create({
      data: {
        teamId,
        teamName,
        ...marks,
        totalMarks,
      },
    });
    console.log("Marks uploaded successfully:", data);
    return res.status(200).json({ message: "Marks uploaded successfully" });
  } catch (error) {
    console.log("Error uploading marks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
