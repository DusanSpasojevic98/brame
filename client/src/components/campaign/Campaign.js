import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { IconButton, Typography } from '@mui/material';
import moment from 'moment';
import { STATUS_CONSTANTS } from '../../utils/campaignStatuses';
import { CampaignContext } from '../../context/CampaignContext';
import CampaignModal from '../modals/CampaignModal';
import DeleteModal from '../modals/DeleteModal';

const Campaign = ({ image, name, status, startDate, id }) => {
  const { activateCampaign, deleteCampaign } = useContext(CampaignContext);
  const campaignStart = startDate ? moment(startDate).format('HH:mm - YYYY-MM-DD') : "Pending";
  const campaignStatus = STATUS_CONSTANTS[status].name;
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const activateCampaignClick = () => {
    activateCampaign(id);
  }

  //This needs better alingment definitely
  return (
    <Card sx={styles.cardWrapper} style={styles.campaignWrapper}>
      <CampaignModal open={openEditModal} setOpen={setOpenEditModal} isEdit={true} editId={id} editName={name} />
      <DeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal} deleteId={id} />
      <Avatar sx={styles.avatarWrapper} style={styles.avatar} />
      <div style={styles.oneItemStyle}>
        <h4>
          Name
        </h4>
        <Typography>
          {name}
        </Typography>
      </div>
      <div style={styles.oneItemStyle}>
        <h4>
          Status
        </h4>
        <Typography >
          {campaignStatus}
        </Typography>
      </div>
      <div style={styles.oneItemStyle}>
        <h4>
          Start time
        </h4>
        <Typography >
          {campaignStart}
        </Typography>
      </div>

      <CardActions disableSpacing style={styles.actionWrapper}>
        {campaignStatus !== "Deleted" &&
          <IconButton onClick={() => { setOpenEditModal(true) }}>
            Edit
          </IconButton>
        }
        {campaignStatus !== "Deleted" &&
          <IconButton onClick={() => { setOpenDeleteModal(true) }}>
            Delete
          </IconButton>
        }
        {campaignStatus === "Inactive" &&
          <IconButton onClick={activateCampaignClick}>
            Activate
          </IconButton>
        }
      </CardActions>
    </Card>
  );
}

export default Campaign;

const styles = {
  campaignWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#99CCEE",
    width: "60%",
    marginBottom: 30
  },
  avatar: {
    margin: 20
  },
  avatarWrapper: {
    width: 80,
    height: 80
  },
  cardWrapper: {
    maxWidth: 1400,
    paddingRight: 5,
  },
  oneItemStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginBottom: 25,
  },
  actionWrapper: {
    display: 'flex',
    flex: 1
  }
}