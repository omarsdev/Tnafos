import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { CreateCompany, UpdateCompany } from "./";
import { RepeatIcon, StarIcon } from "@chakra-ui/icons";
import { showCompany } from "../../../../utils";
import { CompanyCard } from "./";
import {
  Container,
  HStack,
  Box,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";

export const CompanyHome = () => {
  const [companyInfo, setcompanyInfo] = useState({});

  const company = async () => {
    const result = await showCompany();
    console.log(result);
    setcompanyInfo(result.data);
  };

  useEffect(() => {
    company();
  }, []);

  const match = useRouteMatch();

  return (
    <Box>
      <Heading>Company</Heading>
      <HStack>
        <CompanyCard Data={companyInfo} />

        <Stack>
          <Heading>Options</Heading>
          <Box>
            <Link to={`${match.url}/update`}>
              <Button>UPDATE</Button>
            </Link>
          </Box>
        </Stack>

        <Box>Review</Box>
      </HStack>
    </Box>
  );
};
