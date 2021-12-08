import React, { useEffect, useState } from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  HStack,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { FiInbox } from "react-icons/fi";

export const RatingCard = () => {
  return (
    <Box
      mt="5"
      w="250px"
      h="70px"
      rounded="xl"
      shadow="2xl"
      relative
      bg={"white"}
      borderLeftColor="brand.primary"
      borderLeftWidth="4px"
    >
      <HStack w="full">
        <Stat px="5%">
          <StatLabel>title</StatLabel>
          <StatNumber>number</StatNumber>
        </Stat>
        <Box pr="7%" fontSize="5xl" fontWeight="light" pt="2%">
          <FiInbox color="#AEAEAE" />
        </Box>
      </HStack>
    </Box>
  );
};
