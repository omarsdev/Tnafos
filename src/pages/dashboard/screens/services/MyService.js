import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import {
  Box,
  IconButton,
  Center,
  useColorModeValue,
  Heading,
  Text,
  useDisclosure,
  Input,
  VStack,
  HStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { AxiosInstance } from "../../../../utils";

export const MyService = () => {
  const [service, setService] = useState(null);
  const { uuid } = useParams();
  const match = useRouteMatch();

  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [input, setInput] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //* represent service card info:
  const getMyService = async () => {
    await AxiosInstance.get(`/api/dashboard/service/${uuid}`)
      .then((res) => {
        // console.log(res.data.data);
        setService(res.data.data);
        let service = res.data.data;
        console.log(service);
        delete service.category;
        delete service.name;
        delete service.description;
        setInput(service);
      })
      .catch((err) => {
        history.push("/dashboard/service");
      });
  };

  //* service update function:
  const updateService = async (dataToBeUpdataed) => {
    await AxiosInstance.put(
      `/api/dashboard/service/${uuid}/update`,
      dataToBeUpdataed
    )
      .then((res) => {
        console.log(res);
        history.push(`/dashboard/service`);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setErrors(err.response.data.message);
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

  useEffect(() => {
    getMyService();
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        {/* representing user credencials */}
        <Center>
          <Box
            mt="30px"
            maxW={"3xl"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Heading fontSize={"2xl"} fontFamily={"sans-serif"} mb={4}>
              Name of service:{service?.name}
            </Heading>
            <Text
              fontWeight={600}
              color={"gray.500"}
              mb={2}
              fontFamily={"sans-serif"}
            >
              Description:{service?.description}{" "}
            </Text>
            <Text
              fontWeight={600}
              color={"gray.500"}
              mb={2}
              fontFamily={"sans-serif"}
            >
              Price: {service?.price}{" "}
            </Text>
            <Text
              fontWeight={600}
              color={"gray.500"}
              mb={2}
              fontFamily={"sans-serif"}
            >
              Category-id: {service?.categoryid}{" "}
            </Text>
            <Text
              fontWeight={600}
              color={"gray.500"}
              mb={2}
              fontFamily={"sans-serif"}
            >
              Type :{service?.type}
            </Text>
            <Box>
              <IconButton
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                icon={<FiEdit />}
                onClick={onOpen}
              />
            </Box>
          </Box>
        </Center>

        {/* Updating service */}
        {input ? (
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Edit your Info by filling up this form
              </DrawerHeader>

              <DrawerBody mt="10">
                <form onSubmit={(ev) => updateService(ev)}>
                  <label className="w-32 text-right">
                    Price:
                    <Input
                      size="md"
                      type="text"
                      name="price"
                      value={input.price}
                      onChange={(ev) => handleChange(ev)}
                      required
                      m={"15px"}
                      w="52"
                    />
                  </label>

                  <label className="w-32 text-right">
                    Type:
                    <Input
                      size="md"
                      type="text"
                      name="type"
                      value={input.type}
                      onChange={(ev) => handleChange(ev)}
                      required
                      m={"15px"}
                      w="52"
                    />
                  </label>

                  <HStack mt="10">
                    <Button colorScheme="blue" size="md">
                      UPDATE SERVICE
                    </Button>
                    <Button onClick={handleCancel} colorScheme="gray" size="md">
                      CANCEL
                    </Button>
                  </HStack>
                </form>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ) : null}
      </Route>
    </Switch>
  );
};
