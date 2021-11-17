import React, { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Heading,
  Button,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import {
  Link,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { AxiosInstance } from "../../../../utils";
import { ServiceCard, AddService, MyService } from "./";
import { AiOutlinePlus } from "react-icons/ai";

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
          <Grid h="16" templateColumns="repeat(5, 1fr)" gap="5" p="5">
            <GridItem colSpan={4}>
              <Heading
                textColor="gray.600"
                fontSize="xx-large"
                fontWeight="lg"
                alignItems="baseline"
                ml="5"
              >
                Services
              </Heading>
            </GridItem>

            <GridItem colSpan={1} pl="50px">
              <Link to={`${match.url}/addservice`}>
                <IconButton
                  as={Button}
                  colorScheme="yellow"
                  size="lg"
                  icon={<AiOutlinePlus />}
                  rounded="full"
                ></IconButton>
              </Link>
            </GridItem>
          </Grid>

          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={4}
            p="30px"
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
