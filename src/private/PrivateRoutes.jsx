import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user} = use(AuthContext)
    const location = useLocation()

    if(!user) {

       return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children
        
    
};

export default PrivateRoutes;