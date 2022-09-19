import React from 'react';
import { AuthenticationContextProvider } from './AuthenticationContext';
import { CampaignContextProvider } from './CampaignContext';

const GlobalContextProvider = props => {
  return (
    <AuthenticationContextProvider>
      <CampaignContextProvider>
        {props.children}
      </CampaignContextProvider>
    </AuthenticationContextProvider>
  );
};

export default GlobalContextProvider;
