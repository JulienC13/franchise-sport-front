import React, { useContext } from "react";
import { Route } from "react-router-dom";

const AuthRoute = ({path, component}) =>{
  const {isAuthenticated} = useContext(Auth);
  return isAuthenticated ? (
    <Route exact path={path} component={component}/>
  ):(
    <Redirect to="/login"/>
  )
}
export default AuthRoute;