import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Box, HStack, Heading } from "@chakra-ui/react";

const PurchasesHome = () => {
  return (
    <Box w="full" overflowY="scroll" padding="10">
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize="xx-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          Purchases - Requests
        </Heading>
      </HStack>
    </Box>
  );
};

export default PurchasesHome;
