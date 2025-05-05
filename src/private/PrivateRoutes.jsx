import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoutes = ({children}) => {

    const {user , loading} = use(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loading/>
    }


    if(!user) {

       return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children
        
    
};

export default PrivateRoutes;