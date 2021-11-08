import React, { useEffect, useState } from "react";
import { AddService, MyService } from "./";
import { IconButton, Box, HStack, VStack } from "@chakra-ui/react";
import {
  Link,
  useParams,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import { showServicesList } from "../../../../utils";
import { ServiceCard } from "./";
import { SmallAddIcon } from "@chakra-ui/icons";

export const Service = () => {
  const [servicesList, setServicesList] = useState([]);

  const showList = async () => {
    const List = await showServicesList();
    console.log(List);
    setServicesList(List.data);
  };

  useEffect(() => {
    showList();
  }, []);

  const match = useRouteMatch();
  const { uuid } = useParams();

  return (
    <>
      <VStack>
        <HStack>
          <Box bg="white" w="75%" color="black">
            Services
          </Box>
          <Box bg="white" w="25%">
            <Link to={`${match.url}/addservice`}>
              <IconButton icon={<SmallAddIcon />} />
            </Link>
          </Box>
        </HStack>
        <Box>
          {servicesList.length === 0
            ? null
            : servicesList.map((service, idx) => (
                <Link key={idx} to={`${match.url}/${service.uuid}`}>
                  <ServiceCard info={service} />
                </Link>
              ))}
        </Box>
      </VStack>

      {/* Body */}
      <Switch>
        <Route exact path={`${match.path}`} />
        <Route path={`${match.path}/addservice`} component={AddService} />
        <Route path={`${match.path}/:uuid`} component={MyService} />
      </Switch>
    </>
  );
};
