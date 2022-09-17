import { Response } from "express";
import * as authService from "../service/authService";

export const login = async (req: any, res: Response) => {
  const response = await authService.login(req.body);

  res.send(response);
};
