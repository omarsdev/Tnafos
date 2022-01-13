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
  useHistory,
} from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import ServiceCard from "./ServiceCard";

import { AxiosInstance } from "../../../../api";
import AddService from "./AddService";

const ServiceHome = () => {
  const [servicesList, setServicesList] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();
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

            <IconButton
              as={Button}
              colorScheme="yellow"
              size="lg"
              icon={<AiOutlinePlus />}
              rounded="full"
              onClick={() => {
                history.push(`${match.url}/addservice`);
              }}
            />
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
    </Switch>
  );
};

export default ServiceHome;
