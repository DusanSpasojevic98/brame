import React from 'react';

import { AuthenticationContextProvider } from './AuthenticationContext';

const GlobalContextProvider = props => {
  return (
    <AuthenticationContextProvider>
      {props.children}
    </AuthenticationContextProvider>
  );
};

export default GlobalContextProvider;
