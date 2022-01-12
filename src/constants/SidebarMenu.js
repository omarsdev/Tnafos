// TODO update purchaes

import React from "react";

import { FiMenu } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

import { BiCog, BiUser, BiLineChart } from "react-icons/bi";
import { BsListCheck, BsCurrencyExchange } from "react-icons/bs";

import { VscTools } from "react-icons/vsc";
import { GiMoneyStack } from "react-icons/gi";

import { ImLibrary } from "react-icons/im";

export const updatedMneu = [
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
        to: "/users",
        items: null,
      },
      {
        id: 3,
        title: "Services",
        icon: <VscTools />,
        to: "/services",
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
        to: "/services",
        items: null,
      },
      {
        id: 2,
        title: "Supplier",
        icon: <VscTools />,
        to: "/services",
        items: null,
      },
      {
        id: 3,
        title: "Leads",
        icon: <VscTools />,
        to: "/leads",
        items: null,
      },
      {
        id: 4,
        title: "All Contacts",
        icon: <VscTools />,
        to: "/contacts",
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
            icon: 1,
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
            to: "/estimates/incoming",
            items: null,
          },
          {
            id: 1,
            title: "Outgoing",
            icon: 1,
            to: "/estimates/outgoing",
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
            to: "/invoices/incoming",
            items: null,
          },
          {
            id: 1,
            title: "Outgoing",
            icon: 1,
            to: "/invoices/outgoing",
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
            to: "/proposals/incoming",
            items: null,
          },
          {
            id: 1,
            title: "Outgoing",
            icon: 1,
            to: "/proposals/outgoing",
            items: null,
          },
        ],
      },
      {
        id: 5,
        title: "Payments",
        icon: <BsCurrencyExchange />,
        to: "/payments",
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
        to: "/services",
        items: null,
      },
      {
        id: 2,
        title: "Lead Sources",
        icon: <VscTools />,
        to: "/services",
        items: null,
      },
    ],
  },
];

const SidebarMenu = [
  {
    id: 0,
    title: "Dashboard",
    icon: <FiMenu />,
    to: "/",
    heading: null,
  },
  {
    id: 1,
    heading: "Organization",

    navitem: [
      {
        id: 0,
        title: "Company",
        icon: <ImLibrary />,
        to: "/company",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 1,
        title: "Users",
        icon: <BiUser />,
        to: "/user",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 2,
        title: "Services",
        icon: <VscTools />,
        to: "/service",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
    ],
  },
  {
    id: 2,
    heading: "Documents",
    navitem: [
      {
        id: 3,
        title: "Purchase Requests",
        icon: <BsListCheck />,
        submenu: [
          {
            title: "Incoming",
            to: "/purchase-request/incoming",
          },
          {
            title: "Outgoing",
            to: "/purchase-request/outgoing",
          },
        ],
      },
      {
        id: 4,
        title: "Estimates",
        icon: <BiLineChart />,
        submenu: [
          {
            title: "Incoming",
            to: "/estimate/incoming",
          },
          {
            title: "Outgoing",
            to: "/estimate/outgoing",
          },
        ],
      },
      {
        id: 5,
        title: "Invoices",
        icon: <BsCurrencyExchange />,
        submenu: [
          {
            title: "Incoming",
            to: "/invoice/incoming",
          },
          {
            title: "Outgoing",
            to: "/invoice/outgoing",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    heading: "App Settings",
    navitem: [
      {
        id: 6,
        title: "Settings",
        icon: <BiCog />,
        to: "/settings",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 7,
        title: "Payments",
        icon: <GiMoneyStack />,
        to: "/payment",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/payment/incoming",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/payment/outgoing",
        //   },
        // ],
      },
      {
        id: 8,
        title: "Clients",
        icon: <HiOutlineUserGroup />,
        to: "/client",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
    ],
  },
];

export default SidebarMenu;
