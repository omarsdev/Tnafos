import React, { useState, createContext, useEffect } from "react";
import { useAlert } from "react-alert";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const alertFire = useAlert();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return;
    console.log(alert);
    alertFire.show(alert?.message, alert?.type);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alertProviderValue: setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
