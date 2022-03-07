import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import CardItem from "../components/CardItem";

import { AxiosInstance } from "../../../api/AxiosInstance";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CircularProgress } from "@mui/material";

const Service = () => {
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

  return (
    <Card>
      <SuiBox
        display="flex"
        justifyContent="start"
        alignItems="flex-start"
        p={3}
      >
        <SuiBox lineHeight={1}>
          <SuiTypography variant="h5" fontWeight="medium">
            <strong>Services</strong>
          </SuiTypography>
        </SuiBox>

        <InfiniteScroll
          dataLength={searchResult.length}
          next={handleSearchApi}
          hasMore={hasMore}
          loader={<CircularProgress color="info" />}
          endMessage={
            <SuiBox style={{ textAlign: "center" }}>
              Yay! You have seen it all
            </SuiBox>
          }
        >
          <SuiBox></SuiBox>
          <SuiBox p={3}>
            <Grid container spacing={3}>
              {searchResult.map((e, i) => (
                <Grid item xs={12} lg={4} key={i}>
                  <CardItem key={i} data={e} />
                </Grid>
              ))}
            </Grid>
          </SuiBox>
        </InfiniteScroll>
      </SuiBox>
    </Card>
  );
};
export default Service;
