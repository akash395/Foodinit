import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./auth";


// This accepts Component as a prop and all other props of that component as rest
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext (AuthContext)

    return (
      <Route {...rest} render = {(props) => 
        token ? (
        // <Component {...props} />
        <Redirect to = '/records' />
      ): (
        <Redirect to = '/admin' />
      )}/>
    );
  };
  