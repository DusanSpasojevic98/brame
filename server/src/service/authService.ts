import clientDTO from "../dtos/clientDTO";
import * as userService from "./clientService";
import { compare, createJwtToken } from "./helpers/authHelpers";

export const login = async (loginData: clientDTO) => {
  const client = await userService.getClientByUsername(loginData.username);

  if (!(await compare(client.password, loginData.password))) {
    throw new Error("Incorrect password 400");
  }

  const token = createJwtToken(client.username, client.id);

  return { token };
};
