import React, { useEffect, useContext } from "react";
import { DashboardContent } from "./DasboardContent";
import { Navbar, Sidebar } from "./components/index";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { UserDataContext } from "../../context";
import { getToken, removeUserSession } from "../../utils/handleUser";
import { handleTokenRequest } from "../../utils";

export const DashboardLayout = () => {
  // const { userDataProvider, userTokenProvider } = useContext(UserDataContext);
  // const [userData, setUserData] = userDataProvider;
  // const [clientToken, setClientToken] = userTokenProvider;

  // const getUser = async () => {
  //   if (!userData) {
  //     //* grab token wether from local storage or context
  //     let token = getToken() || clientToken;
  //     if (token) {
  //       try {
  //         const response = await handleTokenRequest(token);
  //         console.log(response);
  //         //* save user. info in the context provider which will be invoked later in Home page
  //         setUserData(response.data);
  //       } catch (error) {}
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  //*  note: we picked user information below from the (userData) variable that we've stored in context provider
  return (
    <>
      {/* {userData ?*/}
      <Box>
        <HStack spacing={0}>
          <Sidebar />
          <VStack className="chakra-stack h-screen w-full" spacing={0}>
            <Navbar />
            <DashboardContent className="h-3/4 w-full" />
          </VStack>
        </HStack>
        {/* ) : (
        <h1>loading</h1>
      )} */}
      </Box>
    </>
  );
};
