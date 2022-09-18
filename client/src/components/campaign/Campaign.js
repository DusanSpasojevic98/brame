import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { IconButton, Typography } from '@mui/material';

const Campaign = ({ image, name, status }) => {

  return (
    <Card sx={{ maxWidth: 1400 }} style={styles.campaignWrapper}>
      <Avatar sx={{ width: 80, height: 80 }} style={{ margin: 20 }} />
      <Typography>
        {"Name"}
      </Typography>
      <Typography >
        {"Status"}
      </Typography>
      <Typography >
        {"StartDate"}
      </Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="dislike" >
          Edit
        </IconButton>
        <IconButton aria-label="dislike" >
          Delete
        </IconButton>
        <IconButton aria-label="dislike" >
          Activate
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Campaign;

const styles = {
  campaignWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#99CCEE",
    width: "60%",
    marginBottom: 30
  }
}