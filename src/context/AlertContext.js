import React, { useState, createContext, useEffect } from "react";
import { useAlert } from "react-alert";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const alertFire = useAlert();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return;
    alertFire.show(alert?.message, alert?.types);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alertProviderValue: setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
