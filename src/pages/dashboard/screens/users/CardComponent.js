import React from "react";
import { Box, Image, VStack, Text } from "@chakra-ui/react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";

import { SecondaryButton } from "../../../../components";

const CardComponent = ({ userData }) => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Box rounded="3xl" shadow="2xl" bg="white" position="relative">
      <VStack spacing="20px" mx="5%">
        <Image
          src={"https://bit.ly/sage-adebayo"}
          alt="Segun Adebayo"
          objectFit="cover"
          rounded="3xl"
          w="100%"
          h="200px"
          marginTop={"20px"}
        />
        <Box
          mr="0"
          fontSize={{ base: "sm", md: "md", lg: "large" }}
          justify="center"
        >
          <Text>
            Name: {userData.first_name} {userData.last_name}
          </Text>
          <Text>Email : {userData.email}</Text>
          <Text>Phone Number: {userData.phone_number}</Text>
        </Box>
        <Box position="relative" bottom="5">
          <Link to={`${match.url}/${userData.uuid}`}>
            <SecondaryButton
              name="View"
              my="1"
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

export default CardComponent;
