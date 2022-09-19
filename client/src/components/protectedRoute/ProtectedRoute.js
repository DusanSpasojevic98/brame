import React, { useContext, useEffect } from 'react';
import { Route, useNavigate } from "react-router-dom";
import { AuthenticationContext } from '../../context';
import LoginPage from '../../pages/login/LoginPage';
import { isJwtValid } from '../../utils/JwtUtil';


const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
    const token = localStorage.getItem('token')
    const { deleteClientToken } = useContext(AuthenticationContext);
    const Navigate = useNavigate();

    useEffect(() => {
        if (token) {
            if (!isJwtValid(token)) {
                deleteClientToken();
                Navigate('/');
            }
        }
    }, [token])

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isJwtValid(token) ? <Component {...props} /> : <LoginPage />
            }
        />
    );
}

export default ProtectedRoute;