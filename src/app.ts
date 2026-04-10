import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./services/marks-service/marks-routes";
import { config } from "./config/env-config/config";
import { authRoutes } from "./services/auth-services/auth-routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigins = [
  "https://lamp-mih.vercel.app",
  "http://localhost:3000",
  ...(config.CORS_URL ? config.CORS_URL.split(",").map((origin) => origin.trim()) : []),
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", router);

app.get("/", (_req, res) => {
  res.send("`Hello this is ukcode07!`");
});

export default app;
