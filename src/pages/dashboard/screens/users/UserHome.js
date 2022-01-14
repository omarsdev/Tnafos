import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory, Route, Switch } from "react-router-dom";
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

import CardComponent from "./CardComponent";
import CreateUser from "./CreateUser";

import { AxiosInstance } from "../../../../api";
import UserCard from "./UserCard";

const UserHome = () => {
  const [usersList, setUsersList] = useState(null);

  const match = useRouteMatch();
  const history = useHistory();

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
    <Box w="full" overflowY="scroll" padding="10">
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize="xx-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          Users
        </Heading>

        <IconButton
          as={Button}
          colorScheme="yellow"
          size="lg"
          icon={<AiOutlinePlus />}
          rounded="full"
          onClick={() => {
            history.push(`${match.url}/createuser`);
          }}
        />
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
  );
};

export default UserHome;
