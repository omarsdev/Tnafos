import React from "react";
import { Box, Text, IconButton, HStack, Heading } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export const NoData = ({ component }) => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <Box w="full" overflowY="scroll" padding="10">
          <HStack justifyContent="space-between" paddingBottom="5">
            <Text
              textColor="gray.600"
              fontSize="large"
              fontWeight="lg"
              alignItems="baseline"
              justifySelf="center"
            >
              Ther's no data to show!
            </Text>

            <IconButton
              justify={"center"}
              fontSize={"lg"}
              rounded={"full"}
              bg={"#F8B916"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "orange.400",
              }}
              icon={<AiOutlineHome />}
              onClick={() => {
                history.push(`/dashboard/${component}`);
              }}
            />
          </HStack>
        </Box>
      </Route>
    </Switch>
  );
};
