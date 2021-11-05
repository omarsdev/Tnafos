import { Box, Heading, VStack, Stack} from "@chakra-ui/react";
import React from "react";

export const ServiceCard = ({ info }) => {
//   console.log(info)
  return (
    <Box
      boxShadow={"xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Box>Service</Box>
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