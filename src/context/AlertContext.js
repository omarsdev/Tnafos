import React, { useEffect, useState, createContext } from "react";
import { Box, Text } from "@chakra-ui/react";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const [alert, setAlert] = useState({});

  const showAlert = (type) => {
    switch (type) {
      case "add":
        setAlert({
          message: "Successfully created! ",
          bgColor: "#6EE7B7",
        });
        break;
      case "update":
        setAlert({
          message: "Updated successfully!",
          bgColor: "#93C5FD",
        });
        break;
      case "remove":
        setAlert({
          message: "Successfully deleted!",
          bgColor: "#F87171",
        });
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    showAlert();
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {props.childern}
    </AlertContext.Provider>
  );
};
