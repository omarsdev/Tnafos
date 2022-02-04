import React from "react";
import { Box, Text, VStack, Image, Center } from "@chakra-ui/react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

import { SecondaryButton } from "../../../../components";

const ServiceCard = ({ info }) => {
  const match = useRouteMatch();
  return (
    <Box rounded="3xl" shadow="2xl" bg="white" position="relative">
      <VStack gap={{ base: 0.5, sm: 0.5, md: 1, lg: 2 }} mx="5%">
        <Image
          src={"https://bit.ly/sage-adebayo"}
          alt="Segun Adebayo"
          objectFit="cover"
          rounded="3xl"
          w="100%"
          h="160px"
          marginTop={"20px"}
        />
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          mr="0"
          fontSize={{ base: "x-small", sm: "sm", md: "md", lg: "large" }}
        >
          <Text>{info?.name}</Text>
          <Text color="#007BFF">Price : {info?.price} SAR</Text>

          <Text>{info?.type}</Text>
        </Box>
        <Box position="relative" pb="8px">
          <Link to={`${match.url}/${info.uuid}`}>
            <SecondaryButton
              name="View"
              fontSize={{
                base: "xx-small",
                sm: "x-small",
                md: "sm",
                lg: "md",
              }}
              width={{ base: 20, sm: 24, md: 32, lg: 32 }}
              height={{ base: 6, md: 8, lg: 10 }}
            />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default ServiceCard;
