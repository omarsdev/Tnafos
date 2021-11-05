import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { CreateCompany, UpdateCompany } from "./";
import { RepeatIcon, StarIcon } from "@chakra-ui/icons";
import { showCompany } from "../../utils";
import { CompanyCard } from "./";
import { Container, HStack, Box, Stack, Heading, Button } from "@chakra-ui/react";


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
    <Container>
        <>
            <HStack>
                <Box w="75%">
                    <Box>Company</Box>
                    <CompanyCard Data={companyInfo} />
                </Box>
                <Box w="25%">
                    <Box>
                    <Stack>
                        <Heading>Options</Heading>
                        <Box>
                            <Link to={`${match.url}/update`}>
                                <Button>UPDATE</Button>
                            </Link>
                        </Box>

                    </Stack>
                    </Box>
                    <Box>Review</Box>
                </Box>
            </HStack>



             {/*Body */}
            <Switch>
            <Route exact path={`${match.path}`} />
            <Route path={`${match.path}/update`} component={UpdateCompany} />
            <Route path={`${match.path}/create`} component={CreateCompany} />
            </Switch>
        </>
    </Container>



     
    
  );
};