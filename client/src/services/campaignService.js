import * as  campaignApiClient from '../apiClient/campaignApiClient';

export const getAllCampaigns = async () => {
  const response = await campaignApiClient.getAllCampaigns();
  return response;
};

export const createNewCampaign = async data => {
  const payload = {
    name: data.name,
    image: data.image,
  };

  const response = await campaignApiClient.create(payload);
  return response;
};
