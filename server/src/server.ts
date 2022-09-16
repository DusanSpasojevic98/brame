import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { initializeDatabase } from './db';
// import authRoutes from "./routes/authRoutes";
// import campaignRoutes from "./routes/campaignRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/campaign", campaignRoutes);

app.get('/', async (req: Request, res: Response) => {
  res.send('Request');
});

app.listen(port, () => {
  console.log(`Running at https://localhost:${port}`);
});

initializeDatabase();