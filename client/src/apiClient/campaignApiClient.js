import { axiosInstance } from '../axios/axios';

export const getAllCampaigns = async () => {
  const data = await axiosInstance.get('/campaign/campaigns');
  return data;
};

export const createNewCampaign = async payload => {
  const data = await axiosInstance.post('/campaign/create', payload);
  return data;
};

export const updateCampaign = async (payload) => {
  const data = await axiosInstance.patch(`/campaign/edit/${payload.id}`, payload);
  return data;
};

export const activateCampaign = async id => {
  const data = await axiosInstance.patch(`/campaign/activate/${id}`);
  return data;
};

export const deleteCampaign = async id => {
  const data = await axiosInstance.delete(`/campaign/delete/${id}`);
  return data;
};