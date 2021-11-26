import React, { useState, createContext, useEffect } from "react";
import { ToastComponent } from "components";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const [alert, setAlert] = useState(null);

  const statuses = ["success", "error", "info"];

  const showAlert = () => {
    switch (statuses) {
      case "success":
        setAlert(<ToastComponent />, { description: "Successfully created!" });
        break;
      case "error":
        setAlert(<ToastComponent />, { description: "Successfully deleted!" });
        break;
      case "info":
        setAlert(<ToastComponent />, { description: "Updated successfully!" });
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!alert) return;
    showAlert();
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alertProviderValue: showAlert() }}>
      {props.childern}
    </AlertContext.Provider>
  );
};
