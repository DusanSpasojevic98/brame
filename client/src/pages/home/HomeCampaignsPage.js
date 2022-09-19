import React, { useContext, useEffect, useState } from 'react';
import Campaign from '../../components/campaign/Campaign';
import CampaignModal from '../../components/modals/CampaignModal';
import Header from '../../components/navigation/Header';
import { CampaignContext } from '../../context/CampaignContext';

const HomeCampaignsPage = () => {
  const { getAllCampaigns, campaigns } = useContext(CampaignContext);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getAllCampaigns();
  }, [])

  return (
    <div>
      <Header />
      <div style={styles.campaignsWrapper}>
        <CampaignModal open={openModal} setOpen={setOpenModal} title="Create new campaign" />
        <div style={styles.titleContainer}>
          <h1>Campaigns</h1>
        </div>
        {campaigns.length > 0 &&
          campaigns.map((campaign, index) => {
            return (
              <Campaign key={index} name={campaign.name} status={campaign.status} startDate={campaign.start_date} id={campaign.id}></Campaign>
            )
          })
        }
      </div>

    </div>
  );
}

export default HomeCampaignsPage;

// Used styled components because it is quicker for smaller project and because I used material UI, only maybe should seperate styles in different files for easier navigation and managing
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
