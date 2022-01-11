import React from "react";
import { Box, Text, VStack, Image, Center } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

import { SecondaryButton } from "../../../../components";

const ServiceCard = ({ info }) => {
  const match = useRouteMatch();
  return (
    <Center py="5">
      <Box
        className="rounded-3xl shadow-2xl relative bg-white"
        w="300px"
        h="340px"
      >
        <VStack spacing="20px" mx="5%">
          <Image
            src={"https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            rounded="3xl"
            w="100%"
            h="160px"
            marginTop={"10px"}
          />
          <Box className="flex flex-col justify-center">
            <Text>{info?.name}</Text>
            <Text color="#007BFF">Price : {info?.price} SAR</Text>

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

export default ServiceCard;
