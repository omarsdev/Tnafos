import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

export const AlertContext = createContext();

export const AlertProvider = (props) => {
  const [alert, setAlert] = useState([]);
  let notifications = [];

  const showAlert = () => {
    const notifications = [
      (ADD = {
        id: 1,
        properties: {
          type: "add",
          message: "Successfully created! ",
          bgColor: "#6EE7B7",
        },
      }),
      (UPDATE = {
        id: 2,
        properties: {
          type: "update",
          message: "Updated successfully!",
          bgColor: "#93C5FD",
        },
      }),
      (DELETE = {
        id: 3,
        properties: {
          type: "remove",
          message: "Successfully deleted!",
          bgColor: "#F87171",
        },
      }),
    ];
    setAlert([notifications]);
  };

  useEffect(() => {
    showAlert();
  }, []);
  return (
    <AlertContext.Provider value={{}}>{props.childern}</AlertContext.Provider>
  );
};

{
  /* <div className="alert-wrapper">
  {alert.map((note) => {
    return (
      <Box key={note.id}>
        <Text>{note.properties}</Text>
      </Box>
    );
  })}
</div>; */
}
