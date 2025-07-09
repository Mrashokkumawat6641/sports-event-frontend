/** @format */

import React, { createContext, useState, useEffect } from "react";
import { parseJwt } from "../utils/jwt";

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Example: get token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      const payload = parseJwt(token);
      setUser({ token, ...payload });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
