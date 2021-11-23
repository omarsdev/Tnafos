import { Box, useColorModeValue, Divider, Text } from "@chakra-ui/react";
import React from "react";

export const ServiceCard = ({ info }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderWidth="1px"
      rounded="xlg"
      shadow="lg"
      textAlign={"center"}
      rounded={"md"}
      w="48"
      h="40"
    >
      <Text
        fontSize="sm"
        bg="gray.50"
        roundedTop="lg"
        textColor="gray.700"
        paddingY="1"
        textAlign="start"
        pl="5"
      >
        Service
      </Text>
      <Divider />

      <Text fontSize="2xl" color="gray.700" textAlign="start" pl="2">
        {info?.name}
      </Text>
      <stack p="1">
        <Text className="text-blue-400 text-xs" textAlign="start" pl="2">
          Price
        </Text>
        <Text color={"gray.400"} fontSize="meduim" textAlign="start" pl="2">
          {info?.price} SAR
        </Text>

        <Text color={"gray.700"} pl="2" textAlign="start">
          {info?.description}
        </Text>
      </stack>
    </Box>
  );
};
