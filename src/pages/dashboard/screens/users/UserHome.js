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
  GridItem,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { AxiosInstance } from "../../../../utils";

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
          <Box w="full" h="fit-content">
            <Grid h="16" templateColumns="repeat(5, 1fr)" gap="5" p="5">
              <GridItem colSpan={4}>
                <Heading
                  color="black"
                  fontWeight="medium"
                  fontSize="xx-large"
                  fontFamily="inhirit"
                  alignItems="baseline"
                  py="4"
                  px="5"
                  textColor="gray.600"
                >
                  Users
                </Heading>
              </GridItem>

              <GridItem colSpan={1} pl="50px">
                <Link to={`${match.url}/createuser`}>
                  <IconButton
                    as={Button}
                    colorScheme="yellow"
                    size="lg"
                    icon={<AiOutlinePlus />}
                    rounded="full"
                  ></IconButton>
                </Link>
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} p="30px">
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
          </Box>
        </Route>
        <Route path={`${match.path}/createuser`} component={CreateUser} />
        <Route path={`${match.path}/profile`} component={MyProfile} />
        <Route path={`${match.path}/:uuid`} component={UserCard} />
      </Switch>
    </>
  );
};
