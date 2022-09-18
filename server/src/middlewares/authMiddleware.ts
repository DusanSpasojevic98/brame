import { Response } from "express";
import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";

dotenv.config();

const jwtSecretKey: any = process.env.JWT_SECRET_KEY;

export const AuthRoute = async (req: any, res: Response, next: Function) => {
    let token = null;
    
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
  
    if (token === null) {
      return next(
        new Error("Not logged in")
      );
    }

    jwt.verify(token, jwtSecretKey)

    next();
  };