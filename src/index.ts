import app from "./app";
import { ensureAuthSchema, ensureMarksSchema, getPrisma } from "./lib/prisma";

const connectDb = async () => {
  await getPrisma()
    .$connect()
    .then(async () => {
      await ensureAuthSchema();
      await ensureMarksSchema();
      console.log("Connected to PostgreSQL");
    })
    .catch((error) => {
      console.error("Error connecting to PostgreSQL:", error);
    });
};

app.listen(3000, () => {
  connectDb();
  console.log(`listening on port http://localhost:3000`);
});
