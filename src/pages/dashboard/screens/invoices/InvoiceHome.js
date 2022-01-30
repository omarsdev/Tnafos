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
          <Button
            as={Button}
            colorScheme="yellow"
            size={{
              base: "x-small",
              sm: "x-small",
              md: "md",
              lg: "large",
            }}
            rounded="full"
            h={{ base: 6, sm: 8, md: 10, lg: 12 }}
            w={{ base: 6, sm: 8, md: 10, lg: 12 }}
          >
            <AiOutlinePlus
              fontSize={{
                base: "xx-small",
                sm: "small",
                md: "md",
                lg: "large",
              }}
            />
          </Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default InvoiceHome;
