import { axiosInstance } from '../axios/axios';

export const getAllCampaigns = async () => {
  const data = await axiosInstance.get('/campaign/capmaigns');
  return data;
};

export const createNewCampaign = async payload => {
  const data = await axiosInstance.post('/campaign/create', payload);
  return data;
};