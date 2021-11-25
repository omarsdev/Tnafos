import React, { useState, createContext, useEffect } from "react";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const [alert, setAlert] = useState(null);

  return (
    <AlertContext.Provider value={{ alertProviderValue: [alert, setAlert] }}>
      {props.childern}
    </AlertContext.Provider>
  );
};
