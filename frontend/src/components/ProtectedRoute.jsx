import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";
import { Navigate } from "react-router";

const ProtectedRoute = (props) => {
  const userCtx = useContext(UserContext);
  const isAuthenticated = userCtx.accessToken.length > 0;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return props.children;
};

export default ProtectedRoute;
