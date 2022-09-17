import React, { createContext, useEffect, } from 'react';

import { axiosInstance } from '../axios/axios';

import { authenticationService } from '../services';

const AuthenticationContext = createContext();

const AuthenticationContextProvider = props => {

  const setClientToken = token => {
    localStorage.setItem('token', token.token);
    axiosInstance.defaults.headers.authorization = `Bearer ${token}`;
  };

  const deleteClientToken = () => {
    axiosInstance.defaults.headers.authorization = '';
    return localStorage.removeItem('token');
  };

  // const getClientToken = () => {
  //   const userToken = localStorage.getItem('token')

  //   if (userToken) {
  //     return setClientToken(userToken)
  //   }
  // };

  // Maybe not needed, need to test token handling
  // useEffect(() => {
  //   if (token === '') {
  //     getClientToken();
  //   }
  // }, [token]);


  // Maybe add successCallback, errorCallback and setup consistent error handling
  const login = async (data) => {
    try {
      const response = await authenticationService.login(data);
      setClientToken(response.data);
    } catch (error) {
      console.log('error?.message :>> ', error?.message);
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
