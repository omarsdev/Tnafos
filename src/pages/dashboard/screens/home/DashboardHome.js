import React from "react";
import {
  HStack,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
} from "@chakra-ui/react";

import { FiInbox } from "react-icons/fi";

const COLORS = ["blue", "green", "orange", "purple"];

const StatCard = ({ title, number, color }) => {
  return (
    <Box
      mt={4}
      w={"full"}
      h={20}
      rounded="xl"
      boxShadow="2xl"
      relative={"true"}
      bg={"white"}
      borderLeftColor={color}
      borderLeftWidth="4px"
    >
      <HStack w="full">
        <Stat px="5%" w="full">
          <StatLabel py="1">{title}</StatLabel>
          <StatNumber fontSize="xl">{number}</StatNumber>
        </Stat>
        <Box pr="7%" fontSize="4xl" fontWeight="light" pt="2%">
          <FiInbox color={"#7E7E7E"} />
        </Box>
      </HStack>
    </Box>
  );
};

const DashboardHome = () => {
  //* set border color:
  // const randomElement = colors[Math.floor(Math.random() * colors.length)];
  return (
    <SimpleGrid
      // autoColumns={true}
      // autoFlow
      // autoRows
      columns={{ sm: 2, md: 3, lg: 4 }}
      spacing={8}
      // templateColumns="repeat(4, 1fr)"
      // gap={8}
      px={8}
      // pt="20px"
      // flex={true}
      // flexDirection={"row"}
      // flexGrow={true}
      w={"full"}
    >
      <StatCard title={"Invoices"} number={27} color={COLORS[0]} />
      <StatCard title={"Proposal"} number={13} color={COLORS[1]} />
      <StatCard title={"Leads"} number={9} color={COLORS[2]} />
      <StatCard title={"Contacts"} number={400} color={COLORS[3]} />
    </SimpleGrid>
  );
};

export default DashboardHome;
