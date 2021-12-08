import React, { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";

import { RatingCard } from "./components";
import { AxiosInstance } from "api/AxiosInstance";
import { useParams } from "react-router-dom";

export const DashboardContent = () => {
  const [ratings, setRatings] = useState(null);

  const { uuid } = useParams();

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

  const showRating = async () => {
    await AxiosInstance.get(`/api/dashboard/rating/${uuid}`)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getAllRatings();
  }, []);

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={20} mb="20px">
        {/* {ratings?.map((el, id) => (
          <RatingCard ratDetails={el} key={id} />
        ))} */}
        <RatingCard />
      </Grid>
    </Box>
  );
};

// grey: "#AEAEAE",
// error: "#B00020",
// info: "#007BFF",
