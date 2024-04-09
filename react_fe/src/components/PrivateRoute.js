import React from "react";
import { Navigate } from "react-router-dom";

export const useAuth = () => {
  return !!sessionStorage.getItem("token");
};

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;
