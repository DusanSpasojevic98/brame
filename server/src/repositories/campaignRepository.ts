import { data } from "../dbConnection";
import { campaign } from "../entities/campaign";

const repository = data.getRepository(campaign);

export const getAllCampaigns = async () => {
  const response = await repository.find();

  return response;
};

export const saveCampaign = async (campaign: campaign) => {
  await repository.save(campaign);

  return campaign;
};

export const getCampaignById = async (id: number) => {
  const response = await repository.findOne({
    where: { id: id },
  });

  return response;
};
