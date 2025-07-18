/** @format */

import React, { createContext, useContext, useState } from "react";

export interface RegistrationData {
  koach?: any;
  game?: any;
  details?: any;
  player?: any;
  // Add more fields as needed
}

interface RegistrationContextType {
  data: RegistrationData;
  setData: (data: Partial<RegistrationData>) => void;
  resetData: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setDataState] = useState<RegistrationData>({});

  const setData = (newData: Partial<RegistrationData>) => {
    setDataState((prev) => ({ ...prev, ...newData }));
  };

  const resetData = () => setDataState({});

  return (
    <RegistrationContext.Provider value={{ data, setData, resetData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context)
    throw new Error("useRegistration must be used within RegistrationProvider");
  return context;
};
