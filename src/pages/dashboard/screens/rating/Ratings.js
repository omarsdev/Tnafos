import React, { useState, useEffect } from "react";

import MyRating from "./MyRating";

import { AxiosInstance } from "../../../../api";

const Ratings = () => {
  const [ratings, setRatings] = useState(null);

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
