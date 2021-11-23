import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  useParams,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { CreateUser, MyProfile, UserCard, CardComponent } from "./";
import { Box, Spacer, Heading, Flex, Grid } from "@chakra-ui/react";
import { AxiosInstance } from "api/AxiosInstance";
import { AddButton } from "components/button/AddButton";

export const UserHome = () => {
  const [usersList, setUsersList] = useState([]);

  const match = useRouteMatch();
  const { uuid } = useParams();

  const showUsersList = async () => {
    await AxiosInstance.get("/api/dashboard/user")
      .then((res) => {
        setUsersList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    showUsersList();
  }, []);
  return (
    <>
      <Switch>
        <Route exact path={`${match.path}`}>
          <Box w="full" overflowY="scroll">
            <Flex py="5" paddingX="10">
              <Heading
                textColor="gray.600"
                fontSize="xx-large"
                fontWeight="lg"
                alignItems="baseline"
              >
                Users
              </Heading>

              <Spacer />

              <Link to={`${match.url}/createuser`}>
                <AddButton />
              </Link>
            </Flex>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} p="30px">
              {usersList.length === 0
                ? null
                : usersList.map((el, idx) => (
                    <Box key={idx} flexDirection="row" spacing="10px">
                      <Link to={`${match.url}/${el.uuid}`}>
                        <CardComponent userData={el} />
                      </Link>
                    </Box>
                  ))}
            </Grid>
          </Box>
        </Route>
        <Route path={`${match.path}/createuser`} component={CreateUser} />
        <Route path={`${match.path}/profile`} component={MyProfile} />
        <Route path={`${match.path}/:uuid`} component={UserCard} />
      </Switch>
    </>
  );
};
