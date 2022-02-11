import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddProposal from "./AddProposal";

import ConvertToEstimate from "./ConvertToEstimate";
import IncomingProposal from "./IncomingProposal";
import OutgoingProposal from "./OutgoingProposal";
import ProposalCard from "./ProposalCard";
import ProposalHome from "./ProposalHome";
import UpdateStatus from "./UpdateStatus";

const ProposalLayout = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ProposalHome} />
      <Route exact path={`${match.path}/addproposal`} component={AddProposal} />

      <Route path={`${match.path}/outgoing`} component={OutgoingProposal} />
      <Route path={`${match.path}/incoming`} component={IncomingProposal} />

      <Route path={`${match.path}/incoming/:uuid`} component={ProposalCard} />
      <Route
        path={`${match.path}/incoming/:uuid/convert-to-estimate`}
        component={ConvertToEstimate}
      />
      <Route
        path={`${match.path}/incoming/:uuid/update-status`}
        component={UpdateStatus}
      />

      <Route path={`${match.path}/outgoing/:uuid`} component={ProposalCard} />
      <Route
        path={`${match.path}/outgoing/:uuid/convert-to-estimate`}
        component={ConvertToEstimate}
      />
      <Route
        path={`${match.path}/outgoing/:uuid/update-status`}
        component={UpdateStatus}
      />
    </Switch>
  );
};
export default ProposalLayout;
