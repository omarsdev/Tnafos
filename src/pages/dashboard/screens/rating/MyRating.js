import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams, Switch, Route, useRouteMatch } from "react-router-dom";

import { AxiosInstance } from "../../../../api";

const MyRating = () => {
  const [data, setData] = useState(null);
  const { uuid } = useParams();
  const match = useRouteMatch();

  const showRating = async () => {
    try {
      const res = await AxiosInstance.get(`/api/dashboard/rating/${uuid}`);
      console.log(res.data.data);
      setData(res.data.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    showRating();
  }, []);
  return (
    <Switch>
      <Route path={`${match.path}`}>
        <Box>
          <Text>{data}</Text>
        </Box>
      </Route>
    </Switch>
  );
};
export default MyRating;
