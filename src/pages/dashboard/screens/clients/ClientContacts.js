import React, { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Text,
  Image,
  Center,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import {
  useHistory,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { AxiosInstance } from "api";

export const ClientContacts = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const { uuid } = useParams();

  const [card, setCard] = useState(null);

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

  return (
    <Switch>
      <Route path={`${match.path}`}>
        {!card ? (
          <Center h="70vh" w="100%">
            <Spinner size="xl" color="#F8B916" />
          </Center>
        ) : (
          <Center py="5">
            <Box
              className="rounded-3xl relative bg-white shadow-2xl"
              w="350px"
              h="200px"
            >
              <VStack spacing="20px" mx="5%" mt="5">
                {card.map((el, idx) => {
                  <Box mr="0" key={idx}>
                    <Text py="1" textColor="gray.600">
                      Name: {el?.first_name}
                      {el?.last_name}
                    </Text>
                    <Text textColor="gray.600">Position: {el?.position}</Text>
                    <Text textColor="gray.600">
                      Phone Number: {el?.phone_number}
                    </Text>
                    <Text textColor="gray.600">E-mail :{el?.email}</Text>
                    <Text textColor="gray.600">Id :{el?.uuid}</Text>
                  </Box>;
                })}
              </VStack>
            </Box>
          </Center>
        )}
      </Route>
    </Switch>
  );
};
