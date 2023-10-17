import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('privateRoute',location);
    if(loading){

        return  <div>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
        
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

}

export default PrivateRoute;