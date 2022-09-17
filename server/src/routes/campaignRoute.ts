import { Router } from "express";
import * as capmaignController from "../controllers/capmaignController";

const campaignRoute = Router();

campaignRoute.get("/capmaigns", capmaignController.getAllCampaigns);

campaignRoute.post("/create", capmaignController.createCampaign);

campaignRoute.patch("/edit/:id", capmaignController.editCampaign);

campaignRoute.patch("/activate/:id", capmaignController.activateCampaign);

campaignRoute.delete("/delete/:id", capmaignController.deleteCampaign);

export default campaignRoute;
