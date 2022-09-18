import React, { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import { AuthenticationContext } from '../../context';


const LoginPage = () => {
  const { login } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [])

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };


  const loginUser = (event) => {
    event.preventDefault();
    login(loginData, successCallback, errorCallback);
  };

  const successCallback = async () => {
    navigate('/home');
  };

  const errorCallback = (error) => {
    alert(error)
  };

  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(event) => handleChange('username', event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => handleChange('password', event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;