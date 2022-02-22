import React, { Fragment, useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

import { useHistory } from "react-router-dom";

import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { AxiosInstance } from "api";

const Incoming = () => {
  const history = useHistory();

  const [list, setList] = useState(null);

  const purIncomingList = async () => {
    await AxiosInstance.get(
      "/api/dashboard/purchase-request/incoming"
    ).then((res) => {
      const rowData = [];
      res.data.data.forEach(element => {
        let services = '';
        element.services.forEach(e => {
          services = `${services}${services.length !== 0 ? ", " : ""}${e.service.name}`
        });
        rowData.push({
          id: element.id.toString(),
          date: element.date,
          details: element.details,
          service: services
        })
      });
      setList({
        columns: [
          { Header: "id", accessor: "id" },
          {
            Header: "date",
            accessor: "date",
          },
          {
            Header: "details",
            accessor: "details",
          },
          {
            Header: "service",
            accessor: "service",
          },
        ],
        rows: rowData
      });
    }).catch((err) => {
      history.push("/dashboard/purchase-request");
    })
  };

  useEffect(() => {
    purIncomingList();
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
  );
}

export default Incoming