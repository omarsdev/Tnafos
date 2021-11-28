import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

import { SecondaryButton } from "components";

export const ServiceCard = ({ info }) => {
  const match = useRouteMatch();
  return (
    <Box
      className="rounded-3xl shadow-2xl relative bg-white"
      w="300px"
      h="300px"
    >
      <VStack spacing="20px">
        <Text
          w="full"
          bg="gray.50"
          roundedTop="lg"
          textColor="gray.700"
          textAlign="start"
          fontSize="x-large"
          pl="5%"
        >
          Service
        </Text>
        <Box mr="0">
          <Text fontSize="x-large">{info?.name}</Text>
          <Text className="text-blue-400 text-meduim" textAlign="start" pl="2">
            Price
          </Text>
          <Text fontSize="x-large">{info?.price} SAR</Text>
          <Text fontSize="x-large">{info?.type} SAR</Text>
        </Box>
        <Box position="absolute" bottom="5">
          <Link to={`${match.url}/${info.uuid}`}>
            <SecondaryButton name="View" />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};
