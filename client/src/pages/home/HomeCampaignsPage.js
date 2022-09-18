import { Button } from '@mui/material';
import React from 'react';
import Campaign from '../../components/campaign/Campaign';
import CampaignModal from '../../components/modals/CampaignModal';
import Header from '../../components/navigation/Header';

const HomeCampaignsPage = () => {

  return (
    <div>
      <Header />
      <div style={styles.campaignsWrapper}>
        <CampaignModal />
        <div style={styles.titleContainer}>
          <h1>Campaigns</h1>
        </div>
        <Campaign></Campaign>
      </div>

    </div>
  );
}

export default HomeCampaignsPage;

const styles = {
  campaignsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: 50
  },
  titleContainer: {
    display: "flex",
    width: "60%",
    justifyContent: "space-beetween",
  }
}
