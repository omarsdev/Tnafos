import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { CompanyHome, CreateCompany, UpdateCompany } from "./";
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

export const Company = () => {
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
    <Switch>
      <Route exact path={`${match.path}`} component={CompanyHome} />
      <Route path={`${match.path}/update`} component={UpdateCompany} />
      <Route path={`${match.path}/create`} component={CreateCompany} />
    </Switch>
  );
};
