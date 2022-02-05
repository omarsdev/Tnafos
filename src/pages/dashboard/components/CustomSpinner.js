import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

import { useSize } from "../../../context";

const CustomSpinner = () => {
  const { size } = useSize();

  return (
    <Center h="100vh" w="100%">
      <Spinner size={size} color="#F8B916" />
    </Center>
  );
};

export default CustomSpinner;
