import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Box, HStack, Heading, IconButton, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const PurchasesHome = () => {
  const match = useRouteMatch();

  return (
    <Box w="full" overflowY="scroll" padding={{ base: 4, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{ base: "large", md: "x-large", lg: "xx-large" }}
          fontWeight="lg"
          alignItems="baseline"
          mb={{ base: 2, lg: 4 }}
        >
          Purchases - Requests
        </Heading>
        <Link to={`${match.url}/addpayment`}>
          <IconButton
            as={Button}
            colorScheme="yellow"
            size="lg"
            icon={<AiOutlinePlus />}
            rounded="full"
          ></IconButton>
        </Link>
      </HStack>
    </Box>
  );
};

export default PurchasesHome;
