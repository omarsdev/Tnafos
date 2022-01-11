import React, { useState, useEffect } from "react";

import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { CustomTable } from "../../components";
import { AxiosInstance } from "api";
import { UpdatePurchase } from "./";

export const IncomingPurchases = () => {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [rowsNumber, setRowsNumber] = useState("10");

  const match = useRouteMatch();
  const history = useHistory();

  const purIncomingList = async () => {
    await AxiosInstance.get("/api/dashboard/purchase-request/incoming")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    history.push(`/${searchInput}`);
  };

  useEffect(() => {
    purIncomingList();
  }, []);
  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <CustomTable
          PageHeadLine="IncomingPurchases"
          list={list}
          component="purchase-request"
          theHeading="List of incoming purchase requests"
          theData={["Transaction-ID", "Details", "Date", "Service", "Action"]}
          listData={["uuid", "details", "date", "service[name]"]}
        />
      </Route>
      <Route path={`${match.path}/incoming/:uuid`} component={UpdatePurchase} />
    </Switch>
  );
};
