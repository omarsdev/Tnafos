import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Box, HStack, Heading, IconButton, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const PurchasesHome = () => {
  const match = useRouteMatch();

  return (
    <Box w="full" overflowY="scroll" padding="10">
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize="xx-large"
          fontWeight="lg"
          alignItems="baseline"
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
