import { Navigate } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import { Authcontextval } from '../Context/Authcontext';

const PrivateRoute = ({ children }) => {
const {user} = useContext(Authcontextval)
if (user){
  return children
}
else{
  <Navigate to="/auth" />
}


  
};

export default PrivateRoute;
