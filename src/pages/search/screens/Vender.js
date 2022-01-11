import React, { useContext, useEffect } from "react";

import { Box, Grid, Text, VStack, Spinner } from "@chakra-ui/react";
import { useRouteMatch } from "react-router-dom";

import { CardCompany } from "../components";

import { AxiosInstance } from "../../../api";
import { SearchDataContext } from "../../../context";

export const Vender = () => {
  const match = useRouteMatch();

  const { vendorsListProviderValue } = useContext(SearchDataContext);
  const { vendorsList, setVendorsList } = vendorsListProviderValue;

  useEffect(() => {
    const handleShowServiceApi = async () => {
      await AxiosInstance.get(
        `api/services/show/${match.params.serviceId}`
      ).then((res) => {
        setVendorsList(res.data.data);
      });
    };

    handleShowServiceApi();
  }, [match.params.serviceId, setVendorsList]);

  return (
    <>
      <Text fontSize="35px">List of vendors</Text>
      <Box mt="40px">
        {!vendorsList ? (
          <Spinner size="xl" color="#F8B916" />
        ) : (
          <VStack spacing="50px">
            {vendorsList.companies.map((e, i) => (
              <CardCompany key={i} data={e} />
            ))}
          </VStack>
        )}
      </Box>
    </>
  );
};

export default Vender;
