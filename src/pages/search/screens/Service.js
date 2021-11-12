import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";
import { Box, Grid, Spinner, Text } from "@chakra-ui/react";

import AxiosInstance from "api/axios-instance";

import { CardItem } from "../components";

export const Service = () => {
  const match = useRouteMatch();
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const handleSearchApi = async () => {
      await AxiosInstance.get(
        `api/services/search?search=${match.params.search}`
      ).then((res) => {
        setSearchResult(res.data.data);
      });
    };

    handleSearchApi();
  }, [match.params.search]);

  return (
    <>
      <Text fontSize="35px">Services</Text>
      <Box mt="40px">
        {!searchResult ? (
          <Spinner size="xl" color="#F8B916" />
        ) : (
          <Grid templateColumns="repeat(3, 1fr)" gap={20}>
            {searchResult.map((e, i) => (
              <CardItem key={i} data={e} />
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};
