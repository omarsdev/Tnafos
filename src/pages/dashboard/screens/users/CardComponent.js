import {
  Box,
  Image,
  VStack,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import React from "react";

export const CardComponent = ({ userData }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderWidth="1px"
      rounded="xlg"
      shadow="lg"
      textAlign={"center"}
      rounded={"md"}
      w="48"
      h="44"
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
        Company Profile
      </Text>
      <Divider />
      <Box w="full">
        <VStack spacing={0}>
          <Box paddingX="4" paddingY="2">
            <Image
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="user-img"
              rounded={"lg"}
              // boxSize="100px"
              objectFit="cover"
              w="36"
              h="20"
            />
          </Box>
          <Text fontSize="sm" color="gray.700">
            {userData.first_name} {userData.last_name}
          </Text>
          <Text color="blue.400" fontSize="sm">
            {userData.email}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};
