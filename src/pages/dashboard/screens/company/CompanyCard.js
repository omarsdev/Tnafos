import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const CompanyCard = ({ Data }) => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={3}
      h="150px"
    >
      <GridItem rowSpan={3} colSpan={2}>
        <Table
          variant="simple"
          colorScheme="gray"
          border="silver"
          borderRadius="2xl"
          boxShadow="2xl"
          borderWidth="2px"
          w="fit-content"
          size="sm"
        >
          <Thead bg="orange.50">
            <Th
              fontWeight="medium"
              fontSize="large"
              fontFamily="inhirit"
              textColor="yellow.500"
            >
              Company Profile
            </Th>
            <Th></Th>
          </Thead>

          <Tbody>
            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Company Name
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data?.name}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Type
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.type}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                CR Number
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.cr}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                VAT Number
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.vat}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Establishment Year
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.establishment_year}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Total Employees
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.total_employees}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Bio
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.bio}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Telephone
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.telephone}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Fax
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.fax}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                e-mail
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.email}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Website
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.website}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                City
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.city}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                po-box
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.po_box}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                ZIP code
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.zip_code}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Address
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.address}
              </Td>
            </Tr>

            <Tr>
              <Td fontSize="x-small" textColor="yellow.600">
                Location
              </Td>
              <Td fontSize="x-small" textColor="gray.600">
                {Data.location}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </GridItem>
    </Grid>
  );
};
