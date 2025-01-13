import React from "react";
import { useAuth } from "../context/Auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
