import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import { CompanyCard, CreateCompany } from "./";
import {
  HStack,
  Box,
  useColorModeValue,
  Text,
  Heading,
  Button,
  VStack,
  Divider,
  Icon,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { FaStar, FaSync } from "react-icons/fa";
import { AxiosInstance } from "api/AxiosInstance";

export const CompanyHome = () => {
  const [companyInfo, setcompanyInfo] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState(null);
  const history = useHistory();
  const match = useRouteMatch();
  const [errors, setErrors] = useState(null);

  //* represent company data:
  const showCompany = async () => {
    await AxiosInstance.get("/api/dashboard/company")
      .then((res) => {
        console.log(res);
        setcompanyInfo(res.data.data);
        let company = res.data.data;
        console.log(company);
        delete company.country;
        delete company.admin;
        delete company.category;
        setInput(company);
      })
      .catch((err) => {
        return {
          success: false,
          error: err,
        };
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //* update company info:
  const updateCompany = async (dataToBeUpdated) => {
    await AxiosInstance.put("/api/dashboard/company/update", dataToBeUpdated)
      .then((res) => {
        console.log(res);
        history.push(`/dashboard/company`);
      })
      .catch((err) => setErrors(err));
  };

  useEffect(() => {
    showCompany();
  }, []);

  return (
    <>
      <Switch>
        {/* Company Home Content */}
        <Route exact path={`${match.path}`}>
          <Box w="full" h="fit-content">
            <Heading
              textColor="gray.600"
              fontSize="xx-large"
              fontWeight="lg"
              alignItems="baseline"
              ml="5"
              py="5"
            >
              Company
            </Heading>

            <Flex h="large" spacing="200">
              <CompanyCard Data={companyInfo} />

              <VStack w="full" spacing="5" mt="5">
                <Box width="44">
                  <Button
                    onClick={onOpen}
                    leftIcon={<FiEdit />}
                    rounded={"lg"}
                    size={"md"}
                    fontWeight={"normal"}
                    px={4}
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
                  >
                    Update Company
                  </Button>
                </Box>
                <Box
                  width="44"
                  bg={useColorModeValue("white", "gray.900")}
                  border="silver"
                  borderRadius="2xl"
                  boxShadow="2xl"
                  borderWidth="2px"
                  rounded="lg"
                  textAlign={"center"}
                  h="32"
                  mt="10px"
                >
                  <Text
                    fontSize="LG"
                    bg="gray.100"
                    roundedTop="lg"
                    textColor="gray.700"
                    fontFamily="inherit"
                    fontWeight="medium"
                    paddingY="1"
                  >
                    Review
                  </Text>
                  <Divider />
                  <VStack spacing={0}>
                    <HStack>
                      <Text
                        textColor="#F8B916"
                        fontSize="lg"
                        alignItems="baseline"
                        fontWeight="medium"
                        py="3"
                      >
                        rating
                      </Text>
                      <Icon textColor="#F8B916">
                        <FaStar size="medium" />
                      </Icon>
                    </HStack>
                    <Button
                      leftIcon={<FaSync />}
                      rounded="full"
                      fontWeight={"normal"}
                      px={4}
                      colorScheme={"white"}
                      size="sm"
                      textColor="gray.600"
                      borderColor="#F8B916"
                      borderWidth="2px"
                    >
                      VIEW ALL
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </Flex>
          </Box>

          {/* company update */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                fontWeight="medium"
                fontSize="large"
                fontFamily="inhirit"
                textColor="#F8B916"
              >
                Update your company info
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {input && (
                  <form onSubmit={(ev) => updateCompany(ev)}>
                    <label className="block text-gray-500 font-normal pl-1">
                      Company Name
                      <Input
                        size="md"
                        name="name"
                        value={input.name}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Type
                      <Input
                        size="md"
                        name="type"
                        value={input.type}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      CR Number
                      <Input
                        size="md"
                        name="cr"
                        value={input.cr}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      VAT Number
                      <Input
                        size="md"
                        name="vat"
                        value={input.vat}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Establishment Year
                      <Input
                        size="md"
                        name="establishment_year"
                        value={input.establishment_year}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Total Employees
                      <Input
                        size="md"
                        name="total_employees"
                        value={input.total_employees}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Bio
                      <Input
                        size="md"
                        name="bio"
                        value={input.bio}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Telephone
                      <Input
                        size="md"
                        name="telephone"
                        value={input.telephone}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Fax
                      <Input
                        size="md"
                        name="fax"
                        value={input.fax}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      e-mail
                      <Input
                        size="md"
                        name="email"
                        value={input.email}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Website
                      <Input
                        size="md"
                        name="website"
                        value={input.website}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Country-Id
                      <Input
                        size="md"
                        name="country_id"
                        value={input.country_id}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      City
                      <Input
                        size="md"
                        name="city"
                        value={input.city}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      po_box
                      <Input
                        size="md"
                        name="po_box"
                        value={input.po_box}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      ZIP_code
                      <Input
                        size="md"
                        name="zip_code"
                        value={input.zip_code}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Address
                      <Input
                        size="md"
                        name="address"
                        value={input.address}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Location:
                      <Input
                        size="md"
                        name="location"
                        value={input.location}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>

                    <label className="block text-gray-500 font-normal pl-1">
                      Category-Id
                      <Input
                        size="md"
                        name="category_id"
                        value={input.category_id}
                        onChange={(ev) => handleChange(ev)}
                      />
                    </label>
                  </form>
                )}
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  update
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  CANCEL
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Route>
        <Route path={`${match.path}/create`} component={CreateCompany} />
      </Switch>
    </>
  );
};
