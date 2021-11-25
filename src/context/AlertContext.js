import React, { useEffect, useState, createContext } from "react";
import { useToast } from "@chakra-ui/react";

export const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const [alert, setAlert] = useState({});
  const statuses = ["success", "error", "info"];

  const ToastComponent = ({ data }) => {
    const toast = useToast();
    return (
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  isClosable: true,
                  duration: 4000,
                  position: "bottom",
                  description: data,
                })
              }
            />
          </WrapItem>
        ))}
      </Wrap>
    );
  };

  const showAlert = () => {
    switch (statuses) {
      case "success":
        setAlert(...ToastComponent, { description: "Successfully created!" });
        break;
      case "error":
        setAlert(...ToastComponent, { description: "Successfully deleted!" });
        break;
      case "info":
        setAlert(...ToastComponent, { description: "Updated successfully!" });
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    showAlert();
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alertValue: [alert, setAlert] }}>
      {props.childern}
    </AlertContext.Provider>
  );
};
