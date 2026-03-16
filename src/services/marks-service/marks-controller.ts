import { Response, Request } from "express";
import { Marks } from "../../types/types";
import { prisma } from "../../../DB/db-config";

export const uploadMarks = async (
  req: Request<"", "", Marks>,
  res: Response,
) => {
  try {
    const {
      teamName,
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
        teamName,
        innovationMarks,
        technicalComplexity,
        presentation,
        impact,
        functionality,
        problemRelevance,
        feasibility,
      },
    });

    res.status(200).json({ message: "Marks uploaded successfully" });
  } catch (error) {
    res.status(400).json({ error: "Invalid request body" });
  }
};
