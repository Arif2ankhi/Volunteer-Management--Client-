import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const  {user} = useContext(AuthContext)

    if(user){
        return children
    }


    return <Navigate to="/signin"></Navigate>
};

export default PrivateRoute;