import React, { useEffect, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { Box, IconButton, VStack } from "@chakra-ui/react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { getMyServices } from "../../../../utils";
import { UpdateService } from "./";

export const MyService = () => {
  const [service, setService] = useState(null);
  const { uuid } = useParams();
  const match = useRouteMatch();

  const history = useHistory();

  const serviceCard = async () => {
    const response = await getMyServices(uuid);
    console.log(response);

    if (response.success) {
      setService(response.data.data);
    } else if (!response.success && response.error) {
      history.push("/dashboard/service");
    } else if (!response.success && !response.error) {
      history.push("/");
    }
  };

  useEffect(() => {
    serviceCard();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path={`${match.path}`}>
          <Box>
            <Link to={`${match.url}/updateservice`}>
              <IconButton colorScheme="blue" icon={<EditIcon />} />
            </Link>
            <VStack>
              <Box>Name: {service?.name}</Box>
              <Box>Description:{service?.description}</Box>
              <Box>Price: {service?.price}</Box>
              <Box>Category-id: {service?.categoryid}</Box>
              <Box>Type :{service?.type}</Box>
            </VStack>
          </Box>
        </Route>
        <Route path={`${match.path}/updateservice`} component={UpdateService} />
      </Switch>
    </>
  );
};
