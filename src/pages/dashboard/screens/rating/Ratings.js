import React, { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import { MyRating, RatingCard } from "./";
import { AxiosInstance } from "../../../../api";

export const Ratings = () => {
  const [ratings, setRatings] = useState([]);

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
