import { Router } from "express";
import * as authController from "../controllers/authController";
import * as expressValidator from "express-validator";
const authRoute = Router();

authRoute.post("/login", authController.login, (req: any, res: any) => {
  try {
    expressValidator.validationResult(req).throw();
  } catch (err) {
    //Need to implement better error handling
    res.status(400);
  }
});

export default authRoute;
