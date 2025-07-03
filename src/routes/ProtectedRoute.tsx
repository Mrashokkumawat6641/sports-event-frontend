/** @format */

import { Navigate } from "react-router-dom";
import { useContext, createContext } from "react";
import { JSX } from "react/jsx-runtime";
import { parseJwt } from "../utils/jwt";

interface User {
  token?: string;
}

interface AuthContextType {
  user?: User;
}
export const AuthContext = createContext<AuthContextType>({});

interface ProtectedRouteProps {
  children: JSX.Element;
  allowRoles?: string[];
}

const ProtectedRoute = ({ children, allowRoles }: ProtectedRouteProps) => {
  const { user } = useContext(AuthContext);
  const token = user?.token || localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const payload = parseJwt(token);
  if (!payload) {
    return <Navigate to="/login" />;
  }

  if (allowRoles && !allowRoles.includes(payload.role)) {
    // If user is not allowed, redirect to home
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
