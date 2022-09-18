import * as  clientApiClient from '../apiClient/clientApiClient';

export const login = async data => {

  const payload = {
    username: data.username,
    password: data.password,
  };

  const token = await clientApiClient.login(payload);
  return token;
};
