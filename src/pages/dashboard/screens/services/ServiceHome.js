import React, { useEffect, useState } from "react";
import {
  HStack,
  Button,
  IconButton,
  Box,
  Heading,
  Center,
  Spinner,
  Grid,
} from "@chakra-ui/react";
import {
  Link,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { ServiceCard, AddService, MyService } from "./";

import { AxiosInstance } from "../../../../api";

export const ServiceHome = () => {
  const [servicesList, setServicesList] = useState([]);
  const match = useRouteMatch();
  const { uuid } = useParams();

  //* represent all services:
  const showServicesList = async () => {
    await AxiosInstance.get("/api/dashboard/service")
      .then((res) => {
        setServicesList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showServicesList();
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <Box w="full" overflowY="scroll" padding="10">
          <HStack justifyContent="space-between" paddingBottom="5">
            <Heading
              textColor="gray.600"
              fontSize="xx-large"
              fontWeight="lg"
              alignItems="baseline"
            >
              Services
            </Heading>
            <Link to={`${match.url}/addservice`}>
              <IconButton
                as={Button}
                colorScheme="yellow"
                size="lg"
                icon={<AiOutlinePlus />}
                rounded="full"
              />
            </Link>
          </HStack>

          {!servicesList ? (
            <Center h="70vh" w="100%">
              <Spinner size="xl" color="#F8B916" />
            </Center>
          ) : (
            <Grid templateColumns="repeat(3, 1fr)" gap={20} mb="20px">
              {servicesList.map((service, idx) => (
                <ServiceCard info={service} key={idx} />
              ))}
            </Grid>
          )}
        </Box>
      </Route>
      <Route path={`${match.path}/addservice`} component={AddService} />
      <Route path={`${match.path}/:uuid`} component={MyService} />
    </Switch>
  );
};
