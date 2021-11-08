import { Box, Image, VStack, Text } from "@chakra-ui/react";
import React from "react";

export const CardComponent = ({ userData }) => {
  return (
    <VStack w="40" borderRadius="lg" overflow="hidden" borderWidth="1px" h="48">
      <Box>
        <Image
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="user-img"
        />
      </Box>
      <Box w="36" alignItems="baseline" fontWeight="normal" px="5px">
        <Text
          fontSize="lg"
          color="gray.700"
          textTransform="uppercase"
          fontWeight="normal"
        >
          {userData.first_name} {userData.last_name}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {userData.uuid}
        </Text>
      </Box>
    </VStack>
  );
};
