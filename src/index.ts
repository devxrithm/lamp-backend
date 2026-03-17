import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./services/marks-service/marks-routes";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/", router);
//routes
app.get("/", (req, res) => {
  res.send("`Hello this is ukcode07!`");
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
