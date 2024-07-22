import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default ProtectedRoute;
