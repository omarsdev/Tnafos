import React, { useEffect, useState } from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import { showCompany, updateCompany } from "../../../../utils";
import { CompanyCard } from "./";
import {
  HStack,
  Box,
  useColorModeValue,
  Text,
  Heading,
  Button,
  VStack,
  Divider,
  Input,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { FaStar, FaSync } from "react-icons/fa";

export const CompanyHome = () => {
  const [companyInfo, setcompanyInfo] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState(null);
  const history = useHistory();
  //   const [errors, setErrors] = useState(null);

  const companyData = async () => {
    const result = await showCompany();
    console.log(result);
    setcompanyInfo(result.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const fetchData = async () => {
    const Data = await showCompany();
    if (Data.success) {
      let company = Data.data;
      delete company.country;
      delete company.admin;
      delete company.category;
      setInput(company);
      console.log(company);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const resp = await updateCompany(input);
    if (resp.success) {
      history.push(`/dashboard/company`);
    } else {
      console.log(resp);
      //   setErrors(resp);
    }
  };

  useEffect(() => {
    companyData();
    fetchData();
  }, []);

  return (
    <>
      {/* Company Home Content */}
      <Box w="full" h="fit-content">
        <Heading
          color="black"
          fontWeight="medium"
          fontSize="xx-large"
          fontFamily="inhirit"
          py="4"
          px="5"
          w="full"
          textColor="gray.600"
        >
          Company
        </Heading>

        <HStack w="full" spacing={44}>
          <CompanyCard Data={companyInfo} />
          <Box>
            <Box my="10" width="44">
              <Button
                onClick={onOpen}
                leftIcon={<FiEdit />}
                rounded={"lg"}
                size={"md"}
                fontWeight={"normal"}
                px={4}
                colorScheme={"red"}
                bg={"orange.300"}
                _hover={{ bg: "orange.400" }}
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
                    textColor="orange.300"
                    fontSize="lg"
                    alignItems="baseline"
                    fontWeight="medium"
                    py="3"
                  >
                    rating
                  </Text>
                  <Icon textColor="orange.300">
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
                  borderColor="orange.300"
                  borderWidth="2px"
                >
                  VIEW ALL
                </Button>
              </VStack>
            </Box>
          </Box>
        </HStack>
      </Box>

      {/* company update */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your company info</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="scroll">
            {input && (
              <form onSubmit={(ev) => handleUpdate(ev)}>
                <label className="block">
                  Company Name
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="name"
                    value={input.name}
                  />
                </label>

                <label className="block">
                  Type
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="type"
                    value={input.type}
                  />
                </label>

                <label className="block">
                  CR Number
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="cr"
                    value={input.cr}
                  />
                </label>

                <label className="block">
                  VAT Number
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="vat"
                    value={input.vat}
                  />
                </label>

                <label className="block">
                  Establishment Year
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="establishment_year"
                    value={input.establishment_year}
                  />
                </label>

                <label className="block">
                  Total Employees
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="total_employees"
                    value={input.total_employees}
                  />
                </label>

                <label className="block">
                  Bio
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="bio"
                    value={input.bio}
                  />
                </label>

                <label className="block">
                  Telephone
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="telephone"
                    value={input.telephone}
                  />
                </label>

                <label className="block">
                  Fax
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="fax"
                    value={input.fax}
                  />
                </label>

                <label className="block">
                  e-mail
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="email"
                    value={input.email}
                  />
                </label>

                <label className="block">
                  Website
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="website"
                    value={input.website}
                  />
                </label>

                <label className="block">
                  Country-Id
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="country_id"
                    value={input.country_id}
                  />
                </label>

                <label className="block">
                  City
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="city"
                    value={input.city}
                  />
                </label>

                <label className="block">
                  po_box
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="po_box"
                    value={input.po_box}
                  />
                </label>

                <label className="block">
                  ZIP_code
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="zip_code"
                    value={input.zip_code}
                  />
                </label>

                <label className="block">
                  Address
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="address"
                    value={input.address}
                  />
                </label>

                <label className="block">
                  Location:
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="location"
                    value={input.location}
                  />
                </label>

                <label className="block">
                  Logo:
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="logo"
                    value={input.logo}
                  />
                </label>

                <label className="block">
                  Category-Id
                  <Input
                    size="md"
                    onChange={(ev) => handleChange(ev)}
                    name="category_id"
                    value={input.category_id}
                  />
                </label>
              </form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              CANCEL
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
