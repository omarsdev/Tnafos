import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  useParams,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { CreateUser, MyProfile, UserCard, CardComponent } from "./";
import {
  Box,
  IconButton,
  Button,
  Heading,
  Grid,
  HStack,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { AxiosInstance } from "api/AxiosInstance";

export const UserHome = () => {
  const [usersList, setUsersList] = useState(null);

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
          <Box w="full" padding="10">
            <HStack justifyContent="space-between" paddingBottom="5">
              <Heading
                textColor="gray.600"
                fontSize="xx-large"
                fontWeight="lg"
                alignItems="baseline"
              >
                Users
              </Heading>
              <Link to={`${match.url}/createuser`}>
                <IconButton
                  as={Button}
                  colorScheme="yellow"
                  size="lg"
                  icon={<AiOutlinePlus />}
                  rounded="full"
                />
              </Link>
            </HStack>

            {!usersList ? (
              <Center h="70vh" w="100%">
                <Spinner size="xl" color="#F8B916" />
              </Center>
            ) : (
              <Grid templateColumns="repeat(3, 1fr)" gap={20} mb="20px">
                {usersList.map((el, idx) => (
                  <CardComponent userData={el} key={idx} />
                ))}
              </Grid>
            )}
          </Box>
        </Route>
        <Route path={`${match.path}/createuser`} component={CreateUser} />
        <Route path={`${match.path}/profile`} component={MyProfile} />
        <Route path={`${match.path}/:uuid`} component={UserCard} />
      </Switch>
    </>
  );
};

// <Link to={`${match.url}/${el.uuid}`}>
