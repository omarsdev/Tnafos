import {
  IconButton,
  Box,
  Text,
  Button,
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Center,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { AxiosInstance } from "../../../../api";

export const UserCard = () => {
  const [card, setCard] = useState(null);
  const { uuid } = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const [input, setInput] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [errors, setErrors] = useState(null);

  //* presenting user card info.
  const getUser = async () => {
    await AxiosInstance.get(`/api/dashboard/user/${uuid}`)
      .then((res) => {
        // console.log(res.data.data);
        setCard(res.data.data);
        setInput(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        history.push("/dashboard/user");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //* update function:
  const updateUserInfo = async (dataToBeUpdated) => {
    await AxiosInstance.put(`/api/dashboard/user/${uuid}`, dataToBeUpdated)
      .then((res) => {
        console.log(res);
        history.push(`/dashboard/user`);
      })
      .catch((err) => {
        setErrors(err.response.data.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  return (
    <>
      <Switch>
        <Route exact path={`${match.path}`}>
          {/* representing user credencials */}
          <Center>
            <Box
              mt="30px"
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"2xl"}
                src={
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                }
                alt="user-img"
                mb={4}
                pos={"relative"}
              />

              <Text fontSize={"2xl"} py="4">
                {card?.first_name}
                {card?.last_name}
              </Text>
              <Text className="py-2 text-gray-600">
                Telephone: {card?.phone_number}
              </Text>
              <Text className="py-2 text-gray-600">E-mail: {card?.email}</Text>
              <Text className="py-2 text-gray-600">Id :{card?.uuid}</Text>

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
            </Box>
          </Center>

          {/* updating user info. */}

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

                <DrawerBody>
                  <form onSubmit={(ev) => updateUserInfo(ev)}>
                    <label className="w-32 text-right text-gray-500 ">
                      First Name :
                      <Input
                        size="md"
                        type="text"
                        name="first_name"
                        value={input.first_name}
                        onChange={(ev) => handleChange(ev)}
                        focusBorderColor="#F8B916"
                        required
                      />
                    </label>

                    <label className="w-32 text-right text-gray-500 ">
                      Last Name:
                      <Input
                        size="md"
                        type="text"
                        name="last_name"
                        value={input.last_name}
                        onChange={(ev) => handleChange(ev)}
                        focusBorderColor="#F8B916"
                        required
                      />
                    </label>

                    <label className="w-32 text-right text-gray-500 ">
                      Phone Number:
                      <Input
                        size="md"
                        type="number"
                        name="phone_number"
                        value={input.phone_number}
                        onChange={(ev) => handleChange(ev)}
                        focusBorderColor="#F8B916"
                        required
                      />
                    </label>

                    <label className="w-32 text-right text-gray-500">
                      Email:
                      <Input
                        size="md"
                        type="email"
                        name="email"
                        value={input.email}
                        required
                        placeholder="info@company.com"
                        onChange={(ev) => handleChange(ev)}
                        focusBorderColor="#F8B916"
                      />
                    </label>
                    <HStack mt="5">
                      <Button colorScheme="yellow" textColor="white">
                        UPDATE
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
    </>
  );
};
