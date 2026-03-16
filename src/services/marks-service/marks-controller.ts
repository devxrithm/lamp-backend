import { Response, Request } from "express";
import { Marks } from "../../types/types";
import { PrismaClient } from "@prisma/client/extension";

export const uploadMarks = (req: Request<"", "", Marks>, res: Response) => {
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

    //save into Database
    res.status(200).json({ message: "Marks uploaded successfully" });
  } catch (error) {
    res.status(400).json({ error: "Invalid request body" });
  }
};
