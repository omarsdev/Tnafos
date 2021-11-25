import React, { useState, createContext } from "react";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const [alert, setAlert] = useState(null);

  return (
    <AlertContext.Provider value={{ alertProvider: [alert, setAlert] }}>
      {props.childern}
    </AlertContext.Provider>
  );
};
