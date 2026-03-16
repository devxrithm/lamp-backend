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

    await prisma.team.create({
      data: {
        teamId: 5214,
        teamName: "ukcoders-07",
        innovationMarks,
        technicalComplexity,
        presentation,
        impact,
        functionality,
        problemRelevance,
        feasibility,
        totalMarks:
          innovationMarks +
          technicalComplexity +
          presentation +
          impact +
          functionality +
          problemRelevance +
          feasibility,
      },
    });

    res.status(200).json({ message: "Marks uploaded successfully" });
  } catch (error) {
    console.log("Error uploading marks:", error);
    res.status(400).json({ error: "Invalid request body" });
  }
};
