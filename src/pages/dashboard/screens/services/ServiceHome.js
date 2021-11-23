import React, { useEffect, useState } from "react";
import { Flex, Box, Heading, Spacer, Grid } from "@chakra-ui/react";
import {
  Link,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";
import { ServiceCard, AddService, MyService } from "./";
import { AddButton } from "components/button/AddButton";
import { flex } from "tailwindcss/defaultTheme";

export const ServiceHome = () => {
  const [servicesList, setServicesList] = useState([]);
  const match = useRouteMatch();
  const { uuid } = useParams();

  //* represent all services:
  const showServicesList = async () => {
    await AxiosInstance.get("/api/dashboard/service")
      .then((res) => {
        console.log(res);
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
        <Box w="full" overflowY="scroll">
          <Flex py="5" paddingX="10">
            <Heading
              textColor="gray.600"
              fontSize="xx-large"
              fontWeight="lg"
              alignItems="baseline"
            >
              Services
            </Heading>
            <Spacer />

            <Link to={`${match.url}/addservice`}>
              <AddButton />
            </Link>
          </Flex>

          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={5}
            py="5"
            mt="10"
            paddingX="10"
          >
            {servicesList.length === 0
              ? null
              : servicesList.map((service, idx) => (
                  <Link key={idx} to={`${match.url}/${service.uuid}`}>
                    <ServiceCard info={service} />
                  </Link>
                ))}
          </Grid>
        </Box>
      </Route>
      <Route path={`${match.path}/addservice`} component={AddService} />
      <Route path={`${match.path}/:uuid`} component={MyService} />
    </Switch>
  );
};
