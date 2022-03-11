/**
=========================================================
* Soft UI Dashboard PRO React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import React from 'react'

// Soft UI Dashboard PRO React layouts
// import Default from "layouts/dashboards/default";
// import Automotive from "layouts/dashboards/automotive";
// import SmartHome from "layouts/dashboards/smart-home";
// import VRDefault from "layouts/dashboards/virtual-reality/vr-default";
// import VRInfo from "layouts/dashboards/virtual-reality/vr-info";
// import CRM from "layouts/dashboards/crm";
// import ProfileOverview from "layouts/pages/profile/profile-overview";
// import Teams from "layouts/pages/profile/teams";
// import AllProjects from "layouts/pages/profile/all-projects";
// import Reports from "layouts/pages/users/reports";
// import NewUser from "layouts/pages/users/new-user";
// import Settings from "layouts/pages/account/settings";
// import Billing from "layouts/pages/account/billing";
// import Invoice from "layouts/pages/account/invoice";
// import Security from "layouts/pages/account/security";
// import General from "layouts/pages/projects/general";
// import Timeline from "layouts/pages/projects/timeline";
// import NewProject from "layouts/pages/projects/new-project";
// import Widgets from "layouts/pages/widgets";
// import Charts from "layouts/pages/charts";
// import SweetAlerts from "layouts/pages/sweet-alerts";
// import Notifications from "layouts/pages/notifications";
// import PricingPage from "layouts/pages/pricing-page";
// import RTL from "layouts/pages/rtl";
// import Kanban from "layouts/applications/kanban";
// import Wizard from "layouts/applications/wizard";
// import DataTables from "layouts/applications/data-tables";
// import Calendar from "layouts/applications/calendar";
// import Analytics from "layouts/applications/analytics";
// import Overview from "layouts/ecommerce/overview";
// import NewProduct from "layouts/ecommerce/products/new-product";
// import EditProduct from "layouts/ecommerce/products/edit-product";
// import ProductPage from "layouts/ecommerce/products/product-page";
// import ProductsList from "layouts/ecommerce/products/products-list";
// import OrderList from "layouts/ecommerce/orders/order-list";
// import OrderDetails from "layouts/ecommerce/orders/order-details";
// import Referral from "layouts/ecommerce/referral";
// import SignInBasic from "layouts/authentication/sign-in/basic";
// import SignInCover from "layouts/authentication/sign-in/cover";
// import SignInIllustration from "layouts/authentication/sign-in/illustration";
// import SignUpBasic from "layouts/authentication/sign-up/basic";
// import SignUpCover from "layouts/authentication/sign-up/cover";
// import SignUpIllustration from "layouts/authentication/sign-up/illustration";
// import ResetBasic from "layouts/authentication/reset-password/basic";
// import ResetCover from "layouts/authentication/reset-password/cover";
// import ResetIllustration from "layouts/authentication/reset-password/illustration";
// import LockBasic from "layouts/authentication/lock/basic";
// import LockCover from "layouts/authentication/lock/cover";
// import LockIllustration from "layouts/authentication/lock/illustration";
// import VerificationBasic from "layouts/authentication/2-step-verification/basic";
// import VerificationCover from "layouts/authentication/2-step-verification/cover";
// import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
// import Error404 from "layouts/authentication/error/404";
// import Error500 from "layouts/authentication/error/500";

import DashboardHome from "./screens/home/DashboardHome"
import CompanyLayout from "./screens/company/CompanyLayout"

// // Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
// import Office from "examples/Icons/Office";
// import SettingsIcon from "examples/Icons/Settings";
// import Basket from "examples/Icons/Basket";
// import Document from "examples/Icons/Document";
// import SpaceShip from "examples/Icons/SpaceShip";
// import CustomerSupport from "examples/Icons/CustomerSupport";
// import CreditCard from "examples/Icons/CreditCard";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboard",
        component: DashboardHome,
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Organization", key: "title-1" },
  {
    type: "collapse",
    name: "Company",
    key: "company",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Company",
        key: "company",
        route: "/dashboard/company"
      },
    ],
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "User",
        key: "user",
        route: "/dashboard/user"
      },
    ],
  },
  {
    type: "collapse",
    name: "Service",
    key: "service",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Service",
        key: "service",
        route: "/dashboard/service"
      },
    ],
  },
  {
    type: "collapse",
    name: "Customer",
    key: "customer",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Customer",
        key: "customer",
        route: "/dashboard/customer"
      },
    ],
  },
  {
    type: "collapse",
    name: "Contact",
    key: "contact",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Contact",
        key: "contact",
        route: "/dashboard/contact"
      },
    ],
  },
  { type: "divider", key: "divider-2" },
  { type: "title", title: "Documents", key: "title-2" },
  {
    type: "collapse",
    name: "Purchase Requests",
    key: "purchase-requests",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Incoming",
        key: "purchase-requests-incoming",
        route: "/dashboard/purchase-requests/incoming"
      },
      {
        name: "Outgoing",
        key: "purchase-requests-outgoing",
        route: "/dashboard/purchase-requests/outgoing"
      },
      {
        name: "Create",
        key: "purchase-requests-create",
        route: "/dashboard/purchase-requests/create"
      },
    ],
  },
  {
    type: "collapse",
    name: "Estimates",
    key: "estimates",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Incoming",
        key: "estimates-incoming",
        route: "/dashboard/estimates/incoming"
      },
      {
        name: "Outgoing",
        key: "estimates-outgoing",
        route: "/dashboard/estimates/outgoing"
      },
      {
        name: "Create",
        key: "create",
        route: "/dashboard/estimates/create"
      },
    ],
  },
  {
    type: "collapse",
    name: "Invoices",
    key: "invoices",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Incoming",
        key: "invoices-incoming",
        route: "/dashboard/invoices/incoming"
      },
      {
        name: "Outgoing",
        key: "invoices-outgoing",
        route: "/dashboard/invoices/outgoing"
      },
    ],
  },
];

export default routes;
