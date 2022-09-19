import * as  campaignApiClient from '../apiClient/campaignApiClient';

export const getAllCampaigns = async () => {
  const response = await campaignApiClient.getAllCampaigns();
  return response;
};

export const createNewCampaign = async data => {
  const payload = {
    name: data.name,
    imageUrl: `someImageUrl${data.name}`,
  };

  const response = await campaignApiClient.createNewCampaign(payload);
  return response;
};
export const updateCampaign = async data => {
  const payload = {
    name: data.name,
    imageUrl: `someImageUrl${data.name}`,
    id: data.editId,
  };

  const response = await campaignApiClient.updateCampaign(payload);
  return response;
};

export const activateCampaign = async (id) => {
  const response = await campaignApiClient.activateCampaign(id);
  return response;
};

export const deleteCampaign = async (id) => {
  const response = await campaignApiClient.deleteCampaign(id);
  return response;
};