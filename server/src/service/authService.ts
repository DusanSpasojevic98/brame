import clientDTO from "../dtos/clientDTO";
import dotenv from "dotenv";
import * as userService from "./clientService";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

dotenv.config();
const jwtSecretKey: any = process.env.JWT_SECRET_KEY;

const createJwtToken = (username: string, userId: number) => {
    return jwt.sign(
        { 
            username: username, 
            time: Date(),
            id: userId 
        },
        jwtSecretKey, 
    );
}

const compare = async (logPassword: string , userPassword: string) => {
    const comparation = await bcrypt.compare(userPassword, logPassword);

    return comparation;
}

export const  login = async (loginData: clientDTO) => {
    const user = await userService.getClientByUsername(loginData.username);

    if(!compare(user!.password, loginData.password)) {
        throw new Error("Incorrect password 400");
    }

    const token = createJwtToken(user!.username, user!.id);

    return { token };
}
