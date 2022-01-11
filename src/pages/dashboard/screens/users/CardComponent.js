import React from "react";
import { Box, Image, VStack, Text } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

import { SecondaryButton } from "../../../../components";

const CardComponent = ({ userData }) => {
  const match = useRouteMatch();

  return (
    <Box
      className="rounded-3xl shadow-2xl relative bg-white"
      w="300px"
      h="350px"
    >
      <VStack spacing="20px" mx="5%">
        <Image
          src={"https://bit.ly/sage-adebayo"}
          alt="Segun Adebayo"
          objectFit="cover"
          rounded="3xl"
          w="100%"
          h="160px"
          marginTop={"20px"}
        />
        <Box mr="0">
          <Text>
            Name: {userData.first_name} {userData.last_name}
          </Text>
          <Text>Email : {userData.email}</Text>
          <Text>Phone Number: {userData.phone_number}</Text>
        </Box>
        <Box position="absolute" bottom="5">
          <Link to={`${match.url}/${userData.uuid}`}>
            <SecondaryButton name="View" />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default CardComponent;
