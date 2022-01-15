import React from "react";
import { Stat, StatLabel, StatNumber, Box, HStack } from "@chakra-ui/react";
import { FiInbox } from "react-icons/fi";

export const RatingCard = ({ ratDetails }) => {
  const colors = ["#F8B916", "#007BFF", "#AEAEAE", "#B00020"];

  //* set border color:
  const randomElement = colors[Math.floor(Math.random() * colors.length)];
  // console.log(randomElement);
  return (
    <Box
      mt="5"
      w="240px"
      h="70px"
      rounded="xl"
      boxShadow="2xl"
      relative={"true"}
      bg={"white"}
      borderLeftColor={randomElement}
      borderLeftWidth="4px"
    >
      <HStack w="full">
        <Stat px="5%" w="full">
          <StatLabel py="1">{ratDetails.comment}</StatLabel>
          <StatNumber fontSize="xl">{ratDetails.stars}</StatNumber>
        </Stat>
        <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
          <FiInbox color="#AEAEAE" />
        </Box>
      </HStack>
    </Box>
  );
};
