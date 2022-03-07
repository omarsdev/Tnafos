import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { TnafosSearchLogo } from "../../../../assets/icons/svg/TnafosSearchLogo";

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
    <AppBar color="dark">
      <Toolbar>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <SuiBox pr={1} py={1}>
              <TnafosSearchLogo />
            </SuiBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <SuiBox
              display="flex"
              justifyContent="flex-end"
              p={3}
              color={"black"}
            >
              <Stack spacing={1} direction="row" spacing={1}>
                <SuiBox pr={1}>
                  <SuiInput
                    placeholder="Type here..."
                    withIcon={{ icon: "search", direction: "left" }}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeypress}
                  />
                </SuiBox>

                <Stack spacing={3} direction="row" spacing={1}>
                  <Link to="#" className="decoration-none">
                    <SuiTypography
                      variant="button"
                      fontWeight="medium"
                      color="white"
                    >
                      Home
                    </SuiTypography>
                  </Link>
                  <Link to="#" className="decoration-none">
                    <SuiTypography
                      variant="button"
                      fontWeight="medium"
                      color="white"
                    >
                      Become a Vender
                    </SuiTypography>
                  </Link>

                  <Link to="#" className="decoration-none">
                    <SuiTypography
                      variant="button"
                      fontWeight="medium"
                      color="white"
                    >
                      login
                    </SuiTypography>
                  </Link>
                </Stack>
              </Stack>
            </SuiBox>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
