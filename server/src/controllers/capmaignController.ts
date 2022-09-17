import { Response } from "express";
import * as campaignService from "../service/campaignService";

export const getAllCampaigns = async (req: any, res: Response) => {
  const response = await campaignService.getAllCampaigns();

  res.send(response);
};

export const createCampaign = async (req: any, res: Response) => {
  const response = await campaignService.createCampaign(req.body);

  res.send(response);
};

export const editCampaign = async (req: any, res: Response) => {
  const response = await campaignService.editCampaign(req.params.id, req.body);

  res.send(response);
};

export const deleteCampaign = async (req: any, res: Response) => {
  const response = await campaignService.deleteCampaign(req.params.id);

  res.send(response);
};

export const activateCampaign = async (req: any, res: Response) => {
  const response = await campaignService.activateCampaign(req.params.id);

  res.send(response);
};
