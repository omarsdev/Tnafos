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
import { useRouteMatch, useHistory } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import ServiceCard from "./ServiceCard";

import { AxiosInstance } from "../../../../api";

const ServiceHome = () => {
  const [servicesList, setServicesList] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();

  const showServicesList = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/service");
      setServicesList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showServicesList();
  }, []);

  return (
    <Box w="full" overflowY="scroll" padding={{ base: 1, sm: 3, md: 4, lg: 6 }}>
      <HStack justifyContent="space-between" paddingBottom="5" px="3%">
        <Heading
          textColor="gray.600"
          fontSize={{
            base: "large",
            sm: "large",
            md: "x-large",
            lg: "xx-large",
          }}
          fontWeight="lg"
          alignItems="baseline"
        >
          Services
        </Heading>

        <Button
          colorScheme="yellow"
          size={{ base: "x-small", sm: "x-small", md: "md", lg: "large" }}
          rounded="full"
          h={{ base: 6, sm: 8, md: 10, lg: 12 }}
          w={{ base: 6, sm: 8, md: 10, lg: 12 }}
          onClick={() => {
            history.push(`${match.url}/addservice`);
          }}
        >
          <AiOutlinePlus
            fontSize={{ base: "xx-small", sm: "small", md: "md", lg: "large" }}
          />
        </Button>
      </HStack>

      {!servicesList ? (
        <Center h="70vh" w="100%">
          <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
        </Center>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 2, md: 2, lg: 4 }}
          mb={{ base: 1, md: 3, lg: 5 }}
          mx={{ base: 3, md: "none", lg: "none" }}
        >
          {servicesList.map((service, idx) => (
            <ServiceCard
              info={service}
              key={idx}
              h={{ base: 80, sm: 80, md: 82, lg: 86 }}
              w={{ base: 60, sm: 76, lg: 76 }}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ServiceHome;
