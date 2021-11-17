import { Box, Heading, VStack, Stack } from "@chakra-ui/react";
import React from "react";

export const ServiceCard = ({ info }) => {
  return (
    <Box boxShadow={"2xl"} rounded={"md"}>
      <Box color="#F8B916">Service</Box>
      <VStack>
        <Heading>{info?.name}</Heading>
        <Stack>
          <Box>Price</Box>
          <Box>{info?.price}</Box>
        </Stack>
        <Box>{info?.description}</Box>
      </VStack>
    </Box>
  );
};
