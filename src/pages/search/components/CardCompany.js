import React from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  useMediaQuery,
  Flex,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { PhoneCall } from "react-feather";
import { Link, useRouteMatch } from "react-router-dom";

import Login from "../../../assets/images/login.jpg";
import { PrimaryButton } from "../../../components";

export const CardCompany = ({ data }) => {
  const match = useRouteMatch();
  const [isMobile] = useMediaQuery("(max-width: 1200px)");

  return (
    <Flex
      rounded="3xl"
      borderColor="brand.primary"
      shadow="xl"
      h={!isMobile ? "56" : "auto"}
      w="full"
      flexDirection={{ lg: "row", base: "column" }}
    >
      <Flex flex="1">
        <Image
          src={Login}
          alt="Segun Adebayo"
          objectFit="cover"
          rounded="3xl"
          w="100%"
          h={{ lg: "100%", base: "200px" }}
        />
      </Flex>
      <Flex flex="3">
        <Box h="full" w="100%">
          <Text mt=".5rem" ml=".8rem">
            Company Name
          </Text>
          <Box h="20" overflow="hidden">
            <Text mt=".5rem" ml=".8rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum aut minima eaque repellat quia labore officia placeat
              nobis maiores tempora, reiciendis deserunt cum reprehenderit
              explicabo itaque, voluptates repellendus expedita obcaecati!
            </Text>
          </Box>
          <Flex w="100%" mt="5" flexDirection={isMobile && "column"}>
            <HStack
              w={
                isMobile
                  ? { base: "100%", lg: "100%" }
                  : { base: "100%", lg: "90%" }
              }
            >
              <VStack
                width="25%"
                spacing="0px"
                borderRightWidth="1px"
                borderColor="brand.black"
              >
                <Text
                  color="brand.primary"
                  fontSize={{ md: "21px", base: "16px" }}
                >
                  5+
                </Text>
                <Text fontSize={{ md: "21px", base: "16px" }}>Years</Text>
              </VStack>
              <VStack
                width="25%"
                spacing="0px"
                borderRightWidth="1px"
                borderColor="brand.black"
              >
                <Text
                  color="brand.primary"
                  fontSize={{ md: "21px", base: "16px" }}
                >
                  4.6
                </Text>
                <Text fontSize={{ md: "21px", base: "16px" }}>Review</Text>
              </VStack>
              <VStack
                width="25%"
                spacing="0px"
                borderRightWidth="1px"
                borderColor="brand.black"
              >
                <Text
                  color="brand.primary"
                  fontSize={{ md: "21px", base: "16px" }}
                >
                  60+
                </Text>
                <Text fontSize={{ md: "21px", base: "16px" }}>Client</Text>
              </VStack>
              <VStack width="25%" spacing="0px">
                <Text
                  color="brand.primary"
                  fontSize={{ md: "21px", base: "16px" }}
                >
                  97
                </Text>
                <Text fontSize={{ md: "21px", base: "16px" }}>Project</Text>
              </VStack>
            </HStack>

            <Center
              h="100%"
              my="1rem"
              px={isMobile ? "10%" : "1rem"}
              w={isMobile ? { md: "100%" } : { md: "100%", lg: "auto" }}
            >
              <Link to={`${match.url}/${data.uuid}`}>
                <PrimaryButton name="View Profile" height="50px" />
              </Link>
              {!isMobile && <Box w="20px" />}
              <Spacer />
              <Box
                w="50px"
                h="50px"
                rounded="full"
                borderColor="brand.primary"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderWidth="1px"
              >
                <PhoneCall w="5" h="5" />
              </Box>
            </Center>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
