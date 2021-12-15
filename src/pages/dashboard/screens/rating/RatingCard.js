import React from "react";
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
  // const setBorder = () => {
  //   let titles = ["1", "2", "3", "4"];
  //   switch (titles) {
  //     case "1":
  //       "brand.primary" ;
  //     case "2":
  //       <Box borderLeftColor="brand.info" />;
  //     case "3":
  //       <Box borderLeftColor="brand.error" />;
  //     case "4":
  //       <Box borderLeftColor="brand.grey" />;
  //   }
  // };

  const colors = ["red", "blue", "yellow"];
  const randomElement = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomElement);
  return (
    <Box
      mt="5"
      w="250px"
      h="70px"
      rounded="xl"
      shadow="2xl"
      relative
      bg={"white"}
      borderLeftColor={randomElement}
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
