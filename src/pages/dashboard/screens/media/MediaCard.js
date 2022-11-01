import React from "react";
import { Box, Text, VStack, Image, Center } from "@chakra-ui/react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

import { SecondaryButton } from "../../../../components";

const MediaCard = ({ info }) => {
  const match = useRouteMatch();
  return (
    <Center py="5">
      <Box
        rounded="3xl"
        shadow="2xl"
        position="relative"
        bg="brand.white"
        w="300px"
        h="250px"
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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            w="full"
          >
            <Text>{info?.file_name}</Text>
            <Text color="#007BFF">UUID : {info?.uuid} SAR</Text>
            <Text>{info?.url}</Text>
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

export default MediaCard;