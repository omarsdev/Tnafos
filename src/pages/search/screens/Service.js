import React from "react";

import { Box, Grid, Text } from "@chakra-ui/react";

import { CardItem } from "../components";

export const Service = () => {
  return (
    <>
      <Text fontSize="35px">Services</Text>
      <Box mt="40px">
        <Grid templateColumns="repeat(3, 1fr)" gap={20}>
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
          />
        </Grid>
      </Box>
    </>
  );
};
