import React from 'react'

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Soft UI Dashboard PRO React page layout routes
// import pageRoutes from "page.routes";

// Images
import pattern from "assets/images/login.jpg";

function IllustrationLayout({ color, header, title, description, illustration, children }) {
    return (
        <PageLayout background="white">
            {/* <DefaultNavbar
                // routes={pageRoutes}
                action={{
                    type: "external",
                    route: "https://creative-tim.com/product/soft-ui-dashboard-pro-react",
                    label: "buy now",
                }}
            /> */}
            <Grid container>
                <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
                    <SuiBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
                        <SuiBox pt={3} px={3}>
                            {!header ? (
                                <>
                                    <SuiBox mb={1}>
                                        <SuiTypography variant="h4" fontWeight="bold">
                                            {title}
                                        </SuiTypography>
                                    </SuiBox>
                                    <SuiTypography variant="body2" fontWeight="regular" color="text">
                                        {description}
                                    </SuiTypography>
                                </>
                            ) : (
                                header
                            )}
                        </SuiBox>
                        <SuiBox p={3}>{children}</SuiBox>
                    </SuiBox>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <SuiBox
                        display={{ xs: "none", lg: "flex" }}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        width="calc(100% - 2rem)"
                        height="calc(100vh - 2rem)"
                        position="relative"
                        borderRadius="lg"
                        textAlign="center"
                        m={2}
                        sx={{ overflow: "hidden" }}
                    >
                        <SuiBox
                            component="img"
                            src={pattern}
                            alt="pattern-lines"
                            width="120rem"
                            position="absolute"
                            topl={0}
                            left={0}
                        />
                    </SuiBox>
                </Grid>
            </Grid>
        </PageLayout>
    );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
    color: "info",
    header: "",
    title: "",
    description: "",
    illustration: {},
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    header: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
    illustration: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default IllustrationLayout;
