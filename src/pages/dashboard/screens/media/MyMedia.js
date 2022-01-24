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

const MyMedia = ({ service }) => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;
  const [media, setMedia] = useState(null);

  const [onOpen, setOnOpen] = useState(false);

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
            {media?.file_name}
          </Text>

          <Text fontSize="large" textColor="gray.600">
            UUID: {media?.uuid}
          </Text>
          <Text fontSize="large" textColor="gray.600">
            URL :{media?.url}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default MyMedia;
