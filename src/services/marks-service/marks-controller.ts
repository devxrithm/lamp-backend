import { Response, Request } from "express";
import { Marks } from "../../types/types";
import { prisma } from "../../lib/prisma";

export const uploadMarks = async (
  req: Request<"", "", Marks>,
  res: Response,
) => {
  try {
    const {
      innovationMarks,
      technicalComplexity,
      presentation,
      impact,
      functionality,
      problemRelevance,
      feasibility,
    } = req.body;

    const marks = {
      innovationMarks: Number(innovationMarks),
      technicalComplexity: Number(technicalComplexity),
      presentation: Number(presentation),
      impact: Number(impact),
      functionality: Number(functionality),
      problemRelevance: Number(problemRelevance),
      feasibility: Number(feasibility),
    };

    const totalMarks = Object.values(marks).reduce((sum, val) => sum + val, 0);

    await prisma.team.create({
      data: {
        teamId: 5214,
        teamName: "ukcoders-07",
        ...marks,
        totalMarks,
      },
    });

    return res.status(200).json({ message: "Marks uploaded successfully" });
  } catch (error) {
    console.log("Error uploading marks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};