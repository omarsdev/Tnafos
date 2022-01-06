import React from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export const NoData = ({ component }) => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <Box>
          <Text>There's no data to show </Text>

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
        </Box>
      </Route>
    </Switch>
  );
};
