import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";
import { showUsersList } from "../../../../utils";
import { UserCard, CreateUser, MyProfile, CardComponent } from "./";
import {
  Box,
  IconButton,
  Button,
  HStack,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

export const User = () => {
  const [usersList, setUsersList] = useState([]);

  const match = useRouteMatch();
  const { uuid } = useParams();

  const USERS = async () => {
    const array = await showUsersList();
    setUsersList(array);
  };
  useEffect(() => {
    USERS();
  }, []);
  return (
    <>
      <Box w="full" h="fit-content">
        <HStack h="16" w="full" p="2" spacing="700px">
          <Heading
            color="black"
            fontWeight="medium"
            fontSize="x-large"
            fontFamily="inhirit"
            alignItems="baseline"
          >
            Users
          </Heading>

          <Link to={`${match.url}/createuser`}>
            <IconButton
              as={Button}
              colorScheme="yellow"
              size="lg"
              icon={<PlusSquareIcon />}
              rounded="full"
            ></IconButton>
          </Link>
        </HStack>

        <Grid templateColumns="repeat(5, 1fr)" gap={4} p="10px">
          {usersList.length === 0
            ? null
            : usersList.map((el, idx) => (
                <Box flexDirection="row" spacing="10px">
                  <Link key={idx} to={`${match.url}/${el.uuid}`}>
                    <CardComponent userData={el} />
                  </Link>
                </Box>
              ))}
        </Grid>

        <Switch>
          <Route exact path={`${match.path}`} />
          <Route path={`${match.path}/createuser`} component={CreateUser} />
          <Route path={`${match.path}/profile`} component={MyProfile} />
          <Route path={`${match.path}/:uuid`} component={UserCard} />
        </Switch>
      </Box>
    </>
  );
};
