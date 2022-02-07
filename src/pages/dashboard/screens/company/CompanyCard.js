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
    >
      <Thead height={{ base: 8, md: 12 }}>
        <Tr>
          <Th
            bg="#333333"
            roundedTopLeft="lg"
            textColor="white"
            paddingY="2px"
            pl="10px"
            fontSize={{
              base: "xx-small",
              sm: "x-small",
              md: "small",
              lg: "small",
            }}
          >
            Company Profile
          </Th>
          <Th
            bg="#333333"
            roundedTopRight="lg"
            textColor="white"
            textAlign="start"
            paddingY="2px"
            pl="2"
          />
        </Tr>
      </Thead>

      <Tbody
        fontSize={{ base: "xx-small", sm: "x-small", md: "small", lg: "small" }}
      >
        <Tr blockSize="max-content">
          <Td textColor="blue.400" pl="2">
            Company Name
          </Td>
          <Td textColor="gray.600">{Data?.name}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Type
          </Td>
          <Td textColor="gray.600">{Data.type}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            CR Number
          </Td>
          <Td textColor="gray.600">{Data.cr}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            VAT Number
          </Td>
          <Td textColor="gray.600">{Data.vat}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Establishment Year
          </Td>
          <Td textColor="gray.600">{Data.establishment_year}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Total Employees
          </Td>
          <Td textColor="gray.600">{Data.total_employees}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Bio
          </Td>
          <Td textColor="gray.600">{Data.bio}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Telephone
          </Td>
          <Td textColor="gray.600">{Data.telephone}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Fax
          </Td>
          <Td textColor="gray.600">{Data.fax}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            e-mail
          </Td>
          <Td textColor="gray.600">{Data.email}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Website
          </Td>
          <Td textColor="gray.600">{Data.website}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            City
          </Td>
          <Td textColor="gray.600">{Data.city}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            po-box
          </Td>
          <Td textColor="gray.600">{Data.po_box}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            ZIP code
          </Td>
          <Td textColor="gray.600">{Data.zip_code}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Address
          </Td>
          <Td textColor="gray.600">{Data.address}</Td>
        </Tr>

        <Tr>
          <Td textColor="blue.400" pl="2">
            Location
          </Td>
          <Td textColor="gray.600">{Data.location}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default CompanyCard;
