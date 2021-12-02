import React, { useState, createContext, useEffect } from "react";
import { useAlert } from "react-alert";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const alertFire = useAlert();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return;
    if (alert.type === "error") {
      alertFire.error(alert.message);
    } else if (alert.type === "success") {
      alertFire.success(alert.message);
    } else if (alert.type === "info") {
      alertFire.info(alert.message);
    }
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alertProviderValue: setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
