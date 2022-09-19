import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { CampaignContext } from '../../context/CampaignContext';

//Should probably make more reusable but or current purpose is okay
const CampaignModal = ({ open, setOpen, title, isEdit, editId, editName }) => {
  const { createNewCampaign, updateCampaign } = useContext(CampaignContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const namePlaceholder = editName ? editName : "";
  const [image, setImage] = React.useState();
  const [previewImage, setPreviewImage] = React.useState();
  const [campaignData, setCampaignData] = React.useState({
    name: '',
    // image
  });
  const isSubmitActive = campaignData.name != '';


  const handleChangeImage = () => (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImage(file);
      fileToBase64(file);
    }
  };

  //Should put in a helper - picture upload but its not connected to the backend
  const fileToBase64 = async (file) => {
    if (file !== undefined) {
      const reader = new FileReader();

      reader.onloadend = () => {
        let base64data = reader.result;
        setPreviewImage(base64data);
      };

      reader.readAsDataURL(file);
      return;
    }
    setImage(null);
  };


  const handleChange = (name, value) => {
    setCampaignData({ ...campaignData, [name]: value });
  };

  const submitNewCampaign = () => {
    if (isEdit) {
      const data = { ...campaignData, editId };
      updateCampaign(data);
    } else {
      createNewCampaign(campaignData);
    }

    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxStyle}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={previewImage}
              style={styles.imageStyle}
            />
            <label htmlFor='contained-button-file'>
              <input
                id='contained-button-file'
                accept="image/*"
                name="myImage"
                title="Upload campaign image"
                style={styles.inputField}
                type="file"
                onChange={handleChangeImage()}
              />
              <button
                style={styles.inputButton}
                variant='contained'
                component='span'
              >
                <h1>Upload campaign picture</h1>
              </button>
            </label>

          </div>
          <div style={styles.verticalMargin}>
            <TextField
              name="name"
              placeholder={namePlaceholder}
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              onChange={(event) => handleChange('name', event.target.value)}
            />
          </div>
          <Button
            disabled={!isSubmitActive}
            onClick={() => submitNewCampaign()}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {
              isEdit ?
                "Update campaign"
                :
                "Submit new campaign"
            }

          </Button>
          <Button
            onClick={() => handleClose()}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CampaignModal;

const styles = {
  imageStyle: {
    alignSelf: "center",
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 4,
    objectFit: "cover",
    marginBottom: 30
  },
  inputField: {
    zIndex: 1,
    position: "absolute",
    opacity: 0,
    width: "86%",
    height: "60px",
    cursor: "pointer"
  },
  inputButton: {
    position: "absolute",
    width: "86%",
    height: "60px",
    cursor: "pointer"
  },
  verticalMargin: {
    marginBottom: 30,
    marginTop: 90,
  },
  bottomMargin: {
    marginBottom: 30
  },
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
    marginBottom: 30
  }
};