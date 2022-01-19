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
    <Box w="full" overflowY="scroll" padding={{ base: 4, md: 2, lg: 2 }}>
      <HStack justifyContent="space-between" paddingBottom="5">
        <Heading
          textColor="gray.600"
          fontSize={{ base: "large", md: "x-large", lg: "xx-large" }}
          fontWeight="lg"
          alignItems="baseline"
        >
          Users
        </Heading>

        <IconButton
          as={Button}
          colorScheme="yellow"
          size="md"
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
            base: "repeat(1,2fr)",
            md: "repeat(2,2fr)",
            lg: "repeat(3, 2fr)",
          }}
          gap={{ base: 8, md: 13, lg: 18 }}
          mb={{ base: 1, md: 3, lg: 5 }}
          ml={{ base: 3, md: "none", lg: "none" }}
        >
          {usersList.map((el, idx) => (
            <CardComponent
              userData={el}
              key={idx}
              h={{ base: 75, md: 80, lg: 87.5 }}
              w={{ base: 60, md: 68, lg: 75 }}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UserHome;
