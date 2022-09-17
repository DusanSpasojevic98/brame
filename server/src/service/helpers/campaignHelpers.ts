import campaignDTO from "../../dtos/campaignDTO";
import { campaign } from "../../entities/campaign";
import { campaignStatus } from "../../enums/campaingStatus";

export const mapNewCampaign = (campaign: campaign, capmaignDto: campaignDTO) => {
  campaign.name = capmaignDto.name;
  campaign.status = campaignStatus.Inactive;
  campaign.start_date = null;
  campaign.image_url = capmaignDto.imageUrl;
};
