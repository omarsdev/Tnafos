import React from "react";

import { Box, Grid, Text, VStack } from "@chakra-ui/react";

import { CardItem, CardCompany } from "../components";

export const Vender = () => {
  return (
    <>
      <Text fontSize="35px">List of vendors</Text>
      <Box mt="40px">
        <VStack spacing="50px">
          <CardCompany />
          <CardCompany />
        </VStack>
      </Box>
    </>
  );
};
