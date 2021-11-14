import React from "react";
import { Box, Heading, Button, IconButton, HStack } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { Table } from "./";
import { AddPayment } from "./";

export const PaymentHome = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`} />
      <Box w="full" h="fit-content">
        <HStack w="full" spacing={"900px"}>
          <Heading
            color="black"
            fontWeight="medium"
            fontSize="xx-large"
            fontFamily="inhirit"
            alignItems="baseline"
            py="4"
            px="5"
            textColor="gray.600"
            justifyItems="start"
          >
            Payments
          </Heading>
          <Box>
            <Link to={`${match.url}/addpayment`}>
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
        <Table />
      </Box>
      <Route path={`${match.path}/create`} component={AddPayment} />
    </Switch>
  );
};
