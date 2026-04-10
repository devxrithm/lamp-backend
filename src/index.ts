import mongoose from "mongoose";
import app from "./app";

const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

app.listen(3000, () => {
  connectDb();
  console.log(`listening on port 3000`);
});
