import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
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

import { AxiosInstance } from "../../../../api";

const UserHome = () => {
  const [usersList, setUsersList] = useState(null);

  const match = useRouteMatch();
  const history = useHistory();

  const showUsersList = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/user");
      setUsersList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showUsersList();
  }, []);
  return (
    <Box w="full" overflowY="scroll" padding={{ base: 4, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{
            base: "large",
            sm: "large",
            md: "x-large",
            lg: "xx-large",
          }}
          fontWeight="lg"
          alignItems="baseline"
          mb={{ base: 2, md: 4 }}
        >
          Users
        </Heading>

        <IconButton
          as={Button}
          colorScheme="yellow"
          size={{ base: "x-small", sm: "x-small", md: "md", lg: "large" }}
          icon={<AiOutlinePlus />}
          rounded="full"
          onClick={() => {
            history.push(`${match.url}/createuser`);
          }}
        />
      </HStack>

      {!usersList ? (
        <Center h="70vh" w="100%">
          <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
        </Center>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 2, md: 2, lg: 4 }}
          mb={{ base: 1, md: 3, lg: 5 }}
          ml={{ base: 3, md: "none", lg: "none" }}
        >
          {usersList.map((el, idx) => (
            <CardComponent
              userData={el}
              key={idx}
              h={{ base: 75, sm: 80, md: 80, lg: 87.5 }}
              w={{ base: 60, sm: 72, lg: 75 }}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UserHome;
