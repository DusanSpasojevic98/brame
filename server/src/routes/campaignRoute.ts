import { Router } from "express";
import * as capmaignController from "../controllers/capmaignController";
import { AuthRoute } from "../middlewares/authMiddleware";

const campaignRoute = Router();

campaignRoute.get("/capmaigns", AuthRoute, capmaignController.getAllCampaigns);

campaignRoute.post("/create", AuthRoute, capmaignController.createCampaign);

campaignRoute.patch("/edit/:id", AuthRoute, capmaignController.editCampaign);

campaignRoute.patch("/activate/:id", AuthRoute, capmaignController.activateCampaign);

campaignRoute.delete("/delete/:id", AuthRoute, capmaignController.deleteCampaign);

export default campaignRoute;
