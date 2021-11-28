import React, { useState, createContext, useEffect } from "react";
import { useAlert } from "react-alert";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const alertFire = useAlert();
  const [alert, setAlert] = useState(null);

  const alertType = () => {
    let type = ["success", "info", "error"];
    switch (type) {
      case "success":
        alertFire.success(alert?.message);
        break;
      case "info":
        alertFire.info(alert?.message);
        break;
      case "error":
        alertFire.error(alert?.message);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (!alert) return;
    alertType();
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alertProviderValue: setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
