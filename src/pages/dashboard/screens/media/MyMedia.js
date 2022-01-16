import React, { useEffect, useState, useContext } from "react";
import { FiEdit } from "react-icons/fi";
import {
  Box,
  IconButton,
  Center,
  Spinner,
  Text,
  useDisclosure,
  Stack,
  Flex,
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import {
  useHistory,
  useParams,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import { useForm } from "react-hook-form";
import { CustomEditForm, CustomAddForm } from "../../components";

import { AlertContext } from "../../../../context/AlertContext";
import { AxiosInstance, media } from "../../../../api";
import { SecondaryButton } from "../../../../components/button/SecondaryButton";

const MyMedia = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;
  const [media, setMedia] = useState(null);

  const history = useHistory();
  const match = useRouteMatch();

  const { uuid } = useParams();

  const getMyMedia = async () => {
    await AxiosInstance.get(`/api/dashboard/media/${uuid}`)
      .then((res) => {
        setMedia(res.data.data);
      })
      .catch((err) => {
        history.push("/dashboard/mediahome");
      });
  };

  useEffect(() => {
    getMyMedia();
  }, []);

  return !media ? (
    <Center h="70vh" w="100%">
      <Spinner size="xl" color="#F8B916" />
    </Center>
  ) : (
    <Center py="5">
      <Box
        className="rounded-3xl shadow-2xl relative bg-white"
        w="400px"
        h="500px"
      >
        <Image
          src={"https://bit.ly/sage-adebayo"}
          alt="Segun Adebayo"
          objectFit="cover"
          roundedTop="3xl"
          w="100%"
          h="220px"
          layout={"fill"}
        />
        <Stack mr="0" h="270px" mx="5%">
          <Text mt="1" fontSize="x-large" textColor="gray.600">
            {service?.name}
          </Text>
          <Text color="#007BFF">Price: {service?.price} SAR</Text>
          <Text fontSize="large" textColor="gray.600">
            Description:{service?.description}
          </Text>
          <Text fontSize="large" textColor="gray.600">
            Category-id: {service?.category.uuid}
          </Text>
          <Text fontSize="large" textColor="gray.600">
            Type :{service?.type}
          </Text>
          <Flex justify={"center"}>
            <IconButton
              justify={"center"}
              mb={3}
              fontSize={"large"}
              rounded={"full"}
              bg={"#F8B916"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "orange.400",
              }}
              _focus={{
                bg: "orange.400",
              }}
              icon={<FiEdit />}
              onClick={onOpen}
            />
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
};

export default MyMedia;
