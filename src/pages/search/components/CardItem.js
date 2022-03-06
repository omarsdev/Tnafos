import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  Spinner,
  Center,
  Flex,
} from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

import { PrimaryButton, SecondaryButton } from "components/button";
import { SearchDataContext } from "../../../context";

export const CardItem = ({ data, isSelected, isCompany }) => {
  const match = useRouteMatch();

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
      }
    } else {
      if (myListData.findIndex((x) => x.uuid === data.uuid) !== -1) {
        setAddedToMyList(true);
      }
    }
  }, [data?.uuid, match.params.serviceId, myListData, vendorsList?.uuid]);

  return (
    <Box
      rounded="3xl"
      shadow="2xl"
      position="relative"
      backgroundColor="brand.white"
      w="100%"
    >
      {!vendorsList && isSelected ? (
        <Center h="350px" w="100%">
          <Spinner size="xl" color="#F8B916" />
        </Center>
      ) : (
        <VStack spacing="20px" mx="5%">
          <Image
            src={data?.srcImg || "https://bit.ly/sage-adebayo"}
            alt="Segun Adebayo"
            objectFit="cover"
            rounded="3xl"
            w="100%"
            h="160px"
            marginTop={"20px"}
          />
          <Text fontSize="21px" lineHeight="7">
            {vendorsList && isSelected
              ? vendorsList.name
              : data?.name
                ? data?.name
                : "React Native Mobile App (iOS & Android)"}
          </Text>

          <Box h="100px" overflow="hidden">
            <Text fontSize="17px" lineHeight="23px">
              {vendorsList && isSelected
                ? vendorsList.description
                : data?.description
                  ? data?.description
                  : `React Native combines the best parts of native development with React,
              a best-in-class JavaScript library for building user interfaces.`}
            </Text>
          </Box>
          {!isCompany ? (
            <HStack mb={0} bottom="25px" position="absolute">
              {!isSelected && (
                <Link to={`${match.url}/${data.uuid}`}>
                  <SecondaryButton
                    name="View"
                    width={"120px"}
                    onClick={() => setVendorsList(null)}
                  />
                </Link>
              )}

              <PrimaryButton
                name={addedToMyList ? "Added" : "Add To List"}
                width={"120px"}
                onClick={addToMyListHandler}
                loadingButton={loading}
                buttonType="submit"
              />
            </HStack>
          ) : (
            <Flex
              flexDir="row"
              justifyContent="space-around"
              alignItems="center"
              w="full"
              marginBottom="20px !important"
            >
              <Text>Starting from</Text>
              <Text fontSize="26px">7500 SAR</Text>
            </Flex>
          )}
        </VStack>
      )}
    </Box>
  );
};
