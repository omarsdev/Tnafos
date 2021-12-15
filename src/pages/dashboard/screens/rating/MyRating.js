import React, { useState, useEffect } from "react";
import { AxiosInstance } from "api";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const MyRating = () => {
  const [data, setData] = useState();
  const { uuid } = useParams();

  const showRating = async () => {
    await AxiosInstance.get(`/api/dashboard/rating/${uuid}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    showRating();
  }, []);
  return (
    <Box>
      <Text>{data}</Text>
    </Box>
  );
};