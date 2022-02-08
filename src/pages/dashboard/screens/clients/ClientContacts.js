import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  Center,
  Spinner,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
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
      history.push("/dashboard/client");
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
        bg="brand.white"
        shadow="2xl"
        w={{ base: 260, sm: 350, md: 450, lg: 550 }}
        h={{ base: 400, sm: 470, md: 550, lg: 620 }}
      >
        <Heading
          fontSize={{ base: "md", md: "xl", lg: "xx-large" }}
          ml="5%"
          mt="5%"
          textColor="brand.primary"
          fontWeight="semibold"
        >
          Client's Contacts:
        </Heading>
        <Box
          w="full"
          mt="15px"
          fontSize={{
            base: "xx-small",
            sm: "small",
            md: "md",
            lg: "large",
          }}
          bg="brand.dark"
          opacity="90%"
          textColor="white"
          px="10%"
          py="5%"
        >
          {card.map((el, idx) => (
            <Box key={idx} mb="30px">
              <Text py="1">
                Name: {el?.first_name}
                {el?.last_name}
              </Text>
              <Text py="1">Position: {el?.position}</Text>
              <Text py="1">Phone Number: {el?.phone_number}</Text>
              <Text py="1">E-mail :{el?.email}</Text>
              <Text py="1">Id :{el?.uuid}</Text>
            </Box>
          ))}
        </Box>

        <Flex w="full" justify="center" mt="10px">
          <Button
            justify={"center"}
            size={{
              base: "x-small",
              sm: "x-small",
              md: "md",
              lg: "large",
            }}
            rounded="full"
            h={{ base: 6, sm: 8, md: 10, lg: 12 }}
            w={{ base: 6, sm: 8, md: 10, lg: 12 }}
            bg={"#F8B916"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "orange.400",
            }}
            onClick={() => {
              history.push("/dashboard/client");
            }}
          >
            <AiOutlineHome
              fontSize={{
                base: "xx-small",
                sm: "small",
                md: "md",
                lg: "large",
              }}
            />
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default ClientContacts;
