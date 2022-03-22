import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLogin = localStorage.getItem("username") !== null;

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
