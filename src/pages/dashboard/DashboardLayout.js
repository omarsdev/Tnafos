import React, {useEffect, useContext} from "react";
import { DashboardContent } from "./";
import {Navbar, Sidebar} from './components/index';
import { Container, Flex, Box,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList, } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouteMatch, useHistory, Link, Route, Switch, } from "react-router-dom";
 import { UserContextProvider } from "../../context/index";
import { getToken, removeUserSession } from "../../utils/handleUser";
import { handleTokenRequest } from "../../utils";
import { Client, Company, Estimate, Invioce, Payment, PurchaseRequest, Settings, User, Service } from "../../components";




export const DashboardLayout = () => {
  let match = useRouteMatch();

  const { userDataProvider, userTokenProvider } =
    useContext(UserContextProvider);
  const [userData, setUserData] = userDataProvider;
  const [clientToken, setClientToken] = userTokenProvider;

  const history = useHistory();

  const handlerLogOut = () => {
    removeUserSession();
    history.push("/home");
  };

  const getUser = async () => {
    if (!userData) {
      //* grab token wether from local storage or context
      let token = getToken() || clientToken;
      if (token) {
        try {
          const response = await handleTokenRequest(token);
          console.log(response);
          //* save user. info in the context provider which will be invoked later in Home page
          setUserData(response.data);
          // history.push("/");
          // return response;
        } catch (error) {}
      }
    }
  };


  useEffect(() => {
    getUser();
    // checkCopmany();
  }, []);

  const handleLogOut = () => {
    removeUserSession();
    history.push("/login");
  };


//*  note: we picked user information below from the (userData) variable that we've stored in context provider
  return (
    <>
    {userData ? (
      <Container>
          {/* <Box> */}
        <Sidebar/>
          {/* </Box> */}
        <div className="flex flex-col w-full">
            <Box bg="white" className="flex flex-row-reverse h-129.5 opacity-100 shadow-xl w-1920">
              <div className="flex flex-row items-center">
              <div className="font-medium h-25 justify-center my-auto text-gray-700 text-md w-81">
                <span className="my-auto mr-7">
                  {userData.first_name} {userData.last_name}
                </span>
              </div>
                  <Image
                    className="object-cover border rounded-full h-14 w-14 border-CPrimary css-0 rounded-ful"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="User Profile Photo"
                    style={{width:"70px", height:"70px"}}
                  />
                <Menu>
                  <MenuButton
                    as={IconButton}
                    rightIcon={<ChevronDownIcon />}
                    className="w-12 h-6 my-auto mr-5"
                  />
                  <MenuList className="h-12 mt-5 bg-white border border-gray-300 rounded opacity-50 w-28">
                    <Link to={`${match.url}/user/profile`}>
                      <MenuItem className="hover:bg-gray-200">
                        My Profile
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handlerLogOut}
                      className="hover:bg-gray-200"
                    >
                      Log out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </Box>


            {/* body */}
            <Switch>
              <Route exact path={match.path} component={DashboardContent}/>
              <Route path={`${match.path}/company`} component={Company} />
              <Route path={`${match.path}/user`} component={User} />
              <Route path={`${match.path}/service`} component={Service} />
              <Route
                path={`${match.path}/purchase-requests`}
                component={PurchaseRequest}
              />
              <Route path={`${match.path}/payment`} component={Payment} />
              <Route path={`${match.path}/invoice`} component={Invioce} />
              <Route path={`${match.path}/estimate`} component={Estimate} />
              <Route path={`${match.path}/client`} component={Client} />
              <Route path={`${match.path}/settings`} component={Settings} />
            </Switch>
          </div>
      </Container>
    ):(
        <h1>loading</h1>
      )}
    </>
  );
};
