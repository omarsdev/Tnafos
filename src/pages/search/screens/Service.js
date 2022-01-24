import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";
import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import { CardItem } from "../components";

import { AxiosInstance } from "../../../api";

export const Service = () => {
  const match = useRouteMatch();
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleSearchApi = async () => {
      await AxiosInstance.get(
        `api/services/search?search=${match.params.search}&page=${currentPage}`
      ).then((res) => {
        setSearchResult((arr) => arr.concat(res.data.data));
      });
    };

    handleSearchApi();
  }, [match.params.search, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Text fontSize="35px">Services</Text>
      <button onClick={() => console.log(searchResult)}>Click me</button>
      <Box mt="40px">
        {/* <InfiniteScroll
          dataLength={searchResult.length}
          next={handleNextPage}
          hasMore={true}
          loader={<Spinner size="xl" color="#F8B916" />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            {searchResult.map((e, i) => (
              <CardItem key={i} data={e} />
            ))}
          </Grid>
        </InfiniteScroll> */}
      </Box>
    </>
  );
};

export default Service;
