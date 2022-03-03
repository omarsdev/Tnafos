import React, { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

import { SearchDataContext } from "../../../context/SearchDataContext";

import { CircularProgress } from "@mui/material";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const CardItem = ({ data, isSelected, isCompany }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const { vendorsListProviderValue, myListDataProviderValue } =
    useContext(SearchDataContext);
  const { vendorsList, setVendorsList } = vendorsListProviderValue;
  const { myListData, setMyListData } = myListDataProviderValue;

  const [loading, setLoading] = useState(false);
  const [addedToMyList, setAddedToMyList] = useState(false);

  const addToMyListHandler = () => {
    setLoading(true);
    if (match.params.serviceId) {
      if (myListData.findIndex((x) => x.uuid === vendorsList.uuid) === -1) {
        setMyListData([...myListData, vendorsList]);
      }
    } else {
      if (myListData.findIndex((x) => x.uuid === data.uuid) === -1) {
        setMyListData([...myListData, data]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (match.params.serviceId) {
      if (myListData.findIndex((x) => x.uuid === vendorsList?.uuid) !== -1) {
        setAddedToMyList(true);
        console.log(vendorsList.uuid);
      }
    } else {
      if (myListData.findIndex((x) => x.uuid === data.uuid) !== -1) {
        setAddedToMyList(true);
      }
    }
  }, [data?.uuid, match.params.serviceId, myListData, vendorsList?.uuid]);

  return !vendorsList && isSelected ? (
    <CircularProgress color="info" />
  ) : (
    <Card className="overflow-visible">
      <SuiBox p={2} mt={3}>
        <Grid container alignItems="center">
          <SuiBox
            component="img"
            src={data?.srcImg || "https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            boxShadow="lg"
            borderRadius="lg"
            width="100%"
            objectFit="cover"
            rounded="3xl"
          />
        </Grid>
      </SuiBox>

      <SuiBox m={0} mb={2}>
        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            my={1}
            // display="flex"
            justifyContent="center"
            textAlign="center"
          >
            <strong>
              {vendorsList && isSelected
                ? vendorsList.description
                : data?.description
                ? data?.description
                : `React Native combines the best parts of native development with React,
              a best-in-class JavaScript library for building user interfaces.`}
            </strong>{" "}
          </SuiTypography>
        </SuiBox>
        <SuiBox color="text" fontSize="1.25rem" lineHeight={1}>
          <SuiTypography
            variant="body2"
            textColor="text"
            justifyContent="center"
            textAlign="center"
          >
            {vendorsList && isSelected
              ? vendorsList.name
              : data?.name
              ? data?.name
              : "React Native Mobile App (iOS & Android)"}
          </SuiTypography>
        </SuiBox>

        {!isCompany ? (
          <SuiBox
            display="flex"
            width="100%"
            my={2}
            justifyContent="center"
            alignItems="center"
          >
            {!isSelected && (
              <SuiBox mr={1}>
                <Link to={`${match.url}/${data.uuid}`}>
                  <SuiButton
                    variant="gradient"
                    buttonColor="info"
                    size="small"
                    onClick={() => setVendorsList(null)}
                  >
                    view
                  </SuiButton>
                </Link>
              </SuiBox>
            )}
            <SuiButton
              variant="outlined"
              buttonColor="dark"
              size="small"
              onClick={addToMyListHandler}
            >
              {addedToMyList ? "Added" : "Add To List"}
            </SuiButton>
          </SuiBox>
        ) : (
          <SuiBox
            display="flex"
            width="100%"
            my={2}
            justifyContent="space-around"
            alignItems="center"
          >
            {" "}
            <SuiTypography
              variant="h5"
              fontWeight="medium"
              justifyContent="center"
              textAlign="center"
            >
              Starting from 7500 SAR
            </SuiTypography>
          </SuiBox>
        )}
      </SuiBox>
    </Card>
  );
};
export default CardItem;
