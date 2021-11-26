import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import {
  Box,
  IconButton,
  Center,
  useColorModeValue,
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
  Divider,
} from "@chakra-ui/react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { AxiosInstance } from "api/AxiosInstance";

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
        // delete service.category;
        // delete service.name;
        // delete service.description;
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
            w="96"
            bg={useColorModeValue("white", "gray.900")}
            border="silver"
            borderRadius="2xl"
            boxShadow="2xl"
            borderWidth="2px"
            rounded="lg"
            textAlign={"center"}
            h="72"
            mt="10px"
          >
            <Text
              fontSize="LG"
              bg="gray.50"
              roundedTop="lg"
              textColor="gray.700"
              fontWeight="medium"
              paddingY="1"
              textAlign="start"
              ml="5"
            >
              Service
            </Text>
            <Divider />
            <VStack spacing={"1px"}>
              <Text fontSize="4xl" mb={2} color="gray.700" mt="2">
                {service?.name}
              </Text>
              <stack className="text-blue-400 text-xs">
                Price:
                <Text color={"gray.400"} mb={2} fontSize="large">
                  {service?.price} SAR
                </Text>
              </stack>
              <Text color={"gray.700"} mb={2}>
                Description:{service?.description}{" "}
              </Text>
              <Text color={"gray.700"} mb={2}>
                Category-id: {service?.category.uuid}{" "}
              </Text>
              <Text color={"gray.700"} mb={2}>
                Type :{service?.type}
              </Text>

              <Button
                p="1px"
                fontSize={"sm"}
                rounded={"full"}
                bg={"#F8B916"}
                color="white"
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "#D59B06",
                }}
                _focus={{
                  bg: "#D59B06",
                }}
                width="12"
                height="12"
                onClick={onOpen}
              >
                <Text>
                  <FiEdit />
                </Text>
              </Button>
            </VStack>
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
              <DrawerHeader borderBottomWidth="1px" color="#F8B916">
                Edit your Info by filling up this form
              </DrawerHeader>

              <DrawerBody mt="10">
                <form onSubmit={(ev) => updateService(ev)}>
                  <label className="w-32 text-right text-gray-500 ">
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

                  <label className="w-32 text-right text-gray-500">
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
                    <Button
                      colorScheme="yellow"
                      size="md"
                      textColor="white"
                      type="submit"
                    >
                      UPDATE SERVICE
                    </Button>
                    <Button
                      onClick={handleCancel}
                      color="gray"
                      _hover={{ bg: "#D1D5DB" }}
                      size="md"
                    >
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
