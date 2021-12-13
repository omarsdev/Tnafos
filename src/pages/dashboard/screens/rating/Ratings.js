import React, { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";

import { AxiosInstance } from "api/AxiosInstance";
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import { MyRating, RatingCard } from "./";

export const Ratings = () => {
  const [ratings, setRatings] = useState(null);

  const { uuid } = useParams();
  let match = useRouteMatch();

  const getAllRatings = async () => {
    await AxiosInstance.get("/api/dashboard/rating/")
      .then((res) => {
        console.log(res.data.data);
        setRatings(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getAllRatings();
  }, []);

  return (
    <Switch>
      <Route path={match.path}>
        <Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={20} mb="20px">
            {/* {ratings?.map((el, id) => (
              <Link to={`${match.url}/:uuid`} key={id}>
                <RatingCard ratDetails={el} />
              </Link>
            ))} */}
            <RatingCard />
          </Grid>
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={MyRating} />
    </Switch>
  );
};

// grey: "#AEAEAE",
// error: "#B00020",
// info: "#007BFF",
