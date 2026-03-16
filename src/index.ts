import express from 'express';
import cors from 'cors'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.json())
app.use(express.urlencoded({ extends: true }))
app.use(cors())
app.use(cookieParser());

//routes
app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});



const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
