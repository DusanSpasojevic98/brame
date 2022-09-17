import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

dotenv.config();
const jwtSecretKey: any = process.env.JWT_SECRET_KEY;

export const createJwtToken = (username: string, userId: number) => {
  return jwt.sign(
    {
      username: username,
      time: Date(),
      id: userId,
    },
    jwtSecretKey
  );
};

export const compare = async (userPassword: string, logPassword: string) => {
  const comparation = await bcrypt.compare(logPassword, userPassword);

  return comparation;
};
