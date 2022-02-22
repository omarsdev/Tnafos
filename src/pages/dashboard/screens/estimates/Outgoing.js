import React, { Fragment, useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

import { useHistory } from "react-router-dom";

import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { AxiosInstance } from "api";

const Outgoing = () => {
  const history = useHistory();

  const [list, setList] = useState(null);

  const getOutgoingEst = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/estimate/outgoing");

      const rowData = [];

      res.data.data.forEach(element => {
        rowData.push({
          uuid: element.uuid,
          subject: element.subject,
          status: element.status,
          date: element.date,
          total: element.total,
        })
      });

      setList({
        columns: [
          { Header: "uuid", accessor: "uuid" },
          {
            Header: "subject",
            accessor: "subject",
          },
          {
            Header: "status",
            accessor: "status",
          },
          {
            Header: "date",
            accessor: "date",
          },
          {
            Header: "total",
            accessor: "total",
          },
        ],
        rows: rowData
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOutgoingEst();
  }, []);

  return list && (
    <Fragment>
      <SuiBox my={3}>
        <Card>
          <DataTable table={list} entriesPerPage={false} canSearch />
        </Card>
      </SuiBox>
      <Footer />
    </Fragment>
  )
}

export default Outgoing