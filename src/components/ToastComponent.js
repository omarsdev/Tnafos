import React from "react";
import { useToast, Wrap, WrapItem, Button } from "@chakra-ui/react";

export const ToastComponent = (data) => {
  const toast = useToast();

  const statuses = ["success", "error", "info"];

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
