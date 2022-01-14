import React, { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Text,
  Image,
  Center,
  Spinner,
  VStack,
  Stack,
} from "@chakra-ui/react";
import {
  useHistory,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import { AxiosInstance } from "../../../../api";

export const ClientContacts = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const { uuid } = useParams();

  const [card, setCard] = useState([]);

  const getClientContacts = async () => {
    await AxiosInstance.get(`/api/dashboard/customer/${uuid}/contacts`)
      .then((res) => {
        console.log(res?.data?.data);
        setCard(res?.data?.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        history.push("/dashboard/clientshome");
      });
  };

  useEffect(() => {
    getClientContacts();
  }, []);

  return !card ? (
    <Center h="70vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <Center py="5">
      <Box
        className="rounded-3xl relative bg-white shadow-2xl"
        w="400px"
        h="450px"
      >
        <VStack spacing="20px" mx="5%" mt="5">
          {card.map((el, idx) => (
            <Stack key={idx}>
              <Text py="1" textColor="gray.600">
                Name: {el?.first_name}
                {el?.last_name}
              </Text>
              <Text textColor="gray.600">Position: {el?.position}</Text>
              <Text textColor="gray.600">Phone Number: {el?.phone_number}</Text>
              <Text textColor="gray.600">E-mail :{el?.email}</Text>
              <Text textColor="gray.600">Id :{el?.uuid}</Text>
            </Stack>
          ))}

          <Box>
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
                history.push("/dashboard/clientshome");
              }}
            />
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default ClientContacts;
