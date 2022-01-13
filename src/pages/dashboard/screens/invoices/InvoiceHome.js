import React from "react";
import { HStack, Heading, Box, IconButton, Button } from "@chakra-ui/react";
import { useRouteMatch, Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const InvoiceHome = () => {
  const match = useRouteMatch();

  return (
    <HStack w="full" spacing={"900px"} py="5">
      <Heading
        textColor="gray.600"
        fontWeight="medium"
        fontSize="xx-large"
        fontFamily="inhirit"
        alignItems="baseline"
        ml="5"
      >
        Invoices
      </Heading>

      <Box>
        <Link to={`${match.url}/addinvoice`}>
          <IconButton
            as={Button}
            colorScheme="yellow"
            size="lg"
            icon={<AiOutlinePlus />}
            rounded="full"
          ></IconButton>
        </Link>
      </Box>
    </HStack>
  );
};

export default InvoiceHome;
