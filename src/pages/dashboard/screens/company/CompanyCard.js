import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

export const CompanyCard = ({ Data }) => {
  return (
    <Table
      variant="simple"
      colorScheme="gray"
      border="silver"
      borderRadius="2xl"
      boxShadow="2xl"
      borderWidth="2px"
      size="simple"
      ml="10"
    >
      <Thead bg="orange.50">
        <Th
          fontWeight="medium"
          fontSize="large"
          fontFamily="inhirit"
          textColor="yellow.500"
          paddingY="2"
          pl="2"
        >
          Company Profile
        </Th>
        <Th></Th>
      </Thead>

      <Tbody>
        <Tr blockSize="max-content">
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Company Name
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data?.name}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Type
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.type}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            CR Number
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.cr}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            VAT Number
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.vat}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Establishment Year
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.establishment_year}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Total Employees
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.total_employees}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Bio
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.bio}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Telephone
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.telephone}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Fax
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.fax}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            e-mail
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.email}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Website
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.website}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            City
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.city}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            po-box
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.po_box}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            ZIP code
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.zip_code}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Address
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.address}
          </Td>
        </Tr>

        <Tr>
          <Td fontSize="small" textColor="yellow.600" pl="2">
            Location
          </Td>
          <Td fontSize="small" textColor="gray.600">
            {Data.location}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
