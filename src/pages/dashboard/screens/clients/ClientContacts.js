import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  IconButton,
  Box,
  Text,
  Image,
  Center,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { AxiosInstance } from "api";

export const ClientContacts = () => {
  const history = useHistory();

  const { uuid } = useParams();

  const [card, setCard] = useState(null);

  const [photo, setPhoto] = useState(null);
  // let inputRef = useRef(null);

  const getClientContacts = async () => {
    await AxiosInstance.get(`/api/dashboard/customer/${uuid}/contacts`)
      .then((res) => {
        console.log(res.data.data);
        setCard(res.data.data);
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
        w="350px"
        h="430px"
      >
        <Image
          src={"https://bit.ly/sage-adebayo"}
          alt="Segun Adebayo"
          objectFit="cover"
          roundedTop="3xl"
          w="100%"
          h="220px"
          layout={"fill"}
        />
        <VStack spacing="20px" mx="5%" mt="5">
          <Box mr="0">
            <Text py="1" textColor="gray.600">
              Name: {card?.first_name}
              {card?.last_name}
            </Text>
            <Text textColor="gray.600">Position: {card?.position}</Text>
            <Text textColor="gray.600">Phone Number: {card?.phone_number}</Text>
            <Text textColor="gray.600">E-mail :{card?.email}</Text>
            <Text textColor="gray.600">Id :{card?.uuid}</Text>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};
