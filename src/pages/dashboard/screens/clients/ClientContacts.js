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
  const { uuid } = useParams();
  const [card, setCard] = useState([]);

  const getClientContacts = async () => {
    try {
      const res = await AxiosInstance.get(
        `/api/dashboard/customer/${uuid}/contacts`
      );

      console.log(res?.data?.data);
      setCard(res?.data?.data);
    } catch (err) {
      console.log(err.response.data);
      history.push("/dashboard/clientshome");
    }
  };

  useEffect(() => {
    getClientContacts();
  }, []);

  return !card ? (
    <Center h="70vh" w="100%">
      <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
    </Center>
  ) : (
    <Center py={{ base: 2, sm: 2, md: 4, lg: 4 }}>
      <Box
        rounded="3xl"
        position="relative"
        bg="white"
        shadow="2xl"
        w={{ base: 260, sm: 350, md: 450, lg: 550 }}
        h={{ base: 260, sm: 360, md: 460, lg: 500 }}
      >
        <VStack spacing="20px" mx="5%" mt={{ base: 2, sm: 2, md: 4, lg: 4 }}>
          {card.map((el, idx) => (
            <Stack
              key={idx}
              fontSize={{
                base: "xx-small",
                sm: "small",
                md: "md",
                lg: "large",
              }}
            >
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
              position="relative"
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
                history.push("/dashboard/client");
              }}
            />
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default ClientContacts;
