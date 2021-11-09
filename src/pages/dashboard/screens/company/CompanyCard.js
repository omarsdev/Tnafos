import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export const CompanyCard = ({ Data }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Th textColor="blue.700">Company Profile</Th>
        <Th></Th>
      </Thead>

      <Tbody>
        <Tr>
          <Td>Company Name</Td>
          <Td>{Data?.name}</Td>
        </Tr>

        <Tr>
          <Td>Type</Td>
          <Td>{Data.type}</Td>
        </Tr>

        <Tr>
          <Td>CR Number</Td>
          <Td>{Data.cr}</Td>
        </Tr>

        <Tr>
          <Td>VAT Number</Td>
          <Td>{Data.vat}</Td>
        </Tr>

        <Tr>
          <Td>Establishment Year</Td>
          <Td>{Data.establishment_year}</Td>
        </Tr>

        <Tr>
          <Td>Total Employees</Td>
          <Td>{Data.total_employees}</Td>
        </Tr>

        <Tr>
          <Td>Bio</Td>
          <Td>{Data.bio}</Td>
        </Tr>

        <Tr>
          <Td>Telephone</Td>
          <Td>{Data.telephone}</Td>
        </Tr>

        <Tr>
          <Td>Fax</Td>
          <Td>{Data.fax}</Td>
        </Tr>

        <Tr>
          <Td>e-mail</Td>
          <Td>{Data.email}</Td>
        </Tr>

        <Tr>
          <Td>Website</Td>
          <Td>{Data.website}</Td>
        </Tr>

        <Tr>
          <Td>City</Td>
          <Td>{Data.city}</Td>
        </Tr>

        <Tr>
          <Td>po-box</Td>
          <Td>{Data.po_box}</Td>
        </Tr>

        <Tr>
          <Td>ZIP code</Td>
          <Td>{Data.zip_code}</Td>
        </Tr>

        <Tr>
          <Td>Address</Td>
          <Td>{Data.address}</Td>
        </Tr>

        <Tr>
          <Td>Location</Td>
          <Td>{Data.location}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
