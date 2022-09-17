import * as clientRepository from '../repositories/clientRepository';

export const getClientByUsername = async (username: string) => {
    const response = clientRepository.getClientByUsername(username);

    if(!response === null)
        throw new Error("User doesn't exist, 400");

    return response;
}


