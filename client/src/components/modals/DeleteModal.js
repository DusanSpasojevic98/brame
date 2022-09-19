import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import { CampaignContext } from '../../context/CampaignContext';

const DeleteModal = ({ open, setOpen, deleteId }) => {
  const { deleteCampaign } = useContext(CampaignContext);
  const handleClose = () => setOpen(false);

  const deleteCampaignClick = () => {
    deleteCampaign(deleteId);
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxStyle}>
          <Typography style={{ marginBottom: 30, marginTop: 20, fontWeight: "bold" }}>
            Are you sure you want to delete this campaign
          </Typography>
          <Button
            onClick={() => deleteCampaignClick()}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            Delete
          </Button>
          <Button
            onClick={() => handleClose()}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteModal;

const styles = {
  boxStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    marginBottom: 30,
  },
  deleteText: {
    marginBottom: 30,
    marginTop: 20,
    fontWeight: "bold"
  }
};