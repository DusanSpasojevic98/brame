import React, { createContext } from 'react';
import { axiosInstance } from '../axios/axios';
import { campaignService } from '../services';

const CampaignContext = createContext();

const CampaignContextProvider = props => {

  const getAllCampaigns = async (successCallback, errorCallback) => {
    try {
      const response = await campaignService.getAllCampaigns();
      successCallback();
    } catch (error) {
      errorCallback(error?.message);
    }
  }

  const providerValue = {
    getAllCampaigns,
  };

  return (
    <CampaignContext.Provider value={providerValue}>
      {props.children}
    </CampaignContext.Provider>
  );
};

export { CampaignContext, CampaignContextProvider };
