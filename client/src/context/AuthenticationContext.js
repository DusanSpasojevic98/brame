import React, { createContext } from 'react';
import { axiosInstance } from '../axios/axios';
import { authenticationService } from '../services';

const AuthenticationContext = createContext();

const AuthenticationContextProvider = props => {

  const setClientToken = token => {
    localStorage.setItem('token', token.token);
    axiosInstance.defaults.headers.authorization = `Bearer ${token.token}`;
  };

  const deleteClientToken = () => {
    axiosInstance.defaults.headers.authorization = '';
    return localStorage.removeItem('token');
  };

  const login = async (data, successCallback, errorCallback) => {
    try {
      const response = await authenticationService.login(data);
      setClientToken(response.data);
      successCallback();
    } catch (error) {
      errorCallback(error?.message);
    }
  }

  const providerValue = {
    deleteClientToken,
    login,
  };

  return (
    <AuthenticationContext.Provider value={providerValue}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationContextProvider };
