import React from "react";
import { HStack, Heading } from "@chakra-ui/react";

const EstimateHome = () => {
  return (
    <HStack w="full" spacing={"900px"} py="5">
      <Heading
        textColor="gray.600"
        fontWeight="medium"
        fontSize="xx-large"
        fontFamily="inhirit"
        alignItems="baseline"
        ml="5"
      >
        Estimates
      </Heading>
    </HStack>
  );
};

export default EstimateHome;
