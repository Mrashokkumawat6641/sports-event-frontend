/** @format */

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { JSX } from "react/jsx-runtime";
import { parseJwt } from "../utils/jwt";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowRoles?: string[];
}

const ProtectedRoute = ({ children, allowRoles }: ProtectedRouteProps) => {
  const { user }: any = useContext(AuthContext);
  const token = user?.token || localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const payload = parseJwt(token);
  if (process.env.NODE_ENV !== "production") {
    console.log("JWT payload:", payload);
  }

  if (allowRoles) {
    if (!payload || !payload.role) {
      return <Navigate to="/login" />;
    }
    if (!allowRoles.includes(payload.role)) {
      return <Navigate to="/" />;
    }
  }

  return children;
};

export default ProtectedRoute;
