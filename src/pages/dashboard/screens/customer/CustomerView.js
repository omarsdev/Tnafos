import React, { useEffect, useState } from "react";

import {
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import { AxiosInstance } from "api";

const CustomerView = () => {
  const history = useHistory();
  const { uuid } = useParams();
  const match = useRouteMatch();

  const [customerData, setCustomerData] = useState(null);

  const getSHowCustomer = async () => {
    await AxiosInstance.get(`/api/dashboard/customer/${uuid}`).then(res => {
      setCustomerData(res.data.data)
    })
  }

  useEffect(() => {
    getSHowCustomer();
  }, [])

  const navigateToUpdateCustomer = () => {
    history.push(`${match.url}/update`);
  }

  return customerData && (
    <SuiBox py={3}>
      <Card className="overflow-visible">
        <SuiBox p={3}>
          <SuiBox mb={3}>
            <SuiTypography variant="h5" fontWeight="medium">
              <strong>User Card's details ...</strong>
            </SuiTypography>
          </SuiBox>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={5}>
              <SuiBox>
                <SuiBox
                  component="img"
                  src={"https://bit.ly/sage-adebayo"}
                  alt="Segun Adebayo"
                  boxShadow="lg"
                  borderRadius="lg"
                  width="100%"
                />
              </SuiBox>
            </Grid>

            <Grid item xs={12} lg={5} className="mx-auto" mt={6}>
              <SuiBox m={0} pl={4} mb={2}>
                {Object.keys(customerData).map((key, i) => (
                  typeof (customerData[key]) === "string" && (
                    <SuiBox color="text" fontSize="1.25rem" lineHeight={1} key={i}>
                      <SuiTypography variant="body2" textColor="text">
                        <strong>{key} : </strong>
                        {customerData[key]}
                      </SuiTypography>
                    </SuiBox>
                  )
                ))}
              </SuiBox>

              <SuiBox
                display="flex"
                width="100%"
                pl={4}
                mb={2}
                mt={8}
                justifyContent="start"
                alignItems="start"
              >
                <Grid item xs={12} lg={5} container>
                  <SuiButton
                    variant="gradient"
                    buttonColor="info"
                    fullWidth
                    onClick={navigateToUpdateCustomer}
                  >
                    Edit
                  </SuiButton>
                </Grid>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>
      </Card>
    </SuiBox>
  )
}

export default CustomerView