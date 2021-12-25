import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export const TableComponent = ({ payments }) => {
  return (
    <Table size="md">
      <Thead>
        <Tr>
          <Th>Amount</Th>
          <Th>Payment-number</Th>
          <Th>Payment-method</Th>
          <Th>Date</Th>
          <Th>Transaction-ID</Th>
          <Th>Notes</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{payments?.amount}</Td>
          <Td>{payments?.uuid}</Td>
          <Td>{payments?.method}</Td>
          <Td>{payments?.date}</Td>
          <Td>{payments?.transaction_number}</Td>
          <Td>{payments?.notes}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
