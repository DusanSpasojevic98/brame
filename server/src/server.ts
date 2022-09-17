import express, { Express } from "express";
import dotenv from "dotenv";
import { dbInit } from "./dbConnection";
import auth from "./routes/authRoute";
import campaign from "./routes/campaignRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/campaign", campaign);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});

dbInit();
