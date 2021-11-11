import React, { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  Heading,
  Button,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { showServicesList } from "../../../../utils";
import { ServiceCard } from "./";
import { AiOutlinePlus } from "react-icons/ai";

export const ServiceHome = () => {
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
    <Box w="full" h="fit-content">
      <Grid h="16" templateColumns="repeat(5, 1fr)" gap="5" p="5">
        <GridItem colSpan={4}>
          <Heading
            color="black"
            fontWeight="medium"
            fontSize="xx-large"
            fontFamily="inhirit"
            alignItems="baseline"
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

      <Grid templateColumns="repeat(5, 1fr)" gap={4} p="30px">
        {servicesList.length === 0
          ? null
          : servicesList.map((service, idx) => (
              <Link key={idx} to={`${match.url}/${service.uuid}`}>
                <ServiceCard info={service} />
              </Link>
            ))}
      </Grid>
    </Box>
  );
};
