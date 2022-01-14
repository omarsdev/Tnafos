// TODO update purchaes

import React from "react";

import { FiMenu } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

import { BiCog, BiUser, BiLineChart } from "react-icons/bi";
import { BsListCheck, BsCurrencyExchange } from "react-icons/bs";

import { VscTools } from "react-icons/vsc";
import { GiMoneyStack } from "react-icons/gi";

import { ImLibrary } from "react-icons/im";

const SidebarMenu = [
  {
    id: 1,
    heading: null,
    items: [
      {
        id: 1,
        title: "Dashboard",
        icon: <FiMenu />,
        to: "/",
        items: null,
      },
    ],
  },
  {
    id: 2,
    heading: "Organization",
    items: [
      {
        id: 1,
        title: "Company",
        icon: <ImLibrary />,
        to: "/company",
        items: null,
      },
      {
        id: 2,
        title: "Users",
        icon: <BiUser />,
        to: "/user",
        items: null,
      },
      {
        id: 3,
        title: "Services",
        icon: <VscTools />,
        to: "/service",
        items: null,
      },
      {
        id: 7,
        title: "Media",
        icon: <VscTools />,
        to: "/media",
        items: null,
      },
    ],
  },
  {
    id: 3,
    heading: "Contacts",
    items: [
      {
        id: 1,
        title: "Customers",
        icon: <VscTools />,
        to: "/client",
        items: null,
      },
      {
        id: 2,
        title: "Supplier",
        icon: <VscTools />,
        to: "/",
        items: null,
      },
      {
        id: 3,
        title: "Leads",
        icon: <VscTools />,
        to: "/",
        items: null,
      },
      {
        id: 4,
        title: "All Contacts",
        icon: <VscTools />,
        to: "/",
        items: null,
      },
    ],
  },
  {
    id: 4,
    heading: "Documents",
    items: [
      {
        id: 1,
        title: "Purchase Requests",
        icon: <BsListCheck />,
        to: null,
        items: [
          {
            id: 1,
            title: "Incoming",
            icon: null,
            to: "/purchase-request/incoming",
            items: null,
          },
          {
            id: 1,
            title: "Outgoing",
            icon: null,
            to: "/purchase-request/outgoing",
            items: null,
          },
        ],
      },
      {
        id: 2,
        title: "Estimates",
        icon: <BiLineChart />,
        to: null,
        items: [
          {
            id: 1,
            title: "Incoming",
            icon: null,
            to: "/estimate/incoming",
            items: null,
          },
          {
            id: 1,
            title: "Outgoing",
            icon: null,
            to: "/estimate/outgoing",
            items: null,
          },
        ],
      },
      {
        id: 3,
        title: "Invoices",
        icon: <BsCurrencyExchange />,
        to: null,
        items: [
          {
            id: 1,
            title: "Incoming",
            icon: null,
            to: "/invoice/incoming",
            items: null,
          },
          {
            id: 1,
            title: "Outgoing",
            icon: null,
            to: "/invoice/outgoing",
            items: null,
          },
        ],
      },
      {
        id: 4,
        title: "Proposal",
        icon: <BsCurrencyExchange />,
        to: null,
        items: [
          {
            id: 1,
            title: "Incoming",
            icon: null,
            to: "/proposal/incoming",
            items: null,
          },
          {
            id: 1,
            title: "Outgoing",
            icon: null,
            to: "/proposal/outgoing",
            items: null,
          },
        ],
      },
      {
        id: 5,
        title: "Payments",
        icon: <BsCurrencyExchange />,
        to: "/payment",
        items: null,
      },
    ],
  },
  {
    id: 5,
    heading: "App Settings",
    items: [
      {
        id: 1,
        title: "Settings",
        icon: <VscTools />,
        to: "/settings",
        items: null,
      },
      {
        id: 2,
        title: "Lead Sources",
        icon: <VscTools />,
        to: "/",
        items: null,
      },
    ],
  },
];

export default SidebarMenu;
