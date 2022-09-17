import campaignDTO from "../dtos/campaignDTO";
import { campaign } from "../entities/campaign";
import { campaignStatus } from "../enums/campaingStatus";
import * as campaignRepository from "../repositories/campaignRepository";
import { mapNewCampaign } from "./helpers/campaignHelpers";

export const getAllCampaigns = async () => {
  const response = await campaignRepository.getAllCampaigns();

  if (response === null) {
    throw new Error("Campaign doesn't exist, 400");
  }

  return response;
};

export const createCampaign = async (campaignDto: campaignDTO) => {
  let campaignEntity = new campaign();

  mapNewCampaign(campaignEntity, campaignDto);

  const response = await campaignRepository.saveCampaign(campaignEntity);

  return response;
};

export const editCampaign = async (campaignId: number, campaignDto: campaignDTO) => {
  let campaignToEdit = await campaignRepository.getCampaignById(campaignId);

  if (campaignToEdit === null) {
    throw new Error("Campaign with that id doesn't exist");
  }

  if (campaignToEdit.status === campaignStatus.Inactive) {
    throw new Error("Can't edit campaign with inactive status");
  }

  campaignToEdit.name = campaignDto.name;
  campaignToEdit.image_url = campaignDto.imageUrl;

  const respose = await campaignRepository.saveCampaign(campaignToEdit);

  return respose;
};

export const deleteCampaign = async (campaignId: number) => {
  let campaignToDelete = await campaignRepository.getCampaignById(campaignId);

  if (campaignToDelete === null) {
    throw new Error("Campaign with that id doesn't exist");
  }

  if (campaignToDelete.status === campaignStatus.Deleted) {
    throw new Error("Campaign with that id is already deleted");
  }

  campaignToDelete.status = campaignStatus.Deleted;

  const respose = await campaignRepository.saveCampaign(campaignToDelete);

  return respose;
};

export const activateCampaign = async (campaignId: number) => {
  let campaignToActivate = await campaignRepository.getCampaignById(campaignId);

  if (campaignToActivate === null) {
    throw new Error("Campaign with that id doesn't exist");
  }

  if (campaignToActivate.status === campaignStatus.Active) {
    throw new Error("Campaign with that id is already activated you can't activate it");
  }

  campaignToActivate.status = campaignStatus.Active;
  campaignToActivate.start_date = new Date();

  const respose = await campaignRepository.saveCampaign(campaignToActivate);

  return respose;
};
