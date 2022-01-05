import React from "react";
import { HStack, Heading, Box, IconButton, Button } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { AddInvoice, Incoming, Outgoing, InvoiceCard } from "./";
import { AiOutlinePlus } from "react-icons/ai";

export const InvoiceHome = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`}>
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
        {/* <CustomTable /> */}
      </Route>
      <Route path={`${match.path}/addinvoice`} component={AddInvoice} />
      <Route path={`${match.path}/incoming`} component={Incoming} />
      <Route path={`${match.path}/outgoing`} component={Outgoing} />
      <Route path={`${match.path}/invoicecard`} component={InvoiceCard} />
    </Switch>
  );
};
