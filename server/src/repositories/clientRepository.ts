import { data } from '../dbConnection';
import { client } from '../entities/client';

const repository = data.getRepository(client);

export const getClientByUsername = async (username: string) => {
    const response = await repository.findOne({
        where: { 
            username: username
        }
    });

    return response;
} 