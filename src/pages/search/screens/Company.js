import React from "react";

import { Box, Grid, Text, VStack } from "@chakra-ui/react";

import { CardItem } from "../components";

export const Company = () => {
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
            isCompany={true}
          />
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
        </Grid>
      </Box>
    </>
  );
};
