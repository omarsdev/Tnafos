import React from "react";
import { Box, Text, VStack, Image, HStack } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

import { BsCurrencyDollar } from "react-icons/bs";

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
          textAlign="center"
          mr="0"
          fontSize={{ base: "x-small", sm: "sm", md: "md", lg: "large" }}
        >
          <Text fontWeight="extrabold">{info?.name}</Text>

          <Text>{info?.type}</Text>
          <HStack
            fontSize={{ base: "x-small", md: "sm" }}
            justifyContent="center"
            my="2px"
          >
            <BsCurrencyDollar color="#007BFF" />
            <Text color="#007BFF"> {info?.price} SAR</Text>
          </HStack>
        </Box>
        <Box position="relative" py="5px">
          <Link to={`${match.url}/${info.uuid}`}>
            <SecondaryButton
              name="View"
              fontSize={{
                base: "x-small",
                sm: "small",
                md: "md",
                lg: "large",
              }}
              width={{ base: 20, sm: 24, md: 28, lg: 28 }}
              height={{ base: 6, md: 8, lg: 10 }}
            />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default ServiceCard;
