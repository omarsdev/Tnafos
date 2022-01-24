import React from "react";

import { useHistory } from "react-router-dom";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { TnafosLogoTitle } from "../../assets/icons";

export const AuthLayout = ({ BGImage, children }) => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };
  return (
    <Flex w="100%" h="100vh" flexDirection="row">
      <Box w="100%" h="100%">
        <Image w="full" h="full" src={BGImage} objectFit="cover" />
        <Box
          h="full"
          position="absolute"
          w="50%"
          top="0"
          left="0"
          bg="brand.black"
          opacity="0.7"
        >
          <Flex flexDirection="column" w="full" h="full">
            <Flex w="full" h="full" justifyContent="center" alignItems="center">
              <Box cursor="pointer" onClick={handleLogoClick}>
                <TnafosLogoTitle />
              </Box>
            </Flex>
            <Box alignItems="flex-end" textAlign="center" pb="2.5rem">
              <Text fontSize="2.25rem" lineHeight="2.5rem" color="brand.white">
                B2B Search Engine
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box w="full" h="full">
        {children}
      </Box>
    </Flex>
  );
};
