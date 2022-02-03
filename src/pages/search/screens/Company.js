import React, { useContext, useEffect } from "react";

import { Box, Grid, SimpleGrid, Text } from "@chakra-ui/react";

import { CardItem } from "../components";
import { SearchDataContext } from "../../../context";

const Company = () => {
  const { companyListProviderValue } = useContext(SearchDataContext);
  const { companyList, setCompanyList } = companyListProviderValue;

  useEffect(() => {}, []);

  return (
    <>
      <Text fontSize="35px">Services</Text>
      <Box mt="40px">
        <SimpleGrid minChildWidth={"260px"} gap={8}>
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
          <CardItem
            title="React Native Mobile App (iOS & Android)"
            srcImg="https://bit.ly/sage-adebayo"
            body="React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces."
            isCompany={true}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Company;
