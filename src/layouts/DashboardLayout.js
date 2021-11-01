import React from "react";

import {
  FooterDashboard,
  NavbarDashboard,
  SideBarDashboard,
} from "../partials";

export const DashboardLayout = () => {
  return (
    <div>
      <FooterDashboard />
      <NavbarDashboard />
      <SideBarDashboard />
    </div>
  );
};
