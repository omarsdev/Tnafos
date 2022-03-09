import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { TnafosSearchLogo } from "../../../../assets/icons/svg/TnafosSearchLogo";

import { AiOutlineSearch } from "react-icons/ai";

import AppBar from "@mui/material/AppBar";
import SuiBox from "components/SuiBox";
import SuiInput from "components/SuiInput";
import SuiTypography from "components/SuiTypography";
import Grid from "@mui/material/Grid";

import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";

const DashboardNavbar = () => {
  let { search } = useParams();

  const history = useHistory();

  const [searchInput, setSearchInput] = useState(search);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  return (
    <AppBar color="dark" position="relative">
      {/* <Toolbar> */}
      <SuiBox p={0.5}>
        <Grid
          container
          spacing={3}
          justifyContent="baseline"
          alignItems="center"
        >
          <Grid item xs={12} md={4}>
            <SuiBox pr={1} py={1}>
              <TnafosSearchLogo />
            </SuiBox>
          </Grid>

          <Grid item xs={12} md={6} my="auto" ml="auto" mr={3}>
            <SuiBox
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <SuiBox
                lineHeight={0}
                ml={{ xs: 1, sm: 2 }}
                display="flex"
                alignItems="center"
              >
                <SuiBox
                  color="white"
                  backgroundColor="transparent"
                  cursor={"pointer"}
                  // borderBottomRightRadius={20}
                  // borderTopRightRadius={20}
                  bgColor={"transparent"}
                  mr={0.5}
                  py={2}
                  onClick={searchHandler}
                >
                  <AiOutlineSearch />
                </SuiBox>
                <SuiInput
                  size="small"
                  placeholder="Search anything..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeypress}
                ></SuiInput>
              </SuiBox>

              <SuiBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Link to="#" className="decoration-none">
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    color="white"
                  >
                    Home
                  </SuiTypography>
                </Link>
              </SuiBox>
              <SuiBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Link to="#" className="decoration-none">
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    color="white"
                  >
                    Become a Vender
                  </SuiTypography>
                </Link>
              </SuiBox>

              <SuiBox color="white" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Link to="#" className="decoration-none">
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    color="white"
                  >
                    login
                  </SuiTypography>
                </Link>
              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default DashboardNavbar;
