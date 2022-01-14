import React, { useState, useEffect, useContext } from "react";
import {
  HStack,
  VStack,
  Center,
  Spinner,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from "@chakra-ui/react";

import { FiInbox } from "react-icons/fi";

const DashboardHome = () => {
  const colors = ["#F8B916", "#007BFF", "#AEAEAE", "#B00020"];

  //* set border color:
  const randomElement = colors[Math.floor(Math.random() * colors.length)];
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} pt="20px">
        <Box
          mt="5"
          w="240px"
          h="70px"
          rounded="xl"
          boxShadow="2xl"
          relative
          bg={"white"}
          borderLeftColor={randomElement}
          borderLeftWidth="4px"
        >
          <HStack w="full">
            <Stat px="5%" w="full">
              <StatLabel py="1">Title</StatLabel>
              <StatNumber fontSize="xl">number</StatNumber>
            </Stat>
            <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
              <FiInbox color="#AEAEAE" />
            </Box>
          </HStack>
        </Box>

        <Box
          mt="5"
          w="240px"
          h="70px"
          rounded="xl"
          boxShadow="2xl"
          relative
          bg={"white"}
          borderLeftColor={randomElement}
          borderLeftWidth="4px"
        >
          <HStack w="full">
            <Stat px="5%" w="full">
              <StatLabel py="1">Title</StatLabel>
              <StatNumber fontSize="xl">number</StatNumber>
            </Stat>
            <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
              <FiInbox color="#AEAEAE" />
            </Box>
          </HStack>
        </Box>

        <Box
          mt="5"
          w="240px"
          h="70px"
          rounded="xl"
          boxShadow="2xl"
          relative
          bg={"white"}
          borderLeftColor={randomElement}
          borderLeftWidth="4px"
        >
          <HStack w="full">
            <Stat px="5%" w="full">
              <StatLabel py="1">Title</StatLabel>
              <StatNumber fontSize="xl">number</StatNumber>
            </Stat>
            <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
              <FiInbox color="#AEAEAE" />
            </Box>
          </HStack>
        </Box>

        <Box
          mt="5"
          w="240px"
          h="70px"
          rounded="xl"
          boxShadow="2xl"
          relative
          bg={"white"}
          borderLeftColor={randomElement}
          borderLeftWidth="4px"
        >
          <HStack w="full">
            <Stat px="5%" w="full">
              <StatLabel py="1">Title</StatLabel>
              <StatNumber fontSize="xl">number</StatNumber>
            </Stat>
            <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
              <FiInbox color="#AEAEAE" />
            </Box>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
