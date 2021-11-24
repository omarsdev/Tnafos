import React, { useContext } from "react";
import { Box, Text, IconButton, VStack } from "@chakra-ui/react";
import { AlertContext } from "context";
import { GrClose } from "react-icons/gr";

const Alert = () => {
  const [alert, setAlert] = useContext(AlertContext);
  return (
    <Box bg={alert.bgColor}>
      <VStack>
        <IconButton
          aria-label="close alert"
          icon={<GrClose />}
          colorScheme="teal"
        />
        <Text>{alert.message}</Text>
      </VStack>
    </Box>
  );
};

export default Alert;
