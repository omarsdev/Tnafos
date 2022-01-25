import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";
import { Box, Grid, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import { CardItem } from "../components";

import { AxiosInstance } from "../../../api";

export const Service = () => {
  const match = useRouteMatch();
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSearchApi = () => {
    AxiosInstance.get(
      `api/services/search?search=${match.params.search}&page=${currentPage}`
    )
      .then((res) => {
        if (!res.data.links.next) setHasMore(false);
        setSearchResult((arr) => arr.concat(res.data.data));
        // console.log(res.data.data);
      })
      .catch((e) => console.log(e));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    handleSearchApi();
  }, []);

  // useEffect(() => {
  //   // handleSearchApi();
  // }, [match.params.search, currentPage]);

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  return (
    <>
      <Text fontSize="35px">Services</Text>
      {/* <button onClick={() => console.log(searchResult)}>Click me</button> */}
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
      </InfiniteScroll> */}
      <InfiniteScroll
        dataLength={searchResult.length}
        next={handleSearchApi}
        hasMore={hasMore}
        loader={<Spinner size="xl" color="#F8B916" />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <SimpleGrid minChildWidth={"260px"} gap={8}>
          {searchResult.map((e, i) => (
            <CardItem key={i} data={e} />
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* <Box mt="40px"></Box> */}
      {/* <button onClick={() => console.log(searchResult)}>Click me</button> */}
      {/* <Box mt="40px"> */}
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
      {/* </Box> */}
    </>
  );
};

export default Service;
