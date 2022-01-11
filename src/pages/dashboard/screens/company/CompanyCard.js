import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

const CompanyCard = ({ Data }) => {
  return (
    <Table
      variant="simple"
      colorScheme="gray"
      border="silver"
      borderRadius="3xl"
      boxShadow="2xl"
      borderWidth="2px"
      w="600px"
      h="700px"
      ml="10"
    >
      <Thead height="14">
        <Tr>
          <Th
            bg="gray.200"
            roundedTopLeft="lg"
            textColor="gray.700"
            paddingY="2"
            pl="2"
          >
            Company Profile
          </Th>
          <Th
            bg="gray.200"
            roundedTopRight="lg"
            textColor="gray.700"
            textAlign="start"
            paddingY="2"
            pl="2"
          />
        </Tr>
      </Thead>

      <Tbody>
        <Tr blockSize="max-content">
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Company Name
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data?.name}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Type
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.type}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            CR Number
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.cr}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            VAT Number
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.vat}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Establishment Year
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.establishment_year}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Total Employees
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.total_employees}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Bio
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.bio}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Telephone
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.telephone}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Fax
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.fax}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            e-mail
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.email}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Website
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.website}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            City
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.city}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            po-box
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.po_box}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            ZIP code
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.zip_code}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Address
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.address}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="meduim" textColor="blue.400" pl="2">
            Location
          </Td>
          <Td fontSize="meduim" textColor="gray.600">
            {Data.location}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default CompanyCard;
