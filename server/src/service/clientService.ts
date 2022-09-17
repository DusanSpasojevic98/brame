import * as clientRepository from "../repositories/clientRepository";

export const getClientByUsername = async (username: string) => {
  const response = await clientRepository.getClientByUsername(username);

  if (response === null) {
    throw new Error("Client doesn't exist, 400");
  }

  return response;
};
