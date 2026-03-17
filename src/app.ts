import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./services/marks-service/marks-routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/", router);
app.get("/", (_req, res) => {
  res.send("`Hello this is ukcode07!`");
});

export default app;
