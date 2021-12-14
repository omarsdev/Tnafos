import React from "react";
import { Box, Text, VStack, Image, Center } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

import { SecondaryButton } from "components";

export const ServiceCard = ({ info }) => {
  const match = useRouteMatch();
  return (
    <Center py="5">
      <Box
        className="rounded-3xl shadow-2xl relative bg-white"
        w="300px"
        h="380px"
      >
        <Text
          w="full"
          bg="gray.200"
          roundedTop="lg"
          textColor="gray.700"
          textAlign="start"
          fontSize="x-large"
          pl="5%"
        >
          {info?.name}
        </Text>
        <VStack spacing="20px" mx="5%">
          <Image
            src={"https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            rounded="3xl"
            w="100%"
            h="160px"
            marginTop={"8px"}
          />
          <Box>
            <Text color="#007BFF" textAlign="start" pl="2">
              Price
            </Text>
            <Text>{info?.price} SAR</Text>
            <Text>{info?.type}</Text>
          </Box>
          <Box position="absolute" bottom="5">
            <Link to={`${match.url}/${info.uuid}`}>
              <SecondaryButton name="View" />
            </Link>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};
