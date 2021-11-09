import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { showCompany } from "../../../../utils";
import { CompanyCard } from "./";
import { HStack, Box, Stack, Heading, Button, VStack } from "@chakra-ui/react";

export const CompanyHome = () => {
  const [companyInfo, setcompanyInfo] = useState({});

  const companyData = async () => {
    const result = await showCompany();
    console.log(result);
    setcompanyInfo(result.data);
  };

  useEffect(() => {
    companyData();
  }, []);

  const match = useRouteMatch();

  return (
    <Box>
      <Heading>Company</Heading>
      <HStack spacing={0}>
        <VStack>
          <Heading>Options</Heading>
          <Box>
            <Link to={`${match.url}/update`}>
              <Button>UPDATE</Button>
            </Link>
          </Box>

          <Box>Review</Box>
        </VStack>
        <CompanyCard Data={companyInfo} />
      </HStack>
    </Box>
  );
};
