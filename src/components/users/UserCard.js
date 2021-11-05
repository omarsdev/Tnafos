import { IconButton, Link } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { getUser } from "../../../../../../utils";
import { UpdateUser } from "./";

export const UserCard = () => {
    const [card, setCard] = useState(null);
  const { uuid } = useParams();
  const history = useHistory();
  const match = useRouteMatch();

  const Details = async () => {
    const resp = await getUser(uuid);

    if (resp.success) {
      setCard(resp.data);
    } else if (!resp.success && resp.error) {
      history.push("/dashboard/user");
    } else if (!resp.success && !resp.error) {
      history.push("/");
    }
  };
  useEffect(() => {
    Details();
  }, []);

    return (
        <>
        <Switch>
        <Route exact path={`${match.path}`}>
            <Box>
                <Link>
                    <IconButton colorScheme="blue" icon={<EditIcon />}/>
                </Link>
                <Box>
                  <Box>First Name: {card?.first_name}</Box>
                  <Box>Last Name:{card?.last_name}</Box>
                  <Box>Telephone: {card?.phone_number}</Box>
                  <Box>E-mail: {card?.email}</Box>
                  <Box>Id :{card?.uuid}</Box>
                </Box>
            </Box>
        </Route>
        <Route path={`${match.path}/updateuser`} component={UpdateUser} />
        </Switch>
        </>
    )
}
