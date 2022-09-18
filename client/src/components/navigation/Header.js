import React, { useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

import { AuthenticationContext } from '../../context';

const Header = () => {
  const Navigate = useNavigate();

  const { deleteClientToken } = useContext(AuthenticationContext);

  const token = localStorage.getItem('token')

  const handleLogoutClick = () => {
    deleteClientToken();
    Navigate('/');
  }

  return (
    <div className='header-container' >
      <Box id='header' sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography id='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Brame Campaign
            </Typography>
            {token && <Button onClick={handleLogoutClick} color="inherit">Log out</Button>}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header;