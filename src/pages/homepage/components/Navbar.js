import React, { useContext, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { UserDataContext } from "../../../context";
import { removeUserSession } from "../../../utils";

// Soft UI Dashboard PRO React example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
// import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Soft UI Dashboard PRO React base styles
// import breakpoints from "assets/theme/base/breakpoints";

// Custom styles for DashboardNavbar
import styles from "examples/Navbars/DefaultNavbar/styles/defaultNavbar";

// DefaultNavbar dropdown menus
// import DocsMenu from "examples/Navbars/DefaultNavbar/Menus/DocsMenu";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SuiButton from "components/SuiButton";
import Container from "@mui/material/Container";
import SuiAvatar from "components/SuiAvatar";

import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

export const Navbar = ({ routes, transparent, light, action }) => {
  const UserProfile = {};
  const classes = styles({ transparent, light });
  const [docsMenu, setDocsMenu] = useState(false);
  // const [mobileNavbar, setMobileNavbar] = useState(false);
  // const [mobileView, setMobileView] = useState(false);

  const openDocsMenu = ({ currentTarget }) => setDocsMenu(currentTarget);
  const closeDocsMenu = () => setDocsMenu(false);
  // const openMobileNavbar = ({ currentTarget }) =>
  //   setMobileNavbar(currentTarget.parentNode);
  // const closeMobileNavbar = () => setMobileNavbar(false);

  // useEffect(() => {
  //   // A function that sets the display state for the DefaultNavbarMobile.
  //   function displayMobileNavbar() {
  //     if (window.innerWidth < breakpoints.values.lg) {
  //       setMobileView(true);
  //       setMobileNavbar(false);
  //     } else {
  //       setMobileView(false);
  //       setMobileNavbar(false);
  //     }
  //   }

  //   /**
  //    The event listener that's calling the displayMobileNavbar function when
  //    resizing the window.
  //   */
  //   window.addEventListener("resize", displayMobileNavbar);

  //   // Call the displayMobileNavbar function to set the state with the initial value.
  //   displayMobileNavbar();

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener("resize", displayMobileNavbar);
  // }, []);

  const history = useHistory();

  const { dataProviderValue } = useContext(UserDataContext);
  const { userData, setUserData } = dataProviderValue;

  const handleLogOut = () => {
    removeUserSession();
    setUserData(null);
    history.go(0);
  };

  // return (
  //   <Flex mx={10} my={4} h={"8vh"}>
  //     <Spacer />
  //     <HStack spacing={5}>
  //       {!userData ? (
  //         <Link to="/register">
  //           <SecondaryButton name="Register" />
  //         </Link>
  //       ) : (
  //         <Link to="/dashboard">
  //           <PrimaryButton name="Dashboard" />
  //         </Link>
  //       )}

  //       {!userData ? (
  //         <Link to="/login">
  //           <PrimaryButton name="Login" />
  //         </Link>
  //       ) : (
  //         <HStack>
  //           <Avatar
  //             name={`${userData.first_name} ${userData.last_name}`}
  //             src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  //             alt="User Profile Photo"
  //             borderRadius="full"
  //             size="md"
  //           />
  //           <Text>
  //             {userData.first_name} {userData.last_name}
  //           </Text>
  //           <Menu>
  //             <MenuButton
  //               as={Button}
  //               rightIcon={<FaChevronDown />}
  //               bg="transparent"
  //               _hover={{
  //                 backgroundColor: "brand.white",
  //               }}
  //               _focus={{
  //                 backgroundColor: "brand.white",
  //               }}
  //             />
  //             <MenuList w="28">
  //               <Link to={`/dashboard/user/profile`}>
  //                 <MenuItem
  //                   _hover={{
  //                     backgroundColor: "gray-200",
  //                   }}
  //                 >
  //                   My Profile
  //                 </MenuItem>
  //               </Link>
  //               <MenuItem
  //                 onClick={handleLogOut}
  //                 _hover={{
  //                   backgroundColor: "gray-200",
  //                 }}
  //               >
  //                 Log out
  //               </MenuItem>
  //             </MenuList>
  //           </Menu>
  //         </HStack>
  //       )}
  //     </HStack>
  //   </Flex>
  // );

  return (
    <Container>
      <SuiBox
        customClass={classes.defaultNavbar}
        py={1}
        px={{
          xs: transparent ? 4 : 5,
          sm: transparent ? 2 : 5,
          lg: transparent ? 0 : 5,
        }}
      >
        <SuiBox
          color="inherit"
          display={{ xs: "none", lg: "flex" }}
          m={0}
          p={0}
        >
          <DefaultNavbarLink
            name="docs"
            openHandler={openDocsMenu}
            closeHandler={closeDocsMenu}
            light={light}
          />
        </SuiBox>
        {!userData ? (
          <SuiBox display={{ xs: "none", lg: "inline-block" }}>
            <SuiButton
              component={Link}
              to={"/register"}
              variant="gradient"
              buttonColor={"info"}
              size="small"
              circular
            >
              sign up
            </SuiButton>
          </SuiBox>
        ) : (
          <SuiBox display={{ xs: "none", lg: "inline-block" }}>
            <SuiButton
              component={Link}
              to={"/dashboard"}
              variant="gradient"
              buttonColor={"info"}
              size="small"
              circular
            />
          </SuiBox>
        )}

        {!userData ? (
          <SuiBox display={{ xs: "none", lg: "inline-block" }}>
            <SuiButton
              component={Link}
              to={"/login"}
              variant="gradient"
              buttonColor={"info"}
              size="small"
              circular
            >
              sign in
            </SuiButton>
          </SuiBox>
        ) : (
          <Card className={classes.profileHeader_profile}>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <SuiBox height="100%" mt={0.5} lineHeight={1}>
                  <SuiTypography variant="h5" fontWeight="medium">
                    {userData.first_name} {userData.last_name}
                  </SuiTypography>
                </SuiBox>
              </Grid>
              <Grid item>
                <SuiAvatar
                  // src={burceMars}
                  alt="profile-image"
                  variant="rounded"
                  size="xl"
                  customClass="shadow-sm"
                />
              </Grid>
            </Grid>
          </Card>
        )}
        {/* <SuiBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          customClass="cursor-pointer"
          onClick={openMobileNavbar}
        >
          <Icon className="" fontSize="default">
            {mobileNavbar ? "close" : "menu"}
          </Icon>
        </SuiBox> */}
      </SuiBox>

      {/* <DocsMenu routes={routes} open={docsMenu} close={closeDocsMenu}  />
      {mobileView && (
        <DefaultNavbarMobile
          routes={routes}
          open={mobileNavbar}
          close={closeMobileNavbar}
        >
          Hello
        </DefaultNavbarMobile>
      )} */}
    </Container>
  );

  // // Setting default values for the props of DefaultNavbar
  // DefaultNavbar.defaultProps = {
  //   transparent: false,
  //   light: false,
  //   action: false,
  // };

  // // Typechecking props for the DefaultNavbar
  // DefaultNavbar.propTypes = {
  //   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   transparent: PropTypes.bool,
  //   light: PropTypes.bool,
  //   action: PropTypes.oneOfType([
  //     PropTypes.bool,
  //     PropTypes.shape({
  //       type: PropTypes.oneOf(["external", "internal"]).isRequired,
  //       route: PropTypes.string.isRequired,
  //       color: PropTypes.oneOf([
  //         "primary",
  //         "secondary",
  //         "info",
  //         "success",
  //         "warning",
  //         "error",
  //         "dark",
  //         "light",
  //         "white",
  //       ]),
  //       label: PropTypes.string.isRequired,
  //     }),
  //   ]),
  // };
};
