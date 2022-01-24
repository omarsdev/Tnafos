import React, { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { AxiosInstance } from "../../../../api";

import MyRating from "./MyRating";
import RatingCard from "./RatingCard";

const Ratings = () => {
  const [ratings, setRatings] = useState(null);

  const match = useRouteMatch();

  const getAllRatings = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/rating/");

      console.log(res.data.data);
      setRatings(res.data.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getAllRatings();
  }, []);

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={10} pt="20px">
            {ratings.length === 0
              ? null
              : ratings.map((el, id) => (
                  <Link to={`${match.url}/${el.uuid}`} key={id}>
                    <RatingCard ratDetails={el} />
                  </Link>
                ))}
          </Grid>
        </Box>
      </Route>
      <Route path={`${match.path}/:uuid`} component={MyRating} />
    </Switch>
  );
};

export default Ratings;
