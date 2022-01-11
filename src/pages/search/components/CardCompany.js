import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { PhoneCall } from "react-feather";
import { Link, useRouteMatch } from "react-router-dom";

import Login from "../../../assets/images/login.jpg";
import { PrimaryButton } from "../../../components";

export const CardCompany = ({ data }) => {
  const match = useRouteMatch();

  return (
    <Box className="rounded-3xl border-CPrimary border-2 h-56 w-full shadow-xl">
      <HStack className="h-full" spacing="0" alignItems="unset">
        <Box className="w-1/5 h-full">
          <Image
            src={Login}
            alt="Segun Adebayo"
            objectFit="cover"
            rounded="3xl"
            w="100%"
            h="100%"
          />
        </Box>

        <HStack className="w-4/5 h-full" spacing="0">
          <VStack width="65%" spacing="12px" alignItems="flex-start" pl="40px">
            <Text fontSize="21px" className="">
              {data.name || "Company Name"}
            </Text>
            <Text height="67px" className="overflow-hidden">
              {data.bio ||
                `Probably the best random sentence generator. More than 90 random
              sentences all of which are human written and easily understood.
              Probably the best random sentence generator.`}
            </Text>
            <Box w="100%">
              <HStack w="100%">
                <VStack
                  width="25%"
                  spacing="0px"
                  borderRightWidth="1px"
                  className="border-CBlack"
                >
                  <Text className="text-CPrimary" fontSize="21px">
                    5+
                  </Text>
                  <Text fontSize="21px">Years</Text>
                </VStack>
                <VStack
                  width="25%"
                  spacing="0px"
                  borderRightWidth="1px"
                  className="border-CBlack"
                >
                  <Text className="text-CPrimary" fontSize="21px">
                    4.6
                  </Text>
                  <Text fontSize="21px">Review</Text>
                </VStack>
                <VStack
                  width="25%"
                  spacing="0px"
                  borderRightWidth="1px"
                  className="border-CBlack"
                >
                  <Text className="text-CPrimary" fontSize="21px">
                    60+
                  </Text>
                  <Text fontSize="21px">Client</Text>
                </VStack>
                <VStack width="25%" spacing="0px">
                  <Text className="text-CPrimary" fontSize="21px">
                    97
                  </Text>
                  <Text fontSize="21px">Project</Text>
                </VStack>
              </HStack>
            </Box>
          </VStack>
          <HStack
            width="35%"
            height="100%"
            alignItems="flex-end"
            pb="20px"
            justifyContent="center"
            spacing="20px"
          >
            <Link to={`${match.url}/${data.uuid}`}>
              <PrimaryButton name="View Profile" height="50px" />
            </Link>
            <Box
              w="50px"
              h="50px"
              className="w-full h-full rounded-full border-CPrimary flex justify-center items-center"
              borderWidth="1px"
            >
              <PhoneCall className="w-5 h-5" />
            </Box>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};
