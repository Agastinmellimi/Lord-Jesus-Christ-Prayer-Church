import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {

    const jwtToken = Cookies.get('jwt_token')
    const auth = {"token": jwtToken !== undefined}
    return(
    auth.token ? <Outlet/> : <Navigate to='/authenticate-error'/>
    )
  };

export default ProtectedRoute;