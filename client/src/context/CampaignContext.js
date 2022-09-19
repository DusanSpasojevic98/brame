import React, { createContext, useState } from 'react';
import { campaignService } from '../services';

const CampaignContext = createContext();

const CampaignContextProvider = props => {
  const [campaigns, setCampaigns] = useState({});

  const getAllCampaigns = async () => {
    try {
      const response = await campaignService.getAllCampaigns();
      setCampaigns(response.data);
    } catch (error) {
      // Also need better error handling
      console.log('Error while getting capmaigns', error?.message)
    }
  }

  const createNewCampaign = async (data) => {
    try {
      await campaignService.createNewCampaign(data);
      //Should optimize so that it does not always all campaigns - pagination or just change current campaigns
      getAllCampaigns();
    } catch (error) {
      console.log('Error while creating new campaign', error?.message)
    }
  }

  const updateCampaign = async (data) => {
    try {
      await campaignService.updateCampaign(data);
      getAllCampaigns();
    } catch (error) {
      console.log('Error while creating new campaign', error?.message)
    }
  }

  const activateCampaign = async (id) => {
    try {
      await campaignService.activateCampaign(id);
      //Should optimize sorting because it puts it on the bottom when activated
      getAllCampaigns();
    } catch (error) {
      console.log('Error while activating a campaign', error?.message)
    }
  }

  const deleteCampaign = async (id) => {
    try {
      await campaignService.deleteCampaign(id);
      getAllCampaigns();
    } catch (error) {
      console.log('Error while activating a campaign', error?.message)
    }
  }

  const providerValue = {
    campaigns,
    getAllCampaigns,
    createNewCampaign,
    activateCampaign,
    deleteCampaign,
    updateCampaign
  };

  return (
    <CampaignContext.Provider value={providerValue}>
      {props.children}
    </CampaignContext.Provider>
  );
};

export { CampaignContext, CampaignContextProvider };
